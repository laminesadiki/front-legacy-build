define("app/notification-reply/notification-reply-controller", ['common/models/designation/designation-service', 'common/bytes-filter/bytes-filter', 'common/template/op-notification-form-directive/op-notification-form-directive'], function($__0,$__1,$__2) {
  "use strict";
  var __moduleName = "app/notification-reply/notification-reply-controller";
  function require(path) {
    return $traceurRuntime.require("app/notification-reply/notification-reply-controller", path);
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
  angular.module('op.notificationReply', ['oo.i18n', 'oui.msg.modal', 'oui.fileIcons', 'op.models.designation', 'oui.tooltip', 'bytesFilter', 'oo.http', 'op.notificationForm', 'op.upload']);
  function NotificationReplyCtrl($scope, $rootScope, $ouiMsgModal, designation, $ooHttp, $http, $ooConfig, $fileIcons) {
    var vm = this;
    function loadError() {
      $ouiMsgModal.show('i18n:common.error', 'i18n:op.designationDetails.loadError');
      $scope.close();
    }
    vm.accept = true;
    angular.extend(vm, {
      notificationDate: Date.now(),
      filesDesignations: [],
      designationId: $scope.getSidePanelParams('designationId', null)
    });
    designation.find(vm.designationId).then(function(designation) {
      angular.extend(vm, {
        designation: designation,
        notificationItemsUrl: $ooHttp.apiRoot() + designation.data._links.itemsUpload.href
      });
      $http.get($ooHttp.apiRoot() + designation.data._links.itemsUpload.href).then(function(items) {
        vm.filesDesignations = items.data._embedded.children.map(function(uploadedItems) {
          return {
            file: {
              size: uploadedItems.size,
              name: uploadedItems.name
            },
            date: uploadedItems.creationDate,
            state: 'uploaded',
            icon: $fileIcons.fileIconPath(uploadedItems.name, 32),
            model: {_links: uploadedItems._links}
          };
        });
      });
    }, function() {
      loadError();
    }).then(function() {});
    vm.uploadActionCfg = {
      handleDownload: function(file) {
        window.open($ooHttp.apiRoot() + file.model._links.download.href, '_blank', '');
      },
      handleTokenDownload: function(file) {
        window.open($ooHttp.apiRoot() + file.model._links.timestamp.href, '_blank', '');
      },
      handleDelete: function(file, files) {
        files.splice(files.indexOf(file), 1);
        $http.delete($ooHttp.apiRoot() + file.model._links.delete.href);
      }
    };
    function areAllFilesUploaded() {
      return vm.filesDesignations.length && _.every(vm.filesDesignations, function(f) {
        return f.state === 'justUploaded' || f.state === 'uploaded';
      });
    }
    vm.isSubmitDesignationDisable = function() {
      if (vm.accept) {
        return !vm.notifFormValid;
      }
      return !vm.notifFormValid || !areAllFilesUploaded();
    };
    vm.cancel = function() {
      $scope.close(false);
    };
    vm.submitDesignation = function() {
      $ouiMsgModal.show('i18n:op.app.notificationReply.confirm', {
        closable: false,
        iconName: 'alert-circle',
        cls: 'light-modal',
        buttons: [{
          text: 'i18n:common.yes',
          cls: 'op-btn-purple',
          onClick: function() {
            vm.designation.reply(angular.extend({}, vm.notifInputValues, {accept: vm.accept})).then(function() {
              $rootScope.$broadcast('op-notification-replied');
              $ouiMsgModal.hide();
              $scope.close(true);
            }, function() {
              loadError();
            });
          }
        }, {
          text: 'i18n:common.no',
          cls: 'op-btn-gray',
          onClick: $ouiMsgModal.hide
        }]
      });
    };
    vm.notifInputValues = {};
    vm.notifInputValues.nameExpert = $ooConfig('session').user.lastName;
  }
  angular.module('op.notificationReply').controller('NotificationReplyCtrl', NotificationReplyCtrl);
  return {};
});
