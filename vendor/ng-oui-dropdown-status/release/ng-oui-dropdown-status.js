/**
 * ng-oui-dropdown-status - v5.0.0 - 2016-03-16
 *
 * Copyright (c) 2016 Oodrive
 */
!function(a){!function(){"use strict";a.module("oui.dropdownStatus",["oui-templates-dropdown-status","oo.i18n","oui.focus"]).directive("ouiDropdownStatus",["$filter","$timeout","$q",function(b,c,d){function e(a){return a.toLowerCase().replace(/-(.)/g,function(a,b){return b.toUpperCase()})}function f(b){var c={};return b?a.isObject(b)?b:(b.replace(g,function(a,b,d){b=e(b),c[b]=d}),c):c}var g=/(?:^|;)\s*([^\s;]+)\s*:\s*([^;]+?)\s*(?=;|$)/g;return{restrict:"AE",scope:{readonly:"=?ngReadonly",cfg:"=ouiConfig",chgFn:"&ouiChange",model:"=?ngModel"},replace:!0,templateUrl:"oui-dropdown-status/dropdownStatus.tpl.html",controller:["$scope","$element","$attrs",function(b,e,g){function h(){return b.readonly?"oo-readonly":""}function i(a){n=(a.cls||"")+(n?" "+n:""),b.currentStatus=a.status,b.currentIcon=a.iconName,b.statusLabel=a.selectedLabel||a.label,b.currentStyle=a.style||l.style||""}function j(b){var c=a.isString(b),d=a.isNumber(b),e=l.options,f={};return c||d?(d&&(b=e[b].status),a.forEach(e,function(a){a.selected=!1,a.status===b&&(a.selected=!0,f=a)}),void i(f)):b}function k(){l={options:[]},a.extend(l,b.cfg),a.forEach(l.options,function(a){a.style&&(a.style=f(a.style))}),n=l.cls,b.ddsBoxOptions=l.options.filter(function(a){return!a.hidden}),a.forEach(l.options,function(a){a.selected&&(m=a.status)}),m||(m=l.options[0].status),j(m)}var l,m,n;b.getDropdownBoxClass=function(){var a=[n||"",b.currentStatus],c=h();return c&&a.push(c),a},b.getOptionClass=function(a){var b=[a.status,a.cls],c=a.selected&&"oo-selected";return c&&b.push(c),b},b.getLabel=function(a){return a.label},b.getSelectedIconClass=function(){var a=[];return b.currentIcon&&a.push("icon-"+b.currentIcon),a},b.getIconClass=function(a){return"icon-"+(a.iconName||"check")},b.onOptionClick=function(a){if(setTimeout(function(){e.blur()},1),!a.selected){var f=g.ouiChange?d.when(b.chgFn({status:a.status})):d.when(!0);f.then(function(b){b!==!1&&c(function(){j(a.status)})})}},k(),b.$watch("model",function(a){j(a)}),b.$watch("cfg",function(a){a&&a.options&&k()},!0),b.$watch("readonly",function(){b.readonly?e.removeAttr("tabindex"):e.attr("tabindex",0),h()})}]}}])}(),function(a,b){a.module("oui-templates-dropdown-status",["oui-dropdown-status/dropdownStatus.tpl.html"]),a.module("oui-dropdown-status/dropdownStatus.tpl.html",[]).run(["$templateCache",function(a){a.put("oui-dropdown-status/dropdownStatus.tpl.html",'<div class="oo-dropdown-status" ng-class="getDropdownBoxClass()" ng-style="currentStyle">\n	<div class="oo-dropdown-status-wrapper">\n		<div class="oo-dropdown-status-inner">\n			<div class="oo-label-block">\n				<span class="oo-label">{{statusLabel | i18nOrText}}</span>\n				<i class="oo-icon" ng-class="getSelectedIconClass()"></i>\n			</div>\n		</div>\n		<div class="oo-sep"></div>\n		<i class="oo-arrow oo-icon icon-nav-arrow-down"></i>\n	</div>\n\n	<div class="oo-dropdown-status-options-container">\n		<div class="oo-arrow-up"></div>\n		<ul class="oo-dropdown-status-options">\n			<li ng-repeat="ddsOption in ddsBoxOptions" class="oo-dropdown-option" ng-class="getOptionClass(ddsOption)" ng-style="ddsOption.style" ng-click="onOptionClick(ddsOption)">\n				<i class="oo-icon" ng-class="getIconClass(ddsOption)"></i>\n				<span class="oo-label">{{getLabel(ddsOption) | i18nOrText}}</span>\n			</li>\n		</ul>\n	</div>\n</div>\n')}])}(a)}(angular);