define("common/models/party/party-service", ['../model-factory'], function($__0) {
  "use strict";
  var __moduleName = "common/models/party/party-service";
  function require(path) {
    return $traceurRuntime.require("common/models/party/party-service", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  $__0;
  angular.module('op.models.party', ['oo.i18n', 'op.model']);
  function partyFactory(model, $i18n) {
    var party = {};
    party.create = model.creatable('/parties');
    party.types = [{
      typeName: 'EXPERT',
      label: $i18n('op.administration.party.represent.expert')
    }, {
      typeName: 'LAWYER',
      label: $i18n('op.administration.party.represent.lawyer')
    }, {
      typeName: 'MEMBER',
      label: $i18n('op.administration.party.represent.member')
    }, {
      typeName: 'NON_DEMATERIALIZED',
      label: $i18n('op.administration.party.represent.nonDematerialized')
    }];
    return party;
  }
  angular.module('op.models.party').factory('party', partyFactory);
  return {};
});
