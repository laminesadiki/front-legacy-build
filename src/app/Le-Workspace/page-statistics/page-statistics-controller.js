define("app/Le-Workspace/page-statistics/page-statistics-controller", [], function() {
  "use strict";
  var __moduleName = "app/Le-Workspace/page-statistics/page-statistics-controller";
  function require(path) {
    return $traceurRuntime.require("app/Le-Workspace/page-statistics/page-statistics-controller", path);
  }
  angular.module('op.leWorkspace.statistics', []);
  function WorkspaceStatisticsCtrl($ooHttp) {
    this.downloadStatistics = function() {
      window.open($ooHttp.apiRoot() + '/me/stats/download', '_blank');
    };
  }
  angular.module('op.leWorkspace.statistics').controller('WorkspaceStatisticsCtrl', WorkspaceStatisticsCtrl);
  return {};
});
