define("common/oo-pagify/oo-pagify-service", [], function() {
  "use strict";
  var __moduleName = "common/oo-pagify/oo-pagify-service";
  function require(path) {
    return $traceurRuntime.require("common/oo-pagify/oo-pagify-service", path);
  }
  angular.module('oo.pagify', ['oo.http']);
  function linkHeaderParser(headers) {
    var links = {},
        r,
        l,
        linkRegex = /(<\S+>;\s?rel="\w+")/g;
    if (!headers) {
      return;
    }
    l = headers('link') && headers('link').match(linkRegex);
    angular.forEach(l, function(_l) {
      var linkInfoRegex = /<(\S+)>;\s?rel="(\w+)"/;
      if (!(r = _l.match(linkInfoRegex))) {
        return;
      }
      links[r[2]] = r[1];
    });
    return links;
  }
  function pagifyService($ooHttp) {
    return function pagify(uri, modelExtractor) {
      var nextPage = function nextPage(pageUri) {
        if (!pageUri) {
          return;
        }
        return $ooHttp.get(pageUri).then(function(res) {
          var links = linkHeaderParser(res.headers),
              page = modelExtractor ? modelExtractor(res.data) : {data: res.data};
          if (links.next) {
            angular.extend(page, {next: angular.bind(null, nextPage, links.next)});
          }
          return page;
        });
      };
      return {next: angular.bind(null, nextPage, uri)};
    };
  }
  angular.module('oo.pagify').factory('pagify', ['$ooHttp', pagifyService]);
  return {};
});
