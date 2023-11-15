define("common/op-browse/op-browse-count-directive", ['./_module'], function($__0) {
  "use strict";
  var __moduleName = "common/op-browse/op-browse-count-directive";
  function require(path) {
    return $traceurRuntime.require("common/op-browse/op-browse-count-directive", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  var ngModule = $__0.ngModule;
  function opBrowseCount($timeout) {
    return {
      require: 'opBrowse',
      link: function($scope, element, attrs, browseCtrl) {
        function isJusticeUser() {
          var role = $scope.userInfo.role;
          return role === 'MAGISTRATE' || role === 'CLERK';
        }
        function isJusticeFolder(folder) {
          return folder.name === 'Magistrat' || folder.name === 'Greffe';
        }
        function shouldDisplayCount(isJusticeFolder) {
          if (isJusticeUser() && !isJusticeFolder) {
            return $scope.userInfo.subscribeToPartyNotifications;
          }
          return true;
        }
        function insertCounters() {
          function updateSubTree(n, justiceFolder) {
            if (!n) {
              return;
            }
            var $e,
                $c;
            $e = element.find('[data-id=' + n.id + '] > i');
            if (!justiceFolder) {
              justiceFolder = isJusticeFolder(n);
            }
            if (n.folders && n.folders.length) {
              $e.children().remove('.op-browse-new-count');
              n.folders.forEach(function(f) {
                updateSubTree(f, justiceFolder);
              });
              if (n.folders.length === n.children.length) {
                return;
              }
            }
            if (n.model && n.model.newCount && shouldDisplayCount(justiceFolder)) {
              $c = $e.children('.op-browse-new-count');
              if ($c.length < 1) {
                $e.append($('<span class=\"op-browse-new-count\">' + n.model.newCount + '</span>'));
              } else {
                $c.text(n.model.newCount);
              }
            }
          }
          updateSubTree(browseCtrl.root);
        }
        $scope.$on('op.browse.changed', function() {
          $timeout(insertCounters);
        });
      }
    };
  }
  ngModule.directive('opBrowseCount', opBrowseCount);
  return {};
});
