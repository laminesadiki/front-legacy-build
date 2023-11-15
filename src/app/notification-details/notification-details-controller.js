define("app/notification-details/notification-details-controller", ['common/models/designation/designation-service', 'common/bytes-filter/bytes-filter'], function($__0,$__1) {
  "use strict";
  var __moduleName = "app/notification-details/notification-details-controller";
  function require(path) {
    return $traceurRuntime.require("app/notification-details/notification-details-controller", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__1 || !$__1.__esModule)
    $__1 = {default: $__1};
  $__0;
  $__1;
  angular.module('op.notificationDetails', ['oo.i18n', 'oui.msg.modal', 'oui.fileIcons', 'op.models.designation', 'oui.tooltip', 'bytesFilter', 'oo.http']);
  function NotificationDetailsCtrl($scope, $rootScope, $element, $ouiMsgModal, $fileIcons, designation, $ooHttp) {
    var vm = this,
        designationId = $scope.getSidePanelParams('designationId');
    vm.getIcon = function(filename) {
      return $fileIcons.fileIconPath(filename, 32);
    };
    vm.download = function(item) {
      window.open($ooHttp.apiRoot() + item._links.download.href, '_blank', '');
    };
    vm.downloadToken = function(item) {
      window.open($ooHttp.apiRoot() + item._links.timestamp.href, '_blank', '');
    };
    vm.openReplyPanel = function() {
      $scope.openSidePanel('global-sp-notification-reply', {params: {designationId: designationId}});
    };
    $scope.$on('$layout-sidepanel[global-sp-notification-reply]-close', function(event, is, replied) {
      if (replied) {
        $scope.close();
      }
    });
    function loadError() {
      $ouiMsgModal.show('i18n:common.error', 'i18n:op.designationDetails.loadError');
      $scope.close();
    }
    if (!designationId) {
      return loadError();
    }
    designation.find(designationId).then(function(designation) {
      vm.designationDate = designation.data.designationDate;
      vm.designatorFullName = [designation.data._embedded.designator.firstName, designation.data._embedded.designator.lastName].join(' ');
      vm.designatorEmail = designation.data._embedded.designator.email;
      vm.expertFullName = [designation.data._embedded.expert.firstName, designation.data._embedded.expert.lastName].join(' ');
      vm.expertEmail = designation.data._embedded.expert.email;
      vm.cancelled = designation.data.status === 'CANCELLED';
      vm.cancelDesignation = function() {
        var hoursSinceLastReminder = designation.data.hoursSinceLastReminder;
        if (hoursSinceLastReminder == null) {
          $ouiMsgModal.show('i18n:common.error', 'i18n:op.designationDetails.cancelWithoutRemindError');
          return;
        }
        if (hoursSinceLastReminder < 24) {
          $ouiMsgModal.show('i18n:common.error', 'i18n:op.designationDetails.cancelAfterRemind24hoursError');
          return;
        }
        designation.cancel().then(function() {
          $rootScope.$broadcast('op-notification-cancelled');
          $scope.close(true);
        });
      };
      vm.canCancelDesignation = function() {
        var hoursSinceLastReminder = designation.data.hoursSinceLastReminder;
        return hoursSinceLastReminder !== null && hoursSinceLastReminder >= 24;
      };
      vm.remindDesignation = function() {
        var hoursSinceLastReminder = designation.data.hoursSinceLastReminder;
        if (hoursSinceLastReminder != null && hoursSinceLastReminder < 24) {
          $ouiMsgModal.show('i18n:common.error', 'i18n:op.designationDetails.remindAgain24hoursError');
          return;
        }
        designation.remind().then(function() {
          $rootScope.$broadcast('op-notification-reminded');
          $scope.close(true);
        });
      };
      vm.canRemindDesignation = function() {
        var hoursSinceLastReminder = designation.data.hoursSinceLastReminder;
        return hoursSinceLastReminder === null || hoursSinceLastReminder >= 24;
      };
      return designation.items();
    }, function() {
      loadError();
    }).then(function(items) {
      vm.items = items.data._embedded.children;
    });
  }
  angular.module('op.notificationDetails').controller('NotificationDetailsCtrl', NotificationDetailsCtrl);
  return {};
});
