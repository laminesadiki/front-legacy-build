define("app/users-directory/experts-directory/experts-directory-controller", ['common/models/expert/expert-service'], function($__0) {
  "use strict";
  var __moduleName = "app/users-directory/experts-directory/experts-directory-controller";
  function require(path) {
    return $traceurRuntime.require("app/users-directory/experts-directory/experts-directory-controller", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  $__0;
  angular.module('op.usersDirectory.experts', ['oo.i18n', 'oo.config', 'op.models.expert', 'op.models.specialty']);
  function ExpertsDirectoryCtrl(expert, court, $ooConfig, $scope, $timeout, $sanitize, _, specialty) {
    var vm = this;
    vm.courts = [];
    vm.specialties = [];
    vm.searchedFullName = function() {
      if (!vm.lastName && !vm.firstName) {
        return;
      }
      return '"' + _.compact([vm.lastName, vm.firstName]).join(' ') + '"';
    };
    function getSelectedIds(items) {
      return _.chain(items).filter(function(i) {
        return i.selected;
      }).pluck('id').value();
    }
    vm.search = function() {
      vm.firstName = vm.firstNameField;
      vm.lastName = vm.lastNameField;
      $scope.usersDirectoryCtrl.usersSelected = [];
      $scope.usersDirectoryCtrl.pagePromise = expert.find({
        q_fn: vm.firstName,
        q_ln: vm.lastName,
        q_court: getSelectedIds(vm.courts).join(','),
        q_spe: getSelectedIds(vm.specialties).join(',')
      }).next();
      return $scope.usersDirectoryCtrl.pagePromise.then(function(page) {
        $scope.usersDirectoryCtrl.users = page.data._embedded.experts;
      }, function() {
        $scope.usersDirectoryCtrl.users = [];
      });
    };
    vm.getSpecialties = function(expert) {
      return _.pluck(expert._embedded.specialties, 'name').join(', ');
    };
    vm.reset = function() {
      vm.firstNameField = '';
      vm.lastNameField = '';
      $scope.usersDirectoryCtrl.users = undefined;
      $scope.usersDirectoryCtrl.usersSelected = [];
      angular.forEach(vm.courts, function(court) {
        court.selected = false;
      });
      angular.forEach(vm.specialties, function(specialty) {
        specialty.selected = false;
      });
    };
    court.find().then(function(courts) {
      vm.courts = courts;
    });
    specialty.find().then(function(specialties) {
      vm.specialties = specialties;
    });
  }
  angular.module('op.usersDirectory.experts').controller('ExpertsDirectoryCtrl', ExpertsDirectoryCtrl);
  return {};
});
