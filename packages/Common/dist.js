(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?b(exports):'function'==typeof define&&define.amd?define(['exports'],b):b((a.Slup=a.Slup||{},a.Slup.Common={}))})(this,function(a){'use strict';var b=function(a,b){for(var f,g=1540483477,i=b^a.length,h=a.length,j=0;4<=h;)f=c(a,j),f=e(f,g),f^=f>>>24,f=e(f,g),i=e(i,g),i^=f,j+=4,h-=4;return 3===h?(i^=d(a,j),i^=a.charCodeAt(j+2)<<16,i=e(i,g)):2===h?(i^=d(a,j),i=e(i,g)):1===h?(i^=a.charCodeAt(j),i=e(i,g)):void 0,i^=i>>>13,i=e(i,g),i^=i>>>15,i>>>0},c=function(a,b){return a.charCodeAt(b++)+(a.charCodeAt(b++)<<8)+(a.charCodeAt(b++)<<16)+(a.charCodeAt(b)<<24)},d=function(a,b){return a.charCodeAt(b++)+(a.charCodeAt(b++)<<8)},e=function(a,b){a|=0,b|=0;var c=65535&a,d=a>>>16,e=0|c*b+((65535&d*b)<<16);return e},f={};a.CHANNEL='__slup__',a.SHADOWS=['none','0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)','0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)','0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)','0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)','0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'],a.hash=function(a){return b(a,a.length).toString(36)},a.hashStr=b,a.UInt32=c,a.UInt16=d,a.Umul32=e,a.memorize=function(a){return function(b){return void 0===f[b]&&(f[b]=a(b)),f[b]}},a.sanitize=function(a){return'number'==typeof a?a+'px':a},a.capitalize=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},a.vise=function(a,b,c){return Math.min(Math.max(a,b),c)},a.styledMap=function(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];return function(b){var c=a[a.length-1],d=Object.keys(c);if('string'==typeof a[0]){var e=a[0],f=b[e];if(c[f])return c[f]}else{var g=d.filter(function(a){return b[a]}),h=g[g.length-1];if(g.length&&'function'==typeof c[h])return c[h](b);if(g.length)return c[g.pop()]}return c.hasOwnProperty('default')?c['default']:c[d.pop()]}},Object.defineProperty(a,'__esModule',{value:!0})});