define("common/template/op-notification-form-directive/op-notification-form-directive", ['../../models/designation/designation-service'], function($__0) {
  "use strict";
  var __moduleName = "common/template/op-notification-form-directive/op-notification-form-directive";
  function require(path) {
    return $traceurRuntime.require("common/template/op-notification-form-directive/op-notification-form-directive", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  $__0;
  angular.module('op.notificationForm', ['oo.i18n', 'op.models.designation']);
  function NotificationFormCtrl($scope, $filter) {
    var vm = this;
    vm.inputValues = vm.inputValues || {};
    vm.datePattern = /^(((0[1-9]|[12]\d|3[01])(\/|-|\.)(0[13578]|1[02])(\/|-|\.)((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)(\/|-|\.)(0[13456789]|1[012])(\/|-|\.)((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])(\/|-|\.)02(\/|-|\.)((19|[2-9]\d)\d{2}))|(29(\/|-|\.)02(\/|-|\.)((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/;
    $scope.$watch(function() {
      return vm.formCtrl.$valid;
    }, function(value) {
      vm.formValid = value;
    });
    vm.getExpertiseName = function() {
      var i = vm.inputValues;
      return $filter('removeDiacritics')(_.compact([i.nameFirstApplicant, i.nameFirstDefender, i.nameJurisdiction, i.nameRegistryNumber, i.nameExpert, i.nameDiscoveryCode, i.nameRecordNumber, i.nameDesignationDate]).join('_').toUpperCase());
    };
    vm.updateDateFormat = function() {
      if (!vm.inputValues.nameDesignationDate) {
        return;
      }
      vm.inputValues.nameDesignationDate = vm.inputValues.nameDesignationDate.replace(/([./ ])/g, '-');
    };
  }
  angular.module('op.notificationForm').directive('opNotificationForm', function() {
    return {
      restrict: 'E',
      scope: {
        inputValues: '=',
        formValid: '='
      },
      bindToController: true,
      controllerAs: 'notificationFormCtrl',
      controller: NotificationFormCtrl,
      templateUrl: 'common/template/op-notification-form-directive/op-notification-form-directive.tpl.html'
    };
  });
  return {};
});
