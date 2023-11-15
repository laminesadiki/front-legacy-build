define("common/models/termsofuse/termsofuse-service", [], function() {
  "use strict";
  var __moduleName = "common/models/termsofuse/termsofuse-service";
  function require(path) {
    return $traceurRuntime.require("common/models/termsofuse/termsofuse-service", path);
  }
  angular.module('op.models.termsofuse', ['oo.http']);
  function termsOfUseFactory($ooHttp, _) {
    var termsOfUse = {};
    termsOfUse.info = function() {
      return $ooHttp.get('/termsofuse');
    };
    termsOfUse.acceptNewTermsOfUseVersion = function(userTermsOfUseInfos) {
      return $ooHttp.post('/termsofuse/accept', userTermsOfUseInfos);
    };
    return termsOfUse;
  }
  angular.module('op.models.termsofuse').factory('termsofuse', ['$ooHttp', '_', termsOfUseFactory]);
  return {};
});
