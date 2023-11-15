define("common/op-upload-directive/_module", [], function() {
  "use strict";
  var __moduleName = "common/op-upload-directive/_module";
  function require(path) {
    return $traceurRuntime.require("common/op-upload-directive/_module", path);
  }
  var ngModule = angular.module('op.upload', ['oo.i18n', 'oo.config', 'oui.fileIcons', 'oui.msg.modal']);
  return {
    get ngModule() {
      return ngModule;
    },
    __esModule: true
  };
});
