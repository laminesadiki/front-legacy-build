define("common/models/expert/expert-service", ['../model-factory'], function($__0) {
  "use strict";
  var __moduleName = "common/models/expert/expert-service";
  function require(path) {
    return $traceurRuntime.require("common/models/expert/expert-service", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  $__0;
  angular.module('op.models.expert', ['op.model']);
  function expertFactory(model) {
    var expert = {};
    expert.create = model.creatable('/experts');
    expert.find = model.findable('/experts', true);
    expert.search = function searchExperts(criteria) {
      var q = [];
      angular.forEach(criteria, function(value, key) {
        if (value) {
          q.push(key + '=' + window.escape(value));
        }
      });
      return model.findable('/experts?' + q.join('&'), true);
    };
    return expert;
  }
  angular.module('op.models.expert').factory('expert', ['model', expertFactory]);
  return {};
});
