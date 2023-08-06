/*! For license information please see 474.c76babd2.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[474],{474:function(t,e,r){var n=r(165),o=r(861),i=r(671),a=r(144),c=function(){function t(){(0,i.Z)(this,t),this.apiKEY="62a7cdfe8b4c1ec0214219fd4a0d9f1e",this.baseURL="https://api.themoviedb.org/3"}return(0,a.Z)(t,[{key:"fetchTrendsMovies",value:function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var e,r,o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(this.baseURL,"/trending/all/day?api_key=").concat(this.apiKEY),t.prev=1,t.next=4,fetch(e);case 4:if((r=t.sent).ok){t.next=7;break}throw new Error("Network response was not ok");case 7:return t.next=9,r.json();case 9:return o=t.sent,t.abrupt("return",o);case 13:t.prev=13,t.t0=t.catch(1),console.log("Error fetching movies:",t.t0);case 16:case"end":return t.stop()}}),t,this,[[1,13]])})));return function(){return t.apply(this,arguments)}}()},{key:"movieByQuery",value:function(){var t=(0,o.Z)((0,n.Z)().mark((function t(e){var r,o,i;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(this.baseURL,"/search/movie?api_key=").concat(this.apiKEY,"&query=").concat(e),t.prev=1,t.next=4,fetch(r);case 4:if((o=t.sent).ok){t.next=7;break}throw new Error("Network response was not ok");case 7:return t.next=9,o.json();case 9:return i=t.sent,t.abrupt("return",i);case 13:t.prev=13,t.t0=t.catch(1),console.log("Error fetching movies:",t.t0);case 16:case"end":return t.stop()}}),t,this,[[1,13]])})));return function(e){return t.apply(this,arguments)}}()},{key:"MovieById",value:function(){var t=(0,o.Z)((0,n.Z)().mark((function t(e){var r,o,i;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(this.baseURL,"/movie/").concat(e,"?api_key=").concat(this.apiKEY),t.prev=1,t.next=4,fetch(r);case 4:if((o=t.sent).ok){t.next=7;break}throw new Error("Network response was not ok");case 7:return t.next=9,o.json();case 9:return i=t.sent,t.abrupt("return",i);case 13:t.prev=13,t.t0=t.catch(1),console.log("Error fetching movies:",t.t0);case 16:case"end":return t.stop()}}),t,this,[[1,13]])})));return function(e){return t.apply(this,arguments)}}()},{key:"CastById",value:function(){var t=(0,o.Z)((0,n.Z)().mark((function t(e){var r,o,i;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(this.baseURL,"/movie/").concat(e,"/credits?api_key=").concat(this.apiKEY),t.prev=1,t.next=4,fetch(r);case 4:if((o=t.sent).ok){t.next=7;break}throw new Error("Network response was not ok");case 7:return t.next=9,o.json();case 9:return i=t.sent,t.abrupt("return",i);case 13:t.prev=13,t.t0=t.catch(1),console.log("Error fetching movies:",t.t0);case 16:case"end":return t.stop()}}),t,this,[[1,13]])})));return function(e){return t.apply(this,arguments)}}()},{key:"ReviewsById",value:function(){var t=(0,o.Z)((0,n.Z)().mark((function t(e){var r,o,i;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(this.baseURL,"/movie/").concat(e,"/reviews?api_key=").concat(this.apiKEY),t.prev=1,t.next=4,fetch(r);case 4:if((o=t.sent).ok){t.next=7;break}throw new Error("Network response was not ok");case 7:return t.next=9,o.json();case 9:return i=t.sent,t.abrupt("return",i);case 13:t.prev=13,t.t0=t.catch(1),console.log("Error fetching movies:",t.t0);case 16:case"end":return t.stop()}}),t,this,[[1,13]])})));return function(e){return t.apply(this,arguments)}}()}]),t}();e.Z=c},861:function(t,e,r){function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}r.d(e,{Z:function(){return o}})},165:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(2);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(P){h=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),c=new j(n||[]);return i(a,"_invoke",{value:E(t,r,c)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=f;var p={};function v(){}function y(){}function d(){}var w={};h(w,c,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(O([])));m&&m!==e&&r.call(m,c)&&(w=m);var k=d.prototype=v.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(i,a,c,u){var s=l(t[i],t,a);if("throw"!==s.type){var h=s.arg,f=h.value;return f&&"object"==(0,n.Z)(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(f).then((function(t){h.value=t,c(h)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var a;i(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function E(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return N()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function Z(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function O(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return y.prototype=d,i(k,"constructor",{value:d,configurable:!0}),i(d,"constructor",{value:y,configurable:!0}),y.displayName=h(d,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,h(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},x(b.prototype),h(b.prototype,u,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(k),h(k,s,"Generator"),h(k,c,(function(){return this})),h(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Z),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),Z(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;Z(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}}}]);
//# sourceMappingURL=474.c76babd2.chunk.js.map