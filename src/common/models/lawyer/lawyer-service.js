define("common/models/lawyer/lawyer-service", ['../model-factory'], function($__0) {
  "use strict";
  var __moduleName = "common/models/lawyer/lawyer-service";
  function require(path) {
    return $traceurRuntime.require("common/models/lawyer/lawyer-service", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  $__0;
  angular.module('op.models.lawyer', ['op.model']);
  function lawyerFactory(model) {
    var lawyer = {};
    lawyer.create = model.creatable('/lawyers');
    lawyer.find = model.findable('/lawyers', true);
    return lawyer;
  }
  angular.module('op.models.lawyer').factory('lawyer', ['model', lawyerFactory]);
  return {};
});
