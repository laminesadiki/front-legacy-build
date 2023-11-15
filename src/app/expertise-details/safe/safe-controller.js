define("app/expertise-details/safe/safe-controller", ['common/models/expertise/expertise-service', 'common/op-browse/op-browse', 'common/op-list-selection/op-list-selection-directive', 'common/op-upload-directive/op-upload', './folder-modal/folder-modal-controller', 'common/models/expertise/item-decorator-service'], function($__0,$__1,$__2,$__3,$__4,$__5) {
  "use strict";
  var __moduleName = "app/expertise-details/safe/safe-controller";
  function require(path) {
    return $traceurRuntime.require("app/expertise-details/safe/safe-controller", path);
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
  $__0;
  $__1;
  $__2;
  $__3;
  $__4;
  $__5;
  angular.module('op.expertiseDetails.safe', ['op.models.me', 'oo.i18n', 'oo.config', 'op.models.expertise', 'oo.http', 'op.browse', 'op.upload', 'oui.fileIcons', 'op.list.selection', 'oui.collection.sort', 'oui.basicModal', 'op.expertiseDetails.safe.newFolder', 'op.models.expertise.itemDecorator', 'oui.msg.modal']);
  function SafeCtrl($scope, $interval, $element, $ooHttp, $i18n, _, expertise, $fileIcons, $q, $timeout, basicModal, ItemDecorator, $ouiMsgModal, me) {
    me.info().then((function(info) {
      return $scope.userInfo = info.data;
    }));
    var vm = this,
        expertiseId = $scope.getSidePanelParams('expertiseId'),
        itemRowClicked = false;
    vm.currentExpertise;
    vm.rootItem;
    vm.expertiseName;
    vm.items = [];
    vm.breadcrumbItems;
    vm.currentFolder;
    vm.itemsLoaded;
    vm.displayState = 'browse';
    vm.noRootsTitle;
    var initBrowsePromise = $q.defer();
    vm.uploadUrl;
    vm.uploadFiles = [];
    vm.createFolderUrl;
    vm.uploadActionCfg = {
      handleDownload: function(file) {
        _download(file.model);
      },
      handleTokenDownload: function(file) {
        window.open($ooHttp.apiRoot() + file.model._links.timestamp.href, '_blank', '');
      }
    };
    vm.incompleteUploads = function() {
      return vm.uploadFiles.some(function(f) {
        return f.state !== 'uploaded';
      });
    };
    $scope.$watch(function() {
      return vm.items;
    }, function(oldItems, newItems) {
      if ((oldItems.length === newItems.length) && !newItems.some((function(newItem) {
        return (oldItems.indexOf(newItem) === -1);
      }))) {
        return;
      }
      vm.uploadFiles.splice(0, vm.uploadFiles.length);
      $timeout(function() {
        vm.items.length && $('.l-safe .op-upload-drop-zone-button').addClass('op-upload-drop-zone-button-lefted');
      }, 100);
    });
    $interval(function() {
      if (vm.incompleteUploads()) {
        return;
      }
      var transferringFiles = vm.items.some(function(f) {
        return vm.isTransferringFile(f);
      });
      if (transferringFiles) {
        refreshFolder();
      }
    }, 10000);
    $scope.$watch(function() {
      if (!vm.uploadFiles.length) {
        return;
      }
      return !vm.incompleteUploads();
    }, function(uploadFinished) {
      if (!uploadFinished) {
        return;
      }
      refreshFolder();
    });
    function _download(item) {
      window.open($ooHttp.apiRoot() + item._links.download.href, '_blank');
      $timeout(function() {
        refreshFolder();
      }, 1500);
    }
    vm.isDownloadDisabled = function() {
      var checkedItems = vm.items.filter(function(i) {
        return i.checked;
      });
      if (!checkedItems.length) {
        return true;
      }
      return checkedItems.some(function(i) {
        return !i._links.download || i._links.isLocked;
      });
    };
    vm.downloadSelectedItems = function() {
      vm.currentExpertise.createBundle(vm.items.filter(function(i) {
        return i.checked;
      }).map(function(i) {
        return i.id;
      })).then(function(bundle) {
        window.open($ooHttp.apiRoot() + bundle.data._links.self.href, '_blank');
        $timeout(function() {
          refreshFolder();
        }, 2000);
      });
    };
    function _checkedFolders() {
      return vm.items.filter(function(i) {
        return i.checked && !i.isFile;
      });
    }
    vm.processFolder = function(mode) {
      basicModal.open('common/template/op-modal-background/op-modal-background.tpl.html', null, {
        opTemplateContainer: 'app/expertise-details/safe/folder-modal/folder.tpl.html',
        mode: mode,
        parentItem: vm.currentFolder,
        currentItem: _checkedFolders()[0]
      }).then(function() {
        refreshFolder();
      });
    };
    vm.deleteFolder = function() {
      $q.all(_checkedFolders().map(function(deletableFolder) {
        return (new ItemDecorator(deletableFolder)).delete();
      })).then(function() {
        refreshFolder();
      });
    };
    vm.canRename = function() {
      var checkedFolders = _checkedFolders();
      return checkedFolders && checkedFolders.length === 1 && checkedFolders[0]._links.rename;
    };
    vm.canDelete = function() {
      var checkedFolders = _checkedFolders();
      return checkedFolders.length && checkedFolders.every(function(folder) {
        return folder._links.delete;
      });
    };
    function folderSort(list, element, isAsc) {
      return _(list).chain().sortBy(element).tap(function(s) {
        !isAsc && s.reverse();
      }).sortBy('isFile').value();
    }
    vm.sorts = [{
      name: 'date',
      text: 'i18n:op.item.depositeDate',
      sort: function(isAsc) {
        vm.items = folderSort(vm.items, 'creationDate', isAsc);
      }
    }, {
      name: 'name',
      text: 'i18n:op.item.fileName',
      sort: function(isAsc) {
        vm.items = folderSort(vm.items, 'name', isAsc);
      }
    }, {
      name: 'depositary',
      text: 'i18n:op.item.depositaryName',
      sort: function(isAsc) {
        vm.items = folderSort(vm.items, function(i) {
          return i.isFile && i._embedded.depositary.lastName;
        }, isAsc);
      }
    }];
    vm.currentSort = vm.sorts[0];
    vm.sortAsc = true;
    $scope.$watchGroup([function() {
      return vm.sortName;
    }, function() {
      return vm.sortAsc;
    }], function() {
      vm.currentSort && vm.currentSort.sort(vm.sortAsc);
    });
    $scope.$watch(function() {
      return vm.breadcrumbItems;
    }, function() {
      vm.shownBreadcrumbs = angular.copy(vm.breadcrumbItems);
      $timeout(displayBreadcrumb);
    });
    $scope.$on('op.listSelection.unchecked', function() {
      _.each(vm.items, function(i) {
        i.checked = false;
      });
      $scope.$broadcast('op.listSelection.select', {
        isAllSelected: false,
        selection: []
      });
    });
    $scope.$on('op.listSelection.checked', function() {
      $scope.$broadcast('op.listSelection.select', {
        isAllSelected: true,
        selection: _.map(vm.items, function(i) {
          i.checked = true;
        })
      });
    });
    $scope.$on('op.browse.error', function(evt, e) {
      console.log(e);
    });
    $scope.$on('expertise-files-parties-updated', function() {
      initBrowse();
    });
    $scope.$on('items-shared', function() {
      refreshFolder();
    });
    $scope.$on('expertise-actors-updated', function() {
      initBrowse();
    });
    $scope.$on('op-expertise-name-changed', function() {
      initBrowse();
    });
    $scope.$on('op-expertise-status-changed', function() {
      $scope.$broadcast('op.browse.refresh', vm.breadcrumbItems.map((function(item) {
        return item.id;
      })));
    });
    $scope.$on('op.browse', function(evt, items, folder) {
      if (!vm.uploadFiles.every(function(f) {
        return (f.state === 'uploaded' || f.state === 'uploadError');
      })) {
        return;
      }
      vm.currentFolder = folder;
      var isRoot = vm.rootItem.id === folder.id;
      ((isRoot && $q.when([])) || $ooHttp.get(folder._links.self.href + '/path').then(function(d) {
        return $q.when(d.data.path.concat(folder));
      })).then(function(breadcrumbItems) {
        vm.breadcrumbItems = breadcrumbItems;
        vm.items = _.map(items, function(i) {
          i.read = !!(i._links && i._links.download);
          i.checked = false;
          return i;
        });
        ['upload', 'createFolder'].forEach(function(affordance) {
          var affordanceName = affordance + 'Url';
          vm[affordanceName] = folder && folder._links && folder._links.upload && folder._links[affordance].href;
          vm[affordanceName] && (vm[affordanceName] = $ooHttp.apiRoot() + vm[affordanceName]);
        });
        $scope.$broadcast('op.listSelection.select', {
          isAllSelected: false,
          selection: []
        });
        vm.currentSort.sort(vm.sortAsc);
        vm.itemsLoaded = true;
        initBrowsePromise.resolve();
      });
    });
    function _navigate(paths) {
      $scope.$broadcast('op.browse.navigate', {
        absolute: true,
        path: paths.map(function(bcp) {
          return bcp.id;
        })
      });
    }
    function navigate(item) {
      if (item.isFile) {
        return;
      }
      vm.itemsLoaded = false;
      $scope.$broadcast('op.browse.navigate', {path: [item.id]});
    }
    vm.back = function() {
      vm.incompleteUploads() ? $scope.$broadcast('op.browse') : _navigate(vm.breadcrumbItems.slice(0, -1));
    };
    vm.openBreadcrumb = function(bci) {
      if (bci.ellipsis) {
        return;
      }
      var bciIndex = _.pluck(vm.breadcrumbItems, 'id').indexOf(bci.id) + 1;
      if (bciIndex === vm.breadcrumbItems.length) {
        return;
      }
      if (vm.incompleteUploads()) {
        $scope.$broadcast('op.browse');
        return;
      }
      vm.itemsLoaded = false;
      _navigate(vm.breadcrumbItems.slice(0, bciIndex));
    };
    function displayBreadcrumb() {
      var $opBreadcrumb = $('.l-safe .op-breadcrumb'),
          $breadCrumbContainer = $('.l-safe-title-breadcrumb'),
          collapsed = false;
      if (!vm.breadcrumbItems || vm.breadcrumbItems.length < 1) {
        return;
      }
      while ($breadCrumbContainer.width() <= $opBreadcrumb.width()) {
        if (!collapsed) {
          $scope.$apply(vm.shownBreadcrumbs.splice(1, 1, {
            name: '…',
            ellipsis: true
          }));
          collapsed = true;
        } else {
          $scope.$apply(vm.shownBreadcrumbs.splice(2, 1));
        }
        if (vm.shownBreadcrumbs.length <= 3) {
          break;
        }
      }
    }
    function refreshFolder() {
      $scope.$broadcast('op.browse.refresh-only-current', vm.breadcrumbItems.map((function(item) {
        return item.id;
      })));
    }
    function toggleCheck(item) {
      var selectedItems;
      if (vm.isTransferringFile(item)) {
        item.checked = false;
        return;
      }
      item.checked = !item.checked;
      selectedItems = vm.items.filter(function(i) {
        return i.checked && (!i.isFile || i._links.timestamp);
      });
      $scope.$broadcast('op.listSelection.select', {
        isAllSelected: (selectedItems.length === vm.items.length),
        selection: selectedItems
      });
    }
    vm.getIcon = function(filename, folder) {
      if (folder) {
        return $fileIcons.folderIconPath(32);
      }
      return $fileIcons.fileIconPath(filename, 32);
    };
    vm.downloadItem = function(item) {
      window.open($ooHttp.apiRoot() + item._links.download.href, '_blank');
      $timeout(function() {
        refreshFolder();
      }, 1500);
    };
    vm.downloadToken = function(item) {
      window.open($ooHttp.apiRoot() + item._links.timestamp.href, '_blank');
    };
    vm.itemRowClicked = function(item) {
      $timeout(function() {
        itemRowClicked = false;
      }, 250);
      if (itemRowClicked) {
        navigate(item);
      } else {
        itemRowClicked = true;
        toggleCheck(item);
      }
    };
    vm.isTimestampedFile = function(item) {
      return item.isFile && item._links.timestamp;
    };
    vm.isTransferringFile = function(item) {
      return item.isFile && !item._links.timestamp && !item.isLocked;
    };
    vm.noHover = function(item) {
      return !item.isFile || (!item._links.visualize && !item._links.download && !item._links.lock && !item.isLocked);
    };
    vm.isSharable = function() {
      return vm.items.length && vm.items.some((function(i) {
        return i._links.share;
      }));
    };
    vm.selectionIsNotSharable = function() {
      var selection = vm.items.filter((function(i) {
        return i.checked;
      }));
      return !selection.length || selection.some((function(i) {
        return !i._links.share;
      }));
    };
    vm.share = function() {
      var items = arguments[0] !== (void 0) ? arguments[0] : vm.items.filter((function(i) {
        return i.checked;
      }));
      if (!vm.isSharable()) {
        return;
      }
      vm.currentExpertise.share(items.map((function(i) {
        return i.id;
      }))).then(function(share) {
        $scope.openSidePanel('sp-share', {params: {share: share.data}});
      });
    };
    vm.sharedWithText = function(item) {
      return $i18n('op.item.sharedWith', [item.sharedCount]);
    };
    vm.lockItem = function(item) {
      $ouiMsgModal.show('i18n:op.lock.confirm.title', {
        closable: false,
        iconName: 'warning-reverse',
        msg: $i18n('op.lock.confirm.text', [item.name]),
        cls: 'light-modal',
        buttons: [{
          text: 'i18n:common.yes',
          cls: 'op-btn-blue',
          onClick: function() {
            $ouiMsgModal.hide();
            $ooHttp.put(item._links.lock.href).then((function() {
              return refreshFolder();
            }), (function() {
              return $ouiMsgModal.show('i18n:common.error', 'i18n:op.loadError');
            }));
          }
        }, {
          text: 'i18n:common.no',
          cls: 'op-btn-gray',
          onClick: function() {
            $ouiMsgModal.hide();
          }
        }]
      });
    };
    function buildBrowseItem(ei) {
      var browseItem = {
        id: ei.id,
        name: ei.name,
        isFolder: !ei.isFile,
        model: ei
      };
      !ei.isFile && (browseItem.isLeaf = ei.isLeaf);
      ei.confidential && (browseItem.icon = 'folder-confidential');
      return browseItem;
    }
    function initBrowse() {
      try {
        expertise.find(expertiseId).then(function(currentExpertise) {
          vm.currentExpertise = currentExpertise;
          vm.expertiseName = currentExpertise.name;
          $scope.$emit('setAdmin', currentExpertise.isAdmin, $scope.getSidePanelParams('openPage'));
          $scope.$emit('setLinks', currentExpertise._links, $scope.getSidePanelParams('openPage'));
          $scope.$broadcast('op.browse.init', {
            initialize: function() {
              return currentExpertise.getRootItem().then(function(rootItem) {
                var expertiseItems = rootItem._embedded.children;
                if (!expertiseItems || !expertiseItems.length) {
                  vm.displayState = 'noRoots';
                  if (currentExpertise.status === 'COMPLETING') {
                    vm.noRootsTitle = $i18n('op.item.empty.completing');
                  } else if (currentExpertise.status === 'TAXATION_COMPLEMENT') {
                    vm.noRootsTitle = $i18n('op.item.empty.taxationComplement');
                  }
                }
                vm.rootItem = buildBrowseItem(rootItem);
                vm.rootItem.children = expertiseItems.map((function(ei) {
                  return buildBrowseItem(ei);
                }));
                return vm.rootItem;
              });
            },
            browse: function(item) {
              return $ooHttp.get(item._links.self.href).then(function(res) {
                return _.map(res.data._embedded.children, function(ei) {
                  return buildBrowseItem(ei);
                }) || [];
              });
            }
          });
        }, function() {
          $scope.close();
        });
      } catch (e) {
        $scope.close();
      }
      return initBrowsePromise.promise;
    }
    initBrowse().then(function() {
      $timeout(function() {
        var pathUrl = $scope.getSidePanelParams('path');
        if (!pathUrl) {
          return;
        }
        $ooHttp.get(pathUrl).then(function(pathData) {
          var path = pathData.data.path,
              item = pathData.data._embedded.item;
          if (!path) {
            return;
          }
          !item.isFile && path.push(item.id);
          $scope.$broadcast('op.browse.navigate', {
            absolute: true,
            path: path
          }, function() {
            item.isFile && $timeout(function() {
              vm.items.find((function(i) {
                return i.id === item.id;
              })).checked = true;
            }, 1000);
          });
        });
      });
    });
  }
  angular.module('op.expertiseDetails.safe').controller('SafeCtrl', SafeCtrl);
  return {};
});
