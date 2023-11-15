define("common/oo-role-security/oo-role-security", [], function() {
  "use strict";
  var __moduleName = "common/oo-role-security/oo-role-security";
  function require(path) {
    return $traceurRuntime.require("common/oo-role-security/oo-role-security", path);
  }
  angular.module('oo-role-security', []);
  function ooRoleSecurityDirective($animate, ooRoleSecurity) {
    return {
      transclude: 'element',
      priority: 600,
      terminal: true,
      restrict: 'A',
      link: function($scope, $element, $attr, ctrl, $transclude) {
        var currentRole = ooRoleSecurity.role(),
            value = $attr.ooRoleSecurity.trim(),
            block,
            childScope,
            previousElements;
        if (!value.length) {
          return;
        }
        $scope.$watch(function() {
          return $attr.ooRoleSecurity.trim().split(' ').indexOf(currentRole) !== -1;
        }, function ngIfWatchAction(value) {
          if (value) {
            if (!childScope) {
              $transclude(function(clone, newScope) {
                childScope = newScope;
                clone[clone.length++] = document.createComment(' end ngIf: ' + $attr.ooRoleSecurity.trim().split(' ') + ' ');
                block = {clone: clone};
                $animate.enter(clone, $element.parent(), $element);
              });
            }
          } else {
            if (previousElements) {
              previousElements.remove();
              previousElements = null;
            }
            if (childScope) {
              childScope.$destroy();
              childScope = null;
            }
            if (block) {
              previousElements = getBlockNodes(block.clone);
              $animate.leave(previousElements).then(function() {
                previousElements = null;
              });
              block = null;
            }
          }
        });
      }
    };
  }
  angular.module('oo-role-security').directive('ooRoleSecurity', ooRoleSecurityDirective);
  function ooRoleSecurityFactory() {
    var _role;
    return {role: function(role) {
        if (role) {
          _role = role;
        }
        return _role;
      }};
  }
  angular.module('oo-role-security').factory('ooRoleSecurity', ooRoleSecurityFactory);
  return {};
});
