define("app/users-directory/users-directory-controller", ['common/models/expert/expert-service', 'common/models/specialty/specialty-service', 'common/oo-ngenter-directive/oo-ngenter-directive', './avengers-directory/avengers-directory-controller', './experts-directory/experts-directory-controller', './lawyers-directory/lawyers-directory-controller'], function($__0,$__1,$__2,$__3,$__4,$__5) {
  "use strict";
  var __moduleName = "app/users-directory/users-directory-controller";
  function require(path) {
    return $traceurRuntime.require("app/users-directory/users-directory-controller", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__1 || !$__1.__esModule)
    $__1 = {default: $__1};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  if (!$__3 || !$__3.__esModule)
    $__3 = {default: $__3};
  if (!$__4 || !$__4.__esModule)
    $__4 = {default: $__4};
  if (!$__5 || !$__5.__esModule)
    $__5 = {default: $__5};
  $__0;
  $__1;
  $__2;
  $__3;
  $__4;
  $__5;
  angular.module('op.usersDirectory', ['oo.i18n', 'oo.config', 'op.models.expert', 'op.models.specialty', 'oui.collection', 'lrInfiniteScroll', 'oo.keyEnter', 'op.usersDirectory.experts', 'op.usersDirectory.avengers', 'op.usersDirectory.lawyers']);
  function UsersDirectoryCtrl($scope, $rootScope) {
    var vm = this,
        searchRole = $scope.getSidePanelParams('search'),
        currentContext = $scope.getSidePanelParams('context'),
        usersRolesTypesMap = {
          EXPERT: 'experts',
          COEXPERT: 'experts',
          SAPITOR: 'experts',
          MAGISTRATE: 'avengers',
          CLERK: 'avengers',
          LAWYER: 'lawyers'
        },
        usersRolesTemplatesMap = Object.keys(usersRolesTypesMap).reduce((function(acum, key) {
          var type = usersRolesTypesMap[key];
          acum[key] = ("app/users-directory/" + type + "-directory/" + type + "-directory.tpl.html");
          return acum;
        }), {});
    if (!searchRole) {
      $scope.close();
      return;
    }
    vm.selectionLimit = $scope.getSidePanelParams('selectionLimit', {
      min: 0,
      max: 0
    });
    vm.noActionBar = !vm.selectionLimit.min && !vm.selectionLimit.max;
    vm.currentTemplate = usersRolesTemplatesMap[searchRole];
    vm.currentExpertiseId = parseInt($scope.getSidePanelParams('expertiseId'));
    vm.currentExpertise = $scope.getSidePanelParams('expertise');
    vm.searchRole = searchRole;
    vm.role = searchRole.toLowerCase() + 's';
    vm.usersSelected = [];
    vm.users = undefined;
    vm.pagePromise;
    if (currentContext === 'EXPERTISE') {
      vm.validationMessage = 'op.users.directory.form.add';
    } else {
      vm.validationMessage = 'op.users.directory.form.select';
    }
    vm.isSelectDisabled = function() {
      if (vm.noActionBar) {
        return true;
      } else if (vm.usersSelected.length < vm.selectionLimit.min) {
        return true;
      } else if (vm.usersSelected.length > vm.selectionLimit.max) {
        return true;
      }
      return false;
    };
    vm.scrollHandler = function() {
      if (!vm.pagePromise) {
        return;
      }
      vm.pagePromise.then(function(page) {
        vm.pagePromise = page && page.next && page.next();
        return vm.pagePromise;
      }).then(function(page) {
        var pageRole = usersRolesTypesMap[vm.searchRole];
        page && ($scope.usersDirectoryCtrl.users = $scope.usersDirectoryCtrl.users.concat(page.data._embedded[pageRole]));
      });
    };
    if (!vm.currentTemplate) {
      $scope.close();
    }
    vm.toggleSelection = function(user) {
      vm.users.filter((function(u) {
        return u.selected;
      })).forEach((function(u) {
        u.selected = false;
        vm.usersSelected.splice(vm.usersSelected.indexOf(u), 1);
      }));
      user.selected = true;
      vm.usersSelected.push(user);
    };
    vm.select = function() {
      $rootScope.$broadcast('user-directory-selection', searchRole, vm.usersSelected);
      $scope.close(false);
    };
    vm.cancel = function() {
      $scope.close(false);
    };
  }
  angular.module('op.usersDirectory').controller('UsersDirectoryCtrl', UsersDirectoryCtrl);
  return {};
});
