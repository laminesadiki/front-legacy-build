/**
 * ng-oui-usermenu - v5.0.0 - 2014-11-05
 *
 * Copyright (c) 2014 Oodrive
 */
!function(a){!function(){a.module("oui.usermenu",["ngSanitize","oui.search.field","oui.tooltip","oui-templates-usermenu"]).directive("ouiUsermenu",["$timeout",function(b){return{restrict:"AE",transclude:!0,scope:{userPanel:"@",userClickAction:"&",userClickable:"=?",searchable:"=?",userName:"=?",subUserName:"=?",searchValue:"=?searchValue",resultsTpl:"@"},controller:["$scope","$element","$attrs","$filter","$injector",function(a,b,c,d,e){var f=null;e.has("$ouiAuth")&&(f=e.get("$ouiAuth")),a.hasAction=!1,a.searchFieldVisible=!1,a.getUserName=function(){return d("escapeHtml")((c.userName?a.userName:f&&f.userName())||"",!1,!0)},a.getSearchValue=function(){return a.searchValue},this.getSearchValue=a.getSearchValue,a.logout=function(){f.logoutFn()&&f.logoutFn()()},a.onUserNameClick=function(){a.hasAction&&a.clickable!==!1&&(a.userPanel?$(a.userPanel).show():a.userClickAction())},a.showSearchField=function(){a.searchFieldVisible=!0,setTimeout(function(){b.find(".oo-search-input input").focus()},100)},a.hideSearchField=function(){a.searchValue="",a.searchFieldVisible=!1},a.onKeyup=function(b){27===b.keyCode&&a.hideSearchField()},a.searchResults=[],this.addSearchResults=function(b){a.searchResults.push(b)}}],link:function(c,d){b(function(){var b=d.find(".oui-usermenu-search-results");a.forEach(c.searchResults,function(a){b.append(a)}),c.searchResults=[]})},templateUrl:"oui-usermenu/userMenu.tpl.html",replace:!0}}]).directive("ouiUsermenuSearchResults",function(){return{require:"^ouiUsermenu",restrict:"AE",link:function(a,b,c,d){a.getSearchValue=d.getSearchValue,d.addSearchResults(b)},replace:!0}})}(),function(a){a.module("oui-templates-usermenu",["oui-usermenu/userMenu.tpl.html"]),a.module("oui-usermenu/userMenu.tpl.html",[]).run(["$templateCache",function(a){a.put("oui-usermenu/userMenu.tpl.html",'<div class="oo-usermenu">\n	<div ng-show="false" ng-transclude></div>\n	<div ng-show="searchable && !searchFieldVisible" bindonce="searchable" class="oo-search">\n		<div oui-tooltip-text="i18n:common.search" oui-tooltip-cfg="{pos:\'b\'}" ng-click="showSearchField()">\n			<i class="icon-loupe"></i>\n		</div>\n	</div>\n	<div class="oo-usermenu-search" ng-show="searchable && searchFieldVisible">\n		<div class="oo-search-wrapper">\n			<div oui-search-field\n				oui-placeholder="i18n:oui.usermenu.search.placeholder"\n				ng-model="searchValue"\n				search-ico-click="hideSearchField()"\n				empty-clear-ico-click="hideSearchField()"\n				ng-keyup="onKeyup($event)">\n				<div class="oui-usermenu-search-results">\n					<div ng-include="resultsTpl"></div>\n				</div>\n			</div>\n		</div>\n	</div>\n	<div class="oo-sep" ng-show="searchable"><div class="oo-sep-inner"></div></div>\n	<div ng-show="getUserName()" class="oo-user" ng-class="{\'oo-action\':(hasAction && clickable !== false)}" ng-click="onUserNameClick()">\n		<div class="oo-user-inner">\n			<span class="oo-username" ng-show="!searchable || !searchFieldVisible">\n				<span ng-if="subUserName" class="oo-sub">&nbsp;<br></span>\n				<span class="oo-main" ng-bind-html="getUserName()"></span>\n				<span ng-if="subUserName" class="oo-sub"><br>{{subUserName}}</span>\n			</span>\n			<div class="oo-avatar"><i class="icon-avatar"></i></div>\n		</div>\n	</div>\n	<div class="oo-logout">\n		<div class="oo-logout-inner" ng-click="logout()"><i class="icon-power"></i></div>\n	</div>\n</div>')}])}(a)}(angular);