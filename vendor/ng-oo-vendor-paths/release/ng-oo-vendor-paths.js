/**
 * ng-oo-vendor-paths - v3.0.0 - 2014-11-05
 *
 * Copyright (c) 2014 Oodrive
 */
!function(a){!function(){a.module("oo.vendorpaths",[]).provider("$ooVendorPaths",function(){var b="",c={};this.root=function(c){return a.isDefined(c)?(b=c,void(b&&!/[\/\\]$/.test(b)&&(b+="/"))):b},this.vendor=function(b,d){return a.isDefined(d)?void(c[b]=d):c[b]},this.vendors=function(a){for(var b in a)a.hasOwnProperty(b)&&(c[b]=a[b])},this.$get=[function(){var a={};return a.vendorPath=function(a,d){var e=c[a];return e&&"/"===e.charAt(0)||d===!1?e:(b||"")+e},a}]})}()}(angular);