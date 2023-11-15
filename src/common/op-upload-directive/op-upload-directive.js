define("common/op-upload-directive/op-upload-directive", ['./_module', './op-upload-service'], function($__0,$__2) {
  "use strict";
  var __moduleName = "common/op-upload-directive/op-upload-directive";
  function require(path) {
    return $traceurRuntime.require("common/op-upload-directive/op-upload-directive", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  var ngModule = $__0.ngModule;
  $__2;
  var activeUploadCounter = 0,
      fileIdCounter = 0;
  function OpUploadCtrl($scope, $filter, $q, $timeout, $fileIcons, $ouiMsgModal, opUploadService, $rootScope, $i18n) {
    var vm = this,
        uploadFile,
        unloadEvtHandler,
        unloadWarning = $filter('i18n')('op.upload.unload.warning'),
        modalExitOnUpload,
        preventExitOnUpload;
    vm.fileModels = vm.fileModels || [];
    vm.uploadCounterMax = parseInt(vm.uploadCounterMax || 1, 10);
    angular.forEach(['handleDownload', 'handleTokenDownload', 'handleDelete'], function(handler) {
      vm[handler] = function(fileUploaded) {
        vm.uploadActionCfg && vm.uploadActionCfg[handler] && vm.uploadActionCfg[handler](fileUploaded, vm.fileModels);
      };
    });
    $scope.$on('op.browse', (function() {
      return (modalExitOnUpload());
    }));
    $scope.$on('$layout-page-beforeexit', (function(event) {
      return (event.promise = preventExitOnUpload(event));
    }));
    $scope.$on('$locationChangeStart', (function(event) {
      return (event.promise = preventExitOnUpload(event));
    }));
    modalExitOnUpload = function() {
      if (!activeUploadCounter) {
        return;
      }
      $ouiMsgModal.show('i18n:op.upload.unload.title', {
        closable: false,
        iconName: 'warning-reverse',
        msg: 'i18n:op.upload.unload.warning',
        cls: 'light-modal',
        buttons: [{
          text: 'OK',
          cls: 'op-btn-blue',
          onClick: function() {
            $ouiMsgModal.hide();
          }
        }]
      });
    };
    preventExitOnUpload = function(event) {
      if (!activeUploadCounter) {
        return;
      }
      event.preventDefault();
      modalExitOnUpload();
      return $q.reject();
    };
    vm.confirmAndUpload = function(files) {
      var filenames = getFilenames();
      $ouiMsgModal.show('i18n:op.upload.confirm.title', {
        closable: false,
        iconName: 'warning-reverse',
        msg: $i18n('op.upload.confirm.text', [filenames]),
        cls: 'light-modal',
        buttons: [{
          text: 'i18n:common.yes',
          cls: 'op-btn-blue',
          onClick: function() {
            $ouiMsgModal.hide();
            vm.uploadFiles(files);
          }
        }, {
          text: 'i18n:common.no',
          cls: 'op-btn-gray',
          onClick: function() {
            $ouiMsgModal.hide();
          }
        }]
      });
      function getFilenames() {
        var maxFilenames = arguments[0] !== (void 0) ? arguments[0] : 10;
        var filenames = "";
        var numberOfFilesToDisplay = Math.min(files.length, maxFilenames);
        for (var i = 0; i < numberOfFilesToDisplay; i++) {
          filenames = filenames + '\n - ' + files[i].name;
        }
        if (files.length > maxFilenames) {
          var numberOfRemainingFiles = files.length - maxFilenames;
          filenames = filenames + '\n\n' + $i18n('op.upload.confirm.text.moreFiles', [numberOfRemainingFiles]) + '...';
        }
        return filenames;
      }
    };
    vm.uploadFiles = function(files) {
      if (!files) {
        return;
      }
      angular.forEach(files, function(file) {
        vm.fileModels.push({
          id: fileIdCounter++,
          file: file,
          icon: $fileIcons.fileIconPath(file.name, 32),
          progress: 0,
          sizeUploaded: 0,
          state: 'waiting'
        });
        vm.fileModelsUpdate(vm.fileModels);
      });
    };
    vm.renderUploadError = function() {
      $ouiMsgModal.show('i18n:common.error', 'i18n:op.upload.uploadReadError');
    };
    unloadEvtHandler = function(evt) {
      evt.returnValue = unloadWarning;
      return unloadWarning;
    };
    uploadFile = function(fileModel) {
      fileModel.state = 'started';
      activeUploadCounter++;
      activeUploadCounter === 1 && window.addEventListener('beforeunload', unloadEvtHandler);
      vm.uploadPromise = opUploadService.upload(vm.uploadUrl, fileModel.file);
      vm.uploadPromise.then(function(f) {
        fileModel.model = f;
        fileModel.state = 'justUploaded';
        fileModel.date = new Date();
        $timeout(function() {
          fileModel.state = 'uploaded';
        }, 2500);
      }, function(reason) {
        if (reason === 'error') {
          fileModel.state = 'uploadError';
        }
        if (reason === 'conflict') {
          $ouiMsgModal.show('i18n:common.error', $i18n('op.upload.error.conflict', [fileModel.file.name]));
          fileModel.state = 'uploadError';
        }
      }, function(update) {
        fileModel.progress = update.progress;
        fileModel.sizeUploaded = update.uploadedValue;
      });
      vm.uploadPromise.finally(function() {
        activeUploadCounter--;
        activeUploadCounter === 0 && window.removeEventListener('beforeunload', unloadEvtHandler);
        vm.fileModelsUpdate(vm.fileModels);
      });
    };
    vm.fileModelsUpdate = function(fileModels) {
      angular.forEach(fileModels, function(fileModel) {
        if (activeUploadCounter >= vm.uploadCounterMax) {
          return;
        }
        if (fileModel.state === 'waiting') {
          uploadFile(fileModel);
        }
      });
    };
    vm.filterAddedFiles = function(files) {
      var modelNames = _.chain(vm.fileModels).pluck('file').pluck('name').value();
      return _.filter(files, function(f) {
        return modelNames.indexOf(f.name) < 0;
      });
    };
  }
  function getFileFromEntry(entry) {
    return new Promise((function(resolve) {
      return entry.file((function(file) {
        return resolve(file);
      }));
    }));
  }
  function getFilesFromItems(items) {
    return new Promise((function(resolve) {
      var filesPromises = [];
      for (var i = 0; i < items.length; i++) {
        var entry = items[i].kind !== 'file' ? undefined : items[i].webkitGetAsEntry();
        if (!entry || !entry.isFile) {
          continue;
        }
        filesPromises.push(getFileFromEntry(entry));
      }
      Promise.all(filesPromises).then((function(files) {
        return resolve(files);
      }));
    }));
  }
  function isDataTransferItemSupported(dataTransfer) {
    return !!dataTransfer.items && !!dataTransfer.items[0].webkitGetAsEntry;
  }
  function getFilesFromDataTransfer(dataTransfer) {
    return isDataTransferItemSupported(dataTransfer) ? getFilesFromItems(dataTransfer.items) : Promise.resolve(dataTransfer.files);
  }
  function opUploadLink($scope, $element, $attrs, $controller) {
    var dropArea = $element.find('.op-upload-drop-zone'),
        filesUpload = $element.find('.op-upload-drop-zone-input'),
        opUpload = $element.find('.op-upload'),
        opUploadButton = $element.find('.op-upload-drop-zone-button'),
        ctrl = $controller;
    function prevented(fn) {
      return function(e) {
        e.preventDefault();
        e.stopPropagation();
        fn(e);
      };
    }
    filesUpload.on('change', function() {
      var filteredFiles = ctrl.filterAddedFiles(this.files);
      filteredFiles.length && ctrl.confirmAndUpload(filteredFiles);
      $(this).wrap('<form>').closest('form').get(0).reset();
      $(this).unwrap();
    });
    dropArea.on('dragenter', prevented(function() {
      opUploadButton.addClass('op-upload-drop-zone-over');
    })).on('dragleave', prevented(function() {
      opUploadButton.removeClass('op-upload-drop-zone-over');
    })).on('dragover', prevented(function() {
      opUploadButton.addClass('op-upload-drop-zone-over');
    })).on('drop', prevented(function(evt) {
      getFilesFromDataTransfer(evt.originalEvent.dataTransfer).then((function(files) {
        var filteredFiles = ctrl.filterAddedFiles(files);
        opUploadButton.removeClass('op-upload-drop-zone-over');
        filteredFiles.length ? ctrl.confirmAndUpload(filteredFiles) : ctrl.renderUploadError();
      }));
    }));
    opUpload.on('click', '.oot-table-list-info-progress-cancel', function() {
      var id = $(this).data('fileid'),
          ids = _.pluck(ctrl.fileModels, 'id');
      $scope.$apply(function() {
        var fileToAbort = ctrl.fileModels.splice(ids.indexOf(id), 1);
        if (fileToAbort[0].state === 'started') {
          ctrl.uploadPromise.abort();
        }
      });
    });
    opUpload.on('click', '.oot-table-list-info-progress-error-close', function() {
      var id = $(this).data('fileid'),
          ids = _.pluck(ctrl.fileModels, 'id');
      $scope.$apply(function() {
        ctrl.fileModels.splice(ids.indexOf(id), 1);
      });
    });
  }
  function opUpload() {
    return {
      restrict: 'AE',
      scope: {
        uploadCounterMax: '@',
        uploadUrl: '@',
        fileModels: '=?',
        uploadActionCfg: '=?',
        preventDeleteAction: '=?'
      },
      controller: OpUploadCtrl,
      controllerAs: 'opUploadCtrl',
      bindToController: true,
      link: opUploadLink,
      templateUrl: 'common/op-upload-directive/op-upload-directive.tpl.html'
    };
  }
  ngModule.directive('opUpload', opUpload);
  return {};
});
