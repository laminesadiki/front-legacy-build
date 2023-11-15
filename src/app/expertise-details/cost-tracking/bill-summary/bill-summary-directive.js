define("app/expertise-details/cost-tracking/bill-summary/bill-summary-directive", [], function() {
  "use strict";
  var __moduleName = "app/expertise-details/cost-tracking/bill-summary/bill-summary-directive";
  function require(path) {
    return $traceurRuntime.require("app/expertise-details/cost-tracking/bill-summary/bill-summary-directive", path);
  }
  angular.module('op.expertiseDetails.costTracking.billSummary', []);
  function billSummary() {
    function billSummaryCtrl($rootScope, $timeout) {
      var msgElement = document.getElementsByClassName("message")[0];
      var vm = this;
      vm.isPaying = false;
      vm.bill;
      vm.inProgressDate;
      vm.billingDate;
      vm.paymentDate;
      vm.paymentPageUrl;
      vm.openPaymentLink = function() {
        window.open(vm.paymentPageUrl, '_blank');
        vm.isPaying = true;
      };
      var deleteMessageAfterTimeOut = function() {
        msgElement.classList.remove("message-anim");
      };
      vm.reloadBill = function() {
        $rootScope.$broadcast('op.payment.reload');
        msgElement.classList.add("message-anim");
        $timeout(deleteMessageAfterTimeOut, 3000);
      };
    }
    return {
      restrict: 'E',
      templateUrl: 'app/expertise-details/cost-tracking/bill-summary/bill-summary.tpl.html',
      scope: {
        bill: '=',
        inProgressDate: '=',
        billingDate: '=',
        paymentDate: '=',
        paymentPageUrl: '='
      },
      controller: billSummaryCtrl,
      controllerAs: 'vm',
      bindToController: true
    };
  }
  angular.module('op.expertiseDetails.costTracking.billSummary').directive('billSummary', billSummary);
  return {};
});
