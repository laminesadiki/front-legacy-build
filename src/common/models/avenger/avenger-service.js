define("common/models/avenger/avenger-service", ['../model-factory'], function($__0) {
  "use strict";
  var __moduleName = "common/models/avenger/avenger-service";
  function require(path) {
    return $traceurRuntime.require("common/models/avenger/avenger-service", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  $__0;
  angular.module('op.models.avenger', ['op.model']);
  function avengerFactory(model) {
    var avenger = {};
    avenger.create = model.creatable('/avengers');
    avenger.find = model.findable('/avengers', true);
    return avenger;
  }
  angular.module('op.models.avenger').factory('avenger', ['model', avengerFactory]);
  return {};
});
