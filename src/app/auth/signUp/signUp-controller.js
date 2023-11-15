define("app/auth/signUp/signUp-controller", [
  "./page-unregCertForm/page-unregCertForm-controller",
  "./page-form/page-form-controller",
  "./page-err/page-err-controller",
  "./page-redirect/page-redirect-controller",
  "./page-valid/page-valid-controller",
], function ($__0, $__1, $__2, $__3, $__4) {
  "use strict";
  var __moduleName = "app/auth/signUp/signUp-controller";
  function require(path) {
    return $traceurRuntime.require("app/auth/signUp/signUp-controller", path);
  }
  if (!$__0 || !$__0.__esModule) $__0 = { default: $__0 };
  if (!$__1 || !$__1.__esModule) $__1 = { default: $__1 };
  if (!$__2 || !$__2.__esModule) $__2 = { default: $__2 };
  if (!$__3 || !$__3.__esModule) $__3 = { default: $__3 };
  if (!$__4 || !$__4.__esModule) $__4 = { default: $__4 };
  $__0;
  $__1;
  $__2;
  $__3;
  $__4;

  angular.module("op.auth.signup", [
    "oo.config",
    "oo.locale",
    "oo.themes",
    "oui.form",
    "oui.tooltip",
    "oui.msg.modal",
    "op.auth.signup.unregCertForm",
    "op.auth.signup.form",
    "op.auth.signup.err",
    "op.auth.signup.redirect",
    "op.auth.signup.valid",
  ]);
  function SignUpCtrl($scope, $ooConfig, OPLX_ENV) {
    const initOptions = {
      url: OPLX_ENV.OPLX_AUTH_URL,
      realm: OPLX_ENV.OPLX_REALM,
      redirect_uri: OPLX_ENV.OPLX_REDIRECT_URI,
      // post_logout_redirect_uri: OPLX_ENV.OPLX_REDIRECT_URI,
      // "auth-server-url": OPLX_ENV.OPLX_REDIRECT_URI,
      clientId: OPLX_ENV.OPLX_CLIENT_ID,
      onLoad: OPLX_ENV.OPLX_ON_LOAD,
      "ssl-required": "external",
      "public-client": true,
      "confidential-port": 0,
    };
    console.log(initOptions);
    const keycloak = new Keycloak(initOptions);

    var vm = this,
      authentication = $ooConfig("authentication");
    if (authentication.operation === "LOGIN") {
      if (authentication.status === "FAILURE") {
        if (authentication.errorCode === "UNKNOWN") {
          if (authentication.mode === "SAML_CNBF") {
            vm.goTo = "LOGIN_FORM";
          } else {
            vm.goTo = "LOGIN";
          }
        } else {
          // vm.goTo = "ERROR_PAGE";
          keycloak.init({
            onLoad: initOptions.onLoad,
          });
        }
      }
      if (authentication.status === "REDIRECT") {
        window.location.href = authentication.url;
      }
    } else if (
      authentication.status === "REDIRECT" ||
      (authentication.operation === "ADDCERT" &&
        authentication.status === "SUCCESS")
    ) {
      vm.goTo = "REG_OK";
    }
    $scope.$on("go-to", function (evt, page) {
      vm.goTo = page;
    });
  }
  angular.module("op.auth.signup").controller("SignUpCtrl", SignUpCtrl);
  return {};
});
