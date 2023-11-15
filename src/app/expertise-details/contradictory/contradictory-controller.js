define("app/expertise-details/contradictory/contradictory-controller", ['common/models/expertise/expertise-service'], function($__0) {
  "use strict";
  var __moduleName = "app/expertise-details/contradictory/contradictory-controller";
  function require(path) {
    return $traceurRuntime.require("app/expertise-details/contradictory/contradictory-controller", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  $__0;
  angular.module('op.expertiseDetails.contradictory', ['oo.i18n', 'op.models.expertise', 'oui.fileIcons', 'oo.http']);
  var ContradictoryCtrl = function ContradictoryCtrl($scope, expertise, $fileIcons, _, $ooHttp, $i18n, $element) {
    var vm = this,
        expertiseId = $scope.getSidePanelParams('expertiseId');
    vm.currentExpertise;
    vm.displayState = 'loading';
    vm.contradictoryLists;
    function itemSort(list, element, isAsc) {
      return _(list).chain().sortBy(element).tap(function(s) {
        !isAsc && s.reverse();
      }).value();
    }
    function _sort(item, isAsc) {
      vm.contradictoryLists && (vm.contradictoryLists.seen = itemSort(vm.contradictoryLists.seen, item, isAsc));
      vm.contradictoryLists && (vm.contradictoryLists.unseen = itemSort(vm.contradictoryLists.unseen, item, isAsc));
    }
    vm.sorts = [{
      name: 'name',
      text: 'i18n:op.item.fileName',
      sort: function(isAsc) {
        _sort('fileName', isAsc);
      }
    }, {
      name: 'date',
      text: 'i18n:op.item.depositeDate',
      sort: function(isAsc) {
        _sort('uploadedDate', isAsc);
      }
    }, {
      name: 'depositary',
      text: 'i18n:op.item.depositaryName',
      sort: function(isAsc) {
        _sort('depositaryName', isAsc);
      }
    }, {
      name: 'directory',
      text: 'i18n:op.contradictory.parent',
      sort: function(isAsc) {
        _sort('parentName', isAsc);
      }
    }];
    vm.currentSort = vm.sorts[0];
    vm.sortAsc = true;
    $scope.$watchGroup([function() {
      return vm.contradictoryLists;
    }, function() {
      return vm.sortName;
    }, function() {
      return vm.sortAsc;
    }], function() {
      vm.currentSort && vm.currentSort.sort(vm.sortAsc);
    });
    $scope.$watch(function() {
      return $element.parents('.oo-sp-page').scope().currentPage.name;
    }, function(name) {
      name.match('contradictory') && reloadContradictory();
    });
    vm.getIcon = function(filename) {
      return $fileIcons.fileIconPath(filename, 32);
    };
    vm.getRole = function(enumRole) {
      return ("(" + $i18n('op.' + enumRole.toLowerCase()) + ")");
    };
    vm.contradictoryDetails = function(item) {
      try {
        $ooHttp.get(item._links.self.href).then((function(item) {
          $scope.openSidePanel('sp-contradictory-details', {params: {item: item.data}});
        }));
      } catch (e) {}
    };
    function reloadContradictory() {
      expertise.find(expertiseId).then((function(e) {
        vm.currentExpertise = e;
        try {
          vm.currentExpertise.contradictory().then((function(c) {
            vm.contradictoryLists = c.data._embedded;
            vm.displayState = 'ready';
          }));
        } catch (err) {
          $scope.close();
        }
      }), (function() {
        $scope.close();
      }));
    }
  };
  ($traceurRuntime.createClass)(ContradictoryCtrl, {}, {});
  angular.module('op.expertiseDetails.contradictory').controller('ContradictoryCtrl', ContradictoryCtrl);
  return {};
});
