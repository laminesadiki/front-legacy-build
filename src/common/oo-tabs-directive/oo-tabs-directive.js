define("common/oo-tabs-directive/oo-tabs-directive", [], function() {
  "use strict";
  var __moduleName = "common/oo-tabs-directive/oo-tabs-directive";
  function require(path) {
    return $traceurRuntime.require("common/oo-tabs-directive/oo-tabs-directive", path);
  }
  angular.module('oo.tabs', []);
  function TabsContainerCtrl() {
    var vm = this;
    vm.tabsArray = [];
    vm.select = function(tab) {
      angular.forEach(vm.tabsArray, function(tab) {
        tab.selected = false;
      });
      tab.selected = true;
    };
    vm.addTab = function(tab) {
      if (!vm.tabsArray.length) {
        vm.select(tab);
      }
      vm.tabsArray.push(tab);
    };
  }
  function tabItemLink(scope, element, attrs, tabsContainer) {
    tabsContainer.addTab(scope);
  }
  function tabs() {
    return {
      restrict: 'E',
      controller: TabsContainerCtrl,
      controllerAs: 'tabsContainerCtrl',
      bindToController: true,
      transclude: true,
      replace: true,
      templateUrl: 'common/oo-tabs-directive/oo-tabs-directive.tpl.html'
    };
  }
  function tabItem() {
    return {
      require: '^tabs',
      restrict: 'E',
      replace: true,
      scope: {titleTab: '@'},
      transclude: true,
      link: tabItemLink,
      templateUrl: 'common/oo-tabs-directive/oo-tab-directive.tpl.html'
    };
  }
  angular.module('oo.tabs').directive('tabs', tabs).directive('tabItem', tabItem);
  return {};
});
