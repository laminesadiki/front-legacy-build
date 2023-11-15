define("app/auth/signUp/page-unregCertForm/page-unregCertForm-controller", [], function() {
  "use strict";
  var __moduleName = "app/auth/signUp/page-unregCertForm/page-unregCertForm-controller";
  function require(path) {
    return $traceurRuntime.require("app/auth/signUp/page-unregCertForm/page-unregCertForm-controller", path);
  }
  angular.module('op.auth.signup.unregCertForm', []);
  function SignUpUnregCertFormCtrl($scope, $rootScope) {
    var vm = this;
    vm.validate = function() {
      if (this.hasAccount) {
        $rootScope.$broadcast('go-to', 'ERROR_PAGE');
      } else {
        $rootScope.$broadcast('go-to', 'LOGIN_FORM');
      }
    };
    vm.isFormDisabled = function() {
      return typeof this.hasAccount === 'undefined';
    };
  }
  angular.module('op.auth.signup.unregCertForm').controller('SignUpUnregCertFormCtrl', SignUpUnregCertFormCtrl);
  return {};
});
