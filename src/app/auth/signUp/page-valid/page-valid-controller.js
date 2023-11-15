define("app/auth/signUp/page-valid/page-valid-controller", [], function() {
  "use strict";
  var __moduleName = "app/auth/signUp/page-valid/page-valid-controller";
  function require(path) {
    return $traceurRuntime.require("app/auth/signUp/page-valid/page-valid-controller", path);
  }
  angular.module('op.auth.signup.valid', ['oo.config', 'oo-role-security', 'oui.auth']);
  function SignUpValidCtrl($scope, $rootScope, $ouiAuth, $ooConfig, ooRoleSecurity) {
    var vm = this,
        authentication = $ooConfig('authentication');
    vm.openDashboard = function() {
      var cfg = $ooConfig();
      if (cfg.role === 'JUSTICE') {
        ooRoleSecurity.role(cfg.role = $rootScope.userInfo._justiceRole);
      }
      cfg.session = cfg.session || {};
      cfg.session.user = cfg.session.user || {
        firstName: $rootScope.userInfo.firstName,
        lastName: $rootScope.userInfo.lastName
      };
      $ouiAuth.authState($ouiAuth.AUTH_STATE_OK);
    };
    if (authentication.operation === 'ADDCERT') {
      vm.validText = 'op.signup.valid.add.cert.ok.text';
      vm.addCertificate = true;
    } else {
      vm.validText = 'op.signup.valid.infoValidation';
      vm.addCertificate = false;
    }
  }
  angular.module('op.auth.signup.valid').controller('SignUpValidCtrl', SignUpValidCtrl);
  return {};
});
