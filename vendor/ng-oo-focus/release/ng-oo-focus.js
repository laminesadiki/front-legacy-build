/**
 * ng-oo-focus - v4.0.0 - 2014-11-05
 *
 * Copyright (c) 2014 Oodrive
 */
!function(a){!function(){function b(a,b){return a.length?g.addClass(a,b):null}function c(a,b){return a.length?g.removeClass(a,b):null}function d(){$(document).off(".oofocus").on("focus.oofocus",h,function(a){var d,g,i,j,k,l=e.focusCls();l&&(k=e.watchedAttr(),d=$(this),g=h+(k?",["+k+"]":""),i=d.parents(g),j=$(g).filter("."+l).not(i).not(d),b(d.removeClass("oo-blurring").filter(":not(."+l+")"),l),b(i.removeClass("oo-blurring").filter(":not(."+l+")"),l),c(j,l),f.$digest(),a.stopPropagation())}).on("blur.oofocus",h,function(){var a=$(this);a.addClass("oo-blurring",a),setTimeout(function(){var b=a.filter(".oo-blurring");b.length&&(c(b,e.focusCls()).then(function(){b.removeClass("oo-blurring")}),f.$digest())},1)})}var e,f,g,h="input,textarea,select,button,[tabindex]";a.module("oo.focus",[]).provider("$focus",function(){var b,c;this.focusCls=function(c){return a.isDefined(c)?void(b=c):b},this.watchedAttr=function(b){return a.isDefined(b)?void(c=b):c},this.$get=function(){return{focusCls:function(){return b},watchedAttr:function(){return c}}}}).run(["$focus","$animate","$rootScope",function(a,b,c){g=b,e=a,f=c,d()}])}()}(angular);