define("common/oo-highlight/oo-highlight-filter", [], function() {
  "use strict";
  var __moduleName = "common/oo-highlight/oo-highlight-filter";
  function require(path) {
    return $traceurRuntime.require("common/oo-highlight/oo-highlight-filter", path);
  }
  angular.module('oo.highlight', []);
  angular.module('oo.highlight').filter('highlight', function($filter) {
    return function(str, terms) {
      if (!terms) {
        return str;
      }
      if (angular.isArray(terms)) {
        for (var i = 0; i < terms.length; ++i) {
          terms[i] = terms[i] || '';
        }
      }
      return $filter('searchWithDiacritics')(str, terms, {ignoreCase: true}, 'escapeHtml', 'match:strProcess:<span class=\'oo-highlight\'>$&</span>');
    };
  });
  ;
  return {};
});
