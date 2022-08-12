(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{sWYD:function(t,e,n){"use strict";function r(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function a(t){return r(1,arguments),t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function i(t){r(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function o(t){if(r(1,arguments),!a(t)&&"number"!=typeof t)return!1;var e=i(t);return!isNaN(Number(e))}function u(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function s(t,e){r(2,arguments);var n=i(t).getTime(),a=u(e);return new Date(n+a)}function d(t,e){r(2,arguments);var n=u(e);return s(t,-n)}function c(t){r(1,arguments);var e=1,n=i(t),a=n.getUTCDay(),o=(a<e?7:0)+a-e;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}function l(t){r(1,arguments);var e=i(t),n=e.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var o=c(a),u=new Date(0);u.setUTCFullYear(n,0,4),u.setUTCHours(0,0,0,0);var s=c(u);return e.getTime()>=o.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}function h(t){r(1,arguments);var e=l(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var a=c(n);return a}n.d(e,"a",(function(){return R}));var f={};function m(){return f}function g(t,e){var n,a,o,s,d,c,l,h;r(1,arguments);var f=m(),g=u(null!==(n=null!==(a=null!==(o=null!==(s=null==e?void 0:e.weekStartsOn)&&void 0!==s?s:null==e||null===(d=e.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==o?o:f.weekStartsOn)&&void 0!==a?a:null===(l=f.locale)||void 0===l||null===(h=l.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==n?n:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=i(t),w=v.getUTCDay(),b=(w<g?7:0)+w-g;return v.setUTCDate(v.getUTCDate()-b),v.setUTCHours(0,0,0,0),v}function v(t,e){var n,a,o,s,d,c,l,h;r(1,arguments);var f=i(t),v=f.getUTCFullYear(),w=m(),b=u(null!==(n=null!==(a=null!==(o=null!==(s=null==e?void 0:e.firstWeekContainsDate)&&void 0!==s?s:null==e||null===(d=e.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==o?o:w.firstWeekContainsDate)&&void 0!==a?a:null===(l=w.locale)||void 0===l||null===(h=l.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==n?n:1);if(!(b>=1&&b<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setUTCFullYear(v+1,0,b),y.setUTCHours(0,0,0,0);var p=g(y,e),T=new Date(0);T.setUTCFullYear(v,0,b),T.setUTCHours(0,0,0,0);var M=g(T,e);return f.getTime()>=p.getTime()?v+1:f.getTime()>=M.getTime()?v:v-1}function w(t,e){var n,a,i,o,s,d,c,l;r(1,arguments);var h=m(),f=u(null!==(n=null!==(a=null!==(i=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(s=e.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==i?i:h.firstWeekContainsDate)&&void 0!==a?a:null===(c=h.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==n?n:1),w=v(t,e),b=new Date(0);b.setUTCFullYear(w,0,f),b.setUTCHours(0,0,0,0);var y=g(b,e);return y}function b(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}function y(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+b(i,2)}function p(t,e){return t%60==0?(t>0?"-":"+")+b(Math.abs(t)/60,2):T(t,e)}function T(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+b(Math.floor(a/60),2)+n+b(a%60,2)}var M={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear();return n.ordinalNumber(r>0?r:1-r,{unit:"year"})}return function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return b("yy"===e?r%100:r,e.length)}(t,e)},Y:function(t,e,n,r){var a=v(t,r),i=a>0?a:1-a;return"YY"===e?b(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):b(i,e.length)},R:function(t,e){return b(l(t),e.length)},u:function(t,e){return b(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return b(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return b(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):b(n+1,2)}(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return b(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){var o=function(t,e){r(1,arguments);var n=i(t),a=g(n,e).getTime()-w(n,e).getTime();return Math.round(a/6048e5)+1}(t,a);return"wo"===e?n.ordinalNumber(o,{unit:"week"}):b(o,e.length)},I:function(t,e,n){var a=function(t){r(1,arguments);var e=i(t),n=c(e).getTime()-h(e).getTime();return Math.round(n/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):b(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):function(t,e){return b(t.getUTCDate(),e.length)}(t,e)},D:function(t,e,n){var a=function(t){r(1,arguments);var e=i(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var a=e.getTime();return Math.floor((n-a)/864e5)+1}(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):b(a,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return b(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return b(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return b(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return function(t,e){return b(t.getUTCHours()%12||12,e.length)}(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):function(t,e){return b(t.getUTCHours(),e.length)}(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):b(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):b(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):function(t,e){return b(t.getUTCMinutes(),e.length)}(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):function(t,e){return b(t.getUTCSeconds(),e.length)}(t,e)},S:function(t,e){return function(t,e){var n=e.length,r=t.getUTCMilliseconds();return b(Math.floor(r*Math.pow(10,n-3)),e.length)}(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return p(a);case"XXXX":case"XX":return T(a);case"XXXXX":case"XXX":default:return T(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return p(a);case"xxxx":case"xx":return T(a);case"xxxxx":case"xxx":default:return T(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+y(a,":");case"OOOO":default:return"GMT"+T(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+y(a,":");case"zzzz":default:return"GMT"+T(a,":")}},t:function(t,e,n,r){return b(Math.floor((r._originalDate||t).getTime()/1e3),e.length)},T:function(t,e,n,r){return b((r._originalDate||t).getTime(),e.length)}},C=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},D=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},k={p:D,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return C(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",C(a,e)).replace("{{time}}",D(i,e))}};function x(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var P=["D","DD"],U=["YY","YYYY"];function S(t){return-1!==P.indexOf(t)}function W(t){return-1!==U.indexOf(t)}function Y(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var E={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function O(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var N={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function q(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,i=null!=n&&n.width?String(n.width):a;r=t.formattingValues[i]||t.formattingValues[a]}else{var o=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[o]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function z(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;var o,u=i[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(s)?H(s,(function(t){return t.test(u)})):F(s,(function(t){return t.test(u)}));o=t.valueCallback?t.valueCallback(d):d,o=n.valueCallback?n.valueCallback(o):o;var c=e.slice(u.length);return{value:o,rest:c}}}function F(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function H(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function L(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var a=r[0],i=e.match(t.parsePattern);if(!i)return null;var o=t.valueCallback?t.valueCallback(i[0]):i[0];o=n.valueCallback?n.valueCallback(o):o;var u=e.slice(a.length);return{value:o,rest:u}}}var X={code:"en-US",formatDistance:function(t,e,n){var r,a=E[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:{date:O({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:O({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:O({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},formatRelative:function(t,e,n,r){return N[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:q({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:q({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:q({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:q({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:q({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:L({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:z({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:z({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:z({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:z({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:z({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}},j=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Q=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,G=/^'([^]*?)'?$/,B=/''/g,A=/[a-zA-Z]/;function R(t,e,n){var a,s,c,l,h,f,g,v,w,b,y,p,T,C,D,P,U,E;r(2,arguments);var O=String(e),N=m(),q=null!==(a=null!==(s=null==n?void 0:n.locale)&&void 0!==s?s:N.locale)&&void 0!==a?a:X,z=u(null!==(c=null!==(l=null!==(h=null!==(f=null==n?void 0:n.firstWeekContainsDate)&&void 0!==f?f:null==n||null===(g=n.locale)||void 0===g||null===(v=g.options)||void 0===v?void 0:v.firstWeekContainsDate)&&void 0!==h?h:N.firstWeekContainsDate)&&void 0!==l?l:null===(w=N.locale)||void 0===w||null===(b=w.options)||void 0===b?void 0:b.firstWeekContainsDate)&&void 0!==c?c:1);if(!(z>=1&&z<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var F=u(null!==(y=null!==(p=null!==(T=null!==(C=null==n?void 0:n.weekStartsOn)&&void 0!==C?C:null==n||null===(D=n.locale)||void 0===D||null===(P=D.options)||void 0===P?void 0:P.weekStartsOn)&&void 0!==T?T:N.weekStartsOn)&&void 0!==p?p:null===(U=N.locale)||void 0===U||null===(E=U.options)||void 0===E?void 0:E.weekStartsOn)&&void 0!==y?y:0);if(!(F>=0&&F<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!q.localize)throw new RangeError("locale must contain localize property");if(!q.formatLong)throw new RangeError("locale must contain formatLong property");var H=i(t);if(!o(H))throw new RangeError("Invalid time value");var L=x(H),G=d(H,L),B={firstWeekContainsDate:z,weekStartsOn:F,locale:q,_originalDate:H},R=O.match(Q).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,k[e])(t,q.formatLong):t})).join("").match(j).map((function(r){if("''"===r)return"'";var a=r[0];if("'"===a)return J(r);var i=M[a];if(i)return null!=n&&n.useAdditionalWeekYearTokens||!W(r)||Y(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!S(r)||Y(r,e,String(t)),i(G,r,q.localize,B);if(a.match(A))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return r})).join("");return R}function J(t){var e=t.match(G);return e?e[1].replace(B,"'"):t}}}]);