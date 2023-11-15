define("app/dashboard/dashboard-controller", ['common/models/expertise/expertise-service', 'common/models/designation/designation-service', 'common/models/termsofuse/termsofuse-service', 'app/notification-details/notification-details-controller', 'app/personal-info/personal-info-controller'], function($__0,$__1,$__2,$__3,$__4) {
  "use strict";
  var __moduleName = "app/dashboard/dashboard-controller";
  function require(path) {
    return $traceurRuntime.require("app/dashboard/dashboard-controller", path);
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
  $__0;
  $__1;
  $__2;
  $__3;
  $__4;
  angular.module('op.dashboard', ['oo.i18n', 'oo.config', 'op.models.expertise', 'op.models.designation', 'op.notificationDetails', 'op.models.me', 'op.models.termsofuse', 'oui.basicModal', 'oui.msg.modal', 'op.personal.info']);
  function DashboardCtrl($rootScope, $scope, expertise, designation, me, termsofuse, $ooConfig, $ouiMsgModal, $i18n, basicModal) {
    var vm = this;
    vm.openExpertiseDetails = function(expertiseId, path) {
      var params = {expertiseId: expertiseId};
      path && (params.path = path);
      $scope.openSidePanel('sp-expertise-details', {params: params});
    };
    if ((new Set(['SAPITOR', 'PARTYMEMBER'])).has($ooConfig().role)) {
      vm.openExpertiseDetails($ooConfig().expertiseId);
    }
    if ($ooConfig().role === 'EXPERT') {
      vm.welcomeMessage = $i18n('op.app.dashboard.title') + $i18n('op.expert');
    } else if ($ooConfig().role === 'MAGISTRATE') {
      vm.welcomeMessage = $i18n('op.app.dashboard.title') + $i18n('op.magistrate');
    } else if ($ooConfig().role === 'CLERK') {
      vm.welcomeMessage = $i18n('op.app.dashboard.title') + $i18n('op.clerk');
    } else if ($ooConfig().role === 'LAWYER') {
      $scope.openWorkspace('Workspace', 'expertises');
    }
    vm.expertises = [];
    vm.designations = [];
    function updateUser(firstName, lastName) {
      vm.fullName = [firstName, lastName].join(' ');
    }
    function getUser() {
      me.info().then(function(info) {
        updateUser(info.data.firstName, info.data.lastName);
        vm.currentUser = info.data;
      });
    }
    function onPersonalInfoUpdated(evt, userInfo) {
      updateUser(userInfo.firstName, userInfo.lastName);
      refreshLists();
    }
    function refreshLists() {
      expertise.search({
        sortBy: 'name',
        status: ['COMPLETING', 'IN_PROGRESS', 'TAXATION_COMPLEMENT']
      }).next().then(function(page) {
        vm.expertises = page && page.expertises;
        vm.hasMore = page && !!page.next;
      });
      var userRole = $ooConfig().role;
      if (userRole === 'EXPERT' || userRole === 'MAGISTRATE' || userRole === 'CLERK') {
        designation.find().next().then(function(page) {
          vm.designations = page && page.data._embedded.designations;
        });
      }
    }
    vm.openDesignationDetails = function(designationId) {
      designation.find(designationId).then(function(designation) {
        if (typeof designation.data.status !== 'undefined' && !['CANCELLED', 'INITIALIZED'].includes(designation.data.status)) {
          refreshLists();
          $ouiMsgModal.show($i18n('op.app.dashboard.designationChanged', [expertise.labelForStatus(designation.data.status)]), {
            msg: $i18n('op.app.dashboard.designationChanged.body', [designation.data.name]),
            closable: true,
            iconName: 'alert-circle',
            cls: 'light-modal light-modal-title',
            buttons: [{
              text: 'i18n:common.yes',
              cls: 'op-btn-purple',
              onClick: function() {
                $scope.openSidePanel('sp-expertise-details', {params: {expertiseId: designation.data.id}});
                $ouiMsgModal.hide();
              }
            }, {
              text: 'i18n:common.no',
              cls: 'op-btn-gray',
              onClick: $ouiMsgModal.hide
            }]
          });
          return;
        }
        $scope.openSidePanel('sp-designation-details', {params: {designationId: designationId}});
      });
    };
    vm.openExpertsDirectory = function() {
      $scope.openSidePanel('global-sp-users-experts-directory', {params: {search: 'EXPERT'}});
    };
    vm.createExpertise = function() {
      basicModal.open('common/template/op-modal-background/op-modal-background.tpl.html', null, {opTemplateContainer: 'app/create-expertise/create-expertise.tpl.html'});
    };
    vm.expertiseAction = function() {
      if ($ooConfig().role === 'LAWYER') {
        $scope.openWorkspace('Workspace', 'expertises');
        return;
      }
      $scope.openSidePanel('sp-expertise-details', {params: {expertiseId: $ooConfig().expertiseId}});
    };
    vm.viewPersonalInfo = function() {
      $scope.openSidePanel('sp-personal-info');
    };
    vm.canLogout = function() {
      return vm.currentUser && me.getLogoutHref(vm.currentUser);
    };
    vm.logout = function() {
      me.logout(vm.currentUser);
    };
    vm.reloadExpertises = function() {
      $scope.$broadcast('op-list-updated');
    };
    getUser();
    refreshLists();
    var shebangMatch = window.location.hash.match(/#!\/\?(.*)?/);
    var shebangActions = {
      path: function(url) {
        var decodedUrl = decodeURIComponent(url),
            expid = decodedUrl.match(/expertises\/(.*?)\//)[1];
        if (!expid) {
          return;
        }
        vm.openExpertiseDetails(expid, decodedUrl);
      },
      expid: function(id) {
        vm.openExpertiseDetails(id);
      }
    };
    if (shebangMatch) {
      var shebangs = shebangMatch[1] && shebangMatch[1].split('&');
      if (shebangs.length === 1) {
        var shebangAction = shebangs[0].split('=');
        shebangActions[shebangAction[0]](shebangAction[1]);
      }
    }
    $(document).bind('drop dragover', function(e) {
      if (e.target.type !== 'file') {
        e.preventDefault();
      }
    });
    $scope.$on('op-notification-created', function() {
      refreshLists();
    });
    $scope.$on('op-notification-replied', function() {
      refreshLists();
    });
    $scope.$on('op-notification-cancelled', function() {
      refreshLists();
    });
    $scope.$on('op-list-updated', function() {
      refreshLists();
    });
    $scope.$on('op-personal-info-updated', onPersonalInfoUpdated);
    $scope.init = function() {
      var role = $ooConfig('role');
      if (role === 'EXPERT' || role === 'SAPITOR') {
        termsofuse.info().then(function(info) {
          var userTermsOfUseInfos = info.data;
          if (userTermsOfUseInfos.mustAcceptNewTermsOfUseVersion) {
            vm.mustAcceptNewTermsOfUseVersion = userTermsOfUseInfos.mustAcceptNewTermsOfUseVersion;
            vm.latestTermsOfUseVersion = userTermsOfUseInfos.latestTermsOfUseVersion;
            requestNewTermsOfUseAcceptance();
          }
        });
      }
    };
    function maintenaceAlertPopup() {
      var visitedKey = "maintenance-seen";
      var found = document.cookie.split(';').find(function(el) {
        return el.trim().split('=').includes(visitedKey);
      });
      if (!found) {
        document.cookie = "maintenance-seen=true;";
        alert("A tous les utilisateurs de la plateforme Opalexe.\n\nUne intervention technique va nécessiter l'interruption totale du service du jeudi 18 aout à 18H00 au lundi 22 aout à 8H00.\nDurant cette interruption, la plateforme ne sera pas accessible.\n\nPour les experts uniquement\nle Lundi 22 aout Opalexe sera de nouveau accessible dans sa dernière version avec le paiement forfaitaire et les nouvelles modalités de paiement des expertises.\n\nPour toute information complémentaire, merci de contacter votre Président de compagnie, votre RRO ou le RNO\nNous vous remercions par avance pour votre compréhension\n\n                     Cordialement,\n                     L'équipe Oodrive");
      }
    }
    function requestNewTermsOfUseAcceptance() {
      $ouiMsgModal.show({
        title: 'i18n:op.app.dashboard.termsofuse.title',
        msg: 'i18n:op.app.dashboard.termsofuse.message',
        closable: false,
        iconName: 'alert-circle',
        cls: 'light-modal',
        buttons: [{
          text: 'i18n:op.app.dashboard.termsofuse.read',
          cls: 'op-btn-blue',
          onClick: vm.openTermsOfUseLink
        }, {
          text: 'i18n:op.app.dashboard.termsofuse.accept',
          cls: 'op-btn-blue',
          onClick: vm.acceptNewTermsOfUse
        }, {
          text: 'i18n:op.app.dashboard.termsofuse.later',
          cls: 'op-btn-blue l-dashboard-termsofuse-later-btn',
          onClick: $ouiMsgModal.hide
        }]
      });
    }
    $scope.init();
    vm.openTermsOfUseLink = function() {
      window.open($rootScope.getLinkTermsOfUse($ooConfig('role')), '_blank');
    };
    vm.acceptNewTermsOfUse = function() {
      var termsOfUseInfo = {
        latestTermsOfUseVersion: vm.latestTermsOfUseVersion,
        mustAcceptNewTermsOfUseVersion: vm.mustAcceptNewTermsOfUseVersion
      };
      $ouiMsgModal.hide();
      return termsofuse.acceptNewTermsOfUseVersion(termsOfUseInfo);
    };
  }
  angular.module('op.dashboard').controller('DashboardCtrl', DashboardCtrl);
  return {};
});
