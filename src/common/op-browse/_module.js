define("common/op-browse/_module", [], function() {
  "use strict";
  var __moduleName = "common/op-browse/_module";
  function require(path) {
    return $traceurRuntime.require("common/op-browse/_module", path);
  }
  var ngModule = angular.module('op.browse', []);
  return {
    get ngModule() {
      return ngModule;
    },
    __esModule: true
  };
});
