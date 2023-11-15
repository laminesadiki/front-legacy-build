define("common/models/expertise/expertise-decorator-service", ['./party-decorator-service'], function($__0) {
  "use strict";
  var __moduleName = "common/models/expertise/expertise-decorator-service";
  function require(path) {
    return $traceurRuntime.require("common/models/expertise/expertise-decorator-service", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  $__0;
  angular.module('op.models.expertise.expertiseDecorator', ['oo.http', 'op.models.expertise.partyDecorator']);
  function expertiseDecorator($q, $ooHttp, _, pagify, PartyDecorator) {
    function promesify(p) {
      var d = $q.defer();
      p.then(function(data) {
        d.resolve(data);
      }, function(e) {
        d.reject(e);
      });
      return d.promise;
    }
    function _childrenPromise(children) {
      return $q.all(_.map(children, function(item) {
        return $ooHttp.get(item._links.self.href);
      })).then(function(items) {
        return _.map(items, function(res) {
          return new ExpertiseItem(res.data);
        });
      });
    }
    function ExpertiseItem(itemRepresentation) {
      this.model = itemRepresentation;
      this.getChildren = function() {
        if (itemRepresentation.isFile) {
          return;
        }
        return _childrenPromise(e._embedded.children);
      };
    }
    function ExpertiseDecorator(expertise) {
      angular.extend(this, expertise);
    }
    ExpertiseDecorator.prototype.getRootItem = function() {
      var d = $q.defer();
      $ooHttp.get(this._links.itemsList.href).then((function(data) {
        d.resolve(data.data);
      }), function(e) {
        d.reject(e);
      });
      return d.promise;
    };
    ExpertiseDecorator.prototype.changeStatus = function(newStatus) {
      return promesify($ooHttp.put(this._links.status.href, {status: newStatus}));
    };
    ExpertiseDecorator.prototype.getStatus = function() {
      return promesify($ooHttp.get(this._links.status.href));
    };
    ExpertiseDecorator.prototype.actors = function() {
      return promesify($ooHttp.get(this._links.actors.href));
    };
    ExpertiseDecorator.prototype.addActor = function(role, userId, partiesId) {
      var body = {id: userId};
      partiesId && (body.parties = partiesId);
      return promesify($ooHttp.post(this._links.actors.href + '?role=' + role, body));
    };
    ExpertiseDecorator.prototype.addSapitorUser = function(sapitor) {
      return promesify($ooHttp.post(this._links.actors.href + '?role=SAPITOR', sapitor));
    };
    ExpertiseDecorator.prototype.updateTaxation = function(taxationDate) {
      return promesify($ooHttp.put(this._links.taxationDate.href, {taxationDate: taxationDate}));
    };
    ExpertiseDecorator.prototype.parties = function() {
      return promesify($ooHttp.get(this._links.parties.href));
    };
    ExpertiseDecorator.prototype.getParty = function(parties, partyId) {
      var party = parties.find((function(p) {
        return p.id === partyId;
      }));
      if (!party) {
        throw new Error(("Can't find party with " + partyId + " id."));
      }
      return $ooHttp.get(party._links.self.href).then(function(res) {
        return new PartyDecorator(res.data);
      });
    };
    ExpertiseDecorator.prototype.createParty = function(name, type) {
      return promesify($ooHttp.post(this._links.parties.href, {
        name: name,
        type: type
      }));
    };
    ExpertiseDecorator.prototype.createBundle = function(itemIds) {
      return promesify($ooHttp.post(this._links.downloadBundle.href, {itemIds: itemIds}));
    };
    ExpertiseDecorator.prototype.share = function(items) {
      return promesify($ooHttp.get(this._links.share.href + '?items=' + items.join(',')));
    };
    ExpertiseDecorator.prototype.contradictory = function() {
      return promesify($ooHttp.get(this._links.contradictory.href));
    };
    ExpertiseDecorator.prototype.costTracking = function() {
      return promesify($ooHttp.get(this._links.costTracking.href));
    };
    return ExpertiseDecorator;
  }
  angular.module('op.models.expertise.expertiseDecorator').factory('ExpertiseDecorator', expertiseDecorator);
  return {};
});
