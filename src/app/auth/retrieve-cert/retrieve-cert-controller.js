define("app/auth/retrieve-cert/retrieve-cert-controller", [], function() {
  "use strict";
  var __moduleName = "app/auth/retrieve-cert/retrieve-cert-controller";
  function require(path) {
    return $traceurRuntime.require("app/auth/retrieve-cert/retrieve-cert-controller", path);
  }
  angular.module('op.retrieveCertificate', ['oo.i18n', 'oo.http', 'oo.config', 'oui.msg.modal', 'oui.fileIcons']);
  var RetrieveCertificateCtrl = function RetrieveCertificateCtrl($scope, $ooConfig, $ooHttp, $ouiMsgModal, $fileIcons, $i18n) {
    var vm = this,
        user = $ooConfig('session') && $ooConfig('session').user;
    vm.filenames = {
      CHROMEIE: $i18n('op.retrieveCertificate.guides.chromeie'),
      FF: $i18n('op.retrieveCertificate.guides.ff'),
      MACOS: $i18n('op.retrieveCertificate.guides.macos')
    };
    vm.pathToResources = 'resources/guides/';
    user && (vm.fullName = [user.firstName, user.lastName].join(' '));
    vm.download = function() {
      window.open($ooHttp.apiRoot() + $ooConfig('certificateUrl'), '_blank');
    };
    vm.getIcon = function(filename) {
      return $fileIcons.fileIconPath(filename, 32);
    };
  };
  ($traceurRuntime.createClass)(RetrieveCertificateCtrl, {}, {});
  angular.module('op.retrieveCertificate').controller('RetrieveCertificateCtrl', RetrieveCertificateCtrl);
  return {};
});
