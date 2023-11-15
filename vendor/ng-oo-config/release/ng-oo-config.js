/**
 * ng-oo-config - v3.0.0 - 2014-11-05
 *
 * Copyright (c) 2014 Oodrive
 */
!function(a){!function(){a.module("oo.config",[]).provider("$ooConfig",function(){var b,c,d={};b=function(b,c){if(!a.isDefined(b))return d;if(a.isObject(b))a.extend(d,b);else{if(!a.isDefined(c))return d[b];d[b]=c}},c=function(){var a,b=Object.keys(d);for(a=0;a<b.length;++a)delete d[b[a]]},this.set=b,this.$get=[function(){return b.clear=c,b}]}).run(["$rootScope","$ooConfig",function(a,b){a.ooConfig=b()}])}()}(angular);