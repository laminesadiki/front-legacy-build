define("common/op-search-directive/op-search-directive", ['common/models/expertise/expertise-service'], function($__0) {
  "use strict";
  var __moduleName = "common/op-search-directive/op-search-directive";
  function require(path) {
    return $traceurRuntime.require("common/op-search-directive/op-search-directive", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  $__0;
  angular.module('op.search', ['oui.basicModal', 'oui.fileIcons', 'op.models.expertise']);
  function SearchCtrl($scope, $rootScope, $i18n, _, $ouiMsgModal, $fileIcons, $ooHttp, expertise) {
    var vm = this;
    vm.searchType = (vm.showTypeList ? {
      text: $i18n('op.search.type.name'),
      id: 'NAME'
    } : {
      text: $i18n('op.search.type.item'),
      id: 'ITEM'
    });
    vm.searchOpened = false;
    vm.searchDone = false;
    vm.selectIconByStatus = function(status) {
      return _.findWhere(expertise.statuses, {status: status}).icon;
    };
    vm.selectColorByStatus = function(status) {
      return _.findWhere(expertise.statuses, {status: status}).color;
    };
    vm.setSearchType = function(e) {
      vm.searchType.text = $(e.target).text();
      vm.searchType.id = $(e.target).data('search-type');
      vm.searchOpened = false;
    };
    vm.getIcon = function(filename) {
      return $fileIcons.fileIconPath(filename, 32);
    };
    vm.isTransfering = function(item) {
      return !item._links.timestamp && !item.isLocked;
    };
    function search() {
      var url = '/expertises/' + vm.currentExpertiseId + '/items?q_name=' + vm.searchValue + '&sortBy=name';
      if (vm.showTypeList) {
        url = '/expertises?q=' + vm.searchValue + '&in=' + vm.searchType.id + '&sortBy=name';
      }
      $ooHttp.get(url).then(function(data) {
        if (data.data.hasMore) {
          $ouiMsgModal.show('i18n:op.search.result.tooLong.title', 'i18n:op.search.result.tooLong.text');
        }
        vm.highlight = vm.searchValue;
        vm.searchResults = data.data._embedded.items;
        if (vm.showTypeList) {
          vm.searchResults = data.data._embedded.expertises;
        }
        vm.searchedValue = vm.searchValue;
        vm.searchDone = true;
      });
    }
    vm.submit = function() {
      if (!vm.searchValue || vm.searchValue.length < 3) {
        $ouiMsgModal.show('i18n:op.search.notEnoughCharacters.title', 'i18n:op.search.notEnoughCharacters.text');
        return;
      }
      search();
    };
    vm.openExpertiseDetails = function(expertiseId) {
      $rootScope.$broadcast('op-expertise-details', expertiseId);
    };
    vm.openExpertiseDetailsPage = function(expertiseId, isAdmin) {
      if (isAdmin) {
        $rootScope.$broadcast('op-expertise-details-page', expertiseId, 'administration');
      } else {
        $rootScope.$broadcast('op-expertise-details', expertiseId);
      }
    };
    vm.downloadItem = function(item) {
      window.open($ooHttp.apiRoot() + item._links.download.href, '_blank');
    };
    vm.downloadToken = function(item) {
      window.open($ooHttp.apiRoot() + item._links.timestamp.href, '_blank');
    };
  }
  function search() {
    return {
      restrict: 'E',
      scope: {
        showTypeList: '=',
        currentExpertiseId: '='
      },
      bindToController: true,
      controllerAs: 'searchCtrl',
      controller: SearchCtrl,
      templateUrl: 'common/op-search-directive/op-search-directive.tpl.html'
    };
  }
  angular.module('op.search').directive('search', search);
  return {};
});
