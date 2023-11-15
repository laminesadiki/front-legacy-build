define("app/expertise-details/administration/add-lawyer-to-parties/add-lawyer-to-parties-controller", [], function() {
  "use strict";
  var __moduleName = "app/expertise-details/administration/add-lawyer-to-parties/add-lawyer-to-parties-controller";
  function require(path) {
    return $traceurRuntime.require("app/expertise-details/administration/add-lawyer-to-parties/add-lawyer-to-parties-controller", path);
  }
  angular.module('op.expertiseDetails.administration.addLawyerToParties', ['oo.i18n', 'oo.http', 'oo.config', 'oui.basicModal']);
  function AddLawyerToPartiesCtrl($scope, expertise, $ooHttp) {
    var vm = this,
        currentExpertise = $scope.currentExpertise;
    vm.parties = [];
    vm.selectedParties = function() {
      return vm.parties && vm.parties.filter((function(p) {
        return p.selected;
      }));
    };
    vm.submit = function() {
      if ($scope.lawyer._links && $scope.lawyer._links.parties) {
        return $scope.closeModal($ooHttp.post($scope.lawyer._links.parties.href, {
          id: $scope.lawyer.id,
          parties: vm.selectedParties().map((function(p) {
            return p.id;
          }))
        }));
      }
      return $scope.closeModal(currentExpertise.addActor('LAWYER', $scope.lawyer.id, vm.selectedParties().map((function(p) {
        return p.id;
      }))));
    };
    currentExpertise.parties().then(function(res) {
      var lawyer = $scope.lawyer;
      vm.parties = res.data._embedded.parties;
      if (lawyer._links && lawyer._links.parties) {
        $ooHttp.get(lawyer._links.parties.href).then(function(res) {
          res.data._embedded.parties.map((function(p) {
            return p.id;
          })).forEach((function(id) {
            return vm.parties.find((function(_p) {
              return _p.id === id;
            })).selected = true;
          }));
        });
      }
    }, function() {
      vm.closeModal(false);
    });
  }
  angular.module('op.expertiseDetails.administration.addLawyerToParties').controller('AddLawyerToPartiesCtrl', AddLawyerToPartiesCtrl);
  return {};
});
