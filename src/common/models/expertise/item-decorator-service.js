define("common/models/expertise/item-decorator-service", [], function() {
  "use strict";
  var __moduleName = "common/models/expertise/item-decorator-service";
  function require(path) {
    return $traceurRuntime.require("common/models/expertise/item-decorator-service", path);
  }
  angular.module('op.models.expertise.itemDecorator', ['oo.http']);
  function itemDecorator($q, $ooHttp) {
    var ItemDecorator = function ItemDecorator(item) {
      angular.extend(this, item);
    };
    ($traceurRuntime.createClass)(ItemDecorator, {
      createFolder: function(name) {
        return $ooHttp.post(this._links.createFolder.href, {name: name});
      },
      rename: function(name) {
        return $ooHttp.put(this._links.rename.href, {name: name});
      },
      delete: function() {
        return $ooHttp.delete(this._links.delete.href);
      }
    }, {});
    return ItemDecorator;
  }
  angular.module('op.models.expertise.itemDecorator').factory('ItemDecorator', itemDecorator);
  return {};
});
