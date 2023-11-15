define("common/op-form-toggle-disable/op-form-toggle-disable-directive", [], function() {
  "use strict";
  var __moduleName = "common/op-form-toggle-disable/op-form-toggle-disable-directive";
  function require(path) {
    return $traceurRuntime.require("common/op-form-toggle-disable/op-form-toggle-disable-directive", path);
  }
  angular.module('op.form.toggle.disable', []);
  function clickOnce($timeout, $parse, $i18n) {
    return {
      restrict: 'A',
      compile: function($element, attr) {
        var fn = $parse(attr.ooPromiseClick, null, true);
        return function ngEventHandler(scope, element) {
          var replacementText = attr.ooLoadingMessageClick,
              originalText = attr.ooOriginalMessage,
              returnToOriginalState = function() {
                element.attr('disabled', false);
                if (replacementText) {
                  element.html($i18n(originalText));
                }
              };
          element.on('click', function(event) {
            var callback = function() {
              var value = fn(scope, {$event: event});
              if (!value || !angular.isFunction(value.then)) {
                return;
              }
              element.attr('disabled', true);
              if (replacementText) {
                element.html($i18n(replacementText));
              }
              value.then(function() {
                returnToOriginalState();
              }, function() {
                returnToOriginalState();
              });
            };
            scope.$apply(callback);
          });
        };
      }
    };
  }
  angular.module('op.form.toggle.disable').directive('ooPromiseClick', clickOnce);
  return {};
});
