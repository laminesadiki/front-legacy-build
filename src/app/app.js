define("app/app", ['common/oo-role-security/oo-role-security', 'common/op-scrollbar/op-scrollbar-directive', 'common/oo-highlight/oo-highlight-filter', './dashboard/dashboard-controller', './Le-Workspace/le-workspace-controller', './auth/auth-module', './users-directory/users-directory-controller', './create-notification/create-notification-controller', './notification-reply/notification-reply-controller', './expertise-details/expertise-details', './create-expertise/create-expertise-controller', './user-form/user-form-controller', 'common/op-validator-mail-directive/op-validator-mail-directive', 'common/op-validator-item-name-directive/op-validator-item-name-directive', 'common/op-search-directive/op-search-directive', 'common/op-dateTimeFormat/op-dateTimeFormat-filter'], function($__0,$__1,$__2,$__3,$__4,$__5,$__6,$__7,$__8,$__9,$__10,$__11,$__12,$__13,$__14,$__15) {
  "use strict";
  var __moduleName = "app/app";
  function require(path) {
    return $traceurRuntime.require("app/app", path);
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
  if (!$__9 || !$__9.__esModule)
    $__9 = {default: $__9};
  if (!$__10 || !$__10.__esModule)
    $__10 = {default: $__10};
  if (!$__11 || !$__11.__esModule)
    $__11 = {default: $__11};
  if (!$__12 || !$__12.__esModule)
    $__12 = {default: $__12};
  if (!$__13 || !$__13.__esModule)
    $__13 = {default: $__13};
  if (!$__14 || !$__14.__esModule)
    $__14 = {default: $__14};
  if (!$__15 || !$__15.__esModule)
    $__15 = {default: $__15};
  $__0;
  $__1;
  $__2;
  $__3;
  $__4;
  $__5;
  $__6;
  $__7;
  $__8;
  $__9;
  $__10;
  $__11;
  $__12;
  $__13;
  $__14;
  $__15;
  angular.module('opalexe', ['app.constants', 'oo.http', 'oo.config', 'oo.locale', 'oo.themes', 'oo-role-security', 'oo.highlight', 'oui.form', 'oui.auth', 'oui.router', 'oui.msg.modal', 'op.dashboard', 'op.leWorkspace', 'op.auth', 'op.usersDirectory', 'op.createNotification', 'op.notificationReply', 'op.expertiseDetails', 'op.scrollbar', 'op.createExpertise', 'op.userForm', 'op.retrieveCertificate', 'op.form.toggle.disable', 'op.validator.mail', 'op.validator.itemName', 'op.search', 'op.dateTimeFormat']).config(function($locationProvider, $httpProvider, $ooHttpProvider, $injector, ouiMsgErrorInterceptorProvider) {
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!');
    $ooHttpProvider.setup({
      jquery: true,
      withCredentials: true
    });
    ouiMsgErrorInterceptorProvider.setHandledCode(401, {errorMsg: 'i18n:op.error.unauthorized'});
    ouiMsgErrorInterceptorProvider.setHandledCode(403, {errorMsg: 'i18n:op.error.forbidden'});
    ouiMsgErrorInterceptorProvider.setHandledCode(500, {errorMsg: 'i18n:op.error.internal'});
    ouiMsgErrorInterceptorProvider.setHandledCode(409, {errorMsg: 'i18n:op.item.error.conflict'});
    $httpProvider.interceptors.push('ouiAuthUnauthorizedInterceptor', 'ouiMsgErrorInterceptor');
    if ($injector.has('$dateParserProvider')) {
      $injector.get('$dateParserProvider').watchLocale(true);
    }
  }).run(function($ouiAuth, $ooConfig, ooRoleSecurity) {
    $ouiAuth.userNameFn(function() {
      return $ooConfig().session.user.firstName + ' ' + $ooConfig().session.user.lastName;
    });
    ooRoleSecurity.role($ooConfig().role);
  }).controller('AppCtrl', function($rootScope, $scope, $ooConfig, $document) {
    var vm = this;
    vm.showHelpPopup = false;
    vm.isOpalexeHelpPresent = !!$ooConfig().tutorialLink;
    $scope.$on('op-personal-info-updated', function(evt, userInfo) {
      $ooConfig('session').user = {
        firstName: userInfo.firstName,
        lastName: userInfo.lastName
      };
    });
    vm.toggleShowHelpPopup = function() {
      vm.showHelpPopup = !vm.showHelpPopup;
    };
    vm.openFaqLink = function() {
      window.open($ooConfig().faqLink, '_blank');
    };
    vm.openUserGuideLink = function() {
      if (!$ooConfig() || !$ooConfig().auth) {
        window.open($ooConfig().genericUserGuideLink, '_blank');
        return;
      }
      switch ($ooConfig('role')) {
        case 'EXPERT':
          window.open($ooConfig().expertUserGuideLink, '_blank');
          break;
        case 'AVENGER':
        case 'CLERK':
        case 'MAGISTRATE':
          window.open($ooConfig().justiceUserGuideLink, '_blank');
          break;
        case 'LAWYER':
          window.open($ooConfig().lawyerUserGuideLink, '_blank');
          break;
        case 'PARTYMEMBER':
          window.open($ooConfig().partiesUserGuideLink, '_blank');
          break;
        default:
          window.open($ooConfig().genericUserGuideLink, '_blank');
      }
    };
    vm.openTutorialLink = function() {
      window.open($ooConfig().tutorialLink, '_blank');
    };
    vm.contactSupport = function() {
      window.open($ooConfig().supportLink, '_blank');
    };
    vm.openTermsOfUseLink = function() {
      window.open($rootScope.getLinkTermsOfUse($ooConfig('role')), '_blank');
    };
    $rootScope.getLinkTermsOfUse = function(role) {
      if (role === 'EXPERT') {
        return 'resources/cgu/expertCGU_fr.pdf';
      } else if (role === 'LAWYER') {
        return 'resources/cgu/avocatCGU_fr.pdf';
      } else {
        return role ? 'resources/cgu/magistratCGU_fr.pdf' : 'resources/cgu/greffierCGU_fr.pdf';
      }
    };
  });
  return {};
});
