define("common/bytes-filter/bytes-filter", [], function() {
  "use strict";
  var __moduleName = "common/bytes-filter/bytes-filter";
  function require(path) {
    return $traceurRuntime.require("common/bytes-filter/bytes-filter", path);
  }
  angular.module('bytesFilter', []).filter('bytes', function($filter) {
    return function(bytes, precision) {
      var units = ['op.byte', 'op.kbyte', 'op.mbyte', 'op.gbyte', 'op.tbyte', 'op.pbyte'],
          number;
      if (!bytes) {
        return '0 o';
      }
      if (isNaN(parseFloat(bytes)) || !isFinite(bytes)) {
        return '-';
      }
      if (typeof precision === 'undefined') {
        precision = 1;
      }
      number = Math.floor(Math.log(bytes) / Math.log(1024));
      return (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision) + ' ' + $filter('i18n')(units[number]);
    };
  });
  return {};
});
