define("common/op-list-selection/op-list-selection-directive", [], function() {
  "use strict";
  var __moduleName = "common/op-list-selection/op-list-selection-directive";
  function require(path) {
    return $traceurRuntime.require("common/op-list-selection/op-list-selection-directive", path);
  }
  angular.module('op.list.selection', ['oo.i18n']);
  function opListSelection() {
    function OpListSelectionCtrl($scope, $rootScope) {
      var vm = this,
          states = {
            full: {
              cls: 'checked',
              toggle: function() {
                states.empty.set();
              },
              set: function() {
                vm.state = states.full;
                $rootScope.$broadcast('op.listSelection.checked');
              }
            },
            partial: {
              cls: 'dashed',
              toggle: function() {
                states.empty.set();
                $rootScope.$broadcast('op.listSelection.unchecked');
              },
              set: function() {
                vm.state = states.partial;
              }
            },
            empty: {
              toggle: function() {
                states.full.set();
              },
              set: function() {
                vm.state = states.empty;
                $rootScope.$broadcast('op.listSelection.unchecked');
              }
            }
          };
      vm.count = 0;
      vm.state = states.empty;
      vm.toggle = function() {
        vm.state.toggle();
      };
      vm.setState = function(stateName) {
        states[stateName].set();
      };
      $scope.$on('op.listSelection.select', function(e, selected) {
        vm.count = selected.selection.length;
        if (!vm.count) {
          return (vm.state = states.empty);
        }
        vm.state = selected.isAllSelected ? states.full : states.partial;
      });
    }
    return {
      restrict: 'AE',
      scope: {inSelection: '='},
      controller: OpListSelectionCtrl,
      controllerAs: 'vm',
      bindToController: true,
      templateUrl: 'common/op-list-selection/op-list-selection-directive.tpl.html'
    };
  }
  angular.module('op.list.selection').directive('opListSelection', opListSelection);
  return {};
});
