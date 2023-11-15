(function (angular, undefined) {
angular.module('templates', ['app/Le-Workspace/le-Workspace.tpl.html', 'app/Le-Workspace/page-designations/page-designations.tpl.html', 'app/Le-Workspace/page-expertises/page-expertises.tpl.html', 'app/Le-Workspace/page-search/page-search.tpl.html', 'app/Le-Workspace/page-statistics/page-statistics.tpl.html', 'app/app.tpl.html', 'app/auth/retrieve-cert/retrieve-cert-nok.tpl.html', 'app/auth/retrieve-cert/retrieve-cert.tpl.html', 'app/auth/signUp/page-err/page-err.tpl.html', 'app/auth/signUp/page-form/page-form.tpl.html', 'app/auth/signUp/page-redirect/page-redirect.tpl.html', 'app/auth/signUp/page-unregCertForm/page-unregCertForm.tpl.html', 'app/auth/signUp/page-valid/page-valid.tpl.html', 'app/auth/signUp/signUp.tpl.html', 'app/create-expertise/create-expertise.tpl.html', 'app/create-notification/create-notification.tpl.html', 'app/create-notification/create-notification_wizard.tpl.html', 'app/dashboard/dashboard.tpl.html', 'app/dashboard/dashboard_content.tpl.html', 'app/expertise-details/administration/add-lawyer-to-parties/add-lawyer-to-parties.tpl.html', 'app/expertise-details/administration/add-party-member/add-party-member.tpl.html', 'app/expertise-details/administration/add-sapitor/add-sapitor.tpl.html', 'app/expertise-details/administration/administration.tpl.html', 'app/expertise-details/administration/confirm-status/confirm-status.tpl.html', 'app/expertise-details/administration/create-party/create-party.tpl.html', 'app/expertise-details/administration/update-taxation/update-taxation.tpl.html', 'app/expertise-details/contradictory/contradictory-details/actor_row.tpl.html', 'app/expertise-details/contradictory/contradictory-details/contradictory-details.tpl.html', 'app/expertise-details/contradictory/contradictory-details/contradictory-details_main.tpl.html', 'app/expertise-details/contradictory/contradictory.tpl.html', 'app/expertise-details/contradictory/item_row.tpl.html', 'app/expertise-details/cost-tracking/bill-summary/bill-summary.tpl.html', 'app/expertise-details/cost-tracking/cost-tracking.tpl.html', 'app/expertise-details/expertise-details.tpl.html', 'app/expertise-details/safe/folder-modal/folder.tpl.html', 'app/expertise-details/safe/safe.tpl.html', 'app/expertise-details/search/search.tpl.html', 'app/expertise-details/share/actor_row.tpl.html', 'app/expertise-details/share/lawyer_pane.tpl.html', 'app/expertise-details/share/parties_pane.tpl.html', 'app/expertise-details/share/share.tpl.html', 'app/expertise-details/share/share_main.tpl.html', 'app/notification-details/notification-details.tpl.html', 'app/notification-details/notification-details_main.tpl.html', 'app/notification-reply/notification-reply.tpl.html', 'app/notification-reply/notification-reply_main.tpl.html', 'app/personal-info/personal-info-show.tpl.html', 'app/personal-info/personal-info-update.tpl.html', 'app/personal-info/personal-info.tpl.html', 'app/personal-info/personal-info_main.tpl.html', 'app/user-form/user-form.tpl.html', 'app/user-form/user-form_main.tpl.html', 'app/users-directory/avengers-directory/avengers-directory.tpl.html', 'app/users-directory/experts-directory/experts-directory.tpl.html', 'app/users-directory/lawyers-directory/lawyers-directory.tpl.html', 'app/users-directory/users-directory.tpl.html', 'app/users-directory/users-directory_main.tpl.html', 'common/oo-tabs-directive/oo-tab-directive.tpl.html', 'common/oo-tabs-directive/oo-tabs-directive.tpl.html', 'common/op-browse/op-browse-directive.tpl.html', 'common/op-collapse/op-collapse-directive.tpl.html', 'common/op-list-selection/op-list-selection-directive.tpl.html', 'common/op-search-directive/op-search-directive.tpl.html', 'common/op-upload-directive/op-upload-directive.tpl.html', 'common/template/op-modal-background/op-modal-background.tpl.html', 'common/template/op-notification-form-directive/op-notification-form-directive.tpl.html']);

angular.module("app/Le-Workspace/le-Workspace.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/Le-Workspace/le-Workspace.tpl.html",
    "<div ng-controller=\"LeWorkspaceCtrl as leWorkspaceCtrl\" class=\"oui-fullsize\">\n" +
    "	<div oui-workspace=\"Workspace\">\n" +
    "		<div oo-role-security=\"EXPERT MAGISTRATE CLERK\" oui-workspace-action icon-name=\"add-circle\" tooltip=\"{{leWorkspaceCtrl.actionLabel}}\" action=\"leWorkspaceCtrl.action()\"></div>\n" +
    "		<div oo-role-security=\"EXPERT MAGISTRATE CLERK\" oui-workspace-page=\"designations\" name=\"i18n:op.designations\" icon-name=\"opx opx-icon-prize\" tpl=\"app/Le-Workspace/page-designations/page-designations.tpl.html\" dom-conserve></div>\n" +
    "		<div oo-role-security=\"EXPERT MAGISTRATE CLERK LAWYER SAPITOR PARTYMEMBER JUSTICE\" oui-workspace-page=\"expertises\" name=\"i18n:op.expertises\" icon-name=\"opx opx-icon-justice\" tpl=\"app/Le-Workspace/page-expertises/page-expertises.tpl.html\" dom-conserve></div>\n" +
    "		<div oo-role-security=\"EXPERT MAGISTRATE CLERK LAWYER\" oui-workspace-page=\"search\" name=\"i18n:op.search\" icon-name=\"oo-icon icon-search\" tpl=\"app/Le-Workspace/page-search/page-search.tpl.html\" dom-conserve></div>\n" +
    "		<div oo-role-security=\"EXPERT MAGISTRATE CLERK LAWYER SAPITOR PARTYMEMBER JUSTICE\" oui-workspace-page=\"statistics\" name=\"i18n:op.statistics\" icon-name=\"oo-icon icon-chart\" tpl=\"app/Le-Workspace/page-statistics/page-statistics.tpl.html\" dom-conserve></div>\n" +
    "	</div>\n" +
    "	<header class=\"oot-usermenu-workspace\">\n" +
    "		<div class=\"oot-usermenu\">\n" +
    "			<span class=\"oot-usermenu-name\" ng-click=\"leWorkspaceCtrl.viewPersonalInfo();\">{{leWorkspaceCtrl.user.fullName}}</span>\n" +
    "			<i class=\"oo-icon icon-user-circle\" ng-click=\"leWorkspaceCtrl.viewPersonalInfo();\"></i>\n" +
    "			<span class=\"oo-icon icon-logout workspace-power-button\" ng-click=\"leWorkspaceCtrl.logout()\" ng-show=\"leWorkspaceCtrl.canLogout()\"></span>\n" +
    "		</div>\n" +
    "	</header>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/Le-Workspace/page-designations/page-designations.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/Le-Workspace/page-designations/page-designations.tpl.html",
    "<div class=\"workspace-list-layout l-le-workspace-page l-le-workspace-page-designation\" ng-controller=\"LeWorkspaceDesignationsCtrl as leWorkspaceDesignationsCtrl\">\n" +
    "\n" +
    "	<div class=\"workspace-list-layout-empty\" ng-hide=\"leWorkspaceDesignationsCtrl.designations.length\">\n" +
    "		<p>{{ 'op.designations.empty' | i18n }}</p>\n" +
    "		<i class=\"opx-icon-prize\"></i>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"workspace-list-layout-content\" ng-show=\"leWorkspaceDesignationsCtrl.designations.length\"\n" +
    "		 lr-infinite-scroll=\"leWorkspaceDesignationsCtrl.scrollHandler\" scroll-threshold=\"100\">\n" +
    "			<ul class=\"oot-table-list oot-table-list-basic workspace-list-layout-content-no-margin-ul\"\n" +
    "				rel=\"notification-list\">\n" +
    "				<li class=\"oot-table-list-row\"\n" +
    "					oui-tooltip-text=\"i18n:op.leworkspace.designations.tooltip\"\n" +
    "					ng-repeat=\"designation in leWorkspaceDesignationsCtrl.designations\"\n" +
    "					ng-click=\"leWorkspaceDesignationsCtrl.openDesignationDetails(designation.id)\"\n" +
    "					>\n" +
    "\n" +
    "					<div class=\"oot-table-list-column\">\n" +
    "						<i class=\"opx-icon-prize animation-icon\"></i>\n" +
    "						<span>{{designation.designationDate | date : 'short' : timezone}}</span>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"oot-table-list-column l-le-workspace-page-designation-user\">\n" +
    "						<i class=\"oo-icon icon-user-circle\"></i>\n" +
    "						<span>{{designation.designatorFullName}} ({{ 'op.' + designation.designatorRole.toLowerCase() | i18n}})</span>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"oot-table-list-column l-le-workspace-page-designation-files\">\n" +
    "						<i class=\"oo-icon icon-sharing-file\"></i>\n" +
    "						<span>{{designation.itemCount}} {{ 'op.leworkspace.designations.documents'| i18n }}</span>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"oot-table-list-column\">\n" +
    "						<i class=\"oo-icon icon-indicator-corner-top-right le-workspace-page-button-inf\"\n" +
    "						   ng-class=\"{'le-workspace-page-button-inf-disabled' : designation.status === 'CANCELLED'}\"></i>\n" +
    "						<i class=\"oo-icon icon-nav-kebab-menu-horizontal l-le-workspace-page-designation-button-sup\"></i>\n" +
    "					</div>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "\n" +
    "	<div class=\"workspace-list-layout-header\">\n" +
    "		{{ 'op.leworkspace.designations.title' | i18n }}\n" +
    "		<span id=\"workspace-list-filters-select\" class=\"workspace-list-filters-select\" ng-mouseover=\"leWorkspaceDesignationsCtrl.hovered = true\" ng-mouseleave=\"leWorkspaceDesignationsCtrl.hovered = false\">\n" +
    "			<i class=\"icon-filter-circle\"></i>\n" +
    "			<div class=\"workspace-list-filters-select-wrapper\" ng-show=\"leWorkspaceDesignationsCtrl.hovered\">\n" +
    "				<div class=\"workspace-list-filters-select-list\">\n" +
    "					<ul>\n" +
    "						<li ng-click=\"leWorkspaceDesignationsCtrl.selectStatusFilter(status)\" ng-repeat=\"status in leWorkspaceDesignationsCtrl.statusesList\">\n" +
    "							<span>\n" +
    "								<i class=\"icon-check workspace-list-filters-select-list-check\" ng-class=\"{'workspace-list-filters-select-list-check-selected': status.filterBy }\"></i>\n" +
    "								<span class=\"icon-{{status.icon}} {{status.color}}\" ng-class=\"{'workspace-list-filters-select-list-icon' : status.icon }\"></span>\n" +
    "								<span>{{status.label }}</span>\n" +
    "							</span>\n" +
    "						</li>\n" +
    "						<div class=\"workspace-list-filters-select-list-buttons\">\n" +
    "							<button class=\"oo-form-button\" ng-click=\"leWorkspaceDesignationsCtrl.applyFilter()\">\n" +
    "								{{ 'op.leworkspace.designations.filter.apply' | i18n }}\n" +
    "							</button>\n" +
    "							<button class=\"oo-form-button oo-form-button-cancel\" ng-click=\"leWorkspaceDesignationsCtrl.hovered = false\">\n" +
    "								{{'common.cancel' | i18n}}\n" +
    "							</button>\n" +
    "						</div>\n" +
    "					</ul>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</span>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/Le-Workspace/page-expertises/page-expertises.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/Le-Workspace/page-expertises/page-expertises.tpl.html",
    "<div class=\"workspace-list-layout l-le-workspace-page l-le-workspace-page-expertises\" ng-controller=\"LeWorkspaceExpertisesCtrl as leWorkspaceExpertisesCtrl\">\n" +
    "\n" +
    "	<!-- Sorter -->\n" +
    "	<div oui-collection-sort=\"leWorkspaceExpertisesCtrl.sorts\" sort-name=\"leWorkspaceExpertisesCtrl.sortName\" sort=\"leWorkspaceExpertisesCtrl.currentSort\" sort-asc=\"leWorkspaceExpertisesCtrl.sortAsc\" class=\"l-le-workspace-page-sorter\"></div>\n" +
    "\n" +
    "	<div oo-role-security=\"EXPERT\" class=\"workspace-list-layout-tabs workspace-list-layout-content\">\n" +
    "\n" +
    "		<tabs>\n" +
    "			<tab-item class=\"tabItemTitle\" title-tab=\"op.expert\">\n" +
    "				<div class=\"workspace-page-expertises-tab-content\" ng-controller=\"LeWorkspaceExpertisesExpertCtrl as leWorkspaceExpertisesExpertCtrl\"\n" +
    "					 lr-infinite-scroll=\"leWorkspaceExpertisesExpertCtrl.scrollHandler\" scroll-threshold=\"100\">\n" +
    "\n" +
    "					<div class=\"workspace-list-layout-empty\" ng-hide=\"leWorkspaceExpertisesExpertCtrl.expertises.length || leWorkspaceExpertisesExpertCtrl.searchLaunchedFlag\">\n" +
    "						<p>{{ 'op.expertises.empty' | i18n }}</p>\n" +
    "						<i class=\"opx-icon-justice\"></i>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"workspace-page-expertises-wait\" ng-show=\"leWorkspaceExpertisesExpertCtrl.searchLaunchedFlag\">\n" +
    "						<p>{{ 'op.leworkspace.expertises.pleaseWait' | i18n }}</p>\n" +
    "					</div>\n" +
    "\n" +
    "					<div ng-show=\"leWorkspaceExpertisesExpertCtrl.expertises.length\">\n" +
    "						<ul class=\"oot-table-list oot-table-list-basic\">\n" +
    "							<li class=\"oot-table-list-row\"\n" +
    "								oui-tooltip-text=\"i18n:op.leworkspace.expertises.tooltip\"\n" +
    "								ng-click=\"leWorkspaceExpertisesCtrl.openExpertiseDetails(expertise.id)\"\n" +
    "								ng-repeat=\"expertise in leWorkspaceExpertisesExpertCtrl.expertises\">\n" +
    "\n" +
    "								<div class=\"oot-table-list-column\">\n" +
    "									<span ng-show=\"expertise.highlighted\" class=\"l-le-workspace-page-expertises expertises-expertise-highlight\">!</span>\n" +
    "									<i ng-show=\"!expertise.highlighted\" class=\"oo-input opx-icon-justice animation-icon\"></i>\n" +
    "									<span>{{expertise.name}}</span>\n" +
    "								</div>\n" +
    "								<div class=\"oot-table-list-column oot-table-list-column-sized\">\n" +
    "									<i class=\"opx-icon-user-judge\"></i>\n" +
    "									<span ng-show=\"expertise.magistrateFullName\">{{expertise.magistrateFullName}}</span>\n" +
    "									<span ng-hide=\"expertise.magistrateFullName\">{{ 'op.leworkspace.expertises.noAvenger' | i18n }}</span>\n" +
    "								</div>\n" +
    "								<div class=\"oot-table-list-column oot-table-list-column-sized\">\n" +
    "									<i class=\"opx-icon opx-icon-euro-circle-reverse\"></i>\n" +
    "									<span ng-show=\"expertise.taxationDate\">{{expertise.taxationDate | date: 'fullDate' : timezone}}</span>\n" +
    "									<span ng-hide=\"expertise.taxationDate\">{{ 'op.expertises.waitingTax' | i18n }}</span>\n" +
    "								</div>\n" +
    "								<div class=\"oot-table-list-column\">\n" +
    "									<i class=\"oo-icon icon-indicator-corner-top-right le-workspace-page-button-inf\" ng-class=\"leWorkspaceExpertisesCtrl.selectColorByStatus(expertise.status)\"></i>\n" +
    "									<i class=\"oo-icon workspace-page-expertise-button-sup\" ng-class=\"'icon-'+leWorkspaceExpertisesCtrl.selectIconByStatus(expertise.status)\"></i>\n" +
    "								</div>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</tab-item>\n" +
    "			<tab-item class=\"tabItemTitle\" title-tab=\"op.coexpert\">\n" +
    "				<div class=\"workspace-page-expertises-tab-content\" ng-controller=\"LeWorkspaceExpertisesCoExpertCtrl as leWorkspaceExpertisesCoExpertCtrl\"\n" +
    "					 lr-infinite-scroll=\"leWorkspaceExpertisesCoExpertCtrl.scrollHandler\" scroll-threshold=\"100\">\n" +
    "					<div class=\"workspace-list-layout-empty\" ng-hide=\"leWorkspaceExpertisesCoExpertCtrl.expertises.length || leWorkspaceExpertisesCoExpertCtrl.searchLaunchedFlag\">\n" +
    "						<p>{{ 'op.expertises.empty' | i18n }}</p>\n" +
    "						<i class=\"opx-icon-justice\"></i>\n" +
    "					</div>\n" +
    "					<div class=\"workspace-page-expertises-wait\" ng-show=\"leWorkspaceExpertisesCoExpertCtrl.searchLaunchedFlag\">\n" +
    "						<p>{{ 'op.leworkspace.expertises.pleaseWait' | i18n }}</p>\n" +
    "					</div>\n" +
    "					<div ng-show=\"leWorkspaceExpertisesCoExpertCtrl.expertises.length\">\n" +
    "						<ul class=\"oot-table-list oot-table-list-basic\">\n" +
    "							<li class=\"oot-table-list-row\"\n" +
    "								oui-tooltip-text=\"i18n:op.leworkspace.expertises.tooltip\"\n" +
    "								ng-click=\"leWorkspaceExpertisesCtrl.openExpertiseDetails(expertise.id)\"\n" +
    "								ng-repeat=\"expertise in leWorkspaceExpertisesCoExpertCtrl.expertises\">\n" +
    "\n" +
    "								<div class=\"oot-table-list-column\">\n" +
    "									<span ng-show=\"expertise.highlighted\" class=\"l-le-workspace-page-expertises expertises-expertise-highlight\">!</span>\n" +
    "									<i ng-show=\"!expertise.highlighted\" class=\"oo-input opx-icon-justice animation-icon\"></i>\n" +
    "									<span>{{expertise.name}}</span>\n" +
    "								</div>\n" +
    "								<div class=\"oot-table-list-column\">\n" +
    "									<i class=\"opx-icon-user-judge\"></i>\n" +
    "									<span ng-show=\"expertise.magistrateFullName\">{{expertise.magistrateFullName}}</span>\n" +
    "									<span ng-hide=\"expertise.magistrateFullName\">{{ 'op.leworkspace.expertises.noAvenger' | i18n }}</span>\n" +
    "								</div>\n" +
    "								<div class=\"oot-table-list-column\">\n" +
    "									<i class=\"opx-icon-user-expert\"></i>\n" +
    "									<span>{{expertise.expertFullName}}</span>\n" +
    "								</div>\n" +
    "								<div class=\"oot-table-list-column\">\n" +
    "									<i class=\"opx-icon opx-icon-euro-circle-reverse\"></i>\n" +
    "									<span ng-show=\"expertise.taxationDate\">{{expertise.taxationDate | date: 'fullDate' : timezone}}</span>\n" +
    "									<span ng-hide=\"expertise.taxationDate\">{{ 'op.expertises.waitingTax' | i18n }}</span>\n" +
    "								</div>\n" +
    "								<div class=\"oot-table-list-column\">\n" +
    "									<i class=\"oo-icon icon-indicator-corner-top-right le-workspace-page-button-inf\" ng-class=\"leWorkspaceExpertisesCtrl.selectColorByStatus(expertise.status)\"></i>\n" +
    "									<i class=\"oo-icon workspace-page-expertise-button-sup\" ng-class=\"'icon-'+leWorkspaceExpertisesCtrl.selectIconByStatus(expertise.status)\"></i>\n" +
    "								</div>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</tab-item>\n" +
    "			<tab-item class=\"tabItemTitle\" title-tab=\"op.sapitor\">\n" +
    "				<div class=\"workspace-page-expertises-tab-content\" ng-controller=\"LeWorkspaceExpertisesSapitorCtrl as leWorkspaceExpertisesSapitorCtrl\"\n" +
    "					 lr-infinite-scroll=\"leWorkspaceExpertisesSapitorCtrl.scrollHandler\" scroll-threshold=\"100\">\n" +
    "					<div class=\"workspace-list-layout-empty\" ng-hide=\"leWorkspaceExpertisesSapitorCtrl.expertises.length || leWorkspaceExpertisesSapitorCtrl.searchLaunchedFlag\">\n" +
    "						<p>{{ 'op.expertises.empty' | i18n }}</p>\n" +
    "						<i class=\"opx-icon-justice\"></i>\n" +
    "					</div>\n" +
    "					<div class=\"workspace-page-expertises-wait\" ng-show=\"leWorkspaceExpertisesSapitorCtrl.searchLaunchedFlag\">\n" +
    "						<p>{{ 'op.leworkspace.expertises.pleaseWait' | i18n }}</p>\n" +
    "					</div>\n" +
    "					<div ng-show=\"leWorkspaceExpertisesSapitorCtrl.expertises.length\">\n" +
    "						<ul class=\"oot-table-list oot-table-list-basic\">\n" +
    "							<li class=\"oot-table-list-row\"\n" +
    "								oui-tooltip-text=\"i18n:op.leworkspace.expertises.tooltip\"\n" +
    "								ng-click=\"leWorkspaceExpertisesCtrl.openExpertiseDetails(expertise.id)\"\n" +
    "								ng-repeat=\"expertise in leWorkspaceExpertisesSapitorCtrl.expertises\">\n" +
    "\n" +
    "								<div class=\"oot-table-list-column\">\n" +
    "									<span ng-show=\"expertise.highlighted\" class=\"l-le-workspace-page-expertises expertises-expertise-highlight\">!</span>\n" +
    "									<i ng-show=\"!expertise.highlighted\" class=\"oo-input opx-icon-justice animation-icon\"></i>\n" +
    "									<span>{{expertise.name}}</span>\n" +
    "								</div>\n" +
    "								<div class=\"oot-table-list-column\">\n" +
    "									<i class=\"opx-icon-user-judge\"></i>\n" +
    "									<span ng-show=\"expertise.magistrateFullName\">{{expertise.magistrateFullName}}</span>\n" +
    "									<span ng-hide=\"expertise.magistrateFullName\">{{ 'op.leworkspace.expertises.noAvenger' | i18n }}</span>\n" +
    "								</div>\n" +
    "								<div class=\"oot-table-list-column\">\n" +
    "									<i class=\"opx-icon-user-expert\"></i>\n" +
    "									<span>{{expertise.expertFullName}}</span>\n" +
    "								</div>\n" +
    "								<div class=\"oot-table-list-column\">\n" +
    "									<i class=\"opx-icon opx-icon-euro-circle-reverse\"></i>\n" +
    "									<span ng-show=\"expertise.taxationDate\">{{expertise.taxationDate | date: 'fullDate' : timezone}}</span>\n" +
    "									<span ng-hide=\"expertise.taxationDate\">{{ 'op.expertises.waitingTax' | i18n }}</span>\n" +
    "								</div>\n" +
    "								<div class=\"oot-table-list-column\">\n" +
    "									<i class=\"oo-icon icon-indicator-corner-top-right le-workspace-page-button-inf\" ng-class=\"leWorkspaceExpertisesCtrl.selectColorByStatus(expertise.status)\"></i>\n" +
    "									<i class=\"oo-icon workspace-page-expertise-button-sup\" ng-class=\"'icon-'+leWorkspaceExpertisesCtrl.selectIconByStatus(expertise.status)\"></i>\n" +
    "								</div>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</tab-item>\n" +
    "		</tabs>\n" +
    "	</div>\n" +
    "\n" +
    "	<div oo-role-security=\"LAWYER PARTY MAGISTRATE CLERK SAPITOR\" class=\"workspace-list-layout-notabs workspace-list-layout-content\">\n" +
    "		<div class=\"workspace-page-expertises-notab-content\" ng-controller=\"LeWorkspaceExpertisesOthersCtrl as leWorkspaceExpertisesOthersCtrl\"\n" +
    "			 lr-infinite-scroll=\"leWorkspaceExpertisesOthersCtrl.scrollHandler\" scroll-threshold=\"100\">\n" +
    "			<div class=\"workspace-list-layout-empty\" ng-hide=\"leWorkspaceExpertisesOthersCtrl.expertises.length || leWorkspaceExpertisesOthersCtrl.searchLaunchedFlag\">\n" +
    "				<p>{{ 'op.expertises.empty' | i18n }}</p>\n" +
    "				<i class=\"opx-icon-justice\"></i>\n" +
    "			</div>\n" +
    "			<div class=\"workspace-page-expertises-wait\" ng-show=\"leWorkspaceExpertisesOthersCtrl.searchLaunchedFlag\">\n" +
    "				<p>{{ 'op.leworkspace.expertises.pleaseWait' | i18n }}</p>\n" +
    "			</div>\n" +
    "			<div ng-show=\"leWorkspaceExpertisesOthersCtrl.expertises.length\">\n" +
    "				<ul class=\"oot-table-list oot-table-list-basic\">\n" +
    "					<li class=\"oot-table-list-row\"\n" +
    "						oui-tooltip-text=\"i18n:op.leworkspace.expertises.tooltip\"\n" +
    "						ng-click=\"leWorkspaceExpertisesCtrl.openExpertiseDetails(expertise.id)\"\n" +
    "						ng-repeat=\"expertise in leWorkspaceExpertisesOthersCtrl.expertises\">\n" +
    "\n" +
    "						<div class=\"oot-table-list-column\">\n" +
    "							<span ng-show=\"expertise.highlighted\" class=\"l-le-workspace-page-expertises expertises-expertise-highlight\">!</span>\n" +
    "							<i ng-show=\"!expertise.highlighted\" class=\"oo-input opx-icon-justice animation-icon\"></i>\n" +
    "							<span>{{expertise.name}}</span>\n" +
    "						</div>\n" +
    "						<div class=\"oot-table-list-column\">\n" +
    "							<i class=\"opx-icon-user-judge\"></i>\n" +
    "							<span ng-show=\"expertise.magistrateFullName\">{{expertise.magistrateFullName}}</span>\n" +
    "							<span ng-hide=\"expertise.magistrateFullName\">{{ 'op.leworkspace.expertises.noAvenger' | i18n }}</span>\n" +
    "						</div>\n" +
    "						<div class=\"oot-table-list-column\">\n" +
    "							<i class=\"opx-icon-user-expert\"></i>\n" +
    "							<span>{{expertise.expertFullName}}</span>\n" +
    "						</div>\n" +
    "						<div class=\"oot-table-list-column\">\n" +
    "							<i class=\"opx-icon opx-icon-euro-circle-reverse\"></i>\n" +
    "							<span ng-show=\"expertise.taxationDate\">{{expertise.taxationDate | date: 'fullDate' : timezone}}</span>\n" +
    "							<span ng-hide=\"expertise.taxationDate\">{{ 'op.expertises.waitingTax' | i18n }}</span>\n" +
    "						</div>\n" +
    "						<div class=\"oot-table-list-column\">\n" +
    "							<i class=\"oo-icon icon-indicator-corner-top-right le-workspace-page-button-inf\" ng-class=\"leWorkspaceExpertisesCtrl.selectColorByStatus(expertise.status)\"></i>\n" +
    "							<i class=\"oo-icon workspace-page-expertise-button-sup\" ng-class=\"'icon-'+leWorkspaceExpertisesCtrl.selectIconByStatus(expertise.status)\"></i>\n" +
    "						</div>\n" +
    "					</li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"workspace-list-layout-header\">\n" +
    "		{{ 'op.leworkspace.expertises.title' | i18n }}\n" +
    "		<span id=\"workspace-list-filters-select\" class=\"workspace-list-filters-select\" ng-mouseover=\"leWorkspaceExpertisesCtrl.hovered = true\" ng-mouseleave=\"leWorkspaceExpertisesCtrl.hovered = false\">\n" +
    "			<i class=\"icon-filter-circle\"></i>\n" +
    "			<div class=\"workspace-list-filters-select-wrapper\" ng-show=\"leWorkspaceExpertisesCtrl.hovered\">\n" +
    "				<div class=\"workspace-list-filters-select-list\">\n" +
    "					<ul>\n" +
    "						<li ng-click=\"leWorkspaceExpertisesCtrl.selectStatusFilter(status)\" ng-repeat=\"status in leWorkspaceExpertisesCtrl.statusesList\">\n" +
    "							<span>\n" +
    "								<i class=\"icon-check workspace-list-filters-select-list-check\" ng-class=\"{'workspace-list-filters-select-list-check-selected': status.filterBy }\"></i>\n" +
    "								<span class=\"icon-{{status.icon}} {{status.color}}\" ng-class=\"{'workspace-list-filters-select-list-icon' : status.icon }\"></span>\n" +
    "								<span>{{status.label }}</span>\n" +
    "							</span>\n" +
    "						</li>\n" +
    "						<div class=\"workspace-list-filters-select-list-buttons\">\n" +
    "							<button class=\"oo-form-button\" ng-click=\"leWorkspaceExpertisesCtrl.applyFilter()\">\n" +
    "								{{ 'op.leworkspace.expertises.filter.apply' | i18n }}\n" +
    "							</button>\n" +
    "							<button class=\"oo-form-button oo-form-button-cancel\" ng-click=\"leWorkspaceExpertisesCtrl.hovered = false\">\n" +
    "								{{'common.cancel' | i18n}}\n" +
    "							</button>\n" +
    "						</div>\n" +
    "					</ul>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</span>\n" +
    "		<span class=\"workspace-refresh-icon\">\n" +
    "			<i class=\"oo-icon icon-refresh\" ng-click=\"leWorkspaceExpertisesCtrl.reloadExpertises()\"></i>\n" +
    "		</span>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/Le-Workspace/page-search/page-search.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/Le-Workspace/page-search/page-search.tpl.html",
    "<div class=\"workspace-list-layout l-le-workspace-page l-le-workspace-page-search\" ng-controller=\"LeWorkspaceSearchCtrl as leWorkspaceSearchCtrl\">\n" +
    "  <search show-type-list=\"true\"></search>\n" +
    "</div>");
}]);

angular.module("app/Le-Workspace/page-statistics/page-statistics.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/Le-Workspace/page-statistics/page-statistics.tpl.html",
    "<div\n" +
    "	class=\"workspace-list-layout l-le-workspace-page l-le-workspace-page-statistics\"\n" +
    "	ng-controller=\"WorkspaceStatisticsCtrl as workspaceStatisticsCtrl\"\n" +
    ">\n" +
    "	<div class=\"statistics-layout--title\">\n" +
    "		{{ 'op.stats.download.title' | i18n }}\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"statistics-form\">\n" +
    "		<div class=\"statistics-form--label\">\n" +
    "			<label>{{ 'op.stats.export.csv' | i18n }}</label>\n" +
    "		</div>\n" +
    "		<button\n" +
    "			class=\"oo-form-button op-btn-brown\"\n" +
    "			oo-promise-click=\"workspaceStatisticsCtrl.downloadStatistics()\"\n" +
    "			oo-loading-message-click=\"op.loading\"\n" +
    "		>{{ 'op.stats.download.caption' | i18n }}</button>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/app.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/app.tpl.html",
    "<div ng-controller=\"AppCtrl as appCtrl\">\n" +
    "	<div oui-application>\n" +
    "		<div oui-application-page auth-state=\"RETRIEVE_CERTIFICATE\" tpl=\"app/auth/retrieve-cert/retrieve-cert.tpl.html\"></div>\n" +
    "		<div oui-application-page auth-state=\"RETRIEVE_CERTIFICATE_NOK\" tpl=\"app/auth/retrieve-cert/retrieve-cert-nok.tpl.html\"></div>\n" +
    "		<div oui-application-page auth-state=\"OK\" tpl=\"app/dashboard/dashboard.tpl.html\"></div>\n" +
    "		<div oui-application-page auth-state=\"NOT_LOGGED\" tpl=\"app/auth/signUp/signUp.tpl.html\"></div>\n" +
    "	</div>\n" +
    "	<div ng-if=\"appCtrl.isOpalexeHelpPresent\">\n" +
    "		<div class=\"help\" ng-click=\"appCtrl.toggleShowHelpPopup()\">\n" +
    "			<div class=\"help-icon\">\n" +
    "			<svg width=\"36px\" height=\"36px\" viewBox=\"0 0 36 36\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n" +
    "				<g fill=\"#FFFFFF\">\n" +
    "					<path d=\"M26.25048,11.40048 C27.75096,13.20048 28.50048,15.45048 28.50048,18 C28.50048,20.54952 27.60048,22.79952 26.25048,24.59952 L31.5,29.84904 C34.35048,26.69904 36,22.49856 36,17.99856 C36,13.49856 34.35048,9.29808 31.5,6.14808 L26.25048,11.40048 Z\"></path>\n" +
    "					<path d=\"M11.40048,26.25048 L6.14952,31.5 C9.29952,34.3504796 13.5,36 18,36 C22.5,36 26.70048,34.3504796 29.85048,31.5 L24.60096,26.25048 C22.80096,27.75096 20.55096,28.50048 18.00144,28.50048 C15.450516,28.50048 13.20048,27.60048 11.40048,26.25048 Z\"></path>\n" +
    "					<path d=\"M18,0 C13.5,0 9.29952,1.64952 6.14952,4.5 L11.39904,9.74952 C13.200444,8.39952 15.45048,7.49952 18,7.49952 C20.54952,7.49952 22.79952,8.39952 24.59952,9.74952 L29.85048,4.5 C26.70048,1.64952 22.5,0 18,0 Z\"></path>\n" +
    "					<path d=\"M0,18 C0,22.5 1.64952,26.70048 4.5,29.85048 L9.74952,24.60096 C8.39952,22.799556 7.49952,20.54952 7.49952,18 C7.49952,15.45048 8.39952,13.20048 9.74952,11.40048 L4.5,6.14952 C1.64952,9.29952 0,13.5 0,18 Z\"></path>\n" +
    "				</g>\n" +
    "			</svg>\n" +
    "			</div>\n" +
    "			<div class=\"label\">{{ 'op.help.label' | i18n }}</div>\n" +
    "		</div>\n" +
    "		<div class=\"help-popup\" ng-show=\"appCtrl.showHelpPopup\" ng-mouseleave=\"appCtrl.showHelpPopup = false\">\n" +
    "			<div class=\"help-item\" ng-click=\"appCtrl.openFaqLink()\">\n" +
    "				<i class=\"oo-icon icon-help-circle-reverse\"></i><span class=\"help-item-link\">{{ 'op.help.faq' | i18n }}</span>\n" +
    "			</div>\n" +
    "			<div class=\"help-item\" ng-click=\"appCtrl.openUserGuideLink()\">\n" +
    "				<i class=\"oo-icon icon-user-group\"></i><span class=\"help-item-link\">{{ 'op.help.userGuide' | i18n }}</span>\n" +
    "			</div>\n" +
    "			<div class=\"help-item\" ng-click=\"appCtrl.openTutorialLink()\">\n" +
    "				<i class=\"oo-icon icon-video\"></i><span class=\"help-item-link\">{{ 'op.help.videoTutorials' | i18n }}</span>\n" +
    "			</div>\n" +
    "			<div class=\"help-item\" ng-click=\"appCtrl.contactSupport()\">\n" +
    "				<i class=\"oo-icon icon-tools\"></i><span class=\"help-item-link\">{{ 'op.help.support' | i18n }}</span>\n" +
    "			</div>\n" +
    "			<div class=\"help-item\" ng-click=\"appCtrl.openTermsOfUseLink()\">\n" +
    "				<i class=\"oo-icon icon-sharing-file\"></i><span class=\"help-item-link\">{{ 'op.help.termsofuse' | i18n }}</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"version\">{{$root.ooConfig.version}}</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/auth/retrieve-cert/retrieve-cert-nok.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/auth/retrieve-cert/retrieve-cert-nok.tpl.html",
    "<div ng-controller=\"RetrieveCertificateCtrl as vm\" class=\"l-retrieve-certificate\">\n" +
    "	<div class=\"l-retrieve-certificate-title\" ng-bind-html=\"('op.retrieveCertificate.title' | i18n | escapeHtml:false:true)\"></div>\n" +
    "\n" +
    "	<div class=\"l-retrieve-certificate-wrapper\">\n" +
    "		<div class=\"l-retrieve-certificate-icon\">\n" +
    "			<i class=\"oo-icon icon-rgs-one-star\"></i>\n" +
    "		</div>\n" +
    "		<h1>{{ 'op.retrieveCertificate.tokenInvalid' | i18n }}</h1>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"l-retrieve-certificate-footer\">\n" +
    "		<div class=\"l-retrieve-certificate-images\">\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/auth/retrieve-cert/retrieve-cert.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/auth/retrieve-cert/retrieve-cert.tpl.html",
    "<div ng-controller=\"RetrieveCertificateCtrl as vm\" class=\"l-retrieve-certificate\">\n" +
    "	<div class=\"l-retrieve-certificate-title\" ng-bind-html=\"('op.retrieveCertificate.title' | i18n | escapeHtml:false:true)\"></div>\n" +
    "\n" +
    "	<div class=\"oot-usermenu\">\n" +
    "		<span class=\"oot-usermenu-name\">{{ vm.fullName }}</span>\n" +
    "		<i class=\"oo-icon icon-user-circle\"></i>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"l-retrieve-certificate-wrapper\">\n" +
    "		<div class=\"l-retrieve-certificate-icon\">\n" +
    "			<i class=\"oo-icon icon-rgs-one-star\"></i>\n" +
    "		</div>\n" +
    "		<h1>{{ 'op.retrieveCertificate.welcome' | i18n }}</h1>\n" +
    "		<button class=\"oo-form-button op-btn-purple\" ng-click=\"vm.download()\">{{ 'op.retrieveCertificate.download' | i18n }}</button>\n" +
    "		<p class=\"l-retrieve-certificate-guides-title\">{{ 'op.retrieveCertificate.manual' | i18n }}</p>\n" +
    "\n" +
    "		<div class=\"container-wrapper\">\n" +
    "			<div class=\"container\">\n" +
    "				<div class=\"container-title\">\n" +
    "					{{ 'op.retrieveCertificate.install.windows' | i18n }}\n" +
    "				</div>\n" +
    "				<div class=\"container-box\" >\n" +
    "					<a class=\"form-link\" href=\"{{ vm.pathToResources }}{{ vm.filenames.CHROMEIE }}\" target=\"_blank\">\n" +
    "						<div class=\"container-box-body\" ng-style=\"{'background':'url({{vm.getIcon(vm.filenames.CHROMEIE)}}) no-repeat 0.5em center transparent'}\">\n" +
    "							{{ 'op.retrieveCertificate.install.download.text' | i18n }}\n" +
    "						</div>\n" +
    "					</a>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"container\">\n" +
    "				<div class=\"container-title\">\n" +
    "					{{ 'op.retrieveCertificate.install.firefox' | i18n }}\n" +
    "				</div>\n" +
    "				<div class=\"container-box\">\n" +
    "					<a class=\"form-link\" href=\"{{ vm.pathToResources }}{{ vm.filenames.FF }}\" target=\"_blank\">\n" +
    "						<div class=\"container-box-body\" ng-style=\"{'background':'url({{vm.getIcon(vm.filenames.FF)}}) no-repeat 0.5em center transparent'}\">\n" +
    "							{{ 'op.retrieveCertificate.install.download.text' | i18n }}\n" +
    "						</div>\n" +
    "					</a>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"container\">\n" +
    "				<div class=\"container-title\">\n" +
    "					{{ 'op.retrieveCertificate.install.mac' | i18n }}\n" +
    "				</div>\n" +
    "				<div class=\"container-box\">\n" +
    "					<a class=\"form-link\" href=\"{{ vm.pathToResources }}{{ vm.filenames.MACOS }}\" target=\"_blank\">\n" +
    "						<div class=\"container-box-body\" ng-style=\"{'background':'url({{vm.getIcon(vm.filenames.MACOS)}}) no-repeat 0.5em center transparent'}\">\n" +
    "							{{ 'op.retrieveCertificate.install.download.text' | i18n }}\n" +
    "						</div>\n" +
    "					</a>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"l-retrieve-certificate-footer\">\n" +
    "		<div class=\"l-retrieve-certificate-images\">\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/auth/signUp/page-err/page-err.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/auth/signUp/page-err/page-err.tpl.html",
    "<div class=\"panel-layout l-cert-err l-sign-up-screen\" ng-controller=\"SignUpErrCtrl as signUpErrCtrl\">\n" +
    "	<div class=\"left-pane\">\n" +
    "		<div class=\"left-pane-content\">\n" +
    "			<div class=\"opalexe-welcome\">\n" +
    "\n" +
    "				<div class=\"opalexe-welcome-text\">\n" +
    "					{{ 'op.signup.welcomeMsg' | i18n }}\n" +
    "				</div>\n" +
    "				<div class=\"opalexe-welcome-image\"></div>\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"right-pane\">\n" +
    "		<div class=\"right-pane-wrapper\">\n" +
    "			<div class=\"right-pane-header\">\n" +
    "				<i class=\"oo-icon icon-delete-circle right-pane-element-centered\"></i>\n" +
    "				<div class=\"info-text info-text-center right-pane-element-centered\">\n" +
    "					{{ signUpErrCtrl.errorPageTitle | i18n }}\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"right-pane-body\" >\n" +
    "				<div ng-bind-html=\"signUpErrCtrl.errorPageText | i18n\" >\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"right-pane-footer\">\n" +
    "				<div class=\"avenger-image\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/auth/signUp/page-form/page-form.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/auth/signUp/page-form/page-form.tpl.html",
    "<div class=\"panel-layout l-sign-up l-sign-up-screen\" ng-controller=\"SignUpFormCtrl as signUpFormCtrl\">\n" +
    "	<div class=\"version\">{{$root.ooConfig.version}}</div>\n" +
    "	<div class=\"left-pane\">\n" +
    "		<div class=\"left-pane-content\">\n" +
    "			<div class=\"opalexe-welcome\">\n" +
    "\n" +
    "				<div class=\"opalexe-welcome-text\">\n" +
    "					{{ 'op.signup.welcomeMsg' | i18n }}\n" +
    "				</div>\n" +
    "				<div class=\"opalexe-welcome-image\"></div>\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"right-pane l-form-auth\">\n" +
    "		<div class=\"right-pane-wrapper\" ng-form=\"signUpFormCtrl.signUpForm\">\n" +
    "			<div class=\"right-pane-header\">\n" +
    "				<span oo-role-security=\"EXPERT\">{{ 'op.signup.form.signupForm' | i18n }} {{ 'op.experts' | i18n }}</span>\n" +
    "				<span oo-role-security=\"JUSTICE\">{{ 'op.signup.form.signupForm' | i18n }} {{ 'op.clerks' | i18n }} / {{ 'op.magistrates' | i18n }}</span>\n" +
    "				<span oo-role-security=\"LAWYER\">{{ 'op.signup.form.signupForm' | i18n }} {{ 'op.lawyers' | i18n }}</span>\n" +
    "				<span class=\"right-pane-header-help\" ng-mouseover=\"signUpFormCtrl.hovered = true\" ng-mouseleave=\"signUpFormCtrl.hovered = false\">\n" +
    "					{{ 'op.signup.form.help' | i18n }}\n" +
    "					<div class=\"info-box help-box\" ng-class=\"{ 'help-box_visible': signUpFormCtrl.hovered }\">\n" +
    "						<i class=\"oo-icon icon-information-circle-reverse help-box-icon\"></i>\n" +
    "						{{ signUpFormCtrl.helpText }}\n" +
    "					</div>\n" +
    "				</span>\n" +
    "			</div>\n" +
    "			<div class=\"right-pane-header\" oo-role-security=\"JUSTICE\">\n" +
    "				{{ 'op.signup.form.signupForm' | i18n }} {{ 'op.clerks' | i18n }} / {{ 'op.magistrates' | i18n }}\n" +
    "			</div>\n" +
    "			<div class=\"right-pane-header\" oo-role-security=\"LAWYER\">\n" +
    "				{{ 'op.signup.form.signupForm' | i18n }} {{ 'op.lawyers' | i18n }}\n" +
    "			</div>\n" +
    "			<form>\n" +
    "				<div class=\"right-pane-content\">\n" +
    "					<div class=\"form-box-relative\" ng-if=\"signUpFormCtrl.dnFromCertificate\">\n" +
    "\n" +
    "						<div class=\"form-box-innerbox\" ng-show=\"!visualiseCertificate\">\n" +
    "							<div class=\"form-wrapper certificate-box\">\n" +
    "								<div class=\"form-wrapper-icon\">\n" +
    "									<i class=\"oo-icon icon-rgs-one-star\"></i>\n" +
    "								</div>\n" +
    "								<div class=\"form-wrapper-inputs\">\n" +
    "									<div class=\"form-box-input-label\">\n" +
    "										{{ 'op.signup.form.yourCertificate' | i18n }}\n" +
    "									</div>\n" +
    "									<div class=\"certificate-box-content certificate-box-content-closed\" ng-bind-html=\"signUpFormCtrl.dnFromCertificate\"\n" +
    "									ng-mouseover=\"visualiseCertificate = true\" ng-mouseleave=\"visualiseCertificate = false\"></div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "\n" +
    "						<div class=\"form-box-innerbox form-box-innerbox-opened\" ng-show=\"visualiseCertificate\">\n" +
    "							<div class=\"form-wrapper certificate-box\">\n" +
    "								<div class=\"form-wrapper-icon\">\n" +
    "									<i class=\"oo-icon icon-rgs-one-star\"></i>\n" +
    "								</div>\n" +
    "								<div class=\"form-wrapper-inputs\">\n" +
    "									<div class=\"form-box-input-label\">\n" +
    "										{{ 'op.signup.form.yourCertificate' | i18n }}\n" +
    "									</div>\n" +
    "									<div class=\"certificate-box-content certificate-box-content-opened\" ng-bind-html=\"signUpFormCtrl.certificateSubjectDn\"\n" +
    "									ng-mouseover=\"visualiseCertificate = true\" ng-mouseleave=\"visualiseCertificate = false\"></div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"cnbfid-box\" ng-if=\"signUpFormCtrl.cnbfId\">\n" +
    "						<div class=\"form-box-input\">\n" +
    "							<div class=\"form-box-inline\">\n" +
    "								<div class=\"form-box-input-label\">\n" +
    "									{{ 'op.signup.form.yourCnbfId' | i18n }}\n" +
    "								</div>\n" +
    "								<div class=\"form-field-info\">\n" +
    "									{{signUpFormCtrl.cnbfId}}\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"form-box-inputs\">\n" +
    "						<div class=\"form-box form-box-input\">\n" +
    "							<div class=\"form-box-inline\">\n" +
    "								<div class=\"form-box-input-label form-box-input-label-mandatory\">\n" +
    "									{{ 'op.firstName.required' | i18n }}\n" +
    "								</div>\n" +
    "\n" +
    "								<div oui-form-field-container class=\"form-field-container-inline\">\n" +
    "									<div oui-form-field-value>\n" +
    "										<input type=\"text\"\n" +
    "												name=\"firstname\"\n" +
    "												placeholder=\"{{ 'op.firstName.text.required' | i18n }}\"\n" +
    "												ng-model=\"signUpFormCtrl.newAccount.firstName\"\n" +
    "												ng-required=\"true\" ng-maxlength=\"128\"\n" +
    "												autofocus\n" +
    "												ng-disabled=\"signUpFormCtrl.role === 'LAWYER'\"\n" +
    "											>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							<div class=\"form-box-inline\">\n" +
    "								<div class=\"form-box-input-label form-box-input-label-mandatory\">\n" +
    "									{{ 'op.lastName.required' | i18n }}\n" +
    "								</div>\n" +
    "\n" +
    "								<div oui-form-field-container class=\"form-field-container-inline\">\n" +
    "									<div oui-form-field-value>\n" +
    "										<input type=\"text\"\n" +
    "												name=\"name\"\n" +
    "												placeholder=\"{{ 'op.lastName.text.required' | i18n }}\"\n" +
    "												ng-model=\"signUpFormCtrl.newAccount.lastName\"\n" +
    "												ng-required=\"true\" ng-maxlength=\"128\"\n" +
    "												ng-disabled=\"signUpFormCtrl.role === 'LAWYER'\"\n" +
    "												>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "\n" +
    "						<div class=\"form-box form-box-input\">\n" +
    "							<div class=\"form-box-inline\">\n" +
    "								<div class=\"form-box-input-label\">\n" +
    "									{{ 'op.signup.form.landline' | i18n }}\n" +
    "								</div>\n" +
    "\n" +
    "								<div oui-form-field-container class=\"form-field-container-inline\">\n" +
    "									<div oui-form-field-value>\n" +
    "										<input type=\"text\"\n" +
    "											name=\"telephone\"\n" +
    "											placeholder=\"{{ 'op.telPlaceholder' | i18n }}\"\n" +
    "											ng-model=\"signUpFormCtrl.newAccount.phone\" ng-required=\"false\" ng-pattern=\"phoneNumberPattern\">\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							<div class=\"form-box-inline\">\n" +
    "								<div class=\"form-box-input-label\">\n" +
    "									{{ 'op.mobile' | i18n }}\n" +
    "								</div>\n" +
    "\n" +
    "								<div oui-form-field-container class=\"form-field-container-inline\">\n" +
    "									<div oui-form-field-value>\n" +
    "											<input type=\"text\"\n" +
    "												name=\"mobile\"\n" +
    "												placeholder=\"{{ 'op.telPlaceholderMobile' | i18n }}\"\n" +
    "												ng-model=\"signUpFormCtrl.newAccount.mobilePhone\" ng-required=\"false\" ng-pattern=\"phoneNumberPattern\">\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "\n" +
    "						<div class=\"form-box form-box-input\">\n" +
    "							<div class=\"form-box-inline form-box-inline-top\">\n" +
    "								<div class=\"form-box-input-label form-box-input-label-mandatory\">\n" +
    "									{{ 'op.email.required' | i18n }}\n" +
    "								</div>\n" +
    "\n" +
    "								<div oui-form-field-container class=\"form-field-container-inline form-box-relative\">\n" +
    "									<div oui-form-field-value>\n" +
    "										<i class=\"oo-icon icon-alert-circle-reverse icon-colored icon-colored-input-field\" oui-tooltip-text=\"i18n:oui.tooltip.error.email.field\" ng-show=\"isEmailWrong\"></i>\n" +
    "										<input type=\"email\"\n" +
    "											name=\"email\"\n" +
    "											placeholder=\"{{ 'op.email.text.required' | i18n }}\"\n" +
    "											ng-model=\"signUpFormCtrl.newAccount.email\" ng-required=\"true\" ng-maxlength=\"92\" mail-validation>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "\n" +
    "							<div class=\"form-box-inline\" oo-role-security=\"EXPERT\">\n" +
    "								<div class=\"form-box-input-label form-box-input-label-mandatory\">\n" +
    "									{{ 'op.address.required' | i18n }}\n" +
    "								</div>\n" +
    "\n" +
    "								<div oui-form-field-container class=\"form-field-container-inline form-field-container-inline-address\">\n" +
    "									<div oui-form-field-value>\n" +
    "											<input type=\"text\"\n" +
    "												name=\"streetAddress\"\n" +
    "												placeholder=\"{{ 'op.streetAddress' | i18n }}\"\n" +
    "												ng-model=\"signUpFormCtrl.newAccount.streetAddress\" ng-required=\"true\" ng-maxlength=\"192\" />\n" +
    "									</div>\n" +
    "								</div>\n" +
    "\n" +
    "								<div oui-form-field-container class=\"form-field-container-inline form-field-container-inline-address form-box-inline form-field-container-inline-postal\">\n" +
    "									<div oui-form-field-value>\n" +
    "											<input type=\"text\"\n" +
    "												name=\"postalCode\"\n" +
    "												placeholder=\"{{ 'op.postalCode' | i18n }}\"\n" +
    "												ng-model=\"signUpFormCtrl.newAccount.postalCode\" ng-required=\"true\" ng-maxlength=\"8\" />\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								<div oui-form-field-container class=\"form-field-container-inline form-field-container-inline-address form-box-inline form-field-container-inline-city\">\n" +
    "									<div oui-form-field-value>\n" +
    "											<input type=\"text\"\n" +
    "												name=\"city\"\n" +
    "												placeholder=\"{{ 'op.city' | i18n }}\"\n" +
    "												ng-model=\"signUpFormCtrl.newAccount.city\" ng-required=\"true\" ng-maxlength=\"32\" />\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								<div class=\"oo-form-field-container oo-dropdown oo-dropdown-holder form-field-container-inline form-box-relative\">\n" +
    "									<div class=\"oo-dropdown oo-dropdown-color oo-dropdown-title\">\n" +
    "										{{ signUpFormCtrl.newAccount.country.label ? (signUpFormCtrl.newAccount.country.label | i18n) : signUpFormCtrl.newAccount.country }}\n" +
    "									</div>\n" +
    "									<i class=\"oo-icon icon-alert-circle-reverse icon-colored icon-colored-select-box\" oui-tooltip-text=\"i18n:oui.tooltip.error.mandatory\" ng-show=\"!signUpFormCtrl.newAccount.country.id\"></i>\n" +
    "									<i class=\"oo-icon oo-dropdown-after icon-nav-down\"></i>\n" +
    "									<select class=\"oo-dropdown oo-dropdown-color\" rel=\"dashboard-country\" ng-model=\"signUpFormCtrl.newAccount.country\" ng-options=\"(country.label | i18n) for country in signUpFormCtrl.countries\">\n" +
    "									</select>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "\n" +
    "							<div class=\"form-box-inline\" oo-role-security=\"JUSTICE LAWYER\">\n" +
    "								<div class=\"form-box-input-label\">\n" +
    "									{{ 'op.address' | i18n }}\n" +
    "								</div>\n" +
    "\n" +
    "								<div oui-form-field-container class=\"form-field-container-inline\">\n" +
    "									<div oui-form-field-ico-label=\"adresse_postale2\" class=\"field-icon\"></div>\n" +
    "									<div oui-form-field-value>\n" +
    "											<textarea name=\"textarea\"\n" +
    "													  ng-model=\"signUpFormCtrl.newAccount.address\"\n" +
    "													  ng-attr-placeholder=\"{{'op.addressPlaceholder' | i18n}}\"\n" +
    "													  rows=\"3\" ng-maxlength=\"300\"\n" +
    "													></textarea>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "\n" +
    "						<div class=\"form-box form-box-input form-box-relative\" oo-role-security=\"EXPERT\">\n" +
    "							<div class=\"form-box-inline form-box-inline-top\">\n" +
    "\n" +
    "									<div class=\"form-box-input-label form-box-input-label-mandatory\">\n" +
    "										{{ 'op.courtSelection.mandatory' | i18n }}\n" +
    "									</div>\n" +
    "\n" +
    "									<div class=\"oo-form-field-container oo-dropdown oo-dropdown-holder form-field-container-inline form-box-relative\">\n" +
    "										<div class=\"oo-dropdown oo-dropdown-color oo-dropdown-title {{(signUpFormCtrl.selectCourtValue===('op.courtSelectionHolder' | i18n))?'' : 'selected'}}\">\n" +
    "											{{ signUpFormCtrl.selectCourtValue.name ? signUpFormCtrl.selectCourtValue.name : signUpFormCtrl.selectCourtValue }}\n" +
    "										</div>\n" +
    "										<i class=\"oo-icon icon-alert-circle-reverse icon-colored icon-colored-select-box\" oui-tooltip-text=\"i18n:oui.tooltip.error.mandatory\" ng-show=\"!signUpFormCtrl.selectCourtValue.id\"></i>\n" +
    "										<i class=\"oo-icon oo-dropdown-after icon-nav-down\"></i>\n" +
    "										<select class=\"oo-dropdown oo-dropdown-color\" rel=\"dashboard-courts\" ng-model=\"signUpFormCtrl.selectCourtValue\" ng-options=\"court.name for court in signUpFormCtrl.courts\">\n" +
    "										</select>\n" +
    "									</div>\n" +
    "\n" +
    "									<div class=\"form-box-inline-bottom\">\n" +
    "										<div class=\"form-box-input-label\">\n" +
    "											{{ 'op.nationalList' | i18n }}\n" +
    "										</div>\n" +
    "										<div class=\"form-radios-input\">\n" +
    "											<div class=\"form-radio-container\">\n" +
    "												<input id=\"nationalListTrue\" type=\"radio\" ng-model=\"signUpFormCtrl.newAccount.nationalList\" name=\"nationalList\" ng-value=\"true\" />\n" +
    "												<label for=\"nationalListTrue\">{{ 'common.yes' | i18n }}</label>\n" +
    "											</div>\n" +
    "											<div class=\"form-radio-container\">\n" +
    "												<input id=\"nationalListFalse\" type=\"radio\" ng-model=\"signUpFormCtrl.newAccount.nationalList\" name=\"nationalList\" ng-value=\"false\" />\n" +
    "												<label for=\"nationalListFalse\">{{ 'common.no' | i18n }}</label>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "									</div>\n" +
    "\n" +
    "							</div>\n" +
    "							<div class=\"form-box-inline\">\n" +
    "								<div class=\"form-box-input-label form-box-input-label-mandatory\">\n" +
    "									{{ 'op.specialties.mandatory' | i18n }}\n" +
    "									<i class=\"oo-icon icon-alert-circle-reverse icon-colored\" oui-tooltip-text=\"i18n:oui.tooltip.error.mandatory\" ng-show=\"!signUpFormCtrl.isSpecialtiesSelected\"></i>\n" +
    "								</div>\n" +
    "\n" +
    "								<div class=\"oo-form-field-container oo-checkbox-multiple form-field-container-inline {{signUpFormCtrl.specialties.length>0?'oo-checkbox-multiple-scroll':''}}\">\n" +
    "									<div ng-if=\"!signUpFormCtrl.specialties || signUpFormCtrl.specialties.length==0\" class=\"oo-checkbox-multiple-empty\">\n" +
    "										<div class=\"oo-checkbox-multiple-icon\">\n" +
    "											<i class=\"opx-icon-expert\"></i>\n" +
    "										</div>\n" +
    "										{{'op.specialtiesEmpty' | i18n}}\n" +
    "									</div>\n" +
    "									<div ng-repeat=\"specialty in signUpFormCtrl.specialties\" ng-if=\"signUpFormCtrl.specialties && signUpFormCtrl.specialties.length>0\" class=\"oo-checkbox-multiple-list form-checkbox-container\" ng-class=\"{'oo-checkbox-selected' : specialty.selected}\">\n" +
    "										<input id=\"court-specialty-{{$index}}\" ng-model=\"specialty.selected\" type=\"checkbox\"/>\n" +
    "										<label for=\"court-specialty-{{$index}}\">{{specialty.name}}</label>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "\n" +
    "						<div class=\"form-box form-box-input\" oo-role-security=\"JUSTICE\">\n" +
    "							<div class=\"form-box-input-label\">\n" +
    "								{{ 'op.signup.form.role' | i18n }}\n" +
    "							</div>\n" +
    "							<div class=\"form-radios-input\">\n" +
    "								<div class=\"form-radio-container\">\n" +
    "									<input id=\"roleMagistrat\" type=\"radio\" ng-model=\"signUpFormCtrl.newAccount.role\" name=\"role\" value=\"MAGISTRATE\" />\n" +
    "									<label for=\"roleMagistrat\">{{ 'op.signup.form.roleMagistrat' | i18n }}</label>\n" +
    "								</div>\n" +
    "								<div class=\"form-radio-container\">\n" +
    "									<input id=\"roleGreffier\" type=\"radio\" ng-model=\"signUpFormCtrl.newAccount.role\" name=\"role\" value=\"CLERK\" />\n" +
    "									<label for=\"roleGreffier\">{{ 'op.signup.form.roleGreffier' | i18n }}</label>\n" +
    "								</div>\n" +
    "								<i class=\"oo-icon icon-alert-circle-reverse icon-colored icon-colored-radio-field\" oui-tooltip-text=\"i18n:oui.tooltip.error.mandatory\" ng-show=\"!signUpFormCtrl.newAccount.role\"></i>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "\n" +
    "						<div class=\"form-box form-box-input\">\n" +
    "							<div class=\"form-checkbox-container\">\n" +
    "								<input id=\"CguOk\" type=\"checkbox\" name=\"check\" ng-model=\"signUpFormCtrl.newAccount.CguOk\" value=\"true\">\n" +
    "								<label for=\"CguOk\">\n" +
    "									{{ 'op.signup.form.respectCGUBeforeLink' | i18n }}\n" +
    "									<a class=\"form-link\" href=\"{{signUpFormCtrl.getTermsOfUseLink()}}\" target=\"_blank\">{{ 'op.signup.form.respectCGULink' | i18n }}</a>\n" +
    "									{{ 'op.signup.form.respectCGUAfterLink' | i18n }}\n" +
    "								</label>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"right-pane-footer\">\n" +
    "					<div class=\"l-pull-left\">\n" +
    "						{{ 'op.mandatory.signification' | i18n }}\n" +
    "					</div>\n" +
    "					<div class=\"l-pull-right\">\n" +
    "						<button class=\"oo-form-button button-purple\" oo-promise-click=\"signUpFormCtrl.verifySignUp()\" oo-loading-message-click=\"op.loading\" oo-original-message=\"common.submit\" rel=\"validate\" ng-disabled=\"signUpFormCtrl.isFormDisabled()\">\n" +
    "								{{ 'common.submit' | i18n }}</button>\n" +
    "						<button class=\"oo-form-button button-cancel\" ng-click=\"signUpFormCtrl.reinitialize()\">{{ 'op.signup.form.reinitialize.form' | i18n }}</button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</form>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/auth/signUp/page-redirect/page-redirect.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/auth/signUp/page-redirect/page-redirect.tpl.html",
    "<div class=\"panel-layout l-cert-err l-sign-up-screen\" ng-controller=\"SignUpRedirectCtrl as signUpRedirectCtrl\">\n" +
    "	<div class=\"left-pane\">\n" +
    "		<div class=\"left-pane-content\">\n" +
    "			<div class=\"opalexe-welcome\">\n" +
    "\n" +
    "				<div class=\"opalexe-welcome-text\">\n" +
    "					{{ 'op.signup.welcomeMsg' | i18n }}\n" +
    "				</div>\n" +
    "				<div class=\"opalexe-welcome-image\"></div>\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"right-pane\">\n" +
    "		<div class=\"right-pane-wrapper\">\n" +
    "			<div class=\"right-pane-header\">\n" +
    "				<div class=\"info-text info-text-center right-pane-element-centered\">\n" +
    "					{{ signUpRedirectCtrl.redirectPageTitle | i18n }}\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"right-pane-body\" >\n" +
    "				<div ng-bind-html=\"signUpRedirectCtrl.redirectPageText | i18n\" ></div>\n" +
    "				<button ng-click=\"signUpRedirectCtrl.openDestination()\" class=\"oo-form-button button-purple\">{{ 'op.signup.redirect.button.confirm' | i18n }}</button>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"right-pane-footer\">\n" +
    "				<div class=\"avenger-image\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/auth/signUp/page-unregCertForm/page-unregCertForm.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/auth/signUp/page-unregCertForm/page-unregCertForm.tpl.html",
    "<div class=\"panel-layout l-unreg-certif l-sign-up-screen\" ng-controller=\"SignUpUnregCertFormCtrl as signUpUnregCertFormCtrl\">\n" +
    "	<div class=\"version\">{{$root.ooConfig.version}}</div>\n" +
    "	<div class=\"left-pane\">\n" +
    "		<div class=\"left-pane-content\">\n" +
    "			<div class=\"opalexe-welcome\">\n" +
    "\n" +
    "				<div class=\"opalexe-welcome-text\">\n" +
    "					{{ 'op.signup.welcomeMsg' | i18n }}\n" +
    "				</div>\n" +
    "				<div class=\"opalexe-welcome-image\"></div>\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"right-pane\">\n" +
    "		<div class=\"right-pane-wrapper\">\n" +
    "			<div class=\"right-pane-header\">\n" +
    "				<i class=\"oo-icon icon-information-circle-reverse\"></i>\n" +
    "				<div class=\"info-text\">\n" +
    "					{{ 'op.signup.unregistered.cert.account.form.title' | i18n }}\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"right-pane-content\">\n" +
    "				<form ng-submit=\"signUpUnregCertFormCtrl.validate()\">\n" +
    "					<div class=\"form-wrapper\">\n" +
    "						<div class=\"info-text\">\n" +
    "							<div class=\"form-box-input-label\">\n" +
    "								{{ 'op.signup.unregistered.cert.existing.account.text' | i18n }}\n" +
    "							</div>\n" +
    "							<div class=\"form-radios-input\">\n" +
    "								<div class=\"form-radio-container\">\n" +
    "									<input id=\"hasAccountYes\" type=\"radio\" ng-model=\"signUpUnregCertFormCtrl.hasAccount\" name=\"hasAccount\" ng-value=\"true\" />\n" +
    "									<label for=\"hasAccountYes\">{{ 'op.signup.unregistered.cert.account.form.yes' | i18n }}</label>\n" +
    "								</div>\n" +
    "								<div class=\"form-radio-container\">\n" +
    "									<input id=\"hasAccountNo\" type=\"radio\" ng-model=\"signUpUnregCertFormCtrl.hasAccount\" name=\"hasAccount\" ng-value=\"false\" />\n" +
    "									<label for=\"hasAccountNo\">{{ 'op.signup.unregistered.cert.account.form.no' | i18n }}</label>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"l-pull-center\">\n" +
    "							<button ng-click=\"signUpUnregCertFormCtrl.validate()\" type=\"submit\" class=\"oo-form-button button-purple\" ng-disabled=\"signUpUnregCertFormCtrl.isFormDisabled()\">{{ 'common.submit' | i18n }}</button>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</form>\n" +
    "			</div>\n" +
    "			<div class=\"right-pane-footer\">\n" +
    "				<div class=\"avenger-image\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/auth/signUp/page-valid/page-valid.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/auth/signUp/page-valid/page-valid.tpl.html",
    "<div class=\"panel-layout l-sign-up l-sign-up-screen\" ng-controller=\"SignUpValidCtrl as signUpValidCtrl\">\n" +
    "	<div class=\"version\">{{$root.ooConfig.version}}</div>\n" +
    "	<div class=\"left-pane\">\n" +
    "		<div class=\"left-pane-content\">\n" +
    "			<div class=\"opalexe-welcome\">\n" +
    "\n" +
    "				<div class=\"opalexe-welcome-text\">\n" +
    "					{{ 'op.signup.welcomeMsg' | i18n }}\n" +
    "				</div>\n" +
    "				<div class=\"opalexe-welcome-image\"></div>\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"right-pane l-form-valid\">\n" +
    "		<div class=\"right-pane-wrapper\">\n" +
    "			<div ng-show=\"!signUpValidCtrl.addCertificate\">\n" +
    "				<div class=\"right-pane-header\" oo-role-security=\"EXPERT\">\n" +
    "					{{ 'op.signup.form.signupForm' | i18n }} {{ 'op.experts' | i18n }}\n" +
    "				</div>\n" +
    "				<div class=\"right-pane-header\" oo-role-security=\"JUSTICE\">\n" +
    "					{{ 'op.signup.form.signupForm' | i18n }} {{ 'op.clerks' | i18n }} / {{ 'op.magistrates' | i18n }}\n" +
    "				</div>\n" +
    "				<div class=\"right-pane-header\" oo-role-security=\"LAWYER\">\n" +
    "					{{ 'op.signup.form.signupForm' | i18n }} {{ 'op.lawyers' | i18n }}\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"right-pane-header\" ng-show=\"signUpValidCtrl.addCertificate\">\n" +
    "				{{ 'op.signup.valid.add.cert.ok.title' | i18n }}\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"right-pane-body\">\n" +
    "				<div class=\"form-wrapper\">\n" +
    "\n" +
    "					<div class=\"l-pull-center info-text\">\n" +
    "						{{ signUpValidCtrl.validText | i18n }}\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"l-pull-center form-icon\">\n" +
    "						<i class=\"oo-icon icon-validate-circle-reverse\"></i>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"l-pull-center\">\n" +
    "						<button ng-click=\"signUpValidCtrl.openDashboard()\" rel=\"open-dashboard\" class=\"oo-form-button button-purple\">{{ 'op.signup.valid.okButton' | i18n }}</button>\n" +
    "					</div>\n" +
    "\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"right-pane-footer\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/auth/signUp/signUp.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/auth/signUp/signUp.tpl.html",
    "<div ng-controller=\"SignUpCtrl as signUpCtrl\">\n" +
    "	<div ng-include=\"'app/auth/signUp/page-unregCertForm/page-unregCertForm.tpl.html'\" ng-if=\"signUpCtrl.goTo === 'LOGIN'\"></div>\n" +
    "	<div ng-include=\"'app/auth/signUp/page-valid/page-valid.tpl.html'\" ng-if=\"signUpCtrl.goTo === 'REG_OK'\"></div>\n" +
    "	<div ng-include=\"'app/auth/signUp/page-err/page-err.tpl.html'\" ng-if=\"signUpCtrl.goTo === 'ERROR_PAGE'\"></div>\n" +
    "	<div ng-include=\"'app/auth/signUp/page-form/page-form.tpl.html'\" ng-if=\"signUpCtrl.goTo === 'LOGIN_FORM'\"></div>\n" +
    "	<div ng-include=\"'app/auth/signUp/page-redirect/page-redirect.tpl.html'\" ng-if=\"signUpCtrl.goTo === 'REDIRECT'\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/create-expertise/create-expertise.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/create-expertise/create-expertise.tpl.html",
    "<div class=\"l-create-expertise\" ng-controller=\"CreateExpertiseCtrl as createExpertiseCtrl\">\n" +
    "\n" +
    "	<header class=\"l-create-expertise-title\">\n" +
    "		<span ng-show=\"!expertiseId\"> {{ 'op.app.createExpertise.title' | i18n }} </span>\n" +
    "		<span ng-show=\"expertiseId\"> {{ 'op.app.renameExpertise.title' | i18n }} </span>\n" +
    "	</header>\n" +
    "\n" +
    "	<op-notification-form input-values=\"createExpertiseCtrl.notifInputValues\" form-valid=\"createExpertiseCtrl.notifFormValid\"></op-notification-form>\n" +
    "\n" +
    "	<footer class=\"oo-close-action\">\n" +
    "		<button class=\"oo-form-button op-btn-purple sidepanel-layout-footer-action\" oo-promise-click=\"createExpertiseCtrl.submit()\" oo-loading-message-click=\"op.loading\"\n" +
    "			oo-original-message=\"common.submit\" ng-disabled=\"!createExpertiseCtrl.notifFormValid\">{{'common.submit' | i18n}}</button>\n" +
    "		<button class=\"oo-form-button op-btn-darkgray sidepanel-layout-footer-action\" ng-click=\"closeModal()\">{{'common.cancel' | i18n}}</button>\n" +
    "	</footer>\n" +
    "\n" +
    "</div>");
}]);

angular.module("app/create-notification/create-notification.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/create-notification/create-notification.tpl.html",
    "<div oui-sidepanel max-width=\"5000em\">\n" +
    "	<div oui-sidepanel-page tpl=\"app/create-notification/create-notification_wizard.tpl.html\" dom-conserve></div>\n" +
    "</div>");
}]);

angular.module("app/create-notification/create-notification_wizard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/create-notification/create-notification_wizard.tpl.html",
    "<div class=\"sidepanel-layout-content\" ng-controller=\"CreateNotificationCtrl as createNotificationCtrl\">\n" +
    "	<header class=\"sidepanel-layout-header\">\n" +
    "		<div class=\"sidepanel-layout-header-title\">{{ 'op.app.createDesignation.title' | i18n }}</div>\n" +
    "	</header>\n" +
    "\n" +
    "	<div class=\"sidepanel-layout-content-inner l-create-designation\">\n" +
    "		<div class=\"wizard-layout-column-left\">\n" +
    "			<header class=\"wizard-layout-column-header\">\n" +
    "				<div class=\"wizard-layout-column-header-title\" ng-bind-html=\"'op.app.createDesignation.left.title' | i18n\"></div>\n" +
    "			</header>\n" +
    "			<div class=\"wizard-layout-column-content\">\n" +
    "				<div class=\"title\">{{ 'op.app.createDesignation.expert.selected' | i18n}}</div>\n" +
    "\n" +
    "				<div class=\"no-data\" ng-hide=\"createNotificationCtrl.expertSelected\">\n" +
    "					<button class=\"wizard-button\" ng-click=\"createNotificationCtrl.openExpertSelectionPanel();\">\n" +
    "						<i class=\"oo-icon icon-add-circle wizard-button-icon\"></i>\n" +
    "						{{ 'op.app.createDesignation.expert.select' | i18n}}\n" +
    "					</button>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"with-data\" ng-show=\"createNotificationCtrl.expertSelected\">\n" +
    "					<button class=\"wizard-button\" ng-click=\"createNotificationCtrl.openExpertSelectionPanel();\">\n" +
    "						{{ 'op.app.createDesignation.expert.change' | i18n}}\n" +
    "					</button>\n" +
    "					<ul class=\"user-card\">\n" +
    "						<li class=\"user-card-name\"><i class=\"oo-icon icon-user-circle user-card-icon\"></i>{{[createNotificationCtrl.expertSelected.firstName, createNotificationCtrl.expertSelected.lastName].join(' ')}}</li>\n" +
    "						<li><i class=\"oo-icon icon-court\"></i>{{createNotificationCtrl.expertSelected._embedded.court.name}}</li>\n" +
    "						<li ng-repeat=\"specialty in createNotificationCtrl.expertSelected._embedded.specialties\" oui-tooltip-text=\"{{specialty.name}}\">\n" +
    "							<i class=\"opx-icon-expert\"></i>{{specialty.name}}\n" +
    "						</li>\n" +
    "						<li><i class=\"oo-icon icon-email\"></i>{{createNotificationCtrl.expertSelected.email}}</li>\n" +
    "						<li><i class=\"oo-icon icon-device-smartphone\"></i>{{createNotificationCtrl.expertSelected.phoneNumber}}</li>\n" +
    "					</ul>\n" +
    "				</div>\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"wizard-layout-column-right\">\n" +
    "			<header class=\"wizard-layout-column-header\">\n" +
    "				<div class=\"wizard-layout-column-header-title\" ng-bind-html=\"'op.app.createDesignation.right.title' | i18n\"></div>\n" +
    "			</header>\n" +
    "			<div class=\"wizard-layout-column-content\">\n" +
    "				<div class=\"wizard-layout-column-right-title\">\n" +
    "					<i class=\"oo-icon icon-user-circle wizard-layout-column-right-title-icon\"></i>\n" +
    "					<span class=\"wizard-layout-column-right-title-user-name\">\n" +
    "						{{ $root.ooConfig.session.user.firstName + ' ' + $root.ooConfig.session.user.lastName }}\n" +
    "						{{ 'op.me' | i18n }}\n" +
    "					</span>\n" +
    "					- {{ createNotificationCtrl.creationDate | date: 'fullDate' }}\n" +
    "				</div>\n" +
    "				<div class=\"speech-outline\">\n" +
    "					<div class=\"speech-outline-arrow\">\n" +
    "						<i class=\"speech-outline-arrow-big\"></i>\n" +
    "						<i class=\"speech-outline-arrow-small\"></i>\n" +
    "					</div>\n" +
    "					<div class=\"speech-outline-inner\">\n" +
    "						<h2>\n" +
    "							<i class=\"oo-icon icon-email\"></i>\n" +
    "							<span>{{'op.app.createDesignation.expertise.title' | i18n}}</span>\n" +
    "						</h2>\n" +
    "\n" +
    "						<op-upload\n" +
    "							upload-counter-max=\"1\"\n" +
    "							upload-url=\"{{createNotificationCtrl.designationItemsUrl}}\"\n" +
    "							file-models=\"createNotificationCtrl.filesDesignations\"\n" +
    "							upload-action-cfg=\"createNotificationCtrl.uploadActionCfg\">\n" +
    "						</op-upload>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<footer class=\"sidepanel-layout-footer\">\n" +
    "		<button class=\"oo-form-button op-btn-purple sidepanel-layout-footer-action\" ng-click=\"createNotificationCtrl.submitDesignation()\" ng-disabled=\"!createNotificationCtrl.expertSelected || !createNotificationCtrl.areAllFilesUploaded()\">{{'op.send' | i18n}}</button>\n" +
    "		<button class=\"oo-form-button op-btn-white sidepanel-layout-footer-action\" ng-click=\"createNotificationCtrl.cancel()\">{{'common.cancel' | i18n}}</button>\n" +
    "	</footer>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/dashboard/dashboard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/dashboard/dashboard.tpl.html",
    "<div oui-dashboard class=\"dashboard-layout l-dashboard\" content-tpl=\"app/dashboard/dashboard_content.tpl.html\">\n" +
    "	<div oui-dashboard-sidepanel=\"sp-create-notification\" tpl=\"app/create-notification/create-notification.tpl.html\"></div>\n" +
    "	<div oui-dashboard-sidepanel=\"global-sp-users-experts-directory\" tpl=\"app/users-directory/users-directory.tpl.html\"></div>\n" +
    "	<div oui-dashboard-workspace=\"Workspace\" tpl=\"app/Le-Workspace/le-Workspace.tpl.html\" dom-conserve></div>\n" +
    "	<div oui-dashboard-sidepanel=\"sp-designation-details\" tpl=\"app/notification-details/notification-details.tpl.html\"></div>\n" +
    "	<div oui-dashboard-sidepanel=\"global-sp-notification-reply\" tpl=\"app/notification-reply/notification-reply.tpl.html\"></div>\n" +
    "	<div oui-dashboard-sidepanel=\"sp-expertise-details\" tpl=\"app/expertise-details/expertise-details.tpl.html\"></div>\n" +
    "	<div oui-dashboard-sidepanel=\"sp-user-form\" tpl=\"app/user-form/user-form.tpl.html\"></div>\n" +
    "	<div oui-dashboard-sidepanel=\"sp-share\" tpl=\"app/expertise-details/share/share.tpl.html\"></div>\n" +
    "	<div oui-dashboard-sidepanel=\"sp-personal-info\" tpl=\"app/personal-info/personal-info.tpl.html\"></div>\n" +
    "	<div oui-dashboard-sidepanel=\"sp-contradictory-details\" tpl=\"app/expertise-details/contradictory/contradictory-details/contradictory-details.tpl.html\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/dashboard/dashboard_content.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/dashboard/dashboard_content.tpl.html",
    "<div class=\"oui-fullsize\" ng-controller=\"DashboardCtrl as dashboard\" oo-role-security=\"MAGISTRATE CLERK JUSTICE EXPERT\">\n" +
    "	<div class=\"version\">{{$root.ooConfig.version}}</div>\n" +
    "	<header class=\"dashboard-layout-header\">\n" +
    "		<div class=\"oot-usermenu\">\n" +
    "			<span class=\"oot-usermenu-name\" ng-click=\"dashboard.viewPersonalInfo();\">{{dashboard.fullName}}</span>\n" +
    "			<i class=\"oo-icon icon-user-circle\" ng-click=\"dashboard.viewPersonalInfo();\"></i>\n" +
    "			<i class=\"dashboard-search-icon icon-search\" ng-click=\"openWorkspace('Workspace', 'search');\"></i>\n" +
    "		</div>\n" +
    "	</header>\n" +
    "	<div class=\"dashboard-layout-content\">\n" +
    "		<div class=\"dashboard-layout-content-title\">\n" +
    "			<div oo-role-security=\"EXPERT\" ng-bind-html=\"('op.app.dashboard.title' | i18n | escapeHtml:false:true) + ('op.expert' | i18n | escapeHtml:false:true)\"></div>\n" +
    "			<div oo-role-security=\"MAGISTRATE\" ng-bind-html=\"('op.app.dashboard.title' | i18n | escapeHtml:false:true) + ('op.magistrate' | i18n | escapeHtml:false:true)\"></div>\n" +
    "			<div oo-role-security=\"CLERK\" ng-bind-html=\"('op.app.dashboard.title' | i18n | escapeHtml:false:true) + ('op.clerk' | i18n | escapeHtml:false:true)\"></div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div oo-role-security=\"MAGISTRATE CLERK JUSTICE\" class=\"dashboard-layout-content-wrapper\">\n" +
    "			<!-- opalexe logo -->\n" +
    "			<div class=\"dashboard-layout-content-cell\">\n" +
    "				<img class=\"opalexe-welcome-image\" src=\"resources/images/logos/opalexe.png\" />\n" +
    "			</div>\n" +
    "			<!-- create buttons list -->\n" +
    "			<div class=\"dashboard-layout-content-cell\">\n" +
    "				<div class=\"title\">{{ 'op.app.dashboard.notification' | i18n }}</div>\n" +
    "				<div class=\"dashboard-layout-btn\" ng-click=\"openSidePanel('sp-create-notification');\">\n" +
    "					<i class=\"opx-icon-justice\"></i>\n" +
    "					<p class=\"dashboard-layou-btn-text\">{{ 'op.app.dashboard.createDesignation' | i18n}}</p>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<!-- designations -->\n" +
    "			<div class=\"dashboard-layout-content-cell\">\n" +
    "				<div class=\"title\">{{ 'op.app.dashboard.waitingDesignations' | i18n}} <span class=\"count\">{{dashboard.designations.length}}</span></div>\n" +
    "\n" +
    "				<div class=\"l-overlist-small l-dashboard-list-empty\" ng-hide=\"dashboard.designations.length\">\n" +
    "					<div class=\"overlist-content\">\n" +
    "						<div>\n" +
    "							<p>{{ 'op.designations.empty' | i18n }}</p>\n" +
    "							<i class=\"opx-icon-prize\"></i>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<footer class=\"overlist-footer\">\n" +
    "						<div class=\"overlist-footer-icon\">\n" +
    "							<i class=\"opx-icon-prize\"></i>\n" +
    "						</div>\n" +
    "\n" +
    "						<div class=\"overlist-footer-action\">\n" +
    "							<button class=\"oo-form-button op-btn-white\" ng-click=\"openWorkspace('Workspace', 'designations')\">{{'op.app.dashboard.allDesignations' | i18n}}</button>\n" +
    "						</div>\n" +
    "					</footer>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"overlist l-overlist-small designation\" ng-show=\"dashboard.designations.length\">\n" +
    "					<ul class=\"overlist-content ootlist\" scrollbar=\"{ axis: 'y', wheel: true }\" op-scrollbar=\"dashboard.designations\">\n" +
    "						<li ng-repeat=\"designation in dashboard.designations\" class=\"ootitem\" ng-click=\"dashboard.openDesignationDetails(designation.id)\">\n" +
    "							<div class=\"ootitem-title\">\n" +
    "								<i class=\"opx-icon-prize\"></i>\n" +
    "								{{designation.expertFullName}} ({{ 'op.expert' | i18n }})\n" +
    "							</div>\n" +
    "							<div class=\"ootitem-line\">\n" +
    "								<div class=\"ootitem-line-cell\">\n" +
    "									<i class=\"oo-icon icon-sharing-file\"></i> <ng-pluralize count=\"designation.itemCount\" when=\"{'0': 'Aucun documents', 'one': '1 document', 'other': '{} documents'}\"></ng-pluralize>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</li>\n" +
    "					</ul>\n" +
    "					<footer class=\"overlist-footer\">\n" +
    "						<div class=\"overlist-footer-icon\">\n" +
    "							<i class=\"opx-icon-prize\"></i>\n" +
    "						</div>\n" +
    "\n" +
    "						<div class=\"overlist-footer-action\">\n" +
    "							<button class=\"oo-form-button op-btn-white\" ng-click=\"openWorkspace('Workspace', 'designations')\">{{'op.app.dashboard.allDesignations' | i18n}}</button>\n" +
    "						</div>\n" +
    "					</footer>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "			<!-- current expertises list -->\n" +
    "			<div class=\"dashboard-layout-content-cell\">\n" +
    "				<div class=\"title\">{{ 'op.app.dashboard.expertisesList' | i18n}} <span class=\"count\">{{dashboard.expertises.length}}<span ng-show=\"dashboard.hasMore\">+</span></span>\n" +
    "					<span class=\"l-dashboard dashboard-refresh-icon\">\n" +
    "						<i class=\"oo-icon icon-refresh\" ng-click=\"dashboard.reloadExpertises()\"></i>\n" +
    "					</span>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"l-overlist-small l-dashboard-list-empty\" ng-hide=\"dashboard.expertises.length\">\n" +
    "					<div class=\"overlist-content\">\n" +
    "						<div>\n" +
    "							<p>{{ 'op.expertises.empty' | i18n }}</p>\n" +
    "							<i class=\"opx-icon-justice\"></i>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<footer class=\"overlist-footer\">\n" +
    "						<div class=\"overlist-footer-icon\">\n" +
    "							<i class=\"opx-icon-justice\"></i>\n" +
    "						</div>\n" +
    "\n" +
    "						<div class=\"overlist-footer-action\">\n" +
    "							<button class=\"oo-form-button op-btn-white\" ng-click=\"openWorkspace('Workspace', 'expertises')\">{{'op.app.dashboard.allExpertises' | i18n}}</button>\n" +
    "						</div>\n" +
    "					</footer>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"overlist l-overlist-small expertise-list\" ng-show=\"dashboard.expertises.length\">\n" +
    "					<ul class=\"overlist-content ootlist\"  scrollbar=\"{ axis: 'y', wheel: true }\" op-scrollbar=\"dashboard.expertises\">\n" +
    "						<li ng-repeat=\"expertise in dashboard.expertises\" class=\"ootitem\"\n" +
    "							ng-click=\"dashboard.openExpertiseDetails(expertise.id)\"\n" +
    "							>\n" +
    "							<div class=\"ootitem-title\">\n" +
    "								<span ng-show=\"expertise.highlighted\" class=\"l-dashboard dashboard-expertise-highlight\">!</span>\n" +
    "								<i ng-show=\"!expertise.highlighted\" class=\"opx-icon-justice\"></i>\n" +
    "								<span>{{expertise.name}}</span>\n" +
    "							</div>\n" +
    "							<div class=\"ootitem-line\">\n" +
    "								<div class=\"ootitem-line-cell\">\n" +
    "									<i class=\"opx-icon-user-judge\"></i> {{expertise.expertFullName}}\n" +
    "								</div>\n" +
    "								<div class=\"ootitem-line-cell\">\n" +
    "									<i class=\"opx-icon opx-icon-euro-circle-reverse\"></i>\n" +
    "									<span ng-hide=\"expertise.taxationDate\">{{ 'op.expertises.waitingTax' | i18n }}</span>\n" +
    "									<span ng-show=\"expertise.taxationDate\">{{ expertise.taxationDate | date: 'fullDate' }}</span>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</li>\n" +
    "					</ul>\n" +
    "					<footer class=\"overlist-footer\">\n" +
    "						<div class=\"overlist-footer-icon\">\n" +
    "							<i class=\"opx-icon-justice\"></i>\n" +
    "						</div>\n" +
    "						<div class=\"overlist-footer-action\">\n" +
    "							<button class=\"oo-form-button op-btn-white\" ng-click=\"openWorkspace('Workspace', 'expertises')\">{{'op.app.dashboard.allExpertises' | i18n}}</button>\n" +
    "						</div>\n" +
    "					</footer>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div oo-role-security=\"EXPERT\" class=\"dashboard-layout-content-wrapper\">\n" +
    "			<!-- opalexe logo -->\n" +
    "			<div class=\"dashboard-layout-content-cell\">\n" +
    "				<img class=\"opalexe-welcome-image\" src=\"resources/images/logos/opalexe.png\" />\n" +
    "			</div>\n" +
    "			<!-- create buttons list -->\n" +
    "			<div class=\"dashboard-layout-content-cell\">\n" +
    "				<div class=\"title\">{{ 'op.app.dashboard.create' | i18n}}</div>\n" +
    "				<div class=\"dashboard-layout-btn\" ng-click=\"dashboard.createExpertise();\">\n" +
    "					<i class=\"opx-icon-justice\"></i>\n" +
    "					<p class=\"dashboard-layou-btn-text\">{{ 'op.app.dashboard.createExpertise' | i18n}}</p>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<!-- current expertises list -->\n" +
    "			<div class=\"dashboard-layout-content-cell\">\n" +
    "				<div class=\"title\">{{ 'op.app.dashboard.myExpertises' | i18n}} <span class=\"count\">{{dashboard.expertises.length}}<span ng-show=\"dashboard.hasMore\">+</span></span>\n" +
    "					<span class=\"l-dashboard dashboard-refresh-icon\">\n" +
    "						<i class=\"oo-icon icon-refresh\" ng-click=\"dashboard.reloadExpertises()\"></i>\n" +
    "					</span>\n" +
    "				</div>\n" +
    "				<!-- Empty expertise list -->\n" +
    "				<div class=\"l-overlist-small l-dashboard-list-empty\" ng-hide=\"dashboard.expertises.length\">\n" +
    "					<div class=\"overlist-content\">\n" +
    "						<div>\n" +
    "							<p>{{ 'op.expertises.empty' | i18n }}</p>\n" +
    "							<i class=\"opx-icon-justice\"></i>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<footer class=\"overlist-footer\">\n" +
    "						<div class=\"overlist-footer-icon\">\n" +
    "							<i class=\"opx-icon-justice\"></i>\n" +
    "						</div>\n" +
    "\n" +
    "						<div class=\"overlist-footer-action\">\n" +
    "							<button class=\"oo-form-button op-btn-white\" ng-click=\"openWorkspace('Workspace', 'expertises')\">{{'op.app.dashboard.allExpertises' | i18n}}</button>\n" +
    "						</div>\n" +
    "					</footer>\n" +
    "				</div>\n" +
    "\n" +
    "				<!-- Non-empty expertise list -->\n" +
    "				<div class=\"overlist l-overlist-small expertise-list\" ng-show=\"dashboard.expertises.length\">\n" +
    "					<ul class=\"overlist-content ootlist\" scrollbar=\"{ axis: 'y', wheel: true }\" op-scrollbar=\"dashboard.expertises\">\n" +
    "						<li class=\"ootitem\" ng-repeat=\"expertise in dashboard.expertises\"\n" +
    "							ng-click=\"dashboard.openExpertiseDetails(expertise.id)\"\n" +
    "							>\n" +
    "							<div class=\"ootitem-title\">\n" +
    "								<span ng-show=\"expertise.highlighted\" class=\"l-dashboard dashboard-expertise-highlight\">!</span>\n" +
    "								<i ng-show=\"!expertise.highlighted\" class=\"opx-icon-justice\"></i>\n" +
    "								<span>{{expertise.name}}</span>\n" +
    "							</div>\n" +
    "							<div class=\"ootitem-line\">\n" +
    "								<div class=\"ootitem-line-cell\" ng-class=\"{'ootitem-line-cell-hidden': !expertise.magistrateFullName}\">\n" +
    "									<i class=\"opx-icon-user-judge\"></i> {{expertise.magistrateFullName}}\n" +
    "								</div>\n" +
    "								<div class=\"ootitem-line-cell\">\n" +
    "									<i class=\"opx-icon opx-icon-euro-circle-reverse\"></i>\n" +
    "									<span ng-hide=\"expertise.taxationDate\">{{ 'op.expertises.waitingTax' | i18n }}</span>\n" +
    "									<span ng-show=\"expertise.taxationDate\">{{ expertise.taxationDate | date: 'fullDate' }}</span>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</li>\n" +
    "					</ul>\n" +
    "					<footer class=\"overlist-footer\">\n" +
    "						<div class=\"overlist-footer-icon\">\n" +
    "							<i class=\"opx-icon-justice\"></i>\n" +
    "						</div>\n" +
    "						<div class=\"overlist-footer-action\">\n" +
    "							<button class=\"oo-form-button op-btn-white\" ng-click=\"openWorkspace('Workspace', 'expertises')\">{{'op.app.dashboard.allExpertises' | i18n}}</button>\n" +
    "						</div>\n" +
    "					</footer>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<!-- current designations list -->\n" +
    "			<div class=\"dashboard-layout-content-cell\">\n" +
    "				<div class=\"title\">{{ 'op.app.dashboard.confirmDesignations' | i18n }} <span class=\"count\">{{dashboard.designations.length}}</span></div>\n" +
    "\n" +
    "				<div class=\"l-overlist-small l-dashboard-list-empty\" ng-hide=\"dashboard.designations.length\">\n" +
    "					<div class=\"overlist-content\">\n" +
    "						<div>\n" +
    "							<p>{{ 'op.designations.empty' | i18n }}</p>\n" +
    "							<i class=\"opx-icon-prize\"></i>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<footer class=\"overlist-footer\">\n" +
    "						<div class=\"overlist-footer-icon\">\n" +
    "							<i class=\"opx-icon-prize\"></i>\n" +
    "						</div>\n" +
    "\n" +
    "						<div class=\"overlist-footer-action\">\n" +
    "							<button class=\"oo-form-button op-btn-white\" rel=\"open-notifications-workspace\" ng-click=\"openWorkspace('Workspace', 'designations')\">{{'op.app.dashboard.allDesignations' | i18n}}</button>\n" +
    "						</div>\n" +
    "					</footer>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"overlist l-overlist-small designation\" rel=\"expert-designations-list\" ng-show=\"dashboard.designations.length\">\n" +
    "					<ul class=\"overlist-content ootlist\" scrollbar=\"{ axis: 'y', wheel: true }\" op-scrollbar=\"dashboard.designations\">\n" +
    "						<li class=\"ootitem\" ng-repeat=\"designation in dashboard.designations\" ng-click=\"dashboard.openDesignationDetails(designation.id)\">\n" +
    "							<div class=\"ootitem-title\">\n" +
    "								<i class=\"opx-icon-prize\"></i>\n" +
    "								{{designation.designatorFullName}} ({{ 'op.' + designation.designatorRole.toLowerCase() | i18n }})\n" +
    "							</div>\n" +
    "							<div class=\"ootitem-line\">\n" +
    "								<div class=\"ootitem-line-cell\">\n" +
    "									<i class=\"oo-icon icon-sharing-file\"></i> <ng-pluralize count=\"designation.itemCount\" when=\"{'0': 'Aucun document', 'one': '1 document', 'other': '{} documents'}\"></ng-pluralize>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</li>\n" +
    "					</ul>\n" +
    "					<footer class=\"overlist-footer\">\n" +
    "						<div class=\"overlist-footer-icon\">\n" +
    "							<i class=\"opx-icon-prize\"></i>\n" +
    "						</div>\n" +
    "\n" +
    "						<div class=\"overlist-footer-action\">\n" +
    "							<button class=\"oo-form-button op-btn-white\" rel=\"open-notifications-workspace\" ng-click=\"openWorkspace('Workspace', 'designations')\">{{'op.app.dashboard.allDesignations' | i18n}}</button>\n" +
    "						</div>\n" +
    "					</footer>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<footer class=\"dashboard-layout-footer\">\n" +
    "		<div class=\"dashboard-layout-footer-powerby\">\n" +
    "			<div class=\"l-dashboard-image-wrapper\">\n" +
    "				<div class=\"avenger-image\"></div>\n" +
    "				<div class=\"oo-db-poweredby\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"actionbar\">\n" +
    "			<div class=\"actionbar-btn actionbtn\" ng-click=\"dashboard.openExpertsDirectory()\" rel=\"open-experts-directory\">\n" +
    "				<div class=\"actionbtn-arrow\"></div>\n" +
    "				<div class=\"oo-icon icon-meeting actionbtn-icon\"></div>\n" +
    "				<p class=\"actionbtn-label\">{{ 'op.app.dashboard.contacts' | i18n }}</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"nav-bar\"></div>\n" +
    "	</footer>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"oui-fullsize l-dashboard-expertise\" ng-controller=\"DashboardCtrl as dashboard\" oo-role-security=\"LAWYER SAPITOR PARTYMEMBER\">\n" +
    "	<div class=\"version\">{{$root.ooConfig.version}}</div>\n" +
    "	<header class=\"dashboard-layout-header\">\n" +
    "		<div class=\"oot-usermenu\">\n" +
    "			<span class=\"oot-usermenu-name\" ng-click=\"dashboard.viewPersonalInfo();\">{{dashboard.fullName}}</span>\n" +
    "			<i class=\"oo-icon icon-user-circle\" ng-click=\"dashboard.viewPersonalInfo();\"></i>\n" +
    "			<i class=\"oo-icon icon-logout dashboard-power-button\" ng-click=\"dashboard.logout()\" ng-show=\"dashboard.canLogout()\"></i>\n" +
    "		</div>\n" +
    "	</header>\n" +
    "	<div class=\"dashboard-layout-content\">\n" +
    "		<div class=\"dashboard-layout-content-title\">\n" +
    "			<div oo-role-security=\"LAWYER\" ng-bind-html=\"('op.app.dashboard.title' | i18n | escapeHtml:false:true) + ('op.lawyer' | i18n | escapeHtml:false:true)\"></div>\n" +
    "			<div oo-role-security=\"SAPITOR\" ng-bind-html=\"('op.app.dashboard.title' | i18n | escapeHtml:false:true) + ('op.sapitor' | i18n | escapeHtml:false:true)\"></div>\n" +
    "			<div oo-role-security=\"PARTYMEMBER\" ng-bind-html=\"('op.app.dashboard.title' | i18n | escapeHtml:false:true) + ('op.party' | i18n | escapeHtml:false:true)\"></div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"dashboard-layout-content-wrapper\">\n" +
    "			<div class=\"l-dashboard-expertise-icon\">\n" +
    "				<i class=\"opx-icon-justice\"></i>\n" +
    "			</div>\n" +
    "			<button oo-role-security=\"SAPITOR PARTYMEMBER\" class=\"oo-form-button op-btn-purple\" ng-click=\"dashboard.expertiseAction()\">{{ 'op.app.dashboard.openExpertise' | i18n }}</button>\n" +
    "			<button oo-role-security=\"LAWYER\" class=\"oo-form-button op-btn-purple\" ng-click=\"dashboard.expertiseAction()\">{{ 'op.app.dashboard.openExpertiseList' | i18n }}</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<footer class=\"dashboard-layout-footer\">\n" +
    "		<div class=\"dashboard-layout-footer-powerby\">\n" +
    "			<div class=\"l-dashboard-image-wrapper\">\n" +
    "				<div class=\"avenger-image\"></div>\n" +
    "				<div class=\"oo-db-poweredby\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</footer>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/expertise-details/administration/add-lawyer-to-parties/add-lawyer-to-parties.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/expertise-details/administration/add-lawyer-to-parties/add-lawyer-to-parties.tpl.html",
    "<div class=\"l-add-lawyer-to-parties\" ng-controller=\"AddLawyerToPartiesCtrl as addLawyerToParties\">\n" +
    "	<header class=\"l-add-lawyer-to-parties-title\">\n" +
    "		{{ 'op.app.expertiseDetails.administration.addLawyerToParties.title' | i18n }}\n" +
    "	</header>\n" +
    "\n" +
    "	<div class=\"l-add-lawyer-to-parties-body\">\n" +
    "		<div class=\"l-add-lawyer-to-parties-text\">{{ 'op.app.expertiseDetails.administration.addLawyerToParties.text' | i18n }}</div>\n" +
    "\n" +
    "		<div class=\"l-add-lawyer-to-parties-list\">\n" +
    "			<!-- <div class=\"oo-form-field-container oo-checkbox-multiple {{addLawyerToParties.parties.length>0?'oo-checkbox-multiple-scroll':''}}\" -->\n" +
    "			<div class=\"oo-form-field-container oo-checkbox-multiple\"\n" +
    "				 scrollbar=\"{ axis: 'y', wheel: true }\" op-scrollbar=\"addLawyerToParties.parties\"\n" +
    "				>\n" +
    "				<div ng-if=\"!addLawyerToParties.parties || addLawyerToParties.parties.length==0\" class=\"oo-checkbox-multiple-empty\">\n" +
    "					<div class=\"oo-checkbox-multiple-icon\">\n" +
    "						<i class=\"opx-icon-expert\"></i>\n" +
    "					</div>\n" +
    "					{{ 'op.app.expertiseDetails.administration.addLawyerToParties.partiesEmpty' | i18n }}\n" +
    "				</div>\n" +
    "				<div class=\"oo-checkbox-multiple-list form-checkbox-container\"\n" +
    "					 ng-repeat=\"party in addLawyerToParties.parties\"\n" +
    "					 ng-class=\"{'oo-checkbox-selected' : party.selected}\">\n" +
    "					<input id=\"party-{{$index}}\" ng-model=\"party.selected\" type=\"checkbox\"/>\n" +
    "					<label for=\"party-{{$index}}\">{{ party.name }}</label>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "\n" +
    "	<footer class=\"oo-close-action\">\n" +
    "		<button class=\"oo-form-button op-btn-purple\"\n" +
    "				ng-click=\"addLawyerToParties.submit()\"\n" +
    "				ng-disabled=\"!addLawyerToParties.selectedParties().length\">{{ 'common.add' | i18n }}</button>\n" +
    "		<button class=\"oo-form-button op-btn-darkgray\" ng-click=\"closeModal(false)\">{{ 'common.cancel' | i18n }}</button>\n" +
    "	</footer>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/expertise-details/administration/add-party-member/add-party-member.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/expertise-details/administration/add-party-member/add-party-member.tpl.html",
    "<div class=\"l-add-party-member\" ng-controller=\"AddPartyMemberCtrl as addPartyMember\">\n" +
    "	<header class=\"l-add-party-member-title\">\n" +
    "		{{ 'op.app.expertiseDetails.administration.addPartyMember.title' | i18n }}\n" +
    "	</header>\n" +
    "\n" +
    "	<div class=\"l-add-party-member-body\">\n" +
    "		{{ 'op.app.expertiseDetails.administration.addPartyMember.text' | i18n }}\n" +
    "	</div>\n" +
    "\n" +
    "	<footer class=\"oo-close-action\">\n" +
    "		<button class=\"oo-form-button op-btn-purple\" ng-click=\"addPartyMember.submit()\">{{'op.app.expertiseDetails.administration.addPartyMember.present' | i18n}}</button>\n" +
    "		<button class=\"oo-form-button op-btn-darkgray\" ng-click=\"closeModal()\">{{'common.no' | i18n}}</button>\n" +
    "	</footer>\n" +
    "</div>");
}]);

angular.module("app/expertise-details/administration/add-sapitor/add-sapitor.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/expertise-details/administration/add-sapitor/add-sapitor.tpl.html",
    "<div class=\"l-add-sapitor\" ng-controller=\"AddSapitorCtrl as addSapitorCtrl\">\n" +
    "	<header class=\"l-add-sapitor-title\">\n" +
    "		{{ 'op.app.expertiseDetails.administration.addSapiteur.title' | i18n }}\n" +
    "	</header>\n" +
    "\n" +
    "	<div class=\"l-add-sapitor-body\">\n" +
    "		{{ 'op.app.expertiseDetails.administration.addSapiteur.text' | i18n }}\n" +
    "	</div>\n" +
    "\n" +
    "	<footer class=\"oo-close-action\">\n" +
    "		<button class=\"oo-form-button op-btn-purple\" ng-click=\"addSapitorCtrl.submit()\">{{'common.yes' | i18n}}</button>\n" +
    "		<button class=\"oo-form-button op-btn-darkgray\" ng-click=\"closeModal()\">{{'common.no' | i18n}}</button>\n" +
    "	</footer>\n" +
    "</div>");
}]);

angular.module("app/expertise-details/administration/administration.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/expertise-details/administration/administration.tpl.html",
    "<div class=\"sidepanel-layout-content sidepanel-no-footer sidepanel-dark\" ng-controller=\"AdministrationCtrl as administrationCtrl\">\n" +
    "	<div class=\"sidepanel-layout-header\">\n" +
    "		<div class=\"sidepanel-layout-header-title\">{{ administrationCtrl.currentExpertise.name }}</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"sidepanel-layout-content-inner l-admin\">\n" +
    "\n" +
    "		<!-- Top bar -->\n" +
    "		<div class=\"l-admin-top\">\n" +
    "			<span class=\"l-admin-top-status\">{{ 'op.administration.status' | i18n }}</span>\n" +
    "			<div oui-dropdown-status oui-config=\"administrationCtrl.dds.cfg\" oui-change=\"administrationCtrl.dds.change(status)\" ng-readonly=\"false\" ng-model=\"administrationCtrl.selectedStatus\" class=\"l-admin-dds\"></div>\n" +
    "		</div>\n" +
    "\n" +
    "		<!-- Content -->\n" +
    "		<div class=\"l-admin-content\">\n" +
    "\n" +
    "			<!-- Expertise Name -->\n" +
    "			<div class=\"oot-table-list l-admin-outer-row\">\n" +
    "				<div class=\"oot-table-list-row\">\n" +
    "\n" +
    "					<div class=\"oot-table-list-column l-admin-info-col\">\n" +
    "						<div class=\"oot-table-list-row l-admin-content-title\">\n" +
    "							{{ 'op.administration.name' | i18n }}\n" +
    "						</div>\n" +
    "						<div class=\"oot-table-list-row\">\n" +
    "							<div class=\"l-admin-content-body\">\n" +
    "								<span ng-show=\"administrationCtrl.currentExpertise.highlighted\" class=\"l-admin admin-expertise-highlight\">!</span>\n" +
    "								<i ng-show=\"!administrationCtrl.currentExpertise.highlighted\" class=\"opx-icon-justice\"></i>\n" +
    "								<span>{{ administrationCtrl.currentExpertise.name }}</span>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"oot-table-list-column l-admin-content-action-col\">\n" +
    "						<button ng-show=\"administrationCtrl.currentExpertise._links.name\"\n" +
    "							class=\"oo-form-button op-btn-gray\"\n" +
    "							ng-click=\"administrationCtrl.renameExpertise()\">{{ 'op.administration.modify' | i18n }}</button>\n" +
    "					</div>\n" +
    "\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "			<!-- Taxation Date -->\n" +
    "			<div class=\"oot-table-list l-admin-outer-row\">\n" +
    "				<div class=\"oot-table-list-row\">\n" +
    "\n" +
    "					<div class=\"oot-table-list-column l-admin-info-col\">\n" +
    "						<div class=\"oot-table-list-row l-admin-content-title\">\n" +
    "							{{ 'op.administration.taxation' | i18n }}\n" +
    "						</div>\n" +
    "						<div class=\"oot-table-list-row\">\n" +
    "							<div class=\"l-admin-content-body\">\n" +
    "								<i class=\"opx-icon opx-icon-euro-circle-reverse\"></i>\n" +
    "								<span>{{ administrationCtrl.currentExpertise.taxationDate ? (administrationCtrl.currentExpertise.taxationDate | date) : ('op.expertises.waitingTax' | i18n) }}</span>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"oot-table-list-column l-admin-content-action-col\">\n" +
    "						<button ng-show=\"administrationCtrl.currentExpertise._links.taxationDate\"\n" +
    "							class=\"oo-form-button op-btn-gray\"\n" +
    "							ng-click=\"administrationCtrl.updateTaxationDate()\">{{ 'op.administration.modify' | i18n }}</button>\n" +
    "					</div>\n" +
    "\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "			<!-- Add Party Button -->\n" +
    "			<div class=\"oot-table-list l-admin-outer-row l-admin-last-row\">\n" +
    "				<div class=\"oot-table-list-row\">\n" +
    "\n" +
    "					<div class=\"oot-table-list-column l-admin-info-col\">\n" +
    "						<div class=\"oot-table-list-row l-admin-content-title\">\n" +
    "							{{ 'op.administration.participants' | i18n }}\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "			<!-- Actors tabs -->\n" +
    "			<tabs class=\"l-admin-tabs\">\n" +
    "\n" +
    "				<!-- Parties tab -->\n" +
    "				<tab-item class=\"tabItemTitle\" title-tab=\"op.parties.counselings\">\n" +
    "					<div class=\"l-admin-tab l-admin-tab-parties\">\n" +
    "						<button class=\"wizard-button wizard-button-collapsed\"\n" +
    "							ng-click=\"administrationCtrl.addParty()\"\n" +
    "							ng-show=\"administrationCtrl.currentExpertise._links.createParties\"\n" +
    "							>\n" +
    "							<i class=\"oo-icon icon-add-circle wizard-button-icon\"></i>\n" +
    "							{{ 'op.administration.addParty' | i18n }}\n" +
    "						</button>\n" +
    "						<ul class=\"oot-table-list oot-table-list-basic parties-list\">\n" +
    "							<li class=\"oot-table-list-row\"\n" +
    "							ng-repeat=\"party in administrationCtrl.partiesModel\"\n" +
    "							ng-include=\"'op-administration-party-list-elt'\"></li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "				</tab-item>\n" +
    "\n" +
    "				<!-- Sapitor tab -->\n" +
    "				<tab-item class=\"tabItemTitle\" title-tab=\"op.sapitors\">\n" +
    "					<div class=\"l-admin-tab\">\n" +
    "\n" +
    "						<button class=\"wizard-button wizard-button-collapsed\"\n" +
    "							ng-show=\"administrationCtrl.currentExpertise._links.createActors\"\n" +
    "							ng-click=\"administrationCtrl.addActor('SAPITOR')\"\n" +
    "						>\n" +
    "							<i class=\"oo-icon icon-add-circle wizard-button-icon\"></i>\n" +
    "							{{ 'op.administration.addSapitor' | i18n }}\n" +
    "						</button>\n" +
    "						<ul class=\"oot-table-list oot-table-list-basic\">\n" +
    "							<li class=\"oot-table-list-row\"\n" +
    "								ng-repeat=\"actor in administrationCtrl.actors.sapitors\"\n" +
    "								ng-class=\"{ suspended: actor.isSuspended }\"\n" +
    "							>\n" +
    "\n" +
    "								<div class=\"oot-table-list-column\">\n" +
    "									<i ng-show=\"!actor.isSuspended\" class=\"oo-icon icon-user user-badge-with-bg\"></i>\n" +
    "									<i ng-show=\"actor.isSuspended\" class=\"oo-icon icon-forbidden user-badge-with-bg\"></i>\n" +
    "									<span class=\"full-name\">{{actor.firstName}} {{actor.lastName}}</span>\n" +
    "								</div>\n" +
    "\n" +
    "								<div class=\"oot-table-list-column l-admin-email-col\">\n" +
    "									<i class=\"oo-icon icon-email\"></i>\n" +
    "									<span oui-tooltip-text=\"{{actor.email}}\">{{actor.email}}</span>\n" +
    "								</div>\n" +
    "\n" +
    "								<div class=\"oot-table-list-column l-admin-shrinked-col\">\n" +
    "									<i ng-show=\"actor.mobile || actor.phone\" class=\"oo-icon icon-{{actor.mobile ? 'device_smartphone2' : 'telephone'}}\"></i>\n" +
    "									<span>{{actor.mobile ? actor.mobile : actor.phone}}</span>\n" +
    "								</div>\n" +
    "\n" +
    "								<!-- Active/Inactive column -->\n" +
    "								<div class=\"oot-table-list-column l-admin-activate-col l-admin-shrinked-col\">\n" +
    "									<span class=\"l-admin-activate\" ng-class=\"{\n" +
    "										'l-admin-activated': actor.isActive,\n" +
    "										'l-admin-desactivated': !actor.isActive,\n" +
    "									}\" ng-mouseover=\"actor.activationMenu = true\">\n" +
    "										<span ng-if=\"actor.isActive\">{{ 'op.administration.active' | i18n }}</span>\n" +
    "										<span ng-if=\"!actor.isActive\">{{ 'op.administration.inactive' | i18n }}</span>\n" +
    "\n" +
    "										<!-- Active/Inactive dropdown -->\n" +
    "										<i class=\"oo-icon icon-nav-down\" ng-show=\"actor._links.activate\"></i>\n" +
    "										<ul class=\"l-admin-activate-list\" ng-show=\"actor.activationMenu && actor._links.activate\" ng-mouseleave=\"actor.activationMenu = false\">\n" +
    "											<li ng-click=\"administrationCtrl.setActive(actor, true)\">{{ 'op.administration.active' | i18n }}</li>\n" +
    "											<li ng-click=\"administrationCtrl.setActive(actor, false)\">{{ 'op.administration.inactive' | i18n }}</li>\n" +
    "										</ul>\n" +
    "									</span>\n" +
    "\n" +
    "									<i class=\"oo-icon icon-edit-circle l-admin-edit-action l-admin-edit-sapitor\"\n" +
    "										oui-tooltip-text=\"i18n:op.administration.party.edit\"\n" +
    "										ng-show=\"!actor.isExpert && actor._links.self\"\n" +
    "										ng-click=\"administrationCtrl.editSapitor(actor)\"></i>\n" +
    "								</div>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "				</tab-item>\n" +
    "\n" +
    "				<!-- Co-Expert tab -->\n" +
    "				<tab-item class=\"tabItemTitle\" title-tab=\"op.coexperts\">\n" +
    "					<div class=\"l-admin-tab\">\n" +
    "\n" +
    "						<button class=\"wizard-button wizard-button-collapsed\"\n" +
    "							ng-show=\"administrationCtrl.currentExpertise._links.createActors\"\n" +
    "							ng-click=\"administrationCtrl.addActor('COEXPERT')\"\n" +
    "						>\n" +
    "							<i class=\"oo-icon icon-add-circle wizard-button-icon\"></i>\n" +
    "							{{ 'op.administration.addCoExpert' | i18n }}\n" +
    "						</button>\n" +
    "						<ul class=\"oot-table-list oot-table-list-basic\">\n" +
    "							<li class=\"oot-table-list-row\"\n" +
    "								ng-repeat=\"actor in administrationCtrl.actors.coExperts\"\n" +
    "								ng-include=\"'op-administration-actor-list-elt'\"\n" +
    "								ng-class=\"{ suspended: actor.isSuspended }\"\n" +
    "							></li>\n" +
    "						</ul>\n" +
    "\n" +
    "					</div>\n" +
    "				</tab-item>\n" +
    "\n" +
    "				<!-- Clerks tab -->\n" +
    "				<tab-item class=\"tabItemTitle\" title-tab=\"op.clerks\">\n" +
    "					<div class=\"l-admin-tab\">\n" +
    "\n" +
    "						<button class=\"wizard-button wizard-button-collapsed\"\n" +
    "							ng-show=\"administrationCtrl.currentExpertise._links.createActors\"\n" +
    "							ng-click=\"administrationCtrl.addActor('CLERK')\"\n" +
    "						>\n" +
    "							<i class=\"oo-icon icon-add-circle wizard-button-icon\"></i>\n" +
    "							{{ 'op.administration.addClerk' | i18n }}\n" +
    "						</button>\n" +
    "						<ul class=\"oot-table-list oot-table-list-basic\">\n" +
    "							<li class=\"oot-table-list-row\"\n" +
    "								ng-repeat=\"actor in administrationCtrl.actors.clerks\"\n" +
    "								ng-include=\"'op-administration-actor-list-elt'\"\n" +
    "								ng-class=\"{ suspended: actor.isSuspended }\"\n" +
    "							></li>\n" +
    "						</ul>\n" +
    "\n" +
    "					</div>\n" +
    "				</tab-item>\n" +
    "\n" +
    "				<!-- Magistrates tab -->\n" +
    "				<tab-item class=\"tabItemTitle\" title-tab=\"op.magistrates\">\n" +
    "					<div class=\"l-admin-tab\">\n" +
    "\n" +
    "						<button class=\"wizard-button wizard-button-collapsed\"\n" +
    "							ng-show=\"administrationCtrl.currentExpertise._links.createActors\"\n" +
    "							ng-click=\"administrationCtrl.addActor('MAGISTRATE')\"\n" +
    "						>\n" +
    "							<i class=\"oo-icon icon-add-circle wizard-button-icon\"></i>\n" +
    "							{{ 'op.administration.addMagistrate' | i18n }}\n" +
    "						</button>\n" +
    "						<ul class=\"oot-table-list oot-table-list-basic\">\n" +
    "							<li class=\"oot-table-list-row\"\n" +
    "								ng-repeat=\"magistrate in administrationCtrl.actors.magistrates\"\n" +
    "								ng-class=\"{ suspended: magistrate.isSuspended }\"\n" +
    "							>\n" +
    "\n" +
    "								<div class=\"oot-table-list-column\">\n" +
    "									<i ng-show=\"!magistrate.isSuspended\" class=\"oo-icon icon-user user-badge-with-bg\"></i>\n" +
    "									<i ng-show=\"magistrate.isSuspended\" class=\"oo-icon icon-forbidden user-badge-with-bg\"></i>\n" +
    "									<span class=\"full-name\">{{magistrate.firstName}} {{magistrate.lastName}}</span>\n" +
    "\n" +
    "									<!-- A magistrate can be in charge of the expertise -->\n" +
    "									<i class=\"icon-clipboard-check l-admin-supervise l-admin-supervise-active\"\n" +
    "										ng-show=\"magistrate.supervise\"\n" +
    "										oui-tooltip-text=\"{{ 'op.administration.inCharge' | i18n }}\"></i>\n" +
    "\n" +
    "									<i class=\"icon-clipboard-check l-admin-supervise l-admin-supervise-inactive\"\n" +
    "										ng-if=\"magistrate._links.supervise\"\n" +
    "										ng-hide=\"magistrate.supervise\"\n" +
    "										ng-click=\"administrationCtrl.setSupervise(magistrate)\"\n" +
    "										oui-tooltip-text=\"{{ 'op.administration.supervise' | i18n }}\"></i>\n" +
    "								</div>\n" +
    "\n" +
    "								<div class=\"oot-table-list-column l-admin-email-col\">\n" +
    "									<i class=\"oo-icon icon-email\"></i>\n" +
    "									<span oui-tooltip-text=\"{{magistrate.email}}\">{{magistrate.email}}</span>\n" +
    "								</div>\n" +
    "\n" +
    "								<div class=\"oot-table-list-column l-admin-shrinked-col\">\n" +
    "									<i ng-show=\"magistrate.mobile || magistrate.phone\" class=\"oo-icon icon-{{magistrate.mobile ? 'device_smartphone2' : 'telephone'}}\"></i>\n" +
    "									<span>{{magistrate.mobile ? magistrate.mobile : magistrate.phone}}</span>\n" +
    "								</div>\n" +
    "\n" +
    "								<!-- Active/Inactive column -->\n" +
    "								<div class=\"oot-table-list-column l-admin-activate-col l-admin-shrinked-col\" ng-mouseleave=\"magistrate.activationMenu = false\">\n" +
    "									<span class=\"l-admin-activate\" ng-class=\"{\n" +
    "											'l-admin-activated': magistrate.isActive,\n" +
    "											'l-admin-desactivated': !magistrate.isActive,\n" +
    "										}\" ng-mouseover=\"magistrate.activationMenu = true\">\n" +
    "											<span ng-if=\"magistrate.isActive\">{{ 'op.administration.active' | i18n }}</span>\n" +
    "											<span ng-if=\"!magistrate.isActive\">{{ 'op.administration.inactive' | i18n }}</span>\n" +
    "\n" +
    "											<!-- Active/Inactive dropdown -->\n" +
    "											<i class=\"oo-icon icon-nav-down\" ng-show=\"magistrate._links.activate\"></i>\n" +
    "											<ul class=\"l-admin-activate-list\" ng-show=\"magistrate.activationMenu && magistrate._links.activate\">\n" +
    "												<li ng-click=\"administrationCtrl.setActive(magistrate, true)\">{{ 'op.administration.active' | i18n }}</li>\n" +
    "												<li ng-click=\"administrationCtrl.setActive(magistrate, false)\">{{ 'op.administration.inactive' | i18n }}</li>\n" +
    "											</ul>\n" +
    "									</span>\n" +
    "								</div>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "\n" +
    "					</div>\n" +
    "				</tab-item>\n" +
    "			</tabs>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<script type=\"text/ng-template\"	id=\"op-administration-actor-list-elt\">\n" +
    "	<div class=\"oot-table-list-column\">\n" +
    "		<i ng-show=\"!actor.isSuspended\" class=\"oo-icon icon-user user-badge-with-bg\"></i>\n" +
    "		<i ng-show=\"actor.isSuspended\" class=\"oo-icon icon-forbidden user-badge-with-bg\"></i>\n" +
    "		<span class=\"full-name\">{{actor.firstName}} {{actor.lastName}}</span>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"oot-table-list-column l-admin-email-col\">\n" +
    "		<i class=\"oo-icon icon-email\"></i>\n" +
    "		<span oui-tooltip-text=\"{{actor.email}}\">{{actor.email}}</span>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"oot-table-list-column l-admin-shrinked-col\">\n" +
    "		<i ng-show=\"actor.mobile || actor.phone\" class=\"oo-icon icon-{{actor.mobile ? 'device-smartphone' : 'phone-number'}}\"></i>\n" +
    "		<span>{{actor.mobile ? actor.mobile : actor.phone}}</span>\n" +
    "	</div>\n" +
    "\n" +
    "	<!-- Active/Inactive column -->\n" +
    "	<div class=\"oot-table-list-column l-admin-activate-col l-admin-shrinked-col\" ng-mouseleave=\"actor.activationMenu = false\">\n" +
    "		<span class=\"l-admin-activate\" ng-class=\"{\n" +
    "			'l-admin-activated': actor.isActive,\n" +
    "			'l-admin-desactivated': !actor.isActive,\n" +
    "		}\" ng-mouseover=\"actor.activationMenu = true\">\n" +
    "		<span ng-if=\"actor.isActive\">{{ 'op.administration.active' | i18n }}</span>\n" +
    "			<span ng-if=\"!actor.isActive\">{{ 'op.administration.inactive' | i18n }}</span>\n" +
    "\n" +
    "				<!-- Active/Inactive dropdown -->\n" +
    "				<i class=\"oo-icon icon-nav-down\" ng-show=\"actor._links.activate\"></i>\n" +
    "				<ul class=\"l-admin-activate-list\" ng-show=\"actor.activationMenu && actor._links.activate\">\n" +
    "					<li ng-click=\"administrationCtrl.setActive(actor, true)\">{{ 'op.administration.active' | i18n }}</li>\n" +
    "					<li ng-click=\"administrationCtrl.setActive(actor, false)\">{{ 'op.administration.inactive' | i18n }}</li>\n" +
    "				</ul>\n" +
    "		</span>\n" +
    "	</div>\n" +
    "</script>\n" +
    "\n" +
    "<script type=\"text/ng-template\"	id=\"op-administration-party-list-elt\">\n" +
    "	<div class=\"oot-table-list\">\n" +
    "		<div class=\"oot-table-list-row oot-table-list-row-party\">\n" +
    "			<div class=\"oot-table-list-column oot-table-list-column\">\n" +
    "				<i class=\"icon-colored opx-icon-group-lawer-circle\"></i>\n" +
    "				<span>{{party.name}}</span>\n" +
    "				<i class=\"oo-icon oo-icon-nav-down\"\n" +
    "				    ng-if=\"party.type!='NON_DEMATERIALIZED'\"\n" +
    "					ng-class=\"{'icon-nav-up': !administrationCtrl.partiesExpandModel[party.id], 'icon-nav-down': administrationCtrl.partiesExpandModel[party.id]}\"\n" +
    "					ng-click=\"administrationCtrl.expandOrCollapseParty(party.id)\"></i>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"oot-table-list-column l-admin-number-party-col\">\n" +
    "				<i class=\"oo-icon icon-user-circle\"></i>\n" +
    "				<span><ng-pluralize count=\"{{party._embedded.participants.length + party._embedded.lawyers.length}}\"\n" +
    "					when=\"{\n" +
    "						'0': '{{ administrationCtrl.dictionnaryUsers.none }}',\n" +
    "						'1': '1 {{ administrationCtrl.dictionnaryUsers.user }}',\n" +
    "						'other': '{{party._embedded.participants.length + party._embedded.lawyers.length}} {{ administrationCtrl.dictionnaryUsers.users }}' }\">\n" +
    "				</span>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"oot-table-list-column l-admin-represent-party-col\"\n" +
    "				 ng-class=\"{'non-dematerialized-warning': party.type==='NON_DEMATERIALIZED'}\">\n" +
    "				<i class=\"oo-icon icon-information-circle\"></i>\n" +
    "				<span>{{ administrationCtrl.getPartyTypeText(party.type) }}</span>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"oot-table-list-column l-admin-edit-party-col\">\n" +
    "				<i class=\"oo-icon icon-edit-circle l-admin-edit-action\"\n" +
    "					oui-tooltip-text=\"i18n:op.administration.party.edit\"\n" +
    "					ng-show=\"party._links.updateInfo\"\n" +
    "					ng-click=\"administrationCtrl.renameParty(party)\"></i>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"l-admin-list-party-content\"\n" +
    "		 ng-if=\"party.type!='NON_DEMATERIALIZED'\"\n" +
    "		 ng-show=\"!administrationCtrl.partiesExpandModel[party.id]\" >\n" +
    "		<div class=\"l-admin-list-party-content-buttons\">\n" +
    "			<button class=\"wizard-button wizard-button-collapsed ng-binding\"\n" +
    "				ng-click=\"administrationCtrl.addMemberToParty(party)\"\n" +
    "				ng-show=\"administrationCtrl.currentExpertise._links.createParties\"\n" +
    "				>\n" +
    "				<i class=\"oo-icon icon-add-circle wizard-button-icon\"></i>\n" +
    "				{{ 'op.administration.addPartyMember' | i18n }}\n" +
    "			</button>\n" +
    "			<button class=\"wizard-button wizard-button-collapsed ng-binding\"\n" +
    "				ng-click=\"administrationCtrl.addLawyerToParty(party)\"\n" +
    "				ng-show=\"administrationCtrl.currentExpertise._links.createParties\"\n" +
    "				>\n" +
    "				<i class=\"oo-icon icon-add-circle wizard-button-icon\"></i>\n" +
    "				{{ 'op.administration.addLawyer' | i18n }}\n" +
    "			</button>\n" +
    "		</div>\n" +
    "		</button>\n" +
    "		<ul class=\"oot-table-list oot-table-list-basic oot-table-list-party-content\">\n" +
    "			<li class=\"oot-table-list-row oot-table-list-row-party-content\"\n" +
    "				ng-repeat=\"member in party._embedded.participants\"\n" +
    "				ng-include=\"'op-administration-member-list-elt'\"\n" +
    "				ng-class=\"{ suspended: member.isSuspended }\"\n" +
    "			></li>\n" +
    "			<li class=\"oot-table-list-row oot-table-list-row-party-content\"\n" +
    "				ng-repeat=\"lawyer in party._embedded.lawyers\"\n" +
    "				ng-include=\"'op-administration-lawyer-list-elt'\"\n" +
    "				ng-class=\"{ suspended: lawyer._embedded.actor.isSuspended }\"\n" +
    "			></li>\n" +
    "		</ul>\n" +
    "	</div>\n" +
    "</script>\n" +
    "\n" +
    "<script type=\"text/ng-template\"	id=\"op-administration-member-list-elt\">\n" +
    "	<div class=\"oot-table-list-column\">\n" +
    "		<i ng-show=\"!member.isSuspended\" class=\"oo-icon icon-user-circle user-badge\"></i>\n" +
    "		<i ng-show=\"member.isSuspended\" class=\"oo-icon icon-forbidden user-badge\"></i>\n" +
    "		<span class=\"full-name\">{{member.firstName}} {{member.lastName}}</span>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"oot-table-list-column l-admin-email-col\">\n" +
    "		<i class=\"oo-icon icon-email\"></i>\n" +
    "		<span oui-tooltip-text=\"{{member.email}}\">{{member.email}}</span>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"oot-table-list-column l-admin-shrinked-col\">\n" +
    "		<i class=\"oo-icon icon-{{member.mobile ? 'device-smartphone' : 'phone-number'}}\" ng-show=\"member.mobile || member.phone\"></i>\n" +
    "		<span>{{member.mobile ? member.mobile : member.phone}}</span>\n" +
    "	</div>\n" +
    "\n" +
    "	<!-- Active/Inactive column -->\n" +
    "	<div class=\"oot-table-list-column l-admin-activate-col l-admin-shrinked-col\" ng-mouseleave=\"member.activationMenu = false\">\n" +
    "		<span class=\"l-admin-activate\" ng-class=\"{\n" +
    "			'l-admin-activated': member.isActive,\n" +
    "			'l-admin-desactivated': !member.isActive,\n" +
    "		}\" ng-mouseover=\"member.activationMenu = true\">\n" +
    "			<span ng-if=\"member.isActive\">{{ 'op.administration.active' | i18n }}</span>\n" +
    "			<span ng-if=\"!member.isActive\">{{ 'op.administration.inactive' | i18n }}</span>\n" +
    "\n" +
    "			<!-- Active/Inactive dropdown -->\n" +
    "			<i class=\"oo-icon icon-nav-down\" ng-show=\"member._links.activate\"></i>\n" +
    "			<ul class=\"l-admin-activate-list\" ng-show=\"member.activationMenu && member._links.activate\">\n" +
    "				<li ng-click=\"administrationCtrl.setActiveMember(member, true)\">{{ 'op.administration.active' | i18n }}</li>\n" +
    "				<li ng-click=\"administrationCtrl.setActiveMember(member, false)\">{{ 'op.administration.inactive' | i18n }}</li>\n" +
    "			</ul>\n" +
    "		</span>\n" +
    "	</div>\n" +
    "\n" +
    "	<!-- Edit member column -->\n" +
    "	<div class=\"oot-table-list-column l-admin-edit-member-col\">\n" +
    "		<i class=\"oo-icon icon-edit-circle l-admin-edit-action\"\n" +
    "			ng-show=\"member._links.updateInfo\"\n" +
    "			ng-click=\"administrationCtrl.editSpringBreaker(member)\"\n" +
    "			oui-tooltip-text=\"i18n:op.administration.party.edit\"></i>\n" +
    "	</div>\n" +
    "</script>\n" +
    "\n" +
    "<script type=\"text/ng-template\"	id=\"op-administration-lawyer-list-elt\">\n" +
    "	<div class=\"oot-table-list-column\">\n" +
    "		<i ng-show=\"!lawyer._embedded.actor.isSuspended\" class=\"opx-icon-user-lawyer-circle user-badge\"></i>\n" +
    "		<i ng-show=\"lawyer._embedded.actor.isSuspended\" class=\"oo-icon icon-forbidden user-badge\"></i>\n" +
    "		<span class=\"full-name\">{{lawyer._embedded.actor.firstName}} {{lawyer._embedded.actor.lastName}}</span>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"oot-table-list-column l-admin-email-col\">\n" +
    "		<i class=\"oo-icon icon-email\"></i>\n" +
    "		<span oui-tooltip-text=\"{{lawyer._embedded.actor.email}}\">{{lawyer._embedded.actor.email}}</span>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"oot-table-list-column l-admin-shrinked-col\">\n" +
    "		<i ng-show=\"lawyer._embedded.actor.mobile || lawyer._embedded.actor.phone\" class=\"oo-icon icon-{{lawyer._embedded.actor.mobile ? 'device-smartphone' : 'phone-number'}}\"></i>\n" +
    "		<span>{{lawyer._embedded.actor.mobile ? lawyer._embedded.actor.mobile : lawyer._embedded.actor.phone}}</span>\n" +
    "	</div>\n" +
    "\n" +
    "	<!-- Active/Inactive column -->\n" +
    "	<div class=\"oot-table-list-column l-admin-activate-col l-admin-shrinked-col\" ng-mouseleave=\"lawyer.activationMenu = false\">\n" +
    "		<span class=\"l-admin-activate\" ng-class=\"{\n" +
    "			'l-admin-activated': lawyer._embedded.actor.isActive,\n" +
    "			'l-admin-desactivated': !lawyer._embedded.actor.isActive,\n" +
    "		}\" ng-mouseover=\"lawyer.activationMenu = true\">\n" +
    "			<span ng-if=\"lawyer._embedded.actor.isActive\">{{ 'op.administration.active' | i18n }}</span>\n" +
    "			<span ng-if=\"!lawyer._embedded.actor.isActive\">{{ 'op.administration.inactive' | i18n }}</span>\n" +
    "\n" +
    "			<!-- Active/Inactive dropdown -->\n" +
    "			<i class=\"oo-icon icon-nav-down\" ng-show=\"lawyer._links.activate\"></i>\n" +
    "			<ul class=\"l-admin-activate-list\" ng-show=\"lawyer.activationMenu && lawyer._links.activate\">\n" +
    "				<li ng-click=\"administrationCtrl.setActiveLawyer(lawyer, true)\">{{ 'op.administration.active' | i18n }}</li>\n" +
    "				<li ng-click=\"administrationCtrl.setActiveLawyer(lawyer, false)\">{{ 'op.administration.inactive' | i18n }}</li>\n" +
    "			</ul>\n" +
    "		</span>\n" +
    "	</div>\n" +
    "\n" +
    "	<!-- Edit lawyer parties column -->\n" +
    "	<div class=\"oot-table-list-column l-admin-edit-member-col\">\n" +
    "		<i class=\"oo-icon icon-toc-circle l-admin-edit-action\"\n" +
    "			ng-show=\"lawyer._links.updateInfo\"\n" +
    "			ng-click=\"administrationCtrl.updatePartyForLawyer(lawyer)\"\n" +
    "		   	oui-tooltip-text=\"i18n:op.administration.party.edit.list\"></i>\n" +
    "	</div>\n" +
    "</script>\n" +
    "");
}]);

angular.module("app/expertise-details/administration/confirm-status/confirm-status.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/expertise-details/administration/confirm-status/confirm-status.tpl.html",
    "<div class=\"l-confirm-status\" ng-controller=\"ConfirmStatusCtrl as vm\">\n" +
    "	\n" +
    "	<div ng-show=\"vm.transition[0] === 'IN_PROGRESS' && vm.transition[1] === 'FINISHED'\">\n" +
    "		<header class=\"oo-basic-modal-title\">\n" +
    "			{{ 'op.administration.confirmStatus.titleFinished' | i18n }}\n" +
    "		</header>\n" +
    "\n" +
    "		<div class=\"l-confirm-status-body\">\n" +
    "			{{ 'op.administration.confirmStatus.commonBody1' | i18n }} \"{{ 'op.expertises.status.finished' | i18n }}\" {{ 'op.administration.confirmStatus.commonBody2' | i18n }}\n" +
    "			\n" +
    "			<ul>\n" +
    "				<li><b><i class=\"oo-icon icon-nav-next\"></i> {{ 'op.administration.confirmStatus.finished1' | i18n }}</li></b>\n" +
    "				<li><b><i class=\"oo-icon icon-nav-next\"></i> {{ 'op.administration.confirmStatus.finished2' | i18n }}</li></b>\n" +
    "			</ul>\n" +
    "		</div>	\n" +
    "	</div>\n" +
    "	\n" +
    "	<div  ng-show=\"(vm.transition[0] === 'COMPLETING' && vm.transition[1] === 'IN_PROGRESS') || (vm.transition[0] === 'TAXATION_COMPLEMENT' && vm.transition[1] === 'IN_PROGRESS')\">\n" +
    "		<header class=\"oo-basic-modal-title\">\n" +
    "			{{ 'op.administration.confirmStatus.titleInProgress' | i18n }}\n" +
    "		</header>\n" +
    "\n" +
    "		<div class=\"l-confirm-status-body\">\n" +
    "			{{ 'op.administration.confirmStatus.commonBody1' | i18n }} \"{{ 'op.expertises.status.inProgress' | i18n }}\" {{ 'op.administration.confirmStatus.commonBody2' | i18n }}\n" +
    "			\n" +
    "			<ul>\n" +
    "				<li><b><i class=\"oo-icon icon-nav-next\"></i> {{ 'op.administration.confirmStatus.inProgress1' | i18n }}</li></b>\n" +
    "				<li><b><i class=\"oo-icon icon-nav-next\"></i> {{ 'op.administration.confirmStatus.inProgress2' | i18n }}</li></b>\n" +
    "			</ul>\n" +
    "		</div>	\n" +
    "	</div>\n" +
    "\n" +
    "	<div ng-show=\"vm.transition[0] === 'IN_PROGRESS' && vm.transition[1] === 'TAXATION_COMPLEMENT'\">\n" +
    "		<header class=\"oo-basic-modal-title\">\n" +
    "			{{ 'op.administration.confirmStatus.titleTaxationComplement' | i18n }}\n" +
    "		</header>\n" +
    "\n" +
    "		<div class=\"l-confirm-status-body\">\n" +
    "			{{ 'op.administration.confirmStatus.commonBody1' | i18n }} \"{{ 'op.expertises.status.taxationComplement' | i18n }}\" {{ 'op.administration.confirmStatus.commonBody2' | i18n }}\n" +
    "			\n" +
    "			<ul>\n" +
    "				<li><b><i class=\"oo-icon icon-nav-next\"></i> {{ 'op.administration.confirmStatus.taxationComplement1' | i18n }}</li></b>\n" +
    "				<li><b><i class=\"oo-icon icon-nav-next\"></i> {{ 'op.administration.confirmStatus.taxationComplement2' | i18n }}</li></b>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<footer class=\"oo-close-action\">\n" +
    "		<button class=\"oo-form-button op-btn-purple\" ng-click=\"closeModal(true)\">{{'common.yes' | i18n}}</button>\n" +
    "		<button class=\"oo-form-button op-btn-darkgray\" ng-click=\"closeModal(false)\">{{'common.no' | i18n}}</button>\n" +
    "	</footer>\n" +
    "</div>");
}]);

angular.module("app/expertise-details/administration/create-party/create-party.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/expertise-details/administration/create-party/create-party.tpl.html",
    "<div class=\"l-create-party\" ng-controller=\"CreatePartyCtrl as createPartyCtrl\">\n" +
    "	<header class=\"l-create-party-title\">\n" +
    "		<div ng-hide=\"currentParty\">{{ 'op.app.expertiseDetails.administration.createParty.update.title' | i18n }}</div>\n" +
    "		<div ng-show=\"currentParty\">{{ 'op.app.expertiseDetails.administration.createParty.create.title' | i18n }}</div>\n" +
    "	</header>\n" +
    "\n" +
    "\n" +
    "	<div ng-form=\"createPartyCtrl.formCtrl\" class=\"l-create-party-body\">\n" +
    "		<i class=\"oo-icon icon-alert-circle-reverse icon-colored icon-colored-input-field\" oui-tooltip-text=\"i18n:oui.tooltip.error.itemNameValidation\" ng-show=\"createPartyCtrl.formCtrl.partyName.$invalid\"></i>\n" +
    "		<input type=\"text\"\n" +
    "			id=\"createParty-name\"\n" +
    "			class=\"l-create-party-input\"\n" +
    "			name = \"partyName\"\n" +
    "			ng-model=\"createPartyCtrl.name\"\n" +
    "			ng-required=\"true\"\n" +
    "			ng-maxlength=\"256\"\n" +
    "			ng-model-options=\"{ debounce : { 'default' : 400 } }\"\n" +
    "			placeholder=\"{{ 'op.app.expertiseDetails.administration.createParty.name' | i18n }}\"\n" +
    "			item-name-validation\n" +
    "			/>\n" +
    "		<div ng-if=\"!label\" class=\"oo-form-field-label oo-label-visuallyhidden-with-placeholder ng-scope\">\n" +
    "			<div class=\"oo-form-field-label-inner\">\n" +
    "				<label for=\"createParty-name\"></label>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"op-selection-party\">\n" +
    "			<input\n" +
    "				id=\"createParty-type\"\n" +
    "				placeholder=\"{{ 'op.app.expertiseDetails.administration.createParty.title' | i18n }}\" readonly\n" +
    "				ng-model=\"createPartyCtrl.partyType.text\"\n" +
    "				ng-required=\"true\"\n" +
    "				ng-click=\"createPartyCtrl.partiesOpened = !createPartyCtrl.partiesOpened\"/>\n" +
    "			<div ng-if=\"!label\" class=\"oo-form-field-label oo-label-visuallyhidden-with-placeholder ng-scope\">\n" +
    "				<div class=\"oo-form-field-label-inner\">\n" +
    "					<label for=\"createParty-type\"></label>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<span class=\"op-selection-party-title oo-icon icon-nav-down\"></span>\n" +
    "			<ul class=\"op-selection-party-list\" ng-class=\"createPartyCtrl.partiesOpened ? 'op-selection-party-opened' : ''\" ng-mouseleave=\"createPartyCtrl.partiesOpened = false\">\n" +
    "				<li ng-click=\"createPartyCtrl.setPartyType($event)\" data-party-type=\"LAWYER\">{{ 'op.app.expertiseDetails.administration.createParty.lawyerRepresent' | i18n }}</li>\n" +
    "				<li ng-click=\"createPartyCtrl.setPartyType($event)\" data-party-type=\"MEMBER\">{{ 'op.app.expertiseDetails.administration.createParty.lawyerNotRepresent' | i18n }}</li>\n" +
    "				<li ng-click=\"createPartyCtrl.setPartyType($event)\" data-party-type=\"EXPERT\">{{ 'op.app.expertiseDetails.administration.createParty.coExpert' | i18n }}</li>\n" +
    "				<li ng-click=\"createPartyCtrl.setPartyType($event)\" data-party-type=\"NON_DEMATERIALIZED\">{{ 'op.app.expertiseDetails.administration.createParty.nonDematerialized' | i18n }}</li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "\n" +
    "	<footer class=\"oo-close-action\">\n" +
    "		<button class=\"oo-form-button op-btn-purple\" ng-click=\"createPartyCtrl.submit()\" ng-disabled=\"!createPartyCtrl.formCtrl.$valid\">{{'common.submit' | i18n}}</button>\n" +
    "		<button class=\"oo-form-button op-btn-darkgray\" ng-click=\"closeModal()\">{{'common.cancel' | i18n}}</button>\n" +
    "	</footer>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/expertise-details/administration/update-taxation/update-taxation.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/expertise-details/administration/update-taxation/update-taxation.tpl.html",
    "<div class=\"l-simple-form-modal l-simple-form-modal-taxation\" ng-controller=\"UpdateTaxationCtrl as updateTaxationCtrl\">\n" +
    "	<header class=\"l-simple-form-modal-title\">\n" +
    "		{{ 'op.app.updateExpertise.taxationDate.title' | i18n }}\n" +
    "	</header>\n" +
    "\n" +
    "	<div ng-form=\"updateTaxationCtrl.formCtrl\" class=\"l-simple-form-modal-date l-update-expertise-taxation-date\">\n" +
    "		<i class=\"oo-icon icon-calendar l-simple-form-modal-taxation-icon\"></i>\n" +
    "		<div oui-datepicker\n" +
    "			 name = \"nameTaxationate\"\n" +
    "			 ng-model=\"updateTaxationCtrl.taxationDate\"\n" +
    "			 ng-required=\"true\"\n" +
    "			 ng-readonly=\"false\"\n" +
    "			 has-warning=\"true\"\n" +
    "			 boundaries-valid=\"true\"\n" +
    "			 date-format=\"longDate\"></div>\n" +
    "	</div>\n" +
    "\n" +
    "	<footer class=\"oo-close-action\">\n" +
    "		<button class=\"oo-form-button op-btn-purple sidepanel-layout-footer-action\" ng-click=\"updateTaxationCtrl.submit()\" ng-disabled=\"!updateTaxationCtrl.formCtrl.$valid\">{{'common.submit' | i18n}}</button>\n" +
    "		<button class=\"oo-form-button op-btn-darkgray sidepanel-layout-footer-action\" ng-click=\"closeModal()\">{{'common.cancel' | i18n}}</button>\n" +
    "	</footer>\n" +
    "</div>");
}]);

angular.module("app/expertise-details/contradictory/contradictory-details/actor_row.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/expertise-details/contradictory/contradictory-details/actor_row.tpl.html",
    "<!-- padding column -->\n" +
    "<div class=\"oot-table-list-column padding-column\"></div>\n" +
    "\n" +
    "<!-- Icon column -->\n" +
    "<div class=\"oot-table-list-column icon-column\">\n" +
    "	<i class=\"oo-icon icon-user-circle\"></i>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Name column -->\n" +
    "<div class=\"oot-table-list-column name-column\">{{ participant.fullName }}</div>\n" +
    "\n" +
    "<!-- hasSeen column -->\n" +
    "<div class=\"oot-table-list-column has-seen-column\">\n" +
    "	<div class=\"col-wrapper\" ng-show=\"participant.hasSeen\">\n" +
    "		<i class=\"oo-icon icon-view\"></i><span>{{ participant.seenDate | dateTimeFormat }}</span>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/expertise-details/contradictory/contradictory-details/contradictory-details.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/expertise-details/contradictory/contradictory-details/contradictory-details.tpl.html",
    "<div oui-sidepanel max-width=\"50em\">\n" +
    "	<div oui-sidepanel-page tpl=\"app/expertise-details/contradictory/contradictory-details/contradictory-details_main.tpl.html\" dom-conserve></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/expertise-details/contradictory/contradictory-details/contradictory-details_main.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/expertise-details/contradictory/contradictory-details/contradictory-details_main.tpl.html",
    "<div class=\"sidepanel-layout-content sidepanel-dark sidepanel-no-footer l-contradictory-details\" ng-controller=\"ContradictoryDetailsCtrl as vm\">\n" +
    "	<header class=\"sidepanel-layout-header\">\n" +
    "		<div class=\"sidepanel-layout-header-title\">{{ vm.title }}</div>\n" +
    "	</header>\n" +
    "\n" +
    "	<div class=\"sidepanel-layout-content-inner\">\n" +
    "		<div class=\"banner\">\n" +
    "			<div class=\"banner-cell\">\n" +
    "				<i class=\"oo-icon icon-view\"></i>\n" +
    "				<span>{{ vm.banner }}</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"l-contradictory-details-wrapper\">\n" +
    "			<op-collapse\n" +
    "				op-collapse-header=\"{{ 'op.document' | i18n }}\"\n" +
    "				ng-show=\"vm.item\"\n" +
    "			>\n" +
    "				<ul class=\"oot-table-list oot-table-list-basic document-list\" ng-show=\"vm.item\">\n" +
    "					<li class=\"oot-table-list-row\">\n" +
    "						<div class=\"oot-table-list-column column-filename\"\n" +
    "							ng-style=\"{'background':'url({{vm.getIcon(vm.item.fileName)}}) no-repeat 0 center white'}\">\n" +
    "							<span class=\"l-contradictory-item-name\">{{ vm.item.fileName }}</span>\n" +
    "						</div>\n" +
    "\n" +
    "						<div class=\"oot-table-list-column column-date\">\n" +
    "							<div class=\"col-wrapper\">\n" +
    "								<i class=\"oo-icon icon-download-circle-reverse\"></i><span>{{ vm.item.uploadedDate | dateTimeFormat }}</span>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</li>\n" +
    "				</ul>\n" +
    "			</op-collapse>\n" +
    "\n" +
    "			<op-collapse\n" +
    "				ng-repeat=\"participant in vm.mccos\"\n" +
    "				op-collapse-header=\"{{ 'op.' + participant.name | i18n }}\"\n" +
    "				ng-show=\"participant.list && participant.list.length\"\n" +
    "			>\n" +
    "				<ul class=\"oot-table-list oot-table-list-basic l-contradictory-details-list\">\n" +
    "					<li class=\"oot-table-list-row\"\n" +
    "						ng-repeat=\"participant in participant.list\"\n" +
    "						ng-include=\"'app/expertise-details/contradictory/contradictory-details/actor_row.tpl.html'\"\n" +
    "					>\n" +
    "				</ul>\n" +
    "			</op-collapse>\n" +
    "\n" +
    "			<op-collapse\n" +
    "				op-collapse-header=\"{{ 'op.lawyers' | i18n }}\"\n" +
    "				ng-show=\"vm.item._embedded.lawyers && vm.item._embedded.lawyers.length\"\n" +
    "			>\n" +
    "				<ul class=\"oot-table-list oot-table-list-basic l-contradictory-details-list l-contradictory-details-list-lawyer\">\n" +
    "\n" +
    "					<li class=\"oot-table-list-row\"\n" +
    "						ng-repeat=\"lawyer in vm.item._embedded.lawyers\"\n" +
    "					>\n" +
    "\n" +
    "						<!-- padding column -->\n" +
    "						<div class=\"oot-table-list-column padding-column\"></div>\n" +
    "\n" +
    "						<!-- Icon column -->\n" +
    "						<div class=\"oot-table-list-column icon-column\">\n" +
    "							<i class=\"opx-icon-user-lawyer-circle\"></i>\n" +
    "						</div>\n" +
    "\n" +
    "						<!-- Name column -->\n" +
    "						<div class=\"oot-table-list-column name-column\"\n" +
    "							ng-style=\"\"\n" +
    "						>\n" +
    "							<!-- Has Seen flag for lawyers -->\n" +
    "							<div class=\"l-contradictory-details-list-lawyer-seen\" ng-show=\"lawyer.hasSeen\">\n" +
    "								<i class=\"oo-icon icon-view\"></i><span>{{ lawyer.seenDate | dateTimeFormat }}</span>\n" +
    "							</div>\n" +
    "\n" +
    "							{{ lawyer.fullName }}<br ng-show=\"lawyer.parties.length\">\n" +
    "							<i class=\"opx-icon-group-lawer-circle\" ng-show=\"lawyer.parties.length\"></i>\n" +
    "							<div ng-show=\"lawyer.parties.length\" class=\"l-contradictory-details-list-lawyer-parties\"><span ng-repeat=\"party in lawyer.parties\">{{ party }}&nbsp;</span></div>\n" +
    "						</div>\n" +
    "\n" +
    "					</li>\n" +
    "				</ul>\n" +
    "			</op-collapse>\n" +
    "\n" +
    "			<op-collapse\n" +
    "				op-collapse-header=\"{{ 'op.parties' | i18n }}\"\n" +
    "				ng-show=\"vm.item._embedded.parties && vm.item._embedded.parties.length\"\n" +
    "			>\n" +
    "				<div ng-repeat=\"party in vm.item._embedded.parties\" ng-show=\"party.participants.length\">\n" +
    "					<ul class=\"oot-table-list oot-table-list-basic l-contradictory-details-list l-contradictory-details-parties\">\n" +
    "\n" +
    "						<li class=\"oot-table-list-row\">\n" +
    "\n" +
    "							<!-- padding column -->\n" +
    "							<div class=\"oot-table-list-column padding-column\"></div>\n" +
    "\n" +
    "							<!-- Icon column -->\n" +
    "							<div class=\"oot-table-list-column icon-column\">\n" +
    "								<i class=\"opx-icon-group-lawer-circle\"></i>\n" +
    "							</div>\n" +
    "\n" +
    "							<!-- Name column -->\n" +
    "							<div class=\"oot-table-list-column name-column\"\n" +
    "							>{{ party.partyName }}</div>\n" +
    "\n" +
    "							<!-- hasSeen column -->\n" +
    "							<div class=\"oot-table-list-column has-seen-column\">\n" +
    "								<div class=\"col-wrapper\" ng-show=\"party.hasSeen\">\n" +
    "									<i class=\"oo-icon icon-view\"></i>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "\n" +
    "\n" +
    "							<!-- Collapse column -->\n" +
    "							<div class=\"oot-table-list-column collapse-column\"\n" +
    "								ng-click=\"party.collapsed = !party.collapsed\"\n" +
    "							><i class=\"oo-icon\" ng-class=\"{'icon-nav-up': party.collapsed, 'icon-nav-down': !party.collapsed}\"></i>\n" +
    "							</div>\n" +
    "\n" +
    "						</li>\n" +
    "					</ul>\n" +
    "\n" +
    "					<ul class=\"oot-table-list oot-table-list-basic l-contradictory-details-list l-contradictory-details-participants\" ng-hide=\"party.collapsed\">\n" +
    "\n" +
    "						<li class=\"oot-table-list-row\"\n" +
    "							ng-repeat=\"participant in party.participants\"\n" +
    "							ng-include=\"'app/expertise-details/contradictory/contradictory-details/actor_row.tpl.html'\"\n" +
    "						></li>\n" +
    "\n" +
    "					</ul>\n" +
    "				</div>\n" +
    "			</op-collapse>\n" +
    "\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/expertise-details/contradictory/contradictory.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/expertise-details/contradictory/contradictory.tpl.html",
    "<div class=\"sidepanel-layout-content sidepanel-no-footer sidepanel-dark l-contradictory\" ng-controller=\"ContradictoryCtrl as vm\">\n" +
    "	<div class=\"sidepanel-layout-header\">\n" +
    "		<div class=\"sidepanel-layout-header-title\">{{ vm.currentExpertise.name }}</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"sidepanel-layout-content-inner\">\n" +
    "\n" +
    "		<tabs ng-show=\"vm.displayState === 'ready'\" class=\"l-contradictory-tabs\">\n" +
    "\n" +
    "			<!-- Unseen tab -->\n" +
    "			<tab-item class=\"tabItemTitle\" title-tab=\"op.contradictory.unseen\">\n" +
    "\n" +
    "				<ul class=\"oot-table-list oot-table-list-basic\" ng-show=\"vm.contradictoryLists.unseen && vm.contradictoryLists.unseen.length\">\n" +
    "					<li class=\"oot-table-list-row\"\n" +
    "						ng-repeat='item in vm.contradictoryLists.unseen'\n" +
    "						ng-include=\"'app/expertise-details/contradictory/item_row.tpl.html'\"\n" +
    "						ng-click=\"vm.contradictoryDetails(item)\"\n" +
    "						oui-tooltip-text=\"i18n:op.contradictory.showDetails\">\n" +
    "					</li>\n" +
    "				</ul>\n" +
    "\n" +
    "				<div ng-hide=\"vm.contradictoryLists.unseen && vm.contradictoryLists.unseen.length\">\n" +
    "					{{ 'op.contradictory.noUnseen' | i18n }}\n" +
    "				</div>\n" +
    "			</tab-item>\n" +
    "\n" +
    "			<!-- Seen tab -->\n" +
    "			<tab-item class=\"tabItemTitle\" title-tab=\"op.contradictory.seen\">\n" +
    "\n" +
    "				<ul class=\"oot-table-list oot-table-list-basic\" ng-show=\"vm.contradictoryLists.seen && vm.contradictoryLists.seen.length\">\n" +
    "					<li class=\"oot-table-list-row\"\n" +
    "						ng-repeat='item in vm.contradictoryLists.seen'\n" +
    "						ng-include=\"'app/expertise-details/contradictory/item_row.tpl.html'\"\n" +
    "						ng-click=\"vm.contradictoryDetails(item)\"\n" +
    "						oui-tooltip-text=\"i18n:op.contradictory.showDetails\">\n" +
    "					</li>\n" +
    "				</ul>\n" +
    "\n" +
    "				<div ng-hide=\"vm.contradictoryLists.seen && vm.contradictoryLists.seen.length\">\n" +
    "					{{ 'op.contradictory.noSeen' | i18n }}\n" +
    "				</div>\n" +
    "			</tab-item>\n" +
    "\n" +
    "			<!-- Sorter -->\n" +
    "			<div ng-show=\"vm.displayState === 'ready'\" oui-collection-sort=\"vm.sorts\" sort-name=\"vm.sortName\" sort=\"vm.currentSort\" sort-asc=\"vm.sortAsc\" class=\"l-contradictory-sorter\"></div>\n" +
    "\n" +
    "		</tabs>\n" +
    "\n" +
    "		<div ng-show=\"vm.displayState === 'loading'\">\n" +
    "\n" +
    "			<!-- Spinner: Shown while items are loading -->\n" +
    "			<div class=\"spinner\">\n" +
    "				<div class=\"spinner-container container1\">\n" +
    "					<div class=\"circle1\"></div>\n" +
    "					<div class=\"circle2\"></div>\n" +
    "					<div class=\"circle3\"></div>\n" +
    "					<div class=\"circle4\"></div>\n" +
    "				</div>\n" +
    "				<div class=\"spinner-container container2\">\n" +
    "					<div class=\"circle1\"></div>\n" +
    "					<div class=\"circle2\"></div>\n" +
    "					<div class=\"circle3\"></div>\n" +
    "					<div class=\"circle4\"></div>\n" +
    "				</div>\n" +
    "				<div class=\"spinner-container container3\">\n" +
    "					<div class=\"circle1\"></div>\n" +
    "					<div class=\"circle2\"></div>\n" +
    "					<div class=\"circle3\"></div>\n" +
    "					<div class=\"circle4\"></div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/expertise-details/contradictory/item_row.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/expertise-details/contradictory/item_row.tpl.html",
    "<div class=\"oot-table-list-column column-filename\"\n" +
    "	ng-style=\"{'background':'url({{vm.getIcon(item.fileName)}}) no-repeat 0 center white'}\"\n" +
    "	>\n" +
    "	<span class=\"l-contradictory-item-name\">{{ item.fileName }}</span>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"oot-table-list-column column-counter\">\n" +
    "	<div class=\"col-wrapper\">\n" +
    "		<i class=\"oo-icon icon-view\"></i><span>{{ item.seenCount }}/{{ item.totalCount }}</span>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"oot-table-list-column\">\n" +
    "	<div class=\"col-wrapper\">\n" +
    "		<i class=\"oo-icon icon-folder\"></i><span>{{ item.parentName }}</span>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"oot-table-list-column\">\n" +
    "	<div class=\"col-wrapper\">\n" +
    "		<i class=\"oo-icon icon-user-circle\"></i><span>{{ item.depositaryName }} {{ vm.getRole(item.depositaryRole) }}</span>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"oot-table-list-column column-date\">\n" +
    "	<div class=\"col-wrapper\">\n" +
    "		<i class=\"oo-icon icon-download-circle-reverse\"></i><span>{{ item.uploadedDate | dateTimeFormat }}</span>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/expertise-details/cost-tracking/bill-summary/bill-summary.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/expertise-details/cost-tracking/bill-summary/bill-summary.tpl.html",
    "<table class=\"cost-tracking-bill-table\">\n" +
    "	<colgroup>\n" +
    "		<col class=\"\">\n" +
    "		<col class=\"cost-tracking-bill-table-unit-col\">\n" +
    "		<col class=\"cost-tracking-bill-table-qty-col\">\n" +
    "		<col class=\"cost-tracking-bill-table-price-col\">\n" +
    "	</colgroup>\n" +
    "	<thead>\n" +
    "		<tr>\n" +
    "			<th>{{ 'op.expertiseDetails.costTracking.billSummary.statusDate' | i18n }}</th>\n" +
    "			<th>{{ 'op.expertiseDetails.costTracking.billSummary.amountHT' | i18n }}</th>\n" +
    "			<th>{{ 'op.expertiseDetails.costTracking.billSummary.billingDate' | i18n }}</th>\n" +
    "			<th>{{ 'op.expertiseDetails.costTracking.billSummary.paymentDate' | i18n }}</th>\n" +
    "			<th>{{ 'op.expertiseDetails.costTracking.billSummary.billStatus' | i18n }}</th>\n" +
    "			<th class=\"message\"> {{ 'op.expertiseDetails.costTracking.billSummary.refreshFinished' | i18n }} </th>\n" +
    "		</tr>\n" +
    "	</thead>\n" +
    "	<tbody>\n" +
    "	<tr>\n" +
    "		<td>{{vm.inProgressDate | date: 'shortDate'}}</td>\n" +
    "		<td>{{vm.bill.totalExcTaxes}}</td>\n" +
    "		<td>{{vm.billingDate | date: 'shortDate'}}</td>\n" +
    "		<td>{{vm.paymentDate | date: 'shortDate'}}</td>\n" +
    "		<td>\n" +
    "			<div>\n" +
    "				<span ng-show=\"vm.bill.length === 0\">{{ 'op.expertiseDetails.costTracking.billSummary.pending' | i18n }}</span>\n" +
    "				<span ng-show=\"vm.bill.statusId === 1\">{{ 'op.expertiseDetails.costTracking.billSummary.toPay' | i18n }}</span>\n" +
    "				<span class=\"span-paid\" ng-show=\"vm.bill.statusId === 3\">{{ 'op.expertiseDetails.costTracking.billSummary.paid' | i18n }}</span>\n" +
    "			</div>\n" +
    "		</td>\n" +
    "		<td ng-if=\"vm.paymentPageUrl.length > 0\">\n" +
    "			<div ng-show=\"vm.bill.statusId === 1\">\n" +
    "				<a class=\"oo-form-button op-btn-white-border\" ng-click=\"vm.openPaymentLink()\">{{ 'op.expertiseDetails.costTracking.billSummary.pay' | i18n }}</a>\n" +
    "				<a ng-show=\"vm.isPaying\" class=\"oo-form-button op-btn-white-border\" ng-click=\"vm.reloadBill()\">{{ 'op.expertiseDetails.costTracking.billSummary.refresh' | i18n }}</a>\n" +
    "			</div>\n" +
    "			<div ng-show=\"vm.bill.statusId === 3\">\n" +
    "				<a class=\"oo-form-button op-btn-white-border\" target=\"_blank\" ng-href=\"{{vm.paymentPageUrl}}\">{{ 'op.expertiseDetails.costTracking.billSummary.consult' | i18n }}</a>\n" +
    "			</div>\n" +
    "		</td>\n" +
    "	</tr>\n" +
    "	</tbody>\n" +
    "	<tfoot>\n" +
    "	</tfoot>\n" +
    "</table>\n" +
    "");
}]);

angular.module("app/expertise-details/cost-tracking/cost-tracking.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/expertise-details/cost-tracking/cost-tracking.tpl.html",
    "<div class=\"sidepanel-layout-content sidepanel-no-footer sidepanel-dark l-cost-tracking\" ng-controller=\"CostTrackingCtrl as vm\">\n" +
    "	<div class=\"sidepanel-layout-header\">\n" +
    "		<div class=\"sidepanel-layout-header-title\">{{ vm.currentExpertise.name }}</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"sidepanel-layout-content-inner\" ng-show=\"vm.displayState === 'loading'\">\n" +
    "		<!-- Spinner: Shown while items are loading -->\n" +
    "		<div class=\"spinner\">\n" +
    "			<div class=\"spinner-container container1\">\n" +
    "				<div class=\"circle1\"></div>\n" +
    "				<div class=\"circle2\"></div>\n" +
    "				<div class=\"circle3\"></div>\n" +
    "				<div class=\"circle4\"></div>\n" +
    "			</div>\n" +
    "			<div class=\"spinner-container container2\">\n" +
    "				<div class=\"circle1\"></div>\n" +
    "				<div class=\"circle2\"></div>\n" +
    "				<div class=\"circle3\"></div>\n" +
    "				<div class=\"circle4\"></div>\n" +
    "			</div>\n" +
    "			<div class=\"spinner-container container3\">\n" +
    "				<div class=\"circle1\"></div>\n" +
    "				<div class=\"circle2\"></div>\n" +
    "				<div class=\"circle3\"></div>\n" +
    "				<div class=\"circle4\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"sidepanel-layout-content-inner empty-bill\" ng-show=\"vm.displayState === 'empty'\">\n" +
    "		<p>{{ op.expertiseDetails.costTracking.noBills | i18n }}</p>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"sidepanel-layout-content-inner\" ng-show=\"vm.displayState === 'bills'\">\n" +
    "		<!-- On going section -->\n" +
    "		<div ng-show=\"vm.costTracking._embedded.ongoing\" ng-init=\"bill = vm.costTracking._embedded.ongoing\">\n" +
    "\n" +
    "			<bill-summary bill=\"vm.costTracking._embedded.ongoing\" in-progress-date=\"vm.costTracking.inProgressDate\" billing-date=\"vm.costTracking.billingDate\" payment-date=\"vm.costTracking.paymentDate\" payment-page-url=\"vm.costTracking.paymentPageUrl\"></bill-summary>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/expertise-details/expertise-details.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/expertise-details/expertise-details.tpl.html",
    "<div ng-controller=\"ExpertiseDetailsCtrl as vm\">\n" +
    "	<div oui-sidepanel max-width=\"5000em\">\n" +
    "		<div oui-sidepanel-page=\"coffre\" icon-name=\"safe-save\" name=\"i18n:op.expertise.safe\" tpl=\"app/expertise-details/safe/safe.tpl.html\" dom-conserve></div>\n" +
    "		<div ng-if=\"vm.isAdmin && vm.showContradictoryTab\" oui-sidepanel-page=\"suivi\" icon-name=\"view\" name=\"i18n:op.expertise.contradictory\" tpl=\"app/expertise-details/contradictory/contradictory.tpl.html\" dom-conserve></div>\n" +
    "		<div ng-if=\"vm.isAdmin && vm.showCostTrackingTab\" oui-sidepanel-page=\"calculatrice\" icon-name=\"calculator\" name=\"i18n:op.expertise.costTracking\" tpl=\"app/expertise-details/cost-tracking/cost-tracking.tpl.html\" dom-conserve></div>\n" +
    "		<div ng-if=\"vm.isAdmin && vm.showAdminTab\" oui-sidepanel-page=\"administration\" icon-name=\"equalizer\" name=\"i18n:op.expertise.administration\" tpl=\"app/expertise-details/administration/administration.tpl.html\" dom-conserve></div>\n" +
    "		<div ng-if=\"vm.showSearchTab\" oui-sidepanel-page=\"search\" icon-name=\"search\" name=\"i18n:op.search\" tpl=\"app/expertise-details/search/search.tpl.html\" dom-conserve></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/expertise-details/safe/folder-modal/folder.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/expertise-details/safe/folder-modal/folder.tpl.html",
    "<div class=\"l-simple-form-modal\" ng-controller=\"NewFolderCtrl as newFolderCtrl\">\n" +
    "	<header class=\"l-simple-form-modal-title\">\n" +
    "		<span ng-show=\"mode === 'CREATE'\">{{ 'op.safe.newFolder' | i18n }}</span>\n" +
    "		<span ng-show=\"mode === 'RENAME'\">{{ 'op.safe.renameFolder' | i18n }}</span>\n" +
    "	</header>\n" +
    "\n" +
    "	<div ng-form=\"newFolderCtrl.formCtrl\" class=\"l-simple-form-modal-form\">\n" +
    "		<div oui-form-field-container>\n" +
    "			<div oui-form-field-value>\n" +
    "				<input type=\"text\"\n" +
    "						name=\"name\"\n" +
    "						placeholder=\"{{ 'op.safe.folderName' | i18n }}\"\n" +
    "						ng-model=\"newFolderCtrl.folderName\"\n" +
    "						ng-required=\"true\"\n" +
    "						ng-model-options=\"{ debounce : { 'default' : 400 } }\"\n" +
    "						class=\"folder-name-input\"\n" +
    "						item-name-validation\n" +
    "						>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<footer class=\"oo-close-action\">\n" +
    "		<button class=\"oo-form-button op-btn-purple sidepanel-layout-footer-action\" ng-click=\"newFolderCtrl.submit()\" ng-disabled=\"!newFolderCtrl.formCtrl.$valid\">{{ 'common.submit' | i18n }}</button>\n" +
    "		<button class=\"oo-form-button op-btn-darkgray sidepanel-layout-footer-action\" ng-click=\"closeModal()\">{{ 'common.cancel' | i18n }}</button>\n" +
    "	</footer>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/expertise-details/safe/safe.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/expertise-details/safe/safe.tpl.html",
    "<div class=\"sidepanel-layout-content sidepanel-no-footer sidepanel-dark l-safe\" ng-controller=\"SafeCtrl as safeCtrl\">\n" +
    "	<div class=\"sidepanel-layout-header\">\n" +
    "		<div class=\"sidepanel-layout-header-title\">{{ safeCtrl.expertiseName }}</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"sidepanel-layout-content-inner browse-layout browse-layout-empty\" ng-show=\"safeCtrl.displayState === 'noRoots'\">\n" +
    "		<i class=\"oo-icon icon-inbox\"></i>\n" +
    "		<p> {{ safeCtrl.noRootsTitle }} </p>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"sidepanel-layout-content-inner browse-layout\" ng-show=\"safeCtrl.displayState === 'browse'\">\n" +
    "		<div class=\"browse-layout-tree\">\n" +
    "			<op-browse op-browse-count></op-browse>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"browse-layout-list\">\n" +
    "\n" +
    "			<div class=\"l-safe-top\">\n" +
    "				<!-- File selection directive -->\n" +
    "				<op-list-selection in-selection=\"2\" class=\"top-elt\"></op-list-selection>\n" +
    "\n" +
    "				<!-- Create folder button -->\n" +
    "				<button class=\"oo-form-button op-btn-gray top-elt\" ng-show=\"safeCtrl.createFolderUrl && !safeCtrl.incompleteUploads()\" ng-click=\"safeCtrl.processFolder('CREATE')\">\n" +
    "					{{ 'op.item.newFolder' | i18n }}\n" +
    "				</button>\n" +
    "\n" +
    "				<!-- Rename folder button -->\n" +
    "				<button class=\"oo-form-button op-btn-gray top-elt\" ng-show=\"safeCtrl.canRename() && !safeCtrl.incompleteUploads()\" ng-click=\"safeCtrl.processFolder('RENAME')\">\n" +
    "					{{ 'op.item.renameFolder' | i18n }}\n" +
    "				</button>\n" +
    "\n" +
    "				<!-- Delete folder button -->\n" +
    "				<button class=\"oo-form-button op-btn-gray top-elt\" ng-show=\"safeCtrl.canDelete() && !safeCtrl.incompleteUploads()\" ng-click=\"safeCtrl.deleteFolder()\">\n" +
    "					{{ 'op.item.deleteFolder' | i18n }}\n" +
    "				</button>\n" +
    "\n" +
    "				<!-- Download button -->\n" +
    "				<button class=\"oo-form-button op-btn-gray top-elt\"\n" +
    "					ng-disabled=\"safeCtrl.isDownloadDisabled() || safeCtrl.incompleteUploads()\"\n" +
    "					ng-click=\"safeCtrl.downloadSelectedItems()\">\n" +
    "					{{ 'common.download' | i18n }}\n" +
    "				</button>\n" +
    "\n" +
    "				<!-- Share button -->\n" +
    "				<button class=\"oo-form-button op-btn-gray top-elt\"\n" +
    "					ng-show=\"safeCtrl.currentExpertise && safeCtrl.currentExpertise.isAdmin && safeCtrl.isSharable()\"\n" +
    "					ng-disabled=\"safeCtrl.selectionIsNotSharable()\"\n" +
    "					ng-click=\"safeCtrl.share()\">\n" +
    "					{{ 'op.item.share' | i18n }}\n" +
    "				</button>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"l-safe-content\">\n" +
    "\n" +
    "				<!-- List header (breadcrumb and sorting) -->\n" +
    "				<div class=\"l-safe-title\"> <!-- This is a table -->\n" +
    "\n" +
    "					<!-- Left cell: Breadcrumb -->\n" +
    "					<div class=\"l-safe-title-left\">\n" +
    "						<i class=\"oo-icon icon-nav-prev-circle l-safe-title-back\" ng-click=\"safeCtrl.back()\" ng-class=\"{disabled: !safeCtrl.currentFolder}\"></i>\n" +
    "						<span class=\"l-safe-title-breadcrumb\">\n" +
    "							<ul class=\"op-breadcrumb\">\n" +
    "								<li ng-repeat=\"bci in safeCtrl.shownBreadcrumbs\" ng-click=\"safeCtrl.openBreadcrumb(bci)\">{{ bci.name }}</li>\n" +
    "							</ul>\n" +
    "						</span>\n" +
    "					</div>\n" +
    "\n" +
    "					<!-- Right cell: Sorting -->\n" +
    "					<div class=\"l-safe-title-right\" ng-show=\"safeCtrl.items.length\">\n" +
    "						<div oui-collection-sort=\"safeCtrl.sorts\" sort-name=\"safeCtrl.sortName\" sort=\"safeCtrl.currentSort\" sort-asc=\"safeCtrl.sortAsc\"></div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"l-safe-content-wrapper\">\n" +
    "\n" +
    "					<div class=\"l-expertise-details-content-wrapper\">\n" +
    "						<op-upload\n" +
    "							ng-show=\"safeCtrl.uploadUrl\"\n" +
    "							upload-counter-max=\"1\"\n" +
    "							upload-url=\"{{safeCtrl.uploadUrl}}\"\n" +
    "							upload-action-cfg=\"safeCtrl.uploadActionCfg\"\n" +
    "							file-models=\"safeCtrl.uploadFiles\",\n" +
    "							prevent-delete-action=\"true\"\n" +
    "						>\n" +
    "						</op-upload>\n" +
    "\n" +
    "						<!--***************************************************************-->\n" +
    "						<!-- Items list -->\n" +
    "						<!--***************************************************************-->\n" +
    "						<ul ng-show=\"safeCtrl.itemsLoaded\" class=\"oot-table-list oot-table-list-basic\">\n" +
    "							<li class=\"oot-table-list-row\" ng-repeat=\"item in safeCtrl.items\"\n" +
    "								ng-click=\"safeCtrl.itemRowClicked(item)\"\n" +
    "								ng-class=\"{'row-selected': item.checked}\">\n" +
    "\n" +
    "								<!-- Checkbox column -->\n" +
    "								<div class=\"oot-table-list-column checkbox-column\">\n" +
    "									<div class=\"op-checkbox op-checkbox-list\"\n" +
    "										ng-class=\"{checked: item.checked}\" ng-if=\"!safeCtrl.isTransferringFile(item)\"\n" +
    "									></div>\n" +
    "								</div>\n" +
    "\n" +
    "								<!-- Item name column -->\n" +
    "\n" +
    "									<!-- Item is a FOLDER -->\n" +
    "									<div ng-if=\"!item.isFile\"\n" +
    "										class=\"oot-table-list-column oot-table-list-title-col folder-col\"\n" +
    "										ng-style=\"{'background':'url({{safeCtrl.getIcon(item.name, !item.isFile)}}) no-repeat 0 center white'}\"\n" +
    "									>\n" +
    "										<div class=\"l-safe-item-name\">{{ item.name }}</div>\n" +
    "									</div>\n" +
    "\n" +
    "									<!-- Item is a FILE -->\n" +
    "									<div ng-if=\"item.isFile\"\n" +
    "										class=\"oot-table-list-column oot-table-list-title-col\"\n" +
    "										ng-style=\"{'background':'url({{safeCtrl.getIcon(item.name, !item.isFile)}}) no-repeat 0 center white'}\"\n" +
    "									>\n" +
    "										<div oui-tooltip-text=\"{{ item.name }}\" class=\"l-safe-item-name\" ng-class=\"{'line-through': item.isLocked}\">{{ item.name }}</div>\n" +
    "\n" +
    "										<!-- Share icon -->\n" +
    "										<i ng-click=\"safeCtrl.share([item]); $event.stopPropagation()\" oui-tooltip-text=\"{{ safeCtrl.sharedWithText(item) }}\" ng-show=\"item._links.share && item.sharedCount && !item.checked\" class=\"oo-icon icon-sharing l-safe-share\"></i>\n" +
    "									</div>\n" +
    "\n" +
    "								<!-- Depositary column -->\n" +
    "								<div class=\"oot-table-list-column\">\n" +
    "									<div ng-show=\"item.isFile\" class=\"l-safe-content-has-depositary\">\n" +
    "										<i class=\"oo-icon icon-user-circle\"></i><span>{{ item._embedded.depositary.firstName}} {{ item._embedded.depositary.lastName}}</span>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "\n" +
    "								<!-- Details column -->\n" +
    "								<div class=\"oot-table-list-column column-details column-pull-right\"\n" +
    "									ng-class=\"{'no-hover': safeCtrl.noHover(item)}\">\n" +
    "									<span ng-show=\"safeCtrl.isTimestampedFile(item)\">{{ item.size | bytes }}  </span>\n" +
    "									<span ng-show=\"safeCtrl.isTransferringFile(item)\">{{ 'op.item.transferring' | i18n }}  <img src=\"resources/images/ajax-loader.gif\"/></span>\n" +
    "									<span><i class=\"opx-icon-timestamp-token\" ng-show=\"safeCtrl.isTimestampedFile(item)\"></i>{{ item.creationDate | dateTimeFormat }}</span>\n" +
    "									<i ng-show=\"item.isFile && item._links.visualize && !safeCtrl.incompleteUploads()\" class=\"oo-icon icon-view-circle\" oui-tooltip-text=\"i18n:common.view\"></i>\n" +
    "									<!-- <i ng-show=\"safeCtrl.isTimestampedFile(item)\" ng-click=\"safeCtrl.downloadToken(item); $event.stopPropagation()\" class=\"opx-icon-timestamp-token\" oui-tooltip-text=\"i18n:op.token.download\" oui-tooltip-cfg=\"{pos: 't'}\"></i> -->\n" +
    "									<i ng-show=\"item.isFile && item._links.download && !safeCtrl.incompleteUploads()\" ng-click=\"safeCtrl.downloadItem(item); $event.stopPropagation()\" class=\"oo-icon icon-download-circle\" oui-tooltip-text=\"i18n:common.download\" oui-tooltip-cfg=\"{pos: 't'}\"></i>\n" +
    "									<i ng-show=\"item.isFile && item._links.lock && !safeCtrl.incompleteUploads()\" ng-click=\"safeCtrl.lockItem(item); $event.stopPropagation()\" class=\"opx-icon-locked-circle\" oui-tooltip-text=\"i18n:op.common.lock\" oui-tooltip-cfg=\"{pos: 't'}\"></i>\n" +
    "									<i ng-show=\"item.isLocked\" class=\"oo-icon icon-locked\" oui-tooltip-text=\"i18n:op.common.locked\" oui-tooltip-cfg=\"{pos: 't'}\"></i>\n" +
    "									<div class=\"new-ribbon\" ng-show=\"item.isNew\">New</div>\n" +
    "								</div>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "\n" +
    "						<!-- Spinner: Shown while items are loading -->\n" +
    "						<div ng-hide=\"safeCtrl.itemsLoaded\" class=\"spinner\">\n" +
    "							<div class=\"spinner-container container1\">\n" +
    "								<div class=\"circle1\"></div>\n" +
    "								<div class=\"circle2\"></div>\n" +
    "								<div class=\"circle3\"></div>\n" +
    "								<div class=\"circle4\"></div>\n" +
    "							</div>\n" +
    "							<div class=\"spinner-container container2\">\n" +
    "								<div class=\"circle1\"></div>\n" +
    "								<div class=\"circle2\"></div>\n" +
    "								<div class=\"circle3\"></div>\n" +
    "								<div class=\"circle4\"></div>\n" +
    "							</div>\n" +
    "							<div class=\"spinner-container container3\">\n" +
    "								<div class=\"circle1\"></div>\n" +
    "								<div class=\"circle2\"></div>\n" +
    "								<div class=\"circle3\"></div>\n" +
    "								<div class=\"circle4\"></div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "\n" +
    "						<!-- No items -->\n" +
    "						<div ng-hide=\"safeCtrl.items.length || !safeCtrl.itemsLoaded\" class=\"no-items\">\n" +
    "							<i class=\"oo-icon icon-inbox\"></i>\n" +
    "							<span>{{ 'op.expertise.noDocument' | i18n }}</span>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/expertise-details/search/search.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/expertise-details/search/search.tpl.html",
    "<div class=\"sidepanel-layout-content sidepanel-no-footer sidepanel-dark sidepanel-search\" ng-controller=\"SearchCtrl as searchCtrl\">\n" +
    "  <div class=\"sidepanel-layout-header\">\n" +
    "		<div class=\"sidepanel-layout-header-title\">{{ searchCtrl.expertiseName }}</div>\n" +
    "	</div>\n" +
    "\n" +
    "  <search show-type-list=\"false\" current-expertise-id=\"searchCtrl.expertiseId\"></search>\n" +
    "</div>");
}]);

angular.module("app/expertise-details/share/actor_row.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/expertise-details/share/actor_row.tpl.html",
    "<!-- Checkbox column -->\n" +
    "<div class=\"oot-table-list-column checkbox-column\">\n" +
    "	<div class=\"op-checkbox op-checkbox-list\"\n" +
    "		ng-class=\"{checked: shareCtrl.userAccess(actor) === 'FULL' || shareCtrl.userAccess(actor) === 'PARTIAL'}\"\n" +
    "	></div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Icon column -->\n" +
    "<div class=\"oot-table-list-column icon-column\">\n" +
    "	<i class=\"oo-icon icon-user-circle\"></i>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Name column -->\n" +
    "<div class=\"oot-table-list-column name-column\"\n" +
    "	ng-style=\"\"\n" +
    ">{{ actor.fullName }}</div>\n" +
    "");
}]);

angular.module("app/expertise-details/share/lawyer_pane.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/expertise-details/share/lawyer_pane.tpl.html",
    "<ul class=\"oot-table-list oot-table-list-basic l-share-list l-share-list-lawyer\">\n" +
    "\n" +
    "	<li class=\"oot-table-list-row\"\n" +
    "		ng-repeat=\"lawyer in shareCtrl.share._embedded.lawyers\"\n" +
    "		ng-click=\"shareCtrl.cycleRight(lawyer)\"\n" +
    "		ng-class=\"{'row-selected': shareCtrl.userAccess(lawyer) === 'FULL', 'row-partially-selected': shareCtrl.userAccess(lawyer) === 'PARTIAL'}\"\n" +
    "	>\n" +
    "\n" +
    "		<!-- Checkbox column -->\n" +
    "		<div class=\"oot-table-list-column checkbox-column\">\n" +
    "			<div class=\"op-checkbox op-checkbox-list\"\n" +
    "				ng-class=\"{checked: shareCtrl.userAccess(lawyer) === 'FULL' || shareCtrl.userAccess(lawyer) === 'PARTIAL'}\"\n" +
    "			></div>\n" +
    "		</div>\n" +
    "\n" +
    "		<!-- Icon column -->\n" +
    "		<div class=\"oot-table-list-column icon-column\">\n" +
    "			<i class=\"opx-icon-user-lawyer-circle\"></i>\n" +
    "		</div>\n" +
    "\n" +
    "		<!-- Name column -->\n" +
    "		<div class=\"oot-table-list-column name-column\"\n" +
    "			ng-style=\"\"\n" +
    "		>\n" +
    "			{{ lawyer.fullName }}<br ng-show=\"lawyer.parties.length\">\n" +
    "			<i class=\"opx-icon-group-lawer-circle\" ng-show=\"lawyer.parties.length\"></i>\n" +
    "			<div ng-show=\"lawyer.parties.length\" class=\"l-share-list-lawyer-parties\"><span ng-repeat=\"party in lawyer.parties\">{{ party }}&nbsp;</span></div>\n" +
    "		</div>\n" +
    "\n" +
    "	</li>\n" +
    "</ul>\n" +
    "");
}]);

angular.module("app/expertise-details/share/parties_pane.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/expertise-details/share/parties_pane.tpl.html",
    "<div ng-repeat=\"party in shareCtrl.share._embedded.parties\" ng-show=\"party.participants.length\">\n" +
    "	<ul class=\"oot-table-list oot-table-list-basic l-share-list l-share-parties\">\n" +
    "\n" +
    "		<li class=\"oot-table-list-row\">\n" +
    "\n" +
    "			<!-- Checkbox column -->\n" +
    "			<div class=\"oot-table-list-column checkbox-column\"></div>\n" +
    "\n" +
    "			<!-- Icon column -->\n" +
    "			<div class=\"oot-table-list-column icon-column\">\n" +
    "				<i class=\"opx-icon-group-lawer-circle\"></i>\n" +
    "			</div>\n" +
    "\n" +
    "			<!-- Name column -->\n" +
    "			<div class=\"oot-table-list-column name-column\"\n" +
    "			>{{ party.partyName }}</div>\n" +
    "\n" +
    "			<!-- Collapse column -->\n" +
    "			<div class=\"oot-table-list-column collapse-column\"\n" +
    "				ng-click=\"party.collapsed = !party.collapsed\"\n" +
    "			><i class=\"oo-icon\" ng-class=\"{'icon-nav-up': party.collapsed, 'icon-nav-down': !party.collapsed}\"></i>\n" +
    "			</div>\n" +
    "\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "\n" +
    "	<ul class=\"oot-table-list oot-table-list-basic l-share-list l-share-participants\" ng-hide=\"party.collapsed\">\n" +
    "\n" +
    "		<li class=\"oot-table-list-row\"\n" +
    "			ng-repeat=\"actor in party.participants\"\n" +
    "			ng-click=\"shareCtrl.cycleRight(actor)\"\n" +
    "			ng-class=\"{'row-selected': shareCtrl.userAccess(actor) === 'FULL', 'row-partially-selected': shareCtrl.userAccess(actor) === 'PARTIAL'}\"\n" +
    "			ng-include=\"'app/expertise-details/share/actor_row.tpl.html'\"\n" +
    "		></li>\n" +
    "\n" +
    "	</ul>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/expertise-details/share/share.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/expertise-details/share/share.tpl.html",
    "<div oui-sidepanel max-width=\"80em\">\n" +
    "	<div oui-sidepanel-page tpl=\"app/expertise-details/share/share_main.tpl.html\" dom-conserve></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/expertise-details/share/share_main.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/expertise-details/share/share_main.tpl.html",
    "<div class=\"sidepanel-layout-content sidepanel-dark l-share\" ng-controller=\"ShareCtrl as shareCtrl\">\n" +
    "	<header class=\"sidepanel-layout-header\">\n" +
    "		<div class=\"sidepanel-layout-header-title\">{{ shareCtrl.title }}</div>\n" +
    "	</header>\n" +
    "\n" +
    "	<div class=\"sidepanel-layout-content-inner\">\n" +
    "		<div class=\"banner\">\n" +
    "			<div class=\"banner-cell\">\n" +
    "				<i class=\"oo-icon icon-sharing\"></i>\n" +
    "				<span>{{ shareCtrl.bannerTitle }}</span>\n" +
    "				<button\n" +
    "					class=\"oo-form-button op-btn-white l-share-deactivate\"\n" +
    "					ng-click=\"shareCtrl.deactivateAllAccess()\"\n" +
    "				>\n" +
    "					{{ 'op.expertiseDetails.share.deactivate' | i18n }}\n" +
    "				</button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    " 		<div class=\"l-share-wrapper\">\n" +
    "			<div class=\"l-share-documents-pane\">\n" +
    "				<h2>{{ 'op.expertiseDetails.share.documents' | i18n }}\n" +
    "				<ul class=\"l-share-documents-list\">\n" +
    "					<li class=\"l-share-documents-list-element\" ng-repeat=\"item in shareCtrl.items\" ng-style=\"{'background':'url({{shareCtrl.getIcon(item.name, false)}}) no-repeat 0 center #666', 'background-size': '24px'}\">{{ item.name }}</li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"l-share-users-pane\" ng-show=\"shareCtrl.displayState === 'actors'\">\n" +
    "\n" +
    "				<!-- Panes for MAGISTRATES, CLERKS and SAPITORS -->\n" +
    "				<op-collapse\n" +
    "					ng-repeat=\"actors in shareCtrl.actorsList\"\n" +
    "					op-collapse-header=\"{{ 'op.' + actors.name | i18n }}\"\n" +
    "					ng-show=\"actors.length\"\n" +
    "				>\n" +
    "					<ul class=\"oot-table-list oot-table-list-basic l-share-list\">\n" +
    "						<li class=\"oot-table-list-row\"\n" +
    "							ng-repeat=\"actor in actors\"\n" +
    "							ng-click=\"shareCtrl.cycleRight(actor)\"\n" +
    "							ng-class=\"{'row-selected': shareCtrl.userAccess(actor) === 'FULL', 'row-partially-selected': shareCtrl.userAccess(actor) === 'PARTIAL'}\"\n" +
    "							ng-include=\"'app/expertise-details/share/actor_row.tpl.html'\"\n" +
    "						>\n" +
    "					</ul>\n" +
    "				</op-collapse>\n" +
    "\n" +
    "				<!-- Lawyer's pane -->\n" +
    "				<op-collapse\n" +
    "					op-collapse-header=\"{{ 'op.lawyers' | i18n }}\"\n" +
    "					ng-show=\"shareCtrl.share._embedded.lawyers.length\"\n" +
    "				>\n" +
    "					<div ng-include=\"'app/expertise-details/share/lawyer_pane.tpl.html'\"></div>\n" +
    "				</op-collapse>\n" +
    "\n" +
    "				<!-- Parties's pane -->\n" +
    "				<op-collapse\n" +
    "					op-collapse-header=\"{{ 'op.parties' | i18n }}\"\n" +
    "					ng-show=\"shareCtrl.hasParticipants()\"\n" +
    "				>\n" +
    "					<div ng-include=\"'app/expertise-details/share/parties_pane.tpl.html'\"></div>\n" +
    "				</op-collapse>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"l-share-users-pane no-user\" ng-show=\"shareCtrl.displayState === 'noActors'\">\n" +
    "				<p><i class=\"oo-icon icon-user-circle\"></i><br><br>{{ 'op.expertiseDetails.share.noUser' | i18n }}</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<footer class=\"sidepanel-layout-footer\">\n" +
    "		<button class=\"oo-form-button op-btn-purple sidepanel-layout-footer-action\" ng-disabled=\"shareCtrl.validateDisabled()\"\n" +
    "			oo-promise-click=\"shareCtrl.validate()\" oo-loading-message-click=\"op.loading\" oo-original-message=\"common.submit\">{{ 'common.submit' | i18n }}</button>\n" +
    "		<button class=\"oo-form-button op-btn-white sidepanel-layout-footer-action\" ng-click=\"close()\">{{ 'common.cancel' | i18n }}</button>\n" +
    "	</footer>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/notification-details/notification-details.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/notification-details/notification-details.tpl.html",
    "<div oui-sidepanel max-width=\"55em\">\n" +
    "	<div oui-sidepanel-page tpl=\"app/notification-details/notification-details_main.tpl.html\" dom-conserve></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/notification-details/notification-details_main.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/notification-details/notification-details_main.tpl.html",
    "<div class=\"sidepanel-layout-content sidepanel-no-footer sidepanel-dark l-designation-details\" ng-controller=\"NotificationDetailsCtrl as notificationDetailsCtrl\">\n" +
    "	<header class=\"sidepanel-layout-header\">\n" +
    "		<div class=\"sidepanel-layout-header-title\">{{ 'op.designationDetails.title' | i18n }}</div>\n" +
    "	</header>\n" +
    "\n" +
    "	<div class=\"sidepanel-layout-content-inner\">\n" +
    "		<div class=\"banner\">\n" +
    "			<div class=\"banner-cell\">\n" +
    "				<i class=\"opx-icon-prize\"></i>\n" +
    "				<span>{{ notificationDetailsCtrl.designationDate | date : 'short' : timezone}}</span>\n" +
    "			</div>\n" +
    "			<div class=\"banner-cell\" ng-hide=\"notificationDetailsCtrl.cancelled\">\n" +
    "				<button class=\"oo-form-button op-btn-white\" oo-role-security=\"EXPERT\" rel=\"open-notification-reply-panel\" ng-click=\"notificationDetailsCtrl.openReplyPanel()\">{{ 'op.designationDetails.answer' | i18n }}</button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"designation-detail-wrapper\" oo-role-security=\"EXPERT\">\n" +
    "			<h2>{{ 'op.designator' | i18n }}</h2>\n" +
    "\n" +
    "			<ul class=\"oot-table-list oot-table-list-basic\">\n" +
    "				<li class=\"oot-table-list-row\">\n" +
    "					<div class=\"oot-table-list-column\">\n" +
    "						<i class=\"oo-icon icon-user\"></i>\n" +
    "						<span>{{ notificationDetailsCtrl.designatorFullName }}</span>\n" +
    "					</div>\n" +
    "					<div class=\"oot-table-list-column column-pull-right\">\n" +
    "						<i class=\"oo-icon icon-email\"></i>\n" +
    "						<span>{{ notificationDetailsCtrl.designatorEmail }}</span>\n" +
    "					</div>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"designation-detail-wrapper\" oo-role-security=\"MAGISTRATE CLERK\">\n" +
    "			<h2>{{ 'op.expert' | i18n }}</h2>\n" +
    "\n" +
    "			<ul class=\"oot-table-list oot-table-list-basic\">\n" +
    "				<li class=\"oot-table-list-row\">\n" +
    "					<div class=\"oot-table-list-column\">\n" +
    "						<i class=\"oo-icon icon-user\"></i>\n" +
    "						<span>{{ notificationDetailsCtrl.expertFullName }}</span>\n" +
    "					</div>\n" +
    "					<div class=\"oot-table-list-column column-pull-right\">\n" +
    "						<i class=\"oo-icon icon-email\"></i>\n" +
    "						<span>{{ notificationDetailsCtrl.expertEmail }}</span>\n" +
    "					</div>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"designation-detail-wrapper\">\n" +
    "			<h2>{{ 'op.documents' | i18n }}</h2>\n" +
    "\n" +
    "			<ul class=\"oot-table-list oot-table-list-basic\">\n" +
    "				<li class=\"oot-table-list-row\" ng-repeat=\"item in notificationDetailsCtrl.items\" ng-show=\"item.isFile\">\n" +
    "					<div class=\"oot-table-list-column column-filename\"\n" +
    "						ng-style=\"{'background':'url({{notificationDetailsCtrl.getIcon(item.name)}}) no-repeat 0 center transparent'}\"\n" +
    "						>\n" +
    "						<span>{{ item.name }}</span>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"oot-table-list-column column-details column-pull-right\">\n" +
    "						<span  ng-show=\"item._links.timestamp\">{{ item.size | bytes }}  <i class=\"opx-icon-timestamp-token\"></i> {{ item.creationDate | dateTimeFormat }}</span>\n" +
    "						<!-- <i ng-show=\"item._links.timestamp\" class=\"opx-icon-timestamp-token\" oui-tooltip-text=\"i18n:op.token.download\" ng-click=\"notificationDetailsCtrl.downloadToken(item)\" oui-tooltip-cfg=\"{pos: 't'}\"></i> -->\n" +
    "						<i ng-show=\"item._links.visualize\" class=\"oo-icon icon-view-circle\" oui-tooltip-text=\"i18n:common.view\"></i>\n" +
    "						<i ng-show=\"item._links.download\" class=\"oo-icon icon-download-circle\" oui-tooltip-text=\"i18n:common.download\" ng-click=\"notificationDetailsCtrl.download(item)\" oui-tooltip-cfg=\"{pos: 't'}\"></i>\n" +
    "					</div>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"designation-actions-wrapper\" ng-hide=\"notificationDetailsCtrl.cancelled\">\n" +
    "			<button ng-class=\"{'oo-form-button op-btn-purple' : notificationDetailsCtrl.canCancelDesignation(), 'oo-form-button op-btn-gray' : !notificationDetailsCtrl.canCancelDesignation()}\" oo-role-security=\"MAGISTRATE CLERK\" rel=\"cancel-designation\" ng-click=\"notificationDetailsCtrl.cancelDesignation()\">{{ 'op.designationDetails.cancel' | i18n }}</button>\n" +
    "			<button ng-class=\"{'oo-form-button op-btn-purple' : notificationDetailsCtrl.canRemindDesignation(), 'oo-form-button op-btn-gray' : !notificationDetailsCtrl.canRemindDesignation()}\" oo-role-security=\"MAGISTRATE CLERK\" rel=\"remind-designation\" ng-click=\"notificationDetailsCtrl.remindDesignation()\">{{ 'op.designationDetails.remind' | i18n }}</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/notification-reply/notification-reply.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/notification-reply/notification-reply.tpl.html",
    "<div oui-sidepanel max-width=\"5000em\">\n" +
    "	<div oui-sidepanel-page tpl=\"app/notification-reply/notification-reply_main.tpl.html\" dom-conserve></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/notification-reply/notification-reply_main.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/notification-reply/notification-reply_main.tpl.html",
    "<div class=\"sidepanel-layout l-notification-reply\" ng-controller=\"NotificationReplyCtrl as notificationReplyCtrl\">\n" +
    "\n" +
    "	<header class=\"sidepanel-layout-header\">\n" +
    "		<div class=\"sidepanel-layout-header-title\">{{'op.app.notificationReply.title' | i18n}}</div>\n" +
    "	</header>\n" +
    "\n" +
    "	<div class=\"sidepanel-layout-content\">\n" +
    "		<div class=\"sidepanel-layout-content-inner\">\n" +
    "\n" +
    "			<div class=\"wizard-layout-column-left\">\n" +
    "				<header class=\"wizard-layout-column-header\">\n" +
    "					<div class=\"wizard-layout-column-header-title\">{{'op.app.notificationReply.left.title' | i18n}}</div>\n" +
    "				</header>\n" +
    "				<div class=\"wizard-layout-column-content\">\n" +
    "					<div class=\"wizard-layout-column-left-title\">{{ 'op.app.notificationReply.statutes' | i18n}}</div>\n" +
    "\n" +
    "					<ul class=\"oot-table-list\">\n" +
    "						<li class=\"oot-table-list-row\">\n" +
    "							<div class=\"reply-select reply-accept\" ng-class=\"{'reply-selected': notificationReplyCtrl.accept}\">\n" +
    "								<input id=\"acceptNotification\"\n" +
    "									type=\"radio\"\n" +
    "									rel=\"accept-notification\"\n" +
    "									data-ng-value=\"true\"\n" +
    "									ng-model=\"notificationReplyCtrl.accept\"/>\n" +
    "								<label for=\"acceptNotification\">{{'op.app.notificationReply.reply.accept' | i18n}}</label>\n" +
    "							</div>\n" +
    "						</li>\n" +
    "						<li class=\"oot-table-list-row\">\n" +
    "							<div class=\"reply-select reply-refuse\" ng-class=\"{'reply-selected': !notificationReplyCtrl.accept}\">\n" +
    "								<input id=\"refuseNotification\"\n" +
    "									type=\"radio\"\n" +
    "									rel=\"refuse-notification\"\n" +
    "									data-ng-value=\"false\"\n" +
    "									ng-model=\"notificationReplyCtrl.accept\"/>\n" +
    "								<label for=\"refuseNotification\">{{'op.app.notificationReply.reply.refuse' | i18n}}</label>\n" +
    "							</div>\n" +
    "						</li>\n" +
    "					</ul>\n" +
    "\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"wizard-layout-column-right\">\n" +
    "				<header class=\"wizard-layout-column-header\">\n" +
    "					<div class=\"wizard-layout-column-header-title\">{{'op.app.notificationReply.right.title' | i18n}}</div>\n" +
    "				</header>\n" +
    "\n" +
    "				<div class=\"wizard-layout-column-content\">\n" +
    "					<div class=\"wizard-layout-column-right-title\">\n" +
    "						<i class=\"oo-icon icon-user-circle wizard-layout-column-right-title-icon\"></i>\n" +
    "						<span class=\"wizard-layout-column-right-title-user-name\">\n" +
    "							{{ $root.ooConfig.session.user.firstName + ' ' + $root.ooConfig.session.user.lastName }}\n" +
    "							{{ 'op.me' | i18n }}\n" +
    "						</span>\n" +
    "						- {{ notificationReplyCtrl.notificationDate | date: 'fullDate' }}\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"speech-outline\">\n" +
    "						<div class=\"speech-outline-arrow\">\n" +
    "							<i class=\"speech-outline-arrow-big\"></i>\n" +
    "							<i class=\"speech-outline-arrow-small\"></i>\n" +
    "						</div>\n" +
    "\n" +
    "						<div class=\"speech-outline-inner\">\n" +
    "\n" +
    "							<div>\n" +
    "								<h2 class=\"reply-selected reply-accepted\" ng-show=\"notificationReplyCtrl.accept\">\n" +
    "									<i class=\"oo-icon icon-validate-circle\"></i>\n" +
    "									<span>{{'op.app.notificationReply.justify.accept.title' | i18n}}</span>\n" +
    "								</h2>\n" +
    "								<h2 class=\"reply-selected reply-refused\" ng-hide=\"notificationReplyCtrl.accept\">\n" +
    "									<i class=\"oo-icon icon-delete-circle\"></i>\n" +
    "									<span>{{'op.app.notificationReply.justify.refuse.title' | i18n}}</span>\n" +
    "								</h2>\n" +
    "							</div>\n" +
    "\n" +
    "							<div class=\"l-notification-reply-upload\">\n" +
    "								<label class=\"l-notification-reply-upload-title\">{{'op.app.notificationReply.justify.files' | i18n}}</label>\n" +
    "								<label class=\"l-notification-reply-upload-title\" ng-show=\"notificationReplyCtrl.accept\">{{'op.app.notificationReply.justify.files.optional' | i18n}}</label>\n" +
    "								<op-upload upload-counter-max=\"1\" upload-url=\"{{notificationReplyCtrl.notificationItemsUrl}}\" file-models=\"notificationReplyCtrl.filesDesignations\" upload-action-cfg=\"notificationReplyCtrl.uploadActionCfg\"></op-upload>\n" +
    "							</div>\n" +
    "\n" +
    "							<op-notification-form input-values=\"notificationReplyCtrl.notifInputValues\" form-valid=\"notificationReplyCtrl.notifFormValid\"></op-notification-form>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<footer class=\"sidepanel-layout-footer\">\n" +
    "		<button class=\"oo-form-button op-btn-purple sidepanel-layout-footer-action\" rel=\"validate-notification\" ng-click=\"notificationReplyCtrl.submitDesignation()\" ng-disabled=\"notificationReplyCtrl.isSubmitDesignationDisable()\">{{'op.send' | i18n}}</button>\n" +
    "		<button class=\"oo-form-button op-btn-white sidepanel-layout-footer-action\" ng-click=\"notificationReplyCtrl.cancel()\">{{'common.cancel' | i18n}}</button>\n" +
    "	</footer>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/personal-info/personal-info-show.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/personal-info/personal-info-show.tpl.html",
    "<div class=\"sidepanel-layout-content-inner right-pane-wrapper\">\n" +
    "\n" +
    "	<div class=\"l-personal-info-header\">\n" +
    "		<div class=\"l-personal-info-header-icon\">\n" +
    "			<i class=\"oo-icon icon-user-circle\"/>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"l-personal-info-header-inputs\">\n" +
    "			<div class=\"name-input-label\">\n" +
    "				{{ personalInfoCtrl.currentUser.firstName }}\n" +
    "			</div>\n" +
    "			<div class=\"name-input-label\">\n" +
    "				{{ personalInfoCtrl.currentUser.lastName }}\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"form-box\" ng-if=\"personalInfoCtrl.currentUser.certificates\">\n" +
    "		<div class=\"form-box-innerbox\">\n" +
    "			<div class=\"certificate-box\">\n" +
    "				<div class=\"form-wrapper-icon\">\n" +
    "					<i class=\"oo-icon icon-rgs-one-star\"></i>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"form-wrapper-inputs\">\n" +
    "					<div class=\"form-box-input-label\">\n" +
    "						{{ 'op.personal.info.yourCertificates' | i18n }}\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"certificate-box-content-wrapper\" ng-repeat=\"certificate in personalInfoCtrl.currentUser.certificates track by $index\">\n" +
    "						<div class=\"certificate-box-content-element\" ng-click=\"certificate.certificateOpened = !certificate.certificateOpened\" ng-class=\"{'certificate-box-content-element-opened': certificate.certificateOpened}\" data-short-certif=\"{{ certificate.shortenInfoCertif }}\">{{ certificate.subjectDnCertif }}</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"certificate-button-creation\" ng-show=\"personalInfoCtrl.currentUser.activeAuthMode._links.addCertificate\">\n" +
    "				<button class=\"oo-form-button op-btn-gray\" oo-promise-click=\"personalInfoCtrl.sendMailNewCertificate()\" oo-loading-message-click=\"op.loading\"\n" +
    "					oo-original-message=\"op.personal.info.certificate.add.button\">\n" +
    "					{{ 'op.personal.info.certificate.add.button' | i18n }}\n" +
    "				</button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"form-box form-box-input\" ng-if=\"personalInfoCtrl.currentUser.cnbfId\">\n" +
    "		<div class=\"form-box-input-label\">\n" +
    "			{{ 'op.personal.info.yourCnbfId' | i18n }}\n" +
    "		</div>\n" +
    "\n" +
    "		<div>\n" +
    "			<div class=\"info-input-text\">\n" +
    "				{{ personalInfoCtrl.currentUser.cnbfId }}\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"form-box form-box-input\">\n" +
    "		<div class=\"form-box-input-label\">\n" +
    "			{{ 'op.email' | i18n }}\n" +
    "		</div>\n" +
    "\n" +
    "		<div>\n" +
    "			<div class=\"info-input-text\">\n" +
    "				{{ personalInfoCtrl.currentUser.email }}\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"form-box form-box-input\">\n" +
    "		<div class=\"form-box-inline\">\n" +
    "			<div class=\"form-box-input-label\">\n" +
    "				{{ 'op.telephone' | i18n }}\n" +
    "			</div>\n" +
    "\n" +
    "			<div>\n" +
    "				<div class=\"info-input-text\">\n" +
    "					{{ personalInfoCtrl.currentUser.phoneNumber }}\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"form-box-inline\">\n" +
    "			<div class=\"form-box-input-label\">\n" +
    "				{{ 'op.mobile' | i18n }}\n" +
    "			</div>\n" +
    "\n" +
    "			<div>\n" +
    "				<div class=\"info-input-text\">\n" +
    "					{{ personalInfoCtrl.currentUser.mobileNumber }}\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"form-box form-box-input\" oo-role-security=\"EXPERT\">\n" +
    "		<div class=\"form-box-input-label\">\n" +
    "			{{ 'op.address' | i18n }}\n" +
    "		</div>\n" +
    "\n" +
    "		<div>\n" +
    "			<div class=\"info-input-text\">\n" +
    "				{{ personalInfoCtrl.expertAddress }}\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"form-box form-box-input\" oo-role-security=\"MAGISTRATE CLERK LAWYER PARTY\">\n" +
    "		<div class=\"form-box-input-label\">\n" +
    "			{{ 'op.address' | i18n }}\n" +
    "		</div>\n" +
    "\n" +
    "		<div>\n" +
    "			<div class=\"info-input-text\">\n" +
    "				{{ personalInfoCtrl.currentUser.address }}\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"form-box form-box-input\" oo-role-security=\"EXPERT\">\n" +
    "		<div class=\"form-box-input-label\">\n" +
    "			{{ 'op.courtSelection' | i18n }}\n" +
    "		</div>\n" +
    "\n" +
    "		<div>\n" +
    "			<div class=\"info-input-text\">\n" +
    "				{{ personalInfoCtrl.currentUser._embedded.court.name }}\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"form-box form-box-input\" oo-role-security=\"EXPERT\">\n" +
    "		<div class=\"form-box-input-label\">\n" +
    "			{{ 'op.specialties' | i18n }}\n" +
    "		</div>\n" +
    "\n" +
    "		<div>\n" +
    "			<div class=\"info-input-text\" ng-repeat=\"specialty in personalInfoCtrl.currentUser._embedded.specialties\">\n" +
    "				{{ specialty.name }}{{$last ? '' : ', '}}\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"form-box form-box-input\" oo-role-security=\"EXPERT\">\n" +
    "		<div class=\"form-box-input-label\">\n" +
    "			{{ 'op.nationalList' | i18n }}\n" +
    "		</div>\n" +
    "\n" +
    "		<div>\n" +
    "			<div class=\"info-input-text\">\n" +
    "				<label for=\"nationalListTrue\" ng-show=\"personalInfoCtrl.currentUser.onNationalList\">{{'common.yes' | i18n}}</label>\n" +
    "				<label for=\"nationalListTrue\" ng-show=\"!personalInfoCtrl.currentUser.onNationalList\">{{ 'common.no' | i18n }}</label>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"form-box form-box-input\" oo-role-security=\"MAGISTRATE CLERK\">\n" +
    "		<div class=\"form-box-input-label\">\n" +
    "			{{ 'op.personal.info.role' | i18n }}\n" +
    "		</div>\n" +
    "\n" +
    "		<div>\n" +
    "			<div class=\"info-input-text\">\n" +
    "				<label for=\"nationalListTrue\" ng-show=\"personalInfoCtrl.currentUser.role === 'MAGISTRATE'\">{{'op.personal.info.roleMagistrat' | i18n}}</label>\n" +
    "				<label for=\"nationalListTrue\" ng-show=\"personalInfoCtrl.currentUser.role === 'CLERK'\">{{ 'op.personal.info.roleGreffier' | i18n }}</label>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"form-box form-box-input\" oo-role-security=\"MAGISTRATE CLERK\">\n" +
    "		<div class=\"form-box-input-label\">\n" +
    "			{{ 'op.personal.info.subscribedToOtherPartiesNotifications' | i18n }}\n" +
    "		</div>\n" +
    "\n" +
    "		<div>\n" +
    "			<div class=\"info-input-text\">\n" +
    "				<label for=\"subscribeToPartyNotificationsTrue\" ng-show=\"personalInfoCtrl.currentUser.subscribeToPartyNotifications\">{{'common.yes' | i18n}}</label>\n" +
    "				<label for=\"subscribeToPartyNotificationsFalse\" ng-show=\"!personalInfoCtrl.currentUser.subscribeToPartyNotifications\">{{ 'common.no' | i18n }}</label>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<!-- This is in comment to fix OPLX-1198 -->\n" +
    "	<!--<div class=\"form-box form-box-input\" oo-role-security=\"EXPERT MAGISTRATE CLERK LAWYER\">\n" +
    "		<div class=\"form-box-input-label\">\n" +
    "			{{ 'op.personal.info.deposite.notification' | i18n }}\n" +
    "		</div>\n" +
    "\n" +
    "		<div>\n" +
    "			<div class=\"info-input-text\">\n" +
    "				<label for=\"nationalListTrue\" ng-show=\"personalInfoCtrl.currentUser.depositeNotification\">{{'common.yes' | i18n}}</label>\n" +
    "				<label for=\"nationalListTrue\" ng-show=\"!personalInfoCtrl.currentUser.depositeNotification\">{{ 'common.no' | i18n }}</label>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>-->\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/personal-info/personal-info-update.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/personal-info/personal-info-update.tpl.html",
    "<div class=\"sidepanel-layout-content-inner right-pane-wrapper\">\n" +
    "\n" +
    "	<div class=\"l-user-form-header\">\n" +
    "		<div class=\"l-user-form-header-icon\">\n" +
    "			<i class=\"oo-icon icon-user-circle\"/>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"l-user-form-header-inputs\">\n" +
    "			<div oui-form-field-container>\n" +
    "				<div oui-form-field-value>\n" +
    "					<input type=\"text\"\n" +
    "							name=\"name\"\n" +
    "							placeholder=\"{{ 'op.firstName.text.required' | i18n }}\"\n" +
    "							ng-model=\"personalInfoCtrl.currentUserModify.firstName\"\n" +
    "							ng-required=\"true\" ng-maxlength=\"128\"\n" +
    "							ng-disabled=\"personalInfoCtrl.userRole === 'LAWYER'\"\n" +
    "							>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div oui-form-field-container>\n" +
    "				<div oui-form-field-value>\n" +
    "					<input type=\"text\"\n" +
    "							name=\"name\"\n" +
    "							placeholder=\"{{ 'op.lastName.text.required' | i18n }}\"\n" +
    "							ng-model=\"personalInfoCtrl.currentUserModify.lastName\"\n" +
    "							ng-required=\"true\" ng-maxlength=\"128\"\n" +
    "							ng-disabled=\"personalInfoCtrl.userRole === 'LAWYER'\"\n" +
    "							>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"form-box\" ng-if=\"personalInfoCtrl.currentUser.certificates\">\n" +
    "		<div class=\"form-box-innerbox\">\n" +
    "			<div class=\"certificate-box\">\n" +
    "				<div class=\"form-wrapper-icon\">\n" +
    "					<i class=\"oo-icon icon-rgs-one-star\"></i>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"form-wrapper-inputs\">\n" +
    "					<div class=\"form-box-input-label\">\n" +
    "						{{ 'op.personal.info.yourCertificates' | i18n }}\n" +
    "					</div>\n" +
    "					<div class=\"certificate-box-content-wrapper\" ng-repeat=\"certificate in personalInfoCtrl.currentUser.certificates track by $index\">\n" +
    "						<div class=\"certificate-box-content-element\" ng-click=\"certificate.certificateOpened = !certificate.certificateOpened\" ng-class=\"{'certificate-box-content-element-opened': certificate.certificateOpened}\" data-short-certif=\"{{ certificate.shortenInfoCertif }}\">{{ certificate.subjectDnCertif }}</div>\n" +
    "						<i class=\"oo-icon icon-trash certificate-box-content-element-delete\" ng-show=\"certificate._links.delete\" ng-click=\"personalInfoCtrl.deleteCertificate(certificate, $index)\"></i>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"form-box form-box-input\" ng-if=\"personalInfoCtrl.currentUser.cnbfId\">\n" +
    "		<div class=\"form-box-input-label\">\n" +
    "			{{ 'op.personal.info.yourCnbfId' | i18n }}\n" +
    "		</div>\n" +
    "\n" +
    "		<div>\n" +
    "			<div class=\"info-input-text\">\n" +
    "				{{ personalInfoCtrl.currentUser.cnbfId }}\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"form-box form-box-input\">\n" +
    "		<div class=\"form-box-input-label\">\n" +
    "			{{ 'op.email.required' | i18n }}\n" +
    "		</div>\n" +
    "\n" +
    "		<div oui-form-field-container>\n" +
    "			<div oui-form-field-value>\n" +
    "				<input type=\"text\"\n" +
    "					name=\"email\"\n" +
    "					placeholder=\"{{ 'op.email.text.required' | i18n }}\"\n" +
    "					ng-model=\"personalInfoCtrl.currentUserModify.email\"\n" +
    "					ng-required=\"true\"\n" +
    "					ng-pattern=\"personalInfoCtrl.mailPattern\" ng-maxlength=\"92\"\n" +
    "					mail-validation\n" +
    "					>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"form-box form-box-input\">\n" +
    "		<div class=\"form-box-inline\">\n" +
    "			<div class=\"form-box-input-label\">\n" +
    "				{{ 'op.telephone' | i18n }}\n" +
    "			</div>\n" +
    "\n" +
    "			<div oui-form-field-container class=\"form-field-container-phone\">\n" +
    "				<div oui-form-field-value>\n" +
    "					<input type=\"text\"\n" +
    "						name=\"telephone\"\n" +
    "						placeholder=\"{{ 'op.telPlaceholder' | i18n }}\"\n" +
    "						ng-model=\"personalInfoCtrl.currentUserModify.phoneNumber\"\n" +
    "						ng-required=\"false\"\n" +
    "						ng-pattern=\"personalInfoCtrl.phoneNumberPattern\">\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"form-box-inline\">\n" +
    "			<div class=\"form-box-input-label\">\n" +
    "				{{ 'op.mobile' | i18n }}\n" +
    "			</div>\n" +
    "\n" +
    "			<div oui-form-field-container class=\"form-field-container-phone\">\n" +
    "				<div oui-form-field-value>\n" +
    "					<input type=\"text\"\n" +
    "						name=\"telephone\"\n" +
    "						placeholder=\"{{ 'op.telPlaceholder' | i18n }}\"\n" +
    "						ng-model=\"personalInfoCtrl.currentUserModify.mobileNumber\"\n" +
    "						ng-required=\"false\"\n" +
    "						ng-pattern=\"personalInfoCtrl.phoneNumberPattern\">\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"form-box form-box-input\" oo-role-security=\"EXPERT\">\n" +
    "		<div class=\"form-box-input-label form-box-input-label-mandatory\">\n" +
    "			{{ 'op.address.required' | i18n }}\n" +
    "		</div>\n" +
    "\n" +
    "		<div oui-form-field-container class=\"form-field-container-inline form-field-container-inline-address\">\n" +
    "			<div oui-form-field-value>\n" +
    "					<input type=\"text\"\n" +
    "						name=\"streetAddress\"\n" +
    "						placeholder=\"{{ 'op.streetAddress' | i18n }}\"\n" +
    "						ng-model=\"personalInfoCtrl.currentUserModify.address.streetAddress\" ng-required=\"true\" ng-maxlength=\"192\" />\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div oui-form-field-container class=\"form-field-container-inline form-field-container-inline-address form-box-inline form-field-container-inline-postal\">\n" +
    "			<div oui-form-field-value>\n" +
    "					<input type=\"text\"\n" +
    "						name=\"postalCode\"\n" +
    "						placeholder=\"{{ 'op.postalCode' | i18n }}\"\n" +
    "						ng-model=\"personalInfoCtrl.currentUserModify.address.postalCode\" ng-required=\"true\" ng-maxlength=\"8\" />\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div oui-form-field-container class=\"form-field-container-inline form-field-container-inline-address form-box-inline form-field-container-inline-city\">\n" +
    "			<div oui-form-field-value>\n" +
    "					<input type=\"text\"\n" +
    "						name=\"city\"\n" +
    "						placeholder=\"{{ 'op.city' | i18n }}\"\n" +
    "						ng-model=\"personalInfoCtrl.currentUserModify.address.city\" ng-required=\"true\" ng-maxlength=\"32\" />\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"oo-form-field-container oo-dropdown oo-dropdown-holder form-field-container-inline form-box-relative\">\n" +
    "			<div class=\"oo-dropdown oo-dropdown-color oo-dropdown-title {{(personalInfoCtrl.currentUserModify.country===('op.countrySelectionHolder' | i18n))?'' : 'selected'}}\">\n" +
    "				{{ personalInfoCtrl.currentUserModify.country.label ? (personalInfoCtrl.currentUserModify.country.label | i18n) : personalInfoCtrl.currentUserModify.country }}\n" +
    "			</div>\n" +
    "			<i class=\"oo-icon icon-alert-circle-reverse icon-colored icon-colored-select-box\" oui-tooltip-text=\"i18n:oui.tooltip.error.mandatory\" ng-show=\"!personalInfoCtrl.currentUserModify.country.id\"></i>\n" +
    "			<i class=\"oo-icon oo-dropdown-after icon-nav-down\"></i>\n" +
    "			<select class=\"oo-dropdown oo-dropdown-color\" rel=\"dashboard-country\" ng-model=\"personalInfoCtrl.currentUserModify.country\" ng-options=\"(country.label | i18n) for country in personalInfoCtrl.countries\">\n" +
    "			</select>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"form-box form-box-input\" oo-role-security=\"MAGISTRATE CLERK LAWYER\">\n" +
    "		<div class=\"form-box-input-label\">\n" +
    "			{{ 'op.address' | i18n }}\n" +
    "		</div>\n" +
    "\n" +
    "		<div oui-form-field-container class=\"l-form-input-top-icon\">\n" +
    "			<div oui-form-field-value>\n" +
    "				<textarea name=\"textarea\"\n" +
    "							ng-model=\"personalInfoCtrl.currentUserModify.address\"\n" +
    "							ng-attr-placeholder=\"{{'op.addressPlaceholder' | i18n}}\"\n" +
    "							rows=\"3\" ng-maxlength=\"300\">\n" +
    "				</textarea>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"form-box form-box-input\" oo-role-security=\"MAGISTRATE CLERK LAWYER\">\n" +
    "		<div class=\"form-box-input-label\">\n" +
    "			{{ 'op.personal.info.subscribedToOtherPartiesNotifications' | i18n }}\n" +
    "		</div>\n" +
    "		<div class=\"form-radios-input\">\n" +
    "			<div class=\"form-radio-container\">\n" +
    "				<input id=\"subscribeToPartyNotificationsTrue\" type=\"radio\" ng-model=\"personalInfoCtrl.currentUserModify.subscribeToPartyNotifications\" name=\"subscribeToPartyNotifications\" ng-value=\"true\" />\n" +
    "				<label for=\"subscribeToPartyNotificationsTrue\">{{ 'common.yes' | i18n }}</label>\n" +
    "			</div>\n" +
    "			<div class=\"form-radio-container\">\n" +
    "				<input id=\"subscribeToPartyNotificationsFalse\" type=\"radio\" ng-model=\"personalInfoCtrl.currentUserModify.subscribeToPartyNotifications\" name=\"subscribeToPartyNotifications\" ng-value=\"false\" />\n" +
    "				<label for=\"subscribeToPartyNotificationsFalse\">{{ 'common.no' | i18n }}</label>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "\n" +
    "	<div class=\"form-box form-box-input\" oo-role-security=\"EXPERT\">\n" +
    "		<div class=\"form-box-input-label\">\n" +
    "			{{ 'op.courtSelection.mandatory' | i18n }}\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"oo-form-field-container oo-dropdown oo-dropdown-holder\">\n" +
    "			<div class=\"oo-dropdown oo-dropdown-color oo-dropdown-title {{(personalInfoCtrl.currentUserModify.selectCourtValue===('op.courtSelectionHolder' | i18n))?'' : 'selected'}}\">\n" +
    "				{{ personalInfoCtrl.currentUserModify.selectCourtValue.name ? personalInfoCtrl.currentUserModify.selectCourtValue.name : personalInfoCtrl.currentUserModify.selectCourtValue }}\n" +
    "			</div>\n" +
    "			<i class=\"oo-icon oo-dropdown-after icon-nav-down\"></i>\n" +
    "			<select class=\"oo-dropdown oo-dropdown-color\" rel=\"dashboard-courts\" ng-model=\"personalInfoCtrl.currentUserModify.selectCourtValue\" ng-options=\"court.name for court in personalInfoCtrl.courts\">\n" +
    "			</select>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"form-box form-box-input form-box-relative\" oo-role-security=\"EXPERT\">\n" +
    "		<div class=\"form-box-input-label\">\n" +
    "			{{ 'op.specialties.mandatory' | i18n }}\n" +
    "			<i class=\"oo-icon icon-alert-circle-reverse icon-colored\" oui-tooltip-text=\"i18n:oui.tooltip.error.mandatory\" ng-show=\"!personalInfoCtrl.isSpecialtiesSelected\"></i>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"oo-form-field-container oo-checkbox-multiple {{personalInfoCtrl.specialties.length>0?'oo-checkbox-multiple-scroll':''}}\">\n" +
    "			<div ng-if=\"!personalInfoCtrl.specialties || personalInfoCtrl.specialties.length==0\" class=\"oo-checkbox-multiple-empty\">\n" +
    "				<div class=\"oo-checkbox-multiple-icon\">\n" +
    "					<i class=\"opx-icon-expert\"></i>\n" +
    "				</div>\n" +
    "				{{'op.specialtiesEmpty' | i18n}}\n" +
    "			</div>\n" +
    "			<div ng-repeat=\"specialty in personalInfoCtrl.specialties\" ng-if=\"personalInfoCtrl.specialties && personalInfoCtrl.specialties.length>0\" class=\"oo-checkbox-multiple-list form-checkbox-container\" ng-class=\"{'oo-checkbox-selected' : specialty.selected}\">\n" +
    "				<input id=\"court-specialty-{{$index}}\" ng-model=\"specialty.selected\" type=\"checkbox\"/>\n" +
    "				<label for=\"court-specialty-{{$index}}\">{{specialty.name}}</label>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"form-box form-box-input\" oo-role-security=\"EXPERT\">\n" +
    "		<div class=\"form-box-input-label\">\n" +
    "			{{ 'op.nationalList' | i18n }}\n" +
    "		</div>\n" +
    "		<div class=\"form-radios-input\">\n" +
    "			<div class=\"form-radio-container\">\n" +
    "				<input id=\"nationalListTrue\" type=\"radio\" ng-model=\"personalInfoCtrl.currentUserModify.onNationalList\" name=\"nationalList\" ng-value=\"true\" />\n" +
    "				<label for=\"nationalListTrue\">{{ 'common.yes' | i18n }}</label>\n" +
    "			</div>\n" +
    "			<div class=\"form-radio-container\">\n" +
    "				<input id=\"nationalListFalse\" type=\"radio\" ng-model=\"personalInfoCtrl.currentUserModify.onNationalList\" name=\"nationalList\" ng-value=\"false\" />\n" +
    "				<label for=\"nationalListFalse\">{{ 'common.no' | i18n }}</label>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<!-- This is in comment to fix OPLX-1198 -->\n" +
    "	<!--<div class=\"form-box form-box-input\" oo-role-security=\"EXPERT MAGISTRATE CLERK LAWYER\">\n" +
    "		<div class=\"form-box-input-label\">\n" +
    "			{{ 'op.personal.info.deposite.notification' | i18n }}\n" +
    "		</div>\n" +
    "		<div class=\"form-radios-input\">\n" +
    "			<div class=\"form-radio-container\">\n" +
    "				<input id=\"depositeNotificationTrue\" type=\"radio\" ng-model=\"personalInfoCtrl.currentUserModify.depositeNotification\" name=\"depositeNotification\" ng-value=\"true\" />\n" +
    "				<label for=\"depositeNotificationTrue\">{{ 'common.yes' | i18n }}</label>\n" +
    "			</div>\n" +
    "			<div class=\"form-radio-container\">\n" +
    "				<input id=\"depositeNotificationFalse\" type=\"radio\" ng-model=\"personalInfoCtrl.currentUserModify.depositeNotification\" name=\"depositeNotification\" ng-value=\"false\" />\n" +
    "				<label for=\"depositeNotificationFalse\">{{ 'common.no' | i18n }}</label>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>-->\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<footer class=\"sidepanel-layout-footer\">\n" +
    "	<div class=\"l-pull-left\">\n" +
    "		{{ 'op.mandatory.signification' | i18n }}\n" +
    "	</div>\n" +
    "	<div class=\"l-pull-right\">\n" +
    "		<button class=\"oo-form-button op-btn-purple sidepanel-layout-footer-action\" rel=\"validate-notification\" oo-promise-click=\"personalInfoCtrl.validate()\" oo-loading-message-click=\"op.loading\"\n" +
    "			oo-original-message=\"common.submit\" ng-disabled=\"personalInfoCtrl.isFormInvalid()\">{{ 'common.submit' | i18n }}</button>\n" +
    "		<button class=\"oo-form-button op-btn-white sidepanel-layout-footer-action\" ng-click=\"personalInfoCtrl.cancel()\">{{ 'common.cancel' | i18n }}</button>\n" +
    "	</div>\n" +
    "</footer>\n" +
    "");
}]);

angular.module("app/personal-info/personal-info.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/personal-info/personal-info.tpl.html",
    "<div oui-sidepanel max-width=\"57em\">\n" +
    "	<div oui-sidepanel-page tpl=\"app/personal-info/personal-info_main.tpl.html\" dom-conserve></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/personal-info/personal-info_main.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/personal-info/personal-info_main.tpl.html",
    "<div class=\"sidepanel-layout-content sidepanel-dark l-personal-info\" ng-class=\"{'sidepanel-no-footer' : !personalInfoCtrl.modifyInformationMode}\" ng-controller=\"PersonalInfoCtrl as personalInfoCtrl\" ng-form=\"personalInfoCtrl.userForm\">\n" +
    "	<header class=\"sidepanel-layout-header\">\n" +
    "		<div class=\"sidepanel-layout-header-title\">{{ 'op.personal.info.title' | i18n }}</div>\n" +
    "		<div class=\"header-button-right\" ng-show=\"!personalInfoCtrl.modifyInformationMode\">\n" +
    "			<button class=\"oo-form-button op-btn-white ng-binding\" ng-click=\"personalInfoCtrl.modifyPersonalInfo()\">\n" +
    "				{{ 'op.personal.info.modify' | i18n }}\n" +
    "			</button>\n" +
    "		</div>\n" +
    "	</header>\n" +
    "\n" +
    "	<div ng-include=\"'app/personal-info/personal-info-show.tpl.html'\" class=\"sidepanel-layout-content-inner\" ng-show=\"!personalInfoCtrl.modifyInformationMode\"></div>\n" +
    "	<div ng-include=\"'app/personal-info/personal-info-update.tpl.html'\" class=\"sidepanel-layout-content-inner\" ng-show=\"personalInfoCtrl.modifyInformationMode\"></div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/user-form/user-form.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user-form/user-form.tpl.html",
    "<div oui-sidepanel max-width=\"70em\">\n" +
    "	<div oui-sidepanel-page tpl=\"app/user-form/user-form_main.tpl.html\" dom-conserve></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/user-form/user-form_main.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user-form/user-form_main.tpl.html",
    "<div class=\"sidepanel-layout-content sidepanel-dark l-user-form\" ng-controller=\"UserFormCtrl as userFormCtrl\" ng-form=\"userFormCtrl.userForm\">\n" +
    "	<header class=\"sidepanel-layout-header\">\n" +
    "		<div class=\"sidepanel-layout-header-title\">{{ userFormCtrl.title }}</div>\n" +
    "	</header>\n" +
    "\n" +
    "	<div class=\"sidepanel-layout-content-inner right-pane-wrapper\">\n" +
    "\n" +
    "		<div class=\"l-user-form-header\">\n" +
    "			<div class=\"l-user-form-header-icon\">\n" +
    "				<i class=\"oo-icon icon-user-circle\"/>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"l-user-form-header-inputs\">\n" +
    "				<div oui-form-field-container>\n" +
    "					<div oui-form-field-value>\n" +
    "						<input type=\"text\"\n" +
    "								name=\"firstName\"\n" +
    "								placeholder=\"{{ 'op.firstName' | i18n }}\"\n" +
    "								ng-model=\"userFormCtrl.currentUser.firstName\"\n" +
    "								ng-required=\"true\" ng-maxlength=\"128\"\n" +
    "								ng-model-options=\"{ debounce : { 'default' : 400 } }\"\n" +
    "								item-name-validation\n" +
    "								>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div oui-form-field-container>\n" +
    "					<div oui-form-field-value>\n" +
    "						<input type=\"text\"\n" +
    "								name=\"lastName\"\n" +
    "								placeholder=\"{{ 'op.lastName' | i18n }}\"\n" +
    "								ng-model=\"userFormCtrl.currentUser.lastName\"\n" +
    "								ng-required=\"true\" ng-maxlength=\"128\"\n" +
    "								ng-model-options=\"{ debounce : { 'default' : 400 } }\"\n" +
    "								item-name-validation\n" +
    "								>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"form-box form-box-input l-user-form-mobile\">\n" +
    "			<div class=\"lefted\">\n" +
    "				<div class=\"form-box-input-label\">\n" +
    "					{{ 'op.email' | i18n }}\n" +
    "				</div>\n" +
    "\n" +
    "				<div oui-form-field-container>\n" +
    "					<div oui-form-field-ico-label=\"enveloppe\" class=\"field-icon\"></div>\n" +
    "					<div oui-form-field-value>\n" +
    "						<input type=\"text\"\n" +
    "							name=\"email\"\n" +
    "							placeholder=\"{{ 'op.email' | i18n }}\"\n" +
    "							ng-model=\"userFormCtrl.currentUser.email\"\n" +
    "							ng-required=\"true\"\n" +
    "							ng-pattern=\"userFormCtrl.mailPattern\" ng-maxlength=\"92\"\n" +
    "							mail-validation\n" +
    "							>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"info-sms\">\n" +
    "				<i class=\"oo-icon icon-information-circle-reverse\"></i><span>{{ 'op.userForm.infoEmail' | i18n }}</span>\n" +
    "			</div>\n" +
    "\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"form-box form-box-input\">\n" +
    "			<div class=\"form-box-input-label\">\n" +
    "				{{ 'op.telephone' | i18n }}\n" +
    "			</div>\n" +
    "\n" +
    "			<div oui-form-field-container>\n" +
    "				<div oui-form-field-ico-label=\"phone\" class=\"field-icon\"></div>\n" +
    "				<div oui-form-field-value>\n" +
    "					<input type=\"text\"\n" +
    "						name=\"telephone\"\n" +
    "						placeholder=\"{{ 'op.telPlaceholder' | i18n }}\"\n" +
    "						ng-model=\"userFormCtrl.currentUser.phone\"\n" +
    "						ng-required=\"false\"\n" +
    "						ng-pattern=\"userFormCtrl.phoneNumberPattern\">\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"form-box form-box-input l-user-form-mobile\">\n" +
    "			<div class=\"lefted\">\n" +
    "				<div class=\"form-box-input-label\">\n" +
    "					{{ 'op.mobile' | i18n }}\n" +
    "				</div>\n" +
    "\n" +
    "				<div oui-form-field-container >\n" +
    "					<div oui-form-field-ico-label=\"device_smartphone2\" class=\"field-icon\"></div>\n" +
    "					<div oui-form-field-value>\n" +
    "						<input type=\"text\"\n" +
    "							name=\"mobile\"\n" +
    "							placeholder=\"{{ 'op.telPlaceholderMobile' | i18n }}\"\n" +
    "							ng-model=\"userFormCtrl.currentUser.mobile\"\n" +
    "							ng-required=\"false\"\n" +
    "							ng-pattern=\"userFormCtrl.phoneNumberPattern\">\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "\n" +
    "	<footer class=\"sidepanel-layout-footer\">\n" +
    "		<button\n" +
    "			class=\"oo-form-button op-btn-purple sidepanel-layout-footer-action\"\n" +
    "			rel=\"send-new-certificate\"\n" +
    "			ng-click=\"userFormCtrl.sendNewCertificate()\"\n" +
    "			ng-disabled=\"(userFormCtrl.expertiseStatus !== 'TAXATION_COMPLEMENT') || !userFormCtrl.userForm.$valid\"\n" +
    "			ng-show=\"userFormCtrl.userFormMode === 'MODIFY' && userFormCtrl.canRegenerateCert()\"\n" +
    "			oui-tooltip-text=\"{{ userFormCtrl.informationTooltip | i18n }}\"\n" +
    "		>{{ 'op.userForm.send.newCertificate' | i18n }}</button>\n" +
    "		<button class=\"oo-form-button op-btn-purple sidepanel-layout-footer-action\" rel=\"validate-notification\" oo-promise-click=\"userFormCtrl.validate()\" oo-loading-message-click=\"op.loading\"\n" +
    "			oo-original-message=\"common.submit\" ng-disabled=\"!userFormCtrl.userForm.$valid\">{{ 'common.submit' | i18n }}</button>\n" +
    "		<button class=\"oo-form-button op-btn-white sidepanel-layout-footer-action\" ng-click=\"close()\">{{ 'common.cancel' | i18n }}</button>\n" +
    "	</footer>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/users-directory/avengers-directory/avengers-directory.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/users-directory/avengers-directory/avengers-directory.tpl.html",
    "<div class=\"sidepanel-layout-content l-avengers-directory\" ng-class=\"{ 'sidepanel-no-footer': $parent.usersDirectoryCtrl.noActionBar }\" ng-controller=\"AvengersDirectoryCtrl as avengersDirectoryCtrl\">\n" +
    "	<div class=\"sidepanel-layout-header\">\n" +
    "		<div class=\"sidepanel-layout-header-title\">{{ 'op.users.directory.title' | i18n }}</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"sidepanel-layout-content-inner\" scroll-threshold=\"1000\">\n" +
    "		<div class=\"search-layout\">\n" +
    "			<div class=\"search-layout-form\">\n" +
    "				<div class=\"search-layout-form-wrapper\" scrollbar=\"{ axis: 'y', wheel: true }\">\n" +
    "					<div class=\"search-layout-form-title\">\n" +
    "						{{ 'op.users.directory.form.title.who' | i18n }}\n" +
    "					</div>\n" +
    "					<input type=\"text\"\n" +
    "						id=\"avenger-lastName\"\n" +
    "						name=\"name\"\n" +
    "						placeholder=\"{{ 'op.users.directory.form.placeholder.lastName' | i18n }}\"\n" +
    "						ng-model=\"avengersDirectoryCtrl.lastNameField\"\n" +
    "						class=\"search-layout-form-element\"\n" +
    "						key-enter=\"avengersDirectoryCtrl.search()\"\n" +
    "						/>\n" +
    "					<div ng-if=\"!label\" class=\"oo-form-field-label oo-label-visuallyhidden-with-placeholder ng-scope\">\n" +
    "						<div class=\"oo-form-field-label-inner\">\n" +
    "							<label for=\"avenger-lastName\"></label>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					\n" +
    "					<input type=\"text\"\n" +
    "						id=\"avenger-firstName\"\n" +
    "						name=\"name\"\n" +
    "						ng-model=\"avengersDirectoryCtrl.firstNameField\"\n" +
    "						placeholder=\"{{ 'op.users.directory.form.placeholder.firstName' | i18n }}\"\n" +
    "						class=\"search-layout-form-element\"\n" +
    "						key-enter=\"avengersDirectoryCtrl.search()\"\n" +
    "						/>\n" +
    "					<div ng-if=\"!label\" class=\"oo-form-field-label oo-label-visuallyhidden-with-placeholder ng-scope\">\n" +
    "						<div class=\"oo-form-field-label-inner\">\n" +
    "							<label for=\"avenger-firstName\"></label>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<input type=\"text\"\n" +
    "						id=\"avenger-email\"\n" +
    "						name=\"name\"\n" +
    "						ng-model=\"avengersDirectoryCtrl.emailField\"\n" +
    "						placeholder=\"{{ 'op.users.directory.form.placeholder.email' | i18n }}\"\n" +
    "						class=\"search-layout-form-element\"\n" +
    "						key-enter=\"avengersDirectoryCtrl.search()\"\n" +
    "						/>\n" +
    "					<div ng-if=\"!label\" class=\"oo-form-field-label oo-label-visuallyhidden-with-placeholder ng-scope\">\n" +
    "						<div class=\"oo-form-field-label-inner\">\n" +
    "							<label for=\"avenger-email\"></label>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"search-layout-form-actions\">\n" +
    "						<button rel=\"search-experts\" class=\"oo-form-button op-btn-brown\" oo-promise-click=\"avengersDirectoryCtrl.search()\" oo-loading-message-click=\"op.loading\"\n" +
    "						oo-original-message=\"op.users.directory.form.button.search\">{{ 'op.users.directory.form.button.search' | i18n }}</button>\n" +
    "						<button class=\"oo-form-button op-btn-gray\" ng-click=\"avengersDirectoryCtrl.reset()\">{{ 'op.users.directory.form.button.reset' | i18n }}</button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"search-layout-result\" lr-infinite-scroll=\"$parent.usersDirectoryCtrl.scrollHandler\">\n" +
    "				<div class=\"search-layout-result-wrapper\">\n" +
    "\n" +
    "					<div ng-show=\"$parent.usersDirectoryCtrl.users.length == undefined\" class=\"search-layout-result-welcome\">\n" +
    "						<p>{{ 'op.users.directory.result.undefined.title' | i18n }}</p>\n" +
    "						<i class=\"oo-icon icon-search\"></i>\n" +
    "					</div>\n" +
    "\n" +
    "					<div ng-show=\"$parent.usersDirectoryCtrl.users.length == 0\" class=\"search-layout-result-welcome\">\n" +
    "						<p>{{ 'op.users.directory.result.empty.title' | i18n }}</p>\n" +
    "						<i class=\"oo-icon icon-search\"></i>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"search-layout-result-experts\" ng-show=\"$parent.usersDirectoryCtrl.users.length\">\n" +
    "						<ul class=\"oot-table-list\" rel=\"experts-directory-results\">\n" +
    "							<li class=\"oot-table-list-row\"\n" +
    "								ng-repeat=\"avenger in $parent.usersDirectoryCtrl.users\"\n" +
    "								ng-class=\"{'oot-table-list-row-selected' : avenger.selected}\"\n" +
    "								ng-click=\"$parent.usersDirectoryCtrl.toggleSelection(avenger)\">\n" +
    "								<div class=\"oot-table-list-column checkbox-column\">\n" +
    "									<div class=\"oo-input op-checkbox op-checkbox-list\" id=\"oot-table-list-row-{{avenger.id}}\"\n" +
    "											ng-class=\"{'op-checkbox-hidden': $parent.usersDirectoryCtrl.noActionBar, checked: avenger.selected}\" ng-model=\"avenger.selected\"\n" +
    "									></div>\n" +
    "								</div>\n" +
    "\n" +
    "								<label class=\"oot-table-list-column\" for=\"oot-table-list-row-{{avenger.id}}\">\n" +
    "									<ul class=\"user-card\">\n" +
    "										<li class=\"user-card-name\">\n" +
    "											<i class=\"oo-icon icon-user-circle user-card-icon\"></i>\n" +
    "											<span ng-bind-html=\"avenger.lastName.toUpperCase() | highlight: avengersDirectoryCtrl.lastName\"></span>\n" +
    "											<span ng-bind-html=\"avenger.firstName | highlight: avengersDirectoryCtrl.firstName\"></span>\n" +
    "										</li>\n" +
    "										<li><i class=\"oo-icon icon-device-smartphone\"></i>{{avenger.phoneNumber}}</li>\n" +
    "										<li><i class=\"oo-icon icon-email\"></i>\n" +
    "											<span ng-bind-html=\"avenger.email | highlight: avengersDirectoryCtrl.email\"></span>\n" +
    "										</li>\n" +
    "									</ul>\n" +
    "								</label>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"search-layout-result-header\" ng-show=\"$parent.usersDirectoryCtrl.users.length>0\">\n" +
    "						<div oui-collection-header>\n" +
    "							<div oui-collection-header-content class=\"bn-searchresults-list-title\">\n" +
    "								<span class=\"oo-text\">\n" +
    "									{{ 'op.users.directory.result.data.title' | i18n }}\n" +
    "\n" +
    "									{{avengersDirectoryCtrl.searchedFullName()}}\n" +
    "								</span>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"sidepanel-layout-footer\">\n" +
    "		<button class=\"oo-form-button op-btn-green sidepanel-layout-footer-action\" ng-click=\"$parent.usersDirectoryCtrl.select()\" ng-disabled=\"$parent.usersDirectoryCtrl.isSelectDisabled()\">{{ $parent.usersDirectoryCtrl.validationMessage | i18n }}</button>\n" +
    "		<button class=\"oo-form-button op-btn-white sidepanel-layout-footer-action\" ng-click=\"$parent.usersDirectoryCtrl.cancel()\">{{'common.cancel' | i18n}}</button>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/users-directory/experts-directory/experts-directory.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/users-directory/experts-directory/experts-directory.tpl.html",
    "<div class=\"sidepanel-layout-content\" ng-class=\"{ 'sidepanel-no-footer': $parent.usersDirectoryCtrl.noActionBar }\" ng-controller=\"ExpertsDirectoryCtrl as expertsDirectoryCtrl\">\n" +
    "	<div class=\"sidepanel-layout-header\">\n" +
    "		<div class=\"sidepanel-layout-header-title\">{{ 'op.experts.directory.title' | i18n }}</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"sidepanel-layout-content-inner\" scroll-threshold=\"1000\">\n" +
    "		<div class=\"search-layout\">\n" +
    "			<div class=\"search-layout-form\">\n" +
    "				<div class=\"search-layout-form-wrapper flex-wrapper\" scrollbar=\"{ axis: 'y', wheel: true }\">\n" +
    "					<div class=\"search-layout-form-title\">\n" +
    "						{{ 'op.users.directory.form.title.who' | i18n }}\n" +
    "					</div>\n" +
    "					<input type=\"text\"\n" +
    "						id=\"expert-lastname\"\n" +
    "						name=\"name\"\n" +
    "						placeholder=\"{{ 'op.users.directory.form.placeholder.lastName' | i18n }}\"\n" +
    "						ng-model=\"expertsDirectoryCtrl.lastNameField\"\n" +
    "						class=\"search-layout-form-element\"\n" +
    "						key-enter=\"expertsDirectoryCtrl.search()\"\n" +
    "					>\n" +
    "					<div ng-if=\"!label\" class=\"oo-form-field-label oo-label-visuallyhidden-with-placeholder ng-scope\">\n" +
    "						<div class=\"oo-form-field-label-inner\">\n" +
    "							<label for=\"expert-lastname\"></label>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<input type=\"text\"\n" +
    "						id=\"expert-firstName\"\n" +
    "						name=\"name\"\n" +
    "						ng-model=\"expertsDirectoryCtrl.firstNameField\"\n" +
    "						placeholder=\"{{ 'op.users.directory.form.placeholder.firstName' | i18n }}\"\n" +
    "						class=\"search-layout-form-element\"\n" +
    "						key-enter=\"expertsDirectoryCtrl.search()\"\n" +
    "							>\n" +
    "					<div ng-if=\"!label\" class=\"oo-form-field-label oo-label-visuallyhidden-with-placeholder ng-scope\">\n" +
    "						<div class=\"oo-form-field-label-inner\">\n" +
    "							<label for=\"expert-firstName\"></label>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"search-layout-form-title\">\n" +
    "						{{ 'op.users.directory.form.title.courts' | i18n }}\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"search-layout-form-element oo-form-field-container oo-checkbox-multiple flex-element-grow \"\n" +
    "							scrollbar=\"{ axis: 'y', wheel: true }\" op-scrollbar=\"expertsDirectoryCtrl.courts\"\n" +
    "							>\n" +
    "						<div class=\"oo-checkbox-multiple-list form-checkbox-container\"\n" +
    "								ng-repeat=\"court in expertsDirectoryCtrl.courts\"\n" +
    "								ng-if=\"expertsDirectoryCtrl.courts\"\n" +
    "								ng-class=\"{'oo-checkbox-selected' : court.selected}\">\n" +
    "							<input id=\"court-{{$index}}\" type=\"checkbox\" ng-model=\"court.selected\" key-enter=\"expertsDirectoryCtrl.search()\"/>\n" +
    "							<label for=\"court-{{$index}}\">{{court.name}}</label>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"search-layout-form-title\">\n" +
    "						{{ 'op.users.directory.form.title.specialties' | i18n }}\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"search-layout-form-element oo-form-field-container oo-checkbox-multiple flex-element-grow \"\n" +
    "							scrollbar=\"{ axis: 'y', wheel: true, thumbSize: 20 }\" op-scrollbar=\"expertsDirectoryCtrl.specialties\"\n" +
    "							>\n" +
    "\n" +
    "						<div ng-if=\"!expertsDirectoryCtrl.specialties || expertsDirectoryCtrl.specialties.length==0\" class=\"oo-checkbox-multiple-empty\">\n" +
    "							<div class=\"oo-checkbox-multiple-icon\">\n" +
    "								<i class=\"opx-icon-expert\"></i>\n" +
    "							</div>\n" +
    "							{{'op.users.directory.specialties.empty' | i18n}}\n" +
    "						</div>\n" +
    "\n" +
    "						<div class=\"oo-checkbox-multiple-list form-checkbox-container\"\n" +
    "								ng-repeat=\"specialty in expertsDirectoryCtrl.specialties\" ng-if=\"expertsDirectoryCtrl.specialties\"\n" +
    "								ng-class=\"{'oo-checkbox-selected' : specialty.selected}\">\n" +
    "							<input id=\"court-specialty-{{$index}}\" ng-model=\"specialty.selected\" type=\"checkbox\" key-enter=\"expertsDirectoryCtrl.search()\"/>\n" +
    "							<label for=\"court-specialty-{{$index}}\">{{specialty.name}}</label>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"search-layout-form-actions\">\n" +
    "						<button rel=\"search-experts\" class=\"oo-form-button op-btn-brown\" oo-promise-click=\"expertsDirectoryCtrl.search()\" oo-loading-message-click=\"op.loading\"\n" +
    "						oo-original-message=\"op.users.directory.form.button.search\">{{ 'op.users.directory.form.button.search' | i18n }}</button>\n" +
    "						<button class=\"oo-form-button op-btn-gray\" ng-click=\"expertsDirectoryCtrl.reset()\">{{ 'op.users.directory.form.button.reset' | i18n }}</button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"search-layout-result\" lr-infinite-scroll=\"$parent.usersDirectoryCtrl.scrollHandler\">\n" +
    "				<div class=\"search-layout-result-wrapper\">\n" +
    "\n" +
    "					<div ng-show=\"$parent.usersDirectoryCtrl.users.length == undefined\" class=\"search-layout-result-welcome\">\n" +
    "						<p>{{ 'op.experts.directory.result.undefined.title' | i18n }}</p>\n" +
    "						<i class=\"oo-icon icon-search\"></i>\n" +
    "					</div>\n" +
    "\n" +
    "					<div ng-show=\"$parent.usersDirectoryCtrl.users.length == 0\" class=\"search-layout-result-welcome\">\n" +
    "						<p>{{ 'op.users.directory.result.empty.title' | i18n }}</p>\n" +
    "						<i class=\"oo-icon icon-search\"></i>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"search-layout-result-experts\" ng-show=\"$parent.usersDirectoryCtrl.users.length\">\n" +
    "						<ul class=\"oot-table-list\" rel=\"experts-directory-results\">\n" +
    "							<li class=\"oot-table-list-row\"\n" +
    "								ng-repeat=\"expert in $parent.usersDirectoryCtrl.users\"\n" +
    "								ng-class=\"{'oot-table-list-row-selected' : expert.selected}\"\n" +
    "								ng-click=\"$parent.usersDirectoryCtrl.toggleSelection(expert)\">\n" +
    "								<div class=\"oot-table-list-column checkbox-column\">\n" +
    "									<div class=\"oo-input op-checkbox op-checkbox-list\" ng-class=\"{ 'op-checkbox-hidden': $parent.usersDirectoryCtrl.noActionBar, checked: expert.selected }\"\n" +
    "										id=\"oot-table-list-row-{{expert.id}}\" ng-model=\"expert.selected\"\n" +
    "									></div>\n" +
    "								</div>\n" +
    "\n" +
    "								<label class=\"oot-table-list-column\" for=\"oot-table-list-row-{{expert.id}}\">\n" +
    "									<ul class=\"user-card\">\n" +
    "										<li class=\"user-card-name\">\n" +
    "											<i class=\"oo-icon icon-user-circle user-card-icon\"></i>\n" +
    "											<span ng-bind-html=\"expert.lastName.toUpperCase() | highlight: expertsDirectoryCtrl.lastName\"></span>\n" +
    "											<span ng-bind-html=\"expert.firstName | highlight: expertsDirectoryCtrl.firstName\"></span>\n" +
    "											<i ng-show=\"expert.onNationalList\" class=\"opx-icon-supreme-court\" />\n" +
    "										</li>\n" +
    "										<li><i class=\"oo-icon icon-device-smartphone\"></i>{{expert.phoneNumber}}</li>\n" +
    "										<li><i class=\"oo-icon icon-court\"></i>{{expert._embedded.court.name}}</li>\n" +
    "										<li><i class=\"oo-icon icon-email\"></i>\n" +
    "											<span>{{expert.email}}</span>\n" +
    "										</li>\n" +
    "										<li oui-tooltip-text=\"{{expertsDirectoryCtrl.getSpecialties(expert)}}\">\n" +
    "											<i class=\"opx-icon-expert\"></i>{{expertsDirectoryCtrl.getSpecialties(expert)}}\n" +
    "										</li>\n" +
    "									</ul>\n" +
    "								</label>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"search-layout-result-header\" ng-show=\"$parent.usersDirectoryCtrl.users.length>0\">\n" +
    "						<div oui-collection-header>\n" +
    "							<div oui-collection-header-content class=\"bn-searchresults-list-title\">\n" +
    "								<span class=\"oo-text\">\n" +
    "									{{ 'op.users.directory.result.data.title' | i18n }}\n" +
    "\n" +
    "									{{expertsDirectoryCtrl.searchedFullName()}}\n" +
    "								</span>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"sidepanel-layout-footer\">\n" +
    "		<button class=\"oo-form-button op-btn-green sidepanel-layout-footer-action\" ng-click=\"$parent.usersDirectoryCtrl.select()\" ng-disabled=\"$parent.usersDirectoryCtrl.isSelectDisabled()\">{{ $parent.usersDirectoryCtrl.validationMessage | i18n }}</button>\n" +
    "		<button class=\"oo-form-button op-btn-white sidepanel-layout-footer-action\" ng-click=\"$parent.usersDirectoryCtrl.cancel()\">{{'common.cancel' | i18n}}</button>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/users-directory/lawyers-directory/lawyers-directory.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/users-directory/lawyers-directory/lawyers-directory.tpl.html",
    "<div class=\"sidepanel-layout-content l-lawyers-directory\" ng-class=\"{ 'sidepanel-no-footer': $parent.usersDirectoryCtrl.noActionBar }\" ng-controller=\"LawyersDirectoryCtrl as lawyersDirectoryCtrl\">\n" +
    "	<div class=\"sidepanel-layout-header\">\n" +
    "		<div class=\"sidepanel-layout-header-title\">{{ 'op.users.directory.title' | i18n }} </div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"sidepanel-layout-content-inner\" scroll-threshold=\"1000\">\n" +
    "		<div class=\"search-layout\">\n" +
    "			<div class=\"search-layout-form\">\n" +
    "				<div class=\"search-layout-form-wrapper\" scrollbar=\"{ axis: 'y', wheel: true }\">\n" +
    "					<div class=\"search-layout-form-title\">\n" +
    "						{{ 'op.users.directory.form.title.who' | i18n }}\n" +
    "					</div>\n" +
    "					<input type=\"text\"\n" +
    "						id=\"lawyer-lastName\"\n" +
    "						name=\"name\"\n" +
    "						placeholder=\"{{ 'op.users.directory.form.placeholder.lastName' | i18n }}\"\n" +
    "						ng-model=\"lawyersDirectoryCtrl.lastNameField\"\n" +
    "						class=\"search-layout-form-element\"\n" +
    "						key-enter=\"lawyersDirectoryCtrl.search()\"\n" +
    "					/>\n" +
    "					<div ng-if=\"!label\" class=\"oo-form-field-label oo-label-visuallyhidden-with-placeholder ng-scope\">\n" +
    "						<div class=\"oo-form-field-label-inner\">\n" +
    "							<label for=\"lawyer-lastName\"></label>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<input type=\"text\"\n" +
    "						id=\"lawyer-firstName\"\n" +
    "						name=\"name\"\n" +
    "						ng-model=\"lawyersDirectoryCtrl.firstNameField\"\n" +
    "						placeholder=\"{{ 'op.users.directory.form.placeholder.firstName' | i18n }}\"\n" +
    "						class=\"search-layout-form-element\"\n" +
    "						key-enter=\"lawyersDirectoryCtrl.search()\"\n" +
    "					/>\n" +
    "					<div ng-if=\"!label\" class=\"oo-form-field-label oo-label-visuallyhidden-with-placeholder ng-scope\">\n" +
    "						<div class=\"oo-form-field-label-inner\">\n" +
    "							<label for=\"lawyer-firstName\"></label>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<input type=\"text\"\n" +
    "						id=\"lawyer-email\"\n" +
    "						name=\"name\"\n" +
    "						ng-model=\"lawyersDirectoryCtrl.emailField\"\n" +
    "						placeholder=\"{{ 'op.users.directory.form.placeholder.email' | i18n }}\"\n" +
    "						class=\"search-layout-form-element\"\n" +
    "						key-enter=\"lawyersDirectoryCtrl.search()\"\n" +
    "					/>\n" +
    "					<div ng-if=\"!label\" class=\"oo-form-field-label oo-label-visuallyhidden-with-placeholder ng-scope\">\n" +
    "						<div class=\"oo-form-field-label-inner\">\n" +
    "							<label for=\"lawyer-email\"></label>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"search-layout-form-actions\">\n" +
    "						<button rel=\"search-experts\" class=\"oo-form-button op-btn-brown\" oo-promise-click=\"lawyersDirectoryCtrl.search()\" oo-loading-message-click=\"op.loading\"\n" +
    "						oo-original-message=\"op.users.directory.form.button.search\">{{ 'op.users.directory.form.button.search' | i18n }}</button>\n" +
    "						<button class=\"oo-form-button op-btn-gray\" ng-click=\"lawyersDirectoryCtrl.reset()\">{{ 'op.users.directory.form.button.reset' | i18n }}</button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"search-layout-result\" lr-infinite-scroll=\"$parent.usersDirectoryCtrl.scrollHandler\">\n" +
    "				<div class=\"search-layout-result-wrapper\">\n" +
    "\n" +
    "					<div ng-show=\"$parent.usersDirectoryCtrl.users.length == undefined\" class=\"search-layout-result-welcome\">\n" +
    "						<p>{{ 'op.users.directory.result.undefined.title' | i18n }}</p>\n" +
    "						<i class=\"oo-icon icon-search\"></i>\n" +
    "					</div>\n" +
    "\n" +
    "					<div ng-show=\"$parent.usersDirectoryCtrl.users.length == 0\" class=\"search-layout-result-welcome\">\n" +
    "						<p>{{ 'op.users.directory.result.empty.title' | i18n }}</p>\n" +
    "						<i class=\"oo-icon icon-search\"></i>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"search-layout-result-experts\" ng-show=\"$parent.usersDirectoryCtrl.users.length\">\n" +
    "						<ul class=\"oot-table-list\" rel=\"experts-directory-results\">\n" +
    "							<li class=\"oot-table-list-row\"\n" +
    "								ng-repeat=\"lawyer in $parent.usersDirectoryCtrl.users\"\n" +
    "								ng-class=\"{'oot-table-list-row-selected' : lawyer.selected}\"\n" +
    "								ng-click=\"$parent.usersDirectoryCtrl.toggleSelection(lawyer)\">\n" +
    "								<div class=\"oot-table-list-column checkbox-column\">\n" +
    "									<div class=\"oo-input op-checkbox op-checkbox-list\" id=\"oot-table-list-row-{{lawyer.id}}\"\n" +
    "											ng-class=\"{'op-checkbox-hidden': $parent.usersDirectoryCtrl.noActionBar, checked: lawyer.selected}\" ng-model=\"lawyer.selected\"\n" +
    "									></div>\n" +
    "								</div>\n" +
    "\n" +
    "								<label class=\"oot-table-list-column\" for=\"oot-table-list-row-{{lawyer.id}}\">\n" +
    "									<ul class=\"user-card\">\n" +
    "										<li class=\"user-card-name\">\n" +
    "											<i class=\"oo-icon icon-user-circle user-card-icon\"></i>\n" +
    "											<span ng-bind-html=\"lawyer.lastName.toUpperCase() | highlight: lawyersDirectoryCtrl.lastName\"></span>\n" +
    "											<span ng-bind-html=\"lawyer.firstName | highlight: lawyersDirectoryCtrl.firstName\"></span>\n" +
    "										</li>\n" +
    "										<li><i class=\"oo-icon icon-device-smartphone\"></i>{{lawyer.phoneNumber}}</li>\n" +
    "										<li><i class=\"oo-icon icon-email\"></i>\n" +
    "											<span ng-bind-html=\"lawyer.email | highlight: lawyersDirectoryCtrl.email\"></span>\n" +
    "										</li>\n" +
    "									</ul>\n" +
    "								</label>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"search-layout-result-header\" ng-show=\"$parent.usersDirectoryCtrl.users.length>0\">\n" +
    "						<div oui-collection-header>\n" +
    "							<div oui-collection-header-content class=\"bn-searchresults-list-title\">\n" +
    "								<span class=\"oo-text\">\n" +
    "									{{ 'op.users.directory.result.data.title' | i18n }}\n" +
    "\n" +
    "									{{lawyersDirectoryCtrl.searchedFullName()}}\n" +
    "								</span>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"sidepanel-layout-footer\">\n" +
    "		<button class=\"oo-form-button op-btn-green sidepanel-layout-footer-action\" ng-click=\"lawyersDirectoryCtrl.selectMultiParties()\" ng-disabled=\"$parent.usersDirectoryCtrl.isSelectDisabled()\">{{ 'op.users.directory.lawyers.add.parties' | i18n }}</button>\n" +
    "		<button class=\"oo-form-button op-btn-green sidepanel-layout-footer-action\" ng-click=\"lawyersDirectoryCtrl.selectSingleParty()\" ng-disabled=\"$parent.usersDirectoryCtrl.isSelectDisabled()\">{{ 'op.users.directory.lawyers.add.party' | i18n }}</button>\n" +
    "		<button class=\"oo-form-button op-btn-white sidepanel-layout-footer-action\" ng-click=\"$parent.usersDirectoryCtrl.cancel()\">{{'common.cancel' | i18n}}</button>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/users-directory/users-directory.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/users-directory/users-directory.tpl.html",
    "<div oui-sidepanel max-width=\"120em\">\n" +
    "	<div oui-sidepanel-page tpl=\"app/users-directory/users-directory_main.tpl.html\" dom-conserve></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/users-directory/users-directory_main.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/users-directory/users-directory_main.tpl.html",
    "<div class=\"l-users-directory\" ng-controller=\"UsersDirectoryCtrl as usersDirectoryCtrl\" ng-include=\"usersDirectoryCtrl.currentTemplate\" ></div>\n" +
    "");
}]);

angular.module("common/oo-tabs-directive/oo-tab-directive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/oo-tabs-directive/oo-tab-directive.tpl.html",
    "<div class=\"tab-pane\" ng-show=\"selected\" ng-transclude></div>");
}]);

angular.module("common/oo-tabs-directive/oo-tabs-directive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/oo-tabs-directive/oo-tabs-directive.tpl.html",
    "<div class=\"op-tabs-tabs-container\">\n" +
    "	<ul class=\"op-tabs-list-tabs\">\n" +
    "		<li ng-repeat=\"tab in tabsContainerCtrl.tabsArray\" ng-class=\"{'op-tabs-tab-active':tab.selected}\">\n" +
    "			<a href=\"\" ng-click=\"tabsContainerCtrl.select(tab)\">{{tab.titleTab | i18n}}</a>\n" +
    "			</li>\n" +
    "		</ul>\n" +
    "	<div class=\"op-tabs-tab-content\" ng-transclude></div>\n" +
    "</div>");
}]);

angular.module("common/op-browse/op-browse-directive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/op-browse/op-browse-directive.tpl.html",
    "<script type=\"text/ng-template\"	id=\"op-browse-tree\">\n" +
    "	<div class=\"op-browse-wrapper\" ng-class=\"{'op-browse-tree-selected': vm.isSelected(folder) }\"\n" +
    "		ng-click=\"vm.browse(folder)\">\n" +
    "		<span class=\"op-browse-tree-item\">\n" +
    "\n" +
    "			<!-- Clicking on this element toggles the folder -->\n" +
    "			<span class=\"op-browse-tree-toggle\"\n" +
    "				ng-class=\"{'op-browse-tree-toggle-expanded': folder.expanded }\"\n" +
    "				ng-hide=\"folder.isLeaf\"\n" +
    "				ng-click=\"$event.stopPropagation(); vm.toggle(folder)\">\n" +
    "					<i class=\"oo-icon icon-nav-next\"/>\n" +
    "			</span>\n" +
    "\n" +
    "			<!-- Clicking on this element browses the folder -->\n" +
    "			<span class=\"op-browse-tree-item-name\" data-id=\"{{folder.id}}\">\n" +
    "				<i class=\"oo-icon icon-{{folder.icon || 'folder'}}\" ng-class=\"{'non-dematerialized-folder': folder.model.nonDematerializedPartyRootFolder}\"/>\n" +
    "				<span class=\"op-browse-tree-item-name-text\" ng-if=\"folder.model.nonDematerializedPartyRootFolder\">{{folder.name + \" - \"}}{{'op.safe.nonDematerializedLabel' | i18n}}</span>\n" +
    "				<span class=\"op-browse-tree-item-name-text\" ng-if=\"!folder.model.nonDematerializedPartyRootFolder\">{{folder.name}}</span>\n" +
    "			</span>\n" +
    "		</span>\n" +
    "	</div>\n" +
    "	<ul class=\"op-browse-tree\" ng-show=\"folder.expanded\">\n" +
    "			<li ng-repeat=\"folder in folder.folders\"\n" +
    "					ng-include=\"'op-browse-tree'\"/>\n" +
    "	</ul>\n" +
    "</script>\n" +
    "\n" +
    "<ul class=\"op-browse\">\n" +
    "	<li ng-repeat=\"folder in vm.root.folders\" ng-include=\"'op-browse-tree'\"/>\n" +
    "</ul>\n" +
    "");
}]);

angular.module("common/op-collapse/op-collapse-directive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/op-collapse/op-collapse-directive.tpl.html",
    "<div class=\"op-collapse\">\n" +
    "	<div class=\"op-collapse-title\" ng-click=\"vm.collapsed = !vm.collapsed\">{{ vm.title }}<i class=\"oo-icon\" ng-class=\"{ 'icon-nav-up': vm.collapsed, 'icon-nav-down': !vm.collapsed }\"></i></div>\n" +
    "	<div class=\"op-collapse-content\" ng-hide=\"vm.collapsed\" ng-transclude></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("common/op-list-selection/op-list-selection-directive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/op-list-selection/op-list-selection-directive.tpl.html",
    "<div class=\"op-selection\" ng-mouseover=\"vm.hovered = true\" ng-mouseleave=\"vm.hovered = false\">\n" +
    "	<span class=\"op-checkbox\" ng-click=\"vm.toggle()\" ng-class=\"vm.state.cls\"></span>\n" +
    "	<span class=\"op-selection-number\">{{ vm.count }}</span>\n" +
    "	<span class=\"oo-icon icon-nav-down\"></span>\n" +
    "\n" +
    "	<ul class=\"op-selection-list\" ng-show=\"vm.hovered\" ng-mouseover=\"vm.hovered = true\">\n" +
    "		<li ng-click=\"vm.setState('full')\">{{ 'op.list.selection.all' | i18n }}</li>\n" +
    "		<li ng-click=\"vm.setState('empty')\">{{ 'op.list.selection.none' | i18n }}</li>\n" +
    "	</ul>\n" +
    "</div>\n" +
    "");
}]);

angular.module("common/op-search-directive/op-search-directive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/op-search-directive/op-search-directive.tpl.html",
    "<div class=\"l-search-header\">\n" +
    "	<div class=\"header-fields\">\n" +
    "		<div class=\"op-search-field\">\n" +
    "			<input type=\"text\" id=\"searchValue\" class=\"l-search-field-input\"\n" +
    "				name=\"searchValue\" ng-model=\"searchCtrl.searchValue\"\n" +
    "				placeholder=\"{{ 'op.search.field.placeholder' | i18n }}\"\n" +
    "				key-enter=\"searchCtrl.submit()\" />\n" +
    "			<div ng-if=\"!label\"\n" +
    "				class=\"oo-form-field-label oo-label-visuallyhidden-with-placeholder ng-scope\">\n" +
    "				<div class=\"oo-form-field-label-inner\">\n" +
    "					<label for=\"searchValue\"></label>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"op-search-field op-search-field-type\"\n" +
    "			ng-show=\"searchCtrl.showTypeList\">\n" +
    "			<input id=\"searchCtrl-type\" ng-model=\"searchCtrl.searchType.text\"\n" +
    "				readonly\n" +
    "				ng-click=\"searchCtrl.searchOpened = !searchCtrl.searchOpened\" />\n" +
    "			<div ng-if=\"!label\"\n" +
    "				class=\"oo-form-field-label oo-label-visuallyhidden-with-placeholder ng-scope\">\n" +
    "				<div class=\"oo-form-field-label-inner\">\n" +
    "					<label for=\"searchCtrl-type\"></label>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<span class=\"op-search-type-title oo-icon icon-nav-down\"></span>\n" +
    "			<ul class=\"op-search-type-list\"\n" +
    "				ng-class=\"searchCtrl.searchOpened ? 'op-search-type-opened' : ''\"\n" +
    "				ng-mouseleave=\"searchCtrl.searchOpened = false\">\n" +
    "				<li ng-click=\"searchCtrl.setSearchType($event)\"\n" +
    "					data-search-type=\"NAME\">{{ 'op.search.type.name' | i18n }}</li>\n" +
    "				<li ng-click=\"searchCtrl.setSearchType($event)\"\n" +
    "					data-search-type=\"ITEMS\">{{ 'op.search.type.item' | i18n }}</li>\n" +
    "				<li ng-click=\"searchCtrl.setSearchType($event)\"\n" +
    "					data-search-type=\"USERS\">{{ 'op.search.type.user' | i18n }}</li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "		<div class=\"op-search-action\">\n" +
    "			<button class=\"oo-form-button op-search-button op-btn-purple\"\n" +
    "				ng-click=\"searchCtrl.submit()\">{{'op.search.submit' |\n" +
    "				i18n}}</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"l-search-content\">\n" +
    "	<div class=\"l-search-list-layout-empty\"\n" +
    "		ng-show=\"!searchCtrl.searchDone || !searchCtrl.searchResults.length > 0\">\n" +
    "		<p ng-show=\"!searchCtrl.searchDone\">{{ 'op.search.launch.action' |\n" +
    "			i18n }}</p>\n" +
    "		<p\n" +
    "			ng-show=\"searchCtrl.searchDone && !searchCtrl.searchResults.length > 0\">{{\n" +
    "			'op.search.result.empty.title' | i18n }}</p>\n" +
    "		<i class=\"oo-icon icon-search\"></i>\n" +
    "	</div>\n" +
    "	<div class=\"search-result-list\"\n" +
    "		ng-show=\"searchCtrl.searchDone && searchCtrl.searchResults.length > 0\">\n" +
    "		<div class=\"search-result-list-header-title\">\n" +
    "			{{ 'op.search.result.title' | i18n }} > <span\n" +
    "				class=\"search-result-list-header-value\"> {{\n" +
    "				searchCtrl.searchedValue }}</span>\n" +
    "		</div>\n" +
    "		<div class=\"search-result-list-content\">\n" +
    "			<div class=\"search-list-layout-content\"\n" +
    "				ng-repeat=\"resultSearch in searchCtrl.searchResults\"\n" +
    "				ng-if=\"searchCtrl.showTypeList\">\n" +
    "				<div class=\"oot-table-list oot-table-list-basic l-search-name\">\n" +
    "					<div class=\"oot-table-list-row\"\n" +
    "						ng-click=\"searchCtrl.openExpertiseDetails(resultSearch.id)\">\n" +
    "						<div class=\"oot-table-list-column\">\n" +
    "							<i class=\"oo-input opx-icon-justice animation-icon\"></i> <span\n" +
    "								ng-if=\"searchCtrl.searchType.id === 'NAME'\"\n" +
    "								ng-bind-html=\"resultSearch.name | highlight: searchCtrl.highlight\"></span>\n" +
    "							<span ng-if=\"searchCtrl.searchType.id !== 'NAME'\">{{\n" +
    "								resultSearch.name }}</span>\n" +
    "						</div>\n" +
    "						<div class=\"oot-table-list-column oot-table-list-column-sized\">\n" +
    "							<i class=\"opx-icon-user-judge\"></i> <span\n" +
    "								ng-show=\"resultSearch.magistrateFullName\">{{resultSearch.magistrateFullName}}</span>\n" +
    "							<span ng-hide=\"resultSearch.magistrateFullName\">{{\n" +
    "								'op.leworkspace.expertises.noAvenger' | i18n }}</span>\n" +
    "						</div>\n" +
    "						<div class=\"oot-table-list-column oot-table-list-column-sized\">\n" +
    "							<i class=\"opx-icon opx-icon-euro-circle-reverse\"></i> <span\n" +
    "								ng-show=\"resultSearch.taxationDate\">{{resultSearch.taxationDate\n" +
    "								| date: 'fullDate' : timezone}}</span> <span\n" +
    "								ng-hide=\"resultSearch.taxationDate\">{{\n" +
    "								'op.expertises.waitingTax' | i18n }}</span>\n" +
    "						</div>\n" +
    "						<div class=\"oot-table-list-column\">\n" +
    "							<i\n" +
    "								class=\"oo-icon icon-indicator-corner-top-right le-workspace-page-button-inf\"\n" +
    "								ng-class=\"searchCtrl.selectColorByStatus(resultSearch.status)\"></i>\n" +
    "							<i class=\"oo-icon workspace-page-expertise-button-sup\"\n" +
    "								ng-class=\"'icon-'+searchCtrl.selectIconByStatus(resultSearch.status)\"></i>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<ul class=\"oot-table-list oot-table-list-basic l-search-items\"\n" +
    "					ng-show=\"resultSearch._embedded.items.length\">\n" +
    "					<li class=\"oot-table-list-row l-search-result-items\"\n" +
    "						ng-repeat=\"item in resultSearch._embedded.items\"\n" +
    "						ng-include=\"'op-search-items-columns'\"></li>\n" +
    "				</ul>\n" +
    "				<ul class=\"oot-table-list oot-table-list-basic l-search-persons\"\n" +
    "					ng-show=\"resultSearch._embedded.users.length\">\n" +
    "					<li class=\"oot-table-list-row l-search-result-persons\"\n" +
    "						ng-repeat=\"user in resultSearch._embedded.users\"\n" +
    "						ng-click=\"searchCtrl.openExpertiseDetailsPage(resultSearch.id, resultSearch.isAdmin)\">\n" +
    "						<div class=\"oot-table-list-column oot-table-list-column-user-name\">\n" +
    "							<i class=\"oo-icon icon-user-circle icon-user-name\"></i> <span\n" +
    "								class=\"l-search-item-user\"\n" +
    "								ng-bind-html=\"user.fullName | highlight: searchCtrl.highlight\">{{\n" +
    "								user.fullName }} ({{ 'op.' + user.role.toLowerCase() | i18n }})</span>\n" +
    "						</div>\n" +
    "						<div class=\"oot-table-list-column oot-table-list-column-user-mail\">\n" +
    "							<i class=\"oo-icon icon-email\"></i> <span>{{ user.mail\n" +
    "								}}</span>\n" +
    "						</div>\n" +
    "					</li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "			<div class=\"search-list-layout-content\"\n" +
    "				ng-if=\"!searchCtrl.showTypeList\">\n" +
    "				<ul class=\"oot-table-list oot-table-list-basic l-search-items\">\n" +
    "					<li class=\"oot-table-list-row l-search-result-items\"\n" +
    "						ng-repeat=\"item in searchCtrl.searchResults\"\n" +
    "						ng-include=\"'op-search-items-columns'\"></li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"op-search-items-columns\">\n" +
    "	<div class=\"oot-table-list-column oot-table-list-column-item-name\"\n" +
    "		ng-style=\"{'background':'url({{searchCtrl.getIcon(item.name)}}) no-repeat 0 center white'}\">\n" +
    "		<div ng-bind-html=\"item.name | highlight: searchCtrl.highlight\"\n" +
    "			ng-class=\"{'line-through': item.isLocked, 'l-search-item-name': true}\"></div>\n" +
    "	</div>\n" +
    "	<div class=\"oot-table-list-column oot-table-list-column-item-depositary\">\n" +
    "		<i class=\"opx-icon-user-judge\"></i> <span>{{\n" +
    "			item._embedded.depositary.firstName }} {{\n" +
    "			item._embedded.depositary.lastName }} ({{ 'op.' +\n" +
    "			item._embedded.depositary.role.toLowerCase() | i18n }})</span>\n" +
    "	</div>\n" +
    "	<div class=\"oot-table-list-column oot-table-list-column-item-date\">\n" +
    "		<i ng-show=\"item._links.timestamp\" class=\"opx-icon-timestamp-token\"/>\n" +
    "		<span ng-show=\"searchCtrl.isTransfering(item)\">{{ 'op.item.transferring' | i18n }} <img src=\"resources/images/ajax-loader.gif\"/> </span>\n" +
    "		<span>{{ item.creationDate | dateTimeFormat }}</span>\n" +
    "	</div>\n" +
    "	<!-- <div class=\"oot-table-list-column oot-table-list-column-token-download\">\n" +
    "		<i ng-show=\"item._links.timestamp.href\"\n" +
    "				ng-click=\"searchCtrl.downloadToken(item); $event.stopPropagation()\"\n" +
    "				class=\"opx-icon-timestamp-token\" oui-tooltip-text=\"i18n:op.token.download\"></i>\n" +
    "	</div> -->\n" +
    "	<div class=\"oot-table-list-column oot-table-list-column-item-download\">\n" +
    "		<i ng-show=\"item.isLocked\"\n" +
    "			class=\"oo-icon icon-locked\" oui-tooltip-text=\"i18n:op.common.locked\"></i>\n" +
    "		<i ng-show=\"item._links.download.href\"\n" +
    "			ng-click=\"searchCtrl.downloadItem(item); $event.stopPropagation()\"\n" +
    "			class=\"oo-icon icon-download-circle\" oui-tooltip-text=\"i18n:common.download\"></i>\n" +
    "		<div class=\"new-ribbon\" ng-show=\"item.isNew\">New</div>\n" +
    "	</div>\n" +
    "</script>\n" +
    "");
}]);

angular.module("common/op-upload-directive/op-upload-directive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/op-upload-directive/op-upload-directive.tpl.html",
    "<div class=\"op-upload l-op-upload\">\n" +
    "	<div class=\"op-upload-drop-zone\">\n" +
    "		<div class=\"wizard-button op-upload-drop-zone-button\" ng-class=\"{'op-upload-drop-zone-button-lefted': opUploadCtrl.fileModels.length}\">\n" +
    "			<i class=\"oo-icon icon-add-circle wizard-button-icon\"></i>\n" +
    "			{{(!opUploadCtrl.fileModels.length ? ('op.upload.addFiles' | i18n) : ('op.upload.addFilesToOthers' | i18n))}}\n" +
    "			<div ng-if=\"opUploadCtrl.waitForReader\" class=\"op-upload-drop-zone-lefted-wait\">\n" +
    "				{{'op.upload.pleaseWait' | i18n}}\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<input class=\"op-upload-drop-zone-input\" type=\"file\" multiple />\n" +
    "	</div>\n" +
    "	<ul class=\"oot-table-list oot-table-list-files\">\n" +
    "		<li class=\"oot-table-list-row\" ng-repeat=\"fileUploaded in opUploadCtrl.fileModels\">\n" +
    "			<div class=\"oot-table-list-column oot-table-list-files-filename\" ng-style=\"{'background':'url({{fileUploaded.icon}}) no-repeat 0.5em center transparent'}\">\n" +
    "				{{fileUploaded.file.name}}\n" +
    "			</div>\n" +
    "			<div class=\"oot-table-list-column oot-table-list-files-info\">\n" +
    "				<div ng-if=\"fileUploaded.state === 'started' || fileUploaded.state === 'waiting'\" class=\"oot-table-list-files-info-progress\">\n" +
    "					<div class=\"oot-table-list-info-progress-size\">\n" +
    "						{{fileUploaded.sizeUploaded | bytes}} / {{fileUploaded.file.size | bytes}}\n" +
    "					</div>\n" +
    "					<div class=\"oot-table-list-info-progress-cancel\" data-fileid=\"{{fileUploaded.id}}\">\n" +
    "						<i class=\"oo-icon icon-delete-circle-reverse\"></i>\n" +
    "					</div>\n" +
    "					<div class=\"progress-bar-container\">\n" +
    "						<div class=\"progress-bar\" ng-style=\"{'width':fileUploaded.progress+'%'}\"></div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div ng-if=\"fileUploaded.state === 'justUploaded'\" class=\"oot-table-list-files-info-finished\">\n" +
    "					<p class=\"oot-table-list-files-info-finished-p\">{{'op.upload.uploadFinished' | i18n}}</p>\n" +
    "					<i class=\"oo-icon icon-validate-circle-reverse\"></i>\n" +
    "				</div>\n" +
    "				<div ng-if=\"fileUploaded.state === 'uploadError'\" class=\"oot-table-list-files-info-error\">\n" +
    "					<p class=\"oot-table-list-files-info-finished-p\">{{'op.upload.uploadError' | i18n}}</p>\n" +
    "					<div class=\"oot-table-list-info-progress-error-close\" data-fileid=\"{{fileUploaded.id}}\">\n" +
    "						<i class=\"oo-icon icon-delete-circle-reverse\"></i>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div ng-if=\"fileUploaded.state === 'uploaded'\" class=\"oot-table-list-files-info-details\">\n" +
    "					<p>{{fileUploaded.file.size | bytes}}  <i class=\"opx-icon-timestamp-token\"/> {{fileUploaded.date | date:'dd MMM yyyy HH:mm'}}</p>\n" +
    "					<!-- <i class=\"opx-icon-timestamp-token\" ng-click=\"opUploadCtrl.handleTokenDownload(fileUploaded)\"></i> -->\n" +
    "					<i class=\"oo-icon icon-download-circle\" ng-click=\"opUploadCtrl.handleDownload(fileUploaded)\"></i>\n" +
    "					<i ng-hide=\"opUploadCtrl.preventDeleteAction\" class=\"oo-icon icon-trash-circle\" ng-click=\"opUploadCtrl.handleDelete(fileUploaded)\"></i>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "</div>\n" +
    "");
}]);

angular.module("common/template/op-modal-background/op-modal-background.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/template/op-modal-background/op-modal-background.tpl.html",
    "<div class=\"oo-basic-modal-mask\"></div>\n" +
    "<div class=\"oo-basic-modal\">\n" +
    "	<div class=\"oo-basic-modal-body\" ng-include=\"opTemplateContainer\"></div>\n" +
    "</div>");
}]);

angular.module("common/template/op-notification-form-directive/op-notification-form-directive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/template/op-notification-form-directive/op-notification-form-directive.tpl.html",
    "<div class=\"op-notification-form\">\n" +
    "	<div class=\"op-notification-form-expertise-name\">\n" +
    "		<input type=\"text\"\n" +
    "			id=\"expertise-name\"\n" +
    "			ng-readonly=\"true\"\n" +
    "			placeholder=\"{{ 'op.notification.form.expertise.placeholder' | i18n }}\"\n" +
    "			ng-value=\"notificationFormCtrl.getExpertiseName()\"/>\n" +
    "		<div ng-if=\"!label\" class=\"oo-form-field-label oo-label-visuallyhidden-with-placeholder ng-scope\">\n" +
    "			<div class=\"oo-form-field-label-inner\">\n" +
    "				<label for=\"expertise-name\"></label>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div ng-form=\"notificationFormCtrl.formCtrl\" class=\"op-notification-form-container oot-table-list\">\n" +
    "\n" +
    "		<div class=\"oot-table-list-row\">\n" +
    "			<div class=\"oot-table-list-column\">\n" +
    "				<label>{{'op.notification.form.applicant.name' | i18n}}</label>\n" +
    "			</div>\n" +
    "			<div class=\"oot-table-list-column\">\n" +
    "				<label>{{'op.notification.form.expert.name' | i18n}}</label>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"oot-table-list-row\">\n" +
    "			<div class=\"oot-table-list-column\">\n" +
    "				<div oui-form-field-container>\n" +
    "					<input type=\"text\"\n" +
    "						id=\"nameFirstApplicant\"\n" +
    "						name = \"nameFirstApplicant\"\n" +
    "						placeholder=\"{{ 'op.notification.form.applicant.placeholder' | i18n }}\"\n" +
    "						ng-model=\"notificationFormCtrl.inputValues.nameFirstApplicant\"\n" +
    "						ng-required=\"true\" tabindex=\"1\" ng-maxlength=\"128\"\n" +
    "						autofocus\n" +
    "						/>\n" +
    "				</div>\n" +
    "				<div ng-if=\"!label\" class=\"oo-form-field-label oo-label-visuallyhidden-with-placeholder ng-scope\">\n" +
    "					<div class=\"oo-form-field-label-inner\">\n" +
    "						<label for=\"nameFirstApplicant\"></label>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"oot-table-list-column\">\n" +
    "				<div oui-form-field-container>\n" +
    "					<input type=\"text\"\n" +
    "						id=\"nameExpert\"\n" +
    "						name = \"nameExpert\"\n" +
    "						placeholder=\"{{ 'op.notification.form.expert.placeholder' | i18n }}\"\n" +
    "						ng-model=\"notificationFormCtrl.inputValues.nameExpert\"\n" +
    "						ng-required=\"true\" tabindex=\"6\" ng-maxlength=\"128\" />\n" +
    "				</div>\n" +
    "				<div ng-if=\"!label\" class=\"oo-form-field-label oo-label-visuallyhidden-with-placeholder ng-scope\">\n" +
    "					<div class=\"oo-form-field-label-inner\">\n" +
    "						<label for=\"nameExpert\"></label>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"oot-table-list-row\">\n" +
    "			<div class=\"oot-table-list-column\">\n" +
    "				<label>{{'op.notification.form.defender.name' | i18n}}</label>\n" +
    "			</div>\n" +
    "			<div class=\"oot-table-list-column\">\n" +
    "				<label>{{'op.notification.form.discovery' | i18n}}</label>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"oot-table-list-row\">\n" +
    "			<div class=\"oot-table-list-column\">\n" +
    "				<div oui-form-field-container>\n" +
    "					<input type=\"text\"\n" +
    "						id=\"nameFirstDefender\"\n" +
    "						name = \"nameFirstDefender\"\n" +
    "						placeholder=\"{{ 'op.notification.form.defender.placeholder' | i18n }}\"\n" +
    "						ng-model=\"notificationFormCtrl.inputValues.nameFirstDefender\"\n" +
    "						ng-required=\"true\" tabindex=\"2\" ng-maxlength=\"128\" />\n" +
    "				</div>\n" +
    "				<div ng-if=\"!label\" class=\"oo-form-field-label oo-label-visuallyhidden-with-placeholder ng-scope\">\n" +
    "					<div class=\"oo-form-field-label-inner\">\n" +
    "						<label for=\"nameFirstDefender\"></label>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"oot-table-list-column\">\n" +
    "				<div oui-form-field-container>\n" +
    "					<input type=\"text\"\n" +
    "						id=\"nameDiscoveryCode\"\n" +
    "						name = \"nameDiscoveryCode\"\n" +
    "						placeholder=\"{{ 'op.notification.form.discovery.placeholder' | i18n }}\"\n" +
    "						ng-model=\"notificationFormCtrl.inputValues.nameDiscoveryCode\"\n" +
    "						ng-required=\"false\" tabindex=\"7\" ng-maxlength=\"12\" />\n" +
    "				</div>\n" +
    "				<div ng-if=\"!label\" class=\"oo-form-field-label oo-label-visuallyhidden-with-placeholder ng-scope\">\n" +
    "					<div class=\"oo-form-field-label-inner\">\n" +
    "						<label for=\"nameDiscoveryCode\"></label>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"oot-table-list-row\">\n" +
    "			<div class=\"oot-table-list-column\">\n" +
    "				<label>{{'op.notification.form.jurisdiction' | i18n}}</label>\n" +
    "			</div>\n" +
    "			<div class=\"oot-table-list-column\">\n" +
    "				<label>{{'op.notification.form.designation.date' | i18n}}</label>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"oot-table-list-row\">\n" +
    "			<div class=\"oot-table-list-column\">\n" +
    "				<div oui-form-field-container>\n" +
    "					<input type=\"text\"\n" +
    "						id=\"nameJurisdiction\"\n" +
    "						name = \"nameJurisdiction\"\n" +
    "						placeholder=\"{{ 'op.notification.form.jurisdiction.placeholder' | i18n }}\"\n" +
    "						ng-model=\"notificationFormCtrl.inputValues.nameJurisdiction\"\n" +
    "						ng-required=\"true\" tabindex=\"3\" ng-maxlength=\"128\" />\n" +
    "				</div>\n" +
    "				<div ng-if=\"!label\" class=\"oo-form-field-label oo-label-visuallyhidden-with-placeholder ng-scope\">\n" +
    "					<div class=\"oo-form-field-label-inner\">\n" +
    "						<label for=\"nameJurisdiction\"></label>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"oot-table-list\">\n" +
    "					<div class=\"oot-table-list-row\">\n" +
    "						<div class=\"oot-table-list-column\">\n" +
    "							<label>{{'op.notification.form.registery.number' | i18n}}</label>\n" +
    "						</div>\n" +
    "						<div class=\"oot-table-list-column\">\n" +
    "							<label>{{'op.notification.form.record.number' | i18n}}</label>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"oot-table-list-row\">\n" +
    "						<div class=\"oot-table-list-column\">\n" +
    "							<div oui-form-field-container>\n" +
    "								<input type=\"text\"\n" +
    "									id=\"nameRegistryNumber\"\n" +
    "									name = \"nameRegistryNumber\"\n" +
    "									placeholder=\"{{ 'op.notification.form.registery.placeholder' | i18n }}\"\n" +
    "									ng-model=\"notificationFormCtrl.inputValues.nameRegistryNumber\"\n" +
    "									ng-required=\"true\" tabindex=\"4\" ng-maxlength=\"128\" />\n" +
    "							</div>\n" +
    "							<div ng-if=\"!label\" class=\"oo-form-field-label oo-label-visuallyhidden-with-placeholder ng-scope\">\n" +
    "								<div class=\"oo-form-field-label-inner\">\n" +
    "									<label for=\"nameRegistryNumber\"></label>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"oot-table-list-column\">\n" +
    "							<div oui-form-field-container>\n" +
    "								<input type=\"text\"\n" +
    "									id=\"nameRecordNumber\"\n" +
    "									name = \"nameRecordNumber\"\n" +
    "									placeholder=\"{{ 'op.notification.form.record.placeholder' | i18n }}\"\n" +
    "									ng-model=\"notificationFormCtrl.inputValues.nameRecordNumber\"\n" +
    "									tabindex=\"5\" />\n" +
    "							</div>\n" +
    "							<div ng-if=\"!label\" class=\"oo-form-field-label oo-label-visuallyhidden-with-placeholder ng-scope\">\n" +
    "								<div class=\"oo-form-field-label-inner\">\n" +
    "									<label for=\"nameRecordNumber\"></label>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"oot-table-list-column\">\n" +
    "				<div oui-form-field-container>\n" +
    "					<input type=\"text\"\n" +
    "						id=\"nameDesignationDate\"\n" +
    "						name = \"nameDesignationDate\"\n" +
    "						placeholder=\"{{ 'op.notification.form.designation.placeholder' | i18n }}\"\n" +
    "						ng-model=\"notificationFormCtrl.inputValues.nameDesignationDate\"\n" +
    "						ng-pattern=\"notificationFormCtrl.datePattern\"\n" +
    "						ng-keyup=\"notificationFormCtrl.updateDateFormat()\"\n" +
    "						ng-required=\"true\" tabindex=\"7\" ng-maxlength=\"10\" />\n" +
    "				</div>\n" +
    "				<div ng-if=\"!label\" class=\"oo-form-field-label oo-label-visuallyhidden-with-placeholder ng-scope\">\n" +
    "					<div class=\"oo-form-field-label-inner\">\n" +
    "						<label for=\"nameDesignationDate\"></label>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);
})(angular);
