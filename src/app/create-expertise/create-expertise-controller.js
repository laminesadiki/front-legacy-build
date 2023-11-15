define("app/create-expertise/create-expertise-controller", ['common/models/expertise/expertise-service', 'common/op-upload-directive/op-upload'], function($__0,$__1) {
  "use strict";
  var __moduleName = "app/create-expertise/create-expertise-controller";
  function require(path) {
    return $traceurRuntime.require("app/create-expertise/create-expertise-controller", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__1 || !$__1.__esModule)
    $__1 = {default: $__1};
  $__0;
  $__1;
  angular.module('op.createExpertise', ['oo.i18n', 'oo.config', 'op.models.expertise', 'oui.msg.modal', 'op.upload']);
  function CreateExpertiseCtrl($scope, $ooConfig, expertise, $ouiMsgModal, $rootScope) {
    var vm = this,
        user = $ooConfig('session').user;
    function loadError() {
      $ouiMsgModal.show('i18n:common.error', 'i18n:op.loadError');
    }
    function renameExpertise() {
      return expertise.rename($scope.expertiseId, vm.notifInputValues);
    }
    function createExpertise() {
      return expertise.create(vm.notifInputValues);
    }
    vm.submit = function() {
      return ($scope.expertiseId ? renameExpertise() : createExpertise()).then(function() {
        $rootScope.$broadcast('op-list-updated');
        $rootScope.$broadcast('op-expertise-name-changed');
        $scope.closeModal(true);
      });
    };
    vm.notifInputValues = {};
    vm.notifInputValues.nameExpert = user.lastName;
    if ($scope.expertiseId) {
      expertise.name($scope.expertiseId).then(function(name) {
        vm.notifInputValues = name.data;
        vm.notifInputValues.nameExpert = vm.notifInputValues.nameExpert || user.lastName;
      }, loadError);
    }
  }
  angular.module('op.createExpertise').controller('CreateExpertiseCtrl', CreateExpertiseCtrl);
  return {};
});
