define("app/expertise-details/administration/add-party-member/add-party-member-controller", [], function() {
  "use strict";
  var __moduleName = "app/expertise-details/administration/add-party-member/add-party-member-controller";
  function require(path) {
    return $traceurRuntime.require("app/expertise-details/administration/add-party-member/add-party-member-controller", path);
  }
  angular.module('op.expertiseDetails.administration.addPartyMember', ['oo.i18n', 'oo.config', 'oui.basicModal']);
  function AddPartyMemberCtrl() {
    var vm = this;
    vm.submit = function() {};
  }
  angular.module('op.expertiseDetails.administration.addPartyMember').controller('AddPartyMemberCtrl', AddPartyMemberCtrl);
  return {};
});
