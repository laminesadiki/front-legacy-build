/**
 * ng-oui-basicModal - v2.0.0 - 2015-01-13
 *
 * Copyright (c) 2015 Oodrive
 */
!function(a){!function(){function b(b,c,d,e){var f,g,h,i;return g=$("<div></div>").appendTo("body"),f={open:function(j,k,l){return f.close(),i=b.defer(),h=(k||c).$new(),h.closeModal=f.close,l&&a.extend(h,l),g.html(d(e.get(j))(h)),g.show(),i.promise},close:function(a){g.hide(),h&&(h.$destroy(),h=null),i&&i.resolve(a),i=null}}}b.$inject=["$q","$rootScope","$compile","$templateCache"],a.module("oui.basicModal",[]).factory("basicModal",b)}()}(angular);