define("app/auth/auth-module", ['./signUp/signUp-controller', './retrieve-cert/retrieve-cert-controller'], function($__0,$__1) {
  "use strict";
  var __moduleName = "app/auth/auth-module";
  function require(path) {
    return $traceurRuntime.require("app/auth/auth-module", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__1 || !$__1.__esModule)
    $__1 = {default: $__1};
  $__0;
  $__1;
  angular.module('op.auth', ['oui.auth', 'oo.config', 'op.auth.signup']).run(function($ouiAuth, $ooConfig) {
    var authentication = $ooConfig('authentication');
    if ($ooConfig('certRetrieval')) {
      if (!!$ooConfig('certificateUrl')) {
        $ouiAuth.authState('RETRIEVE_CERTIFICATE');
      } else {
        $ouiAuth.authState('RETRIEVE_CERTIFICATE_NOK');
      }
      return;
    }
    if (authentication.operation === 'LOGIN' && authentication.status === 'SUCCESS') {
      $ouiAuth.authState('OK');
    } else {
      $ouiAuth.authState('NOT_LOGGED');
    }
  });
  return {};
});
