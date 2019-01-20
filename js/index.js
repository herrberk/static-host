//JS FOR PREVIEW MODE 
$(document).ready(function () {
    try {
        var myThisURL = window.location.host;
        var headerwrapper = document.querySelectorAll(".header-wrapper");
        var myinnercontainer = document.querySelectorAll(".myinner-container");
        var bodyafterheader = document.querySelectorAll(".bodyafterheader");
        var recentpostshome = document.querySelectorAll(".recentpostshome");

        if (myThisURL == '2642385260599713909_3c194a85f5b212d55007c478c5fc39e16f81f4da.blogspot.com') {
            // removes the clicktrap and all other stuff for previewing
            $(".blogger-clickTrap").remove();
            $(".singleton-element").remove();
            $(".container").css('width', "75%");

            for (var i = 0; i < headerwrapper.length; i++) {
                headerwrapper[i].style.display = 'none';
            }

            for (var i = 0; i < myinnercontainer.length; i++) {
                myinnercontainer[i].style.display = 'none';
            }

            for (var i = 0; i < bodyafterheader.length; i++) {
                bodyafterheader[i].style.display = 'none';
            }
            for (var i = 0; i < recentpostshome.length; i++) {
                recentpostshome[i].style.display = 'none';
            }
        }
    } catch (err) {
        //console.log('Preview Mode is disabled, No Problem');
    }
});

//Ad Popup
jQuery(document).ready(function ($) {
    var duration = Math.floor(Math.random() * 20000) + 1000; 
    setTimeout(function () {
        $(".bts-popup").addClass("is-visible");
        $(".bts-popup").css("display", "block");
    }, duration);

    //open popup
    $(".bts-popup-trigger").on("click", function (event) {
        event.preventDefault();
        $(".bts-popup").addClass("is-visible");
        $(".bts-popup").css("display", "block");
    });

    //close popup
    $(".bts-popup").on("click", function (event) {
        if (
            $(event.target).is(".bts-popup-close") ||
            $(event.target).is(".bts-popup")
        ) {
            event.preventDefault();
            $(this).removeClass("is-visible");
            $(this).css("display", "none");
        }
    });
    //close popup when clicking the esc keyboard button
    $(document).keyup(function (event) {
        if (event.which == "27") {
            $(".bts-popup").removeClass("is-visible");
            $(this).css("display", "none");
        }
    });
});

//Adblock detector
// Function called if AdBlock is not detected
function adBlockNotDetected() {
    // Do nothing if adBlock is not detected for now.
}
// Function called if AdBlock is detected
function adBlockDetected() {
    var adContainer = $("#bts-popup .bts-popup-container");
    adContainer.empty();
    adContainer.css("padding", "0px");
    $('<img src="https://4.bp.blogspot.com/-W915E4_8-c8/WtIQvJY9xtI/AAAAAAAAP04/pLgWIXD5xNI1C-eORMR-8i9ViV-E-fMHgCLcBGAs/s1600/Notice.png"></img>').appendTo(adContainer);
}

// We look at whether FuckAdBlock already exists.
if (typeof fuckAdBlock !== 'undefined' || typeof FuckAdBlock !== 'undefined') {
    // If this is the case, it means that something tries to usurp are identity
    // So, considering that it is a detection
    adBlockDetected();
} else {
    // Otherwise, you import the script FuckAdBlock
    var importFAB = document.createElement('script');
    importFAB.onload = function () {
        // If all goes well, we configure FuckAdBlock
        fuckAdBlock.onDetected(adBlockDetected)
        fuckAdBlock.onNotDetected(adBlockNotDetected);
    };
    importFAB.onerror = function () {
        // If the script does not load (blocked, integrity error, ...)
        // Then a detection is triggered
        adBlockDetected();
    };
    importFAB.integrity = 'sha256-xjwKUY/NgkPjZZBOtOxRYtK20GaqTwUCf7WYCJ1z69w=';
    importFAB.crossOrigin = 'anonymous';
    importFAB.src = 'https://cdnjs.cloudflare.com/ajax/libs/fuckadblock/3.2.1/fuckadblock.min.js';
    document.head.appendChild(importFAB);
}

/*!
* Masonry PACKAGED v3.1.5
* Cascading grid layout library
* https://masonry.desandro.com
* MIT License
* by David DeSandro
*/

!function (a) { function b() { } function c(a) { function c(b) { b.prototype.option || (b.prototype.option = function (b) { a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b)) }) } function e(b, c) { a.fn[b] = function (e) { if ("string" == typeof e) { for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) { var j = this[h], k = a.data(j, b); if (k) if (a.isFunction(k[e]) && "_" !== e.charAt(0)) { var l = k[e].apply(k, g); if (void 0 !== l) return l } else f("no such method '" + e + "' for " + b + " instance"); else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'") } return this } return this.each(function () { var d = a.data(this, b); d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d)) }) } } if (a) { var f = "undefined" == typeof console ? b : function (a) { console.error(a) }; return a.bridget = function (a, b) { c(b), e(a, b) }, a.bridget } } var d = Array.prototype.slice; "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c(a.jQuery) }(window), function (a) { function b(b) { var c = a.event; return c.target = c.target || c.srcElement || b, c } var c = document.documentElement, d = function () { }; c.addEventListener ? d = function (a, b, c) { a.addEventListener(b, c, !1) } : c.attachEvent && (d = function (a, c, d) { a[c + d] = d.handleEvent ? function () { var c = b(a); d.handleEvent.call(d, c) } : function () { var c = b(a); d.call(a, c) }, a.attachEvent("on" + c, a[c + d]) }); var e = function () { }; c.removeEventListener ? e = function (a, b, c) { a.removeEventListener(b, c, !1) } : c.detachEvent && (e = function (a, b, c) { a.detachEvent("on" + b, a[b + c]); try { delete a[b + c] } catch (d) { a[b + c] = void 0 } }); var f = { bind: d, unbind: e }; "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f }(this), function (a) { function b(a) { "function" == typeof a && (b.isReady ? a() : f.push(a)) } function c(a) { var c = "readystatechange" === a.type && "complete" !== e.readyState; if (!b.isReady && !c) { b.isReady = !0; for (var d = 0, g = f.length; g > d; d++) { var h = f[d]; h() } } } function d(d) { return d.bind(e, "DOMContentLoaded", c), d.bind(e, "readystatechange", c), d.bind(a, "load", c), b } var e = a.document, f = []; b.isReady = !1, "function" == typeof define && define.amd ? (b.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], d)) : a.docReady = d(a.eventie) }(this), function () { function a() { } function b(a, b) { for (var c = a.length; c--;)if (a[c].listener === b) return c; return -1 } function c(a) { return function () { return this[a].apply(this, arguments) } } var d = a.prototype, e = this, f = e.EventEmitter; d.getListeners = function (a) { var b, c, d = this._getEvents(); if (a instanceof RegExp) { b = {}; for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c]) } else b = d[a] || (d[a] = []); return b }, d.flattenListeners = function (a) { var b, c = []; for (b = 0; b < a.length; b += 1)c.push(a[b].listener); return c }, d.getListenersAsObject = function (a) { var b, c = this.getListeners(a); return c instanceof Array && (b = {}, b[a] = c), b || c }, d.addListener = function (a, c) { var d, e = this.getListenersAsObject(a), f = "object" == typeof c; for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : { listener: c, once: !1 }); return this }, d.on = c("addListener"), d.addOnceListener = function (a, b) { return this.addListener(a, { listener: b, once: !0 }) }, d.once = c("addOnceListener"), d.defineEvent = function (a) { return this.getListeners(a), this }, d.defineEvents = function (a) { for (var b = 0; b < a.length; b += 1)this.defineEvent(a[b]); return this }, d.removeListener = function (a, c) { var d, e, f = this.getListenersAsObject(a); for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1)); return this }, d.off = c("removeListener"), d.addListeners = function (a, b) { return this.manipulateListeners(!1, a, b) }, d.removeListeners = function (a, b) { return this.manipulateListeners(!0, a, b) }, d.manipulateListeners = function (a, b, c) { var d, e, f = a ? this.removeListener : this.addListener, g = a ? this.removeListeners : this.addListeners; if ("object" != typeof b || b instanceof RegExp) for (d = c.length; d--;)f.call(this, b, c[d]); else for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e)); return this }, d.removeEvent = function (a) { var b, c = typeof a, d = this._getEvents(); if ("string" === c) delete d[a]; else if (a instanceof RegExp) for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b]; else delete this._events; return this }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function (a, b) { var c, d, e, f, g = this.getListenersAsObject(a); for (e in g) if (g.hasOwnProperty(e)) for (d = g[e].length; d--;)c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener); return this }, d.trigger = c("emitEvent"), d.emit = function (a) { var b = Array.prototype.slice.call(arguments, 1); return this.emitEvent(a, b) }, d.setOnceReturnValue = function (a) { return this._onceReturnValue = a, this }, d._getOnceReturnValue = function () { return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0 }, d._getEvents = function () { return this._events || (this._events = {}) }, a.noConflict = function () { return e.EventEmitter = f, a }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () { return a }) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a }.call(this), function (a) { function b(a) { if (a) { if ("string" == typeof d[a]) return a; a = a.charAt(0).toUpperCase() + a.slice(1); for (var b, e = 0, f = c.length; f > e; e++)if (b = c[e] + a, "string" == typeof d[b]) return b } } var c = "Webkit Moz ms Ms O".split(" "), d = document.documentElement.style; "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () { return b }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b }(window), function (a) { function b(a) { var b = parseFloat(a), c = -1 === a.indexOf("%") && !isNaN(b); return c && b } function c() { for (var a = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, b = 0, c = g.length; c > b; b++) { var d = g[b]; a[d] = 0 } return a } function d(a) { function d(a) { if ("string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) { var d = f(a); if ("none" === d.display) return c(); var e = {}; e.width = a.offsetWidth, e.height = a.offsetHeight; for (var k = e.isBorderBox = !(!j || !d[j] || "border-box" !== d[j]), l = 0, m = g.length; m > l; l++) { var n = g[l], o = d[n]; o = h(a, o); var p = parseFloat(o); e[n] = isNaN(p) ? 0 : p } var q = e.paddingLeft + e.paddingRight, r = e.paddingTop + e.paddingBottom, s = e.marginLeft + e.marginRight, t = e.marginTop + e.marginBottom, u = e.borderLeftWidth + e.borderRightWidth, v = e.borderTopWidth + e.borderBottomWidth, w = k && i, x = b(d.width); x !== !1 && (e.width = x + (w ? 0 : q + u)); var y = b(d.height); return y !== !1 && (e.height = y + (w ? 0 : r + v)), e.innerWidth = e.width - (q + u), e.innerHeight = e.height - (r + v), e.outerWidth = e.width + s, e.outerHeight = e.height + t, e } } function h(a, b) { if (e || -1 === b.indexOf("%")) return b; var c = a.style, d = c.left, f = a.runtimeStyle, g = f && f.left; return g && (f.left = a.currentStyle.left), c.left = b, b = c.pixelLeft, c.left = d, g && (f.left = g), b } var i, j = a("boxSizing"); return function () { if (j) { var a = document.createElement("div"); a.style.width = "200px", a.style.padding = "1px 2px 3px 4px", a.style.borderStyle = "solid", a.style.borderWidth = "1px 2px 3px 4px", a.style[j] = "border-box"; var c = document.body || document.documentElement; c.appendChild(a); var d = f(a); i = 200 === b(d.width), c.removeChild(a) } }(), d } var e = a.getComputedStyle, f = e ? function (a) { return e(a, null) } : function (a) { return a.currentStyle }, g = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"]; "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], d) : "object" == typeof exports ? module.exports = d(require("get-style-property")) : a.getSize = d(a.getStyleProperty) }(window), function (a, b) { function c(a, b) { return a[h](b) } function d(a) { if (!a.parentNode) { var b = document.createDocumentFragment(); b.appendChild(a) } } function e(a, b) { d(a); for (var c = a.parentNode.querySelectorAll(b), e = 0, f = c.length; f > e; e++)if (c[e] === a) return !0; return !1 } function f(a, b) { return d(a), c(a, b) } var g, h = function () { if (b.matchesSelector) return "matchesSelector"; for (var a = ["webkit", "moz", "ms", "o"], c = 0, d = a.length; d > c; c++) { var e = a[c], f = e + "MatchesSelector"; if (b[f]) return f } }(); if (h) { var i = document.createElement("div"), j = c(i, "div"); g = j ? c : f } else g = e; "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () { return g }) : window.matchesSelector = g }(this, Element.prototype), function (a) { function b(a, b) { for (var c in b) a[c] = b[c]; return a } function c(a) { for (var b in a) return !1; return b = null, !0 } function d(a) { return a.replace(/([A-Z])/g, function (a) { return "-" + a.toLowerCase() }) } function e(a, e, f) { function h(a, b) { a && (this.element = a, this.layout = b, this.position = { x: 0, y: 0 }, this._create()) } var i = f("transition"), j = f("transform"), k = i && j, l = !!f("perspective"), m = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend", transition: "transitionend" }[i], n = ["transform", "transition", "transitionDuration", "transitionProperty"], o = function () { for (var a = {}, b = 0, c = n.length; c > b; b++) { var d = n[b], e = f(d); e && e !== d && (a[d] = e) } return a }(); b(h.prototype, a.prototype), h.prototype._create = function () { this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" }) }, h.prototype.handleEvent = function (a) { var b = "on" + a.type; this[b] && this[b](a) }, h.prototype.getSize = function () { this.size = e(this.element) }, h.prototype.css = function (a) { var b = this.element.style; for (var c in a) { var d = o[c] || c; b[d] = a[c] } }, h.prototype.getPosition = function () { var a = g(this.element), b = this.layout.options, c = b.isOriginLeft, d = b.isOriginTop, e = parseInt(a[c ? "left" : "right"], 10), f = parseInt(a[d ? "top" : "bottom"], 10); e = isNaN(e) ? 0 : e, f = isNaN(f) ? 0 : f; var h = this.layout.size; e -= c ? h.paddingLeft : h.paddingRight, f -= d ? h.paddingTop : h.paddingBottom, this.position.x = e, this.position.y = f }, h.prototype.layoutPosition = function () { var a = this.layout.size, b = this.layout.options, c = {}; b.isOriginLeft ? (c.left = this.position.x + a.paddingLeft + "px", c.right = "") : (c.right = this.position.x + a.paddingRight + "px", c.left = ""), b.isOriginTop ? (c.top = this.position.y + a.paddingTop + "px", c.bottom = "") : (c.bottom = this.position.y + a.paddingBottom + "px", c.top = ""), this.css(c), this.emitEvent("layout", [this]) }; var p = l ? function (a, b) { return "translate3d(" + a + "px, " + b + "px, 0)" } : function (a, b) { return "translate(" + a + "px, " + b + "px)" }; h.prototype._transitionTo = function (a, b) { this.getPosition(); var c = this.position.x, d = this.position.y, e = parseInt(a, 10), f = parseInt(b, 10), g = e === this.position.x && f === this.position.y; if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition(); var h = a - c, i = b - d, j = {}, k = this.layout.options; h = k.isOriginLeft ? h : -h, i = k.isOriginTop ? i : -i, j.transform = p(h, i), this.transition({ to: j, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 }) }, h.prototype.goTo = function (a, b) { this.setPosition(a, b), this.layoutPosition() }, h.prototype.moveTo = k ? h.prototype._transitionTo : h.prototype.goTo, h.prototype.setPosition = function (a, b) { this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10) }, h.prototype._nonTransition = function (a) { this.css(a.to), a.isCleaning && this._removeStyles(a.to); for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this) }, h.prototype._transition = function (a) { if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a); var b = this._transn; for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c]; for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0); if (a.from) { this.css(a.from); var d = this.element.offsetHeight; d = null } this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0 }; var q = j && d(j) + ",opacity"; h.prototype.enableTransition = function () { this.isTransitioning || (this.css({ transitionProperty: q, transitionDuration: this.layout.options.transitionDuration }), this.element.addEventListener(m, this, !1)) }, h.prototype.transition = h.prototype[i ? "_transition" : "_nonTransition"], h.prototype.onwebkitTransitionEnd = function (a) { this.ontransitionend(a) }, h.prototype.onotransitionend = function (a) { this.ontransitionend(a) }; var r = { "-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform" }; h.prototype.ontransitionend = function (a) { if (a.target === this.element) { var b = this._transn, d = r[a.propertyName] || a.propertyName; if (delete b.ingProperties[d], c(b.ingProperties) && this.disableTransition(), d in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[d]), d in b.onEnd) { var e = b.onEnd[d]; e.call(this), delete b.onEnd[d] } this.emitEvent("transitionEnd", [this]) } }, h.prototype.disableTransition = function () { this.removeTransitionStyles(), this.element.removeEventListener(m, this, !1), this.isTransitioning = !1 }, h.prototype._removeStyles = function (a) { var b = {}; for (var c in a) b[c] = ""; this.css(b) }; var s = { transitionProperty: "", transitionDuration: "" }; return h.prototype.removeTransitionStyles = function () { this.css(s) }, h.prototype.removeElem = function () { this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this]) }, h.prototype.remove = function () { if (!i || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem(); var a = this; this.on("transitionEnd", function () { return a.removeElem(), !0 }), this.hide() }, h.prototype.reveal = function () { delete this.isHidden, this.css({ display: "" }); var a = this.layout.options; this.transition({ from: a.hiddenStyle, to: a.visibleStyle, isCleaning: !0 }) }, h.prototype.hide = function () { this.isHidden = !0, this.css({ display: "" }); var a = this.layout.options; this.transition({ from: a.visibleStyle, to: a.hiddenStyle, isCleaning: !0, onTransitionEnd: { opacity: function () { this.isHidden && this.css({ display: "none" }) } } }) }, h.prototype.destroy = function () { this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" }) }, h } var f = a.getComputedStyle, g = f ? function (a) { return f(a, null) } : function (a) { return a.currentStyle }; "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], e) : (a.Outlayer = {}, a.Outlayer.Item = e(a.EventEmitter, a.getSize, a.getStyleProperty)) }(window), function (a) { function b(a, b) { for (var c in b) a[c] = b[c]; return a } function c(a) { return "[object Array]" === l.call(a) } function d(a) { var b = []; if (c(a)) b = a; else if (a && "number" == typeof a.length) for (var d = 0, e = a.length; e > d; d++)b.push(a[d]); else b.push(a); return b } function e(a, b) { var c = n(b, a); -1 !== c && b.splice(c, 1) } function f(a) { return a.replace(/(.)([A-Z])/g, function (a, b, c) { return b + "-" + c }).toLowerCase() } function g(c, g, l, n, o, p) { function q(a, c) { if ("string" == typeof a && (a = h.querySelector(a)), !a || !m(a)) return void (i && i.error("Bad " + this.constructor.namespace + " element: " + a)); this.element = a, this.options = b({}, this.constructor.defaults), this.option(c); var d = ++r; this.element.outlayerGUID = d, s[d] = this, this._create(), this.options.isInitLayout && this.layout() } var r = 0, s = {}; return q.namespace = "outlayer", q.Item = p, q.defaults = { containerStyle: { position: "relative" }, isInitLayout: !0, isOriginLeft: !0, isOriginTop: !0, isResizeBound: !0, isResizingContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } }, b(q.prototype, l.prototype), q.prototype.option = function (a) { b(this.options, a) }, q.prototype._create = function () { this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), b(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize() }, q.prototype.reloadItems = function () { this.items = this._itemize(this.element.children) }, q.prototype._itemize = function (a) { for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) { var g = b[e], h = new c(g, this); d.push(h) } return d }, q.prototype._filterFindItemElements = function (a) { a = d(a); for (var b = this.options.itemSelector, c = [], e = 0, f = a.length; f > e; e++) { var g = a[e]; if (m(g)) if (b) { o(g, b) && c.push(g); for (var h = g.querySelectorAll(b), i = 0, j = h.length; j > i; i++)c.push(h[i]) } else c.push(g) } return c }, q.prototype.getItemElements = function () { for (var a = [], b = 0, c = this.items.length; c > b; b++)a.push(this.items[b].element); return a }, q.prototype.layout = function () { this._resetLayout(), this._manageStamps(); var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited; this.layoutItems(this.items, a), this._isLayoutInited = !0 }, q.prototype._init = q.prototype.layout, q.prototype._resetLayout = function () { this.getSize() }, q.prototype.getSize = function () { this.size = n(this.element) }, q.prototype._getMeasurement = function (a, b) { var c, d = this.options[a]; d ? ("string" == typeof d ? c = this.element.querySelector(d) : m(d) && (c = d), this[a] = c ? n(c)[b] : d) : this[a] = 0 }, q.prototype.layoutItems = function (a, b) { a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout() }, q.prototype._getItemsForLayout = function (a) { for (var b = [], c = 0, d = a.length; d > c; c++) { var e = a[c]; e.isIgnored || b.push(e) } return b }, q.prototype._layoutItems = function (a, b) { function c() { d.emitEvent("layoutComplete", [d, a]) } var d = this; if (!a || !a.length) return void c(); this._itemsOn(a, "layout", c); for (var e = [], f = 0, g = a.length; g > f; f++) { var h = a[f], i = this._getItemLayoutPosition(h); i.item = h, i.isInstant = b || h.isLayoutInstant, e.push(i) } this._processLayoutQueue(e) }, q.prototype._getItemLayoutPosition = function () { return { x: 0, y: 0 } }, q.prototype._processLayoutQueue = function (a) { for (var b = 0, c = a.length; c > b; b++) { var d = a[b]; this._positionItem(d.item, d.x, d.y, d.isInstant) } }, q.prototype._positionItem = function (a, b, c, d) { d ? a.goTo(b, c) : a.moveTo(b, c) }, q.prototype._postLayout = function () { this.resizeContainer() }, q.prototype.resizeContainer = function () { if (this.options.isResizingContainer) { var a = this._getContainerSize(); a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1)) } }, q.prototype._getContainerSize = k, q.prototype._setContainerMeasure = function (a, b) { if (void 0 !== a) { var c = this.size; c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px" } }, q.prototype._itemsOn = function (a, b, c) { function d() { return e++ , e === f && c.call(g), !0 } for (var e = 0, f = a.length, g = this, h = 0, i = a.length; i > h; h++) { var j = a[h]; j.on(b, d) } }, q.prototype.ignore = function (a) { var b = this.getItem(a); b && (b.isIgnored = !0) }, q.prototype.unignore = function (a) { var b = this.getItem(a); b && delete b.isIgnored }, q.prototype.stamp = function (a) { if (a = this._find(a)) { this.stamps = this.stamps.concat(a); for (var b = 0, c = a.length; c > b; b++) { var d = a[b]; this.ignore(d) } } }, q.prototype.unstamp = function (a) { if (a = this._find(a)) for (var b = 0, c = a.length; c > b; b++) { var d = a[b]; e(d, this.stamps), this.unignore(d) } }, q.prototype._find = function (a) { return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = d(a)) : void 0 }, q.prototype._manageStamps = function () { if (this.stamps && this.stamps.length) { this._getBoundingRect(); for (var a = 0, b = this.stamps.length; b > a; a++) { var c = this.stamps[a]; this._manageStamp(c) } } }, q.prototype._getBoundingRect = function () { var a = this.element.getBoundingClientRect(), b = this.size; this._boundingRect = { left: a.left + b.paddingLeft + b.borderLeftWidth, top: a.top + b.paddingTop + b.borderTopWidth, right: a.right - (b.paddingRight + b.borderRightWidth), bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth) } }, q.prototype._manageStamp = k, q.prototype._getElementOffset = function (a) { var b = a.getBoundingClientRect(), c = this._boundingRect, d = n(a), e = { left: b.left - c.left - d.marginLeft, top: b.top - c.top - d.marginTop, right: c.right - b.right - d.marginRight, bottom: c.bottom - b.bottom - d.marginBottom }; return e }, q.prototype.handleEvent = function (a) { var b = "on" + a.type; this[b] && this[b](a) }, q.prototype.bindResize = function () { this.isResizeBound || (c.bind(a, "resize", this), this.isResizeBound = !0) }, q.prototype.unbindResize = function () { this.isResizeBound && c.unbind(a, "resize", this), this.isResizeBound = !1 }, q.prototype.onresize = function () { function a() { b.resize(), delete b.resizeTimeout } this.resizeTimeout && clearTimeout(this.resizeTimeout); var b = this; this.resizeTimeout = setTimeout(a, 100) }, q.prototype.resize = function () { this.isResizeBound && this.needsResizeLayout() && this.layout() }, q.prototype.needsResizeLayout = function () { var a = n(this.element), b = this.size && a; return b && a.innerWidth !== this.size.innerWidth }, q.prototype.addItems = function (a) { var b = this._itemize(a); return b.length && (this.items = this.items.concat(b)), b }, q.prototype.appended = function (a) { var b = this.addItems(a); b.length && (this.layoutItems(b, !0), this.reveal(b)) }, q.prototype.prepended = function (a) { var b = this._itemize(a); if (b.length) { var c = this.items.slice(0); this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c) } }, q.prototype.reveal = function (a) { var b = a && a.length; if (b) for (var c = 0; b > c; c++) { var d = a[c]; d.reveal() } }, q.prototype.hide = function (a) { var b = a && a.length; if (b) for (var c = 0; b > c; c++) { var d = a[c]; d.hide() } }, q.prototype.getItem = function (a) { for (var b = 0, c = this.items.length; c > b; b++) { var d = this.items[b]; if (d.element === a) return d } }, q.prototype.getItems = function (a) { if (a && a.length) { for (var b = [], c = 0, d = a.length; d > c; c++) { var e = a[c], f = this.getItem(e); f && b.push(f) } return b } }, q.prototype.remove = function (a) { a = d(a); var b = this.getItems(a); if (b && b.length) { this._itemsOn(b, "remove", function () { this.emitEvent("removeComplete", [this, b]) }); for (var c = 0, f = b.length; f > c; c++) { var g = b[c]; g.remove(), e(g, this.items) } } }, q.prototype.destroy = function () { var a = this.element.style; a.height = "", a.position = "", a.width = ""; for (var b = 0, c = this.items.length; c > b; b++) { var d = this.items[b]; d.destroy() } this.unbindResize(), delete this.element.outlayerGUID, j && j.removeData(this.element, this.constructor.namespace) }, q.data = function (a) { var b = a && a.outlayerGUID; return b && s[b] }, q.create = function (a, c) { function d() { q.apply(this, arguments) } return Object.create ? d.prototype = Object.create(q.prototype) : b(d.prototype, q.prototype), d.prototype.constructor = d, d.defaults = b({}, q.defaults), b(d.defaults, c), d.prototype.settings = {}, d.namespace = a, d.data = q.data, d.Item = function () { p.apply(this, arguments) }, d.Item.prototype = new p, g(function () { for (var b = f(a), c = h.querySelectorAll(".js-" + b), e = "data-" + b + "-options", g = 0, k = c.length; k > g; g++) { var l, m = c[g], n = m.getAttribute(e); try { l = n && JSON.parse(n) } catch (o) { i && i.error("Error parsing " + e + " on " + m.nodeName.toLowerCase() + (m.id ? "#" + m.id : "") + ": " + o); continue } var p = new d(m, l); j && j.data(m, a, p) } }), j && j.bridget && j.bridget(a, d), d }, q.Item = p, q } var h = a.document, i = a.console, j = a.jQuery, k = function () { }, l = Object.prototype.toString, m = "object" == typeof HTMLElement ? function (a) { return a instanceof HTMLElement } : function (a) { return a && "object" == typeof a && 1 === a.nodeType && "string" == typeof a.nodeName }, n = Array.prototype.indexOf ? function (a, b) { return a.indexOf(b) } : function (a, b) { for (var c = 0, d = a.length; d > c; c++)if (a[c] === b) return c; return -1 }; "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], g) : a.Outlayer = g(a.eventie, a.docReady, a.EventEmitter, a.getSize, a.matchesSelector, a.Outlayer.Item) }(window), function (a) { function b(a, b) { var d = a.create("masonry"); return d.prototype._resetLayout = function () { this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(); var a = this.cols; for (this.colYs = []; a--;)this.colYs.push(0); this.maxY = 0 }, d.prototype.measureColumns = function () { if (this.getContainerWidth(), !this.columnWidth) { var a = this.items[0], c = a && a.element; this.columnWidth = c && b(c).outerWidth || this.containerWidth } this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1) }, d.prototype.getContainerWidth = function () { var a = this.options.isFitWidth ? this.element.parentNode : this.element, c = b(a); this.containerWidth = c && c.innerWidth }, d.prototype._getItemLayoutPosition = function (a) { a.getSize(); var b = a.size.outerWidth % this.columnWidth, d = b && 1 > b ? "round" : "ceil", e = Math[d](a.size.outerWidth / this.columnWidth); e = Math.min(e, this.cols); for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c(f, g), i = { x: this.columnWidth * h, y: g }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++)this.colYs[h + l] = j; return i }, d.prototype._getColGroup = function (a) { if (2 > a) return this.colYs; for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) { var e = this.colYs.slice(d, d + a); b[d] = Math.max.apply(Math, e) } return b }, d.prototype._manageStamp = function (a) { var c = b(a), d = this._getElementOffset(a), e = this.options.isOriginLeft ? d.left : d.right, f = e + c.outerWidth, g = Math.floor(e / this.columnWidth); g = Math.max(0, g); var h = Math.floor(f / this.columnWidth); h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h); for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++)this.colYs[j] = Math.max(i, this.colYs[j]) }, d.prototype._getContainerSize = function () { this.maxY = Math.max.apply(Math, this.colYs); var a = { height: this.maxY }; return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a }, d.prototype._getContainerFitWidth = function () { for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];)a++; return (this.cols - a) * this.columnWidth - this.gutter }, d.prototype.needsResizeLayout = function () { var a = this.containerWidth; return this.getContainerWidth(), a !== this.containerWidth }, d } var c = Array.prototype.indexOf ? function (a, b) { return a.indexOf(b) } : function (a, b) { for (var c = 0, d = a.length; d > c; c++) { var e = a[c]; if (e === b) return c } return -1 }; "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], b) : a.Masonry = b(a.Outlayer, a.getSize) }(window);
/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function (s, H, f, w) {
    var K = f("html"), q = f(s), p = f(H), b = f.fancybox = function () { b.open.apply(this, arguments) }, J = navigator.userAgent.match(/msie/i), C = null, t = H.createTouch !== w, u = function (a) { return a && a.hasOwnProperty && a instanceof f }, r = function (a) { return a && "string" === f.type(a) }, F = function (a) { return r(a) && 0 < a.indexOf("%") }, m = function (a, d) { var e = parseInt(a, 10) || 0; d && F(a) && (e *= b.getViewport()[d] / 100); return Math.ceil(e) }, x = function (a, b) { return m(a, b) + "px" }; f.extend(b, {
        version: "2.1.5", defaults: {
            padding: 15, margin: 20,
            width: 800, height: 600, minWidth: 100, minHeight: 100, maxWidth: 9999, maxHeight: 9999, pixelRatio: 1, autoSize: !0, autoHeight: !1, autoWidth: !1, autoResize: !0, autoCenter: !t, fitToView: !0, aspectRatio: !1, topRatio: 0.5, leftRatio: 0.5, scrolling: "auto", wrapCSS: "", arrows: !0, closeBtn: !0, closeClick: !1, nextClick: !1, mouseWheel: !0, autoPlay: !1, playSpeed: 3E3, preload: 3, modal: !1, loop: !0, ajax: { dataType: "html", headers: { "X-fancyBox": !0 } }, iframe: { scrolling: "auto", preload: !0 }, swf: { wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always" },
            keys: { next: { 13: "left", 34: "up", 39: "left", 40: "up" }, prev: { 8: "right", 33: "down", 37: "right", 38: "down" }, close: [27], play: [32], toggle: [70] }, direction: { next: "left", prev: "right" }, scrollOutside: !0, index: 0, type: null, href: null, content: null, title: null, tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>', image: '<img class="fancybox-image" src="{href}" alt="" />', iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
                    (J ? ' allowtransparency="true"' : "") + "></iframe>", error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>', closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>', next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>', prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            }, openEffect: "fade", openSpeed: 250, openEasing: "swing", openOpacity: !0,
            openMethod: "zoomIn", closeEffect: "fade", closeSpeed: 250, closeEasing: "swing", closeOpacity: !0, closeMethod: "zoomOut", nextEffect: "elastic", nextSpeed: 250, nextEasing: "swing", nextMethod: "changeIn", prevEffect: "elastic", prevSpeed: 250, prevEasing: "swing", prevMethod: "changeOut", helpers: { overlay: !0, title: !0 }, onCancel: f.noop, beforeLoad: f.noop, afterLoad: f.noop, beforeShow: f.noop, afterShow: f.noop, beforeChange: f.noop, beforeClose: f.noop, afterClose: f.noop
        }, group: {}, opts: {}, previous: null, coming: null, current: null, isActive: !1,
        isOpen: !1, isOpened: !1, wrap: null, skin: null, outer: null, inner: null, player: { timer: null, isActive: !1 }, ajaxLoad: null, imgPreload: null, transitions: {}, helpers: {}, open: function (a, d) {
            if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = u(a) ? f(a).get() : [a]), f.each(a, function (e, c) {
                var l = {}, g, h, k, n, m; "object" === f.type(c) && (c.nodeType && (c = f(c)), u(c) ? (l = { href: c.data("fancybox-href") || c.attr("href"), title: f("<div/>").text(c.data("fancybox-title") || c.attr("title")).html(), isDom: !0, element: c },
                    f.metadata && f.extend(!0, l, c.metadata())) : l = c); g = d.href || l.href || (r(c) ? c : null); h = d.title !== w ? d.title : l.title || ""; n = (k = d.content || l.content) ? "html" : d.type || l.type; !n && l.isDom && (n = c.data("fancybox-type"), n || (n = (n = c.prop("class").match(/fancybox\.(\w+)/)) ? n[1] : null)); r(g) && (n || (b.isImage(g) ? n = "image" : b.isSWF(g) ? n = "swf" : "#" === g.charAt(0) ? n = "inline" : r(c) && (n = "html", k = c)), "ajax" === n && (m = g.split(/\s+/, 2), g = m.shift(), m = m.shift())); k || ("inline" === n ? g ? k = f(r(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : l.isDom && (k = c) :
                        "html" === n ? k = g : n || g || !l.isDom || (n = "inline", k = c)); f.extend(l, { href: g, type: n, content: k, title: h, selector: m }); a[e] = l
            }), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== w && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index)
        }, cancel: function () {
            var a = b.coming; a && !1 === b.trigger("onCancel") || (b.hideLoading(), a && (b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(),
                b.coming = null, b.current || b._afterZoomOut(a)))
        }, close: function (a) { b.cancel(); !1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (b.isOpen && !0 !== a ? (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]()) : (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()))) }, play: function (a) {
            var d = function () { clearTimeout(b.player.timer) }, e = function () {
                d(); b.current && b.player.isActive &&
                    (b.player.timer = setTimeout(b.next, b.current.playSpeed))
            }, c = function () { d(); p.unbind(".player"); b.player.isActive = !1; b.trigger("onPlayEnd") }; !0 === a || !b.player.isActive && !1 !== a ? b.current && (b.current.loop || b.current.index < b.group.length - 1) && (b.player.isActive = !0, p.bind({ "onCancel.player beforeClose.player": c, "onUpdate.player": e, "beforeLoad.player": d }), e(), b.trigger("onPlayStart")) : c()
        }, next: function (a) { var d = b.current; d && (r(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next")) }, prev: function (a) {
            var d =
                b.current; d && (r(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"))
        }, jumpto: function (a, d, e) { var c = b.current; c && (a = m(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== w && (b.cancel(), b._start(a))) }, reposition: function (a, d) { var e = b.current, c = e ? e.wrap : null, l; c && (l = b._getPosition(d), a && "scroll" === a.type ? (delete l.position, c.stop(!0, !0).animate(l, 200)) : (c.css(l), e.pos = f.extend({}, e.dim, l))) },
        update: function (a) { var d = a && a.originalEvent && a.originalEvent.type, e = !d || "orientationchange" === d; e && (clearTimeout(C), C = null); b.isOpen && !C && (C = setTimeout(function () { var c = b.current; c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), C = null) }, e && !t ? 0 : 300)) }, toggle: function (a) {
        b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, t && (b.wrap.removeAttr("style").addClass("fancybox-tmp"),
            b.trigger("onUpdate")), b.update())
        }, hideLoading: function () { p.unbind(".loading"); f("#fancybox-loading").remove() }, showLoading: function () { var a, d; b.hideLoading(); a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body"); p.bind("keydown.loading", function (a) { 27 === (a.which || a.keyCode) && (a.preventDefault(), b.cancel()) }); b.defaults.fixed || (d = b.getViewport(), a.css({ position: "absolute", top: 0.5 * d.h + d.y, left: 0.5 * d.w + d.x })); b.trigger("onLoading") }, getViewport: function () {
            var a = b.current &&
                b.current.locked || !1, d = { x: q.scrollLeft(), y: q.scrollTop() }; a && a.length ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = t && s.innerWidth ? s.innerWidth : q.width(), d.h = t && s.innerHeight ? s.innerHeight : q.height()); return d
        }, unbindEvents: function () { b.wrap && u(b.wrap) && b.wrap.unbind(".fb"); p.unbind(".fb"); q.unbind(".fb") }, bindEvents: function () {
            var a = b.current, d; a && (q.bind("orientationchange.fb" + (t ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && p.bind("keydown.fb", function (e) {
                var c =
                    e.which || e.keyCode, l = e.target || e.srcElement; if (27 === c && b.coming) return !1; e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || l && (l.type || f(l).is("[contenteditable]")) || f.each(d, function (d, l) { if (1 < a.group.length && l[c] !== w) return b[d](l[c]), e.preventDefault(), !1; if (-1 < f.inArray(c, l)) return b[d](), e.preventDefault(), !1 })
            }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function (d, c, l, g) {
                for (var h = f(d.target || null), k = !1; h.length && !(k || h.is(".fancybox-skin") || h.is(".fancybox-wrap"));)k = h[0] && !(h[0].style.overflow &&
                    "hidden" === h[0].style.overflow) && (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent(); 0 !== c && !k && 1 < b.group.length && !a.canShrink && (0 < g || 0 < l ? b.prev(0 < g ? "down" : "left") : (0 > g || 0 > l) && b.next(0 > g ? "up" : "right"), d.preventDefault())
            }))
        }, trigger: function (a, d) {
            var e, c = d || b.coming || b.current; if (c) {
                f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1))); if (!1 === e) return !1; c.helpers && f.each(c.helpers, function (d, e) {
                    if (e &&
                        b.helpers[d] && f.isFunction(b.helpers[d][a])) b.helpers[d][a](f.extend(!0, {}, b.helpers[d].defaults, e), c)
                })
            } p.trigger(a)
        }, isImage: function (a) { return r(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i) }, isSWF: function (a) { return r(a) && a.match(/\.(swf)((\?|#).*)?$/i) }, _start: function (a) {
            var d = {}, e, c; a = m(a); e = b.group[a] || null; if (!e) return !1; d = f.extend(!0, {}, b.opts, e); e = d.margin; c = d.padding; "number" === f.type(e) && (d.margin = [e, e, e, e]); "number" === f.type(c) && (d.padding = [c, c,
                c, c]); d.modal && f.extend(!0, d, { closeBtn: !1, closeClick: !1, nextClick: !1, arrows: !1, mouseWheel: !1, keys: null, helpers: { overlay: { closeClick: !1 } } }); d.autoSize && (d.autoWidth = d.autoHeight = !0); "auto" === d.width && (d.autoWidth = !0); "auto" === d.height && (d.autoHeight = !0); d.group = b.group; d.index = a; b.coming = d; if (!1 === b.trigger("beforeLoad")) b.coming = null; else {
                    c = d.type; e = d.href; if (!c) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1; b.isActive = !0; if ("image" ===
                        c || "swf" === c) d.autoHeight = d.autoWidth = !1, d.scrolling = "visible"; "image" === c && (d.aspectRatio = !0); "iframe" === c && t && (d.scrolling = "scroll"); d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (t ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body"); f.extend(d, { skin: f(".fancybox-skin", d.wrap), outer: f(".fancybox-outer", d.wrap), inner: f(".fancybox-inner", d.wrap) }); f.each(["Top", "Right", "Bottom", "Left"], function (a, b) { d.skin.css("padding" + b, x(d.padding[a])) }); b.trigger("onReady");
                    if ("inline" === c || "html" === c) { if (!d.content || !d.content.length) return b._error("content") } else if (!e) return b._error("href"); "image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad()
                }
        }, _error: function (a) { f.extend(b.coming, { type: "html", autoWidth: !0, autoHeight: !0, minWidth: 0, minHeight: 0, scrolling: "no", hasError: a, content: b.coming.tpl.error }); b._afterLoad() }, _loadImage: function () {
            var a = b.imgPreload = new Image; a.onload = function () {
            this.onload = this.onerror = null; b.coming.width =
                this.width / b.opts.pixelRatio; b.coming.height = this.height / b.opts.pixelRatio; b._afterLoad()
            }; a.onerror = function () { this.onload = this.onerror = null; b._error("image") }; a.src = b.coming.href; !0 !== a.complete && b.showLoading()
        }, _loadAjax: function () { var a = b.coming; b.showLoading(); b.ajaxLoad = f.ajax(f.extend({}, a.ajax, { url: a.href, error: function (a, e) { b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading() }, success: function (d, e) { "success" === e && (a.content = d, b._afterLoad()) } })) }, _loadIframe: function () {
            var a = b.coming,
            d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", t ? "auto" : a.iframe.scrolling).attr("src", a.href); f(a.wrap).bind("onReset", function () { try { f(this).find("iframe").hide().attr("src", "//about:blank").end().empty() } catch (a) { } }); a.iframe.preload && (b.showLoading(), d.one("load", function () { f(this).data("ready", 1); t || f(this).bind("load.fb", b.update); f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(); b._afterLoad() })); a.content = d.appendTo(a.inner); a.iframe.preload ||
                b._afterLoad()
        }, _preloadImages: function () { var a = b.group, d = b.current, e = a.length, c = d.preload ? Math.min(d.preload, e - 1) : 0, f, g; for (g = 1; g <= c; g += 1)f = a[(d.index + g) % e], "image" === f.type && f.href && ((new Image).src = f.href) }, _afterLoad: function () {
            var a = b.coming, d = b.current, e, c, l, g, h; b.hideLoading(); if (a && !1 !== b.isActive) if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null; else {
                d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
                b.unbindEvents(); e = a.content; c = a.type; l = a.scrolling; f.extend(b, { wrap: a.wrap, skin: a.skin, outer: a.outer, inner: a.inner, current: a, previous: d }); g = a.href; switch (c) {
                    case "inline": case "ajax": case "html": a.selector ? e = f("<div>").html(e).find(a.selector) : u(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function () {
                        f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",
                            !1)
                    })); break; case "image": e = a.tpl.image.replace(/\{href\}/g, g); break; case "swf": e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function (a, b) { e += '<param name="' + a + '" value="' + b + '"></param>'; h += " " + a + '="' + b + '"' }), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>"
                }u(e) && e.parent().is(a.inner) || a.inner.append(e); b.trigger("beforeShow");
                a.inner.css("overflow", "yes" === l ? "scroll" : "no" === l ? "hidden" : l); b._setDimension(); b.reposition(); b.isOpen = !1; b.coming = null; b.bindEvents(); if (!b.isOpened) f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove(); else if (d.prevMethod) b.transitions[d.prevMethod](); b.transitions[b.isOpened ? a.nextMethod : a.openMethod](); b._preloadImages()
            }
        }, _setDimension: function () {
            var a = b.getViewport(), d = 0, e = !1, c = !1, e = b.wrap, l = b.skin, g = b.inner, h = b.current, c = h.width, k = h.height, n = h.minWidth, v = h.minHeight, p = h.maxWidth,
            q = h.maxHeight, t = h.scrolling, r = h.scrollOutside ? h.scrollbarWidth : 0, y = h.margin, z = m(y[1] + y[3]), s = m(y[0] + y[2]), w, A, u, D, B, G, C, E, I; e.add(l).add(g).width("auto").height("auto").removeClass("fancybox-tmp"); y = m(l.outerWidth(!0) - l.width()); w = m(l.outerHeight(!0) - l.height()); A = z + y; u = s + w; D = F(c) ? (a.w - A) * m(c) / 100 : c; B = F(k) ? (a.h - u) * m(k) / 100 : k; if ("iframe" === h.type) {
                if (I = h.content, h.autoHeight && 1 === I.data("ready")) try {
                    I[0].contentWindow.document.location && (g.width(D).height(9999), G = I.contents().find("body"), r && G.css("overflow-x",
                        "hidden"), B = G.outerHeight(!0))
                } catch (H) { }
            } else if (h.autoWidth || h.autoHeight) g.addClass("fancybox-tmp"), h.autoWidth || g.width(D), h.autoHeight || g.height(B), h.autoWidth && (D = g.width()), h.autoHeight && (B = g.height()), g.removeClass("fancybox-tmp"); c = m(D); k = m(B); E = D / B; n = m(F(n) ? m(n, "w") - A : n); p = m(F(p) ? m(p, "w") - A : p); v = m(F(v) ? m(v, "h") - u : v); q = m(F(q) ? m(q, "h") - u : q); G = p; C = q; h.fitToView && (p = Math.min(a.w - A, p), q = Math.min(a.h - u, q)); A = a.w - z; s = a.h - s; h.aspectRatio ? (c > p && (c = p, k = m(c / E)), k > q && (k = q, c = m(k * E)), c < n && (c = n, k = m(c /
                E)), k < v && (k = v, c = m(k * E))) : (c = Math.max(n, Math.min(c, p)), h.autoHeight && "iframe" !== h.type && (g.width(c), k = g.height()), k = Math.max(v, Math.min(k, q))); if (h.fitToView) if (g.width(c).height(k), e.width(c + y), a = e.width(), z = e.height(), h.aspectRatio) for (; (a > A || z > s) && c > n && k > v && !(19 < d++);)k = Math.max(v, Math.min(q, k - 10)), c = m(k * E), c < n && (c = n, k = m(c / E)), c > p && (c = p, k = m(c / E)), g.width(c).height(k), e.width(c + y), a = e.width(), z = e.height(); else c = Math.max(n, Math.min(c, c - (a - A))), k = Math.max(v, Math.min(k, k - (z - s))); r && "auto" === t && k < B &&
                    c + y + r < A && (c += r); g.width(c).height(k); e.width(c + y); a = e.width(); z = e.height(); e = (a > A || z > s) && c > n && k > v; c = h.aspectRatio ? c < G && k < C && c < D && k < B : (c < G || k < C) && (c < D || k < B); f.extend(h, { dim: { width: x(a), height: x(z) }, origWidth: D, origHeight: B, canShrink: e, canExpand: c, wPadding: y, hPadding: w, wrapSpace: z - l.outerHeight(!0), skinSpace: l.height() - k }); !I && h.autoHeight && k > v && k < q && !c && g.height("auto")
        }, _getPosition: function (a) {
            var d = b.current, e = b.getViewport(), c = d.margin, f = b.wrap.width() + c[1] + c[3], g = b.wrap.height() + c[0] + c[2], c = {
                position: "absolute",
                top: c[0], left: c[3]
            }; d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x); c.top = x(Math.max(c.top, c.top + (e.h - g) * d.topRatio)); c.left = x(Math.max(c.left, c.left + (e.w - f) * d.leftRatio)); return c
        }, _afterZoomIn: function () {
            var a = b.current; a && ((b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function (d) {
                f(d.target).is("a") || f(d.target).parent().is("a") ||
                (d.preventDefault(), b[a.closeClick ? "close" : "next"]())
            }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function (a) { a.preventDefault(); b.close() }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), a.loop || a.index !== a.group.length - 1) ? b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play(!0)) : b.play(!1))
        },
        _afterZoomOut: function (a) { a = a || b.current; f(".fancybox-wrap").trigger("onReset").remove(); f.extend(b, { group: {}, opts: {}, router: !1, current: null, isActive: !1, isOpened: !1, isOpen: !1, isClosing: !1, wrap: null, skin: null, outer: null, inner: null }); b.trigger("afterClose", a) }
    }); b.transitions = {
        getOrigPosition: function () {
            var a = b.current, d = a.element, e = a.orig, c = {}, f = 50, g = 50, h = a.hPadding, k = a.wPadding, n = b.getViewport(); !e && a.isDom && d.is(":visible") && (e = d.find("img:first"), e.length || (e = d)); u(e) ? (c = e.offset(), e.is("img") &&
                (f = e.outerWidth(), g = e.outerHeight())) : (c.top = n.y + (n.h - g) * a.topRatio, c.left = n.x + (n.w - f) * a.leftRatio); if ("fixed" === b.wrap.css("position") || a.locked) c.top -= n.y, c.left -= n.x; return c = { top: x(c.top - h * a.topRatio), left: x(c.left - k * a.leftRatio), width: x(f + k), height: x(g + h) }
        }, step: function (a, d) {
            var e, c, f = d.prop; c = b.current; var g = c.wrapSpace, h = c.skinSpace; if ("width" === f || "height" === f) e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](m("width" ===
                f ? c : c - g * e)), b.inner[f](m("width" === f ? c : c - g * e - h * e))
        }, zoomIn: function () { var a = b.current, d = a.pos, e = a.openEffect, c = "elastic" === e, l = f.extend({ opacity: 1 }, d); delete l.position; c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1); b.wrap.css(d).animate(l, { duration: "none" === e ? 0 : a.openSpeed, easing: a.openEasing, step: c ? this.step : null, complete: b._afterZoomIn }) }, zoomOut: function () {
            var a = b.current, d = a.closeEffect, e = "elastic" === d, c = { opacity: 0.1 }; e && (c = this.getOrigPosition(), a.closeOpacity &&
                (c.opacity = 0.1)); b.wrap.animate(c, { duration: "none" === d ? 0 : a.closeSpeed, easing: a.closeEasing, step: e ? this.step : null, complete: b._afterZoomOut })
        }, changeIn: function () { var a = b.current, d = a.nextEffect, e = a.pos, c = { opacity: 1 }, f = b.direction, g; e.opacity = 0.1; "elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = x(m(e[g]) - 200), c[g] = "+=200px") : (e[g] = x(m(e[g]) + 200), c[g] = "-=200px")); "none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, { duration: a.nextSpeed, easing: a.nextEasing, complete: b._afterZoomIn }) },
        changeOut: function () { var a = b.previous, d = a.prevEffect, e = { opacity: 0.1 }, c = b.direction; "elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px"); a.wrap.animate(e, { duration: "none" === d ? 0 : a.prevSpeed, easing: a.prevEasing, complete: function () { f(this).trigger("onReset").remove() } }) }
    }; b.helpers.overlay = {
        defaults: { closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !t, fixed: !0 }, overlay: null, fixed: !1, el: f("html"), create: function (a) {
            var d; a = f.extend({}, this.defaults, a); this.overlay &&
                this.close(); d = b.coming ? b.coming.parent : a.parent; this.overlay = f('<div class="fancybox-overlay"></div>').appendTo(d && d.lenth ? d : "body"); this.fixed = !1; a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        }, open: function (a) {
            var d = this; a = f.extend({}, this.defaults, a); this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a); this.fixed || (q.bind("resize.overlay", f.proxy(this.update, this)), this.update()); a.closeClick && this.overlay.bind("click.overlay",
                function (a) { if (f(a.target).hasClass("fancybox-overlay")) return b.isActive ? b.close() : d.close(), !1 }); this.overlay.css(a.css).show()
        }, close: function () { q.unbind("resize.overlay"); this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), this.el.removeClass("fancybox-lock"), q.scrollTop(this.scrollV).scrollLeft(this.scrollH)); f(".fancybox-overlay").remove().hide(); f.extend(this, { overlay: null, fixed: !1 }) }, update: function () {
            var a = "100%", b; this.overlay.width(a).height("100%");
            J ? (b = Math.max(H.documentElement.offsetWidth, H.body.offsetWidth), p.width() > b && (a = p.width())) : p.width() > q.width() && (a = p.width()); this.overlay.width(a).height(p.height())
        }, onReady: function (a, b) { var e = this.overlay; f(".fancybox-overlay").stop(!0, !0); e || this.create(a); a.locked && this.fixed && b.fixed && (b.locked = this.overlay.append(b.wrap), b.fixed = !1); !0 === a.showEarly && this.beforeShow.apply(this, arguments) }, beforeShow: function (a, b) {
        b.locked && !this.el.hasClass("fancybox-lock") && (!1 !== this.fixPosition && f("*").filter(function () {
            return "fixed" ===
                f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap")
        }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin"), this.scrollV = q.scrollTop(), this.scrollH = q.scrollLeft(), this.el.addClass("fancybox-lock"), q.scrollTop(this.scrollV).scrollLeft(this.scrollH)); this.open(a)
        }, onUpdate: function () { this.fixed || this.update() }, afterClose: function (a) { this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this)) }
    }; b.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        }, beforeShow: function (a) {
            var d = b.current, e = d.title, c = a.type; f.isFunction(e) && (e = e.call(d.element, d)); if (r(e) && "" !== f.trim(e)) {
                d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>"); switch (c) { case "inside": c = b.skin; break; case "outside": c = b.wrap; break; case "over": c = b.inner; break; default: c = b.skin, d.appendTo("body"), J && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(m(d.css("margin-bottom"))) }d["top" === a.position ? "prependTo" :
                    "appendTo"](c)
            }
        }
    }; f.fn.fancybox = function (a) {
        var d, e = f(this), c = this.selector || "", l = function (g) { var h = f(this).blur(), k = d, l, m; g.ctrlKey || g.altKey || g.shiftKey || g.metaKey || h.is(".fancybox-wrap") || (l = a.groupAttr || "data-fancybox-group", m = h.attr(l), m || (l = "rel", m = h.get(0)[l]), m && "" !== m && "nofollow" !== m && (h = c.length ? f(c) : e, h = h.filter("[" + l + '="' + m + '"]'), k = h.index(this)), a.index = k, !1 !== b.open(h, a) && g.preventDefault()) }; a = a || {}; d = a.index || 0; c && !1 !== a.live ? p.undelegate(c, "click.fb-start").delegate(c + ":not('.fancybox-item, .fancybox-nav')",
            "click.fb-start", l) : e.unbind("click.fb-start").bind("click.fb-start", l); this.filter("[data-fancybox-start=1]").trigger("click"); return this
    }; p.ready(function () {
        var a, d; f.scrollbarWidth === w && (f.scrollbarWidth = function () { var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), b = a.children(), b = b.innerWidth() - b.height(99).innerWidth(); a.remove(); return b }); f.support.fixedPosition === w && (f.support.fixedPosition = function () {
            var a = f('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
            b = 20 === a[0].offsetTop || 15 === a[0].offsetTop; a.remove(); return b
        }()); f.extend(b.defaults, { scrollbarWidth: f.scrollbarWidth(), fixed: f.support.fixedPosition, parent: f("body") }); a = f(s).width(); K.addClass("fancybox-lock-test"); d = f(s).width(); K.removeClass("fancybox-lock-test"); f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px !important;}</style>").appendTo("head")
    })
})(window, document, jQuery);

//Fancybox
$(document).ready(function () {
    $(".fancybox").fancybox();
});
$("#slideshow > div:gt(0)").hide();
setInterval(function () {
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
}, 5000);
var buttonvalue;
$(document).ready(function () {
    showDisabled();
});
$(document).ready(function () {
    $('.menu-item').hover(function () {
        $('#active', this).toggleClass('active');
        $('#active', this).css({
            'display': 'block'
        }); //adds context

    });
});

$(document).ready(function () { // Created by Berk SOYSAL 
    // Data saver mode for mobile devices.
    $('.entry-content .post-media .image-wrap img').each(function () {
        this.src = this.src.replace('/s72-c/', '/s400/');
    });

    $("img").each(function () {
        $(this).attr("data-src", $(this).attr("src"));
        $(this).removeAttr("data-src");
    });
    $("img").unveil(100, function () {

        $(this).load(function () {
            try {
                this.style.opacity = 1;
            } catch (err) {
                //console.log("Style do not exist, no problem.");
            }
        });
    });
});

$(document).ready(function () {
    $(".navlist").css("opacity", 1);

    $(".featured").css("opacity", 1);
});
$(window).load(function () {
    $("html,body").trigger("scroll");
    try {
        style.opacity = 1;
    } catch (err) { //console.log("Style do not exist, no problem.");
    }
});
$("disabledbutton a").click(
    function (event) {
        event.preventDefault();
    });

function insertAfter(referenceNode, newNode) {
    try {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    } catch (err) { //console.log("Parent node does not exist, No problem.");
    }
}

function showDisabled() {
    var button = document.getElementById("mybutton");
    try {
        buttonvalue = document.getElementById("mybutton").innerHTML;
        // Store the value in a variable called buttonvariable
        document.getElementById("mybutton").innerHTML = "<i aria-hidden='true' class='fa fa-lock'/> Please Share this Post to Enable the Download Button"; //clear the value
        button.id = "disabledbutton";
        button.style.display = 'block';
        var div = document.createElement('div');
        div.setAttribute('id', 'div');
        insertAfter(button, div);

    } catch (err) {
        //console.log("Button does not exist, No problem.");
    }
}

function showLoader() {
    try {
        var disabledbutton = document.getElementById("disabledbutton");
        document.getElementById("disabledbutton").innerHTML = "<h5 style='text-align:center;color:blue;position:relative;top:82px; '>Loading..</h5>"
        disabledbutton.id = "myloader";
        setTimeout(toggle_visibility, 20000);
    } catch (err) {
        //console.log('Loader does not exist, No Problem');
    }
}

function toggle_visibility() {
    try {
        var e = document.getElementById('myloader');
        e.id = "mybutton";
        document.getElementById("mybutton").innerHTML = "<i aria-hidden='true' class='fa fa-unlock'/> " + buttonvalue;
        loader = document.getElementById("loader").style.display = 'none';
        // loader.style.visibility='hidden';
        e.style.display = 'block';
    } catch (err) {
        //console.log('Loader does not exist, No Problem');
    }
}

// USE THIS SCRIPT IF EVER WANT TO CHANGE THE SIZE OF AN IMAGE
function resizeThumb(e, b) {
    var c = document.getElementById(e),
        d = c.getElementsByTagName("img");
    for (var a = 0; a < d.length; a++) {
        d[a].src = d[a].src.replace(/\/s72\-c/, "/s" + b + "-c");
        d[a].width = b;
        d[a].height = b
    }
}

$("#scrollbutton").click(function () {
    $('html,body').stop().animate({
        scrollTop: $(".pi-navigation").offset().top
    }, 1000, 'swing');
    var s = document.getElementById("scrollbutton");
});

; (function ($) {
    $.fn.unveil = function (threshold, callback) {
        var $w = $(window), th = threshold || 0, retina = window.devicePixelRatio > 1, attrib = retina ? "data-src-retina" : "data-src", images = this, loaded; this.one("unveil", function () { var source = this.getAttribute(attrib); source = source || this.getAttribute("data-src"); if (source) { this.setAttribute("src", source); if (typeof callback === "function") callback.call(this); } }); function unveil() { var inview = images.filter(function () { var $e = $(this); if ($e.is(":hidden")) return; var wt = $w.scrollTop(), wb = wt + $w.height(), et = $e.offset().top, eb = et + $e.height(); return eb >= wt - th && et <= wb + th; }); loaded = inview.trigger("unveil"); images = images.not(loaded); }
        $w.on("scroll.unveil resize.unveil lookup.unveil", unveil); unveil(); return this;
    };
})(window.jQuery || window.Zepto);