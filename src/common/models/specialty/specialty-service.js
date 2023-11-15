define("common/models/specialty/specialty-service", ['../model-factory'], function($__0) {
  "use strict";
  var __moduleName = "common/models/specialty/specialty-service";
  function require(path) {
    return $traceurRuntime.require("common/models/specialty/specialty-service", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  $__0;
  angular.module('op.models.specialty', ['op.model']);
  function courtFactory(model) {
    var specialty = {};
    specialty.find = model.findable('/specialties', false, function(data) {
      if (data._embedded.specialties) {
        return data._embedded.specialties;
      }
    });
    return specialty;
  }
  angular.module('op.models.specialty').factory('specialty', ['model', courtFactory]);
  return {};
});
