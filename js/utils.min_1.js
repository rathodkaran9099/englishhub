/*! This file is auto-generated */
!function(t) {
    var e = {};
    function n(i) {
        if (e[i])
            return e[i].exports;
        var o = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }
    ,
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(t, e) {
        if (1 & e && (t = n(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var i = Object.create(null);
        if (n.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var o in t)
                n.d(i, o, function(e) {
                    return t[e]
                }
                .bind(null, o));
        return i
    }
    ,
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.p = "",
    n(n.s = 5)
}([, function(t, e, n) {
    "use strict";
    e.a = function() {
        window.LP = window.LP || {},
        "string" == typeof arguments[0] ? (LP[arguments[0]] = LP[arguments[0]] || {},
        LP[arguments[0]] = jQuery.extend(LP[arguments[0]], arguments[1])) : LP = jQuery.extend(LP, arguments[0])
    }
}
, function(t, e) {
    !function(t) {
        function e(e, n) {
            var i = t(e)
              , o = i.attr("data-id") || LP.uniqueId();
            n = t.extend({
                event: "hover",
                autoClose: !0,
                single: !0,
                closeInterval: 1e3,
                arrowOffset: null,
                tipClass: ""
            }, n, i.data()),
            i.attr("data-id", o);
            var r = i.attr("data-content-tip") || i.html()
              , a = t('<div class="learn-press-tip-floating">' + r + "</div>")
              , s = null
              , c = 0
              , l = !1
              , u = "el" === n.arrowOffset ? i.outerWidth() / 2 : 8
              , f = t("#__" + o);
            function d() {
                if (s)
                    clearTimeout(s);
                else {
                    n.single && t(".learn-press-tip").not(i).LP("QuickTip", "close"),
                    a.appendTo(document.body);
                    var e = i.offset();
                    a.css({
                        top: e.top - a.outerHeight() - 8,
                        left: e.left - a.outerWidth() / 2 + u
                    })
                }
            }
            function p() {
                s && clearTimeout(s),
                s = setTimeout((function() {
                    a.detach(),
                    s = null
                }
                ), c)
            }
            function h() {
                c = 0,
                p(),
                c = n.closeInterval
            }
            return 0 === f.length && t(document.body).append(t("<div />").attr("id", "__" + o).html(r).css("display", "none")),
            r = f.html(),
            a.addClass(n.tipClass),
            i.data("content-tip", r),
            i.attr("data-content-tip") && (l = !0),
            c = n.closeInterval,
            !1 === n.autoClose && (a.append('<a class="close"></a>'),
            a.on("click", ".close", (function() {
                h()
            }
            ))),
            l || i.html(""),
            "click" === n.event && i.on("click", (function(t) {
                t.stopPropagation(),
                d()
            }
            )),
            t(document).on("learn-press/close-all-quick-tip", (function() {
                h()
            }
            )),
            i.hover((function(t) {
                t.stopPropagation(),
                "click" !== n.event && d()
            }
            ), (function(t) {
                t.stopPropagation(),
                n.autoClose && p()
            }
            )).addClass("ready"),
            {
                close: h,
                open: function() {
                    d()
                }
            }
        }
        t.fn.LP("QuickTip", (function(n) {
            return t.each(this, (function() {
                var i = t(this).data("quick-tip");
                i || (i = new e(this,n),
                t(this).data("quick-tip", i)),
                "string" === t.type(n) && i[n] && i[n].apply(i)
            }
            ))
        }
        ))
    }(jQuery)
}
, , , function(t, e, n) {
    "use strict";
    n.r(e);
    var i, o = n(1), r = window.jQuery;
    void 0 !== r && (r.fn.LP = i = function(t, e) {
        if (r.isFunction(e))
            r.fn["LP_" + t] = e;
        else if (t) {
            var n = [];
            if (arguments.length > 1)
                for (var i = 1; i < arguments.length; i++)
                    n.push(arguments[i]);
            return r.isFunction(r(this)["LP_" + t]) ? r(this)["LP_" + t].apply(this, n) : this
        }
        return this
    }
    );
    var a = i
      , s = n(2)
      , c = n.n(s)
      , l = window.jQuery
      , u = {
        $block: null,
        $window: null,
        events: {},
        instances: [],
        instance: null,
        quickConfirm: function(t, e) {
            var n = l(t);
            l("[learn-press-quick-confirm]").each((function() {
                var t;
                (t = l(this).data("quick-confirm")) && (console.log(t),
                t.destroy())
            }
            )),
            !n.attr("learn-press-quick-confirm") && n.attr("learn-press-quick-confirm", "true").data("quick-confirm", new function(t, e) {
                var n = l(t)
                  , i = l('<span class="learn-press-quick-confirm"></span>').insertAfter(n)
                  , o = l(t).position() || {
                    left: 0,
                    top: 0
                }
                  , r = null
                  , a = null
                  , s = 3
                  , c = function() {
                    i.fadeOut("fast", (function() {
                        l(this).remove(),
                        i.parent().css("position", "")
                    }
                    )),
                    n.removeAttr("learn-press-quick-confirm").data("quick-confirm", void 0),
                    u()
                }
                  , u = function() {
                    a && clearInterval(a),
                    r && clearInterval(r)
                }
                  , f = function() {
                    r = setInterval((function() {
                        0 == --s && (c.call(i[0]),
                        l.isFunction(e.onCancel) && e.onCancel(e.data),
                        u()),
                        i.find("span").html(" (" + s + ")")
                    }
                    ), 1e3),
                    a = setInterval((function() {
                        n.is(":visible") && "hidden" != n.css("visibility") || (u(),
                        i.remove(),
                        i.parent().css("position", ""),
                        l.isFunction(e.onCancel) && e.onCancel(e.data))
                    }
                    ), 350)
                };
                e = l.extend({
                    message: "",
                    data: null,
                    onOk: null,
                    onCancel: null,
                    offset: {
                        top: 0,
                        left: 0
                    }
                }, e || {}),
                i.html(e.message || n.attr("data-confirm-remove") || "Are you sure?").append("<span> (" + s + ")</span>").css({}),
                i.click((function() {
                    l.isFunction(e.onOk) && e.onOk(e.data),
                    c()
                }
                )).hover((function() {
                    u()
                }
                ), (function() {
                    f()
                }
                )),
                i.css({
                    left: o.left + n.outerWidth() - i.outerWidth() + e.offset.left,
                    top: o.top + n.outerHeight() + e.offset.top + 5
                }).hide().fadeIn("fast"),
                f(),
                this.destroy = function() {
                    i.remove(),
                    n.removeAttr("learn-press-quick-confirm").data("quick-confirm", void 0),
                    u()
                }
            }
            (t,e))
        },
        show: function(t, e) {
            l.proxy((function() {
                e = l.extend({
                    title: "",
                    buttons: "",
                    events: !1,
                    autohide: !1,
                    message: t,
                    data: !1,
                    id: LP.uniqueId(),
                    onHide: null
                }, e || {}),
                this.instances.push(e),
                this.instance = e,
                l(document);
                var n = l(document.body);
                this.$block || (this.$block = l('<div id="learn-press-message-box-block"></div>').appendTo(n)),
                this.$window || (this.$window = l('<div id="learn-press-message-box-window"><div id="message-box-wrap"></div> </div>').insertAfter(this.$block),
                this.$window.click((function() {}
                ))),
                this._createWindow(t, e.title, e.buttons),
                this.$block.show(),
                this.$window.show().attr("instance", e.id),
                l(window).bind("resize.message-box", l.proxy(this.update, this)).bind("scroll.message-box", l.proxy(this.update, this)),
                this.update(!0),
                e.autohide && setTimeout((function() {
                    LP.MessageBox.hide(),
                    l.isFunction(e.onHide) && e.onHide.call(LP.MessageBox, e)
                }
                ), e.autohide)
            }
            ), this)()
        },
        blockUI: function(t) {
            t = (!1 !== t ? t || "Wait a moment" : "") + '<div class="message-box-animation"></div>',
            this.show(t)
        },
        hide: function(t, e) {
            e ? this._removeInstance(e.id) : this.instance && this._removeInstance(this.instance.id),
            0 === this.instances.length ? (this.$block && this.$block.hide(),
            this.$window && this.$window.hide(),
            l(window).unbind("resize.message-box", this.update).unbind("scroll.message-box", this.update)) : this.instance && this._createWindow(this.instance.message, this.instance.title, this.instance.buttons)
        },
        update: function(t) {
            var e = this
              , n = this.$window.find("#message-box-wrap")
              , i = n.data("timer")
              , o = function() {
                LP.Hook.doAction("learn_press_message_box_before_resize", e);
                var t = n.find(".message-box-content").css("height", "").css("overflow", "hidden")
                  , i = (n.outerWidth(),
                n.outerHeight())
                  , o = t.height()
                  , r = l(window).height();
                n.offset().top,
                o > r - 50 ? (t.css({
                    height: r - 25
                }),
                i = n.outerHeight()) : t.css("height", "").css("overflow", ""),
                n.css({
                    marginTop: (l(window).height() - i) / 2
                }),
                LP.Hook.doAction("learn_press_message_box_resize", i, e)
            };
            t && o(),
            i && clearTimeout(i),
            i = setTimeout(o, 250)
        },
        _removeInstance: function(t) {
            for (var e = 0; e < this.instances.length; e++)
                if (this.instances[e].id === t) {
                    this.instances.splice(e, 1);
                    var n = this.instances.length;
                    n ? (this.instance = this.instances[n - 1],
                    this.$window.attr("instance", this.instance.id)) : (this.instance = !1,
                    this.$window.removeAttr("instance"));
                    break
                }
        },
        _getInstance: function(t) {
            for (var e = 0; e < this.instances.length; e++)
                if (this.instances[e].id === t)
                    return this.instances[e]
        },
        _createWindow: function(t, e, n) {
            var i = this.$window.find("#message-box-wrap").html("");
            if (e && i.append('<h3 class="message-box-title">' + e + "</h3>"),
            i.append(l('<div class="message-box-content"></div>').html(t)),
            n) {
                var o = l('<div class="message-box-buttons"></div>');
                switch (n) {
                case "yesNo":
                    o.append(this._createButton(LP_Settings.localize.button_yes, "yes")),
                    o.append(this._createButton(LP_Settings.localize.button_no, "no"));
                    break;
                case "okCancel":
                    o.append(this._createButton(LP_Settings.localize.button_ok, "ok")),
                    o.append(this._createButton(LP_Settings.localize.button_cancel, "cancel"));
                    break;
                default:
                    o.append(this._createButton(LP_Settings.localize.button_ok, "ok"))
                }
                i.append(o)
            }
        },
        _createButton: function(t, e) {
            var n = l('<button type="button" class="button message-box-button message-box-button-' + e + '">' + t + "</button>")
              , i = "on" + (e.substr(0, 1).toUpperCase() + e.substr(1));
            return n.data("callback", i).click((function() {
                var t = l(this).data("instance")
                  , e = t.events[l(this).data("callback")];
                "function" === l.type(e) && !1 === e.apply(LP.MessageBox, [t]) || LP.MessageBox.hide(null, t)
            }
            )).data("instance", this.instance),
            n
        }
    }
      , f = {
        hooks: {
            action: {},
            filter: {}
        },
        addAction: function(t, e, n, i) {
            return this.addHook("action", t, e, n, i),
            this
        },
        addFilter: function(t, e, n, i) {
            return this.addHook("filter", t, e, n, i),
            this
        },
        doAction: function(t) {
            return this.doHook("action", t, arguments),
            this
        },
        applyFilters: function(t) {
            return this.doHook("filter", t, arguments)
        },
        removeAction: function(t, e) {
            return this.removeHook("action", t, e),
            this
        },
        removeFilter: function(t, e, n) {
            return this.removeHook("filter", t, e, n),
            this
        },
        addHook: function(t, e, n, i, o) {
            void 0 === this.hooks[t][e] && (this.hooks[t][e] = []);
            var r = this.hooks[t][e];
            return void 0 === o && (o = e + "_" + r.length),
            this.hooks[t][e].push({
                tag: o,
                callable: n,
                priority: i
            }),
            this
        },
        doHook: function(t, e, n) {
            if (n = Array.prototype.slice.call(n, 1),
            void 0 !== this.hooks[t][e]) {
                var i, o = this.hooks[t][e];
                o.sort((function(t, e) {
                    return t.priority - e.priority
                }
                ));
                for (var r = 0; r < o.length; r++)
                    "function" != typeof (i = o[r].callable) && (i = window[i]),
                    "action" === t ? i.apply(null, n) : n[0] = i.apply(null, n)
            }
            return "filter" === t ? n[0] : this
        },
        removeHook: function(t, e, n, i) {
            if (void 0 !== this.hooks[t][e])
                for (var o = this.hooks[t][e], r = o.length - 1; r >= 0; r--)
                    void 0 !== i && i !== o[r].tag || void 0 !== n && n !== o[r].priority || o.splice(r, 1);
            return this
        }
    };
    function d(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            ))),
            n.push.apply(n, i)
        }
        return n
    }
    function p(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
    }
    n(7);
    var h = jQuery;
    String.prototype.getQueryVar = function(t) {
        t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var e = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(this);
        return null === e ? "" : decodeURIComponent(e[1].replace(/\+/g, " "))
    }
    ,
    String.prototype.addQueryVar = function(t, e) {
        var n = this
          , i = n.split("#");
        return n = i[0],
        t.match(/\[/) ? (n += n.match(/\?/) ? "&" : "?",
        n += t + "=" + e) : -1 != n.indexOf("&" + t + "=") || -1 != n.indexOf("?" + t + "=") ? n = n.replace(new RegExp(t + "=([^&#]*)","g"), t + "=" + e) : (n += n.match(/\?/) ? "&" : "?",
        n += t + "=" + e),
        n + (i[1] ? "#" + i[1] : "")
    }
    ,
    String.prototype.removeQueryVar = function(t) {
        var e = this
          , n = e.split("#");
        e = n[0],
        t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var i = new RegExp("[\\?&]" + t + "([[][^=]*)?=([^&#]*)","g");
        return (e = e.replace(i, "")) + (n[1] ? "#" + n[1] : "")
    }
    ,
    0 == h.isEmptyObject("") && (h.isEmptyObject = function(t) {
        var e;
        for (e in t)
            if (t.hasOwnProperty(e))
                return !1;
        return !0
    }
    );
    var v = {
        Hook: f,
        setUrl: function(t, e, n) {
            t && (history.pushState({}, n, t),
            LP.Hook.doAction("learn_press_set_location_url", t))
        },
        toggleGroupSection: function(t, e) {
            var n = h(t);
            n.hasClass("hide-if-js") && n.hide().removeClass("hide-if-js"),
            n.removeClass("hide-if-js").slideToggle((function() {
                h(this).is(":visible") ? h(e).addClass("toggle-on").removeClass("toggle-off") : h(e).addClass("toggle-off").removeClass("toggle-on")
            }
            ))
        },
        overflow: function(t, e) {
            var n = h(t)
              , i = n.css("overflow");
            e ? n.css("overflow", e).data("overflow", i) : n.css("overflow", n.data("overflow"))
        },
        getUrl: function() {
            return window.location.href
        },
        addQueryVar: function(t, e, n) {
            return (void 0 === n ? window.location.href : n).addQueryVar(t, e)
        },
        removeQueryVar: function(t, e) {
            return (void 0 === e ? window.location.href : e).removeQueryVar(t)
        },
        reload: function(t) {
            t || (t = window.location.href),
            window.location.href = t
        },
        parseResponse: function(t, e) {
            var n = t.match(/<-- LP_AJAX_START -->(.*)<-- LP_AJAX_END -->/);
            return n && (t = n[1]),
            "json" === (e || "json") ? this.parseJSON(t) : t
        },
        parseJSON: function(t) {
            var e = (t + "").match(/<-- LP_AJAX_START -->(.*)<-- LP_AJAX_END -->/);
            try {
                t = e ? h.parseJSON(e[1]) : h.parseJSON(t)
            } catch (e) {
                t = {}
            }
            return t
        },
        ajax: function(t) {
            var e = t.type || "post"
              , n = t.dataType || "json"
              , i = t.action ? h.extend(t.data, {
                "lp-ajax": t.action
            }) : t.data
              , o = t.beforeSend || function() {}
              , r = t.url || window.location.href;
            h.ajax({
                data: i,
                url: r,
                type: e,
                dataType: "html",
                beforeSend: o.apply(null, t),
                success: function(e) {
                    var i = LP.parseResponse(e, n);
                    h.isFunction(t.success) && t.success(i, e)
                },
                error: function() {
                    h.isFunction(t.error) && t.error.apply(null, LP.funcArgs2Array())
                }
            })
        },
        doAjax: function(t) {
            var e = t.type || "post"
              , n = t.dataType || "json"
              , i = (void 0 === t.prefix || "learnpress_") + t.action
              , o = t.action ? h.extend(t.data, {
                action: i
            }) : t.data;
            h.ajax({
                data: o,
                url: t.url || window.location.href,
                type: e,
                dataType: "html",
                success: function(e) {
                    var i = LP.parseResponse(e, n);
                    h.isFunction(t.success) && t.success(i, e)
                },
                error: function() {
                    h.isFunction(t.error) && t.error.apply(null, LP.funcArgs2Array())
                }
            })
        },
        funcArgs2Array: function(t) {
            for (var e = [], n = 0; n < t.length; n++)
                e.push(t[n]);
            return e
        },
        addFilter: function(t, e) {
            var n = h(document)
              , i = "LP." + t;
            return n.on(i, e),
            LP.log(n.data("events")),
            this
        },
        applyFilters: function() {
            var t = h(document)
              , e = arguments[0]
              , n = this.funcArgs2Array(arguments);
            return t.hasEvent(e) ? (n[0] = "LP." + e,
            t.triggerHandler.apply(t, n)) : n[1]
        },
        addAction: function(t, e) {
            return this.addFilter(t, e)
        },
        doAction: function() {
            var t = h(document)
              , e = arguments[0]
              , n = this.funcArgs2Array(arguments);
            t.hasEvent(e) && (n[0] = "LP." + e,
            t.trigger.apply(t, n))
        },
        toElement: function(t, e) {
            if (0 !== h(t).length) {
                e = h.extend({
                    delay: 300,
                    duration: "slow",
                    offset: 50,
                    container: null,
                    callback: null,
                    invisible: !1
                }, e || {});
                var n, i = h(e.container);
                0 === i.length && (i = h("body, html")),
                n = i.offset().top;
                var o = h(t).offset().top + i.scrollTop() - n - e.offset;
                e.invisible && function(t, e) {
                    var n = i.scrollTop()
                      , o = n + i.height()
                      , r = h(t).offset().top - i.offset().top
                      , a = r + h(t).height();
                    return n < r && o > a
                }(t) || i.fadeIn(10).delay(e.delay).animate({
                    scrollTop: o
                }, e.duration, e.callback)
            }
        },
        uniqueId: function(t, e) {
            var n;
            void 0 === t && (t = "");
            var i = function(t, e) {
                return e < (t = parseInt(t, 10).toString(16)).length ? t.slice(t.length - e) : e > t.length ? new Array(e - t.length + 1).join("0") + t : t
            };
            return this.php_js || (this.php_js = {}),
            this.php_js.uniqidSeed || (this.php_js.uniqidSeed = Math.floor(123456789 * Math.random())),
            this.php_js.uniqidSeed++,
            n = t,
            n += i(parseInt((new Date).getTime() / 1e3, 10), 8),
            n += i(this.php_js.uniqidSeed, 5),
            e && (n += (10 * Math.random()).toFixed(8).toString()),
            n
        },
        log: function() {
            for (var t = 0, e = arguments.length; t < e; t++)
                console.log(arguments[t])
        },
        blockContent: function() {
            0 === h("#learn-press-block-content").length && h(LP.template("learn-press-template-block-content", {})).appendTo(h("body")),
            LP.hideMainScrollbar().addClass("block-content"),
            h(document).trigger("learn_press_block_content")
        },
        unblockContent: function() {
            setTimeout((function() {
                LP.showMainScrollbar().removeClass("block-content"),
                h(document).trigger("learn_press_unblock_content")
            }
            ), 350)
        },
        hideMainScrollbar: function(t) {
            t || (t = "html, body");
            var e = h(t);
            return e.each((function() {
                var t = h(this)
                  , e = t.css("overflow");
                t.css("overflow", "hidden").attr("overflow", e)
            }
            )),
            e
        },
        showMainScrollbar: function(t) {
            t || (t = "html, body");
            var e = h(t);
            return e.each((function() {
                var t = h(this)
                  , e = t.attr("overflow");
                t.css("overflow", e).removeAttr("overflow")
            }
            )),
            e
        },
        template: "undefined" != typeof _ ? _.memoize((function(t, e) {
            var n, i = {
                evaluate: /<#([\s\S]+?)#>/g,
                interpolate: /\{\{\{([\s\S]+?)\}\}\}/g,
                escape: /\{\{([^\}]+?)\}\}(?!\})/g,
                variable: "data"
            }, o = function(e) {
                return (n = n || _.template(h("#" + t).html(), null, i))(e)
            };
            return e ? o(e) : o
        }
        ), (function(t, e) {
            return t + "-" + JSON.stringify(e)
        }
        )) : function() {
            return ""
        }
        ,
        alert: function(t, e) {
            var n = ""
              , i = "";
            "string" == typeof t ? i = t : (void 0 !== t.title && (n = t.title),
            void 0 !== t.message && (i = t.message)),
            h.alerts.alert(i, n, (function(t) {
                LP._on_alert_hide(),
                e && e(t)
            }
            )),
            this._on_alert_show()
        },
        confirm: function(t, e) {
            var n = ""
              , i = "";
            "string" == typeof t ? i = t : (void 0 !== t.title && (n = t.title),
            void 0 !== t.message && (i = t.message)),
            h.alerts.confirm(i, n, (function(t) {
                LP._on_alert_hide(),
                e && e(t)
            }
            )),
            this._on_alert_show()
        },
        _on_alert_show: function() {
            var t = h("#popup_container");
            h('<span id="popup_container_placeholder" />').insertAfter(t).data("xxx", t),
            t.stop().css("top", "-=50").css("opacity", "0").animate({
                top: "+=50",
                opacity: 1
            }, 250)
        },
        _on_alert_hide: function() {
            var t = h("#popup_container_placeholder")
              , e = t.data("xxx");
            e && e.replaceWith(t),
            e.appendTo(h(document.body)),
            e.stop().animate({
                top: "+=50",
                opacity: 0
            }, 250, (function() {
                h(this).remove()
            }
            ))
        },
        sendMessage: function(t, e, n, i) {
            h.isPlainObject(t) && (t = JSON.stringify(t)),
            n = n || "*",
            (e = e || window).postMessage(t, n, i)
        },
        receiveMessage: function(t, e) {
            var n = t.origin || t.originalEvent.origin
              , i = t.data || t.originalEvent.data || "";
            ("string" == typeof i || i instanceof String) && 0 === i.indexOf("{") && (i = LP.parseJSON(i)),
            LP.Hook.doAction("learn_press_receive_message", i, n)
        }
    };
    h(document).ready((function() {
        var t, e;
        void 0 !== h.alerts && (h.alerts.overlayColor = "#000",
        h.alerts.overlayOpacity = .5,
        h.alerts.okButton = lpGlobalSettings.localize.button_ok,
        h.alerts.cancelButton = lpGlobalSettings.localize.button_cancel),
        h(".learn-press-message.fixed").each((function() {
            var t = h(this)
              , e = t.data();
            !function(t, e) {
                e.delayIn && setTimeout((function() {
                    t.show().hide().fadeIn()
                }
                ), e.delayIn),
                e.delayOut && setTimeout((function() {
                    t.fadeOut()
                }
                ), e.delayOut + (e.delayIn || 0))
            }(t, e)
        }
        )),
        h("body").on("click", ".learn-press-nav-tabs li a", (function(t) {
            t.preventDefault();
            var e = h(this);
            e.closest("li").addClass("active").siblings().removeClass("active"),
            h(e.attr("data-tab")).addClass("active").siblings().removeClass("active"),
            h(document).trigger("learn-press/nav-tabs/clicked", e)
        }
        )),
        setTimeout((function() {
            h(".learn-press-nav-tabs li.active:not(.default) a").trigger("click")
        }
        ), 300),
        h("body.course-item-popup").parent().css("overflow", "hidden"),
        t = null,
        e = function() {
            h(".auto-check-lines").checkLines((function(t) {
                t > 1 ? h(this).removeClass("single-lines") : h(this).addClass("single-lines"),
                h(this).attr("rows", t)
            }
            ))
        }
        ,
        h(window).on("resize.check-lines", (function() {
            t ? (t && clearTimeout(t),
            t = setTimeout(e, 300)) : e()
        }
        )),
        h(".learn-press-tooltip, .lp-passing-conditional").LP_Tooltip({
            offset: [24, 24]
        }),
        h(".learn-press-icon").LP_Tooltip({
            offset: [30, 30]
        }),
        h(".learn-press-message[data-autoclose]").each((function() {
            var t = h(this)
              , e = parseInt(t.data("autoclose"));
            e && setTimeout((function(t) {
                t.fadeOut()
            }
            ), e, t)
        }
        )),
        h(document).on("click", (function() {
            h(document).trigger("learn-press/close-all-quick-tip")
        }
        ))
    }
    )),
    Object(o.a)(function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? d(n, !0).forEach((function(e) {
                p(t, e, n[e])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(n).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }
            ))
        }
        return t
    }({
        Event_Callback: function(t) {
            var e = {}
              , n = window.jQuery;
            this.on = function(n, i) {
                var o = n.split(".")
                  , r = "";
                return o.length > 1 && (n = o[0],
                r = o[1]),
                e[n] || (e[n] = [[], {}]),
                r ? (e[n][1][r] || (e[n][1][r] = []),
                e[n][1][r].push(i)) : e[n][0].push(i),
                t
            }
            ,
            this.off = function(i, o) {
                var r = i.split(".")
                  , a = "";
                if (r.length > 1 && (i = r[0],
                a = r[1]),
                !e[i])
                    return t;
                var s = -1;
                if (a) {
                    if (!e[i][1][a])
                        return t;
                    if (n.isFunction(o)) {
                        if ((s = e[i][1][a].indexOf(o)) < 0)
                            return t;
                        e[i][1][a].splice(s, 1)
                    } else
                        e[i][1][a] = []
                } else if (n.isFunction(o)) {
                    if ((s = e[i][0].indexOf(o)) < 0)
                        return t;
                    e[i][0].splice(s, 1)
                } else
                    e[i][0] = [];
                return t
            }
            ,
            this.callEvent = function(i, o) {
                if (e[i]) {
                    if (e[i][0])
                        for (var r = 0; r < e[i][0].length; r++)
                            n.isFunction(e[i][0][r]) && e[i][r][0].apply(t, o);
                    if (e[i][1])
                        for (var r in e[i][1])
                            for (var a = 0; a < e[i][1][r].length; a++)
                                n.isFunction(e[i][1][r][a]) && e[i][1][r][a].apply(t, o)
                }
            }
        },
        MessageBox: u
    }, v)),
    e.default = {
        fn: a,
        QuickTip: c.a
    }
}
, , function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function _typeof(t) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    var $ = window.jQuery
      , serializeJSON = function serializeJSON(path) {
        var isInput = $(this).is("input") || $(this).is("select") || $(this).is("textarea")
          , unIndexed = isInput ? $(this).serializeArray() : $(this).find("input, select, textarea").serializeArray()
          , indexed = {}
          , validate = /(\[([a-zA-Z0-9_-]+)?\]?)/g
          , arrayKeys = {}
          , end = !1;
        if ($.each(unIndexed, (function() {
            var that = this
              , match = this.name.match(/^([0-9a-zA-Z_-]+)/);
            if (match) {
                var keys = this.name.match(validate)
                  , objPath = "indexed['" + match[0] + "']";
                keys ? ("object" != _typeof(indexed[match[0]]) && (indexed[match[0]] = {}),
                $.each(keys, (function(i, prop) {
                    prop = prop.replace(/\]|\[/g, "");
                    var rawPath = objPath.replace(/'|\[|\]/g, "")
                      , objExp = ""
                      , preObjPath = objPath;
                    "" == prop ? (null == arrayKeys[rawPath] ? arrayKeys[rawPath] = 0 : arrayKeys[rawPath]++,
                    objPath += "['" + arrayKeys[rawPath] + "']") : (isNaN(prop) || (arrayKeys[rawPath] = prop),
                    objPath += "['" + prop + "']");
                    try {
                        i == keys.length - 1 ? (objExp = objPath + "=that.value;",
                        end = !0) : (objExp = objPath + "={}",
                        end = !1);
                        var evalString = "if( typeof " + objPath + " == 'undefined'){" + objExp + ";}else{if(end){if(typeof " + preObjPath + "!='object'){" + preObjPath + "={};}" + objExp + "}}";
                        eval(evalString)
                    } catch (t) {
                        console.log("Error:" + t + "\n" + objExp)
                    }
                }
                ))) : indexed[match[0]] = this.value
            }
        }
        )),
        path) {
            path = "['" + path.replace(".", "']['") + "']";
            var c = "try{indexed = indexed" + path + "}catch(ex){console.log(c, ex);}";
            eval(c)
        }
        return indexed
    }
      , LP_Tooltip = function(t) {
        return t = $.extend({}, {
            offset: [0, 0]
        }, t || {}),
        $.each(this, (function() {
            var e = $(this)
              , n = e.data("content");
            if (n && void 0 === e.data("LP_Tooltip")) {
                var i = null;
                e.hover((function(o) {
                    i = $('<div class="learn-press-tooltip-bubble"/>').html(n).appendTo($("body")).hide();
                    var r = e.offset();
                    if ($.isArray(t.offset)) {
                        var a = t.offset[1]
                          , s = t.offset[0];
                        $.isNumeric(s) && (r.left += s),
                        $.isNumeric(a) && (r.top += a)
                    }
                    i.css({
                        top: r.top,
                        left: r.left
                    }),
                    i.fadeIn()
                }
                ), (function() {
                    i && i.remove()
                }
                )),
                e.data("tooltip", !0)
            }
        }
        ))
    }
      , hasEvent = function(t) {
        var e = $(this).data("events");
        if (void 0 === e.LP)
            return !1;
        for (i = 0; i < e.LP.length; i++)
            if (e.LP[i].namespace == t)
                return !0;
        return !1
    }
      , dataToJSON = function() {
        var t = {};
        return $.each(this[0].attributes, (function() {
            var e = this.name.match(/^data-(.*)/);
            e && (t[e[1]] = this.value)
        }
        )),
        t
    }
      , rows = function() {
        var t = $(this).height()
          , e = $(this).css("line-height").replace("px", "");
        return $(this).attr({
            height: t,
            "line-height": e
        }),
        Math.floor(t / parseInt(e))
    }
      , checkLines = function(t) {
        return this.each((function() {
            var e = $(this).rows();
            t.call(this, e)
        }
        ))
    }
      , findNext = function(t) {
        var e = $(t)
          , n = this.first()
          , i = e.index(n)
          , o = e.eq(i + 1);
        return !!o.length && o
    }
      , findPrev = function(t) {
        var e = $(t)
          , n = this.first()
          , i = e.index(n)
          , o = e.eq(i - 1);
        return !!o.length && o
    }
      , progress = function(t) {
        return this.each((function() {
            var e = parseInt(t / 100 * 360)
              , n = $(this);
            e < 180 ? n.find(".progress-circle").removeClass("gt-50") : n.find(".progress-circle").addClass("gt-50"),
            n.find(".fill").css({
                transform: "rotate(" + e + "deg)"
            })
        }
        ))
    };
    $.fn.serializeJSON = serializeJSON,
    $.fn.LP_Tooltip = LP_Tooltip,
    $.fn.hasEvent = hasEvent,
    $.fn.dataToJSON = dataToJSON,
    $.fn.rows = rows,
    $.fn.checkLines = checkLines,
    $.fn.findNext = findNext,
    $.fn.findPrev = findPrev,
    $.fn.progress = progress;
    var _unused_webpack_default_export = {
        serializeJSON: serializeJSON,
        LP_Tooltip: LP_Tooltip,
        hasEvent: hasEvent,
        dataToJSON: dataToJSON,
        rows: rows,
        checkLines: checkLines,
        findNext: findNext,
        findPrev: findPrev,
        progress: progress
    }
}
]);
