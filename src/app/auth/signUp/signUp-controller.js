define("app/auth/signUp/signUp-controller", ['./page-unregCertForm/page-unregCertForm-controller', './page-form/page-form-controller', './page-err/page-err-controller', './page-redirect/page-redirect-controller', './page-valid/page-valid-controller'], function($__0,$__1,$__2,$__3,$__4) {
  "use strict";
  var __moduleName = "app/auth/signUp/signUp-controller";
  function require(path) {
    return $traceurRuntime.require("app/auth/signUp/signUp-controller", path);
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
  $__0;
  $__1;
  $__2;
  $__3;
  $__4;
  var AUTH_URL = "https://auth.dev.opalexe.fr/realms/broker/protocol/openid-connect/auth?client_id=account-console&redirect_uri=https%3A%2F%2Fauth.dev.opalexe.fr%2Frealms%2Fbroker%2Faccount%2F%23%2F&state=ff3c47c0-c1b2-4630-8cfa-803c9d3c7f61&response_mode=fragment&response_type=code&scope=openid&nonce=b1b07aec-c331-46ad-87c6-434aa3f460d5&code_challenge=ULAmwQxqTv_H-7tUnoCgXxBMCHbzGJCbHZeM8wI1rOc&code_challenge_method=S256";
  angular.module('op.auth.signup', ['oo.config', 'oo.locale', 'oo.themes', 'oui.form', 'oui.tooltip', 'oui.msg.modal', 'op.auth.signup.unregCertForm', 'op.auth.signup.form', 'op.auth.signup.err', 'op.auth.signup.redirect', 'op.auth.signup.valid']);
  function SignUpCtrl($scope, $ooConfig) {
    var vm = this,
        authentication = $ooConfig('authentication');
    if (authentication.operation === 'LOGIN') {
      if (authentication.status === 'FAILURE') {
        if (authentication.errorCode === 'UNKNOWN') {
          if (authentication.mode === 'SAML_CNBF') {
            vm.goTo = 'LOGIN_FORM';
          } else {
            vm.goTo = 'LOGIN';
          }
        } else {
          vm.goTo = 'ERROR_PAGE';
          window.location.href = AUTH_URL;
        }
      }
      if (authentication.status === 'REDIRECT') {
        window.location.href = authentication.url;
      }
    } else if (authentication.status === 'REDIRECT' || (authentication.operation === 'ADDCERT' && authentication.status === 'SUCCESS')) {
      vm.goTo = 'REG_OK';
    }
    $scope.$on('go-to', function(evt, page) {
      vm.goTo = page;
    });
  }
  angular.module('op.auth.signup').controller('SignUpCtrl', SignUpCtrl);
  return {};
});
