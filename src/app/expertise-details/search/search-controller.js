define("app/expertise-details/search/search-controller", ['common/models/expertise/expertise-service'], function($__0) {
  "use strict";
  var __moduleName = "app/expertise-details/search/search-controller";
  function require(path) {
    return $traceurRuntime.require("app/expertise-details/search/search-controller", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  $__0;
  angular.module('op.expertiseDetails.search', ['op.models.expertise']);
  function SearchCtrl($scope, expertise) {
    var vm = this;
    vm.expertiseId = $scope.getSidePanelParams('expertiseId');
    function initSearch() {
      try {
        expertise.find(vm.expertiseId).then(function(currentExpertise) {
          vm.currentExpertise = currentExpertise;
          vm.expertiseName = currentExpertise.name;
        }, function() {
          $scope.close();
        });
      } catch (e) {
        $scope.close();
      }
    }
    initSearch();
  }
  angular.module('op.expertiseDetails.search').controller('SearchCtrl', SearchCtrl);
  return {};
});
