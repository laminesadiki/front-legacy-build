define("common/oo-ngenter-directive/oo-ngenter-directive", [], function() {
  "use strict";
  var __moduleName = "common/oo-ngenter-directive/oo-ngenter-directive";
  function require(path) {
    return $traceurRuntime.require("common/oo-ngenter-directive/oo-ngenter-directive", path);
  }
  angular.module('oo.keyEnter', []);
  function keyEnter() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.bind('keypress', function(event) {
          if (event.which === 13) {
            scope.$apply(function() {
              scope.$eval(attrs.keyEnter);
            });
            event.preventDefault();
          }
        });
      }
    };
  }
  angular.module('oo.keyEnter').directive('keyEnter', keyEnter);
  return {};
});
