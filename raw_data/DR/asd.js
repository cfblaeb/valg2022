(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[168], {
    533: function (e, t, a) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/din-stemmeseddel/kandidater/[kandidat]", function () {
            return a(6613)
        }])
    }, 5342: function (e, t, a) {
        "use strict";
        a.d(t, {
            Z: function () {
                return f
            }
        });
        var n = a(5893), r = a(9883), i = a(5976), c = a(1664), d = a.n(c), o = (a(7294), a(7108)), s = a(2609),
            l = a(8666), p = a(5690), u = a(684), h = a.n(u);

        function y(e, t, a) {
            return (0, n.jsx)(r.Z.Provider, {
                context: {name: a},
                children: (0, n.jsx)(d(), {
                    href: "/din-stemmeseddel/kandidater/".concat(t),
                    passHref: !0,
                    children: (0, n.jsx)(i.Z, {className: h().link, children: e})
                })
            })
        }

        function f(e) {
            var t, a = e.name, c = e.linedUpForPartyCode, u = e.lineUps, f = e.imageUrl, m = e.urlKey, v = e.columnOnly,
                g = e.isClickable, b = e.matchPercent, _ = e.showPartyLetter, x = e.showCandidateComparisonLink,
                L = (null === (t = u.find((function (e) {
                    return "Bigconstituency" === e.groupType
                }))) || void 0 === t ? void 0 : t.lineUpName) || "";
            return (0, n.jsxs)("div", {
                className: "".concat(h().container, " ").concat(v ? h().columnOnly : ""),
                children: [(0, n.jsx)("div", {
                    className: h().candidatePhoto,
                    children: (0, n.jsx)(s.Z, {
                        condition: g,
                        wrapper: function (e) {
                            return y(e, m, "candidate-photo")
                        },
                        children: (0, n.jsxs)(n.Fragment, {
                            children: [_ && c && (0, n.jsx)("div", {
                                className: h().letterWrapper,
                                children: (0, n.jsx)(p.Z, {letter: c, size: "S"})
                            }), (0, n.jsx)(l.Z, {
                                imageUrl: f,
                                candidateName: a,
                                lineUp: L,
                                partyLetter: c,
                                size: "large",
                                urlKey: m
                            }), b && (0, n.jsx)("div", {
                                className: h().matchPercentWrapper,
                                children: (0, n.jsx)("div", {
                                    className: h().matchPercent,
                                    children: (0, n.jsxs)("p", {
                                        children: [(0, n.jsx)("span", {
                                            className: h().matchPercentBold,
                                            children: b
                                        }), (0, n.jsx)("span", {
                                            className: h().matchPercentSlim,
                                            children: "%"
                                        }), " enighed"]
                                    })
                                })
                            })]
                        })
                    })
                }), (0, n.jsxs)("div", {
                    className: h().candidateInfo,
                    children: [(0, n.jsx)(s.Z, {
                        condition: g, wrapper: function (e) {
                            return y(e, m, "candidate-name")
                        }, children: (0, n.jsx)("h2", {className: h().name, children: a})
                    }), (0, n.jsx)("p", {
                        className: h().partyName,
                        children: c ? o.Z[c].Name : "L\xf8sg\xe6nger"
                    }), (0, n.jsx)("p", {
                        className: h().lineUp,
                        children: L
                    }), x && b && (0, n.jsx)(r.Z.Provider, {
                        context: {name: "candidate-compare-answers"},
                        children: (0, n.jsx)(d(), {
                            href: "/din-stemmeseddel/kandidater/".concat(m),
                            passHref: !0,
                            children: (0, n.jsx)(i.Z, {
                                className: h().compareAnswers,
                                children: (0, n.jsx)("p", {children: "Sammenlign jeres svar"})
                            })
                        })
                    })]
                })]
            })
        }
    }, 5690: function (e, t, a) {
        "use strict";
        a.d(t, {
            Z: function () {
                return o
            }
        });
        var n = a(5893), r = a(1943), i = a.n(r), c = a(9907), d = a.n(c);

        function o(e) {
            var t = e.letter, a = e.size;
            return (0, n.jsx)("div", {
                className: "".concat(d().partyLetterContainer, " ").concat(d()["partyLetterContainer".concat(a)]),
                style: {backgroundColor: i()["party".concat(t)]},
                "aria-hidden": !0,
                children: (0, n.jsx)("span", {children: t})
            })
        }
    }, 6613: function (e, t, a) {
        "use strict";
        a.r(t), a.d(t, {
            __N_SSP: function () {
                return de
            }, default: function () {
                return oe
            }
        });
        var n = a(5893), r = a(1100), i = a(1917), c = a(4051), d = a.n(c), o = a(7294), s = a(2238), l = a(8383),
            p = a(8593), u = a(1085), h = a(2416), y = a(9883), f = a(6676), m = a(9384), v = a(3749), g = a(3938),
            b = a(1303), _ = a(3724), x = a.n(_);

        function L(e) {
            var t, a = e.candidateAnswers, r = e.userAnswers, i = e.questions, c = e.candidate, d = (0, o.useState)(!0),
                s = d[0], l = d[1],
                p = !!(null === r || void 0 === r || null === (t = r.submittedAnswers) || void 0 === t ? void 0 : t.length) && r.submittedAnswers.length > 0,
                u = Array.isArray(i) ? i.slice(0, s ? 3 : 1 / 0) : [], h = c || {}, _ = h.Picture,
                L = h.LinedUpForPartyCode, j = h.Firstname, C = h.LastName, w = (0, v.Z)(j),
                k = (0, o.useCallback)((function () {
                    l(!1)
                }), []);
            return (0, n.jsx)(y.Z.Provider, {
                context: {name: "candidate-answers"},
                children: (0, n.jsxs)("div", {
                    className: x().container,
                    children: [b.Z, (0, n.jsxs)("div", {
                        className: x().questionsContainer,
                        children: [(0, n.jsx)("h3", {
                            className: x().headline,
                            children: p ? "Sammenlign jeres svar" : "Se ".concat(w, " svar")
                        }), u.map((function (e, t) {
                            var c;
                            return (0, n.jsx)(g.Z, {
                                index: t + 1,
                                noOfQuestions: i.length,
                                category: e.Title,
                                text: e.Question,
                                candidateAnswer: null === a || void 0 === a ? void 0 : a.find((function (t) {
                                    return (null === t || void 0 === t ? void 0 : t.QuestionID) === e.ID
                                })),
                                userAnswer: (null === r || void 0 === r || null === (c = r.submittedAnswers) || void 0 === c ? void 0 : c[t]) || void 0,
                                candidatePhoto: _,
                                candidatePartyLetter: L,
                                candidateFirstName: j,
                                candidateLastName: C,
                                isOnCandidatePage: !0
                            }, e.ID)
                        })), s && (null === i || void 0 === i ? void 0 : i.length) > 3 && (0, n.jsx)(y.Z.Provider, {
                            context: {name: "show-all-answers"},
                            children: (0, n.jsx)("div", {
                                className: x().expandButton,
                                children: (0, n.jsx)(f.Z, {
                                    onClick: k,
                                    ariaLabel: "Vis alle svar",
                                    icon: m.Z,
                                    variant: "secondary",
                                    children: "Vis alle"
                                })
                            })
                        })]
                    })]
                })
            })
        }

        var j = a(5342), C = a(5976), w = a(1214);

        function k(e) {
            return o.createElement(w.Z, e, o.createElement("svg", {viewBox: "0 0 24 24"}, o.createElement("circle", {
                cx: "12",
                cy: "12",
                r: "2"
            }), o.createElement("path", {d: "M16 6.5H8c-.8 0-1.5.7-1.5 1.5v8c0 .8.7 1.5 1.5 1.5h8c.8 0 1.5-.7 1.5-1.5V8c0-.8-.7-1.5-1.5-1.5zm-4 9c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm3.7-6.2c-.5 0-1-.4-1-1 0-.5.4-1 1-1 .5 0 1 .4 1 1 0 .5-.5 1-1 1z"}), o.createElement("path", {d: "M2 2v20h20V2H2zm17 14c0 1.7-1.3 3-3 3H8c-1.7 0-3-1.3-3-3V8c0-1.7 1.3-3 3-3h8c1.7 0 3 1.3 3 3v8z"})))
        }

        function N(e) {
            return o.createElement(w.Z, e, o.createElement("svg", {viewBox: "0 0 24 24"}, o.createElement("path", {d: "M2 2v20h9v-8H9v-2h2v-2c0-2.2 1.8-4 4-4h1v2h-1c-1.1 0-2 .9-2 2v2h3v2h-3v8h9V2H2z"})))
        }

        function S(e) {
            return o.createElement(w.Z, e, o.createElement("svg", {viewBox: "0 0 24 24"}, o.createElement("path", {d: "M2 2v20h20V2H2zm14 10h-5v2c0 1.1.9 2 2 2h3v2h-3c-2.2 0-4-1.8-4-4V6h2v4h5v2z"})))
        }

        function P(e) {
            return o.createElement(w.Z, e, o.createElement("svg", {viewBox: "0 0 24 24"}, o.createElement("path", {d: "M7 21.9c-1.3 0-2.6-.5-3.5-1.5-2-2-1.4-5.6.5-7.5l3.8-3.8c1.9-1.9 5.1-2 7.1 0l-1.4 1.4c-1.2-1.2-3.1-1.2-4.2 0l-3.8 3.8C4.3 15.5 3.9 17.8 5 19c1.2 1.2 3.1 1.2 4.2 0l1.4 1.4c-1 1.1-2.3 1.5-3.6 1.5z"}), o.createElement("path", {d: "M12.7 16.3c-1.3 0-2.6-.5-3.5-1.5l1.4-1.4c1.1 1.1 3.1 1.1 4.2 0L19 9.2c.6-.6.9-1.3.9-2.1S19.6 5.5 19 5c-1.1-1.1-3.1-1.1-4.2 0l-1.4-1.4c.9-.9 2.2-1.5 3.5-1.5s2.6.5 3.5 1.5 1.5 2.2 1.5 3.5c0 1.3-.5 2.6-1.5 3.5l-4.2 4.2c-.9 1-2.2 1.5-3.5 1.5z"})))
        }

        var B = a(6850), A = a.n(B);

        function E(e) {
            var t = e.twitter, a = e.facebook, r = e.instagram, i = e.website, c = e.candidateName, d = function (e) {
                return e.startsWith("http") ? e : "//".concat(e)
            };
            return (0, n.jsxs)("div", {
                className: A().container,
                children: [r && (0, n.jsx)(C.Z, {
                    href: d(r),
                    target: "_blank",
                    rel: "noreferrer",
                    "aria-label": "Link til Instagram for ".concat(c),
                    children: (0, n.jsx)(k, {size: "x-small"})
                }), a && (0, n.jsx)(C.Z, {
                    href: d(a),
                    target: "_blank",
                    rel: "noreferrer",
                    "aria-label": "Link til Facebook for ".concat(c),
                    children: (0, n.jsx)(N, {size: "x-small"})
                }), t && (0, n.jsx)(C.Z, {
                    href: d(t),
                    target: "_blank",
                    rel: "noreferrer",
                    "aria-label": "Link til Twitter for ".concat(c),
                    children: (0, n.jsx)(S, {size: "x-small"})
                }), i && (0, n.jsx)(C.Z, {
                    href: d(i),
                    target: "_blank",
                    rel: "noreferrer",
                    "aria-label": "Link til webside for ".concat(c),
                    children: (0, n.jsx)(P, {size: "x-small"})
                })]
            })
        }

        var I = a(7101), Z = a.n(I);

        function M(e) {
            var t, a, r, i = e.candidate, c = i.Facebook, d = i.Instagram, o = i.Twitter, s = i.Homepage, l = i.City,
                p = i.Education,
                u = null === i || void 0 === i || null === (t = i.ElectionHistory) || void 0 === t ? void 0 : t[0].election,
                h = null === (r = null === i || void 0 === i || null === (a = i.ElectionHistory) || void 0 === a ? void 0 : a.find((function (e) {
                    return "1" === e.chosen
                }))) || void 0 === r ? void 0 : r.election;
            return (0, n.jsxs)("div", {
                className: Z().container,
                children: [(0, n.jsx)("h3", {
                    className: Z().headline,
                    children: "Om ".concat(null === i || void 0 === i ? void 0 : i.Firstname, " ").concat(null === i || void 0 === i ? void 0 : i.LastName)
                }), (0, n.jsxs)("dl", {
                    className: Z().factsWrapper,
                    children: [p && "Ikke oplyst" !== p && (0, n.jsxs)(n.Fragment, {children: [(0, n.jsx)("dt", {children: "Uddannelse"}), (0, n.jsx)("dd", {children: p})]}), l && "Ikke oplyst" !== l && (0, n.jsxs)(n.Fragment, {children: [(0, n.jsx)("dt", {children: "Bop\xe6l"}), (0, n.jsx)("dd", {children: l})]}), h && (0, n.jsxs)(n.Fragment, {children: [(0, n.jsx)("dt", {children: "Valgt f\xf8rste gang"}), (0, n.jsx)("dd", {children: h})]}), u && (0, n.jsxs)(n.Fragment, {children: [(0, n.jsx)("dt", {children: "Stillede op f\xf8rste gang"}), (0, n.jsx)("dd", {children: u})]}), (c || d || o || s) && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("dt", {children: "Sociale medier"}), (0, n.jsx)("dd", {
                            children: (0, n.jsx)(E, {
                                facebook: c,
                                instagram: d,
                                twitter: o,
                                website: s,
                                candidateName: "".concat(null === i || void 0 === i ? void 0 : i.Firstname, " ").concat(null === i || void 0 === i ? void 0 : i.LastName)
                            })
                        })]
                    })]
                })]
            })
        }

        var T = a(4261), U = a.n(T);

        function F(e) {
            var t = e.keyTopics;
            return (0, n.jsx)("div", {
                children: (null === t || void 0 === t ? void 0 : t.some((function (e) {
                    var t;
                    return (null === (t = e.title) || void 0 === t ? void 0 : t.length) > 0
                }))) && (0, n.jsxs)("div", {
                    className: U().keyTopics,
                    children: [(0, n.jsx)("h4", {children: "M\xe6rkesager"}), (0, n.jsx)("ul", {
                        children: t.map((function (e) {
                            var t;
                            return (null === (t = e.title) || void 0 === t ? void 0 : t.length) > 0 && (0, n.jsxs)("li", {
                                children: [(0, n.jsx)("p", {
                                    className: U().keyTopicNumber,
                                    children: e.keyTopicNumber
                                }), (0, n.jsxs)("p", {
                                    className: U().keyTopicText,
                                    children: [(0, n.jsx)("span", {children: e.title.trim()}), e.text && ": ".concat(e.text)]
                                })]
                            }, e.keyTopicNumber)
                        }))
                    })]
                })
            })
        }

        var O = a(9050), V = a(9979), D = a(3553), G = a.n(D), z = a(5863), K = a.n(z), H = a(1943), W = a.n(H),
            X = a(7887), q = a.n(X);

        function R(e) {
            var t = e.title, a = e.percentage, r = e.partyLetter, i = (0, o.useState)(!1), c = i[0], d = i[1],
                s = r ? W()["party".concat(r)] || W().partyUnknown : K()["color-grey-10"];
            return (0, o.useEffect)((function () {
                d(!0)
            }), []), (0, n.jsxs)("div", {
                className: q().container,
                children: [(0, n.jsxs)("div", {
                    className: q().row,
                    children: [(0, n.jsx)("span", {
                        "aria-hidden": !0,
                        className: q().title,
                        children: t
                    }), (0, n.jsxs)("span", {
                        "aria-hidden": !0,
                        className: q().percentageValue,
                        children: [a, (0, n.jsx)("span", {className: q().percentageSymbol, children: "%"})]
                    })]
                }), (0, n.jsxs)("div", {
                    className: q().row,
                    children: [(0, n.jsx)("span", {
                        className: q().percentageSR,
                        children: "".concat(a, "% enige om ").concat(t)
                    }), (0, n.jsx)("div", {
                        className: q().meter,
                        children: (0, n.jsx)("span", {
                            "data-testid": "meterBar",
                            className: q().meterBar,
                            style: {transform: "scaleX(".concat(c ? a / 100 : 0, ")"), backgroundColor: s}
                        })
                    }), (0, n.jsx)("span", {"aria-hidden": !0, className: q().description, children: "enige"})]
                })]
            })
        }

        function Q(e) {
            var t, a, r = e.match,
                i = null === r || void 0 === r || null === (t = r.TopicMatch) || void 0 === t ? void 0 : t.sort((function (e, t) {
                    return t.MatchPercent - e.MatchPercent
                })),
                c = null === r || void 0 === r || null === (a = r.CandidateBasic) || void 0 === a ? void 0 : a.PartyCode;
            return (0, n.jsxs)("div", {
                className: G().container,
                children: [(0, n.jsx)("h4", {
                    className: G().headline,
                    "aria-label": "S\xe5 enige er I indenfor forskellige kategorier:",
                    id: "categoriesHeadline",
                    children: "S\xe5 enige er I:"
                }), (0, n.jsx)("ol", {
                    "aria-labelledby": "categoriesHeadline",
                    children: null === i || void 0 === i ? void 0 : i.map((function (e, t) {
                        var a = e.Title, r = e.MatchPercent;
                        return (0, n.jsx)("li", {
                            className: G().category,
                            children: (0, n.jsx)(R, {title: a, percentage: r, partyLetter: c})
                        }, "category-".concat(t))
                    }))
                })]
            })
        }

        var Y = a(4039), J = a.n(Y);

        function $(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
            return n
        }

        function ee(e, t, a, n, r, i, c) {
            try {
                var d = e[i](c), o = d.value
            } catch (s) {
                return void a(s)
            }
            d.done ? t(o) : Promise.resolve(o).then(n, r)
        }

        function te(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                var a = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != a) {
                    var n, r, i = [], c = !0, d = !1;
                    try {
                        for (a = a.call(e); !(c = (n = a.next()).done) && (i.push(n.value), !t || i.length !== t); c = !0) ;
                    } catch (o) {
                        d = !0, r = o
                    } finally {
                        try {
                            c || null == a.return || a.return()
                        } finally {
                            if (d) throw r
                        }
                    }
                    return i
                }
            }(e, t) || function (e, t) {
                if (!e) return;
                if ("string" === typeof e) return $(e, t);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === a && e.constructor && (a = e.constructor.name);
                if ("Map" === a || "Set" === a) return Array.from(a);
                if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return $(e, t)
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function ae(e) {
            var t, a, r, i = e.candidate, c = e.candidateAnswers, y = e.questions,
                f = te((0, s._)("municipality"), 1)[0], m = te((0, s._)("answers"), 2), v = m[0], g = m[1],
                b = (0, o.useState)(), _ = b[0], x = b[1], C = v || {}, w = C.submittedAnswers, k = C.appStateAnswers,
                N = (0, o.useState)(!1), S = N[0], P = N[1], B = !(!c || !c.length),
                A = (null === i || void 0 === i || null === (t = i.LineUps) || void 0 === t ? void 0 : t.length) ? null === (a = i.LineUps.find((function (e) {
                    return "Bigconstituency" === e.groupType
                }))) || void 0 === a ? void 0 : a.id : void 0;
            (0, o.useEffect)((function () {
                S || P(!0)
            }), []), (0, o.useEffect)((function () {
                w && k && y && B && ((0, l.Z)(k, y) || g({
                    appStateAnswers: (0, u.Z)(y),
                    submittedAnswers: void 0
                }), (0, l.Z)(k, y) && I())
            }), [w, k, y]);
            var E, I = (0, o.useCallback)((E = d().mark((function e() {
                var t, a, n, r;
                return d().wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            if (!w || !(null === f || void 0 === f || null === (t = f.value) || void 0 === t ? void 0 : t.BIG_CONSTITUENCY_ID)) {
                                e.next = 13;
                                break
                            }
                            return a = null === w || void 0 === w ? void 0 : w.join(), e.prev = 3, e.next = 6, (0, h.Z)("/nyheder/politik/folketingsvalg/api/candidate/GetCandidateMatch?answers=".concat(encodeURIComponent((0, p.HI)(a)), "&candidateId=").concat(i.ID, "&candidateBigConstituencyId=").concat(A));
                        case 6:
                            (n = e.sent) && x(null === (r = n.TopMatches) || void 0 === r ? void 0 : r[0]), e.next = 13;
                            break;
                        case 10:
                            e.prev = 10, e.t0 = e.catch(3), console.log("Result fetch error:", e.t0);
                        case 13:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[3, 10]])
            })), function () {
                var e = this, t = arguments;
                return new Promise((function (a, n) {
                    var r = E.apply(e, t);

                    function i(e) {
                        ee(r, a, n, i, c, "next", e)
                    }

                    function c(e) {
                        ee(r, a, n, i, c, "throw", e)
                    }

                    i(void 0)
                }))
            }), [w, null === f || void 0 === f || null === (r = f.value) || void 0 === r ? void 0 : r.BIG_CONSTITUENCY_ID]);
            return (0, n.jsxs)("div", {
                className: J().container,
                children: [(0, n.jsxs)("div", {
                    className: J().candidateBaseInfoWrapper,
                    children: [(0, n.jsx)(j.Z, {
                        name: "".concat(i.Firstname, " ").concat(i.LastName),
                        linedUpForPartyCode: i.LinedUpForPartyCode,
                        lineUps: i.LineUps,
                        imageUrl: i.Picture,
                        urlKey: i.UrlKey,
                        matchPercent: null === _ || void 0 === _ ? void 0 : _.Matchpercent
                    }), _ && (0, n.jsx)(Q, {match: _})]
                }), S && !w && B ? (0, n.jsx)("div", {
                    className: "".concat(J().startTestContainer, " ").concat(J().onlyCandidateAnswers),
                    children: (0, n.jsx)(V.Z, {headline: "Er du enig med ".concat(i.Firstname, "?\nTag testen og f\xe5 svaret")})
                }) : null, (0, n.jsx)(F, {keyTopics: i.Keytopics}), (0, n.jsx)(M, {candidate: i}), B ? null : (0, n.jsx)("div", {
                    className: "".concat(J().startTestContainer, " ").concat(J().noCandidateAnswers),
                    children: (0, n.jsx)(V.Z, {
                        headline: "Hvilken kandidat er du mest enig med?\nTag testen og f\xe5 svaret",
                        isRestart: !!w
                    })
                }), S && B && y && (0, n.jsx)(L, {
                    candidate: i,
                    candidateAnswers: c,
                    userAnswers: v,
                    questions: y
                }), w && B ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("div", {
                        className: "".concat(J().startTestContainer, " ").concat(J().withBothUserAndCandidateAnswers),
                        children: (0, n.jsx)(V.Z, {
                            headline: "Fik du et andet resultat, end du havde regnet med?",
                            isRestart: !0
                        })
                    }), (0, n.jsx)(O.Z, {})]
                }) : null]
            })
        }

        var ne = a(4929), re = a(2295), ie = a(7789), ce = a.n(ie), de = !0;

        function oe(e) {
            var t = e.siteConfig, a = e.candidate, c = e.candidateAnswers, d = e.questions, o = e.hasApiError,
                s = e.liveSettings, l = "".concat(a.Firstname, " ").concat(a.LastName),
                p = "".concat(l, " (").concat(a.LinedUpForPartyCode, ") | Folketingsvalg 2022 | DR"),
                u = "L\xe6r kandidaten bedre at kende! Her kan du l\xe6se m\xe6rkesager og om ".concat(l, ". Tag kandidattesten og se hvor enige I er."),
                h = (0, re.C)((function (e) {
                    var t;
                    return null === e || void 0 === e || null === (t = e.settings) || void 0 === t ? void 0 : t.liveSettings
                })),
                y = void 0 !== (null === h || void 0 === h ? void 0 : h.showElectionWidgetBand) ? null === h || void 0 === h ? void 0 : h.showElectionWidgetBand : null === s || void 0 === s ? void 0 : s.showElectionWidgetBand;
            return (0, n.jsx)(r.Z.Provider, {
                productName: "drdk",
                applicationName: "dr-election-fv22",
                pageName: "ballotpaper-candidate-page",
                allowedEvents: [/^ballotpaper-candidate-page:.*:click$/],
                children: (0, n.jsxs)(ne.Z, {
                    siteConfig: t,
                    siteHeader: "Kandidat",
                    title: p,
                    description: u,
                    showElectionWidgetBand: y,
                    children: [o ? (0, n.jsx)("div", {
                        className: ce().pageContainer,
                        children: (0, n.jsx)(i.Z, {})
                    }) : (0, n.jsx)(ae, {
                        candidate: a,
                        candidateAnswers: c,
                        questions: d
                    }), y && (0, n.jsx)("div", {className: ce().splitter})]
                })
            })
        }
    }, 2609: function (e, t, a) {
        "use strict";
        a.d(t, {
            Z: function () {
                return r
            }
        });
        var n = a(5893);
        a(7294);
        var r = function (e) {
            var t = e.condition, a = e.wrapper, r = e.children;
            return t ? (0, n.jsx)(n.Fragment, {children: a(r)}) : (0, n.jsx)(n.Fragment, {children: r})
        }
    }, 2416: function (e, t, a) {
        "use strict";
        a.d(t, {
            Z: function () {
                return d
            }
        });
        var n = a(4051), r = a.n(n);

        function i(e, t, a, n, r, i, c) {
            try {
                var d = e[i](c), o = d.value
            } catch (s) {
                return void a(s)
            }
            d.done ? t(o) : Promise.resolve(o).then(n, r)
        }

        function c(e) {
            return function () {
                var t = this, a = arguments;
                return new Promise((function (n, r) {
                    var c = e.apply(t, a);

                    function d(e) {
                        i(c, n, r, d, o, "next", e)
                    }

                    function o(e) {
                        i(c, n, r, d, o, "throw", e)
                    }

                    d(void 0)
                }))
            }
        }

        function d(e, t) {
            return o.apply(this, arguments)
        }

        function o() {
            return (o = c(r().mark((function e(t, a) {
                var n;
                return r().wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, fetch(t, a);
                        case 2:
                            return n = e.sent, e.abrupt("return", n.json());
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }
    }, 6676: function (e, t, a) {
        "use strict";
        var n = a(7294), r = a(1910), i = a.n(r), c = a(2418), d = a(9380), o = a(4019), s = a(5977);
        a(2749);

        function l(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a, e
        }

        function p(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {}, n = Object.keys(a);
                "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter((function (e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable
                })))), n.forEach((function (t) {
                    l(e, t, a[t])
                }))
            }
            return e
        }

        var u = i().scoped.bind(null, "dre-button"), h = "label", y = n.forwardRef((function (e, t) {
            var a, r, i = e.variant, y = e.onClick, f = e.icon, m = e.width, v = e.disabled, g = e.children,
                b = e.ariaLabel, _ = e.size, x = e.type, L = e.ariaPressed, j = e.ariaExpanded, C = e.ariaControls,
                w = (0, c.Z)().dark,
                k = "secondary" === i || "tertiary" === i ? (l(a = {}, "".concat(i, "-on-dark"), w), l(a, i, !w), l(a, "".concat(i, "-pressed"), !w && L), l(a, "".concat(i, "-on-dark-pressed"), w && L), a) : {},
                N = {width: m};
            return n.createElement(d.Z, {
                ref: t,
                style: N,
                className: u(k),
                onClick: y,
                disabled: v,
                "aria-label": b,
                "aria-pressed": "boolean" === typeof L ? L.toString() : void 0,
                "aria-expanded": "boolean" === typeof j ? j.toString() : void 0,
                "aria-controls": C,
                type: x
            }, n.createElement("span", {className: u("touch-area", {"small-icon-only": _ === o.SMALL && !g})}, n.createElement("span", {className: u("main", p({}, k, (r = {}, l(r, _, !0), l(r, "".concat(_, "-icon-only"), i === h || !g), l(r, "".concat(_, "-text-only"), !f), l(r, "grow", i !== h), r)))}, f && n.createElement(f, {
                size: _ === o.SMALL ? o.XX_SMALL : o.X_SMALL,
                color: "inherit"
            }), i !== h && g && n.createElement("span", {className: u("text", l({}, _, !0))}, n.createElement(s.Z, {size: {xxs: _ === o.SMALL ? o.X_SMALL : o.MEDIUM}}, g))), i === h && g && n.createElement("span", {className: u("label", l({}, _, !0))}, n.createElement(s.Z, {size: {xxs: _ === o.SMALL ? o.X_SMALL : o.MEDIUM}}, g))))
        }));
        y.propTypes = {}, y.defaultProps = {
            variant: "primary",
            children: void 0,
            onClick: void 0,
            icon: void 0,
            width: "auto",
            disabled: !1,
            size: o.MEDIUM,
            type: "button",
            ariaLabel: void 0,
            ariaPressed: void 0,
            ariaExpanded: void 0,
            ariaControls: void 0
        }, y.displayName = "Button", t.Z = y
    }, 8132: function (e, t, a) {
        "use strict";
        a.d(t, {
            Z: function () {
                return i
            }
        });
        var n = a(7294), r = a(1214);

        function i(e) {
            return n.createElement(r.Z, e, n.createElement("svg", {viewBox: "0 0 24 24"}, n.createElement("path", {d: "M18.8 16.5L12 9.7l-6.8 6.8-1.4-1.4L12 6.8l8.2 8.3z"})))
        }
    }, 9384: function (e, t, a) {
        "use strict";
        a.d(t, {
            Z: function () {
                return i
            }
        });
        var n = a(7294), r = a(1214);

        function i(e) {
            return n.createElement(r.Z, e, n.createElement("svg", {viewBox: "0 0 24 24"}, n.createElement("path", {d: "M20 11h-7V4h-2v7H4v2h7v7h2v-7h7z"})))
        }
    }, 3553: function (e) {
        e.exports = {
            container: "Candidate_CompatibilityCategories_container__nIJEK",
            category: "Candidate_CompatibilityCategories_category__qBtTh",
            headline: "Candidate_CompatibilityCategories_headline__B64Dw"
        }
    }, 7887: function (e) {
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
            container: "Category_container__evP6Z",
            row: "Category_row__6eATv",
            title: "Category_title__jDMPL",
            meter: "Category_meter__lpFjv",
            meterBar: "Category_meterBar__rYpdv",
            description: "Category_description__caXYa",
            percentageValue: "Category_percentageValue__SXe7S",
            percentageSymbol: "Category_percentageSymbol__VnwBr",
            percentageSR: "Category_percentageSR__U8iUh"
        }
    }, 4039: function (e) {
        e.exports = {
            container: "Candidate_container__sLDSK",
            startTestContainer: "Candidate_startTestContainer__M55lE",
            onlyCandidateAnswers: "Candidate_onlyCandidateAnswers__FRemr",
            noCandidateAnswers: "Candidate_noCandidateAnswers__ulBm8",
            withBothUserAndCandidateAnswers: "Candidate_withBothUserAndCandidateAnswers__TMos7",
            candidateBaseInfoWrapper: "Candidate_candidateBaseInfoWrapper__rVgU2"
        }
    }, 3724: function (e) {
        e.exports = {
            container: "CandidateAnswers_container__kAueD",
            questionsContainer: "CandidateAnswers_questionsContainer__mapTq",
            headline: "CandidateAnswers_headline__0YqDT",
            expandButton: "CandidateAnswers_expandButton__FLs7A"
        }
    }, 684: function (e) {
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
            container: "CandidateBaseInfo_container__ohFCS",
            matchPercentWrapper: "CandidateBaseInfo_matchPercentWrapper__zgSYZ",
            matchPercent: "CandidateBaseInfo_matchPercent__3PJ9v",
            matchPercentBold: "CandidateBaseInfo_matchPercentBold__DO84S",
            matchPercentSlim: "CandidateBaseInfo_matchPercentSlim__ASV3o",
            candidatePhoto: "CandidateBaseInfo_candidatePhoto__X0D_x",
            letterWrapper: "CandidateBaseInfo_letterWrapper__527WL",
            candidateInfo: "CandidateBaseInfo_candidateInfo__9ZYqw",
            columnOnly: "CandidateBaseInfo_columnOnly__Qxt3l",
            name: "CandidateBaseInfo_name__wnkZi",
            partyName: "CandidateBaseInfo_partyName__nIMA8",
            lineUp: "CandidateBaseInfo_lineUp__KvlKd",
            compareAnswers: "CandidateBaseInfo_compareAnswers__ue7ME"
        }
    }, 7101: function (e) {
        e.exports = {container: "CandidateFacts_container__PF4rT"}
    }, 4261: function (e) {
        e.exports = {
            keyTopics: "CandidateKeyTopics_keyTopics__2BkLq",
            keyTopicNumber: "CandidateKeyTopics_keyTopicNumber__htVHq",
            keyTopicText: "CandidateKeyTopics_keyTopicText__2pmgr"
        }
    }, 9907: function (e) {
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
            partyLetterContainer: "PartyLetter_partyLetterContainer__PlHjh",
            partyLetterContainerXXS: "PartyLetter_partyLetterContainerXXS__uWcKL",
            partyLetterContainerXS: "PartyLetter_partyLetterContainerXS__j_5Wm",
            partyLetterContainerS: "PartyLetter_partyLetterContainerS__fm2or",
            partyLetterContainerL: "PartyLetter_partyLetterContainerL__anEDr"
        }
    }, 6850: function (e) {
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
            container: "SocialMedia_container__Mfojj"
        }
    }, 7789: function (e) {
        e.exports = {pageContainer: "candidate_pageContainer__5rw67", splitter: "candidate_splitter__BbBND"}
    }, 2749: function () {
    }
}, function (e) {
    e.O(0, [549, 104, 244, 294, 675, 354, 542, 215, 774, 888, 179], (function () {
        return t = 533, e(e.s = t);
        var t
    }));
    var t = e.O();
    _N_E = t
}]);