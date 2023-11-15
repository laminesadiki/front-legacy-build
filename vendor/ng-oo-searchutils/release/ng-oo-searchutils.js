/**
 * ng-oo-searchutils - v3.0.0 - 2014-11-05
 *
 * Copyright (c) 2014 Oodrive
 */
!function(a){!function(){a.module("oo.searchutils",[]).provider("$ooSearchUtils",function(){this.$get=["$q",function(b){return{watchSearchValue:function(c,d,e,f,g,h,i){var j=null,k=null,l=c.$watch(d,function(c,d){e(c,d)&&(k&&clearTimeout(k),k=setTimeout(function(){var e=(new Date).getTime();j=e;var i=f(c,d),k=a.isArray(i);i=a.isArray(i)?i:[i],b.all(i).then(function(a){j===e&&(k?g(a,c,d):g(a[0],c,d))},function(){j===e&&h(c,d)})},i||500))});return c.$on("$destroy",function(){k&&clearTimeout(k)}),function(){k&&clearTimeout(k),l()}}}}]})}()}(angular);