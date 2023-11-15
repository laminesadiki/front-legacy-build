define("common/models/expertise/expertise-service", ['../model-factory', './expertise-decorator-service'], function($__0,$__1) {
  "use strict";
  var __moduleName = "common/models/expertise/expertise-service";
  function require(path) {
    return $traceurRuntime.require("common/models/expertise/expertise-service", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__1 || !$__1.__esModule)
    $__1 = {default: $__1};
  $__0;
  $__1;
  angular.module('op.models.expertise', ['oo.i18n', 'oo.http', 'op.model', 'op.models.expertise.expertiseDecorator']);
  function expertiseFactory($q, $ooHttp, _, model, pagify, $i18n, ExpertiseDecorator) {
    var expertise = {searchCriteria: {}},
        defaultSearchCriteria = {
          sortBy: 'name',
          status: ['COMPLETING', 'IN_PROGRESS', 'TAXATION_COMPLEMENT']
        };
    expertise.name = function(expertiseId) {
      return expertise.find(expertiseId).then(function(e) {
        return $ooHttp.get(e._links.name.href);
      });
    };
    expertise.inProgressDate = function(expertiseId) {
      return expertise.find(expertiseId).then(function(e) {
        return $ooHttp.get(e._links.progress.href);
      });
    };
    expertise.rename = function(expertiseId, newName) {
      return expertise.find(expertiseId).then(function(e) {
        return $ooHttp.put(e._links.name.href, newName);
      });
    };
    expertise.isStatusFilterActive = function(status) {
      return _.contains(this.searchCriteria.status, status);
    };
    expertise.getStatusFilters = function() {
      return this.searchCriteria.status;
    };
    expertise.updateSearchCriteria = function(criteria) {
      Object.assign(this.searchCriteria, criteria);
      _.defaults(this.searchCriteria, defaultSearchCriteria);
    };
    expertise.search = function(criteria) {
      var q = [];
      angular.forEach(criteria || this.searchCriteria, function(value, key) {
        if (value) {
          q.push(key + '=' + value);
        }
      });
      return pagify('/expertises?' + q.join('&'), function(data) {
        return {expertises: data._embedded.expertises};
      });
    };
    expertise.create = model.creatable('/expertises');
    expertise.find = model.findable('/expertises', true, function(e) {
      return new ExpertiseDecorator(e);
    });
    expertise.statuses = [{
      status: 'COMPLETING',
      label: $i18n('op.expertises.status.completing'),
      color: 'workspace-page-expertise-completing-color',
      icon: 'draft-rectangle-corner'
    }, {
      status: 'IN_PROGRESS',
      label: $i18n('op.expertises.status.inProgress'),
      color: 'workspace-page-expertise-inprogress-color',
      icon: 'logout'
    }, {
      status: 'TAXATION_COMPLEMENT',
      label: $i18n('op.expertises.status.taxationComplement'),
      color: 'workspace-page-expertise-taxation-color',
      icon: 'time'
    }, {
      status: 'FINISHED',
      label: $i18n('op.expertises.status.finished'),
      color: 'workspace-page-expertise-finished-color',
      icon: 'finished-corner'
    }, {
      status: 'REJECTED',
      label: $i18n('op.expertises.status.rejected'),
      color: 'workspace-page-expertise-rejected-color',
      icon: 'alert-circle'
    }];
    expertise.labelForStatus = function(status) {
      var res = _.find(expertise.statuses, function(s) {
        return s.status === status;
      });
      return res && res.label;
    };
    return expertise;
  }
  angular.module('op.models.expertise').factory('expertise', expertiseFactory);
  return {};
});
