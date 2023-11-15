define("common/op-validator-mail-directive/op-validator-mail-directive", [], function() {
  "use strict";
  var __moduleName = "common/op-validator-mail-directive/op-validator-mail-directive";
  function require(path) {
    return $traceurRuntime.require("common/op-validator-mail-directive/op-validator-mail-directive", path);
  }
  angular.module('op.validator.mail', ['oo.http']);
  var mailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  function mailValidationCtrl($q, $ooHttp, _) {
    var debouncedHttp = _.debounce(function(defer, modelValue) {
      if (!mailPattern.test(modelValue)) {
        defer.reject();
      } else {
        $ooHttp.post('/mail-validation', {mail: modelValue}).then(function(res) {
          if (res.data.isValid) {
            defer.resolve();
          } else {
            defer.reject();
          }
        });
      }
    }, 400);
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attributes, ngModel) {
        ngModel.$asyncValidators.mailValidation = function(modelValue) {
          var defer = $q.defer();
          debouncedHttp(defer, modelValue);
          return defer.promise;
        };
      }
    };
  }
  angular.module('op.validator.mail').directive('mailValidation', mailValidationCtrl);
  return {};
});
