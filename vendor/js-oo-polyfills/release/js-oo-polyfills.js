/**
 * js-oo-polyfills - v0.1.0 - 2014-05-14
 *
 * Copyright (c) 2014 Oodrive
 */
!function(a,b,c){!function(){Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){if(this===c||null===this)throw new TypeError('"this" is null or not defined');var d=this.length>>>0;for(b=+b||0,1/0===Math.abs(b)&&(b=0),0>b&&(b+=d,0>b&&(b=0));d>b;b++)if(this[b]===a)return b;return-1})}(),function(){String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")})}()}(window,window.angular);