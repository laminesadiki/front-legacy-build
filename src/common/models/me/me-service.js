define("common/models/me/me-service", [], function() {
  "use strict";
  var __moduleName = "common/models/me/me-service";
  function require(path) {
    return $traceurRuntime.require("common/models/me/me-service", path);
  }
  angular.module('op.models.me', ['oo.http']);
  function meFactory($ooHttp, _) {
    var me = {};
    me.info = function() {
      return $ooHttp.get('/me');
    };
    me.update = function(userInfoPerso) {
      return $ooHttp.put('/me', userInfoPerso);
    };
    me.addCertificate = function(user) {
      var certificateAuthMode = _.find(user.authModes, (function(authMode) {
        return authMode.name === 'CERTIFICATE';
      }));
      return $ooHttp.post(certificateAuthMode._links.addCertificate.href);
    };
    me.removeCertificate = function(certificate) {
      return $ooHttp.delete(certificate._links.delete.href);
    };
    me.getLogoutHref = function(user) {
      var samlAuthMode = _.find(user.authModes, (function(authMode) {
        return authMode.name === 'SAML_CNBF';
      }));
      if (samlAuthMode && samlAuthMode._links && samlAuthMode._links.logout) {
        return samlAuthMode._links.logout.href;
      }
    };
    me.logout = function(user) {
      var logoutHref = this.getLogoutHref(user);
      logoutHref && (window.location.href = logoutHref);
    };
    return me;
  }
  angular.module('op.models.me').factory('me', ['$ooHttp', '_', meFactory]);
  return {};
});
