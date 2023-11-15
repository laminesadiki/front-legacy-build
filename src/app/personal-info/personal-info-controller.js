define("app/personal-info/personal-info-controller", ['common/models/me/me-service', 'common/op-country-list/country-list-service'], function($__0,$__1) {
  "use strict";
  var __moduleName = "app/personal-info/personal-info-controller";
  function require(path) {
    return $traceurRuntime.require("app/personal-info/personal-info-controller", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__1 || !$__1.__esModule)
    $__1 = {default: $__1};
  $__0;
  $__1;
  angular.module('op.personal.info', ['oo.i18n', 'oo.config', 'op.models.me', 'op.models.court', 'op.models.specialty', 'oui.msg.modal', 'op.countryList']);
  function PersonalInfoCtrl($scope, $rootScope, $i18n, $filter, $ooConfig, me, _, specialty, $ouiMsgModal, court, countryList) {
    var vm = this,
        userRole = $ooConfig('role');
    vm.mailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    vm.phoneNumberPattern = /^(0|(?:00[ .-]?|\+)\d{1,3}[ .-]?)[1-9]([ .-]?)(\d\d\2){3}\d\d$/;
    vm.modifyInformationMode = false;
    vm.userRole = userRole;
    $scope.specialty = [];
    $scope.specialty.selected = [];
    $scope.countries = [{
      id: 'FR',
      name: 'France'
    }, {
      id: 'MQ',
      name: 'Martinique'
    }];
    function loadError() {
      $ouiMsgModal.show('i18n:common.error', 'i18n:op.loadError');
    }
    function formatCertificateDN(rawDN) {
      if (typeof rawDN !== 'string') {
        return;
      }
      return rawDN.replace(/,/g, ',\n').trim();
    }
    function getInfoPerso() {
      me.info().then(function(info) {
        vm.currentUser = info.data;
        if (userRole === 'MAGISTRATE' || userRole === 'CLERK') {
          vm.avengerRole = (vm.currentUser.role === 'MAGISTRATE' ? true : false);
          vm.subscribeToPartyNotifications = vm.currentUser.subscribeToPartyNotifications;
        }
        if (userRole === 'EXPERT') {
          court.find().then(function(courts) {
            vm.courts = courts;
            courts.filter((function(value) {
              return value.name === vm.currentUser._embedded.court.name;
            })).forEach((function(value, index) {
              vm.indexOptionCourt = index;
              vm.currentUser.selectCourtValue = value;
            }));
          });
          specialty.find().then(function(specialties) {
            vm.specialties = specialties;
            var indexSpecialtiesSelected = _.pluck(vm.currentUser._embedded.specialties, 'id');
            vm.currentUser.specialtyIds = indexSpecialtiesSelected;
            vm.specialties.forEach(function(value) {
              value.selected = _.contains(indexSpecialtiesSelected, value.id);
            });
          });
          vm.countries = countryList;
          var dataAddress = info.data.address;
          var country = _.where(countryList, {id: dataAddress.countryCode});
          vm.currentUser.country = country[0];
          vm.expertAddress = dataAddress.streetAddress + ', ' + dataAddress.postalCode + ' ' + dataAddress.city + ', ' + $i18n(country[0].label);
        }
        vm.currentUser.activeAuthMode = vm.currentUser.authModes[0];
        if (vm.currentUser.activeAuthMode.name === 'CERTIFICATE') {
          vm.currentUser.certificates = vm.currentUser.activeAuthMode.principals.certificates;
          vm.currentUser.certificates.forEach(function(value) {
            value.subjectCn = value.subjectDn.match(/CN=([^,]+)/)[0];
            value.validityEnd = $filter('date')(value.validUntil, 'dd/MM/yyyy');
            value.shortenInfoCertif = value.subjectCn + ', ' + (value.serialNb ? $i18n('op.personal.info.certificate.serialNb') + value.serialNb + ', ' : '') + $i18n('op.personal.info.certificate.validityEnd') + value.validityEnd;
            value.subjectDnCertif = formatCertificateDN(value.subjectDn) + (value.serialNb ? ',\n' + $i18n('op.personal.info.certificate.serialNb') + value.serialNb : '') + ',\n' + $i18n('op.personal.info.certificate.validityEnd') + value.validityEnd;
          });
        } else if (vm.currentUser.activeAuthMode.name === 'SAML_CNBF') {
          vm.currentUser.cnbfId = vm.currentUser.activeAuthMode.principals.cnbfId;
        }
      }, function() {
        loadError();
        $scope.close();
      });
    }
    vm.modifyPersonalInfo = function() {
      vm.modifyInformationMode = true;
      vm.currentUserModify = JSON.parse(JSON.stringify(vm.currentUser));
    };
    vm.isFormInvalid = function() {
      if (!vm.modifyInformationMode) {
        return;
      }
      if (userRole !== 'EXPERT') {
        return !vm.userForm.$valid;
      }
      vm.isSpecialtiesSelected = vm.specialties.some((function(specialty) {
        return specialty.selected;
      }));
      return !vm.currentUser.selectCourtValue.id || !vm.isSpecialtiesSelected || !vm.userForm.$valid;
    };
    vm.deleteCertificate = function(certificate, index) {
      $ouiMsgModal.show('i18n:op.personal.info.delete.certificate.confirm.title', $i18n('op.personal.info.delete.certificate.confirm.msg', [certificate.subjectCn, certificate.serialNb, certificate.validityEnd]), {
        closable: false,
        iconName: 'alert-circle',
        cls: 'light-modal',
        buttons: [{
          text: 'i18n:common.yes',
          cls: 'op-btn-purple',
          onClick: function() {
            try {
              me.removeCertificate(certificate).then((function() {
                return vm.currentUser.certificates.splice(index, 1);
              }), (function() {
                return $ouiMsgModal.show('i18n:common.error', 'i18n:op.loadError');
              }));
              $ouiMsgModal.hide();
            } catch (e) {
              return $ouiMsgModal.show('i18n:common.error', 'i18n:op.loadError');
            }
          }
        }, {
          text: 'i18n:common.no',
          cls: 'op-btn-gray',
          onClick: $ouiMsgModal.hide
        }]
      });
    };
    vm.sendMailNewCertificate = function() {
      return me.addCertificate(vm.currentUser).then((function() {
        $ouiMsgModal.show($i18n('op.personal.info.certificate.add.title', [vm.modifyInformationMode ? vm.currentUserModify.email : vm.currentUser.email]), {
          msg: $i18n('op.personal.info.certificate.add.message'),
          closable: false,
          iconName: 'validate-circle',
          cls: 'light-modal light-modal-title'
        });
      }), (function() {
        return $ouiMsgModal.show('i18n:common.error', 'i18n:op.loadError');
      }));
    };
    function comparePersonalInfo() {
      var isEqualKeys = ['address', 'depositeNotification', 'email', 'firstName', 'lastName', 'mobileNumber', 'onNationalList', 'phoneNumber', 'subscribeToPartyNotifications'].every(function(value) {
        return vm.currentUser[value] === vm.currentUserModify[value];
      });
      if (userRole === 'EXPERT') {
        return isEqualKeys && [vm.currentUser.selectCourtValue.id === vm.currentUserModify.selectCourtValue.id, vm.currentUser.specialtyIds.length === vm.currentUserModify.specialtyIds.length, !_.difference(vm.currentUser.specialtyIds, vm.currentUserModify.specialtyIds).length].every(function(value) {
          return value;
        });
      }
      return isEqualKeys;
    }
    vm.cancel = function() {
      vm.modifyInformationMode = false;
      vm.currentUserModify = JSON.parse(JSON.stringify(vm.currentUser));
      if (userRole === 'EXPERT') {
        vm.specialties.forEach(function(value) {
          value.selected = _.contains(vm.currentUser.specialtyIds, value.id);
        });
      }
    };
    vm.validate = function() {
      if (userRole === 'EXPERT') {
        vm.currentUserModify.specialtyIds = vm.specialties.filter((function(specialty) {
          return specialty.selected;
        })).map((function(specialty) {
          return specialty.id;
        }));
      }
      if (comparePersonalInfo()) {
        return vm.cancel();
      }
      var userInfo = {};
      ['firstName', 'lastName', 'email', 'phoneNumber', 'mobileNumber', 'address'].reduce(function(uI, e) {
        uI[e] = vm.currentUserModify[e];
        return uI;
      }, userInfo);
      if (userRole === 'MAGISTRATE' || userRole === 'CLERK') {
        userInfo.depositeNotification = vm.currentUserModify.depositeNotification;
        userInfo.role = userRole;
        userInfo.subscribeToPartyNotifications = vm.currentUserModify.subscribeToPartyNotifications;
      } else if (userRole === 'EXPERT') {
        userInfo.onNationalList = vm.currentUserModify.onNationalList;
        userInfo.depositeNotification = vm.currentUserModify.depositeNotification;
        userInfo.courtId = vm.currentUserModify.selectCourtValue.id;
        userInfo.specialtyIds = vm.currentUserModify.specialtyIds;
        userInfo.address = {
          streetAddress: vm.currentUserModify.address.streetAddress,
          city: vm.currentUserModify.address.city,
          postalCode: vm.currentUserModify.address.postalCode,
          countryCode: vm.currentUserModify.country.id
        };
      } else if (userRole === 'LAWYER') {
        userInfo.depositeNotification = vm.currentUserModify.depositeNotification;
      }
      return me.update(userInfo).then(function() {
        vm.modifyInformationMode = false;
        getInfoPerso();
        $rootScope.$broadcast('op-personal-info-updated', userInfo);
      }, loadError);
    };
    getInfoPerso();
  }
  angular.module('op.personal.info').controller('PersonalInfoCtrl', PersonalInfoCtrl);
  return {};
});
