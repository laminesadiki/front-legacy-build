define("app/expertise-details/share/share-controller", ['common/op-collapse/op-collapse-directive'], function($__0) {
  "use strict";
  var __moduleName = "app/expertise-details/share/share-controller";
  function require(path) {
    return $traceurRuntime.require("app/expertise-details/share/share-controller", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  $__0;
  angular.module('op.expertiseDetails.share', ['oo.i18n', 'oo.http', 'oui.msg.modal', 'oui.fileIcons', 'op.collapse']);
  var FULL_CYCLE = ['NONE', 'PARTIAL', 'FULL'],
      CYCLE = ['NONE', 'FULL'];
  var ShareCtrl = function ShareCtrl($scope, $rootScope, $i18n, $ouiMsgModal, $fileIcons, $ooHttp) {
    var vm = this,
        embedded;
    vm.share = $scope.getSidePanelParams('share');
    vm.items = vm.share._embedded.items;
    vm.displayState = 'loading';
    embedded = vm.share._embedded;
    vm.actorsList = ['magistrates', 'clerks', 'sapitors'].map((function(actorsName) {
      if (!embedded[actorsName]) {
        return;
      }
      embedded[actorsName].name = actorsName;
      return embedded[actorsName];
    })).filter((function(v) {
      return v;
    }));
    vm.usersList = ['magistrates', 'clerks', 'sapitors', 'lawyers'].map((function(label) {
      return embedded[label];
    })).concat(embedded.parties && embedded.parties.filter((function(p) {
      return p.participants;
    })).map((function(p) {
      return p.participants;
    }))).filter((function(v) {
      return v;
    }));
    vm.userAccess = (function(user) {
      return user.newAccess || user.access;
    });
    vm.getIcon = function(filename, folder) {
      if (folder) {
        return $fileIcons.folderIconPath(32);
      }
      return $fileIcons.fileIconPath(filename, 32);
    };
    vm.cycleRight = function(user) {
      var allowedCycle = user.access === 'PARTIAL' ? FULL_CYCLE : CYCLE;
      user.newAccess = allowedCycle[(allowedCycle.indexOf(vm.userAccess(user)) + 1) % allowedCycle.length];
    };
    vm.hasParticipants = function() {
      return embedded.parties && !!embedded.parties.filter((function(p) {
        return p.participants;
      })).filter((function(p) {
        return p.participants.length;
      })).length;
    };
    vm.validateDisabled = function() {
      if (vm.displayState === 'loading' || vm.displayState === 'noActors') {
        return true;
      }
      var newAccessCount = vm.usersList.reduce((function(newAccesses, currentList) {
        return newAccesses += currentList.filter((function(u) {
          return u.newAccess && u.newAccess !== u.access;
        })).length;
      }), 0);
      return !newAccessCount;
    };
    vm.validate = function() {
      if (vm.validateDisabled()) {
        return;
      }
      var patchList = vm.usersList.reduce((function(patch, currentList) {
        return patch.concat($traceurRuntime.spread(currentList.filter((function(u) {
          return u.newAccess && u.newAccess !== u.access;
        })).map((function(u) {
          return {
            userId: u.userId,
            hasAccess: u.newAccess === 'FULL'
          };
        }))));
      }), []);
      return patchList.length && $ooHttp.post(vm.share._links.self.href, {access: patchList}).then(function() {
        $scope.close();
        $rootScope.$broadcast('items-shared');
      });
    };
    vm.deactivateAllAccess = function() {
      vm.usersList.forEach((function(list) {
        return list.forEach((function(user) {
          return user.newAccess = 'NONE';
        }));
      }));
    };
    function execute() {
      if (!vm.items.length) {
        $ouiMsgModal.show('i18n:common.error', 'i18n:op.expertiseDetails.share.noSelectionError');
        $scope.close();
        return;
      }
      var fullActorsList = ['magistrates', 'clerks', 'sapitors', 'lawyers', 'parties'];
      for (var i = 0; i < fullActorsList.length; ++i) {
        if (embedded[fullActorsList[i]] && embedded[fullActorsList[i]].length) {
          vm.displayState = 'actors';
          break;
        }
      }
      vm.displayState === 'loading' && (vm.displayState = 'noActors');
      if (vm.items.length === 1) {
        vm.title = $i18n('op.expertiseDetails.share.titleSingle', [vm.items[0].name]);
      } else {
        vm.title = $i18n('op.expertiseDetails.share.titleMultiple');
      }
      vm.bannerTitle = $i18n('op.expertiseDetails.share.bannerTitle', ((function() {
        var totalUsers = 0;
        var countUsers = function(userList) {
          if (!userList || !userList.length) {
            return;
          }
          totalUsers += userList.reduce((function(total, user) {
            return total += user.access === 'FULL' ? 1 : 0;
          }), 0);
        };
        ['magistrates', 'clerks', 'sapitors', 'lawyers'].forEach((function(role) {
          return countUsers(embedded[role]);
        }));
        embedded.parties && embedded.parties.forEach((function(p) {
          return countUsers(p.participants);
        }));
        return [totalUsers];
      }))());
    }
    execute();
  };
  ($traceurRuntime.createClass)(ShareCtrl, {}, {});
  angular.module('op.expertiseDetails.share').controller('ShareCtrl', ShareCtrl);
  return {};
});
