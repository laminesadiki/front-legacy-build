define("common/models/expertise/party-decorator-service", [], function() {
  "use strict";
  var __moduleName = "common/models/expertise/party-decorator-service";
  function require(path) {
    return $traceurRuntime.require("common/models/expertise/party-decorator-service", path);
  }
  angular.module('op.models.expertise.partyDecorator', ['oo.http']);
  function partyDecorator($q, $ooHttp) {
    var PartyDecorator = function PartyDecorator(party) {
      angular.extend(this, party);
    };
    ($traceurRuntime.createClass)(PartyDecorator, {
      createParticipant: function(participant) {
        return $ooHttp.post(this._links.participants.href, participant);
      },
      rename: function(name, type) {
        return $ooHttp.put(this._links.self.href, {
          name: name,
          type: type
        });
      }
    }, {});
    return PartyDecorator;
  }
  angular.module('op.models.expertise.partyDecorator').factory('PartyDecorator', partyDecorator);
  return {};
});
