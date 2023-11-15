define("app/create-notification/create-notification-controller", ['common/models/designation/designation-service', 'common/op-upload-directive/op-upload'], function($__0,$__1) {
  "use strict";
  var __moduleName = "app/create-notification/create-notification-controller";
  function require(path) {
    return $traceurRuntime.require("app/create-notification/create-notification-controller", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__1 || !$__1.__esModule)
    $__1 = {default: $__1};
  $__0;
  $__1;
  angular.module('op.createNotification', ['oo.i18n', 'op.upload', 'oo.http', 'oui.msg.modal', 'op.models.designation']);
  function CreateNotificationCtrl($scope, $rootScope, designation, $ouiMsgModal, $ooHttp, $http) {
    var vm = this,
        currentDesignation;
    vm.creationDate = Date.now();
    vm.expertSelected = undefined;
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
    vm.cancel = function() {
      $scope.close(false);
    };
    $scope.$on('user-directory-selection', function(event, role, user) {
      if (!user) {
        return;
      }
      vm.expertSelected = user[0];
    });
    vm.openExpertSelectionPanel = function() {
      $scope.openSidePanel('global-sp-users-experts-directory', {params: {
          selectionLimit: {
            min: 1,
            max: 1
          },
          search: 'EXPERT'
        }});
    };
    vm.submitDesignation = function() {
      $ouiMsgModal.show('i18n:op.app.createDesignation.confirm', {
        closable: false,
        iconName: 'alert-circle',
        cls: 'light-modal',
        buttons: [{
          text: 'i18n:common.yes',
          cls: 'op-btn-purple',
          onClick: function() {
            try {
              currentDesignation.submit(vm.expertSelected.id).then(function() {
                $scope.close(false);
                $rootScope.$broadcast('op-notification-created', currentDesignation);
              }, function() {
                $ouiMsgModal.show('i18n:common.error', 'i18n:op.loadError');
              });
              $ouiMsgModal.hide();
            } catch (e) {
              return $ouiMsgModal.show('i18n:common.error', 'i18n:op.loadError');
            }
          }
        }, {
          text: 'i18n:common.no',
          cls: 'op-btn-gray',
          onClick: $ouiMsgModal.hide
        }]
      });
    };
    vm.areAllFilesUploaded = function() {
      return vm.filesDesignations.length && _.every(vm.filesDesignations, function(f) {
        return f.state === 'justUploaded' || f.state === 'uploaded';
      });
    };
    designation.create({}).then(function(initializedDesignation) {
      currentDesignation = initializedDesignation;
      vm.designationItemsUrl = $ooHttp.apiRoot() + initializedDesignation._links.itemsUpload.href;
    }, function() {
      $ouiMsgModal.show('i18n:common.error', 'i18n:op.loadError');
    });
  }
  angular.module('op.createNotification').controller('CreateNotificationCtrl', CreateNotificationCtrl);
  return {};
});
