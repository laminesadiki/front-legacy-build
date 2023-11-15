define("app/user-form/user-form-controller", ['common/models/expertise/expertise-service'], function($__0) {
  "use strict";
  var __moduleName = "app/user-form/user-form-controller";
  function require(path) {
    return $traceurRuntime.require("app/user-form/user-form-controller", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  $__0;
  angular.module('op.userForm', ['oo.http', 'oo.i18n', 'op.models.expertise', 'oui.msg.modal', 'oui.tooltip', 'op.validator.itemName']);
  var ModifyUser = function ModifyUser($injector, $rootScope, $scope, $i18n, $ouiMsgModal, $ooHttp) {
    var vm = {},
        currentUser = $scope.getSidePanelParams('user'),
        userRole = $scope.getSidePanelParams('userRole'),
        expertiseStatus = $scope.getSidePanelParams('expertiseStatus');
    $scope.userFormCtrl.title = $i18n('op.userForm.update' + userRole.toLowerCase());
    if (!currentUser && !currentUser.update) {
      throw new Error('No user passed.');
    }
    angular.copy(currentUser, $scope.userFormCtrl.currentUser);
    $scope.userFormCtrl.expertiseStatus = expertiseStatus;
    if (expertiseStatus !== 'TAXATION_COMPLEMENT') {
      $scope.userFormCtrl.informationTooltip = 'op.userForm.tooltip.disabled.text';
    }
    vm.canRegenerateCert = function() {
      return !!currentUser._links.regenerateCert;
    };
    vm.validate = function() {
      var user = $scope.userFormCtrl.currentUser;
      $scope.userFormCtrl.userForm.$valid && currentUser.update({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        mobile: user.mobile
      }).then($scope.broadcastAndClose);
    };
    vm.sendNewCertificate = function() {
      var user = $scope.userFormCtrl.currentUser;
      if (expertiseStatus !== 'TAXATION_COMPLEMENT') {
        return;
      } else {
        vm.validate();
        $scope.userFormCtrl.userForm.$valid && $ouiMsgModal.show('i18n:op.userForm.send.newCertificate.title', $i18n('op.userForm.send.newCertificate.text', [user.firstName + ' ' + user.lastName, user.email]), {
          closable: false,
          iconName: 'alert-circle',
          cls: 'light-modal',
          buttons: [{
            text: 'i18n:common.yes',
            cls: 'op-btn-purple',
            onClick: function() {
              try {
                $ooHttp.post(currentUser._links.regenerateCert.href).then(function() {
                  $ouiMsgModal.hide();
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
      }
    };
    angular.extend($scope.userFormCtrl, vm);
  };
  ($traceurRuntime.createClass)(ModifyUser, {}, {});
  var CreateUser = function CreateUser($injector, $rootScope, $scope, $i18n) {
    var vm = {},
        userRole = $scope.getSidePanelParams('userRole'),
        currentExpertise = $scope.getSidePanelParams('currentExpertise'),
        party = $scope.getSidePanelParams('party');
    $scope.userFormCtrl.title = $i18n('op.userForm.new' + userRole.toLowerCase());
    if (userRole === 'SPRINGBREAKER') {
      if (!party && !party.createParticipant) {
        throw new Error("Can't create a participant without a party.");
      }
      vm.validate = function() {
        return $scope.userFormCtrl.userForm.$valid && party.createParticipant($scope.userFormCtrl.currentUser).then($scope.broadcastAndClose);
      };
    }
    if (userRole === 'SAPITOR') {
      vm.validate = function() {
        return currentExpertise.addSapitorUser($scope.userFormCtrl.currentUser).then($scope.broadcastAndClose);
      };
    }
    angular.extend($scope.userFormCtrl, vm);
  };
  ($traceurRuntime.createClass)(CreateUser, {}, {});
  var MODES = {
    CREATE: CreateUser,
    MODIFY: ModifyUser
  };
  var UserFormCtrl = function UserFormCtrl($injector, $rootScope, $scope, $i18n, $ouiMsgModal, $ooHttp) {
    var vm = this;
    vm.currentUser = {};
    vm.mailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    vm.phoneNumberPattern = /^(0|(?:00[ .-]?|\+)\d{1,3}[ .-]?)[1-9]([ .-]?)(\d\d\2){3}\d\d$/;
    vm.userFormMode = $scope.getSidePanelParams('mode');
    $scope.broadcastAndClose = function() {
      $rootScope.$broadcast('user-form-created');
      $scope.close();
    };
    try {
      MODES[vm.userFormMode]($injector, $rootScope, $scope, $i18n, $ouiMsgModal, $ooHttp);
    } catch (e) {
      $scope.close();
      throw new Error('Problem instanciating a controller strategy');
    }
  };
  ($traceurRuntime.createClass)(UserFormCtrl, {}, {});
  angular.module('op.userForm').controller('UserFormCtrl', UserFormCtrl);
  return {};
});
