!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("web-integrate-utils",[],t):"object"==typeof exports?exports["web-integrate-utils"]=t():e["web-integrate-utils"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.loadScript=t.url=t.check=t.date=t.number=t.array=t.string=t.phone=t.email=t.type=void 0;var i=n(1),u=r(i),o=n(2),c=r(o),a=n(3),s=r(a),f=n(4),l=r(f),d=n(6),p=r(d),h=n(8),E=r(h),g=n(10),S=r(g),y=n(11),m=r(y),v=n(12),_=r(v),b=n(13),A=r(b);t.type=u.default,t.email=c.default,t.phone=s.default,t.string=l.default,t.array=p.default,t.number=E.default,t.date=S.default,t.check=m.default,t.url=_.default,t.loadScript=A.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={isString:function(e){return"String"===Object.prototype.toString.call(e).slice(8,-1)},isNumber:function(e){return"Number"===Object.prototype.toString.call(e).slice(8,-1)},isBoolean:function(e){return"Boolean"===Object.prototype.toString.call(e).slice(8,-1)},isFunction:function(e){return"Function"===Object.prototype.toString.call(e).slice(8,-1)},isNull:function(e){return"Null"===Object.prototype.toString.call(e).slice(8,-1)},isUndefined:function(e){return"Undefined"===Object.prototype.toString.call(e).slice(8,-1)},isObject:function(e){return"Object"===Object.prototype.toString.call(e).slice(8,-1)},isArray:function(e){return"Array"===Object.prototype.toString.call(e).slice(8,-1)},isDate:function(e){return"Date"===Object.prototype.toString.call(e).slice(8,-1)},isRegExp:function(e){return"RegExp"===Object.prototype.toString.call(e).slice(8,-1)},isError:function(e){return"Error"===Object.prototype.toString.call(e).slice(8,-1)},isSymbol:function(e){return"Symbol"===Object.prototype.toString.call(e).slice(8,-1)},isPromise:function(e){return"Promise"===Object.prototype.toString.call(e).slice(8,-1)},isSet:function(e){return"Set"===Object.prototype.toString.call(e).slice(8,-1)},isBeing:function(e){return!(!e||"null"===e||"undefined"===e||"false"===e||"NaN"===e)},isTrue:function(e){return!this.isFalse(e)},getClientType:function(){var e=navigator.userAgent;return e.indexOf("Android")>-1||e.indexOf("Linux")>-1?"Android":e.indexOf("iPhone")>-1?"iPhone":e.indexOf("iPad")>-1?"iPad":e.indexOf("Windows Phone")>-1?"Windows Phone":"other"},isIos:function(){return"iPhone"===this.getClientType||"iPad"===this.getClientType},isAndroid:function(){return"iPhone"===this.getClientType},isWinPhone:function(){return"Windows Phone"===this.getClientType},isPC:function(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],n=!0,r=0;r<t.length;r++)if(e.indexOf(t[r])>0){n=!1;break}return n},getBrowserType:function(){var e=navigator.userAgent,t=e.indexOf("Opera")>-1,n=e.indexOf("compatible")>-1&&e.indexOf("MSIE")>-1&&!t,r=e.indexOf("Trident")>-1&&e.indexOf("rv:11.0")>-1,i=e.indexOf("Edge")>-1&&!n,u=e.indexOf("Firefox")>-1,o=e.indexOf("Safari")>-1&&-1==e.indexOf("Chrome"),c=e.indexOf("Chrome")>-1&&e.indexOf("Safari")>-1;if(n){new RegExp("MSIE (\\d+\\.\\d+);").test(e);var a=parseFloat(RegExp.$1);return 7==a?"IE7":8==a?"IE8":9==a?"IE9":10==a?"IE10":"IE7以下"}return r?"IE11":i?"Edge":u?"FF":t?"Opera":o?"Safari":c?"Chrome":void 0}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={REGEXS:{EMAIL_PATTERN:/^[-\w\+]+(?:\.[-\w]+)*@[-a-z0-9]+(?:\.[a-z0-9]+)*(?:\.[a-z]{2,})$/i},isEmail:function(e){return this.REGEXS.EMAIL_PATTERN.test(e)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={REGEXS:{CHINA_TELECOM_PATTERN:/^(?:\+86)?1(?:33|53|7[37]|8[019])\d{8}$|^(?:\+86)?1700\d{7}$/,CHINA_UNICOM_PATTERN:/^(?:\+86)?1(?:3[0-2]|4[5]|5[56]|7[56]|8[56])\d{8}$|^(?:\+86)?170[7-9]\d{7}$/,CHINA_MOBILE_PATTERN:/^(?:\+86)?1(?:3[4-9]|4[7]|5[0-27-9]|7[8]|8[2-478])\d{8}$|^(?:\+86)?1705\d{7}$/,FIXED_TEL_PATTERN:/^(?:\(\d{3,4}\)|\d{3,4}-)?\d{7,8}(?:-\d{1,4})?$/,PHONE_PATTERN:/^(?:\+86)?(?:13\d|14[57]|15[0-35-9]|17[35-8]|18\d)\d{8}$|^(?:\+86)?170[057-9]\d{7}$/,PHONE_SIMPLE_PATTERN:/^(?:\+86)?1\d{10}$/},isPhoneCallNum:function(e){return this.REGEXS.FIXED_TEL_PATTERN.test(e)},isChinaTelecomPhone:function(e){return this.REGEXS.CHINA_TELECOM_PATTERN.test(e)},isChinaUnicomPhone:function(e){return this.REGEXS.CHINA_UNICOM_PATTERN.test(e)},isChinaMobilePhone:function(e){return this.REGEXS.CHINA_MOBILE_PATTERN.test(e)},isPhone:function(e){return this.REGEXS.PHONE_PATTERN.test(e)},isPhoneNumBySize:function(e){return this.REGEXS.PHONE_SIMPLE_PATTERN.test(e)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(5),t.default={isEmpty:function(e){return null===e||""===e},isBlank:function(e){return null===e||/^\s*$/.test(e)},isEquals:function(e,t){return e===t},isEqualsIgnoreCase:function(e,t){return e.toLocaleLowerCase()==t.toLocaleLowerCase()},isContains:function(e,t){return e.indexOf(t)>=0},isEnWords:function(e){return/^[a-z]+$/i.test(e)},isEnSpace:function(e){return/^[a-z\s]*$/i.test(e)},isEnNumber:function(e){return/^[a-z0-9]+$/i.test(e)},isEnNumberSpace:function(e){return/^[a-z0-9\s]*$/i.test(e)},isChinese:function(e){return/^[\u4E00-\u9FA5]+$/.test(e)},trimSpace:function(e){return e.replace(/\s+/g,"")},filterTag:function(e){return e=e.replace(/&/gi,"&amp;"),e=e.replace(/</gi,"&lt;"),e=e.replace(/>/gi,"&gt;"),e=e.replace(" ","&nbsp;")},removeChinese:function(e){return e.replace(/[\u4E00-\u9FA5]+/gm,"")},removeBlank:function(e){return e.replace(/\s+/g,"")},firstToUppercase:function(e){return null===e||0===e.length?e:e.replace(/^[a-z]/,function(e){return e.toLocaleUpperCase()})},firstToLowerCase:function(e){return null===e||0===e.length?e:e.replace(/^[A-Z]/,function(e){return e.toLocaleUpperCase()})},toogleSwapCase:function(e){return e.replace(/[a-z]/gi,function(e){return e>="A"&&e<="Z"?e.toLocaleLowerCase():e>="a"&&e<="z"?e.toLocaleUpperCase():void 0})},reverse:function(e){return this.isBlank(e),e.split("").reverse().join("")},escapeMetacharacter:function(e){return"^$()*+.[]|\\-?{}".indexOf(e)>=0&&(e="\\"+e),e},escapeMetacharacterOfStr:function(e){return e.replace(/[-$^()*+.\[\]|\\?{}]/gm,"\\$&")},chineseToUnicode:function(e){return e.replace(/[\u4E00-\u9FA5]/g,function(e){return"\\u"+e.charCodeAt(0).toString(16)})},removeSpecialCharacter:function(e){return e.replace(/[!-\/:-@\[-`{-~]/g,"")}}},function(e,t,n){"use strict";String.prototype.getBytes=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=0,r="",i=!1;if(null!=this)for(var u=0;u<this.length;u++){var o=this.charAt(u),c=1;c=/^[\u0000-\u00ff]$/.test(o)?1:2,n+=c,n<=e?r+=o:i=!0}return e?i?r+=t:r:n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(7),t.default={getMaxValue:function(e){return Math.max.apply(Math,e)},getMinValue:function(e){return Math.min.apply(Math,e)},isInclude:function(e,t){for(var n=e.length,r=0;r<n;r++)if(t===e[r])return!0;return!1}}},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Array.prototype.delete=function(){return this.splice(arguments[0],1),this},Array.prototype.replace=function(){return this.splice(arguments[0],1,arguments[1]),this},Array.prototype.appendBefore=function(){for(var e=1;e<arguments.length;e++)this.splice(arguments[0]+e-1,0,arguments[e]);return this},Array.prototype.appendAfter=function(){for(var e=1;e<arguments.length;e++)this.splice(arguments[0]+e,0,arguments[e]);return this},Array.prototype.unique=function(){for(var e={},t=[],n=0;n<this.length;n++){var r=this[n];e[r]||(e[r]=!0,t.push(r))}return t},Array.prototype.sortByKey=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=[].concat(r(new Set(this)));try{for(var i=0;i<n.length;i++)for(var u=0;u<n.length-1-i;u++)if(Number(n[u][e])>Number(n[u+1][e])){var o=n[u+1];n[u+1]=n[u],n[u]=o}}catch(e){console.log(e)}return t?n:n.reverse()},Array.prototype.flatten=function(){for(var e=[].concat(r(this)),t=[];e.length;){var n=e.pop();Array.isArray(n)?e.push.apply(e,r(n)):t.push(n)}return t.reverse()},Array.prototype.flattenTree=function(){function e(r){for(var i=0;i<r.length;i++)n.push(r[i]),r[i][t]&&r[i][t].length&&e(r[i][t])}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"children",n=[];return e(this),n},Array.prototype.formatTree=function(e){function t(i){return i.map(function(i){return i[n]&&i[n].length&&t(i[n]),r++,i.nodeKey=r,e(i)})}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"children",r=1;return t(this)},Array.prototype.setValueByKey=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["key"],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["value"];return"{}"===JSON.stringify(e)?this:[].concat(r(this)).map(function(r){return t.forEach(function(t,i){if(e.hasOwnProperty(r[t])){var u=e[r[t]];r[n[i]]=null===u?"":u.toString()}else r[n[i]]=""}),r})},Array.prototype.shuffle=function(){for(var e=[].concat(r(this)),t=e.length-1;t>=0;t--){var n=Math.floor(Math.random()*(e.length-1)),i=e[t];e[t]=e[n],e[n]=i}return e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(9),t.default={isNumeric:function(e){return/^(?:[1-9]\d*|0)(?:\.\d+)?$/.test(e)},isDecimal:function(e){return/^[-+]?(?:0|[1-9]\d*)\.\d+$/.test(e)},isNegativeDecimal:function(e){return/^\-(?:0|[1-9]\d*)\.\d+$/.test(e)},isPositiveDecimal:function(e){return/^\+?(?:0|[1-9]\d*)\.\d+$/.test(e)},isInteger:function(e){return/^[-+]?(?:0|[1-9]\d*)$/.test(e)},isPositiveInteger:function(e){return/^\+?(?:0|[1-9]\d*)$/.test(e)},isNegativeInteger:function(e){return/^\-(?:0|[1-9]\d*)$/.test(e)}}},function(e,t,n){"use strict";Number.prototype.factorial=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return t<=1?1:t*e(t-1)}return e(parseInt(this||1))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={timestampFormat:function(){function e(e){return e<10?"0"+e:e}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now(),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Y-M-D H:I:S";t||(t=Date.now()),t=Number(t);var r=t?new Date(t):new Date,i=r.getFullYear(),u=e(r.getMonth()+1),o=e(r.getDate()),c=e(r.getHours()),a=e(r.getMinutes()),s=e(r.getSeconds());return n.replace(/Y|M|D|H|I|S/gi,function(e){return{Y:i,M:u,D:o,H:c,I:a,S:s}[e]})},isLeapYear:function(e){return e%4==0&&e%100!=0||e%400==0},getDaysOfMonth:function(e,t){return[31,this.isLeapYear(e)?29:28,31,30,31,30,31,31,30,31,30,31][t-1]},dayOfTheYear:function(e){for(var t=new Date(e),n=t.getFullYear(),r=t.getMonth(),i=t.getDate(),u=[31,this.isLeapYear(n)?29:28,31,30,31,30,31,31,30,31,30,31],o=0;o<r;o++)i+=u[o];return i},getZoneNameValue:function(e){var t=new Date(e);t=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate()));var n=t.toString().match(/([A-Z]+)([-+]\d+:?\d+)/);return{name:n[1],value:n[2]}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={REGEXS:{AllSpecialString:/\u0060|\u007e|\u0021|\u0040|\u0023|\u0024|\u0025|\u005e|\u0026|\u002a|\u0028|\u0029|\u002d|\u003d|\u002b|\u003c|\u003e|\u003f|\u002c|\u002e|\u002f|\u003a|\u0022|\u003b|\u0027|\u007b|\u007d|\u005b|\u005d|\u005c|\u007c|\uff01|\u0040|\u0023|\uffe5|\u0025|\u2026|\u2026|\u0026|\u002a|\uff08|\uff09|\u2014|\u2014|\u002b|\u300c|\u300d|\u3010|\u3011|\u300a|\u300b|\uff1f|\uff1a|\u201c|\u201d|\uff1b|\u2018|\u2019|\u007c|\u3001|\u0020/,SpecialString:/\u0060|\u0024|\u0026|\u002a|\u005c|\u003c|\u003e/,email:/[\w!#$%&'*+\/=?^_`{|}~-]+(?:\.[\w!#$%&'*+\/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,url:/^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/,password:/[\w\`~!@#$%^&*()-=_+{}\[\]:";'<>?,.\/*-+.\|]{8,12}$/,code:/^[A-Za-z0-9]{4}$/,drivingLicense:/^[0-9]{12}$/,phone:/^1[345678]\d{9}$/,name:/^[\u4E00-\u9FA5A-Za-z]+$/,EnString:/^[A-Za-z]+$/,EnNumber:/^[A-Za-z0-9]+$/,Number:/^[0-9]+$/,CnString:/^[\u4E00-\u9FA5]+$/,CnNumber:/^[\u4E00-\u9FA50-9]+$/,RegisterNumber:/(^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$)|(^\d{15}$)/,CarNo:/^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5,6}$/,PersonNo:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/},checkString:function(e){return!!e&&!e.match(this.REGEXS.AllSpecialString)},checkAge:function(e){return console.log(e,"input"),!!this.REGEXS.Number.test(e)&&!(e<18||e>70)},checkTextArea:function(e){return!e.match(this.REGEXS.SpecialString)},checkNumber:function(e){return this.REGEXS.Number.test(e)},checkPassword:function(e){return this.REGEXS.password.test(e)},checkCode:function(e){return this.REGEXS.code.test(e)},checkPhone:function(e){return this.REGEXS.phone.test(e)},checkCName:function(e){return this.REGEXS.name.test(e)},checkEnString:function(e){return this.REGEXS.EnString.test(e)},checkEnNumber:function(e){return this.REGEXS.EnNumber.test(e)},checkCnString:function(e){return this.REGEXS.CnString.test(e)},checkCnNumber:function(e){return this.REGEXS.CnNumber.test(e)},checkRegisterNumber:function(e){return this.REGEXS.RegisterNumber.test(e)},checkUrl:function(e){return this.REGEXS.url.test(e)},checkCarNo:function(e){return this.REGEXS.CarNo.test(e)},checkPersonCount:function(e){return this.REGEXS.PersonNo.test(e)},checkDrivingLicense:function(e){return this.REGEXS.drivingLicense.test(e)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={REGEXS:{URL_PATTERN:/^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/,PARAMS_PATTERN:/(\w+)=([^&#]*)/gim},isUrl:function(e){return this.REGEXS.URL_PATTERN.test(e)},urlTransformParams:function(e){for(var t=null,n={};null!=(t=this.REGEXS.PARAMS_PATTERN.exec(e));)n[t[1]]=t[2];return n},urlEncode:function(e){return window.encodeURIComponent(JSON.stringify(e))},urlDecode:function(e){return JSON.parse(window.decodeURIComponent(e))}}},function(e,t,n){"use strict";function r(e,t){function n(e){document.body.removeChild(e)}return function(e){var r=document.createElement("script");document.body.appendChild(r);var i=new Promise(function(e,i){r.addEventListener("load",function(i){n(r),t||e(i)},!1),r.addEventListener("error",function(e){n(r),i(e)},!1),t&&(window.____callback____=function(){e(),window.____callback____=null})});return t&&(e+="&callback=____callback____"),r.src=e,i}(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r}])});
//# sourceMappingURL=web-integrate-utils.js.map