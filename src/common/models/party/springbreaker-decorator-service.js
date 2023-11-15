define("common/models/party/springbreaker-decorator-service", [], function() {
  "use strict";
  var __moduleName = "common/models/party/springbreaker-decorator-service";
  function require(path) {
    return $traceurRuntime.require("common/models/party/springbreaker-decorator-service", path);
  }
  angular.module('op.models.party.springBreakerDecorator', ['oo.http']);
  function springBreakerDecorator($q, $ooHttp) {
    var SpringBreakerDecorator = function SpringBreakerDecorator(party) {
      angular.extend(this, party);
    };
    ($traceurRuntime.createClass)(SpringBreakerDecorator, {update: function(userInfo) {
        return $ooHttp.put(this._links.self.href, userInfo);
      }}, {});
    return SpringBreakerDecorator;
  }
  angular.module('op.models.party.springBreakerDecorator').factory('SpringBreakerDecorator', springBreakerDecorator);
  return {};
});
