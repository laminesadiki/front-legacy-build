define("app/expertise-details/safe/folder-modal/folder-modal-controller", ['common/models/expertise/expertise-service', 'common/models/expertise/item-decorator-service'], function($__0,$__1) {
  "use strict";
  var __moduleName = "app/expertise-details/safe/folder-modal/folder-modal-controller";
  function require(path) {
    return $traceurRuntime.require("app/expertise-details/safe/folder-modal/folder-modal-controller", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__1 || !$__1.__esModule)
    $__1 = {default: $__1};
  $__0;
  $__1;
  angular.module('op.expertiseDetails.safe.newFolder', ['oo.i18n', 'oo.config', 'oui.basicModal', 'op.models.expertise', 'op.models.expertise.itemDecorator', 'oui.tooltip', 'op.validator.itemName']);
  var NewFolderCtrl = function NewFolderCtrl($scope, $rootScope, $ouiMsgModal, expertise, ItemDecorator, $timeout) {
    var vm = this;
    $scope.mode;
    $scope.currentItem;
    $scope.parentItem;
    if ($scope.mode === 'CREATE') {
      if (!$scope.parentItem) {
        $ouiMsgModal.show('i18n:common.error', 'i18n:op.safe.noItemError');
        return $scope.closeModal();
      }
      $scope.parentItem = new ItemDecorator($scope.parentItem);
      vm.submit = function() {
        return $scope.closeModal($scope.parentItem.createFolder(vm.folderName));
      };
    }
    if ($scope.mode === 'RENAME') {
      if (!$scope.currentItem) {
        $ouiMsgModal.show('i18n:common.error', 'i18n:op.safe.noItemError');
        return $scope.closeModal();
      }
      $scope.currentItem = new ItemDecorator($scope.currentItem);
      vm.folderName = $scope.currentItem.name;
      vm.submit = function() {
        return $scope.closeModal($scope.currentItem.rename(vm.folderName));
      };
    }
    $timeout(function() {
      $('.l-simple-form-modal-form').find('input[name=name]').focus();
    });
  };
  ($traceurRuntime.createClass)(NewFolderCtrl, {}, {});
  angular.module('op.expertiseDetails.safe.newFolder').controller('NewFolderCtrl', NewFolderCtrl);
  return {};
});
