define("app/expertise-details/cost-tracking/cost-tracking-controller", ['common/models/expertise/expertise-service', './bill-summary/bill-summary-directive'], function($__0,$__1) {
  "use strict";
  var __moduleName = "app/expertise-details/cost-tracking/cost-tracking-controller";
  function require(path) {
    return $traceurRuntime.require("app/expertise-details/cost-tracking/cost-tracking-controller", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__1 || !$__1.__esModule)
    $__1 = {default: $__1};
  $__0;
  $__1;
  angular.module('op.expertiseDetails.costTracking', ['oo.http', 'oui.fileIcons', 'op.models.expertise', 'op.expertiseDetails.costTracking.billSummary']);
  var CostTrackingCtrl = function CostTrackingCtrl($scope, $ooHttp, expertise, $fileIcons, $element) {
    var vm = this,
        expertiseId = $scope.getSidePanelParams('expertiseId');
    vm.currentExpertise;
    vm.displayState = 'loading';
    vm.downloadBill = function(bill) {
      bill._links.download && window.open($ooHttp.apiRoot() + bill._links.download.href, '_blank');
    };
    $scope.$watch(function() {
      return $element.parents('.oo-sp-page').scope().currentPage.name;
    }, function(name) {
      name.match('costTracking') && reloadCostTracking();
    });
    function reloadCostTracking() {
      expertise.find(expertiseId).then((function(e) {
        vm.currentExpertise = e;
        try {
          vm.currentExpertise.costTracking().then((function(c) {
            if (!c.data) {
              vm.displayState = 'empty';
              return;
            }
            vm.displayState = 'bills';
            vm.costTracking = c.data;
          }));
        } catch (err) {
          $scope.close();
        }
      }), (function() {
        $scope.close();
      }));
    }
    $scope.$on('op.payment.reload', function(e, selected) {
      reloadCostTracking();
    });
  };
  ($traceurRuntime.createClass)(CostTrackingCtrl, {}, {});
  angular.module('op.expertiseDetails.costTracking').controller('CostTrackingCtrl', CostTrackingCtrl);
  return {};
});
