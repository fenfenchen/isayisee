! function (t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    function n(t) {
        var e = !!t && "length" in t && t.length,
            n = oe.type(t);
        return "function" === n || oe.isWindow(t) ? !1 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function i(t, e, n) {
        if (oe.isFunction(e)) return oe.grep(t, function (t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType) return oe.grep(t, function (t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (me.test(e)) return oe.filter(e, t, n);
            e = oe.filter(e, t)
        }
        return oe.grep(t, function (t) {
            return Z.call(e, t) > -1 !== n
        })
    }

    function r(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function o(t) {
        var e = {};
        return oe.each(t.match(be) || [], function (t, n) {
            e[n] = !0
        }), e
    }

    function s() {
        Y.removeEventListener("DOMContentLoaded", s), t.removeEventListener("load", s), oe.ready()
    }

    function a() {
        this.expando = oe.expando + a.uid++
    }

    function u(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(Se, "-$&").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ae.test(n) ? oe.parseJSON(n) : n
                } catch (r) {}
                Ee.set(t, e, n)
            } else n = void 0;
        return n
    }

    function c(t, e, n, i) {
        var r, o = 1,
            s = 20,
            a = i ? function () {
                return i.cur()
            } : function () {
                return oe.css(t, e, "")
            },
            u = a(),
            c = n && n[3] || (oe.cssNumber[e] ? "" : "px"),
            l = (oe.cssNumber[e] || "px" !== c && +u) && je.exec(oe.css(t, e));
        if (l && l[3] !== c) {
            c = c || l[3], n = n || [], l = +u || 1;
            do o = o || ".5", l /= o, oe.style(t, e, l + c); while (o !== (o = a() / u) && 1 !== o && --s)
        }
        return n && (l = +l || +u || 0, r = n[1] ? l + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = l, i.end = r)), r
    }

    function l(t, e) {
        var n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && oe.nodeName(t, e) ? oe.merge([t], n) : n
    }

    function h(t, e) {
        for (var n = 0, i = t.length; i > n; n++) Ce.set(t[n], "globalEval", !e || Ce.get(e[n], "globalEval"))
    }

    function p(t, e, n, i, r) {
        for (var o, s, a, u, c, p, f = e.createDocumentFragment(), d = [], m = 0, g = t.length; g > m; m++)
            if (o = t[m], o || 0 === o)
                if ("object" === oe.type(o)) oe.merge(d, o.nodeType ? [o] : o);
                else if ($e.test(o)) {
            for (s = s || f.appendChild(e.createElement("div")), a = (Ne.exec(o) || ["", ""])[1].toLowerCase(), u = Me[a] || Me._default, s.innerHTML = u[1] + oe.htmlPrefilter(o) + u[2], p = u[0]; p--;) s = s.lastChild;
            oe.merge(d, s.childNodes), s = f.firstChild, s.textContent = ""
        } else d.push(e.createTextNode(o));
        for (f.textContent = "", m = 0; o = d[m++];)
            if (i && oe.inArray(o, i) > -1) r && r.push(o);
            else if (c = oe.contains(o.ownerDocument, o), s = l(f.appendChild(o), "script"), c && h(s), n)
            for (p = 0; o = s[p++];) Oe.test(o.type || "") && n.push(o);
        return f
    }

    function f() {
        return !0
    }

    function d() {
        return !1
    }

    function m() {
        try {
            return Y.activeElement
        } catch (t) {}
    }

    function g(t, e, n, i, r, o) {
        var s, a;
        if ("object" == typeof e) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in e) g(t, a, n, i, e[a], o);
            return t
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = d;
        else if (!r) return t;
        return 1 === o && (s = r, r = function (t) {
            return oe().off(t), s.apply(this, arguments)
        }, r.guid = s.guid || (s.guid = oe.guid++)), t.each(function () {
            oe.event.add(this, e, r, i, n)
        })
    }

    function v(t, e) {
        return oe.nodeName(t, "table") && oe.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function y(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function _(t) {
        var e = We.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function w(t, e) {
        var n, i, r, o, s, a, u, c;
        if (1 === e.nodeType) {
            if (Ce.hasData(t) && (o = Ce.access(t), s = Ce.set(e, o), c = o.events)) {
                delete s.handle, s.events = {};
                for (r in c)
                    for (n = 0, i = c[r].length; i > n; n++) oe.event.add(e, r, c[r][n])
            }
            Ee.hasData(t) && (a = Ee.access(t), u = oe.extend({}, a), Ee.set(e, u))
        }
    }

    function b(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && Le.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
    }

    function x(t, e, n, i) {
        e = K.apply([], e);
        var r, o, s, a, u, c, h = 0,
            f = t.length,
            d = f - 1,
            m = e[0],
            g = oe.isFunction(m);
        if (g || f > 1 && "string" == typeof m && !ie.checkClone && ze.test(m)) return t.each(function (r) {
            var o = t.eq(r);
            g && (e[0] = m.call(this, r, o.html())), x(o, e, n, i)
        });
        if (f && (r = p(e, t[0].ownerDocument, !1, t, i), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
            for (s = oe.map(l(r, "script"), y), a = s.length; f > h; h++) u = r, h !== d && (u = oe.clone(u, !0, !0), a && oe.merge(s, l(u, "script"))), n.call(t[h], u, h);
            if (a)
                for (c = s[s.length - 1].ownerDocument, oe.map(s, _), h = 0; a > h; h++) u = s[h], Oe.test(u.type || "") && !Ce.access(u, "globalEval") && oe.contains(c, u) && (u.src ? oe._evalUrl && oe._evalUrl(u.src) : oe.globalEval(u.textContent.replace(Ue, "")))
        }
        return t
    }

    function k(t, e, n) {
        for (var i, r = e ? oe.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || oe.cleanData(l(i)), i.parentNode && (n && oe.contains(i.ownerDocument, i) && h(l(i, "script")), i.parentNode.removeChild(i));
        return t
    }

    function T(t, e) {
        var n = oe(e.createElement(t)).appendTo(e.body),
            i = oe.css(n[0], "display");
        return n.detach(), i
    }

    function C(t) {
        var e = Y,
            n = Ve[t];
        return n || (n = T(t, e), "none" !== n && n || (Xe = (Xe || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Xe[0].contentDocument, e.write(), e.close(), n = T(t, e), Xe.detach()), Ve[t] = n), n
    }

    function E(t, e, n) {
        var i, r, o, s, a = t.style;
        return n = n || Ge(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, "" !== s && void 0 !== s || oe.contains(t.ownerDocument, t) || (s = oe.style(t, e)), n && !ie.pixelMarginRight() && Ye.test(s) && Qe.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o), void 0 !== s ? s + "" : s
    }

    function A(t, e) {
        return {
            get: function () {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function S(t) {
        if (t in rn) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), n = nn.length; n--;)
            if (t = nn[n] + e, t in rn) return t
    }

    function F(t, e, n) {
        var i = je.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }

    function j(t, e, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += oe.css(t, n + De[o], !0, r)), i ? ("content" === n && (s -= oe.css(t, "padding" + De[o], !0, r)), "margin" !== n && (s -= oe.css(t, "border" + De[o] + "Width", !0, r))) : (s += oe.css(t, "padding" + De[o], !0, r), "padding" !== n && (s += oe.css(t, "border" + De[o] + "Width", !0, r)));
        return s
    }

    function D(e, n, i) {
        var r = !0,
            o = "width" === n ? e.offsetWidth : e.offsetHeight,
            s = Ge(e),
            a = "border-box" === oe.css(e, "boxSizing", !1, s);
        if (Y.msFullscreenElement && t.top !== t && e.getClientRects().length && (o = Math.round(100 * e.getBoundingClientRect()[n])), 0 >= o || null == o) {
            if (o = E(e, n, s), (0 > o || null == o) && (o = e.style[n]), Ye.test(o)) return o;
            r = a && (ie.boxSizingReliable() || o === e.style[n]), o = parseFloat(o) || 0
        }
        return o + j(e, n, i || (a ? "border" : "content"), r, s) + "px"
    }

    function P(t, e) {
        for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++) i = t[s], i.style && (o[s] = Ce.get(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Pe(i) && (o[s] = Ce.access(i, "olddisplay", C(i.nodeName)))) : (r = Pe(i), "none" === n && r || Ce.set(i, "olddisplay", r ? n : oe.css(i, "display"))));
        for (s = 0; a > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
        return t
    }

    function L(t, e, n, i, r) {
        return new L.prototype.init(t, e, n, i, r)
    }

    function N() {
        return t.setTimeout(function () {
            on = void 0
        }), on = oe.now()
    }

    function O(t, e) {
        var n, i = 0,
            r = {
                height: t
            };
        for (e = e ? 1 : 0; 4 > i; i += 2 - e) n = De[i], r["margin" + n] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r
    }

    function M(t, e, n) {
        for (var i, r = (B.tweeners[e] || []).concat(B.tweeners["*"]), o = 0, s = r.length; s > o; o++)
            if (i = r[o].call(n, e, t)) return i
    }

    function $(t, e, n) {
        var i, r, o, s, a, u, c, l, h = this,
            p = {},
            f = t.style,
            d = t.nodeType && Pe(t),
            m = Ce.get(t, "fxshow");
        n.queue || (a = oe._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () {
            a.unqueued || u()
        }), a.unqueued++, h.always(function () {
            h.always(function () {
                a.unqueued--, oe.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = oe.css(t, "display"), l = "none" === c ? Ce.get(t, "olddisplay") || C(t.nodeName) : c, "inline" === l && "none" === oe.css(t, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", h.always(function () {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (r = e[i], an.exec(r)) {
                if (delete e[i], o = o || "toggle" === r, r === (d ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i]) continue;
                    d = !0
                }
                p[i] = m && m[i] || oe.style(t, i)
            } else c = void 0;
        if (oe.isEmptyObject(p)) "inline" === ("none" === c ? C(t.nodeName) : c) && (f.display = c);
        else {
            m ? "hidden" in m && (d = m.hidden) : m = Ce.access(t, "fxshow", {}), o && (m.hidden = !d), d ? oe(t).show() : h.done(function () {
                oe(t).hide()
            }), h.done(function () {
                var e;
                Ce.remove(t, "fxshow");
                for (e in p) oe.style(t, e, p[e])
            });
            for (i in p) s = M(d ? m[i] : 0, i, h), i in m || (m[i] = s.start, d && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function R(t, e) {
        var n, i, r, o, s;
        for (n in t)
            if (i = oe.camelCase(n), r = e[i], o = t[n], oe.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = oe.cssHooks[i], s && "expand" in s) {
                o = s.expand(o), delete t[i];
                for (n in o) n in t || (t[n] = o[n], e[n] = r)
            } else e[i] = r
    }

    function B(t, e, n) {
        var i, r, o = 0,
            s = B.prefilters.length,
            a = oe.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (r) return !1;
                for (var e = on || N(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, o = 1 - i, s = 0, u = c.tweens.length; u > s; s++) c.tweens[s].run(o);
                return a.notifyWith(t, [c, o, n]), 1 > o && u ? n : (a.resolveWith(t, [c]), !1)
            },
            c = a.promise({
                elem: t,
                props: oe.extend({}, e),
                opts: oe.extend(!0, {
                    specialEasing: {},
                    easing: oe.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: on || N(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var i = oe.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (e) {
                    var n = 0,
                        i = e ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) c.tweens[n].run(1);
                    return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                }
            }),
            l = c.props;
        for (R(l, c.opts.specialEasing); s > o; o++)
            if (i = B.prefilters[o].call(c, t, l, c.opts)) return oe.isFunction(i.stop) && (oe._queueHooks(c.elem, c.opts.queue).stop = oe.proxy(i.stop, i)), i;
        return oe.map(l, M, c), oe.isFunction(c.opts.start) && c.opts.start.call(t, c), oe.fx.timer(oe.extend(u, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function q(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function I(t) {
        return function (e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0,
                o = e.toLowerCase().match(be) || [];
            if (oe.isFunction(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function H(t, e, n, i) {
        function r(a) {
            var u;
            return o[a] = !0, oe.each(t[a] || [], function (t, a) {
                var c = a(e, n, i);
                return "string" != typeof c || s || o[c] ? s ? !(u = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
            }), u
        }
        var o = {},
            s = t === En;
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }

    function z(t, e) {
        var n, i, r = oe.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && oe.extend(!0, t, i), t
    }

    function W(t, e, n) {
        for (var i, r, o, s, a = t.contents, u = t.dataTypes;
            "*" === u[0];) u.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) {
                    u.unshift(r);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (r in n) {
                if (!u[0] || t.converters[r + " " + u[0]]) {
                    o = r;
                    break
                }
                s || (s = r)
            }
            o = o || s
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }

    function U(t, e, n, i) {
        var r, o, s, a, u, c = {},
            l = t.dataTypes.slice();
        if (l[1])
            for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
        for (o = l.shift(); o;)
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !u && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = o, o = l.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (s = c[u + " " + o] || c["* " + o], !s)
                for (r in c)
                    if (a = r.split(" "), a[1] === o && (s = c[u + " " + a[0]] || c["* " + a[0]])) {
                        s === !0 ? s = c[r] : c[r] !== !0 && (o = a[0], l.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && t["throws"]) e = s(e);
                else try {
                    e = s(e)
                } catch (h) {
                    return {
                        state: "parsererror",
                        error: s ? h : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function X(t, e, n, i) {
        var r;
        if (oe.isArray(e)) oe.each(e, function (e, r) {
            n || jn.test(t) ? i(t, r) : X(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
        });
        else if (n || "object" !== oe.type(e)) i(t, e);
        else
            for (r in e) X(t + "[" + r + "]", e[r], n, i)
    }

    function V(t) {
        return oe.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var Q = [],
        Y = t.document,
        G = Q.slice,
        K = Q.concat,
        J = Q.push,
        Z = Q.indexOf,
        te = {},
        ee = te.toString,
        ne = te.hasOwnProperty,
        ie = {},
        re = "2.2.1",
        oe = function (t, e) {
            return new oe.fn.init(t, e)
        },
        se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        ue = /-([\da-z])/gi,
        ce = function (t, e) {
            return e.toUpperCase()
        };
    oe.fn = oe.prototype = {
        jquery: re,
        constructor: oe,
        selector: "",
        length: 0,
        toArray: function () {
            return G.call(this)
        },
        get: function (t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : G.call(this)
        },
        pushStack: function (t) {
            var e = oe.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function (t) {
            return oe.each(this, t)
        },
        map: function (t) {
            return this.pushStack(oe.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function () {
            return this.pushStack(G.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: J,
        sort: Q.sort,
        splice: Q.splice
    }, oe.extend = oe.fn.extend = function () {
        var t, e, n, i, r, o, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || oe.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++)
            if (null != (t = arguments[a]))
                for (e in t) n = s[e], i = t[e], s !== i && (c && i && (oe.isPlainObject(i) || (r = oe.isArray(i))) ? (r ? (r = !1, o = n && oe.isArray(n) ? n : []) : o = n && oe.isPlainObject(n) ? n : {}, s[e] = oe.extend(c, o, i)) : void 0 !== i && (s[e] = i));
        return s
    }, oe.extend({
        expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
            throw new Error(t)
        },
        noop: function () {},
        isFunction: function (t) {
            return "function" === oe.type(t)
        },
        isArray: Array.isArray,
        isWindow: function (t) {
            return null != t && t === t.window
        },
        isNumeric: function (t) {
            var e = t && t.toString();
            return !oe.isArray(t) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function (t) {
            return "object" !== oe.type(t) || t.nodeType || oe.isWindow(t) ? !1 : t.constructor && !ne.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? te[ee.call(t)] || "object" : typeof t
        },
        globalEval: function (t) {
            var e, n = eval;
            t = oe.trim(t), t && (1 === t.indexOf("use strict") ? (e = Y.createElement("script"), e.text = t, Y.head.appendChild(e).parentNode.removeChild(e)) : n(t))
        },
        camelCase: function (t) {
            return t.replace(ae, "ms-").replace(ue, ce)
        },
        nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function (t, e) {
            var i, r = 0;
            if (n(t))
                for (i = t.length; i > r && e.call(t[r], r, t[r]) !== !1; r++);
            else
                for (r in t)
                    if (e.call(t[r], r, t[r]) === !1) break; return t
        },
        trim: function (t) {
            return null == t ? "" : (t + "").replace(se, "")
        },
        makeArray: function (t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? oe.merge(i, "string" == typeof t ? [t] : t) : J.call(i, t)), i
        },
        inArray: function (t, e, n) {
            return null == e ? -1 : Z.call(e, t, n)
        },
        merge: function (t, e) {
            for (var n = +e.length, i = 0, r = t.length; n > i; i++) t[r++] = e[i];
            return t.length = r, t
        },
        grep: function (t, e, n) {
            for (var i, r = [], o = 0, s = t.length, a = !n; s > o; o++) i = !e(t[o], o), i !== a && r.push(t[o]);
            return r
        },
        map: function (t, e, i) {
            var r, o, s = 0,
                a = [];
            if (n(t))
                for (r = t.length; r > s; s++) o = e(t[s], s, i), null != o && a.push(o);
            else
                for (s in t) o = e(t[s], s, i), null != o && a.push(o);
            return K.apply([], a)
        },
        guid: 1,
        proxy: function (t, e) {
            var n, i, r;
            return "string" == typeof e && (n = t[e], e = t, t = n), oe.isFunction(t) ? (i = G.call(arguments, 2), r = function () {
                return t.apply(e || this, i.concat(G.call(arguments)))
            }, r.guid = t.guid = t.guid || oe.guid++, r) : void 0
        },
        now: Date.now,
        support: ie
    }), "function" == typeof Symbol && (oe.fn[Symbol.iterator] = Q[Symbol.iterator]), oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        te["[object " + e + "]"] = e.toLowerCase()
    });
    var le = function (t) {
        function e(t, e, n, i) {
            var r, o, s, a, u, c, h, f, d = e && e.ownerDocument,
                m = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m) return n;
            if (!i && ((e ? e.ownerDocument || e : q) !== P && D(e), e = e || P, N)) {
                if (11 !== m && (c = ve.exec(t)))
                    if (r = c[1]) {
                        if (9 === m) {
                            if (!(s = e.getElementById(r))) return n;
                            if (s.id === r) return n.push(s), n
                        } else if (d && (s = d.getElementById(r)) && R(e, s) && s.id === r) return n.push(s), n
                    } else {
                        if (c[2]) return J.apply(n, e.getElementsByTagName(t)), n;
                        if ((r = c[3]) && b.getElementsByClassName && e.getElementsByClassName) return J.apply(n, e.getElementsByClassName(r)), n
                    }
                if (!(!b.qsa || U[t + " "] || O && O.test(t))) {
                    if (1 !== m) d = e, f = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(_e, "\\$&") : e.setAttribute("id", a = B), h = C(t), o = h.length, u = pe.test(a) ? "#" + a : "[id='" + a + "']"; o--;) h[o] = u + " " + p(h[o]);
                        f = h.join(","), d = ye.test(t) && l(e.parentNode) || e
                    }
                    if (f) try {
                        return J.apply(n, d.querySelectorAll(f)), n
                    } catch (g) {} finally {
                        a === B && e.removeAttribute("id")
                    }
                }
            }
            return A(t.replace(ae, "$1"), e, n, i)
        }

        function n() {
            function t(n, i) {
                return e.push(n + " ") > x.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function i(t) {
            return t[B] = !0, t
        }

        function r(t) {
            var e = P.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function o(t, e) {
            for (var n = t.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = e
        }

        function s(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function u(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function c(t) {
            return i(function (e) {
                return e = +e, i(function (n, i) {
                    for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function l(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function h() {}

        function p(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
            return i
        }

        function f(t, e, n) {
            var i = e.dir,
                r = n && "parentNode" === i,
                o = H++;
            return e.first ? function (e, n, o) {
                for (; e = e[i];)
                    if (1 === e.nodeType || r) return t(e, n, o)
            } : function (e, n, s) {
                var a, u, c, l = [I, o];
                if (s) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || r) && t(e, n, s)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || r) {
                            if (c = e[B] || (e[B] = {}), u = c[e.uniqueID] || (c[e.uniqueID] = {}), (a = u[i]) && a[0] === I && a[1] === o) return l[2] = a[2];
                            if (u[i] = l, l[2] = t(e, n, s)) return !0
                        }
            }
        }

        function d(t) {
            return t.length > 1 ? function (e, n, i) {
                for (var r = t.length; r--;)
                    if (!t[r](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function m(t, n, i) {
            for (var r = 0, o = n.length; o > r; r++) e(t, n[r], i);
            return i
        }

        function g(t, e, n, i, r) {
            for (var o, s = [], a = 0, u = t.length, c = null != e; u > a; a++)(o = t[a]) && (!n || n(o, i, r)) && (s.push(o), c && e.push(a));
            return s
        }

        function v(t, e, n, r, o, s) {
            return r && !r[B] && (r = v(r)), o && !o[B] && (o = v(o, s)), i(function (i, s, a, u) {
                var c, l, h, p = [],
                    f = [],
                    d = s.length,
                    v = i || m(e || "*", a.nodeType ? [a] : a, []),
                    y = !t || !i && e ? v : g(v, p, t, a, u),
                    _ = n ? o || (i ? t : d || r) ? [] : s : y;
                if (n && n(y, _, a, u), r)
                    for (c = g(_, f), r(c, [], a, u), l = c.length; l--;)(h = c[l]) && (_[f[l]] = !(y[f[l]] = h));
                if (i) {
                    if (o || t) {
                        if (o) {
                            for (c = [], l = _.length; l--;)(h = _[l]) && c.push(y[l] = h);
                            o(null, _ = [], c, u)
                        }
                        for (l = _.length; l--;)(h = _[l]) && (c = o ? te(i, h) : p[l]) > -1 && (i[c] = !(s[c] = h))
                    }
                } else _ = g(_ === s ? _.splice(d, _.length) : _), o ? o(null, s, _, u) : J.apply(s, _)
            })
        }

        function y(t) {
            for (var e, n, i, r = t.length, o = x.relative[t[0].type], s = o || x.relative[" "], a = o ? 1 : 0, u = f(function (t) {
                    return t === e
                }, s, !0), c = f(function (t) {
                    return te(e, t) > -1
                }, s, !0), l = [function (t, n, i) {
                    var r = !o && (i || n !== S) || ((e = n).nodeType ? u(t, n, i) : c(t, n, i));
                    return e = null, r
                }]; r > a; a++)
                if (n = x.relative[t[a].type]) l = [f(d(l), n)];
                else {
                    if (n = x.filter[t[a].type].apply(null, t[a].matches), n[B]) {
                        for (i = ++a; r > i && !x.relative[t[i].type]; i++);
                        return v(a > 1 && d(l), a > 1 && p(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(ae, "$1"), n, i > a && y(t.slice(a, i)), r > i && y(t = t.slice(i)), r > i && p(t))
                    }
                    l.push(n)
                }
            return d(l)
        }

        function _(t, n) {
            var r = n.length > 0,
                o = t.length > 0,
                s = function (i, s, a, u, c) {
                    var l, h, p, f = 0,
                        d = "0",
                        m = i && [],
                        v = [],
                        y = S,
                        _ = i || o && x.find.TAG("*", c),
                        w = I += null == y ? 1 : Math.random() || .1,
                        b = _.length;
                    for (c && (S = s === P || s || c); d !== b && null != (l = _[d]); d++) {
                        if (o && l) {
                            for (h = 0, s || l.ownerDocument === P || (D(l), a = !N); p = t[h++];)
                                if (p(l, s || P, a)) {
                                    u.push(l);
                                    break
                                }
                            c && (I = w)
                        }
                        r && ((l = !p && l) && f--, i && m.push(l))
                    }
                    if (f += d, r && d !== f) {
                        for (h = 0; p = n[h++];) p(m, v, s, a);
                        if (i) {
                            if (f > 0)
                                for (; d--;) m[d] || v[d] || (v[d] = G.call(u));
                            v = g(v)
                        }
                        J.apply(u, v), c && !i && v.length > 0 && f + n.length > 1 && e.uniqueSort(u)
                    }
                    return c && (I = w, S = y), m
                };
            return r ? i(s) : s
        }
        var w, b, x, k, T, C, E, A, S, F, j, D, P, L, N, O, M, $, R, B = "sizzle" + 1 * new Date,
            q = t.document,
            I = 0,
            H = 0,
            z = n(),
            W = n(),
            U = n(),
            X = function (t, e) {
                return t === e && (j = !0), 0
            },
            V = 1 << 31,
            Q = {}.hasOwnProperty,
            Y = [],
            G = Y.pop,
            K = Y.push,
            J = Y.push,
            Z = Y.slice,
            te = function (t, e) {
                for (var n = 0, i = t.length; i > n; n++)
                    if (t[n] === e) return n;
                return -1
            },
            ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ue = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            le = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            he = new RegExp(oe),
            pe = new RegExp("^" + ie + "$"),
            fe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ee + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            de = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            _e = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            be = function (t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            xe = function () {
                D()
            };
        try {
            J.apply(Y = Z.call(q.childNodes), q.childNodes), Y[q.childNodes.length].nodeType
        } catch (ke) {
            J = {
                apply: Y.length ? function (t, e) {
                    K.apply(t, Z.call(e))
                } : function (t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        b = e.support = {}, T = e.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, D = e.setDocument = function (t) {
            var e, n, i = t ? t.ownerDocument || t : q;
            return i !== P && 9 === i.nodeType && i.documentElement ? (P = i, L = P.documentElement, N = !T(P), (n = P.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), b.attributes = r(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), b.getElementsByTagName = r(function (t) {
                return t.appendChild(P.createComment("")), !t.getElementsByTagName("*").length
            }), b.getElementsByClassName = ge.test(P.getElementsByClassName), b.getById = r(function (t) {
                return L.appendChild(t).id = B, !P.getElementsByName || !P.getElementsByName(B).length
            }), b.getById ? (x.find.ID = function (t, e) {
                if ("undefined" != typeof e.getElementById && N) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }, x.filter.ID = function (t) {
                var e = t.replace(we, be);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete x.find.ID, x.filter.ID = function (t) {
                var e = t.replace(we, be);
                return function (t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), x.find.TAG = b.getElementsByTagName ? function (t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
            } : function (t, e) {
                var n, i = [],
                    r = 0,
                    o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, x.find.CLASS = b.getElementsByClassName && function (t, e) {
                return "undefined" != typeof e.getElementsByClassName && N ? e.getElementsByClassName(t) : void 0
            }, M = [], O = [], (b.qsa = ge.test(P.querySelectorAll)) && (r(function (t) {
                L.appendChild(t).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ne + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || O.push("\\[" + ne + "*(?:value|" + ee + ")"), t.querySelectorAll("[id~=" + B + "-]").length || O.push("~="), t.querySelectorAll(":checked").length || O.push(":checked"), t.querySelectorAll("a#" + B + "+*").length || O.push(".#.+[+~]")
            }), r(function (t) {
                var e = P.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && O.push("name" + ne + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), O.push(",.*:")
            })), (b.matchesSelector = ge.test($ = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function (t) {
                b.disconnectedMatch = $.call(t, "div"), $.call(t, "[s!='']:x"), M.push("!=", oe)
            }), O = O.length && new RegExp(O.join("|")), M = M.length && new RegExp(M.join("|")), e = ge.test(L.compareDocumentPosition), R = e || ge.test(L.contains) ? function (t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function (t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, X = e ? function (t, e) {
                if (t === e) return j = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !b.sortDetached && e.compareDocumentPosition(t) === n ? t === P || t.ownerDocument === q && R(q, t) ? -1 : e === P || e.ownerDocument === q && R(q, e) ? 1 : F ? te(F, t) - te(F, e) : 0 : 4 & n ? -1 : 1)
            } : function (t, e) {
                if (t === e) return j = !0, 0;
                var n, i = 0,
                    r = t.parentNode,
                    o = e.parentNode,
                    a = [t],
                    u = [e];
                if (!r || !o) return t === P ? -1 : e === P ? 1 : r ? -1 : o ? 1 : F ? te(F, t) - te(F, e) : 0;
                if (r === o) return s(t, e);
                for (n = t; n = n.parentNode;) a.unshift(n);
                for (n = e; n = n.parentNode;) u.unshift(n);
                for (; a[i] === u[i];) i++;
                return i ? s(a[i], u[i]) : a[i] === q ? -1 : u[i] === q ? 1 : 0
            }, P) : P
        }, e.matches = function (t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function (t, n) {
            if ((t.ownerDocument || t) !== P && D(t), n = n.replace(le, "='$1']"), !(!b.matchesSelector || !N || U[n + " "] || M && M.test(n) || O && O.test(n))) try {
                var i = $.call(t, n);
                if (i || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch (r) {}
            return e(n, P, null, [t]).length > 0
        }, e.contains = function (t, e) {
            return (t.ownerDocument || t) !== P && D(t), R(t, e)
        }, e.attr = function (t, e) {
            (t.ownerDocument || t) !== P && D(t);
            var n = x.attrHandle[e.toLowerCase()],
                i = n && Q.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !N) : void 0;
            return void 0 !== i ? i : b.attributes || !N ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function (t) {
            var e, n = [],
                i = 0,
                r = 0;
            if (j = !b.detectDuplicates, F = !b.sortStable && t.slice(0), t.sort(X), j) {
                for (; e = t[r++];) e === t[r] && (i = n.push(r));
                for (; i--;) t.splice(n[i], 1)
            }
            return F = null, t
        }, k = e.getText = function (t) {
            var e, n = "",
                i = 0,
                r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += k(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else
                for (; e = t[i++];) n += k(e);
            return n
        }, x = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
            attrHandle: {},
            find: {},
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
                ATTR: function (t) {
                    return t[1] = t[1].replace(we, be), t[3] = (t[3] || t[4] || t[5] || "").replace(we, be), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function (t) {
                    var e, n = !t[6] && t[2];
                    return fe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && he.test(n) && (e = C(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(we, be).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function (t) {
                    var e = z[t + " "];
                    return e || (e = new RegExp("(^|" + ne + ")" + t + "(" + ne + "|$)")) && z(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function (t, n, i) {
                    return function (r) {
                        var o = e.attr(r, t);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function (t, e, n, i, r) {
                    var o = "nth" !== t.slice(0, 3),
                        s = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === i && 0 === r ? function (t) {
                        return !!t.parentNode
                    } : function (e, n, u) {
                        var c, l, h, p, f, d, m = o !== s ? "nextSibling" : "previousSibling",
                            g = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            y = !u && !a,
                            _ = !1;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (p = e; p = p[m];)
                                        if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    d = m = "only" === t && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [s ? g.firstChild : g.lastChild], s && y) {
                                for (p = g, h = p[B] || (p[B] = {}), l = h[p.uniqueID] || (h[p.uniqueID] = {}), c = l[t] || [], f = c[0] === I && c[1], _ = f && c[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (_ = f = 0) || d.pop();)
                                    if (1 === p.nodeType && ++_ && p === e) {
                                        l[t] = [I, f, _];
                                        break
                                    }
                            } else if (y && (p = e, h = p[B] || (p[B] = {}), l = h[p.uniqueID] || (h[p.uniqueID] = {}), c = l[t] || [], f = c[0] === I && c[1], _ = f), _ === !1)
                                for (;
                                    (p = ++f && p && p[m] || (_ = f = 0) || d.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++_ || (y && (h = p[B] || (p[B] = {}), l = h[p.uniqueID] || (h[p.uniqueID] = {}), l[t] = [I, _]), p !== e)););
                            return _ -= r, _ === i || _ % i === 0 && _ / i >= 0
                        }
                    }
                },
                PSEUDO: function (t, n) {
                    var r, o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[B] ? o(n) : o.length > 1 ? (r = [t, t, "", n], x.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                        for (var i, r = o(t, n), s = r.length; s--;) i = te(t, r[s]), t[i] = !(e[i] = r[s])
                    }) : function (t) {
                        return o(t, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function (t) {
                    var e = [],
                        n = [],
                        r = E(t.replace(ae, "$1"));
                    return r[B] ? i(function (t, e, n, i) {
                        for (var o, s = r(t, null, i, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                    }) : function (t, i, o) {
                        return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
                    }
                }),
                has: i(function (t) {
                    return function (n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function (t) {
                    return t = t.replace(we, be),
                        function (e) {
                            return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                        }
                }),
                lang: i(function (t) {
                    return pe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(we, be).toLowerCase(),
                        function (e) {
                            var n;
                            do
                                if (n = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function (e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function (t) {
                    return t === L
                },
                focus: function (t) {
                    return t === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function (t) {
                    return t.disabled === !1
                },
                disabled: function (t) {
                    return t.disabled === !0
                },
                checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function (t) {
                    return !x.pseudos.empty(t)
                },
                header: function (t) {
                    return me.test(t.nodeName)
                },
                input: function (t) {
                    return de.test(t.nodeName)
                },
                button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: c(function () {
                    return [0]
                }),
                last: c(function (t, e) {
                    return [e - 1]
                }),
                eq: c(function (t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: c(function (t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t
                }),
                odd: c(function (t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t
                }),
                lt: c(function (t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                    return t
                }),
                gt: c(function (t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                    return t
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[w] = a(w);
        for (w in {
                submit: !0,
                reset: !0
            }) x.pseudos[w] = u(w);
        return h.prototype = x.filters = x.pseudos, x.setFilters = new h, C = e.tokenize = function (t, n) {
            var i, r, o, s, a, u, c, l = W[t + " "];
            if (l) return n ? 0 : l.slice(0);
            for (a = t, u = [], c = x.preFilter; a;) {
                (!i || (r = ue.exec(a))) && (r && (a = a.slice(r[0].length) || a), u.push(o = [])), i = !1, (r = ce.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(ae, " ")
                }), a = a.slice(i.length));
                for (s in x.filter) !(r = fe[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: s,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? e.error(t) : W(t, u).slice(0)
        }, E = e.compile = function (t, e) {
            var n, i = [],
                r = [],
                o = U[t + " "];
            if (!o) {
                for (e || (e = C(t)), n = e.length; n--;) o = y(e[n]), o[B] ? i.push(o) : r.push(o);
                o = U(t, _(r, i)), o.selector = t
            }
            return o
        }, A = e.select = function (t, e, n, i) {
            var r, o, s, a, u, c = "function" == typeof t && t,
                h = !i && C(t = c.selector || t);
            if (n = n || [], 1 === h.length) {
                if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && b.getById && 9 === e.nodeType && N && x.relative[o[1].type]) {
                    if (e = (x.find.ID(s.matches[0].replace(we, be), e) || [])[0], !e) return n;
                    c && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (r = fe.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !x.relative[a = s.type]);)
                    if ((u = x.find[a]) && (i = u(s.matches[0].replace(we, be), ye.test(o[0].type) && l(e.parentNode) || e))) {
                        if (o.splice(r, 1), t = i.length && p(o), !t) return J.apply(n, i), n;
                        break
                    }
            }
            return (c || E(t, h))(i, e, !N, n, !e || ye.test(t) && l(e.parentNode) || e), n
        }, b.sortStable = B.split("").sort(X).join("") === B, b.detectDuplicates = !!j, D(), b.sortDetached = r(function (t) {
            return 1 & t.compareDocumentPosition(P.createElement("div"))
        }), r(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), b.attributes && r(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function (t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), r(function (t) {
            return null == t.getAttribute("disabled")
        }) || o(ee, function (t, e, n) {
            var i;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    oe.find = le, oe.expr = le.selectors, oe.expr[":"] = oe.expr.pseudos, oe.uniqueSort = oe.unique = le.uniqueSort, oe.text = le.getText, oe.isXMLDoc = le.isXML, oe.contains = le.contains;
    var he = function (t, e, n) {
            for (var i = [], r = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && oe(t).is(n)) break;
                    i.push(t)
                }
            return i
        },
        pe = function (t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        fe = oe.expr.match.needsContext,
        de = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        me = /^.[^:#\[\.,]*$/;
    oe.filter = function (t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? oe.find.matchesSelector(i, t) ? [i] : [] : oe.find.matches(t, oe.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, oe.fn.extend({
        find: function (t) {
            var e, n = this.length,
                i = [],
                r = this;
            if ("string" != typeof t) return this.pushStack(oe(t).filter(function () {
                for (e = 0; n > e; e++)
                    if (oe.contains(r[e], this)) return !0
            }));
            for (e = 0; n > e; e++) oe.find(t, r[e], i);
            return i = this.pushStack(n > 1 ? oe.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
        },
        filter: function (t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function (t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function (t) {
            return !!i(this, "string" == typeof t && fe.test(t) ? oe(t) : t || [], !1).length
        }
    });
    var ge, ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ye = oe.fn.init = function (t, e, n) {
            var i, r;
            if (!t) return this;
            if (n = n || ge, "string" == typeof t) {
                if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ve.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof oe ? e[0] : e, oe.merge(this, oe.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : Y, !0)), de.test(i[1]) && oe.isPlainObject(e))
                        for (i in e) oe.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return r = Y.getElementById(i[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = Y, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : oe.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(oe) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), oe.makeArray(t, this))
        };
    ye.prototype = oe.fn, ge = oe(Y);
    var _e = /^(?:parents|prev(?:Until|All))/,
        we = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    oe.fn.extend({
        has: function (t) {
            var e = oe(t, this),
                n = e.length;
            return this.filter(function () {
                for (var t = 0; n > t; t++)
                    if (oe.contains(this, e[t])) return !0
            })
        },
        closest: function (t, e) {
            for (var n, i = 0, r = this.length, o = [], s = fe.test(t) || "string" != typeof t ? oe(t, e || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? oe.uniqueSort(o) : o)
        },
        index: function (t) {
            return t ? "string" == typeof t ? Z.call(oe(t), this[0]) : Z.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
            return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(t, e))))
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), oe.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function (t) {
            return he(t, "parentNode")
        },
        parentsUntil: function (t, e, n) {
            return he(t, "parentNode", n)
        },
        next: function (t) {
            return r(t, "nextSibling")
        },
        prev: function (t) {
            return r(t, "previousSibling")
        },
        nextAll: function (t) {
            return he(t, "nextSibling")
        },
        prevAll: function (t) {
            return he(t, "previousSibling")
        },
        nextUntil: function (t, e, n) {
            return he(t, "nextSibling", n)
        },
        prevUntil: function (t, e, n) {
            return he(t, "previousSibling", n)
        },
        siblings: function (t) {
            return pe((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
            return pe(t.firstChild)
        },
        contents: function (t) {
            return t.contentDocument || oe.merge([], t.childNodes)
        }
    }, function (t, e) {
        oe.fn[t] = function (n, i) {
            var r = oe.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = oe.filter(i, r)), this.length > 1 && (we[t] || oe.uniqueSort(r), _e.test(t) && r.reverse()), this.pushStack(r)
        }
    });
    var be = /\S+/g;
    oe.Callbacks = function (t) {
        t = "string" == typeof t ? o(t) : oe.extend({}, t);
        var e, n, i, r, s = [],
            a = [],
            u = -1,
            c = function () {
                for (r = t.once, i = e = !0; a.length; u = -1)
                    for (n = a.shift(); ++u < s.length;) s[u].apply(n[0], n[1]) === !1 && t.stopOnFalse && (u = s.length, n = !1);
                t.memory || (n = !1), e = !1, r && (s = n ? [] : "")
            },
            l = {
                add: function () {
                    return s && (n && !e && (u = s.length - 1, a.push(n)), function i(e) {
                        oe.each(e, function (e, n) {
                            oe.isFunction(n) ? t.unique && l.has(n) || s.push(n) : n && n.length && "string" !== oe.type(n) && i(n)
                        })
                    }(arguments), n && !e && c()), this
                },
                remove: function () {
                    return oe.each(arguments, function (t, e) {
                        for (var n;
                            (n = oe.inArray(e, s, n)) > -1;) s.splice(n, 1), u >= n && u--
                    }), this
                },
                has: function (t) {
                    return t ? oe.inArray(t, s) > -1 : s.length > 0
                },
                empty: function () {
                    return s && (s = []), this
                },
                disable: function () {
                    return r = a = [], s = n = "", this
                },
                disabled: function () {
                    return !s
                },
                lock: function () {
                    return r = a = [], n || (s = n = ""), this
                },
                locked: function () {
                    return !!r
                },
                fireWith: function (t, n) {
                    return r || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || c()), this
                },
                fire: function () {
                    return l.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return l
    }, oe.extend({
        Deferred: function (t) {
            var e = [["resolve", "done", oe.Callbacks("once memory"), "resolved"], ["reject", "fail", oe.Callbacks("once memory"), "rejected"], ["notify", "progress", oe.Callbacks("memory")]],
                n = "pending",
                i = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var t = arguments;
                        return oe.Deferred(function (n) {
                            oe.each(e, function (e, o) {
                                var s = oe.isFunction(t[e]) && t[e];
                                r[o[1]](function () {
                                    var t = s && s.apply(this, arguments);
                                    t && oe.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function (t) {
                        return null != t ? oe.extend(t, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, oe.each(e, function (t, o) {
                var s = o[2],
                    a = o[3];
                i[o[1]] = s.add, a && s.add(function () {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function () {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = s.fireWith
            }), i.promise(r), t && t.call(r, r), r
        },
        when: function (t) {
            var e, n, i, r = 0,
                o = G.call(arguments),
                s = o.length,
                a = 1 !== s || t && oe.isFunction(t.promise) ? s : 0,
                u = 1 === a ? t : oe.Deferred(),
                c = function (t, n, i) {
                    return function (r) {
                        n[t] = this, i[t] = arguments.length > 1 ? G.call(arguments) : r, i === e ? u.notifyWith(n, i) : --a || u.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (e = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) o[r] && oe.isFunction(o[r].promise) ? o[r].promise().progress(c(r, n, e)).done(c(r, i, o)).fail(u.reject) : --a;
            return a || u.resolveWith(i, o), u.promise()
        }
    });
    var xe;
    oe.fn.ready = function (t) {
        return oe.ready.promise().done(t), this
    }, oe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (t) {
            t ? oe.readyWait++ : oe.ready(!0)
        },
        ready: function (t) {
            (t === !0 ? --oe.readyWait : oe.isReady) || (oe.isReady = !0, t !== !0 && --oe.readyWait > 0 || (xe.resolveWith(Y, [oe]), oe.fn.triggerHandler && (oe(Y).triggerHandler("ready"), oe(Y).off("ready"))))
        }
    }), oe.ready.promise = function (e) {
        return xe || (xe = oe.Deferred(), "complete" === Y.readyState || "loading" !== Y.readyState && !Y.documentElement.doScroll ? t.setTimeout(oe.ready) : (Y.addEventListener("DOMContentLoaded", s), t.addEventListener("load", s))), xe.promise(e)
    }, oe.ready.promise();
    var ke = function (t, e, n, i, r, o, s) {
            var a = 0,
                u = t.length,
                c = null == n;
            if ("object" === oe.type(n)) {
                r = !0;
                for (a in n) ke(t, e, a, n[a], !0, o, s)
            } else if (void 0 !== i && (r = !0, oe.isFunction(i) || (s = !0), c && (s ? (e.call(t, i), e = null) : (c = e, e = function (t, e, n) {
                    return c.call(oe(t), n)
                })), e))
                for (; u > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
            return r ? t : c ? e.call(t) : u ? e(t[0], n) : o
        },
        Te = function (t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
    a.uid = 1, a.prototype = {
        register: function (t, e) {
            var n = e || {};
            return t.nodeType ? t[this.expando] = n : Object.defineProperty(t, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), t[this.expando]
        },
        cache: function (t) {
            if (!Te(t)) return {};
            var e = t[this.expando];
            return e || (e = {}, Te(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function (t, e, n) {
            var i, r = this.cache(t);
            if ("string" == typeof e) r[e] = n;
            else
                for (i in e) r[i] = e[i];
            return r
        },
        get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
        },
        access: function (t, e, n) {
            var i;
            return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e), void 0 !== i ? i : this.get(t, oe.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function (t, e) {
            var n, i, r, o = t[this.expando];
            if (void 0 !== o) {
                if (void 0 === e) this.register(t);
                else {
                    oe.isArray(e) ? i = e.concat(e.map(oe.camelCase)) : (r = oe.camelCase(e), e in o ? i = [e, r] : (i = r, i = i in o ? [i] : i.match(be) || [])), n = i.length;
                    for (; n--;) delete o[i[n]]
                }(void 0 === e || oe.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !oe.isEmptyObject(e)
        }
    };
    var Ce = new a,
        Ee = new a,
        Ae = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Se = /[A-Z]/g;
    oe.extend({
        hasData: function (t) {
            return Ee.hasData(t) || Ce.hasData(t)
        },
        data: function (t, e, n) {
            return Ee.access(t, e, n)
        },
        removeData: function (t, e) {
            Ee.remove(t, e)
        },
        _data: function (t, e, n) {
            return Ce.access(t, e, n)
        },
        _removeData: function (t, e) {
            Ce.remove(t, e)
        }
    }), oe.fn.extend({
        data: function (t, e) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = Ee.get(o), 1 === o.nodeType && !Ce.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = oe.camelCase(i.slice(5)), u(o, i, r[i])));
                    Ce.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function () {
                Ee.set(this, t)
            }) : ke(this, function (e) {
                var n, i;
                if (o && void 0 === e) {
                    if (n = Ee.get(o, t) || Ee.get(o, t.replace(Se, "-$&").toLowerCase()), void 0 !== n) return n;
                    if (i = oe.camelCase(t), n = Ee.get(o, i), void 0 !== n) return n;
                    if (n = u(o, i, void 0), void 0 !== n) return n
                } else i = oe.camelCase(t), this.each(function () {
                    var n = Ee.get(this, i);
                    Ee.set(this, i, e), t.indexOf("-") > -1 && void 0 !== n && Ee.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function (t) {
            return this.each(function () {
                Ee.remove(this, t)
            })
        }
    }), oe.extend({
        queue: function (t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = Ce.get(t, e), n && (!i || oe.isArray(n) ? i = Ce.access(t, e, oe.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function (t, e) {
            e = e || "fx";
            var n = oe.queue(t, e),
                i = n.length,
                r = n.shift(),
                o = oe._queueHooks(t, e),
                s = function () {
                    oe.dequeue(t, e)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return Ce.get(t, n) || Ce.access(t, n, {
                empty: oe.Callbacks("once memory").add(function () {
                    Ce.remove(t, [e + "queue", n])
                })
            })
        }
    }), oe.fn.extend({
        queue: function (t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? oe.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var n = oe.queue(this, t, e);
                oe._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && oe.dequeue(this, t)
            })
        },
        dequeue: function (t) {
            return this.each(function () {
                oe.dequeue(this, t)
            })
        },
        clearQueue: function (t) {
            return this.queue(t || "fx", [])
        },
        promise: function (t, e) {
            var n, i = 1,
                r = oe.Deferred(),
                o = this,
                s = this.length,
                a = function () {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = Ce.get(o[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        je = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"),
        De = ["Top", "Right", "Bottom", "Left"],
        Pe = function (t, e) {
            return t = e || t, "none" === oe.css(t, "display") || !oe.contains(t.ownerDocument, t)
        },
        Le = /^(?:checkbox|radio)$/i,
        Ne = /<([\w:-]+)/,
        Oe = /^$|\/(?:java|ecma)script/i,
        Me = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Me.optgroup = Me.option, Me.tbody = Me.tfoot = Me.colgroup = Me.caption = Me.thead, Me.th = Me.td;
    var $e = /<|&#?\w+;/;
    ! function () {
        var t = Y.createDocumentFragment(),
            e = t.appendChild(Y.createElement("div")),
            n = Y.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), ie.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Re = /^key/,
        Be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        qe = /^([^.]*)(?:\.(.+)|)/;
    oe.event = {
        global: {},
        add: function (t, e, n, i, r) {
            var o, s, a, u, c, l, h, p, f, d, m, g = Ce.get(t);
            if (g)
                for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = oe.guid++), (u = g.events) || (u = g.events = {}), (s = g.handle) || (s = g.handle = function (e) {
                        return "undefined" != typeof oe && oe.event.triggered !== e.type ? oe.event.dispatch.apply(t, arguments) : void 0
                    }), e = (e || "").match(be) || [""], c = e.length; c--;) a = qe.exec(e[c]) || [], f = m = a[1], d = (a[2] || "").split(".").sort(), f && (h = oe.event.special[f] || {}, f = (r ? h.delegateType : h.bindType) || f, h = oe.event.special[f] || {}, l = oe.extend({
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && oe.expr.match.needsContext.test(r),
                    namespace: d.join(".")
                }, o), (p = u[f]) || (p = u[f] = [], p.delegateCount = 0, h.setup && h.setup.call(t, i, d, s) !== !1 || t.addEventListener && t.addEventListener(f, s)), h.add && (h.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, l) : p.push(l), oe.event.global[f] = !0)
        },
        remove: function (t, e, n, i, r) {
            var o, s, a, u, c, l, h, p, f, d, m, g = Ce.hasData(t) && Ce.get(t);
            if (g && (u = g.events)) {
                for (e = (e || "").match(be) || [""], c = e.length; c--;)
                    if (a = qe.exec(e[c]) || [], f = m = a[1], d = (a[2] || "").split(".").sort(), f) {
                        for (h = oe.event.special[f] || {}, f = (i ? h.delegateType : h.bindType) || f, p = u[f] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) l = p[o], !r && m !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || i && i !== l.selector && ("**" !== i || !l.selector) || (p.splice(o, 1), l.selector && p.delegateCount--, h.remove && h.remove.call(t, l));
                        s && !p.length && (h.teardown && h.teardown.call(t, d, g.handle) !== !1 || oe.removeEvent(t, f, g.handle), delete u[f])
                    } else
                        for (f in u) oe.event.remove(t, f + e[c], n, i, !0);
                oe.isEmptyObject(u) && Ce.remove(t, "handle events")
            }
        },
        dispatch: function (t) {
            t = oe.event.fix(t);
            var e, n, i, r, o, s = [],
                a = G.call(arguments),
                u = (Ce.get(this, "events") || {})[t.type] || [],
                c = oe.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (s = oe.event.handlers.call(this, t, u), e = 0;
                    (r = s[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.rnamespace || t.rnamespace.test(o.namespace)) && (t.handleObj = o, t.data = o.data, i = ((oe.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (t, e) {
            var n, i, r, o, s = [],
                a = e.delegateCount,
                u = t.target;
            if (a && u.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== t.type)) {
                        for (i = [], n = 0; a > n; n++) o = e[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? oe(r, this).index(u) > -1 : oe.find(r, this, null, [u]).length), i[r] && i.push(o);
                        i.length && s.push({
                            elem: u,
                            handlers: i
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (t, e) {
                var n, i, r, o = e.button;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || Y, i = n.documentElement, r = n.body, t.pageX = e.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        fix: function (t) {
            if (t[oe.expando]) return t;
            var e, n, i, r = t.type,
                o = t,
                s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Be.test(r) ? this.mouseHooks : Re.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new oe.Event(o), e = i.length; e--;) n = i[e], t[n] = o[n];
            return t.target || (t.target = Y), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, o) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !== m() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === m() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && oe.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function (t) {
                    return oe.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, oe.removeEvent = function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, oe.Event = function (t, e) {
        return this instanceof oe.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? f : d) : this.type = t, e && oe.extend(this, e), this.timeStamp = t && t.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(t, e)
    }, oe.Event.prototype = {
        constructor: oe.Event,
        isDefaultPrevented: d,
        isPropagationStopped: d,
        isImmediatePropagationStopped: d,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = f, t && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = f, t && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = f, t && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        oe.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function (t) {
                var n, i = this,
                    r = t.relatedTarget,
                    o = t.handleObj;
                return (!r || r !== i && !oe.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), oe.fn.extend({
        on: function (t, e, n, i) {
            return g(this, t, e, n, i)
        },
        one: function (t, e, n, i) {
            return g(this, t, e, n, i, 1)
        },
        off: function (t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, oe(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = d), this.each(function () {
                oe.event.remove(this, t, n, e)
            })
        }
    });
    var Ie = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        He = /<script|<style|<link/i,
        ze = /checked\s*(?:[^=]|=\s*.checked.)/i,
        We = /^true\/(.*)/,
        Ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    oe.extend({
        htmlPrefilter: function (t) {
            return t.replace(Ie, "<$1></$2>")
        },
        clone: function (t, e, n) {
            var i, r, o, s, a = t.cloneNode(!0),
                u = oe.contains(t.ownerDocument, t);
            if (!(ie.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || oe.isXMLDoc(t)))
                for (s = l(a), o = l(t), i = 0, r = o.length; r > i; i++) b(o[i], s[i]);
            if (e)
                if (n)
                    for (o = o || l(t), s = s || l(a), i = 0, r = o.length; r > i; i++) w(o[i], s[i]);
                else w(t, a);
            return s = l(a, "script"), s.length > 0 && h(s, !u && l(t, "script")), a
        },
        cleanData: function (t) {
            for (var e, n, i, r = oe.event.special, o = 0; void 0 !== (n = t[o]); o++)
                if (Te(n)) {
                    if (e = n[Ce.expando]) {
                        if (e.events)
                            for (i in e.events) r[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, e.handle);
                        n[Ce.expando] = void 0
                    }
                    n[Ee.expando] && (n[Ee.expando] = void 0)
                }
        }
    }), oe.fn.extend({
        domManip: x,
        detach: function (t) {
            return k(this, t, !0)
        },
        remove: function (t) {
            return k(this, t)
        },
        text: function (t) {
            return ke(this, function (t) {
                return void 0 === t ? oe.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function () {
            return x(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = v(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function () {
            return x(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = v(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function () {
            return x(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function () {
            return x(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (oe.cleanData(l(t, !1)), t.textContent = "");
            return this
        },
        clone: function (t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                return oe.clone(this, t, e)
            })
        },
        html: function (t) {
            return ke(this, function (t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !He.test(t) && !Me[(Ne.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = oe.htmlPrefilter(t);
                    try {
                        for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (oe.cleanData(l(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function () {
            var t = [];
            return x(this, arguments, function (e) {
                var n = this.parentNode;
                oe.inArray(this, t) < 0 && (oe.cleanData(l(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }), oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        oe.fn[t] = function (t) {
            for (var n, i = [], r = oe(t), o = r.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), oe(r[s])[e](n), J.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Xe, Ve = {
            HTML: "block",
            BODY: "block"
        },
        Qe = /^margin/,
        Ye = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"),
        Ge = function (e) {
            var n = e.ownerDocument.defaultView;
            return n && n.opener || (n = t), n.getComputedStyle(e)
        },
        Ke = function (t, e, n, i) {
            var r, o, s = {};
            for (o in e) s[o] = t.style[o], t.style[o] = e[o];
            r = n.apply(t, i || []);
            for (o in e) t.style[o] = s[o];
            return r
        },
        Je = Y.documentElement;
    ! function () {
        function e() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Je.appendChild(s);
            var e = t.getComputedStyle(a);
            n = "1%" !== e.top, o = "2px" === e.marginLeft, i = "4px" === e.width, a.style.marginRight = "50%", r = "4px" === e.marginRight, Je.removeChild(s)
        }
        var n, i, r, o, s = Y.createElement("div"),
            a = Y.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), oe.extend(ie, {
            pixelPosition: function () {
                return e(), n
            },
            boxSizingReliable: function () {
                return null == i && e(), i
            },
            pixelMarginRight: function () {
                return null == i && e(), r
            },
            reliableMarginLeft: function () {
                return null == i && e(), o
            },
            reliableMarginRight: function () {
                var e, n = a.appendChild(Y.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Je.appendChild(s), e = !parseFloat(t.getComputedStyle(n).marginRight), Je.removeChild(s), a.removeChild(n), e
            }
        }))
    }();
    var Ze = /^(none|table(?!-c[ea]).+)/,
        tn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        en = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        nn = ["Webkit", "O", "Moz", "ms"],
        rn = Y.createElement("div").style;
    oe.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = E(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function (t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = oe.camelCase(e),
                    u = t.style;
                return e = oe.cssProps[a] || (oe.cssProps[a] = S(a) || a), s = oe.cssHooks[e] || oe.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : u[e] : (o = typeof n, "string" === o && (r = je.exec(n)) && r[1] && (n = c(t, e, r), o = "number"), void(null != n && n === n && ("number" === o && (n += r && r[3] || (oe.cssNumber[a] ? "" : "px")), ie.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (u[e] = n))))
            }
        },
        css: function (t, e, n, i) {
            var r, o, s, a = oe.camelCase(e);
            return e = oe.cssProps[a] || (oe.cssProps[a] = S(a) || a), s = oe.cssHooks[e] || oe.cssHooks[a], s && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = E(t, e, i)), "normal" === r && e in en && (r = en[e]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r
        }
    }), oe.each(["height", "width"], function (t, e) {
        oe.cssHooks[e] = {
            get: function (t, n, i) {
                return n ? Ze.test(oe.css(t, "display")) && 0 === t.offsetWidth ? Ke(t, tn, function () {
                    return D(t, e, i)
                }) : D(t, e, i) : void 0
            },
            set: function (t, n, i) {
                var r, o = i && Ge(t),
                    s = i && j(t, e, i, "border-box" === oe.css(t, "boxSizing", !1, o), o);
                return s && (r = je.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = oe.css(t, e)), F(t, n, s)
            }
        }
    }), oe.cssHooks.marginLeft = A(ie.reliableMarginLeft, function (t, e) {
        return e ? (parseFloat(E(t, "marginLeft")) || t.getBoundingClientRect().left - Ke(t, {
            marginLeft: 0
        }, function () {
            return t.getBoundingClientRect().left
        })) + "px" : void 0
    }), oe.cssHooks.marginRight = A(ie.reliableMarginRight, function (t, e) {
        return e ? Ke(t, {
            display: "inline-block"
        }, E, [t, "marginRight"]) : void 0
    }), oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (t, e) {
        oe.cssHooks[t + e] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[t + De[i] + e] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, Qe.test(t) || (oe.cssHooks[t + e].set = F)
    }), oe.fn.extend({
        css: function (t, e) {
            return ke(this, function (t, e, n) {
                var i, r, o = {},
                    s = 0;
                if (oe.isArray(e)) {
                    for (i = Ge(t), r = e.length; r > s; s++) o[e[s]] = oe.css(t, e[s], !1, i);
                    return o
                }
                return void 0 !== n ? oe.style(t, e, n) : oe.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function () {
            return P(this, !0)
        },
        hide: function () {
            return P(this)
        },
        toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                Pe(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }), oe.Tween = L, L.prototype = {
        constructor: L,
        init: function (t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || oe.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (oe.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var t = L.propHooks[this.prop];
            return t && t.get ? t.get(this) : L.propHooks._default.get(this)
        },
        run: function (t) {
            var e, n = L.propHooks[this.prop];
            return this.pos = e = this.options.duration ? oe.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : L.propHooks._default.set(this), this
        }
    }, L.prototype.init.prototype = L.prototype, L.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = oe.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            },
            set: function (t) {
                oe.fx.step[t.prop] ? oe.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[oe.cssProps[t.prop]] && !oe.cssHooks[t.prop] ? t.elem[t.prop] = t.now : oe.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, oe.easing = {
        linear: function (t) {
            return t
        },
        swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, oe.fx = L.prototype.init, oe.fx.step = {};
    var on, sn, an = /^(?:toggle|show|hide)$/,
        un = /queueHooks$/;
    oe.Animation = oe.extend(B, {
            tweeners: {
                "*": [function (t, e) {
                    var n = this.createTween(t, e);
                    return c(n.elem, t, je.exec(e), n), n
                }]
            },
            tweener: function (t, e) {
                oe.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(be);
                for (var n, i = 0, r = t.length; r > i; i++) n = t[i], B.tweeners[n] = B.tweeners[n] || [], B.tweeners[n].unshift(e)
            },
            prefilters: [$],
            prefilter: function (t, e) {
                e ? B.prefilters.unshift(t) : B.prefilters.push(t)
            }
        }), oe.speed = function (t, e, n) {
            var i = t && "object" == typeof t ? oe.extend({}, t) : {
                complete: n || !n && e || oe.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !oe.isFunction(e) && e
            };
            return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                oe.isFunction(i.old) && i.old.call(this), i.queue && oe.dequeue(this, i.queue)
            }, i
        }, oe.fn.extend({
            fadeTo: function (t, e, n, i) {
                return this.filter(Pe).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function (t, e, n, i) {
                var r = oe.isEmptyObject(t),
                    o = oe.speed(e, n, i),
                    s = function () {
                        var e = B(this, oe.extend({}, t), o);
                        (r || Ce.get(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function (t, e, n) {
                var i = function (t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        o = oe.timers,
                        s = Ce.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && un.test(r) && i(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                    (e || !n) && oe.dequeue(this, t)
                })
            },
            finish: function (t) {
                return t !== !1 && (t = t || "fx"), this.each(function () {
                    var e, n = Ce.get(this),
                        i = n[t + "queue"],
                        r = n[t + "queueHooks"],
                        o = oe.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, oe.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), oe.each(["toggle", "show", "hide"], function (t, e) {
            var n = oe.fn[e];
            oe.fn[e] = function (t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(O(e, !0), t, i, r)
            }
        }), oe.each({
            slideDown: O("show"),
            slideUp: O("hide"),
            slideToggle: O("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (t, e) {
            oe.fn[t] = function (t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), oe.timers = [], oe.fx.tick = function () {
            var t, e = 0,
                n = oe.timers;
            for (on = oe.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
            n.length || oe.fx.stop(), on = void 0
        }, oe.fx.timer = function (t) {
            oe.timers.push(t), t() ? oe.fx.start() : oe.timers.pop()
        }, oe.fx.interval = 13, oe.fx.start = function () {
            sn || (sn = t.setInterval(oe.fx.tick, oe.fx.interval))
        }, oe.fx.stop = function () {
            t.clearInterval(sn), sn = null
        }, oe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, oe.fn.delay = function (e, n) {
            return e = oe.fx ? oe.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function (n, i) {
                var r = t.setTimeout(n, e);
                i.stop = function () {
                    t.clearTimeout(r)
                }
            })
        },
        function () {
            var t = Y.createElement("input"),
                e = Y.createElement("select"),
                n = e.appendChild(Y.createElement("option"));
            t.type = "checkbox", ie.checkOn = "" !== t.value, ie.optSelected = n.selected, e.disabled = !0, ie.optDisabled = !n.disabled, t = Y.createElement("input"), t.value = "t", t.type = "radio", ie.radioValue = "t" === t.value
        }();
    var cn, ln = oe.expr.attrHandle;
    oe.fn.extend({
        attr: function (t, e) {
            return ke(this, oe.attr, t, e, arguments.length > 1)
        },
        removeAttr: function (t) {
            return this.each(function () {
                oe.removeAttr(this, t)
            })
        }
    }), oe.extend({
        attr: function (t, e, n) {
            var i, r, o = t.nodeType;
            return 3 !== o && 8 !== o && 2 !== o ? "undefined" == typeof t.getAttribute ? oe.prop(t, e, n) : (1 === o && oe.isXMLDoc(t) || (e = e.toLowerCase(), r = oe.attrHooks[e] || (oe.expr.match.bool.test(e) ? cn : void 0)), void 0 !== n ? null === n ? void oe.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = oe.find.attr(t, e), null == i ? void 0 : i)) : void 0
        },
        attrHooks: {
            type: {
                set: function (t, e) {
                    if (!ie.radioValue && "radio" === e && oe.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function (t, e) {
            var n, i, r = 0,
                o = e && e.match(be);
            if (o && 1 === t.nodeType)
                for (; n = o[r++];) i = oe.propFix[n] || n, oe.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
        }
    }), cn = {
        set: function (t, e, n) {
            return e === !1 ? oe.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var n = ln[e] || oe.find.attr;
        ln[e] = function (t, e, i) {
            var r, o;
            return i || (o = ln[e], ln[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, ln[e] = o), r
        }
    });
    var hn = /^(?:input|select|textarea|button)$/i,
        pn = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function (t, e) {
            return ke(this, oe.prop, t, e, arguments.length > 1)
        },
        removeProp: function (t) {
            return this.each(function () {
                delete this[oe.propFix[t] || t]
            })
        }
    }), oe.extend({
        prop: function (t, e, n) {
            var i, r, o = t.nodeType;
            return 3 !== o && 8 !== o && 2 !== o ? (1 === o && oe.isXMLDoc(t) || (e = oe.propFix[e] || e, r = oe.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = oe.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : hn.test(t.nodeName) || pn.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), ie.optSelected || (oe.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }
    }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        oe.propFix[this.toLowerCase()] = this
    });
    var fn = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function (t) {
            var e, n, i, r, o, s, a, u = 0;
            if (oe.isFunction(t)) return this.each(function (e) {
                oe(this).addClass(t.call(this, e, q(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(be) || []; n = this[u++];)
                    if (r = q(n), i = 1 === n.nodeType && (" " + r + " ").replace(fn, " ")) {
                        for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        a = oe.trim(i), r !== a && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function (t) {
            var e, n, i, r, o, s, a, u = 0;
            if (oe.isFunction(t)) return this.each(function (e) {
                oe(this).removeClass(t.call(this, e, q(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(be) || []; n = this[u++];)
                    if (r = q(n), i = 1 === n.nodeType && (" " + r + " ").replace(fn, " ")) {
                        for (s = 0; o = e[s++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        a = oe.trim(i), r !== a && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function (t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(oe.isFunction(t) ? function (n) {
                oe(this).toggleClass(t.call(this, n, q(this), e), e)
            } : function () {
                var e, i, r, o;
                if ("string" === n)
                    for (i = 0, r = oe(this), o = t.match(be) || []; e = o[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else(void 0 === t || "boolean" === n) && (e = q(this), e && Ce.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : Ce.get(this, "__className__") || ""))
            })
        },
        hasClass: function (t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + q(n) + " ").replace(fn, " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var dn = /\r/g;
    oe.fn.extend({
        val: function (t) {
            var e, n, i, r = this[0];
            return arguments.length ? (i = oe.isFunction(t), this.each(function (n) {
                var r;
                1 === this.nodeType && (r = i ? t.call(this, n, oe(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : oe.isArray(r) && (r = oe.map(r, function (t) {
                    return null == t ? "" : t + ""
                })), e = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
            })) : r ? (e = oe.valHooks[r.type] || oe.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(dn, "") : null == n ? "" : n)) : void 0
        }
    }), oe.extend({
        valHooks: {
            option: {
                get: function (t) {
                    return oe.trim(t.value)
                }
            },
            select: {
                get: function (t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, u = 0 > r ? a : o ? r : 0; a > u; u++)
                        if (n = i[u], !(!n.selected && u !== r || (ie.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && oe.nodeName(n.parentNode, "optgroup"))) {
                            if (e = oe(n).val(), o) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function (t, e) {
                    for (var n, i, r = t.options, o = oe.makeArray(e), s = r.length; s--;) i = r[s], (i.selected = oe.inArray(oe.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), oe.each(["radio", "checkbox"], function () {
        oe.valHooks[this] = {
            set: function (t, e) {
                return oe.isArray(e) ? t.checked = oe.inArray(oe(t).val(), e) > -1 : void 0
            }
        }, ie.checkOn || (oe.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var mn = /^(?:focusinfocus|focusoutblur)$/;
    oe.extend(oe.event, {
        trigger: function (e, n, i, r) {
            var o, s, a, u, c, l, h, p = [i || Y],
                f = ne.call(e, "type") ? e.type : e,
                d = ne.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = a = i = i || Y, 3 !== i.nodeType && 8 !== i.nodeType && !mn.test(f + oe.event.triggered) && (f.indexOf(".") > -1 && (d = f.split("."), f = d.shift(), d.sort()), c = f.indexOf(":") < 0 && "on" + f, e = e[oe.expando] ? e : new oe.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : oe.makeArray(n, [e]), h = oe.event.special[f] || {}, r || !h.trigger || h.trigger.apply(i, n) !== !1)) {
                if (!r && !h.noBubble && !oe.isWindow(i)) {
                    for (u = h.delegateType || f, mn.test(u + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (i.ownerDocument || Y) && p.push(a.defaultView || a.parentWindow || t)
                }
                for (o = 0;
                    (s = p[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? u : h.bindType || f, l = (Ce.get(s, "events") || {})[e.type] && Ce.get(s, "handle"), l && l.apply(s, n), l = c && s[c], l && l.apply && Te(s) && (e.result = l.apply(s, n), e.result === !1 && e.preventDefault());
                return e.type = f, r || e.isDefaultPrevented() || h._default && h._default.apply(p.pop(), n) !== !1 || !Te(i) || c && oe.isFunction(i[f]) && !oe.isWindow(i) && (a = i[c], a && (i[c] = null), oe.event.triggered = f, i[f](), oe.event.triggered = void 0, a && (i[c] = a)), e.result
            }
        },
        simulate: function (t, e, n) {
            var i = oe.extend(new oe.Event, n, {
                type: t,
                isSimulated: !0
            });
            oe.event.trigger(i, null, e), i.isDefaultPrevented() && n.preventDefault()
        }
    }), oe.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                oe.event.trigger(t, e, this)
            })
        },
        triggerHandler: function (t, e) {
            var n = this[0];
            return n ? oe.event.trigger(t, e, n, !0) : void 0
        }
    }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
        oe.fn[e] = function (t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), oe.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), ie.focusin = "onfocusin" in t, ie.focusin || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function (t, e) {
        var n = function (t) {
            oe.event.simulate(e, t.target, oe.event.fix(t))
        };
        oe.event.special[e] = {
            setup: function () {
                var i = this.ownerDocument || this,
                    r = Ce.access(i, e);
                r || i.addEventListener(t, n, !0), Ce.access(i, e, (r || 0) + 1)
            },
            teardown: function () {
                var i = this.ownerDocument || this,
                    r = Ce.access(i, e) - 1;
                r ? Ce.access(i, e, r) : (i.removeEventListener(t, n, !0), Ce.remove(i, e))
            }
        }
    });
    var gn = t.location,
        vn = oe.now(),
        yn = /\?/;
    oe.parseJSON = function (t) {
        return JSON.parse(t + "")
    }, oe.parseXML = function (e) {
        var n;
        if (!e || "string" != typeof e) return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (i) {
            n = void 0
        }
        return (!n || n.getElementsByTagName("parsererror").length) && oe.error("Invalid XML: " + e), n
    };
    var _n = /#.*$/,
        wn = /([?&])_=[^&]*/,
        bn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        xn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        kn = /^(?:GET|HEAD)$/,
        Tn = /^\/\//,
        Cn = {},
        En = {},
        An = "*/".concat("*"),
        Sn = Y.createElement("a");
    Sn.href = gn.href, oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gn.href,
            type: "GET",
            isLocal: xn.test(gn.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": An,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": oe.parseJSON,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (t, e) {
            return e ? z(z(t, oe.ajaxSettings), e) : z(oe.ajaxSettings, t)
        },
        ajaxPrefilter: I(Cn),
        ajaxTransport: I(En),
        ajax: function (e, n) {
            function i(e, n, i, a) {
                var c, h, y, _, b, k = n;
                2 !== w && (w = 2, u && t.clearTimeout(u), r = void 0, s = a || "", x.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, i && (_ = W(p, x, i)), _ = U(p, _, x, c), c ? (p.ifModified && (b = x.getResponseHeader("Last-Modified"), b && (oe.lastModified[o] = b), b = x.getResponseHeader("etag"), b && (oe.etag[o] = b)), 204 === e || "HEAD" === p.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = _.state, h = _.data, y = _.error, c = !y)) : (y = k, (e || !k) && (k = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (n || k) + "", c ? m.resolveWith(f, [h, k, x]) : m.rejectWith(f, [x, k, y]), x.statusCode(v), v = void 0, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [x, p, c ? h : y]), g.fireWith(f, [x, k]), l && (d.trigger("ajaxComplete", [x, p]), --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var r, o, s, a, u, c, l, h, p = oe.ajaxSetup({}, n),
                f = p.context || p,
                d = p.context && (f.nodeType || f.jquery) ? oe(f) : oe.event,
                m = oe.Deferred(),
                g = oe.Callbacks("once memory"),
                v = p.statusCode || {},
                y = {},
                _ = {},
                w = 0,
                b = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (2 === w) {
                            if (!a)
                                for (a = {}; e = bn.exec(s);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return 2 === w ? s : null
                    },
                    setRequestHeader: function (t, e) {
                        var n = t.toLowerCase();
                        return w || (t = _[n] = _[n] || t, y[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return w || (p.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)
                            if (2 > w)
                                for (e in t) v[e] = [v[e], t[e]];
                            else x.always(t[x.status]);
                        return this
                    },
                    abort: function (t) {
                        var e = t || b;
                        return r && r.abort(e), i(0, e), this
                    }
                };
            if (m.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, p.url = ((e || p.url || gn.href) + "").replace(_n, "").replace(Tn, gn.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = oe.trim(p.dataType || "*").toLowerCase().match(be) || [""], null == p.crossDomain) {
                c = Y.createElement("a");
                try {
                    c.href = p.url, c.href = c.href, p.crossDomain = Sn.protocol + "//" + Sn.host != c.protocol + "//" + c.host
                } catch (k) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = oe.param(p.data, p.traditional)), H(Cn, p, n, x), 2 === w) return x;
            l = oe.event && p.global, l && 0 === oe.active++ && oe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !kn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (yn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (yn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (oe.lastModified[o] && x.setRequestHeader("If-Modified-Since", oe.lastModified[o]), oe.etag[o] && x.setRequestHeader("If-None-Match", oe.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", p.contentType), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + An + "; q=0.01" : "") : p.accepts["*"]);
            for (h in p.headers) x.setRequestHeader(h, p.headers[h]);
            if (p.beforeSend && (p.beforeSend.call(f, x, p) === !1 || 2 === w)) return x.abort();
            b = "abort";
            for (h in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[h](p[h]);
            if (r = H(En, p, n, x)) {
                if (x.readyState = 1, l && d.trigger("ajaxSend", [x, p]), 2 === w) return x;
                p.async && p.timeout > 0 && (u = t.setTimeout(function () {
                    x.abort("timeout")
                }, p.timeout));
                try {
                    w = 1, r.send(y, i)
                } catch (k) {
                    if (!(2 > w)) throw k;
                    i(-1, k)
                }
            } else i(-1, "No Transport");
            return x
        },
        getJSON: function (t, e, n) {
            return oe.get(t, e, n, "json")
        },
        getScript: function (t, e) {
            return oe.get(t, void 0, e, "script")
        }
    }), oe.each(["get", "post"], function (t, e) {
        oe[e] = function (t, n, i, r) {
            return oe.isFunction(n) && (r = r || i, i = n, n = void 0), oe.ajax(oe.extend({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            }, oe.isPlainObject(t) && t))
        }
    }), oe._evalUrl = function (t) {
        return oe.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, oe.fn.extend({
        wrapAll: function (t) {
            var e;
            return oe.isFunction(t) ? this.each(function (e) {
                oe(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = oe(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function (t) {
            return this.each(oe.isFunction(t) ? function (e) {
                oe(this).wrapInner(t.call(this, e))
            } : function () {
                var e = oe(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function (t) {
            var e = oe.isFunction(t);
            return this.each(function (n) {
                oe(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), oe.expr.filters.hidden = function (t) {
        return !oe.expr.filters.visible(t)
    }, oe.expr.filters.visible = function (t) {
        return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
    };
    var Fn = /%20/g,
        jn = /\[\]$/,
        Dn = /\r?\n/g,
        Pn = /^(?:submit|button|image|reset|file)$/i,
        Ln = /^(?:input|select|textarea|keygen)/i;
    oe.param = function (t, e) {
        var n, i = [],
            r = function (t, e) {
                e = oe.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(t) || t.jquery && !oe.isPlainObject(t)) oe.each(t, function () {
            r(this.name, this.value)
        });
        else
            for (n in t) X(n, t[n], e, r);
        return i.join("&").replace(Fn, "+")
    }, oe.fn.extend({
        serialize: function () {
            return oe.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var t = oe.prop(this, "elements");
                return t ? oe.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !oe(this).is(":disabled") && Ln.test(this.nodeName) && !Pn.test(t) && (this.checked || !Le.test(t))
            }).map(function (t, e) {
                var n = oe(this).val();
                return null == n ? null : oe.isArray(n) ? oe.map(n, function (t) {
                    return {
                        name: e.name,
                        value: t.replace(Dn, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Dn, "\r\n")
                }
            }).get()
        }
    }), oe.ajaxSettings.xhr = function () {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    };
    var Nn = {
            0: 200,
            1223: 204
        },
        On = oe.ajaxSettings.xhr();
    ie.cors = !!On && "withCredentials" in On, ie.ajax = On = !!On, oe.ajaxTransport(function (e) {
        var n, i;
        return ie.cors || On && !e.crossDomain ? {
            send: function (r, o) {
                var s, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (s in e.xhrFields) a[s] = e.xhrFields[s];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (s in r) a.setRequestHeader(s, r[s]);
                n = function (t) {
                    return function () {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Nn[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                    4 === a.readyState && t.setTimeout(function () {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (u) {
                    if (n) throw u
                }
            },
            abort: function () {
                n && n()
            }
        } : void 0
    }), oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (t) {
                return oe.globalEval(t), t
            }
        }
    }), oe.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), oe.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function (i, r) {
                    e = oe("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function (t) {
                        e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                    }), Y.head.appendChild(e[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var Mn = [],
        $n = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = Mn.pop() || oe.expando + "_" + vn++;
            return this[t] = !0, t
        }
    }), oe.ajaxPrefilter("json jsonp", function (e, n, i) {
        var r, o, s, a = e.jsonp !== !1 && ($n.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && $n.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = oe.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace($n, "$1" + r) : e.jsonp !== !1 && (e.url += (yn.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return s || oe.error(r + " was not called"), s[0]
        }, e.dataTypes[0] = "json", o = t[r], t[r] = function () {
            s = arguments
        }, i.always(function () {
            void 0 === o ? oe(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, Mn.push(r)), s && oe.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), ie.createHTMLDocument = function () {
        var t = Y.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
    }(), oe.parseHTML = function (t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || (ie.createHTMLDocument ? Y.implementation.createHTMLDocument("") : Y);
        var i = de.exec(t),
            r = !n && [];
        return i ? [e.createElement(i[1])] : (i = p([t], e, r), r && r.length && oe(r).remove(), oe.merge([], i.childNodes))
    };
    var Rn = oe.fn.load;
    oe.fn.load = function (t, e, n) {
        if ("string" != typeof t && Rn) return Rn.apply(this, arguments);
        var i, r, o, s = this,
            a = t.indexOf(" ");
        return a > -1 && (i = oe.trim(t.slice(a)), t = t.slice(0, a)), oe.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && oe.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            o = arguments, s.html(i ? oe("<div>").append(oe.parseHTML(t)).find(i) : t)
        }).always(n && function (t, e) {
            s.each(function () {
                n.apply(s, o || [t.responseText, e, t])
            })
        }), this
    }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        oe.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), oe.expr.filters.animated = function (t) {
        return oe.grep(oe.timers, function (e) {
            return t === e.elem
        }).length
    }, oe.offset = {
        setOffset: function (t, e, n) {
            var i, r, o, s, a, u, c, l = oe.css(t, "position"),
                h = oe(t),
                p = {};
            "static" === l && (t.style.position = "relative"), a = h.offset(), o = oe.css(t, "top"), u = oe.css(t, "left"), c = ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1, c ? (i = h.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(u) || 0), oe.isFunction(e) && (e = e.call(t, n, oe.extend({}, a))), null != e.top && (p.top = e.top - a.top + s), null != e.left && (p.left = e.left - a.left + r), "using" in e ? e.using.call(t, p) : h.css(p)
        }
    }, oe.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                oe.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                o = i && i.ownerDocument;
            return o ? (e = o.documentElement, oe.contains(e, i) ? (r = i.getBoundingClientRect(), n = V(o), {
                top: r.top + n.pageYOffset - e.clientTop,
                left: r.left + n.pageXOffset - e.clientLeft
            }) : r) : void 0
        },
        position: function () {
            if (this[0]) {
                var t, e, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === oe.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), oe.nodeName(t[0], "html") || (i = t.offset()), i.top += oe.css(t[0], "borderTopWidth", !0), i.left += oe.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - oe.css(n, "marginTop", !0),
                    left: e.left - i.left - oe.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === oe.css(t, "position");) t = t.offsetParent;
                return t || Je
            })
        }
    }), oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, e) {
        var n = "pageYOffset" === e;
        oe.fn[t] = function (i) {
            return ke(this, function (t, i, r) {
                var o = V(t);
                return void 0 === r ? o ? o[e] : t[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : t[i] = r)
            }, t, i, arguments.length)
        }
    }), oe.each(["top", "left"], function (t, e) {
        oe.cssHooks[e] = A(ie.pixelPosition, function (t, n) {
            return n ? (n = E(t, e), Ye.test(n) ? oe(t).position()[e] + "px" : n) : void 0
        })
    }), oe.each({
        Height: "height",
        Width: "width"
    }, function (t, e) {
        oe.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function (n, i) {
            oe.fn[i] = function (i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || r === !0 ? "margin" : "border");
                return ke(this, function (e, n, i) {
                    var r;
                    return oe.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? oe.css(e, n, s) : oe.style(e, n, i, s)
                }, e, o ? i : void 0, o, null)
            }
        })
    }), oe.fn.extend({
        bind: function (t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function (t, e) {
            return this.off(t, null, e)
        },
        delegate: function (t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        },
        size: function () {
            return this.length
        }
    }), oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return oe
    });
    var Bn = t.jQuery,
        qn = t.$;
    return oe.noConflict = function (e) {
        return t.$ === oe && (t.$ = qn), e && t.jQuery === oe && (t.jQuery = Bn), oe
    }, e || (t.jQuery = t.$ = oe), oe
}), ! function (t, e, n) {
    "use strict";
    "document" in self && ("classList" in e.createElement("_") ? ! function () {
            var t = e.createElement("_");
            if (t.classList.add("c1", "c2"), !t.classList.contains("c2")) {
                var n = function (t) {
                    var e = DOMTokenList.prototype[t];
                    DOMTokenList.prototype[t] = function (t) {
                        var n, i = arguments.length;
                        for (n = 0; i > n; n++) t = arguments[n], e.call(this, t)
                    }
                };
                n("add"), n("remove")
            }
            if (t.classList.toggle("c3", !1), t.classList.contains("c3")) {
                var i = DOMTokenList.prototype.toggle;
                DOMTokenList.prototype.toggle = function (t, e) {
                    return 1 in arguments && !this.contains(t) == !e ? e : i.call(this, t)
                }
            }
            t = null
        }() : ! function (t) {
            if ("Element" in t) {
                var e = "classList",
                    n = "prototype",
                    i = t.Element[n],
                    r = Object,
                    o = String[n].trim || function () {
                        return this.replace(/^\s+|\s+$/g, "")
                    },
                    s = Array[n].indexOf || function (t) {
                        for (var e = 0, n = this.length; n > e; e++)
                            if (e in this && this[e] === t) return e;
                        return -1
                    },
                    a = function (t, e) {
                        this.name = t, this.code = DOMException[t], this.message = e
                    },
                    u = function (t, e) {
                        if ("" === e) throw new a("SYNTAX_ERR", "An invalid or illegal string was specified");
                        if (/\s/.test(e)) throw new a("INVALID_CHARACTER_ERR", "String contains an invalid character");
                        return s.call(t, e)
                    },
                    c = function (t) {
                        for (var e = o.call(t.getAttribute("class") || ""), n = e ? e.split(/\s+/) : [], i = 0, r = n.length; r > i; i++) this.push(n[i]);
                        this._updateClassName = function () {
                            t.setAttribute("class", this.toString())
                        }
                    },
                    l = c[n] = [],
                    h = function () {
                        return new c(this)
                    };
                if (a[n] = Error[n], l.item = function (t) {
                        return this[t] || null
                    }, l.contains = function (t) {
                        return t += "", -1 !== u(this, t)
                    }, l.add = function () {
                        var t, e = arguments,
                            n = 0,
                            i = e.length,
                            r = !1;
                        do t = e[n] + "", -1 === u(this, t) && (this.push(t), r = !0); while (++n < i);
                        r && this._updateClassName()
                    }, l.remove = function () {
                        var t, e, n = arguments,
                            i = 0,
                            r = n.length,
                            o = !1;
                        do
                            for (t = n[i] + "", e = u(this, t); - 1 !== e;) this.splice(e, 1), o = !0, e = u(this, t); while (++i < r);
                        o && this._updateClassName()
                    }, l.toggle = function (t, e) {
                        t += "";
                        var n = this.contains(t),
                            i = n ? e !== !0 && "remove" : e !== !1 && "add";
                        return i && this[i](t), e === !0 || e === !1 ? e : !n
                    }, l.toString = function () {
                        return this.join(" ")
                    }, r.defineProperty) {
                    var p = {
                        get: h,
                        enumerable: !0,
                        configurable: !0
                    };
                    try {
                        r.defineProperty(i, e, p)
                    } catch (f) {
                        -2146823252 === f.number && (p.enumerable = !1, r.defineProperty(i, e, p))
                    }
                } else r[n].__defineGetter__ && i.__defineGetter__(e, h)
            }
        }(self)), Array.prototype.forEach || (Array.prototype.forEach = function (t, e) {
            var n, i;
            if (null == this) throw new TypeError(" this vaut null ou n est pas défini");
            var r = Object(this),
                o = r.length >>> 0;
            if ("function" != typeof t) throw new TypeError(t + " n est pas une fonction");
            for (arguments.length > 1 && (n = e), i = 0; o > i;) {
                var s;
                i in r && (s = r[i], t.call(n, s, i, r)), i++
            }
        }), t.getComputedStyle || (t.getComputedStyle = function (t) {
            return this.el = t, this.getPropertyValue = function (e) {
                var n = /(\-([a-z]){1})/g;
                return "float" == e && (e = "styleFloat"), n.test(e) && (e = e.replace(n, function () {
                    return arguments[2].toUpperCase()
                })), t.currentStyle[e] ? t.currentStyle[e] : null
            }, this
        }), t.HTMLElement || (t.HTMLElement = t.Element), Array.prototype.indexOf || (Array.prototype.indexOf = function (t, e) {
            var n;
            if (null == this) throw new TypeError('"this" is null or not defined');
            var i = Object(this),
                r = i.length >>> 0;
            if (0 === r) return -1;
            var o = +e || 0;
            if (1 / 0 === Math.abs(o) && (o = 0), o >= r) return -1;
            for (n = Math.max(o >= 0 ? o : r - Math.abs(o), 0); r > n;) {
                if (n in i && i[n] === t) return n;
                n++
            }
            return -1
        }), "function" != typeof Object.create && (Object.create = function () {
            var t = function () {};
            return function (e) {
                if (arguments.length > 1) throw Error("Cette prothèse ne supporte pas le second argument");
                if ("object" != typeof e) throw TypeError("L'argument doit être un objet");
                t.prototype = e;
                var n = new t;
                return t.prototype = null, n
            }
        }()), Object.keys || (Object.keys = function () {
            var t = Object.prototype.hasOwnProperty,
                e = !{
                    toString: null
                }.propertyIsEnumerable("toString"),
                n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                i = n.length;
            return function (r) {
                if ("object" != typeof r && ("function" != typeof r || null === r)) throw new TypeError("Object.keys called on non-object");
                var o, s, a = [];
                for (o in r) t.call(r, o) && a.push(o);
                if (e)
                    for (s = 0; i > s; s++) t.call(r, n[s]) && a.push(n[s]);
                return a
            }
        }()),
        function () {
            for (var e = 0, n = ["ms", "moz", "webkit", "o"], i = 0; i < n.length && !t.requestAnimationFrame; ++i) t.requestAnimationFrame = t[n[i] + "RequestAnimationFrame"], t.cancelAnimationFrame = t[n[i] + "CancelAnimationFrame"] || t[n[i] + "CancelRequestAnimationFrame"];
            t.requestAnimationFrame || (t.requestAnimationFrame = function (n) {
                var i = (new Date).getTime(),
                    r = Math.max(0, 16 - (i - e)),
                    o = t.setTimeout(function () {
                        n(i + r)
                    }, r);
                return e = i + r, o
            }), t.cancelAnimationFrame || (t.cancelAnimationFrame = function (t) {
                clearTimeout(t)
            })
        }();
    var i = {
        Core: {},
        Tools: {},
        Components: {}
    };
    i.copy = function (t) {
        var e = null;
        if ("undefined" == typeof t || t && t.constructor === Object) {
            e = {};
            for (var n in t) e[n] = i.copy(t[n]);
            return e
        }
        if (t instanceof Array) {
            e = [];
            for (var r = 0, o = t.length; o > r; r++) e[r] = i.copy(t[r]);
            return e
        }
        return t
    }, i.merge = function (t, e) {
        for (var n in e) {
            var r = e[n];
            r.constructor === Object ? (t[n] || (t[n] = {}), t[n] = i.merge(t[n], r)) : t[n] = r
        }
        return t
    };
    var r = !1,
        o = /xyz/.test(function () {
            xyz
        }) ? /\b_super\b/ : /.*/;
    i.Class = function () {};
    var s = function (t) {
        var e = this.prototype,
            n = {};
        for (var i in t) "function" == typeof t[i] && "function" == typeof e[i] && o.test(t[i]) ? (n[i] = e[i], e[i] = function (t, e) {
            return function () {
                var i = this._super;
                this._super = n[t];
                var r = e.apply(this, arguments);
                return this._super = i, r
            }
        }(i, t[i])) : e[i] = t[i]
    };
    i.Class.extend = function (t) {
        function e() {
            if (!r) {
                if (this.static_instantiate) {
                    var t = this.static_instantiate.apply(this, arguments);
                    if (t) return t
                }
                for (var e in this) "object" == typeof this[e] && (this[e] = i.copy(this[e]));
                this.construct ? this.construct.apply(this, arguments) : this.init && this.init.apply(this, arguments)
            }
            return this
        }
        var n = this.prototype;
        r = !0;
        var a = new this;
        r = !1;
        for (var u in t)
            if ("function" == typeof t[u] && "function" == typeof n[u] && o.test(t[u])) a[u] = function (t, e) {
                return function () {
                    var i = this._super;
                    this._super = n[t];
                    var r = e.apply(this, arguments);
                    return this._super = i, r
                }
            }(u, t[u]);
            else if ("options" === u) {
            "undefined" == typeof a[u] && (a[u] = {});
            var c = i.copy(a[u]),
                l = i.copy(t[u]);
            a[u] = i.merge(c, l)
        } else a[u] = t[u];
        return e.prototype = a, e.prototype.constructor = e, e.extend = i.Class.extend, e.inject = s, e
    }, i.Core.Abstract = i.Class.extend({
        options: {},
        "static": !1,
        construct: function (t) {
            if ("undefined" == typeof t && (t = {}), i.merge(this.options, t), this.$ = {}, "object" != typeof i.Statics && (i.Statics = {}), t.register && "string" == typeof t.register) {
                var e = new i.Tools.Registry;
                e.set(t.register, this)
            }
            this["static"] && "string" == typeof this["static"] && (i.Statics[this["static"]] = this)
        },
        static_instantiate: function () {
            return i.Statics && i.Statics[this["static"]] ? i.Statics[this["static"]] : null
        },
        destroy: function () {}
    }), i.Core.EventEmitter = i.Core.Event_Emitter = i.Core.Abstract.extend({
        "static": !1,
        options: {},
        construct: function (t) {
            this._super(t), this.callbacks = {}, this.callbacks.base = {}
        },
        on: function (t, e) {
            var n = this;
            return "undefined" == typeof t || "" === t ? (console.warn("wrong names"), !1) : "undefined" == typeof e ? (console.warn("wrong callback"), !1) : (t = this.resolve_names(t), t.forEach(function (t) {
                t = n.resolve_name(t), n.callbacks[t.namespace] instanceof Object || (n.callbacks[t.namespace] = {}), n.callbacks[t.namespace][t.value] instanceof Array || (n.callbacks[t.namespace][t.value] = []), n.callbacks[t.namespace][t.value].push(e)
            }), this)
        },
        off: function (t) {
            var e = this;
            return "undefined" == typeof t || "" === t ? (console.warn("wrong name"), !1) : (t = this.resolve_names(t), t.forEach(function (t) {
                if (t = e.resolve_name(t), "base" !== t.namespace && "" === t.value) delete e.callbacks[t.namespace];
                else if ("base" === t.namespace)
                    for (var n in e.callbacks) e.callbacks[n] instanceof Object && e.callbacks[n][t.value] instanceof Array && (delete e.callbacks[n][t.value], 0 === Object.keys(e.callbacks[n]).length && delete e.callbacks[n]);
                else e.callbacks[t.namespace] instanceof Object && e.callbacks[t.namespace][t.value] instanceof Array && (delete e.callbacks[t.namespace][t.value], 0 === Object.keys(e.callbacks[t.namespace]).length && delete e.callbacks[t.namespace])
            }), this)
        },
        trigger: function (t, e) {
            if ("undefined" == typeof t || "" === t) return console.warn("wrong name"), !1;
            var n, i, r = this;
            if (e instanceof Array || (e = []), t = this.resolve_names(t), t = r.resolve_name(t[0]), "base" === t.namespace)
                for (var o in r.callbacks) r.callbacks[o] instanceof Object && r.callbacks[o][t.value] instanceof Array && r.callbacks[o][t.value].forEach(function (t) {
                    i = t.apply(r, e), "undefined" == typeof n && (n = i)
                });
            else if (this.callbacks[t.namespace] instanceof Object) {
                if ("" === t.value) return console.warn("wrong name"), this;
                r.callbacks[t.namespace][t.value].forEach(function (t) {
                    i = t.apply(r, e), "undefined" == typeof n && (n = i)
                })
            }
            return n
        },
        trigga: function (t, e) {
            return this.trigger(t, e)
        },
        dispatch: function (t, e) {
            return this.trigger(t, e)
        },
        fire: function (t, e) {
            return this.trigger(t, e)
        },
        resolve_names: function (t) {
            return t = t.replace(/[^a-zA-Z0-9 ,\/.]/g, ""), t = t.replace(/[,\/]+/g, " "), t = t.split(" ")
        },
        resolve_name: function (t) {
            var e = {},
                n = t.split(".");
            return e.original = t, e.value = n[0], e.namespace = "base", n.length > 1 && "" !== n[1] && (e.namespace = n[1]), e
        }
    }), i.Tools.Breakpoints = i.Core.Event_Emitter.extend({
        "static": "breakpoints",
        options: {
            breakpoints: []
        },
        construct: function (t) {
            this._super(t), this.viewport = new i.Tools.Viewport, this.all = {}, this.actives = {}, this.first_test = !0, this.add(this.options.breakpoints), this.init_events()
        },
        init_events: function () {
            var t = this;
            return this.viewport.on("resize", function () {
                t.test()
            }), this
        },
        add: function (t, e) {
            e = "undefined" == typeof e ? !0 : !1, t instanceof Array || (t = [t]);
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                this.all[i.name] = i
            }
            return e || this.test(), this
        },
        remove: function (t, e) {
            t instanceof Array || (t = [t]), "object" == typeof breakpoint && "string" == typeof breakpoint.name && (breakpoint = breakpoint.name), e = "undefined" == typeof e ? !1 : !0;
            for (var n = 0; n < t.length; n++) delete this.all[t[n]];
            return e || this.test(), this
        },
        test: function () {
            for (var t = {}, e = Object.keys(this.all), n = 0, i = e.length; i > n; n++) {
                var r = this.all[e[n]],
                    o = !r.width,
                    s = !r.height;
                o || ("min" === r.width.extreme ? (r.width.included && this.viewport.width >= r.width.value || !r.width.included && this.viewport.width > r.width.value) && (o = !0) : (r.width.included && this.viewport.width <= r.width.value || !r.width.included && this.viewport.width < r.width.value) && (o = !0)), s || ("min" === r.height.extreme ? (r.height.included && this.viewport.height >= r.height.value || !r.height.included && this.viewport.height > r.height.value) && (s = !0) : (r.height.included && this.viewport.height <= r.height.value || !r.height.included && this.viewport.height < r.height.value) && (s = !0)), o && s && (t[r.name] = r)
            }
            var a = Object.keys(t),
                u = Object.keys(this.actives),
                c = this.get_arrays_differences(a, u);
            return (c.length || this.first_test) && (this.actives = t, this.first_test = !1, this.trigger("update change", [this.actives])), this
        },
        is_active: function (t) {
            return "object" == typeof t && "string" == typeof t.name && (t = t.name), "undefined" != typeof this.actives[t]
        },
        get_arrays_differences: function (t, e) {
            for (var n = [], i = [], r = 0; r < t.length; r++) n[t[r]] = !0;
            for (r = 0; r < e.length; r++) n[e[r]] ? delete n[e[r]] : n[e[r]] = !0;
            for (var o in n) i.push(o);
            return i
        }
    }), i.Tools.Colors = i.Core.Abstract.extend({
        "static": "colors",
        options: {
            gradients: {
                parse: !0,
                target: e.body,
                classes: {
                    to_convert: "b-gradient-text",
                    converted: "b-gradient-text-converted"
                }
            }
        },
        names: {
            aliceblue: "F0F8FF",
            antiquewhite: "FAEBD7",
            aqua: "00FFFF",
            aquamarine: "7FFFD4",
            azure: "F0FFFF",
            beige: "F5F5DC",
            bisque: "FFE4C4",
            black: "000000",
            blanchedalmond: "FFEBCD",
            blue: "0000FF",
            blueviolet: "8A2BE2",
            brown: "A52A2A",
            burlywood: "DEB887",
            cadetblue: "5F9EA0",
            chartreuse: "7FFF00",
            chocolate: "D2691E",
            coral: "FF7F50",
            cornflowerblue: "6495ED",
            cornsilk: "FFF8DC",
            crimson: "DC143C",
            cyan: "00FFFF",
            darkblue: "00008B",
            darkcyan: "008B8B",
            darkgoldenrod: "B8860B",
            darkgray: "A9A9A9",
            darkgreen: "006400",
            darkkhaki: "BDB76B",
            darkmagenta: "8B008B",
            darkolivegreen: "556B2F",
            darkorange: "FF8C00",
            darkorchid: "9932CC",
            darkred: "8B0000",
            darksalmon: "E9967A",
            darkseagreen: "8FBC8F",
            darkslateblue: "483D8B",
            darkslategray: "2F4F4F",
            darkturquoise: "00CED1",
            darkviolet: "9400D3",
            deeppink: "FF1493",
            deepskyblue: "00BFFF",
            dimgray: "696969",
            dodgerblue: "1E90FF",
            firebrick: "B22222",
            floralwhite: "FFFAF0",
            forestgreen: "228B22",
            fuchsia: "FF00FF",
            gainsboro: "DCDCDC",
            ghostwhite: "F8F8FF",
            gold: "FFD700",
            goldenrod: "DAA520",
            gray: "808080",
            green: "008000",
            greenyellow: "ADFF2F",
            honeydew: "F0FFF0",
            hotpink: "FF69B4",
            indianred: "CD5C5C",
            indigo: "4B0082",
            ivory: "FFFFF0",
            khaki: "F0E68C",
            lavender: "E6E6FA",
            lavenderblush: "FFF0F5",
            lawngreen: "7CFC00",
            lemonchiffon: "FFFACD",
            lightblue: "ADD8E6",
            lightcoral: "F08080",
            lightcyan: "E0FFFF",
            lightgoldenrodyellow: "FAFAD2",
            lightgray: "D3D3D3",
            lightgreen: "90EE90",
            lightpink: "FFB6C1",
            lightsalmon: "FFA07A",
            lightseagreen: "20B2AA",
            lightskyblue: "87CEFA",
            lightslategray: "778899",
            lightsteelblue: "B0C4DE",
            lightyellow: "FFFFE0",
            lime: "00FF00",
            limegreen: "32CD32",
            linen: "FAF0E6",
            magenta: "FF00FF",
            maroon: "800000",
            mediumaquamarine: "66CDAA",
            mediumblue: "0000CD",
            mediumorchid: "BA55D3",
            mediumpurple: "9370DB",
            mediumseagreen: "3CB371",
            mediumslateblue: "7B68EE",
            mediumspringgreen: "00FA9A",
            mediumturquoise: "48D1CC",
            mediumvioletred: "C71585",
            midnightblue: "191970",
            mintcream: "F5FFFA",
            mistyrose: "FFE4E1",
            moccasin: "FFE4B5",
            navajowhite: "FFDEAD",
            navy: "000080",
            oldlace: "FDF5E6",
            olive: "808000",
            olivedrab: "6B8E23",
            orange: "FFA500",
            orangered: "FF4500",
            orchid: "DA70D6",
            palegoldenrod: "EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        },
        construct: function (t) {
            this._super(t), this.options.gradients.parse && this.parse()
        },
        any_to_rgb: function (t) {
            if (t = "" + t, t = t.toLowerCase(), t = t.replace(/[\s-]/g, ""), "undefined" != typeof this.names[t]) return this.hexa_to_rgb(this.names[t]);
            if (0 === t.indexOf("0x")) return this.hexa_to_rgb(t.replace("0x", ""));
            if (0 === t.indexOf("#") && (t = t.replace("#", "")), 6 === t.length) return this.hexa_to_rgb(t);
            if (3 === t.length) {
                for (var e = "", n = 0; n < t.length; n++) e += t[n] + t[n];
                return this.hexa_to_rgb(e)
            }
            try {
                if (t = JSON.parse(t), "undefined" != typeof t.r && "undefined" != typeof t.g && "undefined" != typeof t.b) return t;
                if ("undefined" != typeof t.h && "undefined" != typeof t.s && "undefined" != typeof t.l) return this.hsl_to_rgb(t)
            } catch (i) {}
            return console.warn("Wrong color value : " + t), {
                r: 0,
                g: 0,
                b: 0
            }
        },
        parse: function (t, e) {
            t = t || this.options.gradients.target, e = e || this.options.gradients.classes.to_convert;
            for (var n = this, i = t.querySelectorAll("." + e), r = 0, o = i.length; o > r; r++) {
                var s = i[r];
                if (!s.classList.contains(this.options.gradients.classes.converted)) {
                    var a = "",
                        u = s.textContent,
                        c = s.getAttribute("data-gradient-start"),
                        l = s.getAttribute("data-gradient-end"),
                        h = null;
                    c || (c = "#47add9"), l || (l = "#3554e9"), h = n.get_steps_colors(c, l, u.length, "rgb");
                    for (var p = 0, f = u.length; f > p; p++) a += '<span style="color:rgb(' + h[p].r + "," + h[p].g + "," + h[p].b + ')">' + u[p] + "</span>";
                    s.innerHTML = a
                }
            }
            return this
        },
        get_steps_colors: function (t, e, n, i) {
            ("number" != typeof n || 2 > n) && (n = 2), t = this.rgb_to_hsl(this.any_to_rgb(t)), e = this.rgb_to_hsl(this.any_to_rgb(e));
            for (var r = [], o = 0, s = {}, a = 0; n + 1 > a; a++) o = a / n, s.h = t.h + (e.h - t.h) * o, s.s = t.s + (e.s - t.s) * o, s.l = t.l + (e.l - t.l) * o, "rgb" === i && (s = this.hsl_to_rgb(s)), r.push(s);
            return r
        },
        hexa_to_rgb: function (t) {
            var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            return {
                r: parseInt(e[1], 16),
                g: parseInt(e[2], 16),
                b: parseInt(e[3], 16)
            }
        },
        rgb_to_hsl: function (t) {
            t.r /= 255, t.g /= 255, t.b /= 255;
            var e = Math.max(t.r, t.g, t.b),
                n = Math.min(t.r, t.g, t.b),
                i = {};
            if (i.h = (e + n) / 2, i.s = (e + n) / 2, i.l = (e + n) / 2, e === n) i.h = 0, i.s = 0;
            else {
                var r = e - n;
                switch (i.s = i.l > .5 ? r / (2 - e - n) : r / (e + n), e) {
                case t.r:
                    i.h = (t.g - t.b) / r + (t.g < t.b ? 6 : 0);
                    break;
                case t.g:
                    i.h = (t.b - t.r) / r + 2;
                    break;
                case t.b:
                    i.h = (t.r - t.g) / r + 4
                }
                i.h /= 6
            }
            return i
        },
        hsl_to_rgb: function (t) {
            var e = {};
            if (0 === t.s) e.r = t.l, e.g = t.l, e.b = t.l;
            else {
                var n = function (t, e, n) {
                        return 0 > n && (n += 1), n > 1 && (n -= 1), 1 / 6 > n ? t + 6 * (e - t) * n : .5 > n ? e : 2 / 3 > n ? t + (e - t) * (2 / 3 - n) * 6 : t
                    },
                    i = t.l < .5 ? t.l * (1 + t.s) : t.l + t.s - t.l * t.s,
                    r = 2 * t.l - i;
                e.r = n(r, i, t.h + 1 / 3), e.g = n(r, i, t.h), e.b = n(r, i, t.h - 1 / 3)
            }
            return e.r = Math.round(255 * e.r), e.g = Math.round(255 * e.g), e.b = Math.round(255 * e.b), e
        }
    }), i.Tools.Css = i.Core.Abstract.extend({
        "static": "css",
        options: {
            prefixes: ["webkit", "moz", "o", "ms", ""]
        },
        construct: function (t) {
            this._super(t), this.detector = new i.Tools.Detector, this.strings = new i.Tools.Strings
        },
        apply: function (t, e, n, i) {
            if ("undefined" != typeof jQuery && t instanceof jQuery && (t = t.toArray()), "undefined" == typeof t.length && (t = [t]), "undefined" == typeof n && (n = !1), n === !0 && (n = this.options.prefixes), ("undefined" == typeof i || i) && (e = this.clean_style(e)), n instanceof Array) {
                var r = {};
                for (var o in e)
                    for (var s in n) {
                        var a = null;
                        a = n[s] ? n[s] + (o.charAt(0).toUpperCase() + o.slice(1)) : o, r[a] = e[o]
                    }
                e = r
            }
            for (var u in t)
                if (u = t[u], u instanceof HTMLElement)
                    for (var c in e) u.style[c] = e[c];
            return t
        },
        clean_style: function (t) {
            var e = {};
            for (var n in t) {
                var i = t[n];
                e[this.clean_property(n)] = this.clean_value(i)
            }
            return e
        },
        clean_property: function (t) {
            return t = t.replace(/(webkit|moz|o|ms)?/i, ""), t = this.strings.convert_case(t, "camel")
        },
        clean_value: function (t) {
            return 9 === this.detector.browser.ie && (/translateZ/.test(t) && (t = t.replace(/translateZ\([^)]*\)/g, "")), /   /.test(t) && (t = t.replace(/translate3d\(([^,]*),([^,]*),([^)])*\)/g, "translateX($1) translateY($2)"))), t
        }
    }), i.Tools.Detector = i.Core.Event_Emitter.extend({
        "static": "detector",
        options: {
            targets: ["html"]
        },
        construct: function (t) {
            this._super(t), this.init_detection(), this.init_classes()
        },
        init_detection: function () {
            var n = {
                    ie: 0,
                    gecko: 0,
                    webkit: 0,
                    khtml: 0,
                    opera: 0,
                    version: 0
                },
                i = {
                    ie: 0,
                    firefox: 0,
                    safari: 0,
                    konq: 0,
                    opera: 0,
                    chrome: 0,
                    version: 0
                },
                r = {
                    windows: !1,
                    mac: !1,
                    osx: !1,
                    iphone: !1,
                    ipod: !1,
                    ipad: !1,
                    ios: !1,
                    blackberry: !1,
                    android: !1,
                    opera_mini: !1,
                    windows_mobile: !1,
                    wii: !1,
                    ps: !1
                },
                o = {
                    touch: !1,
                    media_query: !1
                },
                s = navigator.userAgent;
            if (t.opera) n.version = i.version = t.opera.version(), n.opera = i.opera = parseInt(n.version);
            else if (/AppleWebKit\/(\S+)/.test(s) || /AppleWebkit\/(\S+)/.test(s))
                if (n.version = RegExp.$1, n.webkit = parseInt(n.version), /Chrome\/(\S+)/.test(s)) i.version = RegExp.$1, i.chrome = parseInt(i.version);
                else if (/Version\/(\S+)/.test(s)) i.version = RegExp.$1, i.safari = parseInt(i.version);
            else {
                var a = 1;
                a = n.webkit < 100 ? 1 : n.webkit < 312 ? 1.2 : n.webkit < 412 ? 1.3 : 2, i.safari = i.version = a
            } else /KHTML\/(\S+)/.test(s) || /Konqueror\/([^;]+)/.test(s) ? (n.version = i.version = RegExp.$1, n.khtml = i.konq = parseInt(n.version)) : /rv:([^\)]+)\) Gecko\/\d{8}/.test(s) ? (n.version = RegExp.$1, n.gecko = parseInt(n.version), /Firefox\/(\S+)/.test(s) && (i.version = RegExp.$1, i.firefox = parseInt(i.version))) : /MSIE ([^;]+)/.test(s) ? (n.version = i.version = RegExp.$1, n.ie = i.ie = parseInt(n.version)) : /Trident.*rv[ :]*(11[\.\d]+)/.test(s) && (n.version = i.version = RegExp.$1, n.ie = i.ie = parseInt(n.version));
            i.ie = n.ie, i.opera = n.opera;
            var u = navigator.platform;
            if (r.windows = !!s.match(/Win/), r.mac = !!s.match(/Mac/), r.windows && /Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(s))
                if ("NT" === RegExp.$1) switch (RegExp.$2) {
                case "5.0":
                    r.windows = "2000";
                    break;
                case "5.1":
                    r.windows = "XP";
                    break;
                case "6.0":
                    r.windows = "Vista";
                    break;
                default:
                    r.windows = "NT"
                } else r.windows = "9x" === RegExp.$1 ? "ME" : RegExp.$1;
            r.nokia = !!s.match(/Nokia/i), r.kindle_fire = !!s.match(/Silk/), r.iphone = !!s.match(/iPhone/), r.ipod = !!s.match(/iPod/), r.ipad = !!s.match(/iPad/), r.blackberry = !!s.match(/BlackBerry/) || !!s.match(/BB[0-9]+/) || !!s.match(/PlayBook/), r.android = !!s.match(/Android/), r.opera_mini = !!s.match(/Opera Mini/i), r.windows_mobile = !!s.match(/IEMobile/i), r.ios = r.iphone || r.ipod || r.ipad, r.osx = !r.ios && !!s.match(/OS X/), r.wii = s.indexOf("Wii") > -1, r.playstation = /playstation/i.test(s), o.touch = !!("ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch), o.media_query = !(!t.matchMedia && !t.msMatchMedia), this.user_agent = s, this.plateform = u, this.browser = i, this.engine = n, this.system = r, this.features = o, this.categories = ["engine", "browser", "system", "features"]
        },
        init_classes: function () {
            if (!this.options.targets || 0 === this.options.targets.length) return !1;
            for (var t = [], n = null, i = 0, r = this.options.targets.length; r > i; i++) {
                if (n = this.options.targets[i], "string" == typeof n) switch (n) {
                case "html":
                    t.push(e.documentElement);
                    break;
                case "body":
                    t.push(e.body);
                    break;
                default:
                    for (var o = e.querySelectorAll(n), s = 0; s < o.length; s++) t.push(o[s])
                } else n instanceof Element && t.push(n);
                if (t.length) {
                    this.classes = [];
                    for (var a in this)
                        if (-1 !== this.categories.indexOf(a))
                            for (var u in this[a]) {
                                var c = this[a][u];
                                "version" !== u && ("features" === a ? this.classes.push(a + "-" + (c ? "" : "no-") + u) : c && (this.classes.push(a + "-" + u), "browser" === a && this.classes.push(a + "-" + u + "-" + c)))
                            }
                        for (var s = 0; s < t.length; s++) t[s].classList.add.apply(t[s].classList, this.classes)
                }
            }
            return this
        }
    }), i.Tools.GATags = i.Tools.GA_Tags = i.Core.Event_Emitter.extend({
        "static": "ga_tags",
        options: {
            testing: !1,
            send: !0,
            parse: !0,
            true_link_duration: 300,
            target: e.body,
            classes: {
                to_tag: "b-tag",
                tagged: "b-tagged"
            },
            logs: {
                warnings: !1,
                send: !1
            }
        },
        construct: function (t) {
            this._super(t), this.unique_sent = [], this.options.parse && this.parse()
        },
        parse: function (e, n) {
            function i(e) {
                e = e || t.event;
                var n = this,
                    i = n.getAttribute("data-tag-true-link"),
                    o = {};
                if (i = i && -1 === ["0", "false", "nop", "no"].indexOf(i.toLowerCase()) ? !0 : !1, o.category = n.getAttribute("data-tag-category"), o.action = n.getAttribute("data-tag-action"), o.label = n.getAttribute("data-tag-label"), o.value = n.getAttribute("data-tag-value"), o.unique = n.getAttribute("data-tag-unique"), r.send(o), i) {
                    var s = n.getAttribute("href"),
                        a = n.getAttribute("target");
                    a || (a = "_self"), "_blank" !== a && (t.setTimeout(function () {
                        t.open(s, a)
                    }, r.options.true_link_duration), e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                }
            }
            e = e || this.options.target, n = n || this.options.classes.to_tag;
            for (var r = this, o = e.querySelectorAll("." + n), s = 0, a = o.length; a > s; s++) {
                var u = o[s];
                u.classList.contains(this.options.classes.tagged) || (u.onclick = i, u.classList.add(this.options.classes.tagged))
            }
            return this
        },
        send: function (t) {
            var e = [],
                n = !1;
            return "object" != typeof t ? (this.options.logs.warnings && console.warn("tag wrong datas"), !1) : t.unique && -1 !== this.unique_sent.indexOf(t.unique) ? (this.options.logs.warnings && console.warn("tag prevent : " + t.unique), !1) : (this.options.send && ("undefined" != typeof t.category ? (e.push(t.category), "undefined" != typeof t.action ? (e.push(t.action), "undefined" != typeof t.label && (e.push(t.label), "undefined" != typeof t.value && e.push(t.value)), "undefined" != typeof _gaq ? (_gaq.push(["_trackEvent"].concat(e)), n = !0) : "undefined" != typeof ga ? (ga.apply(ga, ["send", "event"].concat(e)), n = !0) : this.options.testing ? n = !0 : this.options.logs.warnings && console.warn("tag _gaq not defined"), this.options.logs.send && console.log("tag", e)) : this.options.logs.warnings && console.warn("tag missing action")) : this.options.logs.warnings && console.warn("tag missing category")), n && (t.unique && this.unique_sent.push(t.unique), this.trigger("send", [e])), this)
        }
    }), i.Tools.Keyboard = i.Core.Event_Emitter.extend({
        "static": "keyboard",
        options: {},
        keycode_names: {
            91: "cmd",
            17: "ctrl",
            32: "space",
            16: "shift",
            18: "alt",
            20: "caps",
            9: "tab",
            13: "enter",
            8: "backspace",
            38: "up",
            39: "right",
            40: "down",
            37: "left",
            27: "esc"
        },
        construct: function (t) {
            this._super(t), this.downs = [], this.listen_to_events()
        },
        listen_to_events: function () {
            function n(e) {
                var n = r.keycode_to_character(e.keyCode); - 1 === r.downs.indexOf(n) && r.downs.push(n), r.trigger("down", [e.keyCode, n]) === !1 && (e = e || t.event, e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            }

            function i(t) {
                var e = r.keycode_to_character(t.keyCode); - 1 !== r.downs.indexOf(e) && r.downs.splice(r.downs.indexOf(e), 1), r.trigger("up", [t.keyCode, e])
            }
            var r = this;
            return e.addEventListener ? (e.addEventListener("keydown", n, !1), e.addEventListener("keyup", i, !1)) : (e.attachEvent("onkeydown", n, !1), e.attachEvent("onkeyup", i, !1)), this
        },
        keycode_to_character: function (t) {
            var e = this.keycode_names[t];
            return e || (e = String.fromCharCode(t).toLowerCase()), e
        },
        are_down: function (t) {
            for (var e = !0, n = 0; n < t.length; n++) {
                var i = t[n];
                "number" == typeof i && (i = this.keycode_to_character(i)), -1 === this.downs.indexOf(i) && (e = !1)
            }
            return e
        },
        is_down: function (t) {
            return this.are_down([t])
        }
    }), i.Tools.KonamiCode = i.Tools.Konami_Code = i.Core.Event_Emitter.extend({
        "static": "konami_code",
        options: {
            reset_duration: 1e3,
            sequence: ["up", "up", "down", "down", "left", "right", "left", "right", "b", "a"]
        },
        construct: function (t) {
            this._super(t), this.index = 0, this.timeout = null, this.keyboard = new i.Tools.Keyboard, this.listen_to_events()
        },
        listen_to_events: function () {
            var e = this;
            this.keyboard.on("down", function (n, i) {
                e.timeout && t.clearTimeout(e.timeout), i === e.options.sequence[e.index] ? (e.index++, e.timeout = t.setTimeout(function () {
                    e.trigger("timeout", [e.index]), e.index = 0
                }, e.options.reset_duration)) : (e.index && e.trigger("wrong", [e.index]), e.index = 0), e.index >= e.options.sequence.length && (e.trigger("used"), e.index = 0, t.clearTimeout(e.timeout))
            })
        }
    }), i.Tools.Mouse = i.Core.Event_Emitter.extend({
        "static": "mouse",
        options: {},
        construct: function (t) {
            this._super(t), this.viewport = new i.Tools.Viewport, this.down = !1, this.position = {}, this.position.x = 0, this.position.y = 0, this.position.ratio = {}, this.position.ratio.x = 0, this.position.ratio.y = 0, this.wheel = {}, this.wheel.delta = 0, this.listen_to_events()
        },
        listen_to_events: function () {
            function t(t) {
                o.down = !0, o.trigger("down", [o.position, t.target]) === !1 && t.preventDefault()
            }

            function n(t) {
                o.down = !1, o.trigger("up", [o.position, t.target])
            }

            function i(t) {
                o.position.x = t.clientX, o.position.y = t.clientY, o.position.ratio.x = o.position.x / o.viewport.width, o.position.ratio.y = o.position.y / o.viewport.height, o.trigger("move", [o.position, t.target])
            }

            function r(t) {
                return o.wheel.delta = t.wheelDeltaY || t.wheelDelta || -t.detail, o.trigger("wheel", [o.wheel]) === !1 ? (t.preventDefault(), !1) : void 0
            }
            var o = this;
            return e.addEventListener ? (e.addEventListener("mousedown", t, !1), e.addEventListener("mouseup", n, !1), e.addEventListener("mousemove", i, !1), e.addEventListener("mousewheel", r, !1), e.addEventListener("DOMMouseScroll", r, !1)) : (e.attachEvent("onmousedown", t, !1), e.attachEvent("onmouseup", n, !1), e.attachEvent("onmousemove", i, !1), e.attachEvent("onmousewheel", r, !1)), this
        }
    }), i.Tools.Offline = i.Core.Event_Emitter.extend({
        "static": "offline",
        options: {
            classes: {
                active: !0,
                target: e.body,
                offline: "offline",
                online: "online"
            }
        },
        construct: function (t) {
            this._super(t), this.status = null, this.listen_to_events()
        },
        listen_to_events: function () {
            function n() {
                navigator.onLine ? (i.options.classes.active && (i.options.classes.target.classList.remove(i.options.classes.offline), i.options.classes.target.classList.add(i.options.classes.online)), i.status = "online", i.trigger("online"), i.trigger("change", [i.status])) : (i.options.classes.active && (i.options.classes.target.classList.remove(i.options.classes.online), i.options.classes.target.classList.add(i.options.classes.offline)), i.status = "online", i.trigger("offline"), i.trigger("change", [i.status]))
            }
            var i = this;
            return t.addEventListener ? (t.addEventListener("online", n, !1), t.addEventListener("offline", n, !1)) : (e.body.ononline = n, e.body.onoffline = n), n(), this
        }
    }), i.Tools.Registry = i.Core.Event_Emitter.extend({
        "static": "registry",
        options: {},
        construct: function (t) {
            this._super(t), this.items = {}
        },
        get: function (t, e) {
            return "undefined" != typeof this.items[t] ? this.items[t] : "function" == typeof e ? e.apply(this) : n
        },
        set: function (t, e) {
            return this.items[t] = e, this.trigger("update", [t, e]), e
        }
    }), i.Tools.Resizer = i.Core.Abstract.extend({
        "static": "resizer",
        options: {
            force_style: !0,
            parse: !0,
            target: e.body,
            auto_resize: !0,
            classes: {
                to_resize: "b-resize",
                content: "b-content"
            }
        },
        construct: function (t) {
            this._super(t), this.elements = [], this.options.parse && this.parse(), this.options.auto_resize && this.init_auto_resize()
        },
        init_auto_resize: function () {
            var t = this;
            return this.viewport = new i.Tools.Viewport, this.viewport.on("resize", function () {
                t.resize_all()
            }), this
        },
        parse: function (t, e) {
            t = t || this.options.target, e = e || this.options.classes.to_resize, this.elements = [];
            for (var n = t.querySelectorAll("." + e), i = 0, r = n.length; r > i; i++) {
                var o = n[i],
                    s = o.querySelector("." + this.options.classes.content);
                s && this.elements.push({
                    container: o,
                    content: s
                })
            }
            return this
        },
        resize_all: function () {
            for (var t = 0, e = this.elements.length; e > t; t++) {
                var n = this.elements[t];
                this.resize(n.container, n.content)
            }
            return this
        },
        resize: function (e, n, i) {
            var r = [];
            if (e instanceof HTMLElement || r.push("wrong container parameter"), n instanceof HTMLElement || r.push("wrong content parameter"), r.length) {
                for (var o = 0; o < r.length; o++) console.warn(r[o]);
                return !1
            }
            var s = {};
            s.container_width = e.getAttribute("data-width") || e.getAttribute("width") || e.offsetWidth, s.container_height = e.getAttribute("data-height") || e.getAttribute("height") || e.offsetHeight, s.content_width = n.getAttribute("data-width") || n.getAttribute("width") || n.offsetWidth, s.content_height = n.getAttribute("data-height") || n.getAttribute("height") || n.offsetHeight, s.fit_type = n.getAttribute("data-fit-type"), s.align_x = n.getAttribute("data-align-x"), s.align_y = n.getAttribute("data-align-y"), s.rounding = n.getAttribute("data-rounding");
            var a = this.get_sizes(s);
            if (!a) return !1;
            if (i = "undefined" == typeof i ? this.options.force_style : i) {
                var u = t.getComputedStyle(e),
                    c = t.getComputedStyle(n);
                "fixed" !== u.position && "relative" !== u.position && "absolute" !== u.position && (e.style.position = "relative"), "fixed" !== c.position && "relative" !== c.position && "absolute" !== c.position && (n.style.position = "absolute"), "hidden" !== u.overflow && (e.style.overflow = "hidden")
            }
            return n.style.top = a.css.top, n.style.left = a.css.left, n.style.width = a.css.width, n.style.height = a.css.height, this
        },
        get_sizes: function (t, e) {
            var n = [];
            if (("undefined" == typeof t.content_width || 0 === parseInt(t.content_width, 10)) && n.push("content width must be specified"), ("undefined" == typeof t.content_height || 0 === parseInt(t.content_height, 10)) && n.push("content height must be specified"), ("undefined" == typeof t.container_width || 0 === parseInt(t.container_width, 10)) && n.push("container width must be specified"), ("undefined" == typeof t.container_height || 0 === parseInt(t.container_height, 10)) && n.push("container height must be specified"), n.length) return !1;
            "undefined" == typeof e && (e = "both"), t.fit_type = t.fit_type || "fill", t.align_x = t.align_x || "center", t.align_y = t.align_y || "center", t.rounding = t.rounding || "ceil";
            var i = t.content_width / t.content_height,
                r = t.container_width / t.container_height,
                o = 0,
                s = 0,
                a = 0,
                u = 0,
                c = null;
            t.fit_type = t.fit_type.toLowerCase(), t.align_x = t.align_x.toLowerCase(), t.align_y = t.align_y.toLowerCase(), t.rounding = t.rounding.toLowerCase(), ("undefined" == typeof t.align_x || -1 === ["left", "center", "middle", "right"].indexOf(t.align_x)) && (t.align_x = "center"), ("undefined" == typeof t.align_y || -1 === ["top", "center", "middle", "bottom"].indexOf(t.align_y)) && (t.align_y = "center");
            var l = function () {
                    switch (o = t.container_width, s = t.container_width / t.content_width * t.content_height, a = 0, c = "width", t.align_y) {
                    case "top":
                        u = 0;
                        break;
                    case "middle":
                    case "center":
                        u = (t.container_height - s) / 2;
                        break;
                    case "bottom":
                        u = t.container_height - s
                    }
                },
                h = function () {
                    switch (s = t.container_height, o = t.container_height / t.content_height * t.content_width, u = 0, c = "height", t.align_x) {
                    case "left":
                        a = 0;
                        break;
                    case "middle":
                    case "center":
                        a = (t.container_width - o) / 2;
                        break;
                    case "right":
                        a = t.container_width - o
                    }
                }; - 1 !== ["fill", "full", "cover"].indexOf(t.fit_type) ? r > i ? l() : h() : -1 !== ["fit", "i sits", "contain"].indexOf(t.fit_type) && (r > i ? h() : l()), -1 !== ["ceil", "floor", "round"].indexOf(t.rounding) && (o = Math[t.rounding].call(this, o), s = Math[t.rounding].call(this, s), a = Math[t.rounding].call(this, a), u = Math[t.rounding].call(this, u));
            var p = {};
            return p.cartesian = {}, p.cartesian.width = o, p.cartesian.height = s, p.cartesian.x = a, p.cartesian.y = u, p.css = {}, p.css.width = o + "px", p.css.height = s + "px", p.css.left = a + "px", p.css.top = u + "px", p.fit_in = c, "both" === e ? p : "cartesian" === e ? p.cartesian : "css" === e ? p.css : void 0
        }
    }), i.Tools.Strings = i.Core.Abstract.extend({
        "static": "strings",
        options: {},
        cases: {
            camel: ["camel", "camelback", "compoundnames"],
            pascal: ["pascal", "uppercamelcase", "bumpycaps", "camelcaps", "capitalizedwords", "capwords"],
            snake: ["snake", "underscore", "plissken"],
            titlesnake: ["titlesnake", "capitalsnake"],
            screamingsnake: ["screamingsnake", "uppersnake"],
            dash: ["dash", "dashed", "hyphen", "kebab", "spinal"],
            train: ["train"],
            space: ["space"],
            title: ["title"],
            dot: ["dot"],
            slash: ["slash", "forwardslash", "path"],
            backslash: ["backslash", "hack", "whack", "escape", "reverseslash", "slosh", "backslant", "downhill", "backwhack"],
            lower: ["lower"],
            upper: ["upper"],
            studlycaps: ["studlycaps"],
            burno: ["burno", "lol", "yolo"]
        },
        negatives: ["0", "false", "nop", ":(", "nee", "jo", "naï", "laa", "votch", "xeyir", "ez", "hе nie", "nie", "na", "aïlle", "ne", "nann", "né", "ma hoke phu", "hmar te", "no", "tla", "hla", "pù shi", "nò", "nej", "ei", "nei", "non", "nanni", "ara", "nein", "ohi", "nahániri", "ʻaole", "aole", "lo", "nahin", "nem", "mba", "tidak", "iié", "ala", "thay", "oya", "ahneo", "na", "bo", "minime", "nē", "te", "neen", "не", "he", "tsia", "le", "kaore", "ugui", "yгvй", "nennin", "nenn", "нæй", "kheyr", "nie", "não", "nu", "нет", "niet", "ag", "aiwa", "nae", "aï", "siyo", "hapana", "hindi", "po", "aita", "lla", "illaï", "yuk", "kadhu", "ไม่", "maï", "hayir", "oevoel", "ug", "ні", "ni", "نهين", "neni", "nage", "awa", "déedéet", "rara", "cha"],
        convert_case: function (t, e) {
            t = this.trim(t), e = e.toLowerCase(), e = e.replace(/[^[a-z]]*/g, ""), e = e.replace(/case/g, "");
            var n = null;
            for (var i in this.cases)
                for (var r in this.cases[i]) {
                    var o = this.cases[i][r];
                    o === e && (n = o)
                }
            if (!n) return t;
            t = t.replace(/([a-z])([A-Z])/g, "$1-$2"), t = t.toLowerCase();
            var s = t.split(/[-_ .\/\\]/g),
                a = null,
                u = null,
                c = null;
            switch (n) {
            case "camel":
                for (u = 0, c = s.length; c > u; u++) 0 !== u && (s[u] = s[u].charAt(0).toUpperCase() + s[u].slice(1));
                a = s.join("");
                break;
            case "pascal":
                for (u = 0, c = s.length; c > u; u++) s[u] = s[u].charAt(0).toUpperCase() + s[u].slice(1);
                a = s.join("");
                break;
            case "snake":
                a = s.join("_");
                break;
            case "titlesnake":
                for (u = 0, c = s.length; c > u; u++) s[u] = s[u].charAt(0).toUpperCase() + s[u].slice(1);
                a = s.join("_");
                break;
            case "screamingsnake":
                a = s.join("_"), a = a.toUpperCase();
                break;
            case "dash":
                a = s.join("-");
                break;
            case "train":
                for (u = 0, c = s.length; c > u; u++) s[u] = s[u].charAt(0).toUpperCase() + s[u].slice(1);
                a = s.join("-");
                break;
            case "space":
                a = s.join(" ");
                break;
            case "title":
                for (u = 0, c = s.length; c > u; u++) s[u] = s[u].charAt(0).toUpperCase() + s[u].slice(1);
                a = s.join(" ");
                break;
            case "dot":
                a = s.join(".");
                break;
            case "slash":
                a = s.join("/");
                break;
            case "backslash":
                a = s.join("\\");
                break;
            case "lower":
                a = s.join("");
                break;
            case "upper":
                a = s.join(""), a = a.toUpperCase();
                break;
            case "studlycaps":
                for (a = s.join(""), u = 0, c = a.length; c > u; u++) Math.random() > .5 && (a = a.substr(0, u) + a[u].toUpperCase() + a.substr(u + 1));
                break;
            case "burno":
                for (u = 0, c = s.length; c > u; u++) s[u] = "burno";
                a = s.join(" ")
            }
            return a
        },
        to_boolean: function (t) {
            return "undefined" == typeof t || null === t ? !1 : (t = "" + t, t = this.trim(t), t = t.toLowerCase(), -1 === this.negatives.indexOf(t))
        },
        trim: function (t, e) {
            return "undefined" == typeof e ? t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") : (t = t.replace(new RegExp("^[" + e + "]+"), ""), t = t.replace(new RegExp("[" + e + "]+$"), ""))
        },
        to_slug: function (t) {
            t = this.trim(t), t = t.toLowerCase();
            for (var e = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/,:;", n = "aaaaaeeeeeiiiiooooouuuunc-----", i = 0, r = e.length; r > i; i++) t = t.replace(new RegExp(e.charAt(i), "g"), n.charAt(i));
            return t = t.replace(/[^a-z0-9 _-]/g, ""), t = t.replace(/\s+/g, "-"), t = t.replace(/-+/g, "-"), t = this.trim(t, "-")
        },
        slugify: function (t) {
            return this.to_slug(t)
        }
    }), i.Tools.Ticker = i.Core.Event_Emitter.extend({
        "static": "ticker",
        options: {
            auto_run: !0
        },
        construct: function (t) {
            this._super(t), this.reseted = !1, this.running = !1, this.time = {}, this.time.start = 0, this.time.elapsed = 0, this.time.delta = 0, this.time.current = 0, this.waits = {}, this.waits.before = [], this.waits.after = [], this.intervals = {}, this.options.auto_run && this.run()
        },
        reset: function (t) {
            return this.reseted = !0, this.time.start = +new Date, this.time.current = this.time.start, this.time.elapsed = 0, this.time.delta = 0, t && this.run(), this
        },
        run: function () {
            var e = this;
            if (!this.running) {
                this.running = !0;
                var n = function () {
                    e.running && t.requestAnimationFrame(n), e.tick()
                };
                return n(), this
            }
        },
        stop: function () {
            return this.running = !1, this
        },
        tick: function () {
            this.reseted || this.reset(), this.time.current = +new Date, this.time.delta = this.time.current - this.time.start - this.time.elapsed, this.time.elapsed = this.time.current - this.time.start;
            for (var t = 0, e = this.waits.before.length, n = null; e > t; t++) n = this.waits.before[t], 0 === --n.frames_count && (n.action.apply(this, [this.time]), this.waits.before.splice(t, 1), t--, e--);
            for (this.trigger("tick", [this.time]), this.trigger_intervals(), t = 0, e = this.waits.after.length; e > t; t++) n = this.waits.after[t], 0 === --n.frames_count && (n.action.apply(this, [this.time]), this.waits.after.splice(t, 1), t--, e--);
            return this
        },
        wait: function (t, e, n) {
            return "function" != typeof e ? !1 : "number" != typeof t ? !1 : (this.waits[n ? "after" : "before"].push({
                frames_count: t,
                action: e
            }), this)
        },
        create_interval: function (t) {
            return this.intervals[t] = {
                interval: t,
                next_trigger: t,
                start: this.time.elapsed,
                last_trigger: this.time.elapsed
            }, this
        },
        destroy_interval: function (t) {
            return delete this.intervals[t], this
        },
        trigger_intervals: function () {
            for (var t in this.intervals) {
                var e = this.intervals[t];
                this.time.elapsed - e.last_trigger > e.next_trigger && (e.next_trigger = e.interval - (this.time.elapsed - e.start) % e.interval, e.last_trigger = this.time.elapsed, this.trigger("tick-" + e.interval, [this.time, e]))
            }
            return this
        },
        on: function (t, e) {
            var n = this,
                i = this.resolve_names(t);
            return i.forEach(function (t) {
                if (t.match(/^tick([0-9]+)$/)) {
                    var e = parseInt(t.replace(/^tick([0-9]+)$/, "$1"));
                    e && n.create_interval(e)
                }
            }), this._super(t, e)
        },
        off: function (t) {
            var e = this,
                n = this.resolve_names(t);
            return n.forEach(function (t) {
                if (t.match(/^tick([0-9]+)$/)) {
                    var n = parseInt(t.replace(/^tick([0-9]+)$/, "$1"));
                    n && e.destroy_interval(n)
                }
            }), this._super(t)
        }
    }), i.Tools.Viewport = i.Core.Event_Emitter.extend({
        "static": "viewport",
        options: {
            disable_hover_on_scroll: !1,
            initial_triggers: ["resize", "scroll"]
        },
        construct: function (n) {
            this._super(n), this.ticker = new i.Tools.Ticker, this.detector = new i.Tools.Detector, this.top = 0, this.left = 0, this.y = 0, this.x = 0, this.scroll = {}, this.scroll.delta = {}, this.scroll.delta.top = 0, this.scroll.delta.left = 0, this.scroll.delta.y = 0, this.scroll.delta.x = 0, this.scroll.direction = {}, this.scroll.direction.x = null, this.scroll.direction.y = null, this.width = t.innerWidth || e.documentElement.clientWidth || e.body.clientWidth, this.height = t.innerHeight || e.documentElement.clientHeight || e.body.clientHeight, this.pixel_ratio = t.devicePixelRatio || 1, this.init_disabling_hover_on_scroll(), this.init_events()
        },
        init_events: function () {
            function e() {
                i.resize_handler()
            }

            function n() {
                i.scroll_handler()
            }
            var i = this;
            return t.addEventListener ? (t.addEventListener("resize", e), t.addEventListener("scroll", n)) : (t.attachEvent("onresize", e), t.attachEvent("onscroll", n)), this.options.initial_triggers.length && this.ticker.wait(1, function () {
                for (var t = 0; t < i.options.initial_triggers.length; t++) {
                    var e = i.options.initial_triggers[t],
                        n = i[e + "_handler"];
                    "function" == typeof n && n.apply(i)
                }
            }), this
        },
        resize_handler: function () {
            return this.width = t.innerWidth || e.documentElement.clientWidth || e.body.clientWidth, this.height = t.innerHeight || e.documentElement.clientHeight || e.body.clientHeight, this.trigger("resize", [this.width, this.height]), this
        },
        scroll_handler: function () {
            var e = "undefined" != typeof t.pageYOffset ? t.pageYOffset : t.document.documentElement.scrollTop,
                n = "undefined" != typeof t.pageXOffset ? t.pageXOffset : t.document.documentElement.scrollLeft;
            return this.scroll.direction.y = e > this.top ? "down" : "up", this.scroll.direction.x = n > this.left ? "right" : "left", this.scroll.delta.top = e - this.top, this.scroll.delta.left = n - this.left, this.top = e, this.left = n, this.y = this.top, this.x = this.left, this.scroll.delta.y = this.scroll.delta.top, this.scroll.delta.x = this.scroll.delta.left, this.trigger("scroll", [this.top, this.left, this.scroll]), this
        },
        init_disabling_hover_on_scroll: function () {
            var n = this,
                i = null,
                r = !1;
            return this.on("scroll", function () {
                n.options.disable_hover_on_scroll && (i && t.clearTimeout(i), r || (r = !0, e.body.style.pointerEvents = "none"), i = t.setTimeout(function () {
                    r = !1, e.body.style.pointerEvents = "auto"
                }, 60))
            }), this
        },
        match_media: function (e) {
            return this.detector.features.media_query && "string" == typeof e && "" !== e ? !!t.matchMedia(e).matches : !1
        }
    }), "function" == typeof define && define.amd ? define(function () {
        return i
    }) : "object" == typeof module && module.exports ? module.exports = i : t.Burno = t.B = i
}(window, document),
function (t) {
    "use strict";
    if ("function" == typeof bootstrap) bootstrap("promise", t);
    else if ("object" == typeof exports && "object" == typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define(t);
    else if ("undefined" != typeof ses) {
        if (!ses.ok()) return;
        ses.makeQ = t
    } else {
        if ("undefined" == typeof self) throw new Error("This environment was not anticiapted by Q. Please file a bug.");
        self.Q = t()
    }
}(function () {
    "use strict";

    function t(t) {
        return function () {
            return V.apply(t, arguments)
        }
    }

    function e(t) {
        return t === Object(t)
    }

    function n(t) {
        return "[object StopIteration]" === ee(t) || t instanceof z
    }

    function i(t, e) {
        if (q && e.stack && "object" == typeof t && null !== t && t.stack && -1 === t.stack.indexOf(ne)) {
            for (var n = [], i = e; i; i = i.source) i.stack && n.unshift(i.stack);
            n.unshift(t.stack);
            var o = n.join("\n" + ne + "\n");
            t.stack = r(o)
        }
    }

    function r(t) {
        for (var e = t.split("\n"), n = [], i = 0; i < e.length; ++i) {
            var r = e[i];
            a(r) || o(r) || !r || n.push(r)
        }
        return n.join("\n")
    }

    function o(t) {
        return -1 !== t.indexOf("(module.js:") || -1 !== t.indexOf("(node.js:")
    }

    function s(t) {
        var e = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t);
        if (e) return [e[1], Number(e[2])];
        var n = /at ([^ ]+):(\d+):(?:\d+)$/.exec(t);
        if (n) return [n[1], Number(n[2])];
        var i = /.*@(.+):(\d+)$/.exec(t);
        return i ? [i[1], Number(i[2])] : void 0
    }

    function a(t) {
        var e = s(t);
        if (!e) return !1;
        var n = e[0],
            i = e[1];
        return n === H && i >= W && se >= i
    }

    function u() {
        if (q) try {
            throw new Error
        } catch (t) {
            var e = t.stack.split("\n"),
                n = e[0].indexOf("@") > 0 ? e[1] : e[2],
                i = s(n);
            if (!i) return;
            return H = i[0], i[1]
        }
    }

    function c(t, e, n) {
        return function () {
            return "undefined" != typeof console && "function" == typeof console.warn && console.warn(e + " is deprecated, use " + n + " instead.", new Error("").stack), t.apply(t, arguments)
        }
    }

    function l(t) {
        return t instanceof d ? t : y(t) ? A(t) : E(t)
    }

    function h() {
        function t(t) {
            e = t, o.source = t, Y(n, function (e, n) {
                l.nextTick(function () {
                    t.promiseDispatch.apply(t, n)
                })
            }, void 0), n = void 0, i = void 0
        }
        var e, n = [],
            i = [],
            r = J(h.prototype),
            o = J(d.prototype);
        if (o.promiseDispatch = function (t, r, o) {
                var s = Q(arguments);
                n ? (n.push(s), "when" === r && o[1] && i.push(o[1])) : l.nextTick(function () {
                    e.promiseDispatch.apply(e, s)
                })
            }, o.valueOf = function () {
                if (n) return o;
                var t = g(e);
                return v(t) && (e = t), t
            }, o.inspect = function () {
                return e ? e.inspect() : {
                    state: "pending"
                }
            }, l.longStackSupport && q) try {
            throw new Error
        } catch (s) {
            o.stack = s.stack.substring(s.stack.indexOf("\n") + 1)
        }
        return r.promise = o, r.resolve = function (n) {
            e || t(l(n))
        }, r.fulfill = function (n) {
            e || t(E(n))
        }, r.reject = function (n) {
            e || t(C(n))
        }, r.notify = function (t) {
            e || Y(i, function (e, n) {
                l.nextTick(function () {
                    n(t)
                })
            }, void 0)
        }, r
    }

    function p(t) {
        if ("function" != typeof t) throw new TypeError("resolver must be a function.");
        var e = h();
        try {
            t(e.resolve, e.reject, e.notify)
        } catch (n) {
            e.reject(n)
        }
        return e.promise
    }

    function f(t) {
        return p(function (e, n) {
            for (var i = 0, r = t.length; r > i; i++) l(t[i]).then(e, n)
        })
    }

    function d(t, e, n) {
        void 0 === e && (e = function (t) {
            return C(new Error("Promise does not support operation: " + t))
        }), void 0 === n && (n = function () {
            return {
                state: "unknown"
            }
        });
        var i = J(d.prototype);
        if (i.promiseDispatch = function (n, r, o) {
                var s;
                try {
                    s = t[r] ? t[r].apply(i, o) : e.call(i, r, o)
                } catch (a) {
                    s = C(a)
                }
                n && n(s)
            }, i.inspect = n, n) {
            var r = n();
            "rejected" === r.state && (i.exception = r.reason), i.valueOf = function () {
                var t = n();
                return "pending" === t.state || "rejected" === t.state ? i : t.value
            }
        }
        return i
    }

    function m(t, e, n, i) {
        return l(t).then(e, n, i)
    }

    function g(t) {
        if (v(t)) {
            var e = t.inspect();
            if ("fulfilled" === e.state) return e.value
        }
        return t
    }

    function v(t) {
        return t instanceof d
    }

    function y(t) {
        return e(t) && "function" == typeof t.then
    }

    function _(t) {
        return v(t) && "pending" === t.inspect().state
    }

    function w(t) {
        return !v(t) || "fulfilled" === t.inspect().state
    }

    function b(t) {
        return v(t) && "rejected" === t.inspect().state
    }

    function x() {
        ie.length = 0, re.length = 0, oe || (oe = !0)
    }

    function k(t, e) {
        oe && (re.push(t), ie.push(e && "undefined" != typeof e.stack ? e.stack : "(no stack) " + e))
    }

    function T(t) {
        if (oe) {
            var e = G(re, t); - 1 !== e && (re.splice(e, 1), ie.splice(e, 1))
        }
    }

    function C(t) {
        var e = d({
            when: function (e) {
                return e && T(this), e ? e(t) : this
            }
        }, function () {
            return this
        }, function () {
            return {
                state: "rejected",
                reason: t
            }
        });
        return k(e, t), e
    }

    function E(t) {
        return d({
            when: function () {
                return t
            },
            get: function (e) {
                return t[e]
            },
            set: function (e, n) {
                t[e] = n
            },
            "delete": function (e) {
                delete t[e]
            },
            post: function (e, n) {
                return null === e || void 0 === e ? t.apply(void 0, n) : t[e].apply(t, n)
            },
            apply: function (e, n) {
                return t.apply(e, n)
            },
            keys: function () {
                return te(t)
            }
        }, void 0, function () {
            return {
                state: "fulfilled",
                value: t
            }
        })
    }

    function A(t) {
        var e = h();
        return l.nextTick(function () {
            try {
                t.then(e.resolve, e.reject, e.notify)
            } catch (n) {
                e.reject(n)
            }
        }), e.promise
    }

    function S(t) {
        return d({
            isDef: function () {}
        }, function (e, n) {
            return N(t, e, n)
        }, function () {
            return l(t).inspect()
        })
    }

    function F(t, e, n) {
        return l(t).spread(e, n)
    }

    function j(t) {
        return function () {
            function e(t, e) {
                var s;
                if ("undefined" == typeof StopIteration) {
                    try {
                        s = i[t](e)
                    } catch (a) {
                        return C(a)
                    }
                    return s.done ? l(s.value) : m(s.value, r, o)
                }
                try {
                    s = i[t](e)
                } catch (a) {
                    return n(a) ? l(a.value) : C(a)
                }
                return m(s, r, o)
            }
            var i = t.apply(this, arguments),
                r = e.bind(e, "next"),
                o = e.bind(e, "throw");
            return r()
        }
    }

    function D(t) {
        l.done(l.async(t)())
    }

    function P(t) {
        throw new z(t)
    }

    function L(t) {
        return function () {
            return F([this, O(arguments)], function (e, n) {
                return t.apply(e, n)
            })
        }
    }

    function N(t, e, n) {
        return l(t).dispatch(e, n)
    }

    function O(t) {
        return m(t, function (t) {
            var e = 0,
                n = h();
            return Y(t, function (i, r, o) {
                var s;
                v(r) && "fulfilled" === (s = r.inspect()).state ? t[o] = s.value : (++e, m(r, function (i) {
                    t[o] = i, 0 === --e && n.resolve(t)
                }, n.reject, function (t) {
                    n.notify({
                        index: o,
                        value: t
                    })
                }))
            }, void 0), 0 === e && n.resolve(t), n.promise
        })
    }

    function M(t) {
        return m(t, function (t) {
            return t = K(t, l), m(O(K(t, function (t) {
                return m(t, U, U)
            })), function () {
                return t
            })
        })
    }

    function $(t) {
        return l(t).allSettled()
    }

    function R(t, e) {
        return l(t).then(void 0, void 0, e)
    }

    function B(t, e) {
        return l(t).nodeify(e)
    }
    var q = !1;
    try {
        throw new Error
    } catch (I) {
        q = !!I.stack
    }
    var H, z, W = u(),
        U = function () {},
        X = function () {
            function t() {
                for (; e.next;) {
                    e = e.next;
                    var n = e.task;
                    e.task = void 0;
                    var r = e.domain;
                    r && (e.domain = void 0, r.enter());
                    try {
                        n()
                    } catch (s) {
                        if (o) throw r && r.exit(), setTimeout(t, 0), r && r.enter(), s;
                        setTimeout(function () {
                            throw s
                        }, 0)
                    }
                    r && r.exit()
                }
                i = !1
            }
            var e = {
                    task: void 0,
                    next: null
                },
                n = e,
                i = !1,
                r = void 0,
                o = !1;
            if (X = function (t) {
                    n = n.next = {
                        task: t,
                        domain: o && process.domain,
                        next: null
                    }, i || (i = !0, r())
                }, "undefined" != typeof process && process.nextTick) o = !0, r = function () {
                process.nextTick(t)
            };
            else if ("function" == typeof setImmediate) r = "undefined" != typeof window ? setImmediate.bind(window, t) : function () {
                setImmediate(t)
            };
            else if ("undefined" != typeof MessageChannel) {
                var s = new MessageChannel;
                s.port1.onmessage = function () {
                    r = a, s.port1.onmessage = t, t()
                };
                var a = function () {
                    s.port2.postMessage(0)
                };
                r = function () {
                    setTimeout(t, 0), a()
                }
            } else r = function () {
                setTimeout(t, 0)
            };
            return X
        }(),
        V = Function.call,
        Q = t(Array.prototype.slice),
        Y = t(Array.prototype.reduce || function (t, e) {
            var n = 0,
                i = this.length;
            if (1 === arguments.length)
                for (;;) {
                    if (n in this) {
                        e = this[n++];
                        break
                    }
                    if (++n >= i) throw new TypeError
                }
            for (; i > n; n++) n in this && (e = t(e, this[n], n));
            return e
        }),
        G = t(Array.prototype.indexOf || function (t) {
            for (var e = 0; e < this.length; e++)
                if (this[e] === t) return e;
            return -1
        }),
        K = t(Array.prototype.map || function (t, e) {
            var n = this,
                i = [];
            return Y(n, function (r, o, s) {
                i.push(t.call(e, o, s, n))
            }, void 0), i
        }),
        J = Object.create || function (t) {
            function e() {}
            return e.prototype = t, new e
        },
        Z = t(Object.prototype.hasOwnProperty),
        te = Object.keys || function (t) {
            var e = [];
            for (var n in t) Z(t, n) && e.push(n);
            return e
        },
        ee = t(Object.prototype.toString);
    z = "undefined" != typeof ReturnValue ? ReturnValue : function (t) {
        this.value = t
    };
    var ne = "From previous event:";
    l.resolve = l, l.nextTick = X, l.longStackSupport = !1, "object" == typeof process && process && process.env && process.env.Q_DEBUG && (l.longStackSupport = !0), l.defer = h, h.prototype.makeNodeResolver = function () {
        var t = this;
        return function (e, n) {
            e ? t.reject(e) : t.resolve(arguments.length > 2 ? Q(arguments, 1) : n)
        }
    }, l.Promise = p, l.promise = p, p.race = f, p.all = O, p.reject = C, p.resolve = l, l.passByCopy = function (t) {
        return t
    }, d.prototype.passByCopy = function () {
        return this
    }, l.join = function (t, e) {
        return l(t).join(e)
    }, d.prototype.join = function (t) {
        return l([this, t]).spread(function (t, e) {
            if (t === e) return t;
            throw new Error("Can't join: not the same: " + t + " " + e)
        })
    }, l.race = f, d.prototype.race = function () {
        return this.then(l.race)
    }, l.makePromise = d, d.prototype.toString = function () {
        return "[object Promise]"
    }, d.prototype.then = function (t, e, n) {
        function r(e) {
            try {
                return "function" == typeof t ? t(e) : e
            } catch (n) {
                return C(n)
            }
        }

        function o(t) {
            if ("function" == typeof e) {
                i(t, a);
                try {
                    return e(t)
                } catch (n) {
                    return C(n)
                }
            }
            return C(t)
        }

        function s(t) {
            return "function" == typeof n ? n(t) : t
        }
        var a = this,
            u = h(),
            c = !1;
        return l.nextTick(function () {
            a.promiseDispatch(function (t) {
                c || (c = !0, u.resolve(r(t)))
            }, "when", [function (t) {
                c || (c = !0, u.resolve(o(t)))
            }])
        }), a.promiseDispatch(void 0, "when", [void 0, function (t) {
            var e, n = !1;
            try {
                e = s(t)
            } catch (i) {
                if (n = !0, !l.onerror) throw i;
                l.onerror(i)
            }
            n || u.notify(e)
        }]), u.promise
    }, l.tap = function (t, e) {
        return l(t).tap(e)
    }, d.prototype.tap = function (t) {
        return t = l(t), this.then(function (e) {
            return t.fcall(e).thenResolve(e)
        })
    }, l.when = m, d.prototype.thenResolve = function (t) {
        return this.then(function () {
            return t
        })
    }, l.thenResolve = function (t, e) {
        return l(t).thenResolve(e)
    }, d.prototype.thenReject = function (t) {
        return this.then(function () {
            throw t
        })
    }, l.thenReject = function (t, e) {
        return l(t).thenReject(e)
    }, l.nearer = g, l.isPromise = v, l.isPromiseAlike = y, l.isPending = _, d.prototype.isPending = function () {
        return "pending" === this.inspect().state
    }, l.isFulfilled = w, d.prototype.isFulfilled = function () {
        return "fulfilled" === this.inspect().state
    }, l.isRejected = b, d.prototype.isRejected = function () {
        return "rejected" === this.inspect().state
    };
    var ie = [],
        re = [],
        oe = !0;
    l.resetUnhandledRejections = x, l.getUnhandledReasons = function () {
        return ie.slice()
    }, l.stopUnhandledRejectionTracking = function () {
        x(), oe = !1
    }, x(), l.reject = C, l.fulfill = E, l.master = S, l.spread = F, d.prototype.spread = function (t, e) {
        return this.all().then(function (e) {
            return t.apply(void 0, e)
        }, e)
    }, l.async = j, l.spawn = D, l["return"] = P, l.promised = L, l.dispatch = N, d.prototype.dispatch = function (t, e) {
        var n = this,
            i = h();
        return l.nextTick(function () {
            n.promiseDispatch(i.resolve, t, e)
        }), i.promise
    }, l.get = function (t, e) {
        return l(t).dispatch("get", [e])
    }, d.prototype.get = function (t) {
        return this.dispatch("get", [t])
    }, l.set = function (t, e, n) {
        return l(t).dispatch("set", [e, n])
    }, d.prototype.set = function (t, e) {
        return this.dispatch("set", [t, e])
    }, l.del = l["delete"] = function (t, e) {
        return l(t).dispatch("delete", [e])
    }, d.prototype.del = d.prototype["delete"] = function (t) {
        return this.dispatch("delete", [t])
    }, l.mapply = l.post = function (t, e, n) {
        return l(t).dispatch("post", [e, n])
    }, d.prototype.mapply = d.prototype.post = function (t, e) {
        return this.dispatch("post", [t, e])
    }, l.send = l.mcall = l.invoke = function (t, e) {
        return l(t).dispatch("post", [e, Q(arguments, 2)])
    }, d.prototype.send = d.prototype.mcall = d.prototype.invoke = function (t) {
        return this.dispatch("post", [t, Q(arguments, 1)])
    }, l.fapply = function (t, e) {
        return l(t).dispatch("apply", [void 0, e])
    }, d.prototype.fapply = function (t) {
        return this.dispatch("apply", [void 0, t])
    }, l["try"] = l.fcall = function (t) {
        return l(t).dispatch("apply", [void 0, Q(arguments, 1)])
    }, d.prototype.fcall = function () {
        return this.dispatch("apply", [void 0, Q(arguments)])
    }, l.fbind = function (t) {
        var e = l(t),
            n = Q(arguments, 1);
        return function () {
            return e.dispatch("apply", [this, n.concat(Q(arguments))])
        }
    }, d.prototype.fbind = function () {
        var t = this,
            e = Q(arguments);
        return function () {
            return t.dispatch("apply", [this, e.concat(Q(arguments))])
        }
    }, l.keys = function (t) {
        return l(t).dispatch("keys", [])
    }, d.prototype.keys = function () {
        return this.dispatch("keys", [])
    }, l.all = O, d.prototype.all = function () {
        return O(this)
    }, l.allResolved = c(M, "allResolved", "allSettled"), d.prototype.allResolved = function () {
        return M(this)
    }, l.allSettled = $, d.prototype.allSettled = function () {
        return this.then(function (t) {
            return O(K(t, function (t) {
                function e() {
                    return t.inspect()
                }
                return t = l(t), t.then(e, e)
            }))
        })
    }, l.fail = l["catch"] = function (t, e) {
        return l(t).then(void 0, e)
    }, d.prototype.fail = d.prototype["catch"] = function (t) {
        return this.then(void 0, t)
    }, l.progress = R, d.prototype.progress = function (t) {
        return this.then(void 0, void 0, t)
    }, l.fin = l["finally"] = function (t, e) {
        return l(t)["finally"](e)
    }, d.prototype.fin = d.prototype["finally"] = function (t) {
        return t = l(t), this.then(function (e) {
            return t.fcall().then(function () {
                return e
            })
        }, function (e) {
            return t.fcall().then(function () {
                throw e
            })
        })
    }, l.done = function (t, e, n, i) {
        return l(t).done(e, n, i)
    }, d.prototype.done = function (t, e, n) {
        var r = function (t) {
                l.nextTick(function () {
                    if (i(t, o), !l.onerror) throw t;
                    l.onerror(t)
                })
            },
            o = t || e || n ? this.then(t, e, n) : this;
        "object" == typeof process && process && process.domain && (r = process.domain.bind(r)), o.then(void 0, r)
    }, l.timeout = function (t, e, n) {
        return l(t).timeout(e, n)
    }, d.prototype.timeout = function (t, e) {
        var n = h(),
            i = setTimeout(function () {
                e && "string" != typeof e || (e = new Error(e || "Timed out after " + t + " ms"), e.code = "ETIMEDOUT"), n.reject(e)
            }, t);
        return this.then(function (t) {
            clearTimeout(i), n.resolve(t)
        }, function (t) {
            clearTimeout(i), n.reject(t)
        }, n.notify), n.promise
    }, l.delay = function (t, e) {
        return void 0 === e && (e = t, t = void 0), l(t).delay(e)
    }, d.prototype.delay = function (t) {
        return this.then(function (e) {
            var n = h();
            return setTimeout(function () {
                n.resolve(e)
            }, t), n.promise
        })
    }, l.nfapply = function (t, e) {
        return l(t).nfapply(e)
    }, d.prototype.nfapply = function (t) {
        var e = h(),
            n = Q(t);
        return n.push(e.makeNodeResolver()), this.fapply(n).fail(e.reject), e.promise
    }, l.nfcall = function (t) {
        var e = Q(arguments, 1);
        return l(t).nfapply(e)
    }, d.prototype.nfcall = function () {
        var t = Q(arguments),
            e = h();
        return t.push(e.makeNodeResolver()), this.fapply(t).fail(e.reject), e.promise
    }, l.nfbind = l.denodeify = function (t) {
        var e = Q(arguments, 1);
        return function () {
            var n = e.concat(Q(arguments)),
                i = h();
            return n.push(i.makeNodeResolver()), l(t).fapply(n).fail(i.reject), i.promise
        }
    }, d.prototype.nfbind = d.prototype.denodeify = function () {
        var t = Q(arguments);
        return t.unshift(this), l.denodeify.apply(void 0, t)
    }, l.nbind = function (t, e) {
        var n = Q(arguments, 2);
        return function () {
            function i() {
                return t.apply(e, arguments)
            }
            var r = n.concat(Q(arguments)),
                o = h();
            return r.push(o.makeNodeResolver()), l(i).fapply(r).fail(o.reject), o.promise
        }
    }, d.prototype.nbind = function () {
        var t = Q(arguments, 0);
        return t.unshift(this), l.nbind.apply(void 0, t)
    }, l.nmapply = l.npost = function (t, e, n) {
        return l(t).npost(e, n)
    }, d.prototype.nmapply = d.prototype.npost = function (t, e) {
        var n = Q(e || []),
            i = h();
        return n.push(i.makeNodeResolver()), this.dispatch("post", [t, n]).fail(i.reject), i.promise
    }, l.nsend = l.nmcall = l.ninvoke = function (t, e) {
        var n = Q(arguments, 2),
            i = h();
        return n.push(i.makeNodeResolver()), l(t).dispatch("post", [e, n]).fail(i.reject), i.promise
    }, d.prototype.nsend = d.prototype.nmcall = d.prototype.ninvoke = function (t) {
        var e = Q(arguments, 1),
            n = h();
        return e.push(n.makeNodeResolver()), this.dispatch("post", [t, e]).fail(n.reject), n.promise
    }, l.nodeify = B, d.prototype.nodeify = function (t) {
        return t ? void this.then(function (e) {
            l.nextTick(function () {
                t(null, e)
            })
        }, function (e) {
            l.nextTick(function () {
                t(e)
            })
        }) : this
    };
    var se = u();
    return l
}),
function () {
    "use strict";

    function t(e, i) {
        function r(t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }
        var o;
        if (i = i || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = i.touchBoundary || 10, this.layer = e, this.tapDelay = i.tapDelay || 200, this.tapTimeout = i.tapTimeout || 700, !t.notNeeded(e)) {
            for (var s = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = this, u = 0, c = s.length; c > u; u++) a[s[u]] = r(a[s[u]], a);
            n && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function (t, n, i) {
                var r = Node.prototype.removeEventListener;
                "click" === t ? r.call(e, t, n.hijacked || n, i) : r.call(e, t, n, i)
            }, e.addEventListener = function (t, n, i) {
                var r = Node.prototype.addEventListener;
                "click" === t ? r.call(e, t, n.hijacked || (n.hijacked = function (t) {
                    t.propagationStopped || n(t)
                }), i) : r.call(e, t, n, i)
            }), "function" == typeof e.onclick && (o = e.onclick, e.addEventListener("click", function (t) {
                o(t)
            }, !1), e.onclick = null)
        }
    }
    var e = navigator.userAgent.indexOf("Windows Phone") >= 0,
        n = navigator.userAgent.indexOf("Android") > 0 && !e,
        i = /iP(ad|hone|od)/.test(navigator.userAgent) && !e,
        r = i && /OS 4_\d(_\d)?/.test(navigator.userAgent),
        o = i && /OS [6-7]_\d/.test(navigator.userAgent),
        s = navigator.userAgent.indexOf("BB10") > 0;
    t.prototype.needsClick = function (t) {
        switch (t.nodeName.toLowerCase()) {
        case "button":
        case "select":
        case "textarea":
            if (t.disabled) return !0;
            break;
        case "input":
            if (i && "file" === t.type || t.disabled) return !0;
            break;
        case "label":
        case "iframe":
        case "video":
            return !0
        }
        return /\bneedsclick\b/.test(t.className)
    }, t.prototype.needsFocus = function (t) {
        switch (t.nodeName.toLowerCase()) {
        case "textarea":
            return !0;
        case "select":
            return !n;
        case "input":
            switch (t.type) {
            case "button":
            case "checkbox":
            case "file":
            case "image":
            case "radio":
            case "submit":
                return !1
            }
            return !t.disabled && !t.readOnly;
        default:
            return /\bneedsfocus\b/.test(t.className)
        }
    }, t.prototype.sendClick = function (t, e) {
        var n, i;
        document.activeElement && document.activeElement !== t && document.activeElement.blur(), i = e.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, t.dispatchEvent(n)
    }, t.prototype.determineEventType = function (t) {
        return n && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
    }, t.prototype.focus = function (t) {
        var e;
        i && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
    }, t.prototype.updateScrollParent = function (t) {
        var e, n;
        if (e = t.fastClickScrollParent, !e || !e.contains(t)) {
            n = t;
            do {
                if (n.scrollHeight > n.offsetHeight) {
                    e = n, t.fastClickScrollParent = n;
                    break
                }
                n = n.parentElement
            } while (n)
        }
        e && (e.fastClickLastScrollTop = e.scrollTop)
    }, t.prototype.getTargetElementFromEventTarget = function (t) {
        return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
    }, t.prototype.onTouchStart = function (t) {
        var e, n, o;
        if (t.targetTouches.length > 1) return !0;
        if (e = this.getTargetElementFromEventTarget(t.target), n = t.targetTouches[0], i) {
            if (o = window.getSelection(), o.rangeCount && !o.isCollapsed) return !0;
            if (!r) {
                if (n.identifier && n.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
                this.lastTouchIdentifier = n.identifier, this.updateScrollParent(e)
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = n.pageX, this.touchStartY = n.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
    }, t.prototype.touchHasMoved = function (t) {
        var e = t.changedTouches[0],
            n = this.touchBoundary;
        return Math.abs(e.pageX - this.touchStartX) > n || Math.abs(e.pageY - this.touchStartY) > n ? !0 : !1
    }, t.prototype.onTouchMove = function (t) {
        return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
    }, t.prototype.findControl = function (t) {
        return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, t.prototype.onTouchEnd = function (t) {
        var e, s, a, u, c, l = this.targetElement;
        if (!this.trackingClick) return !0;
        if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
        if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
        if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, s = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, o && (c = t.changedTouches[0], l = document.elementFromPoint(c.pageX - window.pageXOffset, c.pageY - window.pageYOffset) || l, l.fastClickScrollParent = this.targetElement.fastClickScrollParent), a = l.tagName.toLowerCase(), "label" === a) {
            if (e = this.findControl(l)) {
                if (this.focus(l), n) return !1;
                l = e
            }
        } else if (this.needsFocus(l)) return t.timeStamp - s > 100 || i && window.top !== window && "input" === a ? (this.targetElement = null, !1) : (this.focus(l), this.sendClick(l, t), i && "select" === a || (this.targetElement = null, t.preventDefault()), !1);
        return i && !r && (u = l.fastClickScrollParent, u && u.fastClickLastScrollTop !== u.scrollTop) ? !0 : (this.needsClick(l) || (t.preventDefault(), this.sendClick(l, t)), !1)
    }, t.prototype.onTouchCancel = function () {
        this.trackingClick = !1, this.targetElement = null
    }, t.prototype.onMouse = function (t) {
        return this.targetElement ? t.forwardedTouchEvent ? !0 : t.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1) : !0 : !0
    }, t.prototype.onClick = function (t) {
        var e;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail ? !0 : (e = this.onMouse(t), e || (this.targetElement = null), e)
    }, t.prototype.destroy = function () {
        var t = this.layer;
        n && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, t.notNeeded = function (t) {
        var e, i, r, o;
        if ("undefined" == typeof window.ontouchstart) return !0;
        if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!n) return !0;
            if (e = document.querySelector("meta[name=viewport]")) {
                if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
                if (i > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
        }
        if (s && (r = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), r[1] >= 10 && r[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) {
            if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth) return !0
        }
        return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction ? !0 : (o = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], o >= 27 && (e = document.querySelector("meta[name=viewport]"), e && (-1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === t.style.touchAction || "manipulation" === t.style.touchAction ? !0 : !1)
    }, t.attach = function (e, n) {
        return new t(e, n)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
        return t
    }) : "undefined" != typeof module && module.exports ? (module.exports = t.attach, module.exports.FastClick = t) : window.FastClick = t
}(),
function (t) {
    "use strict";
    var e, n, i, r, o, s = t.GreenSockGlobals || t,
        a = function (t) {
            var e, n = t.split("."),
                i = s;
            for (e = 0; n.length > e; e++) i[n[e]] = i = i[n[e]] || {};
            return i
        },
        u = a("com.greensock"),
        c = [].slice,
        l = function () {},
        h = {},
        p = function (e, n, i, r) {
            this.sc = h[e] ? h[e].sc : [], h[e] = this, this.gsClass = null, this.func = i;
            var o = [];
            this.check = function (u) {
                for (var c, l, f, d, m = n.length, g = m; --m > -1;)(c = h[n[m]] || new p(n[m], [])).gsClass ? (o[m] = c.gsClass, g--) : u && c.sc.push(this);
                if (0 === g && i)
                    for (l = ("com.greensock." + e).split("."), f = l.pop(), d = a(l.join("."))[f] = this.gsClass = i.apply(i, o), r && (s[f] = d, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + e.split(".").join("/"), [], function () {
                            return d
                        }) : "undefined" != typeof module && module.exports && (module.exports = d)), m = 0; this.sc.length > m; m++) this.sc[m].check()
            }, this.check(!0)
        },
        f = t._gsDefine = function (t, e, n, i) {
            return new p(t, e, n, i)
        },
        d = u._class = function (t, e, n) {
            return e = e || function () {}, f(t, [], function () {
                return e
            }, n), e
        };
    f.globals = s;
    var m = [0, 0, 1, 1],
        g = [],
        v = d("easing.Ease", function (t, e, n, i) {
            this._func = t, this._type = n || 0, this._power = i || 0, this._params = e ? m.concat(e) : m
        }, !0),
        y = v.map = {},
        _ = v.register = function (t, e, n, i) {
            for (var r, o, s, a, c = e.split(","), l = c.length, h = (n || "easeIn,easeOut,easeInOut").split(","); --l > -1;)
                for (o = c[l], r = i ? d("easing." + o, null, !0) : u.easing[o] || {}, s = h.length; --s > -1;) a = h[s], y[o + "." + a] = y[a + o] = r[a] = t.getRatio ? t : t[a] || new t
        };
    for (i = v.prototype, i._calcEnd = !1, i.getRatio = function (t) {
            if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
            var e = this._type,
                n = this._power,
                i = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
            return 1 === n ? i *= i : 2 === n ? i *= i * i : 3 === n ? i *= i * i * i : 4 === n && (i *= i * i * i * i), 1 === e ? 1 - i : 2 === e ? i : .5 > t ? i / 2 : 1 - i / 2
        }, e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], n = e.length; --n > -1;) i = e[n] + ",Power" + n, _(new v(null, null, 1, n), i, "easeOut", !0), _(new v(null, null, 2, n), i, "easeIn" + (0 === n ? ",easeNone" : "")), _(new v(null, null, 3, n), i, "easeInOut");
    y.linear = u.easing.Linear.easeIn, y.swing = u.easing.Quad.easeInOut;
    var w = d("events.EventDispatcher", function (t) {
        this._listeners = {}, this._eventTarget = t || this
    });
    i = w.prototype, i.addEventListener = function (t, e, n, i, s) {
        s = s || 0;
        var a, u, c = this._listeners[t],
            l = 0;
        for (null == c && (this._listeners[t] = c = []), u = c.length; --u > -1;) a = c[u], a.c === e && a.s === n ? c.splice(u, 1) : 0 === l && s > a.pr && (l = u + 1);
        c.splice(l, 0, {
            c: e,
            s: n,
            up: i,
            pr: s
        }), this !== r || o || r.wake()
    }, i.removeEventListener = function (t, e) {
        var n, i = this._listeners[t];
        if (i)
            for (n = i.length; --n > -1;)
                if (i[n].c === e) return void i.splice(n, 1)
    }, i.dispatchEvent = function (t) {
        var e, n, i, r = this._listeners[t];
        if (r)
            for (e = r.length, n = this._eventTarget; --e > -1;) i = r[e], i.up ? i.c.call(i.s || n, {
                type: t,
                target: n
            }) : i.c.call(i.s || n)
    };
    var b = t.requestAnimationFrame,
        x = t.cancelAnimationFrame,
        k = Date.now || function () {
            return (new Date).getTime()
        },
        T = k();
    for (e = ["ms", "moz", "webkit", "o"], n = e.length; --n > -1 && !b;) b = t[e[n] + "RequestAnimationFrame"], x = t[e[n] + "CancelAnimationFrame"] || t[e[n] + "CancelRequestAnimationFrame"];
    d("Ticker", function (t, e) {
        var n, i, s, a, u, c = this,
            h = k(),
            p = e !== !1 && b,
            f = function (t) {
                T = k(), c.time = (T - h) / 1e3;
                var e, r = c.time - u;
                (!n || r > 0 || t === !0) && (c.frame++, u += r + (r >= a ? .004 : a - r), e = !0), t !== !0 && (s = i(f)), e && c.dispatchEvent("tick")
            };
        w.call(c), this.time = this.frame = 0, this.tick = function () {
            f(!0)
        }, this.sleep = function () {
            null != s && (p && x ? x(s) : clearTimeout(s), i = l, s = null, c === r && (o = !1))
        }, this.wake = function () {
            null !== s && c.sleep(), i = 0 === n ? l : p && b ? b : function (t) {
                return setTimeout(t, 0 | 1e3 * (u - c.time) + 1)
            }, c === r && (o = !0), f(2)
        }, this.fps = function (t) {
            return arguments.length ? (n = t, a = 1 / (n || 60), u = this.time + a, void c.wake()) : n
        }, this.useRAF = function (t) {
            return arguments.length ? (c.sleep(), p = t, void c.fps(n)) : p
        }, c.fps(t), setTimeout(function () {
            p && (!s || 5 > c.frame) && c.useRAF(!1)
        }, 1500)
    }), i = u.Ticker.prototype = new u.events.EventDispatcher, i.constructor = u.Ticker;
    var C = d("core.Animation", function (t, e) {
        if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, R) {
            o || r.wake();
            var n = this.vars.useFrames ? $ : R;
            n.add(this, n._time), this.vars.paused && this.paused(!0)
        }
    });
    r = C.ticker = new u.Ticker, i = C.prototype, i._dirty = i._gc = i._initted = i._paused = !1, i._totalTime = i._time = 0, i._rawPrevTime = -1, i._next = i._last = i._onUpdate = i._timeline = i.timeline = null, i._paused = !1;
    var E = function () {
        k() - T > 2e3 && r.wake(), setTimeout(E, 2e3)
    };
    E(), i.play = function (t, e) {
        return arguments.length && this.seek(t, e), this.reversed(!1).paused(!1)
    }, i.pause = function (t, e) {
        return arguments.length && this.seek(t, e), this.paused(!0)
    }, i.resume = function (t, e) {
        return arguments.length && this.seek(t, e), this.paused(!1)
    }, i.seek = function (t, e) {
        return this.totalTime(Number(t), e !== !1)
    }, i.restart = function (t, e) {
        return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
    }, i.reverse = function (t, e) {
        return arguments.length && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
    }, i.render = function () {}, i.invalidate = function () {
        return this
    }, i._enabled = function (t, e) {
        return o || r.wake(), this._gc = !t, this._active = t && !this._paused && this._totalTime > 0 && this._totalTime < this._totalDuration, e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
    }, i._kill = function () {
        return this._enabled(!1, !1)
    }, i.kill = function (t, e) {
        return this._kill(t, e), this
    }, i._uncache = function (t) {
        for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
        return this
    }, i._swapSelfInParams = function (t) {
        for (var e = t.length, n = t.concat(); --e > -1;) "{self}" === t[e] && (n[e] = this);
        return n
    }, i.eventCallback = function (t, e, n, i) {
        if ("on" === (t || "").substr(0, 2)) {
            var r = this.vars;
            if (1 === arguments.length) return r[t];
            null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = n instanceof Array && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, r[t + "Scope"] = i), "onUpdate" === t && (this._onUpdate = e)
        }
        return this
    }, i.delay = function (t) {
        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
    }, i.duration = function (t) {
        return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
    }, i.totalDuration = function (t) {
        return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
    }, i.time = function (t, e) {
        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
    }, i.totalTime = function (t, e, n) {
        if (o || r.wake(), !arguments.length) return this._totalTime;
        if (this._timeline) {
            if (0 > t && !n && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                this._dirty && this.totalDuration();
                var i = this._totalDuration,
                    s = this._timeline;
                if (t > i && !n && (t = i), this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? i - t : t) / this._timeScale, s._dirty || this._uncache(!1), s._timeline)
                    for (; s._timeline;) s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0), s = s._timeline
            }
            this._gc && this._enabled(!0, !1), this._totalTime !== t && this.render(t, e, !1)
        }
        return this
    }, i.startTime = function (t) {
        return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
    }, i.timeScale = function (t) {
        if (!arguments.length) return this._timeScale;
        if (t = t || 1e-6, this._timeline && this._timeline.smoothChildTiming) {
            var e = this._pauseTime,
                n = e || 0 === e ? e : this._timeline.totalTime();
            this._startTime = n - (n - this._startTime) * this._timeScale / t
        }
        return this._timeScale = t, this._uncache(!1)
    }, i.reversed = function (t) {
        return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._totalTime, !0)), this) : this._reversed
    }, i.paused = function (t) {
        if (!arguments.length) return this._paused;
        if (t != this._paused && this._timeline) {
            o || t || r.wake();
            var e = this._timeline,
                n = e.rawTime(),
                i = n - this._pauseTime;
            !t && e.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? n : null, this._paused = t, this._active = !t && this._totalTime > 0 && this._totalTime < this._totalDuration, t || 0 === i || 0 === this._duration || this.render(e.smoothChildTiming ? this._totalTime : (n - this._startTime) / this._timeScale, !0, !0)
        }
        return this._gc && !t && this._enabled(!0, !1), this
    };
    var A = d("core.SimpleTimeline", function (t) {
        C.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
    });
    i = A.prototype = new C, i.constructor = A, i.kill()._gc = !1, i._first = i._last = null, i._sortChildren = !1, i.add = i.insert = function (t, e) {
        var n, i;
        if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), n = this._last, this._sortChildren)
            for (i = t._startTime; n && n._startTime > i;) n = n._prev;
        return n ? (t._next = n._next, n._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = n, this._timeline && this._uncache(!0), this
    }, i._remove = function (t, e) {
        return t.timeline === this && (e || t._enabled(!1, !0), t.timeline = null, t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), this._timeline && this._uncache(!0)), this
    }, i.render = function (t, e, n) {
        var i, r = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = t; r;) i = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, n) : r.render((t - r._startTime) * r._timeScale, e, n)), r = i
    }, i.rawTime = function () {
        return o || r.wake(), this._totalTime
    };
    var S = d("TweenLite", function (e, n, i) {
            if (C.call(this, n, i), this.render = S.prototype.render, null == e) throw "Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : S.selector(e) || e;
            var r, o, s, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                u = this.vars.overwrite;
            if (this._overwrite = u = null == u ? M[S.defaultOverwrite] : "number" == typeof u ? u >> 0 : M[u], (a || e instanceof Array) && "number" != typeof e[0])
                for (this._targets = s = c.call(e, 0), this._propLookup = [], this._siblings = [], r = 0; s.length > r; r++) o = s[r], o ? "string" != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(r--, 1), this._targets = s = s.concat(c.call(o, 0))) : (this._siblings[r] = B(o, this, !1), 1 === u && this._siblings[r].length > 1 && q(o, this, null, 1, this._siblings[r])) : (o = s[r--] = S.selector(o), "string" == typeof o && s.splice(r + 1, 1)) : s.splice(r--, 1);
            else this._propLookup = {}, this._siblings = B(e, this, !1), 1 === u && this._siblings.length > 1 && q(e, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === n && 0 === this._delay && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
        }, !0),
        F = function (e) {
            return e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        },
        j = function (t, e) {
            var n, i = {};
            for (n in t) O[n] || n in e && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!P[n] || P[n] && P[n]._autoCSS) || (i[n] = t[n], delete t[n]);
            t.css = i
        };
    i = S.prototype = new C, i.constructor = S, i.kill()._gc = !1, i.ratio = 0, i._firstPT = i._targets = i._overwrittenProps = i._startAt = null, i._notifyPluginsOfEnabled = !1, S.version = "1.10.2", S.defaultEase = i._ease = new v(null, null, 1, 1), S.defaultOverwrite = "auto", S.ticker = r, S.autoSleep = !0, S.selector = t.$ || t.jQuery || function (e) {
        return t.$ ? (S.selector = t.$, t.$(e)) : t.document ? t.document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e
    };
    var D = S._internals = {},
        P = S._plugins = {},
        L = S._tweenLookup = {},
        N = 0,
        O = D.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1
        },
        M = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        },
        $ = C._rootFramesTimeline = new A,
        R = C._rootTimeline = new A;
    R._startTime = r.time, $._startTime = r.frame, R._active = $._active = !0, C._updateRoot = function () {
        if (R.render((r.time - R._startTime) * R._timeScale, !1, !1), $.render((r.frame - $._startTime) * $._timeScale, !1, !1), !(r.frame % 120)) {
            var t, e, n;
            for (n in L) {
                for (e = L[n].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                0 === e.length && delete L[n]
            }
            if (n = R._first, (!n || n._paused) && S.autoSleep && !$._first && 1 === r._listeners.tick.length) {
                for (; n && n._paused;) n = n._next;
                n || r.sleep()
            }
        }
    }, r.addEventListener("tick", C._updateRoot);
    var B = function (t, e, n) {
            var i, r, o = t._gsTweenID;
            if (L[o || (t._gsTweenID = o = "t" + N++)] || (L[o] = {
                    target: t,
                    tweens: []
                }), e && (i = L[o].tweens, i[r = i.length] = e, n))
                for (; --r > -1;) i[r] === e && i.splice(r, 1);
            return L[o].tweens
        },
        q = function (t, e, n, i, r) {
            var o, s, a, u;
            if (1 === i || i >= 4) {
                for (u = r.length, o = 0; u > o; o++)
                    if ((a = r[o]) !== e) a._gc || a._enabled(!1, !1) && (s = !0);
                    else if (5 === i) break;
                return s
            }
            var c, l = e._startTime + 1e-10,
                h = [],
                p = 0,
                f = 0 === e._duration;
            for (o = r.length; --o > -1;)(a = r[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (c = c || I(e, 0, f), 0 === I(a, c, f) && (h[p++] = a)) : l >= a._startTime && a._startTime + a.totalDuration() / a._timeScale + 1e-10 > l && ((f || !a._initted) && 2e-10 >= l - a._startTime || (h[p++] = a)));
            for (o = p; --o > -1;) a = h[o], 2 === i && a._kill(n, t) && (s = !0), (2 !== i || !a._firstPT && a._initted) && a._enabled(!1, !1) && (s = !0);
            return s
        },
        I = function (t, e, n) {
            for (var i = t._timeline, r = i._timeScale, o = t._startTime, s = 1e-10; i._timeline;) {
                if (o += i._startTime, r *= i._timeScale, i._paused) return -100;
                i = i._timeline
            }
            return o /= r, o > e ? o - e : n && o === e || !t._initted && 2 * s > o - e ? s : (o += t.totalDuration() / t._timeScale / r) > e + s ? 0 : o - e - s
        };
    i._init = function () {
        var t, e, n, i, r = this.vars,
            o = this._overwrittenProps,
            s = this._duration,
            a = r.immediateRender,
            u = r.ease;
        if (r.startAt) {
            if (this._startAt && this._startAt.render(-1, !0), r.startAt.overwrite = 0, r.startAt.immediateRender = !0, this._startAt = S.to(this.target, 0, r.startAt), a)
                if (this._time > 0) this._startAt = null;
                else if (0 !== s) return
        } else if (r.runBackwards && r.immediateRender && 0 !== s)
            if (this._startAt) this._startAt.render(-1, !0), this._startAt = null;
            else if (0 === this._time) {
            n = {};
            for (i in r) O[i] && "autoCSS" !== i || (n[i] = r[i]);
            return n.overwrite = 0, void(this._startAt = S.to(this.target, 0, n))
        }
        if (this._ease = u ? u instanceof v ? r.easeParams instanceof Array ? u.config.apply(u, r.easeParams) : u : "function" == typeof u ? new v(u, r.easeParams) : y[u] || S.defaultEase : S.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
            for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null) && (e = !0);
        else e = this._initProps(this.target, this._propLookup, this._siblings, o);
        if (e && S._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
            for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
        this._onUpdate = r.onUpdate, this._initted = !0
    }, i._initProps = function (e, n, i, r) {
        var o, s, a, u, c, l;
        if (null == e) return !1;
        this.vars.css || e.style && e !== t && e.nodeType && P.css && this.vars.autoCSS !== !1 && j(this.vars, e);
        for (o in this.vars) {
            if (l = this.vars[o], O[o]) l instanceof Array && -1 !== l.join("").indexOf("{self}") && (this.vars[o] = l = this._swapSelfInParams(l, this));
            else if (P[o] && (u = new P[o])._onInitTween(e, this.vars[o], this)) {
                for (this._firstPT = c = {
                        _next: this._firstPT,
                        t: u,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: !0,
                        n: o,
                        pg: !0,
                        pr: u._priority
                    }, s = u._overwriteProps.length; --s > -1;) n[u._overwriteProps[s]] = this._firstPT;
                (u._priority || u._onInitAllProps) && (a = !0), (u._onDisable || u._onEnable) && (this._notifyPluginsOfEnabled = !0)
            } else this._firstPT = n[o] = c = {
                _next: this._firstPT,
                t: e,
                p: o,
                f: "function" == typeof e[o],
                n: o,
                pg: !1,
                pr: 0
            }, c.s = c.f ? e[o.indexOf("set") || "function" != typeof e["get" + o.substr(3)] ? o : "get" + o.substr(3)]() : parseFloat(e[o]), c.c = "string" == typeof l && "=" === l.charAt(1) ? parseInt(l.charAt(0) + "1", 10) * Number(l.substr(2)) : Number(l) - c.s || 0;
            c && c._next && (c._next._prev = c)
        }
        return r && this._kill(r, e) ? this._initProps(e, n, i, r) : this._overwrite > 1 && this._firstPT && i.length > 1 && q(e, this, n, this._overwrite, i) ? (this._kill(n, e), this._initProps(e, n, i, r)) : a
    }, i.render = function (t, e, n) {
        var i, r, o, s = this._time;
        if (t >= this._duration) this._totalTime = this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (i = !0, r = "onComplete"), 0 === this._duration && ((0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && (n = !0, this._rawPrevTime > 0 && (r = "onReverseComplete", e && (t = -1))), this._rawPrevTime = t);
        else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== s || 0 === this._duration && this._rawPrevTime > 0) && (r = "onReverseComplete", i = this._reversed), 0 > t ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (n = !0), this._rawPrevTime = t)) : this._initted || (n = !0);
        else if (this._totalTime = this._time = t, this._easeType) {
            var a = t / this._duration,
                u = this._easeType,
                c = this._easePower;
            (1 === u || 3 === u && a >= .5) && (a = 1 - a), 3 === u && (a *= 2), 1 === c ? a *= a : 2 === c ? a *= a * a : 3 === c ? a *= a * a * a : 4 === c && (a *= a * a * a * a), this.ratio = 1 === u ? 1 - a : 2 === u ? a : .5 > t / this._duration ? a / 2 : 1 - a / 2
        } else this.ratio = this._ease.getRatio(t / this._duration);
        if (this._time !== s || n) {
            if (!this._initted) {
                if (this._init(), !this._initted) return;
                this._time && !i ? this.ratio = this._ease.getRatio(this._time / this._duration) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._active || !this._paused && this._time !== s && t >= 0 && (this._active = !0), 0 === s && (this._startAt && (t >= 0 ? this._startAt.render(t, e, n) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === this._duration) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || g))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
            this._onUpdate && (0 > t && this._startAt && this._startAt.render(t, e, n), e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || g)), r && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startAt.render(t, e, n), i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || g)))
        }
    }, i._kill = function (t, e) {
        if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._enabled(!1, !1);
        e = "string" != typeof e ? e || this._targets || this.target : S.selector(e) || e;
        var n, i, r, o, s, a, u, c;
        if ((e instanceof Array || F(e)) && "number" != typeof e[0])
            for (n = e.length; --n > -1;) this._kill(t, e[n]) && (a = !0);
        else {
            if (this._targets) {
                for (n = this._targets.length; --n > -1;)
                    if (e === this._targets[n]) {
                        s = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], i = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                        break
                    }
            } else {
                if (e !== this.target) return !1;
                s = this._propLookup, i = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
            }
            if (s) {
                u = t || s, c = t !== i && "all" !== i && t !== s && (null == t || t._tempKill !== !0);
                for (r in u)(o = s[r]) && (o.pg && o.t._kill(u) && (a = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete s[r]), c && (i[r] = 1);
                !this._firstPT && this._initted && this._enabled(!1, !1)
            }
        }
        return a
    }, i.invalidate = function () {
        return this._notifyPluginsOfEnabled && S._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
    }, i._enabled = function (t, e) {
        if (o || r.wake(), t && this._gc) {
            var n, i = this._targets;
            if (i)
                for (n = i.length; --n > -1;) this._siblings[n] = B(i[n], this, !0);
            else this._siblings = B(this.target, this, !0)
        }
        return C.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? S._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
    }, S.to = function (t, e, n) {
        return new S(t, e, n)
    }, S.from = function (t, e, n) {
        return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new S(t, e, n)
    }, S.fromTo = function (t, e, n, i) {
        return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new S(t, e, i)
    }, S.delayedCall = function (t, e, n, i, r) {
        return new S(e, 0, {
            delay: t,
            onComplete: e,
            onCompleteParams: n,
            onCompleteScope: i,
            onReverseComplete: e,
            onReverseCompleteParams: n,
            onReverseCompleteScope: i,
            immediateRender: !1,
            useFrames: r,
            overwrite: 0
        })
    }, S.set = function (t, e) {
        return new S(t, 0, e)
    }, S.killTweensOf = S.killDelayedCallsTo = function (t, e) {
        for (var n = S.getTweensOf(t), i = n.length; --i > -1;) n[i]._kill(e, t)
    }, S.getTweensOf = function (t) {
        if (null == t) return [];
        t = "string" != typeof t ? t : S.selector(t) || t;
        var e, n, i, r;
        if ((t instanceof Array || F(t)) && "number" != typeof t[0]) {
            for (e = t.length, n = []; --e > -1;) n = n.concat(S.getTweensOf(t[e]));
            for (e = n.length; --e > -1;)
                for (r = n[e], i = e; --i > -1;) r === n[i] && n.splice(e, 1)
        } else
            for (n = B(t).concat(), e = n.length; --e > -1;) n[e]._gc && n.splice(e, 1);
        return n
    };
    var H = d("plugins.TweenPlugin", function (t, e) {
        this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = H.prototype
    }, !0);
    if (i = H.prototype, H.version = "1.10.1", H.API = 2, i._firstPT = null, i._addTween = function (t, e, n, i, r, o) {
            var s, a;
            return null != i && (s = "number" == typeof i || "=" !== i.charAt(1) ? Number(i) - n : parseInt(i.charAt(0) + "1", 10) * Number(i.substr(2))) ? (this._firstPT = a = {
                _next: this._firstPT,
                t: t,
                p: e,
                s: n,
                c: s,
                f: "function" == typeof t[e],
                n: r || e,
                r: o
            }, a._next && (a._next._prev = a), a) : void 0
        }, i.setRatio = function (t) {
            for (var e, n = this._firstPT, i = 1e-6; n;) e = n.c * t + n.s, n.r ? e = 0 | e + (e > 0 ? .5 : -.5) : i > e && e > -i && (e = 0), n.f ? n.t[n.p](e) : n.t[n.p] = e, n = n._next
        }, i._kill = function (t) {
            var e, n = this._overwriteProps,
                i = this._firstPT;
            if (null != t[this._propName]) this._overwriteProps = [];
            else
                for (e = n.length; --e > -1;) null != t[n[e]] && n.splice(e, 1);
            for (; i;) null != t[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? (i._prev._next = i._next, i._prev = null) : this._firstPT === i && (this._firstPT = i._next)), i = i._next;
            return !1
        }, i._roundProps = function (t, e) {
            for (var n = this._firstPT; n;)(t[this._propName] || null != n.n && t[n.n.split(this._propName + "_").join("")]) && (n.r = e), n = n._next
        }, S._onPluginEvent = function (t, e) {
            var n, i, r, o, s, a = e._firstPT;
            if ("_onInitAllProps" === t) {
                for (; a;) {
                    for (s = a._next, i = r; i && i.pr > a.pr;) i = i._next;
                    (a._prev = i ? i._prev : o) ? a._prev._next = a: r = a, (a._next = i) ? i._prev = a : o = a, a = s
                }
                a = e._firstPT = r
            }
            for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (n = !0), a = a._next;
            return n
        }, H.activate = function (t) {
            for (var e = t.length; --e > -1;) t[e].API === H.API && (P[(new t[e])._propName] = t[e]);
            return !0
        }, f.plugin = function (t) {
            if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
            var e, n = t.propName,
                i = t.priority || 0,
                r = t.overwriteProps,
                o = {
                    init: "_onInitTween",
                    set: "setRatio",
                    kill: "_kill",
                    round: "_roundProps",
                    initAll: "_onInitAllProps"
                },
                s = d("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function () {
                    H.call(this, n, i), this._overwriteProps = r || []
                }, t.global === !0),
                a = s.prototype = new H(n);
            a.constructor = s, s.API = t.API;
            for (e in o) "function" == typeof t[e] && (a[o[e]] = t[e]);
            return s.version = t.version, H.activate([s]), s
        }, e = t._gsQueue) {
        for (n = 0; e.length > n; n++) e[n]();
        for (i in h) h[i].func || t.console.log("GSAP encountered missing dependency: com.greensock." + i)
    }
    o = !1
}(window), (window._gsQueue || (window._gsQueue = [])).push(function () {
        "use strict";
        window._gsDefine("easing.Back", ["easing.Ease"], function (t) {
            var e, n, i, r = window.GreenSockGlobals || window,
                o = r.com.greensock,
                s = 2 * Math.PI,
                a = Math.PI / 2,
                u = o._class,
                c = function (e, n) {
                    var i = u("easing." + e, function () {}, !0),
                        r = i.prototype = new t;
                    return r.constructor = i, r.getRatio = n, i
                },
                l = t.register || function () {},
                h = function (t, e, n, i) {
                    var r = u("easing." + t, {
                        easeOut: new e,
                        easeIn: new n,
                        easeInOut: new i
                    }, !0);
                    return l(r, t), r
                },
                p = function (t, e, n) {
                    this.t = t, this.v = e, n && (this.next = n, n.prev = this, this.c = n.v - e, this.gap = n.t - t)
                },
                f = function (e, n) {
                    var i = u("easing." + e, function (t) {
                            this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                        }, !0),
                        r = i.prototype = new t;
                    return r.constructor = i, r.getRatio = n, r.config = function (t) {
                        return new i(t)
                    }, i
                },
                d = h("Back", f("BackOut", function (t) {
                    return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                }), f("BackIn", function (t) {
                    return t * t * ((this._p1 + 1) * t - this._p1)
                }), f("BackInOut", function (t) {
                    return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                })),
                m = u("easing.SlowMo", function (t, e, n) {
                    e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = n === !0
                }, !0),
                g = m.prototype = new t;
            return g.constructor = m, g.getRatio = function (t) {
                var e = t + (.5 - t) * this._p;
                return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
            }, m.ease = new m(.7, .7), g.config = m.config = function (t, e, n) {
                return new m(t, e, n)
            }, e = u("easing.SteppedEase", function (t) {
                t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
            }, !0), g = e.prototype = new t, g.constructor = e, g.getRatio = function (t) {
                return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
            }, g.config = e.config = function (t) {
                return new e(t)
            }, n = u("easing.RoughEase", function (e) {
                e = e || {};
                for (var n, i, r, o, s, a, u = e.taper || "none", c = [], l = 0, h = 0 | (e.points || 20), f = h, d = e.randomize !== !1, m = e.clamp === !0, g = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) n = d ? Math.random() : 1 / h * f, i = g ? g.getRatio(n) : n, "none" === u ? r = v : "out" === u ? (o = 1 - n, r = o * o * v) : "in" === u ? r = n * n * v : .5 > n ? (o = 2 * n, r = .5 * o * o * v) : (o = 2 * (1 - n), r = .5 * o * o * v), d ? i += Math.random() * r - .5 * r : f % 2 ? i += .5 * r : i -= .5 * r, m && (i > 1 ? i = 1 : 0 > i && (i = 0)), c[l++] = {
                    x: n,
                    y: i
                };
                for (c.sort(function (t, e) {
                        return t.x - e.x
                    }), a = new p(1, 1, null), f = h; --f > -1;) s = c[f], a = new p(s.x, s.y, a);
                this._prev = new p(0, 0, 0 !== a.t ? a : a.next)
            }, !0), g = n.prototype = new t, g.constructor = n, g.getRatio = function (t) {
                var e = this._prev;
                if (t > e.t) {
                    for (; e.next && t >= e.t;) e = e.next;
                    e = e.prev
                } else
                    for (; e.prev && e.t >= t;) e = e.prev;
                return this._prev = e, e.v + (t - e.t) / e.gap * e.c
            }, g.config = function (t) {
                return new n(t)
            }, n.ease = new n, h("Bounce", c("BounceOut", function (t) {
                return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }), c("BounceIn", function (t) {
                return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            }), c("BounceInOut", function (t) {
                var e = .5 > t;
                return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
            })), h("Circ", c("CircOut", function (t) {
                return Math.sqrt(1 - (t -= 1) * t)
            }), c("CircIn", function (t) {
                return -(Math.sqrt(1 - t * t) - 1)
            }), c("CircInOut", function (t) {
                return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            })), i = function (e, n, i) {
                var r = u("easing." + e, function (t, e) {
                        this._p1 = t || 1, this._p2 = e || i, this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0)
                    }, !0),
                    o = r.prototype = new t;
                return o.constructor = r, o.getRatio = n, o.config = function (t, e) {
                    return new r(t, e)
                }, r
            }, h("Elastic", i("ElasticOut", function (t) {
                return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * s / this._p2) + 1
            }, .3), i("ElasticIn", function (t) {
                return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * s / this._p2))
            }, .3), i("ElasticInOut", function (t) {
                return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * s / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * s / this._p2) + 1
            }, .45)), h("Expo", c("ExpoOut", function (t) {
                return 1 - Math.pow(2, -10 * t)
            }), c("ExpoIn", function (t) {
                return Math.pow(2, 10 * (t - 1)) - .001
            }), c("ExpoInOut", function (t) {
                return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            })), h("Sine", c("SineOut", function (t) {
                return Math.sin(t * a)
            }), c("SineIn", function (t) {
                return -Math.cos(t * a) + 1
            }), c("SineInOut", function (t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            })), u("easing.EaseLookup", {
                find: function (e) {
                    return t.map[e]
                }
            }, !0), l(r.SlowMo, "SlowMo", "ease,"), l(n, "RoughEase", "ease,"), l(e, "SteppedEase", "ease,"), d
        }, !0)
    }), window._gsDefine && window._gsQueue.pop()(),
    function () {
        "use strict";
        B.Components.App = B.Core.Abstract.extend({
            options: {
                page: ""
            },
            construct: function (t) {
                this._super(t), this.viewport = new B.Tools.Viewport, this.scroller = new B.Tools.Scroller, this.detector = new B.Tools.Detector, this.unveiler = new B.Tools.Unveiler({
                    parse: !1
                }), this.loader = new B.Tools.Loader({
                    parse: !1
                }), this.resizer = new B.Tools.Resizer({
                    parse: !1
                }), this.menu = new B.Tools.Menu, this.breakpoints = new B.Tools.Breakpoints({
                    breakpoints: [{
                        name: "very-large",
                        width: {
                            value: 1679,
                            extreme: "max",
                            included: !0
                        }
                    }, {
                        name: "large",
                        width: {
                            value: 1539,
                            extreme: "max",
                            included: !0
                        }
                    }, {
                        name: "medium",
                        width: {
                            value: 1023,
                            extreme: "max",
                            included: !0
                        }
                    }, {
                        name: "small",
                        width: {
                            value: 719,
                            extreme: "max",
                            included: !0
                        }
                    }, {
                        name: "very-small",
                        width: {
                            value: 479,
                            extreme: "max",
                            included: !0
                        }
                    }]
                }), this.general_loader = new B.Components.General_Loader, FastClick.attach(document.body), this.init_ajax(), this.init_page({
                    name: this.options.page
                })
            },
            init_ajax: function () {
                var t = this;
                this.ajax = new B.Tools.Ajax({
                    page: this.options.page
                }), this.ajax.on("init_page", function (e) {
                    t.init_page(e)
                })
            },
            init_page: function (t) {
                var e = null;
                switch (this.page && this.page.destruct && this.page.destruct(), t.name) {
                case "project":
                    e = new B.Components.Project;
                    break;
                case "about":
                    e = new B.Components.About;
                    break;
                case "home":
                    e = new B.Components.Home;
                    break;
                case "side-projects":
                    e = new B.Components.Side_Projects
                }
                this.page && (this.menu.set_for_page(t), this.scroller.move_to(0)), this.loader.parse(), this.resizer.parse(), this.menu.parse(), this.unveiler.parse(), this.unveiler.test_items(), this.page = e, FastClick.attach(document.body)
            }
        })
    }(),
    function () {
        "use strict";
        B.Components.Censorship_Pixels = B.Core.Event_Emitter.extend({
            options: {
                margin: 10,
                pixels: {
                    size: 12
                },
                points: {},
                background: "#fafafa"
            },
            construct: function (t) {
                this._super(t), this.$.container = this.options.target, this.should_draw = !1, this.init_canvas(), this.init_pixels(), this.init_points(), this.update_data(), this.update_canvas(), this.update_pixels(), this.update_points(), this.init_auto_updater(), this.$.container.data("censorship-instance", this)
            },
            init_auto_updater: function () {
                var t = this;
                this.auto_update = {}, this.auto_update.min_duration = 1e3, this.auto_update.duration_variation = 1e3, this.auto_update.timeout = null, this.auto_update.callback = function () {
                    t.update_points(), t.draw(), t.auto_update.timeout && window.clearTimeout(t.auto_update.timeout), t.auto_update.timeout = window.setTimeout(t.auto_update.callback, t.auto_update.min_duration + Math.round(t.auto_update.duration_variation * Math.random()))
                }, this.auto_update.callback()
            },
            init_points: function () {
                this.points = {}, this.points.distance = 150, this.points.variation = 150, this.points.min_radius = 10, this.points.radius_variation = 60, this.points.items = []
            },
            update_points: function () {
                for (var t = [], e = 0, n = this.canvas.height / 2; e < this.canvas.width;) {
                    var i = {};
                    i.x = Math.round(e + Math.random() * this.points.variation * 2 - this.points.variation), i.y = Math.round(n + Math.random() * this.points.variation * 2 - this.points.variation), i.r = Math.round(this.points.min_radius + Math.random() * this.points.radius_variation), e += this.points.distance, t.push(i)
                }
                this.points.items = t
            },
            init_pixels: function () {
                this.pixels = {}, this.pixels.scale = .05, this.pixels.size = this.options.pixels.size, this.pixels.items = []
            },
            unset: function () {},
            update_data: function () {
                var t = window.getComputedStyle(this.$.container[0]),
                    e = this.$.container[0].getBoundingClientRect();
                this.data = {}, this.data.width = e.width, this.data.height = e.height, this.data.font_size = t.fontSize, this.data.font_family = t.fontFamily, this.data.color = t.color, this.data.text = this.$.container.text()
            },
            init_canvas: function () {
                this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.canvas.style.display = "block", this.canvas.style.position = "absolute", this.$.container[0].appendChild(this.canvas)
            },
            update_canvas: function () {
                this.canvas.style.top = -this.options.margin + "px", this.canvas.style.left = -this.options.margin + "px", this.canvas.style.width = this.data.width + 2 * this.options.margin + "px", this.canvas.style.height = this.data.height + 2 * this.options.margin + "px", this.canvas.width = this.data.width + 2 * this.options.margin, this.canvas.height = this.data.height + 2 * this.options.margin, this.context.font = this.data.font_size + " " + this.data.font_family
            },
            draw: function () {
                this.clear(), this.draw_pixels(), this.draw_points()
            },
            clear: function () {
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
            },
            update_pixels: function () {
                this.clear();
                var t = Math.ceil(this.canvas.width / this.pixels.size),
                    e = Math.ceil(this.canvas.height / this.pixels.size),
                    n = t / this.canvas.width;
                this.context.globalAlpha = 1, this.context.globalCompositeOperation = "source-over", this.context.scale(n, n), this.context.fillStyle = this.options.background, this.context.fillRect(0, 0, this.canvas.width, this.canvas.height), this.context.textBaseline = "top", this.context.fillStyle = this.data.color, this.context.fillText(this.data.text, this.options.margin, this.options.margin);
                var i = this.context.getImageData(0, 0, t, e);
                i = i.data, this.clear();
                for (var r = [], o = 0, s = i.length; s > o; o += 4) {
                    var a = o / 4,
                        u = {};
                    u.x = a % t * this.pixels.size, u.y = Math.floor(a / t) * this.pixels.size, u.color = {}, u.color.r = i[o], u.color.g = i[o + 1], u.color.b = i[o + 2], u.color.a = 1, r.push(u)
                }
                this.pixels.items = r, this.context.scale(1 / n, 1 / n)
            },
            draw_pixels: function () {
                for (var t = 0, e = this.pixels.items.length; e > t; t++) {
                    var n = this.pixels.items[t],
                        i = ["rgba(", n.color.r, ",", n.color.g, ",", n.color.b, ",", n.color.a, ")"].join("");
                    this.is_pixel_close_enough_to_points(n) && (this.context.fillStyle = i, this.context.fillRect(n.x, n.y, this.pixels.size, this.pixels.size))
                }
            },
            draw_points: function () {
                if (this.points.draw)
                    for (var t = 0; t < this.points.items.length; t++) {
                        var e = this.points.items[t];
                        this.context.strokeStyle = "#f00", this.context.beginPath(), this.context.moveTo(e.x, e.y), this.context.arc(e.x, e.y, e.r, 0, 2 * Math.PI), this.context.stroke()
                    }
            },
            is_pixel_close_enough_to_points: function (t) {
                for (var e = 0; e < this.points.items.length; e++) {
                    var n = this.points.items[e],
                        i = t.x + this.pixels.size / 2,
                        r = t.y + this.pixels.size / 2,
                        o = Math.sqrt(Math.pow(n.x - i, 2) + Math.pow(n.y - r, 2));
                    if (o < n.r) return !0
                }
                return !1
            },
            destruct: function () {}
        })
    }(),
    function () {
        "use strict";
        B.Components.General_Loader = B.Core.Event_Emitter.extend({
            options: {},
            construct: function (t) {
                this._super(t);
                this.$.container = $(".general-loader"), this.wait_load_complete()
            },
            wait_load_complete: function () {
                var t = this;
                this.loader = new B.Tools.Loader, this.loader.on("complete", function () {
                    t.hide()
                })
            },
            hide: function () {
                var t = this;
                t.$.container.addClass("hide"), window.setTimeout(function () {
                    t.$.container.remove()
                }, 1600)
            },
            set_canvas: function () {
                var t = this;
                this.ratio = .025, this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.image = new Image, this.canvas.style.position = "fixed", this.canvas.style.top = "0px", this.canvas.style.left = "0px", this.canvas.style.zIndex = "9999", this.image.onload = function () {
                    t.canvas.width = Math.round(t.image.width * t.ratio), t.canvas.height = Math.round(t.image.height * t.ratio), t.context.drawImage(t.image, 0, 0, t.canvas.width, t.canvas.height), t.image_data = t.context.getImageData(0, 0, t.canvas.width, t.canvas.height).data, t.html = [], t.css = [];
                    var e = 100 / t.canvas.width,
                        n = 100 / t.canvas.height;
                    t.css.push([".general-loader span {display:block;position:absolute;width:", 1.02 * e, "%;height:", 1.02 * n, "%;}"].join(""));
                    for (var i = 0, r = 0; r < t.image_data.length; r += 4) {
                        var o = i % t.canvas.width,
                            s = Math.floor(i / t.canvas.width),
                            a = o * e + "%",
                            u = s * n + "%",
                            c = "p-" + Math.floor(20 * Math.random()),
                            l = ["rgba(", t.image_data[r], ",", t.image_data[r + 1], ",", t.image_data[r + 2], ",1)"].join(""),
                            h = ['<span class="', c, '" id="p-', i, '"></span>'].join(""),
                            p = ["#p-", i, "{top:", u, ";left:", a, ";background:", l, ";}"].join("");
                        t.html.push(h), t.css.push(p), i++
                    }
                    console.log(t.css.join(""))
                }, this.image.src = "src/images/loader-base.jpg", document.body.appendChild(this.canvas)
            },
            destruct: function () {}
        })
    }(),
    function () {
        "use strict";
        B.Components.Home = B.Core.Abstract.extend({
            options: {},
            type: "home",
            construct: function (t) {
                this._super(t)
            },
            destruct: function () {}
        })
    }(),
    function () {
        "use strict";
        B.Components.Project = B.Core.Abstract.extend({
            options: {},
            type: "project",
            construct: function (t) {
                this._super(t)
            },
            destruct: function () {}
        })
    }(),
    function () {
        "use strict";
        B.Components.About = B.Core.Abstract.extend({
            options: {},
            type: "about",
            construct: function (t) {
                this._super(t), this.breakpoints = new B.Tools.Breakpoints, this.viewport = new B.Tools.Viewport, this.$.container = $(".page-about"), this.$.resume = this.$.container.find(".resume"), window.setTimeout(function () {
                    this.init_censorship()
                }.bind(this), 300)
            },
            init_censorship: function () {
                function t() {
                    for (var t in o.censorship.items) {
                        var e = o.censorship.items[t];
                        e.auto_update.min_duration = 300, e.auto_update.duration_variation = 300, e.auto_update.callback()
                    }
                }

                function e() {
                    for (var t in o.censorship.items) {
                        var e = o.censorship.items[t];
                        e.auto_update.min_duration = 2200, e.auto_update.duration_variation = 2200
                    }
                }

                function n() {
                    o.censorship.line_offset = .4 * o.viewport.height
                }

                function i() {
                    var n = o.viewport.top + o.censorship.line_offset,
                        i = 0;
                    for (var r in o.censorship.items) {
                        var s = o.censorship.items[r],
                            a = Math.abs(s.$.container.offset().top - n),
                            u = 1e3 - Math.round(2 * a);
                        150 > u && (u = 150), s.points.distance = u, i++
                    }
                    o.censorship.scroll_timeout || t(), o.censorship.scroll_timeout && window.clearTimeout(o.censorship.scroll_timeout), o.censorship.scroll_timeout = window.setTimeout(function () {
                        o.censorship.scroll_timeout = null, e()
                    }, 100)
                }

                function r() {
                    var t = 70;
                    o.breakpoints.is_active("very-small") ? t = 26 : o.breakpoints.is_active("small") ? t = 30 : o.breakpoints.is_active("medium") ? t = 46 : o.breakpoints.is_active("large") ? t = 54 : o.breakpoints.is_active("very-large") && (t = 64);
                    for (var e in o.censorship.items) {
                        var n = o.censorship.items[e];
                        n.pixels.size = t, n.update_data(), n.update_canvas(), n.update_pixels(), n.update_points()
                    }
                }
                var o = this;
                this.censorship = {}, this.censorship.$ = {}, this.censorship.$.lines = this.$.resume.find(".line"), this.censorship.items = [], this.censorship.line_offset = .4 * this.viewport.height, this.censorship.scroll_timeout = null, this.censorship.$.lines.each(function () {
                    var t = $(this),
                        e = new B.Components.Censorship_Pixels({
                            target: t
                        });
                    o.censorship.items.push(e)
                }), this.breakpoints.on("update", r), this.viewport.on("scroll", i), this.viewport.on("resize", n), r(), n(), i()
            },
            destruct: function () {}
        })
    }(),
    function () {
        "use strict";
        B.Components.Side_Projects = B.Core.Abstract.extend({
            options: {},
            type: "side-project",
            construct: function (t) {
                this._super(t)
            },
            destruct: function () {}
        })
    }(),
    function () {
        "use strict";
        B.Tools.Menu = B.Core.Event_Emitter.extend({
            "static": "menu",
            options: {
                parse: !0,
                classes: {
                    to_set: "b-preview-trigger",
                    set: "b-preview-trigger-set"
                }
            },
            construct: function (t) {
                this._super(t), this.$.body = $("body"), this.$.container = $("aside.menu"), this.$.link_container = this.$.container.find(".links"), this.$.link_items = this.$.link_container.find("a"), this.$.top_buttons = this.$.container.find(".top-buttons"), this.$.top_buttons_close = this.$.top_buttons.find("a.close"), this.$.top_buttons_next = this.$.top_buttons.find("a.next"), this.$.top_buttons_prev = this.$.top_buttons.find("a.prev"), this.extended = this.$.container.hasClass("extended"), this.init_preview(), this.options.parse && this.parse()
            },
            init_preview: function () {
                this.preview_small = {
                    $: {}
                }, this.preview_small.$.container = this.$.container.find(".preview.small"), this.preview_small.$.items = this.preview_small.$.container.find(".image-container"), this.preview_large = {
                    $: {}
                }, this.preview_large.$.container = this.$.container.find(".preview.large"), this.preview_large.$.items = this.preview_large.$.container.find(".image-container")
            },
            parse: function (t) {
                var e = this;
                "undefined" != typeof t && t.length || (t = $("body"));
                var n = t.find("." + this.options.classes.to_set).not("." + this.options.classes.set);
                n.each(function () {
                    e.set($(this))
                })
            },
            set: function (t) {
                var e = this;
                t.addClass(this.options.classes.set), t.on("mouseenter", function () {
                    var n = t.data("preview-slug");
                    e.show_preview(n)
                }), t.on("mouseleave", function () {
                    e.hide_preview()
                })
            },
            show_preview: function (t) {
                var e = this.preview_small.$.items.filter("." + t),
                    n = this.preview_large.$.items.filter("." + t);
                this.$.body.addClass("preview-active"), this.extended || (this.preview_small.$.container.addClass("active"), this.preview_small.$.items.removeClass("active"), e.addClass("active")), this.preview_large.$.container.addClass("active"), this.preview_large.$.items.removeClass("active"), n.addClass("active")
            },
            hide_preview: function () {
                this.preview_small.$.container.removeClass("active"), this.preview_small.$.items.removeClass("active"), this.preview_large.$.container.removeClass("active"), this.preview_large.$.items.removeClass("active"), this.preview_large.$.items.filter(".home").addClass("active")
            },
            set_for_page: function (t) {
                var e = this.$.link_items.filter("." + t.name);
                this.$.link_items.removeClass("active"), e.addClass("active"), "home" === t.name ? (this.extend(), this.hide_preview()) : this.retract();
                var n = null,
                    i = null;
                t.next ? (n = this.$.top_buttons_next.data("href-format"), i = n.replace(":slug", t.next.slug), this.$.top_buttons_next.attr("href", i), this.$.top_buttons_next.addClass("active")) : this.$.top_buttons_next.removeClass("active"), t.prev ? (n = this.$.top_buttons_prev.data("href-format"), i = n.replace(":slug", t.prev.slug), this.$.top_buttons_prev.attr("href", i), this.$.top_buttons_prev.addClass("active")) : this.$.top_buttons_prev.removeClass("active"), t.close ? this.$.top_buttons_close.addClass("active") : this.$.top_buttons_close.removeClass("active")
            },
            extend: function () {
                this.extended = !0, this.$.container.addClass("extended")
            },
            retract: function () {
                this.extended = !1, this.$.container.removeClass("extended")
            }
        })
    }(),
    function () {
        "use strict";
        B.Tools.Ajax = B.Core.Event_Emitter.extend({
            "static": "ajax",
            options: {
                parse: !0,
                classes: {
                    container: "ajax-container",
                    to_set: "b-ajax",
                    set: "b-ajax-set"
                }
            },
            construct: function (t) {
                this._super(t), this.instance = null, this.$ = {}, this.$.container = $("." + this.options.classes.container), this.$.title = $("title"), this.$.body = $("body"), this.options.parse && this.parse(), this.init_navigation()
            },
            init_navigation: function () {
                var t = this;
                this.navigation = new B.Tools.Navigation, this.navigation.on("pop", function (e, n) {
                    t.load(n, !0)
                })
            },
            init_page: function (t) {
                var e = this;
                this.$.container.html(t.html), this.$.body.data("name") !== t.name && (this.$.body.removeClass(this.$.body.data("name")), this.$.body.data("name", t.name), window.setTimeout(function () {
                    e.$.body.addClass(t.name)
                }, 30)), this.parse(), "undefined" != typeof t.title && this.$.title.text(t.title), "undefined" != typeof t.url && this.navigation.push(t, t.url), this.trigger("init_page", [t])
            },
            parse: function (t) {
                var e = this;
                "undefined" != typeof t && t.length || (t = $("body"));
                var n = t.find("." + this.options.classes.to_set).not("." + this.options.classes.set);
                n.each(function () {
                    e.ajaxify($(this))
                })
            },
            ajaxify: function (t) {
                var e = this;
                t && t.length && (t.addClass(this.options.classes.set), t.on("click", function () {
                    return e.load(t.attr("href")), !1
                }))
            },
            load: function (t, e) {
                var n = this;
                "undefined" == typeof e && (e = !1), Q.allSettled([this.hide(), this.call(t)]).then(function (i) {
                    var r = i[1].value;
                    e || (r.url = t), n.init_page(r), n.show()
                }), this.trigger("load")
            },
            call: function (t) {
                var e = Q.defer();
                return this.instance && this.instance.abort(), this.instance = $.ajax({
                    url: t,
                    dataType: "json",
                    success: function (t) {
                        e.resolve(t)
                    },
                    error: function () {
                        console.log("error"), e.resolve()
                    }
                }), e.promise
            },
            hide: function () {
                var t = Q.defer();
                return this.$.body.addClass("ajax-transition"), window.setTimeout(function () {
                    t.resolve()
                }, 600), this.trigger("hide"), t.promise
            },
            show: function () {
                this.$.body.removeClass("ajax-transition"), this.trigger("show")
            }
        })
    }(),
    function () {
        "use strict";
        B.Tools.Loader = B.Core.Event_Emitter.extend({
            "static": "loader",
            options: {
                parse: !0,
                classes: {
                    to_load: "b-to-load",
                    loading: "b-loading",
                    loaded: "b-loaded"
                }
            },
            construct: function (t) {
                this._super(t), this.viewport = new B.Tools.Viewport, this.resizer = new B.Tools.Resizer({
                    parse: !1
                }), this.to_load = 0, this.loaded = 0, this.options.parse && this.parse()
            },
            parse: function (t) {
                var e = this;
                "undefined" != typeof t && t.length || (t = $("body"));
                var n = t.find("." + this.options.classes.to_load);
                n.each(function () {
                    e.load($(this))
                })
            },
            load: function (t) {
                function e() {
                    i.addClass(n.options.classes.loaded), i.removeClass(n.options.classes.loading), "undefined" == typeof o.attr("width") && o.attr("width", Math.round(a.width * (r ? .5 : 1))), "undefined" == typeof o.attr("height") && o.attr("height", Math.round(a.height * (r ? .5 : 1))), i.hasClass("b-resize") && n.resizer.resize(i[0], o[0]), o.attr("src", s), n.loaded++, n.trigger("progress", [n.loaded, n.to_load]), n.loaded === n.to_load && n.trigger("complete", [n.loaded, n.to_load])
                }
                var n = this,
                    i = t,
                    r = i.hasClass("retina") && this.viewport.pixel_ratio > 1.3,
                    o = i.find("img"),
                    s = o.attr("src"),
                    a = new Image,
                    u = +new Date,
                    c = i.data("loader-minimum-duration");
                this.to_load++, "undefined" == typeof c && (c = 0), r && (s = this.get_retina_path(s)), i.addClass(this.options.classes.loading), o.attr("src", ""), a.onload = function () {
                    var t = +new Date,
                        n = t - u;
                    c > n ? window.setTimeout(e, Math.random() * c) : e()
                }, a.onerror = function () {}, a.src = s
            },
            get_retina_path: function (t) {
                var e = t.split(".");
                return e[e.length - 2] = e[e.length - 2] + "@2x", t = e.join(".")
            }
        })
    }(),
    function () {
        "use strict";
        B.Tools.Unveiler = B.Core.Abstract.extend({
            "static": "unveiler",
            options: {
                parse: !0,
                safe_duration: 0,
                classes: {
                    to_set: "b-unveil",
                    set: "b-unveil-set"
                }
            },
            construct: function (t) {
                this._super(t), this.viewport = new B.Tools.Viewport, this.items = [], this.pending = null, this.start_time = +new Date, this.options.parse && this.parse(), this.init_events()
            },
            init_events: function () {
                var t = this;
                this.viewport.on("resize", function () {
                    t.update_items(), t.test_items()
                }), this.viewport.on("scroll", function () {
                    t.test_items()
                })
            },
            update_items: function () {
                for (var t = 0, e = this.items.length; e > t; t++) {
                    var n = this.items[t];
                    n.top = n.$.offset().top, n.height = n.$.outerHeight()
                }
            },
            test_items: function () {
                for (var t = 0, e = this.items.length; e > t; t++) this.test_item(this.items[t])
            },
            test_item: function (t) {
                {
                    var e = this;
                    new RegExp("/^(d+)-(d+)$/")
                }
                for (var n in t.steps) {
                    var i = t.steps[n],
                        r = i.screen / 100,
                        o = i.element / 100;
                    if (this.viewport.top + this.viewport.height * r > t.top + t.height * o) {
                        if (!i.active) {
                            var s = +new Date;
                            s - this.start_time < this.options.safe_duration ? window.setTimeout(function () {
                                t.$.addClass("b-unveil-" + i.key)
                            }, e.options.safe_duration * Math.random()) : t.$.addClass("b-unveil-" + i.key), i.active = !0
                        }
                    } else "once" !== i.mode && i.active && (t.$.removeClass("b-unveil-" + i.key), i.active = !1)
                }
            },
            parse: function (t) {
                var e = this;
                "undefined" != typeof t && t.length || (t = $("body"));
                var n = t.find("." + this.options.classes.to_set).not("." + this.options.classes.set);
                n.each(function () {
                    e.set($(this))
                })
            },
            set: function (t) {
                var e = {
                        $: t,
                        top: t.offset().top,
                        height: t.outerHeight(),
                        steps: []
                    },
                    n = e.$.data("unveiler-steps");
                if (t.addClass(this.options.classes.set), n)
                    for (var i = n.split(","), r = 0; r < i.length; r++) {
                        var o = i[r],
                            s = o.split("-");
                        e.steps.push({
                            key: s[0] + "-" + s[1],
                            screen: s[0],
                            element: s[1],
                            active: !1,
                            mode: s[2] || "once"
                        })
                    } else e.steps.push({
                        key: "100-0",
                        screen: 100,
                        element: 0,
                        active: !1,
                        mode: "once"
                    }), e.steps.push({
                        key: "100-50",
                        screen: 100,
                        element: 50,
                        active: !1,
                        mode: "once"
                    }), e.steps.push({
                        key: "100-100",
                        screen: 100,
                        element: 100,
                        active: !1,
                        mode: "once"
                    });
                this.items.push(e)
            }
        })
    }(),
    function () {
        "use strict";
        B.Tools.Navigation = B.Core.Event_Emitter.extend({
            "static": "navigation",
            options: {},
            construct: function (t) {
                this._super(t), this.history = history.pushState ? window.history : !1, this.state_id = 0, this.history && this.update_state({
                    _prevent_default_tag: 1,
                    title: document.title,
                    id: this.state_id
                }), this.init_events()
            },
            init_events: function () {
                if (this.history) {
                    var t = this;
                    window.onpopstate = function (e) {
                        var n = Object.create(e.state);
                        n._prevent_default_tag && (n.title && (document.title = n.title), n.direction = n.id < t.state_id ? "backward" : "frontward", t.state_id = n.id, t.trigger("pop", [n, window.location.href]))
                    }
                }
            },
            update_state: function (t, e) {
                if (this.history)
                    if (t._prevent_default_tag = 1, e || !this.history.state) {
                        this.history.replaceState(t, document.title, window.location.href);
                        try {
                            this.history.state = t
                        } catch (n) {
                            console.log("catch")
                        }
                    } else {
                        for (var i in t) try {
                            this.history.state[i] = t[i]
                        } catch (n) {
                            console.log("catch")
                        }
                        this.history.replaceState(this.history.state, document.title, window.location.href)
                    }
            },
            push: function (t, e) {
                this.history && (t.title && (document.title = t.title), t.id = ++this.state_id, t.tag = "test", this.history.pushState(t, t.title, e), this.trigger("push", [t, e]))
            }
        })
    }(), B.Tools.Scroller = B.Core.Abstract.extend({
        "static": "scroller",
        options: {},
        construct: function (t) {
            this._super(t), this.init_ticker()
        },
        init_ticker: function () {
            var t = this;
            this.ticker = new B.Tools.Ticker, this.ticker.on("tick", function () {
                if (t.currentTime < t.duration) {
                    t.currentTime += t.increment;
                    var e = Math.easeInOutQuad(t.currentTime, t.start, t.change, t.duration);
                    t.move_to(e)
                }
            })
        },
        move_to: function (t) {
            document.documentElement.scrollTop = t, document.body.parentNode.scrollTop = t, document.body.scrollTop = t
        },
        get_scroll_position: function () {
            return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop
        },
        animate_to: function (t, e) {
            Math.easeInOutQuad = function (t, e, n, i) {
                return t /= i / 2, 1 > t ? n / 2 * t * t + e : (t--, -n / 2 * (t * (t - 2) - 1) + e)
            }, Math.easeInCubic = function (t, e, n, i) {
                var r = (t /= i) * t * t;
                return e + n * r
            }, Math.inOutQuintic = function (t, e, n, i) {
                var r = (t /= i) * t,
                    o = r * t;
                return e + n * (6 * o * r + -15 * r * r + 10 * o)
            }, this.start = this.get_scroll_position(), this.change = t - this.start, this.currentTime = 0, this.increment = 20, this.duration = "undefined" == typeof e ? 500 : e
        }
    });
    
  
