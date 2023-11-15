define("app/expertise-details/administration/add-sapitor/add-sapitor-controller", [], function() {
  "use strict";
  var __moduleName = "app/expertise-details/administration/add-sapitor/add-sapitor-controller";
  function require(path) {
    return $traceurRuntime.require("app/expertise-details/administration/add-sapitor/add-sapitor-controller", path);
  }
  angular.module('op.expertiseDetails.administration.addSapitor', ['oo.i18n', 'oo.config', 'oui.basicModal']);
  function AddSapitorCtrl($scope) {
    var vm = this;
    vm.submit = function() {
      $scope.closeModal(true);
    };
  }
  angular.module('op.expertiseDetails.administration.addSapitor').controller('AddSapitorCtrl', AddSapitorCtrl);
  return {};
});
