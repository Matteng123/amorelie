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

	module.exports = __webpack_require__(308);


/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _head = __webpack_require__(309);
	
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
	            head.load(["assets/app.css", "assets/app.js"], scope.startApplication);
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
	                setTimeout(CM.Loader.startApplication, 500);
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

/***/ 309:
/***/ function(module, exports) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
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