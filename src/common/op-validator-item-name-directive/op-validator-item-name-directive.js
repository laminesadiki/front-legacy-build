define("common/op-validator-item-name-directive/op-validator-item-name-directive", [], function() {
  "use strict";
  var __moduleName = "common/op-validator-item-name-directive/op-validator-item-name-directive";
  function require(path) {
    return $traceurRuntime.require("common/op-validator-item-name-directive/op-validator-item-name-directive", path);
  }
  angular.module('op.validator.itemName', ['oo.http']);
  function itemNameValidationCtrl($q, $ooHttp) {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attributes, ngModel) {
        ngModel.$asyncValidators.itemNameValidation = function(modelValue) {
          var defer = $q.defer();
          $ooHttp.post('/item-name-validation', {itemName: modelValue}).then(function(res) {
            if (res.data.isValid) {
              defer.resolve();
            } else {
              defer.reject();
            }
          });
          return defer.promise;
        };
      }
    };
  }
  angular.module('op.validator.itemName').directive('itemNameValidation', itemNameValidationCtrl);
  return {};
});
