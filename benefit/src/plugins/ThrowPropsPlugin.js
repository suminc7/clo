/*!
 * VERSION: 0.9.8
 * DATE: 2015-03-24
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * This is a special version of the plugin that is only to be used on certain sites like codepen.io. It will redirect to a page on GreenSock.com if you try using it on a different domain. Please sign up for Club GreenSock to get the fully-functional version at http://greensock.com/club/
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * ThrowPropsPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 *  For licensing details, see http://greensock.com/licensing/
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = typeof module !== 'undefined' && module.exports && typeof global !== 'undefined' ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    'use strict'
    _gsScope._gsDefine('plugins.ThrowPropsPlugin', ['plugins.TweenPlugin', 'TweenLite', 'easing.Ease', 'utils.VelocityTracker'], function(a, b, c, d) {
        var w, x, y, z, e = function() {
                a.call(this, 'throwProps'), this._overwriteProps.length = 0
            },
            f = 999999999999999,
            g = 1e-10,
            h = _gsScope._gsDefine.globals,
            i = !1,
            j = {
                x: 1,
                y: 1,
                z: 2,
                scale: 1,
                scaleX: 1,
                scaleY: 1,
                rotation: 1,
                rotationZ: 1,
                rotationX: 2,
                rotationY: 2,
                skewX: 1,
                skewY: 1,
                xPercent: 1,
                yPercent: 1
            },
            k = '',
            l = 'ThrowPropsPlugin',
            m = 'greensock.com',
            n = '/requires-membership/',
            registered = true
        // function(host) {
        //		var b = -1 !== (window ? window.location.href : "").indexOf("greensock") && -1 !== host.indexOf("localhost");
        //		var domains = [m, "codepen.io", "cdpn.io", "gannon.tv", "codecanyon.net", "themeforest.net", "cerebrax.co.uk", "tympanus.net", "tweenmax.com", "tweenlite.com", "plnkr.co", "hotjar.com", "jsfiddle.net"];
        //		for (var domainIndex = domains.length; --domainIndex > -1;)
        //			if (-1 !== host.indexOf(domains[domainIndex])){
        //				return true;
        //			}
        //		if(b && window && window.console){
        //			console.log("WARNING: a special version of ThrowPropsPlugin is running locally, but it will not work on a live domain because it is a membership benefit of Club GreenSock. Please sign up at http://greensock.com/club/ and then download the 'real' version from your GreenSock account which has no such limitations. The file you're using was likely downloaded from elsewhere on the web and is restricted to local use or on sites like codepen.io.");
        //		}
        //		return b;
        //	}(window ? window.location.host : "");
        var	 p = function(a, b, c, d) {
                for (var i, j, e = b.length, g = 0, h = f; --e > -1;) i = b[e], j = i - a, j < 0 && (j = -j), h > j && i >= d && c >= i && (g = e, h = j)
                return b[g]
            },
            q = function(a, b, c, d) {
                if (a.end === 'auto') return a
                c = isNaN(c) ? f : c, d = isNaN(d) ? -f : d
                var e = typeof a.end === 'function' ? a.end(b) : a.end instanceof Array ? p(b, a.end, c, d) : Number(a.end)
                return e > c ? e = c : d > e && (e = d), {
                    max: e,
                    min: e,
                    unitFactor: a.unitFactor
                }
            },
            r = function(a, b, c) {
                for (var d in b) void 0 === a[d] && d !== c && (a[d] = b[d])
                return a
            },
            s = e.calculateChange = function(a, d, e, f) {
                f == null && (f = 0.05)
                var g = d instanceof c ? d : d ? new c(d) : b.defaultEase
                return e * f * a / g.getRatio(f)
            },
            t = e.calculateDuration = function(a, d, e, f, g) {
                g = g || 0.05
                var h = f instanceof c ? f : f ? new c(f) : b.defaultEase
                return Math.abs((d - a) * h.getRatio(g) / e / g)
            },
            u = e.calculateTweenDuration = function(a, f, h, j, k, l) {
                if (typeof a === 'string' && (a = b.selector(a)), !a) return 0
                h == null && (h = 10), j == null && (j = 0.2), k == null && (k = 1), a.length && (a = a[0] || a)
                var w, x, y, z, A, B, C, D, E, F, m = 0,
                    n = 9999999999,
                    o = f.throwProps || f,
                    p = f.ease instanceof c ? f.ease : f.ease ? new c(f.ease) : b.defaultEase,
                    u = isNaN(o.checkpoint) ? 0.05 : Number(o.checkpoint),
                    v = isNaN(o.resistance) ? e.defaultResistance : Number(o.resistance)
                for (w in o) {
                    w !== 'resistance' && w !== 'checkpoint' && w !== 'preventOvershoot' && (x = o[w], typeof x !== 'object' && (E = E || d.getByTarget(a), E && E.isTrackingProp(w) ? x = typeof x === 'number' ? {
                        velocity: x
                    } : {
                        velocity: E.getVelocity(w)
                    } : (z = Number(x) || 0, y = z * v > 0 ? z / v : z / -v)), typeof x === 'object' && (void 0 !== x.velocity && typeof x.velocity === 'number' ? z = Number(x.velocity) || 0 : (E = E || d.getByTarget(a), z = E && E.isTrackingProp(w) ? E.getVelocity(w) : 0), A = isNaN(x.resistance) ? v : Number(x.resistance), y = z * A > 0 ? z / A : z / -A, B = typeof a[w] === 'function' ? a[w.indexOf('set') || typeof a['get' + w.substr(3)] !== 'function' ? w : 'get' + w.substr(3)]() : a[w] || 0, C = B + s(z, p, y, u), void 0 !== x.end && (x = q(x, C, x.max, x.min), (l || i) && (o[w] = r(x, o[w], 'end'))), void 0 !== x.max && C > Number(x.max) + g ? (F = x.unitFactor || e.defaultUnitFactors[w] || 1, D = B > x.max && x.min !== x.max || z * F > -15 && z * F < 45 ? j + 0.1 * (h - j) : t(B, x.max, z, p, u), n > D + k && (n = D + k)) : void 0 !== x.min && C < Number(x.min) - g && (F = x.unitFactor || e.defaultUnitFactors[w] || 1, D = B < x.min && x.min !== x.max || z * F > -45 && z * F < 15 ? j + 0.1 * (h - j) : t(B, x.min, z, p, u), n > D + k && (n = D + k)), D > m && (m = D)), y > m && (m = y))
                }
                return m > n && (m = n), m > h ? h : j > m ? j : m
            },
            v = e.prototype = new a('throwProps')
        return v.constructor = e, e.version = '0.9.8', e.API = 2, e._autoCSS = !0, e.defaultResistance = 100, e.defaultUnitFactors = {
            time: 1e3,
            totalTime: 1e3
        }, e.track = function(a, b, c) {
            return d.track(a, b, c)
        }, e.untrack = function(a, b) {
            d.untrack(a, b)
        }, e.isTracking = function(a, b) {
            return d.isTracking(a, b)
        }, e.getVelocity = function(a, b) {
            var c = d.getByTarget(a)
            return c ? c.getVelocity(b) : 0 / 0
        }, e._cssRegister = function() {
            var a = h.com.greensock.plugins.CSSPlugin
            if (a) {
                var b = a._internals,
                    c = b._parseToProxy,
                    f = b._setPluginRatio,
                    g = b.CSSPropTween
                b._registerComplexSpecialProp('throwProps', {
                    parser: function(a, b, h, i, k, l) {
                        l = new e()
                        var s, t, u, v, y, m = {},
                            n = {},
                            o = {},
                            p = {},
                            q = {},
                            r = {}
                        x = {}
                        for (u in b) u !== 'resistance' && u !== 'preventOvershoot' && (t = b[u], typeof t === 'object' ? (void 0 !== t.velocity && typeof t.velocity === 'number' ? m[u] = Number(t.velocity) || 0 : (y = y || d.getByTarget(a), m[u] = y && y.isTrackingProp(u) ? y.getVelocity(u) : 0), void 0 !== t.end && (p[u] = t.end), void 0 !== t.min && (n[u] = t.min), void 0 !== t.max && (o[u] = t.max), t.preventOvershoot && (r[u] = !0), void 0 !== t.resistance && (s = !0, q[u] = t.resistance)) : typeof t === 'number' ? m[u] = t : (y = y || d.getByTarget(a), m[u] = y && y.isTrackingProp(u) ? y.getVelocity(u) : t || 0), j[u] && i._enableTransforms(j[u] === 2))
                        v = c(a, m, i, k, l), w = v.proxy, m = v.end
                        for (u in w) {
                            x[u] = {
                                velocity: m[u],
                                min: n[u],
                                max: o[u],
                                end: p[u],
                                resistance: q[u],
                                preventOvershoot: r[u]
                            }
                        }
                        return b.resistance != null && (x.resistance = b.resistance), b.preventOvershoot && (x.preventOvershoot = !0), k = new g(a, 'throwProps', 0, 0, v.pt, 2), i._overwriteProps.pop(), k.plugin = l, k.setRatio = f, k.data = v, l._onInitTween(w, x, i._tween), k
                    }
                })
            }
        }, e.to = function(a, c, d, e, f) {
            c.throwProps || (c = {
                throwProps: c
            }), f === 0 && (c.throwProps.preventOvershoot = !0), i = !0
            var g = new b(a, 1, c)
            return g.render(0, !0, !0), g.vars.css ? (g.duration(u(w, {
                throwProps: x,
                ease: c.ease
            }, d, e, f)), g._delay && !g.vars.immediateRender ? g.invalidate() : y._onInitTween(w, z, g), i = !1, g) : (g.kill(), g = new b(a, u(a, c, d, e, f), c), i = !1, g)
        }, v._onInitTween = function(a, b, c) {
            // this.target = a; this._props = []; y = this; z = b;
            console.log(registered)
            this.target = a
            this._props = []
            y = this
            z = b
            if (!registered) {
                window.location.href = 'http://' + m + n + '?plugin=' + l + '&source=' + k
                return false
            }
            var p, t, u, v, w, x, A, B, C, e = c._ease,
                f = isNaN(b.checkpoint) ? 0.05 : Number(b.checkpoint),
                g = c._duration,
                h = b.preventOvershoot,
                j = 0
            for (p in b) {
                if (p !== 'resistance' && p !== 'checkpoint' && p !== 'preventOvershoot') {
                    if (t = b[p], typeof t === 'number') w = Number(t) || 0
                    else if (typeof t !== 'object' || isNaN(t.velocity)) {
                        if (C = C || d.getByTarget(a), !C || !C.isTrackingProp(p)) throw 'ERROR: No velocity was defined in the throwProps tween of ' + a + ' property: ' + p
                        w = C.getVelocity(p)
                    } else w = Number(t.velocity)
                    x = s(w, e, g, f), B = 0, v = typeof a[p] === 'function', u = v ? a[p.indexOf('set') || typeof a['get' + p.substr(3)] !== 'function' ? p : 'get' + p.substr(3)]() : a[p], typeof t === 'object' && (A = u + x, void 0 !== t.end && (t = q(t, A, t.max, t.min), i && (b[p] = r(t, b[p], 'end'))), void 0 !== t.max && Number(t.max) < A ? h || t.preventOvershoot ? x = t.max - u : B = t.max - u - x : void 0 !== t.min && Number(t.min) > A && (h || t.preventOvershoot ? x = t.min - u : B = t.min - u - x)), this._overwriteProps[j] = p, this._props[j++] = {
                        p: p,
                        s: u,
                        c1: x,
                        c2: B,
                        f: v,
                        r: !1
                    }
                }
            }
            return registered
        }, v._kill = function(b) {
            for (var c = this._props.length; --c > -1;) b[this._props[c].p] != null && this._props.splice(c, 1)
            return a.prototype._kill.call(this, b)
        }, v._roundProps = function(a, b) {
            for (var c = this._props, d = c.length; --d > -1;)(a[c[d]] || a.throwProps) && (c[d].r = b)
        }, v.setRatio = function(a) {
            for (var c, d, b = this._props.length; --b > -1;) c = this._props[b], d = c.s + c.c1 * a + c.c2 * a * a, c.r && (d = Math.round(d)), c.f ? this.target[c.p](d) : this.target[c.p] = d
        }, a.activate([e]), e
    }, !0), _gsScope._gsDefine('utils.VelocityTracker', ['TweenLite'], function(a) {
        var b, c, d, e, f = /([A-Z])/g,
            g = {},
            h = {
                x: 1,
                y: 1,
                z: 2,
                scale: 1,
                scaleX: 1,
                scaleY: 1,
                rotation: 1,
                rotationZ: 1,
                rotationX: 2,
                rotationY: 2,
                skewX: 1,
                skewY: 1,
                xPercent: 1,
                yPercent: 1
            },
            i = document.defaultView ? document.defaultView.getComputedStyle : function() {},
            j = function(a, b, c) {
                var d = (a._gsTransform || g)[b]
                return d || d === 0 ? d : (a.style[b] ? d = a.style[b] : (c = c || i(a, null)) ? d = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(f, '-$1').toLowerCase()) : a.currentStyle && (d = a.currentStyle[b]), parseFloat(d) || 0)
            },
            k = a.ticker,
            l = function(a, b, c) {
                this.p = a, this.f = b, this.v1 = this.v2 = 0, this.t1 = this.t2 = k.time, this.css = !1, this.type = '', this._prev = null, c && (this._next = c, c._prev = this)
            },
            m = function() {
                var f, g, a = b,
                    c = k.time
                if (c - d >= 0.03) {
                    for (e = d, d = c; a;) {
                        for (g = a._firstVP; g;) f = g.css ? j(a.target, g.p) : g.f ? a.target[g.p]() : a.target[g.p], (f !== g.v1 || c - g.t1 > 0.15) && (g.v2 = g.v1, g.v1 = f, g.t2 = g.t1, g.t1 = c), g = g._next
                        a = a._next
                    }
                }
            },
            n = function(a) {
                this._lookup = {}, this.target = a, this.elem = a.style && a.nodeType ? !0 : !1, c || (k.addEventListener('tick', m, null, !1, -100), d = e = k.time, c = !0), b && (this._next = b, b._prev = this), b = this
            },
            o = n.getByTarget = function(a) {
                for (var c = b; c;) {
                    if (c.target === a) return c
                    c = c._next
                }
            },
            p = n.prototype
        return p.addProp = function(b, c) {
            if (!this._lookup[b]) {
                var d = this.target,
                    e = typeof d[b] === 'function',
                    f = e ? this._altProp(b) : b,
                    g = this._firstVP
                this._firstVP = this._lookup[b] = this._lookup[f] = g = new l(f !== b && b.indexOf('set') === 0 ? f : b, e, g), g.css = this.elem && (void 0 !== this.target.style[g.p] || h[g.p]), g.css && h[g.p] && !d._gsTransform && a.set(d, {
                    x: '+=0',
                    overwrite: !1
                }), g.type = c || g.css && b.indexOf('rotation') === 0 ? 'deg' : '', g.v1 = g.v2 = g.css ? j(d, g.p) : e ? d[g.p]() : d[g.p]
            }
        }, p.removeProp = function(a) {
            var b = this._lookup[a]
            b && (b._prev ? b._prev._next = b._next : b === this._firstVP && (this._firstVP = b._next), b._next && (b._next._prev = b._prev), this._lookup[a] = 0, b.f && (this._lookup[this._altProp(a)] = 0))
        }, p.isTrackingProp = function(a) {
            return this._lookup[a] instanceof l
        }, p.getVelocity = function(a) {
            var d, e, f, b = this._lookup[a],
                c = this.target
            if (!b) throw 'The velocity of ' + a + ' is not being tracked.'
            return d = b.css ? j(c, b.p) : b.f ? c[b.p]() : c[b.p], e = d - b.v2, (b.type === 'rad' || b.type === 'deg') && (f = b.type === 'rad' ? 2 * Math.PI : 360, e %= f, e !== e % (f / 2) && (e = e < 0 ? e + f : e - f)), e / (k.time - b.t2)
        }, p._altProp = function(a) {
            var b = a.substr(0, 3),
                c = (b === 'get' ? 'set' : b === 'set' ? 'get' : b) + a.substr(3)
            return typeof this.target[c] === 'function' ? c : a
        }, n.getByTarget = function(c) {
            var d = b
            for (typeof c === 'string' && (c = a.selector(c)), c.length && c !== window && c[0] && c[0].style && !c.nodeType && (c = c[0]); d;) {
                if (d.target === c) return d
                d = d._next
            }
        }, n.track = function(a, b, c) {
            var d = o(a),
                e = b.split(','),
                f = e.length
            for (c = (c || '').split(','), d || (d = new n(a)); --f > -1;) d.addProp(e[f], c[f] || c[0])
            return d
        }, n.untrack = function(a, c) {
            var d = o(a),
                e = (c || '').split(','),
                f = e.length
            if (d) {
                for (; --f > -1;) d.removeProp(e[f])
                d._firstVP && c || (d._prev ? d._prev._next = d._next : d === b && (b = d._next), d._next && (d._next._prev = d._prev))
            }
        }, n.isTracking = function(a, b) {
            var c = o(a)
            return c ? !b && c._firstVP ? !0 : c.isTrackingProp(b) : !1
        }, n
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
(function(a) {
    'use strict'
    var b = function() {
        return (_gsScope.GreenSockGlobals || _gsScope)[a]
    }
    typeof define === 'function' && define.amd ? define(['TweenLite'], b) : typeof module !== 'undefined' && module.exports && (require('../TweenLite.js'), module.exports = b())
}('ThrowPropsPlugin'))
