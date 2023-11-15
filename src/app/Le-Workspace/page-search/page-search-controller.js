define("app/Le-Workspace/page-search/page-search-controller", [], function() {
  "use strict";
  var __moduleName = "app/Le-Workspace/page-search/page-search-controller";
  function require(path) {
    return $traceurRuntime.require("app/Le-Workspace/page-search/page-search-controller", path);
  }
  angular.module('op.leWorkspace.search', []);
  function LeWorkspaceSearchCtrl($scope) {
    $scope.$on('op-expertise-details', function(evt, expertiseId) {
      $scope.openSidePanel('sp-expertise-details', {params: {expertiseId: expertiseId}});
    });
    $scope.$on('op-expertise-details-page', function(evt, expertiseId, openPage) {
      $scope.openSidePanel('sp-expertise-details', {params: {
          expertiseId: expertiseId,
          openPage: openPage
        }});
    });
  }
  angular.module('op.leWorkspace.search').controller('LeWorkspaceSearchCtrl', LeWorkspaceSearchCtrl);
  return {};
});
