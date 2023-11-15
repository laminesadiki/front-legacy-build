define("common/op-collapse/op-collapse-directive", [], function() {
  "use strict";
  var __moduleName = "common/op-collapse/op-collapse-directive";
  function require(path) {
    return $traceurRuntime.require("common/op-collapse/op-collapse-directive", path);
  }
  angular.module('op.collapse', []);
  angular.module('op.collapse').directive('opCollapse', function() {
    return {
      restrict: 'AE',
      scope: {opCollapseHeader: '@'},
      controller: function() {
        var vm = this;
        vm.title = vm.opCollapseHeader;
      },
      controllerAs: 'vm',
      bindToController: true,
      transclude: true,
      replace: true,
      templateUrl: 'common/op-collapse/op-collapse-directive.tpl.html'
    };
  });
  return {};
});
