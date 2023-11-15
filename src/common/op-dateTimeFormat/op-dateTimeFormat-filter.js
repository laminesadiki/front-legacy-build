define("common/op-dateTimeFormat/op-dateTimeFormat-filter", [], function() {
  "use strict";
  var __moduleName = "common/op-dateTimeFormat/op-dateTimeFormat-filter";
  function require(path) {
    return $traceurRuntime.require("common/op-dateTimeFormat/op-dateTimeFormat-filter", path);
  }
  angular.module('op.dateTimeFormat', []);
  angular.module('op.dateTimeFormat').filter('dateTimeFormat', function($filter) {
    return function(targetDate) {
      return $filter('date')(targetDate, 'dd MMM yyyy HH:mm');
    };
  });
  ;
  return {};
});
