define("app/Le-Workspace/page-designations/page-designations-controller", ['common/models/expertise/expertise-service', 'common/models/designation/designation-service', 'app/notification-details/notification-details-controller'], function($__0,$__1,$__2) {
  "use strict";
  var __moduleName = "app/Le-Workspace/page-designations/page-designations-controller";
  function require(path) {
    return $traceurRuntime.require("app/Le-Workspace/page-designations/page-designations-controller", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__1 || !$__1.__esModule)
    $__1 = {default: $__1};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  $__0;
  $__1;
  $__2;
  angular.module('op.leWorkspace.designations', ['oo.i18n', 'oo.config', 'oui.tooltip', 'op.models.designation', 'op.models.expertise', 'op.notificationDetails', 'oui.msg.modal']);
  function LeWorkspaceDesignationsCtrl($scope, designation, $ouiMsgModal, $i18n, expertise) {
    var vm = this;
    vm.designations = [];
    vm.openDesignationDetails = function(designationId) {
      designation.find(designationId).then(function(designation) {
        if (typeof designation.data.status !== 'undefined' && !['CANCELLED', 'INITIALIZED'].includes(designation.data.status)) {
          refreshDesignations();
          $ouiMsgModal.show($i18n('op.app.dashboard.designationChanged', [expertise.labelForStatus(designation.data.status)]), {
            msg: $i18n('op.app.dashboard.designationChanged.body', [designation.data.name]),
            closable: true,
            iconName: 'alert-circle',
            cls: 'light-modal light-modal-title',
            buttons: [{
              text: 'i18n:common.yes',
              cls: 'op-btn-purple',
              onClick: function() {
                $scope.openSidePanel('sp-expertise-details', {params: {expertiseId: designation.data.id}});
                $ouiMsgModal.hide();
              }
            }, {
              text: 'i18n:common.no',
              cls: 'op-btn-gray',
              onClick: $ouiMsgModal.hide
            }]
          });
          return;
        }
        $scope.openSidePanel('sp-designation-details', {params: {designationId: designationId}});
      });
    };
    function refreshDesignations() {
      vm.designations = [];
      vm.pagePromiseDesignation = designation.find().next();
      vm.pagePromiseDesignation.then(function(page) {
        page && (vm.designations = vm.designations.concat(page.data._embedded.designations));
      });
    }
    refreshDesignations();
    vm.scrollHandler = function() {
      if (!vm.pagePromiseDesignation) {
        return;
      }
      vm.pagePromiseDesignation.then(function(page) {
        vm.pagePromiseDesignation = page && page.next && page.next();
        return vm.pagePromiseDesignation;
      }).then(function(page) {
        page && (vm.designations = vm.designations.concat(page.data._embedded.designations));
      });
    };
    vm.statusesList = [];
    _.map(designation.statuses, function(value) {
      if (value.status === 'INITIALIZED') {
        value.filterBy = true;
      }
      vm.statusesList.push(value);
    });
    vm.selectStatusFilter = function(status) {
      status.filterBy = !status.filterBy;
    };
    vm.applyFilter = function() {
      var checkedFilters = vm.getCheckedStatusFilters(),
          currentFilters = designation.getStatusFilters();
      if (currentFilters.length !== checkedFilters.length || _.difference(currentFilters, checkedFilters).length) {
        designation.updateSearchCriteria({status: checkedFilters});
        $scope.$broadcast('launch-search-with-filters');
      }
      vm.hovered = false;
    };
    vm.getCheckedStatusFilters = function() {
      return _.chain(vm.statusesList).where({filterBy: true}).pluck('status').value();
    };
    $scope.$watch(function() {
      return vm.hovered;
    }, function(isFilterWindowsOpen) {
      if (isFilterWindowsOpen) {
        return;
      }
      vm.statusesList.forEach(function(value) {
        value.filterBy = designation.isStatusFilterActive(value.status);
      });
    });
    $scope.$on('launch-search-with-filters', function() {
      refreshDesignations();
    });
    $scope.$on('open-personal-info', function() {
      $scope.openSidePanel('sp-personal-info');
    });
    $scope.$on('op-notification-created', function() {
      refreshDesignations();
    });
    $scope.$on('op-notification-replied', function() {
      refreshDesignations();
    });
    $scope.$on('op-notification-cancelled', function() {
      refreshDesignations();
    });
    $scope.$on('op-notification-reminded', function() {
      refreshDesignations();
    });
  }
  angular.module('op.leWorkspace.designations').controller('LeWorkspaceDesignationsCtrl', LeWorkspaceDesignationsCtrl);
  return {};
});
