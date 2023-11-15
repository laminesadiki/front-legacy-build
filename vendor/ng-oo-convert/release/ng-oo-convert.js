/**
 * ng-oo-convert - v3.0.0 - 2014-11-05
 *
 * Copyright (c) 2014 Oodrive
 */
!function(a){!function(){a.module("oo.convert",[]).provider("$ooConvert",function(){function b(b,c){var d=a.isNumber(c)?c:parseFloat($(c).css("fontSize")||1,10);return b/d}this.$get=function(){return{pxToEm:b}}})}()}(angular);