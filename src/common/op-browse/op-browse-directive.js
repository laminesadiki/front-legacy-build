define("common/op-browse/op-browse-directive", ['./_module'], function($__0) {
  "use strict";
  var __moduleName = "common/op-browse/op-browse-directive";
  function require(path) {
    return $traceurRuntime.require("common/op-browse/op-browse-directive", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  var ngModule = $__0.ngModule;
  function BrowseItem(attrs) {
    if (attrs && (!attrs.id || !attrs.name || typeof attrs.isFolder === 'undefined')) {
      throw new Error('BrowseItem instanciation error. Provide at least `id`, `name` and `isFolder`. Got: ' + JSON.stringify(attrs));
    }
    attrs && angular.extend(this, {
      id: attrs.id,
      name: attrs.name,
      isFolder: attrs.isFolder,
      isLeaf: attrs.isLeaf,
      model: attrs.model,
      icon: attrs.icon
    });
  }
  BrowseItem.prototype.addChildren = function(items) {
    var currentItem,
        i;
    this.children = [];
    this.folders = [];
    for (i = 0; i < items.length; ++i) {
      currentItem = new BrowseItem(items[i]);
      currentItem.isFolder && this.folders.push(currentItem);
      this.children.push(currentItem.model);
    }
    this.isVisited = true;
    !this.folders.length && (this.isLeaf = true);
  };
  BrowseItem.prototype.folder = function(id) {
    for (var i = 0; i < this.folders.length; ++i) {
      if (this.folders[i].id === id) {
        return this.folders[i];
      }
    }
  };
  BrowseItem.prototype.unload = function() {
    this.folders = this.children = undefined;
    this.isVisited = false;
  };
  function opBrowse() {
    function OpBrowseCtrl($scope, $rootScope, $q) {
      var vm = this,
          selectedFolder,
          dpo;
      vm.root;
      selectedFolder = vm.root;
      $scope.$on('op.browse.init', function(evt, config) {
        (dpo = config).initialize().then(function(rootItem) {
          try {
            vm.root = new BrowseItem(rootItem);
            vm.root.addChildren(rootItem.children);
            vm.browse(vm.root);
          } catch (e) {
            $rootScope.$broadcast('op.browse.error', e);
          }
        });
      });
      $scope.$on('op.browse.navigate', function(evt, nav, cb) {
        try {
          vm.traverse(nav).then(cb);
        } catch (e) {
          $rootScope.$broadcast('op.browse.error', e);
        }
      });
      vm.getVisitedFolders = function(folder) {
        if (!folder.folders) {
          return;
        }
        folder.folders.forEach((function(f) {
          if (f.isVisited) {
            vm.visitedFolders.push(f.id);
            vm.getVisitedFolders(f);
          }
        }));
      };
      vm.markNotCurrentFoldersAsUnvisited = function(folder, path) {
        if (!folder.folders) {
          return;
        }
        folder.folders.forEach((function(f) {
          if (path.indexOf(f.id) < 0) {
            f.isVisited = false;
            vm.markNotCurrentFoldersAsUnvisited(f, path);
          }
        }));
      };
      vm.expandVisitedFolders = function(folder) {
        if (!folder.folders) {
          return;
        }
        folder.folders.forEach((function(f) {
          if (!f.expanded && vm.visitedFolders.indexOf(f.id) > -1) {
            vm.toggle(f).then((function() {
              return vm.expandVisitedFolders(f);
            }));
          } else {
            vm.expandVisitedFolders(f);
          }
        }));
      };
      vm.refreshFolder = function(path) {
        try {
          var d = $q.defer();
          vm.visitedFolders = [];
          vm.getVisitedFolders(vm.root);
          var parentFolder = path.reduce(function(pre, id) {
            var childFolder = pre.folder(id);
            if (!childFolder) {
              return pre;
            }
            return (vm.isSelected(childFolder) ? pre : childFolder);
          }, vm.root);
          parentFolder.isVisited = false;
          vm.navigate(parentFolder).then(function(f) {
            var currentFolder = f.folder(selectedFolder.id);
            if (!currentFolder) {
              return d.resolve();
            }
            vm.browse(currentFolder).then((function() {
              return d.resolve();
            }));
          });
          return d.promise;
        } catch (e) {
          $rootScope.$broadcast('op.browse.error', e);
        }
      };
      $scope.$on('op.browse.refresh-only-current', function(evt, path) {
        vm.refreshFolder(path).then((function() {
          return vm.expandVisitedFolders(vm.root);
        }));
      });
      $scope.$on('op.browse.refresh', function(evt, path) {
        vm.refreshFolder(path).then((function() {
          return vm.markNotCurrentFoldersAsUnvisited(vm.root, path);
        }));
      });
      vm.traverse = function(nav) {
        var browseId,
            path = nav.path,
            absolute = nav.absolute;
        if (!path || !angular.isArray(path)) {
          throw new Error('You need to provide a `path` array of folder ids.');
        }
        if (absolute && !path.length) {
          return vm.browse(vm.root, nav.silent);
        }
        if (path.length === 1) {
          return vm.browse(absolute ? vm.root.folder(path[0]) : selectedFolder.folder(path[0]), nav.silent);
        }
        browseId = path.splice(-1, 1)[0];
        return path.reduce(function(p, id, i) {
          if (!i) {
            return vm.browse(p.folder(id));
          }
          return p.then(function(f) {
            return vm.browse(f.folder(id), true);
          });
        }, absolute ? vm.root : selectedFolder).then(function(parent) {
          return vm.browse(parent.folder(browseId), nav.silent);
        });
      };
      vm.navigate = function(folder) {
        return $q.when((folder.isVisited && folder) || dpo.browse(folder.model).then(function(items) {
          folder.addChildren(items);
          return folder;
        }));
      };
      vm.browse = function(folder, silent) {
        folder.expanded = true;
        return vm.navigate(folder).then(function(f) {
          !silent && (selectedFolder = f);
          !silent && $rootScope.$broadcast('op.browse', f.children, f.model);
          $rootScope.$broadcast('op.browse.changed');
          return folder;
        });
      };
      vm.toggle = function(folder) {
        folder.expanded = !folder.expanded;
        if (folder.expanded && !folder.isVisited) {
          return vm.browse(folder, true);
        } else {
          folder.unload();
          $rootScope.$broadcast('op.browse.changed');
        }
      };
      vm.isSelected = function(folder) {
        return folder === selectedFolder;
      };
    }
    return {
      restrict: 'AE',
      controller: OpBrowseCtrl,
      controllerAs: 'vm',
      bindToController: true,
      templateUrl: 'common/op-browse/op-browse-directive.tpl.html'
    };
  }
  ngModule.directive('opBrowse', opBrowse);
  return {};
});
