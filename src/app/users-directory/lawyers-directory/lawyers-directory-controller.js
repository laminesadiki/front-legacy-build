define("app/users-directory/lawyers-directory/lawyers-directory-controller", ['common/models/lawyer/lawyer-service'], function($__0) {
  "use strict";
  var __moduleName = "app/users-directory/lawyers-directory/lawyers-directory-controller";
  function require(path) {
    return $traceurRuntime.require("app/users-directory/lawyers-directory/lawyers-directory-controller", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  $__0;
  angular.module('op.usersDirectory.lawyers', ['oo.i18n', 'oo.config', 'op.models.lawyer', 'oui.msg.modal', 'op.expertiseDetails.administration.addLawyerToParties']);
  function LawyersDirectoryCtrl($scope, $rootScope, lawyer, basicModal, _) {
    var vm = this;
    vm.currentPartyId = $scope.getSidePanelParams('partyId');
    vm.searchedFullName = function() {
      if (!vm.lastName && !vm.firstName) {
        return vm.email ? '"' + vm.email + '"' : null;
      } else if (!vm.email) {
        return '"' + _.compact([vm.lastName, vm.firstName]).join(' ') + '"';
      }
      return '"' + _.compact([vm.lastName, vm.firstName]).join(' ') + ' (' + vm.email + ')' + '"';
    };
    vm.search = function() {
      vm.firstName = vm.firstNameField;
      vm.lastName = vm.lastNameField;
      vm.email = vm.emailField;
      $scope.usersDirectoryCtrl.usersSelected = [];
      $scope.usersDirectoryCtrl.pagePromise = lawyer.find({
        q_fn: vm.firstName,
        q_ln: vm.lastName,
        q_mail: vm.email
      }).next();
      return $scope.usersDirectoryCtrl.pagePromise.then(function(page) {
        $scope.usersDirectoryCtrl.users = page.data._embedded.lawyers;
      }, function() {
        $scope.usersDirectoryCtrl.users = [];
      });
    };
    vm.selectSingleParty = function() {
      $scope.getSidePanelParams('currentExpertise').addActor('LAWYER', $scope.usersDirectoryCtrl.usersSelected[0].id, [$scope.getSidePanelParams('partyId')]).then(function() {
        $rootScope.$broadcast('lawyer-directory-and-parties-selection', $scope.usersDirectoryCtrl.role, $scope.usersDirectoryCtrl.usersSelected, [vm.currentPartyId]);
        $scope.close();
      });
    };
    vm.selectMultiParties = function() {
      basicModal.open('common/template/op-modal-background/op-modal-background.tpl.html', null, {
        currentExpertise: $scope.getSidePanelParams('currentExpertise'),
        lawyer: $scope.usersDirectoryCtrl.usersSelected[0],
        opTemplateContainer: 'app/expertise-details/administration/add-lawyer-to-parties/add-lawyer-to-parties.tpl.html'
      }).then(function(res) {
        if (!res) {
          return;
        }
        $rootScope.$broadcast('lawyer-directory-and-parties-selection', $scope.usersDirectoryCtrl.role, $scope.usersDirectoryCtrl.usersSelected);
        $scope.close();
      });
    };
    vm.reset = function() {
      vm.firstNameField = '';
      vm.lastNameField = '';
      vm.emailField = '';
      $scope.usersDirectoryCtrl.users = undefined;
      $scope.usersDirectoryCtrl.usersSelected = [];
    };
  }
  angular.module('op.usersDirectory.lawyers').controller('LawyersDirectoryCtrl', LawyersDirectoryCtrl);
  return {};
});
