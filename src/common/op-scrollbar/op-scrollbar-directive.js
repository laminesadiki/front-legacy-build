define("common/op-scrollbar/op-scrollbar-directive", [], function() {
  "use strict";
  var __moduleName = "common/op-scrollbar/op-scrollbar-directive";
  function require(path) {
    return $traceurRuntime.require("common/op-scrollbar/op-scrollbar-directive", path);
  }
  angular.module('op.scrollbar', ['ngTinyScrollbar']);
  function opScrollBarDirective($timeout) {
    return {
      restrict: 'A',
      require: 'scrollbar',
      scope: {opScrollbar: '=?'},
      link: function($scope, element, attrs, scrollbar) {
        $scope.opScrollbar && $scope.$watch('opScrollbar', function() {
          $timeout(function() {
            scrollbar.update();
          });
        });
        $scope.$on('op.scroll.update', function() {
          $timeout(function() {
            scrollbar.update();
          });
        });
      }
    };
  }
  angular.module('op.scrollbar').directive('opScrollbar', opScrollBarDirective);
  return {};
});
