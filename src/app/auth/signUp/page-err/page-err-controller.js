define("app/auth/signUp/page-err/page-err-controller", [], function() {
  "use strict";
  var __moduleName = "app/auth/signUp/page-err/page-err-controller";
  function require(path) {
    return $traceurRuntime.require("app/auth/signUp/page-err/page-err-controller", path);
  }
  angular.module('op.auth.signup.err', []);
  function SignUpErrCtrl($scope, $ooConfig) {
    var vm = this,
        authErrorCode = $ooConfig('authentication').errorCode,
        textsError = {
          EXPIRED: {
            title: 'op.signup.err.link.not.valid.title',
            text: 'op.signup.err.link.not.valid.text'
          },
          MISMATCH: {
            title: 'op.signup.err.profil.not.valid.title',
            text: 'op.signup.err.profil.not.valid.text'
          },
          OLD_CERTIFICATE: {
            title: 'op.signup.err.old.certificate.title',
            text: 'op.signup.err.old.certificate.text'
          },
          INVALID: {
            title: 'op.signup.err.cert.invalid.title',
            text: 'op.signup.err.invalid.certif'
          },
          INACTIVE: {
            title: 'op.signup.err.unregistered.cert.deleted.title',
            text: 'op.signup.err.unregistered.cert.deleted.text'
          },
          NO_AUTH_MODE_CERTIFICATE: {
            title: 'op.signup.err.unregistered.no.authmode.cert.title',
            text: 'op.signup.err.unregistered.no.authmode.cert.text'
          },
          UNKNOWN: {
            title: 'op.signup.err.unregistered.cert.account.existing.title',
            text: 'op.signup.err.unregistered.cert.account.existing.text'
          },
          ACCOUNT_SUSPENDED: {
            title: 'op.signup.err.account.suspended.title',
            text: 'op.signup.err.account.suspended.text'
          }
        };
    if (authErrorCode && textsError[authErrorCode]) {
      vm.errorPageTitle = textsError[authErrorCode].title;
      vm.errorPageText = textsError[authErrorCode].text;
    }
  }
  angular.module('op.auth.signup.err').controller('SignUpErrCtrl', SignUpErrCtrl);
  return {};
});
