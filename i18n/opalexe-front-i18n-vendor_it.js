/**
 * opalexe-front - v2.15.19 - 2023-11-15
 *
 * Copyright (c) 2023 Oodrive
 *
 * Dependencies :
 * - AngularJS under MIT licence (http://angularjs.org/) 
 * - jQuery under MIT licence (https://jquery.org/) 
 * - jQuery UI under MIT licence (https://jqueryui.com/) 
 * - HTML5 placeholder Polyfill under MIT licence (https://github.com/ginader/HTML5-placeholder-polyfill) 
 * - Angular dateParser under MIT licence (https://github.com/dnasir/angular-dateParser) 
 * - RequireJS under MIT licence (http://requirejs.org/) 
 * - Bindonce under MIT licence (https://github.com/Pasvaz/bindonce) 
 */

'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
function getDecimals(n) {
  n = n + '';
  var i = n.indexOf('.');
  return (i == -1) ? 0 : n.length - i - 1;
}

function getVF(n, opt_precision) {
  var v = opt_precision;

  if (undefined === v) {
    v = Math.min(getDecimals(n), 3);
  }

  var base = Math.pow(10, v);
  var f = ((n * base) | 0) % base;
  return {v: v, f: f};
}

$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "AM",
      "PM"
    ],
    "DAY": [
      "domenica",
      "luned\u00ec",
      "marted\u00ec",
      "mercoled\u00ec",
      "gioved\u00ec",
      "venerd\u00ec",
      "sabato"
    ],
    "MONTH": [
      "gennaio",
      "febbraio",
      "marzo",
      "aprile",
      "maggio",
      "giugno",
      "luglio",
      "agosto",
      "settembre",
      "ottobre",
      "novembre",
      "dicembre"
    ],
    "SHORTDAY": [
      "dom",
      "lun",
      "mar",
      "mer",
      "gio",
      "ven",
      "sab"
    ],
    "SHORTMONTH": [
      "gen",
      "feb",
      "mar",
      "apr",
      "mag",
      "giu",
      "lug",
      "ago",
      "set",
      "ott",
      "nov",
      "dic"
    ],
    "fullDate": "EEEE d MMMM y",
    "longDate": "dd MMMM y",
    "medium": "dd/MMM/y HH:mm:ss",
    "mediumDate": "dd/MMM/y",
    "mediumTime": "HH:mm:ss",
    "short": "dd/MM/yy HH:mm",
    "shortDate": "dd/MM/yy",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "\u20ac",
    "DECIMAL_SEP": ",",
    "GROUP_SEP": ".",
    "PATTERNS": [
      {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 3,
        "minFrac": 0,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      },
      {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 2,
        "minFrac": 2,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "\u00a0\u00a4",
        "posPre": "",
        "posSuf": "\u00a0\u00a4"
      }
    ]
  },
  "id": "it",
  "pluralCat": function (n, opt_precision) {  var i = n | 0;  var vf = getVF(n, opt_precision);  if (i == 1 && vf.v == 0) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);
/*! jQuery UI - v1.10.3 - 2013-05-03
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
jQuery(function(e){e.datepicker.regional.it={closeText:"Chiudi",prevText:"&#x3C;Prec",nextText:"Succ&#x3E;",currentText:"Oggi",monthNames:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],monthNamesShort:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],dayNames:["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"],dayNamesShort:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],dayNamesMin:["Do","Lu","Ma","Me","Gi","Ve","Sa"],weekHeader:"Sm",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.it)});