define("common/underscore/mixin", [], function() {
  "use strict";
  var __moduleName = "common/underscore/mixin";
  function require(path) {
    return $traceurRuntime.require("common/underscore/mixin", path);
  }
  _.mixin({
    mapObj: function(input, mapper) {
      return _.reduce(input, function(obj, v, k) {
        var mapped = mapper.call(this, k, v, input);
        return _.extend(obj, _.isArray(mapped) ? _.object([mapped]) : mapped);
      }, {});
    },
    maybe: function(fn) {
      return function() {
        var i;
        if (!arguments.length) {
          return;
        }
        for (i = 0; i < arguments.length; ++i) {
          if (arguments[i] == null) {
            return;
          }
        }
        return fn.apply(this, arguments);
      };
    }
  });
  return {};
});
