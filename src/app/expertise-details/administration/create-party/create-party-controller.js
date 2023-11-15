define("app/expertise-details/administration/create-party/create-party-controller", ['common/models/expertise/expertise-service'], function($__0) {
  "use strict";
  var __moduleName = "app/expertise-details/administration/create-party/create-party-controller";
  function require(path) {
    return $traceurRuntime.require("app/expertise-details/administration/create-party/create-party-controller", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  $__0;
  angular.module('op.expertiseDetails.administration.createParty', ['oo.i18n', 'oo.config', 'oui.basicModal', 'op.models.expertise', 'oo.i18n', 'oui.tooltip', 'op.validator.itemName']);
  function CreatePartyCtrl($scope, $ouiMsgModal, expertise, party, $i18n, $timeout) {
    var vm = this,
        currentExpertise = $scope.currentExpertise,
        currentParty = $scope.currentParty;
    vm.partyType = {};
    vm.partiesOpened = false;
    vm.setPartyType = function(e) {
      vm.partyType.text = $(e.target).text();
      vm.partyType.id = $(e.target).data('party-type');
      vm.partiesOpened = false;
    };
    vm.submit = function() {
      if (currentParty) {
        return $scope.closeModal(currentParty.rename(vm.name, vm.partyType.id));
      }
      return $scope.closeModal(currentExpertise.createParty(vm.name, vm.partyType.id));
    };
    if (!currentExpertise) {
      $scope.closeModal();
    }
    if (currentParty) {
      $timeout(function() {
        vm.name = currentParty.name;
        vm.partyType.text = $(("[data-party-type=\"" + currentParty.type + "\"]")).text();
        vm.partyType.id = currentParty.type;
      });
    } else {
      $timeout(function() {
        $('.l-create-party-input[name=partyName]').focus();
      });
    }
  }
  angular.module('op.expertiseDetails.administration.createParty').controller('CreatePartyCtrl', CreatePartyCtrl);
  return {};
});
