define("common/models/designation/designation-service", ['../model-factory'], function($__0) {
  "use strict";
  var __moduleName = "common/models/designation/designation-service";
  function require(path) {
    return $traceurRuntime.require("common/models/designation/designation-service", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  $__0;
  angular.module('op.models.designation', ['oo.i18n', 'oo.http', 'op.model']);
  function designationFactory($q, $ooHttp, $i18n, model) {
    var defaultSearchCriteria = {status: ['INITIALIZED']};
    var designation = {searchCriteria: defaultSearchCriteria};
    designation.statuses = [{
      status: 'INITIALIZED',
      label: $i18n('op.expertises.status.initialized'),
      color: 'workspace-page-expertise-inprogress-color',
      icon: 'time'
    }, {
      status: 'CANCELLED',
      label: $i18n('op.expertises.status.cancelled'),
      color: 'workspace-page-expertise-rejected-color',
      icon: 'alert-circle'
    }];
    designation.isStatusFilterActive = function(status) {
      return _.contains(this.searchCriteria.status, status);
    };
    designation.getStatusFilters = function() {
      return this.searchCriteria.status;
    };
    designation.updateSearchCriteria = function(criteria) {
      Object.assign(this.searchCriteria, criteria);
      _.defaults(this.searchCriteria, defaultSearchCriteria);
    };
    designation.create = model.creatable('/designations', function(initializedDesignation) {
      initializedDesignation.submit = function(id) {
        var d = $q.defer();
        $ooHttp.post(initializedDesignation._links.submit.href, {expertId: id}).then(function(data) {
          d.resolve(data);
        }, function(e) {
          d.reject(e);
        });
        return d.promise;
      };
      return initializedDesignation;
    });
    designation.find = function(designationId) {
      var q = [];
      angular.forEach(designation.searchCriteria, function(value, key) {
        if (value) {
          q.push(key + '=' + value);
        }
      });
      var designationsUrl = designationId ? '/designations' : ('/designations?' + q.join('&'));
      return model.findable(designationsUrl, true, function(result) {
        var getDesignationItems = function() {
          var d = $q.defer();
          $ooHttp.get(result._links.itemsList.href).then(function(data) {
            d.resolve(data);
          }, function(e) {
            d.reject(e);
          });
          return d.promise;
        },
            reply = function(data) {
              var d = $q.defer();
              $ooHttp.post(result._links.reply.href, data).then(function(data) {
                d.resolve(data);
              }, function(e) {
                d.reject(e);
              });
              return d.promise;
            },
            cancel = function() {
              var d = $q.defer();
              $ooHttp.post(result._links.cancel.href).then(function(data) {
                d.resolve(data);
              }, function(e) {
                d.reject(e);
              });
              return d.promise;
            },
            remind = function() {
              var d = $q.defer();
              $ooHttp.post(result._links.remind.href).then(function(data) {
                d.resolve(data);
              }, function(e) {
                d.reject(e);
              });
              return d.promise;
            };
        return {
          data: result,
          items: getDesignationItems,
          reply: reply,
          cancel: cancel,
          remind: remind
        };
      })(designationId);
    };
    return designation;
  }
  angular.module('op.models.designation').factory('designation', ['$q', '$ooHttp', '$i18n', 'model', designationFactory]);
  return {};
});
