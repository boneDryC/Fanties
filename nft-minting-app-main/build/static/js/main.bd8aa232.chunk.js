(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{219:function(t,e,n){t.exports=n(506)},237:function(t,e){},261:function(t,e){},263:function(t,e){},339:function(t,e){},341:function(t,e){},374:function(t,e){},379:function(t,e){},381:function(t,e){},388:function(t,e){},401:function(t,e){},424:function(t,e){},433:function(t,e){},435:function(t,e){},505:function(t,e,n){},506:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(80),i=n.n(a),c=n(39),u=n(64),l=n(12),s=n(52),h=n(63),f=n.n(h),p=n(212),d=n.n(p),y=n(65),v=n(213),g=n(25),m={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(g.a)({},m,{loading:!0});case"CONNECTION_SUCCESS":return Object(g.a)({},t,{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(g.a)({},m,{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(g.a)({},t,{account:e.payload.account});default:return t}},w={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(g.a)({},t,{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(g.a)({},t,{loading:!1,totalSupply:e.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(g.a)({},w,{loading:!1,error:!0,errorMsg:e.payload});default:return t}},E=Object(y.b)({blockchain:x,data:b}),O=[v.a],L=Object(y.c)(y.a.apply(void 0,O)),j=Object(y.d)(E,L);function _(){_=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(C){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new O(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return j()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(C){return{type:"throw",arg:C}}}t.wrap=u;var s={};function h(){}function f(){}function p(){}var d={};c(d,o,function(){return this});var y=Object.getPrototypeOf,v=y&&y(y(L([])));v&&v!==e&&n.call(v,o)&&(d=v);var g=p.prototype=h.prototype=Object.create(d);function m(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function x(t,e){var r;this._invoke=function(o,a){function i(){return new e(function(r,i){!function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(h).then(function(t){s.value=t,i(s)},function(t){return r("throw",t,i,c)})}c(u.arg)}(o,a,r,i)})}return r=r?r.then(i,i):i()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=p,c(g,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},m(x.prototype),c(x.prototype,a,function(){return this}),t.AsyncIterator=x,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new x(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},m(g),c(g,i,"Generator"),c(g,o,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=L,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}var C=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},S=function(){return function(){var t=Object(c.a)(_().mark(function t(e){var n;return _().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),t.prev=1,t.next=4,j.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=t.sent,e({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),e(C("Could not load data from contract."));case 12:case"end":return t.stop()}},t,null,[[1,8]])}));return function(e){return t.apply(this,arguments)}}()};function A(){A=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(_){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new O(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return j()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(_){return{type:"throw",arg:_}}}t.wrap=u;var s={};function h(){}function f(){}function p(){}var d={};c(d,o,function(){return this});var y=Object.getPrototypeOf,v=y&&y(y(L([])));v&&v!==e&&n.call(v,o)&&(d=v);var g=p.prototype=h.prototype=Object.create(d);function m(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function x(t,e){var r;this._invoke=function(o,a){function i(){return new e(function(r,i){!function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(h).then(function(t){s.value=t,i(s)},function(t){return r("throw",t,i,c)})}c(u.arg)}(o,a,r,i)})}return r=r?r.then(i,i):i()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=p,c(g,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},m(x.prototype),c(x.prototype,a,function(){return this}),t.AsyncIterator=x,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new x(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},m(g),c(g,i,"Generator"),c(g,o,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=L,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}var N,T,k,I,P,F,M,D,G,R,K,U,Y,z,B,W,H,Q=function(t){return{type:"CONNECTION_FAILED",payload:t}},X=function(){return function(){var t=Object(c.a)(A().mark(function t(e){var n,r,o,a,i,c,u,l,s;return A().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CONNECTION_REQUEST"}),t.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,t.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return o=t.sent,t.next=12,o.json();case 12:if(a=t.sent,i=window,c=i.ethereum,!(c&&c.isMetaMask)){t.next=33;break}return f.a.setProvider(c),u=new d.a(c),t.prev=18,t.next=21,c.request({method:"eth_requestAccounts"});case 21:return l=t.sent,t.next=24,c.request({method:"net_version"});case 24:t.sent==a.NETWORK.ID?(s=new f.a(r,a.CONTRACT_ADDRESS),e({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:s,web3:u}}),c.on("accountsChanged",function(t){e(q(t[0]))}),c.on("chainChanged",function(){window.location.reload()})):e(Q("Change network to ".concat(a.NETWORK.NAME,"."))),t.next=31;break;case 28:t.prev=28,t.t0=t.catch(18),e(Q("Something went wrong."));case 31:t.next=34;break;case 33:e(Q("Install Metamask."));case 34:case"end":return t.stop()}},t,null,[[18,28]])}));return function(e){return t.apply(this,arguments)}}()},q=function(t){return function(){var e=Object(c.a)(A().mark(function e(n){return A().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:t}}),n(S(t));case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},J=n(13),V=J.a.div(N||(N=Object(l.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),function(t){var e=t.image;return e?"url(".concat(e,")"):"none"}),Z=J.a.div(T||(T=Object(l.a)(["\n  height: 8px;\n  width: 8px;\n"]))),$=J.a.div(k||(k=Object(l.a)(["\n  height: 16px;\n  width: 16px;\n"]))),tt=J.a.div(I||(I=Object(l.a)(["\n  height: 24px;\n  width: 24px;\n"]))),et=J.a.div(P||(P=Object(l.a)(["\n  height: 32px;\n  width: 32px;\n"]))),nt=J.a.div(F||(F=Object(l.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),function(t){var e=t.flex;return e||0},function(t){var e=t.fd;return e||"column"},function(t){var e=t.jc;return e||"flex-start"},function(t){var e=t.ai;return e||"flex-start"},function(t){return t.test?"pink":"none"},function(t){var e=t.image;return e?"url(".concat(e,")"):"none"}),rt=J.a.p(M||(M=Object(l.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),ot=(J.a.p(D||(D=Object(l.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),J.a.p(G||(G=Object(l.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"]))));J.a.div(R||(R=Object(l.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"])));function at(){at=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(_){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new O(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return j()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(_){return{type:"throw",arg:_}}}t.wrap=u;var s={};function h(){}function f(){}function p(){}var d={};c(d,o,function(){return this});var y=Object.getPrototypeOf,v=y&&y(y(L([])));v&&v!==e&&n.call(v,o)&&(d=v);var g=p.prototype=h.prototype=Object.create(d);function m(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function x(t,e){var r;this._invoke=function(o,a){function i(){return new e(function(r,i){!function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(h).then(function(t){s.value=t,i(s)},function(t){return r("throw",t,i,c)})}c(u.arg)}(o,a,r,i)})}return r=r?r.then(i,i):i()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=p,c(g,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},m(x.prototype),c(x.prototype,a,function(){return this}),t.AsyncIterator=x,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new x(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},m(g),c(g,i,"Generator"),c(g,o,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=L,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}var it=function(t,e){return t.length>e?"".concat(t.substring(0,e),"..."):t},ct=J.a.button(K||(K=Object(l.a)(["\n  padding: 10px;\n  border-radius: 0px;\n  border: solid;\n  border-color: grey;\n  background-color: black;\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 200px;\n  cursor: pointer;\n  box-shadow: none;\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),ut=J.a.button(U||(U=Object(l.a)(["\n  padding: 10px;\n  border-radius: 0px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 32px;\n  color: var(--button-text);\n  width: 240px;\n  height: 80px;\n  cursor: pointer;\n  box-shadow: none;\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),lt=J.a.button(Y||(Y=Object(l.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 32px;\n  color: var(--button-text);\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: none;\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),st=J.a.div(z||(z=Object(l.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),ht=J.a.img(B||(B=Object(l.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),ft=J.a.img(W||(W=Object(l.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 0px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),pt=J.a.a(H||(H=Object(l.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var dt=function(){var t=Object(s.b)(),e=Object(s.c)(function(t){return t.blockchain}),n=Object(s.c)(function(t){return t.data}),a=Object(r.useState)(!1),i=Object(u.a)(a,2),l=i[0],h=i[1],f=Object(r.useState)("Click buy to mint your NFT."),p=Object(u.a)(f,2),d=p[0],y=p[1],v=Object(r.useState)(1),g=Object(u.a)(v,2),m=g[0],x=g[1],w=Object(r.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),b=Object(u.a)(w,2),E=b[0],O=b[1],L=function(){""!==e.account&&null!==e.smartContract&&t(S(e.account))},j=function(){var t=Object(c.a)(at().mark(function t(){var e,n;return at().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,O(n);case 7:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)(function(){j()},[]),Object(r.useEffect)(function(){L()},[e.account]),o.a.createElement(V,null,o.a.createElement(nt,{flex:1,ai:"center",style:{padding:0,backgroundColor:"var(--primary)"},image:E.SHOW_BACKGROUND?"/config/images/bg.png":null},o.a.createElement("a",{href:E.MARKETPLACE_LINK},o.a.createElement(ht,{alt:"logo",src:"/config/images/logo.png",style:{paddingTop:60}})),o.a.createElement($,null),o.a.createElement(st,{flex:1,style:{padding:10},test:!0},o.a.createElement(nt,{flex:1,jc:"center",ai:"center"},o.a.createElement(ft,{alt:"example",src:"/config/images/example.gif"})),o.a.createElement(et,null),o.a.createElement(nt,{flex:1,jc:"center",ai:"center",style:{padding:0,borderRadius:24,border:"0px dashed var(--secondary)"}},o.a.createElement(rt,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"}},n.totalSupply," / ",E.MAX_SUPPLY),o.a.createElement(ot,{style:{textAlign:"center",color:"var(--primary-text)"}},o.a.createElement(pt,{target:"_blank",href:E.SCAN_LINK},it(E.CONTRACT_ADDRESS,15))),o.a.createElement("span",{style:{textAlign:"center"}},o.a.createElement(ct,{onClick:function(t){window.open("https://paintswap.finance/marketplace/collections/0xBD905A2c22b83F4299b6c4779cA4344Fff25F136","_blank")},style:{margin:"5px"}},E.MARKETPLACE)),o.a.createElement($,null),Number(n.totalSupply)>=E.MAX_SUPPLY?o.a.createElement(o.a.Fragment,null,o.a.createElement(rt,{style:{textAlign:"center",color:"var(--accent-text)"}},"The sale has ended."),o.a.createElement(ot,{style:{textAlign:"center",color:"var(--accent-text)"}},"You can still find ",E.NFT_NAME," on"),o.a.createElement($,null),o.a.createElement(pt,{target:"_blank",href:E.MARKETPLACE_LINK},E.MARKETPLACE)):o.a.createElement(o.a.Fragment,null,o.a.createElement(rt,{style:{textAlign:"center",color:"var(--accent-text)"}},"1 ",E.SYMBOL," costs ",E.DISPLAY_COST," ",E.NETWORK.SYMBOL,"."),o.a.createElement(Z,null),""===e.account||null===e.smartContract?o.a.createElement(nt,{ai:"center",jc:"center"},o.a.createElement(ot,{style:{textAlign:"center",color:"var(--accent-text)"}},"Connect to the ",E.NETWORK.NAME," network"),o.a.createElement($,null),o.a.createElement(ut,{onClick:function(e){e.preventDefault(),t(X()),L()}},"CONNECT"),""!==e.errorMsg?o.a.createElement(o.a.Fragment,null,o.a.createElement($,null),o.a.createElement(ot,{style:{textAlign:"center",color:"var(--accent-text)"}},e.errorMsg)):null):o.a.createElement(o.a.Fragment,null,o.a.createElement(ot,{style:{textAlign:"center",color:"var(--accent-text)"}},d),o.a.createElement(tt,null),o.a.createElement(nt,{ai:"center",jc:"center",fd:"row"},o.a.createElement(lt,{style:{lineHeight:.4},disabled:l?1:0,onClick:function(t){t.preventDefault(),function(){var t=m-1;t<1&&(t=1),x(t)}()}},"-"),o.a.createElement(tt,null),o.a.createElement(ot,{style:{fontSize:32,textAlign:"center",color:"var(--accent-text)"}},m),o.a.createElement(tt,null),o.a.createElement(lt,{disabled:l?1:0,onClick:function(t){t.preventDefault(),function(){var t=m+1;t>250&&(t=250),x(t)}()}},"+")),o.a.createElement($,null),o.a.createElement(nt,{ai:"center",jc:"center",fd:"row"},o.a.createElement(ut,{disabled:l?1:0,onClick:function(n){n.preventDefault(),function(){var n=E.WEI_COST,r=E.GAS_LIMIT,o=String(n*m),a=String(r*m);console.log("Cost: ",o),console.log("Gas limit: ",a),y("Minting your ".concat(E.NFT_NAME,"...")),h(!0),e.smartContract.methods.mint(e.account,m).send({gasLimit:String(a),to:E.CONTRACT_ADDRESS,from:e.account,value:o}).once("error",function(t){console.log(t),y("Sorry, something went wrong please try again."),h(!1)}).then(function(n){console.log(n),y("NICE, the ".concat(E.NFT_NAME," is yours!")),h(!1),t(S(e.account))})}(),L()}},l?"BUSY":"BUY")))),o.a.createElement(tt,null)),o.a.createElement(et,null),o.a.createElement(nt,{flex:1,jc:"center",ai:"center"},o.a.createElement(ft,{alt:"example",src:"/config/images/example.gif",style:{transform:"scaleX(-1)"}}))),o.a.createElement(tt,null),o.a.createElement(nt,{jc:"center",ai:"center",style:{width:"70%"}},o.a.createElement(ot,{style:{textAlign:"center",color:"var(--primary-text)"}}),o.a.createElement($,null),o.a.createElement(ot,{style:{textAlign:"center",color:"var(--primary-text)"}}))))},yt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,511)).then(function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),r(t),o(t),a(t),i(t)})};n(505);i.a.render(o.a.createElement(s.a,{store:j},o.a.createElement(dt,null)),document.getElementById("root")),yt()}},[[219,1,2]]]);
//# sourceMappingURL=main.bd8aa232.chunk.js.map