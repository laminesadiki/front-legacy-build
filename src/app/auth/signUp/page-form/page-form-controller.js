define("app/auth/signUp/page-form/page-form-controller", ['common/op-country-list/country-list-service', 'common/op-form-toggle-disable/op-form-toggle-disable-directive', 'common/op-validator-mail-directive/op-validator-mail-directive', 'common/models/avenger/avenger-service', 'common/models/expert/expert-service', 'common/models/party/party-service', 'common/models/lawyer/lawyer-service', 'common/models/court/court-service', 'common/models/specialty/specialty-service'], function($__0,$__1,$__2,$__3,$__4,$__5,$__6,$__7,$__8) {
  "use strict";
  var __moduleName = "app/auth/signUp/page-form/page-form-controller";
  function require(path) {
    return $traceurRuntime.require("app/auth/signUp/page-form/page-form-controller", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__1 || !$__1.__esModule)
    $__1 = {default: $__1};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  if (!$__3 || !$__3.__esModule)
    $__3 = {default: $__3};
  if (!$__4 || !$__4.__esModule)
    $__4 = {default: $__4};
  if (!$__5 || !$__5.__esModule)
    $__5 = {default: $__5};
  if (!$__6 || !$__6.__esModule)
    $__6 = {default: $__6};
  if (!$__7 || !$__7.__esModule)
    $__7 = {default: $__7};
  if (!$__8 || !$__8.__esModule)
    $__8 = {default: $__8};
  $__0;
  $__1;
  $__2;
  $__3;
  $__4;
  $__5;
  $__6;
  $__7;
  $__8;
  angular.module('op.auth.signup.form', ['oo.i18n', 'oo.config', 'op.countryList', 'op.form.toggle.disable', 'op.validator.mail', 'op.models.avenger', 'op.models.expert', 'op.models.party', 'op.models.lawyer', 'op.models.court', 'op.models.specialty']);
  var FORM_INIT_VALUE = {
    nationalList: false,
    CguOk: false,
    role: undefined,
    firstName: '',
    address: '',
    streetAddress: '',
    city: '',
    postalCode: '',
    lastName: '',
    email: '',
    phone: '',
    mobilePhone: ''
  };
  function formatCertificateDN(rawDN) {
    if (typeof rawDN !== 'string') {
      return;
    }
    return '(' + rawDN.replace(/,/g, ',<br>').trim() + ')';
  }
  function SignUpFormCtrl($scope, $rootScope, $filter, $i18n, $ooConfig, countryList, court, specialty, expert, avenger, party, lawyer) {
    var vm = this,
        role = $ooConfig('role'),
        authentication = $ooConfig('authentication'),
        session = $ooConfig('session');
    vm.role = role;
    vm.newAccount = {};
    function initialize() {
      angular.extend(vm.newAccount, FORM_INIT_VALUE);
      angular.extend(vm.newAccount, session ? (session.user || {}) : {});
      if (role === 'EXPERT') {
        _.each(vm.specialties, (function(specialty) {
          return specialty.selected = false;
        }));
        vm.selectCourtValue = $filter('i18n')('op.courtSelectionHolder');
        vm.newAccount.country = countryList[0];
      }
    }
    initialize();
    vm.helpText = role === 'EXPERT' ? $i18n('op.signup.form.infoBoxExpert') : $i18n('op.signup.form.infoBoxOther');
    vm.phoneNumberPattern = /^(0|(?:00[ .-]?|\+)\d{1,3}[ .-]?)[1-9]([ .-]?)(\d\d\2){3}\d\d$/;
    if (authentication.mode === 'CERTIFICATE') {
      vm.certificateSubjectDn = formatCertificateDN(authentication.certificateSubjectDn);
      vm.dnFromCertificate = vm.certificateSubjectDn.match(/CN=([^,]+)/)[0];
    } else {
      vm.cnbfId = authentication.cnbfId;
    }
    vm.getTermsOfUseLink = function() {
      return $rootScope.getLinkTermsOfUse($ooConfig('role'));
    };
    vm.isFormDisabled = function() {
      var commonValidation = vm.signUpForm.$valid && vm.newAccount.CguOk;
      if (role === 'EXPERT') {
        vm.isSpecialtiesSelected = _.some(vm.specialties, (function(specialty) {
          return specialty.selected;
        }));
        return !vm.newAccount.country.id || !vm.selectCourtValue.id || !vm.isSpecialtiesSelected || !commonValidation;
      } else if (role === 'JUSTICE') {
        return !commonValidation || !vm.newAccount.role;
      }
      return !commonValidation;
    };
    vm.verifySignUp = function() {
      var specialties = [],
          userInfo;
      $rootScope.userInfo = {};
      function userCreated() {
        _.extend($rootScope.userInfo, userInfo);
        $rootScope.$broadcast('go-to', 'REG_OK');
      }
      if (!vm.isFormDisabled()) {
        userInfo = {
          firstName: vm.newAccount.firstName,
          lastName: vm.newAccount.lastName,
          phoneNumber: vm.newAccount.phone || undefined,
          mobileNumber: vm.newAccount.mobilePhone || undefined,
          address: vm.newAccount.address,
          email: vm.newAccount.email
        };
        var resultPromise;
        switch (role) {
          case 'EXPERT':
            vm.specialties && $.each(vm.specialties, function(index, value) {
              value.selected && specialties.push(value.id);
            });
            resultPromise = expert.create(angular.extend(userInfo, {
              courtId: vm.selectCourtValue.id,
              specialtyIds: specialties,
              onNationalList: vm.newAccount.nationalList,
              address: {
                streetAddress: vm.newAccount.streetAddress,
                city: vm.newAccount.city,
                postalCode: vm.newAccount.postalCode,
                countryCode: vm.newAccount.country.id
              },
              hasAcceptedTermsOfUse: vm.newAccount.CguOk
            }));
            break;
          case 'JUSTICE':
            resultPromise = avenger.create(angular.extend(userInfo, {avengerProfile: ($rootScope.userInfo._justiceRole = vm.newAccount.role)}));
            break;
          case 'LAWYER':
            resultPromise = lawyer.create(userInfo);
            break;
          case 'PARTY':
            resultPromise = party.create(userInfo);
            break;
          default:
            $ouiMsgModal.show('i18n:common.error', 'i18n:op.signup.form.certificateError');
            break;
        }
        return resultPromise && resultPromise.then(userCreated);
      }
    };
    vm.reinitialize = (function() {
      return initialize();
    });
    if (role === 'EXPERT') {
      court.find().then((function(courts) {
        return vm.courts = courts;
      }));
      specialty.find().then((function(specialties) {
        return vm.specialties = specialties;
      }));
      vm.countries = countryList;
    }
  }
  angular.module('op.auth.signup.form').controller('SignUpFormCtrl', SignUpFormCtrl);
  return {};
});
