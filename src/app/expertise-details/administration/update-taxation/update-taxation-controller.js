define("app/expertise-details/administration/update-taxation/update-taxation-controller", ['common/models/expertise/expertise-service'], function($__0) {
  "use strict";
  var __moduleName = "app/expertise-details/administration/update-taxation/update-taxation-controller";
  function require(path) {
    return $traceurRuntime.require("app/expertise-details/administration/update-taxation/update-taxation-controller", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  $__0;
  angular.module('op.expertiseDetails.administration.updateTaxation', ['oo.i18n', 'oo.config', 'oui.basicModal', 'oui.datepicker', 'op.models.expertise']);
  function UpdateTaxationCtrl($scope, $rootScope, $ouiMsgModal, expertise) {
    var vm = this;
    function loadError() {
      $ouiMsgModal.show('i18n:common.error', 'i18n:op.loadError');
    }
    vm.submit = function() {
      vm.expertise.updateTaxation(vm.taxationDate).then(function() {
        $rootScope.$broadcast('op-expertise-taxation-date-changed');
        $scope.closeModal(true);
      }, loadError);
    };
    try {
      expertise.find($scope.expertiseId).then(function(currentExpertise) {
        vm.expertise = currentExpertise;
        vm.taxationDate = vm.expertise.taxationDate ? new Date(vm.expertise.taxationDate) : new Date();
      }, function() {
        $scope.close();
        loadError();
      });
    } catch (e) {
      $scope.closeModal();
      loadError();
    }
  }
  angular.module('op.expertiseDetails.administration.updateTaxation').controller('UpdateTaxationCtrl', UpdateTaxationCtrl);
  return {};
});
