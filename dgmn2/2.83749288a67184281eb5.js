(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        351: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "loginToPatreon", (function() {
                return h
            })), n.d(t, "isUserLoggedIn", (function() {
                return v
            }));
            var r = "".concat(window.location.origin, "https://gnhustgames.github.io/dm2sc/play/"),
                o = function(e) {
                    return "https://us-central1-quiet-dryad-268214.cloudfunctions.net/patreon".concat(e)
                },
                a = function() {
                    var e = new URLSearchParams(window.location.search);
                    return {
                        code: e.get("code"),
                        state: e.get("state")
                    }
                },
                c = function() {
                    var e = "?ru=/oauth2/authorize" + encodeURIComponent("?response_type=code&client_id=".concat("_83i_GnbUhmCWYZQ6UYdF0NeDcCsZTru929M0LJwSE4ZtMfJdx1dqCNaW_xnaPiH", "&")) + "redirect_uri=".concat(r.replace("https://", "https%253A%252F%252F")) + encodeURIComponent("&scope=") + "identity identity.memberships";
                    return "".concat("https://www.patreon.com/login").concat(e)
                };

            function i(e, t, n, r, o, a, c) {
                try {
                    var i = e[a](c),
                        u = i.value
                } catch (e) {
                    return void n(e)
                }
                i.done ? t(u) : Promise.resolve(u).then(r, o)
            }
            var u = function() {
                var e, t = (e = regeneratorRuntime.mark((function e(t) {
                    var n, a, c, i, u;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return window.history.pushState(null, document.title, "/play"), n = o("?code=".concat(t, "&uri=").concat(r, "&endpoint=tokens")), e.next = 4, fetch(n);
                            case 4:
                                return a = e.sent, e.next = 7, a.json();
                            case 7:
                                if (c = e.sent, i = c.access_token, u = c.refresh_token, i && u) {
                                    e.next = 13;
                                    break
                                }
                                return log("Could not retrieve tokens", c), e.abrupt("return", !1);
                            case 13:
                                return localStorage.setItem("patreon:access_token", i), localStorage.setItem("patreon:refresh_token", u), e.abrupt("return", !0);
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })), function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function c(e) {
                            i(a, r, o, c, u, "next", e)
                        }

                        function u(e) {
                            i(a, r, o, c, u, "throw", e)
                        }
                        c(void 0)
                    }))
                });
                return function(e) {
                    return t.apply(this, arguments)
                }
            }();

            function s(e, t, n, r, o, a, c) {
                try {
                    var i = e[a](c),
                        u = i.value
                } catch (e) {
                    return void n(e)
                }
                i.done ? t(u) : Promise.resolve(u).then(r, o)
            }
            var p = null,
                d = function() {
                    var e, t = (e = regeneratorRuntime.mark((function e() {
                        var t, n, r, c, i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!p) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", f(p));
                                case 3:
                                    if (!(t = a()) || !t.state) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 8, u(t.code);
                                case 8:
                                    if (n = localStorage.getItem("patreon:access_token")) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.abrupt("return", !1);
                                case 11:
                                    return r = o("?accessToken=".concat(n, "&endpoint=identity")), e.next = 14, fetch(r);
                                case 14:
                                    return c = e.sent, e.next = 17, c.json();
                                case 17:
                                    if (!(i = e.sent).errors) {
                                        e.next = 23;
                                        break
                                    }
                                    return console.log("Could not log in", i), localStorage.removeItem("patreon:access_token"), localStorage.removeItem("patreon:refresh_token"), e.abrupt("return", !1);
                                case 23:
                                    return p = i, e.abrupt("return", f(p));
                                case 25:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })), function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(r, o) {
                            var a = e.apply(t, n);

                            function c(e) {
                                s(a, r, o, c, i, "next", e)
                            }

                            function i(e) {
                                s(a, r, o, c, i, "throw", e)
                            }
                            c(void 0)
                        }))
                    });
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                f = function(e) {
                    return {
                        hasAnActiveSubscription: l(e),
                        data: e
                    }
                },
                l = function(e) {
                    return !!(e.included || []).find((function(e) {
                        if (!("member" === e.type)) return !1;
                        var t = 2397974 == +e.relationships.campaign.data.id,
                            n = "active_patron" === e.attributes.patron_status;
                        return t && n
                    }))
                },
                h = function() {
                    window.location.href = c()
                },
                v = d
        }
    }
]);