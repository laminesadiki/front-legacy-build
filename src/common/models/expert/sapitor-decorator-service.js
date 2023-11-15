define("common/models/expert/sapitor-decorator-service", [], function() {
  "use strict";
  var __moduleName = "common/models/expert/sapitor-decorator-service";
  function require(path) {
    return $traceurRuntime.require("common/models/expert/sapitor-decorator-service", path);
  }
  angular.module('op.models.expert.sapitorDecorator', ['oo.http']);
  function sapitorDecorator($q, $ooHttp) {
    var SapitorDecorator = function SapitorDecorator(sapitor) {
      angular.extend(this, sapitor);
    };
    ($traceurRuntime.createClass)(SapitorDecorator, {update: function(userInfo) {
        return $ooHttp.put(this._links.self.href, userInfo);
      }}, {});
    return SapitorDecorator;
  }
  angular.module('op.models.expert.sapitorDecorator').factory('SapitorDecorator', sapitorDecorator);
  return {};
});
