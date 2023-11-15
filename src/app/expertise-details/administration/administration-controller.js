define("app/expertise-details/administration/administration-controller", ['common/models/expertise/expertise-service', 'common/models/party/springbreaker-decorator-service', 'common/models/expert/sapitor-decorator-service', './create-party/create-party-controller', './add-party-member/add-party-member-controller', './update-taxation/update-taxation-controller', './add-sapitor/add-sapitor-controller', './add-lawyer-to-parties/add-lawyer-to-parties-controller', './confirm-status/confirm-status-controller'], function($__0,$__1,$__2,$__3,$__4,$__5,$__6,$__7,$__8) {
  "use strict";
  var __moduleName = "app/expertise-details/administration/administration-controller";
  function require(path) {
    return $traceurRuntime.require("app/expertise-details/administration/administration-controller", path);
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
  if (!$__7 || !$__7.__esModule)
    $__7 = {default: $__7};
  if (!$__8 || !$__8.__esModule)
    $__8 = {default: $__8};
  $__0;
  $__1;
  $__2;
  $__3;
  $__4;
  $__5;
  $__6;
  $__7;
  $__8;
  angular.module('op.expertiseDetails.administration', ['oo.http', 'oo.i18n', 'oui.dropdownStatus', 'op.models.expertise', 'op.models.party', 'oui.msg.modal', 'oui.basicModal', 'op.expertiseDetails.administration.createParty', 'op.expertiseDetails.administration.updateTaxation', 'op.expertiseDetails.administration.addSapitor', 'op.expertiseDetails.administration.addPartyMember', 'op.expertiseDetails.administration.addLawyerToParties', 'op.models.party.springBreakerDecorator', 'op.models.expert.sapitorDecorator', 'op.expertiseDetails.administration.confirmStatus']);
  function AdministrationCtrl($scope, expertise, party, $ouiMsgModal, basicModal, $ooHttp, $rootScope, $timeout, $i18n, SpringBreakerDecorator, SapitorDecorator, $q) {
    var vm = this,
        expertiseId = $scope.getSidePanelParams('expertiseId'),
        ddStatuses;
    vm.currentExpertise;
    vm.partiesModel = [];
    vm.partiesExpandModel = {};
    vm.dictionnaryUsers = {
      none: $i18n('op.administration.party.user.none'),
      user: $i18n('op.administration.party.user'),
      users: $i18n('op.administration.party.users')
    };
    ddStatuses = expertise.statuses.map(function(status) {
      status.iconName = status.icon;
      status.hidden = true;
      return status;
    });
    vm.dds = {
      cfg: {options: ddStatuses},
      change: function(status) {
        var transition = [vm.currentExpertise.status, status];
        var changeStatus = function() {
          vm.currentExpertise.changeStatus(status).then(statusChanged);
        };
        if (angular.equals(transition, ['COMPLETING', 'IN_PROGRESS']) || angular.equals(transition, ['IN_PROGRESS', 'TAXATION_COMPLEMENT']) || angular.equals(transition, ['TAXATION_COMPLEMENT', 'IN_PROGRESS']) || angular.equals(transition, ['IN_PROGRESS', 'FINISHED'])) {
          return basicModal.open('common/template/op-modal-background/op-modal-background.tpl.html', null, {
            transition: transition,
            opTemplateContainer: 'app/expertise-details/administration/confirm-status/confirm-status.tpl.html'
          }).then(function(proceed) {
            if (!proceed) {
              return false;
            }
            changeStatus();
          });
        } else {
          changeStatus();
        }
      }
    };
    function loadError() {
      $ouiMsgModal.show('i18n:common.error', 'i18n:op.loadError');
    }
    function actorLinksMapper(actor) {
      actor.setActive = function(isActive) {
        return $ooHttp.put(actor._links.activate.href, {isActive: isActive});
      };
      actor._links && actor._links.supervise && (actor.setSupervise = function() {
        return $ooHttp.put(actor._links.supervise.href, {supervise: true});
      });
      return actor;
    }
    function statusChanged() {
      $rootScope.$broadcast('op-expertise-status-changed');
      $rootScope.$broadcast('op-list-updated');
      reloadExpertise();
    }
    function reloadExpertise() {
      expertise.find(expertiseId).then(function(e) {
        vm.currentExpertise = e;
        refreshStatus();
        reloadActors();
        refreshParties();
      }, loadError);
    }
    function reloadActors() {
      vm.currentExpertise.actors().then(function(actorRes) {
        var actors = actorRes.data._embedded;
        vm.actors = ['magistrates', 'clerks', 'coExperts', 'sapitors', 'lawyers'].reduce(function(actorsMap, a) {
          actorsMap[a] = actors[a] && actors[a].map(actorLinksMapper);
          return actorsMap;
        }, {});
      });
    }
    function refreshParties() {
      vm.currentExpertise.parties().then(function(partyRes) {
        vm.partiesModel = partyRes.data._embedded.parties;
        $q.all(vm.partiesModel.map((function(pM) {
          return vm.currentExpertise.getParty(vm.partiesModel, pM.id);
        }))).then(function(res) {
          vm.partiesModel = res;
          vm.partiesModel.forEach(function(partyInfo) {
            if (typeof vm.partiesExpandModel[partyInfo.id] === 'undefined') {
              vm.partiesExpandModel[partyInfo.id] = false;
            }
          });
        });
      });
    }
    function refreshStatus() {
      vm.currentExpertise.getStatus().then(function(statusRes) {
        var transTargets = statusRes.data.transitionTargets;
        vm.dds.cfg.options.forEach(function(currOption) {
          currOption.selected = (currOption.status === statusRes.data.status);
          currOption.hidden = (transTargets.indexOf(currOption.status) === -1) && !currOption.selected;
        });
        $timeout(function() {
          vm.currentExpertise.status = statusRes.data.status;
          vm.selectedStatus = _.pluck(vm.dds.cfg.options, 'status').indexOf(statusRes.data.status);
        });
      }, function() {
        vm.selectedStatus = _.pluck(vm.dds.cfg.options, 'status').indexOf(vm.currentExpertise.status);
      });
    }
    $scope.$on('op-expertise-name-changed', function() {
      expertise.find(vm.currentExpertise.id).then(function(e) {
        vm.currentExpertise.name = e.name;
        $rootScope.$broadcast('op-list-updated');
      });
    });
    $scope.$on('op-expertise-taxation-date-changed', function() {
      expertise.find(vm.currentExpertise.id).then(function(e) {
        vm.currentExpertise.taxationDate = e.taxationDate;
        $rootScope.$broadcast('op-list-updated');
      });
    });
    $scope.$on('user-directory-selection', function(evt, role, actors) {
      vm.currentExpertise.addActor(role, actors[0].id).then(function() {
        $rootScope.$broadcast('expertise-actors-updated');
        reloadExpertise();
      });
    });
    $scope.$on('lawyer-directory-and-parties-selection', function() {
      refreshParties();
    });
    $scope.$on('user-form-created', function() {
      refreshParties();
      reloadActors();
    });
    $scope.$on('expertise-files-parties-updated', function() {
      refreshParties();
    });
    function openModal(template) {
      return basicModal.open('common/template/op-modal-background/op-modal-background.tpl.html', null, {
        expertiseId: vm.currentExpertise.id,
        opTemplateContainer: template
      });
    }
    vm.renameExpertise = function() {
      openModal('app/create-expertise/create-expertise.tpl.html');
    };
    vm.addParty = function() {
      basicModal.open('common/template/op-modal-background/op-modal-background.tpl.html', null, {
        currentExpertise: vm.currentExpertise,
        opTemplateContainer: 'app/expertise-details/administration/create-party/create-party.tpl.html'
      }).then(function() {
        $rootScope.$broadcast('expertise-files-parties-updated');
      });
    };
    vm.renameParty = function(party) {
      basicModal.open('common/template/op-modal-background/op-modal-background.tpl.html', null, {
        currentExpertise: vm.currentExpertise,
        currentParty: party,
        opTemplateContainer: 'app/expertise-details/administration/create-party/create-party.tpl.html'
      }).then(function() {
        $rootScope.$broadcast('expertise-files-parties-updated');
      });
    };
    vm.addPartyMember = function() {
      openModal('app/expertise-details/administration/add-party-member/add-party-member.tpl.html');
    };
    vm.addMemberToParty = function(party) {
      $scope.openSidePanel('sp-user-form', {params: {
          mode: 'CREATE',
          userRole: 'SPRINGBREAKER',
          party: party
        }});
    };
    vm.addLawyerToParty = function(party) {
      $scope.openSidePanel('global-sp-users-experts-directory', {params: {
          selectionLimit: {
            min: 1,
            max: 1
          },
          search: 'LAWYER',
          currentExpertise: vm.currentExpertise,
          partyId: party.id
        }});
    };
    vm.updatePartyForLawyer = function(lawyer) {
      basicModal.open('common/template/op-modal-background/op-modal-background.tpl.html', null, {
        currentExpertise: vm.currentExpertise,
        lawyer: lawyer._embedded.actor,
        opTemplateContainer: 'app/expertise-details/administration/add-lawyer-to-parties/add-lawyer-to-parties.tpl.html'
      }).then(function(res) {
        if (!res) {
          return;
        }
        refreshParties();
      });
    };
    vm.updateTaxationDate = function() {
      openModal('app/expertise-details/administration/update-taxation/update-taxation.tpl.html');
    };
    vm.setActive = function(actor, isActive) {
      actor.setActive(isActive).then(function() {
        actor.isActive = isActive;
        reloadActors();
      });
      actor.activationMenu = false;
    };
    vm.setActiveMember = function(member, isActive) {
      $ooHttp.put(member._links.activate.href, {isActive: isActive}).then(function() {
        member.isActive = isActive;
      });
      member.activationMenu = false;
    };
    vm.setActiveLawyer = function(lawyer, isActive) {
      $ooHttp.put(lawyer._links.activate.href, {isActive: isActive}).then(function() {
        lawyer._embedded.actor.isActive = isActive;
      });
      lawyer.activationMenu = false;
    };
    vm.setSupervise = function(magistrate) {
      magistrate.setSupervise().then(function() {
        reloadExpertise();
      });
    };
    vm.addActor = function(role) {
      function openDirectory() {
        $scope.openSidePanel('global-sp-users-experts-directory', {params: {
            selectionLimit: {
              min: 1,
              max: 1
            },
            search: role.toUpperCase(),
            expertiseId: vm.currentExpertise.id
          }});
      }
      if (role === 'SAPITOR') {
        return openModal('app/expertise-details/administration/add-sapitor/add-sapitor.tpl.html').then(function(isExpert) {
          if (isExpert) {
            return openDirectory();
          }
          $scope.openSidePanel('sp-user-form', {params: {
              mode: 'CREATE',
              userRole: 'SAPITOR',
              currentExpertise: vm.currentExpertise
            }});
        });
      }
      openDirectory();
    };
    vm.expandOrCollapseParty = function(partyId) {
      vm.partiesExpandModel[partyId] = !vm.partiesExpandModel[partyId];
    };
    vm.editSpringBreaker = function(springBreaker) {
      $scope.openSidePanel('sp-user-form', {params: {
          mode: 'MODIFY',
          userRole: 'SPRINGBREAKER',
          user: new SpringBreakerDecorator(springBreaker),
          expertiseStatus: vm.currentExpertise.status
        }});
    };
    vm.editSapitor = function(sapitor) {
      $scope.openSidePanel('sp-user-form', {params: {
          mode: 'MODIFY',
          userRole: 'SAPITOR',
          user: new SapitorDecorator(sapitor),
          expertiseStatus: vm.currentExpertise.status
        }});
    };
    vm.getPartyTypeText = function(typeOfParty) {
      return party.types.find((function(type) {
        return type.typeName === typeOfParty;
      })).label;
    };
    try {
      reloadExpertise();
    } catch (e) {
      $scope.close();
    }
  }
  angular.module('op.expertiseDetails.administration').controller('AdministrationCtrl', AdministrationCtrl);
  return {};
});
