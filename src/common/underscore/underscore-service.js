define("common/underscore/underscore-service", ['underscore', './mixin'], function($__0,$__2) {
  "use strict";
  var __moduleName = "common/underscore/underscore-service";
  function require(path) {
    return $traceurRuntime.require("common/underscore/underscore-service", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  var _ = $__0.default;
  $__2;
  angular.module('op.underscore', []);
  angular.module('op.underscore').value('_', _);
  return {};
});
