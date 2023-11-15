define("app/expertise-details/expertise-details", ['./safe/safe-controller', './administration/administration-controller', './search/search-controller', './contradictory/contradictory-controller', './contradictory/contradictory-details/contradictory-details-controller', './cost-tracking/cost-tracking-controller', './share/share-controller'], function($__0,$__1,$__2,$__3,$__4,$__5,$__6) {
  "use strict";
  var __moduleName = "app/expertise-details/expertise-details";
  function require(path) {
    return $traceurRuntime.require("app/expertise-details/expertise-details", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__1 || !$__1.__esModule)
    $__1 = {default: $__1};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  if (!$__3 || !$__3.__esModule)
    $__3 = {default: $__3};
  if (!$__4 || !$__4.__esModule)
    $__4 = {default: $__4};
  if (!$__5 || !$__5.__esModule)
    $__5 = {default: $__5};
  if (!$__6 || !$__6.__esModule)
    $__6 = {default: $__6};
  $__0;
  $__1;
  $__2;
  $__3;
  $__4;
  $__5;
  $__6;
  angular.module('op.expertiseDetails', ['op.expertiseDetails.safe', 'op.expertiseDetails.administration', 'op.expertiseDetails.contradictory', 'op.expertiseDetails.contradictory.details', 'op.expertiseDetails.share', 'op.expertiseDetails.costTracking', 'op.expertiseDetails', 'op.expertiseDetails.search']);
  var ExpertiseDetailsCtrl = function ExpertiseDetailsCtrl($scope, $timeout, $ouiRouter) {
    var vm = this;
    vm.isAdmin = false;
    vm.showAdminTab = false;
    vm.showContradictoryTab = false;
    vm.showCostTrackingTab = false;
    vm.showSearchTab = false;
    $scope.$on('setAdmin', function(evt, isAdmin, openPage) {
      vm.isAdmin = isAdmin;
      if (openPage && isAdmin) {
        $timeout((function() {
          return $ouiRouter.goTo({
            wsId: '=',
            pageId: '=',
            spId: '=',
            spPageId: openPage
          });
        }));
      }
    });
    $scope.$on('setLinks', function(evt, links) {
      vm.showAdminTab = links.administration;
      vm.showContradictoryTab = links.contradictory;
      vm.showCostTrackingTab = links.costTracking;
      vm.showSearchTab = links.search;
    });
  };
  ($traceurRuntime.createClass)(ExpertiseDetailsCtrl, {}, {});
  angular.module('op.expertiseDetails').controller('ExpertiseDetailsCtrl', ExpertiseDetailsCtrl);
  return {};
});
