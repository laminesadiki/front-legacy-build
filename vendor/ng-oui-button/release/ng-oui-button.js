/**
 * ng-oui-button - v4.0.0 - 2014-11-05
 *
 * Copyright (c) 2014 Oodrive
 */
!function(a){!function(){a.module("oui.button",["oui.form.radio","oui.services.loadingImg","oo.i18n"]).directive("ouiButtonLoading",["$loadingImg","$compile",function(a,b){return{restrict:"A",scope:{loading:"=ouiButtonLoading"},link:function(c,d){var e=['<img ng-if="loading" ng-src="',a.path("white",16),'">',"<span>",d.html(),"</span>"].join("");d.html(b(e)(c)),c.$watch("loading",function(a){d.toggleClass("oo-loading",!!a)})}}}]).directive("ouiButtonGroup",function(){return{restrict:"A",scope:{ngModel:"=ouiButtonGroup"},link:function(b,c){c.on("click",".oo-form-button,.oo-form-button-picto",function(){var c=$(this),d=c.val()||"",e=c.is(".oo-selected");b.$apply(function(){if(a.isArray(b.ngModel)){for(var c=-1,f=0;f<b.ngModel.length;++f)if(b.ngModel[f]==d){c=f;break}-1!==c&&b.ngModel.splice(c,1),e||b.ngModel.push(d)}else if(a.isObject(b.ngModel)){var g=!1;for(var h in b.ngModel)if(h==d){b.ngModel[h]=!e,g=!0;break}g||(b.ngModel[d]=!e)}else b.ngModel=d})});var d=function(b){var d,e,f=c.find(".oo-form-button,.oo-form-button-picto").removeClass("oo-selected");a.isArray(b)?(e=[],a.forEach(b,function(b){null===b||a.isUndefined(b)||e.push("[value="+b+"]")}),d=e.join(",")):a.isObject(b)?(e=[],a.forEach(b,function(b,c){null!==c&&!a.isUndefined(c)&&b&&e.push("[value="+c+"]")}),d=e.join(",")):d="[value="+b+"]",d&&f.filter(d).addClass("oo-selected")};b.$watchCollection("ngModel",d)}}})}()}(angular);