/**
 * ng-oui-loading-img - v3.0.0 - 2014-11-05
 *
 * Copyright (c) 2014 Oodrive
 */
!function(a){!function(){var b="vendor/oui-resources/images/loading/%COLOR%/loading_%SIZE%.gif",c={},d=function(a,d){var e=c[a]||b;return e.replace("%COLOR%",a).replace("%SIZE%",d)};a.module("oui.services.loadingImg",[]).provider("$loadingImg",function(){this.setPath=function(a,d){if(d)for(var e=0;e<a.length;++e)c[a[e]]=d;else b=a},this.$get=[function(){return{path:function(a,b){return d(a,b)}}}]}).directive("ouiLoadingImg",function(){return{restrict:"AE",scope:{color:"@",size:"@"},controller:["$scope","$loadingImg",function(a,b){a.imagePath=function(){return b.path(a.color||"black",parseInt(a.size,10)||16)}}],template:'<img ng-src="{{imagePath()}}">',replace:!0}})}()}(angular);