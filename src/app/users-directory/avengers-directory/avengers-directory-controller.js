define("app/users-directory/avengers-directory/avengers-directory-controller", ['common/models/avenger/avenger-service'], function($__0) {
  "use strict";
  var __moduleName = "app/users-directory/avengers-directory/avengers-directory-controller";
  function require(path) {
    return $traceurRuntime.require("app/users-directory/avengers-directory/avengers-directory-controller", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  $__0;
  angular.module('op.usersDirectory.avengers', ['oo.i18n', 'oo.config', 'op.models.avenger']);
  function AvengersDirectoryCtrl(avenger, $ooConfig, $scope, $timeout, $sanitize, _) {
    var vm = this;
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
      $scope.usersDirectoryCtrl.pagePromise = avenger.find({
        role: $scope.usersDirectoryCtrl.searchRole,
        q_fn: vm.firstName,
        q_ln: vm.lastName,
        q_mail: vm.email
      }).next();
      return $scope.usersDirectoryCtrl.pagePromise.then(function(page) {
        $scope.usersDirectoryCtrl.users = page.data._embedded.avengers;
      }, function() {
        $scope.usersDirectoryCtrl.users = [];
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
  angular.module('op.usersDirectory.avengers').controller('AvengersDirectoryCtrl', AvengersDirectoryCtrl);
  return {};
});
