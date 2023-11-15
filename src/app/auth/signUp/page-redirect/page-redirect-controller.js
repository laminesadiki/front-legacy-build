define("app/auth/signUp/page-redirect/page-redirect-controller", [], function() {
  "use strict";
  var __moduleName = "app/auth/signUp/page-redirect/page-redirect-controller";
  function require(path) {
    return $traceurRuntime.require("app/auth/signUp/page-redirect/page-redirect-controller", path);
  }
  angular.module('op.auth.signup.redirect', ['oo.config']);
  function SignUpRedirectCtrl($scope, $ooConfig) {
    var vm = this,
        authentication = $ooConfig('authentication'),
        authMode = authentication.mode,
        textsRedirect = {SAML_CNBF: {
            title: 'op.signup.redirect.saml.cnb.title',
            text: 'op.signup.redirect.saml.cnb.text',
            footer: 'op.signup.redirect.saml.cnb.footer'
          }};
    vm.redirectPageTitle = textsRedirect[authMode].title;
    vm.redirectPageText = textsRedirect[authMode].text;
    vm.redirectPageFooter = textsRedirect[authMode].footer;
    vm.openDestination = function() {
      window.location.href = authentication.url;
    };
  }
  angular.module('op.auth.signup.redirect').controller('SignUpRedirectCtrl', SignUpRedirectCtrl);
  return {};
});
