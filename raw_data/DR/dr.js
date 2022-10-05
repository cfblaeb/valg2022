(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[974], {
    4056: function (e, n, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/kandidattest", function () {
            return t(1509)
        }])
    }, 4812: function (e, n, t) {
        "use strict";
        t.d(n, {
            Z: function () {
                return v
            }
        });
        var r = t(5893), a = t(9883), o = t(9124), i = t(2238), s = t(5344), l = t(8807), u = t(7294), c = t(8551),
            m = t(1749), I = t(8132), d = t(7881);

        function D(e, n, t) {
            return n in e ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t, e
        }

        function _(e) {
            var n = e.innerProps, t = e.selectProps.menuIsOpen;
            return (0, r.jsx)("div", function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })))), r.forEach((function (n) {
                        D(e, n, t[n])
                    }))
                }
                return e
            }({}, n, {
                style: {padding: "9px 8px"},
                children: t ? (0, r.jsx)(I.Z, {size: "x-small"}) : (0, r.jsx)(d.Z, {size: "x-small"})
            }))
        }

        var N = t(5863), f = t.n(N);

        function p(e, n, t) {
            return n in e ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t, e
        }

        function C(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })))), r.forEach((function (n) {
                    p(e, n, t[n])
                }))
            }
            return e
        }

        var b = {
            container: function (e) {
                return C({}, e, {
                    width: "100%",
                    maxWidth: "360px",
                    fontWeight: 400,
                    color: "black",
                    fontSize: "14px",
                    lineHeight: "18px",
                    "@media only screen and (min-width: 480px)": {fontSize: "16px", lineHeight: "20px"}
                })
            }, control: function (e, n) {
                return C({}, e, {
                    borderRadius: 0,
                    border: n.menuIsOpen ? "1px solid black" : "1px solid ".concat(f()["color-grey-40"]),
                    minHeight: "40px",
                    cursor: "pointer",
                    "&:hover": {border: "1px solid black", backgroundColor: f()["color-grey-90"]}
                })
            }, indicatorsContainer: function (e) {
                return C({}, e, {
                    "& > div:first-of-type": {
                        padding: "8px",
                        "& > svg": {
                            marginTop: "2px",
                            marginBottom: "-2px",
                            color: f()["color-grey-60"],
                            transition: "color 300ms cubic-bezier(0.2, 0, 0.4, 1)",
                            ":hover": {color: "black"}
                        }
                    }, '& > div[class*="indicatorContainer"]': {height: "24px", padding: "0px"}
                })
            }, indicatorSeparator: function () {
                return {display: "none"}
            }, menu: function (e) {
                return C({}, e, {
                    borderRadius: 0,
                    marginTop: 0,
                    width: "100%",
                    maxWidth: "360px",
                    zIndex: 3,
                    position: "absolute",
                    height: "auto",
                    overflow: "hidden"
                })
            }, menuList: function (e) {
                return C({}, e, {padding: 0, width: "100%", maxWidth: "360px"})
            }, option: function (e, n) {
                return C({}, e, {
                    borderTop: "1px solid ".concat(f()["color-grey-90"]),
                    padding: "11px 19px",
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: n.isSelected ? 600 : 400,
                    color: f()["color-grey-20"],
                    backgroundColor: n.isFocused ? f()["color-grey-90"] : "white",
                    cursor: "pointer",
                    "&:first-of-type": {border: 0, padding: "11.5px 19px"},
                    "&:hover": {backgroundColor: f()["color-grey-90"]},
                    textTransform: "none",
                    "@media only screen and (min-width: 480px)": {fontSize: "16px", lineHeight: "20px"}
                })
            }, placeholder: function (e) {
                return C({}, e, {color: "black"})
            }, valueContainer: function (e) {
                return C({}, e, {
                    padding: "2px 8px",
                    fontWeight: 600,
                    "@media only screen and (min-width: 480px)": {padding: "2px 16px"}
                })
            }
        }, g = {ignoreCase: !0, ignoreAccents: !1, trim: !0, matchFrom: "start"};

        function h() {
            return "Omr\xe5det findes ikke. Pr\xf8v igen."
        }

        function y(e) {
            var n = e.optionList, t = e.onChange, a = e.isClearable, o = void 0 !== a && a, i = e.placeholder,
                s = e.value, I = (0, u.useRef)(null), d = (0, u.useState)(null), D = d[0], N = d[1],
                f = (0, l.Z)().dispatchEvent;
            (0, u.useEffect)((function () {
                N(window)
            }), []);
            return (0, r.jsx)(c.ZP, {
                ref: I,
                options: n,
                placeholder: i || "V\xe6lg fra liste",
                styles: b,
                onChange: function (e) {
                    (null === e || void 0 === e ? void 0 : e.value) && t && (t(e), f("change", {id: e.value})), e && f("change", {clearChoice: !0})
                },
                "aria-label": i || "V\xe6lg fra liste",
                instanceId: 1,
                components: {DropdownIndicator: _},
                isSearchable: !(D && ("ontouchstart" in D || navigator.maxTouchPoints > 0)),
                menuShouldScrollIntoView: !0,
                filterOption: (0, m.c)(g),
                noOptionsMessage: h,
                onMenuOpen: function () {
                    f("click", {type: "open"})
                },
                onKeyDown: function (e) {
                    var n;
                    "Enter" === e.key && (null === I || void 0 === I || null === (n = I.current) || void 0 === n || n.blur())
                },
                isClearable: o,
                blurInputOnSelect: !0,
                maxMenuHeight: 300,
                value: s
            })
        }

        var T = t(2349), S = t.n(T);

        function v(e) {
            var n = e.optionList, t = e.onChange, l = e.placeholder, u = e.showButton, c = e.onButtonClick,
                m = e.buttonDisabled, I = e.buttonDisabledAriaLabel, d = e.buttonTrackingContextName, D = e.buttonText,
                _ = e.href, N = e.processing, f = e.value, p = (0, i.z)();
            return (0, r.jsx)(a.Z.Provider, {
                context: {name: "area-selector"},
                children: (0, r.jsx)(o.Z, {
                    padded: !1,
                    children: (0, r.jsx)("div", {
                        className: S().container,
                        children: (0, r.jsxs)("div", {
                            className: S().selector,
                            children: [(0, r.jsx)("div", {
                                className: S().input,
                                children: (0, r.jsx)(y, {optionList: n, onChange: t, placeholder: l, value: f})
                            }), u && (0, r.jsx)("div", {
                                className: S().buttonContainer,
                                children: (0, r.jsx)(a.Z.Provider, {
                                    context: {name: d || "button-navigation"},
                                    children: (0, r.jsx)(s.Z, {
                                        onClick: c,
                                        disabled: m,
                                        href: _,
                                        disabledAriaLabel: I,
                                        children: (0, r.jsxs)("span", {
                                            className: S().buttonContent,
                                            children: [(0, r.jsx)("img", {
                                                src: "".concat(p, "/loader.gif"),
                                                alt: "Henter resultater",
                                                "aria-hidden": !N,
                                                className: "".concat(S().spinner, " ").concat(N ? S().isVisible : "")
                                            }), (0, r.jsx)("span", {
                                                className: "".concat(S().buttonText, " ").concat(N ? S().isHidden : ""),
                                                "aria-hidden": N,
                                                children: D || "OK"
                                            })]
                                        })
                                    })
                                })
                            })]
                        })
                    })
                })
            })
        }
    }, 6680: function (e, n, t) {
        "use strict";
        t.d(n, {
            __: function () {
                return a
            }, yb: function () {
                return o
            }
        });
        var r = [{ID: 9, Name: "Bornholms Storkreds", SmallConstituencies: [48, 49], KMD_ID: 4}, {
            ID: 10,
            Name: "Fyns Storkreds",
            SmallConstituencies: [9, 57, 53, 55, 2, 54, 50, 56],
            KMD_ID: 6
        }, {
            ID: 4,
            Name: "K\xf8benhavns Omegns Storkreds",
            SmallConstituencies: [6, 14, 20, 25, 26, 21, 28, 15],
            KMD_ID: 2
        }, {
            ID: 2,
            Name: "K\xf8benhavns Storkreds",
            SmallConstituencies: [11, 13, 19, 61, 12, 66, 5, 22, 16, 4, 1, 27],
            KMD_ID: 1
        }, {
            ID: 17,
            Name: "Nordjyllands Storkreds",
            SmallConstituencies: [103, 94, 95, 96, 101, 89, 98, 99, 100],
            KMD_ID: 10
        }, {ID: 5, Name: "Nordsj\xe6llands Storkreds", SmallConstituencies: [3, 30, 52, 29, 31, 10], KMD_ID: 3}, {
            ID: 6,
            Name: "Sj\xe6llands Storkreds",
            SmallConstituencies: [33, 23, 38, 36, 18, 34, 51, 43, 39, 32, 41, 44],
            KMD_ID: 5
        }, {
            ID: 11,
            Name: "Sydjyllands Storkreds",
            SmallConstituencies: [24, 8, 69, 58, 70, 7, 60, 62, 65, 17, 71, 67, 59],
            KMD_ID: 7
        }, {
            ID: 14,
            Name: "Vestjyllands Storkreds",
            SmallConstituencies: [68, 77, 76, 45, 75, 64, 72, 91, 40, 92, 102],
            KMD_ID: 9
        }, {
            ID: 15,
            Name: "\xd8stjyllands Storkreds",
            SmallConstituencies: [86, 88, 73, 74, 84, 85, 87, 80, 81, 82, 79],
            KMD_ID: 8
        }];

        function a(e) {
            return r.find((function (n) {
                return n.ID === e
            }))
        }

        function o(e) {
            return r.find((function (n) {
                return n.KMD_ID === e
            }))
        }

        n.ZP = r
    }, 1509: function (e, n, t) {
        "use strict";
        t.r(n), t.d(n, {
            __N_SSP: function () {
                return $
            }, default: function () {
                return ee
            }
        });
        var r = t(5893), a = t(1100), o = t(7294), i = t(1917), s = t(4929), l = t(1163), u = t(2238),
            c = [0, 1, 2, 4, 5], m = t(8383), I = t(1085);

        function d(e) {
            var n;
            return e ? null === (n = e.filter((function (e) {
                return 0 !== e.value
            }))) || void 0 === n ? void 0 : n.length : 0
        }

        function D(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300;
            if (e) {
                var t = (window.scrollY - e) / 2, r = 0, a = performance.now(), o = function (i) {
                    (r += Math.PI / (n / (i - a))) >= Math.PI ? window.scrollTo(0, e) : (window.scrollTo(0, Math.round(t + t * Math.cos(r)) + e), a = i, window.requestAnimationFrame(o))
                };
                window.requestAnimationFrame(o)
            }
        }

        var _ = function (e) {
            setTimeout((function () {
                var n;
                null === (n = e.getElementsByTagName("h3")[0]) || void 0 === n || n.focus({preventScroll: !0})
            }), 600)
        };

        function N(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20;
            if (e) {
                var r = "scrollBehavior" in document.documentElement.style, a = window.scrollY,
                    o = e.getBoundingClientRect && e.getBoundingClientRect().top - t, i = o < 0,
                    s = document.querySelector(".dre-navigation-auto-hide-container__fixer"),
                    l = s && !s.classList.contains("dre-navigation-auto-hide-container__fixer--hidden"),
                    u = (null === s || void 0 === s ? void 0 : s.getBoundingClientRect().height) || 0,
                    c = 0 === Math.round(o - (l ? u : 0));
                c || setTimeout((function () {
                    var n = o + a - (i ? u : 0);
                    r ? (window.scrollTo({top: n, behavior: "smooth"}), _(e)) : (D(n), _(e))
                }), n)
            }
        }

        var f = t(9050), p = t(6680);

        function C(e, n, t) {
            return n in e ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t, e
        }

        var b = function (e) {
            var n = e.map((function (e) {
                return function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
                        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })))), r.forEach((function (n) {
                            C(e, n, t[n])
                        }))
                    }
                    return e
                }({}, e, {NameWithoutSuffix: "Bornholms Regionskommune" === e.Name ? "Bornholm" : "K\xf8benhavns Kommune" === e.Name ? "K\xf8benhavn" : "Nordfyns Kommune" === e.Name ? "Nordfyn" : "Vesthimmerlands Kommune" === e.Name ? "Vesthimmerland" : e.Name.replace("Kommune", "").trim()})
            }));
            return n
        }([{ID: 1, Name: "Albertslund Kommune", ID_KMD: 165, BIG_CONSTITUENCY_ID: 4}, {
            ID: 2,
            Name: "Aller\xf8d Kommune",
            ID_KMD: 201,
            BIG_CONSTITUENCY_ID: 5
        }, {ID: 5, Name: "Assens Kommune", ID_KMD: 420, BIG_CONSTITUENCY_ID: 10}, {
            ID: 8,
            Name: "Ballerup Kommune",
            ID_KMD: 151,
            BIG_CONSTITUENCY_ID: 4
        }, {ID: 9, Name: "Billund Kommune", ID_KMD: 530, BIG_CONSTITUENCY_ID: 11}, {
            ID: 277,
            Name: "Bornholms Regionskommune",
            ID_KMD: 400,
            BIG_CONSTITUENCY_ID: 9
        }, {ID: 25, Name: "Br\xf8ndby Kommune", ID_KMD: 153, BIG_CONSTITUENCY_ID: 4}, {
            ID: 26,
            Name: "Br\xf8nderslev Kommune",
            ID_KMD: 810,
            BIG_CONSTITUENCY_ID: 17
        }, {ID: 32, Name: "Drag\xf8r Kommune", ID_KMD: 155, BIG_CONSTITUENCY_ID: 2}, {
            ID: 299,
            Name: "Egedal Kommune",
            ID_KMD: 240,
            BIG_CONSTITUENCY_ID: 5
        }, {ID: 39, Name: "Esbjerg Kommune", ID_KMD: 561, BIG_CONSTITUENCY_ID: 11}, {
            ID: 41,
            Name: "Fan\xf8 Kommune",
            ID_KMD: 563,
            BIG_CONSTITUENCY_ID: 11
        }, {ID: 285, Name: "Favrskov Kommune", ID_KMD: 710, BIG_CONSTITUENCY_ID: 15}, {
            ID: 304,
            Name: "Faxe Kommune",
            ID_KMD: 320,
            BIG_CONSTITUENCY_ID: 6
        }, {ID: 47, Name: "Fredensborg Kommune", ID_KMD: 210, BIG_CONSTITUENCY_ID: 5}, {
            ID: 48,
            Name: "Fredericia Kommune",
            ID_KMD: 607,
            BIG_CONSTITUENCY_ID: 11
        }, {ID: 49, Name: "Frederiksberg Kommune", ID_KMD: 147, BIG_CONSTITUENCY_ID: 2}, {
            ID: 50,
            Name: "Frederikshavn Kommune",
            ID_KMD: 813,
            BIG_CONSTITUENCY_ID: 17
        }, {ID: 51, Name: "Frederikssund Kommune", ID_KMD: 250, BIG_CONSTITUENCY_ID: 5}, {
            ID: 296,
            Name: "Fures\xf8 Kommune",
            ID_KMD: 190,
            BIG_CONSTITUENCY_ID: 5
        }, {ID: 289, Name: "Faaborg-Midtfyn Kommune", ID_KMD: 430, BIG_CONSTITUENCY_ID: 10}, {
            ID: 57,
            Name: "Gentofte Kommune",
            ID_KMD: 157,
            BIG_CONSTITUENCY_ID: 4
        }, {ID: 60, Name: "Gladsaxe Kommune", ID_KMD: 159, BIG_CONSTITUENCY_ID: 4}, {
            ID: 62,
            Name: "Glostrup Kommune",
            ID_KMD: 161,
            BIG_CONSTITUENCY_ID: 4
        }, {ID: 65, Name: "Greve Kommune", ID_KMD: 253, BIG_CONSTITUENCY_ID: 6}, {
            ID: 302,
            Name: "Gribskov Kommune",
            ID_KMD: 270,
            BIG_CONSTITUENCY_ID: 5
        }, {ID: 294, Name: "Guldborgsund Kommune", ID_KMD: 376, BIG_CONSTITUENCY_ID: 6}, {
            ID: 72,
            Name: "Haderslev Kommune",
            ID_KMD: 510,
            BIG_CONSTITUENCY_ID: 11
        }, {ID: 303, Name: "Halsn\xe6s Kommune", ID_KMD: 260, BIG_CONSTITUENCY_ID: 5}, {
            ID: 81,
            Name: "Hedensted Kommune",
            ID_KMD: 766,
            BIG_CONSTITUENCY_ID: 15
        }, {ID: 84, Name: "Helsing\xf8r Kommune", ID_KMD: 217, BIG_CONSTITUENCY_ID: 5}, {
            ID: 85,
            Name: "Herlev Kommune",
            ID_KMD: 163,
            BIG_CONSTITUENCY_ID: 4
        }, {ID: 86, Name: "Herning Kommune", ID_KMD: 657, BIG_CONSTITUENCY_ID: 14}, {
            ID: 87,
            Name: "Hiller\xf8d Kommune",
            ID_KMD: 219,
            BIG_CONSTITUENCY_ID: 5
        }, {ID: 90, Name: "Hj\xf8rring Kommune", ID_KMD: 860, BIG_CONSTITUENCY_ID: 17}, {
            ID: 92,
            Name: "Holb\xe6k Kommune",
            ID_KMD: 316,
            BIG_CONSTITUENCY_ID: 6
        }, {ID: 96, Name: "Holstebro Kommune", ID_KMD: 661, BIG_CONSTITUENCY_ID: 14}, {
            ID: 98,
            Name: "Horsens Kommune",
            ID_KMD: 615,
            BIG_CONSTITUENCY_ID: 15
        }, {ID: 102, Name: "Hvidovre Kommune", ID_KMD: 167, BIG_CONSTITUENCY_ID: 4}, {
            ID: 104,
            Name: "H\xf8je-Taastrup Kommune",
            ID_KMD: 169,
            BIG_CONSTITUENCY_ID: 4
        }, {ID: 109, Name: "H\xf8rsholm Kommune", ID_KMD: 223, BIG_CONSTITUENCY_ID: 5}, {
            ID: 286,
            Name: "Ikast-Brande Kommune",
            ID_KMD: 756,
            BIG_CONSTITUENCY_ID: 14
        }, {ID: 112, Name: "Ish\xf8j Kommune", ID_KMD: 183, BIG_CONSTITUENCY_ID: 4}, {
            ID: 280,
            Name: "Jammerbugt Kommune",
            ID_KMD: 849,
            BIG_CONSTITUENCY_ID: 17
        }, {ID: 117, Name: "Kalundborg Kommune", ID_KMD: 326, BIG_CONSTITUENCY_ID: 6}, {
            ID: 120,
            Name: "Kerteminde Kommune",
            ID_KMD: 440,
            BIG_CONSTITUENCY_ID: 10
        }, {ID: 122, Name: "Kolding Kommune", ID_KMD: 621, BIG_CONSTITUENCY_ID: 11}, {
            ID: 124,
            Name: "K\xf8benhavns Kommune",
            ID_KMD: 101,
            BIG_CONSTITUENCY_ID: 2
        }, {ID: 125, Name: "K\xf8ge Kommune", ID_KMD: 259, BIG_CONSTITUENCY_ID: 6}, {
            ID: 290,
            Name: "Langeland Kommune",
            ID_KMD: 482,
            BIG_CONSTITUENCY_ID: 10
        }, {ID: 130, Name: "Lejre Kommune", ID_KMD: 350, BIG_CONSTITUENCY_ID: 6}, {
            ID: 131,
            Name: "Lemvig Kommune",
            ID_KMD: 665,
            BIG_CONSTITUENCY_ID: 14
        }, {ID: 293, Name: "Lolland Kommune", ID_KMD: 360, BIG_CONSTITUENCY_ID: 6}, {
            ID: 134,
            Name: "Lyngby-Taarb\xe6k Kommune",
            ID_KMD: 173,
            BIG_CONSTITUENCY_ID: 4
        }, {ID: 135, Name: "L\xe6s\xf8 Kommune", ID_KMD: 825, BIG_CONSTITUENCY_ID: 17}, {
            ID: 282,
            Name: "Mariagerfjord Kommune",
            ID_KMD: 846,
            BIG_CONSTITUENCY_ID: 17
        }, {ID: 142, Name: "Middelfart Kommune", ID_KMD: 410, BIG_CONSTITUENCY_ID: 10}, {
            ID: 144,
            Name: "Mors\xf8 Kommune",
            ID_KMD: 773,
            BIG_CONSTITUENCY_ID: 17
        }, {ID: 283, Name: "Norddjurs Kommune", ID_KMD: 707, BIG_CONSTITUENCY_ID: 15}, {
            ID: 288,
            Name: "Nordfyns Kommune",
            ID_KMD: 480,
            BIG_CONSTITUENCY_ID: 10
        }, {ID: 152, Name: "Nyborg Kommune", ID_KMD: 450, BIG_CONSTITUENCY_ID: 10}, {
            ID: 156,
            Name: "N\xe6stved Kommune",
            ID_KMD: 370,
            BIG_CONSTITUENCY_ID: 6
        }, {ID: 164, Name: "Odder Kommune", ID_KMD: 727, BIG_CONSTITUENCY_ID: 15}, {
            ID: 165,
            Name: "Odense Kommune",
            ID_KMD: 461,
            BIG_CONSTITUENCY_ID: 10
        }, {ID: 292, Name: "Odsherred Kommune", ID_KMD: 306, BIG_CONSTITUENCY_ID: 6}, {
            ID: 171,
            Name: "Randers Kommune",
            ID_KMD: 730,
            BIG_CONSTITUENCY_ID: 15
        }, {ID: 301, Name: "Rebild Kommune", ID_KMD: 840, BIG_CONSTITUENCY_ID: 17}, {
            ID: 287,
            Name: "Ringk\xf8bing-Skjern Kommune",
            ID_KMD: 760,
            BIG_CONSTITUENCY_ID: 14
        }, {ID: 176, Name: "Ringsted Kommune", ID_KMD: 329, BIG_CONSTITUENCY_ID: 6}, {
            ID: 178,
            Name: "Roskilde Kommune",
            ID_KMD: 265,
            BIG_CONSTITUENCY_ID: 6
        }, {ID: 295, Name: "Rudersdal Kommune", ID_KMD: 230, BIG_CONSTITUENCY_ID: 5}, {
            ID: 187,
            Name: "R\xf8dovre Kommune",
            ID_KMD: 175,
            BIG_CONSTITUENCY_ID: 4
        }, {ID: 193, Name: "Sams\xf8 Kommune", ID_KMD: 741, BIG_CONSTITUENCY_ID: 15}, {
            ID: 195,
            Name: "Silkeborg Kommune",
            ID_KMD: 740,
            BIG_CONSTITUENCY_ID: 14
        }, {ID: 198, Name: "Skanderborg Kommune", ID_KMD: 746, BIG_CONSTITUENCY_ID: 15}, {
            ID: 200,
            Name: "Skive Kommune",
            ID_KMD: 779,
            BIG_CONSTITUENCY_ID: 14
        }, {ID: 207, Name: "Slagelse Kommune", ID_KMD: 330, BIG_CONSTITUENCY_ID: 6}, {
            ID: 209,
            Name: "Solr\xf8d Kommune",
            ID_KMD: 269,
            BIG_CONSTITUENCY_ID: 6
        }, {ID: 210, Name: "Sor\xf8 Kommune", ID_KMD: 340, BIG_CONSTITUENCY_ID: 6}, {
            ID: 214,
            Name: "Stevns Kommune",
            ID_KMD: 336,
            BIG_CONSTITUENCY_ID: 6
        }, {ID: 215, Name: "Struer Kommune", ID_KMD: 671, BIG_CONSTITUENCY_ID: 14}, {
            ID: 221,
            Name: "Svendborg Kommune",
            ID_KMD: 479,
            BIG_CONSTITUENCY_ID: 10
        }, {ID: 284, Name: "Syddjurs Kommune", ID_KMD: 706, BIG_CONSTITUENCY_ID: 15}, {
            ID: 229,
            Name: "S\xf8nderborg Kommune",
            ID_KMD: 540,
            BIG_CONSTITUENCY_ID: 11
        }, {ID: 233, Name: "Thisted Kommune", ID_KMD: 787, BIG_CONSTITUENCY_ID: 17}, {
            ID: 244,
            Name: "T\xf8nder Kommune",
            ID_KMD: 550,
            BIG_CONSTITUENCY_ID: 11
        }, {ID: 246, Name: "T\xe5rnby Kommune", ID_KMD: 185, BIG_CONSTITUENCY_ID: 2}, {
            ID: 305,
            Name: "Vallensb\xe6k Kommune",
            ID_KMD: 187,
            BIG_CONSTITUENCY_ID: 4
        }, {ID: 252, Name: "Varde Kommune", ID_KMD: 573, BIG_CONSTITUENCY_ID: 11}, {
            ID: 253,
            Name: "Vejen Kommune",
            ID_KMD: 575,
            BIG_CONSTITUENCY_ID: 11
        }, {ID: 254, Name: "Vejle Kommune", ID_KMD: 630, BIG_CONSTITUENCY_ID: 11}, {
            ID: 281,
            Name: "Vesthimmerlands Kommune",
            ID_KMD: 820,
            BIG_CONSTITUENCY_ID: 17
        }, {ID: 255, Name: "Viborg Kommune", ID_KMD: 791, BIG_CONSTITUENCY_ID: 14}, {
            ID: 260,
            Name: "Vordingborg Kommune",
            ID_KMD: 390,
            BIG_CONSTITUENCY_ID: 6
        }, {ID: 291, Name: "\xc6r\xf8 Kommune", ID_KMD: 492, BIG_CONSTITUENCY_ID: 10}, {
            ID: 266,
            Name: "Aabenraa Kommune",
            ID_KMD: 580,
            BIG_CONSTITUENCY_ID: 11
        }, {ID: 269, Name: "Aalborg Kommune", ID_KMD: 851, BIG_CONSTITUENCY_ID: 17}, {
            ID: 271,
            Name: "Aarhus Kommune",
            ID_KMD: 751,
            BIG_CONSTITUENCY_ID: 15
        }]), g = b, h = t(4812), y = t(2578), T = t.n(y);

        function S(e, n) {
            (null == n || n > e.length) && (n = e.length);
            for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
            return r
        }

        function v(e, n) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, n) {
                var t = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != t) {
                    var r, a, o = [], i = !0, s = !1;
                    try {
                        for (t = t.call(e); !(i = (r = t.next()).done) && (o.push(r.value), !n || o.length !== n); i = !0) ;
                    } catch (l) {
                        s = !0, a = l
                    } finally {
                        try {
                            i || null == t.return || t.return()
                        } finally {
                            if (s) throw a
                        }
                    }
                    return o
                }
            }(e, n) || function (e, n) {
                if (!e) return;
                if ("string" === typeof e) return S(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === t && e.constructor && (t = e.constructor.name);
                if ("Map" === t || "Set" === t) return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return S(e, n)
            }(e, n) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        var K = g.map((function (e) {
            return {value: e, label: e.NameWithoutSuffix}
        }));

        function O(e) {
            var n, t = e.canSubmit, a = e.onSubmit, i = e.processing, s = v((0, u._)("municipality"), 2), l = s[0],
                c = s[1], m = (0, o.useState)(l), I = m[0], d = m[1];
            (0, o.useEffect)((function () {
                l && l.label !== (null === I || void 0 === I ? void 0 : I.label) && d(l)
            }), [l]);
            var D = (0, o.useCallback)((function (e) {
                d(e), c(e)
            }), []);
            return (0, r.jsxs)("div", {
                className: T().container,
                children: [(0, r.jsx)(h.Z, {
                    optionList: K,
                    onChange: D,
                    onButtonClick: a,
                    showButton: !0,
                    buttonText: "Se resultat",
                    placeholder: "V\xe6lg kommune",
                    href: "/kandidattest/resultat",
                    buttonDisabled: !I || !t,
                    buttonDisabledAriaLabel: "Se resultat - Du har ikke svaret p\xe5 alle sp\xf8rgsm\xe5l",
                    buttonTrackingContextName: "submit-result",
                    processing: i,
                    value: I
                }), (null === I || void 0 === I ? void 0 : I.value.BIG_CONSTITUENCY_ID) && (0, r.jsx)("div", {
                    className: T().bigConstituencyInfo,
                    children: (0, r.jsxs)("p", {
                        children: ["Du kan stemme p\xe5 kandidater i:", (0, r.jsx)("br", {}), (0, r.jsx)("span", {
                            className: T().bigConstituency,
                            children: null === (n = (0, p.__)(I.value.BIG_CONSTITUENCY_ID)) || void 0 === n ? void 0 : n.Name
                        })]
                    })
                })]
            })
        }

        var x = t(3938), E = t(414), M = t(9883), B = t(9380), k = t(7881), G = t(8132), j = t(1943), U = t.n(j);

        function w(e) {
            return 1 === e || "1" === e ? "et" : e
        }

        var Y = t(2718), L = t.n(Y);

        function A(e) {
            var n = e.questions, t = e.answers, a = e.stickyThreshold, i = e.onCircleClick, s = function () {
                    !g && a && a.current && (g = !0, setTimeout((function () {
                        g = !1
                    }), 50), _(a.current.getBoundingClientRect().top >= (window.innerHeight || document.documentElement.clientHeight)))
                }, l = function (e) {
                    return function () {
                        i(e)
                    }
                }, u = (0, o.useState)(0), c = u[0], m = u[1], I = (0, o.useState)(!0), D = I[0], _ = I[1],
                N = (0, o.useState)(!1), f = N[0], p = N[1], C = (0, E.Z)(), b = (0, o.useRef)(null), g = !1;
            (0, o.useEffect)((function () {
                m(d(t))
            }), [t]), (0, o.useEffect)((function () {
                return window.addEventListener("scroll", s), function () {
                    window.removeEventListener("scroll", s)
                }
            }), []), (0, o.useEffect)((function () {
                C && "xs" !== C && "xxs" !== C && p(!0)
            }), [C]);
            var h = (0, o.useCallback)((function () {
                p((function (e) {
                    return !e
                }))
            }), []);
            return (0, r.jsx)(M.Z.Provider, {
                context: {name: "question-counter"}, children: (0, r.jsxs)("main", {
                    "aria-labelledby": "questionCounter",
                    children: [D && (0, r.jsx)("div", {
                        className: "".concat(L().container, " ").concat(f ? "" : L().isCollapsed),
                        style: {height: b.current ? b.current.getBoundingClientRect().height : 0}
                    }), (0, r.jsx)("div", {
                        ref: b,
                        className: "".concat(L().container, " ").concat(D ? L().isSticky : ""),
                        children: (0, r.jsxs)("div", {
                            className: L().wrapper,
                            children: [(0, r.jsx)(M.Z.Provider, {
                                context: {name: "".concat(f ? "hide" : "show", "-question-counter")},
                                children: (0, r.jsx)(B.Z, {
                                    className: L().arrow,
                                    onClick: h,
                                    "aria-controls": "questionContainer",
                                    "aria-live": "assertive",
                                    "aria-expanded": f,
                                    "aria-label": "".concat(f ? "gem" : "vis", " sp\xf8rgsm\xe5ls t\xe6ller"),
                                    children: f ? (0, r.jsx)(k.Z, {
                                        size: "small",
                                        color: U().black
                                    }) : (0, r.jsx)(G.Z, {size: "small", color: U().black})
                                })
                            }), (0, r.jsx)("div", {
                                className: L().title,
                                children: (0, r.jsxs)("h5", {
                                    id: "questionCounter",
                                    "aria-label": "Du har svaret p\xe5 ".concat(w(c), " ud af ").concat(n.length, " sp\xf8rgsm\xe5l, herunder kan du hurtigt navigere til ubesvarede sp\xf8rgsm\xe5l"),
                                    children: ["Du har svaret p\xe5", " ", (0, r.jsxs)("b", {children: [c, "/", n.length]}), " ", "sp\xf8rgsm\xe5l"]
                                })
                            }), (0, r.jsx)("div", {
                                id: "questionContainer",
                                className: "".concat(L().innerCircleContainer, " ").concat(f ? "" : L().isCollapsed),
                                "aria-hidden": !f,
                                "data-testid": "circle-container",
                                children: (0, r.jsx)("div", {
                                    className: L().innerSpacing,
                                    children: n.map((function (e, n) {
                                        var a = null === t || void 0 === t ? void 0 : t.find((function (n) {
                                            return n.questionID === e.ID && 0 !== n.value
                                        }));
                                        return (0, r.jsx)(M.Z.Provider, {
                                            context: {name: "".concat(a ? "answered" : "unanswered", "-question")},
                                            children: (0, r.jsx)(B.Z, {
                                                onClick: l(n),
                                                tabIndex: f ? void 0 : "-1",
                                                "aria-label": "".concat(a ? "besvaret" : "ikke besvaret", ", sp\xf8rgsm\xe5l nummer ").concat(w(n + 1), " er ").concat(a ? "" : "ikke ", "besvaret, klik for g\xe5 til sp\xf8rgsm\xe5l nummer ").concat(w(n + 1)),
                                                children: (0, r.jsx)("div", {className: "".concat(L().circle, " ").concat(a ? L().answered : L().unanswered)})
                                            })
                                        }, e.ID)
                                    }))
                                })
                            })]
                        })
                    })]
                })
            })
        }

        var P = t(1303), H = t(6825), F = t.n(H);

        function R(e, n) {
            (null == n || n > e.length) && (n = e.length);
            for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
            return r
        }

        function V(e, n, t) {
            return n in e ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t, e
        }

        function Z(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t);
                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })))), r.forEach((function (n) {
                    V(e, n, t[n])
                }))
            }
            return e
        }

        function Q(e, n) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, n) {
                var t = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != t) {
                    var r, a, o = [], i = !0, s = !1;
                    try {
                        for (t = t.call(e); !(i = (r = t.next()).done) && (o.push(r.value), !n || o.length !== n); i = !0) ;
                    } catch (l) {
                        s = !0, a = l
                    } finally {
                        try {
                            i || null == t.return || t.return()
                        } finally {
                            if (s) throw a
                        }
                    }
                    return o
                }
            }(e, n) || z(e, n) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function q(e) {
            return function (e) {
                if (Array.isArray(e)) return R(e)
            }(e) || function (e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || z(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function z(e, n) {
            if (e) {
                if ("string" === typeof e) return R(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? R(e, n) : void 0
            }
        }

        function W(e) {
            var n = e.questions, t = e.stickyCounterThreshold, a = Q((0, u._)("answers", {}), 2), i = a[0], s = a[1],
                D = (0, o.useState)((function () {
                    return (null === i || void 0 === i ? void 0 : i.appStateAnswers) || []
                })), _ = D[0], p = D[1], C = (0, o.useState)([]), b = C[0], g = C[1], h = (0, o.useMemo)((function () {
                    return d(_)
                }), [_]), y = (0, o.useState)(h > 0), T = y[0], S = y[1], v = (0, o.useRef)(null), K = (0, l.useRouter)(),
                E = (0, o.useState)(!1), M = E[0], B = E[1], k = (0, o.useState)(!1), G = k[0], j = k[1],
                U = (0, o.useState)(!1), w = U[0], Y = U[1], L = (0, o.useState)(!1), H = L[0], R = L[1];
            (0, o.useEffect)((function () {
                R(!0)
            }), []), (0, o.useEffect)((function () {
                if (n && n.length) {
                    var e = n.reduce((function (e, n, t) {
                        var r = q(e);
                        return r[t] = (0, o.createRef)(), r
                    }), []);
                    g(e)
                }
            }), [n]), (0, o.useEffect)((function () {
                var e = h >= n.length - 3;
                !w && e ? Y(!0) : w && !e && Y(!1), h > 0 && !T && S(!0)
            }), [h, n]), (0, o.useEffect)((function () {
                var e, t = null === i || void 0 === i ? void 0 : i.appStateAnswers;
                t && (0, m.Z)(t, n) ? p(t) : (H && !_.length || t && !(0, m.Z)(t, n)) && (e = n, p((0, I.Z)(e)), s({
                    appStateAnswers: (0, I.Z)(e),
                    submittedAnswers: void 0
                }))
            }), [i, n]);
            var V, z, W = (0, o.useCallback)((function (e) {
                return function (n, t) {
                    var r = parseInt(n.target.value, 10), a = q(_), o = a.find((function (n) {
                        return n.questionID === e.ID
                    }));
                    if (o && function (e) {
                        return c.includes(e)
                    }(r) && (o.value = r, p(a), s(Z({}, i, {appStateAnswers: a})), T || S(!0), t)) {
                        var l = o.index + 1;
                        l === b.length && (null === v || void 0 === v ? void 0 : v.current) ? N(v.current, void 0, 20) : X(l)
                    }
                }
            }), [n, _, b, i]), J = (0, o.useCallback)((function () {
                if (!M) {
                    var e = n.length - 3;
                    if (h < e) j(!0); else {
                        var t = null === _ || void 0 === _ ? void 0 : _.map((function (e) {
                            return e.value
                        }));
                        B(!0), j(!1), s(Z({}, i, {submittedAnswers: t}))
                    }
                }
            }), [M, K, h, i, n, _]), X = (0, o.useCallback)((function (e, n) {
                e > -1 && b[e] && b[e].current && N(b[e].current, n)
            }), [b, N]);
            return (0, r.jsxs)("div", {
                className: F().container,
                children: [P.Z, (V = n, z = Array, (null != z && "undefined" !== typeof Symbol && z[Symbol.hasInstance] ? !!z[Symbol.hasInstance](V) : V instanceof z) && n.length > 0 && (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("form", {
                        onSubmit: function (e) {
                            e.preventDefault()
                        }, children: n.map((function (e, t) {
                            var a;
                            return (0, r.jsx)(x.Z, {
                                ref: b[t],
                                index: t + 1,
                                noOfQuestions: n.length,
                                category: e.Title,
                                text: e.Question,
                                argumentFor: e.ArgumentFor,
                                argumentAgainst: e.ArgumentAgainst,
                                onSelectAnswer: W(e),
                                selectedAnswer: _ && (null === (a = _.find((function (n) {
                                    return n.questionID === e.ID
                                }))) || void 0 === a ? void 0 : a.value) || void 0
                            }, "".concat(e.ID))
                        }))
                    }), G && (0, r.jsx)("p", {
                        style: {color: "red"},
                        children: "Du skal besvare alle sp\xf8rgsm\xe5l for at kunne indsende sit svar."
                    }), (0, r.jsxs)("div", {
                        className: F().callToAction,
                        ref: v,
                        children: [(0, r.jsx)("h3", {
                            className: F().submitHeadline,
                            children: "Se kandidater du kan stemme p\xe5"
                        }), (0, r.jsxs)("p", {children: ["Du skal svare p\xe5 mindst ", n.length - 3, " sp\xf8rgsm\xe5l og v\xe6lge din kommune, s\xe5 vi kan matche dig med de kandidater, der er opstillet i din valgkreds."]})]
                    }), (0, r.jsx)(O, {
                        canSubmit: w,
                        onSubmit: J,
                        processing: M
                    }), (0, r.jsx)(f.Z, {}), T && (0, r.jsx)(A, {
                        questions: n,
                        stickyThreshold: t,
                        answers: _,
                        onCircleClick: X
                    })]
                }))]
            })
        }

        var J = t(2916), X = t.n(J), $ = !0;

        function ee(e) {
            var n = e.questions, t = e.siteConfig, l = e.hasApiError, u = (0, o.useRef)(null);
            return (0, r.jsx)(a.Z.Provider, {
                productName: "drdk",
                applicationName: "dr-election-fv22",
                pageName: "test-frontpage",
                allowedEvents: [/^test-frontpage:.*:click$/],
                children: (0, r.jsx)(s.Z, {
                    siteConfig: t,
                    siteHeader: "Kandidattest",
                    title: "Kandidattesten - Tag DR's Valgtest til Folketingsvalget 2022 | DR",
                    description: "Hvem er du mest enig med? Bliv klogere p\xe5 politikernes holdninger inden du skal s\xe6tte dit kryds. Tag DR's Kandidattest til Folketingsvalget her.",
                    children: (0, r.jsx)("div", {
                        className: X().pageContainer,
                        children: l ? (0, r.jsx)(i.Z, {}) : (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("div", {
                                className: X().introContainer,
                                children: (0, r.jsx)("div", {
                                    className: X().introWrapper,
                                    children: (0, r.jsxs)("div", {
                                        className: X().introText,
                                        children: [(0, r.jsx)("h2", {children: "Hvem er du mest enig med?"}), (0, r.jsx)("p", {children: "Med DR\xb4s kandidattest kan du se, hvilke kandidater du er mest enig med. M\xe5ske kan du endda blive en smule klogere p\xe5, hvem du skal stemme p\xe5 til folketingsvalget."}), (0, r.jsx)("div", {
                                            className: X().introSubText,
                                            children: (0, r.jsx)("p", {children: "Testen best\xe5r af ".concat(Array.isArray(n) ? n.length : "", " sp\xf8rgsm\xe5l, og du kan springe op til tre sp\xf8rgsm\xe5l over.")})
                                        })]
                                    })
                                })
                            }), (0, r.jsx)(W, {questions: n, stickyCounterThreshold: u}), (0, r.jsx)("div", {ref: u})]
                        })
                    })
                })
            })
        }
    }, 2349: function (e) {
        e.exports = {
            container: "AreaSelector_container__q52I_",
            selector: "AreaSelector_selector___rkQK",
            input: "AreaSelector_input__IXWRa",
            buttonContainer: "AreaSelector_buttonContainer__HHr6c",
            buttonContent: "AreaSelector_buttonContent__YbfYE",
            spinner: "AreaSelector_spinner__o0EJL",
            isVisible: "AreaSelector_isVisible__i70zK",
            buttonText: "AreaSelector_buttonText__2szM7",
            isHidden: "AreaSelector_isHidden__4OLVO"
        }
    }, 2578: function (e) {
        e.exports = {
            container: "MunicipalitySelector_container__yrQCK",
            bigConstituencyInfo: "MunicipalitySelector_bigConstituencyInfo__kbEeV",
            bigConstituency: "MunicipalitySelector_bigConstituency__xthc0"
        }
    }, 2718: function (e) {
        e.exports = {
            white: "#fff",
            black: "#000",
            noVote: "#b2b2b2",
            drPrimaryRed: "#ff001e",
            smileyStroke: "#fab939",
            smileyGradientStop1: "#ffffac",
            smileyGradientStop2: "#fedb45",
            smileySelectedGradientStop1: "#fffe30",
            smileySelectedGradientStop2: "#fed217",
            smileyEyes: "#7e3e00",
            smileyMouth: "#9e6912",
            deviationPositive: "#19945d",
            deviationNegative: "#ff1a34",
            partyA: "#a82721",
            partyALight: "#eb9994",
            partyB: "#733280",
            partyBLight: "#c29bc9",
            partyC: "#96b226",
            partyCLight: "#d4e495",
            partyD: "#127b7f",
            partyDLight: "#88c5c8",
            partyF: "#e07ea8",
            partyFLight: "#fcc2dc",
            partyG: "#beaa64",
            partyGLight: "#ded197",
            partyI: "#3fb2be",
            partyILight: "#9fe4ea",
            partyK: "#8b8474",
            partyKLight: "#cdc9be",
            partyM: "#b48cd2",
            partyMLight: "#d2bedc",
            partyO: "#eac73e",
            partyOLight: "#ffeba0",
            partyQ: "#5abe82",
            partyQLight: "#93dbb2",
            partyV: "#254264",
            partyVLight: "#95a8ba",
            "party\xd8": "#e6801a",
            "party\xc6": "#7896d2",
            "party\xc6Light": "#b3c4e6",
            "party\xd8Light": "#ffc58e",
            "party\xc5": "#2b8738",
            "party\xc5Light": "#9bd1a2",
            partyUnknown: "#b2b2b2",
            partyUnknownLight: "#d5d5d5",
            coalitionBlue: "#87b4dc",
            container: "QuestionCounter_container__a_iGz",
            isSticky: "QuestionCounter_isSticky__b4aKB",
            wrapper: "QuestionCounter_wrapper__fz42I",
            arrow: "QuestionCounter_arrow__JEQ0V",
            title: "QuestionCounter_title__4obZy",
            innerCircleContainer: "QuestionCounter_innerCircleContainer__Nuu3_",
            isCollapsed: "QuestionCounter_isCollapsed__oczpk",
            innerSpacing: "QuestionCounter_innerSpacing__Fbvd_",
            circle: "QuestionCounter_circle__FRjV9",
            answered: "QuestionCounter_answered__Ck0sn",
            unanswered: "QuestionCounter_unanswered__cT0nT"
        }
    }, 6825: function (e) {
        e.exports = {
            white: "#fff",
            black: "#000",
            noVote: "#b2b2b2",
            drPrimaryRed: "#ff001e",
            smileyStroke: "#fab939",
            smileyGradientStop1: "#ffffac",
            smileyGradientStop2: "#fedb45",
            smileySelectedGradientStop1: "#fffe30",
            smileySelectedGradientStop2: "#fed217",
            smileyEyes: "#7e3e00",
            smileyMouth: "#9e6912",
            deviationPositive: "#19945d",
            deviationNegative: "#ff1a34",
            partyA: "#a82721",
            partyALight: "#eb9994",
            partyB: "#733280",
            partyBLight: "#c29bc9",
            partyC: "#96b226",
            partyCLight: "#d4e495",
            partyD: "#127b7f",
            partyDLight: "#88c5c8",
            partyF: "#e07ea8",
            partyFLight: "#fcc2dc",
            partyG: "#beaa64",
            partyGLight: "#ded197",
            partyI: "#3fb2be",
            partyILight: "#9fe4ea",
            partyK: "#8b8474",
            partyKLight: "#cdc9be",
            partyM: "#b48cd2",
            partyMLight: "#d2bedc",
            partyO: "#eac73e",
            partyOLight: "#ffeba0",
            partyQ: "#5abe82",
            partyQLight: "#93dbb2",
            partyV: "#254264",
            partyVLight: "#95a8ba",
            "party\xd8": "#e6801a",
            "party\xc6": "#7896d2",
            "party\xc6Light": "#b3c4e6",
            "party\xd8Light": "#ffc58e",
            "party\xc5": "#2b8738",
            "party\xc5Light": "#9bd1a2",
            partyUnknown: "#b2b2b2",
            partyUnknownLight: "#d5d5d5",
            coalitionBlue: "#87b4dc",
            container: "TestForm_container__pGQ0C",
            callToAction: "TestForm_callToAction___ypA1",
            submitHeadline: "TestForm_submitHeadline__tuh40"
        }
    }, 2916: function (e) {
        e.exports = {
            white: "#fff",
            black: "#000",
            noVote: "#b2b2b2",
            drPrimaryRed: "#ff001e",
            smileyStroke: "#fab939",
            smileyGradientStop1: "#ffffac",
            smileyGradientStop2: "#fedb45",
            smileySelectedGradientStop1: "#fffe30",
            smileySelectedGradientStop2: "#fed217",
            smileyEyes: "#7e3e00",
            smileyMouth: "#9e6912",
            deviationPositive: "#19945d",
            deviationNegative: "#ff1a34",
            partyA: "#a82721",
            partyALight: "#eb9994",
            partyB: "#733280",
            partyBLight: "#c29bc9",
            partyC: "#96b226",
            partyCLight: "#d4e495",
            partyD: "#127b7f",
            partyDLight: "#88c5c8",
            partyF: "#e07ea8",
            partyFLight: "#fcc2dc",
            partyG: "#beaa64",
            partyGLight: "#ded197",
            partyI: "#3fb2be",
            partyILight: "#9fe4ea",
            partyK: "#8b8474",
            partyKLight: "#cdc9be",
            partyM: "#b48cd2",
            partyMLight: "#d2bedc",
            partyO: "#eac73e",
            partyOLight: "#ffeba0",
            partyQ: "#5abe82",
            partyQLight: "#93dbb2",
            partyV: "#254264",
            partyVLight: "#95a8ba",
            "party\xd8": "#e6801a",
            "party\xc6": "#7896d2",
            "party\xc6Light": "#b3c4e6",
            "party\xd8Light": "#ffc58e",
            "party\xc5": "#2b8738",
            "party\xc5Light": "#9bd1a2",
            partyUnknown: "#b2b2b2",
            partyUnknownLight: "#d5d5d5",
            coalitionBlue: "#87b4dc",
            pageContainer: "kandidattest_pageContainer__UE_7a",
            introText: "kandidattest_introText__qnvQc",
            introSubText: "kandidattest_introSubText__PvM9P",
            splitter: "kandidattest_splitter__w4tn_"
        }
    }
}, function (e) {
    e.O(0, [549, 104, 244, 294, 675, 354, 798, 542, 215, 774, 888, 179], (function () {
        return n = 4056, e(e.s = n);
        var n
    }));
    var n = e.O();
    _N_E = n
}]);