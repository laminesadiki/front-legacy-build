define("app/Le-Workspace/le-workspace-controller", ['./page-designations/page-designations-controller', './page-expertises/page-expertises-controller', './page-search/page-search-controller', './page-statistics/page-statistics-controller'], function($__0,$__1,$__2,$__3) {
  "use strict";
  var __moduleName = "app/Le-Workspace/le-workspace-controller";
  function require(path) {
    return $traceurRuntime.require("app/Le-Workspace/le-workspace-controller", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__1 || !$__1.__esModule)
    $__1 = {default: $__1};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  if (!$__3 || !$__3.__esModule)
    $__3 = {default: $__3};
  $__0;
  $__1;
  $__2;
  $__3;
  angular.module('op.leWorkspace', ['oo.i18n', 'oo.config', 'oui.basicModal', 'oui.router', 'op.leWorkspace.designations', 'op.leWorkspace.expertises', 'op.leWorkspace.search', 'op.leWorkspace.statistics', 'op.models.me']);
  function LeWorkspaceCtrl($scope, $ooConfig, me, basicModal, _, $ouiRouter, $i18n) {
    var vm = this,
        role = $ooConfig().role;
    if (role === 'EXPERT') {
      vm.actionLabel = $i18n('op.app.dashboard.createExpertise');
    } else if (_.contains(['MAGISTRATE', 'CLERK'], role)) {
      vm.actionLabel = $i18n('op.app.dashboard.createDesignation');
    }
    function updateUser(firstName, lastName) {
      vm.user = {fullName: [firstName, lastName].join(' ')};
    }
    function getUserName() {
      me.info().then(function(info) {
        updateUser(info.data.firstName, info.data.lastName);
        vm.currentUser = info.data;
      });
    }
    function onPersonalInfoUpdated(evt, userInfo) {
      updateUser(userInfo.firstName, userInfo.lastName);
    }
    getUserName();
    $scope.$on('op-personal-info-updated', onPersonalInfoUpdated);
    vm.action = function() {
      if (role === 'EXPERT') {
        basicModal.open('common/template/op-modal-background/op-modal-background.tpl.html', null, {opTemplateContainer: 'app/create-expertise/create-expertise.tpl.html'});
        return;
      }
      if (_.contains(['MAGISTRATE', 'CLERK'], role)) {
        window.location = $ouiRouter.getHomeUrl() + 'Workspace/designations/?sp=sp-create-notification&spp=p_1';
        return;
      }
    };
    vm.viewPersonalInfo = function() {
      $scope.$broadcast('open-personal-info');
    };
    vm.canLogout = function() {
      return vm.currentUser && me.getLogoutHref(vm.currentUser);
    };
    vm.logout = function() {
      me.logout(vm.currentUser);
    };
  }
  angular.module('op.leWorkspace').controller('LeWorkspaceCtrl', LeWorkspaceCtrl);
  return {};
});
