define("app/expertise-details/contradictory/contradictory-details/contradictory-details-controller", [], function() {
  "use strict";
  var __moduleName = "app/expertise-details/contradictory/contradictory-details/contradictory-details-controller";
  function require(path) {
    return $traceurRuntime.require("app/expertise-details/contradictory/contradictory-details/contradictory-details-controller", path);
  }
  angular.module('op.expertiseDetails.contradictory.details', ['oo.i18n', 'oui.fileIcons']);
  var ContradictoryDetailsCtrl = function ContradictoryDetailsCtrl($scope, $i18n, $fileIcons) {
    var vm = this;
    vm.item = $scope.getSidePanelParams('item');
    vm.title = $i18n('op.contradictory.details.title', [vm.item.fileName]);
    vm.banner = $i18n('op.contradictory.details.banner', [vm.item.seenCount, vm.item.totalCount]);
    var embedded = vm.item._embedded;
    vm.mccos = ['magistrates', 'clerks', 'coExperts', 'sapitors'].map((function(list) {
      return ({
        name: list.toLowerCase(),
        list: embedded[list]
      });
    })).filter((function(x) {
      return x;
    }));
    vm.getIcon = (function(filename) {
      return $fileIcons.fileIconPath(filename, 32);
    });
  };
  ($traceurRuntime.createClass)(ContradictoryDetailsCtrl, {}, {});
  angular.module('op.expertiseDetails.contradictory.details').controller('ContradictoryDetailsCtrl', ContradictoryDetailsCtrl);
  return {};
});
