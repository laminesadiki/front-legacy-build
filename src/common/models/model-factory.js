define("common/models/model-factory", ['../oo-pagify/oo-pagify-service', '../underscore/underscore-service'], function($__0,$__1) {
  "use strict";
  var __moduleName = "common/models/model-factory";
  function require(path) {
    return $traceurRuntime.require("common/models/model-factory", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__1 || !$__1.__esModule)
    $__1 = {default: $__1};
  $__0;
  $__1;
  angular.module('op.model', ['oo.http', 'oo.pagify', 'op.underscore']);
  function modelFactory($ooHttp, _, pagify) {
    var model = {};
    function extractedPromise(promise, extractor) {
      if (!extractor) {
        return promise;
      }
      return promise.then(function(d) {
        return extractor(d.data);
      });
    }
    model.creatable = function(uri, extractor) {
      if (typeof uri !== 'string') {
        throw 'URI needs to be a string';
      }
      return _.maybe(function(obj) {
        return extractedPromise($ooHttp.post(uri, obj), extractor);
      });
    };
    model.findable = function(uri, pagified, extractor) {
      if (typeof uri !== 'string') {
        throw 'URI needs to be a string';
      }
      var computeResult = function(endpoint) {
        return extractedPromise($ooHttp.get(endpoint || uri), extractor);
      };
      return function(id) {
        if (typeof id === 'undefined') {
          return (!!pagified ? pagify(uri) : computeResult());
        }
        if (angular.isObject(id)) {
          return pagify([uri, $.param(id)].join('?'), extractor);
        }
        return computeResult([uri, id].join('/'));
      };
    };
    return model;
  }
  angular.module('op.model').factory('model', ['$ooHttp', '_', 'pagify', modelFactory]);
  return {};
});
