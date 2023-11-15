define("app/Le-Workspace/page-expertises/page-expertises-controller", ['common/models/expertise/expertise-service', 'common/oo-tabs-directive/oo-tabs-directive'], function($__0,$__1) {
  "use strict";
  var __moduleName = "app/Le-Workspace/page-expertises/page-expertises-controller";
  function require(path) {
    return $traceurRuntime.require("app/Le-Workspace/page-expertises/page-expertises-controller", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__1 || !$__1.__esModule)
    $__1 = {default: $__1};
  $__0;
  $__1;
  angular.module('op.leWorkspace.expertises', ['oo.i18n', 'oo.config', 'oui.tooltip', 'op.models.expertise', 'oui.mouseover', 'lrInfiniteScroll', 'oo.tabs']);
  function leWorkspaceExpertisesActions(profile, vm, $scope, expertise, role) {
    var launchSearch;
    if ((role === 'EXPERT' && profile === 'NONE') || (role !== 'EXPERT' && profile !== 'NONE')) {
      return;
    }
    launchSearch = function() {
      vm.searchLaunchedFlag = true;
      vm.expertises = [];
      expertise.updateSearchCriteria({profile: profile});
      vm.pagePromise = expertise.search().next();
      vm.pagePromise.then(function(page) {
        page && (vm.expertises = vm.expertises.concat(page.expertises));
        vm.searchLaunchedFlag = false;
      });
    };
    vm.scrollHandler = function() {
      if (!vm.pagePromise) {
        return;
      }
      vm.pagePromise.then(function(page) {
        vm.pagePromise = page && page.next && page.next();
        return vm.pagePromise;
      }).then(function(page) {
        page && (vm.expertises = vm.expertises.concat(page.expertises));
      });
    };
    launchSearch();
  }
  function LeWorkspaceExpertisesCtrl($scope, expertise, $i18n) {
    var vm = this;
    vm.statusesList = [];
    _.map(expertise.statuses, function(value) {
      vm.statusesList[0] = {
        status: 'allStatusesFilter',
        label: $i18n('op.leworkspace.expertises.filter.all')
      };
      if (value.status === 'COMPLETING' || value.status === 'IN_PROGRESS' || value.status === 'TAXATION_COMPLEMENT') {
        value.filterBy = true;
      }
      vm.statusesList.push(value);
    });
    vm.sorts = [{
      name: 'name',
      text: 'i18n:op.administration.name'
    }, {
      name: 'taxationDate',
      text: 'i18n:op.administration.taxation'
    }, {
      name: 'status',
      text: 'i18n:op.expertises.status'
    }];
    vm.currentSort = vm.sorts[0];
    vm.sortAsc = true;
    $scope.$watch(function() {
      return vm.sortName;
    }, function() {
      expertise.updateSearchCriteria({sortBy: vm.sortName});
      $scope.$broadcast('workspace-sort-change');
    });
    vm.selectIconByStatus = function(status) {
      return _.findWhere(vm.statusesList, {status: status}).icon;
    };
    vm.selectColorByStatus = function(status) {
      return _.findWhere(vm.statusesList, {status: status}).color;
    };
    vm.selectStatusFilter = function(status) {
      status.filterBy = !status.filterBy;
      if (status.status === 'allStatusesFilter') {
        angular.forEach(vm.statusesList, function(statusInList) {
          statusInList.filterBy = status.filterBy;
        });
        return;
      }
      manageCheckAllExpertisesFilter();
    };
    function manageCheckAllExpertisesFilter() {
      vm.statusesList[0].filterBy = !vm.statusesList.slice(1).some(function(statusInList) {
        return !statusInList.filterBy;
      });
    }
    vm.openExpertiseDetails = function(expertiseId) {
      $scope.openSidePanel('sp-expertise-details', {params: {expertiseId: expertiseId}});
    };
    $scope.$on('open-personal-info', function() {
      $scope.openSidePanel('sp-personal-info');
    });
    $scope.$watch(function() {
      return vm.hovered;
    }, function(isFilterWindowsOpen) {
      if (isFilterWindowsOpen) {
        return;
      }
      vm.statusesList.forEach(function(value) {
        value.filterBy = expertise.isStatusFilterActive(value.status);
      });
      manageCheckAllExpertisesFilter();
    });
    vm.getCheckedStatusFilters = function() {
      return _.chain(vm.statusesList).where({filterBy: true}).pluck('status').without('allStatusesFilter').value();
    };
    vm.applyFilter = function() {
      var checkedFilters = vm.getCheckedStatusFilters(),
          currentFilters = expertise.getStatusFilters();
      if (currentFilters.length !== checkedFilters.length || _.difference(currentFilters, checkedFilters).length) {
        expertise.updateSearchCriteria({status: checkedFilters});
        $scope.$broadcast('launch-search-with-filters');
      }
      vm.hovered = false;
    };
    vm.reloadExpertises = function() {
      $scope.$broadcast('launch-search-with-filters');
    };
  }
  function LeWorkspaceExpertisesExpertCtrl($scope, expertise, $ooConfig) {
    var vm = this,
        searchAction = leWorkspaceExpertisesActions.bind(null, 'EXPERT', vm, $scope, expertise, $ooConfig().role);
    searchAction();
    $scope.$on('op-list-updated', _.debounce((function() {
      return searchAction();
    }), 500));
    $scope.$on('op-notification-replied', _.debounce((function() {
      return searchAction();
    }), 500));
    $scope.$on('op-notification-cancelled', _.debounce((function() {
      return searchAction();
    }), 500));
    $scope.$on('workspace-sort-change', (function() {
      return searchAction();
    }));
    $scope.$on('launch-search-with-filters', _.debounce((function() {
      return searchAction();
    }), 200));
  }
  function LeWorkspaceExpertisesCoExpertCtrl($scope, expertise, $ooConfig) {
    var vm = this,
        searchAction = leWorkspaceExpertisesActions.bind(null, 'COEXPERT', vm, $scope, expertise, $ooConfig().role);
    searchAction();
    $scope.$on('workspace-sort-change', (function() {
      return searchAction();
    }));
    $scope.$on('launch-search-with-filters', _.debounce((function() {
      return searchAction();
    }), 200));
  }
  function LeWorkspaceExpertisesSapitorCtrl($scope, expertise, $ooConfig) {
    var vm = this,
        searchAction = leWorkspaceExpertisesActions.bind(null, 'SAPITOR', vm, $scope, expertise, $ooConfig().role);
    searchAction();
    $scope.$on('workspace-sort-change', (function() {
      return searchAction();
    }));
    $scope.$on('launch-search-with-filters', _.debounce((function() {
      return searchAction();
    }), 200));
  }
  function LeWorkspaceExpertisesOthersCtrl($scope, expertise, $ooConfig) {
    var vm = this,
        searchAction = leWorkspaceExpertisesActions.bind(null, 'NONE', vm, $scope, expertise, $ooConfig().role);
    searchAction();
    $scope.$on('workspace-sort-change', (function() {
      return searchAction();
    }));
    $scope.$on('launch-search-with-filters', _.debounce((function() {
      return searchAction();
    }), 200));
  }
  angular.module('op.leWorkspace.expertises').controller('LeWorkspaceExpertisesCtrl', LeWorkspaceExpertisesCtrl).controller('LeWorkspaceExpertisesExpertCtrl', LeWorkspaceExpertisesExpertCtrl).controller('LeWorkspaceExpertisesCoExpertCtrl', LeWorkspaceExpertisesCoExpertCtrl).controller('LeWorkspaceExpertisesSapitorCtrl', LeWorkspaceExpertisesSapitorCtrl).controller('LeWorkspaceExpertisesOthersCtrl', LeWorkspaceExpertisesOthersCtrl);
  return {};
});
