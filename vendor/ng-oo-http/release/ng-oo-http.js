/**
 * ng-oo-http - v3.0.1 - 2014-11-17
 *
 * Copyright (c) 2014 Oodrive
 */
!function(a){!function(){function b(a,b){var c,d,e,f=["{} && ",")]}',\n"];if(b&&"json"!==b&&"jsonp"!==b||b&&"string"!=typeof b)return a;for(c=0,d=f.length;d>c;c++)if(e=a.indexOf(f[c]),0===e)return a.substring(f[c].length);return a}var c=["get","head","post","put","delete","jsonp"];a.module("oo.http",[]).provider("$ooHttp",["$httpProvider",function(d){var e;this.apiRoot=function(b){return a.isDefined(b)?void(e=b):e},this.setup=function(a){var c;a=a||{},a.jquery&&($.support.cors=!0,c={dataFilter:b},a.withCredentials&&(c.xhrFields={withCredentials:!0}),$.ajaxSetup(c)),a.withCredentials&&(d.defaults.withCredentials=!0)},this.$get=["$http",function(b){var d,f,g;for(d=function(c){return c=a.extend({},c),c.url&&e&&(c.url=e+c.url),b(c)},f=function(a){d[a]=function(){var c,d=[];for(c=0;c<arguments.length;++c)d[c]=arguments[c];return d[0]=e?e+d[0]:d[0],b[a].apply(b,d)}},g=0;g<c.length;++g)f(c[g]);return d.apiRoot=function(){return e},d}]}])}()}(angular);