/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a, b) {
    function G(a) {
        var b = F[a] = {};
        return p.each(a.split(s), function(a, c) {
            b[c] = !0
        }), b
    }

    function J(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(I, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : +d + "" === d ? +d : H.test(d) ? p.parseJSON(d) : d
                } catch (f) {}
                p.data(a, c, d)
            } else d = b
        }
        return d
    }

    function K(a) {
        var b;
        for (b in a) {
            if (b === "data" && p.isEmptyObject(a[b])) continue;
            if (b !== "toJSON") return !1
        }
        return !0
    }

    function ba() {
        return !1
    }

    function bb() {
        return !0
    }

    function bh(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function bi(a, b) {
        do a = a[b]; while (a && a.nodeType !== 1);
        return a
    }

    function bj(a, b, c) {
        b = b || 0;
        if (p.isFunction(b)) return p.grep(a, function(a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return p.grep(a, function(a, d) {
            return a === b === c
        });
        if (typeof b == "string") {
            var d = p.grep(a, function(a) {
                return a.nodeType === 1
            });
            if (be.test(b)) return p.filter(b, d, !c);
            b = p.filter(b, d)
        }
        return p.grep(a, function(a, d) {
            return p.inArray(a, b) >= 0 === c
        })
    }

    function bk(a) {
        var b = bl.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }

    function bC(a, b) {
        return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
    }

    function bD(a, b) {
        if (b.nodeType !== 1 || !p.hasData(a)) return;
        var c, d, e, f = p._data(a),
            g = p._data(b, f),
            h = f.events;
        if (h) {
            delete g.handle, g.events = {};
            for (c in h)
                for (d = 0, e = h[c].length; d < e; d++) p.event.add(b, c, h[c][d])
        }
        g.data && (g.data = p.extend({}, g.data))
    }

    function bE(a, b) {
        var c;
        if (b.nodeType !== 1) return;
        b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? (b.parentNode && (b.outerHTML = a.outerHTML), p.support.html5Clone && a.innerHTML && !p.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : c === "input" && bv.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text), b.removeAttribute(p.expando)
    }

    function bF(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }

    function bG(a) {
        bv.test(a.type) && (a.defaultChecked = a.checked)
    }

    function bY(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = bW.length;
        while (e--) {
            b = bW[e] + c;
            if (b in a) return b
        }
        return d
    }

    function bZ(a, b) {
        return a = b || a, p.css(a, "display") === "none" || !p.contains(a.ownerDocument, a)
    }

    function b$(a, b) {
        var c, d, e = [],
            f = 0,
            g = a.length;
        for (; f < g; f++) {
            c = a[f];
            if (!c.style) continue;
            e[f] = p._data(c, "olddisplay"), b ? (!e[f] && c.style.display === "none" && (c.style.display = ""), c.style.display === "" && bZ(c) && (e[f] = p._data(c, "olddisplay", cc(c.nodeName)))) : (d = bH(c, "display"), !e[f] && d !== "none" && p._data(c, "olddisplay", d))
        }
        for (f = 0; f < g; f++) {
            c = a[f];
            if (!c.style) continue;
            if (!b || c.style.display === "none" || c.style.display === "") c.style.display = b ? e[f] || "" : "none"
        }
        return a
    }

    function b_(a, b, c) {
        var d = bP.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function ca(a, b, c, d) {
        var e = c === (d ? "border" : "content") ? 4 : b === "width" ? 1 : 0,
            f = 0;
        for (; e < 4; e += 2) c === "margin" && (f += p.css(a, c + bV[e], !0)), d ? (c === "content" && (f -= parseFloat(bH(a, "padding" + bV[e])) || 0), c !== "margin" && (f -= parseFloat(bH(a, "border" + bV[e] + "Width")) || 0)) : (f += parseFloat(bH(a, "padding" + bV[e])) || 0, c !== "padding" && (f += parseFloat(bH(a, "border" + bV[e] + "Width")) || 0));
        return f
    }

    function cb(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight,
            e = !0,
            f = p.support.boxSizing && p.css(a, "boxSizing") === "border-box";
        if (d <= 0 || d == null) {
            d = bH(a, b);
            if (d < 0 || d == null) d = a.style[b];
            if (bQ.test(d)) return d;
            e = f && (p.support.boxSizingReliable || d === a.style[b]), d = parseFloat(d) || 0
        }
        return d + ca(a, b, c || (f ? "border" : "content"), e) + "px"
    }

    function cc(a) {
        if (bS[a]) return bS[a];
        var b = p("<" + a + ">").appendTo(e.body),
            c = b.css("display");
        b.remove();
        if (c === "none" || c === "") {
            bI = e.body.appendChild(bI || p.extend(e.createElement("iframe"), {
                    frameBorder: 0,
                    width: 0,
                    height: 0
                }));
            if (!bJ || !bI.createElement) bJ = (bI.contentWindow || bI.contentDocument).document, bJ.write("<!doctype html><html><body>"), bJ.close();
            b = bJ.body.appendChild(bJ.createElement(a)), c = bH(b, "display"), e.body.removeChild(bI)
        }
        return bS[a] = c, c
    }

    function ci(a, b, c, d) {
        var e;
        if (p.isArray(b)) p.each(b, function(b, e) {
            c || ce.test(a) ? d(a, e) : ci(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
        });
        else if (!c && p.type(b) === "object")
            for (e in b) ci(a + "[" + e + "]", b[e], c, d);
        else d(a, b)
    }

    function cz(a) {
        return function(b, c) {
            typeof b != "string" && (c = b, b = "*");
            var d, e, f, g = b.toLowerCase().split(s),
                h = 0,
                i = g.length;
            if (p.isFunction(c))
                for (; h < i; h++) d = g[h], f = /^\+/.test(d), f && (d = d.substr(1) || "*"), e = a[d] = a[d] || [], e[f ? "unshift" : "push"](c)
        }
    }

    function cA(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h, i = a[f],
            j = 0,
            k = i ? i.length : 0,
            l = a === cv;
        for (; j < k && (l || !h); j++) h = i[j](c, d, e), typeof h == "string" && (!l || g[h] ? h = b : (c.dataTypes.unshift(h), h = cA(a, c, d, e, h, g)));
        return (l || !h) && !g["*"] && (h = cA(a, c, d, e, "*", g)), h
    }

    function cB(a, c) {
        var d, e, f = p.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
        e && p.extend(!0, a, e)
    }

    function cC(a, c, d) {
        var e, f, g, h, i = a.contents,
            j = a.dataTypes,
            k = a.responseFields;
        for (f in k) f in d && (c[k[f]] = d[f]);
        while (j[0] === "*") j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
        if (e)
            for (f in i)
                if (i[f] && i[f].test(e)) {
                    j.unshift(f);
                    break
                }
        if (j[0] in d) g = j[0];
        else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break
                }
                h || (h = f)
            }
            g = g || h
        }
        if (g) return g !== j[0] && j.unshift(g), d[g]
    }

    function cD(a, b) {
        var c, d, e, f, g = a.dataTypes.slice(),
            h = g[0],
            i = {},
            j = 0;
        a.dataFilter && (b = a.dataFilter(b, a.dataType));
        if (g[1])
            for (c in a.converters) i[c.toLowerCase()] = a.converters[c];
        for (; e = g[++j];)
            if (e !== "*") {
                if (h !== "*" && h !== e) {
                    c = i[h + " " + e] || i["* " + e];
                    if (!c)
                        for (d in i) {
                            f = d.split(" ");
                            if (f[1] === e) {
                                c = i[h + " " + f[0]] || i["* " + f[0]];
                                if (c) {
                                    c === !0 ? c = i[d] : i[d] !== !0 && (e = f[0], g.splice(j--, 0, e));
                                    break
                                }
                            }
                        }
                    if (c !== !0)
                        if (c && a["throws"]) b = c(b);
                        else try {
                            b = c(b)
                        } catch (k) {
                            return {
                                state: "parsererror",
                                error: c ? k : "No conversion from " + h + " to " + e
                            }
                        }
                }
                h = e
            }
        return {
            state: "success",
            data: b
        }
    }

    function cL() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function cM() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function cU() {
        return setTimeout(function() {
            cN = b
        }, 0), cN = p.now()
    }

    function cV(a, b) {
        p.each(b, function(b, c) {
            var d = (cT[b] || []).concat(cT["*"]),
                e = 0,
                f = d.length;
            for (; e < f; e++)
                if (d[e].call(a, b, c)) return
        })
    }

    function cW(a, b, c) {
        var d, e = 0,
            f = 0,
            g = cS.length,
            h = p.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                var b = cN || cU(),
                    c = Math.max(0, j.startTime + j.duration - b),
                    d = 1 - (c / j.duration || 0),
                    e = 0,
                    f = j.tweens.length;
                for (; e < f; e++) j.tweens[e].run(d);
                return h.notifyWith(a, [j, d, c]), d < 1 && f ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: p.extend({}, b),
                opts: p.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: cN || cU(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c, d) {
                    var e = p.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(e), e
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    for (; c < d; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        cX(k, j.opts.specialEasing);
        for (; e < g; e++) {
            d = cS[e].call(j, a, k, j.opts);
            if (d) return d
        }
        return cV(j, k), p.isFunction(j.opts.start) && j.opts.start.call(a, j), p.fx.timer(p.extend(i, {
            anim: j,
            queue: j.opts.queue,
            elem: a
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function cX(a, b) {
        var c, d, e, f, g;
        for (c in a) {
            d = p.camelCase(c), e = b[d], f = a[c], p.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = p.cssHooks[d];
            if (g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
        }
    }

    function cY(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = a.style,
            n = {},
            o = [],
            q = a.nodeType && bZ(a);
        c.queue || (j = p._queueHooks(a, "fx"), j.unqueued == null && (j.unqueued = 0, k = j.empty.fire, j.empty.fire = function() {
            j.unqueued || k()
        }), j.unqueued++, l.always(function() {
            l.always(function() {
                j.unqueued--, p.queue(a, "fx").length || j.empty.fire()
            })
        })), a.nodeType === 1 && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], p.css(a, "display") === "inline" && p.css(a, "float") === "none" && (!p.support.inlineBlockNeedsLayout || cc(a.nodeName) === "inline" ? m.display = "inline-block" : m.zoom = 1)), c.overflow && (m.overflow = "hidden", p.support.shrinkWrapBlocks || l.done(function() {
            m.overflow = c.overflow[0], m.overflowX = c.overflow[1], m.overflowY = c.overflow[2]
        }));
        for (d in b) {
            f = b[d];
            if (cP.exec(f)) {
                delete b[d];
                if (f === (q ? "hide" : "show")) continue;
                o.push(d)
            }
        }
        g = o.length;
        if (g) {
            h = p._data(a, "fxshow") || p._data(a, "fxshow", {}), q ? p(a).show() : l.done(function() {
                p(a).hide()
            }), l.done(function() {
                var b;
                p.removeData(a, "fxshow", !0);
                for (b in n) p.style(a, b, n[b])
            });
            for (d = 0; d < g; d++) e = o[d], i = l.createTween(e, q ? h[e] : 0), n[e] = h[e] || p.style(a, e), e in h || (h[e] = i.start, q && (i.end = i.start, i.start = e === "width" || e === "height" ? 1 : 0))
        }
    }

    function cZ(a, b, c, d, e) {
        return new cZ.prototype.init(a, b, c, d, e)
    }

    function c$(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        b = b ? 1 : 0;
        for (; e < 4; e += 2 - b) c = bV[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function da(a) {
        return p.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }
    var c, d, e = a.document,
        f = a.location,
        g = a.navigator,
        h = a.jQuery,
        i = a.$,
        j = Array.prototype.push,
        k = Array.prototype.slice,
        l = Array.prototype.indexOf,
        m = Object.prototype.toString,
        n = Object.prototype.hasOwnProperty,
        o = String.prototype.trim,
        p = function(a, b) {
            return new p.fn.init(a, b, c)
        },
        q = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        r = /\S/,
        s = /\s+/,
        t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^[\],:{}\s]*$/,
        x = /(?:^|:|,)(?:\s*\[)+/g,
        y = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        z = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        A = /^-ms-/,
        B = /-([\da-z])/gi,
        C = function(a, b) {
            return (b + "").toUpperCase()
        },
        D = function() {
            e.addEventListener ? (e.removeEventListener("DOMContentLoaded", D, !1), p.ready()) : e.readyState === "complete" && (e.detachEvent("onreadystatechange", D), p.ready())
        },
        E = {};
    p.fn = p.prototype = {
        constructor: p,
        init: function(a, c, d) {
            var f, g, h, i;
            if (!a) return this;
            if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
            if (typeof a == "string") {
                a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3 ? f = [null, a, null] : f = u.exec(a);
                if (f && (f[1] || !c)) {
                    if (f[1]) return c = c instanceof p ? c[0] : c, i = c && c.nodeType ? c.ownerDocument || c : e, a = p.parseHTML(f[1], i, !0), v.test(f[1]) && p.isPlainObject(c) && this.attr.call(a, c, !0), p.merge(this, a);
                    g = e.getElementById(f[2]);
                    if (g && g.parentNode) {
                        if (g.id !== f[2]) return d.find(a);
                        this.length = 1, this[0] = g
                    }
                    return this.context = e, this.selector = a, this
                }
                return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
            }
            return p.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), p.makeArray(a, this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return k.call(this)
        },
        get: function(a) {
            return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
        },
        pushStack: function(a, b, c) {
            var d = p.merge(this.constructor(), a);
            return d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d
        },
        each: function(a, b) {
            return p.each(this, a, b)
        },
        ready: function(a) {
            return p.ready.promise().done(a), this
        },
        eq: function(a) {
            return a = +a, a === -1 ? this.slice(a) : this.slice(a, a + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(k.apply(this, arguments), "slice", k.call(arguments).join(","))
        },
        map: function(a) {
            return this.pushStack(p.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: j,
        sort: [].sort,
        splice: [].splice
    }, p.fn.init.prototype = p.fn, p.extend = p.fn.extend = function() {
        var a, c, d, e, f, g, h = arguments[0] || {},
            i = 1,
            j = arguments.length,
            k = !1;
        typeof h == "boolean" && (k = h, h = arguments[1] || {}, i = 2), typeof h != "object" && !p.isFunction(h) && (h = {}), j === i && (h = this, --i);
        for (; i < j; i++)
            if ((a = arguments[i]) != null)
                for (c in a) {
                    d = h[c], e = a[c];
                    if (h === e) continue;
                    k && e && (p.isPlainObject(e) || (f = p.isArray(e))) ? (f ? (f = !1, g = d && p.isArray(d) ? d : []) : g = d && p.isPlainObject(d) ? d : {}, h[c] = p.extend(k, g, e)) : e !== b && (h[c] = e)
                }
        return h
    }, p.extend({
        noConflict: function(b) {
            return a.$ === p && (a.$ = i), b && a.jQuery === p && (a.jQuery = h), p
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? p.readyWait++ : p.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? --p.readyWait : p.isReady) return;
            if (!e.body) return setTimeout(p.ready, 1);
            p.isReady = !0;
            if (a !== !0 && --p.readyWait > 0) return;
            d.resolveWith(e, [p]), p.fn.trigger && p(e).trigger("ready").off("ready")
        },
        isFunction: function(a) {
            return p.type(a) === "function"
        },
        isArray: Array.isArray || function(a) {
            return p.type(a) === "array"
        },
        isWindow: function(a) {
            return a != null && a == a.window
        },
        isNumeric: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        type: function(a) {
            return a == null ? String(a) : E[m.call(a)] || "object"
        },
        isPlainObject: function(a) {
            if (!a || p.type(a) !== "object" || a.nodeType || p.isWindow(a)) return !1;
            try {
                if (a.constructor && !n.call(a, "constructor") && !n.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            var d;
            for (d in a);
            return d === b || n.call(a, d)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        error: function(a) {
            throw new Error(a)
        },
        parseHTML: function(a, b, c) {
            var d;
            return !a || typeof a != "string" ? null : (typeof b == "boolean" && (c = b, b = 0), b = b || e, (d = v.exec(a)) ? [b.createElement(d[1])] : (d = p.buildFragment([a], b, c ? null : []), p.merge([], (d.cacheable ? p.clone(d.fragment) : d.fragment).childNodes)))
        },
        parseJSON: function(b) {
            if (!b || typeof b != "string") return null;
            b = p.trim(b);
            if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
            if (w.test(b.replace(y, "@").replace(z, "]").replace(x, ""))) return (new Function("return " + b))();
            p.error("Invalid JSON: " + b)
        },
        parseXML: function(c) {
            var d, e;
            if (!c || typeof c != "string") return null;
            try {
                a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
            } catch (f) {
                d = b
            }
            return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && p.error("Invalid XML: " + c), d
        },
        noop: function() {},
        globalEval: function(b) {
            b && r.test(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(A, "ms-").replace(B, C)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, c, d) {
            var e, f = 0,
                g = a.length,
                h = g === b || p.isFunction(a);
            if (d) {
                if (h) {
                    for (e in a)
                        if (c.apply(a[e], d) === !1) break
                } else
                    for (; f < g;)
                        if (c.apply(a[f++], d) === !1) break
            } else if (h) {
                for (e in a)
                    if (c.call(a[e], e, a[e]) === !1) break
            } else
                for (; f < g;)
                    if (c.call(a[f], f, a[f++]) === !1) break; return a
        },
        trim: o && !o.call("﻿ ") ? function(a) {
            return a == null ? "" : o.call(a)
        } : function(a) {
            return a == null ? "" : (a + "").replace(t, "")
        },
        makeArray: function(a, b) {
            var c, d = b || [];
            return a != null && (c = p.type(a), a.length == null || c === "string" || c === "function" || c === "regexp" || p.isWindow(a) ? j.call(d, a) : p.merge(d, a)), d
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (l) return l.call(b, a, c);
                d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                for (; c < d; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, c) {
            var d = c.length,
                e = a.length,
                f = 0;
            if (typeof d == "number")
                for (; f < d; f++) a[e++] = c[f];
            else
                while (c[f] !== b) a[e++] = c[f++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            var d, e = [],
                f = 0,
                g = a.length;
            c = !!c;
            for (; f < g; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
            return e
        },
        map: function(a, c, d) {
            var e, f, g = [],
                h = 0,
                i = a.length,
                j = a instanceof p || i !== b && typeof i == "number" && (i > 0 && a[0] && a[i - 1] || i === 0 || p.isArray(a));
            if (j)
                for (; h < i; h++) e = c(a[h], h, d), e != null && (g[g.length] = e);
            else
                for (f in a) e = c(a[f], f, d), e != null && (g[g.length] = e);
            return g.concat.apply([], g)
        },
        guid: 1,
        proxy: function(a, c) {
            var d, e, f;
            return typeof c == "string" && (d = a[c], c = a, a = d), p.isFunction(a) ? (e = k.call(arguments, 2), f = function() {
                return a.apply(c, e.concat(k.call(arguments)))
            }, f.guid = a.guid = a.guid || p.guid++, f) : b
        },
        access: function(a, c, d, e, f, g, h) {
            var i, j = d == null,
                k = 0,
                l = a.length;
            if (d && typeof d == "object") {
                for (k in d) p.access(a, c, k, d[k], 1, g, e);
                f = 1
            } else if (e !== b) {
                i = h === b && p.isFunction(e), j && (i ? (i = c, c = function(a, b, c) {
                    return i.call(p(a), c)
                }) : (c.call(a, e), c = null));
                if (c)
                    for (; k < l; k++) c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h);
                f = 1
            }
            return f ? a : j ? c.call(a) : l ? c(a[0], d) : g
        },
        now: function() {
            return (new Date).getTime()
        }
    }), p.ready.promise = function(b) {
        if (!d) {
            d = p.Deferred();
            if (e.readyState === "complete") setTimeout(p.ready, 1);
            else if (e.addEventListener) e.addEventListener("DOMContentLoaded", D, !1), a.addEventListener("load", p.ready, !1);
            else {
                e.attachEvent("onreadystatechange", D), a.attachEvent("onload", p.ready);
                var c = !1;
                try {
                    c = a.frameElement == null && e.documentElement
                } catch (f) {}
                c && c.doScroll && function g() {
                    if (!p.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (a) {
                            return setTimeout(g, 50)
                        }
                        p.ready()
                    }
                }()
            }
        }
        return d.promise(b)
    }, p.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
        E["[object " + b + "]"] = b.toLowerCase()
    }), c = p(e);
    var F = {};
    p.Callbacks = function(a) {
        a = typeof a == "string" ? F[a] || G(a) : p.extend({}, a);
        var c, d, e, f, g, h, i = [],
            j = !a.once && [],
            k = function(b) {
                c = a.memory && b, d = !0, h = f || 0, f = 0, g = i.length, e = !0;
                for (; i && h < g; h++)
                    if (i[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                e = !1, i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
            },
            l = {
                add: function() {
                    if (i) {
                        var b = i.length;
                        (function d(b) {
                            p.each(b, function(b, c) {
                                var e = p.type(c);
                                e === "function" && (!a.unique || !l.has(c)) ? i.push(c) : c && c.length && e !== "string" && d(c)
                            })
                        })(arguments), e ? g = i.length : c && (f = b, k(c))
                    }
                    return this
                },
                remove: function() {
                    return i && p.each(arguments, function(a, b) {
                        var c;
                        while ((c = p.inArray(b, i, c)) > -1) i.splice(c, 1), e && (c <= g && g--, c <= h && h--)
                    }), this
                },
                has: function(a) {
                    return p.inArray(a, i) > -1
                },
                empty: function() {
                    return i = [], this
                },
                disable: function() {
                    return i = j = c = b, this
                },
                disabled: function() {
                    return !i
                },
                lock: function() {
                    return j = b, c || l.disable(), this
                },
                locked: function() {
                    return !j
                },
                fireWith: function(a, b) {
                    return b = b || [], b = [a, b.slice ? b.slice() : b], i && (!d || j) && (e ? j.push(b) : k(b)), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return l
    }, p.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", p.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", p.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", p.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return p.Deferred(function(c) {
                            p.each(b, function(b, d) {
                                var f = d[0],
                                    g = a[b];
                                e[d[1]](p.isFunction(g) ? function() {
                                    var a = g.apply(this, arguments);
                                    a && p.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f + "With"](this === e ? c : this, [a])
                                } : c[f])
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return a != null ? p.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, p.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[a ^ 1][2].disable, b[2][2].lock), e[f[0]] = g.fire, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = k.call(arguments),
                d = c.length,
                e = d !== 1 || a && p.isFunction(a.promise) ? d : 0,
                f = e === 1 ? a : p.Deferred(),
                g = function(a, b, c) {
                    return function(d) {
                        b[a] = this, c[a] = arguments.length > 1 ? k.call(arguments) : d, c === h ? f.notifyWith(b, c) : --e || f.resolveWith(b, c)
                    }
                },
                h, i, j;
            if (d > 1) {
                h = new Array(d), i = new Array(d), j = new Array(d);
                for (; b < d; b++) c[b] && p.isFunction(c[b].promise) ? c[b].promise().done(g(b, j, c)).fail(f.reject).progress(g(b, i, h)) : --e
            }
            return e || f.resolveWith(j, c), f.promise()
        }
    }), p.support = function() {
        var b, c, d, f, g, h, i, j, k, l, m, n = e.createElement("div");
        n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = n.getElementsByTagName("*"), d = n.getElementsByTagName("a")[0], d.style.cssText = "top:1px;float:left;opacity:.5";
        if (!c || !c.length) return {};
        f = e.createElement("select"), g = f.appendChild(e.createElement("option")), h = n.getElementsByTagName("input")[0], b = {
            leadingWhitespace: n.firstChild.nodeType === 3,
            tbody: !n.getElementsByTagName("tbody").length,
            htmlSerialize: !!n.getElementsByTagName("link").length,
            style: /top/.test(d.getAttribute("style")),
            hrefNormalized: d.getAttribute("href") === "/a",
            opacity: /^0.5/.test(d.style.opacity),
            cssFloat: !!d.style.cssFloat,
            checkOn: h.value === "on",
            optSelected: g.selected,
            getSetAttribute: n.className !== "t",
            enctype: !!e.createElement("form").enctype,
            html5Clone: e.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: e.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, h.checked = !0, b.noCloneChecked = h.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !g.disabled;
        try {
            delete n.test
        } catch (o) {
            b.deleteExpando = !1
        }!n.addEventListener && n.attachEvent && n.fireEvent && (n.attachEvent("onclick", m = function() {
            b.noCloneEvent = !1
        }), n.cloneNode(!0).fireEvent("onclick"), n.detachEvent("onclick", m)), h = e.createElement("input"), h.value = "t", h.setAttribute("type", "radio"), b.radioValue = h.value === "t", h.setAttribute("checked", "checked"), h.setAttribute("name", "t"), n.appendChild(h), i = e.createDocumentFragment(), i.appendChild(n.lastChild), b.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = h.checked, i.removeChild(h), i.appendChild(n);
        if (n.attachEvent)
            for (k in {
                submit: !0,
                change: !0,
                focusin: !0
            }) j = "on" + k, l = j in n, l || (n.setAttribute(j, "return;"), l = typeof n[j] == "function"), b[k + "Bubbles"] = l;
        return p(function() {
            var c, d, f, g, h = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                i = e.getElementsByTagName("body")[0];
            if (!i) return;
            c = e.createElement("div"), c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", i.insertBefore(c, i.firstChild), d = e.createElement("div"), c.appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", f = d.getElementsByTagName("td"), f[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = f[0].offsetHeight === 0, f[0].style.display = "", f[1].style.display = "none", b.reliableHiddenOffsets = l && f[0].offsetHeight === 0, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", b.boxSizing = d.offsetWidth === 4, b.doesNotIncludeMarginInBodyOffset = i.offsetTop !== 1, a.getComputedStyle && (b.pixelPosition = (a.getComputedStyle(d, null) || {}).top !== "1%", b.boxSizingReliable = (a.getComputedStyle(d, null) || {
                    width: "4px"
                }).width === "4px", g = e.createElement("div"), g.style.cssText = d.style.cssText = h, g.style.marginRight = g.style.width = "0", d.style.width = "1px", d.appendChild(g), b.reliableMarginRight = !parseFloat((a.getComputedStyle(g, null) || {}).marginRight)), typeof d.style.zoom != "undefined" && (d.innerHTML = "", d.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = d.offsetWidth === 3, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", b.shrinkWrapBlocks = d.offsetWidth !== 3, c.style.zoom = 1), i.removeChild(c), c = d = f = g = null
        }), i.removeChild(n), c = d = f = g = h = i = n = null, b
    }();
    var H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        I = /([A-Z])/g;
    p.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (p.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            return a = a.nodeType ? p.cache[a[p.expando]] : a[p.expando], !!a && !K(a)
        },
        data: function(a, c, d, e) {
            if (!p.acceptData(a)) return;
            var f, g, h = p.expando,
                i = typeof c == "string",
                j = a.nodeType,
                k = j ? p.cache : a,
                l = j ? a[h] : a[h] && h;
            if ((!l || !k[l] || !e && !k[l].data) && i && d === b) return;
            l || (j ? a[h] = l = p.deletedIds.pop() || p.guid++ : l = h), k[l] || (k[l] = {}, j || (k[l].toJSON = p.noop));
            if (typeof c == "object" || typeof c == "function") e ? k[l] = p.extend(k[l], c) : k[l].data = p.extend(k[l].data, c);
            return f = k[l], e || (f.data || (f.data = {}), f = f.data), d !== b && (f[p.camelCase(c)] = d), i ? (g = f[c], g == null && (g = f[p.camelCase(c)])) : g = f, g
        },
        removeData: function(a, b, c) {
            if (!p.acceptData(a)) return;
            var d, e, f, g = a.nodeType,
                h = g ? p.cache : a,
                i = g ? a[p.expando] : p.expando;
            if (!h[i]) return;
            if (b) {
                d = c ? h[i] : h[i].data;
                if (d) {
                    p.isArray(b) || (b in d ? b = [b] : (b = p.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                    for (e = 0, f = b.length; e < f; e++) delete d[b[e]];
                    if (!(c ? K : p.isEmptyObject)(d)) return
                }
            }
            if (!c) {
                delete h[i].data;
                if (!K(h[i])) return
            }
            g ? p.cleanData([a], !0) : p.support.deleteExpando || h != h.window ? delete h[i] : h[i] = null
        },
        _data: function(a, b, c) {
            return p.data(a, b, c, !0)
        },
        acceptData: function(a) {
            var b = a.nodeName && p.noData[a.nodeName.toLowerCase()];
            return !b || b !== !0 && a.getAttribute("classid") === b
        }
    }), p.fn.extend({
        data: function(a, c) {
            var d, e, f, g, h, i = this[0],
                j = 0,
                k = null;
            if (a === b) {
                if (this.length) {
                    k = p.data(i);
                    if (i.nodeType === 1 && !p._data(i, "parsedAttrs")) {
                        f = i.attributes;
                        for (h = f.length; j < h; j++) g = f[j].name, g.indexOf("data-") || (g = p.camelCase(g.substring(5)), J(i, g, k[g]));
                        p._data(i, "parsedAttrs", !0)
                    }
                }
                return k
            }
            return typeof a == "object" ? this.each(function() {
                p.data(this, a)
            }) : (d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!", p.access(this, function(c) {
                if (c === b) return k = this.triggerHandler("getData" + e, [d[0]]), k === b && i && (k = p.data(i, a), k = J(i, a, k)), k === b && d[1] ? this.data(d[0]) : k;
                d[1] = c, this.each(function() {
                    var b = p(this);
                    b.triggerHandler("setData" + e, d), p.data(this, a, c), b.triggerHandler("changeData" + e, d)
                })
            }, null, c, arguments.length > 1, null, !1))
        },
        removeData: function(a) {
            return this.each(function() {
                p.removeData(this, a)
            })
        }
    }), p.extend({
        queue: function(a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = p._data(a, b), c && (!d || p.isArray(c) ? d = p._data(a, b, p.makeArray(c)) : d.push(c)), d || []
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = p.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = p._queueHooks(a, b),
                g = function() {
                    p.dequeue(a, b)
                };
            e === "inprogress" && (e = c.shift(), d--), e && (b === "fx" && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return p._data(a, c) || p._data(a, c, {
                    empty: p.Callbacks("once memory").add(function() {
                        p.removeData(a, b + "queue", !0), p.removeData(a, c, !0)
                    })
                })
        }
    }), p.fn.extend({
        queue: function(a, c) {
            var d = 2;
            return typeof a != "string" && (c = a, a = "fx", d--), arguments.length < d ? p.queue(this[0], a) : c === b ? this : this.each(function() {
                var b = p.queue(this, a, c);
                p._queueHooks(this, a), a === "fx" && b[0] !== "inprogress" && p.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                p.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            return a = p.fx ? p.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            var d, e = 1,
                f = p.Deferred(),
                g = this,
                h = this.length,
                i = function() {
                    --e || f.resolveWith(g, [g])
                };
            typeof a != "string" && (c = a, a = b), a = a || "fx";
            while (h--) d = p._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c)
        }
    });
    var L, M, N, O = /[\t\r\n]/g,
        P = /\r/g,
        Q = /^(?:button|input)$/i,
        R = /^(?:button|input|object|select|textarea)$/i,
        S = /^a(?:rea|)$/i,
        T = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        U = p.support.getSetAttribute;
    p.fn.extend({
        attr: function(a, b) {
            return p.access(this, p.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                p.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return p.access(this, p.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = p.propFix[a] || a, this.each(function() {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function(a) {
            var b, c, d, e, f, g, h;
            if (p.isFunction(a)) return this.each(function(b) {
                p(this).addClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string") {
                b = a.split(s);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1)
                        if (!e.className && b.length === 1) e.className = a;
                        else {
                            f = " " + e.className + " ";
                            for (g = 0, h = b.length; g < h; g++) f.indexOf(" " + b[g] + " ") < 0 && (f += b[g] + " ");
                            e.className = p.trim(f)
                        }
                }
            }
            return this
        },
        removeClass: function(a) {
            var c, d, e, f, g, h, i;
            if (p.isFunction(a)) return this.each(function(b) {
                p(this).removeClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(s);
                for (h = 0, i = this.length; h < i; h++) {
                    e = this[h];
                    if (e.nodeType === 1 && e.className) {
                        d = (" " + e.className + " ").replace(O, " ");
                        for (f = 0, g = c.length; f < g; f++)
                            while (d.indexOf(" " + c[f] + " ") >= 0) d = d.replace(" " + c[f] + " ", " ");
                        e.className = a ? p.trim(d) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a,
                d = typeof b == "boolean";
            return p.isFunction(a) ? this.each(function(c) {
                p(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function() {
                if (c === "string") {
                    var e, f = 0,
                        g = p(this),
                        h = b,
                        i = a.split(s);
                    while (e = i[f++]) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e)
                } else if (c === "undefined" || c === "boolean") this.className && p._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : p._data(this, "__className__") || ""
            })
        },
        hasClass: function(a) {
            var b = " " + a + " ",
                c = 0,
                d = this.length;
            for (; c < d; c++)
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(O, " ").indexOf(b) >= 0) return !0;
            return !1
        },
        val: function(a) {
            var c, d, e, f = this[0];
            if (!arguments.length) {
                if (f) return c = p.valHooks[f.type] || p.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, typeof d == "string" ? d.replace(P, "") : d == null ? "" : d);
                return
            }
            return e = p.isFunction(a), this.each(function(d) {
                var f, g = p(this);
                if (this.nodeType !== 1) return;
                e ? f = a.call(this, d, g.val()) : f = a, f == null ? f = "" : typeof f == "number" ? f += "" : p.isArray(f) && (f = p.map(f, function(a) {
                        return a == null ? "" : a + ""
                    })), c = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()];
                if (!c || !("set" in c) || c.set(this, f, "value") === b) this.value = f
            })
        }
    }), p.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e, f = a.selectedIndex,
                        g = [],
                        h = a.options,
                        i = a.type === "select-one";
                    if (f < 0) return null;
                    c = i ? f : 0, d = i ? f + 1 : h.length;
                    for (; c < d; c++) {
                        e = h[c];
                        if (e.selected && (p.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !p.nodeName(e.parentNode, "optgroup"))) {
                            b = p(e).val();
                            if (i) return b;
                            g.push(b)
                        }
                    }
                    return i && !g.length && h.length ? p(h[f]).val() : g
                },
                set: function(a, b) {
                    var c = p.makeArray(b);
                    return p(a).find("option").each(function() {
                        this.selected = p.inArray(p(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1), c
                }
            }
        },
        attrFn: {},
        attr: function(a, c, d, e) {
            var f, g, h, i = a.nodeType;
            if (!a || i === 3 || i === 8 || i === 2) return;
            if (e && p.isFunction(p.fn[c])) return p(a)[c](d);
            if (typeof a.getAttribute == "undefined") return p.prop(a, c, d);
            h = i !== 1 || !p.isXMLDoc(a), h && (c = c.toLowerCase(), g = p.attrHooks[c] || (T.test(c) ? M : L));
            if (d !== b) {
                if (d === null) {
                    p.removeAttr(a, c);
                    return
                }
                return g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d)
            }
            return g && "get" in g && h && (f = g.get(a, c)) !== null ? f : (f = a.getAttribute(c), f === null ? b : f)
        },
        removeAttr: function(a, b) {
            var c, d, e, f, g = 0;
            if (b && a.nodeType === 1) {
                d = b.split(s);
                for (; g < d.length; g++) e = d[g], e && (c = p.propFix[e] || e, f = T.test(e), f || p.attr(a, e, ""), a.removeAttribute(U ? e : c), f && c in a && (a[c] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (Q.test(a.nodeName) && a.parentNode) p.error("type property can't be changed");
                    else if (!p.support.radioValue && b === "radio" && p.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            },
            value: {
                get: function(a, b) {
                    return L && p.nodeName(a, "button") ? L.get(a, b) : b in a ? a.value : null
                },
                set: function(a, b, c) {
                    if (L && p.nodeName(a, "button")) return L.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            if (!a || h === 3 || h === 8 || h === 2) return;
            return g = h !== 1 || !p.isXMLDoc(a), g && (c = p.propFix[c] || c, f = p.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && (e = f.get(a, c)) !== null ? e : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : R.test(a.nodeName) || S.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), M = {
        get: function(a, c) {
            var d, e = p.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        set: function(a, b, c) {
            var d;
            return b === !1 ? p.removeAttr(a, c) : (d = p.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c
        }
    }, U || (N = {
        name: !0,
        id: !0,
        coords: !0
    }, L = p.valHooks.button = {
        get: function(a, c) {
            var d;
            return d = a.getAttributeNode(c), d && (N[c] ? d.value !== "" : d.specified) ? d.value : b
        },
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || (d = e.createAttribute(c), a.setAttributeNode(d)), d.value = b + ""
        }
    }, p.each(["width", "height"], function(a, b) {
        p.attrHooks[b] = p.extend(p.attrHooks[b], {
            set: function(a, c) {
                if (c === "") return a.setAttribute(b, "auto"), c
            }
        })
    }), p.attrHooks.contenteditable = {
        get: L.get,
        set: function(a, b, c) {
            b === "" && (b = "false"), L.set(a, b, c)
        }
    }), p.support.hrefNormalized || p.each(["href", "src", "width", "height"], function(a, c) {
        p.attrHooks[c] = p.extend(p.attrHooks[c], {
            get: function(a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }), p.support.style || (p.attrHooks.style = {
        get: function(a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    }), p.support.optSelected || (p.propHooks.selected = p.extend(p.propHooks.selected, {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    })), p.support.enctype || (p.propFix.enctype = "encoding"), p.support.checkOn || p.each(["radio", "checkbox"], function() {
        p.valHooks[this] = {
            get: function(a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }), p.each(["radio", "checkbox"], function() {
        p.valHooks[this] = p.extend(p.valHooks[this], {
            set: function(a, b) {
                if (p.isArray(b)) return a.checked = p.inArray(p(a).val(), b) >= 0
            }
        })
    });
    var V = /^(?:textarea|input|select)$/i,
        W = /^([^\.]*|)(?:\.(.+)|)$/,
        X = /(?:^|\s)hover(\.\S+|)\b/,
        Y = /^key/,
        Z = /^(?:mouse|contextmenu)|click/,
        $ = /^(?:focusinfocus|focusoutblur)$/,
        _ = function(a) {
            return p.event.special.hover ? a : a.replace(X, "mouseenter$1 mouseleave$1")
        };
    p.event = {
        add: function(a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, q, r;
            if (a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(g = p._data(a))) return;
            d.handler && (o = d, d = o.handler, f = o.selector), d.guid || (d.guid = p.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function(a) {
                return typeof p != "undefined" && (!a || p.event.triggered !== a.type) ? p.event.dispatch.apply(h.elem, arguments) : b
            }, h.elem = a), c = p.trim(_(c)).split(" ");
            for (j = 0; j < c.length; j++) {
                k = W.exec(c[j]) || [], l = k[1], m = (k[2] || "").split(".").sort(), r = p.event.special[l] || {}, l = (f ? r.delegateType : r.bindType) || l, r = p.event.special[l] || {}, n = p.extend({
                    type: l,
                    origType: k[1],
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    needsContext: f && p.expr.match.needsContext.test(f),
                    namespace: m.join(".")
                }, o), q = i[l];
                if (!q) {
                    q = i[l] = [], q.delegateCount = 0;
                    if (!r.setup || r.setup.call(a, e, m, h) === !1) a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h)
                }
                r.add && (r.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), f ? q.splice(q.delegateCount++, 0, n) : q.push(n), p.event.global[l] = !0
            }
            a = null
        },
        global: {},
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, q, r = p.hasData(a) && p._data(a);
            if (!r || !(m = r.events)) return;
            b = p.trim(_(b || "")).split(" ");
            for (f = 0; f < b.length; f++) {
                g = W.exec(b[f]) || [], h = i = g[1], j = g[2];
                if (!h) {
                    for (h in m) p.event.remove(a, h + b[f], c, d, !0);
                    continue
                }
                n = p.event.special[h] || {}, h = (d ? n.delegateType : n.bindType) || h, o = m[h] || [], k = o.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                for (l = 0; l < o.length; l++) q = o[l], (e || i === q.origType) && (!c || c.guid === q.guid) && (!j || j.test(q.namespace)) && (!d || d === q.selector || d === "**" && q.selector) && (o.splice(l--, 1), q.selector && o.delegateCount--, n.remove && n.remove.call(a, q));
                o.length === 0 && k !== o.length && ((!n.teardown || n.teardown.call(a, j, r.handle) === !1) && p.removeEvent(a, h, r.handle), delete m[h])
            }
            p.isEmptyObject(m) && (delete r.handle, p.removeData(a, "events", !0))
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(c, d, f, g) {
            if (!f || f.nodeType !== 3 && f.nodeType !== 8) {
                var h, i, j, k, l, m, n, o, q, r, s = c.type || c,
                    t = [];
                if ($.test(s + p.event.triggered)) return;
                s.indexOf("!") >= 0 && (s = s.slice(0, -1), i = !0), s.indexOf(".") >= 0 && (t = s.split("."), s = t.shift(), t.sort());
                if ((!f || p.event.customEvent[s]) && !p.event.global[s]) return;
                c = typeof c == "object" ? c[p.expando] ? c : new p.Event(s, c) : new p.Event(s), c.type = s, c.isTrigger = !0, c.exclusive = i, c.namespace = t.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + t.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, m = s.indexOf(":") < 0 ? "on" + s : "";
                if (!f) {
                    h = p.cache;
                    for (j in h) h[j].events && h[j].events[s] && p.event.trigger(c, d, h[j].handle.elem, !0);
                    return
                }
                c.result = b, c.target || (c.target = f), d = d != null ? p.makeArray(d) : [], d.unshift(c), n = p.event.special[s] || {};
                if (n.trigger && n.trigger.apply(f, d) === !1) return;
                q = [
                    [f, n.bindType || s]
                ];
                if (!g && !n.noBubble && !p.isWindow(f)) {
                    r = n.delegateType || s, k = $.test(r + s) ? f : f.parentNode;
                    for (l = f; k; k = k.parentNode) q.push([k, r]), l = k;
                    l === (f.ownerDocument || e) && q.push([l.defaultView || l.parentWindow || a, r])
                }
                for (j = 0; j < q.length && !c.isPropagationStopped(); j++) k = q[j][0], c.type = q[j][1], o = (p._data(k, "events") || {})[c.type] && p._data(k, "handle"), o && o.apply(k, d), o = m && k[m], o && p.acceptData(k) && o.apply && o.apply(k, d) === !1 && c.preventDefault();
                return c.type = s, !g && !c.isDefaultPrevented() && (!n._default || n._default.apply(f.ownerDocument, d) === !1) && (s !== "click" || !p.nodeName(f, "a")) && p.acceptData(f) && m && f[s] && (s !== "focus" && s !== "blur" || c.target.offsetWidth !== 0) && !p.isWindow(f) && (l = f[m], l && (f[m] = null), p.event.triggered = s, f[s](), p.event.triggered = b, l && (f[m] = l)), c.result
            }
            return
        },
        dispatch: function(c) {
            c = p.event.fix(c || a.event);
            var d, e, f, g, h, i, j, l, m, n, o = (p._data(this, "events") || {})[c.type] || [],
                q = o.delegateCount,
                r = k.call(arguments),
                s = !c.exclusive && !c.namespace,
                t = p.event.special[c.type] || {},
                u = [];
            r[0] = c, c.delegateTarget = this;
            if (t.preDispatch && t.preDispatch.call(this, c) === !1) return;
            if (q && (!c.button || c.type !== "click"))
                for (f = c.target; f != this; f = f.parentNode || this)
                    if (f.disabled !== !0 || c.type !== "click") {
                        h = {}, j = [];
                        for (d = 0; d < q; d++) l = o[d], m = l.selector, h[m] === b && (h[m] = l.needsContext ? p(m, this).index(f) >= 0 : p.find(m, this, null, [f]).length), h[m] && j.push(l);
                        j.length && u.push({
                            elem: f,
                            matches: j
                        })
                    }
            o.length > q && u.push({
                elem: this,
                matches: o.slice(q)
            });
            for (d = 0; d < u.length && !c.isPropagationStopped(); d++) {
                i = u[d], c.currentTarget = i.elem;
                for (e = 0; e < i.matches.length && !c.isImmediatePropagationStopped(); e++) {
                    l = i.matches[e];
                    if (s || !c.namespace && !l.namespace || c.namespace_re && c.namespace_re.test(l.namespace)) c.data = l.data, c.handleObj = l, g = ((p.event.special[l.origType] || {}).handle || l.handler).apply(i.elem, r), g !== b && (c.result = g, g === !1 && (c.preventDefault(), c.stopPropagation()))
                }
            }
            return t.postDispatch && t.postDispatch.call(this, c), c.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, c) {
                var d, f, g, h = c.button,
                    i = c.fromElement;
                return a.pageX == null && c.clientX != null && (d = a.target.ownerDocument || e, f = d.documentElement, g = d.body, a.pageX = c.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = c.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? c.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[p.expando]) return a;
            var b, c, d = a,
                f = p.event.fixHooks[a.type] || {},
                g = f.props ? this.props.concat(f.props) : this.props;
            a = p.Event(d);
            for (b = g.length; b;) c = g[--b], a[c] = d[c];
            return a.target || (a.target = d.srcElement || e), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, f.filter ? f.filter(a, d) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(a, b, c) {
                    p.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function(a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = p.extend(new p.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? p.event.trigger(e, null, b) : p.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, p.event.handle = p.event.dispatch, p.removeEvent = e.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] == "undefined" && (a[d] = null), a.detachEvent(d, c))
    }, p.Event = function(a, b) {
        if (this instanceof p.Event) a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? bb : ba) : this.type = a, b && p.extend(this, b), this.timeStamp = a && a.timeStamp || p.now(), this[p.expando] = !0;
        else return new p.Event(a, b)
    }, p.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = bb;
            var a = this.originalEvent;
            if (!a) return;
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        },
        stopPropagation: function() {
            this.isPropagationStopped = bb;
            var a = this.originalEvent;
            if (!a) return;
            a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = bb, this.stopPropagation()
        },
        isDefaultPrevented: ba,
        isPropagationStopped: ba,
        isImmediatePropagationStopped: ba
    }, p.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        p.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj,
                    g = f.selector;
                if (!e || e !== d && !p.contains(d, e)) a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b;
                return c
            }
        }
    }), p.support.submitBubbles || (p.event.special.submit = {
        setup: function() {
            if (p.nodeName(this, "form")) return !1;
            p.event.add(this, "click._submit keypress._submit", function(a) {
                var c = a.target,
                    d = p.nodeName(c, "input") || p.nodeName(c, "button") ? c.form : b;
                d && !p._data(d, "_submit_attached") && (p.event.add(d, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), p._data(d, "_submit_attached", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && p.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            if (p.nodeName(this, "form")) return !1;
            p.event.remove(this, "._submit")
        }
    }), p.support.changeBubbles || (p.event.special.change = {
        setup: function() {
            if (V.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") p.event.add(this, "propertychange._change", function(a) {
                    a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), p.event.add(this, "click._change", function(a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1), p.event.simulate("change", this, a, !0)
                });
                return !1
            }
            p.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                V.test(b.nodeName) && !p._data(b, "_change_attached") && (p.event.add(b, "change._change", function(a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && p.event.simulate("change", this.parentNode, a, !0)
                }), p._data(b, "_change_attached", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return p.event.remove(this, "._change"), !V.test(this.nodeName)
        }
    }), p.support.focusinBubbles || p.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = 0,
            d = function(a) {
                p.event.simulate(b, a.target, p.event.fix(a), !0)
            };
        p.event.special[b] = {
            setup: function() {
                c++ === 0 && e.addEventListener(a, d, !0)
            },
            teardown: function() {
                --c === 0 && e.removeEventListener(a, d, !0)
            }
        }
    }), p.fn.extend({
        on: function(a, c, d, e, f) {
            var g, h;
            if (typeof a == "object") {
                typeof c != "string" && (d = d || c, c = b);
                for (h in a) this.on(h, c, d, a[h], f);
                return this
            }
            d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
            if (e === !1) e = ba;
            else if (!e) return this;
            return f === 1 && (g = e, e = function(a) {
                return p().off(a), g.apply(this, arguments)
            }, e.guid = g.guid || (g.guid = p.guid++)), this.each(function() {
                p.event.add(this, a, e, d, c)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, c, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj) return e = a.handleObj, p(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if (typeof a == "object") {
                for (f in a) this.off(f, c, a[f]);
                return this
            }
            if (c === !1 || typeof c == "function") d = c, c = b;
            return d === !1 && (d = ba), this.each(function() {
                p.event.remove(this, a, d, c)
            })
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        live: function(a, b, c) {
            return p(this.context).on(a, this.selector, b, c), this
        },
        die: function(a, b) {
            return p(this.context).off(a, this.selector || "**", b), this
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return arguments.length === 1 ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        trigger: function(a, b) {
            return this.each(function() {
                p.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            if (this[0]) return p.event.trigger(a, b, this[0], !0)
        },
        toggle: function(a) {
            var b = arguments,
                c = a.guid || p.guid++,
                d = 0,
                e = function(c) {
                    var e = (p._data(this, "lastToggle" + a.guid) || 0) % d;
                    return p._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1
                };
            e.guid = c;
            while (d < b.length) b[d++].guid = c;
            return this.click(e)
        },
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        p.fn[b] = function(a, c) {
            return c == null && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }, Y.test(b) && (p.event.fixHooks[b] = p.event.keyHooks), Z.test(b) && (p.event.fixHooks[b] = p.event.mouseHooks)
    }),
        function(a, b) {
            function bc(a, b, c, d) {
                c = c || [], b = b || r;
                var e, f, i, j, k = b.nodeType;
                if (!a || typeof a != "string") return c;
                if (k !== 1 && k !== 9) return [];
                i = g(b);
                if (!i && !d)
                    if (e = P.exec(a))
                        if (j = e[1]) {
                            if (k === 9) {
                                f = b.getElementById(j);
                                if (!f || !f.parentNode) return c;
                                if (f.id === j) return c.push(f), c
                            } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(j)) && h(b, f) && f.id === j) return c.push(f), c
                        } else {
                            if (e[2]) return w.apply(c, x.call(b.getElementsByTagName(a), 0)), c;
                            if ((j = e[3]) && _ && b.getElementsByClassName) return w.apply(c, x.call(b.getElementsByClassName(j), 0)), c
                        }
                return bp(a.replace(L, "$1"), b, c, d, i)
            }

            function bd(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return c === "input" && b.type === a
                }
            }

            function be(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return (c === "input" || c === "button") && b.type === a
                }
            }

            function bf(a) {
                return z(function(b) {
                    return b = +b, z(function(c, d) {
                        var e, f = a([], c.length, b),
                            g = f.length;
                        while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function bg(a, b, c) {
                if (a === b) return c;
                var d = a.nextSibling;
                while (d) {
                    if (d === b) return -1;
                    d = d.nextSibling
                }
                return 1
            }

            function bh(a, b) {
                var c, d, f, g, h, i, j, k = C[o][a];
                if (k) return b ? 0 : k.slice(0);
                h = a, i = [], j = e.preFilter;
                while (h) {
                    if (!c || (d = M.exec(h))) d && (h = h.slice(d[0].length)), i.push(f = []);
                    c = !1;
                    if (d = N.exec(h)) f.push(c = new q(d.shift())), h = h.slice(c.length), c.type = d[0].replace(L, " ");
                    for (g in e.filter)(d = W[g].exec(h)) && (!j[g] || (d = j[g](d, r, !0))) && (f.push(c = new q(d.shift())), h = h.slice(c.length), c.type = g, c.matches = d);
                    if (!c) break
                }
                return b ? h.length : h ? bc.error(a) : C(a, i).slice(0)
            }

            function bi(a, b, d) {
                var e = b.dir,
                    f = d && b.dir === "parentNode",
                    g = u++;
                return b.first ? function(b, c, d) {
                    while (b = b[e])
                        if (f || b.nodeType === 1) return a(b, c, d)
                } : function(b, d, h) {
                    if (!h) {
                        var i, j = t + " " + g + " ",
                            k = j + c;
                        while (b = b[e])
                            if (f || b.nodeType === 1) {
                                if ((i = b[o]) === k) return b.sizset;
                                if (typeof i == "string" && i.indexOf(j) === 0) {
                                    if (b.sizset) return b
                                } else {
                                    b[o] = k;
                                    if (a(b, d, h)) return b.sizset = !0, b;
                                    b.sizset = !1
                                }
                            }
                    } else
                        while (b = b[e])
                            if (f || b.nodeType === 1)
                                if (a(b, d, h)) return b
                }
            }

            function bj(a) {
                return a.length > 1 ? function(b, c, d) {
                    var e = a.length;
                    while (e--)
                        if (!a[e](b, c, d)) return !1;
                    return !0
                } : a[0]
            }

            function bk(a, b, c, d, e) {
                var f, g = [],
                    h = 0,
                    i = a.length,
                    j = b != null;
                for (; h < i; h++)
                    if (f = a[h])
                        if (!c || c(f, d, e)) g.push(f), j && b.push(h);
                return g
            }

            function bl(a, b, c, d, e, f) {
                return d && !d[o] && (d = bl(d)), e && !e[o] && (e = bl(e, f)), z(function(f, g, h, i) {
                    if (f && e) return;
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        p = f || bo(b || "*", h.nodeType ? [h] : h, [], f),
                        q = a && (f || !b) ? bk(p, m, a, h, i) : p,
                        r = c ? e || (f ? a : o || d) ? [] : g : q;
                    c && c(q, r, h, i);
                    if (d) {
                        l = bk(r, n), d(l, [], h, i), j = l.length;
                        while (j--)
                            if (k = l[j]) r[n[j]] = !(q[n[j]] = k)
                    }
                    if (f) {
                        j = a && r.length;
                        while (j--)
                            if (k = r[j]) f[m[j]] = !(g[m[j]] = k)
                    } else r = bk(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : w.apply(g, r)
                })
            }

            function bm(a) {
                var b, c, d, f = a.length,
                    g = e.relative[a[0].type],
                    h = g || e.relative[" "],
                    i = g ? 1 : 0,
                    j = bi(function(a) {
                        return a === b
                    }, h, !0),
                    k = bi(function(a) {
                        return y.call(b, a) > -1
                    }, h, !0),
                    m = [function(a, c, d) {
                        return !g && (d || c !== l) || ((b = c).nodeType ? j(a, c, d) : k(a, c, d))
                    }];
                for (; i < f; i++)
                    if (c = e.relative[a[i].type]) m = [bi(bj(m), c)];
                    else {
                        c = e.filter[a[i].type].apply(null, a[i].matches);
                        if (c[o]) {
                            d = ++i;
                            for (; d < f; d++)
                                if (e.relative[a[d].type]) break;
                            return bl(i > 1 && bj(m), i > 1 && a.slice(0, i - 1).join("").replace(L, "$1"), c, i < d && bm(a.slice(i, d)), d < f && bm(a = a.slice(d)), d < f && a.join(""))
                        }
                        m.push(c)
                    }
                return bj(m)
            }

            function bn(a, b) {
                var d = b.length > 0,
                    f = a.length > 0,
                    g = function(h, i, j, k, m) {
                        var n, o, p, q = [],
                            s = 0,
                            u = "0",
                            x = h && [],
                            y = m != null,
                            z = l,
                            A = h || f && e.find.TAG("*", m && i.parentNode || i),
                            B = t += z == null ? 1 : Math.E;
                        y && (l = i !== r && i, c = g.el);
                        for (;
                            (n = A[u]) != null; u++) {
                            if (f && n) {
                                for (o = 0; p = a[o]; o++)
                                    if (p(n, i, j)) {
                                        k.push(n);
                                        break
                                    }
                                y && (t = B, c = ++g.el)
                            }
                            d && ((n = !p && n) && s--, h && x.push(n))
                        }
                        s += u;
                        if (d && u !== s) {
                            for (o = 0; p = b[o]; o++) p(x, q, i, j);
                            if (h) {
                                if (s > 0)
                                    while (u--) !x[u] && !q[u] && (q[u] = v.call(k));
                                q = bk(q)
                            }
                            w.apply(k, q), y && !h && q.length > 0 && s + b.length > 1 && bc.uniqueSort(k)
                        }
                        return y && (t = B, l = z), x
                    };
                return g.el = 0, d ? z(g) : g
            }

            function bo(a, b, c, d) {
                var e = 0,
                    f = b.length;
                for (; e < f; e++) bc(a, b[e], c, d);
                return c
            }

            function bp(a, b, c, d, f) {
                var g, h, j, k, l, m = bh(a),
                    n = m.length;
                if (!d && m.length === 1) {
                    h = m[0] = m[0].slice(0);
                    if (h.length > 2 && (j = h[0]).type === "ID" && b.nodeType === 9 && !f && e.relative[h[1].type]) {
                        b = e.find.ID(j.matches[0].replace(V, ""), b, f)[0];
                        if (!b) return c;
                        a = a.slice(h.shift().length)
                    }
                    for (g = W.POS.test(a) ? -1 : h.length - 1; g >= 0; g--) {
                        j = h[g];
                        if (e.relative[k = j.type]) break;
                        if (l = e.find[k])
                            if (d = l(j.matches[0].replace(V, ""), R.test(h[0].type) && b.parentNode || b, f)) {
                                h.splice(g, 1), a = d.length && h.join("");
                                if (!a) return w.apply(c, x.call(d, 0)), c;
                                break
                            }
                    }
                }
                return i(a, m)(d, b, f, c, R.test(a)), c
            }

            function bq() {}
            var c, d, e, f, g, h, i, j, k, l, m = !0,
                n = "undefined",
                o = ("sizcache" + Math.random()).replace(".", ""),
                q = String,
                r = a.document,
                s = r.documentElement,
                t = 0,
                u = 0,
                v = [].pop,
                w = [].push,
                x = [].slice,
                y = [].indexOf || function(a) {
                        var b = 0,
                            c = this.length;
                        for (; b < c; b++)
                            if (this[b] === a) return b;
                        return -1
                    },
                z = function(a, b) {
                    return a[o] = b == null || b, a
                },
                A = function() {
                    var a = {},
                        b = [];
                    return z(function(c, d) {
                        return b.push(c) > e.cacheLength && delete a[b.shift()], a[c] = d
                    }, a)
                },
                B = A(),
                C = A(),
                D = A(),
                E = "[\\x20\\t\\r\\n\\f]",
                F = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                G = F.replace("w", "w#"),
                H = "([*^$|!~]?=)",
                I = "\\[" + E + "*(" + F + ")" + E + "*(?:" + H + E + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + G + ")|)|)" + E + "*\\]",
                J = ":(" + F + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + I + ")|[^:]|\\\\.)*|.*))\\)|)",
                K = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + E + "*((?:-\\d)?\\d*)" + E + "*\\)|)(?=[^-]|$)",
                L = new RegExp("^" + E + "+|((?:^|[^\\\\])(?:\\\\.)*)" + E + "+$", "g"),
                M = new RegExp("^" + E + "*," + E + "*"),
                N = new RegExp("^" + E + "*([\\x20\\t\\r\\n\\f>+~])" + E + "*"),
                O = new RegExp(J),
                P = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                Q = /^:not/,
                R = /[\x20\t\r\n\f]*[+~]/,
                S = /:not\($/,
                T = /h\d/i,
                U = /input|select|textarea|button/i,
                V = /\\(?!\\)/g,
                W = {
                    ID: new RegExp("^#(" + F + ")"),
                    CLASS: new RegExp("^\\.(" + F + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + F.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + I),
                    PSEUDO: new RegExp("^" + J),
                    POS: new RegExp(K, "i"),
                    CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + E + "*(even|odd|(([+-]|)(\\d*)n|)" + E + "*(?:([+-]|)" + E + "*(\\d+)|))" + E + "*\\)|)", "i"),
                    needsContext: new RegExp("^" + E + "*[>+~]|" + K, "i")
                },
                X = function(a) {
                    var b = r.createElement("div");
                    try {
                        return a(b)
                    } catch (c) {
                        return !1
                    } finally {
                        b = null
                    }
                },
                Y = X(function(a) {
                    return a.appendChild(r.createComment("")), !a.getElementsByTagName("*").length
                }),
                Z = X(function(a) {
                    return a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute !== n && a.firstChild.getAttribute("href") === "#"
                }),
                $ = X(function(a) {
                    a.innerHTML = "<select></select>";
                    var b = typeof a.lastChild.getAttribute("multiple");
                    return b !== "boolean" && b !== "string"
                }),
                _ = X(function(a) {
                    return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !a.getElementsByClassName || !a.getElementsByClassName("e").length ? !1 : (a.lastChild.className = "e", a.getElementsByClassName("e").length === 2)
                }),
                ba = X(function(a) {
                    a.id = o + 0, a.innerHTML = "<a name='" + o + "'></a><div name='" + o + "'></div>", s.insertBefore(a, s.firstChild);
                    var b = r.getElementsByName && r.getElementsByName(o).length === 2 + r.getElementsByName(o + 0).length;
                    return d = !r.getElementById(o), s.removeChild(a), b
                });
            try {
                x.call(s.childNodes, 0)[0].nodeType
            } catch (bb) {
                x = function(a) {
                    var b, c = [];
                    for (; b = this[a]; a++) c.push(b);
                    return c
                }
            }
            bc.matches = function(a, b) {
                return bc(a, null, null, b)
            }, bc.matchesSelector = function(a, b) {
                return bc(b, null, null, [a]).length > 0
            }, f = bc.getText = function(a) {
                var b, c = "",
                    d = 0,
                    e = a.nodeType;
                if (e) {
                    if (e === 1 || e === 9 || e === 11) {
                        if (typeof a.textContent == "string") return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += f(a)
                    } else if (e === 3 || e === 4) return a.nodeValue
                } else
                    for (; b = a[d]; d++) c += f(b);
                return c
            }, g = bc.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? b.nodeName !== "HTML" : !1
            }, h = bc.contains = s.contains ? function(a, b) {
                var c = a.nodeType === 9 ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !!(d && d.nodeType === 1 && c.contains && c.contains(d))
            } : s.compareDocumentPosition ? function(a, b) {
                return b && !!(a.compareDocumentPosition(b) & 16)
            } : function(a, b) {
                while (b = b.parentNode)
                    if (b === a) return !0;
                return !1
            }, bc.attr = function(a, b) {
                var c, d = g(a);
                return d || (b = b.toLowerCase()), (c = e.attrHandle[b]) ? c(a) : d || $ ? a.getAttribute(b) : (c = a.getAttributeNode(b), c ? typeof a[b] == "boolean" ? a[b] ? b : null : c.specified ? c.value : null : null)
            }, e = bc.selectors = {
                cacheLength: 50,
                createPseudo: z,
                match: W,
                attrHandle: Z ? {} : {
                    href: function(a) {
                        return a.getAttribute("href", 2)
                    },
                    type: function(a) {
                        return a.getAttribute("type")
                    }
                },
                find: {
                    ID: d ? function(a, b, c) {
                        if (typeof b.getElementById !== n && !c) {
                            var d = b.getElementById(a);
                            return d && d.parentNode ? [d] : []
                        }
                    } : function(a, c, d) {
                        if (typeof c.getElementById !== n && !d) {
                            var e = c.getElementById(a);
                            return e ? e.id === a || typeof e.getAttributeNode !== n && e.getAttributeNode("id").value === a ? [e] : b : []
                        }
                    },
                    TAG: Y ? function(a, b) {
                        if (typeof b.getElementsByTagName !== n) return b.getElementsByTagName(a)
                    } : function(a, b) {
                        var c = b.getElementsByTagName(a);
                        if (a === "*") {
                            var d, e = [],
                                f = 0;
                            for (; d = c[f]; f++) d.nodeType === 1 && e.push(d);
                            return e
                        }
                        return c
                    },
                    NAME: ba && function(a, b) {
                        if (typeof b.getElementsByName !== n) return b.getElementsByName(name)
                    },
                    CLASS: _ && function(a, b, c) {
                        if (typeof b.getElementsByClassName !== n && !c) return b.getElementsByClassName(a)
                    }
                },
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(V, ""), a[3] = (a[4] || a[5] || "").replace(V, ""), a[2] === "~=" && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), a[1] === "nth" ? (a[2] || bc.error(a[0]), a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * (a[2] === "even" || a[2] === "odd")), a[4] = +(a[6] + a[7] || a[2] === "odd")) : a[2] && bc.error(a[0]), a
                    },
                    PSEUDO: function(a) {
                        var b, c;
                        if (W.CHILD.test(a[0])) return null;
                        if (a[3]) a[2] = a[3];
                        else if (b = a[4]) O.test(b) && (c = bh(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (b = b.slice(0, c), a[0] = a[0].slice(0, c)), a[2] = b;
                        return a.slice(0, 3)
                    }
                },
                filter: {
                    ID: d ? function(a) {
                        return a = a.replace(V, ""),
                            function(b) {
                                return b.getAttribute("id") === a
                            }
                    } : function(a) {
                        return a = a.replace(V, ""),
                            function(b) {
                                var c = typeof b.getAttributeNode !== n && b.getAttributeNode("id");
                                return c && c.value === a
                            }
                    },
                    TAG: function(a) {
                        return a === "*" ? function() {
                            return !0
                        } : (a = a.replace(V, "").toLowerCase(), function(b) {
                            return b.nodeName && b.nodeName.toLowerCase() === a
                        })
                    },
                    CLASS: function(a) {
                        var b = B[o][a];
                        return b || (b = B(a, new RegExp("(^|" + E + ")" + a + "(" + E + "|$)"))),
                            function(a) {
                                return b.test(a.className || typeof a.getAttribute !== n && a.getAttribute("class") || "")
                            }
                    },
                    ATTR: function(a, b, c) {
                        return function(d, e) {
                            var f = bc.attr(d, a);
                            return f == null ? b === "!=" : b ? (f += "", b === "=" ? f === c : b === "!=" ? f !== c : b === "^=" ? c && f.indexOf(c) === 0 : b === "*=" ? c && f.indexOf(c) > -1 : b === "$=" ? c && f.substr(f.length - c.length) === c : b === "~=" ? (" " + f + " ").indexOf(c) > -1 : b === "|=" ? f === c || f.substr(0, c.length + 1) === c + "-" : !1) : !0
                        }
                    },
                    CHILD: function(a, b, c, d) {
                        return a === "nth" ? function(a) {
                            var b, e, f = a.parentNode;
                            if (c === 1 && d === 0) return !0;
                            if (f) {
                                e = 0;
                                for (b = f.firstChild; b; b = b.nextSibling)
                                    if (b.nodeType === 1) {
                                        e++;
                                        if (a === b) break
                                    }
                            }
                            return e -= d, e === c || e % c === 0 && e / c >= 0
                        } : function(b) {
                            var c = b;
                            switch (a) {
                                case "only":
                                case "first":
                                    while (c = c.previousSibling)
                                        if (c.nodeType === 1) return !1;
                                    if (a === "first") return !0;
                                    c = b;
                                case "last":
                                    while (c = c.nextSibling)
                                        if (c.nodeType === 1) return !1;
                                    return !0
                            }
                        }
                    },
                    PSEUDO: function(a, b) {
                        var c, d = e.pseudos[a] || e.setFilters[a.toLowerCase()] || bc.error("unsupported pseudo: " + a);
                        return d[o] ? d(b) : d.length > 1 ? (c = [a, a, "", b], e.setFilters.hasOwnProperty(a.toLowerCase()) ? z(function(a, c) {
                            var e, f = d(a, b),
                                g = f.length;
                            while (g--) e = y.call(a, f[g]), a[e] = !(c[e] = f[g])
                        }) : function(a) {
                            return d(a, 0, c)
                        }) : d
                    }
                },
                pseudos: {
                    not: z(function(a) {
                        var b = [],
                            c = [],
                            d = i(a.replace(L, "$1"));
                        return d[o] ? z(function(a, b, c, e) {
                            var f, g = d(a, null, e, []),
                                h = a.length;
                            while (h--)
                                if (f = g[h]) a[h] = !(b[h] = f)
                        }) : function(a, e, f) {
                            return b[0] = a, d(b, null, f, c), !c.pop()
                        }
                    }),
                    has: z(function(a) {
                        return function(b) {
                            return bc(a, b).length > 0
                        }
                    }),
                    contains: z(function(a) {
                        return function(b) {
                            return (b.textContent || b.innerText || f(b)).indexOf(a) > -1
                        }
                    }),
                    enabled: function(a) {
                        return a.disabled === !1
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return b === "input" && !!a.checked || b === "option" && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    parent: function(a) {
                        return !e.pseudos.empty(a)
                    },
                    empty: function(a) {
                        var b;
                        a = a.firstChild;
                        while (a) {
                            if (a.nodeName > "@" || (b = a.nodeType) === 3 || b === 4) return !1;
                            a = a.nextSibling
                        }
                        return !0
                    },
                    header: function(a) {
                        return T.test(a.nodeName)
                    },
                    text: function(a) {
                        var b, c;
                        return a.nodeName.toLowerCase() === "input" && (b = a.type) === "text" && ((c = a.getAttribute("type")) == null || c.toLowerCase() === b)
                    },
                    radio: bd("radio"),
                    checkbox: bd("checkbox"),
                    file: bd("file"),
                    password: bd("password"),
                    image: bd("image"),
                    submit: be("submit"),
                    reset: be("reset"),
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return b === "input" && a.type === "button" || b === "button"
                    },
                    input: function(a) {
                        return U.test(a.nodeName)
                    },
                    focus: function(a) {
                        var b = a.ownerDocument;
                        return a === b.activeElement && (!b.hasFocus || b.hasFocus()) && (!!a.type || !!a.href)
                    },
                    active: function(a) {
                        return a === a.ownerDocument.activeElement
                    },
                    first: bf(function(a, b, c) {
                        return [0]
                    }),
                    last: bf(function(a, b, c) {
                        return [b - 1]
                    }),
                    eq: bf(function(a, b, c) {
                        return [c < 0 ? c + b : c]
                    }),
                    even: bf(function(a, b, c) {
                        for (var d = 0; d < b; d += 2) a.push(d);
                        return a
                    }),
                    odd: bf(function(a, b, c) {
                        for (var d = 1; d < b; d += 2) a.push(d);
                        return a
                    }),
                    lt: bf(function(a, b, c) {
                        for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
                        return a
                    }),
                    gt: bf(function(a, b, c) {
                        for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                        return a
                    })
                }
            }, j = s.compareDocumentPosition ? function(a, b) {
                return a === b ? (k = !0, 0) : (!a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition : a.compareDocumentPosition(b) & 4) ? -1 : 1
            } : function(a, b) {
                if (a === b) return k = !0, 0;
                if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
                var c, d, e = [],
                    f = [],
                    g = a.parentNode,
                    h = b.parentNode,
                    i = g;
                if (g === h) return bg(a, b);
                if (!g) return -1;
                if (!h) return 1;
                while (i) e.unshift(i), i = i.parentNode;
                i = h;
                while (i) f.unshift(i), i = i.parentNode;
                c = e.length, d = f.length;
                for (var j = 0; j < c && j < d; j++)
                    if (e[j] !== f[j]) return bg(e[j], f[j]);
                return j === c ? bg(a, f[j], -1) : bg(e[j], b, 1)
            }, [0, 0].sort(j), m = !k, bc.uniqueSort = function(a) {
                var b, c = 1;
                k = m, a.sort(j);
                if (k)
                    for (; b = a[c]; c++) b === a[c - 1] && a.splice(c--, 1);
                return a
            }, bc.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, i = bc.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    f = D[o][a];
                if (!f) {
                    b || (b = bh(a)), c = b.length;
                    while (c--) f = bm(b[c]), f[o] ? d.push(f) : e.push(f);
                    f = D(a, bn(e, d))
                }
                return f
            }, r.querySelectorAll && function() {
                var a, b = bp,
                    c = /'|\\/g,
                    d = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    e = [":focus"],
                    f = [":active", ":focus"],
                    h = s.matchesSelector || s.mozMatchesSelector || s.webkitMatchesSelector || s.oMatchesSelector || s.msMatchesSelector;
                X(function(a) {
                    a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || e.push("\\[" + E + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), a.querySelectorAll(":checked").length || e.push(":checked")
                }), X(function(a) {
                    a.innerHTML = "<p test=''></p>", a.querySelectorAll("[test^='']").length && e.push("[*^$]=" + E + "*(?:\"\"|'')"), a.innerHTML = "<input type='hidden'/>", a.querySelectorAll(":enabled").length || e.push(":enabled", ":disabled")
                }), e = new RegExp(e.join("|")), bp = function(a, d, f, g, h) {
                    if (!g && !h && (!e || !e.test(a))) {
                        var i, j, k = !0,
                            l = o,
                            m = d,
                            n = d.nodeType === 9 && a;
                        if (d.nodeType === 1 && d.nodeName.toLowerCase() !== "object") {
                            i = bh(a), (k = d.getAttribute("id")) ? l = k.replace(c, "\\$&") : d.setAttribute("id", l), l = "[id='" + l + "'] ", j = i.length;
                            while (j--) i[j] = l + i[j].join("");
                            m = R.test(a) && d.parentNode || d, n = i.join(",")
                        }
                        if (n) try {
                            return w.apply(f, x.call(m.querySelectorAll(n), 0)), f
                        } catch (p) {} finally {
                            k || d.removeAttribute("id")
                        }
                    }
                    return b(a, d, f, g, h)
                }, h && (X(function(b) {
                    a = h.call(b, "div");
                    try {
                        h.call(b, "[test!='']:sizzle"), f.push("!=", J)
                    } catch (c) {}
                }), f = new RegExp(f.join("|")), bc.matchesSelector = function(b, c) {
                    c = c.replace(d, "='$1']");
                    if (!g(b) && !f.test(c) && (!e || !e.test(c))) try {
                        var i = h.call(b, c);
                        if (i || a || b.document && b.document.nodeType !== 11) return i
                    } catch (j) {}
                    return bc(c, null, null, [b]).length > 0
                })
            }(), e.pseudos.nth = e.pseudos.eq, e.filters = bq.prototype = e.pseudos, e.setFilters = new bq, bc.attr = p.attr, p.find = bc, p.expr = bc.selectors, p.expr[":"] = p.expr.pseudos, p.unique = bc.uniqueSort, p.text = bc.getText, p.isXMLDoc = bc.isXML, p.contains = bc.contains
        }(a);
    var bc = /Until$/,
        bd = /^(?:parents|prev(?:Until|All))/,
        be = /^.[^:#\[\.,]*$/,
        bf = p.expr.match.needsContext,
        bg = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    p.fn.extend({
        find: function(a) {
            var b, c, d, e, f, g, h = this;
            if (typeof a != "string") return p(a).filter(function() {
                for (b = 0, c = h.length; b < c; b++)
                    if (p.contains(h[b], this)) return !0
            });
            g = this.pushStack("", "find", a);
            for (b = 0, c = this.length; b < c; b++) {
                d = g.length, p.find(a, this[b], g);
                if (b > 0)
                    for (e = d; e < g.length; e++)
                        for (f = 0; f < d; f++)
                            if (g[f] === g[e]) {
                                g.splice(e--, 1);
                                break
                            }
            }
            return g
        },
        has: function(a) {
            var b, c = p(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; b < d; b++)
                    if (p.contains(this, c[b])) return !0
            })
        },
        not: function(a) {
            return this.pushStack(bj(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(bj(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !!a && (typeof a == "string" ? bf.test(a) ? p(a, this.context).index(this[0]) >= 0 : p.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function(a, b) {
            var c, d = 0,
                e = this.length,
                f = [],
                g = bf.test(a) || typeof a != "string" ? p(a, b || this.context) : 0;
            for (; d < e; d++) {
                c = this[d];
                while (c && c.ownerDocument && c !== b && c.nodeType !== 11) {
                    if (g ? g.index(c) > -1 : p.find.matchesSelector(c, a)) {
                        f.push(c);
                        break
                    }
                    c = c.parentNode
                }
            }
            return f = f.length > 1 ? p.unique(f) : f, this.pushStack(f, "closest", a)
        },
        index: function(a) {
            return a ? typeof a == "string" ? p.inArray(this[0], p(a)) : p.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(a, b) {
            var c = typeof a == "string" ? p(a, b) : p.makeArray(a && a.nodeType ? [a] : a),
                d = p.merge(this.get(), c);
            return this.pushStack(bh(c[0]) || bh(d[0]) ? d : p.unique(d))
        },
        addBack: function(a) {
            return this.add(a == null ? this.prevObject : this.prevObject.filter(a))
        }
    }), p.fn.andSelf = p.fn.addBack, p.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        },
        parents: function(a) {
            return p.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return p.dir(a, "parentNode", c)
        },
        next: function(a) {
            return bi(a, "nextSibling")
        },
        prev: function(a) {
            return bi(a, "previousSibling")
        },
        nextAll: function(a) {
            return p.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return p.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return p.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return p.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return p.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return p.sibling(a.firstChild)
        },
        contents: function(a) {
            return p.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : p.merge([], a.childNodes)
        }
    }, function(a, b) {
        p.fn[a] = function(c, d) {
            var e = p.map(this, b, c);
            return bc.test(a) || (d = c), d && typeof d == "string" && (e = p.filter(d, e)), e = this.length > 1 && !bg[a] ? p.unique(e) : e, this.length > 1 && bd.test(a) && (e = e.reverse()), this.pushStack(e, a, k.call(arguments).join(","))
        }
    }), p.extend({
        filter: function(a, b, c) {
            return c && (a = ":not(" + a + ")"), b.length === 1 ? p.find.matchesSelector(b[0], a) ? [b[0]] : [] : p.find.matches(a, b)
        },
        dir: function(a, c, d) {
            var e = [],
                f = a[c];
            while (f && f.nodeType !== 9 && (d === b || f.nodeType !== 1 || !p(f).is(d))) f.nodeType === 1 && e.push(f), f = f[c];
            return e
        },
        sibling: function(a, b) {
            var c = [];
            for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var bl = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        bm = / jQuery\d+="(?:null|\d+)"/g,
        bn = /^\s+/,
        bo = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bp = /<([\w:]+)/,
        bq = /<tbody/i,
        br = /<|&#?\w+;/,
        bs = /<(?:script|style|link)/i,
        bt = /<(?:script|object|embed|option|style)/i,
        bu = new RegExp("<(?:" + bl + ")[\\s/>]", "i"),
        bv = /^(?:checkbox|radio)$/,
        bw = /checked\s*(?:[^=]|=\s*.checked.)/i,
        bx = /\/(java|ecma)script/i,
        by = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        bz = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        bA = bk(e),
        bB = bA.appendChild(e.createElement("div"));
    bz.optgroup = bz.option, bz.tbody = bz.tfoot = bz.colgroup = bz.caption = bz.thead, bz.th = bz.td, p.support.htmlSerialize || (bz._default = [1, "X<div>", "</div>"]), p.fn.extend({
        text: function(a) {
            return p.access(this, function(a) {
                return a === b ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || e).createTextNode(a))
            }, null, a, arguments.length)
        },
        wrapAll: function(a) {
            if (p.isFunction(a)) return this.each(function(b) {
                p(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = p(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return p.isFunction(a) ? this.each(function(b) {
                p(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = p(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = p.isFunction(a);
            return this.each(function(c) {
                p(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(a) {
                (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(a) {
                (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            if (!bh(this[0])) return this.domManip(arguments, !1, function(a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = p.clean(arguments);
                return this.pushStack(p.merge(a, this), "before", this.selector)
            }
        },
        after: function() {
            if (!bh(this[0])) return this.domManip(arguments, !1, function(a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = p.clean(arguments);
                return this.pushStack(p.merge(this, a), "after", this.selector)
            }
        },
        remove: function(a, b) {
            var c, d = 0;
            for (;
                (c = this[d]) != null; d++)
                if (!a || p.filter(a, [c]).length) !b && c.nodeType === 1 && (p.cleanData(c.getElementsByTagName("*")), p.cleanData([c])), c.parentNode && c.parentNode.removeChild(c);
            return this
        },
        empty: function() {
            var a, b = 0;
            for (;
                (a = this[b]) != null; b++) {
                a.nodeType === 1 && p.cleanData(a.getElementsByTagName("*"));
                while (a.firstChild) a.removeChild(a.firstChild)
            }
            return this
        },
        clone: function(a, b) {
            return a = a == null ? !1 : a, b = b == null ? a : b, this.map(function() {
                return p.clone(this, a, b)
            })
        },
        html: function(a) {
            return p.access(this, function(a) {
                var c = this[0] || {},
                    d = 0,
                    e = this.length;
                if (a === b) return c.nodeType === 1 ? c.innerHTML.replace(bm, "") : b;
                if (typeof a == "string" && !bs.test(a) && (p.support.htmlSerialize || !bu.test(a)) && (p.support.leadingWhitespace || !bn.test(a)) && !bz[(bp.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(bo, "<$1></$2>");
                    try {
                        for (; d < e; d++) c = this[d] || {}, c.nodeType === 1 && (p.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
                        c = 0
                    } catch (f) {}
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function(a) {
            return bh(this[0]) ? this.length ? this.pushStack(p(p.isFunction(a) ? a() : a), "replaceWith", a) : this : p.isFunction(a) ? this.each(function(b) {
                var c = p(this),
                    d = c.html();
                c.replaceWith(a.call(this, b, d))
            }) : (typeof a != "string" && (a = p(a).detach()), this.each(function() {
                var b = this.nextSibling,
                    c = this.parentNode;
                p(this).remove(), b ? p(b).before(a) : p(c).append(a)
            }))
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, c, d) {
            a = [].concat.apply([], a);
            var e, f, g, h, i = 0,
                j = a[0],
                k = [],
                l = this.length;
            if (!p.support.checkClone && l > 1 && typeof j == "string" && bw.test(j)) return this.each(function() {
                p(this).domManip(a, c, d)
            });
            if (p.isFunction(j)) return this.each(function(e) {
                var f = p(this);
                a[0] = j.call(this, e, c ? f.html() : b), f.domManip(a, c, d)
            });
            if (this[0]) {
                e = p.buildFragment(a, this, k), g = e.fragment, f = g.firstChild, g.childNodes.length === 1 && (g = f);
                if (f) {
                    c = c && p.nodeName(f, "tr");
                    for (h = e.cacheable || l - 1; i < l; i++) d.call(c && p.nodeName(this[i], "table") ? bC(this[i], "tbody") : this[i], i === h ? g : p.clone(g, !0, !0))
                }
                g = f = null, k.length && p.each(k, function(a, b) {
                    b.src ? p.ajax ? p.ajax({
                        url: b.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : p.error("no ajax") : p.globalEval((b.text || b.textContent || b.innerHTML || "").replace(by, "")), b.parentNode && b.parentNode.removeChild(b)
                })
            }
            return this
        }
    }), p.buildFragment = function(a, c, d) {
        var f, g, h, i = a[0];
        return c = c || e, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, a.length === 1 && typeof i == "string" && i.length < 512 && c === e && i.charAt(0) === "<" && !bt.test(i) && (p.support.checkClone || !bw.test(i)) && (p.support.html5Clone || !bu.test(i)) && (g = !0, f = p.fragments[i], h = f !== b), f || (f = c.createDocumentFragment(), p.clean(a, c, f, d), g && (p.fragments[i] = h && f)), {
            fragment: f,
            cacheable: g
        }
    }, p.fragments = {}, p.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        p.fn[a] = function(c) {
            var d, e = 0,
                f = [],
                g = p(c),
                h = g.length,
                i = this.length === 1 && this[0].parentNode;
            if ((i == null || i && i.nodeType === 11 && i.childNodes.length === 1) && h === 1) return g[b](this[0]), this;
            for (; e < h; e++) d = (e > 0 ? this.clone(!0) : this).get(), p(g[e])[b](d), f = f.concat(d);
            return this.pushStack(f, a, g.selector)
        }
    }), p.extend({
        clone: function(a, b, c) {
            var d, e, f, g;
            p.support.html5Clone || p.isXMLDoc(a) || !bu.test("<" + a.nodeName + ">") ? g = a.cloneNode(!0) : (bB.innerHTML = a.outerHTML, bB.removeChild(g = bB.firstChild));
            if ((!p.support.noCloneEvent || !p.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !p.isXMLDoc(a)) {
                bE(a, g), d = bF(a), e = bF(g);
                for (f = 0; d[f]; ++f) e[f] && bE(d[f], e[f])
            }
            if (b) {
                bD(a, g);
                if (c) {
                    d = bF(a), e = bF(g);
                    for (f = 0; d[f]; ++f) bD(d[f], e[f])
                }
            }
            return d = e = null, g
        },
        clean: function(a, b, c, d) {
            var f, g, h, i, j, k, l, m, n, o, q, r, s = b === e && bA,
                t = [];
            if (!b || typeof b.createDocumentFragment == "undefined") b = e;
            for (f = 0;
                 (h = a[f]) != null; f++) {
                typeof h == "number" && (h += "");
                if (!h) continue;
                if (typeof h == "string")
                    if (!br.test(h)) h = b.createTextNode(h);
                    else {
                        s = s || bk(b), l = b.createElement("div"), s.appendChild(l), h = h.replace(bo, "<$1></$2>"), i = (bp.exec(h) || ["", ""])[1].toLowerCase(), j = bz[i] || bz._default, k = j[0], l.innerHTML = j[1] + h + j[2];
                        while (k--) l = l.lastChild;
                        if (!p.support.tbody) {
                            m = bq.test(h), n = i === "table" && !m ? l.firstChild && l.firstChild.childNodes : j[1] === "<table>" && !m ? l.childNodes : [];
                            for (g = n.length - 1; g >= 0; --g) p.nodeName(n[g], "tbody") && !n[g].childNodes.length && n[g].parentNode.removeChild(n[g])
                        }!p.support.leadingWhitespace && bn.test(h) && l.insertBefore(b.createTextNode(bn.exec(h)[0]), l.firstChild), h = l.childNodes, l.parentNode.removeChild(l)
                    }
                h.nodeType ? t.push(h) : p.merge(t, h)
            }
            l && (h = l = s = null);
            if (!p.support.appendChecked)
                for (f = 0;
                     (h = t[f]) != null; f++) p.nodeName(h, "input") ? bG(h) : typeof h.getElementsByTagName != "undefined" && p.grep(h.getElementsByTagName("input"), bG);
            if (c) {
                q = function(a) {
                    if (!a.type || bx.test(a.type)) return d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild(a)
                };
                for (f = 0;
                     (h = t[f]) != null; f++)
                    if (!p.nodeName(h, "script") || !q(h)) c.appendChild(h), typeof h.getElementsByTagName != "undefined" && (r = p.grep(p.merge([], h.getElementsByTagName("script")), q), t.splice.apply(t, [f + 1, 0].concat(r)), f += r.length)
            }
            return t
        },
        cleanData: function(a, b) {
            var c, d, e, f, g = 0,
                h = p.expando,
                i = p.cache,
                j = p.support.deleteExpando,
                k = p.event.special;
            for (;
                (e = a[g]) != null; g++)
                if (b || p.acceptData(e)) {
                    d = e[h], c = d && i[d];
                    if (c) {
                        if (c.events)
                            for (f in c.events) k[f] ? p.event.remove(e, f) : p.removeEvent(e, f, c.handle);
                        i[d] && (delete i[d], j ? delete e[h] : e.removeAttribute ? e.removeAttribute(h) : e[h] = null, p.deletedIds.push(d))
                    }
                }
        }
    }),
        function() {
            var a, b;
            p.uaMatch = function(a) {
                a = a.toLowerCase();
                var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
                return {
                    browser: b[1] || "",
                    version: b[2] || "0"
                }
            }, a = p.uaMatch(g.userAgent), b = {}, a.browser && (b[a.browser] = !0, b.version = a.version), b.chrome ? b.webkit = !0 : b.webkit && (b.safari = !0), p.browser = b, p.sub = function() {
                function a(b, c) {
                    return new a.fn.init(b, c)
                }
                p.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function c(c, d) {
                    return d && d instanceof p && !(d instanceof a) && (d = a(d)), p.fn.init.call(this, c, d, b)
                }, a.fn.init.prototype = a.fn;
                var b = a(e);
                return a
            }
        }();
    var bH, bI, bJ, bK = /alpha\([^)]*\)/i,
        bL = /opacity=([^)]*)/,
        bM = /^(top|right|bottom|left)$/,
        bN = /^(none|table(?!-c[ea]).+)/,
        bO = /^margin/,
        bP = new RegExp("^(" + q + ")(.*)$", "i"),
        bQ = new RegExp("^(" + q + ")(?!px)[a-z%]+$", "i"),
        bR = new RegExp("^([-+])=(" + q + ")", "i"),
        bS = {},
        bT = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        bU = {
            letterSpacing: 0,
            fontWeight: 400
        },
        bV = ["Top", "Right", "Bottom", "Left"],
        bW = ["Webkit", "O", "Moz", "ms"],
        bX = p.fn.toggle;
    p.fn.extend({
        css: function(a, c) {
            return p.access(this, function(a, c, d) {
                return d !== b ? p.style(a, c, d) : p.css(a, c)
            }, a, c, arguments.length > 1)
        },
        show: function() {
            return b$(this, !0)
        },
        hide: function() {
            return b$(this)
        },
        toggle: function(a, b) {
            var c = typeof a == "boolean";
            return p.isFunction(a) && p.isFunction(b) ? bX.apply(this, arguments) : this.each(function() {
                (c ? a : bZ(this)) ? p(this).show(): p(this).hide()
            })
        }
    }), p.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = bH(a, "opacity");
                        return c === "" ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": p.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, d, e) {
            if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style) return;
            var f, g, h, i = p.camelCase(c),
                j = a.style;
            c = p.cssProps[i] || (p.cssProps[i] = bY(j, i)), h = p.cssHooks[c] || p.cssHooks[i];
            if (d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
            g = typeof d, g === "string" && (f = bR.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(p.css(a, c)), g = "number");
            if (d == null || g === "number" && isNaN(d)) return;
            g === "number" && !p.cssNumber[i] && (d += "px");
            if (!h || !("set" in h) || (d = h.set(a, d, e)) !== b) try {
                j[c] = d
            } catch (k) {}
        },
        css: function(a, c, d, e) {
            var f, g, h, i = p.camelCase(c);
            return c = p.cssProps[i] || (p.cssProps[i] = bY(a.style, i)), h = p.cssHooks[c] || p.cssHooks[i], h && "get" in h && (f = h.get(a, !0, e)), f === b && (f = bH(a, c)), f === "normal" && c in bU && (f = bU[c]), d || e !== b ? (g = parseFloat(f), d || p.isNumeric(g) ? g || 0 : f) : f
        },
        swap: function(a, b, c) {
            var d, e, f = {};
            for (e in b) f[e] = a.style[e], a.style[e] = b[e];
            d = c.call(a);
            for (e in b) a.style[e] = f[e];
            return d
        }
    }), a.getComputedStyle ? bH = function(b, c) {
        var d, e, f, g, h = a.getComputedStyle(b, null),
            i = b.style;
        return h && (d = h[c], d === "" && !p.contains(b.ownerDocument, b) && (d = p.style(b, c)), bQ.test(d) && bO.test(c) && (e = i.width, f = i.minWidth, g = i.maxWidth, i.minWidth = i.maxWidth = i.width = d, d = h.width, i.width = e, i.minWidth = f, i.maxWidth = g)), d
    } : e.documentElement.currentStyle && (bH = function(a, b) {
            var c, d, e = a.currentStyle && a.currentStyle[b],
                f = a.style;
            return e == null && f && f[b] && (e = f[b]), bQ.test(e) && !bM.test(b) && (c = f.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), f.left = b === "fontSize" ? "1em" : e, e = f.pixelLeft + "px", f.left = c, d && (a.runtimeStyle.left = d)), e === "" ? "auto" : e
        }), p.each(["height", "width"], function(a, b) {
        p.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) return a.offsetWidth === 0 && bN.test(bH(a, "display")) ? p.swap(a, bT, function() {
                    return cb(a, b, d)
                }) : cb(a, b, d)
            },
            set: function(a, c, d) {
                return b_(a, c, d ? ca(a, b, d, p.support.boxSizing && p.css(a, "boxSizing") === "border-box") : 0)
            }
        }
    }), p.support.opacity || (p.cssHooks.opacity = {
        get: function(a, b) {
            return bL.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = p.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && p.trim(f.replace(bK, "")) === "" && c.removeAttribute) {
                c.removeAttribute("filter");
                if (d && !d.filter) return
            }
            c.filter = bK.test(f) ? f.replace(bK, e) : f + " " + e
        }
    }), p(function() {
        p.support.reliableMarginRight || (p.cssHooks.marginRight = {
            get: function(a, b) {
                return p.swap(a, {
                    display: "inline-block"
                }, function() {
                    if (b) return bH(a, "marginRight")
                })
            }
        }), !p.support.pixelPosition && p.fn.position && p.each(["top", "left"], function(a, b) {
            p.cssHooks[b] = {
                get: function(a, c) {
                    if (c) {
                        var d = bH(a, b);
                        return bQ.test(d) ? p(a).position()[b] + "px" : d
                    }
                }
            }
        })
    }), p.expr && p.expr.filters && (p.expr.filters.hidden = function(a) {
        return a.offsetWidth === 0 && a.offsetHeight === 0 || !p.support.reliableHiddenOffsets && (a.style && a.style.display || bH(a, "display")) === "none"
    }, p.expr.filters.visible = function(a) {
        return !p.expr.filters.hidden(a)
    }), p.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        p.cssHooks[a + b] = {
            expand: function(c) {
                var d, e = typeof c == "string" ? c.split(" ") : [c],
                    f = {};
                for (d = 0; d < 4; d++) f[a + bV[d] + b] = e[d] || e[d - 2] || e[0];
                return f
            }
        }, bO.test(a) || (p.cssHooks[a + b].set = b_)
    });
    var cd = /%20/g,
        ce = /\[\]$/,
        cf = /\r?\n/g,
        cg = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        ch = /^(?:select|textarea)/i;
    p.fn.extend({
        serialize: function() {
            return p.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? p.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || ch.test(this.nodeName) || cg.test(this.type))
            }).map(function(a, b) {
                var c = p(this).val();
                return c == null ? null : p.isArray(c) ? p.map(c, function(a, c) {
                    return {
                        name: b.name,
                        value: a.replace(cf, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(cf, "\r\n")
                }
            }).get()
        }
    }), p.param = function(a, c) {
        var d, e = [],
            f = function(a, b) {
                b = p.isFunction(b) ? b() : b == null ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        c === b && (c = p.ajaxSettings && p.ajaxSettings.traditional);
        if (p.isArray(a) || a.jquery && !p.isPlainObject(a)) p.each(a, function() {
            f(this.name, this.value)
        });
        else
            for (d in a) ci(d, a[d], c, f);
        return e.join("&").replace(cd, "+")
    };
    var cj, ck, cl = /#.*$/,
        cm = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        cn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        co = /^(?:GET|HEAD)$/,
        cp = /^\/\//,
        cq = /\?/,
        cr = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        cs = /([?&])_=[^&]*/,
        ct = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        cu = p.fn.load,
        cv = {},
        cw = {},
        cx = ["*/"] + ["*"];
    try {
        ck = f.href
    } catch (cy) {
        ck = e.createElement("a"), ck.href = "", ck = ck.href
    }
    cj = ct.exec(ck.toLowerCase()) || [], p.fn.load = function(a, c, d) {
        if (typeof a != "string" && cu) return cu.apply(this, arguments);
        if (!this.length) return this;
        var e, f, g, h = this,
            i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), p.isFunction(c) ? (d = c, c = b) : c && typeof c == "object" && (f = "POST"), p.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: c,
            complete: function(a, b) {
                d && h.each(d, g || [a.responseText, b, a])
            }
        }).done(function(a) {
            g = arguments, h.html(e ? p("<div>").append(a.replace(cr, "")).find(e) : a)
        }), this
    }, p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        p.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), p.each(["get", "post"], function(a, c) {
        p[c] = function(a, d, e, f) {
            return p.isFunction(d) && (f = f || e, e = d, d = b), p.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: f
            })
        }
    }), p.extend({
        getScript: function(a, c) {
            return p.get(a, b, c, "script")
        },
        getJSON: function(a, b, c) {
            return p.get(a, b, c, "json")
        },
        ajaxSetup: function(a, b) {
            return b ? cB(a, p.ajaxSettings) : (b = a, a = p.ajaxSettings), cB(a, b), a
        },
        ajaxSettings: {
            url: ck,
            isLocal: cn.test(cj[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": cx
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": p.parseJSON,
                "text xml": p.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: cz(cv),
        ajaxTransport: cz(cw),
        ajax: function(a, c) {
            function y(a, c, f, i) {
                var k, s, t, u, w, y = c;
                if (v === 2) return;
                v = 2, h && clearTimeout(h), g = b, e = i || "", x.readyState = a > 0 ? 4 : 0, f && (u = cC(l, x, f));
                if (a >= 200 && a < 300 || a === 304) l.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (p.lastModified[d] = w), w = x.getResponseHeader("Etag"), w && (p.etag[d] = w)), a === 304 ? (y = "notmodified", k = !0) : (k = cD(l, u), y = k.state, s = k.data, t = k.error, k = !t);
                else {
                    t = y;
                    if (!y || a) y = "error", a < 0 && (a = 0)
                }
                x.status = a, x.statusText = (c || y) + "", k ? o.resolveWith(m, [s, y, x]) : o.rejectWith(m, [x, y, t]), x.statusCode(r), r = b, j && n.trigger("ajax" + (k ? "Success" : "Error"), [x, l, k ? s : t]), q.fireWith(m, [x, y]), j && (n.trigger("ajaxComplete", [x, l]), --p.active || p.event.trigger("ajaxStop"))
            }
            typeof a == "object" && (c = a, a = b), c = c || {};
            var d, e, f, g, h, i, j, k, l = p.ajaxSetup({}, c),
                m = l.context || l,
                n = m !== l && (m.nodeType || m instanceof p) ? p(m) : p.event,
                o = p.Deferred(),
                q = p.Callbacks("once memory"),
                r = l.statusCode || {},
                t = {},
                u = {},
                v = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    setRequestHeader: function(a, b) {
                        if (!v) {
                            var c = a.toLowerCase();
                            a = u[c] = u[c] || a, t[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return v === 2 ? e : null
                    },
                    getResponseHeader: function(a) {
                        var c;
                        if (v === 2) {
                            if (!f) {
                                f = {};
                                while (c = cm.exec(e)) f[c[1].toLowerCase()] = c[2]
                            }
                            c = f[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function(a) {
                        return v || (l.mimeType = a), this
                    },
                    abort: function(a) {
                        return a = a || w, g && g.abort(a), y(0, a), this
                    }
                };
            o.promise(x), x.success = x.done, x.error = x.fail, x.complete = q.add, x.statusCode = function(a) {
                if (a) {
                    var b;
                    if (v < 2)
                        for (b in a) r[b] = [r[b], a[b]];
                    else b = a[x.status], x.always(b)
                }
                return this
            }, l.url = ((a || l.url) + "").replace(cl, "").replace(cp, cj[1] + "//"), l.dataTypes = p.trim(l.dataType || "*").toLowerCase().split(s), l.crossDomain == null && (i = ct.exec(l.url.toLowerCase()) || !1, l.crossDomain = i && i.join(":") + (i[3] ? "" : i[1] === "http:" ? 80 : 443) !== cj.join(":") + (cj[3] ? "" : cj[1] === "http:" ? 80 : 443)), l.data && l.processData && typeof l.data != "string" && (l.data = p.param(l.data, l.traditional)), cA(cv, l, c, x);
            if (v === 2) return x;
            j = l.global, l.type = l.type.toUpperCase(), l.hasContent = !co.test(l.type), j && p.active++ === 0 && p.event.trigger("ajaxStart");
            if (!l.hasContent) {
                l.data && (l.url += (cq.test(l.url) ? "&" : "?") + l.data, delete l.data), d = l.url;
                if (l.cache === !1) {
                    var z = p.now(),
                        A = l.url.replace(cs, "$1_=" + z);
                    l.url = A + (A === l.url ? (cq.test(l.url) ? "&" : "?") + "_=" + z : "")
                }
            }(l.data && l.hasContent && l.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", l.contentType), l.ifModified && (d = d || l.url, p.lastModified[d] && x.setRequestHeader("If-Modified-Since", p.lastModified[d]), p.etag[d] && x.setRequestHeader("If-None-Match", p.etag[d])), x.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + cx + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers) x.setRequestHeader(k, l.headers[k]);
            if (!l.beforeSend || l.beforeSend.call(m, x, l) !== !1 && v !== 2) {
                w = "abort";
                for (k in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[k](l[k]);
                g = cA(cw, l, c, x);
                if (!g) y(-1, "No Transport");
                else {
                    x.readyState = 1, j && n.trigger("ajaxSend", [x, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                        x.abort("timeout")
                    }, l.timeout));
                    try {
                        v = 1, g.send(t, y)
                    } catch (B) {
                        if (v < 2) y(-1, B);
                        else throw B
                    }
                }
                return x
            }
            return x.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cE = [],
        cF = /\?/,
        cG = /(=)\?(?=&|$)|\?\?/,
        cH = p.now();
    p.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = cE.pop() || p.expando + "_" + cH++;
            return this[a] = !0, a
        }
    }), p.ajaxPrefilter("json jsonp", function(c, d, e) {
        var f, g, h, i = c.data,
            j = c.url,
            k = c.jsonp !== !1,
            l = k && cG.test(j),
            m = k && !l && typeof i == "string" && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && cG.test(i);
        if (c.dataTypes[0] === "jsonp" || l || m) return f = c.jsonpCallback = p.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, g = a[f], l ? c.url = j.replace(cG, "$1" + f) : m ? c.data = i.replace(cG, "$1" + f) : k && (c.url += (cF.test(j) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function() {
            return h || p.error(f + " was not called"), h[0]
        }, c.dataTypes[0] = "json", a[f] = function() {
            h = arguments
        }, e.always(function() {
            a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, cE.push(f)), h && p.isFunction(g) && g(h[0]), h = g = b
        }), "script"
    }), p.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(a) {
                return p.globalEval(a), a
            }
        }
    }), p.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), p.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var c, d = e.head || e.getElementsByTagName("head")[0] || e.documentElement;
            return {
                send: function(f, g) {
                    c = e.createElement("script"), c.async = "async", a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function(a, e) {
                        if (e || !c.readyState || /loaded|complete/.test(c.readyState)) c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || g(200, "success")
                    }, d.insertBefore(c, d.firstChild)
                },
                abort: function() {
                    c && c.onload(0, 1)
                }
            }
        }
    });
    var cI, cJ = a.ActiveXObject ? function() {
            for (var a in cI) cI[a](0, 1)
        } : !1,
        cK = 0;
    p.ajaxSettings.xhr = a.ActiveXObject ? function() {
        return !this.isLocal && cL() || cM()
    } : cL,
        function(a) {
            p.extend(p.support, {
                ajax: !!a,
                cors: !!a && "withCredentials" in a
            })
        }(p.ajaxSettings.xhr()), p.support.ajax && p.ajaxTransport(function(c) {
        if (!c.crossDomain || p.support.cors) {
            var d;
            return {
                send: function(e, f) {
                    var g, h, i = c.xhr();
                    c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async);
                    if (c.xhrFields)
                        for (h in c.xhrFields) i[h] = c.xhrFields[h];
                    c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e) i.setRequestHeader(h, e[h])
                    } catch (j) {}
                    i.send(c.hasContent && c.data || null), d = function(a, e) {
                        var h, j, k, l, m;
                        try {
                            if (d && (e || i.readyState === 4)) {
                                d = b, g && (i.onreadystatechange = p.noop, cJ && delete cI[g]);
                                if (e) i.readyState !== 4 && i.abort();
                                else {
                                    h = i.status, k = i.getAllResponseHeaders(), l = {}, m = i.responseXML, m && m.documentElement && (l.xml = m);
                                    try {
                                        l.text = i.responseText
                                    } catch (a) {}
                                    try {
                                        j = i.statusText
                                    } catch (n) {
                                        j = ""
                                    }!h && c.isLocal && !c.crossDomain ? h = l.text ? 200 : 404 : h === 1223 && (h = 204)
                                }
                            }
                        } catch (o) {
                            e || f(-1, o)
                        }
                        l && f(h, j, l, k)
                    }, c.async ? i.readyState === 4 ? setTimeout(d, 0) : (g = ++cK, cJ && (cI || (cI = {}, p(a).unload(cJ)), cI[g] = d), i.onreadystatechange = d) : d()
                },
                abort: function() {
                    d && d(0, 1)
                }
            }
        }
    });
    var cN, cO, cP = /^(?:toggle|show|hide)$/,
        cQ = new RegExp("^(?:([-+])=|)(" + q + ")([a-z%]*)$", "i"),
        cR = /queueHooks$/,
        cS = [cY],
        cT = {
            "*": [function(a, b) {
                var c, d, e = this.createTween(a, b),
                    f = cQ.exec(b),
                    g = e.cur(),
                    h = +g || 0,
                    i = 1,
                    j = 20;
                if (f) {
                    c = +f[2], d = f[3] || (p.cssNumber[a] ? "" : "px");
                    if (d !== "px" && h) {
                        h = p.css(e.elem, a, !0) || c || 1;
                        do i = i || ".5", h = h / i, p.style(e.elem, a, h + d); while (i !== (i = e.cur() / g) && i !== 1 && --j)
                    }
                    e.unit = d, e.start = h, e.end = f[1] ? h + (f[1] + 1) * c : c
                }
                return e
            }]
        };
    p.Animation = p.extend(cW, {
        tweener: function(a, b) {
            p.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            var c, d = 0,
                e = a.length;
            for (; d < e; d++) c = a[d], cT[c] = cT[c] || [], cT[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? cS.unshift(a) : cS.push(a)
        }
    }), p.Tween = cZ, cZ.prototype = {
        constructor: cZ,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (p.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = cZ.propHooks[this.prop];
            return a && a.get ? a.get(this) : cZ.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = cZ.propHooks[this.prop];
            return this.options.duration ? this.pos = b = p.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : cZ.propHooks._default.set(this), this
        }
    }, cZ.prototype.init.prototype = cZ.prototype, cZ.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return a.elem[a.prop] == null || !!a.elem.style && a.elem.style[a.prop] != null ? (b = p.css(a.elem, a.prop, !1, ""), !b || b === "auto" ? 0 : b) : a.elem[a.prop]
            },
            set: function(a) {
                p.fx.step[a.prop] ? p.fx.step[a.prop](a) : a.elem.style && (a.elem.style[p.cssProps[a.prop]] != null || p.cssHooks[a.prop]) ? p.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, cZ.propHooks.scrollTop = cZ.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, p.each(["toggle", "show", "hide"], function(a, b) {
        var c = p.fn[b];
        p.fn[b] = function(d, e, f) {
            return d == null || typeof d == "boolean" || !a && p.isFunction(d) && p.isFunction(e) ? c.apply(this, arguments) : this.animate(c$(b, !0), d, e, f)
        }
    }), p.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(bZ).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = p.isEmptyObject(a),
                f = p.speed(b, c, d),
                g = function() {
                    var b = cW(this, p.extend({}, a), f);
                    e && b.stop(!0)
                };
            return e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop, b(d)
            };
            return typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    c = a != null && a + "queueHooks",
                    f = p.timers,
                    g = p._data(this);
                if (c) g[c] && g[c].stop && e(g[c]);
                else
                    for (c in g) g[c] && g[c].stop && cR.test(c) && e(g[c]);
                for (c = f.length; c--;) f[c].elem === this && (a == null || f[c].queue === a) && (f[c].anim.stop(d), b = !1, f.splice(c, 1));
                (b || !d) && p.dequeue(this, a)
            })
        }
    }), p.each({
        slideDown: c$("show"),
        slideUp: c$("hide"),
        slideToggle: c$("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        p.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), p.speed = function(a, b, c) {
        var d = a && typeof a == "object" ? p.extend({}, a) : {
            complete: c || !c && b || p.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !p.isFunction(b) && b
        };
        d.duration = p.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in p.fx.speeds ? p.fx.speeds[d.duration] : p.fx.speeds._default;
        if (d.queue == null || d.queue === !0) d.queue = "fx";
        return d.old = d.complete, d.complete = function() {
            p.isFunction(d.old) && d.old.call(this), d.queue && p.dequeue(this, d.queue)
        }, d
    }, p.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, p.timers = [], p.fx = cZ.prototype.init, p.fx.tick = function() {
        var a, b = p.timers,
            c = 0;
        for (; c < b.length; c++) a = b[c], !a() && b[c] === a && b.splice(c--, 1);
        b.length || p.fx.stop()
    }, p.fx.timer = function(a) {
        a() && p.timers.push(a) && !cO && (cO = setInterval(p.fx.tick, p.fx.interval))
    }, p.fx.interval = 13, p.fx.stop = function() {
        clearInterval(cO), cO = null
    }, p.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, p.fx.step = {}, p.expr && p.expr.filters && (p.expr.filters.animated = function(a) {
        return p.grep(p.timers, function(b) {
            return a === b.elem
        }).length
    });
    var c_ = /^(?:body|html)$/i;
    p.fn.offset = function(a) {
        if (arguments.length) return a === b ? this : this.each(function(b) {
            p.offset.setOffset(this, a, b)
        });
        var c, d, e, f, g, h, i, j = {
                top: 0,
                left: 0
            },
            k = this[0],
            l = k && k.ownerDocument;
        if (!l) return;
        return (d = l.body) === k ? p.offset.bodyOffset(k) : (c = l.documentElement, p.contains(c, k) ? (typeof k.getBoundingClientRect != "undefined" && (j = k.getBoundingClientRect()), e = da(l), f = c.clientTop || d.clientTop || 0, g = c.clientLeft || d.clientLeft || 0, h = e.pageYOffset || c.scrollTop, i = e.pageXOffset || c.scrollLeft, {
            top: j.top + h - f,
            left: j.left + i - g
        }) : j)
    }, p.offset = {
        bodyOffset: function(a) {
            var b = a.offsetTop,
                c = a.offsetLeft;
            return p.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(p.css(a, "marginTop")) || 0, c += parseFloat(p.css(a, "marginLeft")) || 0), {
                top: b,
                left: c
            }
        },
        setOffset: function(a, b, c) {
            var d = p.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = p(a),
                f = e.offset(),
                g = p.css(a, "top"),
                h = p.css(a, "left"),
                i = (d === "absolute" || d === "fixed") && p.inArray("auto", [g, h]) > -1,
                j = {},
                k = {},
                l, m;
            i ? (k = e.position(), l = k.top, m = k.left) : (l = parseFloat(g) || 0, m = parseFloat(h) || 0), p.isFunction(b) && (b = b.call(a, c, f)), b.top != null && (j.top = b.top - f.top + l), b.left != null && (j.left = b.left - f.left + m), "using" in b ? b.using.call(a, j) : e.css(j)
        }
    }, p.fn.extend({
        position: function() {
            if (!this[0]) return;
            var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = c_.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            return c.top -= parseFloat(p.css(a, "marginTop")) || 0, c.left -= parseFloat(p.css(a, "marginLeft")) || 0, d.top += parseFloat(p.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(p.css(b[0], "borderLeftWidth")) || 0, {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || e.body;
                while (a && !c_.test(a.nodeName) && p.css(a, "position") === "static") a = a.offsetParent;
                return a || e.body
            })
        }
    }), p.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, c) {
        var d = /Y/.test(c);
        p.fn[a] = function(e) {
            return p.access(this, function(a, e, f) {
                var g = da(a);
                if (f === b) return g ? c in g ? g[c] : g.document.documentElement[e] : a[e];
                g ? g.scrollTo(d ? p(g).scrollLeft() : f, d ? f : p(g).scrollTop()) : a[e] = f
            }, a, e, arguments.length, null)
        }
    }), p.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        p.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function(d, e) {
            p.fn[e] = function(e, f) {
                var g = arguments.length && (d || typeof e != "boolean"),
                    h = d || (e === !0 || f === !0 ? "margin" : "border");
                return p.access(this, function(c, d, e) {
                    var f;
                    return p.isWindow(c) ? c.document.documentElement["client" + a] : c.nodeType === 9 ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? p.css(c, d, e, h) : p.style(c, d, e, h)
                }, c, g ? e : b, g, null)
            }
        })
    }), a.jQuery = a.$ = p, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return p
    })
})(window);
/*!
 * jQuery Color Animations v@VERSION
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: @DATE
 */
(function(jQuery, undefined) {

    var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",

        // plusequals test for += 100 -= 100
        rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,
        // a set of RE's that can match strings and generate color tuples.
        stringParsers = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(execResult) {
                return [
                    execResult[1],
                    execResult[2],
                    execResult[3],
                    execResult[4]
                ];
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(execResult) {
                return [
                    execResult[1] * 2.55,
                    execResult[2] * 2.55,
                    execResult[3] * 2.55,
                    execResult[4]
                ];
            }
        }, {
            // this regex ignores A-F because it's compared against an already lowercased string
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(execResult) {
                return [
                    parseInt(execResult[1], 16),
                    parseInt(execResult[2], 16),
                    parseInt(execResult[3], 16)
                ];
            }
        }, {
            // this regex ignores A-F because it's compared against an already lowercased string
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(execResult) {
                return [
                    parseInt(execResult[1] + execResult[1], 16),
                    parseInt(execResult[2] + execResult[2], 16),
                    parseInt(execResult[3] + execResult[3], 16)
                ];
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(execResult) {
                return [
                    execResult[1],
                    execResult[2] / 100,
                    execResult[3] / 100,
                    execResult[4]
                ];
            }
        }],

        // jQuery.Color( )
        color = jQuery.Color = function(color, green, blue, alpha) {
            return new jQuery.Color.fn.parse(color, green, blue, alpha);
        },
        spaces = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },

            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        },
        propTypes = {
            "byte": {
                floor: true,
                max: 255
            },
            "percent": {
                max: 1
            },
            "degrees": {
                mod: 360,
                floor: true
            }
        },
        support = color.support = {},

        // element for support tests
        supportElem = jQuery("<p>")[0],

        // colors = jQuery.Color.names
        colors,

        // local aliases of functions called often
        each = jQuery.each;

    // determine rgba support immediately
    supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
    support.rgba = supportElem.style.backgroundColor.indexOf("rgba") > -1;

    // define cache name and alpha properties
    // for rgba and hsla spaces
    each(spaces, function(spaceName, space) {
        space.cache = "_" + spaceName;
        space.props.alpha = {
            idx: 3,
            type: "percent",
            def: 1
        };
    });

    function clamp(value, prop, allowEmpty) {
        var type = propTypes[prop.type] || {};

        if (value == null) {
            return (allowEmpty || !prop.def) ? null : prop.def;
        }

        // ~~ is an short way of doing floor for positive numbers
        value = type.floor ? ~~value : parseFloat(value);

        // IE will pass in empty strings as value for alpha,
        // which will hit this case
        if (isNaN(value)) {
            return prop.def;
        }

        if (type.mod) {
            // we add mod before modding to make sure that negatives values
            // get converted properly: -10 -> 350
            return (value + type.mod) % type.mod;
        }

        // for now all property types without mod have min and max
        return 0 > value ? 0 : type.max < value ? type.max : value;
    }

    function stringParse(string) {
        var inst = color(),
            rgba = inst._rgba = [];

        string = string.toLowerCase();

        each(stringParsers, function(i, parser) {
            var parsed,
                match = parser.re.exec(string),
                values = match && parser.parse(match),
                spaceName = parser.space || "rgba";

            if (values) {
                parsed = inst[spaceName](values);

                // if this was an rgba parse the assignment might happen twice
                // oh well....
                inst[spaces[spaceName].cache] = parsed[spaces[spaceName].cache];
                rgba = inst._rgba = parsed._rgba;

                // exit each( stringParsers ) here because we matched
                return false;
            }
        });

        // Found a stringParser that handled it
        if (rgba.length) {

            // if this came from a parsed string, force "transparent" when alpha is 0
            // chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
            if (rgba.join() === "0,0,0,0") {
                jQuery.extend(rgba, colors.transparent);
            }
            return inst;
        }

        // named colors
        return colors[string];
    }

    color.fn = jQuery.extend(color.prototype, {
        parse: function(red, green, blue, alpha) {
            if (red === undefined) {
                this._rgba = [null, null, null, null];
                return this;
            }
            if (red.jquery || red.nodeType) {
                red = jQuery(red).css(green);
                green = undefined;
            }

            var inst = this,
                type = jQuery.type(red),
                rgba = this._rgba = [];

            // more than 1 argument specified - assume ( red, green, blue, alpha )
            if (green !== undefined) {
                red = [red, green, blue, alpha];
                type = "array";
            }

            if (type === "string") {
                return this.parse(stringParse(red) || colors._default);
            }

            if (type === "array") {
                each(spaces.rgba.props, function(key, prop) {
                    rgba[prop.idx] = clamp(red[prop.idx], prop);
                });
                return this;
            }

            if (type === "object") {
                if (red instanceof color) {
                    each(spaces, function(spaceName, space) {
                        if (red[space.cache]) {
                            inst[space.cache] = red[space.cache].slice();
                        }
                    });
                } else {
                    each(spaces, function(spaceName, space) {
                        var cache = space.cache;
                        each(space.props, function(key, prop) {

                            // if the cache doesn't exist, and we know how to convert
                            if (!inst[cache] && space.to) {

                                // if the value was null, we don't need to copy it
                                // if the key was alpha, we don't need to copy it either
                                if (key === "alpha" || red[key] == null) {
                                    return;
                                }
                                inst[cache] = space.to(inst._rgba);
                            }

                            // this is the only case where we allow nulls for ALL properties.
                            // call clamp with alwaysAllowEmpty
                            inst[cache][prop.idx] = clamp(red[key], prop, true);
                        });

                        // everything defined but alpha?
                        if (inst[cache] && jQuery.inArray(null, inst[cache].slice(0, 3)) < 0) {
                            // use the default of 1
                            inst[cache][3] = 1;
                            if (space.from) {
                                inst._rgba = space.from(inst[cache]);
                            }
                        }
                    });
                }
                return this;
            }
        },
        is: function(compare) {
            var is = color(compare),
                same = true,
                inst = this;

            each(spaces, function(_, space) {
                var localCache,
                    isCache = is[space.cache];
                if (isCache) {
                    localCache = inst[space.cache] || space.to && space.to(inst._rgba) || [];
                    each(space.props, function(_, prop) {
                        if (isCache[prop.idx] != null) {
                            same = (isCache[prop.idx] === localCache[prop.idx]);
                            return same;
                        }
                    });
                }
                return same;
            });
            return same;
        },
        _space: function() {
            var used = [],
                inst = this;
            each(spaces, function(spaceName, space) {
                if (inst[space.cache]) {
                    used.push(spaceName);
                }
            });
            return used.pop();
        },
        transition: function(other, distance) {
            var end = color(other),
                spaceName = end._space(),
                space = spaces[spaceName],
                startColor = this.alpha() === 0 ? color("transparent") : this,
                start = startColor[space.cache] || space.to(startColor._rgba),
                result = start.slice();

            end = end[space.cache];
            each(space.props, function(key, prop) {
                var index = prop.idx,
                    startValue = start[index],
                    endValue = end[index],
                    type = propTypes[prop.type] || {};

                // if null, don't override start value
                if (endValue === null) {
                    return;
                }
                // if null - use end
                if (startValue === null) {
                    result[index] = endValue;
                } else {
                    if (type.mod) {
                        if (endValue - startValue > type.mod / 2) {
                            startValue += type.mod;
                        } else if (startValue - endValue > type.mod / 2) {
                            startValue -= type.mod;
                        }
                    }
                    result[index] = clamp((endValue - startValue) * distance + startValue, prop);
                }
            });
            return this[spaceName](result);
        },
        blend: function(opaque) {
            // if we are already opaque - return ourself
            if (this._rgba[3] === 1) {
                return this;
            }

            var rgb = this._rgba.slice(),
                a = rgb.pop(),
                blend = color(opaque)._rgba;

            return color(jQuery.map(rgb, function(v, i) {
                return (1 - a) * blend[i] + a * v;
            }));
        },
        toRgbaString: function() {
            var prefix = "rgba(",
                rgba = jQuery.map(this._rgba, function(v, i) {
                    return v == null ? (i > 2 ? 1 : 0) : v;
                });

            if (rgba[3] === 1) {
                rgba.pop();
                prefix = "rgb(";
            }

            return prefix + rgba.join() + ")";
        },
        toHslaString: function() {
            var prefix = "hsla(",
                hsla = jQuery.map(this.hsla(), function(v, i) {
                    if (v == null) {
                        v = i > 2 ? 1 : 0;
                    }

                    // catch 1 and 2
                    if (i && i < 3) {
                        v = Math.round(v * 100) + "%";
                    }
                    return v;
                });

            if (hsla[3] === 1) {
                hsla.pop();
                prefix = "hsl(";
            }
            return prefix + hsla.join() + ")";
        },
        toHexString: function(includeAlpha) {
            var rgba = this._rgba.slice(),
                alpha = rgba.pop();

            if (includeAlpha) {
                rgba.push(~~(alpha * 255));
            }

            return "#" + jQuery.map(rgba, function(v) {

                    // default to 0 when nulls exist
                    v = (v || 0).toString(16);
                    return v.length === 1 ? "0" + v : v;
                }).join("");
        },
        toString: function() {
            return this._rgba[3] === 0 ? "transparent" : this.toRgbaString();
        }
    });
    color.fn.parse.prototype = color.fn;

    // hsla conversions adapted from:
    // https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021

    function hue2rgb(p, q, h) {
        h = (h + 1) % 1;
        if (h * 6 < 1) {
            return p + (q - p) * h * 6;
        }
        if (h * 2 < 1) {
            return q;
        }
        if (h * 3 < 2) {
            return p + (q - p) * ((2 / 3) - h) * 6;
        }
        return p;
    }

    spaces.hsla.to = function(rgba) {
        if (rgba[0] == null || rgba[1] == null || rgba[2] == null) {
            return [null, null, null, rgba[3]];
        }
        var r = rgba[0] / 255,
            g = rgba[1] / 255,
            b = rgba[2] / 255,
            a = rgba[3],
            max = Math.max(r, g, b),
            min = Math.min(r, g, b),
            diff = max - min,
            add = max + min,
            l = add * 0.5,
            h, s;

        if (min === max) {
            h = 0;
        } else if (r === max) {
            h = (60 * (g - b) / diff) + 360;
        } else if (g === max) {
            h = (60 * (b - r) / diff) + 120;
        } else {
            h = (60 * (r - g) / diff) + 240;
        }

        // chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
        // otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
        if (diff === 0) {
            s = 0;
        } else if (l <= 0.5) {
            s = diff / add;
        } else {
            s = diff / (2 - add);
        }
        return [Math.round(h) % 360, s, l, a == null ? 1 : a];
    };

    spaces.hsla.from = function(hsla) {
        if (hsla[0] == null || hsla[1] == null || hsla[2] == null) {
            return [null, null, null, hsla[3]];
        }
        var h = hsla[0] / 360,
            s = hsla[1],
            l = hsla[2],
            a = hsla[3],
            q = l <= 0.5 ? l * (1 + s) : l + s - l * s,
            p = 2 * l - q;

        return [
            Math.round(hue2rgb(p, q, h + (1 / 3)) * 255),
            Math.round(hue2rgb(p, q, h) * 255),
            Math.round(hue2rgb(p, q, h - (1 / 3)) * 255),
            a
        ];
    };

    each(spaces, function(spaceName, space) {
        var props = space.props,
            cache = space.cache,
            to = space.to,
            from = space.from;

        // makes rgba() and hsla()
        color.fn[spaceName] = function(value) {

            // generate a cache for this space if it doesn't exist
            if (to && !this[cache]) {
                this[cache] = to(this._rgba);
            }
            if (value === undefined) {
                return this[cache].slice();
            }

            var ret,
                type = jQuery.type(value),
                arr = (type === "array" || type === "object") ? value : arguments,
                local = this[cache].slice();

            each(props, function(key, prop) {
                var val = arr[type === "object" ? key : prop.idx];
                if (val == null) {
                    val = local[prop.idx];
                }
                local[prop.idx] = clamp(val, prop);
            });

            if (from) {
                ret = color(from(local));
                ret[cache] = local;
                return ret;
            } else {
                return color(local);
            }
        };

        // makes red() green() blue() alpha() hue() saturation() lightness()
        each(props, function(key, prop) {
            // alpha is included in more than one space
            if (color.fn[key]) {
                return;
            }
            color.fn[key] = function(value) {
                var vtype = jQuery.type(value),
                    fn = (key === "alpha" ? (this._hsla ? "hsla" : "rgba") : spaceName),
                    local = this[fn](),
                    cur = local[prop.idx],
                    match;

                if (vtype === "undefined") {
                    return cur;
                }

                if (vtype === "function") {
                    value = value.call(this, cur);
                    vtype = jQuery.type(value);
                }
                if (value == null && prop.empty) {
                    return this;
                }
                if (vtype === "string") {
                    match = rplusequals.exec(value);
                    if (match) {
                        value = cur + parseFloat(match[2]) * (match[1] === "+" ? 1 : -1);
                    }
                }
                local[prop.idx] = value;
                return this[fn](local);
            };
        });
    });

    // add cssHook and .fx.step function for each named hook.
    // accept a space separated string of properties
    color.hook = function(hook) {
        var hooks = hook.split(" ");
        each(hooks, function(i, hook) {
            jQuery.cssHooks[hook] = {
                set: function(elem, value) {
                    var parsed, curElem,
                        backgroundColor = "";

                    if (value !== "transparent" && (jQuery.type(value) !== "string" || (parsed = stringParse(value)))) {
                        value = color(parsed || value);
                        if (!support.rgba && value._rgba[3] !== 1) {
                            curElem = hook === "backgroundColor" ? elem.parentNode : elem;
                            while (
                            (backgroundColor === "" || backgroundColor === "transparent") &&
                            curElem && curElem.style
                                ) {
                                try {
                                    backgroundColor = jQuery.css(curElem, "backgroundColor");
                                    curElem = curElem.parentNode;
                                } catch (e) {}
                            }

                            value = value.blend(backgroundColor && backgroundColor !== "transparent" ?
                                backgroundColor :
                                "_default");
                        }

                        value = value.toRgbaString();
                    }
                    try {
                        elem.style[hook] = value;
                    } catch (e) {
                        // wrapped to prevent IE from throwing errors on "invalid" values like 'auto' or 'inherit'
                    }
                }
            };
            jQuery.fx.step[hook] = function(fx) {
                if (!fx.colorInit) {
                    fx.start = color(fx.elem, hook);
                    fx.end = color(fx.end);
                    fx.colorInit = true;
                }
                jQuery.cssHooks[hook].set(fx.elem, fx.start.transition(fx.end, fx.pos));
            };
        });

    };

    color.hook(stepHooks);

    jQuery.cssHooks.borderColor = {
        expand: function(value) {
            var expanded = {};

            each(["Top", "Right", "Bottom", "Left"], function(i, part) {
                expanded["border" + part + "Color"] = value;
            });
            return expanded;
        }
    };

    // Basic color names only.
    // Usage of any of the other color names requires adding yourself or including
    // jquery.color.svg-names.js.
    colors = jQuery.Color.names = {
        // 4.1. Basic color keywords
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        lime: "#00ff00",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        purple: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        teal: "#008080",
        white: "#ffffff",
        yellow: "#ffff00",

        // 4.2.3. "transparent" color keyword
        transparent: [null, null, null, 0],

        _default: "#ffffff"
    };

}(jQuery));
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function(x, t, b, c, d) {
        //alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function(x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function(x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function(x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function(x, t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function(x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function(x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function(x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function(x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function(x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
    },
    easeOutBounce: function(x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    },
    easeInOutBounce: function(x, t, b, c, d) {
        if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
/*
 * transform: A jQuery cssHooks adding cross-browser 2d transform capabilities to $.fn.css() and $.fn.animate()
 *
 * limitations:
 * - requires jQuery 1.4.3+
 * - Should you use the *translate* property, then your elements need to be absolutely positionned in a relatively positionned wrapper **or it will fail in IE678**.
 * - transformOrigin is not accessible
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery.transform.js
 *
 * Copyright 2011 @louis_remi
 * Licensed under the MIT license.
 *
 * This saved you an hour of work?
 * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
 *
 */
(function($, window, document, Math, undefined) {

	/*
	 * Feature tests and global variables
	 */
    var div = document.createElement("div"),
        divStyle = div.style,
        suffix = "Transform",
        testProperties = [
            "O" + suffix,
            "ms" + suffix,
            "Webkit" + suffix,
            "Moz" + suffix
        ],
        i = testProperties.length,
        supportProperty,
        supportMatrixFilter,
        supportFloat32Array = "Float32Array" in window,
        propertyHook,
        propertyGet,
        rMatrix = /Matrix([^)]*)/,
        rAffine = /^\s*matrix\(\s*1\s*,\s*0\s*,\s*0\s*,\s*1\s*(?:,\s*0(?:px)?\s*){2}\)\s*$/,
        _transform = "transform",
        _transformOrigin = "transformOrigin",
        _translate = "translate",
        _rotate = "rotate",
        _scale = "scale",
        _skew = "skew",
        _matrix = "matrix";

    // test different vendor prefixes of these properties
    while (i--) {
        if (testProperties[i] in divStyle) {
            $.support[_transform] = supportProperty = testProperties[i];
            $.support[_transformOrigin] = supportProperty + "Origin";
            continue;
        }
    }
    // IE678 alternative
    if (!supportProperty) {
        $.support.matrixFilter = supportMatrixFilter = divStyle.filter === "";
    }

    // px isn't the default unit of these properties
    $.cssNumber[_transform] = $.cssNumber[_transformOrigin] = true;

	/*
	 * fn.css() hooks
	 */
    if (supportProperty && supportProperty != _transform) {
        // Modern browsers can use jQuery.cssProps as a basic hook
        $.cssProps[_transform] = supportProperty;
        $.cssProps[_transformOrigin] = supportProperty + "Origin";

        // Firefox needs a complete hook because it stuffs matrix with "px"
        if (supportProperty == "Moz" + suffix) {
            propertyHook = {
                get: function(elem, computed) {
                    return (computed ?
                            // remove "px" from the computed matrix
                            $.css(elem, supportProperty).split("px").join("") :
                            elem.style[supportProperty]
                    );
                },
                set: function(elem, value) {
                    // add "px" to matrices
                    elem.style[supportProperty] = /matrix\([^)p]*\)/.test(value) ?
                        value.replace(/matrix((?:[^,]*,){4})([^,]*),([^)]*)/, _matrix + "$1$2px,$3px") :
                        value;
                }
            };
			/* Fix two jQuery bugs still present in 1.5.1
			 * - rupper is incompatible with IE9, see http://jqbug.com/8346
			 * - jQuery.css is not really jQuery.cssProps aware, see http://jqbug.com/8402
			 */
        } else if (/^1\.[0-5](?:\.|$)/.test($.fn.jquery)) {
            propertyHook = {
                get: function(elem, computed) {
                    return (computed ?
                            $.css(elem, supportProperty.replace(/^ms/, "Ms")) :
                            elem.style[supportProperty]
                    );
                }
            };
        }
		/* TODO: leverage hardware acceleration of 3d transform in Webkit only
		 else if ( supportProperty == "Webkit" + suffix && support3dTransform ) {
		 propertyHook = {
		 set: function( elem, value ) {
		 elem.style[supportProperty] =
		 value.replace();
		 }
		 }
		 }*/

    } else if (supportMatrixFilter) {
        propertyHook = {
            get: function(elem, computed, asArray) {
                var elemStyle = (computed && elem.currentStyle ? elem.currentStyle : elem.style),
                    matrix, data;

                if (elemStyle && rMatrix.test(elemStyle.filter)) {
                    matrix = RegExp.$1.split(",");
                    matrix = [
                        matrix[0].split("=")[1],
                        matrix[2].split("=")[1],
                        matrix[1].split("=")[1],
                        matrix[3].split("=")[1]
                    ];
                } else {
                    matrix = [1, 0, 0, 1];
                }

                if (!$.cssHooks[_transformOrigin]) {
                    matrix[4] = elemStyle ? parseInt(elemStyle.left, 10) || 0 : 0;
                    matrix[5] = elemStyle ? parseInt(elemStyle.top, 10) || 0 : 0;

                } else {
                    data = $._data(elem, "transformTranslate", undefined);
                    matrix[4] = data ? data[0] : 0;
                    matrix[5] = data ? data[1] : 0;
                }

                return asArray ? matrix : _matrix + "(" + matrix + ")";
            },
            set: function(elem, value, animate) {
                var elemStyle = elem.style,
                    currentStyle,
                    Matrix,
                    filter,
                    centerOrigin;

                if (!animate) {
                    elemStyle.zoom = 1;
                }

                value = matrix(value);

                // rotate, scale and skew
                Matrix = [
                    "Matrix(" +
                    "M11=" + value[0],
                    "M12=" + value[2],
                    "M21=" + value[1],
                    "M22=" + value[3],
                    "SizingMethod='auto expand'"
                ].join();
                filter = (currentStyle = elem.currentStyle) && currentStyle.filter || elemStyle.filter || "";

                elemStyle.filter = rMatrix.test(filter) ?
                    filter.replace(rMatrix, Matrix) :
                    filter + " progid:DXImageTransform.Microsoft." + Matrix + ")";

                if (!$.cssHooks[_transformOrigin]) {

                    // center the transform origin, from pbakaus's Transformie http://github.com/pbakaus/transformie
                    if ((centerOrigin = $.transform.centerOrigin)) {
                        elemStyle[centerOrigin == "margin" ? "marginLeft" : "left"] = -(elem.offsetWidth / 2) + (elem.clientWidth / 2) + "px";
                        elemStyle[centerOrigin == "margin" ? "marginTop" : "top"] = -(elem.offsetHeight / 2) + (elem.clientHeight / 2) + "px";
                    }

                    // translate
                    // We assume that the elements are absolute positionned inside a relative positionned wrapper
                    elemStyle.left = value[4] + "px";
                    elemStyle.top = value[5] + "px";

                } else {
                    $.cssHooks[_transformOrigin].set(elem, value);
                }
            }
        };
    }
    // populate jQuery.cssHooks with the appropriate hook if necessary
    if (propertyHook) {
        $.cssHooks[_transform] = propertyHook;
    }
    // we need a unique setter for the animation logic
    propertyGet = propertyHook && propertyHook.get || $.css;

	/*
	 * fn.animate() hooks
	 */
    $.fx.step.transform = function(fx) {
        var elem = fx.elem,
            start = fx.start,
            end = fx.end,
            pos = fx.pos,
            transform = "",
            precision = 1E5,
            i, startVal, endVal, unit;

        // fx.end and fx.start need to be converted to interpolation lists
        if (!start || typeof start === "string") {

            // the following block can be commented out with jQuery 1.5.1+, see #7912
            if (!start) {
                start = propertyGet(elem, supportProperty);
            }

            // force layout only once per animation
            if (supportMatrixFilter) {
                elem.style.zoom = 1;
            }

            // replace "+=" in relative animations (-= is meaningless with transforms)
            end = end.split("+=").join(start);

            // parse both transform to generate interpolation list of same length
            $.extend(fx, interpolationList(start, end));
            start = fx.start;
            end = fx.end;
        }

        i = start.length;

        // interpolate functions of the list one by one
        while (i--) {
            startVal = start[i];
            endVal = end[i];
            unit = +false;

            switch (startVal[0]) {

                case _translate:
                    unit = "px";
                case _scale:
                    unit || (unit = "");

                    transform = startVal[0] + "(" +
                        Math.round((startVal[1][0] + (endVal[1][0] - startVal[1][0]) * pos) * precision) / precision + unit + "," +
                        Math.round((startVal[1][1] + (endVal[1][1] - startVal[1][1]) * pos) * precision) / precision + unit + ")" +
                        transform;
                    break;

                case _skew + "X":
                case _skew + "Y":
                case _rotate:
                    transform = startVal[0] + "(" +
                        Math.round((startVal[1] + (endVal[1] - startVal[1]) * pos) * precision) / precision + "rad)" +
                        transform;
                    break;
            }
        }

        fx.origin && (transform = fx.origin + transform);

        propertyHook && propertyHook.set ?
            propertyHook.set(elem, transform, +true) :
            elem.style[supportProperty] = transform;
    };

	/*
	 * Utility functions
	 */

    // turns a transform string into its "matrix(A,B,C,D,X,Y)" form (as an array, though)
    function matrix(transform) {
        transform = transform.split(")");
        var
            trim = $.trim,
            i = -1
            // last element of the array is an empty string, get rid of it
            ,
            l = transform.length - 1,
            split, prop, val, prev = supportFloat32Array ? new Float32Array(6) : [],
            curr = supportFloat32Array ? new Float32Array(6) : [],
            rslt = supportFloat32Array ? new Float32Array(6) : [1, 0, 0, 1, 0, 0];

        prev[0] = prev[3] = rslt[0] = rslt[3] = 1;
        prev[1] = prev[2] = prev[4] = prev[5] = 0;

        // Loop through the transform properties, parse and multiply them
        while (++i < l) {
            split = transform[i].split("(");
            prop = trim(split[0]);
            val = split[1];
            curr[0] = curr[3] = 1;
            curr[1] = curr[2] = curr[4] = curr[5] = 0;

            switch (prop) {
                case _translate + "X":
                    curr[4] = parseInt(val, 10);
                    break;

                case _translate + "Y":
                    curr[5] = parseInt(val, 10);
                    break;

                case _translate:
                    val = val.split(",");
                    curr[4] = parseInt(val[0], 10);
                    curr[5] = parseInt(val[1] || 0, 10);
                    break;

                case _rotate:
                    val = toRadian(val);
                    curr[0] = Math.cos(val);
                    curr[1] = Math.sin(val);
                    curr[2] = -Math.sin(val);
                    curr[3] = Math.cos(val);
                    break;

                case _scale + "X":
                    curr[0] = +val;
                    break;

                case _scale + "Y":
                    curr[3] = val;
                    break;

                case _scale:
                    val = val.split(",");
                    curr[0] = val[0];
                    curr[3] = val.length > 1 ? val[1] : val[0];
                    break;

                case _skew + "X":
                    curr[2] = Math.tan(toRadian(val));
                    break;

                case _skew + "Y":
                    curr[1] = Math.tan(toRadian(val));
                    break;

                case _matrix:
                    val = val.split(",");
                    curr[0] = val[0];
                    curr[1] = val[1];
                    curr[2] = val[2];
                    curr[3] = val[3];
                    curr[4] = parseInt(val[4], 10);
                    curr[5] = parseInt(val[5], 10);
                    break;
            }

            // Matrix product (array in column-major order)
            rslt[0] = prev[0] * curr[0] + prev[2] * curr[1];
            rslt[1] = prev[1] * curr[0] + prev[3] * curr[1];
            rslt[2] = prev[0] * curr[2] + prev[2] * curr[3];
            rslt[3] = prev[1] * curr[2] + prev[3] * curr[3];
            rslt[4] = prev[0] * curr[4] + prev[2] * curr[5] + prev[4];
            rslt[5] = prev[1] * curr[4] + prev[3] * curr[5] + prev[5];

            prev = [rslt[0], rslt[1], rslt[2], rslt[3], rslt[4], rslt[5]];
        }
        return rslt;
    }

    // turns a matrix into its rotate, scale and skew components
    // algorithm from http://hg.mozilla.org/mozilla-central/file/7cb3e9795d04/layout/style/nsStyleAnimation.cpp
    function unmatrix(matrix) {
        var
            scaleX, scaleY, skew, A = matrix[0],
            B = matrix[1],
            C = matrix[2],
            D = matrix[3];

        // Make sure matrix is not singular
        if (A * D - B * C) {
            // step (3)
            scaleX = Math.sqrt(A * A + B * B);
            A /= scaleX;
            B /= scaleX;
            // step (4)
            skew = A * C + B * D;
            C -= A * skew;
            D -= B * skew;
            // step (5)
            scaleY = Math.sqrt(C * C + D * D);
            C /= scaleY;
            D /= scaleY;
            skew /= scaleY;
            // step (6)
            if (A * D < B * C) {
                A = -A;
                B = -B;
                skew = -skew;
                scaleX = -scaleX;
            }

            // matrix is singular and cannot be interpolated
        } else {
            // In this case the elem shouldn't be rendered, hence scale == 0
            scaleX = scaleY = skew = 0;
        }

        // The recomposition order is very important
        // see http://hg.mozilla.org/mozilla-central/file/7cb3e9795d04/layout/style/nsStyleAnimation.cpp#l971
        return [
            [_translate, [+matrix[4], +matrix[5]]],
            [_rotate, Math.atan2(B, A)],
            [_skew + "X", Math.atan(skew)],
            [_scale, [scaleX, scaleY]]
        ];
    }

    // build the list of transform functions to interpolate
    // use the algorithm described at http://dev.w3.org/csswg/css3-2d-transforms/#animation
    function interpolationList(start, end) {
        var list = {
                start: [],
                end: []
            },
            i = -1,
            l,
            currStart, currEnd, currType;

        // get rid of affine transform matrix
        (start == "none" || isAffine(start)) && (start = "");
        (end == "none" || isAffine(end)) && (end = "");

        // if end starts with the current computed style, this is a relative animation
        // store computed style as the origin, remove it from start and end
        if (start && end && !end.indexOf("matrix") && toArray(start).join() == toArray(end.split(")")[0]).join()) {
            list.origin = start;
            start = "";
            end = end.slice(end.indexOf(")") + 1);
        }

        if (!start && !end) {
            return;
        }

        // start or end are affine, or list of transform functions are identical
        // => functions will be interpolated individually
        if (!start || !end || functionList(start) == functionList(end)) {

            start && (start = start.split(")")) && (l = start.length);
            end && (end = end.split(")")) && (l = end.length);

            while (++i < l - 1) {
                start[i] && (currStart = start[i].split("("));
                end[i] && (currEnd = end[i].split("("));
                currType = $.trim((currStart || currEnd)[0]);

                append(list.start, parseFunction(currType, currStart ? currStart[1] : 0));
                append(list.end, parseFunction(currType, currEnd ? currEnd[1] : 0));
            }

            // otherwise, functions will be composed to a single matrix
        } else {
            list.start = unmatrix(matrix(start));
            list.end = unmatrix(matrix(end))
        }

        return list;
    }

    function parseFunction(type, value) {
        var
            // default value is 1 for scale, 0 otherwise
            defaultValue = +(!type.indexOf(_scale)),
            scaleX,
            // remove X/Y from scaleX/Y & translateX/Y, not from skew
            cat = type.replace(/e[XY]/, "e");

        switch (type) {
            case _translate + "Y":
            case _scale + "Y":

                value = [
                    defaultValue,
                    value ?
                        parseFloat(value) :
                        defaultValue
                ];
                break;

            case _translate + "X":
            case _translate:
            case _scale + "X":
                scaleX = 1;
            case _scale:

                value = value ?
                    (value = value.split(",")) && [
                        parseFloat(value[0]),
                        parseFloat(value.length > 1 ? value[1] : type == _scale ? scaleX || value[0] : defaultValue + "")
                    ] : [defaultValue, defaultValue];
                break;

            case _skew + "X":
            case _skew + "Y":
            case _rotate:
                value = value ? toRadian(value) : 0;
                break;

            case _matrix:
                return unmatrix(value ? toArray(value) : [1, 0, 0, 1, 0, 0]);
                break;
        }

        return [
            [cat, value]
        ];
    }

    function isAffine(matrix) {
        return rAffine.test(matrix);
    }

    function functionList(transform) {
        return transform.replace(/(?:\([^)]*\))|\s/g, "");
    }

    function append(arr1, arr2, value) {
        while (value = arr2.shift()) {
            arr1.push(value);
        }
    }

    // converts an angle string in any unit to a radian Float
    function toRadian(value) {
        return ~value.indexOf("deg") ?
            parseInt(value, 10) * (Math.PI * 2 / 360) :
            ~value.indexOf("grad") ?
                parseInt(value, 10) * (Math.PI / 200) :
                parseFloat(value);
    }

    // Converts "matrix(A,B,C,D,X,Y)" to [A,B,C,D,X,Y]
    function toArray(matrix) {
        // remove the unit of X and Y for Firefox
        matrix = /([^,]*),([^,]*),([^,]*),([^,]*),([^,p]*)(?:px)?,([^)p]*)(?:px)?/.exec(matrix);
        return [matrix[1], matrix[2], matrix[3], matrix[4], matrix[5], matrix[6]];
    }

    $.transform = {
        centerOrigin: "margin"
    };

})(jQuery, window, document, Math);
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.12
 *
 * Requires: jQuery 1.2.2+
 */

(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {

    var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ('onwheel' in document || document.documentMode >= 9) ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ($.event.fixHooks) {
        for (var i = toFix.length; i;) {
            $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if (this.addEventListener) {
                for (var i = toBind.length; i;) {
                    this.addEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if (this.removeEventListener) {
                for (var i = toBind.length; i;) {
                    this.removeEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });

    function handler(event) {
        var orgEvent = event || window.event,
            args = slice.call(arguments, 1),
            delta = 0,
            deltaX = 0,
            deltaY = 0,
            absDelta = 0,
            offsetX = 0,
            offsetY = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ('detail' in orgEvent) {
            deltaY = orgEvent.detail * -1;
        }
        if ('wheelDelta' in orgEvent) {
            deltaY = orgEvent.wheelDelta;
        }
        if ('wheelDeltaY' in orgEvent) {
            deltaY = orgEvent.wheelDeltaY;
        }
        if ('wheelDeltaX' in orgEvent) {
            deltaX = orgEvent.wheelDeltaX * -1;
        }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ('axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ('deltaY' in orgEvent) {
            deltaY = orgEvent.deltaY * -1;
            delta = deltaY;
        }
        if ('deltaX' in orgEvent) {
            deltaX = orgEvent.deltaX;
            if (deltaY === 0) {
                delta = deltaX * -1;
            }
        }

        // No change actually happened, no reason to go any further
        if (deltaY === 0 && deltaX === 0) {
            return;
        }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if (orgEvent.deltaMode === 1) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if (orgEvent.deltaMode === 2) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));

        if (!lowestDelta || absDelta < lowestDelta) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
            // Divide all the things by 40!
            delta /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta = Math[delta >= 1 ? 'floor' : 'ceil'](delta / lowestDelta);
        deltaX = Math[deltaX >= 1 ? 'floor' : 'ceil'](deltaX / lowestDelta);
        deltaY = Math[deltaY >= 1 ? 'floor' : 'ceil'](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if (special.settings.normalizeOffset && this.getBoundingClientRect) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) {
            clearTimeout(nullLowestDeltaTimeout);
        }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));

/**
 * Синтаксис:
 * Class.extend(props)
 * Class.extend(props, staticProps)
 * Class.extend([mixins], props)
 * Class.extend([mixins], props, staticProps)
 */
! function() {

    window.Class = function() { /* вся магия - в Class.extend */ };

    Class.extend = function(props, staticProps) {

        var mixins = [];

        // если первый аргумент -- массив, то переназначить аргументы
        if ({}.toString.apply(arguments[0]) == "[object Array]") {
            mixins = arguments[0];
            props = arguments[1];
            staticProps = arguments[2];
        }

        // эта функция будет возвращена как результат работы extend
        function Constructor() {
            this.init && this.init.apply(this, arguments);
        }

        // this -- это класс "перед точкой", для которого вызван extend (Animal.extend)
        // наследуем от него:
        Constructor.prototype = Class.inherit(this.prototype);

        // constructor был затёрт вызовом inherit
        Constructor.prototype.constructor = Constructor;

        // добавим возможность наследовать дальше
        Constructor.extend = Class.extend;

        // скопировать в Constructor статические свойства
        copyWrappedProps(staticProps, Constructor, this);

        // скопировать в Constructor.prototype свойства из примесей и props
        for (var i = 0; i < mixins.length; i++) {
            copyWrappedProps(mixins[i], Constructor.prototype, this.prototype);
        }
        copyWrappedProps(props, Constructor.prototype, this.prototype);

        return Constructor;
    };

    //---------- вспомогательные методы ----------

    // fnTest -- регулярное выражение,
    // которое проверяет функцию на то, есть ли в её коде вызов _super
    //
    // для его объявления мы проверяем, поддерживает ли функция преобразование
    // в код вызовом toString: /xyz/.test(function() {xyz})
    // в редких мобильных браузерах -- не поддерживает, поэтому регэксп будет /./
    var fnTest = /xyz/.test(function() {
        xyz
    }) ? /\b_super\b/ : /./;

    // копирует свойства из props в targetPropsObj
    // третий аргумент -- это свойства родителя
    //
    // при копировании, если выясняется что свойство есть и в родителе тоже,
    // и является функцией -- его вызов оборачивается в обёртку,
    // которая ставит this._super на метод родителя,
    // затем вызывает его, затем возвращает this._super
    function copyWrappedProps(props, targetPropsObj, parentPropsObj) {
        if (!props) return;

        for (var name in props) {
            if (typeof props[name] == "function" && typeof parentPropsObj[name] == "function" && fnTest.test(props[name])) {
                // скопировать, завернув в обёртку
                targetPropsObj[name] = wrap(props[name], parentPropsObj[name]);
            } else {
                targetPropsObj[name] = props[name];
            }
        }

    }

    // возвращает обёртку вокруг method, которая ставит this._super на родителя
    // и возвращает его потом
    function wrap(method, parentMethod) {
        return function() {
            var backup = this._super;

            this._super = parentMethod;

            try {
                return method.apply(this, arguments);
            } finally {
                this._super = backup;
            }
        }
    }

    // эмуляция Object.create для старых IE
    Class.inherit = Object.create || function(proto) {
            function F() {}
            F.prototype = proto;
            return new F;
        };
}();

var _un_ = 'undefined';
var _fn_ = 'function';

window.YT_ready = (function() {
    var onReady_funcs = [],
        api_isReady = false;
    return function(func, b_before) {
        if (func === true) {
            api_isReady = true;
            while (onReady_funcs.length) {
                onReady_funcs.shift()();
            }
        } else if (typeof func == "function") {
            if (api_isReady) func();
            else onReady_funcs[b_before ? "unshift" : "push"](func);
        }
    }
})();

var tt = window.tt = ({
    is: {},
    init: function() {
        this.detectSupport();
        this.youtubeRequest();
        return this;
    },
    detectSupport: function() {
        var a = navigator.userAgent || navigator.vendor || window.opera;
        a = a.toLowerCase();

        this.is.mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));

        this.is.chrome = window.chrome || (a.indexOf('chrome') > -1);
        this.is.firefox = a.indexOf('firefox') > -1;
        this.is.safari = a.indexOf('safari') > -1;
        this.is.opera = a.indexOf('opera') > -1;
        this.is.msie = a.indexOf('msie') > -1;
        this.is.webkit = /webkit/.test(a);

        this.is.iphone = (navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPod") != -1);
        this.is.ipad = (navigator.platform.indexOf("iPad") != -1);
        this.is.ios = this.is.iphone || this.is.ipad;

        this.is.nomouse = this.is.ios || this.is.mobile;
        this.is.mouse = !this.is.nomouse;

        this.is.click = this.is.mobile ? 'touchend' : 'click';
        this.is.mouseEvents = this.is.mobile ? 'touchend' : 'click mouseenter mouseleave';
    },
    clrGM: function(source) {
        var $source = $(source);
        if (!$source.length || $source.attr('clr')) return;
        var source = $source[0];
        for (var i = 0; i < source.childNodes.length; i++) {
            if (source.childNodes[i].tagName == 'DIV') {
                var cnt = source.childNodes[i];
                var c = 0;
                for (var j = 0; j < cnt.childNodes.length; j++) {
                    if (cnt.childNodes[j].tagName == 'DIV') {
                        c++;
                        if (c == 2 || c == 3 || c == 6 || c == 7) {
                            cnt.childNodes[j].style.display = 'none';
                        }
                    }
                }
            }
        }
        $source.attr('clr', 1);
    },
    cancelEvent: function(e) {
        var evt = e ? e : window.event;
        if (evt.stopPropagation) {
            evt.stopPropagation();
        }
        if (evt.cancelBubble != null) {
            evt.cancelBubble = true;
        }
        evt.preventDefault();
    },
    trackURI: function(uri) {
        if (typeof _gaq != 'undefined') {
            _gaq.push(['_trackPageview', uri]);
        }
    },
    js: function(filename) {
        var file = document.createElement('script');
        file.setAttribute("type", "text/javascript");
        file.setAttribute("src", filename);
        document.getElementsByTagName("head")[0].appendChild(file);
    },
    GMapCallback: [],
    GMapRequested: false,
    GMapRequest: function(callback) {
        this.GMapCallback.push(callback);

        if (typeof google == _un_) {
            if (this.GMapRequested) return;
            // this.js('https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAU-Chry2C0CR1eyBloTo96nkqytDc9MfY&sensor=false&language=ru_RU&callback=tt.GMapLoaded');
            this.js('https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&language=ru_RU&callback=tt.GMapLoaded');
            this.GMapRequested = true;
        } else {
            this.GMapLoaded();
        }
    },
    GMapLoaded: function() {
        for (var i = 0; i < this.GMapCallback.length; i++) {
            if (typeof this.GMapCallback[i] == _fn_)
                this.GMapCallback[i]();
        }

        this.GMapCallback = [];
    },
    yotubeReady: false,
    youtubeRequest: function(cb) {
        var self = this;
        // window.YT_ready(function(){ self.mp.init(); });
        window.onYouTubePlayerAPIReady = function() {
            self.yotubeReady = true;
            window.YT_ready(true);
            if (typeof cb == 'function')
                cb();
        };

        var s = document.createElement("script");
        s.src = "https://www.youtube.com/player_api";

        var before = document.getElementsByTagName("script")[0];
        before.parentNode.insertBefore(s, before);
    },
    css: function(filename) {
        var file = document.createElement("link");
        file.setAttribute("rel", "stylesheet");
        file.setAttribute("type", "text/css");
        file.setAttribute("src", filename);
        document.getElementsByTagName("head")[0].appendChild(file);
    },
    checkAllFiles: function(sender) {
        var handle = $(sender).attr('handle');
        if (!handle.length) {
            return;
        }
        var hasChecked = false;
        var obj = $('#' + handle + '-gallery');
        if (obj) {
            var boxes = obj.find('input.cb-del');
            boxes.each(function() {
                if (hasChecked) {
                    return;
                } else if (this.checked) {
                    hasChecked = true;
                }
            });
            if (hasChecked) {
                boxes.each(function() {
                    this.checked = false;
                });
            } else {
                boxes.each(function() {
                    this.checked = true;
                });
            }
        }
    },
    deleteCheckedFiles: function(sender) {
        var handle = $(sender).attr('handle');
        var url = $(sender).attr('url');
        if (!handle.length || !url.length) {
            return;
        }
        var obj = $('#' + handle + '-gallery');
        if (obj) {
            var vals = [];
            obj.find('.cb-del').each(function() {
                if (this.checked) {
                    vals.push(this.value);
                }
            });
            if (vals.length) {
                $.ajax({
                    url: url + '.' + handle + '-delete',
                    data: {
                        cmd: handle + '-delete',
                        ids: vals,
                        ajax: 1
                    },
                    type: 'POST',
                    dataType: 'json'
                })
                    .done(function(data, textStatus, xhr) {})
                    .always(function() {
                        $.ajax({
                            url: url + '.' + handle + '-filegallery',
                            dataType: 'json',
                            type: 'GET',
                            data: {
                                ajax: 1
                            }
                        })
                            .done(function(data) {
                                $('#' + handle + '-container').html(data.html);
                            });
                    });
            } else {
                wnd.alert('Не выбрано ни одного файла для удаления');
            }
        }
    },
    setTouchEvent: function(touchOptions) {
        var self = this;
        var touchSurface = touchOptions.touchSurface;

        $(touchSurface).bind('touchstart', function(e) {
            touchEvent = e.originalEvent;

            touchOptions.distanceX = 0;
            touchOptions.distanceY = 0;

            if (touchEvent.touches.length != 1) return false;

            var windowWidthHalf = Math.round($(window).width() / 2);

            var currentTouchPosition = startTouchPosition = {
                top: touchEvent.touches[0].clientY,
                left: touchEvent.touches[0].clientX
            };
            var startTime = (new Date()).getTime();

            if (touchOptions.onStart)
                touchOptions.onStart(touchOptions);

            $(touchSurface).bind('touchmove', function(e) {
                touchEvent = e.originalEvent;
                if (touchEvent.touches.length != 1) return false;
                currentTouchPosition = {
                    top: touchEvent.touches[0].clientY,
                    left: touchEvent.touches[0].clientX
                };

                touchOptions.prevDistanceX = touchOptions.distanceX;
                touchOptions.prevDistanceY = touchOptions.distanceY;
                touchOptions.distanceX = currentTouchPosition.left - startTouchPosition.left;
                touchOptions.distanceY = currentTouchPosition.top - startTouchPosition.top;
                touchOptions.movedX = touchOptions.distanceX - touchOptions.prevDistanceX;
                touchOptions.movedY = touchOptions.distanceY - touchOptions.prevDistanceY;

                // if(Math.abs(touchOptions.movedX) < Math.abs(touchOptions.movedY))
                //     e.preventDefault();

                if (touchOptions.onMove)
                    touchOptions.onMove(touchOptions);
            });

            $(touchSurface).bind('touchend', function(e) {
                touchEvent = e.originalEvent;

                var newTime = (new Date()).getTime();
                if (touchOptions.onEnd) {
                    touchOptions.dTime = newTime - startTime;
                    touchOptions.prevDistanceX = touchOptions.distanceX || 0;
                    touchOptions.prevDistanceY = touchOptions.distanceY || 0;
                    touchOptions.distanceX = currentTouchPosition.left - startTouchPosition.left;
                    touchOptions.distanceY = currentTouchPosition.top - startTouchPosition.top;
                    touchOptions.movedX = touchOptions.distanceX - touchOptions.prevDistanceX;
                    touchOptions.movedY = touchOptions.distanceY - touchOptions.prevDistanceY;

                    touchOptions.maxDTime = touchOptions.maxDTime || 1200;
                    touchOptions.minDistanceX = touchOptions.minDistanceX || 100;
                    touchOptions.minDistanceY = touchOptions.minDistanceY || 100;

                    touchOptions.moved = false;
                    touchOptions.click = false;
                    touchOptions.clickWH = false;

                    if (touchOptions.dTime < touchOptions.maxDTime) {
                        if (touchOptions.distanceX < -touchOptions.minDistanceX) {
                            touchOptions.moved = 'left';
                        } else if (touchOptions.distanceX > touchOptions.minDistanceX) {
                            touchOptions.moved = 'right';
                        } else if (touchOptions.distanceY < -touchOptions.minDistanceY) {
                            touchOptions.moved = 'up';
                        } else if (touchOptions.distanceY > touchOptions.minDistanceY) {
                            touchOptions.moved = 'down';
                        } else if (Math.abs(touchOptions.distanceY) < touchOptions.minDistanceY && Math.abs(touchOptions.distanceX) < touchOptions.minDistanceX) {
                            touchOptions.clickWH = (startTouchPosition.left > windowWidthHalf) ? 1 : -1;
                        }
                    }

                    touchOptions.onEnd(touchOptions);
                }

                $(touchSurface).unbind('touchmove');
                $(touchSurface).unbind('touchend');

                touchOptions.distanceX = 0;
                touchOptions.distanceY = 0;
            });

        });
    },
    mp: {
        item: [],
        active: false,
        init: function() {
            var self = this;
            var items = $('.videoPlayer');
            for (var i = 0, count = items.length; i < count; i++) {
                var item = $(items[i]);
                var player_id = items[i].id;
                var player = null;

                var itemData = {
                    id: player_id,
                    type: 0,
                    obj: items[i],
                    ready: false,
                    player: null
                };

                if (item.hasClass('vimeoMarker')) {

                    itemData.type = 'vimeo';
                    player = $f(items[i]);

                    player.addEvent('ready', function(player_id) {

                        self.item[player_id].ready = true;
                        self.item[player_id].player.addEvent('play', function(player_id) {
                            self.pauseActivePlayer();
                            self.active = player_id;
                        });

                    });

                } else if (item.hasClass('youtubeMarker')) {

                    itemData.type = 'youtube';
                    player = new YT.Player(player_id, {
                        events: {
                            onStateChange: function(e) {
                                switch (e.data) {
                                    case -1:
                                        self.item[e.target.a.id].ready = true;
                                        break;
                                    case 1:
                                        self.pauseActivePlayer();
                                        self.active = e.target.a.id;
                                        break;
                                }
                            }
                        }
                    });

                }

                itemData.player = player;
                this.item[player_id] = itemData;
            }
        },
        pausePlayer: function(player_id) {
            var itemData = this.item[player_id];
            switch (itemData.type) {
                case 'vimeo':
                    itemData.player.api('pause');
                    break;
                case 'youtube':
                    itemData.player.pauseVideo();
                    break;
            }
        },
        pauseActivePlayer: function() {
            if (this.active) {
                this.pausePlayer(this.active);
                this.active = false;
            }
        },
        pauseAllPlayers: function() {
            for (var player_id in this.item) {
                this.pausePlayer(player_id);
            }
        }
    },
    __class: {
        instances: {},
        put: function(className, instance) {
            if (typeof this.instances[className] == _un_) this.instances[className] = ['null'];
            var id = this.instances[className].length;
            this.instances[className].push(instance);
            if (typeof instance.element != _un_) instance.element.attr(className, id);
            return id;
        },
        get: function(className, element) {
            if (typeof this.instances[className] != _un_) {
                var id = parseInt($(element).attr(className));
                return (typeof this.instances[className][id] != _un_) ? this.instances[className][id] : null;
            }
            return false;
        },
        rm: function(instance) {
            var id = instance._id || false;
            var className = instance._className;
            if (id && className && typeof this.instances[className][id] != _un_) {
                this.instances[className][id] = null;
                return true;
            }

            return false;
        }
    },
    translit: function(txt, removeSpecialChars, removeTags) {
        if (typeof removeSpecialChars == _un_) removeSpecialChars = true;
        if (typeof removeTags == _un_) removeTags = true;
        var reg,
            translitRules = {
                src: [' ', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ъ', 'Ы', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ъ', 'ы', 'э', 'ю', 'я', '\'', '"', '`', '«', '»', '‘', '’', '“', '”', ':', '/'],
                trg: ['-', 'a', 'b', 'v', 'g', 'd', 'e', 'yo', 'zh', 'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'kh', 'c', 'ch', 'sh', 'sh', '', '', 'i', 'e', 'u', 'ya', 'a', 'b', 'v', 'g', 'd', 'e', 'yo', 'zh', 'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'kh', 'c', 'ch', 'sh', 'sh', 'y', '', 'i', 'e', 'u', 'ya', '', '', '', '', '', '', '', '', '', '', ''],
                remove: ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', ':', ';', '\'', '"', '.', ',', '|', '/', '\\', '?', '<', '>', '{', '}', '=', '+']
            };
        txt = txt.replace(/\?/g, "");
        txt = txt.replace(/\!/g, "");
        for (var i = 0; i < translitRules.src.length; i++) {
            reg = new RegExp(translitRules.src[i], "g");
            txt = txt.replace(reg, translitRules.trg[i]);
        }

        if (removeTags) {
            reg = new RegExp("<[^>]*>", "g");
            txt = txt.replace(reg, '');
        }

        if (removeSpecialChars) {
            for (var i = 0; i < translitRules.remove.length; i++) {
                reg = new RegExp("\\" + translitRules.remove[i], "g");
                txt = txt.replace(reg, '');
            }
        }

        return txt;
    },
    mailtest: function(mail) {
        var ret = /^[a-zA-Z0-9\.\-_]{1,}\@([a-zA-Z0-9\-_]{1,}\.){1,2}[a-zA-Z]{2,4}$/.test(mail);
        return (ret ? mail : false);
    }
}).init();

/* CARET POSITION */

(function($) {
    $.caretTo = function(el, index) {
        if (el.createTextRange) {
            var range = el.createTextRange();
            range.move("character", index);
            range.select();
        } else if (el.selectionStart != null) {
            el.focus();
            el.setSelectionRange(index, index);
        }
    };
    $.fn.caretTo = function(index, offset) {
        return this.queue(function(next) {
            if (isNaN(index)) {
                var i = $(this).val().indexOf(index);
                if (offset === true) {
                    i += index.length;
                } else if (offset) {
                    i += offset;
                }
                $.caretTo(this, i);
            } else {
                $.caretTo(this, index);
            }
            next();
        });
    };
    $.fn.caretToStart = function() {
        return this.caretTo(0);
    };
    $.fn.caretToEnd = function() {
        return this.queue(function(next) {
            $.caretTo(this, $(this).val().length);
            next();
        });
    };
}(jQuery));

// confirmPath
function confirmPath(path, msg) {
    if (confirm(msg + '?')) window.location = path;
}
var __slice = Array.prototype.slice;

var BaseClass = Class.extend({
    __className: 'BaseClass',
    setOption: function(key, val) {
        if (key == 'element') {
            this.element = val;
        } else if (key.substr(0, 1) == '_') {
            key = key.substr(1);
            this[key] = val;
        }

        this.opt[key] = val;
    },
    setOptions: function(opt) {
        if (typeof opt == 'undefined') return;
        for (var key in opt) {
            this.setOption(key, opt[key]);
        }
    },
    put: function(className) {
        if (!this.element || this.element.attr(this.__className)) return false;
        this._id = tt.__class.put(this.__className, this);
        return this._id;
    },
    rm: function() {
        return tt.__class.rm(this);
    },
    find: function(obj, needle) {
        var elm = obj.find(needle);
        return elm.length ? elm : false;
    },
    cancelEvent: function(e) {
        if (typeof e.preventDefault != _un_) e.preventDefault(e);
        if (typeof e.stopPropagation != _un_) e.stopPropagation(e);
    },
    reposObject: function(data, opt) {
        var obj = data.obj;

        if (opt) {
            if (opt.ww) data.ww = opt.ww;
            if (opt.wh) data.wh = opt.wh;
        }

        if (typeof data.posmode == _un_) data.posmode = false;
        if (typeof data.resizeMode == _un_) data.resizeMode = false;

        var width = data.width;
        var height = data.height;
        var ww = data.ww;
        var wh = data.wh;

        var newWidth = ww;
        var newHeight = Math.round(newWidth / width * height);
        var top = Math.round((wh - newHeight) / 2);
        var left = 0;

        switch (data.posmode) {
            case 'top':
                top = 0;
                break;
            case 'bottom':
                top = wh - newHeight;
                break;
        }

        if ((!data.resizeMode && newHeight < wh) || (data.resizeMode && newHeight > wh)) {
            newHeight = wh;
            newWidth = Math.round(newHeight / height * width);
            top = 0;
            left = Math.round((ww - newWidth) / 2);
        }

        data.cw = newWidth;
        data.ch = newHeight;

        obj.css({
            position: 'absolute',
            width: newWidth,
            height: newHeight,
            top: top,
            left: left
        });
    },
    isScrolledIntoView: function(elem, overflowY) {
        if (typeof overflowY == _un_) overflowY = 10;

        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + overflowY;

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    },
    rangeprc: function(prc, from, to) {
        var res = 0;
        var range = to - from;
        if (prc > from) {
            prc -= from;
            if (prc > range) prc = range;
            res = prc / range;
        } else {
            res = 0;
        }

        return res;
    },
    _div: function(cssClass, style, attr) {
        if (typeof cssClass == _un_) cssClass = false;
        if (typeof style == _un_) style = false;
        if (typeof attr == _un_) attr = {};

        var div = $('<div></div>', attr);

        if (cssClass) div.addClass(cssClass);
        if (style) div.css(style);

        return div;
    },
    dumpObj: function(obj) {
        if (window.console) {
            for (var k in obj)
                console.log(k + ' = ' + obj[k]);
        }
    },
    ajaxFailFunction: function(xhr, textStatus, errorThrown) {
        alert(xhr.responseText);
    },
    ajaxCheckStatus: function(data, xhr, context, failCallBack, doneCallBack) {
        if (data.status > 0) {
            alert(data.msg);

            if (typeof failCallBack == _fn_) failCallBack(data, xhr, context);
            return false;
        }

        if (typeof doneCallBack == _fn_) doneCallBack(data, xhr, context);
        return true;
    },
    switchOpacity: function(elm, dir, cb, duration, easing) {
        if (typeof duration == _un_) duration = 400;
        if (typeof easing == _un_) easing = 'swing';

        if (dir) {
            elm.css({
                opacity: 0,
                display: 'block'
            }).animate({
                opacity: 1
            }, duration, easing, function() {
                if (typeof cb == _fn_) cb();
            });
        } else {
            elm.animate({
                opacity: 0
            }).animate({
                opacity: 0
            }, duration, easing, function() {
                $(this).css({
                    display: 'none'
                });
                if (typeof cb == _fn_) cb();
            });
        }
    },
    addSourceToVideo: function(element, src, type) {
        var source = document.createElement('source');

        source.src = src;
        source.type = type;

        element.appendChild(source);
    },
    progressHandler: function(e, video, prcToLoad) {
        try {
            if (video.duration) {
                var percent = (video.buffered.end(0) / video.duration) * 100;
                if (Math.floor(percent) <= prcToLoad) {
                    video.currentTime++;
                }
                return percent;
            }
        } catch (e) {}

        return 0;
    },
    castLoader: function(size) {
        if (typeof size == _un_) size = 60;

        var loader = $('<div><div>').addClass('Loader').css({
            width: size,
            hegiht: size
        });
        $('<div></div>').addClass('r1').appendTo(loader);
        $('<div></div>').addClass('r2').appendTo(loader);
        return loader;
    },
    querySelectorAll: function(val, el) {
        return el ? __slice.call(el.querySelectorAll(val)) : __slice.call(document.querySelectorAll(val));
    },

    bindEvent: function(elm, evt, callback) {
        evt = evt.split(' ');
        for (var i = 0; i < evt.length; i++) {
            if (elm.addEventListener) {
                elm.addEventListener(evt[i], callback, false);
            } else {
                elm.attachEvent("on" + evt[i], callback);
            }
        }
    },

    unbindEvent: function(elm, evt, callback) {
        evt = evt.split(' ');
        for (var i = 0; i < evt.length; i++) {
            if (elm.removeEventListener) {
                elm.removeEventListener(evt[i], callback, false);
            } else {
                elm.detachEvent("on" + evt[i], callback);
            }
        }
    },

    hasClass: function(el, className) {
        return el.className.indexOf(className) === -1 ? false : true;
    },

    addClass: function(el, className) {
        if (!this.hasClass(el, className)) el.className += ' ' + className;
    },

    removeClass: function(el, className, accurate) {
        if (typeof accurate == 'undefined') accurate = true;
        if (!this.hasClass(el, className)) return;
        if (!accurate) {
            el.className = el.className.replace(className, '');
        } else {
            var newClassNames = [];
            var classNames = el.className.split(' ');
            for (var i = 0; i < classNames.length; i++) {
                if (classNames[i].length && classNames[i] != className)
                    newClassNames.push(classNames[i]);
            }
            el.className = newClassNames.join(' ');
        }
    },

    css: function(el, css) {
        var k, v;
        for (k in css) {
            v = css[k];

            switch (k) {
                case 'top':
                case 'left':
                case 'right':
                case 'bottom':
                case 'width':
                case 'height':
                    v += 'px';
                    break;
            }

            el.style[k] = v;
        }
    },
    getCookie: function(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ))
        return matches ? decodeURIComponent(matches[1]) : undefined
    },
    setCookie: function(name, value, props) {
        props = props || {}
        var exp = props.expires
        if (typeof exp == "number" && exp) {
            var d = new Date()
            d.setTime(d.getTime() + exp * 1000)
            exp = props.expires = d
        }
        if (exp && exp.toUTCString) {
            props.expires = exp.toUTCString()
        }

        value = encodeURIComponent(value)
        var updatedCookie = name + "=" + value
        for (var propName in props) {
            updatedCookie += "; " + propName
            var propValue = props[propName]
            if (propValue !== true) {
                updatedCookie += "=" + propValue
            }
        }
        document.cookie = updatedCookie

    },
    deleteCookie: function(name) {
        this.setCookie(name, null, {
            expires: -1
        })
    }
});

var VideoPlayer = BaseClass.extend({
    __className: 'VideoPlayer',
    init: function(opt) {
        this._id = false;
        this.inited = false;

        this.externalResize = false;

        this.iframe = false;
        this.player_id = false;
        this.player = false;
        this.type = false;
        this.ready = false;

        this.loading = false;
        this.playing = false;
        this.active = false;
        this.loader = false;
        this.onReady = false;

        this.videoWidth = false;
        this.videoHeight = false;

        this.width = 0;
        this.height = 0;

        this.element = false;
        this.opt = {

        };
        this.setOptions(opt);

        this.create();
    },
    create: function() {
        var self = this;

        if (window.tt.yotubeReady) {
            this.initVideoPlayer();
        } else {
            var tmr = setInterval(function() {
                if (window.tt.yotubeReady) {
                    self.initVideoPlayer();
                    clearInterval(tmr);
                    tmr = null;
                };
            }, 100);
        }

        this.getIFrame();

        this._inited = true;
    },
    initVideoPlayer: function() {
        var elm;
        var self = this;

        this.player = null;

        this.autoplay = parseInt(this.element.getAttribute('autoplay')) || 0;

        this.poster = this.element.querySelector('.poster');
        this.posterImage = false;
        if (this.poster) {
            // var img = this.find(this.poster,'img');
            // this.posterImage = img ? new LoadingImage({ _target : this.poster, _img : img, _autoload : true }) : false;
        }

        this.playButton = this.element.querySelector('.play');
        if (this.playButton) {
            this.playButton.css({
                opacity: 0
            });
        }

        if (this.hasClass(this.element, 'vimeoMarker')) {

            if (!this.getIFrame()) return false;

            this.type = 'vimeo';

            this.player = $f(this.iframe[0]);

            this.player.addEvent('ready', function(player_id) {
                self.imready();

                self.player.api('pause');

                self.player.addEvent('play', function(player_id) {
                    self.implaying();
                });
                self.player.addEvent('pause', function(player_id) {
                    self.impaused();
                });
                self.player.addEvent('finish', function(player_id) {
                    self.imstopped();
                });
            });

        } else if (this.hasClass(this.element, 'youtubeMarker')) {

            if (!this.getIFrame()) return false;

            this.type = 'youtube';

            var player_data = {
                playerVars: {
                    showinfo: 0,
                    controls: 1,
                    modestbranding: 0,
                    wmode: "opaque"
                },

                events: {
                    onReady: function(e) {
                        self.imready();
                    },
                    onStateChange: function(e) {
                        switch (e.data) {
                            case 0:
                                self.imstopped();
                                break;
                            case 1:
                                self.implaying();
                                break;
                            case 2:
                                self.impaused();
                                break;
                            case 5:
                                self.buffering();
                                break;
                        }
                    }
                }
            };

            player_data.videoId = this.iframe.getAttribute('video-id');
            player_data.width = this.width ? this.width : '100%';
            player_data.height = this.height ? this.height : '100%';

            this.player = new YT.Player(this.player_id, player_data);

        } else if (this.element.querySelector('.html5video')) {

            this.type = 'html5video';
            this.player = this.find(this.element, 'video');

            if (this.player) {
                var player_id = this.player.getAttribute('id');
                this.player_id = player_id;

                this.videoWidth = parseInt(this.player.getAttribute('width') || 0);
                this.videoHeight = parseInt(this.player.getAttribute('height') || 0);

                this.player.bind('ended', function(e) {
                    self.stopped();
                });

                // this.player.bind('loadedmetadata',function(){
                //     alert('loadedmetadata');
                // });
            }

        }
    },
    getIFrame: function() {
        this.iframe = this.element.querySelector('iframe');
        if (!this.iframe) {
            this.iframe = this.element.querySelector('.iframe');
            if (!this.iframe) return false;
        }

        var player_id = this.iframe.getAttribute('id');
        this.player_id = player_id;

        this.videoWidth = parseInt(this.iframe.getAttribute('width') || this.element.getAttribute('data-width') || 0);
        this.videoHeight = parseInt(this.iframe.getAttribute('height') || this.element.getAttribute('data-height') || 0);

        return true;
    },
    toggleVideo: function() {
        return this.play();
    },
    play: function() {
        if (this.active) return false;

        if (this.playButton) this.css(this.playButton, {
            display: 'none'
        });
        if (this.poster) this.css(this.poster, {
            display: 'none'
        });

        switch (this.type) {
            case 'html5video':
                this.player.play();
                break;
            case 'vimeo':
                this.player.api('play');
                break;
            case 'youtube':
                this.player.playVideo();
                break;
            default:
                return;
                break;
        }

        return this.activate();
    },
    pause: function() {
        if (!this.active) return false;

        if (this.playButton) this.css(this.playButton, {
            display: 'block'
        });
        if (this.poster) this.css(this.poster, {
            display: 'block'
        });

        switch (this.type) {
            case 'html5video':
                this.player.pause();
                break;
            case 'vimeo':
                this.player.api('pause');
                break;
            case 'youtube':
                this.player.pauseVideo();
                break;
            default:
                return;
                break;
        }

        return this.deactivate();
    },
    imready: function() {
        if (this.loader) this.loader.stop();

        var self = this;
        if (this.playButton) {
            this.css(this.playButton, {
                opacity: 1
            })
            this.bindEvent(this.playButton, 'click', function() {
                self.toggleVideo();
            });
        }

        this.css(this.iframe, {
            opacity: 1
        });

        this.resize();
        this.bindEvent(window, 'resize', function() {
            self.resize();
        });

        this.ready = true;

        if (this.autoplay && (window.innerWidth > 900))
            this.play();

        if (typeof this.onReady == 'function')
            this.onReady();
    },
    implaying: function() {

        switch (this.type) {
            case 'html5video':
                break;
            case 'vimeo':
                break;
            case 'youtube':
                break;
            default:
                return;
                break;
        }

        return this.activate();
    },
    impaused: function() {
        switch (this.type) {
            case 'html5video':
                break;
            case 'vimeo':
                break;
            case 'youtube':
                break;
            default:
                return;
                break;
        }

        return this.deactivate();
    },
    imstopped: function() {
        switch (this.type) {
            case 'html5video':
                this.player.load();
                break;
            case 'vimeo':
                break;
            case 'youtube':
                break;
        }

        return this.deactivate();
    },
    imbuffering: function() {

    },
    activate: function() {
        if (this.active) return false;

        if (this.delegate && this.delegate.videoActivated)
            this.delegate.videoActivated(this);

        // window.tt.mp.activatePlayer(this);
        this.active = true;

        return true;
    },
    deactivate: function() {
        if (!this.active) return false;

        // window.tt.mp.deactivatePlayer(this);

        if (this.delegate && this.delegate.videoDeactivated)
            this.delegate.videoDeactivated(this);

        this.active = false;

        return true;
    },
    getWidthPadding: function() {
        if (window.innerWidth >= 1440) {
            return 190;
        } else if (window.innerWidth >= 1280) {
            return 160;
        } else {
            return 130;
        }
    },
    getHeightPadding: function() {
        if (window.innerWidth >= 1440) {
            return 115;
        } else if (window.innerWidth >= 1280) {
            return 100;
        } else {
            return 120;
        }
    },
    resize: function(ww, wh) {
        var rect = this.element.parentNode.getBoundingClientRect();

        if (this.externalResize && (!ww || !wh))
            return;

        ww = ww || (window.innerWidth - this.getWidthPadding() * 2);
        wh = wh || (window.innerHeight - this.getHeightPadding() * 2);
        var width = ww;
        var height = wh;

        if (this.videoWidth && this.videoHeight) {
            height = Math.round(width / this.videoWidth * this.videoHeight);
            if (wh && (height > wh)) {
                height = wh;
                width = Math.round(height / this.videoHeight * this.videoWidth);
            }
        }

        this.css(this.element, {
            width: width,
            height: height
        });

        this.width = width;
        this.height = height;

        if (this.posterImage) {
            this.posterImage.resize(this.width, this.height);
        }

        switch (this.type) {
            case 'html5video':
                if (this.player)
                    this.css(this.player, {
                        width: this.width,
                        height: this.height
                    });
                break;
            case 'youtube':
                if (this.player)
                    this.player.setSize(this.width, this.height);
            case 'vimeo':
                if (this.iframe)
                    this.css(this.iframe, {
                        width: this.width,
                        height: this.height
                    });
                break;
            default:
                break;
        }

        return {
            width: this.width,
            height: this.height
        };
    },
    remove: function() {
        this.rm();
    }
});
/* Modernizr 2.8.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexboxlegacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;

window.Modernizr = (function(window, document, undefined) {

    var version = '2.8.2',

        Modernizr = {},

        enableClasses = true,

        docElement = document.documentElement,

        mod = 'modernizr',
        modElem = document.createElement(mod),
        mStyle = modElem.style,

        inputElem = document.createElement('input'),

        smile = ':)',

        toString = {}.toString,

        prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),

        omPrefixes = 'Webkit Moz O ms',

        cssomPrefixes = omPrefixes.split(' '),

        domPrefixes = omPrefixes.toLowerCase().split(' '),

        ns = {
            'svg': 'http://www.w3.org/2000/svg'
        },

        tests = {},
        inputs = {},
        attrs = {},

        classes = [],

        slice = classes.slice,

        featureName,

        injectElementWithStyles = function(rule, callback, nodes, testnames) {

            var style, ret, node, docOverflow,
                div = document.createElement('div'),
                body = document.body,
                fakeBody = body || document.createElement('body');

            if (parseInt(nodes, 10)) {
                while (nodes--) {
                    node = document.createElement('div');
                    node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
                    div.appendChild(node);
                }
            }

            style = ['&#173;', '<style id="s', mod, '">', rule, '</style>'].join('');
            div.id = mod;
            (body ? div : fakeBody).innerHTML += style;
            fakeBody.appendChild(div);
            if (!body) {
                fakeBody.style.background = '';
                fakeBody.style.overflow = 'hidden';
                docOverflow = docElement.style.overflow;
                docElement.style.overflow = 'hidden';
                docElement.appendChild(fakeBody);
            }

            ret = callback(div, rule);
            if (!body) {
                fakeBody.parentNode.removeChild(fakeBody);
                docElement.style.overflow = docOverflow;
            } else {
                div.parentNode.removeChild(div);
            }

            return !!ret;

        },

        testMediaQuery = function(mq) {

            var matchMedia = window.matchMedia || window.msMatchMedia;
            if (matchMedia) {
                return matchMedia(mq) && matchMedia(mq).matches || false;
            }

            var bool;

            injectElementWithStyles('@media ' + mq + ' { #' + mod + ' { position: absolute; } }', function(node) {
                bool = (window.getComputedStyle ?
                        getComputedStyle(node, null) :
                        node.currentStyle)['position'] == 'absolute';
            });

            return bool;

        },

        isEventSupported = (function() {

            var TAGNAMES = {
                'select': 'input',
                'change': 'input',
                'submit': 'form',
                'reset': 'form',
                'error': 'img',
                'load': 'img',
                'abort': 'img'
            };

            function isEventSupported(eventName, element) {

                element = element || document.createElement(TAGNAMES[eventName] || 'div');
                eventName = 'on' + eventName;

                var isSupported = eventName in element;

                if (!isSupported) {
                    if (!element.setAttribute) {
                        element = document.createElement('div');
                    }
                    if (element.setAttribute && element.removeAttribute) {
                        element.setAttribute(eventName, '');
                        isSupported = is(element[eventName], 'function');

                        if (!is(element[eventName], 'undefined')) {
                            element[eventName] = undefined;
                        }
                        element.removeAttribute(eventName);
                    }
                }

                element = null;
                return isSupported;
            }
            return isEventSupported;
        })(),

        _hasOwnProperty = ({}).hasOwnProperty,
        hasOwnProp;

    if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {
        hasOwnProp = function(object, property) {
            return _hasOwnProperty.call(object, property);
        };
    } else {
        hasOwnProp = function(object, property) {
            return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
        };
    }

    if (!Function.prototype.bind) {
        Function.prototype.bind = function bind(that) {

            var target = this;

            if (typeof target != "function") {
                throw new TypeError();
            }

            var args = slice.call(arguments, 1),
                bound = function() {

                    if (this instanceof bound) {

                        var F = function() {};
                        F.prototype = target.prototype;
                        var self = new F();

                        var result = target.apply(
                            self,
                            args.concat(slice.call(arguments))
                        );
                        if (Object(result) === result) {
                            return result;
                        }
                        return self;

                    } else {

                        return target.apply(
                            that,
                            args.concat(slice.call(arguments))
                        );

                    }

                };

            return bound;
        };
    }

    function setCss(str) {
        mStyle.cssText = str;
    }

    function setCssAll(str1, str2) {
        return setCss(prefixes.join(str1 + ';') + (str2 || ''));
    }

    function is(obj, type) {
        return typeof obj === type;
    }

    function contains(str, substr) {
        return !!~('' + str).indexOf(substr);
    }

    function testProps(props, prefixed) {
        for (var i in props) {
            var prop = props[i];
            if (!contains(prop, "-") && mStyle[prop] !== undefined) {
                return prefixed == 'pfx' ? prop : true;
            }
        }
        return false;
    }

    function testDOMProps(props, obj, elem) {
        for (var i in props) {
            var item = obj[props[i]];
            if (item !== undefined) {

                if (elem === false) return props[i];

                if (is(item, 'function')) {
                    return item.bind(elem || obj);
                }

                return item;
            }
        }
        return false;
    }

    function testPropsAll(prop, prefixed, elem) {

        var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
            props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

        if (is(prefixed, "string") || is(prefixed, "undefined")) {
            return testProps(props, prefixed);

        } else {
            props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
            return testDOMProps(props, prefixed, elem);
        }
    }
    tests['flexbox'] = function() {
        return testPropsAll('flexWrap');
    };

    tests['flexboxlegacy'] = function() {
        return testPropsAll('boxDirection');
    };

    tests['canvas'] = function() {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    };

    tests['canvastext'] = function() {
        return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function'));
    };

    tests['webgl'] = function() {
        return !!window.WebGLRenderingContext;
    };

    tests['touch'] = function() {
        var bool;

        if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
            bool = true;
        } else {
            injectElementWithStyles(['@media (', prefixes.join('touch-enabled),('), mod, ')', '{#modernizr{top:9px;position:absolute}}'].join(''), function(node) {
                bool = node.offsetTop === 9;
            });
        }

        return bool;
    };

    tests['geolocation'] = function() {
        return 'geolocation' in navigator;
    };

    tests['postmessage'] = function() {
        return !!window.postMessage;
    };

    tests['websqldatabase'] = function() {
        return !!window.openDatabase;
    };

    tests['indexedDB'] = function() {
        return !!testPropsAll("indexedDB", window);
    };

    tests['hashchange'] = function() {
        return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7);
    };

    tests['history'] = function() {
        return !!(window.history && history.pushState);
    };

    tests['draganddrop'] = function() {
        var div = document.createElement('div');
        return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
    };

    tests['websockets'] = function() {
        return 'WebSocket' in window || 'MozWebSocket' in window;
    };

    tests['rgba'] = function() {
        setCss('background-color:rgba(150,255,150,.5)');

        return contains(mStyle.backgroundColor, 'rgba');
    };

    tests['hsla'] = function() {
        setCss('background-color:hsla(120,40%,100%,.5)');

        return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla');
    };

    tests['multiplebgs'] = function() {
        setCss('background:url(https://),url(https://),red url(https://)');

        return (/(url\s*\(.*?){3}/).test(mStyle.background);
    };
    tests['backgroundsize'] = function() {
        return testPropsAll('backgroundSize');
    };

    tests['borderimage'] = function() {
        return testPropsAll('borderImage');
    };

    tests['borderradius'] = function() {
        return testPropsAll('borderRadius');
    };

    tests['boxshadow'] = function() {
        return testPropsAll('boxShadow');
    };

    tests['textshadow'] = function() {
        return document.createElement('div').style.textShadow === '';
    };

    tests['opacity'] = function() {
        setCssAll('opacity:.55');

        return (/^0.55$/).test(mStyle.opacity);
    };

    tests['cssanimations'] = function() {
        return testPropsAll('animationName');
    };

    tests['csscolumns'] = function() {
        return testPropsAll('columnCount');
    };

    tests['cssgradients'] = function() {
        var str1 = 'background-image:',
            str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
            str3 = 'linear-gradient(left top,#9f9, white);';

        setCss(
            (str1 + '-webkit- '.split(' ').join(str2 + str1) +
            prefixes.join(str3 + str1)).slice(0, -str1.length)
        );

        return contains(mStyle.backgroundImage, 'gradient');
    };

    tests['cssreflections'] = function() {
        return testPropsAll('boxReflect');
    };

    tests['csstransforms'] = function() {
        return !!testPropsAll('transform');
    };

    tests['csstransforms3d'] = function() {

        var ret = !!testPropsAll('perspective');

        if (ret && 'webkitPerspective' in docElement.style) {

            injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function(node, rule) {
                ret = node.offsetLeft === 9 && node.offsetHeight === 3;
            });
        }
        return ret;
    };

    tests['csstransitions'] = function() {
        return testPropsAll('transition');
    };

    tests['fontface'] = function() {
        var bool;

        injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function(node, rule) {
            var style = document.getElementById('smodernizr'),
                sheet = style.sheet || style.styleSheet,
                cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';

            bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
        });

        return bool;
    };

    tests['generatedcontent'] = function() {
        var bool;

        injectElementWithStyles(['#', mod, '{font:0/0 a}#', mod, ':after{content:"', smile, '";visibility:hidden;font:3px/1 a}'].join(''), function(node) {
            bool = node.offsetHeight >= 3;
        });

        return bool;
    };
    tests['video'] = function() {
        var elem = document.createElement('video'),
            bool = false;

        try {
            if (bool = !!elem.canPlayType) {
                bool = new Boolean(bool);
                bool.ogg = elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, '');

                bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, '');

                bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, '');
            }

        } catch (e) {}

        return bool;
    };

    tests['audio'] = function() {
        var elem = document.createElement('audio'),
            bool = false;

        try {
            if (bool = !!elem.canPlayType) {
                bool = new Boolean(bool);
                bool.ogg = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '');
                bool.mp3 = elem.canPlayType('audio/mpeg;').replace(/^no$/, '');

                bool.wav = elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '');
                bool.m4a = (elem.canPlayType('audio/x-m4a;') ||
                elem.canPlayType('audio/aac;')).replace(/^no$/, '');
            }
        } catch (e) {}

        return bool;
    };

    tests['localstorage'] = function() {
        try {
            localStorage.setItem(mod, mod);
            localStorage.removeItem(mod);
            return true;
        } catch (e) {
            return false;
        }
    };

    tests['sessionstorage'] = function() {
        try {
            sessionStorage.setItem(mod, mod);
            sessionStorage.removeItem(mod);
            return true;
        } catch (e) {
            return false;
        }
    };

    tests['webworkers'] = function() {
        return !!window.Worker;
    };

    tests['applicationcache'] = function() {
        return !!window.applicationCache;
    };

    tests['svg'] = function() {
        return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
    };

    tests['inlinesvg'] = function() {
        var div = document.createElement('div');
        div.innerHTML = '<svg/>';
        return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
    };

    tests['smil'] = function() {
        return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')));
    };

    tests['svgclippaths'] = function() {
        return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
    };

    function webforms() {
        Modernizr['input'] = (function(props) {
            for (var i = 0, len = props.length; i < len; i++) {
                attrs[props[i]] = !!(props[i] in inputElem);
            }
            if (attrs.list) {
                attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
            }
            return attrs;
        })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
        Modernizr['inputtypes'] = (function(props) {

            for (var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++) {

                inputElem.setAttribute('type', inputElemType = props[i]);
                bool = inputElem.type !== 'text';

                if (bool) {

                    inputElem.value = smile;
                    inputElem.style.cssText = 'position:absolute;visibility:hidden;';

                    if (/^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined) {

                        docElement.appendChild(inputElem);
                        defaultView = document.defaultView;

                        bool = defaultView.getComputedStyle &&
                            defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&
                            (inputElem.offsetHeight !== 0);

                        docElement.removeChild(inputElem);

                    } else if (/^(search|tel)$/.test(inputElemType)) {} else if (/^(url|email)$/.test(inputElemType)) {
                        bool = inputElem.checkValidity && inputElem.checkValidity() === false;

                    } else {
                        bool = inputElem.value != smile;
                    }
                }

                inputs[props[i]] = !!bool;
            }
            return inputs;
        })('search tel url email datetime date month week time datetime-local number range color'.split(' '));
    }
    for (var feature in tests) {
        if (hasOwnProp(tests, feature)) {
            featureName = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }

    Modernizr.input || webforms();

    Modernizr.addTest = function(feature, test) {
        if (typeof feature == 'object') {
            for (var key in feature) {
                if (hasOwnProp(feature, key)) {
                    Modernizr.addTest(key, feature[key]);
                }
            }
        } else {

            feature = feature.toLowerCase();

            if (Modernizr[feature] !== undefined) {
                return Modernizr;
            }

            test = typeof test == 'function' ? test() : test;

            if (typeof enableClasses !== "undefined" && enableClasses) {
                docElement.className += ' ' + (test ? '' : 'no-') + feature;
            }
            Modernizr[feature] = test;

        }

        return Modernizr;
    };

    setCss('');
    modElem = inputElem = null;

    ;
    (function(window, document) {
        var version = '3.7.0';

        var options = window.html5 || {};

        var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

        var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

        var supportsHtml5Styles;

        var expando = '_html5shiv';

        var expanID = 0;

        var expandoData = {};

        var supportsUnknownElements;

        (function() {
            try {
                var a = document.createElement('a');
                a.innerHTML = '<xyz></xyz>';
                supportsHtml5Styles = ('hidden' in a);

                supportsUnknownElements = a.childNodes.length == 1 || (function() {
                        (document.createElement)('a');
                        var frag = document.createDocumentFragment();
                        return (
                            typeof frag.cloneNode == 'undefined' ||
                            typeof frag.createDocumentFragment == 'undefined' ||
                            typeof frag.createElement == 'undefined'
                        );
                    }());
            } catch (e) {
                supportsHtml5Styles = true;
                supportsUnknownElements = true;
            }

        }());

        function addStyleSheet(ownerDocument, cssText) {
            var p = ownerDocument.createElement('p'),
                parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

            p.innerHTML = 'x<style>' + cssText + '</style>';
            return parent.insertBefore(p.lastChild, parent.firstChild);
        }

        function getElements() {
            var elements = html5.elements;
            return typeof elements == 'string' ? elements.split(' ') : elements;
        }

        function getExpandoData(ownerDocument) {
            var data = expandoData[ownerDocument[expando]];
            if (!data) {
                data = {};
                expanID++;
                ownerDocument[expando] = expanID;
                expandoData[expanID] = data;
            }
            return data;
        }

        function createElement(nodeName, ownerDocument, data) {
            if (!ownerDocument) {
                ownerDocument = document;
            }
            if (supportsUnknownElements) {
                return ownerDocument.createElement(nodeName);
            }
            if (!data) {
                data = getExpandoData(ownerDocument);
            }
            var node;

            if (data.cache[nodeName]) {
                node = data.cache[nodeName].cloneNode();
            } else if (saveClones.test(nodeName)) {
                node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
            } else {
                node = data.createElem(nodeName);
            }

            return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
        }

        function createDocumentFragment(ownerDocument, data) {
            if (!ownerDocument) {
                ownerDocument = document;
            }
            if (supportsUnknownElements) {
                return ownerDocument.createDocumentFragment();
            }
            data = data || getExpandoData(ownerDocument);
            var clone = data.frag.cloneNode(),
                i = 0,
                elems = getElements(),
                l = elems.length;
            for (; i < l; i++) {
                clone.createElement(elems[i]);
            }
            return clone;
        }

        function shivMethods(ownerDocument, data) {
            if (!data.cache) {
                data.cache = {};
                data.createElem = ownerDocument.createElement;
                data.createFrag = ownerDocument.createDocumentFragment;
                data.frag = data.createFrag();
            }

            ownerDocument.createElement = function(nodeName) {
                if (!html5.shivMethods) {
                    return data.createElem(nodeName);
                }
                return createElement(nodeName, ownerDocument, data);
            };

            ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
                'var n=f.cloneNode(),c=n.createElement;' +
                'h.shivMethods&&(' +
                getElements().join().replace(/[\w\-]+/g, function(nodeName) {
                    data.createElem(nodeName);
                    data.frag.createElement(nodeName);
                    return 'c("' + nodeName + '")';
                }) +
                ');return n}'
            )(html5, data.frag);
        }

        function shivDocument(ownerDocument) {
            if (!ownerDocument) {
                ownerDocument = document;
            }
            var data = getExpandoData(ownerDocument);

            if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
                data.hasCSS = !!addStyleSheet(ownerDocument,
                    'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
                    'mark{background:#FF0;color:#000}' +
                    'template{display:none}'
                );
            }
            if (!supportsUnknownElements) {
                shivMethods(ownerDocument, data);
            }
            return ownerDocument;
        }

        var html5 = {

            'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',

            'version': version,

            'shivCSS': (options.shivCSS !== false),

            'supportsUnknownElements': supportsUnknownElements,

            'shivMethods': (options.shivMethods !== false),

            'type': 'default',

            'shivDocument': shivDocument,

            createElement: createElement,

            createDocumentFragment: createDocumentFragment
        };

        window.html5 = html5;

        shivDocument(document);

    }(this, document));

    Modernizr._version = version;

    Modernizr._prefixes = prefixes;
    Modernizr._domPrefixes = domPrefixes;
    Modernizr._cssomPrefixes = cssomPrefixes;

    Modernizr.mq = testMediaQuery;

    Modernizr.hasEvent = isEventSupported;

    Modernizr.testProp = function(prop) {
        return testProps([prop]);
    };

    Modernizr.testAllProps = testPropsAll;

    Modernizr.testStyles = injectElementWithStyles;
    Modernizr.prefixed = function(prop, obj, elem) {
        if (!obj) {
            return testPropsAll(prop, 'pfx');
        } else {
            return testPropsAll(prop, obj, elem);
        }
    };

    docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

        (enableClasses ? ' js ' + classes.join(' ') : '');

    return Modernizr;

})(this, this.document);
/*yepnope1.5.4|WTFPL*/
(function(a, b, c) {
    function d(a) {
        return "[object Function]" == o.call(a)
    }

    function e(a) {
        return "string" == typeof a
    }

    function f() {}

    function g(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function h() {
        var a = p.shift();
        q = 1, a ? a.t ? m(function() {
            ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(), h()) : q = 0
    }

    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                "img" != a && m(function() {
                    t.removeChild(l)
                }, 50);
                for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
            }
        }
        var j = j || B.errorTimeout,
            l = b.createElement(a),
            o = 0,
            r = 0,
            u = {
                t: d,
                s: c,
                e: f,
                a: i,
                x: j
            };
        1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
            k.call(this, r)
        }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
    }

    function j(a, b, c, d, f) {
        return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
    }

    function k() {
        var a = B;
        return a.loader = {
            load: j,
            i: 0
        }, a
    }
    var l = b.documentElement,
        m = a.setTimeout,
        n = b.getElementsByTagName("script")[0],
        o = {}.toString,
        p = [],
        q = 0,
        r = "MozAppearance" in l.style,
        s = r && !!b.createRange().compareNode,
        t = s ? l : n.parentNode,
        l = a.opera && "[object Opera]" == o.call(a.opera),
        l = !!b.attachEvent && !l,
        u = r ? "object" : l ? "script" : "img",
        v = l ? "script" : u,
        w = Array.isArray || function(a) {
                return "[object Array]" == o.call(a)
            },
        x = [],
        y = {},
        z = {
            timeout: function(a, b) {
                return b.length && (a.timeout = b[0]), a
            }
        },
        A, B;
    B = function(a) {
        function b(a) {
            var a = a.split("!"),
                b = x.length,
                c = a.pop(),
                d = a.length,
                c = {
                    url: c,
                    origUrl: c,
                    prefixes: a
                },
                e, f, g;
            for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
            for (f = 0; f < b; f++) c = x[f](c);
            return c
        }

        function g(a, e, f, g, h) {
            var i = b(a),
                j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
            })))
        }

        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a)) c || (j = function() {
                        var a = [].slice.call(arguments);
                        k.apply(this, a), l()
                    }), g(a, j, b, 0, h);
                    else if (Object(a) === a)
                        for (n in m = function() {
                            var b = 0,
                                c;
                            for (c in a) a.hasOwnProperty(c) && b++;
                            return b
                        }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        } : j[n] = function(a) {
                            return function() {
                                var b = [].slice.call(arguments);
                                a && a.apply(this, b), l()
                            }
                        }(k[n])), g(a[n], j, b, n, h))
                } else !c && l()
            }
            var h = !!a.test,
                i = a.load || a.both,
                j = a.callback || f,
                k = j,
                l = a.complete || f,
                m, n;
            c(h ? a.yep : a.nope, !!i), i && c(i)
        }
        var i, j, l = this.yepnope.loader;
        if (e(a)) g(a, 0, l, 0);
        else if (w(a))
            for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
        else Object(a) === a && h(a, l)
    }, B.addPrefix = function(a, b) {
        z[a] = b
    }, B.addFilter = function(a) {
        x.push(a)
    }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
        b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
        var k = b.createElement("script"),
            l, o, e = e || B.errorTimeout;
        k.src = a;
        for (o in d) k.setAttribute(o, d[o]);
        c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
            !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
        }, m(function() {
            l || (l = 1, c(1))
        }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
    }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
        var e = b.createElement("link"),
            j, c = i ? h : c || f;
        e.href = a, e.rel = "stylesheet", e.type = "text/css";
        for (j in d) e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
})(this, document);
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0));
};;
/*
 * Copyright 2013 Small Batch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
;
(function(window, document, undefined) {
    var j = void 0,
        k = !0,
        l = null,
        p = !1;

    function q(a) {
        return function() {
            return this[a]
        }
    }
    var aa = this;

    function ba(a, b) {
        var c = a.split("."),
            d = aa;
        !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift());) !c.length && b !== j ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
    }
    aa.Ba = k;

    function ca(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function da(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function s(a, b, c) {
        s = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ca : da;
        return s.apply(l, arguments)
    }
    var ea = Date.now || function() {
            return +new Date
        };

    function fa(a, b) {
        this.G = a;
        this.u = b || a;
        this.z = this.u.document;
        this.R = j
    }
    fa.prototype.createElement = function(a, b, c) {
        a = this.z.createElement(a);
        if (b)
            for (var d in b)
                if (b.hasOwnProperty(d))
                    if ("style" == d) {
                        var e = a,
                            f = b[d];
                        ga(this) ? e.setAttribute("style", f) : e.style.cssText = f
                    } else a.setAttribute(d, b[d]);
        c && a.appendChild(this.z.createTextNode(c));
        return a
    };

    function t(a, b, c) {
        a = a.z.getElementsByTagName(b)[0];
        a || (a = document.documentElement);
        a && a.lastChild && a.insertBefore(c, a.lastChild)
    }

    function u(a, b) {
        return a.createElement("link", {
            rel: "stylesheet",
            href: b
        })
    }

    function ha(a, b) {
        return a.createElement("script", {
            src: b
        })
    }

    function v(a, b) {
        for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)
            if (c[d] == b) return;
        c.push(b);
        a.className = c.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }

    function w(a, b) {
        for (var c = a.className.split(/\s+/), d = [], e = 0, f = c.length; e < f; e++) c[e] != b && d.push(c[e]);
        a.className = d.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }

    function ia(a, b) {
        for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)
            if (c[d] == b) return k;
        return p
    }

    function ga(a) {
        if (a.R === j) {
            var b = a.z.createElement("p");
            b.innerHTML = '<a style="top:1px;">w</a>';
            a.R = /top/.test(b.getElementsByTagName("a")[0].getAttribute("style"))
        }
        return a.R
    }

    function x(a) {
        var b = a.u.location.protocol;
        "about:" == b && (b = a.G.location.protocol);
        return "https:" == b ? "https:" : "http:"
    };

    function y(a, b, c) {
        this.w = a;
        this.T = b;
        this.Aa = c
    }
    ba("webfont.BrowserInfo", y);
    y.prototype.qa = q("w");
    y.prototype.hasWebFontSupport = y.prototype.qa;
    y.prototype.ra = q("T");
    y.prototype.hasWebKitFallbackBug = y.prototype.ra;
    y.prototype.sa = q("Aa");
    y.prototype.hasWebKitMetricsBug = y.prototype.sa;

    function z(a, b, c, d) {
        this.e = a != l ? a : l;
        this.o = b != l ? b : l;
        this.ba = c != l ? c : l;
        this.f = d != l ? d : l
    }
    var ja = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
    z.prototype.toString = function() {
        return [this.e, this.o || "", this.ba || "", this.f || ""].join("")
    };

    function A(a) {
        a = ja.exec(a);
        var b = l,
            c = l,
            d = l,
            e = l;
        a && (a[1] !== l && a[1] && (b = parseInt(a[1], 10)), a[2] !== l && a[2] && (c = parseInt(a[2], 10)), a[3] !== l && a[3] && (d = parseInt(a[3], 10)), a[4] !== l && a[4] && (e = /^[0-9]+$/.test(a[4]) ? parseInt(a[4], 10) : a[4]));
        return new z(b, c, d, e)
    };

    function B(a, b, c, d, e, f, g, h, n, m, r) {
        this.J = a;
        this.Ha = b;
        this.za = c;
        this.ga = d;
        this.Fa = e;
        this.fa = f;
        this.xa = g;
        this.Ga = h;
        this.wa = n;
        this.ea = m;
        this.k = r
    }
    ba("webfont.UserAgent", B);
    B.prototype.getName = q("J");
    B.prototype.getName = B.prototype.getName;
    B.prototype.pa = q("za");
    B.prototype.getVersion = B.prototype.pa;
    B.prototype.la = q("ga");
    B.prototype.getEngine = B.prototype.la;
    B.prototype.ma = q("fa");
    B.prototype.getEngineVersion = B.prototype.ma;
    B.prototype.na = q("xa");
    B.prototype.getPlatform = B.prototype.na;
    B.prototype.oa = q("wa");
    B.prototype.getPlatformVersion = B.prototype.oa;
    B.prototype.ka = q("ea");
    B.prototype.getDocumentMode = B.prototype.ka;
    B.prototype.ja = q("k");
    B.prototype.getBrowserInfo = B.prototype.ja;

    function C(a, b) {
        this.a = a;
        this.H = b
    }
    var ka = new B("Unknown", new z, "Unknown", "Unknown", new z, "Unknown", "Unknown", new z, "Unknown", j, new y(p, p, p));
    C.prototype.parse = function() {
        var a;
        if (-1 != this.a.indexOf("MSIE")) {
            a = D(this);
            var b = E(this),
                c = A(b),
                d = F(this.a, /MSIE ([\d\w\.]+)/, 1),
                e = A(d);
            a = new B("MSIE", e, d, "MSIE", e, d, a, c, b, G(this.H), new y("Windows" == a && 6 <= e.e || "Windows Phone" == a && 8 <= c.e, p, p))
        } else if (-1 != this.a.indexOf("Opera")) a: {
            a = "Unknown";
            var b = F(this.a, /Presto\/([\d\w\.]+)/, 1),
                c = A(b),
                d = E(this),
                e = A(d),
                f = G(this.H);
            c.e !== l ? a = "Presto" : (-1 != this.a.indexOf("Gecko") && (a = "Gecko"), b = F(this.a, /rv:([^\)]+)/, 1), c = A(b));
            if (-1 != this.a.indexOf("Opera Mini/")) {
                var g =
                        F(this.a, /Opera Mini\/([\d\.]+)/, 1),
                    h = A(g);
                a = new B("OperaMini", h, g, a, c, b, D(this), e, d, f, new y(p, p, p))
            } else {
                if (-1 != this.a.indexOf("Version/") && (g = F(this.a, /Version\/([\d\.]+)/, 1), h = A(g), h.e !== l)) {
                    a = new B("Opera", h, g, a, c, b, D(this), e, d, f, new y(10 <= h.e, p, p));
                    break a
                }
                g = F(this.a, /Opera[\/ ]([\d\.]+)/, 1);
                h = A(g);
                a = h.e !== l ? new B("Opera", h, g, a, c, b, D(this), e, d, f, new y(10 <= h.e, p, p)) : new B("Opera", new z, "Unknown", a, c, b, D(this), e, d, f, new y(p, p, p))
            }
        } else if (/AppleWeb(K|k)it/.test(this.a)) {
            a = D(this);
            var b = E(this),
                c = A(b),
                d = F(this.a, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1),
                e = A(d),
                f = "Unknown",
                g = new z,
                h = "Unknown",
                n = p; - 1 != this.a.indexOf("Chrome") || -1 != this.a.indexOf("CrMo") || -1 != this.a.indexOf("CriOS") ? f = "Chrome" : /Silk\/\d/.test(this.a) ? f = "Silk" : "BlackBerry" == a || "Android" == a ? f = "BuiltinBrowser" : -1 != this.a.indexOf("Safari") ? f = "Safari" : -1 != this.a.indexOf("AdobeAIR") && (f = "AdobeAIR");
            "BuiltinBrowser" == f ? h = "Unknown" : "Silk" == f ? h = F(this.a, /Silk\/([\d\._]+)/, 1) : "Chrome" == f ? h = F(this.a, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : -1 !=
            this.a.indexOf("Version/") ? h = F(this.a, /Version\/([\d\.\w]+)/, 1) : "AdobeAIR" == f && (h = F(this.a, /AdobeAIR\/([\d\.]+)/, 1));
            g = A(h);
            n = "AdobeAIR" == f ? 2 < g.e || 2 == g.e && 5 <= g.o : "BlackBerry" == a ? 10 <= c.e : "Android" == a ? 2 < c.e || 2 == c.e && 1 < c.o : 526 <= e.e || 525 <= e.e && 13 <= e.o;
            a = new B(f, g, h, "AppleWebKit", e, d, a, c, b, G(this.H), new y(n, 536 > e.e || 536 == e.e && 11 > e.o, "iPhone" == a || "iPad" == a || "iPod" == a || "Macintosh" == a))
        } else -1 != this.a.indexOf("Gecko") ? (a = "Unknown", b = new z, c = "Unknown", d = E(this), e = A(d), f = p, -1 != this.a.indexOf("Firefox") ? (a =
            "Firefox", c = F(this.a, /Firefox\/([\d\w\.]+)/, 1), b = A(c), f = 3 <= b.e && 5 <= b.o) : -1 != this.a.indexOf("Mozilla") && (a = "Mozilla"), g = F(this.a, /rv:([^\)]+)/, 1), h = A(g), f || (f = 1 < h.e || 1 == h.e && 9 < h.o || 1 == h.e && 9 == h.o && 2 <= h.ba || g.match(/1\.9\.1b[123]/) != l || g.match(/1\.9\.1\.[\d\.]+/) != l), a = new B(a, b, c, "Gecko", h, g, D(this), e, d, G(this.H), new y(f, p, p))) : a = ka;
        return a
    };

    function D(a) {
        var b = F(a.a, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
        if ("" != b) return /BB\d{2}/.test(b) && (b = "BlackBerry"), b;
        a = F(a.a, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/, 1);
        return "" != a ? ("Mac_PowerPC" == a && (a = "Macintosh"), a) : "Unknown"
    }

    function E(a) {
        var b = F(a.a, /(OS X|Windows NT|Android) ([^;)]+)/, 2);
        if (b || (b = F(a.a, /Windows Phone( OS)? ([^;)]+)/, 2)) || (b = F(a.a, /(iPhone )?OS ([\d_]+)/, 2))) return b;
        if (b = F(a.a, /(?:Linux|CrOS) ([^;)]+)/, 1))
            for (var b = b.split(/\s/), c = 0; c < b.length; c += 1)
                if (/^[\d\._]+$/.test(b[c])) return b[c];
        return (a = F(a.a, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? a : "Unknown"
    }

    function F(a, b, c) {
        return (a = a.match(b)) && a[c] ? a[c] : ""
    }

    function G(a) {
        if (a.documentMode) return a.documentMode
    };

    function la(a) {
        this.va = a || "-"
    }
    la.prototype.f = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
        return b.join(this.va)
    };

    function H(a, b) {
        this.J = a;
        this.U = 4;
        this.K = "n";
        var c = (b || "n4").match(/^([nio])([1-9])$/i);
        c && (this.K = c[1], this.U = parseInt(c[2], 10))
    }
    H.prototype.getName = q("J");

    function I(a) {
        return a.K + a.U
    }

    function ma(a) {
        var b = 4,
            c = "n",
            d = l;
        a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10))));
        return c + b
    };

    function na(a, b, c) {
        this.c = a;
        this.h = b;
        this.M = c;
        this.j = "wf";
        this.g = new la("-")
    }

    function pa(a) {
        v(a.h, a.g.f(a.j, "loading"));
        J(a, "loading")
    }

    function K(a) {
        w(a.h, a.g.f(a.j, "loading"));
        ia(a.h, a.g.f(a.j, "active")) || v(a.h, a.g.f(a.j, "inactive"));
        J(a, "inactive")
    }

    function J(a, b, c) {
        if (a.M[b])
            if (c) a.M[b](c.getName(), I(c));
            else a.M[b]()
    };

    function L(a, b) {
        this.c = a;
        this.C = b;
        this.s = this.c.createElement("span", {
            "aria-hidden": "true"
        }, this.C)
    }

    function M(a, b) {
        var c = a.s,
            d;
        d = [];
        for (var e = b.J.split(/,\s*/), f = 0; f < e.length; f++) {
            var g = e[f].replace(/['"]/g, ""); - 1 == g.indexOf(" ") ? d.push(g) : d.push("'" + g + "'")
        }
        d = d.join(",");
        e = "normal";
        f = b.U + "00";
        "o" === b.K ? e = "oblique" : "i" === b.K && (e = "italic");
        d = "position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + d + ";" + ("font-style:" + e + ";font-weight:" + f + ";");
        ga(a.c) ? c.setAttribute("style", d) : c.style.cssText =
            d
    }

    function N(a) {
        t(a.c, "body", a.s)
    }
    L.prototype.remove = function() {
        var a = this.s;
        a.parentNode && a.parentNode.removeChild(a)
    };

    function qa(a, b, c, d, e, f, g, h) {
        this.V = a;
        this.ta = b;
        this.c = c;
        this.q = d;
        this.C = h || "BESbswy";
        this.k = e;
        this.F = {};
        this.S = f || 5E3;
        this.Z = g || l;
        this.B = this.A = l;
        a = new L(this.c, this.C);
        N(a);
        for (var n in O) O.hasOwnProperty(n) && (M(a, new H(O[n], I(this.q))), this.F[O[n]] = a.s.offsetWidth);
        a.remove()
    }
    var O = {
        Ea: "serif",
        Da: "sans-serif",
        Ca: "monospace"
    };
    qa.prototype.start = function() {
        this.A = new L(this.c, this.C);
        N(this.A);
        this.B = new L(this.c, this.C);
        N(this.B);
        this.ya = ea();
        M(this.A, new H(this.q.getName() + ",serif", I(this.q)));
        M(this.B, new H(this.q.getName() + ",sans-serif", I(this.q)));
        ra(this)
    };

    function sa(a, b, c) {
        for (var d in O)
            if (O.hasOwnProperty(d) && b === a.F[O[d]] && c === a.F[O[d]]) return k;
        return p
    }

    function ra(a) {
        var b = a.A.s.offsetWidth,
            c = a.B.s.offsetWidth;
        b === a.F.serif && c === a.F["sans-serif"] || a.k.T && sa(a, b, c) ? ea() - a.ya >= a.S ? a.k.T && sa(a, b, c) && (a.Z === l || a.Z.hasOwnProperty(a.q.getName())) ? P(a, a.V) : P(a, a.ta) : setTimeout(s(function() {
            ra(this)
        }, a), 25) : P(a, a.V)
    }

    function P(a, b) {
        a.A.remove();
        a.B.remove();
        b(a.q)
    };

    function R(a, b, c, d) {
        this.c = b;
        this.t = c;
        this.N = 0;
        this.ca = this.Y = p;
        this.S = d;
        this.k = a.k
    }

    function ta(a, b, c, d, e) {
        if (0 === b.length && e) K(a.t);
        else {
            a.N += b.length;
            e && (a.Y = e);
            for (e = 0; e < b.length; e++) {
                var f = b[e],
                    g = c[f.getName()],
                    h = a.t,
                    n = f;
                v(h.h, h.g.f(h.j, n.getName(), I(n).toString(), "loading"));
                J(h, "fontloading", n);
                (new qa(s(a.ha, a), s(a.ia, a), a.c, f, a.k, a.S, d, g)).start()
            }
        }
    }
    R.prototype.ha = function(a) {
        var b = this.t;
        w(b.h, b.g.f(b.j, a.getName(), I(a).toString(), "loading"));
        w(b.h, b.g.f(b.j, a.getName(), I(a).toString(), "inactive"));
        v(b.h, b.g.f(b.j, a.getName(), I(a).toString(), "active"));
        J(b, "fontactive", a);
        this.ca = k;
        ua(this)
    };
    R.prototype.ia = function(a) {
        var b = this.t;
        w(b.h, b.g.f(b.j, a.getName(), I(a).toString(), "loading"));
        ia(b.h, b.g.f(b.j, a.getName(), I(a).toString(), "active")) || v(b.h, b.g.f(b.j, a.getName(), I(a).toString(), "inactive"));
        J(b, "fontinactive", a);
        ua(this)
    };

    function ua(a) {
        0 == --a.N && a.Y && (a.ca ? (a = a.t, w(a.h, a.g.f(a.j, "loading")), w(a.h, a.g.f(a.j, "inactive")), v(a.h, a.g.f(a.j, "active")), J(a, "active")) : K(a.t))
    };

    function S(a, b, c) {
        this.G = a;
        this.W = b;
        this.a = c;
        this.O = this.P = 0
    }

    function T(a, b) {
        U.W.$[a] = b
    }
    S.prototype.load = function(a) {
        var b = a.context || this.G;
        this.c = new fa(this.G, b);
        b = new na(this.c, b.document.documentElement, a);
        if (this.a.k.w) {
            var c = this.W,
                d = this.c,
                e = [],
                f;
            for (f in a)
                if (a.hasOwnProperty(f)) {
                    var g = c.$[f];
                    g && e.push(g(a[f], d))
                }
            a = a.timeout;
            this.O = this.P = e.length;
            a = new R(this.a, this.c, b, a);
            f = 0;
            for (c = e.length; f < c; f++) d = e[f], d.v(this.a, s(this.ua, this, d, b, a))
        } else K(b)
    };
    S.prototype.ua = function(a, b, c, d) {
        var e = this;
        d ? a.load(function(a, d, h) {
            var n = 0 == --e.P;
            n && pa(b);
            setTimeout(function() {
                ta(c, a, d || {}, h || l, n)
            }, 0)
        }) : (a = 0 == --this.P, this.O--, a && (0 == this.O ? K(b) : pa(b)), ta(c, [], {}, l, a))
    };
    var va = window,
        wa = (new C(navigator.userAgent, document)).parse(),
        U = va.WebFont = new S(window, new function() {
            this.$ = {}
        }, wa);
    U.load = U.load;

    function V(a, b) {
        this.c = a;
        this.d = b
    }
    V.prototype.load = function(a) {
        var b, c, d = this.d.urls || [],
            e = this.d.families || [];
        b = 0;
        for (c = d.length; b < c; b++) t(this.c, "head", u(this.c, d[b]));
        d = [];
        b = 0;
        for (c = e.length; b < c; b++) {
            var f = e[b].split(":");
            if (f[1])
                for (var g = f[1].split(","), h = 0; h < g.length; h += 1) d.push(new H(f[0], g[h]));
            else d.push(new H(f[0]))
        }
        a(d)
    };
    V.prototype.v = function(a, b) {
        return b(a.k.w)
    };
    T("custom", function(a, b) {
        return new V(b, a)
    });

    function W(a, b) {
        this.c = a;
        this.d = b
    }
    var xa = {
        regular: "n4",
        bold: "n7",
        italic: "i4",
        bolditalic: "i7",
        r: "n4",
        b: "n7",
        i: "i4",
        bi: "i7"
    };
    W.prototype.v = function(a, b) {
        return b(a.k.w)
    };
    W.prototype.load = function(a) {
        t(this.c, "head", u(this.c, x(this.c) + "//webfonts.fontslive.com/css/" + this.d.key + ".css"));
        for (var b = this.d.families, c = [], d = 0, e = b.length; d < e; d++) c.push.apply(c, ya(b[d]));
        a(c)
    };

    function ya(a) {
        var b = a.split(":");
        a = b[0];
        if (b[1]) {
            for (var c = b[1].split(","), b = [], d = 0, e = c.length; d < e; d++) {
                var f = c[d];
                if (f) {
                    var g = xa[f];
                    b.push(g ? g : f)
                }
            }
            c = [];
            for (d = 0; d < b.length; d += 1) c.push(new H(a, b[d]));
            return c
        }
        return [new H(a)]
    }
    T("ascender", function(a, b) {
        return new W(b, a)
    });

    function X(a, b, c) {
        this.a = a;
        this.c = b;
        this.d = c;
        this.m = []
    }
    X.prototype.v = function(a, b) {
        var c = this,
            d = c.d.projectId,
            e = c.d.version;
        if (d) {
            var f = c.c.u,
                g = c.c.createElement("script");
            g.id = "__MonotypeAPIScript__" + d;
            var h = p;
            g.onload = g.onreadystatechange = function() {
                if (!h && (!this.readyState || "loaded" === this.readyState || "complete" === this.readyState)) {
                    h = k;
                    if (f["__mti_fntLst" + d]) {
                        var e = f["__mti_fntLst" + d]();
                        if (e)
                            for (var m = 0; m < e.length; m++) c.m.push(new H(e[m].fontfamily))
                    }
                    b(a.k.w);
                    g.onload = g.onreadystatechange = l
                }
            };
            g.src = c.D(d, e);
            t(this.c, "head", g)
        } else b(k)
    };
    X.prototype.D = function(a, b) {
        var c = x(this.c),
            d = (this.d.api || "fast.fonts.com/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
        return c + "//" + d + "/" + a + ".js" + (b ? "?v=" + b : "")
    };
    X.prototype.load = function(a) {
        a(this.m)
    };
    T("monotype", function(a, b) {
        var c = (new C(navigator.userAgent, document)).parse();
        return new X(c, b, a)
    });

    function Y(a, b) {
        this.c = a;
        this.d = b;
        this.m = []
    }
    Y.prototype.D = function(a) {
        var b = x(this.c);
        return (this.d.api || b + "//use.typekit.net") + "/" + a + ".js"
    };
    Y.prototype.v = function(a, b) {
        var c = this.d.id,
            d = this.d,
            e = this.c.u,
            f = this;
        c ? (e.__webfonttypekitmodule__ || (e.__webfonttypekitmodule__ = {}), e.__webfonttypekitmodule__[c] = function(c) {
            c(a, d, function(a, c, d) {
                for (var e = 0; e < c.length; e += 1) {
                    var g = d[c[e]];
                    if (g)
                        for (var Q = 0; Q < g.length; Q += 1) f.m.push(new H(c[e], g[Q]));
                    else f.m.push(new H(c[e]))
                }
                b(a)
            })
        }, c = ha(this.c, this.D(c)), t(this.c, "head", c)) : b(k)
    };
    Y.prototype.load = function(a) {
        a(this.m)
    };
    T("typekit", function(a, b) {
        return new Y(b, a)
    });

    function za(a, b, c) {
        this.L = a ? a : b + Aa;
        this.p = [];
        this.Q = [];
        this.da = c || ""
    }
    var Aa = "//fonts.googleapis.com/css";
    za.prototype.f = function() {
        if (0 == this.p.length) throw Error("No fonts to load !");
        if (-1 != this.L.indexOf("kit=")) return this.L;
        for (var a = this.p.length, b = [], c = 0; c < a; c++) b.push(this.p[c].replace(/ /g, "+"));
        a = this.L + "?family=" + b.join("%7C");
        0 < this.Q.length && (a += "&subset=" + this.Q.join(","));
        0 < this.da.length && (a += "&text=" + encodeURIComponent(this.da));
        return a
    };

    function Ba(a) {
        this.p = a;
        this.aa = [];
        this.I = {}
    }
    var Ca = {
            latin: "BESbswy",
            cyrillic: "&#1081;&#1103;&#1046;",
            greek: "&#945;&#946;&#931;",
            khmer: "&#x1780;&#x1781;&#x1782;",
            Hanuman: "&#x1780;&#x1781;&#x1782;"
        },
        Da = {
            thin: "1",
            extralight: "2",
            "extra-light": "2",
            ultralight: "2",
            "ultra-light": "2",
            light: "3",
            regular: "4",
            book: "4",
            medium: "5",
            "semi-bold": "6",
            semibold: "6",
            "demi-bold": "6",
            demibold: "6",
            bold: "7",
            "extra-bold": "8",
            extrabold: "8",
            "ultra-bold": "8",
            ultrabold: "8",
            black: "9",
            heavy: "9",
            l: "3",
            r: "4",
            b: "7"
        },
        Ea = {
            i: "i",
            italic: "i",
            n: "n",
            normal: "n"
        },
        Fa = RegExp("^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$");
    Ba.prototype.parse = function() {
        for (var a = this.p.length, b = 0; b < a; b++) {
            var c = this.p[b].split(":"),
                d = c[0].replace(/\+/g, " "),
                e = ["n4"];
            if (2 <= c.length) {
                var f;
                var g = c[1];
                f = [];
                if (g)
                    for (var g = g.split(","), h = g.length, n = 0; n < h; n++) {
                        var m;
                        m = g[n];
                        if (m.match(/^[\w]+$/)) {
                            m = Fa.exec(m.toLowerCase());
                            var r = j;
                            if (m == l) r = "";
                            else {
                                r = j;
                                r = m[1];
                                if (r == l || "" == r) r = "4";
                                else var oa = Da[r],
                                    r = oa ? oa : isNaN(r) ? "4" : r.substr(0, 1);
                                r = [m[2] == l || "" == m[2] ? "n" : Ea[m[2]], r].join("")
                            }
                            m = r
                        } else m = "";
                        m && f.push(m)
                    }
                0 < f.length && (e = f);
                3 == c.length && (c = c[2],
                    f = [], c = !c ? f : c.split(","), 0 < c.length && (c = Ca[c[0]]) && (this.I[d] = c))
            }
            this.I[d] || (c = Ca[d]) && (this.I[d] = c);
            for (c = 0; c < e.length; c += 1) this.aa.push(new H(d, e[c]))
        }
    };

    function Z(a, b, c) {
        this.a = a;
        this.c = b;
        this.d = c
    }
    var Ga = {
        Arimo: k,
        Cousine: k,
        Tinos: k
    };
    Z.prototype.v = function(a, b) {
        b(a.k.w)
    };
    Z.prototype.load = function(a) {
        var b = this.c;
        if ("MSIE" == this.a.getName() && this.d.blocking != k) {
            var c = s(this.X, this, a),
                d = function() {
                    b.z.body ? c() : setTimeout(d, 0)
                };
            d()
        } else this.X(a)
    };
    Z.prototype.X = function(a) {
        for (var b = this.c, c = new za(this.d.api, x(b), this.d.text), d = this.d.families, e = d.length, f = 0; f < e; f++) {
            var g = d[f].split(":");
            3 == g.length && c.Q.push(g.pop());
            var h = "";
            2 == g.length && "" != g[1] && (h = ":");
            c.p.push(g.join(h))
        }
        d = new Ba(d);
        d.parse();
        t(b, "head", u(b, c.f()));
        a(d.aa, d.I, Ga)
    };
    T("google", function(a, b) {
        var c = (new C(navigator.userAgent, document)).parse();
        return new Z(c, b, a)
    });

    function $(a, b) {
        this.c = a;
        this.d = b;
        this.m = []
    }
    $.prototype.D = function(a) {
        return x(this.c) + (this.d.api || "//f.fontdeck.com/s/css/js/") + (this.c.u.location.hostname || this.c.G.location.hostname) + "/" + a + ".js"
    };
    $.prototype.v = function(a, b) {
        var c = this.d.id,
            d = this.c.u,
            e = this;
        c ? (d.__webfontfontdeckmodule__ || (d.__webfontfontdeckmodule__ = {}), d.__webfontfontdeckmodule__[c] = function(a, c) {
            for (var d = 0, n = c.fonts.length; d < n; ++d) {
                var m = c.fonts[d];
                e.m.push(new H(m.name, ma("font-weight:" + m.weight + ";font-style:" + m.style)))
            }
            b(a)
        }, c = ha(this.c, this.D(c)), t(this.c, "head", c)) : b(k)
    };
    $.prototype.load = function(a) {
        a(this.m)
    };
    T("fontdeck", function(a, b) {
        return new $(b, a)
    });
    window.WebFontConfig && U.load(window.WebFontConfig);
})(this, document);
var Froogaloop = function() {
    function g(a) {
        return new g.fn.init(a)
    }

    function h(a, b, c) {
        if (!c.contentWindow.postMessage) return !1;
        var f = c.getAttribute("src").split("?")[0];
        a = JSON.stringify({
            method: a,
            value: b
        });
        c.contentWindow.postMessage(a, f)
    }

    function i(a) {
        if (a.origin != playerDomain) return !1;
        var b = JSON.parse(a.data);
        a = b.value;
        var c = b.data,
            f = f == "" ? null : b.player_id;
        b = f ? d[f][b.event || b.method] : d[b.event || b.method];
        var e = [];
        if (!b) return !1;
        a !== void 0 && e.push(a);
        c && e.push(c);
        f && e.push(f);
        return e.length > 0 ? b.apply(null,
            e) : b.call()
    }

    function j(a, b, c) {
        c ? (d[c] || (d[c] = {}), d[c][a] = b) : d[a] = b
    }
    var d = {},
        k = !1;
    g.fn = g.prototype = {
        playerDomain: "",
        element: null,
        init: function(a) {
            typeof a === "string" && (a = document.getElementById(a));
            this.element = a;
            return this
        },
        api: function(a, b) {
            if (!this.element || !a) return !1;
            var c = this.element,
                f = c.id != "" ? c.id : null,
                e = !b || !b.constructor || !b.call || !b.apply ? b : null,
                d = b && b.constructor && b.call && b.apply ? b : null;
            d && j(a, d, f);
            h(a, e, c);
            return this
        },
        addEvent: function(a, b) {
            if (!this.element) return !1;
            var c = this.element;
            j(a, b, c.id != "" ? c.id : null);
            a != "ready" && h("addEventListener", a, c);
            if (k) return this;
            c = c.getAttribute("src").split("/");
            for (var d = "", e = 0, g = c.length; e < g; e++) {
                if (e < 3) d += c[e];
                else break;
                e < 2 && (d += "/")
            }
            playerDomain = d;
            window.addEventListener ? window.addEventListener("message", i, !1) : window.attachEvent("onmessage", i, !1);
            k = !0;
            return this
        },
        removeEvent: function(a) {
            if (!this.element) return !1;
            var b = this.element,
                c;
            a: {
                if ((c = b.id != "" ? b.id : null) && d[c]) {
                    if (!d[c][a]) {
                        c = !1;
                        break a
                    }
                    d[c][a] = null
                } else {
                    if (!d[a]) {
                        c = !1;
                        break a
                    }
                    d[a] =
                        null
                }
                c = !0
            }
            a != "ready" && c && h("removeEventListener", a, b)
        }
    };
    g.fn.init.prototype = g.fn;
    return window.Froogaloop = window.$f = g
}();
var __indexPart = false;
var __FOOTER__ = false;
var __MainMenu__ = false;
var __ServicesMenu__ = false;

var JSApp = BaseClass.extend({
    init: function(opt) {
        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        window.__app__ = this;
        this.mv = false;

        this.scrollTop = 0;
        this.scrollTopDir = 0;

        this.contentFixedAt = -1;
        this.fixedContent = false;

        this.pageHeight = 0;
        this.menuWidth = 240;
        this.contentWidth = 0;
        this.sizeMode = 0;

        this.pagepart = [];

        this.fMH = 80;
        this.fH = 80;

        this.afterRun = [];

        this.preloadTMR = false;
        this.preloadItems = [];

        this.inited = false;

        this.checkIfMobile();
    },
    placeForPreload: function(item) {
        this.preloadItems.push(item);
    },
    preload: function() {
        this.present();
    },
    ignite: function() {
        this.screen = $('#screen');
        this.wrapper = $('#wrapper');
        this.content = $('#content');
        this.footer = $('#footer');

        var self = this;
        var initApp = function() {
            self.resize();
        };
        WebFont.load({
            custom: {
                families: ['kievit', 'kievit-medium', 'FontAwesome', 'Open Sans']
            },
            active: initApp,
            inactive: initApp
        });

        this.initialize();
    },
    checkIfMobile: function() {
        if ((typeof this.opt.noRedirect != 'undefined') && this.opt.noRedirect) return;
        var host = window.location.hostname.replace("m.", '').replace("www.", '');
        var shouldBeMobile = (this.windowWidth() < 768);
        if (this.mv != shouldBeMobile)
            window.location = 'http://' + (shouldBeMobile ? 'm.' : '') + host + window.location.pathname + window.location.search;
    },
    windowWidth: function() {
        return $(window).width();
    },
    windowHeight: function() {
        return $(window).height();
    },
    recalc: function() {
        this.ww = this.windowWidth();
        this.wh = this.windowHeight();
        this.contentWidth = this.ww - this.menuWidth;
    },
    initialize: function() {
        this.recalc();
        var self = this;
        var elm;
        this.processElement();
        this.run();
    },
    processElement: function(element) {
        if (typeof element == _un_) element = $(document.body);

        var elm;
        elm = element.find('.page-part');
        if (elm.length)
            for (var i = 0, count = elm.length; i < count; i++) {
                var obj = $(elm[i]);
                var type = obj.attr('part-type');
                if (typeof window['PagePart_' + type] == _un_) type = 'default';
                var pagepart = new window['PagePart_' + type]({
                    _element: obj,
                    type: type
                });
                if (!pagepart.inited) {
                    pagepart.remove();
                    continue;
                }
                this.pagepart.push(pagepart);
            }

        new MainMenu({
            _element: elm
        });

        elm = this.find(element, '.scroll-action');
        if (elm)
            for (var i = 0; i < elm.length; i++)
                new ScrollAction({
                    _element: $(elm[i]),
                    _delegate: this
                });
    },
    execAfterRun: function(fn) {
        if (typeof fn == _fn_) this.afterRun.push(fn);
    },
    run: function() {
        while (fn = this.afterRun.shift()) fn();
        this.preload();

        this.resize();
        this.inited = true;

        new TransitVideo({});
        new Lifehack({});
    },
    updateFooter: function() {
        // update footer position
        this.wrapper.css({
            position: 'relative',
            height: 'auto'
        });
        var std = {
            position: 'relative'
        };
        var fix = {
            position: 'fixed',
            bottom: 0,
            left: 0
        };
        this.footer.css((this.wrapper.innerHeight() < this.wh) ? fix : std);
        this.wrapper.css({
            height: this.wh
        });
    },
    resize: function() {
        this.recalc();
        this.checkIfMobile();

        var ww = this.ww;
        if (ww > 1440) ww = 1440;
        else if (ww < 1000) ww = 1000;
        this.mul = (ww - 1000) / (1440 - 1000);

        this.fMH = (Modernizr.mq('(max-width: 1260px)')) ? 60 : 80;

        $(window).trigger('appResize', [this.ww, this.wh]);

        var self = this;
        setTimeout(function() {
            self.pageHeight = self.content.outerHeight(true);
        }, 5);
    },
    present: function() {
        var self = this;

        this.screen.css({
            height: 'auto',
            overflow: 'visible',
            display: 'block'
        });

        $(window).resize(function() {
            self.resize();
        });
        $(window).scroll(function() {
            self.updateScroll();
        })
        this.resize();
    },
    scrollTo: function(scrollTop, cb, duration) {
        if (typeof duration == _un_)
            duration = 500;

        $('html,body').animate({
            scrollTop: scrollTop
        }, {
            duration: duration,
            easing: 'swing',
            queue: false,
            always: function() {
                if (typeof cb == _fn_) cb();
            }
        });
    },
    updateScroll: function() {
        var scrollTop = $(window).scrollTop();
        this.scrollTopDir = scrollTop > this.scrollTop;
        this.scrollTop = scrollTop;

        $(window).trigger('appScroll', [this.scrollTop, this.scrollTopDir]);
    },
    setFixedContent: function(dir) {
        if (this.fixedContent == dir) return false;

        if (dir) {
            this.contentFixedAt = this.scrollTop;
            $('#screen').css({
                position: 'fixed',
                top: 0,
                height: this.wh,
                display: 'none'
            });
            $('#wrapper').css({
                top: -this.contentFixedAt
            });

            if (__Achievements__)
                __Achievements__.element.css({
                    display: 'none'
                });

        } else {
            $('#screen').css({
                position: 'relative',
                top: 'auto',
                height: 'auto',
                display: 'block'
            });
            $('#wrapper').css({
                top: 0
            });
            window.scrollTo(0, this.contentFixedAt);
            this.contentFixedAt = -1;
            this.resize();

            if (__Achievements__) {
                __Achievements__.element.css({
                    display: 'block'
                });
                __Achievements__.resize(this.ww, this.wh);
            }
        }

        this.fixedContent = dir;
        return true;
    },
    share: {
        windowParams: "menubar=no,location=no,resizable=yes,scrollbars=yes,status=yes,width=800,height=500",
        fb: function(data) {
            var url = "http://www.facebook.com/sharer.php?u=" + data.url;
            window.open(url, "Share", this.windowParams);
        },
        vk: function(data) {
            var url = "http://vkontakte.ru/share.php?url=" + data.url;
            window.open(url, "Share", this.windowParams);
        },
        twitter: function(data) {
            var url = "http://twitter.com/home/?status=" + data.ttl + "+" + data.url;
            window.open(url, "Share", this.windowParams);
        },
        lj: function(data) {
            var url = "http://www.livejournal.com/update.bml?subject=" + data.ttl + "&event=" + data.url;
            window.open(url, "Share", this.windowParams);
        },
        pin: function(data) {
            var url = "http://www.pinterest.com/pin/create/button/?url=" + data.url + "&media=" + data.img + "&description=" + data.ttl;
            window.open(url, "Share", this.windowParams);
        }
    },
    bookmark: function(obj) {
        var title = $(obj).attr('title'),
            url = $(obj).attr('url');

        try {
            window.external.AddFavorite(url, title);
        } catch (e) {
            try {
                window.sidebar.addPanel(title, url, "");
            } catch (e) {
                if (tt.is.opera || tt.is.firefox) {
                    return true;
                } else {
                    alert('Нажмите Ctrl-D чтобы добавить страницу в закладки');
                }
            }
        }

        return false;

        // if(window.sidebar){
        //     window.sidebar.addPanel(href,title,"");
        // }else if(window.external){
        //     window.external.AddFavorite(href,title);
        // }else if(window.opera && window.print){
        //     alert("Нажмите Ctrl+D чтобы добавить эту страницу в закладки.");
        // }

        // var t,v = undefined;

        // if(window.opera){
        //     t = 'Opera';
        // }else if(document.all){
        //     t = 'IE';
        //     var nv = navigator.appVersion;
        //     var s = nv.indexOf('MSIE')+5;
        //     v = nv.substring(s,s+1);
        // }else if(navigator.appName){
        //     t = 'Netscape';
        // }

        // var b = { type : t, version : v };

        // if((b.type == 'IE') && (7 > b.version) && (b.version >= 4)){
        //     window.external.AddFavorite(url,title);
        // }else if( b.type == "Opera" ){
        //     a.href = url;
        //     a.rel = "sidebar";
        //     a.title = url+','+title;
        //     return true;
        // }else if( b.type == "Netscape" ){
        //     window.sidebar.addPanel(title,url,"");
        // }else{
        //     alert("Нажмите CTRL-D, чтобы добавить страницу в закладки.");
        // }

        // return false;
    }
});
var BaseUploader = BaseClass.extend({
    init: function(opt) {
        this.element = false;
        this.opt = {
            mode: null,
            multiple: true,
            url: null,
            cmd: null,
            handle: null,
            start: null,
            progress: null,
            complete: null,
            error: null,
            switcher: false
        };
        this.setOptions(opt);

        this.create();
    },
    create: function() {
        if (this.opt.mode == 'none') {
            return;
        }

        var self = this;

        this.input = this.element.find('input[type=file]')[0];
        if (!this.input) {
            alert('ttFileUpload error: unable to find input');
            return;
        }

        this.form = this.input.form;
        //if(!this.form){ alert('ttFileUpload error: unable to find form');return; }

        if (!this.opt.url) {
            this.opt.url = $(this.form).attr('action');
        }
        if (!this.opt.url) {
            alert('ttFileUpload error: unable to find uploadPath');
            return;
        }
        if (!this.opt.handle) {
            this.opt.handle = 'file';
        }

        this.progress = this.element.find('.progress');

        var mode = 'iframe';
        var supportAjaxUpload = this.supportAjaxUploadWithProgress();
        var supportFormData = false; //this.supportFormData();
        var supportFlash = this.supportFlash();

        if (!this.opt.mode) {
            if (window.tt.msie) {
                mode = supportFlash ? 'flash' : 'shutdown';
            } else {
                if (supportAjaxUpload) {
                    mode = 'ajax';
                } else if (supportFlash) {
                    mode = 'flash';
                } else if (supportFormData) {
                    mode = 'formData';
                } else {
                    mode = 'iframe';
                }
            }
            this.opt.mode = mode;
        }

        this.normalMode = this.opt.mode;

        switch (this.opt.mode) {
            case 'iframe':
                $(this.input).bind('change', function(e) {
                    self.uploadIFrame(e);
                });
                break;
            case 'ajax':
                $(this.input).bind('change', function(e) {
                    self.fileSelect(e);
                });
                break;
            case 'formData':
                $(this.input).bind('change', function(e) {
                    return self.uploadForm(e);
                });
                break;
            case 'flash':
                this.switchToFlashMode();
                break;
            case 'shutdown':
            default:
                return;
                break;
        }

        if (this.opt.switcher && supportFlash && (this.opt.mode != 'flash')) {
            this.switchModeURL = $('<span>').addClass('dashed').html('flash uploader')
                .bind('click', function(e) {
                    self.switchMode(e);
                })
                .insertAfter(this.element);
        }

        if (this.opt.multiple) {
            $(this.input).attr('multiple', true);
        } else {
            $(this.input).attr('multiple', false);
        }
    },
    supportAjaxUploadWithProgress: function() {
        return this.supportFileAPI() && this.supportAjaxUploadProgressEvents();
    },
    supportFileAPI: function() {
        var fi = document.createElement('INPUT');
        fi.type = 'file';
        return 'files' in fi;
    },
    supportAjaxUploadProgressEvents: function() {
        var xhr = new XMLHttpRequest();
        return !!(xhr && ('upload' in xhr) && ('onprogress' in xhr.upload));
    },
    supportFormData: function() {
        return !!window.FormData;
    },
    supportFlash: function() {
        return (typeof swfobject != 'undefined' && swfobject.getFlashPlayerVersion().major >= 9);
    },

    switchMode: function(e) {
        switch (this.opt.mode) {
            case 'flash':
                this.opt.mode = this.normalMode;
                this.flashContainer.css({
                    display: 'none'
                });
                $(this.input).css({
                    display: 'inline-block'
                });
                $(e.target).html('flash mode');
                break;
            default:
                this.opt.mode = 'flash';
                this.switchToFlashMode();
                $(e.target).html('normal uploader');
                break;
        }
    },

    switchToFlashMode: function() {
        if (ttUploader) {
            if (!this.flashContainer) {
                this.flashContainer = $('<div>').css({
                    position: 'relative'
                });
                this.flashObject = $('<div>').css({
                    position: 'relative'
                }).attr('id', 'flashUploader');
                this.flashContainer.append(this.flashObject).insertBefore(this.input);

                var self = this;

                this.flashUploader = new ttUploader({
                    id: 'flashUploader',
                    vars: {
                        uploader: 'flashUploader',
                        url: this.opt.url + '.' + this.opt.cmd,
                        cmd: this.opt.cmd,
                        sid: sid,
                        handle: this.opt.handle
                    },
                    complete: function() {
                        self.uploadComplete('{"status":"0"}');
                    }
                });
            }

            $(this.input).css({
                display: 'none'
            });
            this.flashContainer.css({
                display: 'inline-block'
            });

            return true;
        }
        return false;
    },

    initProgress: function(prc) {

    },
    initForm: function() {
        this.pendingFiles = [];
        this.currentPendingFile = 0;
        if (this.iframeDIV) {
            this.iframeDIV.remove();
        }
        this.iframeDIV = this.iframe = this.iframeID = null;
        //$(this.input).val('');
        this.initProgress();
        if (this.progress) {
            this.progress.css({
                display: 'none'
            });
        }
        $(this.input).css({
            display: 'block'
        });
        if (this.activity) {
            this.activity.remove();
            this.activity = null;
        }
    },
    viewLoading: function() {
        $(this.input).css({
            display: 'none'
        });
        this.activity = $('<div>').addClass('ttFileUploadActivity').insertAfter(this.input);
    },

    // iframe upload
    uploadIFrame: function() {
        var self = this;
        this.iframeID = 'f' + Math.floor(Math.random() * 99999);
        this.iframe = $('<iframe>').attr('id', this.iframeID).attr('name', this.iframeID).css({
            display: 'none'
        });
        this.iframeDIV = $('<div>').html(this.iframe);
        $(document.body).append(this.iframeDIV);
        $(this.form).attr('target', this.iframeID);
        this.iframe.bind('load', function(e) {
            self.iframeLoaded(e);
        });
        this.opt.originalCmd = this.form.elements['cmd'].value;
        this.form.elements['cmd'].value = this.opt.cmd;
        $(this.form).submit();
        this.viewLoading();
        this.form.elements['cmd'].value = this.opt.originalCmd;
        $(this.form).removeAttr('target');
    },
    iframeLoaded: function(e) {
        var d, i = $('#' + this.iframeID);
        if (i.contentDocument) {
            d = i.contentDocument;
        } else if (i.contentWindow) {
            d = i.contentWindow.document;
        } else {
            d = window.frames[this.iframeID].document;
        }
        this.uploadComplete($(d.body).html());
    },

    // ajax upload
    fileSelect: function(e) {
        var files = e.target.files || e.dataTransfer.files;
        this.pendingFiles = files;
        this.currentPendingFile = 0;
        this.viewLoading();
        this.uploadNext();
    },
    uploadNext: function(xhr) {
        if (typeof this.pendingFiles.length != 'undefined') {
            var count = this.pendingFiles.length;
            if (this.currentPendingFile < count) {
                this.uploadFile(this.pendingFiles[this.currentPendingFile]);
                this.currentPendingFile++;
            } else {
                this.uploadComplete(xhr.responseText);
            }
        }
    },
    uploadFile: function(file) {
        var self = this;
        var xhr = new XMLHttpRequest();
        xhr.upload.addEventListener("progress", function(e) {
            var prc = parseInt(e.loaded / e.total * 100);
            self.updateProgress(prc);
        }, false);
        xhr.onreadystatechange = function(e) {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    self.uploadNext(xhr);
                } else {
                    self.uploadError(xhr.responseText);
                }
            }
        };
        //xhr.timeout = 4000;
        //xhr.ontimeout = function () { alert("Timed out!!!"); }
        xhr.open("POST", this.opt.url + '.' + this.opt.cmd, true);
        xhr.setRequestHeader("x-filename", file.name);
        xhr.setRequestHeader("x-filetype", file.type);
        xhr.setRequestHeader("x-filesize", file.size);
        xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
        xhr.send(file);
    },

    // formData upload
    uploadForm: function(e) {
        var self = this;
        var formData = new FormData(this.element[0]);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", this.opt.url, true);
        xhr.upload.addEventListener("progress", function(e) {
            var prc = parseInt(e.loaded / e.total * 100);
            self.updateProgress(prc);
        }, false);
        xhr.onreadystatechange = function(e) {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    self.uploadComplete(xhr.responseText);
                } else {
                    self.uploadError(xhr.responseText);
                }
            }
        }
        //xhr.timeout = 4000;
        //xhr.ontimeout = function () { alert("Timed out!!!"); }
        xhr.open("POST", this.element.attr('action'), true);
        xhr.send(formData);
        this.viewLoading();
        return false;
    },

    updateProgress: function(prc) {
        if (this.activity) {

            if (this.pendingFiles && this.pendingFiles.length > 1) {
                var partPrc = 100 / this.pendingFiles.length;
                prc = (partPrc * prc / 100);
                if (this.currentPendingFile > 0) {
                    prc += (this.currentPendingFile - 1) * partPrc;
                }
            }

            this.activity.html(Math.round(prc) + '%');
        }
    },
    uploadComplete: function(response) {
        if (window.console) console.log(response);

        this.initForm();
        var json = response.match(/\{.*\}/)[0];
        var res = jQuery.parseJSON(json);
        if (typeof this.opt.complete == 'function') {
            this.opt.complete(this, json);
        }
    },
    uploadError: function(text) {
        this.initForm();
        if (typeof this.opt.error == 'function') {
            this.opt.error(this, text);
        }
    }
});
var OverlapController = BaseClass.extend({
    init: function(opt) {
        this.element = false;
        this.opt = {
            opened: false,
            bgOpacity: 0.8,
            duration: 400,
            easing: 'swing',
            zIndex: 2000,
            _arrows: false
        };
        this.setOptions(opt);

        this.bg = this._div('ol-bg', {
            opacity: 0,
            display: 'none',
            zIndex: this.opt.zIndex++
        });
        this.container = this._div('ol-box', {
            opacity: 0,
            display: 'none',
            zIndex: this.opt.zIndex++
        });

        $(document.body).append(this.bg);
        $(document.body).append(this.container);

        var self = this;
        this.arrl = this._div('arr arrl').appendTo(this.container).css({
            opacity: 0,
            display: 'none'
        }).bind(window.tt.is.mouseEvents, {
            dir: false
        }, function(e) {
            self.m_arr(e);
        });
        this.arrr = this._div('arr arrr').appendTo(this.container).css({
            opacity: 0,
            display: 'none'
        }).bind(window.tt.is.mouseEvents, {
            dir: true
        }, function(e) {
            self.m_arr(e);
        });
        this.closeBtn = this._div('arr close').appendTo(this.container).bind(window.tt.is.mouseEvents, function(e) {
            self.m_close(e);
        });
        this.container.bind(window.tt.is.click, function(e) {
            if (e.target == this) self.close();
        });

        this.act = false;
        this.overlap = [this];
        this.overlapByMode = [];

        this.history = [];
    },
    processOverlaps: function(element) {
        if (typeof element == _un_) element = $(document.body);

        var overlaps = $('.overlaps');
        for (var i = 0, count = overlaps.length; i < count; i++)
            this.processOverlap($(overlaps[i]));
    },
    processOverlap: function(element) {
        var mode = element.attr('mode');
        var grp = parseInt(element.attr('grp'));
        var tid = element.attr('tid');
        var modal = parseInt(element.attr('modal'));
        var cycle = parseInt(element.attr('nocycle')) ? false : true;

        var overlapData = {
            element: element,
            mode: mode,
            modal: modal,
            grp: grp,
            tid: tid,
            cycle: cycle,
            autocreate: false,
            autoshow: false
        };
        return this.createOverlapWithData(overlapData);
    },
    createOverlapWithData: function(overlapData) {
        var id = this.overlap.length;
        overlapData._delegate = this;
        overlapData.id = id;
        if (overlapData.cycle) {
            if (typeof this.overlapByMode[overlapData.mode] == _un_) this.overlapByMode[overlapData.mode] = [];
            overlapData.pos = this.overlapByMode[overlapData.mode].length;
        }

        this.overlap[id] = new Overlap(overlapData);

        if (overlapData.cycle)
            this.overlapByMode[overlapData.mode].push(this.overlap[id]);

        return this.overlap[id];
    },
    switchOverlap: function(dir, cb) {
        var pos = this.overlap[this.act].opt.pos + (dir ? 1 : -1);
        var min = 0;
        var max = this.overlapByMode[this.overlap[this.act].opt.mode].length - 1;
        if (pos < min) pos = max;
        else if (pos > max) pos = min;
        var id = this.overlapByMode[this.overlap[this.act].opt.mode][pos].opt.id;

        this.open(id, cb);
    },
    switchArrows: function(dir, cb) {
        if (this.opt._arrows == dir) return;
        this.switchOpacity(this.arrl, dir, false);
        this.switchOpacity(this.arrr, dir, cb);
        this.opt._arrows = dir;
    },
    revealStage: function() {
        if (this.opt.opened) return false;

        this.opt.opened = true;
        __app__.setFixedContent(true);
        this.bg.stop().css({
            display: 'block',
            opacity: 0
        }).animate({
            opacity: this.opt.bgOpacity
        }, this.opt.duration, this.opt.easing);
        this.container.stop().css({
            display: 'block',
            opacity: 0
        }).animate({
            opacity: 1
        }, this.opt.duration, this.opt.easing);

        return true;
    },
    open: function(id, cb) {
        if (__app__ && __app__.WCPSlider) __app__.WCPSlider.stopAutoSwitch();

        this.resize();
        if (this.act == id) return;
        var currentID = this.act;
        this.close(null, true);

        this.revealStage();

        if (typeof this.overlap[id] !== _un_) {
            if (this.overlap[id].opt.modal && (currentID !== false))
                this.history.push(currentID);

            this.act = id;
            this.switchArrows(this.overlap[id].opt.cycle && (this.overlapByMode[this.overlap[id].opt.mode].length > 1));

            window.scrollTo(0, 0);
            this.overlap[id].open(cb);

            return true;
        }

        if (window.console) console.log('Error showing "' + id + '" overlap.');
    },
    close: function(id, switching, cb) {
        if (this.history.length) {
            id = this.history.pop();
            this.open(id);
            return;
        }

        if (typeof id == _un_) id = this.act || false;
        if (this.act) {
            this.overlap[this.act].close(switching ? cb : null);
            this.act = false;
        }

        if (!switching) {
            window.location.hash = '';
            this.bg.stop().animate({
                opacity: 0
            }, this.opt.duration, this.opt.easing, function() {
                $(this).css({
                    display: 'none'
                });
            });
            this.container.stop().animate({
                opacity: 0
            }, this.opt.duration, this.opt.easing, function() {
                $(this).css({
                    display: 'none'
                });
                __app__.setFixedContent(false);
                if (typeof cb == _fn_) cb();
            });
            this.opt.opened = false;
            this.history = [];
        }
    },
    resize: function() {
        var ww = $(window).width();
        var wh = $(window).height();
        var arrTop = 180; //Math.round( ( wh - 58 ) / 2 );

        this.arrl.css({
            position: 'fixed',
            top: arrTop,
            left: Math.round(ww / 2) - 480
        });
        this.arrr.css({
            position: 'fixed',
            top: arrTop,
            left: Math.round(ww / 2) - 58 + 480
        });
        this.closeBtn.css({
            position: 'fixed',
            top: 108,
            left: Math.round(ww / 2) - 58 + 480
        });
    },
    m_arr: function(e) {
        var dir = e.data.dir;
        var arr = dir ? this.arrr : this.arrl;

        switch (e.type) {
            case 'click':
                this.switchOverlap(dir);
                break;
            case 'mouseenter':
                break;
            case 'mouseleave':
                break;
        }
    },
    m_close: function(e) {
        switch (e.type) {
            case 'click':
                this.close();
                break;
            case 'mouseenter':
                break;
            case 'mouseleave':
                break;
        }
    },
    hashHandler: function(hash) {
        if (hash.substr(0, 1) == '#')
            hash = hash.substr(1);

        if (hash.length) {
            var hashData = hash.toString().split(':');
            switch (hashData[0]) {
                case 'book':
                case 'article':
                case 'event':
                case 'projectObject':
                    this.createOverlapWithData({
                        element: $('<div></div>'),
                        mode: hashData[0],
                        tid: hashData[1],
                        modal: false,
                        cycle: false,
                        autoload: true,
                        autoshow: true
                    });
                    break;
            }
        }
    }
});

var Overlap = BaseClass.extend({
    init: function(opt) {
        this.element = false;
        this.delegate = false;
        this.opt = {
            mode: false,
            tid: false,
            grp: false,

            autoload: false,
            autoshow: true,

            created: false,
            loaded: false,
            loading: false,
            opened: false,

            duration: 400,
            easing: 'swing',
            appendData: {}
        };
        this.setOptions(opt);

        if (!this.element) return;
        if (parseInt(this.element.attr('overlap-id'))) return;
        this.element.attr('overlap-id', this.opt.id);

        if (this.element.hasClass('overlaps'))
            this.element.removeClass('overlaps');

        if (this.opt.mode == 'enqueue')
            this.element.css({
                cursor: 'pointer'
            }).bind(tt.is.click, {
                id: this.opt.id
            }, function(e) {
                window.overlaps.open(e.data.id);
            });

        if (this.opt.autoload)
            this.create();
    },
    create: function() {
        var self = this;
        this.overlapElement = this._div('ol-w').appendTo(window.overlaps.container);
        this.page = this._div('ol-page').appendTo(this.overlapElement);

        this.opt.created = true;

        if (this.opt.autoload) this.load();
    },
    load: function(cb, appendData) {
        if (this.opt.loading) return;
        this.opt.loading = true;

        if (!this.opt.created)
            this.create();

        this.page.empty();

        var data = {
            grp: this.opt.grp,
            tid: this.opt.tid,
            cmd: 'overlap',
            ajax: 1
        };

        switch (this.opt.mode) {
            case 'event':
                this.opt.url = '/events/' + this.opt.tid;
                break;
            case 'project':
                this.opt.url = '/projects/' + this.opt.tid;
                break;
            case 'book':
                this.opt.url = '/library/literature/' + this.opt.tid;
                break;
            case 'article':
                this.opt.url = '/library/publications/' + this.opt.tid;
                break;
            case 'projectObject':
                this.opt.url = '/projects/' + this.opt.tid;
                data.objectGrp = parseInt(this.element.attr('objectGrp'));
                break;
            case 'enqueue':
                this.opt.url = '/library/literature/' + this.opt.tid;
                data.cmd = 'queue-enqueue';
                data.tid = this.opt.tid;
                data.grp = this.opt.grp;
                data.step = 1;
                break;
            default:
                return;
                break;
        }

        if (typeof appendData == _un_)
            appendData = {};
        else
            for (var k in appendData)
                data[k] = appendData[k];

        var self = this;
        this.contentBlocks = [];
        this.withHead = false;
        this.headHTML = false;
        if (this.overlapHeadCnt) this.overlapHeadCnt.remove();

        $.ajax({
            url: this.opt.url + '.' + data.cmd,
            data: data,
            type: appendData.POST ? 'POST' : 'GET',
            dataType: 'json',
            context: this
        })
            .done(function(data) {
                if (data.status > 0)
                    return;

                for (var i = 0, count = data.blocks.length; i < count; i++)
                    this.contentBlocks.push($(data.blocks[i]));

                this.withHead = (typeof data.head != _un_) && data.head.length;
                if (this.withHead) this.headHTML = data.head || false;

                this.loaded(cb);
            })
            .fail(function() {
                if (typeof cb == _fn_) cb(this, false);
                if (window.console) console.log('Error loading overlap content.');
            })
            .always(function() {
                this.opt.loading = false;
            });
    },
    loaded: function(cb) {
        for (var i = 0, count = this.contentBlocks.length; i < count; i++)
            this.contentBlocks[i].appendTo(this.page);

        window.overlaps.processOverlaps(this.page);
        __app__.processElement(this.page);

        if (this.withHead) {
            this.overlapHeadCnt = $('<div></div>').addClass('ol-head-container').html(this.headHTML).appendTo(window.overlaps.container);
            this.setHeadEvents();
        }

        var self = this;

        var elm;
        elm = this.page.find('.btn4func');
        for (var i = 0, count = elm.length; i < count; i++) {
            var btn4func = $(elm[i]);
            var func = btn4func.attr('func');
            if (typeof self[func] == _fn_) {
                btn4func.bind(window.tt.is.click, {
                    func: func
                }, function(e) {
                    self[e.data.func]();
                });
            }
        }

        this.opt.loaded = true;
        this.resize();

        if (typeof cb == _fn_) cb(this, true);

        if (this.opt.autoshow) {
            this.opt.autoshow = false;
            this.open();
        }
    },
    setHeadEvents: function() {
        var elm;
        elm = this.overlapHeadCnt.find('.smaller');
        if (elm.length) elm.bind(window.tt.is.click, function(e) {
            __app__.adjustFontSize(false);
        });

        elm = this.overlapHeadCnt.find('.bigger')
        if (elm.length) elm.bind(window.tt.is.click, function(e) {
            __app__.adjustFontSize(true);
        });

        elm = this.overlapHeadCnt.find('.pdf')
        if (elm.length) elm.bind(window.tt.is.click, {
            elm: elm,
            url: this.opt.url
        }, function(e) {
            window.open(e.data.url + '.pdf', "_blank");
        });

        elm = this.overlapHeadCnt.find('.print')
        if (elm.length) elm.bind(window.tt.is.click, {
            elm: elm,
            url: this.opt.url
        }, function(e) {
            window.open(e.data.url + '.print', "_blank");
        });

        elm = this.overlapHeadCnt.find('.bookmark')
        if (elm.length) elm.bind(window.tt.is.click, {
            elm: elm
        }, function(e) {
            __app__.bookmark(e.data);
        });
    },
    resize: function() {
        var display = this.overlapElement.css('display');
        this.overlapElement.css({
            display: 'block'
        });

        var height = this.overlapElement.outerHeight(true);
        if (height < (__app__.wh - 88)) {
            // top : Math.round((__app__.wh - height)/2)
            this.overlapElement.css({
                position: 'absolute',
                top: 0,
                left: Math.round((__app__.ww - 810) / 2)
            });
        } else {
            this.overlapElement.css({
                position: 'relative',
                top: 'auto',
                left: 'auto'
            });
        }

        this.overlapElement.css({
            display: display
        });
    },
    open: function(cb) {
        var self = this;
        var complete = function() {
            if (typeof cb == _fn_) cb(self);
        }

        if (!this.opt.loaded) {
            this.opt.autoshow = true;
            this.load();
            return;
        }

        if (this.withHead) {
            this.overlapHeadCnt.css({
                display: 'block',
                opacity: 0
            }).animate({
                opacity: 1
            }, this.opt.duration, this.opt.easing, function() {});
        }

        switch (this.opt.mode) {
            case 'book':
            case 'event':
            case 'article':
            case 'projectObject':
                window.location.hash = this.opt.mode + ':' + this.opt.tid;
                break;
        }

        if (!this.opt.opened) {
            this.opt.opened = true;
            this.overlapElement.stop().css({
                opacity: 0,
                display: 'block'
            }).animate({
                opacity: 1
            }, this.opt.duration, this.opt.easing, function() {
                complete();
            });
        } else {
            complete();
        }
    },
    close: function(cb) {
        var self = this;
        var complete = function() {
            if (typeof cb == _fn_) cb(self);
        }

        if (this.withHead) {
            this.overlapHeadCnt.animate({
                opacity: 0
            }, this.opt.duration, this.opt.easing, function() {
                $(this).css({
                    display: 'none'
                });
            });
        }

        if (this.opt.opened) {
            this.opt.opened = false;
            this.overlapElement.stop().animate({
                opacity: 0
            }, this.opt.duration, this.opt.easing, function() {
                $(this).css({
                    display: 'none'
                });
                complete();
            });
        } else {
            complete();
        }
    },
    agreeWithRules: function() {
        this.load(null, {
            step: 2
        });
    },
    sendEnqueueForm: function() {
        var first_name = this.page.find('.enqueue-first_name');
        var sencond_name = this.page.find('.enqueue-second_name');
        var mail = this.page.find('.enqueue-mail');

        if (first_name.val() < 2) {
            first_name.focus();
            alert('Вы не указали имя');
            return;
        }
        if (sencond_name.val() < 2) {
            sencond_name.focus();
            alert('Вы не указали фамилию');
            return;
        }
        if (!mailtest(mail.val())) {
            mail.focus();
            alert('Вы не указали имя');
            return;
        }

        var data = {
            POST: true,
            first_name: first_name.val(),
            second_name: sencond_name.val(),
            mail: mail.val(),
            step: 3
        };

        if (data.first_name.length && data.second_name.length && data.mail.length) {
            this.load(null, data);
        }
    }
});
var RadioInput = BaseClass.extend({
    radioInputs: false,
    init: function(opt) {
        this.element = false;
        this.opt = {
            onChange: false
        };
        this.setOptions(opt);

        if (!RadioInput.radioInputs) RadioInput.radioInputs = [];
        if (!this.element) return;

        this.opt.id = this.element.attr('data-id');
        if (this.opt.id) RadioInput.radioInputs[this.opt.id] = this;

        var elm = this.element.find('label');
        this.label = elm.length ? elm : false;
        this.radio = false;

        this.checked = -1;
        this.cVal = 0;

        if (this.label) {
            for (var i = 0, count = this.label.length; i < count; i++) {
                var label = $(this.label[i]);
                var elm = label.find('input');
                var radio = elm.length ? elm : false;
                if (radio) {
                    this.generateRadio(i, label, radio);
                }
            }
        }
    },
    getById: function(id) {
        return RadioInput.radioInputs[id] ? RadioInput.radioInputs[id] : false;
    },
    onChange: function(fn) {
        this.opt.onChange = (typeof fn == _fn_) ? fn : false;
        return !!this.opt.onChange;
    },
    generateRadio: function(id, label, radio) {
        if (!this.radio) this.radio = [];

        var item = {
            id: id,
            label: label,
            radio: radio,
            value: radio[0].value
        };

        var fakeInput = $('<div></div>').css({
            position: 'relative',
            width: 15,
            height: 15,
            margin: '5px 0px 5px 0px',
            backgroundColor: '#b1c0c7',
            borderRadius: 8,
            cursor: 'pointer'
        }).appendTo(this.element);
        item.fakeInput = fakeInput;

        var checked = radio.attr('checked');
        if (checked) {
            this.checked = id;
            this.cVal = item.value;
        }

        var fakeInputDot = $('<div></div>').css({
            position: 'absolute',
            top: 5,
            left: 5,
            width: 5,
            height: 5,
            backgroundColor: '#ffffff',
            display: (checked ? 'block' : 'none')
        }).appendTo(fakeInput);
        item.fakeInputDot = fakeInputDot;

        var fakeInputText = $('<div></div>').css({
            position: 'absolute',
            top: -1,
            left: 20,
            color: '#a5b5c5'
        }).html(label.text()).appendTo(fakeInput);
        item.fakeInputText = fakeInputText;

        label.css({
            display: 'none'
        });

        this.radio.push(item);

        var self = this;
        fakeInput.bind('click mouseenter mouseleave', {
            id: id
        }, function(e) {
            self.mouse(e);
        });
    },
    mouse: function(e) {
        var id = e.data.id;
        var item = this.radio[id];

        switch (e.type) {
            case 'click':
                if (this.checked == id) return;
                if (this.checked >= 0) {
                    this.radio[this.checked].fakeInputDot.css({
                        display: 'none'
                    });
                }

                this.radio[id].fakeInputDot.css({
                    display: 'block'
                });
                this.checked = id;
                this.cVal = item.value;

                if (this.opt.onChange)
                    this.opt.onChange(this, this.cVal);

                break;
            case 'mouseenter':
                break;
            case 'mouseleave':
                break;
        }
    }
});

var RadioInputClass = new RadioInput();
var Slider = BaseClass.extend({
    __className: 'Slider',
    init: function(opt) {
        this._id = false;
        this.inited = false;

        this.id = 0;
        this.element = false;
        this.opt = {
            itemClass: 'SliderItem',
            dotsClass: 'SliderDots',
            arrsClass: 'SliderArrows',
            stageSelector: '.stage',
            itemSelector: '.item',
            withResizeEvent: true
        };
        this.setOptions(opt);

        if (!this.put()) return;

        this.pos = 0;
        this.item = [];
        this.count = 0;

        this.switching = false;

        this.create();
    },
    create: function() {
        var elm;
        var self = this;

        this.stage = this.element.children(this.opt.stageSelector);
        if (this.stage.length) {
            this.stage = $(this.stage[0]);
            elm = this.stage.children(this.opt.itemSelector);
            if (elm) {
                for (var i = 0; i < elm.length; i++) {
                    var obj = $(elm[i]);
                    var item = new window[this.opt.itemClass]({
                        _id: i,
                        _element: obj,
                        _delegate: this
                    });
                    if (!item.inited) {
                        item.remove();
                        continue;
                    }
                    this.item.push(item);
                    this.count++;
                }
            }

            if (this.count > 1)
                this.stage.bind('click', function() {
                    self.nextItem();
                });
        }

        this.arrows = new window[this.opt.arrsClass]({
            _element: this.element,
            _delegate: this
        });

        elm = this.find(this.element, '.dots');
        this.dots = elm ? new window[this.opt.dotsClass]({
            _element: elm,
            _delegate: this
        }) : false;

        if (this.withResizeEvent)
            $(window).bind('appResize', function(e, ww, wh) {
                self.resize(ww, wh);
            });

        this.resize();

        this.inited = true;
    },
    nextItem: function() {
        var pos = this.pos + 1;
        if (pos >= this.count) pos = 0;
        this.switchItem(pos, true);
    },
    prevItem: function() {
        var pos = this.pos - 1;
        if (pos < 0) pos = this.count - 1;
        this.switchItem(pos, false);
    },
    switchItem: function(pos, dir, quick) {
        if (this.switching) return;
        this.switching = true;

        var curItem = this.item[this.pos];
        var nxtItem = this.item[pos];

        var self = this;
        this.pos = pos;

        curItem.hide(dir, quick);
        nxtItem.show(dir, quick, function() {
            self.switching = false;
        });
    },
    resize: function(ww, wh) {
        var width = this.stage.width();
        var height = this.stage.height();
        $(this.item).each(function() {
            this.resize(width, height);
        });
    },
    remove: function() {
        for (var i = 0; i < this.item.length; i++) this.item[i].remove();
        if (this.arrows) this.arrows.remove();
        if (this.dots) this.dots.remove();
        this.rm();
    }
});

var SliderSection = Slider.extend({
    resize: function(ww, wh) {
        this.width = ww;
        this.height = wh;

        this.stage.css({
            width: this.width,
            height: this.height
        });
        $(this.item).each(function() {
            this.resize(this.width, this.height);
        });
    },
    show: function(dir, quick, cb) {
        if (quick) {
            this.element.css({
                display: 'block',
                left: 0
            });
            if (typeof cb == _fn_) cb();
        } else {
            this.element.stop().css({
                left: dir ? this.width : -this.width,
                display: 'block'
            })
                .animate({
                    left: 0
                }, this.opt.duration, this.opt.easing, function() {
                    if (typeof cb == _fn_) cb();
                });
        }
    },
    hide: function(dir, quick, cb) {
        if (quick) {
            this.element.css({
                left: dir ? -this.width : this.width,
                display: 'none'
            });
            if (typeof cb == _fn_) cb();
        } else {
            this.element.stop().animate({
                left: dir ? -this.width : this.width
            }, this.opt.duration, this.opt.easing, function() {
                $(this).css({
                    display: 'none'
                });
                if (typeof cb == _fn_) cb();
            });
        }
    }
});

var SliderItem = BaseClass.extend({
    __className: 'SliderItem',
    init: function(opt) {
        this._id = false;
        this.inited = false;

        this.id = 0;
        this.delegate = false;
        this.element = false;
        this.opt = {
            duration: 450,
            easing: 'swing'
        };
        this.setOptions(opt);

        if (!this.put()) return;

        this.block = [];

        this.img = {
            obj: false,
            width: 0,
            height: 0,
            loaded: false
        };

        this.width = 0;
        this.height = 0;

        this.create();
    },
    create: function() {
        var elm;
        var self = this;

        if (this.id != this.delegate.pos)
            this.element.css({
                left: __app__.ww
            });

        elm = this.element.children('img');
        if (!elm.length) {
            this.img = false;
        } else {
            var img = elm[0];
            this.img.obj = $(img);
            if (img.complete || img.height) this.imgLoaded({
                type: 'load'
            });
            else this.img.obj.bind('load error', function(e) {
                self.imgLoaded(e);
            });
        }

        this.inited = true;
    },
    imgLoaded: function(e) {
        switch (e.type) {
            case 'error':
                if (this.img.obj) this.img.obj.remove();
                this.img = false;
                break;
            case 'load':
                this.img.loaded = true;
                this.img.width = this.img.obj[0].width;
                this.img.height = this.img.obj[0].height;
                this.resize();
                break;
        }
    },
    show: function(dir, quick, cb) {
        if (quick) {
            this.element.css({
                display: 'block',
                left: 0
            });
            if (typeof cb == _fn_) cb();
        } else {
            this.element.stop().css({
                left: dir ? this.width : -this.width,
                display: 'block'
            })
                .animate({
                    left: 0
                }, this.opt.duration, this.opt.easing, function() {
                    if (typeof cb == _fn_) cb();
                });
        }
    },
    hide: function(dir, quick, cb) {
        if (quick) {
            this.element.css({
                left: dir ? -this.width : this.width,
                display: 'none'
            });
            if (typeof cb == _fn_) cb();
        } else {
            this.element.stop().animate({
                left: dir ? -this.width : this.width
            }, this.opt.duration, this.opt.easing, function() {
                $(this).css({
                    display: 'none'
                });
                if (typeof cb == _fn_) cb();
            });
        }
    },
    resize: function(ww, wh) {
        this.width = ww;
        this.height = wh;

        this.element.css({
            width: this.width,
            height: this.height
        });

        if (this.img && this.img.loaded)
            this.reposObject(this.img, {
                ww: this.width,
                wh: this.height
            });
    },
    remove: function() {
        this.rm();
    }
});

var SliderDots = BaseClass.extend({
    init: function(opt) {
        this.delegate = false;
        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        this.act = 0;
        this.dot = [];

        this.create();
    },
    create: function() {
        var self = this;

        var elm = this.find(this.element, '.dot');
        if (elm) {
            for (var i = 0; i < elm.length; i++) {
                var dot = $(elm[i]).bind('click', {
                    id: i,
                    dot: dot
                }, function(e) {
                    self.mouseDot(e);
                });
                this.dot.push(dot);
            }
        }
    },
    mouseDot: function(e) {
        var id = e.data.id;
        var dot = this.dot[id];

        switch (e.type) {
            case 'click':
                if (this.act == id) return;

                this.dot[this.act].removeClass('act');
                if (!dot.hasClass('act')) dot.addClass('act');

                this.act = id;
                break;
        }
    },
    remove: function() {

    }
});

var SliderArrows = BaseClass.extend({
    init: function(opt) {
        this.delegate = false;
        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        var elm;

        elm = this.find(this.element, '.arrl');
        this.arrl = elm ? elm : false;

        elm = this.find(this.element, '.arrr');
        this.arrr = elm ? elm : false;

        if (this.arrl && this.arrr)
            this.create();
    },
    create: function() {
        var self = this;
        if (this.arrl) this.arrl.bind('click mouseenter mouseleave', {
            dir: false
        }, function(e) {
            self.mouseArrow(e);
        });
        if (this.arrr) this.arrr.bind('click mouseenter mouseleave', {
            dir: true
        }, function(e) {
            self.mouseArrow(e);
        });
    },
    mouseArrow: function(e) {
        var dir = e.data.dir;
        var arr = dir ? this.arrr : this.arrl;

        switch (e.type) {
            case 'click':
                if (dir) this.delegate.nextItem();
                else this.delegate.prevItem();
                break;
            case 'mouseenter':
                break;
            case 'mouseleave':
                break;
        }
    },
    remove: function() {
        if (this.arrl) this.arrl.unbind('click mouseenter mouseleave');
        if (this.arrr) this.arrr.unbind('click mouseenter mouseleave');
    }
});
var WNDController = BaseClass.extend({
    init: function(opt) {
        this.element = false;
        this.opt = {
            bgOpacity: 0.5,
            duration: 100,
            easing: 'easeInOutQuint',
            minWidth: 300,
            maxWidth: 960
        };
        this.setOptions(opt);

        this.bg = $('<div></div>', {
            id: 'WNDbg'
        }).css({
            opacity: this.opt.bgOpacity,
            display: 'none'
        })
        this.cnt = $('<div></div>', {
            id: 'WNDCnt'
        }).css({
            display: 'none'
        });
        this.visible = false;

        this.activeWnd = false;
        this.wnd = [];

        this.ww = 0;
        this.wh = 0;

        var self = this;
        $(window).resize(function() {
            self.resize();
        });
        this.cnt.bind('click touchend', function(e) {
            if (e.target == this)
                self.close();
        });
    },
    create: function() {
        $(document.body).append(this.bg).append(this.cnt);
        this.resize();
        return this;
    },
    resize: function() {
        this.ww = $(window).width();
        this.wh = $(window).height();

        if (this.ww < this.opt.maxWidth)
            this.opt.maxWidth = this.ww - 40;

        this.bg.css({
            width: this.ww,
            height: this.wh
        });
        this.cnt.css({
            width: this.ww,
            height: this.wh
        });
    },
    reg: function(id, opt) {
        if (this.wnd[id]) return this.wnd[id];

        if (typeof opt == _un_) opt = {};
        opt._delegate = this;
        opt._id = id;

        var wnd = new WNDItem(opt);
        this.wnd[id] = wnd;
        return wnd;
    },
    drop: function(id) {
        if (!this.wnd[id]) return;
        if (this.wnd[id] == this.activeWnd)
            this.activeWnd = null;

        this.wnd[id].destroy();
        this.wnd[id] = null;
        delete this.wnd[id];
    },
    show: function(cb) {
        __app__.setFixedContent(true);

        var self = this;
        this.visible = true;
        this.bg.css({
            opacity: 0,
            display: 'block'
        }).animate({
            opacity: this.opt.bgOpacity
        }, this.opt.duration, this.opt.easing);
        this.cnt.css({
            opacity: 0,
            display: 'block'
        }).animate({
            opacity: 1
        }, this.opt.duration, this.opt.easing, function() {
            if (typeof cb == _fn_) cb();
        });
    },
    close: function(cb) {
        var self = this;
        this.visible = false;
        this.bg.animate({
            opacity: 0
        }, this.opt.duration, this.opt.easing, function() {
            self.bg.css({
                display: 'none'
            });
        });
        this.cnt.animate({
            opacity: 0
        }, this.opt.duration, this.opt.easing, function() {
            self.cnt.css({
                display: 'none'
            });
            __app__.setFixedContent(false);
            if (typeof cb == _fn_) cb();
        });
    },
    prepareToSwitch: function(affectedWnd) {
        if (!this.visible) this.cnt.css({
            display: 'block'
        });
        for (var i = 0; i < affectedWnd.length; i++) {
            affectedWnd[i].recalc();
        }
        if (!this.visible) this.cnt.css({
            display: 'none'
        });
    },
    present: function(wnd, cb) {
        var affectedWnd = [];

        if (this.activeWnd)
            affectedWnd.push(this.activeWnd);

        affectedWnd.push(wnd);

        this.prepareToSwitch(affectedWnd);

        var self = this;
        if (!this.visible)
            this.show(function() {
                if (self.activeWnd)
                    self.activeWnd.hide();
                self.activeWnd = wnd;
                wnd.show();
            });
    }
});

var WNDItem = BaseClass.extend({
    init: function(opt) {
        this.id = false;
        this.delegate = false;

        this.opt = {
            duration: 100,
            easing: 'easeInOutQuint'
        };
        this.setOptions(opt);

        this.top = 0;
        this.left = 0;
        this.width = 0;
        this.height = 0;
        this.boxWidth = 0;
        this.boxHeight = 0;

        this.element = $('<div></div>').addClass('WND').css({
            display: 'none'
        }).appendTo(this.delegate.cnt);
        this.box = $('<div></div>').addClass('WNDBox').appendTo(this.element);

        this.visible = false;

        this.title = false;
        this.WNDTitle = false;
        this.WNDButtons = false;

        this.buttons = [];
    },
    recalc: function() {
        if (!this.visible) this.element.css({
            display: 'block'
        });

        var content = this.box.find('div');
        if (content) {
            content = $(content[0]);
            this.boxWidth = content.outerWidth(true);
            this.boxHeight = content.outerHeight(true);

            if (this.boxWidth > this.delegate.opt.maxWidth) this.boxWidth = this.delegate.opt.maxWidth;
            else if (this.boxWidth < this.delegate.opt.minWidth) this.boxWidth = this.delegate.opt.minWidth;

            this.box.css({
                width: this.boxWidth,
                height: this.boxHeight
            });
            this.width = this.element.outerWidth(true);
            this.height = this.element.outerHeight(true);

            this.top = Math.round((this.delegate.wh - this.height) / 2);
            this.left = Math.round((this.delegate.ww - this.width) / 2);

            if (this.top < 0 || ((this.top + this.height) > __app__.wh)) this.top = 0;

            this.element.css({
                top: this.top,
                left: this.left
            });
        }

        if (!this.visible) this.element.css({
            display: 'none'
        });
    },
    setTitle: function(title) {
        if (!this.WNDTitle)
            this.WNDTitle = $('<div><span></span></div>').addClass('WNDTitle').insertBefore(this.box);

        this.title = title;
        this.WNDTitle.find('span').html(this.title);

        return this;
    },
    addButton: function(title, cb, data) {
        if (!this.WNDButtons)
            this.WNDButtons = $('<div></div>').addClass('WNDButtons').appendTo(this.element);

        var id = this.buttons.length;
        var button = $('<div></div>').addClass('button').html(title).appendTo(this.WNDButtons);
        if (typeof cb == _fn_) {
            if (typeof data == _un_) data = {};
            data.id = id;
            data.wnd = this;
            button.bind('click', data, cb);
        }

        this.buttons.push({
            id: id,
            cb: cb,
            data: data,
            title: title,
            button: button
        });
    },
    loadHTML: function(url, data, cb) {
        if (typeof data == _un_) data = {};
        data.ajax = 1;

        var self = this;
        $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            data: data,
            beforeSend: function() {
                self.html('Loading...');
            }
        })
            .done(
                function(data, textStatus, xhr) {
                    if (data.status > 0) return;
                    self.html(data.html, cb);
                    self.delegate.present(self);
                }
            )
            .fail(this.ajaxFailFunction)
            .always(function() {});
    },
    html: function(html, cb) {
        this.box.html(html);
        this.recalc();

        if (typeof cb == _fn_)
            cb(this);
    },
    show: function(cb) {
        this.visible = true;
        this.element.css({
            opacity: 0,
            display: 'block',
            top: this.top,
            left: this.left,
        }).animate({
            opacity: 1
        }, this.opt.duration, this.opt.easing, function() {
            if (typeof cb == _fn_) cb();
        });
    },
    hide: function(cb) {
        this.visible = false;
        this.element.animate({
            opacity: 0
        }, this.opt.duration, this.opt.easing, function() {
            self.bg.css({
                display: 'none'
            });
            if (typeof cb == _fn_) cb();
        });
    },
    present: function(cb) {
        this.delegate.present(this, cb);
    },
    drop: function() {
        this.delegate.drop(this.id);
    },
    destroy: function() {
        for (var i = 0, count = this.buttons.length; i < count; i++)
            this.buttons[i].button.remove();
        delete this.buttons;

        if (this.WNDTitle) this.WNDTitle.remove();

        this.box.remove();
        this.element.remove();
    }
});
var contentBlockController = BaseClass.extend({
    __className: 'contentBlockController',
    init: function(opt) {
        this.element = false;
        this.inWnd = false;

        this.opt = {
            url: _adminPath + '/content',
            usr: 0,
            grp: 0,
            tools: true,
            destination: false
        };
        this.setOptions(opt);

        if (!this.element) this.element = $(document.body);

        if (!this.put()) return;

        var ident = this.element.attr('ident').toString().split('.');
        this.opt.usr = ident[0];
        this.opt.trg = ident[1];

        this.opt.destination = this.element.attr('destination') || false;
        if (this.opt.destination) this.opt.url += '/' + this.opt.destination;

        this.editingBlock = false;

        this.block = [];
        this.collector();

        this.xhr = false;

        var self = this;
        this.addButtons = $('<div></div>').addClass('addButtons').appendTo(this.element);

        this.addText = $('<div></div>', {
            title: "добавить текст"
        }).addClass('addBlock icon icon-text').html(' <span>текст</span>').bind('click', function() {
            self.addBlock(1);
        }).appendTo(this.addButtons);
        this.addPhoto = $('<div></div>', {
            title: "добавить фото"
        }).addClass('addBlock icon icon-photo').html(' <span>фото</span>').bind('click', function() {
            self.addBlock(2);
        }).appendTo(this.addButtons);
        this.addGallery = $('<div></div>', {
            title: "добавить галерею"
        }).addClass('addBlock icon icon-gallery').html(' <span>галерея</span>').bind('click', function() {
            self.addBlock(3);
        }).appendTo(this.addButtons);
        this.addVideo = $('<div></div>', {
            title: "добавить видео"
        }).addClass('addBlock icon icon-video').html(' <span>видео</span>').bind('click', function() {
            self.addBlock(4);
        }).appendTo(this.addButtons);

        this.reposing = false;
        this.reposingBlock = false;
        this.reposingBlockID = false;
        this.reposMarker = false;

        if (!this.reposMarker) {
            this.reposMarker = $('<div></div>').addClass('reposMarker').css({
                opacity: 0,
                zIndex: 10000
            });
            this.element.append(this.reposMarker);
        }
    },
    setEditingBlock: function(block) {
        if (this.editingBlock == block) return;
        if (this.editingBlock) this.editingBlock.view();
        this.editingBlock = block;
    },
    unsetEditingBlock: function(block) {
        if (this.editingBlock == block)
            this.editingBlock = false;
    },
    collector: function() {
        var elm = this.element.find('.cntBlk');
        for (var i = 0, count = elm.length; i < count; i++)
            this.processElement($(elm[i]));
    },
    processElement: function(elm) {
        var mode = elm.attr('mode');
        var id = this.block.length;
        this.block.push(new window['contentBlock' + mode]({
            _id: id,
            _delegate: this,
            element: elm,
            mode: mode,
            _inWnd: this.inWnd
        }));
    },
    addBlock: function(mode) {
        if (!mode) mode = parseInt(prompt('Режим:'));

        if (mode) {
            this.xhr = $.ajax({
                url: this.opt.url + '.create',
                type: 'GET',
                dataType: 'json',
                data: {
                    cmd: 'create',
                    usr: this.opt.usr,
                    trg: this.opt.trg,
                    mode: mode,
                    ajax: 1
                },
                context: this
            })
                .done(
                    function(data, textStatus, xhr) {
                        if (data.status > 0) return;

                        var elm = $(data.html);
                        if (this.addButtons) elm.insertBefore(this.addButtons);
                        else elm.appendTo(this.element);
                        this.processElement(elm);

                        if (this.inWnd) this.inWnd.recalc();
                    }
                )
                .fail(this.ajaxFailFunction)
                .always(function() {});
        }
    },
    __startRepos: function(block) {
        this.reposing = true;
        this.reposingBlock = block;
        this.reposingBlockID = block.id;

        for (var i = 0; i < this.block.length; i++) {
            if (this.block[i].id == block.id)
                continue;

            this.block[i].element.css({
                opacity: 0.50
            });
        }
    },
    __setReposMarkerTo: function(block, after) {
        var markerTop = (block.element.offset().top - this.element.offset().top) + (after ? block.element.height() : 0);
        this.reposMarker.css({
            opacity: 1,
            top: markerTop
        });
    },
    __swapBlocks: function(block1, block2) {

        this.block[block1.id] = block2;
        this.block[block2.id] = block1;

        var tmp = block2.id;
        block2.id = block1.id;
        block1.id = tmp;
    },
    __reposBlockTo: function(block, after) {
        if ((after && ((block.id + 1) == this.reposingBlockID)) || (!after && ((block.id - 1) == this.reposingBlockID))) {
            this.__stopRepos();
            return false;
        }

        if (after) this.reposingBlock.element.insertAfter(block.element);
        else this.reposingBlock.element.insertBefore(block.element);

        this.__swapBlocks(this.reposingBlock, block);
        block.updateEvents();

        var self = this;
        var data = block.collectAjaxData(block.collectData({
            cmd: 'repos',
            from: block.grp,
            to: this.reposingBlock.grp
        }));

        $.ajax(data)
            .done(function() {
                this.reposing = this.reposingBlock = this.reposingBlockID = false;
            })
            .fail(this.ajaxFailFunction)
            .always(function() {});

        this.__stopRepos();
    },
    __unsetReposMarker: function() {
        this.reposMarker.css({
            opacity: 0
        });
    },
    __stopRepos: function() {
        this.reposMarker.css({
            opacity: 0
        });
        for (var i = 0; i < this.block.length; i++)
            this.block[i].element.css({
                opacity: 1
            });
    }
});

var contentBlock = BaseClass.extend({
    __className: 'contentBlock',
    init: function(opt) {
        this.id = false;
        this.element = false;
        this.delegate = false;
        this.inWnd = false;
        this.state = 0;
        this.mo = false;

        this.opt = {};
        this.setOptions(opt);

        this.xhr = false;

        if (!this.put()) return;

        this.process();
    },
    process: function() {
        var ident = this.element.attr('ident').split('.');

        this.usr = ident[0];
        this.trg = ident[1];
        this.grp = ident[2];
        this.mode = parseInt(this.element.attr('mode'));

        this.busy = false;
        if (!this.state) this.state = parseInt(this.element.attr('state')) || 0;

        this.updateEvents();
    },
    processFileGallery: function() {
        var self = this;

        var elm = this.element.find('.form-gallery');
        this.fileGallery = elm.length ? elm : false;
        if (this.fileGallery) {
            elm = $('span.checkAllFiles');
            this.checkAllFiles = elm.length ? elm : false;
            elm = $('span.deleteCheckedFiles');
            this.deleteCheckedFiles = elm.length ? elm : false;

            if (this.checkAllFiles)
                this.checkAllFiles.bind('click', function() {
                    var hasChecked = false;
                    var boxes = self.fileGallery.find('input.cb-del');
                    boxes.each(function() {
                        if (hasChecked) {
                            return;
                        } else if (this.checked) {
                            hasChecked = true;
                        }
                    });
                    if (hasChecked) {
                        boxes.each(function() {
                            this.checked = false;
                        });
                    } else {
                        boxes.each(function() {
                            this.checked = true;
                        });
                    }
                });

            if (this.deleteCheckedFiles)
                this.deleteCheckedFiles.bind('click', function() {
                    var vals = [];
                    self.fileGallery.find('.cb-del').each(function() {
                        if (this.checked) {
                            vals.push(this.value);
                        }
                    });
                    if (vals.length) {
                        $.ajax(self.collectAjaxData(self.collectData({
                            cmd: 'file-delete',
                            ids: vals,
                            post: 1
                        })))
                            .done(function(data, textStatus, xhr) {})
                            .always(function() {
                                this.reloadFileGallery();
                            });
                    } else {
                        alert('Не выбрано ни одного файла для удаления');
                    }
                });
        }

        var fileUpload = this.element.find('.file-upload');
        if (fileUpload.length) {
            new BaseUploader({
                _element: $(fileUpload[0]),
                handle: 'file',
                url: this.delegate.opt.url + '/' + this.usr + '/' + this.trg + '/' + this.grp,
                cmd: 'upload',
                complete: function(uploader, data) {
                    self.reloadFileGallery();
                }
            });
        }
    },
    reloadFileGallery: function() {
        $.ajax(this.collectAjaxData(this.collectData({
            cmd: 'file-filegallery'
        })))
            .done(function(data) {
                this.element.find('.fileUpload').html(data.html);
                this.processFileGallery();
            });
    },
    updateEvents: function() {
        var self = this;
        this.element.unbind('click touchend mouseenter mouseleave mousemove');

        switch (this.state) {
            case 0:
                if (this.delegate.opt.tools) {
                    var tool = $('<div></div>')
                        .addClass('tool')
                        .html('<div class="icon icon-reload" title="обновить"></div> &nbsp; <div class="icon icon-repos" title="переместить"></div> &nbsp; <div class="icon icon-edit" title="редактировать"></div> &nbsp; <div class="icon icon-delete" title="удалить"></div>')
                        .appendTo(this.element);
                    tool.find('.icon-reload').bind(tt.is.click, function(e) {
                        self.view();
                    });
                    tool.find('.icon-repos').bind(tt.is.click, function(e) {
                        e.preventDefault();
                        e.stopPropagation();

                        self.delegate.__startRepos(self);
                    });
                    tool.find('.icon-edit').bind(tt.is.click, function(e) {
                        self.edit();
                    });
                    tool.find('.icon-delete').bind(tt.is.click, function(e) {
                        if (confirm('Удалить?')) self.drop();
                        else return;
                    });
                }

                this.element.bind('click touchend mouseenter mouseleave mousemove', function(e) {
                    self.mouseBlock(e);
                });

                var slider = this.find(this.element, '.cntBlk-slider');
                if (slider) {
                    new GalleryViewer({
                        _delegate: this,
                        _element: slider,
                        viewerMode: 'slider'
                    });
                }
                break;
            case 1:
                this.processFileGallery();

                this.saveButton = this.element.find('.saveBlock').bind(tt.is.click, function() {
                    self.save();
                });

                this.element.find('.cnt-fld').redactor({
                    lang: 'ru',
                    air: false,
                    autoresize: true,
                    buttons: ['html', '|', 'bold', 'italic', '|', 'link'],
                    airButtons: ['html', '|', 'bold', 'italic', '|', 'link']
                });
                break;
        }
    },
    collectData: function(data) {
        if (typeof data == _un_) data = {};
        data.usr = this.usr;
        data.trg = this.trg;
        data.grp = this.grp;

        return data;
    },
    collectAjaxData: function(data) {
        data.ajax = 1;

        return {
            url: this.delegate.opt.url + '/' + data.usr + '/' + data.trg + '/' + data.grp + '.' + data.cmd,
            data: data,
            type: data.post ? 'POST' : 'GET',
            dataType: 'json',
            context: this
        };
    },
    view: function() {
        if (this.busy) return;
        this.busy = true;

        this.delegate.unsetEditingBlock(this);

        var self = this;
        this.xhr = $.ajax(this.collectAjaxData(this.collectData({
            cmd: 'view'
        })))
            .done(
                function(data, textStatus, xhr) {
                    this.state = 0;
                    var element = $(data.html);
                    this.element.replaceWith(element);
                    this.element = $(element[0]);
                    this.process();

                    if (this.inWnd) this.inWnd.recalc();
                }
            )
            .fail(this.ajaxFailFunction)
            .always(function(xhr, textStatus) {
                this.busy = false;
            });
    },
    edit: function() {
        if (this.busy) return;
        this.busy = true;

        this.delegate.setEditingBlock(this);

        var self = this;
        this.xhr = $.ajax(this.collectAjaxData(this.collectData({
            cmd: 'edit'
        })))
            .done(
                function(data, textStatus, xhr) {
                    this.busy = false;
                    this.state = 1;

                    this.element.html(data.html);
                    this.updateEvents();

                    if (this.inWnd) this.inWnd.recalc();
                }
            )
            .fail(this.ajaxFailFunction)
            .always(function(xhr, textStatus) {
                this.busy = false;
            });
    },
    save: function() {
        if (this.busy) return;
        this.busy = true;

        var self = this;
        var ajaxData = this.collectData({
            cmd: 'save',
            post: 1
        });

        var style = this.element.find('.style-fld');
        var align = this.element.find('.align-fld');
        var cnt = this.element.find('.cnt-fld');
        var code = this.element.find('.code-fld');

        if (style.length) ajaxData.style = style.val();
        if (align.length) ajaxData.align = align.val();
        if (cnt.length) ajaxData.cnt = cnt.val();
        if (code.length) ajaxData.code = code.val();

        this.xhr = $.ajax(this.collectAjaxData(ajaxData))
            .done(function(data, textStatus, xhr) {
                this.busy = false;
                this.view();
            })
            .fail(this.ajaxFailFunction)
            .always(function(xhr, textStatus) {
                this.busy = false;
            });
    },
    drop: function() {
        if (this.busy) return;
        this.busy = true;

        this.xhr = $.ajax(this.collectAjaxData(this.collectData({
            cmd: 'drop',
            post: 1
        })))
            .done(function(data, textStatus, xhr) {
                this.busy = false;
                this.remove();
            })
            .fail(this.ajaxFailFunction)
            .always(function(xhr, textStatus) {
                this.busy = false;
            });
    },
    remove: function() {
        this.element.remove();
    },
    mouseBlock: function(e) {
        if (!this.delegate.reposing) return;

        switch (e.type) {
            case 'click':
            case 'touchend':
                if (this == this.delegate.reposingBlock) {
                    this.delegate.__stopRepos();
                    return;
                }

                var after = Math.round(this.element.offset().top + this.element.outerHeight() / 2) < e.pageY;
                this.delegate.__reposBlockTo(this, after);

                break;
            case 'mousemove':
                if (!this.mo) break;
            case 'mouseenter':
                this.mo = true;

                if (this.delegate.reposingBlock == this) return;
                var after = Math.round(this.element.offset().top + this.element.outerHeight() / 2) < e.pageY;
                this.delegate.__setReposMarkerTo(this, after);
                break;
            case 'mouseleave':
                this.mo = false;
                if (this.delegate.reposingBlock == this) return;
                this.delegate.__unsetReposMarker();
                break;
        }
    }
});

var contentBlock1 = contentBlock.extend({});
var contentBlock2 = contentBlock.extend({});
var contentBlock3 = contentBlock.extend({});
var contentBlock4 = contentBlock.extend({});
var contentBlockGallery = BaseClass.extend({
    __className: 'contentBlockGallery',
    init: function(opt) {
        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        if (!this.put()) return;

        this.act = -1;
        this.item = [];

        this.create();
    },
    create: function() {
        this.imgCnt = this._div(false, {
            position: 'relative',
            width: 736,
            height: 414,
            display: 'none',
            clear: 'both'
        }).insertAfter(this.element);
        this.img = $('<img></img>').appendTo(this.imgCnt);

        var self = this;
        var elm = this.element.find('div.cntBlkPV');
        if (elm.length) {
            for (var i = 0, count = elm.length; i < count; i++) {
                var obj = $(elm[i]);
                var item = {
                    id: i,
                    obj: obj,
                    imageSrc: obj.attr('img')
                };

                var width = obj.width();
                var height = obj.height();
                var border = $('<div></div>').css({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: height - 10,
                    width: width - 10,
                    border: '5px #32516e solid',
                    display: 'none'
                }).appendTo(obj);

                obj.bind(window.tt.is.mouseEvents, {
                    i: i,
                    border: border
                }, function(e) {
                    self.click(e);
                });
                this.item.push(item);
            }
        }
    },
    click: function(e) {
        switch (e.type) {

            case 'click':
            case 'touchend':
                if (e.data.i == this.act) {
                    this.imgCnt.slideUp();
                    this.act = -1;
                    return;
                } else {
                    this.imgCnt.css({
                        display: 'block'
                    });
                    this.act = e.data.i;
                }

                var item = this.item[e.data.i];
                this.img.attr('src', item.imageSrc);

                $('body,html').animate({
                    scrollTop: this.imgCnt.offset().top + this.imgCnt.height() - __app__.wh + 20
                });
                break;
            case 'mouseenter':
                e.data.border.css({
                    display: 'block'
                });
                break;
            case 'mouseleave':
                e.data.border.css({
                    display: 'none'
                });
                break;
        }
    }
});
var MAP_STYLES = [{
    "featureType": "administrative",
    "elementType": "all",
    "stylers": [{
        "visibility": "on"
    }, {
        "lightness": 33
    }]
}, {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [{
        "color": "#f2e5d4"
    }]
}, {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [{
        "color": "#c5dac6"
    }]
}, {
    "featureType": "poi.park",
    "elementType": "labels",
    "stylers": [{
        "visibility": "on"
    }, {
        "lightness": 20
    }]
}, {
    "featureType": "road",
    "elementType": "all",
    "stylers": [{
        "lightness": 20
    }]
}, {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [{
        "color": "#c5c6c6"
    }]
}, {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [{
        "color": "#e4d7c6"
    }]
}, {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [{
        "color": "#fbfaf7"
    }]
}, {
    "featureType": "water",
    "elementType": "all",
    "stylers": [{
        "visibility": "on"
    }, {
        "color": "#acbcc9"
    }]
}];

var Maps = BaseClass.extend({
    __className: 'Maps',
    init: function(opt) {
        this._id = false;
        this.inited = false;

        this.mobile = false;

        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        if (!this.put()) return;

        this.pos = 0;
        this.item = [];
        this.count = 0;
        this.switching = false;

        this.video = [];
        this.isPlaying = false;

        this.ContactsVideoMode = false;

        this.address = false;

        this.create();
    },
    infoBubbleText: {
        gz: '<div class="infoBubbleCnt">21 F, Pearl River Tower, No. 15,<br> West Zhujiang Road, Tianhe District,<br> Guangzhou, 510623</div>',
        msk: '<div class="infoBubbleCnt">105064, Москва, Нижний Сусальный пер.,<br>дом 5, строение 17</div>',
        hk: '<div class="infoBubbleCnt">4210, Office Tower, Convention Plaza,<br>1 Harbor Road Wanchai, Hong Kong</div>',
        vld: '<div class="infoBubbleCnt">Офисы 408, 409, 411,<br>ул. Пологая 3, г. Владивосток</div>',
        bla: '<div class="infoBubbleCnt">675000, Амурская обл.,<br> г. Благовещенск, ул. Набережная реки Зея,<br> д. 32, литер А.</div>',
        khv: '<div class="infoBubbleCnt">Офис 1, ул. Ленинградская 62В,<br>г. Хабаровск</div>'
    },
    infoBubbleTextMobile: {
        gz: 'Guangzhou city, Baiyun district,<br> Shijing ZhendaGang country,<br> Dagangxijie street 13',
        msk: '105064, Москва, Нижний Сусальный пер.,<br>дом 5, строение 17'
    },
    create: function() {
        var self = this;
        var elm;

        elm = this.find(this.element, '.item');
        if (elm) {
            for (var i = 0; i < elm.length; i++) {
                var obj = $(elm[i]);
                var geo = obj.attr('geo');
                var item = {
                    id: i,
                    obj: obj,
                    tid: obj.attr('tid'),
                    lat: obj.attr('lat'),
                    lng: obj.attr('lng'),
                    zoom: parseInt(obj.attr('zoom')) || 16,
                    geo: geo,
                    china: (geo == 'CN')
                };
                this.item.push(item);
            }
        }

        if (this.mobile) {
            this.address = $('#map-address');
            if (!this.address.length) this.address = false;
        }

        elm = $('#maps-video');
        if (elm.length) {
            this.mapsVideo = elm;
            this.ContactsVideoMode = this.mapsVideo.hasClass('contacts-mode');

            elm = this.find(this.mapsVideo, 'video');
            if (elm) {
                for (var i = 0; i < elm.length; i++) {
                    var obj = $(elm[i]);
                    var video = {
                        obj: obj,
                        width: 400,
                        height: 226,
                        isPlaying: false
                    };
                    video.obj.css({
                        display: 'none'
                    });
                    this.video.push(video);
                }
            }
        }

        this.count = this.item.length;

        var processItem = function(i, item) {
            if (item.china) return;

            item.obj.css({
                zIndex: i ? 'auto' : 10
            });
            item.mapPosition = new google.maps.LatLng(item.lat, item.lng);

            item.map = new google.maps.Map(item.obj[0], {
                zoom: item.zoom,
                center: item.mapPosition,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                panControl: false,
                zoomControl: true,
                scaleControl: false,
                mapTypeControl: false,
                streetViewControl: false,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL,
                    position: google.maps.ControlPosition.TOP_RIGHT
                }
            });

            // var styledMap = new google.maps.StyledMapType(MAP_STYLES, {name: "Transitplus"});
            // item.map.mapTypes.set('transitplus_style', styledMap);
            // item.map.setMapTypeId('transitplus_style');

            // if( item.tid == 'msk' ) {
            // 	var directionsDisplay = new google.maps.DirectionsRenderer();

            // 	var request = {
            // 		origin: new google.maps.LatLng(55.758348, 37.660288),
            // 		destination: new google.maps.LatLng(item.lat, item.lng),
            // 		travelMode: google.maps.DirectionsTravelMode.DRIVING
            // 	};

            // 	var directionsService = new google.maps.DirectionsService();
            // 	directionsService.route(request, function(response, status) {
            // 		if (status == google.maps.DirectionsStatus.OK) {
            // 			directionsDisplay.setDirections(response);
            // 		}
            // 	});

            // 	directionsDisplay.setMap(map);
            // }

            item.obj.css({
                opacity: i ? 0 : 1
            });

            var image = self.mobile ? {
                url: "/m/img/marker.png",
                size: new google.maps.Size(40, 54),
                scaledSize: new google.maps.Size(40, 54),
                origin: new google.maps.Point(0, 0)
            } : '/img/marker.png';

            item.marker = new google.maps.Marker({
                draggable: false,
                position: item.mapPosition,
                animation: self.mobile ? false : google.maps.Animation.DROP,
                icon: image
            });

            item.content = self.infoBubbleText[item.tid];

            google.maps.event.addListener(item.map, 'tilesloaded', function() {

                item.infoBubble = new ttInfoBubble(item);
                if (!self.mobile) {

                    item.firstRun = (i > 0);
                    if (i == 0) {
                        setTimeout(function() {
                            item.marker.setMap(item.map);
                            item.infoBubble.open();
                        }, 500);
                    }

                    google.maps.event.addListener(item.marker, 'click', function() {
                        item.infoBubble.open();
                    });

                } else {

                    item.marker.setMap(item.map);

                }

                tt.clrGM(item.obj);
                google.maps.event.clearListeners(item.map, 'tilesloaded');
            });
        }

        window.tt.GMapRequest(function() {
            for (var i = 0; i < self.count; i++) {
                processItem(i, self.item[i]);
            }
        });

        var dotID = 0;
        this.dots = $('#maps-menu');
        if (this.dots.length) {
            elm = this.dots.find('li');
            if (elm.length) {
                for (var i = 0; i < elm.length; i++) {
                    var obj = $(elm[i]);
                    if (!obj.hasClass('bull')) {
                        obj.bind('click', {
                            pos: dotID
                        }, function(e) {
                            self.switchMap(e.data.pos);
                        });
                        this.item[dotID].dot = obj;
                        dotID++;
                    }
                }
            }
        }

        $(window).bind('appScroll.' + this.__className, function(e, scrollTop) {
            self.updateScroll(scrollTop);
        });

        this.inited = true;
    },
    playVideo: function(pos) {
        if (!this.mapsVideo || !this.video.length) return;
        if (typeof this.video[pos] == _un_) return;

        var video = this.video[pos];
        if (video.isPlaying) return;

        video.obj[0].play();
        video.obj.css({
            display: 'block',
            opacity: 0,
            zIndex: 2
        }).animate({
            opacity: 1
        });
        video.isPlaying = true;
    },
    stopVideo: function(pos) {
        if (!this.mapsVideo || !this.video.length) return;
        if (typeof this.video[pos] == _un_) return;

        var video = this.video[pos];
        if (!video.isPlaying) return;

        video.obj.css({
            zIndex: 1
        }).animate({
            opacity: 0
        }, function() {
            this.pause();
            $(this).css({
                display: 'none'
            });
        });

        video.isPlaying = false;
    },
    switchMap: function(pos) {
        if (pos == this.pos) return;
        if (this.switching) return;

        this.switching = true;
        var self = this;

        var curItem = this.item[this.pos];
        var nxtItem = this.item[pos];

        if (this.isPlaying) {
            this.stopVideo(this.pos);
            this.playVideo(pos);
        }

        this.pos = pos;

        if (!nxtItem.dot.hasClass('act')) nxtItem.dot.addClass('act');
        curItem.dot.removeClass('act');

        //__app__.scrollTo( this.dots.offset().top - __app__.fMH );

        curItem.obj.stop().css({
            zIndex: 'auto'
        }).animate({
            opacity: 0
        }, 500, 'swing', function() {});

        if (self.address && (typeof this.infoBubbleTextMobile[nxtItem.tid] != _un_)) {
            self.address.html(this.infoBubbleTextMobile[nxtItem.tid]);
        }

        nxtItem.obj.stop().css({
            zIndex: 10,
            opacity: 0
        }).animate({
            opacity: 1
        }, 500, 'swing', function() {
            self.switching = false;
            if (nxtItem.firstRun) {
                if (!nxtItem.china && !self.mobile) {
                    nxtItem.infoBubble.open();
                }
                //nxtItem.marker.setMap(nxtItem.map);
                nxtItem.firstRun = false;
            }
        });
    },
    resize: function(ww, wh) {
        var itemHeight = __app__.wh - __app__.fMH - this.dots.outerHeight(true) - (__FOOTER__.miniFooter ? __FOOTER__.footerHeight : 0);

        this.element.css({
            width: ww,
            height: itemHeight
        });

        for (var i = 0; i < this.item.length; i++) {
            var item = this.item[i];
            item.obj.css({
                width: ww,
                height: itemHeight
            });
        }

        if (this.video.length) {
            // this.mapsVideo.css({ height : __app__.contactsHeight });
            for (var i = 0; i < this.video.length; i++) {
                var video = this.video[i];
                video.ww = ww;
                video.wh = __app__.contactsHeight;
                this.reposObject(video);
            }
        }

        if (this.ContactsVideoMode) {
            this.mapsVideoOffset = this.mapsVideo ? __FOOTER__.contentHeight : 0;
        } else {
            this.mapsVideoOffset = this.mapsVideo ? this.mapsVideo.offset().top : 0;
        }

        this.updateScroll(__app__.scrollTop);
    },
    updateScroll: function(scrollTop) {
        if (!this.mapsVideo) return;

        var outOfScreen;

        if (this.ContactsVideoMode) {
            outOfScreen = ((scrollTop + __app__.wh) < this.mapsVideoOffset);
        } else {
            outOfScreen = ((scrollTop + __app__.wh) < this.mapsVideoOffset) || (scrollTop > (this.mapsVideoOffset + __app__.contactsHeight - __app__.fMH));
        }

        if (outOfScreen && this.isPlaying) {
            for (var i = 0; i < this.video.length; i++)
                this.stopVideo(i);
            this.isPlaying = false;
        } else if (!outOfScreen && !this.isPlaying) {
            this.playVideo(this.pos);
            this.isPlaying = true;
        }
    },
    remove: function() {
        $(window).unbind('appScroll.' + this.__className);
        this.rm();
    }
});
var TransitVideo = BaseClass.extend({
    __className: 'TransitVideo',
    init: function(opt) {
        this._id = false;
        this.inited = false;

        this.element = false;
        this.opt = {
            delay: 10
        };
        this.setOptions(opt);

        this.opened = false;
        this.popup = false;
        this.triggers = false;
        this.videoPlayer = false;
        this.viewingTrigger = false;

        this.closeTriggerX = false;
        this.closeTrigger = false;

        this.create();
    },
    create: function() {

        var self = this;

        if (this.getCookie('hideTransitVideo')) {
            return false;
        }

        this.opened = false;
        this.popup = document.getElementById('transit-video-popup');
        this.trigger = document.querySelector('.js-transit-video-trigger');

        if (!(this.popup && this.trigger))
            return false;

        var delay = parseInt(this.trigger.getAttribute('trigger-delay'));
        if (delay) this.opt.delay = delay;

        if (!this.trigger)
            return false;

        var videoPlayerElement = document.querySelector('.js-transit-video-player');
        this.videoPlayer = new VideoPlayer({
            _element: videoPlayerElement
        });
        if (!this.videoPlayer._inited)
            return false;
        else
            this.videoPlayer.onReady = function() {
                if (self.opened) self.videoPlayer.play();
            };

        if (!this.popup)
            return false;

        this.clickZone = this.trigger.querySelector('.click-zone');
        if (this.clickZone)
            this.bindEvent(this.clickZone, 'click', function(e) {
                if (e.target == this)
                    self.openPopup();
            });

        this.bindEvent(this.popup, 'click', function(e) {
            if (this == e.target) self.closePopup();
        });

        this.close = this.popup.querySelector('.js-close');
        if (this.close) {
            this.bindEvent(this.close, 'click', function(e) {
                self.closePopup();
            });
        }

        var hideTrigger = function(e) {
            self.cancelEvent(e);
            self.hideTrigger();
        }

        this.closeTrigger = this.trigger.querySelector('.js-close-trigger');
        this.closeTriggerX = this.trigger.querySelector('.js-close-trigger-x');
        if (this.closeTrigger) this.bindEvent(this.closeTrigger, 'click', hideTrigger);
        if (this.closeTriggerX) this.bindEvent(this.closeTriggerX, 'click', hideTrigger);

        setTimeout(function() {
            self.addClass(self.trigger, 'view');
            self.viewingTrigger = true;
        }, this.opt.delay * 1000);

    },
    openPopup: function() {
        this.addClass(this.popup, 'opened');
        this.opened = true;
        __app__.setFixedContent(true);
        if (this.videoPlayer && this.videoPlayer.ready) {
            this.videoPlayer.resize();
            this.videoPlayer.play();
        }

        this.removeClass(this.trigger, 'view');
        this.viewingTrigger = false;
    },
    closePopup: function() {
        this.removeClass(this.popup, 'opened');
        __app__.setFixedContent(false);
        if (this.videoPlayer && this.videoPlayer.ready) this.videoPlayer.pause();

        this.addClass(this.trigger, 'view');
        this.viewingTrigger = true;
    },
    hideTrigger: function() {
        this.closePopup();

        this.removeClass(this.trigger, 'view');
        this.viewingTrigger = false;

        this.setCookie('hideTransitVideo', true, {
            expires: 1800
        });
    }
});

function ttInfoBubble(pin) {
    this.extend(ttInfoBubble, google.maps.OverlayView);

    this.pin = pin;
    this.lat = pin.lat;
    this.lng = pin.lng;
    this.pos = new google.maps.LatLng(pin.lat, pin.lng);
    this.mode = pin.mode || false;

    this.element = false;
    this.arrow = false;
    this.content = false;
    this.closeBtn = false;

    this.width = 0;
    this.height = 0;

    this.opened = false;
    this.switching = false;
};

ttInfoBubble.prototype.extend = function(obj1, obj2) {
    return (function(object) {
        for (var property in object.prototype) {
            this.prototype[property] = object.prototype[property];
        }
        return this;
    }).apply(obj1, [obj2]);
};

ttInfoBubble.prototype.onRemove = function() {
    this.element.css({
        display: 'none'
    });
};

ttInfoBubble.prototype.onAdd = function() {

    if (!this.element) {
        this.element = $('<div></div>').addClass('ttInfoBubble');
        switch (this.mode) {
            case 'warehouse':
                this.element.addClass('warehouse');
                break;
            default:
                break;
        }
        this.arrow = $('<div></div>').addClass('infoBubbleArrow').appendTo(this.element);

        this.content = $('<div></div>').addClass('infoBubbleCnt').appendTo(this.element);
        this.content.html(this.pin.content);

        var self = this;
        this.closeBtn = $('<div></div>').addClass('infoBubbleClose').appendTo(this.content).bind('click', function(e) {
            e.preventDefault();
            self.close();
        });

        var panes = this.getPanes();
        panes.overlayImage.appendChild(this.element[0]);
    }

    this.element.css({
        display: 'block',
        transform: 'scale(0)'
    });
    this.width = this.content.outerWidth(true);
    this.height = this.content.outerHeight(true);

    this.arrow.css({
        left: Math.round(this.width / 2) - 15,
        top: this.height - 15
    });
    this.height += 21;
};

ttInfoBubble.prototype.draw = function() {
    var overlayProjection = this.getProjection();
    var position = overlayProjection.fromLatLngToDivPixel(this.pos);
    var panes = this.getPanes();
    panes.overlayImage.style.left = position.x - Math.round(this.width / 2) + 'px';
    panes.overlayImage.style.top = position.y - this.height + 'px';
};

ttInfoBubble.prototype.open = function() {
    if (this.opened || this.switching) return false;
    this.opened = true;
    this.switching = true;

    this.setMap(this.pin.map);
    this.pin.marker.setMap(null);

    var self = this;
    window.setTimeout(function() {
        self.open_();
    }, 100);

    return true;
};

ttInfoBubble.prototype.open_ = function() {
    var self = this;
    this.element.css({
        transform: 'scale(0)'
    }).animate({
        transform: 'scale(1)'
    }, 200, 'easeInOutQuint', function() {
        self.opened = true;
        self.switching = false;
    });
};

ttInfoBubble.prototype.close = function(cb) {
    if (!this.opened || this.switching) {
        if (typeof cb == _fn_) cb();
        return false;
    }
    this.opened = false;
    this.switching = true;

    var self = this;
    this.element.animate({
        transform: 'scale(0)'
    }, 200, 'easeInOutQuint', function() {
        self.pin.marker.setMap(self.pin.map);
        self.close_(cb);
    });

    return true;
};

ttInfoBubble.prototype.close_ = function(cb) {
    this.setMap(null);

    this.opened = false;
    this.switching = false;

    if (typeof cb == _fn_) cb();

    return true;
};
var __Achievements__ = false;
var Achievements = BaseClass.extend({
    __className: 'Achievements',
    init: function(opt) {
        this._id = false;
        this.inited = false;

        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        if (!this.put()) return;

        this.item = [];

        this.dots = false;
        this.dot = [];
        this.pos = -1;
        this.dotsFixed = false;
        this.dotsHeight = 0;
        this.dotsAtTop = true;

        this.scrollingToNext = false;

        this.pageY = 0;
        this.height = 0;
        this.onceFixed = true;
        this.positioned = false;

        __Achievements__ = this;

        this.create();
    },
    create: function() {
        var self = this;
        var elm;

        this.stage = this.find(this.element, '.stage');

        elm = this.find(this.element, '.item');
        if (elm) {
            for (var i = 0; i < elm.length; i++) {
                var obj = $(elm[i]);
                var cnt = obj.find('.cnt');
                var h1 = cnt.find('.h1');
                var item = {
                    id: i,
                    obj: obj,
                    cnt: cnt,
                    h1: h1,
                    tmr: false,
                    curVal: 0,
                    value: parseInt(h1.attr('value')),
                    append: (h1.attr('append') || false)
                };
                this.initItem(item);

                item.obj.css({
                    opacity: 0
                });

                this.item.push(item);
            }
        }

        this.dots = this.find(this.element, '.dots');

        if (this.dots) {
            elm = this.find(this.dots, '.dot');
            if (elm) {
                for (var i = 0; i < elm.length; i++) {
                    var obj = $(elm[i]);

                    var dot = {
                        id: i,
                        obj: obj,
                        std: obj.find('.std'),
                        ovr: obj.find('.ovr'),
                        act: obj.find('.act'),
                        active: false
                    };
                    obj.bind('click mouseenter mouseleave', {
                        pos: i
                    }, function(e) {
                        self.mouseDot(e);
                    });
                    this.dot.push(dot);
                }
            }
        }

        this.element.bind('mousewheel', function(e) {

            if (self.onceFixed) return;

            var addition = Math.round(__app__.wh / 8);
            if ((__app__.scrollTop < self.fixStart + addition) || (__app__.scrollTop > self.fixEnd - addition)) {
                return;
            }

            if (self.scrollingToNext) {
                self.cancelEvent(e);
                return;
            }

            if (e.deltaY > 0) {

                var pos = self.pos - 1;
                if (pos < 0) return;

                __app__.scrollTo(self.pageY + pos * self.itemHeight - __app__.fMH, function() {
                    self.scrollingToNext = false;
                });

            } else {

                var pos = self.pos + 1;
                if (pos > self.item.length - 1) return;

                __app__.scrollTo(self.pageY + pos * self.itemHeight - __app__.fMH, function() {
                    self.scrollingToNext = false;
                });

            }

            self.scrollingToNext = true;
            self.cancelEvent(e);
        });

        $(window).bind('appScroll.' + this.__className + this._id, function(e, scrollTop) {
            self.updateScroll(scrollTop);
        });
        this.inited = true;
    },
    resize: function(ww, wh) {
        this.itemHeight = (wh - __app__.fMH);
        this.height = this.itemHeight * this.item.length;

        this.pageY = this.delegate.element.offset().top;

        if (!this.positioned) {
            this.positioned = true;
            this.onceFixed = false;
            this.element.css({
                display: 'block',
                opacity: 1,
                zIndex: 995,
                top: this.pageY
            });
            this.updateScroll(0);
        }

        this.fixStart = this.pageY - __app__.fMH;

        if (this.onceFixed) {
            this.fixEnd = this.fixStart + this.itemHeight - wh + __app__.fMH;
            this.delegate.element.css({
                width: ww,
                height: this.itemHeight
            });
            this.element.css({
                top: this.pageY
            });
        } else {
            this.fixEnd = this.fixStart + this.height - wh + __app__.fMH;
            this.delegate.element.css({
                width: ww,
                height: this.height
            });
        }

        this.element.css({
            width: ww,
            height: this.itemHeight
        });
        this.stage.css({
            width: ww,
            height: this.itemHeight
        });

        this.dotsHeight = this.dots.outerHeight(true);
        this.dotsTop = Math.round((this.itemHeight - this.dotsHeight) / 2);
        this.dots.css({
            top: this.dotsTop
        });

        for (var i = 0; i < this.item.length; i++) {
            var item = this.item[i];
            item.obj.css({
                display: 'block'
            });
            item.cntHeight = item.cnt.outerHeight(true);
            item.cntTop = Math.round((this.itemHeight - item.cntHeight) / 2);
            item.cntPageTop = this.pageY + this.itemHeight * i + item.cntTop;
            item.obj.css({
                width: ww,
                height: this.itemHeight,
                display: (this.pos == i) ? 'block' : 'none'
            });
            item.cnt.css({
                top: item.cntTop
            });
        }
    },
    updateScroll: function(scrollTop) {
        if (this.onceFixed) return;

        if ((scrollTop > this.fixStart) && (scrollTop < this.fixEnd)) {
            if (!this.dotsFixed) {
                this.element.css({
                    position: 'fixed',
                    top: __app__.fMH
                });
                this.dotsFixed = true;
                this.dotsAtTop = 0;
            }
        } else if (scrollTop >= this.fixEnd) {

            if (this.dotsAtTop !== false) {
                this.element.css({
                    position: 'absolute',
                    top: this.pageY + this.height - this.itemHeight
                });
                this.dotsFixed = false;
                this.dotsAtTop = false;
            }
        } else {
            if (this.dotsAtTop !== true) {
                this.element.css({
                    position: 'absolute',
                    top: this.pageY
                });
                this.dotsFixed = false;
                this.dotsAtTop = true;
            }
        }

        var pos = -1;
        for (var i = 0; i < this.item.length; i++) {
            var item = this.item[i];
            var outOfScreen = (((scrollTop + __app__.wh) < item.cntPageTop) || (scrollTop > (item.cntPageTop + item.cntHeight - __app__.fMH)));
            if (outOfScreen) this.initItem(item);
            else pos = i;
        }

        this.actDot(pos);
    },
    setOnceFixed: function() {
        if (this.onceFixed) return;

        var self = this;
        this.onceFixed = true;

        this.element.unbind('mousewheel');
        $(window).bind('mousewheel', function(e) {
            self.cancelEvent(e);
        });

        $('html,body').stop();

        this.element.css({
            position: 'absolute',
            top: this.pageY
        });
        this.delegate.element.css({
            height: this.itemHeight + 60
        });
        window.scrollTo(0, this.pageY - __app__.fMH);

        __app__.resize();
    },
    mouseDot: function(e) {
        var pos = e.data.pos;
        var item = this.item[pos];
        var dot = this.dot[pos];

        switch (e.type) {
            case 'mouseenter':
                if (dot.active) return;
                dot.std.stop().animate({
                    opacity: 0
                }, 500, 'swing');
                dot.ovr.stop().animate({
                    opacity: 1
                }, 500, 'swing');
                break;
            case 'mouseleave':
                if (dot.active) return;
                dot.std.stop().animate({
                    opacity: 1
                }, 500, 'swing');
                dot.ovr.stop().animate({
                    opacity: 0
                }, 500, 'swing');
                break;
            case 'click':
                if (this.onceFixed) {
                    __app__.scrollTo(this.pageY - __app__.fMH);
                    this.initItem(this.item[pos]);
                    this.actDot(pos);
                } else {
                    __app__.scrollTo(this.pageY + pos * this.itemHeight - __app__.fMH);
                }
                break;
        }
    },
    actDot: function(pos) {
        if (!__app__.inited) return;
        if (this.pos == pos) return;

        var dot;
        var dir = (pos > this.pos);
        var self = this;
        var delay = false;

        var cb = false;
        if (pos >= this.item.length - 1) {
            this.setOnceFixed();
            cb = function() {
                $(window).unbind('mousewheel');
                self.scrollingToNext = false;
            }
        }

        if (this.pos >= 0) {
            dot = this.dot[this.pos];
            dot.act.stop().animate({
                opacity: 0
            }, 500, 'swing');
            dot.std.stop().animate({
                opacity: 1
            }, 500, 'swing');
            dot.active = false;

            dot.obj.css({
                cursor: 'pointer'
            });

            if (pos >= 0) {
                this.item[this.pos].h1.stop();
                this.item[this.pos].obj.stop().animate({
                    opacity: 0
                }, 250, 'swing', function() {
                    $(this).css({
                        display: 'none'
                    });
                });
                delay = true;
            }
        }

        var prevPos = this.pos;
        this.pos = pos;
        if (pos >= 0) {
            dot = this.dot[this.pos];
            dot.std.stop().animate({
                opacity: 0
            }, 500, 'swing');
            dot.ovr.stop().animate({
                opacity: 0
            }, 500, 'swing');
            dot.act.stop().animate({
                opacity: 1
            }, 500, 'swing');
            dot.active = true;

            dot.obj.css({
                cursor: 'default'
            });

            this.item[pos].obj.stop().css({
                opacity: 0,
                display: 'block'
            }).animate({
                opacity: 1
            }, 250, 'swing');
            this.animateItemValue(this.item[pos], cb);
        }
    },
    initItem: function(item) {
        if (item.inited) return;

        item.curVal = 0;
        item.h1.html('0');
        item.inited = true;
    },
    animateItemValue: function(item, cb) {
        if (!item.inited) return;
        item.inited = false;

        var self = this;
        this.scrollingToNext = true;

        item.h1.stop().css({
            curVal: 0
        }).animate({
            curVal: item.value
        }, {
            duration: 500,
            easing: 'easeOutSine',
            step: function(now, fx) {
                item.curVal = now;
                var c = 0,
                    string = '';
                var curVal = Math.round(parseInt(now)).toString();
                for (var i = 0; i < curVal.length; i++) {
                    string = curVal.substr(curVal.length - i - 1, 1) + string;
                    c++;
                    if (c >= 3) {
                        string = '<div></div>' + string;
                        c = 0;
                    }
                }

                if (item.append) string = string + item.append;
                item.h1.html(string);
            },
            always: function() {
                self.scrollingToNext = false;
                if (typeof cb == _fn_) cb();
            }
        });
    },
    remove: function() {
        $(window).unbind('appScroll.' + this.__className + this._id);
        this.rm();
    }
    // stopItemValueUpdate : function(item)
    // {
    // 	if(item.tmr)
    // 	{
    // 		clearInterval(item.tmr);
    // 		item.tmr = false;
    // 	}
    // },
    // updateItemValue : function(item)
    // {
    // 	var finish = false;
    // 	item.curVal = item.curVal + Math.ceil( ( item.inc + Math.random() * item.inc ) / 2 );
    // 	if(item.curVal > item.value) item.curVal = item.value;
    // 	if(item.curVal == item.value) finish = true;

    // 	var curVal = item.curVal.toString();
    // 	var string = '';

    // 	var c=0;
    // 	for(var i=0;i<curVal.length;i++)
    // 	{
    // 		string = curVal.substr(curVal.length-i-1,1) + string;
    // 		c++;

    // 		if(c >= 3)
    // 		{
    // 			string = ' ' + string;
    // 			c = 0;
    // 		}
    // 	}

    // 	item.h1.html( string );

    // 	if(finish)
    // 		this.stopItemValueUpdate(item);
    // }
});
var BlockSwitcher = BaseClass.extend({
    init: function(opt) {
        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        this.actItem = false;
        this.item = [];

        this.create();
    },
    create: function() {
        var self = this;

        var items = this.find(this.element, '.item');
        if (items) {
            for (var i = 0; i < items.length; i++) {
                var obj = $(items[i]);
                var item = {
                    id: i,
                    obj: obj,
                    tid: obj.attr('tid'),
                    act: obj.hasClass('act'),
                    activate: function(dir, cb) {
                        if (this.act == dir) return;

                        if (dir) {
                            if (!this.obj.hasClass('act')) this.obj.addClass('act').css({
                                cursor: 'default'
                            });
                            if (this.block) this.block.css({
                                display: 'block'
                            });
                        } else {
                            this.obj.removeClass('act').css({
                                cursor: 'pointer'
                            });
                            if (this.block) this.block.css({
                                display: 'none'
                            });
                        }

                        this.act = dir;
                        if (typeof cb == _fn_) cb();
                    }
                };

                var block = $('#' + item.tid);
                item.block = block.length ? block : false;

                if (item.act)
                    this.actItem = item;
                else
                    item.obj.css({
                        cursor: 'pointer'
                    });

                obj.bind('click', {
                    id: i
                }, function(e) {
                    self.mouseItem(e);
                });
                this.item.push(item);
            }
        }
    },
    mouseItem: function(e) {
        var id = e.data.id;
        var item = this.item[id];

        switch (e.type) {
            case 'click':
                this.switchBlock(item);
                break;
        }
    },
    switchBlock: function(item) {
        if (this.switching) return;
        if (this.actItem && (item.id == this.actItem.id)) return;

        this.switching = true;

        this.actItem.activate(false);
        this.actItem = item;
        item.activate(true);

        __ServicesMenu__.updatePosition();

        this.switching = false;
    },
    remove: function() {
        for (var i = 0; i < this.item.length; i++)
            this.item[i].obj.unbind('click');
    }
});
var Calculator = BaseClass.extend({
    init: function(opt) {
        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        this.create();
    },
    create: function() {
        var self = this;

        this.sum = this.find(this.element, '.sum');
        this.inp = this.find(this.sum, 'input');
        this.fee = this.find(this.element, '.fee');
        this.feeSpan = this.find(this.fee, 'span');

        this.tester = $('<div></div>').css({
            position: 'absolute',
            top: -9999,
            left: -9999,
            width: 'auto',
            whiteSpace: 'nowrap'
        }).appendTo(this.element);

        var slider = this.find(this.element, '.value-slider');
        this.slider = slider ? new ValueSlider({
            _element: $(slider[0]),
            _delegate: this,
            _initPrc: 50,
            _startVal: 300,
            _endVal: 150000,
            _updateFunction: function(xprc, xval) {

                self.updateValue(xval);

            }
        }) : false;

        this.inp.bind('change keyup', function(e) {
            self.updateValue(this.value);
            if (self.slider)
                self.slider.updateFromValue(self.inp.val())
        });
    },
    checkValue: function() {
        var val = this.inp.val();
        var escaped = val.replace(/[^0-9]/g, '');
        this.inp.val(escaped);

        if (!escaped.length) {
            this.inp.css({
                width: 80
            });
            return false;
        }

        var intEscaped = parseInt(escaped);

        if (intEscaped < 100) {
            this.inp.css({
                width: 80
            });
            return false;
        }
        if (intEscaped > 150000) escaped = 150000;

        this.tester.css({
            fontSize: this.inp.css('fontSize'),
            fontFamily: this.inp.css('fontFamily'),
            fontWeight: this.inp.css('fontWeight'),
            letterSpacing: this.inp.css('letterSpacing')
        });

        this.tester.html(escaped);
        this.inp.val(escaped);

        var testerWidth = this.tester.width();
        this.inp.css({
            width: testerWidth
        });

        return true;
    },
    updateValue: function(val) {
        var self = this;
        this.inp.val(val);
        if (!this.checkValue()) return;

        var fee;

        if (val < 10000) {
            fee = Math.round(parseInt(this.inp.val()) * 0.1);
            if (fee < 300) fee = 300;
        } else if (val < 20000) {
            fee = Math.round(parseInt(this.inp.val()) * 0.07);
        } else if (val < 50000) {
            fee = Math.round(parseInt(this.inp.val()) * 0.05);
        } else {
            fee = Math.round(parseInt(this.inp.val()) * 0.03);
        }

        this.feeSpan.html(fee + ' $');
    },
    resize: function() {
        this.checkValue();
    },
    remove: function() {
        if (this.slider)
            this.slider.remove();
    }
})
var CarAnimation = BaseClass.extend({
    init: function(opt) {
        this.container = false;
        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        this.containerWidth = 0;
        this.iconWidth = 0;

        this.create();
    },
    create: function() {
        this.icon = this.find(this.element, '.ico');
        this.icon.css({
            position: 'absolute',
            display: 'block',
            top: 0,
            left: 0
        });
    },
    startAnimate: function() {
        this.resize();

        var toRight = ((this.containerWidth + this.iconWidth) / 2);

        var self = this;
        this.icon.stop().css({
            left: 0
        }).animate({
            left: toRight
        }, 450, 'swing', function() {
            $(this).stop().css({
                left: -toRight
            }).animate({
                left: 0
            }, 450, 'swing');
        });
    },
    stopAnimate: function() {
        this.icon.stop().css({
            left: 0
        });
    },
    resize: function() {
        this.containerWidth = this.container.width();
        this.iconWidth = this.icon.width();
    },
    remove: function() {

    }
})
var Clients = BaseClass.extend({
    __className: 'Clients',
    init: function(opt) {
        this._id = false;
        this.inited = false;

        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        if (!this.put()) return;

        this.item = [];
        this.count = 0;

        this.actMenuItem = false;
        this.menuItem = [];

        this.removeMode = false;
        this.opt.clickable = this.element.hasClass('clickable');

        this.vItem = [];
        this.vCount = 0;

        this.size = 0;

        this.opened = false;

        this.clientsMenuFix = false;
        this.clientsMenuFixHeight = 0;
        this.clientsMenuFixed = false;

        this.clientsPerLine = __app__.mobile ? 2 : 4;

        this.create();
    },
    create: function() {
        var self = this;
        var elm;

        elm = this.find(this.element, '.item');
        if (elm) {
            var c = 0;
            var obj, item;
            for (var i = 0; i < elm.length; i++) {
                obj = $(elm[i]);
                item = {
                    id: i,
                    pos: i,
                    vpos: i,
                    obj: obj,
                    section: parseInt(obj.attr('section')),
                    clientID: obj.attr('client-id'),
                    box: obj.find('.box'),
                    img: obj.find('.std'),
                    ovr: obj.find('.ovr'),
                    opened: false,
                    animated: false,
                    active: false,
                    shining: false,
                    activate: function(dir) {
                        if (this.active == dir) return;

                        if (dir) {

                            if (self.opt.clickable) this.obj.css({
                                cursor: 'pointer'
                            });
                            this.obj.bind('click mouseenter mouseleave', {
                                id: this.pos
                            }, function(e) {
                                self.mouseItem(e);
                            });
                            if (self.removeMode) this.obj.css({
                                display: 'inline-block'
                            });
                            else this.obj.animate({
                                opacity: 1
                            });

                        } else {

                            if (self.opt.clickable) this.obj.css({
                                cursor: 'default'
                            });
                            this.obj.unbind('click mouseenter mouseleave');
                            if (self.removeMode) this.obj.css({
                                display: 'none'
                            });
                            else this.obj.animate({
                                opacity: 0.2
                            });

                            this.shine(false);

                        }

                        this.active = dir;
                    },
                    shine: function(dir) {
                        if (!self.opt.clickable && __app__.mobile) return;

                        if (dir == this.shining) return;
                        if (this.opened && !dir) return;

                        if (dir) {
                            this.img.stop().animate({
                                opacity: 0
                            }, 500, 'swing');
                            this.ovr.stop().animate({
                                opacity: 1
                            }, 500, 'swing');
                        } else {
                            this.img.stop().animate({
                                opacity: 1
                            }, 500, 'swing');
                            this.ovr.stop().animate({
                                opacity: 0
                            }, 500, 'swing');
                        }

                        this.shining = dir;
                    }
                };

                item.imgSRC = item.img.attr('src');
                item.ovrSRC = item.ovr.attr('src');

                this.item.push(item);
                this.vItem.push(item);

                c++;
            }

            this.clientsMenu = $('#clients-menu');
            if (this.clientsMenu.length) {
                this.clientsMenuFix = this.clientsMenu.find('.fix');

                var menuItems = this.clientsMenu.find('.item');
                if (menuItems.length) {
                    for (var i = 0; i < menuItems.length; i++) {
                        var obj = $(menuItems[i]);
                        var menuItem = {
                            id: i,
                            obj: obj,
                            act: obj.hasClass('act'),
                            section: parseInt(obj.attr('section')),
                            activate: function(dir) {
                                if (this.act == dir) return;

                                if (dir) {
                                    if (!this.obj.hasClass('act'))
                                        this.obj.addClass('act');
                                } else {
                                    this.obj.removeClass('act');
                                }

                                this.act = dir;
                            }
                        };

                        menuItem.obj.bind('click', {
                            id: i
                        }, function(e) {
                            self.mouseMenuItem(e);
                        });
                        if (menuItem.act) {
                            this.actMenuItem = menuItem;
                        }
                        this.menuItem.push(menuItem);
                    }
                }
            } else {
                this.clientsMenu = false;
            }
        }

        this.count = this.item.length;
        this.vCount = this.vItem.length;

        elm = this.find(this.element, '.presenter');
        this.presenter = elm ? new ClientsPresenter({
            _element: elm,
            _delegate: this
        }) : false;

        $(window).bind('appScroll.' + this.__className + this._id, function(e, scrollTop) {
            self.updateScroll(scrollTop);
        });

        this.inited = true;

        this.selectItems(0);
    },
    mouseMenuItem: function(e) {
        var id = e.data.id;
        var item = this.menuItem[id];

        if (item.section == this.actMenuItem.section) return;

        if (this.actMenuItem) this.actMenuItem.activate(false);
        this.actMenuItem = item;
        item.activate(true);

        this.selectItems(item.section);
    },
    selectItems: function(section) {
        var self = this;
        var cpl = this.cli
        var func = function() {
            var vpos = 0;
            self.vItem = [];
            for (var i = 0; i < self.item.length; i++) {
                if (!section || self.item[i].section == section) {
                    self.item[i].vpos = vpos++;
                    self.item[i].activate(true);
                    self.vItem.push(self.item[i]);
                } else {
                    self.item[i].activate(false);
                }
            }

            var count = self.count;
            var totalLines = Math.ceil(count / self.clientsPerLine);
            for (var i = 0; i < count; i++) {
                var item = self.item[i];
                var itemLine = Math.ceil((item.pos + 1) / self.clientsPerLine);
                item.arrAtBottom = true;
                if (itemLine == totalLines) {
                    itemLine--;
                    item.arrAtBottom = false;
                }
                var insertAfterPos = (totalLines < 2) ? count : itemLine * self.clientsPerLine;
                insertAfterPos--;
                if (insertAfterPos >= count) {
                    insertAfterPos = count - 1;
                }
                item.insertAfterPos = insertAfterPos;
            }

            self.vCount = self.vItem.length;

            if (section && self.vItem.length)
                __app__.scrollTo(self.vItem[0].obj.offset().top - __app__.fMH - self.clientsMenuFixHeight);
        }

        if (this.presenter && this.presenter.opened) {
            this.presenter.close(func, true);
        } else {
            func();
        }

    },
    mouseItem: function(e) {
        var item = this.item[e.data.id];
        switch (e.type) {
            case 'mouseenter':
                item.shine(true);
                break;
            case 'mouseleave':
                item.shine(false);
                break;
            case 'click':
                this.toggleClient(item);
                break;
        }
    },
    toggleClient: function(item) {
        if (this.opt.clickable && this.presenter)
            this.presenter.open(item.vpos);
    },
    updateScroll: function(scrollTop) {
        if (!this.clientsMenuFix) return;

        var shoudBeFixed = scrollTop > (__indexPart.height - __app__.fMH);

        if (shoudBeFixed && !this.clientsMenuFixed) {

            this.clientsMenuFix.css({
                position: 'fixed',
                top: __app__.fMH,
                zIndex: 999
            });
            this.clientsMenuFixed = true;

        } else if (!shoudBeFixed && this.clientsMenuFixed) {

            this.clientsMenuFix.css({
                position: 'relative',
                top: 'auto',
                zIndex: 'auto'
            });
            this.clientsMenuFixed = false;

        }
    },
    resize: function(ww, wh) {
        var cpl = this.clientsPerLine;

        this.size = Math.ceil(ww / cpl);

        this.element.css({
            width: this.size * cpl,
            height: 'auto'
        });

        this.clientsMenuFixHeight = this.clientsMenu ? this.clientsMenu.height() : 0;

        this.elmTop = this.element.offset().top;

        for (var i = 0; i < this.item.length; i++) {
            var item = this.item[i];
            item.obj.css({
                width: this.size,
                height: this.size
            });
            item.top = Math.round(this.elmTop + Math.floor(i / cpl) * this.size + this.size / cpl - __app__.wh);
        }

        if (this.clientsMenu && this.clientsMenuFixed) {
            this.clientsMenuFix.css({
                top: __app__.fMH
            });
        }

        if (this.presenter) this.presenter.resize();
    },
    remove: function() {
        $(window).unbind('appScroll.' + this.__className + this._id);
        this.rm();
    }
});

var ClientsPresenter = BaseClass.extend({
    init: function(opt) {
        this.delegate = false;
        this.element = false;
        this.opt = {

            duration: __app__.mobile ? 0 : 400,
            easing: __app__.mobile ? 'linear' : 'swing'

        };
        this.setOptions(opt);

        this.pos = -1;
        this.activeItem = false;
        this.switching = false;

        this.insertedAfter = -1;
        this.opened = false;
        this.item = false;

        this.html = '<div class="presenter">' + this.element.html() + '</div>';
        this.remove();
    },
    create: function() {
        var self = this;

        this.arrlCnt = this.find(this.element, '.arrlCnt');
        this.arrrCnt = this.find(this.element, '.arrrCnt');

        this.logoCnt = this.find(this.element, '.logoCnt');
        this.textCnt = this.find(this.element, '.textCnt');

        this.arrl = this.arrlCnt ? this.find(this.arrlCnt, '.arrl') : false;
        this.arrr = this.arrrCnt ? this.find(this.arrrCnt, '.arrr') : false;
        if (this.arrr) this.arrr.bind('click', {
            dir: true
        }, function(e) {
            self.mouseArrow(e);
        });
        if (this.arrl) this.arrl.bind('click', {
            dir: false
        }, function(e) {
            self.mouseArrow(e);
        });

        this.box = this.logoCnt ? this.find(this.logoCnt, '.box') : false;
        this.img = this.box ? this.find(this.box, 'img') : false;

        this.textBox = this.textCnt ? this.find(this.textCnt, '.box') : false;
    },
    resize: function() {
        if (!this.element) return;

        var self = this;

        this.cellWidth = this.delegate.size;

        if (__app__.mobile) {
            var display = this.element.css('display');
            this.element.css({
                display: 'block',
                height: 'auto'
            });
            this.cellHeight = this.element.outerHeight(true);
            this.element.css({
                display: display
            });
        } else {
            this.cellHeight = (this.delegate.size + 80);
        }

        if (this.opened) this.element.css({
            height: this.cellHeight
        });

        if (!__app__.mobile) {
            if (this.arrlCnt) this.arrlCnt.css({
                width: this.cellWidth,
                height: this.cellHeight
            });
            if (this.arrrCnt) this.arrrCnt.css({
                width: this.cellWidth,
                height: this.cellHeight
            });
            if (this.logoCnt) this.logoCnt.css({
                width: this.cellWidth,
                height: this.cellHeight
            });
            if (this.box) this.box.css({
                width: this.cellWidth,
                height: this.cellWidth
            });
            if (this.textCnt) this.textCnt.css({
                width: this.cellWidth,
                height: this.cellHeight
            });
        }

    },
    mouseArrow: function(e) {
        var dir = e.data.dir;
        switch (e.type) {
            case 'click':
                return dir ? this.nextClient() : this.prevClient();
                break;
            case 'mouseenter':
                break;
            case 'mouseleave':
                break;
        }
    },
    nextClient: function() {
        var pos = this.pos + 1;
        if (pos >= this.delegate.vCount) pos = 0;
        this.switchClient(pos, true, false);
    },
    prevClient: function() {
        var pos = this.pos - 1;
        if (pos < 0) pos = this.delegate.vCount - 1;
        this.switchClient(pos, false, false);
    },
    switchClient: function(pos, dir, quick) {
        if (this.pos == pos) {
            this.close();
            return;
        }

        if (this.switching) return;
        this.switching = true;

        var self = this;

        if (this.activeItem) {
            this.activeItem.opened = false;
            this.activeItem.shine(false);
            if (this.activeItem.arr) {
                this.activeItem.arr.remove();
                this.activeItem.arr = false;
            }
            this.activeItem = false;
        }

        this.pos = pos;
        var item = this.delegate.vItem[this.pos];
        item.shine(true);
        if (__app__.mobile) {
            item.arr = $('<div></div>').addClass('arr')
                .css(item.arrAtBottom ? {
                    bottom: 0
                } : {
                    top: 0
                })
                .html('<img src="/m/img/cli' + (item.arrAtBottom ? 'd' : 'u') + '.png" alt="" />')
                .appendTo(item.obj);
        }

        item.opened = true;
        this.activeItem = item;

        quick = quick || __app__.mobile;

        if (quick) {

            if (this.textBox) this.textBox.html(item.box.html());

            if (__app__.mobile) {
                this.resize();
                this.element.css({
                    height: this.cellHeight
                });
            }

            if (this.img) this.img.attr('src', item.ovrSRC);
            this.switching = false;

        } else {

            if (this.textBox) {
                this.textBox.animate({
                    opacity: 0
                }, this.opt.duration, this.opt.easing, function() {
                    $(this)
                        .html(item.box.html())
                        .animate({
                            opacity: 1
                        }, self.opt.duration, self.opt.easing, function() {
                            self.switching = false;
                        });
                });
            }

            if (this.img) {
                this.img.animate({
                    opacity: 0
                }, this.opt.duration, this.opt.easing, function() {
                    $(this)
                        .attr('src', item.ovrSRC)
                        .animate({
                            opacity: 1
                        }, self.opt.duration, self.opt.easing, function() {
                            self.switching = false;
                        });
                });
            }

            this.element.animate({
                height: this.cellHeight
            }, this.opt.duration, this.opt.easing);

        }
    },
    open: function(pos, quick) {
        var item = this.delegate.vItem[pos];

        var self = this;
        if ((this.insertedAfter >= 0) && (this.insertedAfter != item.insertAfterPos)) {

            this.close(function() {
                self.open(pos, quick);
            }, false);

        } else if (!this.opened) {

            this.insertedAfter = item.insertAfterPos;
            this.element = $(this.html).insertAfter(this.delegate.item[this.insertedAfter].obj);
            this.create();
            this.resize();

            this.switchClient(pos, true, true);
            this.element.css({
                height: 0
            }).animate({
                height: this.cellHeight
            }, this.opt.duration, this.opt.easing, function() {
                self.opened = true;
            });

            if (__app__.mobile) {

                if (!item.arrAtBottom)
                    __app__.scrollTo(self.element.offset().top - __app__.fMH - self.delegate.clientsMenuFixHeight);
                else if (self.delegate.size + self.cellHeight + __app__.fMH > __app__.wh) {
                    __app__.scrollTo(self.element.offset().top + self.cellHeight - __app__.wh);
                } else {
                    __app__.scrollTo(item.obj.offset().top - __app__.fMH - self.delegate.clientsMenuFixHeight);
                }
            } else {
                __app__.scrollTo(item.obj.offset().top - __app__.fMH - self.delegate.clientsMenuFixHeight);
            }

            this.opened = true;

        } else {

            this.switchClient(pos, true, quick || false);

        }
    },
    close: function(cb, quick) {
        var self = this;
        var func = function() {
            self.remove();
            if (typeof cb == _fn_) cb();
        };

        this.pos = -1;

        if (this.activeItem) {
            this.activeItem.opened = false;
            this.activeItem.shine(false);
            if (this.activeItem.arr) {
                this.activeItem.arr.remove();
                this.activeItem.arr = false;
            }
            this.activeItem = false;
        }

        quick = quick || __app__.mobile;

        if (quick) func();
        else this.element.animate({
            height: 0
        }, this.opt.duration, this.opt.easing, func);
    },
    remove: function() {
        this.element.remove();

        this.insertedAfter = -1;
        this.pos = -1;
        this.opened = false;
        this.element = null;
    }
});
var ComboBox = BaseClass.extend({
    openedComboBox: false,
    eventSetted: false,
    init: function(opt) {
        this.element = false;
        this.opt = {
            showingOptions: false,
            type: 'type1',
            onChange: false
        };
        this.setOptions(opt);

        if (!ComboBox.eventSetted) this.setEvent();
        if (!ComboBox.comboBoxes) {
            ComboBox.comboBoxes = [];
        }
        if (!this.element) return;

        this.opt.id = this.element.attr('data-id');
        if (this.opt.id) ComboBox.comboBoxes[this.opt.id] = this;

        this.opt.name = this.element.attr('data-name');
        this.opt.type = this.element.attr('data-type') || 'type1';
        this.opt.width = parseInt(this.element.attr('data-width')) || false;

        this.opts = [];

        this.mo = false;
        this.active = 0;
        this.cVal = false;
        this.cText = false;

        this.disabled = false;
        this.maxOptWidth = 0;

        this.generate();
    },
    setDisabled: function(disabled) {
        if (this.disabled == disabled) return;
        this.disabled = disabled;

        if (this.disabled && !this.combox.hasClass('disabled'))
            this.combox.addClass('disabled');
        else if (!this.disabled && this.combox.hasClass('disabled'))
            this.combox.removeClass('disabled');
    },
    getById: function(id) {
        return ComboBox.comboBoxes[id] ? ComboBox.comboBoxes[id] : false;
    },
    setEvent: function() {
        var self = this;
        ComboBox.eventSetted = true;
        $(window).bind('mousedown touchstart', function(e) {
            self.closeActiveComboBox();
        });
    },
    closeActiveComboBox: function() {
        if (ComboBox.openedComboBox && !ComboBox.openedComboBox.mo)
            ComboBox.openedComboBox.hideOptions();
    },
    generate: function() {
        this.hidden = $('<input></input>', {
            name: this.opt.name + '_hidden',
            value: '1'
        }).insertAfter('element');

        this.combox = $('<div></div>').addClass('combox ' + this.opt.type + ' noselect').insertAfter(this.element);

        this.selected = $('<div></div>').addClass('selected').appendTo(this.combox);
        this.toggle = $('<div></div>').addClass('toggle').appendTo(this.combox);
        this.options = $('<div></div>').addClass('options noselect').appendTo(this.combox);

        var self = this;
        var opts = this.element.find('option');

        this.maxOptWidth = 0;
        for (var i = 0, count = opts.length; i < count; i++) {
            var opt = $('<div></div>', {
                val: opts[i].value
            }).addClass('opt').html(opts[i].innerHTML).appendTo(this.options);
            opt.bind('click mouseenter mouseleave', {
                id: i,
                opt: opt,
                val: opts[i].value,
                text: opts[i].innerHTML
            }, function(e) {
                self.selectOption(e);
            });
            this.opts.push(opt);

            if (i >= opts.length - 1) opt.addClass('last');

            var optWidth = opt.width();
            if (this.maxOptWidth < optWidth) {
                this.maxOptWidth = optWidth;
            }

            if (opts[i].selected) {
                this.active = i;
            }
        }

        if (!this.opts[this.active].hasClass('act')) this.opts[this.active].addClass('act');
        this.cVal = opts[this.active].value;
        if (/^\d+$/.test(this.cVal)) {
            this.cVal = parseInt(this.cVal);
        }
        this.cText = opts[this.active].innerHTML;
        this.selected.html(opts[this.active].innerHTML);

        this.setSize(this.opt.width, 50);

        var self = this;
        this.combox.bind('mouseenter mouseleave', function(e) {
            switch (e.type) {
                case 'mouseenter':
                    self.mo = true;
                    break;
                case 'mouseleave':
                    self.mo = false;
                    break;
            }
        });
        this.selected.bind('click mouseenter mouseleave', function(e) {
            self.m_selected(e);
        });
        this.toggle.bind('click mouseenter mouseleave', function(e) {
            self.m_toggle(e);
        });

        this.element
            .css({
                display: 'none'
            })
            .bind('change', function(e) {
                if (e === true) return;
                var id = this.selectedIndex;
                var opt = this.options[id];
                self.selectOption({
                    type: 'click',
                    data: {
                        id: id,
                        val: opt.value,
                        text: opt.innerHTML,
                        noretrig: true
                    }
                });
            });

        if (this.cVal) {
            if (!this.selected.hasClass('active')) this.selected.addClass('active');
        } else {
            if (this.selected.hasClass('active')) this.selected.removeClass('active');
        }
    },
    setSize: function(withWidth, withHeight) {
        var toggleSize = withHeight ? withHeight : this.selected.height();

        var comboxAutoWidth = toggleSize + this.maxOptWidth + 23;

        var optionsWidth = comboxAutoWidth;
        var selectedWidth = this.maxOptWidth;
        var comboxWidth = comboxAutoWidth;

        if (withWidth) {
            comboxWidth = withWidth;
            selectedWidth = comboxWidth - toggleSize - 3;
            if (optionsWidth < comboxWidth) optionsWidth = comboxWidth;
        }

        comboxWidth -= 1;
        optionsWidth -= 3;

        this.options.css({
            top: toggleSize + 2,
            width: optionsWidth - 2,
            display: 'none'
        });
        this.combox.css({
            width: comboxWidth,
            height: toggleSize + 4
        });
        this.toggle.css({
            width: toggleSize,
            height: toggleSize
        });
        this.selected.css({
            width: selectedWidth,
            height: toggleSize,
            lineHeight: toggleSize + 'px'
        });

    },
    m_selected: function(e) {
        if (this.disabled) return;

        switch (e.type) {
            case 'click':
                this.toggleOptions(e);
                break;
            case 'mouseenter':
                if (this.cVal) return;
                if (!this.selected.hasClass('active')) this.selected.addClass('active');
                if (!this.toggle.hasClass('active')) this.toggle.addClass('active');
                break;
            case 'mouseleave':
                if (this.cVal) return;
                if (this.selected.hasClass('active')) this.selected.removeClass('active');
                if (this.toggle.hasClass('active')) this.toggle.removeClass('active');
                break;
        }
    },
    m_toggle: function(e) {
        if (this.disabled) return;

        switch (e.type) {
            case 'click':
                this.toggleOptions(e);
                break;
            case 'mouseenter':
                if (this.cVal) return;
                if (!this.selected.hasClass('active')) this.selected.addClass('active');
                if (!this.toggle.hasClass('active')) this.toggle.addClass('active');
                break;
            case 'mouseleave':
                if (this.cVal) return;
                if (this.selected.hasClass('active')) this.selected.removeClass('active');
                if (this.toggle.hasClass('active')) this.toggle.removeClass('active');
                break;
        }
    },
    onChange: function(fn) {
        this.opt.onChange = (typeof fn == _fn_) ? fn : false;
        return !!this.opt.onChange;
    },
    selectOption: function(e) {
        if (e.preventDefault) {
            e.preventDefault();
            e.stopPropagation();
        }

        switch (e.type) {
            case 'click':
                if (this.cVal == e.data.val) {
                    this.hideOptions();

                    if (this.cVal) {
                        if (!this.selected.hasClass('active')) this.selected.addClass('active');
                    } else {
                        if (this.selected.hasClass('active')) this.selected.removeClass('active');
                    }

                    return;
                }

                this.element[0].options[e.data.id].selected = true;

                this.cVal = e.data.val;
                if (/^\d+$/.test(this.cVal)) {
                    this.cVal = parseInt(this.cVal);
                }
                this.cText = e.data.text;

                this.hidden.val(this.cVal);
                this.selected.html(this.cText);
                this.hideOptions();

                if (typeof this.opt.onChange == _fn_)
                    this.opt.onChange(this, this.cVal, this.cText);

                this.opts[this.active].removeClass('act');
                this.active = e.data.id;
                this.opts[this.active].addClass('act');
                if (!e.data.noretrig) this.element.trigger('change', ['true']);

                if (this.cVal) {
                    if (!this.selected.hasClass('active')) this.selected.addClass('active');
                } else {
                    if (this.selected.hasClass('active')) this.selected.removeClass('active');
                }

                break;
            case 'mouseenter':
                if (!e.data.opt.hasClass('over'))
                    e.data.opt.addClass('over');
                break;
            case 'mouseleave':
                if (e.data.opt.hasClass('over'))
                    e.data.opt.removeClass('over');
                break;
        }
    },
    toggleOptions: function(e) {
        if (e.preventDefault) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (this.opt.showingOptions) this.hideOptions();
        else this.showOptions();
    },
    showOptions: function() {
        if (ComboBox.openedComboBox) {
            ComboBox.openedComboBox.hideOptions();
        }

        if (this.opt.showingOptions) return;
        this.opt.showingOptions = true;
        ComboBox.openedComboBox = this;

        if (!this.combox.hasClass('opened')) this.combox.addClass('opened');
        this.options.css({
            display: 'block',
            opacity: 1
        });

        var self = this;
    },
    hideOptions: function() {
        if (!this.opt.showingOptions) return;
        this.opt.showingOptions = false;
        ComboBox.openedComboBox = false;

        this.combox.removeClass('opened');
        this.options.css({
            display: 'none',
            opacity: 0
        });
    }
});

var ComboBoxClass = new ComboBox();
var Company = BaseClass.extend({
    __className: 'Company',
    init: function(opt) {
        this._id = false;
        this.inited = false;

        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        if (!this.put()) return;

        this.item = [];

        this.create();
    },
    create: function() {
        var self = this;
        var elm;

        elm = this.find(this.element, '.item');
        if (elm) {
            for (var i = 0; i < elm.length; i++) {
                var obj = $(elm[i]);
                var item = {
                    id: i,
                    obj: obj
                };

                item.dw = obj.hasClass('dw');
                item.dh = obj.hasClass('dh');

                this.item.push(item);
            }
        }

        this.inited = true;
    },
    resize: function(ww, wh) {
        var width = Math.ceil(ww / 4);
        //var height = Math.round( wh / 2 );
        var height = Math.round(width / 360 * 440);

        this.element.css({
            width: width * 4,
            height: height * 2
        });

        for (var i = 0; i < this.item.length; i++) {
            var item = this.item[i];

            item.obj.css({
                width: width * (item.dw ? 2 : 1),
                height: height * (item.dh ? 2 : 1)
            });
        }
    },
    remove: function() {
        this.rm();
    }
});
var FixedMenu = BaseClass.extend({
    __className: 'FixedMenu',
    init: function(opt) {
        this.delegate = false;
        this.element = false;
        this.opt = {
            showingFrom: 150,
            duration: 200,
            easing: 'swing'
        };
        this.setOptions(opt);

        this.sizingRules = [];
        this.alwaysOnTop = (__indexPart.__className == 'PagePart_Header');

        this.create();
    },
    create: function() {
        var elm;
        var self = this;

        if (this.alwaysOnTop) {
            this.element.css({
                top: 0,
                opacity: 1,
                display: 'block'
            });
        } else {
            this.element.css({
                top: -85
            });
        }

        this.logo = this.find(this.element, '.logo');
        if (this.logo) {
            var logoLink = this.logo.find('a');
            if (!logoLink.length) {
                this.logo.css({
                    cursor: 'pointer'
                }).bind('click', function(e) {
                    __app__.scrollTo(0);
                });
            }
        }

        this.toggle = this.find(this.element, '.toggle');
        if (this.toggle) this.toggle.bind('click', function() {
            self.delegate.toggleOverlapMenu();
        });

        this.right = this.find(this.element, '.right');
        if (this.right) this.right.find('.btn').bind('click', function() {
            self.delegate.toggleRequestForm(true);
        });

        if (!this.alwaysOnTop) {
            $(window).bind('appResize.' + this.__className, function(e, ww, wh) {
                self.resize(ww, wh);
            });
            $(window).bind('appScroll.' + this.__className, function(e, scrollTop) {
                self.updateScroll(scrollTop);
            });
        }
    },
    resize: function(ww, wh) {

    },
    updateScroll: function(scrollTop) {
        var shouldBeShown = (scrollTop > this.opt.showingFrom);
        if (shouldBeShown && !this.showing) {
            this.element.stop().css({
                display: 'block'
            }).animate({
                top: 0
            }, this.opt.duration, this.opt.easing);
            this.showing = true;
        } else if (!shouldBeShown && this.showing) {
            this.element.stop().animate({
                top: -85
            }, this.opt.duration, this.opt.easing, function() {
                $(this).css({
                    display: 'none'
                })
            });
            this.showing = false;
        }
    },
    remove: function() {
        $(window).unbind('appResize.' + this.__className);
        $(window).unbind('appScroll.' + this.__className);
    }
});
var GalleryViewer = BaseClass.extend({
    __className: 'GalleryViewer',
    init: function(opt) {
        this.delegate = false;
        this.element = false;
        this.pos = -1;

        this.opt = {
            duration: 200,
            easing: 'swing',
            viewerMode: 'gallery'
        };
        this.setOptions(opt);

        this.items = false;
        this.item = [];

        this.showing = false;

        this.width = 0;
        this.height = 0;

        this.create();
    },
    create: function() {
        var self = this;
        switch (this.opt.viewerMode) {
            case 'gallery':
                this.element = $('<div></div>').addClass('gallery-viewer').appendTo($(document.body));
                this.stage = $('<div></div').addClass('stage').appendTo(this.element);
                this.arrl = $('<div></div>').addClass('arr arrl icon icon-arrl').appendTo(this.element).bind('click', function(e) {
                    self.prevSlide();
                });
                this.arrr = $('<div></div>').addClass('arr arrr icon icon-arrr').appendTo(this.element).bind('click', function(e) {
                    self.nextSlide();
                });
                this.close = $('<div></div>').addClass('arr close icon icon-close').appendTo(this.element).bind('click', function(e) {
                    self.closeGallery();
                });
                break;
            case 'slider':
                this.sliderType = this.element.attr('slider-type');

                this.pos = 0;
                this.stage = this.find(this.element, '.stage');
                if (this.stage) {
                    var elm = this.find(this.stage, '.item');
                    var items = [];
                    if (elm) {
                        for (var i = 0; i < elm.length; i++) {
                            var obj = $(elm[i]);
                            var item = {
                                id: i,
                                _element: obj,
                                src: obj.attr('src'),
                                viewerMode: this.opt.viewerMode
                            };
                            items.push(item);
                        }
                    }

                    this.arrl = this.find(this.element, '.arrl');
                    if (this.arrl) this.arrl.bind('click', function(e) {
                        self.prevSlide();
                    });

                    this.arrr = this.find(this.element, '.arrr');
                    if (this.arrr) this.arrr.bind('click', function(e) {
                        self.nextSlide();
                    });

                    if (items.length) this.recreateItems(items);

                    this.stage.bind('click', function(e) {
                        self.nextSlide();
                    });
                }
                break;
        }

        if (tt.is.mobile) {
            window.tt.setTouchEvent({
                touchSurface: this.stage,
                onEnd: function(touchOptions) {
                    switch (touchOptions.moved) {
                        case 'left':
                            self.nextSlide();
                            break;
                        case 'right':
                            self.prevSlide();
                            break;
                    }
                }
            });
        }

        $(window).bind('appResize.' + this.__className, function(e, ww, wh) {
            self.resize(ww, wh);
        });
        this.resize();
    },
    removeItems: function() {
        switch (this.opt.viewerMode) {
            case 'slider':
                return;
                break;
        }

        if (this.item.length)
            for (var i = 0; i < this.item.length; i++)
                this.item[i].remove();
    },
    recreateItems: function(items) {
        this.removeItems();
        this.item = [];

        for (var i = 0; i < items.length; i++) {
            items[i]._delegate = this;
            var item = new GalleryViewerItem(items[i]);
            this.item.push(item);
        }

        var self = this;
        this.withArrows = (this.item.length > 1);
        if (this.arrl) this.arrl.css({
            display: this.withArrows ? 'block' : 'none'
        });
        if (this.arrr) this.arrr.css({
            display: this.withArrows ? 'block' : 'none'
        });

        switch (this.opt.viewerMode) {
            case 'slider':
                var count = this.item.length;

                if (count < 2) {
                    if (this.arrl) this.arrl.css({
                        display: 'none'
                    });
                    if (this.arrr) this.arrr.css({
                        display: 'none'
                    });
                }

                for (var i = 0; i < count; i++) this.item[i].loadImage();
                break;
        }

    },
    open: function(pos) {
        if (!this.showing) {
            this.showing = true;
            this.switchSlide(pos, true, true);
            this.element.stop().css({
                top: 0,
                left: 0,
                opacity: 0
            }).animate({
                opacity: 1
            }, this.opt.duration, this.opt.easing, function() {
                __app__.setFixedContent(true);
            });
        } else {
            this.switchSlide(pos, true);
        }
    },
    closeGallery: function() {
        if (this.showing) {
            this.showing = false;
            __app__.setFixedContent(false);
            this.element.stop().animate({
                opacity: 0
            }, this.opt.duration, this.opt.easing, function() {
                $(this).css({
                    top: __app__.wh,
                    left: __app__.ww
                });
            });
        }
    },
    nextSlide: function(quick, cb) {
        var pos = this.pos + 1;
        if (pos >= this.item.length) pos = 0;
        this.switchSlide(pos, true, quick, cb);
    },
    prevSlide: function(quick, cb) {
        var pos = this.pos - 1;
        if (pos < 0) pos = this.item.length - 1;
        this.switchSlide(pos, false, quick, cb);
    },
    switchSlide: function(pos, dir, quick, cb) {
        if (this.pos == pos) return;
        if (this.switching) return;
        this.switching = true;

        var self = this,
            curItem = false,
            nxtItem = false;

        if (this.pos >= 0) curItem = this.item[this.pos];
        nxtItem = this.item[pos];
        this.pos = pos;

        switch (this.opt.viewerMode) {
            case 'gallery':
            case 'slider':
                if (curItem) curItem.hide(dir, quick);
                nxtItem.show(dir, quick, function() {
                    self.switching = false;
                    if (typeof cb == _fn_) cb();
                });
                break;
            case 'stage':
                this.stage.stop().animate({
                    left: -(this.pos * this.width)
                }, {
                    duration: 1000,
                    easing: 'easeInOutQuint',
                    always: function() {
                        self.switching = false;
                    }
                });
                break;
        }
    },
    resize: function(ww, wh) {
        switch (this.opt.viewerMode) {
            case 'gallery':
                this.width = ww;
                this.height = wh;
                this.element.css({
                    width: this.width,
                    height: this.height
                });
                break;
            case 'slider':
                this.width = this.stage.width();
                this.height = Math.round(this.width / 850 * 528);
                break;
        }

        if (this.withArrows) {
            var arrTop;
            if (this.arrl) {
                arrTop = Math.round((this.height - this.arrl.outerHeight(true)) / 2);
            } else if (this.arrr) {
                arrTop = Math.round((this.height - this.arrr.outerHeight(true)) / 2);
            }
            if (this.arrl) this.arrl.css({
                top: arrTop
            });
            if (this.arrr) this.arrr.css({
                top: arrTop
            });
        }

        this.stage.css({
            height: this.height
        });

        if (!this.showing && !(this.opt.viewerMode == 'slider')) {
            this.element.css({
                top: this.height,
                left: this.width,
                opacity: 0
            });
        } else {
            this.element.css({
                top: 0,
                left: 0,
                opacity: 1
            });
        }

        switch (this.opt.viewerMode) {
            case 'gallery':
            case 'slider':
                break;
            case 'stage':
                this.stage.css({
                    left: -(this.pos * this.width)
                });
                break;
        }

        for (var i = 0; i < this.item.length; i++)
            this.item[i].resize(this.width, this.height);
    }
});

var GalleryViewerItem = BaseClass.extend({
    init: function(opt) {
        this.stage = false;
        this.delegate = false;
        this.element = false;
        this.opt = {
            id: 1,
            obj: false,
            src: false,
            img: false,
            width: 0,
            height: 0,
            loaded: false,
            error: false,
            onLoad: false,
            duration: 1000,
            easing: 'easeInOutQuint',
            viewerMode: 'gallery'
        };
        this.setOptions(opt);

        this.width = 0;
        this.height = 0;
        this.showing = false;
        this.switching = false;

        this.create();
    },
    create: function() {
        var self = this;

        switch (this.opt.viewerMode) {
            case 'gallery':
                this.element = $('<div></div>').addClass('item').appendTo(this.delegate.stage);
                break;
            case 'slider':

                break;
        }

        this.loader = this.castLoader().appendTo(this.element);
        this.opt.obj = $('<img></img>').appendTo(this.element).css({
            opacity: 0
        }).bind('load error', function(e) {
            self.imageLoaded(e);
        });
    },
    show: function(dir, quick, cb) {
        var self = this;
        if (!this.opt.loaded) {
            this.switching = true;
            this.loadImage();
        }

        this.showing = true;
        if (quick) {
            this.switching = false;
            this.element.stop().css({
                left: 0
            });
            if (typeof cb == _fn_) cb();
        } else {
            this.switching = true;
            this.element.stop()
                .css({
                    left: this.width * (dir ? 1 : -1)
                })
                .animate({
                    left: 0
                }, this.opt.duration, this.opt.easing, function() {
                    self.switching = false;
                    if (typeof cb == _fn_) cb();
                });
        }
    },
    hide: function(dir, quick, cb) {
        this.showing = false;
        if (quick) {
            this.element.stop().css({
                left: this.width * (dir ? -1 : 1)
            });
            if (typeof cb == _fn_) cb();
        } else {
            var self = this;
            this.switching = true;
            this.element.stop()
                .animate({
                    left: this.width * (dir ? -1 : 1)
                }, this.opt.duration, this.opt.easing, function() {
                    self.switching = false;
                    if (typeof cb == _fn_) cb();
                });
        }
    },
    loadImage: function(cb) {
        if (this.opt.loaded) {
            if (typeof cb == _fn_) cb();
            return;
        }

        this.opt.onLoad = cb;
        this.opt.obj.attr('src', this.opt.src);

        return true;
    },
    resize: function(ww, wh) {
        if (ww && wh) {
            this.width = this.opt.ww = ww;
            this.height = this.opt.wh = wh;
        }

        this.loader.css({
            top: Math.round((this.height - this.loader.height()) / 2),
            left: Math.round((this.width - this.loader.width()) / 2)
        });

        if (this.opt.loaded && !this.opt.error)
            this.reposObject(this.opt);

        if (!this.showing)
            this.element.css({
                left: (this.opt.id * this.width)
            });
    },
    imageLoaded: function(e) {
        this.opt.loaded = true;

        switch (e.type) {
            case 'load':
                this.opt.width = this.opt.obj[0].width;
                this.opt.height = this.opt.obj[0].height;

                this.resize();

                if (this.loader)
                    this.loader.stop().animate({
                        opacity: 0
                    }, 200, 'swing', function() {
                        if (self.loader) {
                            self.loader.remove();
                            self.loader = null;
                        }
                    });

                this.opt.obj.stop().animate({
                    opacity: 1
                }, 200, 'swing');
                if (typeof this.opt.onLoad == _fn_) this.opt.onLoad();

                break;
            case 'error':
                this.opt.error = true;
                break;
        }
    },
    remove: function() {
        this.element.remove();
    }
});
var H5Video = BaseClass.extend({
    init: function(opt) {
        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        this.isPlaying = false;

        this.create();
    },
    create: function() {
        if (!this.element) return;

        var self = this;
        this.play = this.find(this.element, '.play');
        this.video = this.find(this.element, 'video');

        if (!this.video) return;

        this.element.css({
            cursor: 'pointer'
        }).bind('click', function(e) {
            self.toggleVideo();
        });
    },
    toggleVideo: function() {
        if (!this.isPlaying) {

            this.play.css({
                display: 'none'
            });
            this.isPlaying = true;
            this.video[0].play();

        } else if (this.isPlaying) {

            this.play.css({
                display: 'block'
            });
            this.isPlaying = false;
            this.video[0].load();

        }
    },
    resize: function() {

    },
    remove: function() {
        if (this.element)
            this.element.unbind('click');
    }
});
var IndexMouse = BaseClass.extend({
    init: function(opt) {
        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        this.dotTop = 10;
        this.dotLeft = 11;
        this.dotTopTarget = 29;

        this.create();
    },
    create: function() {
        var self = this;

        this.element.bind('click', function(e) {
            self.mouseMouse(e);
        });
        this.dot = this.find(this.element, '.dot');

        this.resize();
    },
    mouseMouse: function(e) {
        switch (e.type) {
            case 'click':
                __app__.scrollTo(__indexPart.height - __app__.fMH);
                break;
        }
    },
    animate: function() {
        var self = this;
        this.dot.stop()
            .css({
                top: this.dotTop,
                left: this.dotLeft,
                opacity: 1
            })
            .delay(200)
            .animate({
                top: self.dotTopTarget,
                opacity: 0
            }, 1500, 'swing', function() {
                $(this).css({
                    top: self.dotTop
                })
                    .animate({
                        opacity: 1
                    }, 500, 'swing', function() {
                        self.animate();
                    });
            });
    },
    resize: function() {
        this.width = this.element.width();
        this.height = this.element.height();

        if (this.width == 27) {
            this.dotTop = 10;
            this.dotLeft = 11;
            this.dotTopTarget = 29;
        } else {
            this.dotTop = 6;
            this.dotLeft = 8;
            this.dotTopTarget = 24;
        }

        this.animate();
    },
    remove: function() {
        this.element.unbind('click mouseenter mouseleave');
    }
})
var Lifehack = BaseClass.extend({
    __className: 'RequestForm',
    init: function(opt) {
        this._id = false;
        this.inited = false;

        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        this.returnFixedContent = false;
        this.opened = false;

    },

    toggleLifeHackForm: function(dir) {
        if (typeof dir == 'undefined') dir = !this.opened;
        if (this.opened == dir) return;

        var self = this;

        if (dir) {
            this.initForm();
            this.element.addClass('opened');
            // __app__.setFixedContent(true);
        } else {
            this.element.removeClass('opened');
            // __app__.setFixedContent(false);
        }

        this.opened = dir;
    },
    initForm: function() {
        this.element.removeClass('loading');
        this.element.removeClass('okay');
        this.element.removeClass('error');
        this.initFields();
    },
    initFields: function() {
        if (this.name) this.name.val('').removeClass('error');
        if (this.phone) this.phone.val('').removeClass('error');
        if (this.email) this.email.val('').removeClass('error');
        if (this.comment) this.comment.val('').removeClass('error');
    },
    gatherData: function() {
        var data = {
            ajax: 1,
            name: this.name.val(),
            email: this.email.val()
        };

        return data;
    },
    validateData: function(data) {
        if (this.name && (data.name.length < 2)) {
            this.name.addClass('error').focus().bind('keydown.error', function() {
                $(this).removeClass('error').unbind('keydown.error');
            });
            return false;
        } else if (this.email && (!window.tt.mailtest(data.email))) {
            this.email.addClass('error').focus().bind('keydown.error', function() {
                $(this).removeClass('error').unbind('keydown.error');
            });
            return false;
        }

        return true;
    },

    showOkay: function() {
        this.element.addClass('okay');
        var self = this;
        setTimeout(function() {
            self.toggleLifeHackForm(false);
        }, 3000);

        // this.setCookie('hideLifehack', true, { expires: 1800 });
    },
    showError: function(data) {
        this.element.addClass('error');
        var self = this;
        setTimeout(function() {
            self.initForm();
        }, 3000);
    },
});
var MainMenu = BaseClass.extend({
    __className: 'MainMenu',
    init: function(opt) {
        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        this.create();
    },
    create: function() {
        var elm;
        var self = this;
        __MainMenu__ = this;

        elm = $('#main-menu');
        this.element = elm.length ? elm : false;

        elm = $('#fixed-menu');
        this.fixedmenu = elm.length ? new FixedMenu({
            _element: elm,
            _delegate: this
        }) : false;

        elm = $('#overlap-menu');
        this.overlapMenu = elm.length ? new OverlapMenu({
            _element: elm,
            _delegate: this
        }) : false;

        elm = $('#request-form');
        this.requestForm = elm.length ? new RequestForm({
            _element: elm,
            _delegate: this,
            _mode: 'request'
        }) : false;

        elm = $('#meeting-form');
        this.meetingForm = elm.length ? new RequestForm({
            _element: elm,
            _delegate: this,
            _mode: 'meeting'
        }) : false;

        elm = $('#consult-form');
        this.consultForm = elm.length ? new RequestForm({
            _element: elm,
            _delegate: this,
            _mode: 'consult'
        }) : false;

        if (this.element) {
            this.toggle = this.find(this.element, '.toggle');
            if (this.toggle) this.toggle.bind('click', function() {
                self.toggleOverlapMenu();
            });

            this.right = this.find(this.element, '.right');
            if (this.right && this.requestForm) this.right.find('.mm-request-form-caller').bind('click', function() {
                self.toggleRequestForm(true);
            });
        }

        $(window).bind('appResize.' + this.__className, function(e, ww, wh) {
            self.resize(ww, wh);
        });
    },
    toggleOverlapMenu: function() {
        if (this.overlapMenu) this.overlapMenu.toggleMenu();
    },
    toggleRequestForm: function(dir) {
        if (this.requestForm) this.requestForm.toggleRequestForm(dir);
    },
    resize: function(ww, wh) {

    },
    remove: function() {
        $(window).unbind('appResize.' + this.__className);
    }
});
var Members = BaseClass.extend({
    __className: 'Members',
    init: function(opt) {
        this._id = false;
        this.inited = false;

        this.element = false;
        this.opt = {
            duration: 1000,
            easing: 'swing'
        };
        this.setOptions(opt);

        if (!this.put()) return;

        this.switching = false;
        this.page = 0;
        this.pageCount = 0;
        this.item = [];

        this.isTeamPage = this.element.hasClass('team-page');

        this.create();
    },
    create: function() {
        var self = this;
        var elm;

        this.plate = this.find(this.element, '.plate');

        elm = this.find(this.element, '.item');
        if (elm) {
            for (var i = 0; i < elm.length; i++) {
                var obj = $(elm[i]);
                var item = {
                    id: i,
                    obj: obj,
                    info: obj.find('.info'),
                    videoCnt: obj.find('.video'),
                    video: obj.find('video')
                };
                if (item.video.length) {
                    item.videoCnt.bind('mouseenter mouseleave', {
                        id: i,
                        item: item,
                        video: item.video
                    }, function(e) {
                        switch (e.type) {
                            case 'mouseenter':
                                e.data.video[0].play(0);
                                break;
                            case 'mouseleave':
                                break;
                        }
                    });
                    item.video.bind('ended', function(e) {
                        this.currentTime = 0;
                    });
                }
                this.item.push(item);
            }
            this.pageCount = Math.ceil(this.item.length / 3);
        }

        this.arrl = this.find(this.element, '.arrl');
        this.arrr = this.find(this.element, '.arrr');

        if (this.arrl && this.arrr) {
            if (this.pageCount > 1) {
                this.arrl.bind('click', function(e) {
                    self.prevPage();
                });
                this.arrr.bind('click', function(e) {
                    self.nextPage();
                });
            } else {
                this.arrl.css({
                    display: 'none'
                });
                this.arrr.css({
                    display: 'none'
                });
            }
        }

        this.inited = true;

    },
    resize: function(ww, wh) {
        this.height = 0;
        this.itemWidth = 0;
        this.plateHeight = 0;

        this.arrWidth = 60;
        this.arrPadding = 60;

        if (this.isTeamPage) {

        }

        if (ww > 1420) {

        } else if (ww > 1260) {
            this.arrPadding = 50;
        } else {
            this.arrWidth = 40;
            this.arrPadding = 40;
        }

        this.itemWidth = Math.round((ww - this.arrWidth * 2 - this.arrPadding * 6) / 3);

        this.itemStartOffset = this.arrPadding * 2 + this.arrWidth;
        this.itemWidthWithPadding = this.itemWidth + this.arrPadding;

        for (var i = 0; i < this.item.length; i++) {
            var item = this.item[i];
            item.obj.css({
                width: this.itemWidth,
                left: this.itemStartOffset + i * (this.itemWidthWithPadding),
                bottom: 0,
                display: i > 2 ? 'none' : 'block'
            });

            var itemHeight = item.obj.outerHeight(true);
            if (itemHeight > this.height) {
                this.height = itemHeight;
            }

            var infoHeight = item.info.outerHeight(true);
            if (infoHeight > this.plateHeight) {
                this.plateHeight = infoHeight;
            }
        }

        if (this.plate) this.plate.css({
            height: this.plateHeight
        });
        this.element.css({
            height: this.height
        });
    },
    prevPage: function() {
        var page = this.page - 1;
        if (page < 0) page = this.pageCount - 1;

        this.switchPage(page, false);
    },
    nextPage: function() {
        var page = this.page + 1;
        if (page >= this.pageCount) page = 0;

        this.switchPage(page, true);
    },
    switchPage: function(page, dir) {
        if (this.page == page) return;
        if (this.switching) return;
        this.switching = true;

        if (typeof dir == _un_) dir = true;

        var startPos;
        var self = this;

        var curItems = [];
        var nxtItems = [];

        startPos = this.page * 3;
        for (var i = startPos; i < startPos + 3; i++)
            if (typeof this.item[i] != _un_)
                curItems.push(this.item[i]);

        startPos = page * 3;
        for (var i = startPos; i < startPos + 3; i++)
            if (typeof this.item[i] != _un_)
                nxtItems.push(this.item[i]);

        this.page = page;

        for (var i = 0; i < curItems.length; i++) {
            var item = curItems[i];
            var duration = this.opt.duration + (!dir ? (100 * i) : (300 - i * 100));

            item.obj.stop().animate({
                left: this.itemStartOffset + i * (this.itemWidthWithPadding) + __app__.ww * (dir ? -1 : 1)
            }, duration, this.opt.easing, function() {
                $(this).css({
                    display: 'none'
                });
            });
        }

        for (var i = 0; i < nxtItems.length; i++) {
            var item = nxtItems[i];
            var targetLeft = this.itemStartOffset + i * (this.itemWidthWithPadding);
            var last = (i == nxtItems.length - 1);

            var delay = dir ? (100 * i) : (300 - i * 100);

            item.obj.stop().css({
                left: targetLeft + __app__.ww * (dir ? 1 : -1),
                display: 'block'
            }).delay(delay).animate({
                left: targetLeft
            }, this.opt.duration, this.opt.easing, function() {
                if (last)
                    self.switching = false;
            });
        }

    },
    remove: function() {
        this.rm();
    }
});
var Members2 = BaseClass.extend({
    __className: 'Members2',
    init: function(opt) {
        this._id = false;
        this.inited = false;

        this.element = false;
        this.opt = {
            duration: 1000,
            easing: 'swing'
        };
        this.setOptions(opt);

        if (!this.put()) return;

        this.switching = false;
        this.page = 0;
        this.pageCount = 0;
        this.item = [];

        this.isTeamPage = this.element.hasClass('team-page');

        this.create();
    },
    create: function() {
        var self = this;
        var elm;

        this.plate = this.find(this.element, '.plate');

        elm = this.find(this.element, '.item');
        if (elm) {
            for (var i = 0; i < elm.length; i++) {
                var obj = $(elm[i]);
                var item = {
                    id: i,
                    pos: i + 1,
                    obj: obj,
                    info: obj.find('.info'),
                    videoCnt: obj.find('.video'),
                    video: obj.find('.video-a'),
                    videoL: obj.find('.video-l'),
                    videoR: obj.find('.video-r'),
                    activate: function(dir) {
                        this.video.removeClass('active');
                        this.videoL.removeClass('active');
                        this.videoR.removeClass('active');

                        switch (dir) {
                            case 'l':
                                this.videoL.addClass('active');
                                this.videoR[0].pause();
                                this.videoR[0].currentTime = 0;
                                this.video[0].pause();
                                this.video[0].currentTime = 0;
                                this.videoL[0].play(0);
                                break;
                            case 'r':
                                this.videoR.addClass('active');
                                this.videoL[0].pause();
                                this.videoL[0].currentTime = 0;
                                this.video[0].pause();
                                this.video[0].currentTime = 0;
                                this.videoR[0].play(0);
                                break;
                            default:
                                this.video.addClass('active');
                                this.videoL[0].pause();
                                this.videoL[0].currentTime = 0;
                                this.videoR[0].pause();
                                this.videoR[0].currentTime = 0;
                                this.video[0].play(0);

                                var shifted = ((self.page * 3 + 2) > self.item.length - 1) ? (self.item.length - 1) - self.page * 3 : 0,
                                    n = (this.pos + shifted) % 3;

                                switch (n) {
                                    case 1:
                                        if (typeof self.item[this.id + 1] != 'undefined')
                                            self.item[this.id + 1].activate('l');
                                        break;
                                    case 2:
                                        if (typeof self.item[this.id - 1] != 'undefined')
                                            self.item[this.id - 1].activate('r');
                                        if (typeof self.item[this.id + 1] != 'undefined')
                                            self.item[this.id + 1].activate('l');
                                        break;
                                    case 0:
                                        if (typeof self.item[this.id - 1] != 'undefined')
                                            self.item[this.id - 1].activate('r');
                                        break;
                                }

                                break;
                        }
                    }
                };

                if (item.video.length) {
                    item.videoCnt.bind('mouseenter mouseleave', {
                        id: i
                    }, function(e) {
                        var item = self.item[e.data.id];
                        switch (e.type) {
                            case 'mouseenter':
                                item.activate();
                                break;
                        }
                    });
                    item.video.bind('ended', function(e) {
                        this.currentTime = 0;
                    });
                }

                this.item.push(item);
            }
            this.pageCount = Math.ceil(this.item.length / 3);
        }

        this.arrl = this.find(this.element, '.arrl');
        this.arrr = this.find(this.element, '.arrr');

        if (this.arrl && this.arrr) {
            if (this.pageCount > 1) {
                this.arrl.bind('click', function(e) {
                    self.prevPage();
                });
                this.arrr.bind('click', function(e) {
                    self.nextPage();
                });
            } else {
                this.arrl.css({
                    display: 'none'
                });
                this.arrr.css({
                    display: 'none'
                });
            }
        }

        this.inited = true;

    },
    resize: function(ww, wh) {
        this.height = 0;
        this.itemWidth = 0;
        this.plateHeight = 0;

        this.arrWidth = 60;
        this.arrPadding = 60;

        if (this.isTeamPage) {

        }

        if (ww > 1420) {

        } else if (ww > 1260) {
            this.arrPadding = 50;
        } else {
            this.arrWidth = 40;
            this.arrPadding = 40;
        }

        this.itemWidth = Math.round((ww - this.arrWidth * 2 - this.arrPadding * 6) / 3);

        this.itemStartOffset = this.arrPadding * 2 + this.arrWidth;
        this.itemWidthWithPadding = this.itemWidth + this.arrPadding;

        for (var i = 0; i < this.item.length; i++) {
            var item = this.item[i];
            item.obj.css({
                width: this.itemWidth,
                left: this.itemStartOffset + i * (this.itemWidthWithPadding),
                bottom: 0,
                display: i > 2 ? 'none' : 'block'
            });

            var itemHeight = item.obj.outerHeight(true);
            if (itemHeight > this.height) {
                this.height = itemHeight;
            }

            var infoHeight = item.info.outerHeight(true);
            if (infoHeight > this.plateHeight) {
                this.plateHeight = infoHeight;
            }
        }

        if (this.plate) this.plate.css({
            height: this.plateHeight
        });
        this.element.css({
            height: this.height
        });
    },
    prevPage: function() {
        var page = this.page - 1;
        if (page < 0) page = this.pageCount - 1;

        this.switchPage(page, false);
    },
    nextPage: function() {
        var page = this.page + 1;
        if (page >= this.pageCount) page = 0;

        this.switchPage(page, true);
    },
    switchPage: function(page, dir) {
        if (this.page == page) return;
        if (this.switching) return;
        this.switching = true;

        if (typeof dir == _un_) dir = true;

        var startPos;
        var self = this;

        var curItems = [];
        var nxtItems = [];

        startPos = this.page * 3;
        if (startPos + 3 > this.item.length - 1) {
            startPos = this.item.length - 3;
        }
        for (var i = startPos; i < startPos + 3; i++)
            if (typeof this.item[i] != _un_)
                curItems.push(this.item[i]);

        startPos = page * 3;
        if (startPos + 3 > this.item.length - 1) {
            startPos = this.item.length - 3;
        }
        for (var i = startPos; i < startPos + 3; i++)
            if (typeof this.item[i] != _un_)
                nxtItems.push(this.item[i]);

        this.page = page;

        for (var i = 0; i < curItems.length; i++) {
            var item = curItems[i];
            var duration = this.opt.duration + (!dir ? (100 * i) : (300 - i * 100));

            item.obj.stop().animate({
                left: this.itemStartOffset + i * (this.itemWidthWithPadding) + __app__.ww * (dir ? -1 : 1)
            }, duration, this.opt.easing, function() {
                $(this).css({
                    display: 'none'
                });
            });
        }

        for (var i = 0; i < nxtItems.length; i++) {
            var item = nxtItems[i];
            var targetLeft = this.itemStartOffset + i * (this.itemWidthWithPadding);
            var last = (i == nxtItems.length - 1);

            var delay = dir ? (100 * i) : (300 - i * 100);

            item.obj.stop().css({
                left: targetLeft + __app__.ww * (dir ? 1 : -1),
                display: 'block'
            }).delay(delay).animate({
                left: targetLeft
            }, this.opt.duration, this.opt.easing, function() {
                if (last)
                    self.switching = false;
            });
        }

    },
    remove: function() {
        this.rm();
    }
});
var OverlapMenu = BaseClass.extend({
    __className: 'OverlapMenu',
    init: function(opt) {
        this.delegate = false;
        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        this.opened = false;

        this.sizingRules = [];
        this.returnFixedContent = false;

        this.create();
    },
    create: function() {
        var elm;
        var self = this;

        this.bg = this.find(this.element, '.bg');
        if (this.bg) this.bgImg = this.find(this.bg, 'img');

        this.cnt = this.find(this.element, '.cnt');

        this.right = this.find(this.element, '.right');
        if (this.right) this.right.find('.btn').bind('click', function() {
            self.delegate.toggleRequestForm(true);
        });

        this.toggle = this.find(this.element, '.toggle');
        if (this.toggle) this.toggle.bind('click', function() {
            self.toggleMenu(false);
        });

        $(window).bind('appResize.' + this.__className, function(e, ww, wh) {
            self.resize(ww, wh);
        });
    },
    resize: function(ww, wh) {
        var dislpay = this.element.css('display');
        this.element.css({
            display: 'block',
            paddingTop: 0
        });

        this.cnt.css({
            paddingTop: Math.round((wh - this.cnt.outerHeight(true)) / 2)
        });

        this.element.css({
            display: dislpay
        });

        if (this.bg && this.bgImg) {
            this.reposObject({
                ww: ww,
                wh: wh,
                width: 1020,
                height: 660,
                obj: this.bgImg
            });
        }
    },
    toggleMenu: function(dir) {
        if (dir == this.opened) return;

        var self = this;

        if (this.opened) {
            this.element.stop().animate({
                top: -__app__.wh
            }, 500, 'swing', function() {
                $(this).css({
                    display: 'none'
                });
            });
            if (this.returnFixedContent) __app__.setFixedContent(false);
        } else {
            this.element.stop().css({
                display: 'block',
                top: -__app__.wh
            }).animate({
                top: 0
            }, 500, 'swing', function() {
                self.returnFixedContent = __app__.setFixedContent(true);
            });
        }

        this.opened = !this.opened;
    },
    remove: function() {
        $(window).unbind('appResize.' + this.__className);
    }
});
var PXB = BaseClass.extend({
    __className: 'PXB',
    init: function(opt) {
        this._id = 0;
        this.inited = false;

        this.element = false;
        this.opt = {

            startIndex: 1

        };
        this.setOptions(opt);

        if (!this.put()) return;

        this.item = [];

        this.create();
    },
    create: function() {
        var self = this;

        var elm = this.find(this.element, '.pxb');
        if (elm.length) {
            for (var i = 0; i < elm.length; i++) {
                var obj = $(elm[i]).attr('pxb', i).css({
                    zIndex: this.opt.startIndex + i
                });

                this.item.push({
                    id: i,
                    obj: obj,
                    fixed: false,
                    top: 0
                })
            }
        }

        $(window).bind('appScroll.' + this.__className + this._id, function(e, scrollTop) {
            self.updateScroll(scrollTop);
        });
        $(window).bind('appResize.' + this.__className + this._id, function(e, ww, wh) {
            self.resize(ww, wh);
        });

        this.inited = true;
    },
    resize: function(ww, wh) {

        $(this.item).each(function() {
            var off = this.obj.offset();
            this.y = off.top;
            this.height = this.obj.outerHeight(true);
            this.obj.css({
                width: ww
            });
        });

    },
    updateScroll: function(scrollTop) {
        var fixed = false;
        for (var i = this.item.length - 2; i >= 0; i--) {
            var item = this.item[i];

            if (item.y <= scrollTop) {

                if (item.fixed) {

                    item.obj.css({
                        top: scrollTop
                    });

                } else {

                    fixed = true;

                    item.obj.css({
                        position: 'absolute',
                        top: item.y
                    });
                    item.fixed = true;

                    __app__.content.css({
                        paddingTop: item.y + item.height
                    });

                }

            } else if (item.fixed) {

                item.obj.css({
                    position: 'relative',
                    top: 'auto'
                });
                item.fixed = false;

                __app__.content.css({
                    paddingTop: item.y
                });

            }
        }
    },
    remove: function() {
        $(window).unbind('appScroll.' + this.__className + this._id);
        this.rm();
    }
})
var __PagePart__ = {};
var PagePart = BaseClass.extend({
    __className: 'PagePart',
    init: function(opt) {
        this._id = false;
        this.inited = false;

        this.element = false;
        this.opt = {
            type: 'default',
            partHeadTop: 0,
            partHeadHeight: 0,
            partHeadAnimated: false
        };
        this.setOptions(opt);

        if (!this.put()) return;
        this.item = [];
        this.USF = [];

        this.create();
    },
    create: function() {
        var self = this;

        this.partHead = this.find(this.element, '.part-head');
        if (this.partHead) {
            this.ph_ttl = this.find(this.partHead, 'h1');
            this.ph_txt = this.find(this.partHead, 'p');

            this.USF.push(function(self, scrollTop) {

                if (!self.opt.partHeadAnimated && self.opt.partHeadTop) {
                    if (scrollTop + __app__.wh > self.opt.partHeadTop) {
                        if (!self.opt.partHeadAnimated) {
                            self.partHead.addClass('animate');
                            self.opt.partHeadAnimated = true;
                        }
                    } else {
                        if (self.opt.partHeadAnimated) {
                            self.partHead.removeClass('animate');
                            self.opt.partHeadAnimated = false;
                        }
                    }
                }
            });
        }

        this._create();

        $(window).bind('appResize.' + this.__className + this._id, function(e, ww, wh) {
            self.resize(ww, wh);
        });
        $(window).bind('appScroll.' + this.__className + this._id, function(e, scrollTop) {
            self.updateScroll(scrollTop);
        });
        this.inited = true;

        __PagePart__[this.opt.type] = this;
    },
    resize: function(ww, wh) {
        this._resize(ww, wh);

        if (this.partHead) {
            this.opt.partHeadHeight = this.partHead.outerHeight(true);
            this.opt.partHeadTop = this.partHead.offset().top + Math.round(this.opt.partHeadHeight / 2);
        }
    },
    remove: function() {
        $(window).unbind('appResize.' + this.__className + this._id);
        $(window).unbind('appScroll.' + this.__className + this._id);

        this._remove();
        this.rm();
    },
    updateScroll: function(scrollTop) {
        if (this.USF.length)
            for (var i = 0; i < this.USF.length; i++)
                this.USF[i](this, scrollTop);

        this._updateScroll();
    },
    _create: function() {},
    _resize: function() {},
    _remove: function() {},
    _updateScroll: function() {}
});

function gotoPagePart(type) {
    if (typeof __PagePart__[type] != _un_)
        __app__.scrollTo(Math.round(__PagePart__[type].element.offset().top - __app__.fMH));
}

var PagePart_default = PagePart.extend({
    __className: 'PagePart_default'
});

var PagePart_services = PagePart.extend({
    __className: 'PagePart_services',
});

var PagePart_company = PagePart.extend({
    __className: 'PagePart_company',
    _create: function() {
        //var elm = this.find(this.element,'.company');
        //this.company = elm ? new Company({ _element : elm, _delegate : this }) : false;

        this.company = this.find(this.element, '.company');
    },
    _resize: function(ww, wh) {
        //if(this.company) this.company.resize(ww,wh);

        if (this.company) {
            var partHeight = this.partHead ? this.partHead.outerHeight(true) : 0;
            this.company.css({
                height: wh - partHeight - __app__.fMH
            });
        }
    }
});

var PagePart_achivements = PagePart.extend({
    __className: 'PagePart_achivements',
    _create: function() {
        var elm = $('#achievements');
        this.achievements = elm.length ? new Achievements({
            _element: elm,
            _delegate: this
        }) : false;
    },
    _resize: function(ww, wh) {
        if (this.achievements) this.achievements.resize(ww, wh);
    }
});

var PagePart_team = PagePart.extend({
    __className: 'PagePart_team',
    _create: function() {
        this.team = this.find(this.element, '.team');
    },
    _resize: function(ww, wh) {
        if (this.team) {
            var partHeight = this.partHead ? this.partHead.outerHeight(true) : 0;
            this.team.css({
                height: wh - partHeight - __app__.fMH
            });
        }
    }
});

var PagePart_members = PagePart.extend({
    __className: 'PagePart_members',
    _create: function() {
        var elm = this.find(this.element, '.members');
        this.members = elm ? new Members({
            _element: elm,
            _delegate: this
        }) : false;
    },
    _resize: function(ww, wh) {
        if (this.members) this.members.resize(ww, wh);
    }
});

var PagePart_members2 = PagePart.extend({
    __className: 'PagePart_members2',
    _create: function() {
        var elm = this.find(this.element, '.members2');
        this.members = elm ? new Members2({
            _element: elm,
            _delegate: this
        }) : false;
    },
    _resize: function(ww, wh) {
        if (this.members) this.members.resize(ww, wh);
    }
});

var PagePart_clients = PagePart.extend({
    __className: 'PagePart_clients',
    _create: function() {
        var elm = this.element.find('.clients');
        this.clients = elm ? new Clients({
            _element: elm,
            _delegate: this
        }) : false;
    },
    _resize: function(ww, wh) {
        if (this.clients) this.clients.resize(ww, wh);
    }
});
var PagePart_Company = PagePart.extend({
    __className: 'PagePart_Company',
    _create: function() {
        var self = this;
        var video = this.find(this.element, '.big-video');
        if (video)
            for (var i = 0; i < video.length; i++)
                new H5Video({
                    _element: $(video[i]),
                    _delegate: this
                });

        this.officeTriggers = [];
        this.officeTriggerPos = 0;
        this.officesSwitcher = this.find(this.element, '.js-offices-switcher');
        if (this.officesSwitcher) {
            var items = this.find(this.officesSwitcher, '.js-office-trigger');
            if (items) {
                for (var i = 0; i < items.length; i++) {
                    (function(obj, id) {
                        var item = {
                            id: id,
                            obj: obj,
                            office_id: obj.attr('office_id'),
                            act: obj.hasClass('act'),
                            activate: function(dir) {
                                if (this.act == dir) return;
                                if (dir) {
                                    this.obj.addClass('act');
                                    if (item.officeObj) item.officeObj.css({
                                        display: 'block'
                                    });
                                } else {
                                    this.obj.removeClass('act');
                                    if (item.officeObj) item.officeObj.css({
                                        display: 'none'
                                    });
                                }
                                this.act = dir;
                            }
                        };

                        item.officeObj = item.office_id ? $('#' + item.office_id) : false;

                        if (item.act) self.officeTriggerPos = id;

                        obj.bind('click', function() {
                            if (item.act) return;
                            self.officeTriggers[self.officeTriggerPos].activate(false);
                            item.activate(true);
                            self.officeTriggerPos = id;
                        });

                        self.officeTriggers.push(item);
                    })($(items[i]), i);
                }
            }
        }
    },
    _resize: function(ww, wh) {

    }
});
var PagePart_CompanyNumbers = PagePart.extend({
    __className: 'PagePart_CompanyNumbers',
    _create: function() {
        var numbers = this.find(this.element, '.CompanyNumbers');
        this.numbers = numbers ? new CompanyNumbers({
            _delegate: this,
            _element: numbers
        }) : false;

        this.isPlaying = true;

        var self = this;
        this.bgVideo = this.find(this.element, 'video');
        this.videoPreloadPrc = 0;
        if (this.bgVideo) {
            var file = this.bgVideo[0].poster.replace('.jpg', '');

            this.bgVideo.css({
                opacity: 0
            });

            this.bgVideo[0].addEventListener("loadedmetadata", function(e) {
                self.preloadBGVideo();
            });

            this.addSourceToVideo(this.bgVideo[0], file + ".mp4?v=2", "video/mp4");
            this.addSourceToVideo(this.bgVideo[0], file + ".ogv?v=2", "video/ogv");
            this.addSourceToVideo(this.bgVideo[0], file + ".webm?v=2", "video/webm");
        }
    },
    preloadBGVideo: function() {
        if (this.bgVideoLoaded) {
            this.bgVideo.css({
                opacity: 1
            });
            this.bgVideo[0].play(0);
            return;
        }

        if (this.bgVideo) {
            var self = this;
            var video = this.bgVideo;

            var func = function(e) {
                var preloadPrc = self.progressHandler(e, video[0], 5);
                self.videoPreloadPrc = (preloadPrc > 5) ? 1 : (preloadPrc / 5);

                if (preloadPrc > 5) {
                    video[0].removeEventListener("progress", func, false);
                    self.bgVideo.animate({
                        opacity: 1
                    }, 500, 'swing');
                    self.BGVideoLoaded();
                }
            };

            video[0].addEventListener("progress", func, false);
            video[0].play();
        }
    },
    BGVideoLoaded: function() {
        this.bgVideoLoaded = true;
        this.bgVideo[0].currentTime = 0;
        this.bgVideo[0].play();
    },
    _resize: function(ww, wh) {
        this.width = ww;
        this.height = wh - __app__.fMH;

        if (this.numbers) {
            this.height = Math.max(this.height, this.numbers.resize(this.width, this.height));
        }

        this.element.css({
            width: this.width,
            height: this.height
        });

        if (this.bgVideo) this.reposObject({
            ww: this.width,
            wh: this.height,
            width: 1280,
            height: 720,
            obj: this.bgVideo
        });
    }
});

var CompanyNumbers = BaseClass.extend({
    __className: 'CompanyNumbers',
    init: function(opt) {
        this._id = 0;
        this._inited = false;

        this.element = false;
        this.delegate = false;
        this.opt = {};
        this.setOptions(opt);

        if (!this.put()) return;

        this.item = [];
        this.count = 0;

        this.create();
    },
    create: function() {
        var elm;
        var self = this;

        elm = this.find(this.element, '.number');
        if (elm) {
            for (var i = 0; i < elm.length; i++) {
                var obj = $(elm[i]);
                var item = {
                    id: i,
                    obj: obj,
                    dsc: this.find(obj, '.dsc')
                };
                this.item.push(item);
                this.count++;
            }
        }
    },
    resize: function(ww, wh) {
        // var height = Math.floor(wh / 3);
        // var maxHeight = 0;

        // for(var a=0;a<this.count;a++) this.item[a].obj.css({ height : 'auto' });
        // for(var a=0;a<this.count;a++) maxHeight = Math.max( maxHeight, this.item[a].obj.outerHeight(true) );

        // height = Math.max(height,maxHeight);

        // for(var i=0;i<this.count;i++)
        // {
        // 	var item = this.item[i];
        // 	item.obj.css({ height : height });

        // 	if(item.dsc)
        // 	{
        // 		item.dsc.css({ width : 'auto' });
        // 		item.dsc.css({ width : item.dsc.outerWidth(true) });
        // 	}
        // }

        // return height * 3;

        this.element.css({
            paddingTop: 0,
            paddingBottom: 0
        });
        this.height = this.element.outerHeight(true) + 80;
        var padding = 0;
        if (wh > this.height) {
            padding = Math.round((wh - this.height) / 2);
            this.element.css({
                paddingTop: padding,
                paddingBottom: padding
            });
        }

        return (this.height + padding * 2);
    }
})
var PagePart_DeliveryTariffs = PagePart.extend({
    __className: 'PagePart_DeliveryTariffs',
    _create: function() {
        var self = this;
        $('.lp-request-form-caller').bind('click', function() {
            $('body, html').animate({
                scrollTop: $('.lp-request-form').offset().top
            });
        });

        var lpRequestForm = $("#lp-request-form");
        if (lpRequestForm.length) {
            new ServiceRequestForm({
                _element: lpRequestForm,
                _delegate: this
            })
        }
    },
    _resize: function(ww, wh) {

    }
});
var PagePart_Header = PagePart.extend({
    __className: 'PagePart_Header',
    _create: function() {
        var self = this;
        __indexPart = this;
    },
    _resize: function(ww, wh) {
        this.height = this.element.height();
    }
});
var PagePart_Landing = PagePart.extend({
    __className: 'PagePart_Landing',
    _create: function() {
        var self = this,
            elm;

        var requestForm = this.find(this.element, '.request-form');
        this.requestForm = requestForm ? new ServiceRequestForm({
            _element: requestForm,
            _delegate: this
        }) : false;

        this.vc = this.find(this.element, '.video-container');
        this.vp = this.find(this.element, '.videoPlayer');
        if (this.vc && this.vp) {
            this.vp = new VideoPlayer({
                _element: this.vp[0],
                _onReady: function() {
                    self.resize();
                },
                _externalResize: true
            });
            this.resize();
        }

    },
    _resize: function() {
        if (this.vc && this.vp) {
            var ww = this.vc[0].getBoundingClientRect().width,
                wh = Math.round(ww / this.vp.videoWidth * this.vp.videoHeight);

            if (ww && wh) {
                this.vc.css({
                    height: wh
                });
                this.vp.resize(ww, wh);
            }
        }
    }
});
var PagePart_LifePage = PagePart.extend({
    __className: 'PagePart_LifePage',
    _create: function() {
        var self = this,
            elm;

        this.lifeContent = this.find(this.element, '.life-content');
        this.centerContent = this.find(this.element, '.center-content');
        this.rightPanel = this.find(this.element, '.right-panel');
        this.lifeContent = this.find(this.element, '.life-content');

        var servicesMenu = $('#life-menu');
        this.servicesMenu = false;
        if (servicesMenu.length)
            this.servicesMenu = new ServicesMenu({
                _element: servicesMenu,
                _delegate: this
            });

        elm = $('#life-services');
        this.lifeServices = elm.length ? new ServicesOnLife({
            _element: elm,
            _delegate: this
        }) : false;

        elm = $('.js-life-subscribe');
        this.requestFormLife = elm.length ? new RequestFormLife({
            _element: elm,
            _delegate: this
        }) : false;

        this.post = [];
        this.postOpened = false;

        var requestForm = this.find(this.element, '.request-form');
        this.requestForm = requestForm ? new ServiceRequestForm({
            _element: requestForm,
            _delegate: this
        }) : false;

        elm = this.find(this.element, '.post');
        if (elm) {
            for (var i = 0; i < elm.length; i++) {
                var obj = $(elm[i]);
                var post = new LifePostSimple({
                    _delegate: this,
                    _element: obj
                });
                this.post.push(post);
            }
        }

        this.postBoxContainer = this.find(this.element, '#postbox-container');
        if (this.postBoxContainer) {
            this.postBoxBusy = false;
            this.postBoxPage = 1;
            this.postBoxMorePosts = this.find(this.element, '#postbox-more-posts');
            if (this.postBoxMorePosts) {
                this.postBoxMorePosts.bind('click', function(e) {
                    if (self.postBoxBusy) return;
                    self.postBoxBusy = true;

                    self.postBoxPage++;
                    var path = window.location.pathname;
                    var search = window.location.search;
                    if (/page\=\d+/.test(search))
                        search = search.replace(/page\=\d+/, 'page=' + self.postBoxPage);
                    else {
                        if (search.length) search += '&';
                        else search = '?';
                        search += 'page=' + self.postBoxPage;
                    }

                    var scrollTarget = self.postBoxContainer.offset().top + self.postBoxContainer.outerHeight(true) - 80;

                    $.ajax({
                        url: path + search,
                        type: 'GET',
                        dataType: 'json'
                    })
                        .fail(function() {
                            self.postBoxMorePosts.remove();
                        })
                        .done(function(data) {
                            self.postBoxContainer.append(data.html);

                            $("html,body").animate({
                                scrollTop: scrollTarget
                            }, 500);

                            if (!data.haveMore)
                                self.postBoxMorePosts.remove();
                        })
                        .always(function() {
                            self.postBoxBusy = false;
                        });
                });
            }
        }

        if (this.rightPanel) {
            this.lifeSearchForm = this.find(this.rightPanel, '#life-search-form');
            if (this.lifeSearchForm) {
                this.lifeSearchFormInput = this.find(this.rightPanel, '#life-search-form-input');
                this.lifeSearchFormSubmit = this.find(this.rightPanel, '#life-search-form-submit');
                if (this.lifeSearchFormInput && this.lifeSearchFormSubmit) {
                    this.lifeSearchFormSubmit.bind('click', function(e) {
                        self.lifeSearchForm.submit();
                    });
                    this.lifeSearchForm.bind('submit', function(e) {
                        if (self.lifeSearchFormInput.val().length < 2)
                            self.cancelEvent(e);
                    });
                }
            }
        }

        elm = this.find(this.element, '.post-opened');
        if (elm) this.postOpened = new LifePostOpened({
            _delegate: this,
            _element: elm
        });
    },
    _resize: function() {
        if (this.post.length) {
            for (var i = 0; i < this.post.length; i++) {
                this.post[i].resize();
            }
        }

        var rightPanelWidth = this.rightPanel ? (240 + 1) : 0;
        var lifeContentPadding = parseInt(this.centerContent.css('padding-left')) * 2;

        var ww = Math.min((__app__.ww - rightPanelWidth - lifeContentPadding), (this.postOpened ? 850 : 1000));
        ww = Math.max(ww, 500);

        this.centerContent.css({
            width: ww
        });

        if (this.postOpened)
            this.postOpened.resize(ww);

        if (this.lifeServices)
            this.lifeServices.resize();

        this.lifeContent.css({
            height: 'auto'
        });
        var lifeHeight = this.lifeContent.outerHeight(true);

        var minLifeHeight = __app__.wh - __app__.fMH - __FOOTER__.element.outerHeight(true) - 120;
        if (lifeHeight < minLifeHeight)
            this.lifeContent.css({
                height: minLifeHeight
            });

    }
});

var LifePostSimple = BaseClass.extend({
    __className: 'LifePostSimple',
    init: function(opt) {
        this.delegate = false;
        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        this.create();
    },
    create: function() {
        var self = this,
            elm;

        this.vc = this.find(this.element, '.video-cover');
        this.vp = this.find(this.element, '.videoPlayer');
        if (this.vc && this.vp) {
            this.vp = new VideoPlayer({
                _element: this.vp[0],
                _onReady: function() {
                    self.resize();
                },
                _externalResize: true
            });
            this.resize();
        }

    },
    resize: function() {
        if (this.vc && this.vp) {
            var ww = this.vc[0].getBoundingClientRect().width,
                wh = Math.round(ww / this.vp.videoWidth * this.vp.videoHeight);

            if (ww && wh) {
                this.vc.css({
                    height: wh
                });
                this.vp.resize(ww, wh);
            }
        }
    },
    remove: function() {
        this.rm();
    }
});

var LifePostOpened = BaseClass.extend({
    __className: 'LifePostOpened',
    init: function(opt) {
        this.delegate = false;
        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        if (!this.put()) return;

        this.slider = [];
        this.postImage = [];
        this.postVideo = [];

        this.create();
    },
    create: function() {
        var elm;

        elm = this.find(this.element, '.cntBlk-slider');
        if (elm) {
            var slider = new GalleryViewer({
                _delegate: this,
                _element: elm,
                viewerMode: 'slider'
            });
            this.slider.push(slider);
        }

        elm = this.find(this.element, '.cntBlkImg');
        if (elm) {
            for (var i = 0; i < elm.length; i++) {
                var obj = $(elm[i]);
                this.postImage.push(new LifeImage({
                    _delegate: this,
                    _element: obj
                }));
            }
        }

        elm = this.find(this.element, '.videoPlayer');
        if (elm) {
            for (var i = 0; i < elm.length; i++) {
                var obj = $(elm[i]);
                this.postVideo.push(new LifeVideo({
                    _delegate: this,
                    _element: obj
                }));
            }
        }

        elm = this.find(this.element, '.social-buttons');
        if (elm) {
            var social = elm;

            var data = {
                url: social.attr('url'),
                ttl: social.attr('ttl'),
                img: social.attr('img')
            };

            //social.find('.fb').bind(tt.is.click,data,function(e){ __app__.share.fb(e.data); });
            //social.find('.vk').bind(tt.is.click,data,function(e){ __app__.share.vk(e.data); });
            //social.find('.twitter').bind(tt.is.click,data,function(e){ __app__.share.twitter(e.data); });
            social.find('.lj').bind(tt.is.click, data, function(e) {
                __app__.share.lj(e.data);
            });
        }

    },
    resize: function(ww) {
        if (this.postImage.length)
            for (var i = 0; i < this.postImage.length; i++)
                this.postImage[i].resize(ww);

        if (this.postVideo.length)
            for (var i = 0; i < this.postVideo.length; i++)
                this.postVideo[i].resize(ww);
    },
    remove: function() {
        this.rm();
    }
});

var LifeImage = BaseClass.extend({
    init: function(opt) {
        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        this.defW = parseInt(this.element.css('width'));
        this.defH = parseInt(this.element.css('height'));

        this.width = 0;
        this.height = 0;

        this.create();
    },
    create: function() {

    },
    resize: function(ww) {
        this.width = ww;
        this.height = Math.round(ww / this.defW * this.defH);
        this.element.css({
            width: this.width,
            height: this.height
        });
    }
});

var LifeVideo = BaseClass.extend({
    init: function(opt) {
        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        this.defW = parseInt(this.element.attr('width'));
        this.defH = parseInt(this.element.attr('height'));

        this.width = 0;
        this.height = 0;

        this.create();
    },
    create: function() {

    },
    resize: function(ww) {
        this.width = ww;
        this.height = Math.round(ww / this.defW * this.defH);
        this.element.css({
            width: this.width,
            height: this.height
        });
    }
});
var PagePart_MarketingKit = PagePart.extend({
    __className: 'PagePart_MarketingKit',
    _create: function() {
        function loadApp() {
            $('.flipbook').turn({
                page: 1,
                width: 1200,
                height: 600,
                elevation: 50,
                gradients: true,
                autoCenter: true
            }).bind('click mousemove', function(e) {

                var next = e.pageX > $(this).offset().left + $(this).width() / 2;

                if (e.type == 'click') {
                    if (next)
                        $(this).turn('next');
                    else
                        $(this).turn('previous');
                }
            })
                .bind("turning", function(event, page, view) {

                    if (page < 2)
                        $('.flipbook-prev').css({
                            display: 'none'
                        });
                    else
                        $('.flipbook-prev').css({
                            display: 'block'
                        });

                });

            $('.flipbook-prev').bind('click', function() {
                $('.flipbook').turn('previous');
            });

            $('.flipbook-next').bind('click', function() {
                var page = $(".flipbook").turn("page");
                var pages = $(".flipbook").turn("pages");
                if (page >= pages)
                    $('.flipbook').turn('page', 1);
                else
                    $('.flipbook').turn('next');
            });
        }

        yepnope({
            test: Modernizr.csstransforms,
            yep: ['/mk/turn.js'],
            nope: ['/mk/turn.html4.min.js'],
            complete: loadApp
        });

        elm = $('#life-services');
        this.lifeServices = elm.length ? new ServicesOnLife({
            _element: elm,
            _delegate: this
        }) : false;
    },
    _resize: function() {
        if (this.lifeServices)
            this.lifeServices.resize();

        this.height = Math.max(650, window.innerHeight - 172);
        this.element.css({
            height: this.height
        });
    }
});
var PagePart_Minifooter = PagePart.extend({
    __className: 'PagePart_Minifooter',
    _create: function() {
        __FOOTER__ = this;
        this.miniFooter = true;

        this.showinghHeight = 0;
    },
    _resize: function(ww, wh) {
        this.footerHeight = this.element.height();

        this.contentHeight = __app__.content.outerHeight(true);
        this.fullHeight = this.contentHeight;
    },
    updateFooter: function(heightChange, duration) {
        return false;
    }
});
var PagePart_OfficeImage = PagePart.extend({
    __className: 'PagePart_OfficeImage',
    _create: function() {
        var self = this;
        this.container = this.find(this.element, '.container');
    },
    _resize: function(ww, wh) {
        if (this.container) {
            this.height = Math.round(Math.max(500, window.innerHeight / 3 * 2));
            this.width = Math.min(window.innerWidth - 80, Math.round(this.height * 2));
            this.height = Math.round(1120 / 1680 * this.width);
            for (var i = 0; i < this.container.length; i++) {
                $(this.container[i]).css({
                    width: this.width,
                    height: this.height
                });
            }
        }
    }
});
var PagePart_Papers = PagePart.extend({
    __className: 'PagePart_Papers',
    _create: function() {
        this.papers = this.find(this.element, '.papers');
        this.papers = this.papers ? new Papers({
            _element: this.papers
        }) : false;
    },
    _resize: function(ww, wh) {
        if (this.papers) this.papers.resize(ww, wh);
    }
});

var Papers = BaseClass.extend({
    init: function(opt) {
        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        this.act = 1;
        this.section = [];

        this.menu = [];
        this.switching = false;

        this.create();
    },
    create: function() {
        var self = this;
        var elm = $('#papers-menu');
        this.papersMenu = elm ? elm : false;
        if (this.papersMenu) {
            var elm = this.find(this.papersMenu, '.item');
            if (elm.length) {
                for (var i = 0; i < elm.length; i++) {
                    var obj = $(elm[i]);
                    var item = {
                        id: i,
                        obj: obj,
                        section: parseInt(obj.attr('section')),
                        active: 0,
                        activate: function(dir) {
                            if (this.active === dir) return;

                            if (dir) {
                                this.obj.unbind('click');
                                if (!this.obj.hasClass('act')) this.obj.addClass('act');
                            } else {
                                this.obj.bind('click', {
                                    id: this.id,
                                    section: this.section
                                }, function(e) {
                                    self.mouseMenu(e);
                                });
                                this.obj.removeClass('act');
                            }

                            this.active = dir;
                        }
                    };

                    item.activate(obj.hasClass('act'));

                    this.menu.push(item);
                }
            }
        }

        var sections = this.find(this.element, '.section');
        if (sections) {
            for (var i = 0; i < sections.length; i++) {
                var secObj = $(sections[i]);
                var section = {
                    id: i,
                    obj: secObj,
                    section: parseInt(secObj.attr('section')),
                    item: []
                };

                var items = this.find(section.obj, '.item');
                if (items) {
                    for (var j = 0; j < items.length; j++) {
                        var itemObj = $(items[j]);
                        var item = {
                            id: j,
                            obj: itemObj,
                            section: section.section,
                            img: {
                                obj: false,
                                src: itemObj.attr('src'),
                                width: 0,
                                height: 0,
                                loaded: false,
                                resizeMode: true
                            }
                        };

                        if (!item.obj.hasClass('smi'))
                            item.obj.css({
                                cursor: 'pointer'
                            }).bind('click', {
                                id: item.id,
                                section: item.section
                            }, function(e) {
                                self.openItem(e.data.section, e.data.id);
                            });

                        section.item.push(item);
                    }
                }

                this.section.push(section);
            }
        }

        this.viewer = new PapersViewer({
            _delegate: this
        });

        this.scrollToMe = $('.js-scrollto-papers');
        if (this.scrollToMe.length) {
            this.scrollToMe.bind('click', function() {
                $('html, body').animate({
                    scrollTop: self.element.offset().top - 150
                });
            });
        }
    },
    resize: function(ww, wh) {
        if (this.viewer)
            this.viewer.resize(ww, wh);
    },
    mouseMenu: function(e) {
        switch (e.type) {
            case 'click':
                this.switchSection(e.data.section);
                break;
            case 'mouseenter':
                break;
            case 'mouseleave':
                break;
        }
    },
    getItem: function(section, id) {
        var section = this.getSection(section);

        if (section) {
            for (var i = 0; i < section.item.length; i++) {
                if (section.item[i].id == id)
                    return section.item[i];
            }
        }

        return false;
    },
    getMenuItem: function(section) {
        for (var i = 0; i < this.section.length; i++) {
            if (this.menu[i].section == section)
                return this.menu[i];
        }

        return false;
    },
    getSection: function(section) {
        for (var i = 0; i < this.section.length; i++) {
            if (this.section[i].section == section)
                return this.section[i];
        }

        return false;
    },
    switchSection: function(section) {
        if (this.act == section) return;

        if (this.switching) return;
        this.switching = true;

        var curSec = this.getSection(this.act);
        var curSecMI = this.getMenuItem(this.act);

        var nxtSec = this.getSection(section);
        var nxtSecMI = this.getMenuItem(section);

        var self = this;
        if (curSec && nxtSec && curSecMI && nxtSecMI) {
            curSecMI.activate(false);
            nxtSecMI.activate(true);

            curSec.obj.stop().animate({
                opacity: 0
            }, 500, 'swing', function() {
                $(this).css({
                    display: 'none'
                });
                nxtSec.obj.stop().css({
                    display: 'block',
                    opacity: 0
                }).animate({
                    opacity: 1
                }, 500, 'swing', function() {
                    self.switching = false;
                });
            });

            this.act = section;
        }
    },
    openItem: function(section, id) {
        var item = this.getItem(section, id);
        if (item && item.img.src) this.viewer.open(item);
    },
    nextItem: function(item) {
        if (!item) return;
        var section = this.getSection(item.section);
        var pos = item.id + 1;
        if (pos >= section.item.length) pos = 0;

        this.viewer.open(section.item[pos]);
    },
    prevItem: function(item) {
        if (!item) return;
        var section = this.getSection(item.section);
        var pos = item.id - 1;
        if (pos < 0) pos = section.item.length - 1;

        this.viewer.open(section.item[pos]);
    }
});

var PapersViewer = BaseClass.extend({
    init: function(opt) {
        this.delegate = false;
        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        this.prevItem = false;
        this.item = false;
        this.switching = false;

        this.showingArrows = false;
        this.loader = false;

        this.create();
    },
    create: function() {
        var self = this;
        this.element = $('<div></div>').addClass('papers-viewer').appendTo($(document.body));

        this.loader = this.castLoader().appendTo(this.element).css({
            display: 'none'
        });

        this.arrl = $('<div></div>').addClass('arr arrl').css({
            display: 'none'
        }).appendTo(this.element).bind('click mouseenter mouseleave', {
            dir: false
        }, function(e) {
            self.mouseArrow(e);
        });
        this.arrr = $('<div></div>').addClass('arr arrr').css({
            display: 'none'
        }).appendTo(this.element).bind('click mouseenter mouseleave', {
            dir: true
        }, function(e) {
            self.mouseArrow(e);
        });
        this.toggle = $('<div></div>').addClass('toggle').appendTo(this.element).bind('click', function(e) {
            self.close();
        });

        this.resize();
    },
    mouseArrow: function(e) {
        var dir = e.data.dir;
        switch (e.type) {
            case 'click':
                return dir ? this.delegate.nextItem(this.item) : this.delegate.prevItem(this.item);
                break;
            case 'mouseenter':
                break;
            case 'mouseleave':
                break;
        }
    },
    slideDown: function(cb) {
        this.element.stop()
            .css({
                display: 'block',
                opacity: 1,
                top: -__app__.wh
            })
            .animate({
                top: 0
            }, function() {
                if (typeof cb == _fn_) cb();
            });
    },
    slideUp: function(cb) {
        var self = this;
        this.element.stop().animate({
            top: -__app__.wh
        }, function() {
            self.element.css({
                display: 'none',
                opacity: 0
            });
            if (typeof cb == _fn_) cb();
        });
    },
    showArrows: function(dir) {

    },
    open: function(item) {
        if (this.switching) return;
        this.switching = true;

        var self = this;
        this.prevItem = this.item;
        this.item = false;

        if (!this.prevItem) {
            this.repos();
            this.slideDown();
        }

        if (!item.img.obj) item.img.obj = $('<img></img>');
        item.img.obj.css({
            top: 0,
            opacity: 0
        }).appendTo(this.element);
        this.item = item;

        if (item.img.loaded) {
            this.show();
        } else {
            this.loader.stop().css({
                display: 'block',
                opacity: 0
            }).animate({
                opacity: 1
            });
            item.img.obj.bind('load error', function(e) {
                self.loaded(e);
            }).attr('src', item.img.src);
        }

        __app__.setFixedContent(true);
    },
    loaded: function(e) {
        switch (e.type) {
            case 'load':
                this.item.img.width = this.item.img.obj[0].width;
                this.item.img.height = this.item.img.obj[0].height;
                this.item.img.loaded = true;
                this.item.img.obj.unbind('load error');
                this.show();
                break;
            case 'error':
                alert('Ошибка загрузки изображения.');
                this.switching = false;
                break;
        }

        this.loader.stop().animate({
            opacity: 0
        }, function() {
            $(this).css({
                display: 'none'
            });
        });
    },
    show: function() {
        var self = this;
        var showNextItem = function() {
            if (!self.showingArrows) {
                self.arrl.css({
                    display: 'block',
                    opacity: 0
                }).animate({
                    opacity: 1
                });
                self.arrr.css({
                    display: 'block',
                    opacity: 0
                }).animate({
                    opacity: 1
                });
                self.showingArrows = true;
            }

            self.item.img.obj.appendTo(this.element).css({
                opacity: 0
            });
            self.repos();
            self.item.img.obj.stop().animate({
                opacity: 1
            }, 500, function() {
                self.switching = false;
            });
        }

        if (this.prevItem) {
            this.prevItem.img.obj.stop().animate({
                opacity: 0
            }, function() {
                $(this).remove();
                showNextItem();
            });
            this.prevItem = false;
        } else {
            showNextItem();
        }
    },
    close: function() {
        var self = this;

        this.slideUp(function() {
            if (self.item) {
                self.item.img.obj.remove();
                self.item = false;
            }

            self.showingArrows = false;
            self.arrl.css({
                display: 'none'
            });
            self.arrr.css({
                display: 'none'
            });

            self.switching = false;
        });

        __app__.setFixedContent(false);
    },
    resize: function() {
        this.element.css({
            width: __app__.ww,
            hegiht: __app__.wh
        });

        var arrTop = Math.round((__app__.wh - this.arrl.outerHeight(true)) / 2);

        this.loader.css({
            left: Math.round((__app__.ww - 60) / 2),
            top: Math.round((__app__.wh - 60) / 2)
        });

        this.arrl.css({
            top: arrTop
        });
        this.arrr.css({
            top: arrTop
        });

        this.repos();
    },
    repos: function() {
        if (this.item && this.item.img.loaded) {
            this.item.img.ww = __app__.ww - 240;
            this.item.img.wh = __app__.wh - 120;
            this.reposObject(this.item.img);
            this.item.img.obj.css({
                top: Math.round((__app__.wh - this.item.img.ch) / 2),
                left: Math.round((__app__.ww - this.item.img.cw) / 2)
            });
        }
    }
});
var PagePart_Podcast = PagePart.extend({
    __className: 'PagePart_Podcast',
    _create: function() {
        var elm;
        this.podcastContent = this.find(this.element, '.podcast-content');
        this.centerContent = this.find(this.element, '.center-content');
    },
    _resize: function() {
        this.podcastContent.css({
            height: 'auto'
        });
        var podcastHeight = this.podcastContent.outerHeight(true);

        var minpodcastHeight = __app__.wh - __app__.fMH - __FOOTER__.element.outerHeight(true);
        if (podcastHeight < minpodcastHeight)
            this.podcastContent.css({
                height: minpodcastHeight
            });
    }
});
var PagePart_ServicePage = PagePart.extend({
    __className: 'PagePart_ServicePage',
    _create: function() {
        var self = this;

        this.video = [];

        this.flagWidth = 0;
        this.paddingLeft = 0;

        this.centerContent = this.find(this.element, '.center-content');

        var rightPanel = this.find(this.element, '.right-panel')
        var servicesMenu = $('#services-menu');
        this.servicesMenu = false;
        if (servicesMenu.length)
            this.servicesMenu = new ServicesMenu({
                _element: servicesMenu,
                _delegate: this
            });

        var elm = $('.js-life-subscribe');
        this.requestFormLife = elm.length ? new RequestFormLife({
            _element: elm,
            _delegate: this
        }) : false;

        var paymentsMenu = $('#payment-menu');
        if (paymentsMenu.length)
            this.paymentsMenu = new PaymentsMenu({
                _element: paymentsMenu,
                _delegate: this
            });

        this.sliders = [];

        this.skipIndex = false;
        if (window.location.hash == '#skip')
            this.skipIndex = true;

        if (this.centerContent)
            this.initContent();
    },
    killContent: function() {
        if (this.requestButton) {
            this.requestButton.unbind('click');
            this.requestButton = null;
        }
        if (this.serviceMaps) {
            this.serviceMaps.remove();
            this.servicesMaps = null;
        }
        if (this.faq) {
            this.faq.remove();
            this.faq = null;
        }
        if (this.video.length) {
            for (var i = 0; i < this.video.length; i++) {
                this.video[i].remove();
                this.video[i] = null;
            }
            this.video = [];
        }
        if (this.sliders) {
            for (var i = 0; i < this.sliders.length; i++)
                this.sliders[i].remove();
            this.sliders[i] = false;
            this.sliders = [];
        }
        if (this.calculator) {
            this.calculator.remove();
            this.calculator = null;
        }
        if (this.requestForm) {
            this.requestForm.remove();
            this.requestForm = null;
        }
        if (this.blockSwitcher) {
            this.blockSwitcher.remove();
            this.blockSwitcher = null;
        }

        return;
    },
    initContent: function() {
        var self = this;

        var serviceMaps = this.find(this.element, '.service-maps');
        this.serviceMaps = serviceMaps ? new ServiceMaps({
            _element: serviceMaps
        }) : false;

        var faq = this.find(this.element, '.FAQ');
        this.faq = faq ? new ServiceFAQ({
            _element: faq
        }) : false;

        this.video = [];
        var video = this.find(this.element, '.small-video');
        if (video) {
            for (var i = 0; i < video.length; i++) {
                this.video.push(new H5Video({
                    _element: $(video[i])
                }));
            }
        }

        this.sliders = [];
        var sliders = this.find(this.element, '.slider');
        if (sliders) {
            for (var i = 0; i < sliders.length; i++) {
                var slider = new Slider({
                    _element: $(sliders[i]),
                    _delegate: this
                });
                this.sliders.push(slider);
            }
        }

        $('.priceplan').each(function(i, elm) {
            elm = $(elm);
            var btn = elm.find('.req-btn').text('Отправить заявку');
            elm.bind('click', function() {
                $('.priceplan').removeClass('active').find('.req-btn').stop().fadeOut('fast');
                elm.addClass('active');
                btn.stop().fadeIn('fast');
            });
        })

        this.requestButton = this.find(this.element, '.request');
        if (this.requestButton)
            this.requestButton.bind('click', function() {
                __app__.scrollTo(self.element.find('.request-form').offset().top - __app__.fMH - 40);
            });

        this.requestButtonService = this.find(this.element, '.request-service');
        if (this.requestButtonService)
            this.requestButtonService.bind('click', function() {
                __app__.scrollTo(self.element.find('.service-request-form').offset().top - __app__.fMH - 40);
            });

        var calculator = this.find(this.element, '.calculator');
        this.calculator = calculator ? new Calculator({
            _element: calculator,
            _delegate: this
        }) : false;

        var simpleRequestForm = this.find(this.element, '.simple-request-form');
        this.simpleRequestForm = simpleRequestForm ? new ServiceRequestForm({
            _element: simpleRequestForm,
            _delegate: this,
            _simple: 1
        }) : false;

        var requestForm = this.find(this.element, '.service-request-form');
        this.requestForm = requestForm ? new ServiceRequestForm({
            _element: requestForm,
            _delegate: this
        }) : false;

        var blockSwitcher = this.find(this.element, '.block-switcher');
        this.blockSwitcher = blockSwitcher ? new BlockSwitcher({
            _element: blockSwitcher,
            _delegate: this
        }) : false;

        this.flag = this.find(self.element, '.flag');
        __app__.scrollTo(__indexPart.height - __app__.fMH, function() {

            if (self.flag) {
                self._resize(__app__.ww, __app__.wh);
                self.flagWidth = self.flag.outerWidth(true);
                self.flag.css({
                    left: -self.flagWidth,
                    opacity: 1
                }).animate({
                    left: 0,
                    paddingLeft: self.paddingLeft - 2
                }, 600, 'swing');
            }

        });

        if (this.skipIndex) {
            __app__.scrollTo(__app__.wh - __app__.fMH);
            this.skipIndex = false;
        }

    },
    _resize: function(ww, wh) {
        if (this.centerContent)
            this.height = this.centerContent.outerHeight(true);

        if (this.servicesMenu)
            this.servicesMenu.resize(ww, this.height);

        if (this.paymentsMenu)
            this.paymentsMenu.resize(ww, this.height);

        if (this.calculator)
            this.calculator.resize();

        if (this.requestForm)
            this.requestForm.resize();

        if (this.simpleRequestForm)
            this.simpleRequestForm.resize();

        if (this.sliders.length) {
            for (var i = 0; i < this.sliders.length; i++) {
                this.sliders[i].resize(ww, wh);
            }
        }
    },
    updateScroll: function(scrollTop) {

    }
});
var PagePart_Team = PagePart.extend({
    __className: 'PagePart_Team',
    _create: function() {
        var slider = this.find(this.element, '.team-slider');
        this.slider = slider ? new Slider({
            _element: slider,
            _delegate: this
        }) : false;
    },
    _resize: function(ww, wh) {
        if (this.slider)
            this.slider.resize(ww, wh);
    }
});
var PagePart_TeamMembers = PagePart.extend({
    __className: 'PagePart_TeamMembers',
    _create: function() {
        this.members = this.find(this.element, '.team-members');
        this.members = this.members ? new TeamMembers({
            _element: this.members
        }) : false;
    },
    _resize: function(ww, wh) {
        if (this.members) this.members.resize(ww, wh);
    }
});

var TeamMembers = BaseClass.extend({
    init: function(opt) {
        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        this.item = [];

        this.create();
    },
    create: function() {
        var self = this;

        var elm = this.find(this.element, '.item');
        if (elm) {
            for (var i = 0; i < elm.length; i++) {
                var obj = $(elm[i]);
                var video = obj.find('video');
                var item = {
                    id: i,
                    obj: obj,
                    tid: obj.attr('tid'),
                    img: {
                        width: 0,
                        height: 0,
                        src: obj.attr('src'),
                        obj: false,
                        loaded: false,
                        error: false,
                        resizeMode: false
                    },
                    video: video,
                    html: {
                        loaded: false,
                        content: false,
                        error: false
                    }
                };
                item.obj.bind('click mouseenter mouseleave', {
                    id: item.id
                }, function(e) {
                    self.openItem(e);
                });
                video.bind('ended', function(e) {
                    this.load();
                });
                this.item.push(item);
            }
        }

        this.viewer = new TeamMemberViewer({
            _delegate: this
        });
    },
    resize: function(ww, wh) {
        if (this.viewer) this.viewer.resize(ww, wh);
    },
    openItem: function(e) {
        var id = e.data.id;
        var item = this.item[id];
        if (!item) return;

        switch (e.type) {
            case 'click':
                //this.viewer.open(item);
                break;
            case 'mouseenter':
                item.video[0].play();
                break;
            case 'mouseleave':

                break;
        }

    },
    prevItem: function(item) {
        var pos = item.pos - 1;
        if (pos < 0) pos = this.item.length - 1;
        this.viewer.open(this.item[pos]);
    },
    nextItem: function(item) {
        var pos = item.pos + 1;
        if (pos >= this.item.length) pos = 0;
        this.viewer.open(this.item[pos]);
    }
});

var TeamMemberViewer = BaseClass.extend({
    init: function(opt) {
        this.delegate = false;
        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        this.item = false;
        this.prevItem = false;

        this.switching = false;
        this.opened = false;
        this.tmr = false;

        this.create();
    },
    create: function() {
        var self = this;

        this.element = $('<div></div>').addClass('team-member-viewer').css({
            display: 'none'
        }).appendTo($(document.body));

        this.loader = this.castLoader().appendTo(this.element).css({
            display: 'none'
        });

        this.imgCnt = $('<div></div>').addClass('img').appendTo(this.element);
        this.textCnt = $('<div></div>').addClass('textCnt').appendTo(this.element);
        this.cnt = $('<div></div>').addClass('cnt').appendTo(this.textCnt);
        this.toggle = $('<div></div>').addClass('toggle').css({
            opacity: 0
        }).appendTo(this.element).bind('click', function(e) {
            self.close();
        });
    },
    open: function(item) {
        if (this.switching) return;
        this.switching = true;

        this.prevItem = this.item;
        this.item = item;

        var self = this;

        if (!this.prevItem) {
            this.element.stop()
                .css({
                    position: 'fixed',
                    display: 'block',
                    opacity: 1,
                    top: -__app__.wh,
                    width: __app__.ww,
                    height: __app__.wh,
                    overflow: 'hidden'
                })
                .animate({
                    top: 0
                }, 500, 'swing', function() {
                    self.opened = true;
                });
            this.toggle.animate({
                opacity: 1
            }, 500, 'swing');
        }

        if (!this.item.img.error) {
            if (!this.item.img.obj)
                this.item.img.obj = $('<img></img>');

            this.item.img.obj.appendTo(this.imgCnt).css({
                opacity: 0
            });

            if (!item.img.loaded) {
                self.item.img.obj.bind('load error', function(e) {
                    self.item.img.loaded = true;
                    switch (e.type) {
                        case 'load':
                            self.item.img.width = self.item.img.obj[0].width;
                            self.item.img.height = self.item.img.obj[0].height;
                            break;
                        case 'error':
                            self.item.img.error = true;
                            break;
                    }
                })
                    .attr('src', this.item.img.src);
            }
        }

        if (!this.item.html.loaded) {
            $.ajax({
                url: '/team.member',
                dataType: 'json',
                type: 'POST',
                data: {
                    tid: this.item.tid
                }
            })
                .done(function(data) {
                    self.item.html.content = data.html;
                })
                .fail(function() {
                    self.item.html.error = true;
                })
                .always(function() {
                    self.item.html.loaded = true;
                });
        }

        this.tmr = setInterval(function() {
            self.checkIfLoaded();
        }, 100);
        this.loader.stop().css({
            opacity: 0,
            display: 'block'
        }).animate({
            opacity: 1
        });
    },
    checkIfLoaded: function() {
        if (this.opened && this.item.html.loaded && this.item.img.loaded) {
            if (this.item.img.error) this.item.img.obj.remove();

            clearInterval(this.tmr);
            this.tmr = null;

            this.loader.stop().animate({
                opacity: 0
            }, function() {
                $(this).css({
                    display: 'none'
                });
            });
            this.show();
        }
    },
    show: function() {
        this.hide();

        var withHTML = !this.item.html.error;
        var withImage = !this.item.img.error;

        if (!withHTML && !withImage) {
            alert('Ошибка загрузки данных. [ image = ' + withImage + ' | html = ' + withHTML);
            return;
        }

        if (withHTML) {
            this.cnt.html(this.item.html.content);
        }

        this.resize();

        var self = this;
        var completeFunction = function() {
            self.element.css({
                position: 'absolute',
                overflow: 'visible'
            });
            self.resize();

            __app__.setFixedContent(true);
            window.scrollTo(0, 0);

            self.switching = false;
        };
        var htmlFunc;
        var imageFunc;

        if (withHTML) {
            htmlFunc = completeFunction;
        } else {
            imageFunc = completeFunction;
        }

        if (withHTML)
            this.textCnt.stop().animate({
                opacity: 1
            }, function() {
                if (typeof htmlFunc == _fn_) htmlFunc();
            });

        if (withImage)
            this.item.img.obj.stop().animate({
                opacity: 1
            }, function() {
                if (typeof imageFunc == _fn_) imageFunc();
            });
    },
    hide: function() {
        if (this.prevItem) {
            this.prevItem.img.obj.stop().animate({
                opacity: 0
            }, function() {
                $(this).remove();
            });
            this.textCnt.stop().animate({
                opacity: 0
            });

            this.prevItem = false;
        }
    },
    close: function() {
        var self = this;
        this.element.stop().animate({
            opacity: 0
        }, function() {
            self.element.css({
                display: 'none'
            });
            self.toggle.css({
                opacity: 0
            });
            self.opened = false;
            if (self.item) {
                if (!self.item.img.error)
                    self.item.img.obj.remove();

                self.textCnt.css({
                    opacity: 0
                });
                self.item = false;
            }
        });

        __app__.setFixedContent(false);
    },
    resize: function(ww, wh) {
        if (typeof ww == _un_) ww = __app__.ww;
        if (typeof wh == _un_) wh = __app__.wh;

        var display = this.element.css('display');
        this.element.css({
            display: 'block'
        });

        var textCntW = Math.floor(ww / 2);

        this.textCnt.css({
            paddingLeft: textCntW,
            width: textCntW
        });
        var textCntH = this.cnt.outerHeight(true);

        var viewerHeight = wh;

        if (this.loader)
            this.loader.css({
                top: Math.round((wh - 60) / 2),
                left: Math.round((ww - 60) / 2)
            });

        if (textCntH < wh) {
            this.textCnt.css({
                paddingTop: Math.floor((wh - textCntH) / 2)
            });
        } else {
            this.textCnt.css({
                paddingTop: 120,
                paddingBottom: 120
            });
            viewerHeight = textCntH + 120 * 2;
        }

        this.element.css({
            width: ww,
            height: viewerHeight,
            display: display
        });
        this.repos(ww, wh);
    },
    repos: function(ww, wh) {
        var ww = Math.round(ww / 2);
        if (this.item && !this.item.img.error && this.item.img.loaded) {
            this.item.img.ww = ww;
            this.item.img.wh = wh;
            this.imgCnt.css({
                width: ww,
                height: wh
            });
            this.reposObject(this.item.img);
        }
    }
});
var PagePart_VT = PagePart.extend({
    __className: 'PagePart_VT',
    _create: function() {
        function readDeviceOrientation() {
            // window.innerHeight is not supported by IE
            var winH = window.innerHeight ? window.innerHeight : jQuery(window).height();
            var winW = window.innerWidth ? window.innerWidth : jQuery(window).width();
            //force height for iframe usage
            if (!winH || winH == 0) {
                winH = '100%';
            }
            // set the height of the document
            jQuery('html').css('height', winH);
            // scroll to top
            window.scrollTo(0, 0);
        }
        jQuery(document).ready(function() {
            if (/(iphone|ipod|ipad|android|iemobile|webos|fennec|blackberry|kindle|series60|playbook|opera\smini|opera\smobi|opera\stablet|symbianos|palmsource|palmos|blazer|windows\sce|windows\sphone|wp7|bolt|doris|dorothy|gobrowser|iris|maemo|minimo|netfront|semc-browser|skyfire|teashark|teleca|uzardweb|avantgo|docomo|kddi|ddipocket|polaris|eudoraweb|opwv|plink|plucker|pie|xiino|benq|playbook|bb|cricket|dell|bb10|nintendo|up.browser|playstation|tear|mib|obigo|midp|mobile|tablet)/.test(navigator.userAgent.toLowerCase())) {
                // add event listener on resize event (for orientation change)
                if (window.addEventListener) {
                    window.addEventListener("load", readDeviceOrientation);
                    window.addEventListener("resize", readDeviceOrientation);
                    window.addEventListener("orientationchange", readDeviceOrientation);
                }
                //initial execution
                setTimeout(function() {
                    readDeviceOrientation();
                }, 10);
            }
        });
    },
    _resize: function() {
        this.height = Math.max(500, window.innerHeight / 3 * 2);
        this.width = Math.min(window.innerWidth - 80, Math.round(this.height * 2));
        this.element.css({
            height: this.height
        });
        this.element.find('#container').css({
            width: this.width,
            height: this.height
        });
    }
});
var PagePart_Warehouses = PagePart.extend({
    __className: 'PagePart_Warehouses',
    _create: function() {
        var elm;
        var self = this;

        elm = this.find(this.element, '.Warehouses');
        this.warehouses = elm ? new Warehouses({
            _element: elm,
            _delegate: this
        }) : false;
    },
    _resize: function(ww, wh) {
        if (this.warehouses)
            this.warehouses.resize(ww, wh);
    }
});

var Warehouses = BaseClass.extend({
    __className: 'Warehouses',
    position: {
        lat: 48.4735742,
        lng: 73.4963398,
        zoom: 3,
        position: false
    },
    pins: [{
        lat: 23.1255978,
        lng: 113.2278442,
        content: 'Гуанчжоу &mdash; 2000 м<sup>2</sup>',
        position: false,
        pin: false
    }, {
        lat: 39.9388838,
        lng: 116.3974589,
        content: 'Пекин &mdash; 2000 м<sup>2</sup>',
        position: false,
        pin: false
    }, {
        lat: 31.2243489,
        lng: 121.4767528,
        content: 'Шанхай &mdash; 500 м<sup>2</sup>',
        position: false,
        pin: false
    }, {
        lat: 43.788655,
        lng: 131.9688425,
        content: 'Уссурийск &mdash; 500 м<sup>2</sup>',
        position: false,
        pin: false
    }, {
        lat: 50.2961695,
        lng: 127.5334025,
        content: 'Благовещенск &mdash; 300 м<sup>2</sup>',
        position: false,
        pin: false
    }, {
        lat: 55.749792,
        lng: 37.6324949,
        content: 'Москва &mdash; 300 м<sup>2</sup>',
        position: false,
        pin: false
    }],
    activePin: false,
    init: function(opt) {
        this._id = 0;
        this._inited = false;

        this.element = false;
        this.delegate = false;
        this.opt = {};
        this.setOptions(opt);

        if (!this.put()) return;

        this.create();
    },
    create: function() {
        var elm;
        var self = this;

        this.map = false;
        this.mapElement = this.element.find('.map');

        window.tt.GMapRequest(function() {
            self.processMap();
        });
    },
    processMap: function() {
        this.position.position = new google.maps.LatLng(this.position.lat, this.position.lng);

        this.map = new google.maps.Map(this.mapElement[0], {
            zoom: this.position.zoom,
            center: this.position.position,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            panControl: false,
            zoomControl: true,
            scaleControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL,
                position: google.maps.ControlPosition.TOP_RIGHT
            }
        });

        var styledMap = new google.maps.StyledMapType(MAP_STYLES, {
            name: "Transitplus"
        });
        this.map.mapTypes.set('transitplus_style', styledMap);
        this.map.setMapTypeId('transitplus_style');

        var image = tt.is.mobile ? {
            url: "/m/img/marker.png",
            size: new google.maps.Size(40, 54),
            scaledSize: new google.maps.Size(40, 54),
            origin: new google.maps.Point(0, 0)
        } : '/img/marker.png';

        for (var a = 0; a < this.pins.length; a++)
            this.setupPin(a, image);

        var self = this;
        google.maps.event.addListener(this.map, 'tilesloaded', function() {
            tt.clrGM(self.mapElement[0]);
            google.maps.event.clearListeners(self.map, 'tilesloaded');
        });
    },
    setupPin: function(pin_id, image) {
        var self = this;
        var pin = this.pins[pin_id];

        pin.position = new google.maps.LatLng(pin.lat, pin.lng);

        pin.marker = new google.maps.Marker({
            icon: image,
            draggable: false,
            position: pin.position,
            animation: tt.is.mobile ? false : google.maps.Animation.DROP
        });

        pin.map = this.map;
        pin.marker.setMap(this.map);
        pin.mode = 'warehouse';

        pin.infoBubble = new ttInfoBubble(pin);

        if (!tt.is.mobile) {
            google.maps.event.addListener(pin.marker, 'click', function() {
                self.openInfoBubble(pin);
            });
        }
    },
    openInfoBubble: function(pin) {
        if (this.activePin) {
            var self = this;
            this.activePin.infoBubble.close(function() {
                pin.infoBubble.open();
                self.activePin = pin;
            });
            this.activePin = false;
            return;
        }

        pin.infoBubble.open();
        this.activePin = pin;

    },
    resize: function(ww, wh) {
        this.height = Math.max(370, Math.min((__app__.wh - __app__.fMH * 2 - this.delegate.opt.partHeadHeight), 620));
        this.mapElement.css({
            height: this.height
        });
    },
    remove: function() {
        this.rm();
    }
});
var PagePart_contacts = PagePart.extend({
    __className: 'PagePart_contacts',
    _create: function() {
        this.mode = this.element.attr('data-mode') || false;

        this.contacts = this.find(this.element, '.contacts');
        if (this.contacts)
            this.cnt = this.find(this.contacts, '.cnt');

        var elm = this.find(this.element, '#index-request-form');
        this.requestForm = elm ? new RequestForm({
            _element: elm,
            _indexMode: true
        }) : false;
    },
    _resize: function(ww, wh) {
        var mul = __app__.mul;

        if (this.requestForm)
            this.requestForm.resize();

        if (this.contacts) {
            var partHeight = this.partHead ? this.partHead.outerHeight(true) : 0;

            var contactsHeight;
            this.cnt.css({
                padding: 0
            });
            var cntHeight = this.cnt.outerHeight(true);

            switch (this.mode) {
                case 'index':
                    contactsHeight = __app__.wh - __app__.fMH - __FOOTER__.footerHeight;
                    if (contactsHeight < cntHeight) contactsHeight = cntHeight + 60;
                    break;
                default:
                    var maxHeight = __app__.wh - __app__.fMH - __FOOTER__.footerHeight - 60;
                    contactsHeight = Math.max(cntHeight, maxHeight);
                    break;
            }

            var padding = Math.floor((contactsHeight - this.cnt.outerHeight(true)) / 2);
            this.cnt.css({
                paddingTop: padding,
                paddingBottom: padding
            });
            this.contacts.css({
                height: contactsHeight
            });

            this.height = __app__.contactsHeight = contactsHeight;
        }
    }
});
var PagePart_footer = PagePart.extend({
    __className: 'PagePart_footer',
    _create: function() {
        __FOOTER__ = this;
        this.miniFooter = false;

        var self = this;
        this.nullHeight = true;
        this.footer = this.find(this.element, '.footer');
        if (this.footer) this.cnt = this.find(this.footer, '.cnt');

        this.isPlaying = true;
        this.video = this.find(this.element, 'video.footer-video');
        if (this.video) {
            this.video.css({
                opacity: 0
            });

            this.addSourceToVideo(this.video[0], "/video/footer/footer.mp4", "video/mp4");
            this.addSourceToVideo(this.video[0], "/video/footer/footer.ogv", "video/ogv");
            this.addSourceToVideo(this.video[0], "/video/footer/footer.webm", "video/webm");

            this.video[0].addEventListener("progress", function(e) {
                var preloadPrc = self.progressHandler(e, self.video[0], 15);
                self.videoPreloadPrc = (preloadPrc > 15) ? 1 : preloadPrc / 15;
                if (self.videoPreloadPrc >= 1) self.video.animate({
                    opacity: 1
                }, 500, 'swing');
            }, false);
        }

        this.showinghHeight = 0;
    },
    _resize: function(ww, wh) {
        __app__.content.css({
            'padding-bottom': 0
        });
        this.contentHeight = __app__.content.outerHeight(true);
        this.fullHeight = this.contentHeight;
        if (this.cnt) {
            this.footerHeight = this.cnt.outerHeight(true);

            this.fullHeight += this.footerHeight;
            __app__.content.css({
                'padding-bottom': this.footerHeight
            });

            this.width = ww;
            this.height = this.footerHeight;

            if (this.video) this.reposObject({
                ww: this.width,
                wh: this.height,
                width: 1280,
                height: 720,
                obj: this.video
            });
        }
    },
    updateScroll: function(scrollTop) {
        if (!this.video) return;
        var outOfScreen = (scrollTop < (this.contentHeight - __app__.fMH - __app__.wh));
        if (outOfScreen && this.isPlaying) {
            this.video.each(function() {
                this.pause();
            });
            this.isPlaying = false;
        } else if (!outOfScreen && !this.isPlaying) {
            this.video.each(function() {
                this.play();
            });
            this.isPlaying = true;
        }
    },
    updateFooter: function(heightChange, duration) {
        return false;
    }
});
var PagePart_index = PagePart.extend({
    __className: 'PagePart_index',
    calcPreload: function() {
        return this.videoPreloadPrc;
    },
    _create: function() {
        var self = this;
        __indexPart = this;

        this.isPlaying = true;

        this.start = this.find(this.element, '#start');
        if (this.start) this.start.css({
            cursor: 'pointer'
        }).bind('click', function() {
            __app__.scrollTo(__app__.wh - __app__.fMH);
        });

        this.index = this.find(this.element, '.index');
        this.cnt = this.find(this.element, '.cnt');
        this.h1 = this.find(this.cnt, 'h1');

        var mouse = this.find(this.element, '.mouse');
        this.mouse = mouse ? new IndexMouse({
            _element: mouse,
            _delegate: this
        }) : false;

        this.bgVideo = this.find(this.element, 'video');
        this.videoPreloadPrc = 0;
        if (this.bgVideo) {
            var file = this.bgVideo[0].poster.replace('.jpg', '');

            this.bgVideo.css({
                opacity: 0
            });

            this.bgVideo[0].addEventListener("loadedmetadata", function(e) {
                self.preloadBGVideo();
            });

            this.addSourceToVideo(this.bgVideo[0], file + ".mp4", "video/mp4");
            this.addSourceToVideo(this.bgVideo[0], file + ".ogv", "video/ogv");
            this.addSourceToVideo(this.bgVideo[0], file + ".webm", "video/webm");
        }

        //__app__.placeForPreload(this);
    },
    preloadBGVideo: function() {
        if (this.bgVideoLoaded) {
            this.bgVideo.css({
                opacity: 1
            });
            this.bgVideo[0].play(0);
            return;
        }

        if (this.bgVideo) {
            var self = this;
            var video = this.bgVideo;

            var func = function(e) {
                var preloadPrc = self.progressHandler(e, video[0], 5);
                self.videoPreloadPrc = (preloadPrc > 5) ? 1 : (preloadPrc / 5);

                if (preloadPrc > 5) {
                    video[0].removeEventListener("progress", func, false);
                    self.bgVideo.animate({
                        opacity: 1
                    }, 500, 'swing');
                    self.BGVideoLoaded();
                }
            };

            video[0].addEventListener("progress", func, false);
            video[0].play();
        }
    },
    BGVideoLoaded: function() {
        this.bgVideoLoaded = true;
        this.bgVideo[0].currentTime = 0;
        this.bgVideo[0].play();
    },
    _resize: function(ww, wh) {
        this.cnt.css({
            paddingTop: 0
        });

        var cntHeight = this.cnt.outerHeight();
        // var h1height = this.h1.height();
        // var h1top  = this.h1.position().top;

        this.width = ww;
        this.height = wh;
        if (this.height < cntHeight) this.height = cntHeight + 40;

        if (this.mouse) this.mouse.resize();

        this.element.css({
            width: this.width,
            height: this.height
        });
        if (this.index) this.index.css({
            width: this.width,
            height: this.height
        });

        var freeHeight = this.height - cntHeight;

        this.cnt.css({
            paddingTop: Math.round(freeHeight / 2) - ((freeHeight > 120) ? 30 : 0)
        });

        if (this.bgVideo) this.reposObject({
            ww: this.width,
            wh: this.height,
            width: 1280,
            height: 720,
            obj: this.bgVideo
        });
    },
    updateScroll: function(scrollTop) {
        if (!this.video) return;

        var outOfScreen = (scrollTop > this.height - __app__.fMH);
        if (outOfScreen && this.isPlaying) {
            this.video.each(function() {
                this.pause();
            });
            this.isPlaying = false;
        } else if (!outOfScreen && !this.isPlaying) {
            this.video.each(function() {
                this.play();
            });
            this.isPlaying = true;
        }
    }
});
var PagePart_map = PagePart.extend({
    __className: 'PagePart_map',
    _create: function() {
        var elm = this.find(this.element, '.maps');
        this.maps = elm ? new Maps({
            _element: elm,
            _delegate: this
        }) : false;
    },
    _resize: function(ww, wh) {
        if (this.maps) {
            this.partHead.css({
                padding: 0
            });
            var partHeight = this.partHead ? this.partHead.outerHeight(true) : 0;

            this.maps.resize(ww, wh - partHeight - __app__.fMH);
        }
    }
});
var PaymentsMenu = BaseClass.extend({
    __className: 'PaymentsMenu',
    init: function(opt) {
        this.inited = false;

        __PaymentsMenu__ = this;

        this.delegate = false;
        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        this.actSection = -1;
        this.actItem = false;
        this.section = [];

        this.fixedFrom = false;
        this.fixedUntil = false;
        this.fixed = false;
        this.afterFix = false;
        this.switching = false;

        this.create();
    },
    create: function() {
        var self = this;

        if (!this.delegate.centerContent) return;

        $(window).bind('appScroll.' + this.__className, function(e, scrollTop) {
            self.updateScroll(scrollTop);
        });
    },
    updatePosition: function() {
        if (!__FOOTER__.miniFooter) {
            __FOOTER__.resize();
            window.scrollTo(0, __app__.scrollTop);
        }
    },
    updateScroll: function(scrollTop) {
        if (!this.fixedFrom) return;

        var shoudBeFixed = ((scrollTop + __app__.fMH) >= this.fixedFrom);

        this.fixedUntil = __FOOTER__.contentHeight - (scrollTop + __app__.fMH) - (this.element.outerHeight(true) + 60);

        if (shoudBeFixed && !this.fixed) {
            this.element.css({
                position: 'fixed',
                top: __app__.fMH
            });
            this.fixed = true;
        } else if (!shoudBeFixed && this.fixed) {
            this.element.css({
                position: 'absolute',
                top: __indexPart.height
            });
            this.fixed = false;
        } else if (this.fixed) {
            if (this.fixedUntil < 0) {
                this.element.css({
                    top: __app__.fMH + this.fixedUntil
                });
                this.afterFix = true;
            } else if (this.afterFix) {
                this.element.css({
                    top: __app__.fMH
                });
                this.afterFix = false;
            }
        }
    },
    resize: function(ww, wh) {
        this.fixedFrom = __indexPart.height;

        if (!this.fixed) {
            this.element.css({
                position: 'absolute',
                top: __indexPart.height
            });
        } else {
            this.element.css({
                position: 'fixed',
                top: __app__.fMH
            });
        }

        __PaymentsMenu__.updatePosition();
    }
});
var RequestForm = BaseClass.extend({
    __className: 'RequestForm',
    init: function(opt) {
        this._id = false;
        this.inited = false;

        this.mode = 'request';

        this.indexMode = false;

        this.element = false;
        this.opt = {
            duration: 500,
            easing: 'swing'
        };
        this.setOptions(opt);

        if (!this.put()) return;

        this.opened = false;
        this.returnFixedContent = false;

    },
    toggleRequestForm: function(dir) {
        if (this.opened == dir) return;

        var self = this;

        if (this.opened) {
            if (this.returnFixedContent) __app__.setFixedContent(false);
            this.element.stop().css({
                position: 'fixed'
            }).animate({
                top: -__app__.wh
            }, this.opt.duration, this.opt.easing, function() {
                $(this).css({
                    display: 'none'
                });

                self.resetFORM();
                self.hideOK(false, true);
                self.showFORM(false, true);
            });
        } else {
            this.showFORM(false, true);
            this.element.stop().css({
                display: 'block',
                top: -__app__.wh
            }).animate({
                top: 0
            }, this.opt.duration, this.opt.easing, function() {
                $(this).css({
                    position: 'absolute'
                });
                self.returnFixedContent = __app__.setFixedContent(true);
            });
        }

        this.opened = !this.opened;
    },
    hideMessage: function() {
        this.hideOK();
        this.showFORM();
        this.resetFORM();
    },
    resize: function(ww, wh) {
        if (this.indexMode) return;

        if (!this.opened)
            this.element.css({
                display: 'block'
            });

        var formDisplay = this.FORM.css('display');
        this.FORM.css({
            display: 'block'
        });

        var okDisplay = this.OK.css('display');
        this.OK.css({
            display: 'block'
        });

        this.element.css({
            width: ww
        });

        var elmHeight = wh;

        var formHeight = this.FORM.outerHeight(true);
        if (formHeight > elmHeight) elmHeight = formHeight;

        var okHeight = this.OK.outerHeight(true);
        if (okHeight > elmHeight) elmHeight = okHeight;

        this.element.css({
            height: elmHeight
        });

        this.FORM.css({
            top: Math.round((elmHeight - formHeight) / 2),
            left: Math.round((ww - this.FORM.outerWidth(true)) / 2)
        });
        this.OK.css({
            top: Math.round((elmHeight - okHeight) / 2),
            left: Math.round((ww - this.OK.outerWidth(true)) / 2)
        });

        this.FORM.css({
            display: formDisplay
        });
        this.OK.css({
            display: okDisplay
        });

        if (!this.opened) this.element.css({
            display: 'none'
        });
    },
    gatherData: function() {
        var data = {
            ajax: 1,
            name: this.name.val(),
            phone: this.phone.val(),
            email: this.email.val(),
            comment: this.comment.val(),
            form_tid: this.FORM_TID
        };

        return data;
    },
    validateData: function(data) {
        if (this.name && (data.name.length < 2)) {
            this.name.addClass('error').focus().bind('keydown.error', function() {
                $(this).removeClass('error').unbind('keydown.error');
            });
            return false;
        } else if (this.phone && (data.phone.length < 2)) {
            this.phone.addClass('error').focus().bind('keydown.error', function() {
                $(this).removeClass('error').unbind('keydown.error');
            });
            return false;
        } else if (this.email && (!window.tt.mailtest(data.email))) {
            this.email.addClass('error').focus().bind('keydown.error', function() {
                $(this).removeClass('error').unbind('keydown.error');
            });
            return false;
        }

        return true;
    },
    showFORM: function(cb, quick) {
        var duration = quick ? 0 : 200;
        this.FORM.stop().css({
            display: 'block',
            opacity: 0
        }).animate({
            opacity: 1
        }, duration, 'swing', function() {
            if (typeof cb == _fn_) cb();
        });
    },
    hideFORM: function(cb, quick) {
        var duration = quick ? 0 : 200;
        this.FORM.stop().animate({
            opacity: 0
        }, duration, 'swing', function() {
            $(this).css({
                display: 'none'
            });
            if (typeof cb == _fn_) cb();
        });
    },
    resetFORM: function() {
        if (this.name) this.name.val('').removeClass('error');
        if (this.phone) this.phone.val('').removeClass('error');
        if (this.email) this.email.val('').removeClass('error');
        if (this.comment) this.comment.val('').removeClass('error');
    },
    remove: function() {
        $(window).unbind('appResize.' + this.__className);
    }
});
var RequestFormLife = BaseClass.extend({
    __className: 'RequestFormLife',
    init: function(opt) {
        this._id = false;
        this.inited = false;

        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        if (!this.put()) return;

        this.create();
    },
    hideMessage: function() {
        this.hideOK();
    },
    gatherData: function() {
        var data = {
            ajax: 1,
            email: this.email.val()
        };

        return data;
    },
    validateData: function(data) {
        if (this.email && (!window.tt.mailtest(data.email))) {
            this.email.addClass('error').focus().bind('keydown.error', function() {
                $(this).removeClass('error').unbind('keydown.error');
            });
            return false;
        }

        return true;
    },
    showOK: function(cb, quick) {
        if (this.loader) {
            this.loader.remove();
            this.loader = null;
        }
        this.OK.addClass('message-sent');
    },
    hideOK: function(cb, quick) {
        if (this.loader) {
            this.loader.remove();
            this.loader = null;
        }
        this.OK.removeClass('message-sent');
        this.OK.removeClass('active');
    },
    resetFORM: function() {
        if (this.email) this.email.val('').removeClass('error');
    }
});
var ScrollAction = BaseClass.extend({
    __className: 'ScrollAction',
    init: function(opt) {
        this._id = 0;
        this._inited = false;

        this.element = false;
        this.delegate = false;

        this.opt = {};

        this.initScrollAction();
        this.setOptions(opt);

        if (!this.put()) return false;

        this.create();
    },
    create: function() {
        var self = this;

        this.createScrollAction();

        $(window).bind('appResize.' + this.__className + this._id, function(e, ww, wh) {
            self.recalc(ww, wh);
        });
        $(window).bind('appScroll.' + this.__className + this._id, function(e, scrollTop, scrollTopDir) {
            self.updateScroll(scrollTop, scrollTopDir);
        });

        this._inited = true;
    },
    createScrollAction: function() {
        var elm;
        var self = this;

        if (!this.element.hasClass('scroll-action'))
            this.element.addClass('scroll-action')

        this.tid = this.element.attr('tid') || false;
        this.scrollType = this.opt.scrollType || this.element.attr('sa-type') || false;
        this.exePrc = this.opt.exePrc || parseInt(this.element.attr('sa-exe-prc') || 15);
        this.noretrig = this.opt.noretrig || parseInt(this.element.attr('sa-noretrig'))

        switch (this.scrollType) {
            case 'svg-icon':
                this.opt.svgIcon = this.element.attr('svg-icon');
                break;
        }

        this.initScroll(true);
    },
    initScrollAction: function() {
        this.opt.scrollType = false;

        this.opt.minPrc = false;
        this.opt.exePrc = false;
        this.opt.maxPrc = false;

        this.opt.off = false;
        this.opt.xoff = false;
        this.opt.yoff = false;

        this.opt.locked = false;
        this.opt.initFunc = false;
        this.opt.execFunc = false;

        this.top = 0;
        this.left = 0;
        this.width = 0;
        this.height = 0;

        this.activeScroll = false;
    },
    initScroll: function(force) {
        if (this.noretrig && !force) return;

        switch (this.scrollType) {
            case 'func':
                this.opt.initFunc();
                break;
            case 'svg-icon':
                if (typeof SvgIcons == _un_) return;
                SvgIcons.emit('reset', this.opt.svgIcon);
                break;
            default:
                this.element.removeClass('atscroll');
                break;
        }

        this.activeScroll = false;
        return false;
    },
    lockScroll: function(dir) {
        if (this.opt.locked == dir) return;
        this.opt.locked = dir;

        if (dir) {
            this.initFunc();
        } else {
            this.update();
        }
    },
    update: function() {
        this.updateScroll(__app__.scrollTop, __app__.scrollTopDir);
    },
    updateScrollPrc: function(scrollTop) {
        var actionStart = this.ht - __app__.wh;
        var actionEnd = Math.min(this.hb, __app__.pageHeight - __app__.wh);
        var actionLen = actionEnd - actionStart;

        var prc = 0;
        if (scrollTop < actionStart) prc = 0;
        else if (scrollTop > actionEnd) prc = 100;
        else prc = (scrollTop - actionStart) / actionLen * 100;

        return prc;
    },
    updateScroll: function(scrollTop, scrollDir) {
        if (this.locked || __app__.fixedContent) return;

        var prc = this.updateScrollPrc(scrollTop);
        if (!this.activeScroll && prc >= this.exePrc) {
            switch (this.scrollType) {
                case 'func':
                    this.opt.execFunc();
                    break;
                case 'svg-icon':
                    if (typeof SvgIcons == _un_) return;
                    SvgIcons.emit('animate', this.opt.svgIcon);
                    break;
                default:
                    if (!this.element.hasClass('atscroll')) this.element.addClass('atscroll');
                    break;
            }

            this.activeScroll = true;
        } else if (scrollTop < 100) {
            // return this.initScroll();
            return false;
        }
    },
    resize: function(ww, wh) {

    },
    recalc: function() {
        var offset = this.element.offset();

        this.top = offset.top;
        this.left = offset.left;

        this.width = this.element.outerWidth(true);
        this.height = this.element.outerHeight(true);

        this.ht = this.top;
        this.hc = Math.round(this.top + this.height / 2);
        this.hb = this.top + this.height;
    },
    remove: function() {
        $(window).unbind('appResize.' + this.__className + this._id);
        $(window).unbind('appScroll.' + this.__className + this._id);
        this.rm();
    }
});
var ServiceFAQ = BaseClass.extend({
    __className: 'ServiceFAQ',
    init: function(opt) {
        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        this.act = -1;
        this.item = [];

        this.create();
    },
    create: function() {
        var self = this;

        var elm = this.find(this.element, 'ol');
        if (elm) {
            this.ol = elm;
            var items = this.find(this.ol, 'li');
            if (items) {
                for (var i = 0; i < items.length; i++) {
                    var obj = $(items[i]);
                    var item = {
                        id: i,
                        obj: obj,
                        toggle: obj.find('.toggle'),
                        ans: obj.find('.ans'),
                        act: false
                    };
                    if (item.toggle.length) item.toggle.css({
                        cursor: 'pointer'
                    }).bind('click', {
                        id: i
                    }, function(e) {
                        self.mouseToggle(e);
                    });
                    else item.toggle = false;
                    this.item.push(item);
                }
            }
        }
    },
    mouseToggle: function(e) {
        var item = this.item[e.data.id];

        switch (e.type) {
            case 'click':

                if (this.act == item.id) {
                    item.obj.removeClass('act');
                    item.ans.slideUp(500, 'swing', function() {
                        __ServicesMenu__.updatePosition();
                    });
                    this.act = -1;
                } else {
                    if (this.act >= 0) {
                        var actItem = this.item[this.act];
                        actItem.obj.removeClass('act');
                        actItem.ans.slideUp(500, 'swing', function() {
                            __ServicesMenu__.updatePosition();
                        });
                        this.act = -1;
                    }

                    if (!item.obj.hasClass('act')) item.obj.addClass('act');
                    item.ans.slideDown(500, 'swing', function() {
                        __ServicesMenu__.updatePosition();
                    });
                    this.act = item.id;
                }

                break;
        }
    },
    remove: function() {
        for (var i = 0; i < this.item.length; i++) {
            var item = this.item[i];
            if (item.toggle) item.toggle.unbind('click');
        }
    }
});
var PlaceMarkers = function(markerData) {
    this.markerData = markerData;
    this.markers = [];
    this.openedIW = false;
};
PlaceMarkers.prototype.closeIW = function() {
    if (this.openedIW) {
        this.openedIW.close();
        this.openedIW = false;
    }
};
PlaceMarkers.prototype.processMaker = function(map, markerData) {
    markerData.map = map;
    markerData.position = new google.maps.LatLng(markerData.lat, markerData.lng);

    var self = this;
    var marker = new google.maps.Marker(markerData);
    var infowindow = new google.maps.InfoWindow({
        content: markerData.infoWindow
    });
    google.maps.event.addListener(marker, 'click', function() {
        self.closeIW();
        infowindow.open(map, marker);
        self.openedIW = infowindow;
    });

    this.markers.push({
        marker: marker,
        infowindow: infowindow
    });
};
PlaceMarkers.prototype.addMarkers = function(map) {
    var pinColor = "FE7569";
    var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
        new google.maps.Size(21, 34), new google.maps.Point(0, 0), new google.maps.Point(10, 34));
    var pinShadow = new google.maps.MarkerImage("http://www.google.com/mapfiles/shadow50.png",
        new google.maps.Size(40, 37), new google.maps.Point(0, 0), new google.maps.Point(9, 34));

    for (var i = 0; i < this.markerData.length; i++)
        this.processMaker(map, this.markerData[i]);
};

var ServiceMaps = BaseClass.extend({
    __className: 'ServiceMaps',
    init: function(opt) {
        this._id = false;
        this.inited = false;

        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        if (!this.put()) return;

        this.pos = 0;
        this.item = [];
        this.count = 0;
        this.switching = false;

        this.createPlaceMarkers();
        this.create();
    },
    createPlaceMarkers: function() {

        this.markers.otgruzka = new PlaceMarkers(
            [{
                lat: 39.958175,
                lng: 116.399717,
                title: 'Пекин',
                infoWindow: '<p class="map-city"><b>Пекин</b></p>'
            }, {
                lat: 23.185813,
                lng: 113.260374,
                title: 'Гуанчжоу',
                infoWindow: '<p class="map-city"><b>Гуанчжоу</b></p>'
            }, {
                lat: 22.579779,
                lng: 114.054351,
                title: 'Шэньчжень',
                infoWindow: '<p class="map-city"><b>Шэньчжень</b></p>'
            }, {
                lat: 23.025396,
                lng: 113.121307,
                title: 'Фошань',
                infoWindow: '<p class="map-city"><b>Фошань</b></p>'
            }, {
                lat: 23.053198,
                lng: 113.752227,
                title: 'Дуньгуань',
                infoWindow: '<p class="map-city"><b>Дуньгуань</b></p>'
            }, {
                lat: 30.297018,
                lng: 120.051727,
                title: 'Иу',
                infoWindow: '<p class="map-city"><b>Иу</b></p>'
            }, {
                lat: 46.164614,
                lng: 126.537094,
                title: 'Харбин',
                infoWindow: '<p class="map-city"><b>Харбин</b></p>'
            }, {
                lat: 24.495897,
                lng: 118.087814,
                title: 'Сямень',
                infoWindow: '<p class="map-city"><b>Сямень</b></p>'
            }, {
                lat: 29.896615,
                lng: 121.542907,
                title: 'Нинбо',
                infoWindow: '<p class="map-city"><b>Нинбо</b></p>'
            }, {
                lat: 30.401307,
                lng: 120.151119,
                title: 'Ханчжоу',
                infoWindow: '<p class="map-city"><b>Ханчжоу</b></p>'
            }, {
                lat: 38.927900,
                lng: 121.614425,
                title: 'Далянь',
                infoWindow: '<p class="map-city"><b>Далянь</b></p>'
            }, {
                lat: 36.096828,
                lng: 120.379729,
                title: 'Циндао',
                infoWindow: '<p class="map-city"><b>Циндао</b></p>'
            }]
        );
        this.markers.containers1 = new PlaceMarkers(
            [{
                lat: 23.195912,
                lng: 113.252106,
                title: 'Гуанчжоу',
                infoWindow: '<p class="map-notation"><b>Склад приема груза в Гуанчжоу</b></p>'
            }, {
                lat: 22.570902,
                lng: 114.055724,
                title: 'Шеньчжень(Яньтхянь)',
                infoWindow: '<p class="map-notation"><b>Склад приема груза в г. Шеньчжень (Яньтхянь)</b></p>'
            }, {
                lat: 24.495272,
                lng: 118.0885,
                title: 'Сямэнь',
                infoWindow: '<p class="map-notation"><b>Склад приема груза в г. Сямэнь</b></p>'
            }, {
                lat: 39.134321,
                lng: 117.198973,
                title: 'Тяньцзинь',
                infoWindow: '<p class="map-notation"><b>Склад приема груза в г. Тяньцзинь</b></p>'
            }, {
                lat: 31.28794,
                lng: 121.472626,
                title: 'Шанхай',
                infoWindow: '<p class="map-notation"><b>Склад приема груза в Шанхае</b></p>'
            }, {
                lat: 29.895425,
                lng: 121.541533,
                title: 'Нинбо',
                infoWindow: '<p class="map-notation"><b>Склад приема груза в г. Нинбо</b></p>'
            }, {
                lat: 36.094609,
                lng: 120.382476,
                title: 'Циндао',
                infoWindow: '<p class="map-notation"><b>Склад приема груза в г. Циндао</b></p>'
            }, {
                lat: 38.927366,
                lng: 121.611679,
                title: 'Далянь',
                infoWindow: '<p class="map-notation"><b>Склад приема груза в г. Далянь</b></p>'
            }, {
                lat: 23.358,
                lng: 116.677,
                title: 'Шаньтоу',
                infoWindow: '<p class="map-notation"><b>Склад приема груза в г. Шаньтоу</b></p>'
            }
                //{ lat: 39.951859, lng: 116.416197, title: 'Пекин', infoWindow: '<p class="map-notation"><b>Склад приема груза в Пекине</b></p>' },
            ]

        );
        this.markers.containers2 = new PlaceMarkers(
            [{
                lat: 43.205176,
                lng: 131.928892,
                title: 'Владивосток',
                infoWindow: '<p class="map-notation"><b>Владивосток</b></p>'
            }, {
                lat: 59.946071,
                lng: 30.331664,
                title: 'Санкт-Петербург',
                infoWindow: '<p class="map-notation"><b>Санкт-Петербург</b></p>'
            }, {
                lat: 42.7538,
                lng: 133.0219,
                title: 'Восточный',
                infoWindow: '<p class="map-notation"><b>Восточный</b></p>'
            }, {
                lat: 59.6651,
                lng: 28.2966,
                title: 'Усть-Луга',
                infoWindow: '<p class="map-notation"><b>Усть-Луга</b></p>'
            }, {
                lat: 59.444377,
                lng: 24.753463,
                title: 'Таллин',
                infoWindow: '<p class="map-notation"><b>Таллин</b></p>'
            }, {
                lat: 56.956,
                lng: 24.090,
                title: 'Рига',
                infoWindow: '<p class="map-notation"><b>Таллин</b></p>'
            }
                // { lat: 60.467162, lng: 26.945851, title: 'Котка', infoWindow: '<p class="map-notation"><b>Пункт таможенного оформления в г. Котка</b></p>' },
                // { lat: 53.570492, lng: 9.991851, title: 'Гамбург', infoWindow: '<p class="map-notation"><b>Пункт таможенного оформления в г. Гамбург</b></p>' },
                // { lat: 55.730977, lng: 21.134734, title: 'Клайпеда', infoWindow: '<p class="map-notation"><b>Пункт таможенного оформления в г. Клайпеда</b></p>' },
                // { lat: 50.255108, lng: 127.482605, title: 'Хэйхэ', infoWindow: '<p class="map-notation"><b>Пункт таможенного оформления в Хэйхэ</b></p>' },
                // { lat: 44.425444, lng: 131.151245, title: 'Суйфэньхэ', infoWindow: '<p class="map-notation"><b>Пункт таможенного оформления в Суйфэньхэ</b></p>' },
                // { lat: 43.285203, lng: 76.910949, title: 'Алма-Аты', infoWindow: '<p class="map-notation"><b>Пункт таможенного оформления в Алма-Аты</b></p>' },
                // { lat: 50.293287, lng: 57.164505, title: 'Актобэ', infoWindow: '<p class="map-notation"><b>Пункт таможенного оформления в Актобэ</b></p>' }
            ]

        );
        this.markers.containers3 = new PlaceMarkers(
            [{
                lat: 49.629,
                lng: 117.335,
                title: 'Манчжурия-Забайкальск',
                infoWindow: '<p class="map-notation"><b>Манчжурия-Забайкальск</b></p>'
            }, {
                lat: 45.204,
                lng: 82.560,
                title: 'Аланьшакоу -Достык (Казахстан)',
                infoWindow: '<p class="map-notation"><b>Аланьшакоу-Достык (Казахстан)</b></p>'
            }]
        );
        this.markers.sbornie1 = new PlaceMarkers(
            [{
                lat: 44.425444,
                lng: 131.151245,
                title: 'Суйфэньхэ — Уссурийск',
                infoWindow: '<p class="map-notation"><b>Пункт таможенного оформления Суйфэньхэ — Уссурийск</b></p>'
            }]
        );
        this.markers.sbornie2 = new PlaceMarkers(
            [{
                lat: 50.255108,
                lng: 127.482605,
                title: 'Хэйхэ — Благовещенск',
                infoWindow: '<p class="map-notation"><b>Пункт таможенного оформления Хэйхэ — Благовещенск</b></p>'
            }]
        );
        this.markers.sbornie3 = new PlaceMarkers(
            [{
                lat: 43.285203,
                lng: 76.910949,
                title: 'Урумчи — Алматы (Казахстан)',
                infoWindow: '<p class="map-notation"><b>Пункт таможенного оформления Урумчи — Алматы (Казахстан)</b></p>'
            }]
        );
    },
    create: function() {
        var self = this;
        var elm;

        elm = this.find(this.element, '.item');
        if (elm) {
            for (var i = 0; i < elm.length; i++) {
                var obj = $(elm[i]);
                var item = {
                    id: i,
                    obj: obj,
                    tid: obj.attr('tid'),
                    lat: obj.attr('lat'),
                    lng: obj.attr('lng'),
                    zoom: parseInt(obj.attr('zoom')) || 16
                };
                this.item.push(item);
            }
        }

        this.count = this.item.length;

        var processItem = function(i, item) {
            item.obj.css({
                zIndex: i ? 'auto' : 10
            });
            item.mapPosition = new google.maps.LatLng(item.lat, item.lng);

            item.map = new google.maps.Map(item.obj[0], {
                zoom: item.zoom,
                center: item.mapPosition,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                panControl: false,
                zoomControl: true,
                scaleControl: false,
                mapTypeControl: false,
                streetViewControl: false,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL,
                    position: google.maps.ControlPosition.TOP_RIGHT
                }
            });

            item.obj.css({
                opacity: i ? 0 : 1
            });

            google.maps.event.addListener(item.map, 'tilesloaded', function() {
                tt.clrGM(item.obj);

                if (typeof self.markers[item.tid] != _un_)
                    self.markers[item.tid].addMarkers(item.map);

                google.maps.event.clearListeners(item.map, 'tilesloaded');
            });
        }

        window.tt.GMapRequest(function() {
            for (var i = 0; i < self.count; i++)
                processItem(i, self.item[i]);
        });

        var dotID = 0;
        this.dots = this.find(this.element, 'ul');
        if (this.dots) {
            elm = this.dots.find('li');
            if (elm.length) {
                for (var i = 0; i < elm.length; i++) {
                    var obj = $(elm[i]);
                    if (!obj.hasClass('bull')) {
                        obj.bind('click', {
                            pos: dotID
                        }, function(e) {
                            self.switchMap(e.data.pos);
                        });
                        this.item[dotID].dot = obj;
                        dotID++;
                    }
                }
            }
        }

        this.inited = true;
    },
    switchMap: function(pos) {
        if (pos == this.pos) return;
        if (this.switching) return;

        this.switching = true;
        var self = this;

        var curItem = this.item[this.pos];
        var nxtItem = this.item[pos];

        this.pos = pos;

        if (!nxtItem.dot.hasClass('act')) nxtItem.dot.addClass('act');
        curItem.dot.removeClass('act');

        curItem.obj.stop().css({
            zIndex: 'auto'
        }).animate({
            opacity: 0
        }, 500, 'swing', function() {});
        nxtItem.obj.stop().css({
            zIndex: 10,
            opacity: 0
        }).animate({
            opacity: 1
        }, 500, 'swing', function() {
            self.switching = false;
        });
    },
    resize: function(ww, wh) {

    },
    remove: function() {
        this.rm();
    },
    markers: {

    }
});
var ServiceRequestForm = BaseClass.extend({
    __className: 'ServiceRequestForm',
    init: function(opt) {
        this._id = false;
        this.inited = false;
        this.simple = 0;

        this.element = false;
        this.opt = {
            fullScreen: false,
            duration: 500,
            easing: 'swing',
            assignToggleTo: '.request-form-caller'
        };
        this.setOptions(opt);

        if (!this.put()) return;

        this.busy = false;
        this.opened = false;
        this.returnFixedContent = false;


    },

    toggleRequestForm: function(dir) {
        if (this.opened == dir) return;

        var self = this;

        var duration = __app__.mobile ? 0 : this.opt.duration;
        var easing = __app__.mobile ? 'linear' : this.opt.easing;

        if (this.opened) {

            if (this.returnFixedContent) __app__.setFixedContent(false);

            var onComplete = function() {
                self.element.css({
                    display: 'none'
                });

                self.resetFORM();
                self.hideOK(false, true);
                self.showFORM(false, true);
            }

            this.element.stop().css({
                position: 'fixed'
            });

            this.opened = false;

            if (duration > 0) {
                this.element.animate({
                    top: -__app__.wh
                }, duration, easing, onComplete);
            } else {
                this.element.css({
                    top: -__app__.wh
                });
                onComplete();
            }

        } else {

            this.showFORM(false, true);

            var onComplete = function() {
                self.element.css({
                    position: 'absolute'
                });
                self.returnFixedContent = __app__.setFixedContent(true);
            }

            this.element.stop().css({
                display: 'block',
                top: -__app__.wh
            });

            this.opened = true;

            if (duration > 0) {
                this.element.animate({
                    top: 0
                }, duration, easing, onComplete);
            } else {
                this.element.css({
                    top: 0
                });
                onComplete();
            }

        }
    },
    gatherData: function() {
        var data = {
            ajax: 1,
            tid: this.formID,
            orgtype: this.orgtype ? this.orgtype.cVal : 0,
            simple: this.simple
        };

        if (this.cargo && this.cargo.val()) data.cargo = this.cargo.val();
        if (this.name && this.name.val()) data.name = this.name.val();
        if (this.phone && this.phone.val()) data.phone = this.phone.val();
        if (this.email && this.email.val()) data.email = this.email.val();
        if (this.comment && this.comment.val()) data.comment = this.comment.val();

        data = this._gatherData(data);

        return data;
    },
    _gatherData: function(data) {
        return data;
    },
    validateData: function(data) {
        if (this.name && (data.name.length < 2)) {
            this.name.addClass('error').focus().bind('keydown.error', function() {
                $(this).removeClass('error').unbind('keydown.error');
            });
            return false;
        } else if (this.phone && (data.phone.length < 2)) {
            this.phone.addClass('error').focus().bind('keydown.error', function() {
                $(this).removeClass('error').unbind('keydown.error');
            });
            return false;
        } else if (!this.simple && this.email && (!window.tt.mailtest(data.email))) {
            this.email.addClass('error').focus().bind('keydown.error', function() {
                $(this).removeClass('error').unbind('keydown.error');
            });
            return false;
        }

        return true;
    },

    showOK: function(cb, quick) {
        var duration = quick ? 0 : 200;
        this.OK.stop().css({
            display: 'block',
            opacity: 0
        });

        var formWidth = this.element.width();
        var formHeight = this.element.height();
        var okWidth = this.OK.width();
        var okHeight = this.OK.height();

        this.OK.css({
            left: this.simple ? 0 : Math.round((formWidth - okWidth) / 2),
            top: Math.round((formHeight - okHeight) / 2)
        });

        this.OK.animate({
            opacity: 1
        }, duration, 'swing', function() {
            if (typeof cb == _fn_) cb();
        });
    },
    hideOK: function(cb, quick) {
        var duration = quick ? 0 : 200;
        this.OK.stop().animate({
            opacity: 0
        }, duration, 'swing', function() {
            $(this).css({
                display: 'none'
            });
            if (typeof cb == _fn_) cb();
        });
    },
    showFORM: function(cb, quick) {
        var duration = quick ? 0 : 200;
        this.FORM.stop().css({
            display: 'block',
            opacity: 0
        }).animate({
            opacity: 1
        }, duration, 'swing', function() {
            if (typeof cb == _fn_) cb();
        });
    },
    hideFORM: function(cb, quick) {
        var duration = quick ? 0 : 200;
        this.FORM.stop().animate({
            opacity: 0
        }, duration, 'swing', function() {
            if (typeof cb == _fn_) cb();
        });
    },
    resetFORM: function() {
        if (this.cargo) this.cargo.val('');
        if (this.name) this.name.val('');
        if (this.phone) this.phone.val('');
        if (this.email) this.email.val('');
        if (this.comment) this.comment.val('');
    },
    resize: function(ww, wh) {
        ww = ww || __app__.ww;
        wh = wh || __app__.wh;

        if (this.orgtype) {
            var fldWidth = this.name.outerWidth(true);
            var fldHeight = fldWidth < 420 ? 36 : 46;
            this.orgtype.setSize(fldWidth + 1, fldHeight);
        }

        if (!this.opt.fullScreen) return;

        if (!this.opened) this.element.css({
            display: 'block',
            opacity: 0
        });

        var formDisplay = this.FORM.css('display');
        this.FORM.css({
            display: 'block'
        });

        var okDisplay = this.OK.css('display');
        this.OK.css({
            display: 'block'
        });

        this.element.css({
            width: ww
        });

        var elmHeight = wh;

        var formHeight = this.FORM.outerHeight(true);
        if (formHeight > elmHeight) elmHeight = formHeight + 40;

        var okHeight = this.OK.outerHeight(true);
        if (okHeight > elmHeight) elmHeight = okHeight + 40;

        this.element.css({
            height: elmHeight
        });

        this.FORM.css({
            top: Math.round((elmHeight - formHeight) / 2),
            left: Math.round((ww - this.FORM.outerWidth(true)) / 2)
        });
        this.OK.css({
            top: Math.round((elmHeight - okHeight) / 2),
            left: this.simple ? 0 : Math.round((ww - this.OK.outerWidth(true)) / 2)
        });

        this.FORM.css({
            display: formDisplay
        });
        this.OK.css({
            display: okDisplay
        });

        if (!this.opened) this.element.css({
            display: 'none',
            opacity: 1
        });
    },
    remove: function() {
        if (this.opt.fullScreen)
            $(window).unbind('appResize.' + this.__className);

        this.rm();
    }
})

var ServicesMenu = BaseClass.extend({
    __className: 'ServicesMenu',
    init: function(opt) {
        this.inited = false;

        __ServicesMenu__ = this;

        this.delegate = false;
        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        this.actSection = -1;
        this.actItem = false;
        this.section = [];

        this.fixedFrom = false;
        this.fixedUntil = false;
        this.fixed = false;
        this.afterFix = false;
        this.switching = false;

        this.height = 0;
        this.heightDiff = 0;
        this.currentHeightDiff = 0;
        this.prevScrollTop = 0;
        this.diffStartedAt = 0;
        this.scrollDir = true;

        this.create();
    },
    create: function() {
        var self = this;

        if (!this.delegate.centerContent) return;

        var sections = this.find(this.element, 'li.section');
        if (sections) {
            for (var i = 0; i < sections.length; i++) {
                var section = {
                    id: i,
                    obj: $(sections[i]),
                    div: false,
                    ul: false,
                    item: [],
                    act: false
                };

                section.act = section.obj.hasClass('act');
                if (section.act) this.actSection = section.id;

                section.ul = this.find(section.obj, 'ul.section');
                if (section.ul) {
                    section.div = this.find(section.obj, 'div');
                    if (section.div) {
                        section.div.bind('click', {
                            section: i
                        }, function(e) {
                            self.mouseSection(e);
                        });
                        section.link = this.find(section.div, 'a');
                        if (section.href) {
                            section.link.attr('href');
                        }
                    }

                    var items = this.find(section.ul, 'li');
                    if (items) {
                        for (var j = 0; j < items.length; j++) {
                            var obj = $(items[j]);
                            var item = {
                                id: j,
                                section: i,
                                obj: obj,
                                tid: obj.attr('tid'),
                                a: false,
                                tid: false,
                                act: false,
                                href: false,
                                activate: function(dir) {
                                    if (this.act == dir) return;

                                    if (dir) {

                                        //if(this.a){this.a.remove();this.a = false;}
                                        //this.obj.html(this.text);

                                    } else {

                                        //this.a = $('<a></a>',{ href : 'javascript:void(0);' }).html(this.text)
                                        //.bind('click',{ section : this.section, item : this.id },function(e){ return self.mouseItem(e); });
                                        //this.obj.html( this.a );

                                    }

                                    this.act = dir;
                                }
                            };

                            item.tid = item.obj.attr('tid');
                            item.a = this.find(item.obj, 'a');
                            if (item.a) {
                                //item.text = item.a.html();
                                //item.href = item.a.attr('href');
                                //item.a.attr('href','javascript:void(0);');
                                //item.a.bind('click',{ section : i, item : j },function(e){ return self.mouseItem(e); });
                            } else {
                                item.href = item.obj.attr('href');
                                item.text = item.obj.html();
                                this.actItem = item;
                                item.act = true;
                            }

                            section.item.push(item);
                        }
                    }
                }

                this.section.push(section);

            }

            $(window).bind('appScroll.' + this.__className, function(e, scrollTop) {
                self.updateScroll(scrollTop);
            });

        }
    },
    updatePosition: function() {
        if (!__FOOTER__.miniFooter) {
            __FOOTER__.resize();
            window.scrollTo(0, __app__.scrollTop);
        }
    },
    updateScroll: function(scrollTop) {
        if (!this.fixedFrom) return;

        var shoudBeFixed = ((scrollTop + __app__.fMH) >= this.fixedFrom);

        this.fixedUntil = __FOOTER__.contentHeight - (scrollTop + __app__.fMH) - (this.element.outerHeight(true) + 60);

        if (shoudBeFixed && !this.fixed) {
            this.element.css({
                position: 'fixed',
                top: __app__.fMH
            });
            this.fixed = true;
        } else if (!shoudBeFixed && this.fixed) {
            this.element.css({
                position: 'absolute',
                top: __indexPart.height
            });
            this.fixed = false;
        } else if (this.fixed) {

            var scrollDir = scrollTop > this.prevScrollTop;
            if (scrollDir != this.scrollDir) {
                this.prevHeightDiff = this.currentHeightDiff;
                this.diffStartedAt = this.prevScrollTop;
                this.scrollDir = scrollDir;
            }

            if (this.heightDiff > 0) {
                if (this.scrollDir) {
                    this.currentHeightDiff = Math.min(this.heightDiff, (scrollTop - this.diffStartedAt));
                    this.element.css({
                        position: 'fixed',
                        top: __app__.fMH - this.currentHeightDiff
                    });
                } else {
                    this.currentHeightDiff = Math.min(0, (this.diffStartedAt - scrollTop) - this.prevHeightDiff);
                    this.element.css({
                        position: 'fixed',
                        top: __app__.fMH + this.currentHeightDiff
                    });
                }
            }

            // if( this.fixedUntil < 0 ){
            // 	this.element.css({ top : __app__.fMH + this.fixedUntil });
            // 	this.afterFix = true;
            // }else if(this.afterFix){
            // 	this.element.css({ top : __app__.fMH });
            // 	this.afterFix = false;
            // }

            this.prevScrollTop = scrollTop;
        }
    },
    resize: function(ww, wh) {
        this.fixedFrom = __indexPart.height;
        this.height = this.element.outerHeight(true);
        this.heightDiff = this.height + __app__.fMH - $(window).height();

        if (!this.fixed) {
            this.element.css({
                position: 'absolute',
                top: __indexPart.height
            });
        } else {
            this.element.css({
                position: 'fixed',
                top: __app__.fMH
            });
        }

        __ServicesMenu__.updatePosition();
    },
    mouseSection: function(e) {
        var section = this.section[e.data.section];
        if (section.id == this.actSection) {
            if (!section.link || e.target.tagName == 'DIV') {
                section.ul.slideUp(500, 'swing', function() {
                    __ServicesMenu__.resize();
                });
                section.obj.removeClass('act');
                this.actSection = -1;
            }
        } else {
            e.preventDefault();
            e.stopPropagation();

            if (this.actSection >= 0) {
                var actSection = this.section[this.actSection];
                actSection.obj.removeClass('act');
                this.actSection = -1;
                actSection.ul.slideUp(500, 'swing', function() {
                    __ServicesMenu__.resize();
                });
            }
            section.ul.slideDown(500, 'swing', function() {
                __ServicesMenu__.resize();
            });
            if (!section.obj.hasClass('act')) section.obj.addClass('act');
            this.actSection = section.id;
        }
    },
    activateItem: function(item) {
        if (this.actItem) this.actItem.activate(false);
        this.actItem = item;
        item.activate(true);
    },
    mouseItem: function(e) {
        var section = this.section[e.data.section];
        var item = section.item[e.data.item];
        var self = this;

        switch (e.type) {
            case 'click':
                if (item.tid) {
                    if (this.switching) return;
                    this.switching = true;

                    if (!this.loader)
                        this.loader = this.castLoader().css({
                            position: 'absolute',
                            opacity: 0
                        }).appendTo(this.delegate.centerContent.parent());

                    var menuWidth = this.element.outerWidth(true);

                    __app__.scrollTo(__indexPart.height - __app__.fMH, function() {

                        self.loader.css({
                            top: __app__.scrollTop + __app__.fMH + Math.round((__app__.wh - __app__.fMH - 60) / 2) - __indexPart.height,
                            left: Math.round((self.delegate.centerContent.width() - 60) / 2),
                            display: 'block',
                            opacity: 0
                        }).animate({
                            opacity: 1
                        }, 500, 'swing');

                    }, 500);
                    this.delegate.centerContent.stop().animate({
                        opacity: 0
                    }, 1000, 'swing', function() {

                        $.ajax({
                            url: item.href,
                            type: 'POST',
                            dataType: 'json',
                            data: {
                                ajax: 1,
                                tid: item.tid
                            },
                            context: self
                        })
                            .done(function(data) {

                                if (ga) ga('send', 'pageview', {
                                    'page': item.href,
                                    'title': item.ttl
                                });
                                if (yaCounter16947997) yaCounter16947997.hit(item.href, item.ttl, 'http://www.transitplus.ru/');

                                var self = this;
                                this.activateItem(item);
                                this.delegate.killContent();
                                self.loader.stop().animate({
                                    opacity: 0
                                }, 500, 'swing', function() {

                                    $(this).css({
                                        display: 'none'
                                    });
                                    self.delegate.centerContent.html(data.html);
                                    self.delegate.initContent();
                                    self.delegate.centerContent.stop().animate({
                                        opacity: 1
                                    }, 500, 'swing');

                                    if (window.history && window.history.pushState) {
                                        window.history.pushState({
                                            html: self.delegate.centerContent.html(),
                                            pageTitle: item.ttl
                                        }, "", item.href);
                                    }
                                });
                            })
                            .fail(function() {

                                alert('Ошибка загрузки страницы.');

                            })
                            .always(function() {

                                this.switching = false;

                            });

                    });

                }
                break;
        }

    }
});
var ServicesOnLife = BaseClass.extend({
    __className: 'Services',
    init: function(opt) {
        this._id = false;
        this.inited = false;

        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        if (!this.put()) return;

        this.item = [];

        this.iconOptions = [
            // { frameWidth : 0, frameHeight : 0, frames : 16, speed : 40, goBack : false },
            {
                cssAnimation: true,
                xoff: 9
            },
            // { frameWidth : 0, frameHeight : 0, frames : 14, speed : 20, noOfRepeats : 6 },
            {
                cssAnimation: true,
                xoff: 25
            },
            // { frameWidth : 0, frameHeight : 0, frames : 15, speed : 100 },
            {
                frameWidth: 0,
                frameHeight: 0,
                xoff: 24,
                frames: 10,
                speed: 50,
                goBack: true
            },

            {
                frameWidth: 86,
                frameHeight: 62,
                xoff: -20,
                yoff: -7,
                frames: 19,
                speed: 50,
                goBack: true
            }, {
                frameWidth: 86,
                frameHeight: 62,
                xoff: -25,
                frames: 7,
                speed: 50,
                goBack: true
            }
        ];

        this.create();
    },
    create: function() {
        var self = this;
        var elm = this.find(this.element, '.item');
        if (elm) {
            for (var i = 0; i < elm.length; i++) {
                var obj = $(elm[i]);
                var item = {
                    id: i,
                    obj: obj,
                    cnt: obj.find('.cnt'),
                    ico: obj.find('.ico'),
                    animation: false
                };

                this.iconOptions[i]._element = item.ico;
                item.animation = new SpriteAnimation(this.iconOptions[i]);

                item.obj.css({
                    cursor: 'pointer'
                }).bind('click mouseenter mouseleave', {
                    id: i
                }, function(e) {
                    self.mouseItem(e);
                });
                this.item.push(item);
            }
        }

        this.inited = true;
    },
    mouseItem: function(e) {
        var item = this.item[e.data.id];

        switch (e.type) {
            case 'click':
                break;
            case 'mouseenter':
                item.animation.startAnimate();
                break;
            case 'mouseleave':
                item.animation.stopAnimate();
                break;
        }
    },
    resize: function(ww, wh) {

        var itemsWidth = 0;
        for (var i = 0; i < this.item.length; i++) {
            var item = this.item[i];
            item.itemWidth = item.obj.outerWidth(true);
            itemsWidth += item.itemWidth;
        }

        var itemPad = Math.round((__app__.ww - itemsWidth) / (this.item.length + 1));
        itemsWidth = 0;

        for (var i = 0; i < this.item.length; i++) {
            var item = this.item[i];
            item.obj.css({
                display: 'block',
                position: 'absolute',
                top: 0,
                left: itemsWidth + itemPad
            });
            itemsWidth += itemPad + item.itemWidth;

            if (item.animation) item.animation.resize();
        }
    },
    remove: function() {
        this.rm();
    }
});
var SizingRule = BaseClass.extend({
    init: function(opt) {
        this.rule = false;
        this.element = false;
        this.opt = {};
        this.setOptions(opt);
    },
    resize: function(mul) {
        if (!this.element) return;
        if (typeof mul == _un_) mul = __app__.mul;

        var css = {};

        for (var i = 0; i < this.rule.length; i++) {
            var rule = this.rule[i];
            var value = Math.round(rule.min + (rule.max - rule.min) * mul);

            if (rule.css == 'line-height') value += 'px';

            css[rule.css] = value;
        }

        this.element.css(css);
    }
});
var SpriteAnimation = BaseClass.extend({
    __className: 'SpriteAnimation',
    init: function(opt) {
        this.element = false;
        this.opt = {
            frameWidth: 200,
            frameHeight: 144,
            xoff: 0,
            yoff: 0,
            goBack: false,
            speed: 50,
            frames: 12,
            init: null
        };
        this.setOptions(opt);

        this.recalcWidth = !this.opt.frameWidth;
        this.recalcHeight = !this.opt.frameHeight;

        this.pos = 0;
        this.tmr = false;
        this.animating = false;
        this.goingBack = false;

        this.repeatCount = 0;

        this.create();
    },
    create: function() {
        if (this.recalcWidth) this.opt.frameWidth = this.element.width();
        if (this.recalcHeight) this.opt.frameHeight = this.element.height();

        this._create();

        var self = this;
        if (typeof this.opt.init == 'function')
            this.opt.init(this);
    },
    _create: function() {},
    stopAnimate: function(justStop) {
        if (this.opt.cssAnimation) {
            this.element.removeClass('animateServiceIcon');
            return;
        }

        if (this.tmr) {
            clearInterval(this.tmr);
            this.tmr = null;
        }

        if (justStop) return;

        this.repeatCount = 0;

        this.pos = 0;
        this.goingBack = false;
        this.element.css({
            'background-position': this.opt.xoff + 'px ' + this.opt.yoff + 'px'
        });
    },
    startAnimate: function() {
        if (this.opt.cssAnimation) {
            this.element.addClass('animateServiceIcon');
            return;
        }

        this.stopAnimate(false);
        this.pos = 0;

        var self = this;
        this.tmr = setInterval(function() {
            self.update();
        }, this.opt.speed);
    },
    resize: function() {
        if (this.recalcWidth) this.opt.frameWidth = this.element.width();
        if (this.recalcHeight) this.opt.frameHeight = this.element.height();
        this.element.css({
            'background-position': -(this.pos * this.opt.frameWidth) + this.opt.xoff + 'px ' + this.opt.yoff + 'px'
        });
    },
    update: function() {
        if (this.goingBack && ((this.pos - 1) < 0)) {
            this.goingBack = false;
            return this.stopAnimate(true);
        }

        if (!this.goingBack && ((this.pos + 1) >= this.opt.frames)) {
            if (this.opt.noOfRepeats && (this.opt.noOfRepeats >= this.repeatCount)) {
                this.repeatCount++;
                this.pos = -1;
            } else {
                if (this.opt.goBack) this.goingBack = true;
                else return this.stopAnimate(true);
            }
        }

        this.pos += this.goingBack ? -1 : 1;

        this.element.css({
            'background-position': -(this.pos * this.opt.frameWidth) + this.opt.xoff + 'px ' + this.opt.yoff + 'px'
        });
    },
    remove: function() {
        this.stopAnimate();
        this.rm();
    }
});

var SpriteAnimationCar = SpriteAnimation.extend({
    _create: function() {

    },
    update: function() {
        var auto = true;

        if ((this.pos < this.opt.repeatFrames[0]) || (this.pos > this.opt.repeatFrames[1])) {

            //

        } else if (this.pos == this.opt.repeatFrames[0]) {
            this.repeatCount++;
        } else if (this.pos == this.opt.repeatFrames[1]) {
            if (this.repeatCount < this.opt.noOfRepeats) {
                this.pos = this.opt.repeatFrames[0];
                auto = false;
            } else {
                this.repeatCount = 0;
                this.pos = this.opt.repeatFrames[0];
                this.goingBack = true;
            }
        }

        if (this.goingBack && ((this.pos - 1) < 0)) {
            this.goingBack = false;
            return this.stopAnimate(true);
        }

        if (auto)
            this.pos += this.goingBack ? -1 : 1;

        if (this.pos >= this.opt.frames) {
            return this.stopAnimate(true);
        }

        this.element.css({
            'background-position': -(this.pos * this.opt.frameWidth + this.opt.xoff) + 'px ' + this.opt.yoff + 'px'
        });
    }
});
var ValueSlider = BaseClass.extend({
    __className: 'ValueSlider',
    init: function(opt) {
        this._id = false;
        this.inited = false;

        this.startVal = 0;
        this.endVal = 100;

        this.updateFunction = false;
        this.delegate = false;
        this.element = false;
        this.opt = {};
        this.setOptions(opt);

        if (!this.put()) return;

        this.scroller = false;
        this.progress = false;

        this.poslim = {};
        this.moving = false;
        this.sx = 0;
        this.sy = 0;
        this.spos = false;

        this.create();
    },
    create: function() {
        var self = this;

        this.progress = this.find(this.element, '.progress');
        this.scroller = this.find(this.element, '.scroller');

        if (this.progress && this.scroller) {
            this.scroller.bind('mousedown.' + this.__className, function(e) {
                self.mouseSlider(e);
            });
            this.element.bind('click.' + this.__className, function(e) {
                self.clickSlider(e);
            });

            this.resize();

            this.initialize();

            $(window).bind('appResize.' + this.__className + this._id, function(e) {
                self.resize();
            });
        }

        if (tt.is.mobile && this.delegate) {
            tt.setTouchEvent({
                touchSurface: this.delegate.element,
                onStart: function() {
                    self.spos = self.scroller.position();
                    self.moving = true;
                },
                onMove: function(touchOptions) {
                    self.onMouseMove(touchOptions.distanceX);
                },
                onEnd: function(touchOptions) {
                    self.moving = false;
                }
            });
        }
    },
    initialize: function() {
        this.updateFromPrc(50);
    },
    resize: function() {
        this.opt.sliderWidth = this.element.width();
        this.opt.sliderHeight = this.element.height();
        this.opt.scrollerWidth = this.scroller.width();
        this.opt.scrollerHeight = this.scroller.height();

        this.poslim.xmin = -Math.round(this.opt.scrollerWidth / 2);
        this.poslim.xmax = this.opt.sliderWidth - Math.round(this.opt.scrollerWidth / 2);

        this.poslim.width = Math.abs(this.poslim.xmin - this.poslim.xmax);
    },
    clickSlider: function(e) {
        this.cancelEvent(e);

        this.sx = e.pageX;
        this.sy = e.pageY;

        var off = this.element.offset();
        var xpos = off.left - e.pageX;

        var xprc = Math.round(Math.abs(this.poslim.xmin - xpos) / this.poslim.width * 100);

        this.scroller.css({
            left: Math.round(this.poslim.xmin + this.poslim.width / 100 * xprc)
        });
        this.progress.css({
            width: Math.round(this.opt.sliderWidth / 100 * xprc)
        });

        var xval = this.startVal + Math.round((this.endVal - this.startVal) / 100 * xprc);

        if (typeof this.updateFunction == _fn_) this.updateFunction(xprc, xval);
    },
    mouseSlider: function(e) {
        this.cancelEvent(e);

        switch (e.type) {
            case 'mousedown':
                this.sx = e.pageX;
                this.sy = e.pageY;

                this.spos = this.scroller.position();

                var self = this;
                $(window).bind('mousemove.' + this.__className, function(e) {
                    self.mouseSlider(e);
                });
                $(window).bind('mouseup.' + this.__className, function(e) {
                    self.mouseSlider(e);
                });

                this.moving = false;
                break;
            case 'mousemove':
                var xch = e.pageX - this.sx;
                var ych = e.pageY - this.sy;

                this.onMouseMove(xch);
                break;
            case 'mouseup':
                $(window).unbind('mousemove.' + this.__className);
                $(window).unbind('mouseup.' + this.__className);
                this.moving = false;
                break;
        }
    },
    onMouseMove: function(xch) {
        var xpos = this.spos.left + xch;
        if (xpos < this.poslim.xmin) {
            xpos = this.poslim.xmin;
        } else if (xpos > this.poslim.xmax) {
            xpos = this.poslim.xmax;
        }
        this.scroller.css({
            left: xpos
        });

        var xprc = Math.round(Math.abs(this.poslim.xmin - xpos) / this.poslim.width * 100);
        this.progress.css({
            width: Math.round(this.opt.sliderWidth / 100 * xprc)
        });

        var xval = this.startVal + Math.round((this.endVal - this.startVal) / 100 * xprc);

        if (typeof this.updateFunction == _fn_) this.updateFunction(xprc, xval);
    },
    updateFromPrc: function(xprc, skip) {
        this.scroller.css({
            left: this.poslim.xmin + Math.round(this.poslim.width / 100 * xprc)
        });
        this.progress.css({
            width: Math.round(this.opt.sliderWidth / 100 * xprc)
        });

        var xval = this.startVal + Math.round((this.endVal - this.startVal) / 100 * xprc);

        if (!skip && (typeof this.updateFunction == _fn_)) {
            this.updateFunction(xprc, xval);
        }
    },
    updateFromValue: function(val) {
        val = parseInt(val);
        if (val < this.startVal) val = this.startVal;
        else if (val > this.endVal) val = this.endVal;

        var prc = val / (this.endVal - this.startVal) * 100;

        // console.log( prc );

        this.updateFromPrc(prc, true);
    },
    remove: function() {
        this.element.unbind('click.' + this.__className);
        this.scroller.unbind('mousedown.' + this.__className);
        $(window).unbind('appResize.' + this.__className + this._id);
        this.rm();
    }
});