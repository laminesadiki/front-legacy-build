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
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07",
      "\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07"
    ],
    "DAY": [
      "\u0e27\u0e31\u0e19\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c",
      "\u0e27\u0e31\u0e19\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c",
      "\u0e27\u0e31\u0e19\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23",
      "\u0e27\u0e31\u0e19\u0e1e\u0e38\u0e18",
      "\u0e27\u0e31\u0e19\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35",
      "\u0e27\u0e31\u0e19\u0e28\u0e38\u0e01\u0e23\u0e4c",
      "\u0e27\u0e31\u0e19\u0e40\u0e2a\u0e32\u0e23\u0e4c"
    ],
    "MONTH": [
      "\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21",
      "\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c",
      "\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21",
      "\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19",
      "\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21",
      "\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19",
      "\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21",
      "\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21",
      "\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19",
      "\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21",
      "\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19",
      "\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21"
    ],
    "SHORTDAY": [
      "\u0e2d\u0e32.",
      "\u0e08.",
      "\u0e2d.",
      "\u0e1e.",
      "\u0e1e\u0e24.",
      "\u0e28.",
      "\u0e2a."
    ],
    "SHORTMONTH": [
      "\u0e21.\u0e04.",
      "\u0e01.\u0e1e.",
      "\u0e21\u0e35.\u0e04.",
      "\u0e40\u0e21.\u0e22.",
      "\u0e1e.\u0e04.",
      "\u0e21\u0e34.\u0e22.",
      "\u0e01.\u0e04.",
      "\u0e2a.\u0e04.",
      "\u0e01.\u0e22.",
      "\u0e15.\u0e04.",
      "\u0e1e.\u0e22.",
      "\u0e18.\u0e04."
    ],
    "fullDate": "EEEE\u0e17\u0e35\u0e48 d MMMM G y",
    "longDate": "d MMMM y",
    "medium": "d MMM y HH:mm:ss",
    "mediumDate": "d MMM y",
    "mediumTime": "HH:mm:ss",
    "short": "d/M/yy HH:mm",
    "shortDate": "d/M/yy",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "\u0e3f",
    "DECIMAL_SEP": ".",
    "GROUP_SEP": ",",
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
        "negPre": "\u00a4-",
        "negSuf": "",
        "posPre": "\u00a4",
        "posSuf": ""
      }
    ]
  },
  "id": "th",
  "pluralCat": function (n, opt_precision) {  return PLURAL_CATEGORY.OTHER;}
});
}]);
/*! jQuery UI - v1.10.3 - 2013-05-03
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
jQuery(function(e){e.datepicker.regional.th={closeText:"ปิด",prevText:"&#xAB;&#xA0;ย้อน",nextText:"ถัดไป&#xA0;&#xBB;",currentText:"วันนี้",monthNames:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],monthNamesShort:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],dayNames:["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],dayNamesShort:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],dayNamesMin:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],weekHeader:"Wk",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.th)});