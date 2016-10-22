<<<<<<< HEAD
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "javascript/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(335);


/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _head = __webpack_require__(336);
	
	var _head2 = _interopRequireDefault(_head);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Loader = function () {
	    function Loader() {
	        _classCallCheck(this, Loader);
	
	        // Singleton Object
	        if (window.CM == null) {
	            window.CM = {};
	        }
	        window.CM.Loader = this;
	
	        var scope = this;
	        head.ready(document, function () {
	            head.load(["/assets/app.css", "/assets/app.js"], scope.startApplication);
	        });
	    }
	
	    _createClass(Loader, [{
	        key: "removeGFX",
	        value: function removeGFX() {
	            document.body.setAttribute("class", document.body.getAttribute("class").split("hideloader").join(""));
	            var preloader = document.getElementsByClassName("preloader")[0];
	            if (preloader && preloader.parentNode) {
	                preloader.parentNode.removeChild(preloader);
	            }
	        }
	    }, {
	        key: "startApplication",
	        value: function startApplication() {
	            if (window.CM.App == undefined) {
	                setTimeout(this.startApplication, 500);
	            } else {
	
	                CM.App.blastoff();
	
	                document.body.setAttribute("class", document.body.getAttribute("class").split("loading").join("loaded"));
	                setTimeout(function () {
	                    -document.body.setAttribute("class", document.body.getAttribute("class").split("loaded").join("hideloader"));
	                }, 500);
	                setTimeout(function () {
	                    CM.Loader.removeGFX();
	                }, 1000);
	            }
	        }
	    }]);
	
	    return Loader;
	}();
	
	;
	
	exports.default = new Loader();

/***/ },

/***/ 336:
/***/ function(module, exports) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/*! head.load - v1.0.3 */
	(function (n, t) {
	    "use strict";
	
	    function w() {}
	
	    function u(n, t) {
	        if (n) {
	            (typeof n === "undefined" ? "undefined" : _typeof(n)) == "object" && (n = [].slice.call(n));
	            for (var i = 0, r = n.length; i < r; i++) {
	                t.call(n, n[i], i);
	            }
	        }
	    }
	
	    function it(n, i) {
	        var r = Object.prototype.toString.call(i).slice(8, -1);
	        return i !== t && i !== null && r === n;
	    }
	
	    function s(n) {
	        return it("Function", n);
	    }
	
	    function a(n) {
	        return it("Array", n);
	    }
	
	    function et(n) {
	        var i = n.split("/"),
	            t = i[i.length - 1],
	            r = t.indexOf("?");
	        return r !== -1 ? t.substring(0, r) : t;
	    }
	
	    function f(n) {
	        (n = n || w, n._done) || (n(), n._done = 1);
	    }
	
	    function ot(n, t, r, u) {
	        var f = (typeof n === "undefined" ? "undefined" : _typeof(n)) == "object" ? n : {
	            test: n,
	            success: !t ? !1 : a(t) ? t : [t],
	            failure: !r ? !1 : a(r) ? r : [r],
	            callback: u || w
	        },
	            e = !!f.test;
	        return e && !!f.success ? (f.success.push(f.callback), i.load.apply(null, f.success)) : e || !f.failure ? u() : (f.failure.push(f.callback), i.load.apply(null, f.failure)), i;
	    }
	
	    function v(n) {
	        var t = {},
	            i,
	            r;
	        if ((typeof n === "undefined" ? "undefined" : _typeof(n)) == "object") for (i in n) {
	            !n[i] || (t = {
	                name: i,
	                url: n[i]
	            });
	        } else t = {
	            name: et(n),
	            url: n
	        };
	        return (r = c[t.name], r && r.url === t.url) ? r : (c[t.name] = t, t);
	    }
	
	    function y(n) {
	        n = n || c;
	        for (var t in n) {
	            if (n.hasOwnProperty(t) && n[t].state !== l) return !1;
	        }return !0;
	    }
	
	    function st(n) {
	        n.state = ft;
	        u(n.onpreload, function (n) {
	            n.call();
	        });
	    }
	
	    function ht(n) {
	        n.state === t && (n.state = nt, n.onpreload = [], rt({
	            url: n.url,
	            type: "cache"
	        }, function () {
	            st(n);
	        }));
	    }
	
	    function ct() {
	        var n = arguments,
	            t = n[n.length - 1],
	            r = [].slice.call(n, 1),
	            f = r[0];
	        return (s(t) || (t = null), a(n[0])) ? (n[0].push(t), i.load.apply(null, n[0]), i) : (f ? (u(r, function (n) {
	            s(n) || !n || ht(v(n));
	        }), b(v(n[0]), s(f) ? f : function () {
	            i.load.apply(null, r);
	        })) : b(v(n[0])), i);
	    }
	
	    function lt() {
	        var n = arguments,
	            t = n[n.length - 1],
	            r = {};
	        return (s(t) || (t = null), a(n[0])) ? (n[0].push(t), i.load.apply(null, n[0]), i) : (u(n, function (n) {
	            n !== t && (n = v(n), r[n.name] = n);
	        }), u(n, function (n) {
	            n !== t && (n = v(n), b(n, function () {
	                y(r) && f(t);
	            }));
	        }), i);
	    }
	
	    function b(n, t) {
	        if (t = t || w, n.state === l) {
	            t();
	            return;
	        }
	        if (n.state === tt) {
	            i.ready(n.name, t);
	            return;
	        }
	        if (n.state === nt) {
	            n.onpreload.push(function () {
	                b(n, t);
	            });
	            return;
	        }
	        n.state = tt;
	        rt(n, function () {
	            n.state = l;
	            t();
	            u(h[n.name], function (n) {
	                f(n);
	            });
	            o && y() && u(h.ALL, function (n) {
	                f(n);
	            });
	        });
	    }
	
	    function at(n) {
	        n = n || "";
	        var t = n.split("?")[0].split(".");
	        return t[t.length - 1].toLowerCase();
	    }
	
	    function rt(t, i) {
	        function e(t) {
	            t = t || n.event;
	            u.onload = u.onreadystatechange = u.onerror = null;
	            i();
	        }
	
	        function o(f) {
	            f = f || n.event;
	            (f.type === "load" || /loaded|complete/.test(u.readyState) && (!r.documentMode || r.documentMode < 9)) && (n.clearTimeout(t.errorTimeout), n.clearTimeout(t.cssTimeout), u.onload = u.onreadystatechange = u.onerror = null, i());
	        }
	
	        function s() {
	            if (t.state !== l && t.cssRetries <= 20) {
	                for (var i = 0, f = r.styleSheets.length; i < f; i++) {
	                    if (r.styleSheets[i].href === u.href) {
	                        o({
	                            type: "load"
	                        });
	                        return;
	                    }
	                }t.cssRetries++;
	                t.cssTimeout = n.setTimeout(s, 250);
	            }
	        }
	        var u, h, f;
	        i = i || w;
	        h = at(t.url);
	        h === "css" ? (u = r.createElement("link"), u.type = "text/" + (t.type || "css"), u.rel = "stylesheet", u.href = t.url, t.cssRetries = 0, t.cssTimeout = n.setTimeout(s, 500)) : (u = r.createElement("script"), u.type = "text/" + (t.type || "javascript"), u.src = t.url);
	        u.onload = u.onreadystatechange = o;
	        u.onerror = e;
	        u.async = !1;
	        u.defer = !1;
	        t.errorTimeout = n.setTimeout(function () {
	            e({
	                type: "timeout"
	            });
	        }, 7e3);
	        f = r.head || r.getElementsByTagName("head")[0];
	        f.insertBefore(u, f.lastChild);
	    }
	
	    function vt() {
	        for (var t, u = r.getElementsByTagName("script"), n = 0, f = u.length; n < f; n++) {
	            if (t = u[n].getAttribute("data-headjs-load"), !!t) {
	                i.load(t);
	                return;
	            }
	        }
	    }
	
	    function yt(n, t) {
	        var v, p, e;
	        return n === r ? (o ? f(t) : d.push(t), i) : (s(n) && (t = n, n = "ALL"), a(n)) ? (v = {}, u(n, function (n) {
	            v[n] = c[n];
	            i.ready(n, function () {
	                y(v) && f(t);
	            });
	        }), i) : typeof n != "string" || !s(t) ? i : (p = c[n], p && p.state === l || n === "ALL" && y() && o) ? (f(t), i) : (e = h[n], e ? e.push(t) : e = h[n] = [t], i);
	    }
	
	    function e() {
	        if (!r.body) {
	            n.clearTimeout(i.readyTimeout);
	            i.readyTimeout = n.setTimeout(e, 50);
	            return;
	        }
	        o || (o = !0, vt(), u(d, function (n) {
	            f(n);
	        }));
	    }
	
	    function k() {
	        r.addEventListener ? (r.removeEventListener("DOMContentLoaded", k, !1), e()) : r.readyState === "complete" && (r.detachEvent("onreadystatechange", k), e());
	    }
	    var r = n.document,
	        d = [],
	        h = {},
	        c = {},
	        ut = "async" in r.createElement("script") || "MozAppearance" in r.documentElement.style || n.opera,
	        o,
	        g = n.head_conf && n.head_conf.head || "head",
	        i = n[g] = n[g] || function () {
	        i.ready.apply(null, arguments);
	    },
	        nt = 1,
	        ft = 2,
	        tt = 3,
	        l = 4,
	        p;
	    if (r.readyState === "complete") e();else if (r.addEventListener) r.addEventListener("DOMContentLoaded", k, !1), n.addEventListener("load", e, !1);else {
	        r.attachEvent("onreadystatechange", k);
	        n.attachEvent("onload", e);
	        p = !1;
	        try {
	            p = !n.frameElement && r.documentElement;
	        } catch (wt) {}
	        p && p.doScroll && function pt() {
	            if (!o) {
	                try {
	                    p.doScroll("left");
	                } catch (t) {
	                    n.clearTimeout(i.readyTimeout);
	                    i.readyTimeout = n.setTimeout(pt, 50);
	                    return;
	                }
	                e();
	            }
	        }();
	    }
	    i.load = i.js = ut ? lt : ct;
	    i.test = ot;
	    i.ready = yt;
	    i.ready(r, function () {
	        y() && u(h.ALL, function (n) {
	            f(n);
	        });
	        i.feature && i.feature("domloaded", !0);
	    });
	})(window);
	/*
	(function(n,t){"use strict";function w(){}function u(n,t){if(n){typeof n=="object"&&(n=[].slice.call(n));for(var i=0,r=n.length;i<r;i++)t.call(n,n[i],i)}}function it(n,i){var r=Object.prototype.toString.call(i).slice(8,-1);return i!==t&&i!==null&&r===n}function s(n){return it("Function",n)}function a(n){return it("Array",n)}function et(n){var i=n.split("/"),t=i[i.length-1],r=t.indexOf("?");return r!==-1?t.substring(0,r):t}function f(n){(n=n||w,n._done)||(n(),n._done=1)}function ot(n,t,r,u){var f=typeof n=="object"?n:{test:n,success:!t?!1:a(t)?t:[t],failure:!r?!1:a(r)?r:[r],callback:u||w},e=!!f.test;return e&&!!f.success?(f.success.push(f.callback),i.load.apply(null,f.success)):e||!f.failure?u():(f.failure.push(f.callback),i.load.apply(null,f.failure)),i}function v(n){var t={},i,r;if(typeof n=="object")for(i in n)!n[i]||(t={name:i,url:n[i]});else t={name:et(n),url:n};return(r=c[t.name],r&&r.url===t.url)?r:(c[t.name]=t,t)}function y(n){n=n||c;for(var t in n)if(n.hasOwnProperty(t)&&n[t].state!==l)return!1;return!0}function st(n){n.state=ft;u(n.onpreload,function(n){n.call()})}function ht(n){n.state===t&&(n.state=nt,n.onpreload=[],rt({url:n.url,type:"cache"},function(){st(n)}))}function ct(){var n=arguments,t=n[n.length-1],r=[].slice.call(n,1),f=r[0];return(s(t)||(t=null),a(n[0]))?(n[0].push(t),i.load.apply(null,n[0]),i):(f?(u(r,function(n){s(n)||!n||ht(v(n))}),b(v(n[0]),s(f)?f:function(){i.load.apply(null,r)})):b(v(n[0])),i)}function lt(){var n=arguments,t=n[n.length-1],r={};return(s(t)||(t=null),a(n[0]))?(n[0].push(t),i.load.apply(null,n[0]),i):(u(n,function(n){n!==t&&(n=v(n),r[n.name]=n)}),u(n,function(n){n!==t&&(n=v(n),b(n,function(){y(r)&&f(t)}))}),i)}function b(n,t){if(t=t||w,n.state===l){t();return}if(n.state===tt){i.ready(n.name,t);return}if(n.state===nt){n.onpreload.push(function(){b(n,t)});return}n.state=tt;rt(n,function(){n.state=l;t();u(h[n.name],function(n){f(n)});o&&y()&&u(h.ALL,function(n){f(n)})})}function at(n){n=n||"";var t=n.split("?")[0].split(".");return t[t.length-1].toLowerCase()}function rt(t,i){function e(t){t=t||n.event;u.onload=u.onreadystatechange=u.onerror=null;i()}function o(f){f=f||n.event;(f.type==="load"||/loaded|complete/.test(u.readyState)&&(!r.documentMode||r.documentMode<9))&&(n.clearTimeout(t.errorTimeout),n.clearTimeout(t.cssTimeout),u.onload=u.onreadystatechange=u.onerror=null,i())}function s(){if(t.state!==l&&t.cssRetries<=20){for(var i=0,f=r.styleSheets.length;i<f;i++)if(r.styleSheets[i].href===u.href){o({type:"load"});return}t.cssRetries++;t.cssTimeout=n.setTimeout(s,250)}}var u,h,f;i=i||w;h=at(t.url);h==="css"?(u=r.createElement("link"),u.type="text/"+(t.type||"css"),u.rel="stylesheet",u.href=t.url,t.cssRetries=0,t.cssTimeout=n.setTimeout(s,500)):(u=r.createElement("script"),u.type="text/"+(t.type||"javascript"),u.src=t.url);u.onload=u.onreadystatechange=o;u.onerror=e;u.async=!1;u.defer=!1;t.errorTimeout=n.setTimeout(function(){e({type:"timeout"})},7e3);f=r.head||r.getElementsByTagName("head")[0];f.insertBefore(u,f.lastChild)}function vt(){for(var t,u=r.getElementsByTagName("script"),n=0,f=u.length;n<f;n++)if(t=u[n].getAttribute("data-headjs-load"),!!t){i.load(t);return}}function yt(n,t){var v,p,e;return n===r?(o?f(t):d.push(t),i):(s(n)&&(t=n,n="ALL"),a(n))?(v={},u(n,function(n){v[n]=c[n];i.ready(n,function(){y(v)&&f(t)})}),i):typeof n!="string"||!s(t)?i:(p=c[n],p&&p.state===l||n==="ALL"&&y()&&o)?(f(t),i):(e=h[n],e?e.push(t):e=h[n]=[t],i)}function e(){if(!r.body){n.clearTimeout(i.readyTimeout);i.readyTimeout=n.setTimeout(e,50);return}o||(o=!0,vt(),u(d,function(n){f(n)}))}function k(){r.addEventListener?(r.removeEventListener("DOMContentLoaded",k,!1),e()):r.readyState==="complete"&&(r.detachEvent("onreadystatechange",k),e())}var r=n.document,d=[],h={},c={},ut="async"in r.createElement("script")||"MozAppearance"in r.documentElement.style||n.opera,o,g=n.head_conf&&n.head_conf.head||"head",i=n[g]=n[g]||function(){i.ready.apply(null,arguments)},nt=1,ft=2,tt=3,l=4,p;if(r.readyState==="complete")e();else if(r.addEventListener)r.addEventListener("DOMContentLoaded",k,!1),n.addEventListener("load",e,!1);else{r.attachEvent("onreadystatechange",k);n.attachEvent("onload",e);p=!1;try{p=!n.frameElement&&r.documentElement}catch(wt){}p&&p.doScroll&&function pt(){if(!o){try{p.doScroll("left")}catch(t){n.clearTimeout(i.readyTimeout);i.readyTimeout=n.setTimeout(pt,50);return}e()}}()}i.load=i.js=ut?lt:ct;i.test=ot;i.ready=yt;i.ready(r,function(){y()&&u(h.ALL,function(n){f(n)});i.feature&&i.feature("domloaded",!0)})})(window);
	*/
	/*
	//# sourceMappingURL=head.load.min.js.map
	*/

/***/ }

/******/ });
//# sourceMappingURL=loader.js.map
=======
!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="javascript/",t(0)}({0:function(e,t,n){e.exports=n(312)},312:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(313),i=(o(u),function(){function e(){r(this,e),null==window.CM&&(window.CM={}),window.CM.Loader=this;var t=this;head.ready(document,function(){head.load(["/assets/app.css","/assets/app.js"],t.startApplication)})}return a(e,[{key:"removeGFX",value:function(){document.body.setAttribute("class",document.body.getAttribute("class").split("hideloader").join(""));var e=document.getElementsByClassName("preloader")[0];e&&e.parentNode&&e.parentNode.removeChild(e)}},{key:"startApplication",value:function(){void 0==window.CM.App?setTimeout(this.startApplication,500):(CM.App.blastoff(),document.body.setAttribute("class",document.body.getAttribute("class").split("loading").join("loaded")),setTimeout(function(){-document.body.setAttribute("class",document.body.getAttribute("class").split("loaded").join("hideloader"))},500),setTimeout(function(){CM.Loader.removeGFX()},1e3))}}]),e}());t.default=new i},313:function(e,t){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t){function o(){}function r(e,t){if(e){"object"==("undefined"==typeof e?"undefined":n(e))&&(e=[].slice.call(e));for(var o=0,r=e.length;o<r;o++)t.call(e,e[o],o)}}function a(e,n){var o=Object.prototype.toString.call(n).slice(8,-1);return n!==t&&null!==n&&o===e}function u(e){return a("Function",e)}function i(e){return a("Array",e)}function c(e){var t=e.split("/"),n=t[t.length-1],o=n.indexOf("?");return o!==-1?n.substring(0,o):n}function l(e){e=e||o,e._done||(e(),e._done=1)}function s(e,t,r,a){var u="object"==("undefined"==typeof e?"undefined":n(e))?e:{test:e,success:!!t&&(i(t)?t:[t]),failure:!!r&&(i(r)?r:[r]),callback:a||o},c=!!u.test;return c&&u.success?(u.success.push(u.callback),O.load.apply(null,u.success)):c||!u.failure?a():(u.failure.push(u.callback),O.load.apply(null,u.failure)),O}function d(e){var t,o,r={};if("object"==("undefined"==typeof e?"undefined":n(e)))for(t in e)!e[t]||(r={name:t,url:e[t]});else r={name:c(e),url:e};return o=x[r.name],o&&o.url===r.url?o:(x[r.name]=r,r)}function f(e){e=e||x;for(var t in e)if(e.hasOwnProperty(t)&&e[t].state!==P)return!1;return!0}function p(e){e.state=B,r(e.onpreload,function(e){e.call()})}function y(e){e.state===t&&(e.state=N,e.onpreload=[],g({url:e.url,type:"cache"},function(){p(e)}))}function m(){var e=arguments,t=e[e.length-1],n=[].slice.call(e,1),o=n[0];return u(t)||(t=null),i(e[0])?(e[0].push(t),O.load.apply(null,e[0]),O):(o?(r(n,function(e){u(e)||!e||y(d(e))}),h(d(e[0]),u(o)?o:function(){O.load.apply(null,n)})):h(d(e[0])),O)}function v(){var e=arguments,t=e[e.length-1],n={};return u(t)||(t=null),i(e[0])?(e[0].push(t),O.load.apply(null,e[0]),O):(r(e,function(e){e!==t&&(e=d(e),n[e.name]=e)}),r(e,function(e){e!==t&&(e=d(e),h(e,function(){f(n)&&l(t)}))}),O)}function h(e,t){return t=t||o,e.state===P?void t():e.state===F?void O.ready(e.name,t):e.state===N?void e.onpreload.push(function(){h(e,t)}):(e.state=F,void g(e,function(){e.state=P,t(),r(S[e.name],function(e){l(e)}),w&&f()&&r(S.ALL,function(e){l(e)})}))}function b(e){e=e||"";var t=e.split("?")[0].split(".");return t[t.length-1].toLowerCase()}function g(t,n){function r(t){t=t||e.event,i.onload=i.onreadystatechange=i.onerror=null,n()}function a(o){o=o||e.event,("load"===o.type||/loaded|complete/.test(i.readyState)&&(!C.documentMode||C.documentMode<9))&&(e.clearTimeout(t.errorTimeout),e.clearTimeout(t.cssTimeout),i.onload=i.onreadystatechange=i.onerror=null,n())}function u(){if(t.state!==P&&t.cssRetries<=20){for(var n=0,o=C.styleSheets.length;n<o;n++)if(C.styleSheets[n].href===i.href)return void a({type:"load"});t.cssRetries++,t.cssTimeout=e.setTimeout(u,250)}}var i,c,l;n=n||o,c=b(t.url),"css"===c?(i=C.createElement("link"),i.type="text/"+(t.type||"css"),i.rel="stylesheet",i.href=t.url,t.cssRetries=0,t.cssTimeout=e.setTimeout(u,500)):(i=C.createElement("script"),i.type="text/"+(t.type||"javascript"),i.src=t.url),i.onload=i.onreadystatechange=a,i.onerror=r,i.async=!1,i.defer=!1,t.errorTimeout=e.setTimeout(function(){r({type:"timeout"})},7e3),l=C.head||C.getElementsByTagName("head")[0],l.insertBefore(i,l.lastChild)}function T(){for(var e,t=C.getElementsByTagName("script"),n=0,o=t.length;n<o;n++)if(e=t[n].getAttribute("data-headjs-load"),!!e)return void O.load(e)}function A(e,t){var n,o,a;return e===C?(w?l(t):M.push(t),O):(u(e)&&(t=e,e="ALL"),i(e)?(n={},r(e,function(e){n[e]=x[e],O.ready(e,function(){f(n)&&l(t)})}),O):"string"==typeof e&&u(t)?(o=x[e],o&&o.state===P||"ALL"===e&&f()&&w?(l(t),O):(a=S[e],a?a.push(t):a=S[e]=[t],O)):O)}function E(){return C.body?void(w||(w=!0,T(),r(M,function(e){l(e)}))):(e.clearTimeout(O.readyTimeout),void(O.readyTimeout=e.setTimeout(E,50)))}function L(){C.addEventListener?(C.removeEventListener("DOMContentLoaded",L,!1),E()):"complete"===C.readyState&&(C.detachEvent("onreadystatechange",L),E())}var w,j,C=e.document,M=[],S={},x={},_="async"in C.createElement("script")||"MozAppearance"in C.documentElement.style||e.opera,k=e.head_conf&&e.head_conf.head||"head",O=e[k]=e[k]||function(){O.ready.apply(null,arguments)},N=1,B=2,F=3,P=4;if("complete"===C.readyState)E();else if(C.addEventListener)C.addEventListener("DOMContentLoaded",L,!1),e.addEventListener("load",E,!1);else{C.attachEvent("onreadystatechange",L),e.attachEvent("onload",E),j=!1;try{j=!e.frameElement&&C.documentElement}catch(e){}j&&j.doScroll&&function t(){if(!w){try{j.doScroll("left")}catch(n){return e.clearTimeout(O.readyTimeout),void(O.readyTimeout=e.setTimeout(t,50))}E()}}()}O.load=O.js=_?v:m,O.test=s,O.ready=A,O.ready(C,function(){f()&&r(S.ALL,function(e){l(e)}),O.feature&&O.feature("domloaded",!0)})}(window)}});
>>>>>>> origin/master
