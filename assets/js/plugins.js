// Avoid `console` errors in browsers that lack a console.
(function () {
	var method;
	var noop = function () {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

// Place any jQuery/helper plugins in here.





/*-------------------------------------------------------------
    03. Scrollup Jquery 
---------------------------------------------------------------*/
! function (l, o, e) {
	"use strict";
	l.fn.scrollUp = function (o) {
		l.data(e.body, "scrollUp") || (l.data(e.body, "scrollUp", !0), l.fn.scrollUp.init(o))
	}, l.fn.scrollUp.init = function (r) {
		var s, t, c, i, n, a, d, p = l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r),
			f = !1;
		switch (d = p.scrollTrigger ? l(p.scrollTrigger) : l("<a/>", {
			id: p.scrollName,
			href: "#top"
		}), p.scrollTitle && d.attr("title", p.scrollTitle), d.appendTo("body"), p.scrollImg || p.scrollTrigger || d.html(p.scrollText), d.css({
			display: "none",
			position: "fixed",
			zIndex: p.zIndex
		}), p.activeOverlay && l("<div/>", {
			id: p.scrollName + "-active"
		}).css({
			position: "absolute",
			top: p.scrollDistance + "px",
			width: "100%",
			borderTop: "1px dotted" + p.activeOverlay,
			zIndex: p.zIndex
		}).appendTo("body"), p.animation) {
			case "fade":
				s = "fadeIn", t = "fadeOut", c = p.animationSpeed;
				break;
			case "slide":
				s = "slideDown", t = "slideUp", c = p.animationSpeed;
				break;
			default:
				s = "show", t = "hide", c = 0
		}
		i = "top" === p.scrollFrom ? p.scrollDistance : l(e).height() - l(o).height() - p.scrollDistance, n = l(o).scroll(function () {
			l(o).scrollTop() > i ? f || (d[s](c), f = !0) : f && (d[t](c), f = !1)
		}), p.scrollTarget ? "number" == typeof p.scrollTarget ? a = p.scrollTarget : "string" == typeof p.scrollTarget && (a = Math.floor(l(p.scrollTarget).offset().top)) : a = 0, d.click(function (o) {
			o.preventDefault(), l("html, body").animate({
				scrollTop: a
			}, p.scrollSpeed, p.easingType)
		})
	}, l.fn.scrollUp.defaults = {
		scrollName: "scrollUp",
		scrollDistance: 300,
		scrollFrom: "top",
		scrollSpeed: 300,
		easingType: "linear",
		animation: "fade",
		animationSpeed: 200,
		scrollTrigger: !1,
		scrollTarget: !1,
		scrollText: "Scroll to top",
		scrollTitle: !1,
		scrollImg: !1,
		activeOverlay: !1,
		zIndex: 2147483647
	}, l.fn.scrollUp.destroy = function (r) {
		l.removeData(e.body, "scrollUp"), l("#" + l.fn.scrollUp.settings.scrollName).remove(), l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove(), l.fn.jquery.split(".")[1] >= 7 ? l(o).off("scroll", r) : l(o).unbind("scroll", r)
	}, l.scrollUp = l.fn.scrollUp
}(jQuery, window, document);






/*========= Wow Js =========*/
/*! WOW - v1.1.3 - 2016-05-06
 * Copyright (c) 2016 Matthieu Aussaguel;*/
(function () {
	var a, b, c, d, e, f = function (a, b) {
			return function () {
				return a.apply(b, arguments)
			}
		},
		g = [].indexOf || function (a) {
			for (var b = 0, c = this.length; c > b; b++)
				if (b in this && this[b] === a) return b;
			return -1
		};
	b = function () {
		function a() {}
		return a.prototype.extend = function (a, b) {
			var c, d;
			for (c in b) d = b[c], null == a[c] && (a[c] = d);
			return a
		}, a.prototype.isMobile = function (a) {
			return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
		}, a.prototype.createEvent = function (a, b, c, d) {
			var e;
			return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
		}, a.prototype.emitEvent = function (a, b) {
			return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
		}, a.prototype.addEvent = function (a, b, c) {
			return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
		}, a.prototype.removeEvent = function (a, b, c) {
			return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
		}, a.prototype.innerHeight = function () {
			return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
		}, a
	}(), c = this.WeakMap || this.MozWeakMap || (c = function () {
		function a() {
			this.keys = [], this.values = []
		}
		return a.prototype.get = function (a) {
			var b, c, d, e, f;
			for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
				if (c = f[b], c === a) return this.values[b]
		}, a.prototype.set = function (a, b) {
			var c, d, e, f, g;
			for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
				if (d = g[c], d === a) return void(this.values[c] = b);
			return this.keys.push(a), this.values.push(b)
		}, a
	}()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function () {
		function a() {
			"undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
		}
		return a.notSupported = !0, a.prototype.observe = function () {}, a
	}()), d = this.getComputedStyle || function (a, b) {
		return this.getPropertyValue = function (b) {
			var c;
			return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function (a, b) {
				return b.toUpperCase()
			}), (null != (c = a.currentStyle) ? c[b] : void 0) || null
		}, this
	}, e = /(\-([a-z]){1})/g, this.WOW = function () {
		function e(a) {
			null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass)
		}
		return e.prototype.defaults = {
			boxClass: "wow",
			animateClass: "animated",
			offset: 0,
			mobile: !0,
			live: !0,
			callback: null,
			scrollContainer: null
		}, e.prototype.init = function () {
			var a;
			return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
		}, e.prototype.start = function () {
			var b, c, d, e;
			if (this.stopped = !1, this.boxes = function () {
					var a, c, d, e;
					for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
					return e
				}.call(this), this.all = function () {
					var a, c, d, e;
					for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
					return e
				}.call(this), this.boxes.length)
				if (this.disabled()) this.resetStyle();
				else
					for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
			return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function (a) {
				return function (b) {
					var c, d, e, f, g;
					for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function () {
						var a, b, c, d;
						for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e));
						return d
					}.call(a));
					return g
				}
			}(this)).observe(document.body, {
				childList: !0,
				subtree: !0
			}) : void 0
		}, e.prototype.stop = function () {
			return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
		}, e.prototype.sync = function (b) {
			return a.notSupported ? this.doSync(this.element) : void 0
		}, e.prototype.doSync = function (a) {
			var b, c, d, e, f;
			if (null == a && (a = this.element), 1 === a.nodeType) {
				for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
				return f
			}
		}, e.prototype.show = function (a) {
			return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a
		}, e.prototype.applyStyle = function (a, b) {
			var c, d, e;
			return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function (f) {
				return function () {
					return f.customStyle(a, b, d, c, e)
				}
			}(this))
		}, e.prototype.animate = function () {
			return "requestAnimationFrame" in window ? function (a) {
				return window.requestAnimationFrame(a)
			} : function (a) {
				return a()
			}
		}(), e.prototype.resetStyle = function () {
			var a, b, c, d, e;
			for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible");
			return e
		}, e.prototype.resetAnimation = function (a) {
			var b;
			return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
		}, e.prototype.customStyle = function (a, b, c, d, e) {
			return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
				animationDuration: c
			}), d && this.vendorSet(a.style, {
				animationDelay: d
			}), e && this.vendorSet(a.style, {
				animationIterationCount: e
			}), this.vendorSet(a.style, {
				animationName: b ? "none" : this.cachedAnimationName(a)
			}), a
		}, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function (a, b) {
			var c, d, e, f;
			d = [];
			for (c in b) e = b[c], a["" + c] = e, d.push(function () {
				var b, d, g, h;
				for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
				return h
			}.call(this));
			return d
		}, e.prototype.vendorCSS = function (a, b) {
			var c, e, f, g, h, i;
			for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
			return g
		}, e.prototype.animationName = function (a) {
			var b;
			try {
				b = this.vendorCSS(a, "animation-name").cssText
			} catch (c) {
				b = d(a).getPropertyValue("animation-name")
			}
			return "none" === b ? "" : b
		}, e.prototype.cacheAnimationName = function (a) {
			return this.animationNameCache.set(a, this.animationName(a))
		}, e.prototype.cachedAnimationName = function (a) {
			return this.animationNameCache.get(a)
		}, e.prototype.scrollHandler = function () {
			return this.scrolled = !0
		}, e.prototype.scrollCallback = function () {
			var a;
			return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
				var b, c, d, e;
				for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
				return e
			}.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
		}, e.prototype.offsetTop = function (a) {
			for (var b; void 0 === a.offsetTop;) a = a.parentNode;
			for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
			return b
		}, e.prototype.isVisible = function (a) {
			var b, c, d, e, f;
			return c = a.getAttribute("data-wow-offset") || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
		}, e.prototype.util = function () {
			return null != this._util ? this._util : this._util = new b
		}, e.prototype.disabled = function () {
			return !this.config.mobile && this.util().isMobile(navigator.userAgent)
		}, e
	}()
}).call(this);










/*!
 * jquery.counterup.js 1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Date: Nov 26, 2013
 */
(function (e) {
	"use strict";
	e.fn.counterUp = function (t) {
		var n = e.extend({
			time: 400,
			delay: 10
		}, t);
		return this.each(function () {
			var t = e(this),
				r = n,
				i = function () {
					var e = [],
						n = r.time / r.delay,
						i = t.text(),
						s = /[0-9]+,[0-9]+/.test(i);
					i = i.replace(/,/g, "");
					var o = /^[0-9]+$/.test(i),
						u = /^[0-9]+\.[0-9]+$/.test(i),
						a = u ? (i.split(".")[1] || []).length : 0;
					for (var f = n; f >= 1; f--) {
						var l = parseInt(i / n * f);
						u && (l = parseFloat(i / n * f).toFixed(a));
						if (s)
							while (/(\d+)(\d{3})/.test(l.toString())) l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2");
						e.unshift(l)
					}
					t.data("counterup-nums", e);
					t.text("0");
					var c = function () {
						t.text(t.data("counterup-nums").shift());
						if (t.data("counterup-nums").length) setTimeout(t.data("counterup-func"), r.delay);
						else {
							delete t.data("counterup-nums");
							t.data("counterup-nums", null);
							t.data("counterup-func", null)
						}
					};
					t.data("counterup-func", c);
					setTimeout(t.data("counterup-func"), r.delay)
				};
			t.waypoint(i, {
				offset: "100%",
				triggerOnce: !0
			})
		})
	}
})(jQuery);



// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function () {
	var t = [].indexOf || function (t) {
			for (var e = 0, n = this.length; e < n; e++) {
				if (e in this && this[e] === t) return e
			}
			return -1
		},
		e = [].slice;
	(function (t, e) {
		if (typeof define === "function" && define.amd) {
			return define("waypoints", ["jquery"], function (n) {
				return e(n, t)
			})
		} else {
			return e(t.jQuery, t)
		}
	})(this, function (n, r) {
		var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
		i = n(r);
		c = t.call(r, "ontouchstart") >= 0;
		s = {
			horizontal: {},
			vertical: {}
		};
		f = 1;
		a = {};
		u = "waypoints-context-id";
		p = "resize.waypoints";
		y = "scroll.waypoints";
		v = 1;
		w = "waypoints-waypoint-ids";
		g = "waypoint";
		m = "waypoints";
		o = function () {
			function t(t) {
				var e = this;
				this.$element = t;
				this.element = t[0];
				this.didResize = false;
				this.didScroll = false;
				this.id = "context" + f++;
				this.oldScroll = {
					x: t.scrollLeft(),
					y: t.scrollTop()
				};
				this.waypoints = {
					horizontal: {},
					vertical: {}
				};
				t.data(u, this.id);
				a[this.id] = this;
				t.bind(y, function () {
					var t;
					if (!(e.didScroll || c)) {
						e.didScroll = true;
						t = function () {
							e.doScroll();
							return e.didScroll = false
						};
						return r.setTimeout(t, n[m].settings.scrollThrottle)
					}
				});
				t.bind(p, function () {
					var t;
					if (!e.didResize) {
						e.didResize = true;
						t = function () {
							n[m]("refresh");
							return e.didResize = false
						};
						return r.setTimeout(t, n[m].settings.resizeThrottle)
					}
				})
			}
			t.prototype.doScroll = function () {
				var t, e = this;
				t = {
					horizontal: {
						newScroll: this.$element.scrollLeft(),
						oldScroll: this.oldScroll.x,
						forward: "right",
						backward: "left"
					},
					vertical: {
						newScroll: this.$element.scrollTop(),
						oldScroll: this.oldScroll.y,
						forward: "down",
						backward: "up"
					}
				};
				if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
					n[m]("refresh")
				}
				n.each(t, function (t, r) {
					var i, o, l;
					l = [];
					o = r.newScroll > r.oldScroll;
					i = o ? r.forward : r.backward;
					n.each(e.waypoints[t], function (t, e) {
						var n, i;
						if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
							return l.push(e)
						} else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
							return l.push(e)
						}
					});
					l.sort(function (t, e) {
						return t.offset - e.offset
					});
					if (!o) {
						l.reverse()
					}
					return n.each(l, function (t, e) {
						if (e.options.continuous || t === l.length - 1) {
							return e.trigger([i])
						}
					})
				});
				return this.oldScroll = {
					x: t.horizontal.newScroll,
					y: t.vertical.newScroll
				}
			};
			t.prototype.refresh = function () {
				var t, e, r, i = this;
				r = n.isWindow(this.element);
				e = this.$element.offset();
				this.doScroll();
				t = {
					horizontal: {
						contextOffset: r ? 0 : e.left,
						contextScroll: r ? 0 : this.oldScroll.x,
						contextDimension: this.$element.width(),
						oldScroll: this.oldScroll.x,
						forward: "right",
						backward: "left",
						offsetProp: "left"
					},
					vertical: {
						contextOffset: r ? 0 : e.top,
						contextScroll: r ? 0 : this.oldScroll.y,
						contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
						oldScroll: this.oldScroll.y,
						forward: "down",
						backward: "up",
						offsetProp: "top"
					}
				};
				return n.each(t, function (t, e) {
					return n.each(i.waypoints[t], function (t, r) {
						var i, o, l, s, f;
						i = r.options.offset;
						l = r.offset;
						o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
						if (n.isFunction(i)) {
							i = i.apply(r.element)
						} else if (typeof i === "string") {
							i = parseFloat(i);
							if (r.options.offset.indexOf("%") > -1) {
								i = Math.ceil(e.contextDimension * i / 100)
							}
						}
						r.offset = o - e.contextOffset + e.contextScroll - i;
						if (r.options.onlyOnScroll && l != null || !r.enabled) {
							return
						}
						if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
							return r.trigger([e.backward])
						} else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
							return r.trigger([e.forward])
						} else if (l === null && e.oldScroll >= r.offset) {
							return r.trigger([e.forward])
						}
					})
				})
			};
			t.prototype.checkEmpty = function () {
				if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
					this.$element.unbind([p, y].join(" "));
					return delete a[this.id]
				}
			};
			return t
		}();
		l = function () {
			function t(t, e, r) {
				var i, o;
				r = n.extend({}, n.fn[g].defaults, r);
				if (r.offset === "bottom-in-view") {
					r.offset = function () {
						var t;
						t = n[m]("viewportHeight");
						if (!n.isWindow(e.element)) {
							t = e.$element.height()
						}
						return t - n(this).outerHeight()
					}
				}
				this.$element = t;
				this.element = t[0];
				this.axis = r.horizontal ? "horizontal" : "vertical";
				this.callback = r.handler;
				this.context = e;
				this.enabled = r.enabled;
				this.id = "waypoints" + v++;
				this.offset = null;
				this.options = r;
				e.waypoints[this.axis][this.id] = this;
				s[this.axis][this.id] = this;
				i = (o = t.data(w)) != null ? o : [];
				i.push(this.id);
				t.data(w, i)
			}
			t.prototype.trigger = function (t) {
				if (!this.enabled) {
					return
				}
				if (this.callback != null) {
					this.callback.apply(this.element, t)
				}
				if (this.options.triggerOnce) {
					return this.destroy()
				}
			};
			t.prototype.disable = function () {
				return this.enabled = false
			};
			t.prototype.enable = function () {
				this.context.refresh();
				return this.enabled = true
			};
			t.prototype.destroy = function () {
				delete s[this.axis][this.id];
				delete this.context.waypoints[this.axis][this.id];
				return this.context.checkEmpty()
			};
			t.getWaypointsByElement = function (t) {
				var e, r;
				r = n(t).data(w);
				if (!r) {
					return []
				}
				e = n.extend({}, s.horizontal, s.vertical);
				return n.map(r, function (t) {
					return e[t]
				})
			};
			return t
		}();
		d = {
			init: function (t, e) {
				var r;
				if (e == null) {
					e = {}
				}
				if ((r = e.handler) == null) {
					e.handler = t
				}
				this.each(function () {
					var t, r, i, s;
					t = n(this);
					i = (s = e.context) != null ? s : n.fn[g].defaults.context;
					if (!n.isWindow(i)) {
						i = t.closest(i)
					}
					i = n(i);
					r = a[i.data(u)];
					if (!r) {
						r = new o(i)
					}
					return new l(t, r, e)
				});
				n[m]("refresh");
				return this
			},
			disable: function () {
				return d._invoke(this, "disable")
			},
			enable: function () {
				return d._invoke(this, "enable")
			},
			destroy: function () {
				return d._invoke(this, "destroy")
			},
			prev: function (t, e) {
				return d._traverse.call(this, t, e, function (t, e, n) {
					if (e > 0) {
						return t.push(n[e - 1])
					}
				})
			},
			next: function (t, e) {
				return d._traverse.call(this, t, e, function (t, e, n) {
					if (e < n.length - 1) {
						return t.push(n[e + 1])
					}
				})
			},
			_traverse: function (t, e, i) {
				var o, l;
				if (t == null) {
					t = "vertical"
				}
				if (e == null) {
					e = r
				}
				l = h.aggregate(e);
				o = [];
				this.each(function () {
					var e;
					e = n.inArray(this, l[t]);
					return i(o, e, l[t])
				});
				return this.pushStack(o)
			},
			_invoke: function (t, e) {
				t.each(function () {
					var t;
					t = l.getWaypointsByElement(this);
					return n.each(t, function (t, n) {
						n[e]();
						return true
					})
				});
				return this
			}
		};
		n.fn[g] = function () {
			var t, r;
			r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
			if (d[r]) {
				return d[r].apply(this, t)
			} else if (n.isFunction(r)) {
				return d.init.apply(this, arguments)
			} else if (n.isPlainObject(r)) {
				return d.init.apply(this, [null, r])
			} else if (!r) {
				return n.error("jQuery Waypoints needs a callback function or handler option.")
			} else {
				return n.error("The " + r + " method does not exist in jQuery Waypoints.")
			}
		};
		n.fn[g].defaults = {
			context: r,
			continuous: true,
			enabled: true,
			horizontal: false,
			offset: 0,
			triggerOnce: false
		};
		h = {
			refresh: function () {
				return n.each(a, function (t, e) {
					return e.refresh()
				})
			},
			viewportHeight: function () {
				var t;
				return (t = r.innerHeight) != null ? t : i.height()
			},
			aggregate: function (t) {
				var e, r, i;
				e = s;
				if (t) {
					e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0
				}
				if (!e) {
					return []
				}
				r = {
					horizontal: [],
					vertical: []
				};
				n.each(r, function (t, i) {
					n.each(e[t], function (t, e) {
						return i.push(e)
					});
					i.sort(function (t, e) {
						return t.offset - e.offset
					});
					r[t] = n.map(i, function (t) {
						return t.element
					});
					return r[t] = n.unique(r[t])
				});
				return r
			},
			above: function (t) {
				if (t == null) {
					t = r
				}
				return h._filter(t, "vertical", function (t, e) {
					return e.offset <= t.oldScroll.y
				})
			},
			below: function (t) {
				if (t == null) {
					t = r
				}
				return h._filter(t, "vertical", function (t, e) {
					return e.offset > t.oldScroll.y
				})
			},
			left: function (t) {
				if (t == null) {
					t = r
				}
				return h._filter(t, "horizontal", function (t, e) {
					return e.offset <= t.oldScroll.x
				})
			},
			right: function (t) {
				if (t == null) {
					t = r
				}
				return h._filter(t, "horizontal", function (t, e) {
					return e.offset > t.oldScroll.x
				})
			},
			enable: function () {
				return h._invoke("enable")
			},
			disable: function () {
				return h._invoke("disable")
			},
			destroy: function () {
				return h._invoke("destroy")
			},
			extendFn: function (t, e) {
				return d[t] = e
			},
			_invoke: function (t) {
				var e;
				e = n.extend({}, s.vertical, s.horizontal);
				return n.each(e, function (e, n) {
					n[t]();
					return true
				})
			},
			_filter: function (t, e, r) {
				var i, o;
				i = a[n(t).data(u)];
				if (!i) {
					return []
				}
				o = [];
				n.each(i.waypoints[e], function (t, e) {
					if (r(i, e)) {
						return o.push(e)
					}
				});
				o.sort(function (t, e) {
					return t.offset - e.offset
				});
				return n.map(o, function (t) {
					return t.element
				})
			}
		};
		n[m] = function () {
			var t, n;
			n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
			if (h[n]) {
				return h[n].apply(null, t)
			} else {
				return h.aggregate.call(null, n)
			}
		};
		n[m].settings = {
			resizeThrottle: 100,
			scrollThrottle: 30
		};
		return i.load(function () {
			return n[m]("refresh")
		})
	})
}).call(this);






/* jQuery elevateZoom 3.0.8 - Demo's and documentation: - www.elevateweb.co.uk/image-zoom - Copyright (c) 2013 Andrew Eades - www.elevateweb.co.uk - Dual licensed under the LGPL licenses. - http://en.wikipedia.org/wiki/MIT_License - http://en.wikipedia.org/wiki/GNU_General_Public_License */
"function" !== typeof Object.create && (Object.create = function (d) {
	function h() {}
	h.prototype = d;
	return new h
});
(function (d, h, l, m) {
	var k = {
		init: function (b, a) {
			var c = this;
			c.elem = a;
			c.$elem = d(a);
			c.imageSrc = c.$elem.data("zoom-image") ? c.$elem.data("zoom-image") : c.$elem.attr("src");
			c.options = d.extend({}, d.fn.elevateZoom.options, b);
			c.options.tint && (c.options.lensColour = "none", c.options.lensOpacity = "1");
			"inner" == c.options.zoomType && (c.options.showLens = !1);
			c.$elem.parent().removeAttr("title").removeAttr("alt");
			c.zoomImage = c.imageSrc;
			c.refresh(1);
			d("#" + c.options.gallery + " a").click(function (a) {
				c.options.galleryActiveClass &&
					(d("#" + c.options.gallery + " a").removeClass(c.options.galleryActiveClass), d(this).addClass(c.options.galleryActiveClass));
				a.preventDefault();
				d(this).data("zoom-image") ? c.zoomImagePre = d(this).data("zoom-image") : c.zoomImagePre = d(this).data("image");
				c.swaptheimage(d(this).data("image"), c.zoomImagePre);
				return !1
			})
		},
		refresh: function (b) {
			var a = this;
			setTimeout(function () {
				a.fetch(a.imageSrc)
			}, b || a.options.refresh)
		},
		fetch: function (b) {
			var a = this,
				c = new Image;
			c.onload = function () {
				a.largeWidth = c.width;
				a.largeHeight =
					c.height;
				a.startZoom();
				a.currentImage = a.imageSrc;
				a.options.onZoomedImageLoaded(a.$elem)
			};
			c.src = b
		},
		startZoom: function () {
			var b = this;
			b.nzWidth = b.$elem.width();
			b.nzHeight = b.$elem.height();
			b.isWindowActive = !1;
			b.isLensActive = !1;
			b.isTintActive = !1;
			b.overWindow = !1;
			b.options.imageCrossfade && (b.zoomWrap = b.$elem.wrap('<div style="height:' + b.nzHeight + "px;width:" + b.nzWidth + 'px;" class="zoomWrapper" />'), b.$elem.css("position", "absolute"));
			b.zoomLock = 1;
			b.scrollingLock = !1;
			b.changeBgSize = !1;
			b.currentZoomLevel = b.options.zoomLevel;
			b.nzOffset = b.$elem.offset();
			b.widthRatio = b.largeWidth / b.currentZoomLevel / b.nzWidth;
			b.heightRatio = b.largeHeight / b.currentZoomLevel / b.nzHeight;
			"window" == b.options.zoomType && (b.zoomWindowStyle = "overflow: hidden;background-position: 0px 0px;text-align:center;background-color: " + String(b.options.zoomWindowBgColour) + ";width: " + String(b.options.zoomWindowWidth) + "px;height: " + String(b.options.zoomWindowHeight) + "px;float: left;background-size: " + b.largeWidth / b.currentZoomLevel + "px " + b.largeHeight / b.currentZoomLevel +
				"px;display: none;z-index:100;border: " + String(b.options.borderSize) + "px solid " + b.options.borderColour + ";background-repeat: no-repeat;position: absolute;");
			if ("inner" == b.options.zoomType) {
				var a = b.$elem.css("border-left-width");
				b.zoomWindowStyle = "overflow: hidden;margin-left: " + String(a) + ";margin-top: " + String(a) + ";background-position: 0px 0px;width: " + String(b.nzWidth) + "px;height: " + String(b.nzHeight) + "px;float: left;display: none;cursor:" + b.options.cursor + ";px solid " + b.options.borderColour + ";background-repeat: no-repeat;position: absolute;"
			}
			"window" ==
			b.options.zoomType && (lensHeight = b.nzHeight < b.options.zoomWindowWidth / b.widthRatio ? b.nzHeight : String(b.options.zoomWindowHeight / b.heightRatio), lensWidth = b.largeWidth < b.options.zoomWindowWidth ? b.nzWidth : b.options.zoomWindowWidth / b.widthRatio, b.lensStyle = "background-position: 0px 0px;width: " + String(b.options.zoomWindowWidth / b.widthRatio) + "px;height: " + String(b.options.zoomWindowHeight / b.heightRatio) + "px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:" +
				b.options.lensOpacity + ";filter: alpha(opacity = " + 100 * b.options.lensOpacity + "); zoom:1;width:" + lensWidth + "px;height:" + lensHeight + "px;background-color:" + b.options.lensColour + ";cursor:" + b.options.cursor + ";border: " + b.options.lensBorderSize + "px solid " + b.options.lensBorderColour + ";background-repeat: no-repeat;position: absolute;");
			b.tintStyle = "display: block;position: absolute;background-color: " + b.options.tintColour + ";filter:alpha(opacity=0);opacity: 0;width: " + b.nzWidth + "px;height: " + b.nzHeight + "px;";
			b.lensRound = "";
			"lens" == b.options.zoomType && (b.lensStyle = "background-position: 0px 0px;float: left;display: none;border: " + String(b.options.borderSize) + "px solid " + b.options.borderColour + ";width:" + String(b.options.lensSize) + "px;height:" + String(b.options.lensSize) + "px;background-repeat: no-repeat;position: absolute;");
			"round" == b.options.lensShape && (b.lensRound = "border-top-left-radius: " + String(b.options.lensSize / 2 + b.options.borderSize) + "px;border-top-right-radius: " + String(b.options.lensSize / 2 + b.options.borderSize) +
				"px;border-bottom-left-radius: " + String(b.options.lensSize / 2 + b.options.borderSize) + "px;border-bottom-right-radius: " + String(b.options.lensSize / 2 + b.options.borderSize) + "px;");
			b.zoomContainer = d('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:' + b.nzOffset.left + "px;top:" + b.nzOffset.top + "px;height:" + b.nzHeight + "px;width:" + b.nzWidth + 'px;"></div>');
			d("body").append(b.zoomContainer);
			b.options.containLensZoom && "lens" == b.options.zoomType && b.zoomContainer.css("overflow",
				"hidden");
			"inner" != b.options.zoomType && (b.zoomLens = d("<div class='zoomLens' style='" + b.lensStyle + b.lensRound + "'>&nbsp;</div>").appendTo(b.zoomContainer).click(function () {
				b.$elem.trigger("click")
			}), b.options.tint && (b.tintContainer = d("<div/>").addClass("tintContainer"), b.zoomTint = d("<div class='zoomTint' style='" + b.tintStyle + "'></div>"), b.zoomLens.wrap(b.tintContainer), b.zoomTintcss = b.zoomLens.after(b.zoomTint), b.zoomTintImage = d('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: ' +
				b.nzWidth + "px; height: " + b.nzHeight + 'px;" src="' + b.imageSrc + '">').appendTo(b.zoomLens).click(function () {
				b.$elem.trigger("click")
			})));
			isNaN(b.options.zoomWindowPosition) ? b.zoomWindow = d("<div style='z-index:999;left:" + b.windowOffsetLeft + "px;top:" + b.windowOffsetTop + "px;" + b.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo("body").click(function () {
				b.$elem.trigger("click")
			}) : b.zoomWindow = d("<div style='z-index:999;left:" + b.windowOffsetLeft + "px;top:" + b.windowOffsetTop + "px;" + b.zoomWindowStyle +
				"' class='zoomWindow'>&nbsp;</div>").appendTo(b.zoomContainer).click(function () {
				b.$elem.trigger("click")
			});
			b.zoomWindowContainer = d("<div/>").addClass("zoomWindowContainer").css("width", b.options.zoomWindowWidth);
			b.zoomWindow.wrap(b.zoomWindowContainer);
			"lens" == b.options.zoomType && b.zoomLens.css({
				backgroundImage: "url('" + b.imageSrc + "')"
			});
			"window" == b.options.zoomType && b.zoomWindow.css({
				backgroundImage: "url('" + b.imageSrc + "')"
			});
			"inner" == b.options.zoomType && b.zoomWindow.css({
				backgroundImage: "url('" + b.imageSrc +
					"')"
			});
			b.$elem.bind("touchmove", function (a) {
				a.preventDefault();
				b.setPosition(a.originalEvent.touches[0] || a.originalEvent.changedTouches[0])
			});
			b.zoomContainer.bind("touchmove", function (a) {
				"inner" == b.options.zoomType && b.showHideWindow("show");
				a.preventDefault();
				b.setPosition(a.originalEvent.touches[0] || a.originalEvent.changedTouches[0])
			});
			b.zoomContainer.bind("touchend", function (a) {
				b.showHideWindow("hide");
				b.options.showLens && b.showHideLens("hide");
				b.options.tint && "inner" != b.options.zoomType && b.showHideTint("hide")
			});
			b.$elem.bind("touchend", function (a) {
				b.showHideWindow("hide");
				b.options.showLens && b.showHideLens("hide");
				b.options.tint && "inner" != b.options.zoomType && b.showHideTint("hide")
			});
			b.options.showLens && (b.zoomLens.bind("touchmove", function (a) {
				a.preventDefault();
				b.setPosition(a.originalEvent.touches[0] || a.originalEvent.changedTouches[0])
			}), b.zoomLens.bind("touchend", function (a) {
				b.showHideWindow("hide");
				b.options.showLens && b.showHideLens("hide");
				b.options.tint && "inner" != b.options.zoomType && b.showHideTint("hide")
			}));
			b.$elem.bind("mousemove", function (a) {
				!1 == b.overWindow && b.setElements("show");
				if (b.lastX !== a.clientX || b.lastY !== a.clientY) b.setPosition(a), b.currentLoc = a;
				b.lastX = a.clientX;
				b.lastY = a.clientY
			});
			b.zoomContainer.bind("mousemove", function (a) {
				!1 == b.overWindow && b.setElements("show");
				if (b.lastX !== a.clientX || b.lastY !== a.clientY) b.setPosition(a), b.currentLoc = a;
				b.lastX = a.clientX;
				b.lastY = a.clientY
			});
			"inner" != b.options.zoomType && b.zoomLens.bind("mousemove", function (a) {
				if (b.lastX !== a.clientX || b.lastY !== a.clientY) b.setPosition(a),
					b.currentLoc = a;
				b.lastX = a.clientX;
				b.lastY = a.clientY
			});
			b.options.tint && "inner" != b.options.zoomType && b.zoomTint.bind("mousemove", function (a) {
				if (b.lastX !== a.clientX || b.lastY !== a.clientY) b.setPosition(a), b.currentLoc = a;
				b.lastX = a.clientX;
				b.lastY = a.clientY
			});
			"inner" == b.options.zoomType && b.zoomWindow.bind("mousemove", function (a) {
				if (b.lastX !== a.clientX || b.lastY !== a.clientY) b.setPosition(a), b.currentLoc = a;
				b.lastX = a.clientX;
				b.lastY = a.clientY
			});
			b.zoomContainer.add(b.$elem).mouseenter(function () {
				!1 == b.overWindow &&
					b.setElements("show")
			}).mouseleave(function () {
				b.scrollLock || b.setElements("hide")
			});
			"inner" != b.options.zoomType && b.zoomWindow.mouseenter(function () {
				b.overWindow = !0;
				b.setElements("hide")
			}).mouseleave(function () {
				b.overWindow = !1
			});
			b.minZoomLevel = b.options.minZoomLevel ? b.options.minZoomLevel : 2 * b.options.scrollZoomIncrement;
			b.options.scrollZoom && b.zoomContainer.add(b.$elem).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function (a) {
				b.scrollLock = !0;
				clearTimeout(d.data(this, "timer"));
				d.data(this, "timer",
					setTimeout(function () {
						b.scrollLock = !1
					}, 250));
				var e = a.originalEvent.wheelDelta || -1 * a.originalEvent.detail;
				a.stopImmediatePropagation();
				a.stopPropagation();
				a.preventDefault();
				0 < e / 120 ? b.currentZoomLevel >= b.minZoomLevel && b.changeZoomLevel(b.currentZoomLevel - b.options.scrollZoomIncrement) : b.options.maxZoomLevel ? b.currentZoomLevel <= b.options.maxZoomLevel && b.changeZoomLevel(parseFloat(b.currentZoomLevel) + b.options.scrollZoomIncrement) : b.changeZoomLevel(parseFloat(b.currentZoomLevel) + b.options.scrollZoomIncrement);
				return !1
			})
		},
		setElements: function (b) {
			if (!this.options.zoomEnabled) return !1;
			"show" == b && this.isWindowSet && ("inner" == this.options.zoomType && this.showHideWindow("show"), "window" == this.options.zoomType && this.showHideWindow("show"), this.options.showLens && this.showHideLens("show"), this.options.tint && "inner" != this.options.zoomType && this.showHideTint("show"));
			"hide" == b && ("window" == this.options.zoomType && this.showHideWindow("hide"), this.options.tint || this.showHideWindow("hide"), this.options.showLens && this.showHideLens("hide"),
				this.options.tint && this.showHideTint("hide"))
		},
		setPosition: function (b) {
			if (!this.options.zoomEnabled) return !1;
			this.nzHeight = this.$elem.height();
			this.nzWidth = this.$elem.width();
			this.nzOffset = this.$elem.offset();
			this.options.tint && "inner" != this.options.zoomType && (this.zoomTint.css({
				top: 0
			}), this.zoomTint.css({
				left: 0
			}));
			this.options.responsive && !this.options.scrollZoom && this.options.showLens && (lensHeight = this.nzHeight < this.options.zoomWindowWidth / this.widthRatio ? this.nzHeight : String(this.options.zoomWindowHeight /
				this.heightRatio), lensWidth = this.largeWidth < this.options.zoomWindowWidth ? this.nzWidth : this.options.zoomWindowWidth / this.widthRatio, this.widthRatio = this.largeWidth / this.nzWidth, this.heightRatio = this.largeHeight / this.nzHeight, "lens" != this.options.zoomType && (lensHeight = this.nzHeight < this.options.zoomWindowWidth / this.widthRatio ? this.nzHeight : String(this.options.zoomWindowHeight / this.heightRatio), lensWidth = this.options.zoomWindowWidth < this.options.zoomWindowWidth ? this.nzWidth : this.options.zoomWindowWidth /
				this.widthRatio, this.zoomLens.css("width", lensWidth), this.zoomLens.css("height", lensHeight), this.options.tint && (this.zoomTintImage.css("width", this.nzWidth), this.zoomTintImage.css("height", this.nzHeight))), "lens" == this.options.zoomType && this.zoomLens.css({
				width: String(this.options.lensSize) + "px",
				height: String(this.options.lensSize) + "px"
			}));
			this.zoomContainer.css({
				top: this.nzOffset.top
			});
			this.zoomContainer.css({
				left: this.nzOffset.left
			});
			this.mouseLeft = parseInt(b.pageX - this.nzOffset.left);
			this.mouseTop =
				parseInt(b.pageY - this.nzOffset.top);
			"window" == this.options.zoomType && (this.Etoppos = this.mouseTop < this.zoomLens.height() / 2, this.Eboppos = this.mouseTop > this.nzHeight - this.zoomLens.height() / 2 - 2 * this.options.lensBorderSize, this.Eloppos = this.mouseLeft < 0 + this.zoomLens.width() / 2, this.Eroppos = this.mouseLeft > this.nzWidth - this.zoomLens.width() / 2 - 2 * this.options.lensBorderSize);
			"inner" == this.options.zoomType && (this.Etoppos = this.mouseTop < this.nzHeight / 2 / this.heightRatio, this.Eboppos = this.mouseTop > this.nzHeight -
				this.nzHeight / 2 / this.heightRatio, this.Eloppos = this.mouseLeft < 0 + this.nzWidth / 2 / this.widthRatio, this.Eroppos = this.mouseLeft > this.nzWidth - this.nzWidth / 2 / this.widthRatio - 2 * this.options.lensBorderSize);
			0 >= this.mouseLeft || 0 > this.mouseTop || this.mouseLeft > this.nzWidth || this.mouseTop > this.nzHeight ? this.setElements("hide") : (this.options.showLens && (this.lensLeftPos = String(this.mouseLeft - this.zoomLens.width() / 2), this.lensTopPos = String(this.mouseTop - this.zoomLens.height() / 2)), this.Etoppos && (this.lensTopPos = 0),
				this.Eloppos && (this.tintpos = this.lensLeftPos = this.windowLeftPos = 0), "window" == this.options.zoomType && (this.Eboppos && (this.lensTopPos = Math.max(this.nzHeight - this.zoomLens.height() - 2 * this.options.lensBorderSize, 0)), this.Eroppos && (this.lensLeftPos = this.nzWidth - this.zoomLens.width() - 2 * this.options.lensBorderSize)), "inner" == this.options.zoomType && (this.Eboppos && (this.lensTopPos = Math.max(this.nzHeight - 2 * this.options.lensBorderSize, 0)), this.Eroppos && (this.lensLeftPos = this.nzWidth - this.nzWidth - 2 * this.options.lensBorderSize)),
				"lens" == this.options.zoomType && (this.windowLeftPos = String(-1 * ((b.pageX - this.nzOffset.left) * this.widthRatio - this.zoomLens.width() / 2)), this.windowTopPos = String(-1 * ((b.pageY - this.nzOffset.top) * this.heightRatio - this.zoomLens.height() / 2)), this.zoomLens.css({
					backgroundPosition: this.windowLeftPos + "px " + this.windowTopPos + "px"
				}), this.changeBgSize && (this.nzHeight > this.nzWidth ? ("lens" == this.options.zoomType && this.zoomLens.css({
					"background-size": this.largeWidth / this.newvalueheight + "px " + this.largeHeight / this.newvalueheight +
						"px"
				}), this.zoomWindow.css({
					"background-size": this.largeWidth / this.newvalueheight + "px " + this.largeHeight / this.newvalueheight + "px"
				})) : ("lens" == this.options.zoomType && this.zoomLens.css({
					"background-size": this.largeWidth / this.newvaluewidth + "px " + this.largeHeight / this.newvaluewidth + "px"
				}), this.zoomWindow.css({
					"background-size": this.largeWidth / this.newvaluewidth + "px " + this.largeHeight / this.newvaluewidth + "px"
				})), this.changeBgSize = !1), this.setWindowPostition(b)), this.options.tint && "inner" != this.options.zoomType &&
				this.setTintPosition(b), "window" == this.options.zoomType && this.setWindowPostition(b), "inner" == this.options.zoomType && this.setWindowPostition(b), this.options.showLens && (this.fullwidth && "lens" != this.options.zoomType && (this.lensLeftPos = 0), this.zoomLens.css({
					left: this.lensLeftPos + "px",
					top: this.lensTopPos + "px"
				})))
		},
		showHideWindow: function (b) {
			"show" != b || this.isWindowActive || (this.options.zoomWindowFadeIn ? this.zoomWindow.stop(!0, !0, !1).fadeIn(this.options.zoomWindowFadeIn) : this.zoomWindow.show(), this.isWindowActive = !0);
			"hide" == b && this.isWindowActive && (this.options.zoomWindowFadeOut ? this.zoomWindow.stop(!0, !0).fadeOut(this.options.zoomWindowFadeOut) : this.zoomWindow.hide(), this.isWindowActive = !1)
		},
		showHideLens: function (b) {
			"show" != b || this.isLensActive || (this.options.lensFadeIn ? this.zoomLens.stop(!0, !0, !1).fadeIn(this.options.lensFadeIn) : this.zoomLens.show(), this.isLensActive = !0);
			"hide" == b && this.isLensActive && (this.options.lensFadeOut ? this.zoomLens.stop(!0, !0).fadeOut(this.options.lensFadeOut) : this.zoomLens.hide(),
				this.isLensActive = !1)
		},
		showHideTint: function (b) {
			"show" != b || this.isTintActive || (this.options.zoomTintFadeIn ? this.zoomTint.css({
				opacity: this.options.tintOpacity
			}).animate().stop(!0, !0).fadeIn("slow") : (this.zoomTint.css({
				opacity: this.options.tintOpacity
			}).animate(), this.zoomTint.show()), this.isTintActive = !0);
			"hide" == b && this.isTintActive && (this.options.zoomTintFadeOut ? this.zoomTint.stop(!0, !0).fadeOut(this.options.zoomTintFadeOut) : this.zoomTint.hide(), this.isTintActive = !1)
		},
		setLensPostition: function (b) {},
		setWindowPostition: function (b) {
			var a = this;
			if (isNaN(a.options.zoomWindowPosition)) a.externalContainer = d("#" + a.options.zoomWindowPosition), a.externalContainerWidth = a.externalContainer.width(), a.externalContainerHeight = a.externalContainer.height(), a.externalContainerOffset = a.externalContainer.offset(), a.windowOffsetTop = a.externalContainerOffset.top, a.windowOffsetLeft = a.externalContainerOffset.left;
			else switch (a.options.zoomWindowPosition) {
				case 1:
					a.windowOffsetTop = a.options.zoomWindowOffety;
					a.windowOffsetLeft = +a.nzWidth;
					break;
				case 2:
					a.options.zoomWindowHeight > a.nzHeight && (a.windowOffsetTop = -1 * (a.options.zoomWindowHeight / 2 - a.nzHeight / 2), a.windowOffsetLeft = a.nzWidth);
					break;
				case 3:
					a.windowOffsetTop = a.nzHeight - a.zoomWindow.height() - 2 * a.options.borderSize;
					a.windowOffsetLeft = a.nzWidth;
					break;
				case 4:
					a.windowOffsetTop = a.nzHeight;
					a.windowOffsetLeft = a.nzWidth;
					break;
				case 5:
					a.windowOffsetTop = a.nzHeight;
					a.windowOffsetLeft = a.nzWidth - a.zoomWindow.width() - 2 * a.options.borderSize;
					break;
				case 6:
					a.options.zoomWindowHeight >
						a.nzHeight && (a.windowOffsetTop = a.nzHeight, a.windowOffsetLeft = -1 * (a.options.zoomWindowWidth / 2 - a.nzWidth / 2 + 2 * a.options.borderSize));
					break;
				case 7:
					a.windowOffsetTop = a.nzHeight;
					a.windowOffsetLeft = 0;
					break;
				case 8:
					a.windowOffsetTop = a.nzHeight;
					a.windowOffsetLeft = -1 * (a.zoomWindow.width() + 2 * a.options.borderSize);
					break;
				case 9:
					a.windowOffsetTop = a.nzHeight - a.zoomWindow.height() - 2 * a.options.borderSize;
					a.windowOffsetLeft = -1 * (a.zoomWindow.width() + 2 * a.options.borderSize);
					break;
				case 10:
					a.options.zoomWindowHeight > a.nzHeight &&
						(a.windowOffsetTop = -1 * (a.options.zoomWindowHeight / 2 - a.nzHeight / 2), a.windowOffsetLeft = -1 * (a.zoomWindow.width() + 2 * a.options.borderSize));
					break;
				case 11:
					a.windowOffsetTop = a.options.zoomWindowOffety;
					a.windowOffsetLeft = -1 * (a.zoomWindow.width() + 2 * a.options.borderSize);
					break;
				case 12:
					a.windowOffsetTop = -1 * (a.zoomWindow.height() + 2 * a.options.borderSize);
					a.windowOffsetLeft = -1 * (a.zoomWindow.width() + 2 * a.options.borderSize);
					break;
				case 13:
					a.windowOffsetTop = -1 * (a.zoomWindow.height() + 2 * a.options.borderSize);
					a.windowOffsetLeft =
						0;
					break;
				case 14:
					a.options.zoomWindowHeight > a.nzHeight && (a.windowOffsetTop = -1 * (a.zoomWindow.height() + 2 * a.options.borderSize), a.windowOffsetLeft = -1 * (a.options.zoomWindowWidth / 2 - a.nzWidth / 2 + 2 * a.options.borderSize));
					break;
				case 15:
					a.windowOffsetTop = -1 * (a.zoomWindow.height() + 2 * a.options.borderSize);
					a.windowOffsetLeft = a.nzWidth - a.zoomWindow.width() - 2 * a.options.borderSize;
					break;
				case 16:
					a.windowOffsetTop = -1 * (a.zoomWindow.height() + 2 * a.options.borderSize);
					a.windowOffsetLeft = a.nzWidth;
					break;
				default:
					a.windowOffsetTop =
						a.options.zoomWindowOffety, a.windowOffsetLeft = a.nzWidth
			}
			a.isWindowSet = !0;
			a.windowOffsetTop += a.options.zoomWindowOffety;
			a.windowOffsetLeft += a.options.zoomWindowOffetx;
			a.zoomWindow.css({
				top: a.windowOffsetTop
			});
			a.zoomWindow.css({
				left: a.windowOffsetLeft
			});
			"inner" == a.options.zoomType && (a.zoomWindow.css({
				top: 0
			}), a.zoomWindow.css({
				left: 0
			}));
			a.windowLeftPos = String(-1 * ((b.pageX - a.nzOffset.left) * a.widthRatio - a.zoomWindow.width() / 2));
			a.windowTopPos = String(-1 * ((b.pageY - a.nzOffset.top) * a.heightRatio - a.zoomWindow.height() /
				2));
			a.Etoppos && (a.windowTopPos = 0);
			a.Eloppos && (a.windowLeftPos = 0);
			a.Eboppos && (a.windowTopPos = -1 * (a.largeHeight / a.currentZoomLevel - a.zoomWindow.height()));
			a.Eroppos && (a.windowLeftPos = -1 * (a.largeWidth / a.currentZoomLevel - a.zoomWindow.width()));
			a.fullheight && (a.windowTopPos = 0);
			a.fullwidth && (a.windowLeftPos = 0);
			if ("window" == a.options.zoomType || "inner" == a.options.zoomType) 1 == a.zoomLock && (1 >= a.widthRatio && (a.windowLeftPos = 0), 1 >= a.heightRatio && (a.windowTopPos = 0)), a.largeHeight < a.options.zoomWindowHeight && (a.windowTopPos =
				0), a.largeWidth < a.options.zoomWindowWidth && (a.windowLeftPos = 0), a.options.easing ? (a.xp || (a.xp = 0), a.yp || (a.yp = 0), a.loop || (a.loop = setInterval(function () {
				a.xp += (a.windowLeftPos - a.xp) / a.options.easingAmount;
				a.yp += (a.windowTopPos - a.yp) / a.options.easingAmount;
				a.scrollingLock ? (clearInterval(a.loop), a.xp = a.windowLeftPos, a.yp = a.windowTopPos, a.xp = -1 * ((b.pageX - a.nzOffset.left) * a.widthRatio - a.zoomWindow.width() / 2), a.yp = -1 * ((b.pageY - a.nzOffset.top) * a.heightRatio - a.zoomWindow.height() / 2), a.changeBgSize && (a.nzHeight >
					a.nzWidth ? ("lens" == a.options.zoomType && a.zoomLens.css({
						"background-size": a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px"
					}), a.zoomWindow.css({
						"background-size": a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px"
					})) : ("lens" != a.options.zoomType && a.zoomLens.css({
						"background-size": a.largeWidth / a.newvaluewidth + "px " + a.largeHeight / a.newvalueheight + "px"
					}), a.zoomWindow.css({
						"background-size": a.largeWidth / a.newvaluewidth + "px " + a.largeHeight / a.newvaluewidth + "px"
					})),
					a.changeBgSize = !1), a.zoomWindow.css({
					backgroundPosition: a.windowLeftPos + "px " + a.windowTopPos + "px"
				}), a.scrollingLock = !1, a.loop = !1) : (a.changeBgSize && (a.nzHeight > a.nzWidth ? ("lens" == a.options.zoomType && a.zoomLens.css({
					"background-size": a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px"
				}), a.zoomWindow.css({
					"background-size": a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px"
				})) : ("lens" != a.options.zoomType && a.zoomLens.css({
					"background-size": a.largeWidth / a.newvaluewidth +
						"px " + a.largeHeight / a.newvaluewidth + "px"
				}), a.zoomWindow.css({
					"background-size": a.largeWidth / a.newvaluewidth + "px " + a.largeHeight / a.newvaluewidth + "px"
				})), a.changeBgSize = !1), a.zoomWindow.css({
					backgroundPosition: a.xp + "px " + a.yp + "px"
				}))
			}, 16))) : (a.changeBgSize && (a.nzHeight > a.nzWidth ? ("lens" == a.options.zoomType && a.zoomLens.css({
				"background-size": a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px"
			}), a.zoomWindow.css({
				"background-size": a.largeWidth / a.newvalueheight + "px " + a.largeHeight /
					a.newvalueheight + "px"
			})) : ("lens" == a.options.zoomType && a.zoomLens.css({
				"background-size": a.largeWidth / a.newvaluewidth + "px " + a.largeHeight / a.newvaluewidth + "px"
			}), a.largeHeight / a.newvaluewidth < a.options.zoomWindowHeight ? a.zoomWindow.css({
				"background-size": a.largeWidth / a.newvaluewidth + "px " + a.largeHeight / a.newvaluewidth + "px"
			}) : a.zoomWindow.css({
				"background-size": a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px"
			})), a.changeBgSize = !1), a.zoomWindow.css({
				backgroundPosition: a.windowLeftPos +
					"px " + a.windowTopPos + "px"
			}))
		},
		setTintPosition: function (b) {
			this.nzOffset = this.$elem.offset();
			this.tintpos = String(-1 * (b.pageX - this.nzOffset.left - this.zoomLens.width() / 2));
			this.tintposy = String(-1 * (b.pageY - this.nzOffset.top - this.zoomLens.height() / 2));
			this.Etoppos && (this.tintposy = 0);
			this.Eloppos && (this.tintpos = 0);
			this.Eboppos && (this.tintposy = -1 * (this.nzHeight - this.zoomLens.height() - 2 * this.options.lensBorderSize));
			this.Eroppos && (this.tintpos = -1 * (this.nzWidth - this.zoomLens.width() - 2 * this.options.lensBorderSize));
			this.options.tint && (this.fullheight && (this.tintposy = 0), this.fullwidth && (this.tintpos = 0), this.zoomTintImage.css({
				left: this.tintpos + "px"
			}), this.zoomTintImage.css({
				top: this.tintposy + "px"
			}))
		},
		swaptheimage: function (b, a) {
			var c = this,
				e = new Image;
			c.options.loadingIcon && (c.spinner = d("<div style=\"background: url('" + c.options.loadingIcon + "') no-repeat center;height:" + c.nzHeight + "px;width:" + c.nzWidth + 'px;z-index: 2000;position: absolute; background-position: center center;"></div>'), c.$elem.after(c.spinner));
			c.options.onImageSwap(c.$elem);
			e.onload = function () {
				c.largeWidth = e.width;
				c.largeHeight = e.height;
				c.zoomImage = a;
				c.zoomWindow.css({
					"background-size": c.largeWidth + "px " + c.largeHeight + "px"
				});
				c.zoomWindow.css({
					"background-size": c.largeWidth + "px " + c.largeHeight + "px"
				});
				c.swapAction(b, a)
			};
			e.src = a
		},
		swapAction: function (b, a) {
			var c = this,
				e = new Image;
			e.onload = function () {
				c.nzHeight = e.height;
				c.nzWidth = e.width;
				c.options.onImageSwapComplete(c.$elem);
				c.doneCallback()
			};
			e.src = b;
			c.currentZoomLevel = c.options.zoomLevel;
			c.options.maxZoomLevel = !1;
			"lens" == c.options.zoomType && c.zoomLens.css({
				backgroundImage: "url('" + a + "')"
			});
			"window" == c.options.zoomType && c.zoomWindow.css({
				backgroundImage: "url('" + a + "')"
			});
			"inner" == c.options.zoomType && c.zoomWindow.css({
				backgroundImage: "url('" + a + "')"
			});
			c.currentImage = a;
			if (c.options.imageCrossfade) {
				var f = c.$elem,
					g = f.clone();
				c.$elem.attr("src", b);
				c.$elem.after(g);
				g.stop(!0).fadeOut(c.options.imageCrossfade, function () {
					d(this).remove()
				});
				c.$elem.width("auto").removeAttr("width");
				c.$elem.height("auto").removeAttr("height");
				f.fadeIn(c.options.imageCrossfade);
				c.options.tint && "inner" != c.options.zoomType && (f = c.zoomTintImage, g = f.clone(), c.zoomTintImage.attr("src", a), c.zoomTintImage.after(g), g.stop(!0).fadeOut(c.options.imageCrossfade, function () {
					d(this).remove()
				}), f.fadeIn(c.options.imageCrossfade), c.zoomTint.css({
					height: c.$elem.height()
				}), c.zoomTint.css({
					width: c.$elem.width()
				}));
				c.zoomContainer.css("height", c.$elem.height());
				c.zoomContainer.css("width", c.$elem.width());
				"inner" != c.options.zoomType || c.options.constrainType ||
					(c.zoomWrap.parent().css("height", c.$elem.height()), c.zoomWrap.parent().css("width", c.$elem.width()), c.zoomWindow.css("height", c.$elem.height()), c.zoomWindow.css("width", c.$elem.width()))
			} else c.$elem.attr("src", b), c.options.tint && (c.zoomTintImage.attr("src", a), c.zoomTintImage.attr("height", c.$elem.height()), c.zoomTintImage.css({
				height: c.$elem.height()
			}), c.zoomTint.css({
				height: c.$elem.height()
			})), c.zoomContainer.css("height", c.$elem.height()), c.zoomContainer.css("width", c.$elem.width());
			c.options.imageCrossfade &&
				(c.zoomWrap.css("height", c.$elem.height()), c.zoomWrap.css("width", c.$elem.width()));
			c.options.constrainType && ("height" == c.options.constrainType && (c.zoomContainer.css("height", c.options.constrainSize), c.zoomContainer.css("width", "auto"), c.options.imageCrossfade ? (c.zoomWrap.css("height", c.options.constrainSize), c.zoomWrap.css("width", "auto"), c.constwidth = c.zoomWrap.width()) : (c.$elem.css("height", c.options.constrainSize), c.$elem.css("width", "auto"), c.constwidth = c.$elem.width()), "inner" == c.options.zoomType &&
					(c.zoomWrap.parent().css("height", c.options.constrainSize), c.zoomWrap.parent().css("width", c.constwidth), c.zoomWindow.css("height", c.options.constrainSize), c.zoomWindow.css("width", c.constwidth)), c.options.tint && (c.tintContainer.css("height", c.options.constrainSize), c.tintContainer.css("width", c.constwidth), c.zoomTint.css("height", c.options.constrainSize), c.zoomTint.css("width", c.constwidth), c.zoomTintImage.css("height", c.options.constrainSize), c.zoomTintImage.css("width", c.constwidth))), "width" ==
				c.options.constrainType && (c.zoomContainer.css("height", "auto"), c.zoomContainer.css("width", c.options.constrainSize), c.options.imageCrossfade ? (c.zoomWrap.css("height", "auto"), c.zoomWrap.css("width", c.options.constrainSize), c.constheight = c.zoomWrap.height()) : (c.$elem.css("height", "auto"), c.$elem.css("width", c.options.constrainSize), c.constheight = c.$elem.height()), "inner" == c.options.zoomType && (c.zoomWrap.parent().css("height", c.constheight), c.zoomWrap.parent().css("width", c.options.constrainSize), c.zoomWindow.css("height",
					c.constheight), c.zoomWindow.css("width", c.options.constrainSize)), c.options.tint && (c.tintContainer.css("height", c.constheight), c.tintContainer.css("width", c.options.constrainSize), c.zoomTint.css("height", c.constheight), c.zoomTint.css("width", c.options.constrainSize), c.zoomTintImage.css("height", c.constheight), c.zoomTintImage.css("width", c.options.constrainSize))))
		},
		doneCallback: function () {
			this.options.loadingIcon && this.spinner.hide();
			this.nzOffset = this.$elem.offset();
			this.nzWidth = this.$elem.width();
			this.nzHeight = this.$elem.height();
			this.currentZoomLevel = this.options.zoomLevel;
			this.widthRatio = this.largeWidth / this.nzWidth;
			this.heightRatio = this.largeHeight / this.nzHeight;
			"window" == this.options.zoomType && (lensHeight = this.nzHeight < this.options.zoomWindowWidth / this.widthRatio ? this.nzHeight : String(this.options.zoomWindowHeight / this.heightRatio), lensWidth = this.options.zoomWindowWidth < this.options.zoomWindowWidth ? this.nzWidth : this.options.zoomWindowWidth / this.widthRatio, this.zoomLens && (this.zoomLens.css("width",
				lensWidth), this.zoomLens.css("height", lensHeight)))
		},
		getCurrentImage: function () {
			return this.zoomImage
		},
		getGalleryList: function () {
			var b = this;
			b.gallerylist = [];
			b.options.gallery ? d("#" + b.options.gallery + " a").each(function () {
					var a = "";
					d(this).data("zoom-image") ? a = d(this).data("zoom-image") : d(this).data("image") && (a = d(this).data("image"));
					a == b.zoomImage ? b.gallerylist.unshift({
						href: "" + a + "",
						title: d(this).find("img").attr("title")
					}) : b.gallerylist.push({
						href: "" + a + "",
						title: d(this).find("img").attr("title")
					})
				}) :
				b.gallerylist.push({
					href: "" + b.zoomImage + "",
					title: d(this).find("img").attr("title")
				});
			return b.gallerylist
		},
		changeZoomLevel: function (b) {
			this.scrollingLock = !0;
			this.newvalue = parseFloat(b).toFixed(2);
			newvalue = parseFloat(b).toFixed(2);
			maxheightnewvalue = this.largeHeight / (this.options.zoomWindowHeight / this.nzHeight * this.nzHeight);
			maxwidthtnewvalue = this.largeWidth / (this.options.zoomWindowWidth / this.nzWidth * this.nzWidth);
			"inner" != this.options.zoomType && (maxheightnewvalue <= newvalue ? (this.heightRatio = this.largeHeight /
				maxheightnewvalue / this.nzHeight, this.newvalueheight = maxheightnewvalue, this.fullheight = !0) : (this.heightRatio = this.largeHeight / newvalue / this.nzHeight, this.newvalueheight = newvalue, this.fullheight = !1), maxwidthtnewvalue <= newvalue ? (this.widthRatio = this.largeWidth / maxwidthtnewvalue / this.nzWidth, this.newvaluewidth = maxwidthtnewvalue, this.fullwidth = !0) : (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue, this.fullwidth = !1), "lens" == this.options.zoomType && (maxheightnewvalue <= newvalue ?
				(this.fullwidth = !0, this.newvaluewidth = maxheightnewvalue) : (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue, this.fullwidth = !1)));
			"inner" == this.options.zoomType && (maxheightnewvalue = parseFloat(this.largeHeight / this.nzHeight).toFixed(2), maxwidthtnewvalue = parseFloat(this.largeWidth / this.nzWidth).toFixed(2), newvalue > maxheightnewvalue && (newvalue = maxheightnewvalue), newvalue > maxwidthtnewvalue && (newvalue = maxwidthtnewvalue), maxheightnewvalue <= newvalue ? (this.heightRatio = this.largeHeight /
				newvalue / this.nzHeight, this.newvalueheight = newvalue > maxheightnewvalue ? maxheightnewvalue : newvalue, this.fullheight = !0) : (this.heightRatio = this.largeHeight / newvalue / this.nzHeight, this.newvalueheight = newvalue > maxheightnewvalue ? maxheightnewvalue : newvalue, this.fullheight = !1), maxwidthtnewvalue <= newvalue ? (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue > maxwidthtnewvalue ? maxwidthtnewvalue : newvalue, this.fullwidth = !0) : (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth =
				newvalue, this.fullwidth = !1));
			scrcontinue = !1;
			"inner" == this.options.zoomType && (this.nzWidth > this.nzHeight && (this.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1, this.fullwidth = this.fullheight = !0)), this.nzHeight > this.nzWidth && (this.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1, this.fullwidth = this.fullheight = !0)));
			"inner" != this.options.zoomType && (scrcontinue = !0);
			scrcontinue && (this.zoomLock = 0, this.changeZoom = !0, this.options.zoomWindowHeight / this.heightRatio <= this.nzHeight &&
				(this.currentZoomLevel = this.newvalueheight, "lens" != this.options.zoomType && "inner" != this.options.zoomType && (this.changeBgSize = !0, this.zoomLens.css({
					height: String(this.options.zoomWindowHeight / this.heightRatio) + "px"
				})), "lens" == this.options.zoomType || "inner" == this.options.zoomType) && (this.changeBgSize = !0), this.options.zoomWindowWidth / this.widthRatio <= this.nzWidth && ("inner" != this.options.zoomType && this.newvaluewidth > this.newvalueheight && (this.currentZoomLevel = this.newvaluewidth), "lens" != this.options.zoomType &&
					"inner" != this.options.zoomType && (this.changeBgSize = !0, this.zoomLens.css({
						width: String(this.options.zoomWindowWidth / this.widthRatio) + "px"
					})), "lens" == this.options.zoomType || "inner" == this.options.zoomType) && (this.changeBgSize = !0), "inner" == this.options.zoomType && (this.changeBgSize = !0, this.nzWidth > this.nzHeight && (this.currentZoomLevel = this.newvaluewidth), this.nzHeight > this.nzWidth && (this.currentZoomLevel = this.newvaluewidth)));
			this.setPosition(this.currentLoc)
		},
		closeAll: function () {
			self.zoomWindow && self.zoomWindow.hide();
			self.zoomLens && self.zoomLens.hide();
			self.zoomTint && self.zoomTint.hide()
		},
		changeState: function (b) {
			"enable" == b && (this.options.zoomEnabled = !0);
			"disable" == b && (this.options.zoomEnabled = !1)
		}
	};
	d.fn.elevateZoom = function (b) {
		return this.each(function () {
			var a = Object.create(k);
			a.init(b, this);
			d.data(this, "elevateZoom", a)
		})
	};
	d.fn.elevateZoom.options = {
		zoomActivation: "hover",
		zoomEnabled: !0,
		preloading: 1,
		zoomLevel: 1,
		scrollZoom: !1,
		scrollZoomIncrement: 0.1,
		minZoomLevel: !1,
		maxZoomLevel: !1,
		easing: !1,
		easingAmount: 12,
		lensSize: 200,
		zoomWindowWidth: 400,
		zoomWindowHeight: 400,
		zoomWindowOffetx: 0,
		zoomWindowOffety: 0,
		zoomWindowPosition: 1,
		zoomWindowBgColour: "#fff",
		lensFadeIn: !1,
		lensFadeOut: !1,
		debug: !1,
		zoomWindowFadeIn: !1,
		zoomWindowFadeOut: !1,
		zoomWindowAlwaysShow: !1,
		zoomTintFadeIn: !1,
		zoomTintFadeOut: !1,
		borderSize: 4,
		showLens: !0,
		borderColour: "#888",
		lensBorderSize: 1,
		lensBorderColour: "#000",
		lensShape: "square",
		zoomType: "window",
		containLensZoom: !1,
		lensColour: "white",
		lensOpacity: 0.4,
		lenszoom: !1,
		tint: !1,
		tintColour: "#333",
		tintOpacity: 0.4,
		gallery: !1,
		galleryActiveClass: "zoomGalleryActive",
		imageCrossfade: !1,
		constrainType: !1,
		constrainSize: !1,
		loadingIcon: !1,
		cursor: "default",
		responsive: !0,
		onComplete: d.noop,
		onZoomedImageLoaded: function () {},
		onImageSwap: d.noop,
		onImageSwapComplete: d.noop
	}
})(jQuery, window, document);





/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
! function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (a) {
	var b, c, d, e, f, g, h = "Close",
		i = "BeforeClose",
		j = "AfterClose",
		k = "BeforeAppend",
		l = "MarkupParse",
		m = "Open",
		n = "Change",
		o = "mfp",
		p = "." + o,
		q = "mfp-ready",
		r = "mfp-removing",
		s = "mfp-prevent-close",
		t = function () {},
		u = !!window.jQuery,
		v = a(window),
		w = function (a, c) {
			b.ev.on(o + a + p, c)
		},
		x = function (b, c, d, e) {
			var f = document.createElement("div");
			return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
		},
		y = function (c, d) {
			b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
		},
		z = function (c) {
			return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
		},
		A = function () {
			a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
		},
		B = function () {
			var a = document.createElement("p").style,
				b = ["ms", "O", "Moz", "Webkit"];
			if (void 0 !== a.transition) return !0;
			for (; b.length;)
				if (b.pop() + "Transition" in a) return !0;
			return !1
		};
	t.prototype = {
		constructor: t,
		init: function () {
			var c = navigator.appVersion;
			b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
		},
		open: function (c) {
			var e;
			if (c.isObj === !1) {
				b.items = c.items.toArray(), b.index = 0;
				var g, h = c.items;
				for (e = 0; e < h.length; e++)
					if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
						b.index = e;
						break
					}
			} else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
			if (b.isOpen) return void b.updateItemHTML();
			b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
				b.close()
			}), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
				b._checkIfClose(a.target) && b.close()
			}), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
			var i = a.magnificPopup.modules;
			for (e = 0; e < i.length; e++) {
				var j = i[e];
				j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
			}
			y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
				c.close_replaceWith = z(d.type)
			}), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
				overflow: b.st.overflowY,
				overflowX: "hidden",
				overflowY: b.st.overflowY
			}) : b.wrap.css({
				top: v.scrollTop(),
				position: "absolute"
			}), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
				height: d.height(),
				position: "absolute"
			}), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
				27 === a.keyCode && b.close()
			}), v.on("resize" + p, function () {
				b.updateSize()
			}), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
			var k = b.wH = v.height(),
				n = {};
			if (b.fixedContentPos && b._hasScrollBar(k)) {
				var o = b._getScrollbarSize();
				o && (n.marginRight = o)
			}
			b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
			var r = b.st.mainClass;
			return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
				b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
			}, 16), b.isOpen = !0, b.updateSize(k), y(m), c
		},
		close: function () {
			b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
				b._close()
			}, b.st.removalDelay)) : b._close())
		},
		_close: function () {
			y(h);
			var c = r + " " + q + " ";
			if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
				var e = {
					marginRight: ""
				};
				b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
			}
			d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
		},
		updateSize: function (a) {
			if (b.isIOS) {
				var c = document.documentElement.clientWidth / window.innerWidth,
					d = window.innerHeight * c;
				b.wrap.css("height", d), b.wH = d
			} else b.wH = a || v.height();
			b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
		},
		updateItemHTML: function () {
			var c = b.items[b.index];
			b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
			var d = c.type;
			if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
				var f = b.st[d] ? b.st[d].markup : !1;
				y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
			}
			e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
			var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
			b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
		},
		appendContent: function (a, c) {
			b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
		},
		parseEl: function (c) {
			var d, e = b.items[c];
			if (e.tagName ? e = {
					el: a(e)
				} : (d = e.type, e = {
					data: e,
					src: e.src
				}), e.el) {
				for (var f = b.types, g = 0; g < f.length; g++)
					if (e.el.hasClass("mfp-" + f[g])) {
						d = f[g];
						break
					} e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
			}
			return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
		},
		addGroup: function (a, c) {
			var d = function (d) {
				d.mfpEl = this, b._openClick(d, a, c)
			};
			c || (c = {});
			var e = "click.magnificPopup";
			c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
		},
		_openClick: function (c, d, e) {
			var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
			if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
				var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
				if (g)
					if (a.isFunction(g)) {
						if (!g.call(b)) return !0
					} else if (v.width() < g) return !0;
				c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
			}
		},
		updateStatus: function (a, d) {
			if (b.preloader) {
				c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
				var e = {
					status: a,
					text: d
				};
				y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
					a.stopImmediatePropagation()
				}), b.container.addClass("mfp-s-" + a), c = a
			}
		},
		_checkIfClose: function (c) {
			if (!a(c).hasClass(s)) {
				var d = b.st.closeOnContentClick,
					e = b.st.closeOnBgClick;
				if (d && e) return !0;
				if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
				if (c === b.content[0] || a.contains(b.content[0], c)) {
					if (d) return !0
				} else if (e && a.contains(document, c)) return !0;
				return !1
			}
		},
		_addClassToMFP: function (a) {
			b.bgOverlay.addClass(a), b.wrap.addClass(a)
		},
		_removeClassFromMFP: function (a) {
			this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
		},
		_hasScrollBar: function (a) {
			return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
		},
		_setFocus: function () {
			(b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
		},
		_onFocusIn: function (c) {
			return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
		},
		_parseMarkup: function (b, c, d) {
			var e;
			d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) {
				if (void 0 === d || d === !1) return !0;
				if (e = c.split("_"), e.length > 1) {
					var f = b.find(p + "-" + e[0]);
					if (f.length > 0) {
						var g = e[1];
						"replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
					}
				} else b.find(p + "-" + c).html(d)
			})
		},
		_getScrollbarSize: function () {
			if (void 0 === b.scrollbarSize) {
				var a = document.createElement("div");
				a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
			}
			return b.scrollbarSize
		}
	}, a.magnificPopup = {
		instance: null,
		proto: t.prototype,
		modules: [],
		open: function (b, c) {
			return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
		},
		close: function () {
			return a.magnificPopup.instance && a.magnificPopup.instance.close()
		},
		registerModule: function (b, c) {
			c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
		},
		defaults: {
			disableOn: 0,
			key: null,
			midClick: !1,
			mainClass: "",
			preloader: !0,
			focus: "",
			closeOnContentClick: !1,
			closeOnBgClick: !0,
			closeBtnInside: !0,
			showCloseBtn: !0,
			enableEscapeKey: !0,
			modal: !1,
			alignTop: !1,
			removalDelay: 0,
			prependTo: null,
			fixedContentPos: "auto",
			fixedBgPos: "auto",
			overflowY: "auto",
			closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
			tClose: "Close (Esc)",
			tLoading: "Loading...",
			autoFocusLast: !0
		}
	}, a.fn.magnificPopup = function (c) {
		A();
		var d = a(this);
		if ("string" == typeof c)
			if ("open" === c) {
				var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
					g = parseInt(arguments[1], 10) || 0;
				f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
					mfpEl: e
				}, d, f)
			} else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
		else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
		return d
	};
	var C, D, E, F = "inline",
		G = function () {
			E && (D.after(E.addClass(C)).detach(), E = null)
		};
	a.magnificPopup.registerModule(F, {
		options: {
			hiddenClass: "hide",
			markup: "",
			tNotFound: "Content not found"
		},
		proto: {
			initInline: function () {
				b.types.push(F), w(h + "." + F, function () {
					G()
				})
			},
			getInline: function (c, d) {
				if (G(), c.src) {
					var e = b.st.inline,
						f = a(c.src);
					if (f.length) {
						var g = f[0].parentNode;
						g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
					} else b.updateStatus("error", e.tNotFound), f = a("<div>");
					return c.inlineElement = f, f
				}
				return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
			}
		}
	});
	var H, I = "ajax",
		J = function () {
			H && a(document.body).removeClass(H)
		},
		K = function () {
			J(), b.req && b.req.abort()
		};
	a.magnificPopup.registerModule(I, {
		options: {
			settings: null,
			cursor: "mfp-ajax-cur",
			tError: '<a href="%url%">The content</a> could not be loaded.'
		},
		proto: {
			initAjax: function () {
				b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
			},
			getAjax: function (c) {
				H && a(document.body).addClass(H), b.updateStatus("loading");
				var d = a.extend({
					url: c.src,
					success: function (d, e, f) {
						var g = {
							data: d,
							xhr: f
						};
						y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
							b.wrap.addClass(q)
						}, 16), b.updateStatus("ready"), y("AjaxContentAdded")
					},
					error: function () {
						J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
					}
				}, b.st.ajax.settings);
				return b.req = a.ajax(d), ""
			}
		}
	});
	var L, M = function (c) {
		if (c.data && void 0 !== c.data.title) return c.data.title;
		var d = b.st.image.titleSrc;
		if (d) {
			if (a.isFunction(d)) return d.call(b, c);
			if (c.el) return c.el.attr(d) || ""
		}
		return ""
	};
	a.magnificPopup.registerModule("image", {
		options: {
			markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
			cursor: "mfp-zoom-out-cur",
			titleSrc: "title",
			verticalFit: !0,
			tError: '<a href="%url%">The image</a> could not be loaded.'
		},
		proto: {
			initImage: function () {
				var c = b.st.image,
					d = ".image";
				b.types.push("image"), w(m + d, function () {
					"image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
				}), w(h + d, function () {
					c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
				}), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
			},
			resizeImage: function () {
				var a = b.currItem;
				if (a && a.img && b.st.image.verticalFit) {
					var c = 0;
					b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
				}
			},
			_onImageHasSize: function (a) {
				a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
			},
			findImageSize: function (a) {
				var c = 0,
					d = a.img[0],
					e = function (f) {
						L && clearInterval(L), L = setInterval(function () {
							return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
						}, f)
					};
				e(1)
			},
			getImage: function (c, d) {
				var e = 0,
					f = function () {
						c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
					},
					g = function () {
						c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
					},
					h = b.st.image,
					i = d.find(".mfp-img");
				if (i.length) {
					var j = document.createElement("img");
					j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
				}
				return b._parseMarkup(d, {
					title: M(c),
					img_replaceWith: c.img
				}, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
			}
		}
	});
	var N, O = function () {
		return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
	};
	a.magnificPopup.registerModule("zoom", {
		options: {
			enabled: !1,
			easing: "ease-in-out",
			duration: 300,
			opener: function (a) {
				return a.is("img") ? a : a.find("img")
			}
		},
		proto: {
			initZoom: function () {
				var a, c = b.st.zoom,
					d = ".zoom";
				if (c.enabled && b.supportsTransition) {
					var e, f, g = c.duration,
						j = function (a) {
							var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
								d = "all " + c.duration / 1e3 + "s " + c.easing,
								e = {
									position: "fixed",
									zIndex: 9999,
									left: 0,
									top: 0,
									"-webkit-backface-visibility": "hidden"
								},
								f = "transition";
							return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
						},
						k = function () {
							b.content.css("visibility", "visible")
						};
					w("BuildControls" + d, function () {
						if (b._allowZoom()) {
							if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
							f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
								f.css(b._getOffset(!0)), e = setTimeout(function () {
									k(), setTimeout(function () {
										f.remove(), a = f = null, y("ZoomAnimationEnded")
									}, 16)
								}, g)
							}, 16)
						}
					}), w(i + d, function () {
						if (b._allowZoom()) {
							if (clearTimeout(e), b.st.removalDelay = g, !a) {
								if (a = b._getItemToZoom(), !a) return;
								f = j(a)
							}
							f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
								f.css(b._getOffset())
							}, 16)
						}
					}), w(h + d, function () {
						b._allowZoom() && (k(), f && f.remove(), a = null)
					})
				}
			},
			_allowZoom: function () {
				return "image" === b.currItem.type
			},
			_getItemToZoom: function () {
				return b.currItem.hasSize ? b.currItem.img : !1
			},
			_getOffset: function (c) {
				var d;
				d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
				var e = d.offset(),
					f = parseInt(d.css("padding-top"), 10),
					g = parseInt(d.css("padding-bottom"), 10);
				e.top -= a(window).scrollTop() - f;
				var h = {
					width: d.width(),
					height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
				};
				return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
			}
		}
	});
	var P = "iframe",
		Q = "//about:blank",
		R = function (a) {
			if (b.currTemplate[P]) {
				var c = b.currTemplate[P].find("iframe");
				c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
			}
		};
	a.magnificPopup.registerModule(P, {
		options: {
			markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
			srcAction: "iframe_src",
			patterns: {
				youtube: {
					index: "youtube.com",
					id: "v=",
					src: "http://www.youtube.com/embed/%id%?autoplay=1"
				},
				vimeo: {
					index: "vimeo.com/",
					id: "/",
					src: "http://player.vimeo.com/video/%id%?autoplay=1"
				},
				gmaps: {
					index: "//maps.google.",
					src: "%id%&output=embed"
				}
			}
		},
		proto: {
			initIframe: function () {
				b.types.push(P), w("BeforeChange", function (a, b, c) {
					b !== c && (b === P ? R() : c === P && R(!0))
				}), w(h + "." + P, function () {
					R()
				})
			},
			getIframe: function (c, d) {
				var e = c.src,
					f = b.st.iframe;
				a.each(f.patterns, function () {
					return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
				});
				var g = {};
				return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
			}
		}
	});
	var S = function (a) {
			var c = b.items.length;
			return a > c - 1 ? a - c : 0 > a ? c + a : a
		},
		T = function (a, b, c) {
			return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
		};
	a.magnificPopup.registerModule("gallery", {
		options: {
			enabled: !1,
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
			preload: [0, 2],
			navigateByImgClick: !0,
			arrows: !0,
			tPrev: "Previous (Left arrow key)",
			tNext: "Next (Right arrow key)",
			tCounter: "%curr% of %total%"
		},
		proto: {
			initGallery: function () {
				var c = b.st.gallery,
					e = ".mfp-gallery";
				return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
					c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
						return b.items.length > 1 ? (b.next(), !1) : void 0
					}), d.on("keydown" + e, function (a) {
						37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
					})
				}), w("UpdateStatus" + e, function (a, c) {
					c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
				}), w(l + e, function (a, d, e, f) {
					var g = b.items.length;
					e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
				}), w("BuildControls" + e, function () {
					if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
						var d = c.arrowMarkup,
							e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
							f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
						e.click(function () {
							b.prev()
						}), f.click(function () {
							b.next()
						}), b.container.append(e.add(f))
					}
				}), w(n + e, function () {
					b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
						b.preloadNearbyImages(), b._preloadTimeout = null
					}, 16)
				}), void w(h + e, function () {
					d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
				})) : !1
			},
			next: function () {
				b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
			},
			prev: function () {
				b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
			},
			goTo: function (a) {
				b.direction = a >= b.index, b.index = a, b.updateItemHTML()
			},
			preloadNearbyImages: function () {
				var a, c = b.st.gallery.preload,
					d = Math.min(c[0], b.items.length),
					e = Math.min(c[1], b.items.length);
				for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
				for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
			},
			_preloadItem: function (c) {
				if (c = S(c), !b.items[c].preloaded) {
					var d = b.items[c];
					d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
						d.hasSize = !0
					}).on("error.mfploader", function () {
						d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
					}).attr("src", d.src)), d.preloaded = !0
				}
			}
		}
	});
	var U = "retina";
	a.magnificPopup.registerModule(U, {
		options: {
			replaceSrc: function (a) {
				return a.src.replace(/\.\w+$/, function (a) {
					return "@2x" + a
				})
			},
			ratio: 1
		},
		proto: {
			initRetina: function () {
				if (window.devicePixelRatio > 1) {
					var a = b.st.retina,
						c = a.ratio;
					c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
						b.img.css({
							"max-width": b.img[0].naturalWidth / c,
							width: "100%"
						})
					}), w("ElementParse." + U, function (b, d) {
						d.src = a.replaceSrc(d, c)
					}))
				}
			}
		}
	}), A()
});







/*!
 * imagesLoaded PACKAGED v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

! function (t, e) {
	"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function () {
	function t() {}
	var e = t.prototype;
	return e.on = function (t, e) {
		if (t && e) {
			var i = this._events = this._events || {},
				n = i[t] = i[t] || [];
			return -1 == n.indexOf(e) && n.push(e), this
		}
	}, e.once = function (t, e) {
		if (t && e) {
			this.on(t, e);
			var i = this._onceEvents = this._onceEvents || {},
				n = i[t] = i[t] || {};
			return n[e] = !0, this
		}
	}, e.off = function (t, e) {
		var i = this._events && this._events[t];
		if (i && i.length) {
			var n = i.indexOf(e);
			return -1 != n && i.splice(n, 1), this
		}
	}, e.emitEvent = function (t, e) {
		var i = this._events && this._events[t];
		if (i && i.length) {
			var n = 0,
				o = i[n];
			e = e || [];
			for (var r = this._onceEvents && this._onceEvents[t]; o;) {
				var s = r && r[o];
				s && (this.off(t, o), delete r[o]), o.apply(this, e), n += s ? 0 : 1, o = i[n]
			}
			return this
		}
	}, t
}),
function (t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (i) {
		return e(t, i)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}(window, function (t, e) {
	function i(t, e) {
		for (var i in e) t[i] = e[i];
		return t
	}

	function n(t) {
		var e = [];
		if (Array.isArray(t)) e = t;
		else if ("number" == typeof t.length)
			for (var i = 0; i < t.length; i++) e.push(t[i]);
		else e.push(t);
		return e
	}

	function o(t, e, r) {
		return this instanceof o ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = n(t), this.options = i({}, this.options), "function" == typeof e ? r = e : i(this.options, e), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(function () {
			this.check()
		}.bind(this))) : new o(t, e, r)
	}

	function r(t) {
		this.img = t
	}

	function s(t, e) {
		this.url = t, this.element = e, this.img = new Image
	}
	var h = t.jQuery,
		a = t.console;
	o.prototype = Object.create(e.prototype), o.prototype.options = {}, o.prototype.getImages = function () {
		this.images = [], this.elements.forEach(this.addElementImages, this)
	}, o.prototype.addElementImages = function (t) {
		"IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
		var e = t.nodeType;
		if (e && d[e]) {
			for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
				var o = i[n];
				this.addImage(o)
			}
			if ("string" == typeof this.options.background) {
				var r = t.querySelectorAll(this.options.background);
				for (n = 0; n < r.length; n++) {
					var s = r[n];
					this.addElementBackgroundImages(s)
				}
			}
		}
	};
	var d = {
		1: !0,
		9: !0,
		11: !0
	};
	return o.prototype.addElementBackgroundImages = function (t) {
		var e = getComputedStyle(t);
		if (e)
			for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
				var o = n && n[2];
				o && this.addBackground(o, t), n = i.exec(e.backgroundImage)
			}
	}, o.prototype.addImage = function (t) {
		var e = new r(t);
		this.images.push(e)
	}, o.prototype.addBackground = function (t, e) {
		var i = new s(t, e);
		this.images.push(i)
	}, o.prototype.check = function () {
		function t(t, i, n) {
			setTimeout(function () {
				e.progress(t, i, n)
			})
		}
		var e = this;
		return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (e) {
			e.once("progress", t), e.check()
		}) : void this.complete()
	}, o.prototype.progress = function (t, e, i) {
		this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, t, e)
	}, o.prototype.complete = function () {
		var t = this.hasAnyBroken ? "fail" : "done";
		if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
			var e = this.hasAnyBroken ? "reject" : "resolve";
			this.jqDeferred[e](this)
		}
	}, r.prototype = Object.create(e.prototype), r.prototype.check = function () {
		var t = this.getIsImageComplete();
		return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
	}, r.prototype.getIsImageComplete = function () {
		return this.img.complete && void 0 !== this.img.naturalWidth
	}, r.prototype.confirm = function (t, e) {
		this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
	}, r.prototype.handleEvent = function (t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, r.prototype.onload = function () {
		this.confirm(!0, "onload"), this.unbindEvents()
	}, r.prototype.onerror = function () {
		this.confirm(!1, "onerror"), this.unbindEvents()
	}, r.prototype.unbindEvents = function () {
		this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
	}, s.prototype = Object.create(r.prototype), s.prototype.check = function () {
		this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
		var t = this.getIsImageComplete();
		t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
	}, s.prototype.unbindEvents = function () {
		this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
	}, s.prototype.confirm = function (t, e) {
		this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
	}, o.makeJQueryPlugin = function (e) {
		e = e || t.jQuery, e && (h = e, h.fn.imagesLoaded = function (t, e) {
			var i = new o(this, t, e);
			return i.jqDeferred.promise(h(this))
		})
	}, o.makeJQueryPlugin(), o
});




/*!
 * Isotope PACKAGED v3.0.3
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2017 Metafizzy
 */

! function (t, e) {
	"function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
		return e(t, i)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function (t, e) {
	"use strict";

	function i(i, s, a) {
		function u(t, e, n) {
			var o, s = "$()." + i + '("' + e + '")';
			return t.each(function (t, u) {
				var h = a.data(u, i);
				if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
				var d = h[e];
				if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
				var l = d.apply(h, n);
				o = void 0 === o ? l : o
			}), void 0 !== o ? o : t
		}

		function h(t, e) {
			t.each(function (t, n) {
				var o = a.data(n, i);
				o ? (o.option(e), o._init()) : (o = new s(n, e), a.data(n, i, o))
			})
		}
		a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function (t) {
			a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
		}), a.fn[i] = function (t) {
			if ("string" == typeof t) {
				var e = o.call(arguments, 1);
				return u(this, t, e)
			}
			return h(this, t), this
		}, n(a))
	}

	function n(t) {
		!t || t && t.bridget || (t.bridget = i)
	}
	var o = Array.prototype.slice,
		s = t.console,
		r = "undefined" == typeof s ? function () {} : function (t) {
			s.error(t)
		};
	return n(e || t.jQuery), i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function () {
	function t() {}
	var e = t.prototype;
	return e.on = function (t, e) {
		if (t && e) {
			var i = this._events = this._events || {},
				n = i[t] = i[t] || [];
			return n.indexOf(e) == -1 && n.push(e), this
		}
	}, e.once = function (t, e) {
		if (t && e) {
			this.on(t, e);
			var i = this._onceEvents = this._onceEvents || {},
				n = i[t] = i[t] || {};
			return n[e] = !0, this
		}
	}, e.off = function (t, e) {
		var i = this._events && this._events[t];
		if (i && i.length) {
			var n = i.indexOf(e);
			return n != -1 && i.splice(n, 1), this
		}
	}, e.emitEvent = function (t, e) {
		var i = this._events && this._events[t];
		if (i && i.length) {
			var n = 0,
				o = i[n];
			e = e || [];
			for (var s = this._onceEvents && this._onceEvents[t]; o;) {
				var r = s && s[o];
				r && (this.off(t, o), delete s[o]), o.apply(this, e), n += r ? 0 : 1, o = i[n]
			}
			return this
		}
	}, t
}),
function (t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
		return e()
	}) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function () {
	"use strict";

	function t(t) {
		var e = parseFloat(t),
			i = t.indexOf("%") == -1 && !isNaN(e);
		return i && e
	}

	function e() {}

	function i() {
		for (var t = {
				width: 0,
				height: 0,
				innerWidth: 0,
				innerHeight: 0,
				outerWidth: 0,
				outerHeight: 0
			}, e = 0; e < h; e++) {
			var i = u[e];
			t[i] = 0
		}
		return t
	}

	function n(t) {
		var e = getComputedStyle(t);
		return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
	}

	function o() {
		if (!d) {
			d = !0;
			var e = document.createElement("div");
			e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
			var i = document.body || document.documentElement;
			i.appendChild(e);
			var o = n(e);
			s.isBoxSizeOuter = r = 200 == t(o.width), i.removeChild(e)
		}
	}

	function s(e) {
		if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
			var s = n(e);
			if ("none" == s.display) return i();
			var a = {};
			a.width = e.offsetWidth, a.height = e.offsetHeight;
			for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
				var f = u[l],
					m = s[f],
					c = parseFloat(m);
				a[f] = isNaN(c) ? 0 : c
			}
			var p = a.paddingLeft + a.paddingRight,
				y = a.paddingTop + a.paddingBottom,
				g = a.marginLeft + a.marginRight,
				v = a.marginTop + a.marginBottom,
				_ = a.borderLeftWidth + a.borderRightWidth,
				I = a.borderTopWidth + a.borderBottomWidth,
				z = d && r,
				S = t(s.width);
			S !== !1 && (a.width = S + (z ? 0 : p + _));
			var x = t(s.height);
			return x !== !1 && (a.height = x + (z ? 0 : y + I)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + I), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
		}
	}
	var r, a = "undefined" == typeof console ? e : function (t) {
			console.error(t)
		},
		u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
		h = u.length,
		d = !1;
	return s
}),
function (t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function () {
	"use strict";
	var t = function () {
		var t = window.Element.prototype;
		if (t.matches) return "matches";
		if (t.matchesSelector) return "matchesSelector";
		for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
			var n = e[i],
				o = n + "MatchesSelector";
			if (t[o]) return o
		}
	}();
	return function (e, i) {
		return e[t](i)
	}
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
		return e(t, i)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function (t, e) {
	var i = {};
	i.extend = function (t, e) {
		for (var i in e) t[i] = e[i];
		return t
	}, i.modulo = function (t, e) {
		return (t % e + e) % e
	}, i.makeArray = function (t) {
		var e = [];
		if (Array.isArray(t)) e = t;
		else if (t && "object" == typeof t && "number" == typeof t.length)
			for (var i = 0; i < t.length; i++) e.push(t[i]);
		else e.push(t);
		return e
	}, i.removeFrom = function (t, e) {
		var i = t.indexOf(e);
		i != -1 && t.splice(i, 1)
	}, i.getParent = function (t, i) {
		for (; t != document.body;)
			if (t = t.parentNode, e(t, i)) return t
	}, i.getQueryElement = function (t) {
		return "string" == typeof t ? document.querySelector(t) : t
	}, i.handleEvent = function (t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, i.filterFindElements = function (t, n) {
		t = i.makeArray(t);
		var o = [];
		return t.forEach(function (t) {
			if (t instanceof HTMLElement) {
				if (!n) return void o.push(t);
				e(t, n) && o.push(t);
				for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++) o.push(i[s])
			}
		}), o
	}, i.debounceMethod = function (t, e, i) {
		var n = t.prototype[e],
			o = e + "Timeout";
		t.prototype[e] = function () {
			var t = this[o];
			t && clearTimeout(t);
			var e = arguments,
				s = this;
			this[o] = setTimeout(function () {
				n.apply(s, e), delete s[o]
			}, i || 100)
		}
	}, i.docReady = function (t) {
		var e = document.readyState;
		"complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
	}, i.toDashed = function (t) {
		return t.replace(/(.)([A-Z])/g, function (t, e, i) {
			return e + "-" + i
		}).toLowerCase()
	};
	var n = t.console;
	return i.htmlInit = function (e, o) {
		i.docReady(function () {
			var s = i.toDashed(o),
				r = "data-" + s,
				a = document.querySelectorAll("[" + r + "]"),
				u = document.querySelectorAll(".js-" + s),
				h = i.makeArray(a).concat(i.makeArray(u)),
				d = r + "-options",
				l = t.jQuery;
			h.forEach(function (t) {
				var i, s = t.getAttribute(r) || t.getAttribute(d);
				try {
					i = s && JSON.parse(s)
				} catch (a) {
					return void(n && n.error("Error parsing " + r + " on " + t.className + ": " + a))
				}
				var u = new e(t, i);
				l && l.data(t, o, u)
			})
		})
	}, i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function (t, e) {
	"use strict";

	function i(t) {
		for (var e in t) return !1;
		return e = null, !0
	}

	function n(t, e) {
		t && (this.element = t, this.layout = e, this.position = {
			x: 0,
			y: 0
		}, this._create())
	}

	function o(t) {
		return t.replace(/([A-Z])/g, function (t) {
			return "-" + t.toLowerCase()
		})
	}
	var s = document.documentElement.style,
		r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
		a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
		u = {
			WebkitTransition: "webkitTransitionEnd",
			transition: "transitionend"
		} [r],
		h = {
			transform: a,
			transition: r,
			transitionDuration: r + "Duration",
			transitionProperty: r + "Property",
			transitionDelay: r + "Delay"
		},
		d = n.prototype = Object.create(t.prototype);
	d.constructor = n, d._create = function () {
		this._transn = {
			ingProperties: {},
			clean: {},
			onEnd: {}
		}, this.css({
			position: "absolute"
		})
	}, d.handleEvent = function (t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, d.getSize = function () {
		this.size = e(this.element)
	}, d.css = function (t) {
		var e = this.element.style;
		for (var i in t) {
			var n = h[i] || i;
			e[n] = t[i]
		}
	}, d.getPosition = function () {
		var t = getComputedStyle(this.element),
			e = this.layout._getOption("originLeft"),
			i = this.layout._getOption("originTop"),
			n = t[e ? "left" : "right"],
			o = t[i ? "top" : "bottom"],
			s = this.layout.size,
			r = n.indexOf("%") != -1 ? parseFloat(n) / 100 * s.width : parseInt(n, 10),
			a = o.indexOf("%") != -1 ? parseFloat(o) / 100 * s.height : parseInt(o, 10);
		r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a
	}, d.layoutPosition = function () {
		var t = this.layout.size,
			e = {},
			i = this.layout._getOption("originLeft"),
			n = this.layout._getOption("originTop"),
			o = i ? "paddingLeft" : "paddingRight",
			s = i ? "left" : "right",
			r = i ? "right" : "left",
			a = this.position.x + t[o];
		e[s] = this.getXValue(a), e[r] = "";
		var u = n ? "paddingTop" : "paddingBottom",
			h = n ? "top" : "bottom",
			d = n ? "bottom" : "top",
			l = this.position.y + t[u];
		e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
	}, d.getXValue = function (t) {
		var e = this.layout._getOption("horizontal");
		return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
	}, d.getYValue = function (t) {
		var e = this.layout._getOption("horizontal");
		return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
	}, d._transitionTo = function (t, e) {
		this.getPosition();
		var i = this.position.x,
			n = this.position.y,
			o = parseInt(t, 10),
			s = parseInt(e, 10),
			r = o === this.position.x && s === this.position.y;
		if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();
		var a = t - i,
			u = e - n,
			h = {};
		h.transform = this.getTranslate(a, u), this.transition({
			to: h,
			onTransitionEnd: {
				transform: this.layoutPosition
			},
			isCleaning: !0
		})
	}, d.getTranslate = function (t, e) {
		var i = this.layout._getOption("originLeft"),
			n = this.layout._getOption("originTop");
		return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
	}, d.goTo = function (t, e) {
		this.setPosition(t, e), this.layoutPosition()
	}, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
		this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
	}, d._nonTransition = function (t) {
		this.css(t.to), t.isCleaning && this._removeStyles(t.to);
		for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
	}, d.transition = function (t) {
		if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
		var e = this._transn;
		for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
		for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
		if (t.from) {
			this.css(t.from);
			var n = this.element.offsetHeight;
			n = null
		}
		this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
	};
	var l = "opacity," + o(a);
	d.enableTransition = function () {
		if (!this.isTransitioning) {
			var t = this.layout.options.transitionDuration;
			t = "number" == typeof t ? t + "ms" : t, this.css({
				transitionProperty: l,
				transitionDuration: t,
				transitionDelay: this.staggerDelay || 0
			}), this.element.addEventListener(u, this, !1)
		}
	}, d.onwebkitTransitionEnd = function (t) {
		this.ontransitionend(t)
	}, d.onotransitionend = function (t) {
		this.ontransitionend(t)
	};
	var f = {
		"-webkit-transform": "transform"
	};
	d.ontransitionend = function (t) {
		if (t.target === this.element) {
			var e = this._transn,
				n = f[t.propertyName] || t.propertyName;
			if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
				var o = e.onEnd[n];
				o.call(this), delete e.onEnd[n]
			}
			this.emitEvent("transitionEnd", [this])
		}
	}, d.disableTransition = function () {
		this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
	}, d._removeStyles = function (t) {
		var e = {};
		for (var i in t) e[i] = "";
		this.css(e)
	};
	var m = {
		transitionProperty: "",
		transitionDuration: "",
		transitionDelay: ""
	};
	return d.removeTransitionStyles = function () {
		this.css(m)
	}, d.stagger = function (t) {
		t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
	}, d.removeElem = function () {
		this.element.parentNode.removeChild(this.element), this.css({
			display: ""
		}), this.emitEvent("remove", [this])
	}, d.remove = function () {
		return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
			this.removeElem()
		}), void this.hide()) : void this.removeElem()
	}, d.reveal = function () {
		delete this.isHidden, this.css({
			display: ""
		});
		var t = this.layout.options,
			e = {},
			i = this.getHideRevealTransitionEndProperty("visibleStyle");
		e[i] = this.onRevealTransitionEnd, this.transition({
			from: t.hiddenStyle,
			to: t.visibleStyle,
			isCleaning: !0,
			onTransitionEnd: e
		})
	}, d.onRevealTransitionEnd = function () {
		this.isHidden || this.emitEvent("reveal")
	}, d.getHideRevealTransitionEndProperty = function (t) {
		var e = this.layout.options[t];
		if (e.opacity) return "opacity";
		for (var i in e) return i
	}, d.hide = function () {
		this.isHidden = !0, this.css({
			display: ""
		});
		var t = this.layout.options,
			e = {},
			i = this.getHideRevealTransitionEndProperty("hiddenStyle");
		e[i] = this.onHideTransitionEnd, this.transition({
			from: t.visibleStyle,
			to: t.hiddenStyle,
			isCleaning: !0,
			onTransitionEnd: e
		})
	}, d.onHideTransitionEnd = function () {
		this.isHidden && (this.css({
			display: "none"
		}), this.emitEvent("hide"))
	}, d.destroy = function () {
		this.css({
			position: "",
			left: "",
			right: "",
			top: "",
			bottom: "",
			transition: "",
			transform: ""
		})
	}, n
}),
function (t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, o, s) {
		return e(t, i, n, o, s)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function (t, e, i, n, o) {
	"use strict";

	function s(t, e) {
		var i = n.getQueryElement(t);
		if (!i) return void(u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
		this.element = i, h && (this.$element = h(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
		var o = ++l;
		this.element.outlayerGUID = o, f[o] = this, this._create();
		var s = this._getOption("initLayout");
		s && this.layout()
	}

	function r(t) {
		function e() {
			t.apply(this, arguments)
		}
		return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
	}

	function a(t) {
		if ("number" == typeof t) return t;
		var e = t.match(/(^\d*\.?\d*)(\w*)/),
			i = e && e[1],
			n = e && e[2];
		if (!i.length) return 0;
		i = parseFloat(i);
		var o = c[n] || 1;
		return i * o
	}
	var u = t.console,
		h = t.jQuery,
		d = function () {},
		l = 0,
		f = {};
	s.namespace = "outlayer", s.Item = o, s.defaults = {
		containerStyle: {
			position: "relative"
		},
		initLayout: !0,
		originLeft: !0,
		originTop: !0,
		resize: !0,
		resizeContainer: !0,
		transitionDuration: "0.4s",
		hiddenStyle: {
			opacity: 0,
			transform: "scale(0.001)"
		},
		visibleStyle: {
			opacity: 1,
			transform: "scale(1)"
		}
	};
	var m = s.prototype;
	n.extend(m, e.prototype), m.option = function (t) {
		n.extend(this.options, t)
	}, m._getOption = function (t) {
		var e = this.constructor.compatOptions[t];
		return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
	}, s.compatOptions = {
		initLayout: "isInitLayout",
		horizontal: "isHorizontal",
		layoutInstant: "isLayoutInstant",
		originLeft: "isOriginLeft",
		originTop: "isOriginTop",
		resize: "isResizeBound",
		resizeContainer: "isResizingContainer"
	}, m._create = function () {
		this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
		var t = this._getOption("resize");
		t && this.bindResize()
	}, m.reloadItems = function () {
		this.items = this._itemize(this.element.children)
	}, m._itemize = function (t) {
		for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
			var s = e[o],
				r = new i(s, this);
			n.push(r)
		}
		return n
	}, m._filterFindItemElements = function (t) {
		return n.filterFindElements(t, this.options.itemSelector)
	}, m.getItemElements = function () {
		return this.items.map(function (t) {
			return t.element
		})
	}, m.layout = function () {
		this._resetLayout(), this._manageStamps();
		var t = this._getOption("layoutInstant"),
			e = void 0 !== t ? t : !this._isLayoutInited;
		this.layoutItems(this.items, e), this._isLayoutInited = !0
	}, m._init = m.layout, m._resetLayout = function () {
		this.getSize()
	}, m.getSize = function () {
		this.size = i(this.element)
	}, m._getMeasurement = function (t, e) {
		var n, o = this.options[t];
		o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
	}, m.layoutItems = function (t, e) {
		t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
	}, m._getItemsForLayout = function (t) {
		return t.filter(function (t) {
			return !t.isIgnored
		})
	}, m._layoutItems = function (t, e) {
		if (this._emitCompleteOnItems("layout", t), t && t.length) {
			var i = [];
			t.forEach(function (t) {
				var n = this._getItemLayoutPosition(t);
				n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
			}, this), this._processLayoutQueue(i)
		}
	}, m._getItemLayoutPosition = function () {
		return {
			x: 0,
			y: 0
		}
	}, m._processLayoutQueue = function (t) {
		this.updateStagger(), t.forEach(function (t, e) {
			this._positionItem(t.item, t.x, t.y, t.isInstant, e)
		}, this)
	}, m.updateStagger = function () {
		var t = this.options.stagger;
		return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
	}, m._positionItem = function (t, e, i, n, o) {
		n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
	}, m._postLayout = function () {
		this.resizeContainer()
	}, m.resizeContainer = function () {
		var t = this._getOption("resizeContainer");
		if (t) {
			var e = this._getContainerSize();
			e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
		}
	}, m._getContainerSize = d, m._setContainerMeasure = function (t, e) {
		if (void 0 !== t) {
			var i = this.size;
			i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
		}
	}, m._emitCompleteOnItems = function (t, e) {
		function i() {
			o.dispatchEvent(t + "Complete", null, [e])
		}

		function n() {
			r++, r == s && i()
		}
		var o = this,
			s = e.length;
		if (!e || !s) return void i();
		var r = 0;
		e.forEach(function (e) {
			e.once(t, n)
		})
	}, m.dispatchEvent = function (t, e, i) {
		var n = e ? [e].concat(i) : i;
		if (this.emitEvent(t, n), h)
			if (this.$element = this.$element || h(this.element), e) {
				var o = h.Event(e);
				o.type = t, this.$element.trigger(o, i)
			} else this.$element.trigger(t, i)
	}, m.ignore = function (t) {
		var e = this.getItem(t);
		e && (e.isIgnored = !0)
	}, m.unignore = function (t) {
		var e = this.getItem(t);
		e && delete e.isIgnored
	}, m.stamp = function (t) {
		t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
	}, m.unstamp = function (t) {
		t = this._find(t), t && t.forEach(function (t) {
			n.removeFrom(this.stamps, t), this.unignore(t)
		}, this)
	}, m._find = function (t) {
		if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)
	}, m._manageStamps = function () {
		this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
	}, m._getBoundingRect = function () {
		var t = this.element.getBoundingClientRect(),
			e = this.size;
		this._boundingRect = {
			left: t.left + e.paddingLeft + e.borderLeftWidth,
			top: t.top + e.paddingTop + e.borderTopWidth,
			right: t.right - (e.paddingRight + e.borderRightWidth),
			bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
		}
	}, m._manageStamp = d, m._getElementOffset = function (t) {
		var e = t.getBoundingClientRect(),
			n = this._boundingRect,
			o = i(t),
			s = {
				left: e.left - n.left - o.marginLeft,
				top: e.top - n.top - o.marginTop,
				right: n.right - e.right - o.marginRight,
				bottom: n.bottom - e.bottom - o.marginBottom
			};
		return s
	}, m.handleEvent = n.handleEvent, m.bindResize = function () {
		t.addEventListener("resize", this), this.isResizeBound = !0
	}, m.unbindResize = function () {
		t.removeEventListener("resize", this), this.isResizeBound = !1
	}, m.onresize = function () {
		this.resize()
	}, n.debounceMethod(s, "onresize", 100), m.resize = function () {
		this.isResizeBound && this.needsResizeLayout() && this.layout()
	}, m.needsResizeLayout = function () {
		var t = i(this.element),
			e = this.size && t;
		return e && t.innerWidth !== this.size.innerWidth
	}, m.addItems = function (t) {
		var e = this._itemize(t);
		return e.length && (this.items = this.items.concat(e)), e
	}, m.appended = function (t) {
		var e = this.addItems(t);
		e.length && (this.layoutItems(e, !0), this.reveal(e))
	}, m.prepended = function (t) {
		var e = this._itemize(t);
		if (e.length) {
			var i = this.items.slice(0);
			this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
		}
	}, m.reveal = function (t) {
		if (this._emitCompleteOnItems("reveal", t), t && t.length) {
			var e = this.updateStagger();
			t.forEach(function (t, i) {
				t.stagger(i * e), t.reveal()
			})
		}
	}, m.hide = function (t) {
		if (this._emitCompleteOnItems("hide", t), t && t.length) {
			var e = this.updateStagger();
			t.forEach(function (t, i) {
				t.stagger(i * e), t.hide()
			})
		}
	}, m.revealItemElements = function (t) {
		var e = this.getItems(t);
		this.reveal(e)
	}, m.hideItemElements = function (t) {
		var e = this.getItems(t);
		this.hide(e)
	}, m.getItem = function (t) {
		for (var e = 0; e < this.items.length; e++) {
			var i = this.items[e];
			if (i.element == t) return i
		}
	}, m.getItems = function (t) {
		t = n.makeArray(t);
		var e = [];
		return t.forEach(function (t) {
			var i = this.getItem(t);
			i && e.push(i)
		}, this), e
	}, m.remove = function (t) {
		var e = this.getItems(t);
		this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
			t.remove(), n.removeFrom(this.items, t)
		}, this)
	}, m.destroy = function () {
		var t = this.element.style;
		t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
			t.destroy()
		}), this.unbindResize();
		var e = this.element.outlayerGUID;
		delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
	}, s.data = function (t) {
		t = n.getQueryElement(t);
		var e = t && t.outlayerGUID;
		return e && f[e]
	}, s.create = function (t, e) {
		var i = r(s);
		return i.defaults = n.extend({}, s.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(o), n.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
	};
	var c = {
		ms: 1,
		s: 1e3
	};
	return s.Item = o, s
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function (t) {
	"use strict";

	function e() {
		t.Item.apply(this, arguments)
	}
	var i = e.prototype = Object.create(t.Item.prototype),
		n = i._create;
	i._create = function () {
		this.id = this.layout.itemGUID++, n.call(this), this.sortData = {}
	}, i.updateSortData = function () {
		if (!this.isIgnored) {
			this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
			var t = this.layout.options.getSortData,
				e = this.layout._sorters;
			for (var i in t) {
				var n = e[i];
				this.sortData[i] = n(this.element, this)
			}
		}
	};
	var o = i.destroy;
	return i.destroy = function () {
		o.apply(this, arguments), this.css({
			display: ""
		})
	}, e
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function (t, e) {
	"use strict";

	function i(t) {
		this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
	}
	var n = i.prototype,
		o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
	return o.forEach(function (t) {
		n[t] = function () {
			return e.prototype[t].apply(this.isotope, arguments)
		}
	}), n.needsVerticalResizeLayout = function () {
		var e = t(this.isotope.element),
			i = this.isotope.size && e;
		return i && e.innerHeight != this.isotope.size.innerHeight
	}, n._getMeasurement = function () {
		this.isotope._getMeasurement.apply(this, arguments)
	}, n.getColumnWidth = function () {
		this.getSegmentSize("column", "Width")
	}, n.getRowHeight = function () {
		this.getSegmentSize("row", "Height")
	}, n.getSegmentSize = function (t, e) {
		var i = t + e,
			n = "outer" + e;
		if (this._getMeasurement(i, n), !this[i]) {
			var o = this.getFirstItemSize();
			this[i] = o && o[n] || this.isotope.size["inner" + e]
		}
	}, n.getFirstItemSize = function () {
		var e = this.isotope.filteredItems[0];
		return e && e.element && t(e.element)
	}, n.layout = function () {
		this.isotope.layout.apply(this.isotope, arguments)
	}, n.getSize = function () {
		this.isotope.getSize(), this.size = this.isotope.size
	}, i.modes = {}, i.create = function (t, e) {
		function o() {
			i.apply(this, arguments)
		}
		return o.prototype = Object.create(n), o.prototype.constructor = o, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
	}, i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function (t, e) {
	var i = t.create("masonry");
	return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function () {
		this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
		for (var t = 0; t < this.cols; t++) this.colYs.push(0);
		this.maxY = 0
	}, i.prototype.measureColumns = function () {
		if (this.getContainerWidth(), !this.columnWidth) {
			var t = this.items[0],
				i = t && t.element;
			this.columnWidth = i && e(i).outerWidth || this.containerWidth
		}
		var n = this.columnWidth += this.gutter,
			o = this.containerWidth + this.gutter,
			s = o / n,
			r = n - o % n,
			a = r && r < 1 ? "round" : "floor";
		s = Math[a](s), this.cols = Math.max(s, 1)
	}, i.prototype.getContainerWidth = function () {
		var t = this._getOption("fitWidth"),
			i = t ? this.element.parentNode : this.element,
			n = e(i);
		this.containerWidth = n && n.innerWidth
	}, i.prototype._getItemLayoutPosition = function (t) {
		t.getSize();
		var e = t.size.outerWidth % this.columnWidth,
			i = e && e < 1 ? "round" : "ceil",
			n = Math[i](t.size.outerWidth / this.columnWidth);
		n = Math.min(n, this.cols);
		for (var o = this._getColGroup(n), s = Math.min.apply(Math, o), r = o.indexOf(s), a = {
				x: this.columnWidth * r,
				y: s
			}, u = s + t.size.outerHeight, h = this.cols + 1 - o.length, d = 0; d < h; d++) this.colYs[r + d] = u;
		return a
	}, i.prototype._getColGroup = function (t) {
		if (t < 2) return this.colYs;
		for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++) {
			var o = this.colYs.slice(n, n + t);
			e[n] = Math.max.apply(Math, o)
		}
		return e
	}, i.prototype._manageStamp = function (t) {
		var i = e(t),
			n = this._getElementOffset(t),
			o = this._getOption("originLeft"),
			s = o ? n.left : n.right,
			r = s + i.outerWidth,
			a = Math.floor(s / this.columnWidth);
		a = Math.max(0, a);
		var u = Math.floor(r / this.columnWidth);
		u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
		for (var h = this._getOption("originTop"), d = (h ? n.top : n.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l])
	}, i.prototype._getContainerSize = function () {
		this.maxY = Math.max.apply(Math, this.colYs);
		var t = {
			height: this.maxY
		};
		return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
	}, i.prototype._getContainerFitWidth = function () {
		for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
		return (this.cols - t) * this.columnWidth - this.gutter
	}, i.prototype.needsResizeLayout = function () {
		var t = this.containerWidth;
		return this.getContainerWidth(), t != this.containerWidth
	}, i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function (t, e) {
	"use strict";
	var i = t.create("masonry"),
		n = i.prototype,
		o = {
			_getElementOffset: !0,
			layout: !0,
			_getMeasurement: !0
		};
	for (var s in e.prototype) o[s] || (n[s] = e.prototype[s]);
	var r = n.measureColumns;
	n.measureColumns = function () {
		this.items = this.isotope.filteredItems, r.call(this)
	};
	var a = n._getOption;
	return n._getOption = function (t) {
		return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
	}, i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
	"use strict";
	var e = t.create("fitRows"),
		i = e.prototype;
	return i._resetLayout = function () {
		this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
	}, i._getItemLayoutPosition = function (t) {
		t.getSize();
		var e = t.size.outerWidth + this.gutter,
			i = this.isotope.size.innerWidth + this.gutter;
		0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
		var n = {
			x: this.x,
			y: this.y
		};
		return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
	}, i._getContainerSize = function () {
		return {
			height: this.maxY
		}
	}, e
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
	"use strict";
	var e = t.create("vertical", {
			horizontalAlignment: 0
		}),
		i = e.prototype;
	return i._resetLayout = function () {
		this.y = 0
	}, i._getItemLayoutPosition = function (t) {
		t.getSize();
		var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
			i = this.y;
		return this.y += t.size.outerHeight, {
			x: e,
			y: i
		}
	}, i._getContainerSize = function () {
		return {
			height: this.y
		}
	}, e
}),
function (t, e) {
	"function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function (i, n, o, s, r, a) {
		return e(t, i, n, o, s, r, a)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function (t, e, i, n, o, s, r) {
	function a(t, e) {
		return function (i, n) {
			for (var o = 0; o < t.length; o++) {
				var s = t[o],
					r = i.sortData[s],
					a = n.sortData[s];
				if (r > a || r < a) {
					var u = void 0 !== e[s] ? e[s] : e,
						h = u ? 1 : -1;
					return (r > a ? 1 : -1) * h
				}
			}
			return 0
		}
	}
	var u = t.jQuery,
		h = String.prototype.trim ? function (t) {
			return t.trim()
		} : function (t) {
			return t.replace(/^\s+|\s+$/g, "")
		},
		d = e.create("isotope", {
			layoutMode: "masonry",
			isJQueryFiltering: !0,
			sortAscending: !0
		});
	d.Item = s, d.LayoutMode = r;
	var l = d.prototype;
	l._create = function () {
		this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
		for (var t in r.modes) this._initLayoutMode(t)
	}, l.reloadItems = function () {
		this.itemGUID = 0, e.prototype.reloadItems.call(this)
	}, l._itemize = function () {
		for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
			var n = t[i];
			n.id = this.itemGUID++
		}
		return this._updateItemsSortData(t), t
	}, l._initLayoutMode = function (t) {
		var e = r.modes[t],
			i = this.options[t] || {};
		this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this)
	}, l.layout = function () {
		return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
	}, l._layout = function () {
		var t = this._getIsInstant();
		this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
	}, l.arrange = function (t) {
		this.option(t), this._getIsInstant();
		var e = this._filter(this.items);
		this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
	}, l._init = l.arrange, l._hideReveal = function (t) {
		this.reveal(t.needReveal), this.hide(t.needHide)
	}, l._getIsInstant = function () {
		var t = this._getOption("layoutInstant"),
			e = void 0 !== t ? t : !this._isLayoutInited;
		return this._isInstant = e, e
	}, l._bindArrangeComplete = function () {
		function t() {
			e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
		}
		var e, i, n, o = this;
		this.once("layoutComplete", function () {
			e = !0, t()
		}), this.once("hideComplete", function () {
			i = !0, t()
		}), this.once("revealComplete", function () {
			n = !0, t()
		})
	}, l._filter = function (t) {
		var e = this.options.filter;
		e = e || "*";
		for (var i = [], n = [], o = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
			var a = t[r];
			if (!a.isIgnored) {
				var u = s(a);
				u && i.push(a), u && a.isHidden ? n.push(a) : u || a.isHidden || o.push(a)
			}
		}
		return {
			matches: i,
			needReveal: n,
			needHide: o
		}
	}, l._getFilterTest = function (t) {
		return u && this.options.isJQueryFiltering ? function (e) {
			return u(e.element).is(t)
		} : "function" == typeof t ? function (e) {
			return t(e.element)
		} : function (e) {
			return n(e.element, t)
		}
	}, l.updateSortData = function (t) {
		var e;
		t ? (t = o.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
	}, l._getSorters = function () {
		var t = this.options.getSortData;
		for (var e in t) {
			var i = t[e];
			this._sorters[e] = f(i)
		}
	}, l._updateItemsSortData = function (t) {
		for (var e = t && t.length, i = 0; e && i < e; i++) {
			var n = t[i];
			n.updateSortData()
		}
	};
	var f = function () {
		function t(t) {
			if ("string" != typeof t) return t;
			var i = h(t).split(" "),
				n = i[0],
				o = n.match(/^\[(.+)\]$/),
				s = o && o[1],
				r = e(s, n),
				a = d.sortDataParsers[i[1]];
			return t = a ? function (t) {
				return t && a(r(t))
			} : function (t) {
				return t && r(t)
			}
		}

		function e(t, e) {
			return t ? function (e) {
				return e.getAttribute(t)
			} : function (t) {
				var i = t.querySelector(e);
				return i && i.textContent
			}
		}
		return t
	}();
	d.sortDataParsers = {
		parseInt: function (t) {
			return parseInt(t, 10)
		},
		parseFloat: function (t) {
			return parseFloat(t)
		}
	}, l._sort = function () {
		if (this.options.sortBy) {
			var t = o.makeArray(this.options.sortBy);
			this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
			var e = a(this.sortHistory, this.options.sortAscending);
			this.filteredItems.sort(e)
		}
	}, l._getIsSameSortBy = function (t) {
		for (var e = 0; e < t.length; e++)
			if (t[e] != this.sortHistory[e]) return !1;
		return !0
	}, l._mode = function () {
		var t = this.options.layoutMode,
			e = this.modes[t];
		if (!e) throw new Error("No layout mode: " + t);
		return e.options = this.options[t], e
	}, l._resetLayout = function () {
		e.prototype._resetLayout.call(this), this._mode()._resetLayout()
	}, l._getItemLayoutPosition = function (t) {
		return this._mode()._getItemLayoutPosition(t)
	}, l._manageStamp = function (t) {
		this._mode()._manageStamp(t)
	}, l._getContainerSize = function () {
		return this._mode()._getContainerSize()
	}, l.needsResizeLayout = function () {
		return this._mode().needsResizeLayout()
	}, l.appended = function (t) {
		var e = this.addItems(t);
		if (e.length) {
			var i = this._filterRevealAdded(e);
			this.filteredItems = this.filteredItems.concat(i)
		}
	}, l.prepended = function (t) {
		var e = this._itemize(t);
		if (e.length) {
			this._resetLayout(), this._manageStamps();
			var i = this._filterRevealAdded(e);
			this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
		}
	}, l._filterRevealAdded = function (t) {
		var e = this._filter(t);
		return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
	}, l.insert = function (t) {
		var e = this.addItems(t);
		if (e.length) {
			var i, n, o = e.length;
			for (i = 0; i < o; i++) n = e[i], this.element.appendChild(n.element);
			var s = this._filter(e).matches;
			for (i = 0; i < o; i++) e[i].isLayoutInstant = !0;
			for (this.arrange(), i = 0; i < o; i++) delete e[i].isLayoutInstant;
			this.reveal(s)
		}
	};
	var m = l.remove;
	return l.remove = function (t) {
		t = o.makeArray(t);
		var e = this.getItems(t);
		m.call(this, t);
		for (var i = e && e.length, n = 0; i && n < i; n++) {
			var s = e[n];
			o.removeFrom(this.filteredItems, s)
		}
	}, l.shuffle = function () {
		for (var t = 0; t < this.items.length; t++) {
			var e = this.items[t];
			e.sortData.random = Math.random()
		}
		this.options.sortBy = "random", this._sort(), this._layout()
	}, l._noTransition = function (t, e) {
		var i = this.options.transitionDuration;
		this.options.transitionDuration = 0;
		var n = t.apply(this, e);
		return this.options.transitionDuration = i, n
	}, l.getFilteredItemElements = function () {
		return this.filteredItems.map(function (t) {
			return t.element
		})
	}, d
});





/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
! function (a, b, c, d) {
	function e(b, c) {
		this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		}, this._states = {
			current: {},
			tags: {
				initializing: ["busy"],
				animating: ["busy"],
				dragging: ["interacting"]
			}
		}, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
			this._handlers[c] = a.proxy(this[c], this)
		}, this)), a.each(e.Plugins, a.proxy(function (a, b) {
			this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
		}, this)), a.each(e.Workers, a.proxy(function (b, c) {
			this._pipe.push({
				filter: c.filter,
				run: a.proxy(c.run, this)
			})
		}, this)), this.setup(), this.initialize()
	}
	e.Defaults = {
		items: 3,
		loop: !1,
		center: !1,
		rewind: !1,
		mouseDrag: !0,
		touchDrag: !0,
		pullDrag: !0,
		freeDrag: !1,
		margin: 0,
		stagePadding: 0,
		merge: !1,
		mergeFit: !0,
		autoWidth: !1,
		startPosition: 0,
		rtl: !1,
		smartSpeed: 250,
		fluidSpeed: !1,
		dragEndSpeed: !1,
		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: b,
		fallbackEasing: "swing",
		info: !1,
		nestedItemSelector: !1,
		itemElement: "div",
		stageElement: "div",
		refreshClass: "owl-refresh",
		loadedClass: "owl-loaded",
		loadingClass: "owl-loading",
		rtlClass: "owl-rtl",
		responsiveClass: "owl-responsive",
		dragClass: "owl-drag",
		itemClass: "owl-item",
		stageClass: "owl-stage",
		stageOuterClass: "owl-stage-outer",
		grabClass: "owl-grab"
	}, e.Width = {
		Default: "default",
		Inner: "inner",
		Outer: "outer"
	}, e.Type = {
		Event: "event",
		State: "state"
	}, e.Plugins = {}, e.Workers = [{
		filter: ["width", "settings"],
		run: function () {
			this._width = this.$element.width()
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (a) {
			a.current = this._items && this._items[this.relative(this._current)]
		}
	}, {
		filter: ["items", "settings"],
		run: function () {
			this.$stage.children(".cloned").remove()
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (a) {
			var b = this.settings.margin || "",
				c = !this.settings.autoWidth,
				d = this.settings.rtl,
				e = {
					width: "auto",
					"margin-left": d ? b : "",
					"margin-right": d ? "" : b
				};
			!c && this.$stage.children().css(e), a.css = e
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (a) {
			var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				c = null,
				d = this._items.length,
				e = !this.settings.autoWidth,
				f = [];
			for (a.items = {
					merge: !1,
					width: b
				}; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
			this._widths = f
		}
	}, {
		filter: ["items", "settings"],
		run: function () {
			var b = [],
				c = this._items,
				d = this.settings,
				e = Math.max(2 * d.items, 4),
				f = 2 * Math.ceil(c.length / 2),
				g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
				h = "",
				i = "";
			for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
			this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function () {
			for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
			this._coordinates = f
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function () {
			var a = this.settings.stagePadding,
				b = this._coordinates,
				c = {
					width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
					"padding-left": a || "",
					"padding-right": a || ""
				};
			this.$stage.css(c)
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (a) {
			var b = this._coordinates.length,
				c = !this.settings.autoWidth,
				d = this.$stage.children();
			if (c && a.items.merge)
				for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
			else c && (a.css.width = a.items.width, d.css(a.css))
		}
	}, {
		filter: ["items"],
		run: function () {
			this._coordinates.length < 1 && this.$stage.removeAttr("style")
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (a) {
			a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
		}
	}, {
		filter: ["position"],
		run: function () {
			this.animate(this.coordinates(this._current))
		}
	}, {
		filter: ["width", "position", "items", "settings"],
		run: function () {
			var a, b, c, d, e = this.settings.rtl ? 1 : -1,
				f = 2 * this.settings.stagePadding,
				g = this.coordinates(this.current()) + f,
				h = g + this.width() * e,
				i = [];
			for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
			this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
		}
	}], e.prototype.initialize = function () {
		if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
			var b, c, e;
			b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b)
		}
		this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
	}, e.prototype.setup = function () {
		var b = this.viewport(),
			c = this.options.responsive,
			d = -1,
			e = null;
		c ? (a.each(c, function (a) {
			a <= b && a > d && (d = Number(a))
		}), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
			property: {
				name: "settings",
				value: e
			}
		}), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
			property: {
				name: "settings",
				value: this.settings
			}
		})
	}, e.prototype.optionsLogic = function () {
		this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
	}, e.prototype.prepare = function (b) {
		var c = this.trigger("prepare", {
			content: b
		});
		return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
			content: c.data
		}), c.data
	}, e.prototype.update = function () {
		for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
				return this[a]
			}, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
		this._invalidated = {}, !this.is("valid") && this.enter("valid")
	}, e.prototype.width = function (a) {
		switch (a = a || e.Width.Default) {
			case e.Width.Inner:
			case e.Width.Outer:
				return this._width;
			default:
				return this._width - 2 * this.settings.stagePadding + this.settings.margin
		}
	}, e.prototype.refresh = function () {
		this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
	}, e.prototype.onThrottledResize = function () {
		b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
	}, e.prototype.onResize = function () {
		return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
	}, e.prototype.registerEventHandlers = function () {
		a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
			return !1
		})), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
	}, e.prototype.onDragStart = function (b) {
		var d = null;
		3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
			x: d[16 === d.length ? 12 : 4],
			y: d[16 === d.length ? 13 : 5]
		}) : (d = this.$stage.position(), d = {
			x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
			y: d.top
		}), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
			var d = this.difference(this._drag.pointer, this.pointer(b));
			a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
		}, this)))
	}, e.prototype.onDragMove = function (a) {
		var b = null,
			c = null,
			d = null,
			e = this.difference(this._drag.pointer, this.pointer(a)),
			f = this.difference(this._drag.stage.start, e);
		this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
	}, e.prototype.onDragEnd = function (b) {
		var d = this.difference(this._drag.pointer, this.pointer(b)),
			e = this._drag.stage.current,
			f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
		a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
			return !1
		})), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
	}, e.prototype.closest = function (b, c) {
		var d = -1,
			e = 30,
			f = this.width(),
			g = this.coordinates();
		return this.settings.freeDrag || a.each(g, a.proxy(function (a, h) {
			return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1
		}, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d
	}, e.prototype.animate = function (b) {
		var c = this.speed() > 0;
		this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
			transform: "translate3d(" + b + "px,0px,0px)",
			transition: this.speed() / 1e3 + "s"
		}) : c ? this.$stage.animate({
			left: b + "px"
		}, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
			left: b + "px"
		})
	}, e.prototype.is = function (a) {
		return this._states.current[a] && this._states.current[a] > 0
	}, e.prototype.current = function (a) {
		if (a === d) return this._current;
		if (0 === this._items.length) return d;
		if (a = this.normalize(a), this._current !== a) {
			var b = this.trigger("change", {
				property: {
					name: "position",
					value: a
				}
			});
			b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
				property: {
					name: "position",
					value: this._current
				}
			})
		}
		return this._current
	}, e.prototype.invalidate = function (b) {
		return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
			return b
		})
	}, e.prototype.reset = function (a) {
		a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
	}, e.prototype.normalize = function (a, b) {
		var c = this._items.length,
			e = b ? 0 : this._clones.length;
		return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
	}, e.prototype.relative = function (a) {
		return a -= this._clones.length / 2, this.normalize(a, !0)
	}, e.prototype.maximum = function (a) {
		var b, c, d, e = this.settings,
			f = this._coordinates.length;
		if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
		else if (e.autoWidth || e.merge) {
			for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d)););
			f = b + 1
		} else f = e.center ? this._items.length - 1 : this._items.length - e.items;
		return a && (f -= this._clones.length / 2), Math.max(f, 0)
	}, e.prototype.minimum = function (a) {
		return a ? 0 : this._clones.length / 2
	}, e.prototype.items = function (a) {
		return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
	}, e.prototype.mergers = function (a) {
		return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
	}, e.prototype.clones = function (b) {
		var c = this._clones.length / 2,
			e = c + this._items.length,
			f = function (a) {
				return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
			};
		return b === d ? a.map(this._clones, function (a, b) {
			return f(b)
		}) : a.map(this._clones, function (a, c) {
			return a === b ? f(c) : null
		})
	}, e.prototype.speed = function (a) {
		return a !== d && (this._speed = a), this._speed
	}, e.prototype.coordinates = function (b) {
		var c, e = 1,
			f = b - 1;
		return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
			return this.coordinates(b)
		}, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
	}, e.prototype.duration = function (a, b, c) {
		return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
	}, e.prototype.to = function (a, b) {
		var c = this.current(),
			d = null,
			e = a - this.relative(c),
			f = (e > 0) - (e < 0),
			g = this._items.length,
			h = this.minimum(),
			i = this.maximum();
		this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update()
	}, e.prototype.next = function (a) {
		a = a || !1, this.to(this.relative(this.current()) + 1, a)
	}, e.prototype.prev = function (a) {
		a = a || !1, this.to(this.relative(this.current()) - 1, a)
	}, e.prototype.onTransitionEnd = function (a) {
		if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
		this.leave("animating"), this.trigger("translated")
	}, e.prototype.viewport = function () {
		var d;
		return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
	}, e.prototype.replace = function (b) {
		this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
			return 1 === this.nodeType
		}).each(a.proxy(function (a, b) {
			b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
		}, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
	}, e.prototype.add = function (b, c) {
		var e = this.relative(this._current);
		c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
			content: b,
			position: c
		}), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
			content: b,
			position: c
		})
	}, e.prototype.remove = function (a) {
		a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
			content: this._items[a],
			position: a
		}), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
			content: null,
			position: a
		}))
	}, e.prototype.preloadAutoWidthImages = function (b) {
		b.each(a.proxy(function (b, c) {
			this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function (a) {
				c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
			}, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
		}, this))
	}, e.prototype.destroy = function () {
		this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
		for (var d in this._plugins) this._plugins[d].destroy();
		this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
	}, e.prototype.op = function (a, b, c) {
		var d = this.settings.rtl;
		switch (b) {
			case "<":
				return d ? a > c : a < c;
			case ">":
				return d ? a < c : a > c;
			case ">=":
				return d ? a <= c : a >= c;
			case "<=":
				return d ? a >= c : a <= c
		}
	}, e.prototype.on = function (a, b, c, d) {
		a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
	}, e.prototype.off = function (a, b, c, d) {
		a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
	}, e.prototype.trigger = function (b, c, d, f, g) {
		var h = {
				item: {
					count: this._items.length,
					index: this.current()
				}
			},
			i = a.camelCase(a.grep(["on", b, d], function (a) {
				return a
			}).join("-").toLowerCase()),
			j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
				relatedTarget: this
			}, h, c));
		return this._supress[b] || (a.each(this._plugins, function (a, b) {
			b.onTrigger && b.onTrigger(j)
		}), this.register({
			type: e.Type.Event,
			name: b
		}), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
	}, e.prototype.enter = function (b) {
		a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
			this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
		}, this))
	}, e.prototype.leave = function (b) {
		a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
			this._states.current[b]--
		}, this))
	}, e.prototype.register = function (b) {
		if (b.type === e.Type.Event) {
			if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
				var c = a.event.special[b.name]._default;
				a.event.special[b.name]._default = function (a) {
					return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
				}, a.event.special[b.name].owl = !0
			}
		} else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
			return a.inArray(c, this._states.tags[b.name]) === d
		}, this)))
	}, e.prototype.suppress = function (b) {
		a.each(b, a.proxy(function (a, b) {
			this._supress[b] = !0
		}, this))
	}, e.prototype.release = function (b) {
		a.each(b, a.proxy(function (a, b) {
			delete this._supress[b]
		}, this))
	}, e.prototype.pointer = function (a) {
		var c = {
			x: null,
			y: null
		};
		return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
	}, e.prototype.isNumeric = function (a) {
		return !isNaN(parseFloat(a))
	}, e.prototype.difference = function (a, b) {
		return {
			x: a.x - b.x,
			y: a.y - b.y
		}
	}, a.fn.owlCarousel = function (b) {
		var c = Array.prototype.slice.call(arguments, 1);
		return this.each(function () {
			var d = a(this),
				f = d.data("owl.carousel");
			f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
				f.register({
					type: e.Type.Event,
					name: c
				}), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
					a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
				}, f))
			})), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
		})
	}, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this._core = b, this._interval = null, this._visible = null, this._handlers = {
			"initialized.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.autoRefresh && this.watch()
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	e.Defaults = {
		autoRefresh: !0,
		autoRefreshInterval: 500
	}, e.prototype.watch = function () {
		this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
	}, e.prototype.refresh = function () {
		this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
	}, e.prototype.destroy = function () {
		var a, c;
		b.clearInterval(this._interval);
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this._core = b, this._loaded = [], this._handlers = {
			"initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
				if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
					for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function (a, b) {
							this.load(b)
						}, this); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	e.Defaults = {
		lazyLoad: !1
	}, e.prototype.load = function (c) {
		var d = this._core.$stage.children().eq(c),
			e = d && d.find(".owl-lazy");
		!e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
			var e, f = a(d),
				g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
			this._core.trigger("load", {
				element: f,
				url: g
			}, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
				f.css("opacity", 1), this._core.trigger("loaded", {
					element: f,
					url: g
				}, "lazy")
			}, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function () {
				f.css({
					"background-image": 'url("' + g + '")',
					opacity: "1"
				}), this._core.trigger("loaded", {
					element: f,
					url: g
				}, "lazy")
			}, this), e.src = g)
		}, this)), this._loaded.push(d.get(0)))
	}, e.prototype.destroy = function () {
		var a, b;
		for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this._core = b, this._handlers = {
			"initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.autoHeight && this.update()
			}, this),
			"changed.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
			}, this),
			"loaded.owl.lazy": a.proxy(function (a) {
				a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	e.Defaults = {
		autoHeight: !1,
		autoHeightClass: "owl-height"
	}, e.prototype.update = function () {
		var b = this._core._current,
			c = b + this._core.settings.items,
			d = this._core.$stage.children().toArray().slice(b, c),
			e = [],
			f = 0;
		a.each(d, function (b, c) {
			e.push(a(c).height())
		}), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
	}, e.prototype.destroy = function () {
		var a, b;
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this._core = b, this._videos = {}, this._playing = null, this._handlers = {
			"initialized.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.register({
					type: "state",
					name: "playing",
					tags: ["interacting"]
				})
			}, this),
			"resize.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
			}, this),
			"refreshed.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
			}, this),
			"changed.owl.carousel": a.proxy(function (a) {
				a.namespace && "position" === a.property.name && this._playing && this.stop()
			}, this),
			"prepared.owl.carousel": a.proxy(function (b) {
				if (b.namespace) {
					var c = a(b.content).find(".owl-video");
					c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
				}
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
			this.play(a)
		}, this))
	};
	e.Defaults = {
		video: !1,
		videoHeight: !1,
		videoWidth: !1
	}, e.prototype.fetch = function (a, b) {
		var c = function () {
				return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
			}(),
			d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
			e = a.attr("data-width") || this._core.settings.videoWidth,
			f = a.attr("data-height") || this._core.settings.videoHeight,
			g = a.attr("href");
		if (!g) throw new Error("Missing video URL.");
		if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
		else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
		else {
			if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
			c = "vzaar"
		}
		d = d[6], this._videos[g] = {
			type: c,
			id: d,
			width: e,
			height: f
		}, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
	}, e.prototype.thumbnail = function (b, c) {
		var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
			h = b.find("img"),
			i = "src",
			j = "",
			k = this._core.settings,
			l = function (a) {
				e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
			};
		if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
		"youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
			type: "GET",
			url: "//vimeo.com/api/v2/video/" + c.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function (a) {
				f = a[0].thumbnail_large, l(f)
			}
		}) : "vzaar" === c.type && a.ajax({
			type: "GET",
			url: "//vzaar.com/api/videos/" + c.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function (a) {
				f = a.framegrab_url, l(f)
			}
		})
	}, e.prototype.stop = function () {
		this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
	}, e.prototype.play = function (b) {
		var c, d = a(b.target),
			e = d.closest("." + this._core.settings.itemClass),
			f = this._videos[e.attr("data-video")],
			g = f.width || "100%",
			h = f.height || this._core.$stage.height();
		this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
	}, e.prototype.isInFullScreen = function () {
		var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
		return b && a(b).parent().hasClass("owl-video-frame")
	}, e.prototype.destroy = function () {
		var a, b;
		this._core.$element.off("click.owl.video");
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
			"change.owl.carousel": a.proxy(function (a) {
				a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
			}, this),
			"drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
				a.namespace && (this.swapping = "translated" == a.type)
			}, this),
			"translate.owl.carousel": a.proxy(function (a) {
				a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
			}, this)
		}, this.core.$element.on(this.handlers)
	};
	e.Defaults = {
			animateOut: !1,
			animateIn: !1
		}, e.prototype.swap = function () {
			if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
				this.core.speed(0);
				var b, c = a.proxy(this.clear, this),
					d = this.core.$stage.children().eq(this.previous),
					e = this.core.$stage.children().eq(this.next),
					f = this.core.settings.animateIn,
					g = this.core.settings.animateOut;
				this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
					left: b + "px"
				}).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
			}
		}, e.prototype.clear = function (b) {
			a(b.target).css({
				left: ""
			}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
		}, e.prototype.destroy = function () {
			var a, b;
			for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
			for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
		},
		a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this._core = b, this._timeout = null, this._paused = !1, this._handlers = {
			"changed.owl.carousel": a.proxy(function (a) {
				a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
			}, this),
			"initialized.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.autoplay && this.play()
			}, this),
			"play.owl.autoplay": a.proxy(function (a, b, c) {
				a.namespace && this.play(b, c)
			}, this),
			"stop.owl.autoplay": a.proxy(function (a) {
				a.namespace && this.stop()
			}, this),
			"mouseover.owl.autoplay": a.proxy(function () {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			}, this),
			"mouseleave.owl.autoplay": a.proxy(function () {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
			}, this),
			"touchstart.owl.core": a.proxy(function () {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			}, this),
			"touchend.owl.core": a.proxy(function () {
				this._core.settings.autoplayHoverPause && this.play()
			}, this)
		}, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
	};
	e.Defaults = {
		autoplay: !1,
		autoplayTimeout: 5e3,
		autoplayHoverPause: !1,
		autoplaySpeed: !1
	}, e.prototype.play = function (a, b) {
		this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
	}, e.prototype._getNextTimeout = function (d, e) {
		return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function () {
			this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
		}, this), d || this._core.settings.autoplayTimeout)
	}, e.prototype._setAutoPlayInterval = function () {
		this._timeout = this._getNextTimeout()
	}, e.prototype.stop = function () {
		this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"))
	}, e.prototype.pause = function () {
		this._core.is("rotating") && (this._paused = !0)
	}, e.prototype.destroy = function () {
		var a, b;
		this.stop();
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	"use strict";
	var e = function (b) {
		this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		}, this._handlers = {
			"prepared.owl.carousel": a.proxy(function (b) {
				b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
			}, this),
			"added.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
			}, this),
			"remove.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
			}, this),
			"changed.owl.carousel": a.proxy(function (a) {
				a.namespace && "position" == a.property.name && this.draw()
			}, this),
			"initialized.owl.carousel": a.proxy(function (a) {
				a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
			}, this),
			"refreshed.owl.carousel": a.proxy(function (a) {
				a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
	};
	e.Defaults = {
		nav: !1,
		navText: ["prev", "next"],
		navSpeed: !1,
		navElement: "div",
		navContainer: !1,
		navContainerClass: "owl-nav",
		navClass: ["owl-prev", "owl-next"],
		slideBy: 1,
		dotClass: "owl-dot",
		dotsClass: "owl-dots",
		dots: !0,
		dotsEach: !1,
		dotsData: !1,
		dotsSpeed: !1,
		dotsContainer: !1
	}, e.prototype.initialize = function () {
		var b, c = this._core.settings;
		this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
			this.prev(c.navSpeed)
		}, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
			this.next(c.navSpeed)
		}, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function (b) {
			var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
			b.preventDefault(), this.to(d, c.dotsSpeed)
		}, this));
		for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
	}, e.prototype.destroy = function () {
		var a, b, c, d;
		for (a in this._handlers) this.$element.off(a, this._handlers[a]);
		for (b in this._controls) this._controls[b].remove();
		for (d in this.overides) this._core[d] = this._overrides[d];
		for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
	}, e.prototype.update = function () {
		var a, b, c, d = this._core.clones().length / 2,
			e = d + this._core.items().length,
			f = this._core.maximum(!0),
			g = this._core.settings,
			h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
		if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
			for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
				if (b >= h || 0 === b) {
					if (this._pages.push({
							start: Math.min(f, a - d),
							end: a - d + h - 1
						}), Math.min(f, a - d) === f) break;
					b = 0, ++c
				}
				b += this._core.mergers(this._core.relative(a))
			}
	}, e.prototype.draw = function () {
		var b, c = this._core.settings,
			d = this._core.items().length <= c.items,
			e = this._core.relative(this._core.current()),
			f = c.loop || c.rewind;
		this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
	}, e.prototype.onTrigger = function (b) {
		var c = this._core.settings;
		b.page = {
			index: a.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
		}
	}, e.prototype.current = function () {
		var b = this._core.relative(this._core.current());
		return a.grep(this._pages, a.proxy(function (a, c) {
			return a.start <= b && a.end >= b
		}, this)).pop()
	}, e.prototype.getPosition = function (b) {
		var c, d, e = this._core.settings;
		return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
	}, e.prototype.next = function (b) {
		a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
	}, e.prototype.prev = function (b) {
		a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
	}, e.prototype.to = function (b, c, d) {
		var e;
		!d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
	}, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	"use strict";
	var e = function (c) {
		this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
			"initialized.owl.carousel": a.proxy(function (c) {
				c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
			}, this),
			"prepared.owl.carousel": a.proxy(function (b) {
				if (b.namespace) {
					var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
					if (!c) return;
					this._hashes[c] = b.content
				}
			}, this),
			"changed.owl.carousel": a.proxy(function (c) {
				if (c.namespace && "position" === c.property.name) {
					var d = this._core.items(this._core.relative(this._core.current())),
						e = a.map(this._hashes, function (a, b) {
							return a === d ? b : null
						}).join();
					if (!e || b.location.hash.slice(1) === e) return;
					b.location.hash = e
				}
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
			var c = b.location.hash.substring(1),
				e = this._core.$stage.children(),
				f = this._hashes[c] && e.index(this._hashes[c]);
			f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
		}, this))
	};
	e.Defaults = {
		URLhashListener: !1
	}, e.prototype.destroy = function () {
		var c, d;
		a(b).off("hashchange.owl.navigation");
		for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
		for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	function e(b, c) {
		var e = !1,
			f = b.charAt(0).toUpperCase() + b.slice(1);
		return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
			if (g[b] !== d) return e = !c || b, !1
		}), e
	}

	function f(a) {
		return e(a, !0)
	}
	var g = a("<support>").get(0).style,
		h = "Webkit Moz O ms".split(" "),
		i = {
			transition: {
				end: {
					WebkitTransition: "webkitTransitionEnd",
					MozTransition: "transitionend",
					OTransition: "oTransitionEnd",
					transition: "transitionend"
				}
			},
			animation: {
				end: {
					WebkitAnimation: "webkitAnimationEnd",
					MozAnimation: "animationend",
					OAnimation: "oAnimationEnd",
					animation: "animationend"
				}
			}
		},
		j = {
			csstransforms: function () {
				return !!e("transform")
			},
			csstransforms3d: function () {
				return !!e("perspective")
			},
			csstransitions: function () {
				return !!e("transition")
			},
			cssanimations: function () {
				return !!e("animation")
			}
		};
	j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);





/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.5.9
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
! function (a) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
	"use strict";
	var b = window.Slick || {};
	b = function () {
		function c(c, d) {
			var f, e = this;
			e.defaults = {
				accessibility: !0,
				adaptiveHeight: !1,
				appendArrows: a(c),
				appendDots: a(c),
				arrows: !0,
				asNavFor: null,
				prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
				nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
				autoplay: !1,
				autoplaySpeed: 3e3,
				centerMode: !1,
				centerPadding: "50px",
				cssEase: "ease",
				customPaging: function (a, b) {
					return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (b + 1) + "</button>"
				},
				dots: !1,
				dotsClass: "slick-dots",
				draggable: !0,
				easing: "linear",
				edgeFriction: .35,
				fade: !1,
				focusOnSelect: !1,
				infinite: !0,
				initialSlide: 0,
				lazyLoad: "ondemand",
				mobileFirst: !1,
				pauseOnHover: !0,
				pauseOnDotsHover: !1,
				respondTo: "window",
				responsive: null,
				rows: 1,
				rtl: !1,
				slide: "",
				slidesPerRow: 1,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 500,
				swipe: !0,
				swipeToSlide: !1,
				touchMove: !0,
				touchThreshold: 5,
				useCSS: !0,
				useTransform: !0,
				variableWidth: !1,
				vertical: !1,
				verticalSwiping: !1,
				waitForAnimate: !0,
				zIndex: 1e3
			}, e.initials = {
				animating: !1,
				dragging: !1,
				autoPlayTimer: null,
				currentDirection: 0,
				currentLeft: null,
				currentSlide: 0,
				direction: 1,
				$dots: null,
				listWidth: null,
				listHeight: null,
				loadIndex: 0,
				$nextArrow: null,
				$prevArrow: null,
				slideCount: null,
				slideWidth: null,
				$slideTrack: null,
				$slides: null,
				sliding: !1,
				slideOffset: 0,
				swipeLeft: null,
				$list: null,
				touchObject: {},
				transformsEnabled: !1,
				unslicked: !1
			}, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.hidden = "hidden", e.paused = !1, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, f, d), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0), e.checkResponsive(!0)
		}
		var b = 0;
		return c
	}(), b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
		var e = this;
		if ("boolean" == typeof c) d = c, c = null;
		else if (0 > c || c >= e.slideCount) return !1;
		e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
			a(c).attr("data-slick-index", b)
		}), e.$slidesCache = e.$slides, e.reinit()
	}, b.prototype.animateHeight = function () {
		var a = this;
		if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
			var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
			a.$list.animate({
				height: b
			}, a.options.speed)
		}
	}, b.prototype.animateSlide = function (b, c) {
		var d = {},
			e = this;
		e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
			left: b
		}, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
			top: b
		}, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
			animStart: e.currentLeft
		}).animate({
			animStart: b
		}, {
			duration: e.options.speed,
			easing: e.options.easing,
			step: function (a) {
				a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
			},
			complete: function () {
				c && c.call()
			}
		})) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
			e.disableTransition(), c.call()
		}, e.options.speed))
	}, b.prototype.asNavFor = function (b) {
		var c = this,
			d = c.options.asNavFor;
		d && null !== d && (d = a(d).not(c.$slider)), null !== d && "object" == typeof d && d.each(function () {
			var c = a(this).slick("getSlick");
			c.unslicked || c.slideHandler(b, !0)
		})
	}, b.prototype.applyTransition = function (a) {
		var b = this,
			c = {};
		b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
	}, b.prototype.autoPlay = function () {
		var a = this;
		a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
	}, b.prototype.autoPlayClear = function () {
		var a = this;
		a.autoPlayTimer && clearInterval(a.autoPlayTimer)
	}, b.prototype.autoPlayIterator = function () {
		var a = this;
		a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (a.currentSlide - 1 === 0 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll)
	}, b.prototype.buildArrows = function () {
		var b = this;
		b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
			"aria-disabled": "true",
			tabindex: "-1"
		}))
	}, b.prototype.buildDots = function () {
		var c, d, b = this;
		if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
			for (d = '<ul class="' + b.options.dotsClass + '">', c = 0; c <= b.getDotCount(); c += 1) d += "<li>" + b.options.customPaging.call(this, b, c) + "</li>";
			d += "</ul>", b.$dots = a(d).appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
		}
	}, b.prototype.buildOut = function () {
		var b = this;
		b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
			a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
		}), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
	}, b.prototype.buildRows = function () {
		var b, c, d, e, f, g, h, a = this;
		if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
			for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
				var i = document.createElement("div");
				for (c = 0; c < a.options.rows; c++) {
					var j = document.createElement("div");
					for (d = 0; d < a.options.slidesPerRow; d++) {
						var k = b * h + (c * a.options.slidesPerRow + d);
						g.get(k) && j.appendChild(g.get(k))
					}
					i.appendChild(j)
				}
				e.appendChild(i)
			}
			a.$slider.html(e), a.$slider.children().children().children().css({
				width: 100 / a.options.slidesPerRow + "%",
				display: "inline-block"
			})
		}
	}, b.prototype.checkResponsive = function (b, c) {
		var e, f, g, d = this,
			h = !1,
			i = d.$slider.width(),
			j = window.innerWidth || a(window).width();
		if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
			f = null;
			for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
			null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
		}
	}, b.prototype.changeSlide = function (b, c) {
		var f, g, h, d = this,
			e = a(b.target);
		switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
			case "previous":
				g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
				break;
			case "next":
				g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
				break;
			case "index":
				var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
				d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
				break;
			default:
				return
		}
	}, b.prototype.checkNavigable = function (a) {
		var c, d, b = this;
		if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];
		else
			for (var e in c) {
				if (a < c[e]) {
					a = d;
					break
				}
				d = c[e]
			}
		return a
	}, b.prototype.cleanUpEvents = function () {
		var b = this;
		b.options.dots && null !== b.$dots && (a("li", b.$dots).off("click.slick", b.changeSlide), b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).off("mouseenter.slick", a.proxy(b.setPaused, b, !0)).off("mouseleave.slick", a.proxy(b.setPaused, b, !1))), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.$list.off("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
	}, b.prototype.cleanUpRows = function () {
		var b, a = this;
		a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.html(b))
	}, b.prototype.clickHandler = function (a) {
		var b = this;
		b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
	}, b.prototype.destroy = function (b) {
		var c = this;
		c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
			a(this).attr("style", a(this).data("originalStyling"))
		}), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
	}, b.prototype.disableTransition = function (a) {
		var b = this,
			c = {};
		c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
	}, b.prototype.fadeSlide = function (a, b) {
		var c = this;
		c.cssTransitions === !1 ? (c.$slides.eq(a).css({
			zIndex: c.options.zIndex
		}), c.$slides.eq(a).animate({
			opacity: 1
		}, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
			opacity: 1,
			zIndex: c.options.zIndex
		}), b && setTimeout(function () {
			c.disableTransition(a), b.call()
		}, c.options.speed))
	}, b.prototype.fadeSlideOut = function (a) {
		var b = this;
		b.cssTransitions === !1 ? b.$slides.eq(a).animate({
			opacity: 0,
			zIndex: b.options.zIndex - 2
		}, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
			opacity: 0,
			zIndex: b.options.zIndex - 2
		}))
	}, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
		var b = this;
		null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
	}, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
		var a = this;
		return a.currentSlide
	}, b.prototype.getDotCount = function () {
		var a = this,
			b = 0,
			c = 0,
			d = 0;
		if (a.options.infinite === !0)
			for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
		else if (a.options.centerMode === !0) d = a.slideCount;
		else
			for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
		return d - 1
	}, b.prototype.getLeft = function (a) {
		var c, d, f, b = this,
			e = 0;
		return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
	}, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
		var b = this;
		return b.options[a]
	}, b.prototype.getNavigableIndexes = function () {
		var e, a = this,
			b = 0,
			c = 0,
			d = [];
		for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
		return d
	}, b.prototype.getSlick = function () {
		return this
	}, b.prototype.getSlideCount = function () {
		var c, d, e, b = this;
		return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
			return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
		}), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
	}, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
		var c = this;
		c.changeSlide({
			data: {
				message: "index",
				index: parseInt(a)
			}
		}, b)
	}, b.prototype.init = function (b) {
		var c = this;
		a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA()
	}, b.prototype.initArrowEvents = function () {
		var a = this;
		a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
			message: "previous"
		}, a.changeSlide), a.$nextArrow.on("click.slick", {
			message: "next"
		}, a.changeSlide))
	}, b.prototype.initDotEvents = function () {
		var b = this;
		b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
			message: "index"
		}, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.setPaused, b, !0)).on("mouseleave.slick", a.proxy(b.setPaused, b, !1))
	}, b.prototype.initializeEvents = function () {
		var b = this;
		b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", {
			action: "start"
		}, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
			action: "move"
		}, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
			action: "end"
		}, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
			action: "end"
		}, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.$list.on("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
	}, b.prototype.initUI = function () {
		var a = this;
		a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), a.options.autoplay === !0 && a.autoPlay()
	}, b.prototype.keyHandler = function (a) {
		var b = this;
		a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
			data: {
				message: "previous"
			}
		}) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
			data: {
				message: "next"
			}
		}))
	}, b.prototype.lazyLoad = function () {
		function g(b) {
			a("img[data-lazy]", b).each(function () {
				var b = a(this),
					c = a(this).attr("data-lazy"),
					d = document.createElement("img");
				d.onload = function () {
					b.animate({
						opacity: 0
					}, 100, function () {
						b.attr("src", c).animate({
							opacity: 1
						}, 200, function () {
							b.removeAttr("data-lazy").removeClass("slick-loading")
						})
					})
				}, d.src = c
			})
		}
		var c, d, e, f, b = this;
		b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = e + b.options.slidesToShow, b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
	}, b.prototype.loadSlider = function () {
		var a = this;
		a.setPosition(), a.$slideTrack.css({
			opacity: 1
		}), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
	}, b.prototype.next = b.prototype.slickNext = function () {
		var a = this;
		a.changeSlide({
			data: {
				message: "next"
			}
		})
	}, b.prototype.orientationChange = function () {
		var a = this;
		a.checkResponsive(), a.setPosition()
	}, b.prototype.pause = b.prototype.slickPause = function () {
		var a = this;
		a.autoPlayClear(), a.paused = !0
	}, b.prototype.play = b.prototype.slickPlay = function () {
		var a = this;
		a.paused = !1, a.autoPlay()
	}, b.prototype.postSlide = function (a) {
		var b = this;
		b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay === !0 && b.paused === !1 && b.autoPlay(), b.options.accessibility === !0 && b.initADA()
	}, b.prototype.prev = b.prototype.slickPrev = function () {
		var a = this;
		a.changeSlide({
			data: {
				message: "previous"
			}
		})
	}, b.prototype.preventDefault = function (a) {
		a.preventDefault()
	}, b.prototype.progressiveLazyLoad = function () {
		var c, d, b = this;
		c = a("img[data-lazy]", b.$slider).length, c > 0 && (d = a("img[data-lazy]", b.$slider).first(), d.attr("src", null), d.attr("src", d.attr("data-lazy")).removeClass("slick-loading").load(function () {
			d.removeAttr("data-lazy"), b.progressiveLazyLoad(), b.options.adaptiveHeight === !0 && b.setPosition()
		}).error(function () {
			d.removeAttr("data-lazy"), b.progressiveLazyLoad()
		}))
	}, b.prototype.refresh = function (b) {
		var d, e, c = this;
		e = c.slideCount - c.options.slidesToShow, c.options.infinite || (c.slideCount <= c.options.slidesToShow ? c.currentSlide = 0 : c.currentSlide > e && (c.currentSlide = e)), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {
			currentSlide: d
		}), c.init(), b || c.changeSlide({
			data: {
				message: "index",
				index: d
			}
		}, !1)
	}, b.prototype.registerBreakpoints = function () {
		var c, d, e, b = this,
			f = b.options.responsive || null;
		if ("array" === a.type(f) && f.length) {
			b.respondTo = b.options.respondTo || "window";
			for (c in f)
				if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
					for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
					b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
				} b.breakpoints.sort(function (a, c) {
				return b.options.mobileFirst ? a - c : c - a
			})
		}
	}, b.prototype.reinit = function () {
		var b = this;
		b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses(0), b.setPosition(), b.$slider.trigger("reInit", [b]), b.options.autoplay === !0 && b.focusHandler()
	}, b.prototype.resize = function () {
		var b = this;
		a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
			b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
		}, 50))
	}, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
		var d = this;
		return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
	}, b.prototype.setCSS = function (a) {
		var d, e, b = this,
			c = {};
		b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
	}, b.prototype.setDimensions = function () {
		var a = this;
		a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
			padding: "0px " + a.options.centerPadding
		}) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
			padding: a.options.centerPadding + " 0px"
		})), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
		var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
		a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
	}, b.prototype.setFade = function () {
		var c, b = this;
		b.$slides.each(function (d, e) {
			c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
				position: "relative",
				right: c,
				top: 0,
				zIndex: b.options.zIndex - 2,
				opacity: 0
			}) : a(e).css({
				position: "relative",
				left: c,
				top: 0,
				zIndex: b.options.zIndex - 2,
				opacity: 0
			})
		}), b.$slides.eq(b.currentSlide).css({
			zIndex: b.options.zIndex - 1,
			opacity: 1
		})
	}, b.prototype.setHeight = function () {
		var a = this;
		if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
			var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
			a.$list.css("height", b)
		}
	}, b.prototype.setOption = b.prototype.slickSetOption = function (b, c, d) {
		var f, g, e = this;
		if ("responsive" === b && "array" === a.type(c))
			for (g in c)
				if ("array" !== a.type(e.options.responsive)) e.options.responsive = [c[g]];
				else {
					for (f = e.options.responsive.length - 1; f >= 0;) e.options.responsive[f].breakpoint === c[g].breakpoint && e.options.responsive.splice(f, 1), f--;
					e.options.responsive.push(c[g])
				}
		else e.options[b] = c;
		d === !0 && (e.unload(), e.reinit())
	}, b.prototype.setPosition = function () {
		var a = this;
		a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
	}, b.prototype.setProps = function () {
		var a = this,
			b = document.body.style;
		a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
	}, b.prototype.setSlideClasses = function (a) {
		var c, d, e, f, b = this;
		d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
	}, b.prototype.setupInfinite = function () {
		var c, d, e, b = this;
		if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
			for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
			for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
			b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
				a(this).attr("id", "")
			})
		}
	}, b.prototype.setPaused = function (a) {
		var b = this;
		b.options.autoplay === !0 && b.options.pauseOnHover === !0 && (b.paused = a, a ? b.autoPlayClear() : b.autoPlay())
	}, b.prototype.selectHandler = function (b) {
		var c = this,
			d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
			e = parseInt(d.attr("data-slick-index"));
		return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
	}, b.prototype.slideHandler = function (a, b, c) {
		var d, e, f, g, h = null,
			i = this;
		return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
			i.postSlide(d);
		}) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
			i.postSlide(d)
		}) : i.postSlide(d))) : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
			i.postSlide(e)
		})) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function () {
			i.postSlide(e)
		}) : i.postSlide(e))))
	}, b.prototype.startLoad = function () {
		var a = this;
		a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
	}, b.prototype.swipeDirection = function () {
		var a, b, c, d, e = this;
		return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "left" : "right" : "vertical"
	}, b.prototype.swipeEnd = function (a) {
		var c, b = this;
		if (b.dragging = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
		if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) switch (b.swipeDirection()) {
			case "left":
				c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.slideHandler(c), b.currentDirection = 0, b.touchObject = {}, b.$slider.trigger("swipe", [b, "left"]);
				break;
			case "right":
				c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.slideHandler(c), b.currentDirection = 1, b.touchObject = {}, b.$slider.trigger("swipe", [b, "right"])
		} else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
	}, b.prototype.swipeHandler = function (a) {
		var b = this;
		if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
			case "start":
				b.swipeStart(a);
				break;
			case "move":
				b.swipeMove(a);
				break;
			case "end":
				b.swipeEnd(a)
		}
	}, b.prototype.swipeMove = function (a) {
		var d, e, f, g, h, b = this;
		return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0)
	}, b.prototype.swipeStart = function (a) {
		var c, b = this;
		return 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void(b.dragging = !0))
	}, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
		var a = this;
		null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
	}, b.prototype.unload = function () {
		var b = this;
		a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
	}, b.prototype.unslick = function (a) {
		var b = this;
		b.$slider.trigger("unslick", [b, a]), b.destroy()
	}, b.prototype.updateArrows = function () {
		var b, a = this;
		b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
	}, b.prototype.updateDots = function () {
		var a = this;
		null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
	}, b.prototype.visibility = function () {
		var a = this;
		document[a.hidden] ? (a.paused = !0, a.autoPlayClear()) : a.options.autoplay === !0 && (a.paused = !1, a.autoPlay())
	}, b.prototype.initADA = function () {
		var b = this;
		b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
			"aria-hidden": "true",
			tabindex: "-1"
		}).find("a, input, button, select").attr({
			tabindex: "-1"
		}), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
			a(this).attr({
				role: "option",
				"aria-describedby": "slick-slide" + b.instanceUid + c
			})
		}), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
			a(this).attr({
				role: "presentation",
				"aria-selected": "false",
				"aria-controls": "navigation" + b.instanceUid + c,
				id: "slick-slide" + b.instanceUid + c
			})
		}).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
	}, b.prototype.activateADA = function () {
		var a = this;
		a.$slideTrack.find(".slick-active").attr({
			"aria-hidden": "false"
		}).find("a, input, button, select").attr({
			tabindex: "0"
		})
	}, b.prototype.focusHandler = function () {
		var b = this;
		b.$slider.on("focus.slick blur.slick", "*", function (c) {
			c.stopImmediatePropagation();
			var d = a(this);
			setTimeout(function () {
				b.isPlay && (d.is(":focus") ? (b.autoPlayClear(), b.paused = !0) : (b.paused = !1, b.autoPlay()))
			}, 0)
		})
	}, a.fn.slick = function () {
		var f, g, a = this,
			c = arguments[0],
			d = Array.prototype.slice.call(arguments, 1),
			e = a.length;
		for (f = 0; e > f; f++)
			if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
		return a
	}
});



// smoothscroll.js in here.

/*!
 * Smooth Scroll - v1.4.13 - 2013-11-02
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2013 Karl Swedberg
 * Licensed MIT (https://github.com/kswedberg/jquery-smooth-scroll/blob/master/LICENSE-MIT)
 */
(function (t) {
	function e(t) {
		return t.replace(/(:|\.)/g, "\\$1")
	}
	var l = "1.4.13",
		o = {},
		s = {
			exclude: [],
			excludeWithin: [],
			offset: 0,
			direction: "top",
			scrollElement: null,
			scrollTarget: null,
			beforeScroll: function () {},
			afterScroll: function () {},
			easing: "swing",
			speed: 400,
			autoCoefficent: 2,
			preventDefault: !0
		},
		n = function (e) {
			var l = [],
				o = !1,
				s = e.dir && "left" == e.dir ? "scrollLeft" : "scrollTop";
			return this.each(function () {
				if (this != document && this != window) {
					var e = t(this);
					e[s]() > 0 ? l.push(this) : (e[s](1), o = e[s]() > 0, o && l.push(this), e[s](0))
				}
			}), l.length || this.each(function () {
				"BODY" === this.nodeName && (l = [this])
			}), "first" === e.el && l.length > 1 && (l = [l[0]]), l
		};
	t.fn.extend({
		scrollable: function (t) {
			var e = n.call(this, {
				dir: t
			});
			return this.pushStack(e)
		},
		firstScrollable: function (t) {
			var e = n.call(this, {
				el: "first",
				dir: t
			});
			return this.pushStack(e)
		},
		smoothScroll: function (l, o) {
			if (l = l || {}, "options" === l) return o ? this.each(function () {
				var e = t(this),
					l = t.extend(e.data("ssOpts") || {}, o);
				t(this).data("ssOpts", l)
			}) : this.first().data("ssOpts");
			var s = t.extend({}, t.fn.smoothScroll.defaults, l),
				n = t.smoothScroll.filterPath(location.pathname);
			return this.unbind("click.smoothscroll").bind("click.smoothscroll", function (l) {
				var o = this,
					r = t(this),
					i = t.extend({}, s, r.data("ssOpts") || {}),
					c = s.exclude,
					a = i.excludeWithin,
					f = 0,
					h = 0,
					u = !0,
					d = {},
					p = location.hostname === o.hostname || !o.hostname,
					m = i.scrollTarget || (t.smoothScroll.filterPath(o.pathname) || n) === n,
					S = e(o.hash);
				if (i.scrollTarget || p && m && S) {
					for (; u && c.length > f;) r.is(e(c[f++])) && (u = !1);
					for (; u && a.length > h;) r.closest(a[h++]).length && (u = !1)
				} else u = !1;
				u && (i.preventDefault && l.preventDefault(), t.extend(d, i, {
					scrollTarget: i.scrollTarget || S,
					link: o
				}), t.smoothScroll(d))
			}), this
		}
	}), t.smoothScroll = function (e, l) {
		if ("options" === e && "object" == typeof l) return t.extend(o, l);
		var s, n, r, i, c = 0,
			a = "offset",
			f = "scrollTop",
			h = {},
			u = {};
		"number" == typeof e ? (s = t.extend({
			link: null
		}, t.fn.smoothScroll.defaults, o), r = e) : (s = t.extend({
			link: null
		}, t.fn.smoothScroll.defaults, e || {}, o), s.scrollElement && (a = "position", "static" == s.scrollElement.css("position") && s.scrollElement.css("position", "relative"))), f = "left" == s.direction ? "scrollLeft" : f, s.scrollElement ? (n = s.scrollElement, /^(?:HTML|BODY)$/.test(n[0].nodeName) || (c = n[f]())) : n = t("html, body").firstScrollable(s.direction), s.beforeScroll.call(n, s), r = "number" == typeof e ? e : l || t(s.scrollTarget)[a]() && t(s.scrollTarget)[a]()[s.direction] || 0, h[f] = r + c + s.offset, i = s.speed, "auto" === i && (i = h[f] || n.scrollTop(), i /= s.autoCoefficent), u = {
			duration: i,
			easing: s.easing,
			complete: function () {
				s.afterScroll.call(s.link, s)
			}
		}, s.step && (u.step = s.step), n.length ? n.stop().animate(h, u) : s.afterScroll.call(s.link, s)
	}, t.smoothScroll.version = l, t.smoothScroll.filterPath = function (t) {
		return t.replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "")
	}, t.fn.smoothScroll.defaults = s
})(jQuery);






/*!
 * jQuery meanMenu v2.0.8
 * @Copyright (C) 2012-2014 Chris Wharton @ MeanThemes (https://github.com/meanthemes/meanMenu)
 *
 */
/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * THIS SOFTWARE AND DOCUMENTATION IS PROVIDED "AS IS," AND COPYRIGHT
 * HOLDERS MAKE NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY OR
 * FITNESS FOR ANY PARTICULAR PURPOSE OR THAT THE USE OF THE SOFTWARE
 * OR DOCUMENTATION WILL NOT INFRINGE ANY THIRD PARTY PATENTS,
 * COPYRIGHTS, TRADEMARKS OR OTHER RIGHTS.COPYRIGHT HOLDERS WILL NOT
 * BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL
 * DAMAGES ARISING OUT OF ANY USE OF THE SOFTWARE OR DOCUMENTATION.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://gnu.org/licenses/>.
 *
 * Find more information at http://www.meanthemes.com/plugins/meanmenu/
 *
 */
(function ($) {
	"use strict";
	$.fn.meanmenu = function (options) {
		var defaults = {
			meanMenuTarget: jQuery(this), // Target the current HTML markup you wish to replace
			meanMenuContainer: 'body', // Choose where meanmenu will be placed within the HTML
			meanMenuClose: "X", // single character you want to represent the close menu button
			meanMenuCloseSize: "18px", // set font size of close button
			meanMenuOpen: "<span /><span /><span />", // text/markup you want when menu is closed
			meanRevealPosition: "", // left right or center positions
			meanRevealPositionDistance: "0", // Tweak the position of the menu
			meanRevealColour: "", // override CSS colours for the reveal background
			meanScreenWidth: "480", // set the screen width you want meanmenu to kick in at
			meanNavPush: "", // set a height here in px, em or % if you want to budge your layout now the navigation is missing.
			meanShowChildren: true, // true to show children in the menu, false to hide them
			meanExpandableChildren: true, // true to allow expand/collapse children
			meanExpand: "+", // single character you want to represent the expand for ULs
			meanContract: "-", // single character you want to represent the contract for ULs
			meanRemoveAttrs: false, // true to remove classes and IDs, false to keep them
			onePage: false, // set to true for one page sites
			meanDisplay: "block", // override display method for table cell based layouts e.g. table-cell
			removeElements: "" // set to hide page elements
		};
		options = $.extend(defaults, options);

		// get browser width
		var currentWidth = window.innerWidth || document.documentElement.clientWidth;

		return this.each(function () {
			var meanMenu = options.meanMenuTarget;
			var meanContainer = options.meanMenuContainer;
			var meanMenuClose = options.meanMenuClose;
			var meanMenuCloseSize = options.meanMenuCloseSize;
			var meanMenuOpen = options.meanMenuOpen;
			var meanRevealPosition = options.meanRevealPosition;
			var meanRevealPositionDistance = options.meanRevealPositionDistance;
			var meanRevealColour = options.meanRevealColour;
			var meanScreenWidth = options.meanScreenWidth;
			var meanNavPush = options.meanNavPush;
			var meanRevealClass = ".meanmenu-reveal";
			var meanShowChildren = options.meanShowChildren;
			var meanExpandableChildren = options.meanExpandableChildren;
			var meanExpand = options.meanExpand;
			var meanContract = options.meanContract;
			var meanRemoveAttrs = options.meanRemoveAttrs;
			var onePage = options.onePage;
			var meanDisplay = options.meanDisplay;
			var removeElements = options.removeElements;

			//detect known mobile/tablet usage
			var isMobile = false;
			if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/Blackberry/i)) || (navigator.userAgent.match(/Windows Phone/i))) {
				isMobile = true;
			}

			if ((navigator.userAgent.match(/MSIE 8/i)) || (navigator.userAgent.match(/MSIE 7/i))) {
				// add scrollbar for IE7 & 8 to stop breaking resize function on small content sites
				jQuery('html').css("overflow-y", "scroll");
			}

			var meanRevealPos = "";
			var meanCentered = function () {
				if (meanRevealPosition === "center") {
					var newWidth = window.innerWidth || document.documentElement.clientWidth;
					var meanCenter = ((newWidth / 2) - 22) + "px";
					meanRevealPos = "left:" + meanCenter + ";right:auto;";

					if (!isMobile) {
						jQuery('.meanmenu-reveal').css("left", meanCenter);
					} else {
						jQuery('.meanmenu-reveal').animate({
							left: meanCenter
						});
					}
				}
			};

			var menuOn = false;
			var meanMenuExist = false;


			if (meanRevealPosition === "right") {
				meanRevealPos = "right:" + meanRevealPositionDistance + ";left:auto;";
			}
			if (meanRevealPosition === "left") {
				meanRevealPos = "left:" + meanRevealPositionDistance + ";right:auto;";
			}
			// run center function
			meanCentered();

			// set all styles for mean-reveal
			var $navreveal = "";

			var meanInner = function () {
				// get last class name
				if (jQuery($navreveal).is(".meanmenu-reveal.meanclose")) {
					$navreveal.html(meanMenuClose);
				} else {
					$navreveal.html(meanMenuOpen);
				}
			};

			// re-instate original nav (and call this on window.width functions)
			var meanOriginal = function () {
				jQuery('.mean-bar,.mean-push').remove();
				jQuery(meanContainer).removeClass("mean-container");
				jQuery(meanMenu).css('display', meanDisplay);
				menuOn = false;
				meanMenuExist = false;
				jQuery(removeElements).removeClass('mean-remove');
			};

			// navigation reveal
			var showMeanMenu = function () {
				var meanStyles = "background:" + meanRevealColour + ";color:" + meanRevealColour + ";" + meanRevealPos;
				if (currentWidth <= meanScreenWidth) {
					jQuery(removeElements).addClass('mean-remove');
					meanMenuExist = true;
					// add class to body so we don't need to worry about media queries here, all CSS is wrapped in '.mean-container'
					jQuery(meanContainer).addClass("mean-container");
					jQuery('.mean-container').prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + meanStyles + '">Show Navigation</a><nav class="mean-nav"></nav></div>');

					//push meanMenu navigation into .mean-nav
					var meanMenuContents = jQuery(meanMenu).html();
					jQuery('.mean-nav').html(meanMenuContents);

					// remove all classes from EVERYTHING inside meanmenu nav
					if (meanRemoveAttrs) {
						jQuery('nav.mean-nav ul, nav.mean-nav ul *').each(function () {
							// First check if this has mean-remove class
							if (jQuery(this).is('.mean-remove')) {
								jQuery(this).attr('class', 'mean-remove');
							} else {
								jQuery(this).removeAttr("class");
							}
							jQuery(this).removeAttr("id");
						});
					}

					// push in a holder div (this can be used if removal of nav is causing layout issues)
					jQuery(meanMenu).before('<div class="mean-push" />');
					jQuery('.mean-push').css("margin-top", meanNavPush);

					// hide current navigation and reveal mean nav link
					jQuery(meanMenu).hide();
					jQuery(".meanmenu-reveal").show();

					// turn 'X' on or off
					jQuery(meanRevealClass).html(meanMenuOpen);
					$navreveal = jQuery(meanRevealClass);

					//hide mean-nav ul
					jQuery('.mean-nav ul').hide();

					// hide sub nav
					if (meanShowChildren) {
						// allow expandable sub nav(s)
						if (meanExpandableChildren) {
							jQuery('.mean-nav ul ul').each(function () {
								if (jQuery(this).children().length) {
									jQuery(this, 'li:first').parent().append('<a class="mean-expand" href="#" style="font-size: ' + meanMenuCloseSize + '">' + meanExpand + '</a>');
								}
							});
							jQuery('.mean-expand').on("click", function (e) {
								e.preventDefault();
								if (jQuery(this).hasClass("mean-clicked")) {
									jQuery(this).text(meanExpand);
									jQuery(this).prev('ul').slideUp(300, function () {});
								} else {
									jQuery(this).text(meanContract);
									jQuery(this).prev('ul').slideDown(300, function () {});
								}
								jQuery(this).toggleClass("mean-clicked");
							});
						} else {
							jQuery('.mean-nav ul ul').show();
						}
					} else {
						jQuery('.mean-nav ul ul').hide();
					}

					// add last class to tidy up borders
					jQuery('.mean-nav ul li').last().addClass('mean-last');
					$navreveal.removeClass("meanclose");
					jQuery($navreveal).click(function (e) {
						e.preventDefault();
						if (menuOn === false) {
							$navreveal.css("text-align", "center");
							$navreveal.css("text-indent", "0");
							$navreveal.css("font-size", meanMenuCloseSize);
							jQuery('.mean-nav ul:first').slideDown();
							menuOn = true;
						} else {
							jQuery('.mean-nav ul:first').slideUp();
							menuOn = false;
						}
						$navreveal.toggleClass("meanclose");
						meanInner();
						jQuery(removeElements).addClass('mean-remove');
					});

					// for one page websites, reset all variables...
					if (onePage) {
						jQuery('.mean-nav ul > li > a:first-child').on("click", function () {
							jQuery('.mean-nav ul:first').slideUp();
							menuOn = false;
							jQuery($navreveal).toggleClass("meanclose").html(meanMenuOpen);
						});
					}
				} else {
					meanOriginal();
				}
			};

			if (!isMobile) {
				// reset menu on resize above meanScreenWidth
				jQuery(window).resize(function () {
					currentWidth = window.innerWidth || document.documentElement.clientWidth;
					if (currentWidth > meanScreenWidth) {
						meanOriginal();
					} else {
						meanOriginal();
					}
					if (currentWidth <= meanScreenWidth) {
						showMeanMenu();
						meanCentered();
					} else {
						meanOriginal();
					}
				});
			}

			jQuery(window).resize(function () {
				// get browser width
				currentWidth = window.innerWidth || document.documentElement.clientWidth;

				if (!isMobile) {
					meanOriginal();
					if (currentWidth <= meanScreenWidth) {
						showMeanMenu();
						meanCentered();
					}
				} else {
					meanCentered();
					if (currentWidth <= meanScreenWidth) {
						if (meanMenuExist === false) {
							showMeanMenu();
						}
					} else {
						meanOriginal();
					}
				}
			});

			// run main menuMenu function on load
			showMeanMenu();
		});
	};
})(jQuery);




/*jquery.mb.YTPlayer 01-10-2018
 _ jquery.mb.components 
 _ email: matteo@open-lab.com 
 _ Copyright (c) 2001-2018. Matteo Bicocchi (Pupunzi); 
 _ blog: http://pupunzi.open-lab.com 
 _ Open Lab s.r.l., Florence - Italy 
 */
function onYouTubeIframeAPIReady() {
	ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"))
}

function iOSversion() {
	if (/iP(hone|od|ad)/.test(navigator.platform)) {
		var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
		return [parseInt(a[1], 10), parseInt(a[2], 10), parseInt(a[3] || 0, 10)]
	}
}

function uncamel(a) {
	return a.replace(/([A-Z])/g, function (a) {
		return "-" + a.toLowerCase()
	})
}

function setUnit(a, b) {
	return "string" != typeof a || a.match(/^[\-0-9\.]+jQuery/) ? "" + a + b : a
}

function setFilter(a, b, c) {
	var d = uncamel(b),
		e = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;
	a[e + "filter"] = a[e + "filter"] || "", c = setUnit(c > jQuery.CSS.filters[b].max ? jQuery.CSS.filters[b].max : c, jQuery.CSS.filters[b].unit), a[e + "filter"] += d + "(" + c + ") ", delete a[b]
}

function isTouchSupported() {
	var a = nAgt.msMaxTouchPoints,
		b = "ontouchstart" in document.createElement("div");
	return !(!a && !b)
}

function isTouchSupported() {
	var a = nAgt.msMaxTouchPoints,
		b = "ontouchstart" in document.createElement("div");
	return !(!a && !b)
}
var ytp = ytp || {},
	getYTPVideoID = function (a) {
		var b, c;
		return a.indexOf("youtu.be") > 0 || a.indexOf("youtube.com/embed") > 0 ? (b = a.substr(a.lastIndexOf("/") + 1, a.length), c = b.indexOf("?list=") > 0 ? b.substr(b.lastIndexOf("="), b.length) : null, b = c ? b.substr(0, b.lastIndexOf("?")) : b) : a.indexOf("http") > -1 ? (b = a.match(/[\\?&]v=([^&#]*)/)[1], c = a.indexOf("list=") > 0 ? a.match(/[\\?&]list=([^&#]*)/)[1] : null) : (b = a.length > 15 ? null : a, c = b ? null : a), {
			videoID: b,
			playlistID: c
		}
	};
! function (jQuery, ytp) {
	jQuery.mbYTPlayer = {
		name: "jquery.mb.YTPlayer",
		version: "3.2.6",
		build: "7274",
		author: "Matteo Bicocchi (pupunzi)",
		apiKey: "",
		defaults: {
			videoURL: null,
			containment: "body",
			ratio: "auto",
			fadeOnStartTime: 1500,
			startAt: 0,
			stopAt: 0,
			autoPlay: !0,
			coverImage: !1,
			loop: !0,
			addRaster: !1,
			mask: !1,
			opacity: 1,
			quality: "default",
			vol: 50,
			mute: !1,
			showControls: !0,
			anchor: "center,center",
			showAnnotations: !1,
			cc_load_policy: !1,
			showYTLogo: !0,
			useOnMobile: !0,
			mobileFallbackImage: null,
			playOnlyIfVisible: !1,
			onScreenPercentage: 30,
			stopMovieOnBlur: !0,
			realfullscreen: !0,
			optimizeDisplay: !0,
			abundance: .2,
			gaTrack: !0,
			remember_last_time: !1,
			addFilters: !1,
			onReady: function (a) {},
			onError: function (a, b) {}
		},
		controls: {
			play: "P",
			pause: "p",
			mute: "M",
			unmute: "A",
			onlyYT: "O",
			showSite: "R",
			ytLogo: "Y"
		},
		controlBar: null,
		locationProtocol: "https:",
		defaultFilters: {
			grayscale: {
				value: 0,
				unit: "%"
			},
			hue_rotate: {
				value: 0,
				unit: "deg"
			},
			invert: {
				value: 0,
				unit: "%"
			},
			opacity: {
				value: 0,
				unit: "%"
			},
			saturate: {
				value: 0,
				unit: "%"
			},
			sepia: {
				value: 0,
				unit: "%"
			},
			brightness: {
				value: 0,
				unit: "%"
			},
			contrast: {
				value: 0,
				unit: "%"
			},
			blur: {
				value: 0,
				unit: "px"
			}
		},
		buildPlayer: function (options) {
			function isIframe() {
				var a = !1;
				try {
					self.location.href != top.location.href && (a = !0)
				} catch (b) {
					a = !0
				}
				return a
			}
			if (ytp.YTAPIReady || "undefined" != typeof window.YT) setTimeout(function () {
				jQuery(document).trigger("YTAPIReady"), ytp.YTAPIReady = !0
			}, 100);
			else {
				jQuery("#YTAPI").remove();
				var tag = jQuery("<script></script>").attr({
					src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
					id: "YTAPI"
				});
				jQuery("head").prepend(tag)
			}
			return this.each(function () {
				var YTPlayer = this,
					$YTPlayer = jQuery(YTPlayer);
				$YTPlayer.hide(), YTPlayer.loop = 0, YTPlayer.state = 0, YTPlayer.filters = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaultFilters), YTPlayer.filtersEnabled = !0, YTPlayer.id = YTPlayer.id || "YTP_" + (new Date).getTime(), $YTPlayer.addClass("mb_YTPlayer");
				var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
				"object" != typeof property && (property = {}), YTPlayer.opt = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaults, YTPlayer.opt, options, property), YTPlayer.opt.elementId = YTPlayer.id, 0 === YTPlayer.opt.vol && (YTPlayer.opt.vol = 1, YTPlayer.opt.mute = !0), YTPlayer.opt.autoPlay && 0 == YTPlayer.opt.mute && jQuery.mbBrowser.chrome && (jQuery(document).one("mousedown.YTPstart", function () {
					$YTPlayer.YTPPlay()
				}), console.info("YTPlayer info: On Webkit browsers you can not autoplay the video if the audio is on.")), YTPlayer.opt.loop && "boolean" == typeof YTPlayer.opt.loop && (YTPlayer.opt.loop = 9999);
				var fullScreenAvailable = document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
				YTPlayer.opt.realfullscreen = isIframe() || !fullScreenAvailable ? !1 : YTPlayer.opt.realfullscreen, YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "1" : "3", YTPlayer.opt.cc_load_policy = YTPlayer.opt.cc_load_policy ? "1" : "0", YTPlayer.opt.coverImage = YTPlayer.opt.coverImage || YTPlayer.opt.backgroundImage, jQuery.mbBrowser.msie && jQuery.mbBrowser.version < 9 && (YTPlayer.opt.opacity = 1), YTPlayer.opt.containment = "self" === YTPlayer.opt.containment ? $YTPlayer : jQuery(YTPlayer.opt.containment), YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1, YTPlayer.opt.ratio = "auto" === YTPlayer.opt.ratio ? 16 / 9 : YTPlayer.opt.ratio, YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio), YTPlayer.orig_containment_background = YTPlayer.opt.containment.css("background-image"), $YTPlayer.attr("id") || $YTPlayer.attr("id", "ytp_" + (new Date).getTime()), YTPlayer.playerID = "iframe_" + YTPlayer.id, YTPlayer.isAlone = !1, YTPlayer.hasFocus = !0, YTPlayer.videoID = YTPlayer.opt.videoURL ? getYTPVideoID(YTPlayer.opt.videoURL).videoID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).videoID : !1, YTPlayer.playlistID = YTPlayer.opt.videoURL ? getYTPVideoID(YTPlayer.opt.videoURL).playlistID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).playlistID : !1;
				var start_from_last = 0;
				if (jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID) && (start_from_last = parseFloat(jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID))), YTPlayer.opt.remember_last_time && start_from_last && (YTPlayer.start_from_last = start_from_last, jQuery.mbCookie.remove("YTPlayer_start_from" + YTPlayer.videoID)), YTPlayer.isPlayer = $YTPlayer.is(YTPlayer.opt.containment), YTPlayer.isBackground = YTPlayer.opt.containment.is("body"), !YTPlayer.isBackground || !ytp.backgroundIsInited) {
					YTPlayer.isPlayer && $YTPlayer.show(), YTPlayer.overlay = jQuery("<div/>").css({
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%"
					}).addClass("YTPOverlay"), YTPlayer.wrapper = jQuery("<div/>").attr("id", "wrapper_" + YTPlayer.id).css({
						position: "absolute",
						zIndex: 0,
						minWidth: "100%",
						minHeight: "100%",
						left: 0,
						top: 0,
						overflow: "hidden",
						opacity: 0
					}).addClass("mbYTP_wrapper"), YTPlayer.isPlayer && (YTPlayer.inlinePlayButton = jQuery("<div/>").addClass("inlinePlayButton").html(jQuery.mbYTPlayer.controls.play), $YTPlayer.append(YTPlayer.inlinePlayButton), YTPlayer.inlinePlayButton.on("click", function (a) {
						$YTPlayer.YTPPlay(), a.stopPropagation()
					}), YTPlayer.opt.autoPlay && YTPlayer.inlinePlayButton.hide(), YTPlayer.overlay.on("click", function () {
						$YTPlayer.YTPTogglePlay()
					}).css({
						cursor: "pointer"
					}));
					var playerBox = jQuery("<div/>").attr("id", YTPlayer.playerID).addClass("playerBox");
					if (playerBox.css({
							position: "absolute",
							zIndex: 0,
							width: "100%",
							height: "100%",
							top: 0,
							left: 0,
							overflow: "hidden",
							opacity: 1
						}), YTPlayer.wrapper.append(playerBox), playerBox.after(YTPlayer.overlay), YTPlayer.isPlayer && (YTPlayer.inlineWrapper = jQuery("<div/>").addClass("inline-YTPlayer"), YTPlayer.inlineWrapper.css({
							position: "relative",
							maxWidth: YTPlayer.opt.containment.css("width")
						}), YTPlayer.opt.containment.css({
							position: "relative",
							paddingBottom: "56.25%",
							overflow: "hidden",
							height: 0
						}), YTPlayer.opt.containment.wrap(YTPlayer.inlineWrapper)), YTPlayer.opt.containment.children().not("script, style").each(function () {
							"static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
						}), YTPlayer.isBackground ? (jQuery("body").css({
							boxSizing: "border-box"
						}), YTPlayer.wrapper.css({
							position: "fixed",
							top: 0,
							left: 0,
							zIndex: 0
						})) : "static" == YTPlayer.opt.containment.css("position") && (YTPlayer.opt.containment.css({
							position: "relative"
						}), $YTPlayer.show()), YTPlayer.opt.containment.prepend(YTPlayer.wrapper), YTPlayer.isBackground || YTPlayer.overlay.on("mouseenter", function () {
							YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.addClass("visible")
						}).on("mouseleave", function () {
							YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.removeClass("visible")
						}), jQuery.mbBrowser.mobile && !YTPlayer.opt.useOnMobile) return YTPlayer.opt.mobileFallbackImage && (YTPlayer.wrapper.css({
						backgroundImage: "url(" + YTPlayer.opt.mobileFallbackImage + ")",
						backgroundPosition: "center center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						opacity: 1
					}), YTPlayer.wrapper.css({
						opacity: 1
					})), $YTPlayer;
					jQuery.mbBrowser.mobile && YTPlayer.opt.autoPlay && YTPlayer.opt.useOnMobile && jQuery("body").one("touchstart", function () {
						YTPlayer.player.playVideo()
					}), jQuery(document).one("YTAPIReady", function () {
						$YTPlayer.trigger("YTAPIReady_" + YTPlayer.id), ytp.YTAPIReady = !0
					}), YTPlayer.isOnScreen = jQuery.mbYTPlayer.isOnScreen(YTPlayer, YTPlayer.opt.onScreenPercentage), $YTPlayer.one("YTAPIReady_" + YTPlayer.id, function () {
						var a = this,
							b = jQuery(a);
						a.isBackground && ytp.backgroundIsInited || a.isInit || (a.isBackground && (ytp.backgroundIsInited = !0), a.opt.autoPlay = "undefined" == typeof a.opt.autoPlay ? !!a.isBackground : a.opt.autoPlay, a.opt.vol = a.opt.vol ? a.opt.vol : 100, jQuery.mbYTPlayer.getDataFromAPI(a), jQuery(a).on("YTPChanged", function (c) {
							if (!a.isInit) {
								a.isInit = !0;
								var d = {
									modestbranding: 1,
									autoplay: 0,
									controls: 0,
									showinfo: 0,
									rel: 0,
									enablejsapi: 1,
									version: 3,
									playerapiid: a.playerID,
									origin: "*",
									allowfullscreen: !0,
									wmode: "transparent",
									iv_load_policy: a.opt.showAnnotations,
									cc_load_policy: a.opt.cc_load_policy,
									playsinline: jQuery.mbBrowser.mobile ? 1 : 0,
									html5: document.createElement("video").canPlayType ? 1 : 0
								};
								new YT.Player(a.playerID, {
									playerVars: d,
									events: {
										onReady: function (c) {
											a.player = c.target, a.player.loadVideoById({
												videoId: a.videoID.toString(),
												suggestedQuality: a.opt.quality
											}), b.trigger("YTPlayerIsReady_" + a.id)
										},
										onStateChange: function (b) {
											if ("function" == typeof b.target.getPlayerState) {
												var c = b.target.getPlayerState();
												if (a.preventTrigger || a.isStarting) return void(a.preventTrigger = !1);
												a.state = c;
												var d;
												switch (c) {
													case -1:
														d = "YTPUnstarted";
														break;
													case 0:
														d = "YTPRealEnd";
														break;
													case 1:
														d = "YTPPlay", a.controlBar.length && a.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.pause), a.isPlayer && a.inlinePlayButton.hide(), jQuery(document).off("mousedown.YTPstart");
														break;
													case 2:
														d = "YTPPause", a.controlBar.length && a.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play), a.isPlayer && a.inlinePlayButton.show();
														break;
													case 3:
														a.player.setPlaybackQuality(a.opt.quality), d = "YTPBuffering", a.controlBar.length && a.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);
														break;
													case 5:
														d = "YTPCued"
												}
												var e = jQuery.Event(d);
												e.time = a.currentTime, jQuery(a).trigger(e)
											}
										},
										onPlaybackQualityChange: function (b) {
											var c = b.target.getPlaybackQuality(),
												d = jQuery.Event("YTPQualityChange");
											d.quality = c, jQuery(a).trigger(d)
										},
										onError: function (c) {
											switch ("function" == typeof a.opt.onError && a.opt.onError(b, c), c.data) {
												case 2:
													console.error("video ID:: " + a.videoID + ": The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.");
													break;
												case 5:
													console.error("video ID:: " + a.videoID + ": The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.");
													break;
												case 100:
													console.error("video ID:: " + a.videoID + ": The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.");
													break;
												case 101:
												case 150:
													console.error("video ID:: " + a.videoID + ": The owner of the requested video does not allow it to be played in embedded players.")
											}
											a.isList && jQuery(a).YTPPlayNext()
										}
									}
								}), b.on("YTPlayerIsReady_" + a.id, function () {
									return a.isReady ? this : (a.playerEl = a.player.getIframe(), jQuery(a.playerEl).unselectable(), b.optimizeDisplay(), jQuery(window).off("resize.YTP_" + a.id).on("resize.YTP_" + a.id, function () {
										b.optimizeDisplay()
									}), a.opt.remember_last_time && jQuery(window).on("unload.YTP_" + a.id, function () {
										var b = a.player.getCurrentTime();
										jQuery.mbCookie.set("YTPlayer_start_from" + a.videoID, b, 0)
									}), void b.YTPCheckForState())
								})
							}
						}))
					}), $YTPlayer.off("YTPTime.mask"), jQuery.mbYTPlayer.applyMask(YTPlayer)
				}
			})
		},
		isOnScreen: function (a, b) {
			b = b || 10;
			var c = a.wrapper,
				d = jQuery(window).scrollTop(),
				e = d + jQuery(window).height(),
				f = c.height() * b / 100,
				g = c.offset().top + f,
				h = c.offset().top + (c.height() - f);
			return e >= h && g >= d
		},
		getDataFromAPI: function (a) {
			if (a.videoData = jQuery.mbStorage.get("YTPlayer_data_" + a.videoID), jQuery(a).off("YTPData.YTPlayer").on("YTPData.YTPlayer", function () {
					if (a.hasData && a.isPlayer && !a.opt.autoPlay) {
						var b = a.opt.coverImage ? "url(" + a.opt.coverImage + ") center center" : a.orig_containment_background;
						console.debug("1", b), a.opt.containment.css({
							background: b,
							backgroundSize: "cover"
						})
					}
				}), a.videoData) setTimeout(function () {
				a.dataReceived = !0;
				var b = jQuery.Event("YTPChanged");
				b.time = a.currentTime, b.videoId = a.videoID, b.opt = a.opt, jQuery(a).trigger(b);
				var c = jQuery.Event("YTPData");
				c.prop = {};
				for (var d in a.videoData) c.prop[d] = a.videoData[d];
				jQuery(a).trigger(c)
			}, a.opt.fadeOnStartTime), a.hasData = !0;
			else if (jQuery.mbYTPlayer.apiKey) jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//www.googleapis.com/youtube/v3/videos?id=" + a.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function (b) {
				function c(b) {
					a.videoData = {}, a.videoData.id = a.videoID, a.videoData.channelTitle = b.channelTitle, a.videoData.title = b.title, a.videoData.description = b.description.length < 400 ? b.description : b.description.substring(0, 400) + " ...", a.videoData.thumb_max = b.thumbnails.maxres ? b.thumbnails.maxres.url : null, a.videoData.thumb_high = b.thumbnails.high ? b.thumbnails.high.url : null, a.videoData.thumb_medium = b.thumbnails.medium ? b.thumbnails.medium.url : null, jQuery.mbStorage.set("YTPlayer_data_" + a.videoID, a.videoData)
				}
				a.dataReceived = !0;
				var d = jQuery.Event("YTPChanged");
				d.time = a.currentTime, d.videoId = a.videoID, jQuery(a).trigger(d), b.items[0] ? (c(b.items[0].snippet), a.hasData = !0) : (a.videoData = {}, a.hasData = !1);
				var e = jQuery.Event("YTPData");
				e.prop = {};
				for (var f in a.videoData) e.prop[f] = a.videoData[f];
				jQuery(a).trigger(e)
			});
			else {
				if (setTimeout(function () {
						var b = jQuery.Event("YTPChanged");
						b.time = a.currentTime, b.videoId = a.videoID, jQuery(a).trigger(b)
					}, 50), !a.opt.autoPlay) {
					var b = a.opt.coverImage ? "url(" + a.opt.coverImage + ") center center" : a.orig_containment_background;
					b && a.opt.containment.css({
						background: b,
						backgroundSize: "cover"
					})
				}
				a.videoData = null
			}
			a.opt.ratio = "auto" == a.opt.ratio ? "16/9" : a.opt.ratio, a.isPlayer && !a.opt.autoPlay && (a.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(), jQuery(a).append(a.loading), a.loading.fadeIn())
		},
		removeStoredData: function () {
			jQuery.mbStorage.remove()
		},
		getVideoData: function () {
			var a = this.get(0);
			return a.videoData
		},
		getVideoID: function () {
			var a = this.get(0);
			return a.videoID || !1
		},
		getPlaylistID: function () {
			var a = this.get(0);
			return a.playlistID || !1
		},
		setVideoQuality: function (a) {
			var b = this.get(0);
			return b.player.setPlaybackQuality(a), this
		},
		playlist: function (a, b, c) {
			var d = this,
				e = d.get(0);
			return e.isList = !0, b && (a = jQuery.shuffle(a)), e.videoID || (e.videos = a, e.videoCounter = 1, e.videoLength = a.length, jQuery(e).data("property", a[0]), jQuery(e).YTPlayer()), "function" == typeof c && jQuery(e).one("YTPChanged", function () {
				c(e)
			}), jQuery(e).on("YTPEnd", function () {
				jQuery(e).YTPPlayNext()
			}), this
		},
		playNext: function () {
			var a = this.get(0);
			return a.videoCounter++, a.videoCounter > a.videoLength && (a.videoCounter = 1), jQuery(a).YTPPlayIndex(a.videoCounter), this
		},
		playPrev: function () {
			var a = this.get(0);
			return a.videoCounter--, a.videoCounter <= 0 && (a.videoCounter = a.videoLength), jQuery(a).YTPPlayIndex(a.videoCounter), this
		},
		playIndex: function (a) {
			var b = this.get(0);
			b.checkForStartAt && (clearInterval(b.checkForStartAt), clearInterval(b.getState)), b.videoCounter = a, b.videoCounter >= b.videoLength && (b.videoCounter = b.videoLength);
			var c = b.videos[b.videoCounter - 1];
			return jQuery(b).YTPChangeVideo(c), this
		},
		changeVideo: function (a) {
			var b = this,
				c = b.get(0);
			c.opt.startAt = 0, c.opt.stopAt = 0, c.opt.mask = !1, c.opt.mute = !0, c.opt.autoPlay = !0, c.opt.addFilters = !1, c.opt.coverImage = !1, c.hasData = !1, c.hasChanged = !0, c.player.loopTime = void 0, a && jQuery.extend(c.opt, a), console.debug("changeVideo::", c.opt), c.videoID = getYTPVideoID(c.opt.videoURL).videoID, c.opt.loop && "boolean" == typeof c.opt.loop && (c.opt.loop = 9999), c.wrapper.css({
				background: "none"
			}), jQuery(c.playerEl).CSSAnimate({
				opacity: 0
			}, c.opt.fadeOnStartTime, function () {
				jQuery.mbYTPlayer.getDataFromAPI(c), console.debug("YTPGetPlayer::", b.YTPGetPlayer()), b.YTPGetPlayer().loadVideoById({
					videoId: c.videoID,
					suggestedQuality: c.opt.quality
				}), b.YTPPause(), b.optimizeDisplay(), b.YTPCheckForState()
			});
			var d = jQuery.Event("YTPChangeVideo");
			return d.time = c.currentTime, jQuery(c).trigger(d), jQuery.mbYTPlayer.applyMask(c), this
		},
		getPlayer: function () {
			var a = this.get(0);
			return a.isReady ? a.player || null : null
		},
		playerDestroy: function () {
			var a = this.get(0);
			return a.isReady ? (ytp.YTAPIReady = !0, ytp.backgroundIsInited = !1, a.isInit = !1, a.videoID = null, a.isReady = !1, a.wrapper.remove(), jQuery("#controlBar_" + a.id).remove(), clearInterval(a.checkForStartAt), clearInterval(a.getState), this) : this
		},
		fullscreen: function (real) {
			function hideMouse() {
				YTPlayer.overlay.css({
					cursor: "none"
				})
			}

			function RunPrefixMethod(a, b) {
				for (var c, d, e = ["webkit", "moz", "ms", "o", ""], f = 0; f < e.length && !a[c];) {
					if (c = b, "" == e[f] && (c = c.substr(0, 1).toLowerCase() + c.substr(1)), c = e[f] + c, d = typeof a[c], "undefined" != d) return e = [e[f]], "function" == d ? a[c]() : a[c];
					f++
				}
			}

			function launchFullscreen(a) {
				RunPrefixMethod(a, "RequestFullScreen")
			}

			function cancelFullscreen() {
				(RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
			}
			var YTPlayer = this.get(0);
			"undefined" == typeof real && (real = eval(YTPlayer.opt.realfullscreen));
			var controls = jQuery("#controlBar_" + YTPlayer.id),
				fullScreenBtn = controls.find(".mb_OnlyYT"),
				videoWrapper = YTPlayer.isPlayer ? YTPlayer.opt.containment : YTPlayer.wrapper;
			if (real) {
				var fullscreenchange = jQuery.mbBrowser.mozilla ? "mozfullscreenchange" : jQuery.mbBrowser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
				jQuery(document).off(fullscreenchange).on(fullscreenchange, function () {
					var a = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");
					a ? (jQuery(YTPlayer).YTPSetVideoQuality("default"), jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1, fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality), videoWrapper.removeClass("YTPFullscreen"), videoWrapper.CSSAnimate({
						opacity: YTPlayer.opt.opacity
					}, YTPlayer.opt.fadeOnStartTime), videoWrapper.css({
						zIndex: 0
					}), YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls), jQuery(window).resize(), jQuery(YTPlayer).trigger("YTPFullScreenEnd"))
				})
			}
			return YTPlayer.isAlone ? (jQuery(document).off("mousemove.YTPlayer"), clearTimeout(YTPlayer.hideCursor), YTPlayer.overlay.css({
				cursor: "auto"
			}), real ? cancelFullscreen() : (videoWrapper.CSSAnimate({
				opacity: YTPlayer.opt.opacity
			}, YTPlayer.opt.fadeOnStartTime), videoWrapper.css({
				zIndex: 0
			})), fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), YTPlayer.isAlone = !1) : (jQuery(document).on("mousemove.YTPlayer", function (a) {
				YTPlayer.overlay.css({
					cursor: "auto"
				}), clearTimeout(YTPlayer.hideCursor), jQuery(a.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3))
			}), hideMouse(), real ? (videoWrapper.css({
				opacity: 0
			}), videoWrapper.addClass("YTPFullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function () {
				videoWrapper.CSSAnimate({
					opacity: 1
				}, 2 * YTPlayer.opt.fadeOnStartTime), videoWrapper.append(controls), jQuery(YTPlayer).optimizeDisplay(), YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
			}, YTPlayer.opt.fadeOnStartTime)) : videoWrapper.css({
				zIndex: 1e4
			}).CSSAnimate({
				opacity: 1
			}, 2 * YTPlayer.opt.fadeOnStartTime), fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite), YTPlayer.isAlone = !0), this
		},
		toggleLoops: function () {
			var a = this.get(0),
				b = a.opt;
			return 1 == b.loop ? b.loop = 0 : (b.startAt ? a.player.seekTo(b.startAt) : a.player.playVideo(), b.loop = 1), this
		},
		play: function () {
			var a = this.get(0);
			if (!a.isReady) return this;
			a.player.playVideo(), jQuery(a.playerEl).css({
				opacity: 1
			}), a.wrapper.css({
				backgroundImage: "none"
			}), a.wrapper.CSSAnimate({
				opacity: a.isAlone ? 1 : a.opt.opacity
			}, a.opt.fadeOnStartTime);
			var b = jQuery("#controlBar_" + a.id),
				c = b.find(".mb_YTPPlayPause");
			return c.html(jQuery.mbYTPlayer.controls.pause), a.state = 1, this
		},
		togglePlay: function (a) {
			var b = this.get(0);
			return b.isReady ? (1 == b.state ? this.YTPPause() : this.YTPPlay(), "function" == typeof a && a(b.state), this) : this
		},
		stop: function () {
			var a = this.get(0);
			if (!a.isReady) return this;
			var b = jQuery("#controlBar_" + a.id),
				c = b.find(".mb_YTPPlayPause");
			return c.html(jQuery.mbYTPlayer.controls.play), a.player.stopVideo(), this
		},
		pause: function () {
			var a = this.get(0);
			return a.isReady ? (a.player.pauseVideo(), a.state = 2, this) : this
		},
		seekTo: function (a) {
			var b = this.get(0);
			return b.isReady ? (b.player.seekTo(a, !0), this) : this
		},
		setVolume: function (a) {
			var b = this.get(0);
			return b.isReady ? (b.opt.vol = a, b.player.setVolume(b.opt.vol), b.volumeBar && b.volumeBar.length && b.volumeBar.updateSliderVal(a), this) : this
		},
		getVolume: function () {
			var a = this.get(0);
			return a.isReady ? a.player.getVolume() : this
		},
		toggleVolume: function () {
			var a = this.get(0);
			return a.isReady ? (a.isMute ? (jQuery.mbBrowser.mobile || this.YTPSetVolume(a.opt.vol), this.YTPUnmute()) : this.YTPMute(), this) : this
		},
		mute: function () {
			var a = this.get(0);
			if (!a.isReady) return this;
			if (a.isMute) return this;
			a.player.mute(), a.isMute = !0, a.player.setVolume(0), a.volumeBar && a.volumeBar.length && a.volumeBar.width() > 10 && a.volumeBar.updateSliderVal(0);
			var b = jQuery("#controlBar_" + a.id),
				c = b.find(".mb_YTPMuteUnmute");
			c.html(jQuery.mbYTPlayer.controls.unmute), jQuery(a).addClass("isMuted"), a.volumeBar && a.volumeBar.length && a.volumeBar.addClass("muted");
			var d = jQuery.Event("YTPMuted");
			return d.time = a.currentTime, a.preventTrigger || jQuery(a).trigger(d), this
		},
		unmute: function () {
			var a = this.get(0);
			if (!a.isReady) return this;
			if (!a.isMute) return this;
			a.player.unMute(), a.isMute = !1, jQuery(a).YTPSetVolume(a.opt.vol), a.volumeBar && a.volumeBar.length && a.volumeBar.updateSliderVal(a.opt.vol > 10 ? a.opt.vol : 10);
			var b = jQuery("#controlBar_" + a.id),
				c = b.find(".mb_YTPMuteUnmute");
			c.html(jQuery.mbYTPlayer.controls.mute), jQuery(a).removeClass("isMuted"), a.volumeBar && a.volumeBar.length && a.volumeBar.removeClass("muted");
			var d = jQuery.Event("YTPUnmuted");
			return d.time = a.currentTime, a.preventTrigger || jQuery(a).trigger(d), this
		},
		applyFilter: function (a, b) {
			var c = this,
				d = c.get(0);
			return d.isReady ? (d.filters[a].value = b, void(d.filtersEnabled && c.YTPEnableFilters())) : this
		},
		applyFilters: function (a) {
			var b = this,
				c = b.get(0);
			if (!c.isReady) return this;
			if (!c.isReady) return jQuery(c).on("YTPReady", function () {
				b.YTPApplyFilters(a)
			}), this;
			for (var d in a) b.YTPApplyFilter(d, a[d]);
			b.trigger("YTPFiltersApplied")
		},
		toggleFilter: function (a, b) {
			var c = this,
				d = c.get(0);
			return d.isReady ? (d.filters[a].value ? d.filters[a].value = 0 : d.filters[a].value = b, d.filtersEnabled && jQuery(d).YTPEnableFilters(), this) : this
		},
		toggleFilters: function (a) {
			var b = this,
				c = b.get(0);
			return c.isReady ? (c.filtersEnabled ? (jQuery(c).trigger("YTPDisableFilters"), jQuery(c).YTPDisableFilters()) : (jQuery(c).YTPEnableFilters(), jQuery(c).trigger("YTPEnableFilters")), "function" == typeof a && a(c.filtersEnabled), this) : this
		},
		disableFilters: function () {
			var a = this,
				b = a.get(0);
			if (!b.isReady) return this;
			var c = jQuery(b.playerEl);
			return c.css("-webkit-filter", ""), c.css("filter", ""), b.filtersEnabled = !1, this
		},
		enableFilters: function () {
			var a = this,
				b = a.get(0);
			if (!b.isReady) return this;
			var c = jQuery(b.playerEl),
				d = "";
			for (var e in b.filters) b.filters[e].value && (d += e.replace("_", "-") + "(" + b.filters[e].value + b.filters[e].unit + ") ");
			return c.css("-webkit-filter", d), c.css("filter", d), b.filtersEnabled = !0, this
		},
		removeFilter: function (a, b) {
			var c = this,
				d = c.get(0);
			if (!d.isReady) return this;
			if ("function" == typeof a && (b = a, a = null), a) c.YTPApplyFilter(a, 0), "function" == typeof b && b(a);
			else {
				for (var e in d.filters) c.YTPApplyFilter(e, 0);
				"function" == typeof b && b(e), d.filters = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaultFilters)
			}
			var f = jQuery.Event("YTPFiltersApplied");
			return c.trigger(f), this
		},
		getFilters: function () {
			var a = this.get(0);
			return a.isReady ? a.filters : this
		},
		addMask: function (a) {
			var b = this.get(0);
			if (!b.isReady) return this;
			a || (a = b.actualMask);
			var c = jQuery("<img/>").attr("src", a).on("load", function () {
				b.overlay.CSSAnimate({
					opacity: 0
				}, b.opt.fadeOnStartTime, function () {
					b.hasMask = !0, c.remove(), b.overlay.css({
						backgroundImage: "url(" + a + ")",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center center",
						backgroundSize: "cover"
					}), b.overlay.CSSAnimate({
						opacity: 1
					}, b.opt.fadeOnStartTime)
				})
			});
			return this
		},
		removeMask: function () {
			var a = this.get(0);
			return a.isReady ? (a.overlay.CSSAnimate({
				opacity: 0
			}, a.opt.fadeOnStartTime, function () {
				a.hasMask = !1, a.overlay.css({
					backgroundImage: "",
					backgroundRepeat: "",
					backgroundPosition: "",
					backgroundSize: ""
				}), a.overlay.CSSAnimate({
					opacity: 1
				}, a.opt.fadeOnStartTime)
			}), this) : this
		},
		applyMask: function (a) {
			var b = jQuery(a);
			if (!a.isReady) return this;
			if (b.off("YTPTime.mask"), a.opt.mask)
				if ("string" == typeof a.opt.mask) b.YTPAddMask(a.opt.mask), a.actualMask = a.opt.mask;
				else if ("object" == typeof a.opt.mask) {
				for (var c in a.opt.mask)
					if (a.opt.mask[c]) {
						jQuery("<img/>").attr("src", a.opt.mask[c])
					} a.opt.mask[0] && b.YTPAddMask(a.opt.mask[0]), b.on("YTPTime.mask", function (c) {
					for (var d in a.opt.mask) c.time == d && (a.opt.mask[d] ? (b.YTPAddMask(a.opt.mask[d]), a.actualMask = a.opt.mask[d]) : b.YTPRemoveMask())
				})
			}
		},
		toggleMask: function () {
			var a = this.get(0);
			if (!a.isReady) return this;
			var b = jQuery(a);
			return a.hasMask ? b.YTPRemoveMask() : b.YTPAddMask(), this
		},
		manageProgress: function () {
			var a = this.get(0),
				b = jQuery("#controlBar_" + a.id),
				c = b.find(".mb_YTPProgress"),
				d = b.find(".mb_YTPLoaded"),
				e = b.find(".mb_YTPseekbar"),
				f = c.outerWidth(),
				g = Math.floor(a.player.getCurrentTime()),
				h = Math.floor(a.player.getDuration()),
				i = g * f / h,
				j = 0,
				k = 100 * a.player.getVideoLoadedFraction();
			return d.css({
				left: j,
				width: k + "%"
			}), e.css({
				left: 0,
				width: i
			}), {
				totalTime: h,
				currentTime: g
			}
		},
		buildControls: function (YTPlayer) {
			if (jQuery("#controlBar_" + YTPlayer.id).remove(), !YTPlayer.opt.showControls) return void(YTPlayer.controlBar = !1);
			if (YTPlayer.opt.showYTLogo = YTPlayer.opt.showYTLogo || YTPlayer.opt.printUrl, !jQuery("#controlBar_" + YTPlayer.id).length) {
				YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
					whiteSpace: "noWrap",
					position: YTPlayer.isBackground ? "fixed" : "absolute",
					zIndex: YTPlayer.isBackground ? 1e4 : 1e3
				}).hide().on("click", function (a) {
					a.stopPropagation()
				});
				var buttonBar = jQuery("<div/>").addClass("buttonBar"),
					playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlayPause ytpicon").on("click", function (a) {
						a.stopPropagation(), jQuery(YTPlayer).YTPTogglePlay()
					}),
					MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").on("click", function (a) {
						a.stopPropagation(), jQuery(YTPlayer).YTPToggleVolume()
					}),
					volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({
						display: "inline-block"
					});
				YTPlayer.volumeBar = volumeBar;
				var idx = jQuery("<span/>").addClass("mb_YTPTime"),
					vURL = YTPlayer.opt.videoURL ? YTPlayer.opt.videoURL : "";
				vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + YTPlayer.opt.videoURL);
				var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function () {
						window.open(vURL, "viewOnYT")
					}),
					onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function (a) {
						a.stopPropagation(), jQuery(YTPlayer).YTPFullscreen(YTPlayer.opt.realfullscreen)
					}),
					progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").on("click", function (a) {
						a.stopPropagation(), timeBar.css({
							width: a.clientX - timeBar.offset().left
						}), YTPlayer.timeW = a.clientX - timeBar.offset().left, YTPlayer.controlBar.find(".mb_YTPLoaded").css({
							width: 0
						});
						var b = Math.floor(YTPlayer.player.getDuration());
						YTPlayer["goto"] = timeBar.outerWidth() * b / progressBar.outerWidth(), YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]), !0), YTPlayer.controlBar.find(".mb_YTPLoaded").css({
							width: 0
						})
					}),
					loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute"),
					timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
				progressBar.append(loadedBar).append(timeBar), buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx), YTPlayer.opt.showYTLogo && buttonBar.append(movieUrl), (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo), YTPlayer.controlBar.append(buttonBar).append(progressBar), YTPlayer.isBackground ? jQuery("body").after(YTPlayer.controlBar) : (YTPlayer.controlBar.addClass("inlinePlayer"), YTPlayer.wrapper.before(YTPlayer.controlBar)), volumeBar.simpleSlider({
					initialval: YTPlayer.opt.vol,
					scale: 100,
					orientation: "h",
					callback: function (a) {
						0 == a.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(), YTPlayer.player.setVolume(a.value), YTPlayer.isMute || (YTPlayer.opt.vol = a.value)
					}
				})
			}
		},
		checkForState: function () {
			var YTPlayer = this.get(0),
				$YTPlayer = jQuery(YTPlayer);
			clearInterval(YTPlayer.getState);
			var interval = 100;
			return jQuery.contains(document, YTPlayer) ? (jQuery.mbYTPlayer.checkForStart(YTPlayer), void(YTPlayer.getState = setInterval(function () {
				var $YTPlayer = jQuery(YTPlayer);
				if (YTPlayer.isReady) {
					var prog = jQuery(YTPlayer).YTPManageProgress(),
						stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
					if (stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0, YTPlayer.currentTime != prog.currentTime) {
						var YTPEvent = jQuery.Event("YTPTime");
						YTPEvent.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(YTPEvent)
					}
					if (YTPlayer.currentTime = prog.currentTime, YTPlayer.totalTime = YTPlayer.player.getDuration(), 0 == YTPlayer.player.getVolume() ? $YTPlayer.addClass("isMuted") : $YTPlayer.removeClass("isMuted"), YTPlayer.opt.showControls && (prog.totalTime ? YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime)) : YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")), eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus() ? document.hasFocus() && !YTPlayer.hasFocus && -1 != YTPlayer.state && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0, YTPlayer.preventTrigger = !0, YTPlayer.preventTrigger = !0, $YTPlayer.YTPPlay()) : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1, YTPlayer.preventTrigger = !0, $YTPlayer.YTPPause())), YTPlayer.opt.playOnlyIfVisible) {
						var isOnScreen = jQuery.mbYTPlayer.isOnScreen(YTPlayer, YTPlayer.opt.onScreenPercentage);
						isOnScreen || 1 != YTPlayer.state ? isOnScreen && !YTPlayer.isOnScreen && (YTPlayer.isOnScreen = !0, YTPlayer.player.playVideo()) : (YTPlayer.isOnScreen = !1, $YTPlayer.YTPPause())
					}
					if (YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ? (YTPlayer.controlBar.addClass("compact"), YTPlayer.isCompact = !0, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)) : YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"), YTPlayer.isCompact = !1, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)), YTPlayer.player.getPlayerState() > 0 && (parseFloat(YTPlayer.player.getDuration() - .5) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)) {
						if (YTPlayer.isEnded) return;
						if (YTPlayer.isEnded = !0, setTimeout(function () {
								YTPlayer.isEnded = !1
							}, 1e3), YTPlayer.isList) {
							if (!YTPlayer.opt.loop || YTPlayer.opt.loop > 0 && YTPlayer.player.loopTime === YTPlayer.opt.loop - 1) {
								YTPlayer.player.loopTime = void 0, clearInterval(YTPlayer.getState);
								var YTPEnd = jQuery.Event("YTPEnd");
								return YTPEnd.time = YTPlayer.currentTime, void jQuery(YTPlayer).trigger(YTPEnd)
							}
						} else if (!YTPlayer.opt.loop || YTPlayer.opt.loop > 0 && YTPlayer.player.loopTime === YTPlayer.opt.loop - 1) {
							YTPlayer.player.loopTime = void 0, YTPlayer.state = 2;
							var bgndURL = YTPlayer.opt.coverImage ? "url(" + YTPlayer.opt.coverImage + ") center center" : YTPlayer.orig_containment_background;
							return YTPlayer.opt.containment.css({
								background: bgndURL,
								backgroundSize: "cover"
							}), jQuery(YTPlayer).YTPPause(), void YTPlayer.wrapper.CSSAnimate({
								opacity: 0
							}, YTPlayer.opt.fadeOnStartTime, function () {
								YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);
								var a = jQuery.Event("YTPEnd");
								a.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(a), YTPlayer.player.seekTo(YTPlayer.opt.startAt, !0);
								var b = YTPlayer.opt.coverImage ? "url(" + YTPlayer.opt.coverImage + ") center center" : YTPlayer.orig_containment_background;
								YTPlayer.opt.containment.css({
									background: b,
									backgroundSize: "cover"
								})
							})
						}
						YTPlayer.player.loopTime = YTPlayer.player.loopTime ? ++YTPlayer.player.loopTime : 1, YTPlayer.opt.startAt = YTPlayer.opt.startAt || 1, YTPlayer.preventTrigger = !0, YTPlayer.state = 2, YTPlayer.player.pauseVideo(), YTPlayer.player.seekTo(YTPlayer.opt.startAt, !0), YTPlayer.player.playVideo()
					}
				}
			}, interval))) : ($YTPlayer.YTPPlayerDestroy(), clearInterval(YTPlayer.getState), void clearInterval(YTPlayer.checkForStartAt))
		},
		checkForStart: function (YTPlayer) {
			var $YTPlayer = jQuery(YTPlayer);
			if (!jQuery.contains(document, YTPlayer)) return void $YTPlayer.YTPPlayerDestroy();
			if (jQuery.mbYTPlayer.buildControls(YTPlayer), YTPlayer.overlay)
				if (YTPlayer.opt.addRaster) {
					var classN = "dot" == YTPlayer.opt.addRaster ? "raster-dot" : "raster";
					YTPlayer.overlay.addClass(YTPlayer.isRetina ? classN + " retina" : classN)
				} else YTPlayer.overlay.removeClass(function (a, b) {
					var c = b.split(" "),
						d = [];
					return jQuery.each(c, function (a, b) {
						/raster.*/.test(b) && d.push(b)
					}), d.push("retina"), d.join(" ")
				});
			YTPlayer.preventTrigger = !0, YTPlayer.state = 2, $YTPlayer.YTPPause(), $YTPlayer.YTPMute(), YTPlayer.preventTrigger = !0, YTPlayer.player.playVideo(), YTPlayer.isStarting = !0;
			var startAt = YTPlayer.start_from_last ? YTPlayer.start_from_last : YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
			return YTPlayer.checkForStartAt = setInterval(function () {
				YTPlayer.player.seekTo(startAt, !0);
				var canPlayVideo = YTPlayer.player.getVideoLoadedFraction() >= startAt / YTPlayer.player.getDuration();
				if (YTPlayer.player.getDuration() > 0 && YTPlayer.player.getCurrentTime() >= startAt && canPlayVideo) {
					YTPlayer.start_from_last = null, clearInterval(YTPlayer.checkForStartAt), "function" == typeof YTPlayer.opt.onReady && YTPlayer.opt.onReady(YTPlayer), YTPlayer.isReady = !0, $YTPlayer.YTPRemoveFilter(), YTPlayer.opt.addFilters ? $YTPlayer.YTPApplyFilters(YTPlayer.opt.addFilters) : $YTPlayer.YTPApplyFilters({}), $YTPlayer.YTPEnableFilters();
					var YTPready = jQuery.Event("YTPReady");
					if (YTPready.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(YTPready), YTPlayer.state = 2, jQuery(YTPlayer).YTPPause(), YTPlayer.opt.mute || jQuery(YTPlayer).YTPUnmute(), "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) ? _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()]) : "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()), YTPlayer.opt.autoPlay) {
						var YTPStart = jQuery.Event("YTPStart");
						YTPStart.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(YTPStart), YTPlayer.isStarting = !1, "mac" == jQuery.mbBrowser.os.name && jQuery.mbBrowser.safari ? setTimeout(function () {
							$YTPlayer.YTPPlay()
						}, 10) : $YTPlayer.YTPPlay()
					} else YTPlayer.player.pauseVideo(), setTimeout(function () {
						YTPlayer.start_from_last && YTPlayer.player.seekTo(startAt, !0), YTPlayer.isPlayer || (YTPlayer.opt.coverImage ? (YTPlayer.wrapper.css({
							opacity: 0
						}), setTimeout(function () {
							var a = YTPlayer.opt.coverImage ? "url(" + YTPlayer.opt.coverImage + ") center center" : YTPlayer.orig_containment_background;
							YTPlayer.wrapper.css({
								background: a,
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat"
							})
						}, YTPlayer.opt.fadeOnStartTime)) : (jQuery(YTPlayer.playerEl).CSSAnimate({
							opacity: 1
						}, YTPlayer.opt.fadeOnStartTime), YTPlayer.wrapper.CSSAnimate({
							opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
						}, YTPlayer.opt.fadeOnStartTime))), YTPlayer.isStarting = !1
					}, 150), YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);
					YTPlayer.isPlayer && !YTPlayer.opt.autoPlay && YTPlayer.loading && YTPlayer.loading.length && (YTPlayer.loading.html("Ready"), setTimeout(function () {
						YTPlayer.loading.fadeOut()
					}, 100)), YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.slideDown(1e3)
				} else "mac" == jQuery.mbBrowser.os.name && jQuery.mbBrowser.safari && (YTPlayer.player.playVideo(), startAt >= 0 && YTPlayer.player.seekTo(startAt, !0))
			}, 100), $YTPlayer
		},
		getTime: function () {
			var a = this.get(0);
			return jQuery.mbYTPlayer.formatTime(a.currentTime)
		},
		getTotalTime: function (a) {
			var b = this.get(0);
			return jQuery.mbYTPlayer.formatTime(b.totalTime)
		},
		formatTime: function (a) {
			var b = Math.floor(a / 60),
				c = Math.floor(a - 60 * b);
			return (9 >= b ? "0" + b : b) + " : " + (9 >= c ? "0" + c : c)
		},
		setAnchor: function (a) {
			var b = this;
			b.optimizeDisplay(a)
		},
		getAnchor: function () {
			var a = this.get(0);
			return a.opt.anchor
		}
	}, jQuery.fn.optimizeDisplay = function (anchor) {
		var YTPlayer = this.get(0),
			vid = {};
		YTPlayer.opt.anchor = anchor || YTPlayer.opt.anchor, YTPlayer.opt.anchor = "undefined " != typeof YTPlayer.opt.anchor ? YTPlayer.opt.anchor : "center,center";
		var YTPAlign = YTPlayer.opt.anchor.split(","),
			el = YTPlayer.wrapper,
			iframe = jQuery(YTPlayer.playerEl);
		if (YTPlayer.opt.optimizeDisplay) {
			var abundance = iframe.height() * YTPlayer.opt.abundance,
				win = {};
			win.width = el.outerWidth(), win.height = el.outerHeight() + abundance, YTPlayer.opt.ratio = "auto" === YTPlayer.opt.ratio ? 16 / 9 : YTPlayer.opt.ratio, YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio), vid.width = win.width, vid.height = Math.ceil(vid.width / YTPlayer.opt.ratio), vid.marginTop = Math.ceil(-((vid.height - win.height) / 2)), vid.marginLeft = 0;
			var lowest = vid.height < win.height;
			lowest && (vid.height = win.height, vid.width = Math.ceil(vid.height * YTPlayer.opt.ratio), vid.marginTop = 0, vid.marginLeft = Math.ceil(-((vid.width - win.width) / 2)));
			for (var a in YTPAlign)
				if (YTPAlign.hasOwnProperty(a)) {
					var al = YTPAlign[a].replace(/ /g, "");
					switch (al) {
						case "top":
							vid.marginTop = lowest ? -((vid.height - win.height) / 2) : 0;
							break;
						case "bottom":
							vid.marginTop = lowest ? 0 : -(vid.height - win.height);
							break;
						case "left":
							vid.marginLeft = 0;
							break;
						case "right":
							vid.marginLeft = lowest ? -(vid.width - win.width) : 0;
							break;
						default:
							vid.width > win.width && (vid.marginLeft = -((vid.width - win.width) / 2))
					}
				}
		} else vid.width = "100%", vid.height = "100%", vid.marginTop = 0, vid.marginLeft = 0;
		iframe.css({
			width: vid.width,
			height: vid.height,
			marginTop: vid.marginTop,
			marginLeft: vid.marginLeft,
			maxWidth: "initial"
		})
	}, jQuery.shuffle = function (a) {
		for (var b = a.slice(), c = b.length, d = c; d--;) {
			var e = parseInt(Math.random() * c),
				f = b[d];
			b[d] = b[e], b[e] = f
		}
		return b
	}, jQuery.fn.unselectable = function () {
		return this.each(function () {
			jQuery(this).css({
				"-moz-user-select": "none",
				"-webkit-user-select": "none",
				"user-select": "none"
			}).attr("unselectable", "on")
		})
	}, jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.YTPCheckForState = jQuery.mbYTPlayer.checkForState, jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.YTPGetPlaylistID = jQuery.mbYTPlayer.getPlaylistID, jQuery.fn.YTPChangeVideo = jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeVideo, jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play, jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay, jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop, jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause, jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo, jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist, jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext, jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex, jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute, jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute, jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume, jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.YTPGetVolume = jQuery.mbYTPlayer.getVolume, jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData, jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter, jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters, jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter, jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters, jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter, jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters, jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters, jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters, jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime, jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime, jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask, jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask, jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask, jQuery.fn.YTPSetAnchor = jQuery.mbYTPlayer.setAnchor, jQuery.fn.YTPGetAnchor = jQuery.mbYTPlayer.getAnchor
}(jQuery, ytp), jQuery.support.CSStransition = function () {
	var a = (document.body || document.documentElement).style;
	return void 0 !== a.transition || void 0 !== a.WebkitTransition || void 0 !== a.MozTransition || void 0 !== a.MsTransition || void 0 !== a.OTransition
}(), jQuery.CSS = {
	name: "mb.CSSAnimate",
	author: "Matteo Bicocchi",
	version: "2.0.0",
	transitionEnd: "transitionEnd",
	sfx: "",
	filters: {
		blur: {
			min: 0,
			max: 100,
			unit: "px"
		},
		brightness: {
			min: 0,
			max: 400,
			unit: "%"
		},
		contrast: {
			min: 0,
			max: 400,
			unit: "%"
		},
		grayscale: {
			min: 0,
			max: 100,
			unit: "%"
		},
		hueRotate: {
			min: 0,
			max: 360,
			unit: "deg"
		},
		invert: {
			min: 0,
			max: 100,
			unit: "%"
		},
		saturate: {
			min: 0,
			max: 400,
			unit: "%"
		},
		sepia: {
			min: 0,
			max: 100,
			unit: "%"
		}
	},
	normalizeCss: function (a) {
		var b = jQuery.extend(!0, {}, a);
		jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = "-webkit-" : jQuery.browser.mozilla ? jQuery.CSS.sfx = "-moz-" : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-"), jQuery.CSS.sfx = "";
		for (var c in b) {
			if ("transform" === c && (b[jQuery.CSS.sfx + "transform"] = b[c], delete b[c]), "transform-origin" === c && (b[jQuery.CSS.sfx + "transform-origin"] = a[c], delete b[c]), "filter" !== c || jQuery.browser.mozilla || (b[jQuery.CSS.sfx + "filter"] = a[c], delete b[c]), "blur" === c && setFilter(b, "blur", a[c]), "brightness" === c && setFilter(b, "brightness", a[c]), "contrast" === c && setFilter(b, "contrast", a[c]), "grayscale" === c && setFilter(b, "grayscale", a[c]), "hueRotate" === c && setFilter(b, "hueRotate", a[c]), "invert" === c && setFilter(b, "invert", a[c]), "saturate" === c && setFilter(b, "saturate", a[c]), "sepia" === c && setFilter(b, "sepia", a[c]), "x" === c) {
				var d = jQuery.CSS.sfx + "transform";
				b[d] = b[d] || "", b[d] += " translateX(" + setUnit(a[c], "px") + ")", delete b[c]
			}
			"y" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " translateY(" + setUnit(a[c], "px") + ")", delete b[c]), "z" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " translateZ(" + setUnit(a[c], "px") + ")", delete b[c]), "rotate" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " rotate(" + setUnit(a[c], "deg") + ")", delete b[c]), "rotateX" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " rotateX(" + setUnit(a[c], "deg") + ")", delete b[c]), "rotateY" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " rotateY(" + setUnit(a[c], "deg") + ")", delete b[c]), "rotateZ" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " rotateZ(" + setUnit(a[c], "deg") + ")", delete b[c]), "scale" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " scale(" + setUnit(a[c], "") + ")", delete b[c]), "scaleX" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " scaleX(" + setUnit(a[c], "") + ")", delete b[c]), "scaleY" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " scaleY(" + setUnit(a[c], "") + ")", delete b[c]), "scaleZ" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " scaleZ(" + setUnit(a[c], "") + ")", delete b[c]), "skew" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " skew(" + setUnit(a[c], "deg") + ")", delete b[c]), "skewX" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " skewX(" + setUnit(a[c], "deg") + ")", delete b[c]), "skewY" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " skewY(" + setUnit(a[c], "deg") + ")", delete b[c]), "perspective" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " perspective(" + setUnit(a[c], "px") + ")", delete b[c])
		}
		return b
	},
	getProp: function (a) {
		var b, c = [];
		for (b in a) 0 > c.indexOf(b) && c.push(uncamel(b));
		return c.join(",")
	},
	animate: function (a, b, c, d, e) {
		return this.each(function () {
			function f() {
				g.called = !0, g.CSSAIsRunning = !1, h.off(jQuery.CSS.transitionEnd + "." + g.id), clearTimeout(g.timeout), h.css(jQuery.CSS.sfx + "transition", ""), "function" == typeof e && e.apply(g), "function" == typeof g.CSSqueue && (g.CSSqueue(), g.CSSqueue = null)
			}
			var g = this,
				h = jQuery(this);
			g.id = g.id || "CSSA_" + (new Date).getTime();
			var i = i || {
				type: "noEvent"
			};
			if (g.CSSAIsRunning && g.eventType == i.type && !jQuery.browser.msie && 9 >= jQuery.browser.version) g.CSSqueue = function () {
				h.CSSAnimate(a, b, c, d, e)
			};
			else if (g.CSSqueue = null, g.eventType = i.type, 0 !== h.length && a) {
				if (a = jQuery.normalizeCss(a), g.CSSAIsRunning = !0, "function" == typeof b && (e = b, b = jQuery.fx.speeds._default), "function" == typeof c && (d = c, c = 0), "string" == typeof c && (e = c, c = 0), "function" == typeof d && (e = d, d = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof b)
					for (var j in jQuery.fx.speeds) {
						if (b == j) {
							b = jQuery.fx.speeds[j];
							break
						}
						b = jQuery.fx.speeds._default
					}
				if (b || (b = jQuery.fx.speeds._default), "string" == typeof e && (d = e, e = null), jQuery.support.CSStransition) {
					var k = {
						"default": "ease",
						"in": "ease-in",
						out: "ease-out",
						"in-out": "ease-in-out",
						snap: "cubic-bezier(0,1,.5,1)",
						easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
						easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
						easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
						easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
						easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
						easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
						easeOutExpo: "cubic-bezier(.19,1,.22,1)",
						easeInOutExpo: "cubic-bezier(1,0,0,1)",
						easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
						easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
						easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
						easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
						easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
						easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
						easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
						easeOutQuint: "cubic-bezier(.23,1,.32,1)",
						easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
						easeInSine: "cubic-bezier(.47,0,.745,.715)",
						easeOutSine: "cubic-bezier(.39,.575,.565,1)",
						easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
						easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
						easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
						easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
					};
					k[d] && (d = k[d]), h.off(jQuery.CSS.transitionEnd + "." + g.id), k = jQuery.CSS.getProp(a);
					var l = {};
					jQuery.extend(l, a), l[jQuery.CSS.sfx + "transition-property"] = k, l[jQuery.CSS.sfx + "transition-duration"] = b + "ms", l[jQuery.CSS.sfx + "transition-delay"] = c + "ms", l[jQuery.CSS.sfx + "transition-timing-function"] = d, setTimeout(function () {
						h.one(jQuery.CSS.transitionEnd + "." + g.id, f), h.css(l)
					}, 1), g.timeout = setTimeout(function () {
						g.called || !e ? (g.called = !1, g.CSSAIsRunning = !1) : (h.css(jQuery.CSS.sfx + "transition", ""), e.apply(g), g.CSSAIsRunning = !1, "function" == typeof g.CSSqueue && (g.CSSqueue(), g.CSSqueue = null))
					}, b + c + 10)
				} else {
					for (k in a) "transform" === k && delete a[k], "filter" === k && delete a[k], "transform-origin" === k && delete a[k], "auto" === a[k] && delete a[k], "x" === k && (i = a[k], j = "left", a[j] = i, delete a[k]), "y" === k && (i = a[k], j = "top", a[j] = i, delete a[k]), "-ms-transform" !== k && "-ms-filter" !== k || delete a[k];
					h.delay(c).animate(a, b, e)
				}
			}
		})
	}
}, jQuery.fn.CSSAnimate = jQuery.CSS.animate, jQuery.normalizeCss = jQuery.CSS.normalizeCss, jQuery.fn.css3 = function (a) {
	return this.each(function () {
		var b = jQuery(this),
			c = jQuery.normalizeCss(a);
		b.css(c)
	})
};
var nAgt = navigator.userAgent;
jQuery.browser = jQuery.browser || {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.androidStock = !1, jQuery.browser.msie = !1, jQuery.browser.edge = !1, jQuery.browser.ua = nAgt;
var getOS = function () {
	var a = {
		version: "Unknown version",
		name: "Unknown OS"
	};
	return -1 != navigator.appVersion.indexOf("Win") && (a.name = "Windows"), -1 != navigator.appVersion.indexOf("Mac") && 0 > navigator.appVersion.indexOf("Mobile") && (a.name = "Mac"), -1 != navigator.appVersion.indexOf("Linux") && (a.name = "Linux"), /Mac OS X/.test(nAgt) && !/Mobile/.test(nAgt) && (a.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1], a.version = a.version.replace(/_/g, ".").substring(0, 5)), /Windows/.test(nAgt) && (a.version = "Unknown.Unknown"), /Windows NT 5.1/.test(nAgt) && (a.version = "5.1"), /Windows NT 6.0/.test(nAgt) && (a.version = "6.0"), /Windows NT 6.1/.test(nAgt) && (a.version = "6.1"), /Windows NT 6.2/.test(nAgt) && (a.version = "6.2"), /Windows NT 10.0/.test(nAgt) && (a.version = "10.0"), /Linux/.test(nAgt) && /Linux/.test(nAgt) && (a.version = "Unknown.Unknown"), a.name = a.name.toLowerCase(), a.major_version = "Unknown", a.minor_version = "Unknown", "Unknown.Unknown" != a.version && (a.major_version = parseFloat(a.version.split(".")[0]), a.minor_version = parseFloat(a.version.split(".")[1])), a
};
jQuery.browser.os = getOS(), jQuery.browser.hasTouch = isTouchSupported(), jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
var nameOffset, verOffset, ix;
if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
else if (-1 != nAgt.indexOf("Trident")) {
	jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
	var start = nAgt.indexOf("rv:") + 3,
		end = start + 4;
	jQuery.browser.fullVersion = nAgt.substring(start, end)
} else -1 != (verOffset = nAgt.indexOf("Edge")) ? (jQuery.browser.edge = !0, jQuery.browser.name = "Microsoft Edge", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 < nAgt.indexOf("mozilla/5.0") && -1 < nAgt.indexOf("android ") && -1 < nAgt.indexOf("applewebkit") && !(-1 < nAgt.indexOf("chrome")) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion, jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width(), jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), jQuery.mbBrowser = jQuery.browser, jQuery.browser.versionCompare = function (a, b) {
	if ("stringstring" != typeof a + typeof b) return !1;
	for (var c = a.split("."), d = b.split("."), e = 0, f = Math.max(c.length, d.length); f > e; e++) {
		if (c[e] && !d[e] && 0 < parseInt(c[e]) || parseInt(c[e]) > parseInt(d[e])) return 1;
		if (d[e] && !c[e] && 0 < parseInt(d[e]) || parseInt(c[e]) < parseInt(d[e])) return -1
	}
	return 0
};
var nAgt = navigator.userAgent;
jQuery.browser = jQuery.browser || {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.androidStock = !1, jQuery.browser.msie = !1, jQuery.browser.edge = !1, jQuery.browser.ua = nAgt;
var getOS = function () {
	var a = {
		version: "Unknown version",
		name: "Unknown OS"
	};
	return -1 != navigator.appVersion.indexOf("Win") && (a.name = "Windows"), -1 != navigator.appVersion.indexOf("Mac") && 0 > navigator.appVersion.indexOf("Mobile") && (a.name = "Mac"), -1 != navigator.appVersion.indexOf("Linux") && (a.name = "Linux"), /Mac OS X/.test(nAgt) && !/Mobile/.test(nAgt) && (a.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1], a.version = a.version.replace(/_/g, ".").substring(0, 5)), /Windows/.test(nAgt) && (a.version = "Unknown.Unknown"), /Windows NT 5.1/.test(nAgt) && (a.version = "5.1"), /Windows NT 6.0/.test(nAgt) && (a.version = "6.0"), /Windows NT 6.1/.test(nAgt) && (a.version = "6.1"), /Windows NT 6.2/.test(nAgt) && (a.version = "6.2"), /Windows NT 10.0/.test(nAgt) && (a.version = "10.0"), /Linux/.test(nAgt) && /Linux/.test(nAgt) && (a.version = "Unknown.Unknown"), a.name = a.name.toLowerCase(), a.major_version = "Unknown", a.minor_version = "Unknown", "Unknown.Unknown" != a.version && (a.major_version = parseFloat(a.version.split(".")[0]), a.minor_version = parseFloat(a.version.split(".")[1])), a
};
jQuery.browser.os = getOS(), jQuery.browser.hasTouch = isTouchSupported(), jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
var nameOffset, verOffset, ix;
if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
else if (-1 != nAgt.indexOf("Trident")) {
	jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
	var start = nAgt.indexOf("rv:") + 3,
		end = start + 4;
	jQuery.browser.fullVersion = nAgt.substring(start, end)
} else -1 != (verOffset = nAgt.indexOf("Edge")) ? (jQuery.browser.edge = !0, jQuery.browser.name = "Microsoft Edge", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 < nAgt.indexOf("mozilla/5.0") && -1 < nAgt.indexOf("android ") && -1 < nAgt.indexOf("applewebkit") && !(-1 < nAgt.indexOf("chrome")) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion, jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width(), jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), jQuery.mbBrowser = jQuery.browser, jQuery.browser.versionCompare = function (a, b) {
		if ("stringstring" != typeof a + typeof b) return !1;
		for (var c = a.split("."), d = b.split("."), e = 0, f = Math.max(c.length, d.length); f > e; e++) {
			if (c[e] && !d[e] && 0 < parseInt(c[e]) || parseInt(c[e]) > parseInt(d[e])) return 1;
			if (d[e] && !c[e] && 0 < parseInt(d[e]) || parseInt(c[e]) < parseInt(d[e])) return -1
		}
		return 0
	},
	function (a) {
		a.simpleSlider = {
			defaults: {
				initialval: 0,
				scale: 100,
				orientation: "h",
				readonly: !1,
				callback: !1
			},
			events: {
				start: a.browser.mobile ? "touchstart" : "mousedown",
				end: a.browser.mobile ? "touchend" : "mouseup",
				move: a.browser.mobile ? "touchmove" : "mousemove"
			},
			init: function (b) {
				return this.each(function () {
					var c = this,
						d = a(c);
					d.addClass("simpleSlider"), c.opt = {}, a.extend(c.opt, a.simpleSlider.defaults, b), a.extend(c.opt, d.data());
					var e = "h" == c.opt.orientation ? "horizontal" : "vertical";
					e = a("<div/>").addClass("level").addClass(e), d.prepend(e), c.level = e, d.css({
						cursor: "default"
					}), "auto" == c.opt.scale && (c.opt.scale = a(c).outerWidth()), d.updateSliderVal(), c.opt.readonly || (d.on(a.simpleSlider.events.start, function (b) {
						a.browser.mobile && (b = b.changedTouches[0]), c.canSlide = !0, d.updateSliderVal(b), "h" == c.opt.orientation ? d.css({
							cursor: "col-resize"
						}) : d.css({
							cursor: "row-resize"
						}), a.browser.mobile || (b.preventDefault(), b.stopPropagation())
					}), a(document).on(a.simpleSlider.events.move, function (b) {
						a.browser.mobile && (b = b.changedTouches[0]), c.canSlide && (a(document).css({
							cursor: "default"
						}), d.updateSliderVal(b), a.browser.mobile || (b.preventDefault(), b.stopPropagation()))
					}).on(a.simpleSlider.events.end, function () {
						a(document).css({
							cursor: "auto"
						}), c.canSlide = !1, d.css({
							cursor: "auto"
						})
					}))
				})
			},
			updateSliderVal: function (b) {
				var c = this.get(0);
				if (c.opt) {
					c.opt.initialval = "number" == typeof c.opt.initialval ? c.opt.initialval : c.opt.initialval(c);
					var d = a(c).outerWidth(),
						e = a(c).outerHeight();
					c.x = "object" == typeof b ? b.clientX + document.body.scrollLeft - this.offset().left : "number" == typeof b ? b * d / c.opt.scale : c.opt.initialval * d / c.opt.scale, c.y = "object" == typeof b ? b.clientY + document.body.scrollTop - this.offset().top : "number" == typeof b ? (c.opt.scale - c.opt.initialval - b) * e / c.opt.scale : c.opt.initialval * e / c.opt.scale, c.y = this.outerHeight() - c.y, c.scaleX = c.x * c.opt.scale / d, c.scaleY = c.y * c.opt.scale / e, c.outOfRangeX = c.scaleX > c.opt.scale ? c.scaleX - c.opt.scale : 0 > c.scaleX ? c.scaleX : 0, c.outOfRangeY = c.scaleY > c.opt.scale ? c.scaleY - c.opt.scale : 0 > c.scaleY ? c.scaleY : 0, c.outOfRange = "h" == c.opt.orientation ? c.outOfRangeX : c.outOfRangeY, c.value = "undefined" != typeof b ? "h" == c.opt.orientation ? c.x >= this.outerWidth() ? c.opt.scale : 0 >= c.x ? 0 : c.scaleX : c.y >= this.outerHeight() ? c.opt.scale : 0 >= c.y ? 0 : c.scaleY : "h" == c.opt.orientation ? c.scaleX : c.scaleY, "h" == c.opt.orientation ? c.level.width(Math.floor(100 * c.x / d) + "%") : c.level.height(Math.floor(100 * c.y / e)), "function" == typeof c.opt.callback && c.opt.callback(c)
				}
			}
		}, a.fn.simpleSlider = a.simpleSlider.init, a.fn.updateSliderVal = a.simpleSlider.updateSliderVal
	}(jQuery),
	function (a) {
		a.mbCookie = {
			set: function (a, b, c, d) {
				"object" == typeof b && (b = JSON.stringify(b)), d = d ? "; domain=" + d : "";
				var e = new Date,
					f = "";
				c > 0 && (e.setTime(e.getTime() + 864e5 * c), f = "; expires=" + e.toGMTString()), document.cookie = a + "=" + b + f + "; path=/" + d
			},
			get: function (a) {
				a += "=";
				for (var b = document.cookie.split(";"), c = 0; c < b.length; c++) {
					for (var d = b[c];
						" " == d.charAt(0);) d = d.substring(1, d.length);
					if (0 == d.indexOf(a)) try {
						return JSON.parse(d.substring(a.length, d.length))
					} catch (e) {
						return d.substring(a.length, d.length)
					}
				}
				return null
			},
			remove: function (b) {
				a.mbCookie.set(b, "", -1)
			}
		}, a.mbStorage = {
			set: function (a, b) {
				"object" == typeof b && (b = JSON.stringify(b)), localStorage.setItem(a, b)
			},
			get: function (a) {
				if (!localStorage[a]) return null;
				try {
					return JSON.parse(localStorage[a])
				} catch (b) {
					return localStorage[a]
				}
			},
			remove: function (a) {
				a ? localStorage.removeItem(a) : localStorage.clear()
			}
		}
	}(jQuery);





/*!
 * The Final Countdown for jQuery v2.0.4 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2014 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
! function (a) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
	"use strict";

	function b(a) {
		if (a instanceof Date) return a;
		if (String(a).match(g)) return String(a).match(/^[0-9]*$/) && (a = Number(a)), String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")), new Date(a);
		throw new Error("Couldn't cast `" + a + "` to a date object.")
	}

	function c(a) {
		return function (b) {
			var c = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
			if (c)
				for (var e = 0, f = c.length; f > e; ++e) {
					var g = c[e].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
						i = new RegExp(g[0]),
						j = g[1] || "",
						k = g[3] || "",
						l = null;
					g = g[2], h.hasOwnProperty(g) && (l = h[g], l = Number(a[l])), null !== l && ("!" === j && (l = d(k, l)), "" === j && 10 > l && (l = "0" + l.toString()), b = b.replace(i, l.toString()))
				}
			return b = b.replace(/%%/, "%")
		}
	}

	function d(a, b) {
		var c = "s",
			d = "";
		return a && (a = a.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === a.length ? c = a[0] : (d = a[0], c = a[1])), 1 === Math.abs(b) ? d : c
	}
	var e = 100,
		f = [],
		g = [];
	g.push(/^[0-9]*$/.source), g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g = new RegExp(g.join("|"));
	var h = {
			Y: "years",
			m: "months",
			w: "weeks",
			d: "days",
			D: "totalDays",
			H: "hours",
			M: "minutes",
			S: "seconds"
		},
		i = function (b, c, d) {
			this.el = b, this.$el = a(b), this.interval = null, this.offset = {}, this.instanceNumber = f.length, f.push(this), this.$el.data("countdown-instance", this.instanceNumber), d && (this.$el.on("update.countdown", d), this.$el.on("stoped.countdown", d), this.$el.on("finish.countdown", d)), this.setFinalDate(c), this.start()
		};
	a.extend(i.prototype, {
		start: function () {
			null !== this.interval && clearInterval(this.interval);
			var a = this;
			this.update(), this.interval = setInterval(function () {
				a.update.call(a)
			}, e)
		},
		stop: function () {
			clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
		},
		pause: function () {
			this.stop.call(this)
		},
		resume: function () {
			this.start.call(this)
		},
		remove: function () {
			this.stop(), f[this.instanceNumber] = null, delete this.$el.data().countdownInstance
		},
		setFinalDate: function (a) {
			this.finalDate = b(a)
		},
		update: function () {
			return 0 === this.$el.closest("html").length ? void this.remove() : (this.totalSecsLeft = this.finalDate.getTime() - (new Date).getTime(), this.totalSecsLeft = Math.ceil(this.totalSecsLeft / 1e3), this.totalSecsLeft = this.totalSecsLeft < 0 ? 0 : this.totalSecsLeft, this.offset = {
				seconds: this.totalSecsLeft % 60,
				minutes: Math.floor(this.totalSecsLeft / 60) % 60,
				hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
				days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
				totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
				weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
				months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30),
				years: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 365)
			}, void(0 === this.totalSecsLeft ? (this.stop(), this.dispatchEvent("finish")) : this.dispatchEvent("update")))
		},
		dispatchEvent: function (b) {
			var d = a.Event(b + ".countdown");
			d.finalDate = this.finalDate, d.offset = a.extend({}, this.offset), d.strftime = c(this.offset), this.$el.trigger(d)
		}
	}), a.fn.countdown = function () {
		var b = Array.prototype.slice.call(arguments, 0);
		return this.each(function () {
			var c = a(this).data("countdown-instance");
			if (void 0 !== c) {
				var d = f[c],
					e = b[0];
				i.prototype.hasOwnProperty(e) ? d[e].apply(d, b.slice(1)) : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (d.setFinalDate.call(d, e), d.start()) : a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, e))
			} else new i(this, b[0], b[1])
		})
	}
});











/*!
 * jQuery Ripples plugin v0.5.3 / https://github.com/sirxemic/jquery.ripples
 * MIT License
 * @author sirxemic / https://sirxemic.com/
 */
! function (e) {
	"function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function (e) {
	"use strict";

	function t(e) {
		return "%" == e[e.length - 1]
	}

	function r() {
		function e(e, t) {
			var i = "OES_texture_" + e,
				o = i + "_linear",
				n = o in r,
				a = [i];
			return n && a.push(o), {
				type: t,
				linearSupport: n,
				extensions: a
			}
		}
		var t = document.createElement("canvas");
		if (h = t.getContext("webgl") || t.getContext("experimental-webgl"), !h) return null;
		var r = {};
		if (["OES_texture_float", "OES_texture_half_float", "OES_texture_float_linear", "OES_texture_half_float_linear"].forEach(function (e) {
				var t = h.getExtension(e);
				t && (r[e] = t)
			}), !r.OES_texture_float) return null;
		var i = [];
		i.push(e("float", h.FLOAT)), r.OES_texture_half_float && i.push(e("half_float", r.OES_texture_half_float.HALF_FLOAT_OES));
		var o = h.createTexture(),
			n = h.createFramebuffer();
		h.bindFramebuffer(h.FRAMEBUFFER, n), h.bindTexture(h.TEXTURE_2D, o), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.NEAREST), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, h.NEAREST), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE);
		for (var a = null, s = 0; s < i.length; s++)
			if (h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, 32, 32, 0, h.RGBA, i[s].type, null), h.framebufferTexture2D(h.FRAMEBUFFER, h.COLOR_ATTACHMENT0, h.TEXTURE_2D, o, 0), h.checkFramebufferStatus(h.FRAMEBUFFER) === h.FRAMEBUFFER_COMPLETE) {
				a = i[s];
				break
			} return a
	}

	function i(e, t) {
		try {
			return new ImageData(e, t)
		} catch (i) {
			var r = document.createElement("canvas");
			return r.getContext("2d").createImageData(e, t)
		}
	}

	function o(e) {
		var t = e.split(" ");
		if (1 !== t.length) return t.map(function (t) {
			switch (e) {
				case "center":
					return "50%";
				case "top":
				case "left":
					return "0";
				case "right":
				case "bottom":
					return "100%";
				default:
					return t
			}
		});
		switch (e) {
			case "center":
				return ["50%", "50%"];
			case "top":
				return ["50%", "0"];
			case "bottom":
				return ["50%", "100%"];
			case "left":
				return ["0", "50%"];
			case "right":
				return ["100%", "50%"];
			default:
				return [e, "50%"]
		}
	}

	function n(e, t, r) {
		function i(e, t) {
			var r = h.createShader(e);
			if (h.shaderSource(r, t), h.compileShader(r), !h.getShaderParameter(r, h.COMPILE_STATUS)) throw new Error("compile error: " + h.getShaderInfoLog(r));
			return r
		}
		var o = {};
		if (o.id = h.createProgram(), h.attachShader(o.id, i(h.VERTEX_SHADER, e)), h.attachShader(o.id, i(h.FRAGMENT_SHADER, t)), h.linkProgram(o.id), !h.getProgramParameter(o.id, h.LINK_STATUS)) throw new Error("link error: " + h.getProgramInfoLog(o.id));
		o.uniforms = {}, o.locations = {}, h.useProgram(o.id), h.enableVertexAttribArray(0);
		for (var n, a, s = /uniform (\w+) (\w+)/g, u = e + t; null != (n = s.exec(u));) a = n[2], o.locations[a] = h.getUniformLocation(o.id, a);
		return o
	}

	function a(e, t) {
		h.activeTexture(h.TEXTURE0 + (t || 0)), h.bindTexture(h.TEXTURE_2D, e)
	}

	function s(e) {
		var t = /url\(["']?([^"']*)["']?\)/.exec(e);
		return null == t ? null : t[1]
	}

	function u(e) {
		return e.match(/^data:/)
	}
	var h, c = e(window),
		d = r(),
		f = i(32, 32);
	e("head").prepend("<style>.jquery-ripples { position: relative; z-index: 0; }</style>");
	var l = function (t, r) {
		function i() {
			o.step(), requestAnimationFrame(i)
		}
		var o = this;
		this.$el = e(t), this.interactive = r.interactive, this.resolution = r.resolution, this.textureDelta = new Float32Array([1 / this.resolution, 1 / this.resolution]), this.perturbance = r.perturbance, this.dropRadius = r.dropRadius, this.crossOrigin = r.crossOrigin, this.imageUrl = r.imageUrl;
		var n = document.createElement("canvas");
		n.width = this.$el.innerWidth(), n.height = this.$el.innerHeight(), this.canvas = n, this.$canvas = e(n), this.$canvas.css({
			position: "absolute",
			left: 0,
			top: 0,
			right: 0,
			bottom: 0,
			zIndex: -1
		}), this.$el.addClass("jquery-ripples").append(n), this.context = h = n.getContext("webgl") || n.getContext("experimental-webgl"), d.extensions.forEach(function (e) {
			h.getExtension(e)
		}), e(window).on("resize", function () {
			var e = o.$el.innerWidth(),
				t = o.$el.innerHeight();
			e == o.canvas.width && t == o.canvas.height || (n.width = e, n.height = t)
		}), this.textures = [], this.framebuffers = [], this.bufferWriteIndex = 0, this.bufferReadIndex = 1;
		for (var a = 0; a < 2; a++) {
			var s = h.createTexture(),
				u = h.createFramebuffer();
			h.bindFramebuffer(h.FRAMEBUFFER, u), u.width = this.resolution, u.height = this.resolution, h.bindTexture(h.TEXTURE_2D, s), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, d.linearSupport ? h.LINEAR : h.NEAREST), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, d.linearSupport ? h.LINEAR : h.NEAREST), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE), h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, this.resolution, this.resolution, 0, h.RGBA, d.type, null), h.framebufferTexture2D(h.FRAMEBUFFER, h.COLOR_ATTACHMENT0, h.TEXTURE_2D, s, 0), this.textures.push(s), this.framebuffers.push(u)
		}
		this.quad = h.createBuffer(), h.bindBuffer(h.ARRAY_BUFFER, this.quad), h.bufferData(h.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), h.STATIC_DRAW), this.initShaders(), this.initTexture(), this.setTransparentTexture(), this.loadImage(), h.clearColor(0, 0, 0, 0), h.blendFunc(h.SRC_ALPHA, h.ONE_MINUS_SRC_ALPHA), this.visible = !0, this.running = !0, this.inited = !0, this.setupPointerEvents(), requestAnimationFrame(i)
	};
	l.DEFAULTS = {
		imageUrl: null,
		resolution: 256,
		dropRadius: 20,
		perturbance: .03,
		interactive: !0,
		crossOrigin: ""
	}, l.prototype = {
		setupPointerEvents: function () {
			function e() {
				return r.visible && r.running && r.interactive
			}

			function t(t, i) {
				e() && r.dropAtPointer(t, r.dropRadius * (i ? 1.5 : 1), i ? .14 : .01)
			}
			var r = this;
			this.$el.on("mousemove.ripples", function (e) {
				t(e)
			}).on("touchmove.ripples, touchstart.ripples", function (e) {
				for (var r = e.originalEvent.changedTouches, i = 0; i < r.length; i++) t(r[i])
			}).on("mousedown.ripples", function (e) {
				t(e, !0)
			})
		},
		loadImage: function () {
			var e = this;
			h = this.context;
			var t = this.imageUrl || s(this.originalCssBackgroundImage) || s(this.$el.css("backgroundImage"));
			if (t != this.imageSource) {
				if (this.imageSource = t, !this.imageSource) return void this.setTransparentTexture();
				var r = new Image;
				r.onload = function () {
					function t(e) {
						return 0 == (e & e - 1)
					}
					h = e.context;
					var i = t(r.width) && t(r.height) ? h.REPEAT : h.CLAMP_TO_EDGE;
					h.bindTexture(h.TEXTURE_2D, e.backgroundTexture), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, i), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, i), h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, r), e.backgroundWidth = r.width, e.backgroundHeight = r.height, e.hideCssBackground()
				}, r.onerror = function () {
					h = e.context, e.setTransparentTexture()
				}, r.crossOrigin = u(this.imageSource) ? null : this.crossOrigin, r.src = this.imageSource
			}
		},
		step: function () {
			h = this.context, this.visible && (this.computeTextureBoundaries(), this.running && this.update(), this.render())
		},
		drawQuad: function () {
			h.bindBuffer(h.ARRAY_BUFFER, this.quad), h.vertexAttribPointer(0, 2, h.FLOAT, !1, 0, 0), h.drawArrays(h.TRIANGLE_FAN, 0, 4)
		},
		render: function () {
			h.bindFramebuffer(h.FRAMEBUFFER, null), h.viewport(0, 0, this.canvas.width, this.canvas.height), h.enable(h.BLEND), h.clear(h.COLOR_BUFFER_BIT | h.DEPTH_BUFFER_BIT), h.useProgram(this.renderProgram.id), a(this.backgroundTexture, 0), a(this.textures[0], 1), h.uniform1f(this.renderProgram.locations.perturbance, this.perturbance), h.uniform2fv(this.renderProgram.locations.topLeft, this.renderProgram.uniforms.topLeft), h.uniform2fv(this.renderProgram.locations.bottomRight, this.renderProgram.uniforms.bottomRight), h.uniform2fv(this.renderProgram.locations.containerRatio, this.renderProgram.uniforms.containerRatio), h.uniform1i(this.renderProgram.locations.samplerBackground, 0), h.uniform1i(this.renderProgram.locations.samplerRipples, 1), this.drawQuad(), h.disable(h.BLEND)
		},
		update: function () {
			h.viewport(0, 0, this.resolution, this.resolution), h.bindFramebuffer(h.FRAMEBUFFER, this.framebuffers[this.bufferWriteIndex]), a(this.textures[this.bufferReadIndex]), h.useProgram(this.updateProgram.id), this.drawQuad(), this.swapBufferIndices()
		},
		swapBufferIndices: function () {
			this.bufferWriteIndex = 1 - this.bufferWriteIndex, this.bufferReadIndex = 1 - this.bufferReadIndex
		},
		computeTextureBoundaries: function () {
			var e, r = this.$el.css("background-size"),
				i = this.$el.css("background-attachment"),
				n = o(this.$el.css("background-position"));
			if ("fixed" == i ? (e = {
					left: window.pageXOffset,
					top: window.pageYOffset
				}, e.width = c.width(), e.height = c.height()) : (e = this.$el.offset(), e.width = this.$el.innerWidth(), e.height = this.$el.innerHeight()), "cover" == r) var a = Math.max(e.width / this.backgroundWidth, e.height / this.backgroundHeight),
				s = this.backgroundWidth * a,
				u = this.backgroundHeight * a;
			else if ("contain" == r) var a = Math.min(e.width / this.backgroundWidth, e.height / this.backgroundHeight),
				s = this.backgroundWidth * a,
				u = this.backgroundHeight * a;
			else {
				r = r.split(" ");
				var s = r[0] || "",
					u = r[1] || s;
				t(s) ? s = e.width * parseFloat(s) / 100 : "auto" != s && (s = parseFloat(s)), t(u) ? u = e.height * parseFloat(u) / 100 : "auto" != u && (u = parseFloat(u)), "auto" == s && "auto" == u ? (s = this.backgroundWidth, u = this.backgroundHeight) : ("auto" == s && (s = this.backgroundWidth * (u / this.backgroundHeight)), "auto" == u && (u = this.backgroundHeight * (s / this.backgroundWidth)))
			}
			var h = n[0],
				d = n[1];
			h = t(h) ? e.left + (e.width - s) * parseFloat(h) / 100 : e.left + parseFloat(h), d = t(d) ? e.top + (e.height - u) * parseFloat(d) / 100 : e.top + parseFloat(d);
			var f = this.$el.offset();
			this.renderProgram.uniforms.topLeft = new Float32Array([(f.left - h) / s, (f.top - d) / u]), this.renderProgram.uniforms.bottomRight = new Float32Array([this.renderProgram.uniforms.topLeft[0] + this.$el.innerWidth() / s, this.renderProgram.uniforms.topLeft[1] + this.$el.innerHeight() / u]);
			var l = Math.max(this.canvas.width, this.canvas.height);
			this.renderProgram.uniforms.containerRatio = new Float32Array([this.canvas.width / l, this.canvas.height / l])
		},
		initShaders: function () {
			var e = ["attribute vec2 vertex;", "varying vec2 coord;", "void main() {", "coord = vertex * 0.5 + 0.5;", "gl_Position = vec4(vertex, 0.0, 1.0);", "}"].join("\n");
			this.dropProgram = n(e, ["precision highp float;", "const float PI = 3.141592653589793;", "uniform sampler2D texture;", "uniform vec2 center;", "uniform float radius;", "uniform float strength;", "varying vec2 coord;", "void main() {", "vec4 info = texture2D(texture, coord);", "float drop = max(0.0, 1.0 - length(center * 0.5 + 0.5 - coord) / radius);", "drop = 0.5 - cos(drop * PI) * 0.5;", "info.r += drop * strength;", "gl_FragColor = info;", "}"].join("\n")), this.updateProgram = n(e, ["precision highp float;", "uniform sampler2D texture;", "uniform vec2 delta;", "varying vec2 coord;", "void main() {", "vec4 info = texture2D(texture, coord);", "vec2 dx = vec2(delta.x, 0.0);", "vec2 dy = vec2(0.0, delta.y);", "float average = (", "texture2D(texture, coord - dx).r +", "texture2D(texture, coord - dy).r +", "texture2D(texture, coord + dx).r +", "texture2D(texture, coord + dy).r", ") * 0.25;", "info.g += (average - info.r) * 2.0;", "info.g *= 0.995;", "info.r += info.g;", "gl_FragColor = info;", "}"].join("\n")), h.uniform2fv(this.updateProgram.locations.delta, this.textureDelta), this.renderProgram = n(["precision highp float;", "attribute vec2 vertex;", "uniform vec2 topLeft;", "uniform vec2 bottomRight;", "uniform vec2 containerRatio;", "varying vec2 ripplesCoord;", "varying vec2 backgroundCoord;", "void main() {", "backgroundCoord = mix(topLeft, bottomRight, vertex * 0.5 + 0.5);", "backgroundCoord.y = 1.0 - backgroundCoord.y;", "ripplesCoord = vec2(vertex.x, -vertex.y) * containerRatio * 0.5 + 0.5;", "gl_Position = vec4(vertex.x, -vertex.y, 0.0, 1.0);", "}"].join("\n"), ["precision highp float;", "uniform sampler2D samplerBackground;", "uniform sampler2D samplerRipples;", "uniform vec2 delta;", "uniform float perturbance;", "varying vec2 ripplesCoord;", "varying vec2 backgroundCoord;", "void main() {", "float height = texture2D(samplerRipples, ripplesCoord).r;", "float heightX = texture2D(samplerRipples, vec2(ripplesCoord.x + delta.x, ripplesCoord.y)).r;", "float heightY = texture2D(samplerRipples, vec2(ripplesCoord.x, ripplesCoord.y + delta.y)).r;", "vec3 dx = vec3(delta.x, heightX - height, 0.0);", "vec3 dy = vec3(0.0, heightY - height, delta.y);", "vec2 offset = -normalize(cross(dy, dx)).xz;", "float specular = pow(max(0.0, dot(offset, normalize(vec2(-0.6, 1.0)))), 4.0);", "gl_FragColor = texture2D(samplerBackground, backgroundCoord + offset * perturbance) + specular;", "}"].join("\n")), h.uniform2fv(this.renderProgram.locations.delta, this.textureDelta)
		},
		initTexture: function () {
			this.backgroundTexture = h.createTexture(), h.bindTexture(h.TEXTURE_2D, this.backgroundTexture), h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL, 1), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, h.LINEAR), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.LINEAR)
		},
		setTransparentTexture: function () {
			h.bindTexture(h.TEXTURE_2D, this.backgroundTexture), h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, f)
		},
		hideCssBackground: function () {
			var e = this.$el[0].style.backgroundImage;
			"none" != e && (this.originalInlineCss = e, this.originalCssBackgroundImage = this.$el.css("backgroundImage"), this.$el.css("backgroundImage", "none"))
		},
		restoreCssBackground: function () {
			this.$el.css("backgroundImage", this.originalInlineCss || "")
		},
		dropAtPointer: function (e, t, r) {
			var i = parseInt(this.$el.css("border-left-width")) || 0,
				o = parseInt(this.$el.css("border-top-width")) || 0;
			this.drop(e.pageX - this.$el.offset().left - i, e.pageY - this.$el.offset().top - o, t, r)
		},
		drop: function (e, t, r, i) {
			h = this.context;
			var o = this.$el.innerWidth(),
				n = this.$el.innerHeight(),
				s = Math.max(o, n);
			r /= s;
			var u = new Float32Array([(2 * e - o) / s, (n - 2 * t) / s]);
			h.viewport(0, 0, this.resolution, this.resolution), h.bindFramebuffer(h.FRAMEBUFFER, this.framebuffers[this.bufferWriteIndex]), a(this.textures[this.bufferReadIndex]), h.useProgram(this.dropProgram.id), h.uniform2fv(this.dropProgram.locations.center, u), h.uniform1f(this.dropProgram.locations.radius, r), h.uniform1f(this.dropProgram.locations.strength, i), this.drawQuad(), this.swapBufferIndices()
		},
		destroy: function () {
			this.$el.off(".ripples").removeClass("jquery-ripples").removeData("ripples"), this.$canvas.remove(), this.restoreCssBackground()
		},
		show: function () {
			this.visible = !0, this.$canvas.show(), this.hideCssBackground()
		},
		hide: function () {
			this.visible = !1, this.$canvas.hide(), this.restoreCssBackground()
		},
		pause: function () {
			this.running = !1
		},
		play: function () {
			this.running = !0
		},
		set: function (e, t) {
			switch (e) {
				case "dropRadius":
				case "perturbance":
				case "interactive":
				case "crossOrigin":
					this[e] = t;
					break;
				case "imageUrl":
					this.imageUrl = t, this.loadImage()
			}
		}
	};
	var g = e.fn.ripples;
	e.fn.ripples = function (t) {
		if (!d) throw new Error("Your browser does not support WebGL, the OES_texture_float extension or rendering to floating point textures.");
		var r = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : void 0;
		return this.each(function () {
			var i = e(this),
				o = i.data("ripples"),
				n = e.extend({}, l.DEFAULTS, i.data(), "object" == typeof t && t);
			(o || "string" != typeof t) && (o ? "string" == typeof t && l.prototype[t].apply(o, r) : i.data("ripples", o = new l(this, n)))
		})
	}, e.fn.ripples.Constructor = l, e.fn.ripples.noConflict = function () {
		return e.fn.ripples = g, this
	}
});