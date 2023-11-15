define("common/models/court/court-service", ['../model-factory'], function($__0) {
  "use strict";
  var __moduleName = "common/models/court/court-service";
  function require(path) {
    return $traceurRuntime.require("common/models/court/court-service", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  $__0;
  angular.module('op.models.court', ['op.model']);
  function courtFactory(model) {
    var court = {};
    court.find = model.findable('/courts', false, function(data) {
      if (data._embedded.courts) {
        return data._embedded.courts;
      }
      if (data._embedded.specialties) {
        return data._embedded.specialties;
      }
    });
    return court;
  }
  angular.module('op.models.court').factory('court', ['model', courtFactory]);
  return {};
});
