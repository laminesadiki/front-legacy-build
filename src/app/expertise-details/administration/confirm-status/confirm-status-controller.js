define("app/expertise-details/administration/confirm-status/confirm-status-controller", [], function() {
  "use strict";
  var __moduleName = "app/expertise-details/administration/confirm-status/confirm-status-controller";
  function require(path) {
    return $traceurRuntime.require("app/expertise-details/administration/confirm-status/confirm-status-controller", path);
  }
  angular.module('op.expertiseDetails.administration.confirmStatus', ['oo.i18n', 'oo.config', 'oui.basicModal']);
  function ConfirmStatusCtrl($scope) {
    var vm = this;
    vm.transition = $scope.transition;
  }
  angular.module('op.expertiseDetails.administration.confirmStatus').controller('ConfirmStatusCtrl', ConfirmStatusCtrl);
  return {};
});
