/**
 * ng-oui-file-icons - v3.0.0 - 2014-10-09
 *
 * Copyright (c) 2014 Oodrive
 */
!function(a){!function(){var b={EXECUTABLE:{icon:"executable",id:1},WEB:{icon:"web",id:2},IMAGE:{icon:"image",id:3},PDF:{icon:"pdf",id:4},DOC_TEXT:{icon:"doc_text",id:5},DOC_PRES:{icon:"doc_pres",id:6},DOC_SPSHEET:{icon:"doc_spsheet",id:7},AUDIO:{icon:"audio",id:8},VIDEO:{icon:"video",id:9},ARCHIVE:{icon:"archive",id:10},FOLDER:{icon:"folder",id:11},DEFAULT:{icon:"default",id:99}},c={EXECUTABLE:["exe"],WEB:["html"],IMAGE:["jpg","jpeg","bmp","png","gif","odg","tif","tiff","pga","ico","psd","svg","ps","eps"],PDF:["pdf"],DOC_TXT:["doc","docx","txt","log","rtf","wpd","wps","msg","odt"],DOC_PRES:["ppt","pps","pptx","odp"],DOC_SPSHEET:["xls","xslx","xlr","ods","csv"],AUDIO:["mp3","ogg","wav","m3u","m4a","mid","mpa","wma","ra"],VIDEO:["avi","mp4","mpg","mp2","flv","mov","asf","wmv","rm"],ARCHIVE:["zip","zipx","7z","tar","gz","rar","war"]},d=[32,40,50],e=null,f=null,g=c;c={},a.forEach(g,function(d,e){a.forEach(d,function(a){c[a]=b[e]})});var h=function(a,b){if(!e)throw"fileIconsPath is missing";if(!b)throw"size is missing";if(-1===d.indexOf(b))throw"size is invalid (valid sizes: "+d.join(", ")+")";return e+"images/"+b+"/"+a+".png"};a.module("oui.fileIcons",["oo.files"]).provider("$fileIcons",function(){var d=this;d.fileIconsPath=function(b){return a.isDefined(b)?void(e=b.replace(/\/?$/,"/")):e},d.mapping=function(c,d){f={};var e=!1;for(var g in c)if(c.hasOwnProperty(g)&&a.isString(c[g])){e=!0;break}e?a.forEach(c,function(c,e){var g=(a.isObject(d)?d[c]:c)||c;if(!b[g])throw"invalid icon name: "+g;f[e.toLowerCase()]=b[g]}):a.forEach(c,function(c,e){var g=(a.isObject(d)?d[e]:e)||e;if(!b[g])throw"invalid icon name: "+g;a.isArray(c)?a.forEach(c,function(a){f[a.toLowerCase()]=b[g]}):a.isObject(c)&&a.forEach(c,function(a,c){f[c.toLowerCase()]=b[g]})})},a.forEach(b,function(a,b){d[b]=b}),this.$get=["$files",function(e){var g=function(a){return((f||c)[e.extension(a,f).toLowerCase()]||b.DEFAULT).icon},i=function(){return b.FOLDER.icon},j=function(a,b){return h(g(a),b)},k=function(a){return h(i(),a)},l={fileIconPath:j,folderIconPath:k,iconPath:function(a,b,c){return b?k(c):j(a,c)},mapping:d.mapping};return a.forEach(b,function(a,b){l[b]=b}),l}]}).run(["$injector",function(a){if(!e&&a.has("$ooVendorPaths")){var b=a.get("$ooVendorPaths");b.vendorPath("oui-file-icons")&&(e=b.vendorPath("oui-file-icons").replace(/\/?$/,"/"))}}])}()}(angular);