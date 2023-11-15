/*
 *   Angular DateParser 1.0.5
 *   https://github.com/dnasir/angular-dateParser
 *
 *   Copyright 2013, Dzulqarnain Nasir
 *   http://www.dnasir.com
 *
 *   Licensed under the MIT license:
 *   http://www.opensource.org/licenses/MIT
 */

angular.module('dateParser', [])
    .factory('dateParserHelpers', [function() {
        return {

            // Returns true if string contains only integers
            isJustNumbers: function(string) {
                if(!string) return false;

                var digits = "1234567890";

                for (var i = 0; i < string.length; i++) {
                    if (digits.indexOf(string.charAt(i)) == -1) return false;
                }

                return true;
            },

            // Returns string value within a range if it's an integer
            getInteger: function(string, startPoint, minLength, maxLength) {
                for (var i = maxLength; i >= minLength; i--) {
                    var extracted = string.substring(startPoint, startPoint + i);

                    if(this.isJustNumbers(extracted)) {
                        return extracted;
                    }
                }
                return null;
            },

            setParsingInfo: function(parsingInfo, name, str, i_val, length, value) {
                parsingInfo[name] = {start: i_val, end: i_val + length, parsedValue: str.substring(i_val, length), value: value};
            }
        };
    }])
    .provider('$dateParser', [function() {
        var _watchLocale = false;

        //true => watches $locale.id in order to update the formats when the locale is changed
        //no arguments => returns true if locale is watched
        this.watchLocale = function(watch) {
            if (angular.isDefined(watch)) {
                _watchLocale = watch;
            } else {
                return _watchLocale;
            }
        };

        this.$get = ['$locale', 'dateParserHelpers', '$rootScope', function($locale, dateParserHelpers, $rootScope) {
            var datetimeFormats,
                monthNames,
                ampms,
                dayNames;

            var updateFromLocale = function() {
                // Fetch date and time formats from $locale service
                datetimeFormats = $locale.DATETIME_FORMATS;
                ampms = datetimeFormats.AMPMS || ['AM', 'PM'];

                // Build array of month and day names
                monthNames = datetimeFormats.MONTH.concat(datetimeFormats.SHORTMONTH);
                dayNames = datetimeFormats.DAY.concat(datetimeFormats.SHORTDAY);
            };

            updateFromLocale();

            if (_watchLocale) {
                watchDestroy = $rootScope.$watch(function() {
                    return $locale.id;
                }, function() {
                    updateFromLocale();
                });
            }

            var res = function(val, format, returnParsingInfo) {

                // If input is a Date object, there's no need to process it
                if(angular.isDate(val)) {
                    return val;
                }


                try {
                    val = val + '';
                    format = format + '';

                    // If no format is provided, just pass it to the Date constructor
                    if(!format.length) {
                        return new Date(val);
                    }

                    // Check if format exists in the format collection
                    if (datetimeFormats[format]) {
                        format = datetimeFormats[format];
                    }

                    // Initial values
                    var i_val = 0,
                        i_format = 0,
                        format_token = '',
                        year = 1970,
                        month = 1,
                        date = 1,
                        hh = 0,
                        mm = 0,
                        ss = 0,
                        ampm = 'am',
                        now = new Date(),
                        z = 0,
                        parsedZ = false,
                        parsingInfo = {};

                    // TODO: Extract this into a helper function perhaps?
                    while (i_format < format.length) {
                        // Get next token from format string
                        format_token = format.charAt(i_format);

                        var token = '';

                        // TODO: Handle double single quotes
                        // Handle quote marks for strings within format string
                        if(format.charAt(i_format) == "'") {
                            var _i_format = i_format;

                            while((format.charAt(++i_format) != "'") && (i_format < format.length)) {
                                token += format.charAt(i_format);
                            }

                            if(val.substring(i_val, i_val + token.length) != token) {
                                throw 'Pattern value mismatch';
                            }

                            i_val += token.length;
                            i_format++;

                            continue;
                        }

                        while ((format.charAt(i_format) == format_token) && (i_format < format.length)) {
                            token += format.charAt(i_format++);
                        }

                        // Extract contents of value based on format token
                        // TODO: Implement millisecond (.sss or ,sss) extractor
                        if (token == 'yyyy' || token == 'yy' || token == 'y') {
                            var minLength, maxLength;

                            if (token == 'yyyy') {
                                minLength = 4;
                                maxLength = 4;
                            }

                            if (token == 'yy') {
                                minLength = 2;
                                maxLength = 2;
                            }

                            if (token == 'y') {
                                minLength = 2;
                                maxLength = 4;
                            }

                            year = dateParserHelpers.getInteger(val, i_val, minLength, maxLength);

                            if (year === null) {
                                throw 'Invalid year';
                            }

                            returnParsingInfo && dateParserHelpers.setParsingInfo(parsingInfo, "year", val, i_val, year.length, parseInt(year, 10));

                            i_val += year.length;

                            if (year.length == 2) {
                                if (year > 70) {
                                    year = 1900 + (year - 0);
                                } else {
                                    year = 2000 + (year - 0);
                                }
                            }
                        } else if (token === 'MMMM' || token == 'MMM') {
                            month = 0;

                            for (var i = 0; i < monthNames.length; i++) {
                                var month_name = monthNames[i];

                                if (val.substring(i_val, i_val + month_name.length).toLowerCase() == month_name.toLowerCase()) {
                                    month = i + 1;
                                    if (month > 12) {
                                        month -= 12;
                                    }

                                    returnParsingInfo && dateParserHelpers.setParsingInfo(parsingInfo, "month", val, i_val, month_name.length, parseInt(month, 10) - 1);

                                    i_val += month_name.length;

                                    break;
                                }
                            }

                            if ((month < 1) || (month > 12)) {
                                throw 'Invalid month';
                            }
                        } else if (token == 'EEEE' || token == 'EEE') {
                            for (var j = 0; j < dayNames.length; j++) {
                                var day_name = dayNames[j];

                                if (val.substring(i_val, i_val + day_name.length).toLowerCase() == day_name.toLowerCase()) {
                                    returnParsingInfo && dateParserHelpers.setParsingInfo(parsingInfo, "day", val, i_val, day_name.length, day_name);
                                    i_val += day_name.length;
                                    break;
                                }
                            }
                        } else if (token == 'MM' || token == 'M') {
                            month = dateParserHelpers.getInteger(val, i_val, token.length, 2);

                            if (month === null || (month < 1) || (month > 12)) {
                                throw 'Invalid month';
                            }

                            returnParsingInfo && dateParserHelpers.setParsingInfo(parsingInfo, "month", val, i_val, month.length, parseInt(month, 10) - 1);

                            i_val += month.length;
                        } else if (token == 'dd' || token == 'd') {
                            date = dateParserHelpers.getInteger(val, i_val, token.length, 2);

                            if (date === null || (date < 1) || (date > 31)) {
                                throw 'Invalid date';
                            }

                            returnParsingInfo && dateParserHelpers.setParsingInfo(parsingInfo, "date", val, i_val, date.length, parseInt(date, 10));

                            i_val += date.length;
                        } else if (token == 'HH' || token == 'H') {
                            hh = dateParserHelpers.getInteger(val, i_val, token.length, 2);

                            if (hh === null || (hh < 0) || (hh > 23)) {
                                throw 'Invalid hours';
                            }

                            returnParsingInfo && dateParserHelpers.setParsingInfo(parsingInfo, "hours", val, i_val, hh.length, parseInt(hh, 10));

                            i_val += hh.length;
                        } else if (token == 'hh' || token == 'h') {
                            hh = dateParserHelpers.getInteger(val, i_val, token.length, 2);

                            if (hh === null || (hh < 1) || (hh > 12)) {
                                throw 'Invalid hours';
                            }

                            returnParsingInfo && dateParserHelpers.setParsingInfo(parsingInfo, "hours", val, i_val, hh.length, parseInt(hh, 10));

                            i_val += hh.length;
                        } else if (token == 'mm' || token == 'm') {
                            mm = dateParserHelpers.getInteger(val, i_val, token.length, 2);

                            if (mm === null || (mm < 0) || (mm > 59)) {
                                throw 'Invalid minutes';
                            }

                            returnParsingInfo && dateParserHelpers.setParsingInfo(parsingInfo, "minutes", val, i_val, mm.length, parseInt(mm, 10));

                            i_val += mm.length;
                        } else if (token == 'ss' || token == 's') {
                            ss = dateParserHelpers.getInteger(val, i_val, token.length, 2);

                            if (ss === null || (ss < 0) || (ss > 59)) {
                                throw 'Invalid seconds';
                            }

                            returnParsingInfo && dateParserHelpers.setParsingInfo(parsingInfo, "seconds", val, i_val, ss.length, parseInt(ss, 10));

                            i_val += ss.length;
                        } else if (token == 'a') {
                            if (val.substring(i_val, i_val + ampms[0].length).toLowerCase() == ampms[0].toLowerCase()) {
                                ampm = 'AM';
                                returnParsingInfo && dateParserHelpers.setParsingInfo(parsingInfo, "ampm", val, i_val, ampms[0].length, ampm);
                                i_val += ampms[0].length;
                            } else if (val.substring(i_val, i_val + ampms[1].length).toLowerCase() == ampms[1].toLowerCase()) {
                                ampm = 'PM';
                                returnParsingInfo && dateParserHelpers.setParsingInfo(parsingInfo, "ampm", val, i_val, ampms[1].length, ampm);
                                i_val += ampms[1].length;
                            } else {
                                throw 'Invalid AM/PM';
                            }
                        } else if (token == 'Z') {
                            parsedZ = true;

                            if (val[i_val] === "Z") {
                                z = 0;

                                returnParsingInfo && dateParserHelpers.setParsingInfo(parsingInfo, "timezone", val, i_val, 1, z);

                                i_val += 1;
                            } else {
                                if (val[i_val + 3] === ":") {
                                    var tzStr = val.substring(i_val, i_val + 6);

                                    z = (parseInt(tzStr.substr(0, 3), 10) * 60) + parseInt(tzStr.substr(4, 2), 10);

                                    returnParsingInfo && dateParserHelpers.setParsingInfo(parsingInfo, "timezone", val, i_val, 6, z);

                                    i_val += 6;
                                } else {
                                    var tzStr = val.substring(i_val, i_val + 5);

                                    z = (parseInt(tzStr.substr(0, 3), 10) * 60) + parseInt(tzStr.substr(3, 2), 10);

                                    returnParsingInfo && dateParserHelpers.setParsingInfo(parsingInfo, "timezone", val, i_val, 5, z);

                                    i_val += 5;
                                }
                            }

                            if (z > 720 || z < -720) {
                                throw 'Invalid timezone';
                            }
                        } else {
                            if (val.substring(i_val, i_val + token.length) != token) {
                                throw 'Pattern value mismatch';
                            } else {
                                if (val.substring(i_val, i_val + token.length) != token) {
                                    throw 'Pattern value mismatch';
                                } else {
                                    i_val += token.length;
                                }
                            }
                        }
                    }

                    // If there are any trailing characters left in the value, it doesn't match
                    if (i_val != val.length) {
                        throw 'Pattern value mismatch';
                    }

                    // Convert to integer
                    year = parseInt(year, 10);
                    month = parseInt(month, 10);
                    date = parseInt(date, 10);
                    hh = parseInt(hh, 10);
                    mm = parseInt(mm, 10);
                    ss = parseInt(ss, 10);

                    // Is date valid for month?
                    if (month == 2) {
                        // Check for leap year
                        if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) { // leap year
                            if (date > 29) {
                                throw 'Invalid date';
                            }
                        } else {
                            if (date > 28) {
                                throw 'Invalid date';
                            }
                        }
                    }

                    if ((month == 4) || (month == 6) || (month == 9) || (month == 11)) {
                        if (date > 30) {
                            throw 'Invalid date';
                        }
                    }

                    // Correct hours value
                    if (hh < 12 && ampm == 'PM') {
                        hh += 12;
                    } else if (hh > 11 && ampm == 'AM') {
                        hh -= 12;
                    }

                    var localDate = new Date(year, month - 1, date, hh, mm, ss);
                    var res;
                    if (parsedZ) {
                        res  = new Date(localDate.getTime() - (z + localDate.getTimezoneOffset()) * 60 * 1000);
                    } else {
                        res = localDate;
                    }
                    if (returnParsingInfo) {
                        return {input: val, date: res, parsingInfo: parsingInfo};
                    }
                    return res;
                } catch(e) {
                    return undefined;
                }
            };


            res.updateFromLocale = function() {
                setFormat();
            };

            return res;
        }];

    }]);
