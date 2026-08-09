import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { a as useScroll, n as useSpring, s as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { O as TextReveal, _ as PROJECTS, a as COMPANY, b as Reveal, f as NAV_LINKS, j as cn, n as Blobs, p as OFFICES, r as CASE_STUDIES, u as Magnetic, x as SERVICES } from "./primitives-CLSdz6WR.mjs";
import { R as notFound, _ as createRootRouteWithContext, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { A as ArrowUp, E as CalendarDays, S as Github, a as Twitter, b as Instagram, d as Search, g as Menu, j as ArrowUpRight, n as X, y as Linkedin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-rm7hCNnZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-BXZ0nJeo.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var logo_default = "/assets/logo-DixoYNo1.PNG";
var GROUPS = [
	"Build",
	"Design",
	"Intelligence",
	"Platforms",
	"Infrastructure",
	"Growth"
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [mega, setMega] = (0, import_react.useState)(false);
	const [mobile, setMobile] = (0, import_react.useState)(false);
	const [search, setSearch] = (0, import_react.useState)(false);
	const [q, setQ] = (0, import_react.useState)("");
	const path = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setMobile(false);
		setMega(false);
		setSearch(false);
	}, [path]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key === "k") {
				e.preventDefault();
				setSearch((s) => !s);
			}
			if (e.key === "Escape") setSearch(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	const results = q ? SERVICES.filter((s) => s.title.toLowerCase().includes(q.toLowerCase())).slice(0, 6) : SERVICES.slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: cn("fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-sm transition-all duration-500", scrolled ? "py-2 shadow-sm" : "py-5"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-lux",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 md:px-5", scrolled ? "border border-border bg-white shadow-soft backdrop-blur-xl" : "border border-border bg-white shadow-sm"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "group flex items-center gap-2.5 pl-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: logo_default,
									alt: "Solvix Core Logo",
									className: "h-full w-full object-contain"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl tracking-tight",
								children: COMPANY.name
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-1 lg:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								onMouseEnter: () => setMega(true),
								onMouseLeave: () => setMega(false),
								className: "relative",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/services",
									className: "flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground",
									children: ["Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-1 w-1 rounded-full bg-primary transition-opacity", mega ? "opacity-100" : "opacity-0") })]
								})
							}), NAV_LINKS.filter((l) => l.label !== "Services").map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: l.to,
								className: cn("rounded-full px-3.5 py-2 text-sm font-medium transition-colors", path === l.to ? "bg-accent text-accent-foreground" : "text-foreground/70 hover:text-foreground"),
								children: l.label
							}, l.to))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									"aria-label": "Search",
									onClick: () => setSearch(true),
									className: "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									className: "group hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-background transition-all hover:shadow-lift sm:inline-flex",
									children: ["Start a project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									"aria-label": "Menu",
									onClick: () => setMobile(true),
									className: "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card lg:hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
								})
							]
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: mega ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				onMouseEnter: () => setMega(true),
				onMouseLeave: () => setMega(false),
				initial: {
					opacity: 0,
					y: -10
				},
				animate: {
					opacity: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					y: -10
				},
				transition: {
					duration: .35,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				className: "container-lux hidden pt-3 lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-lux grid grid-cols-4 gap-8 p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-1 rounded-2xl bg-surface p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Capabilities"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display mt-3 text-2xl leading-tight",
								children: "Twenty-two disciplines, one delivery standard."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services",
								className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary",
								children: ["All services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-3 grid grid-cols-3 gap-x-8 gap-y-6",
						children: GROUPS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-3",
							children: g
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-1.5",
							children: SERVICES.filter((s) => s.group === g).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: `/services/${s.slug}`,
								className: "text-sm text-foreground/75 transition-colors hover:text-primary",
								children: s.title
							}) }, s.slug))
						})] }, g))
					})]
				})
			}) : null })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: mobile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			onClick: () => setMobile(false),
			className: "fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm lg:hidden"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: { x: "100%" },
			animate: { x: 0 },
			exit: { x: "100%" },
			transition: {
				duration: .35,
				ease: [
					.16,
					1,
					.3,
					1
				]
			},
			className: "fixed right-0 top-0 bottom-0 z-[70] w-[80vw] max-w-sm bg-card shadow-lift lg:hidden flex flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-6 py-5 border-b border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-11 w-11 overflow-hidden rounded-xl bg-white p-1 shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_default,
								alt: "Solvix Core",
								className: "h-full w-full object-contain"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg",
							children: COMPANY.name
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Close",
						onClick: () => setMobile(false),
						className: "flex h-10 w-10 items-center justify-center rounded-full border border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 overflow-y-auto px-4 py-4",
					children: [{
						label: "Home",
						to: "/"
					}, ...NAV_LINKS].map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							x: 16
						},
						animate: {
							opacity: 1,
							x: 0
						},
						transition: {
							delay: .04 * i,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: l.to,
							className: `flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${path === l.to ? "bg-accent text-accent-foreground" : "hover:bg-surface"}`,
							onClick: () => setMobile(false),
							children: [l.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 text-muted-foreground" })]
						})
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-border p-4 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						onClick: () => setMobile(false),
						className: "flex items-center justify-center gap-2 w-full rounded-full bg-ink px-5 py-3 text-sm font-semibold text-background",
						children: ["Start a project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-3 gap-2 text-center text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: COMPANY.whatsapp.canada,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "rounded-lg bg-surface p-2 hover:text-primary text-center",
								children: "CA"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: COMPANY.whatsapp.uk,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "rounded-lg bg-surface p-2 hover:text-primary text-center",
								children: "UK"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: COMPANY.whatsapp.pakistan,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "rounded-lg bg-surface p-2 hover:text-primary text-center",
								children: "PK"
							})
						]
					})]
				})
			]
		})] }) : null }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: search ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			className: "fixed inset-0 z-[70] flex items-start justify-center bg-ink/25 p-4 pt-[14vh] backdrop-blur-sm",
			onClick: () => setSearch(false),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: -16,
					scale: .98
				},
				animate: {
					opacity: 1,
					y: 0,
					scale: 1
				},
				exit: {
					opacity: 0,
					y: -16,
					scale: .98
				},
				transition: {
					duration: .3,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				onClick: (e) => e.stopPropagation(),
				className: "card-lux w-full max-w-xl overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 border-b border-border px-5 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 text-muted-foreground" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							autoFocus: true,
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: "Search services, work, articles…",
							className: "w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
							className: "rounded-md border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground",
							children: "ESC"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "max-h-80 overflow-y-auto p-2",
					children: [results.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: `/services/${s.slug}`,
						className: "flex items-center justify-between rounded-xl px-3 py-3 text-sm transition-colors hover:bg-surface",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: s.group
						})]
					}) }, s.slug)), results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "px-3 py-6 text-center text-sm text-muted-foreground",
						children: "No matches. Try “AI”, “cloud” or “design”."
					}) : null]
				})]
			})
		}) : null })
	] });
}
function CtaBand({ eyebrow = "Ready to start?", title = "Let us build something great together.", body = "Tell us about your project — AI, automation, web development or Shopify. We serve Canada, UK and Pakistan and respond within 24 hours." }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-lux py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grain relative overflow-hidden rounded-[2.5rem] border border-border bg-ink px-8 py-20 text-background md:px-16 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-white/5 blur-3xl",
					style: { animationDelay: "-6s" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow text-background/60",
								children: eyebrow
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextReveal, {
							text: title,
							className: "display-lg mt-6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .15,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl text-lg leading-relaxed text-background/70",
								children: body
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .25,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									className: "group inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5",
									children: ["Start a conversation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/case-studies",
									className: "inline-flex items-center gap-2 rounded-full border border-background/25 px-7 py-3.5 text-sm font-semibold text-background/85 transition-colors hover:border-background/60",
									children: "Read the case studies"
								})]
							})
						})
					]
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden border-t border-border bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-lux py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-11 w-11 overflow-hidden rounded-xl bg-white p-1 shadow-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: logo_default,
									alt: "Solvix Core Logo",
									className: "h-full w-full object-contain"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl",
								children: COMPANY.name
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground",
							children: [COMPANY.tagline, ". Proudly serving Canada, UK and Pakistan — Partnered with Lepro Trading Inc."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-7 flex gap-2",
							children: [
								Twitter,
								Linkedin,
								Github,
								Instagram
							].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								"aria-label": "Social link",
								className: "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
							}, i))
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Company"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-2.5",
						children: NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: "text-sm text-foreground/70 transition-colors hover:text-primary",
							children: l.label
						}) }, l.to))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Capabilities"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-2.5",
						children: SERVICES.slice(0, 9).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: `/services/${s.slug}`,
							className: "text-sm text-foreground/70 transition-colors hover:text-primary",
							children: s.title
						}) }, s.slug))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Newsletter"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm leading-relaxed text-muted-foreground",
							children: "One considered essay a month on building software worth keeping."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => e.preventDefault(),
							className: "mt-5 flex items-center gap-2 rounded-full border border-border bg-card p-1.5 pl-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								required: true,
								placeholder: "you@company.com",
								className: "w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-background transition-transform hover:-translate-y-0.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 space-y-3",
							children: [OFFICES.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: o.city
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: " — "
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `https://wa.me/${o.phone.replace(/[^0-9]/g, "")}`,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "text-muted-foreground hover:text-primary transition-colors",
										children: o.phone
									})
								]
							}, o.city)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 space-y-1 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${COMPANY.email}`,
									className: "block hover:text-primary transition-colors",
									children: COMPANY.email
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${COMPANY.emailAdmin}`,
									className: "block hover:text-primary transition-colors",
									children: COMPANY.emailAdmin
								})]
							})]
						})
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					COMPANY.name,
					" Studio. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "transition-colors hover:text-foreground",
							children: "Privacy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "transition-colors hover:text-foreground",
							children: "Terms"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "transition-colors hover:text-foreground",
							children: "Security"
						})
					]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display pointer-events-none select-none whitespace-nowrap px-4 pb-6 text-center text-[18vw] leading-[0.8] tracking-tighter text-foreground/[0.045]",
			children: COMPANY.name
		})]
	});
}
function SmoothScroll() {
	(0, import_react.useEffect)(() => {
		let lenis = null;
		let raf = 0;
		let cancelled = false;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		import("../_libs/lenis.mjs").then((n) => n.t).then(({ default: Lenis }) => {
			if (cancelled) return;
			const instance = new Lenis({
				duration: 1.15,
				smoothWheel: true
			});
			lenis = instance;
			const loop = (t) => {
				instance.raf(t);
				raf = requestAnimationFrame(loop);
			};
			raf = requestAnimationFrame(loop);
		});
		return () => {
			cancelled = true;
			cancelAnimationFrame(raf);
			lenis?.destroy();
		};
	}, []);
	return null;
}
function ReadingProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 140,
		damping: 26,
		mass: .3
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		style: { scaleX },
		className: "fixed inset-x-0 top-0 z-[80] h-[3px] origin-left bg-primary"
	});
}
function Loader() {
	const [done, setDone] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => setDone(true), 1500);
		return () => clearTimeout(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: !done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 1 },
		exit: { y: "-100%" },
		transition: {
			duration: .9,
			ease: [
				.76,
				0,
				.24,
				1
			]
		},
		className: "fixed inset-0 z-[100] flex items-center justify-center bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 14,
						filter: "blur(8px)"
					},
					animate: {
						opacity: 1,
						y: 0,
						filter: "blur(0px)"
					},
					transition: {
						duration: .8,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: "flex flex-col items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-20 w-20 overflow-hidden rounded-2xl bg-white p-2 shadow-soft",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_default,
							alt: "Solvix Core",
							className: "h-full w-full object-contain"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl tracking-tight md:text-5xl",
						children: "Solvix Core"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-6 h-px w-40 overflow-hidden bg-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { x: "-100%" },
						animate: { x: "0%" },
						transition: {
							duration: 1.3,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: "h-full w-full bg-primary"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mt-5",
					children: "Premium Tech Solutions — CA · UK · PK"
				})
			]
		})
	}) : null });
}
function FloatingActions() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setShow(window.scrollY > 700);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: show ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 24
		},
		animate: {
			opacity: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			y: 24
		},
		transition: {
			duration: .4,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className: "fixed bottom-6 right-5 z-40 flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/contact",
			className: "group flex items-center gap-2 rounded-full border border-border bg-card/90 px-5 py-3 text-sm font-semibold shadow-lift backdrop-blur-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-4 w-4 text-primary" }), "Book a call"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			"aria-label": "Back to top",
			onClick: () => window.scrollTo({
				top: 0,
				behavior: "smooth"
			}),
			className: "flex h-11 w-11 items-center justify-center rounded-full bg-ink text-background shadow-lift transition-transform hover:-translate-y-0.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-4 w-4" })
		})]
	}) : null });
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-screen items-center justify-center overflow-hidden px-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blobs, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-[9rem] leading-none tracking-tighter md:text-[14rem]",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display-md mt-2",
					children: "This page took a different route."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "The link may be retired, or the page moved during a redesign. Everything else is still where you left it."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-9 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-background",
						children: "Back home"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold",
						children: "Talk to us"
					})]
				})
			]
		})]
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display-md",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "Something went wrong on our end. Try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-full bg-ink px-6 py-3 text-sm font-semibold text-background",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$13 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Solvix Core — AI Solutions, Web Development & Automation | Serving Globally" },
			{
				name: "description",
				content: "Solvix Core delivers AI solutions, web development, automation, Shopify stores and app development for businesses worldwide. Affordable pricing starting from $299 USD. Serving Canada, UK, Pakistan and globally."
			},
			{
				name: "author",
				content: "Solvix Core"
			},
			{
				name: "keywords",
				content: "AI solutions, web development, automation, Shopify development, n8n automation, LangChain, OpenAI integration, mobile app development, SEO services, digital marketing, affordable web design, cheap web development, web developer Canada, web developer UK, web developer Pakistan, AI agency, automation agency, Solvix Core"
			},
			{
				property: "og:title",
				content: "Solvix Core — AI Solutions, Web Development & Automation"
			},
			{
				property: "og:description",
				content: "Premium AI, automation, web development and e-commerce solutions for businesses worldwide. Starting from $299 USD."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:image",
				content: "/logo.png"
			},
			{
				property: "og:image:width",
				content: "512"
			},
			{
				property: "og:image:height",
				content: "512"
			},
			{
				property: "og:site_name",
				content: "Solvix Core"
			},
			{
				property: "og:locale",
				content: "en_US"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:title",
				content: "Solvix Core — AI Solutions & Web Development"
			},
			{
				name: "twitter:description",
				content: "Affordable AI, web development and automation services globally. From $299 USD."
			},
			{
				name: "twitter:image",
				content: "/logo.png"
			},
			{
				name: "robots",
				content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
			},
			{
				name: "theme-color",
				content: "#2563eb"
			},
			{
				name: "language",
				content: "English"
			},
			{
				name: "revisit-after",
				content: "7 days"
			},
			{
				name: "rating",
				content: "general"
			},
			{
				name: "geo.region",
				content: "CA-ON, GB-LND, PK-PB"
			},
			{
				name: "geo.placename",
				content: "Ottawa, London, Lahore"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Manrope:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "icon",
				href: "/favicon-32x32.png",
				type: "image/png",
				sizes: "32x32"
			},
			{
				rel: "icon",
				href: "/favicon-16x16.png",
				type: "image/png",
				sizes: "16x16"
			},
			{
				rel: "apple-touch-icon",
				href: "/apple-touch-icon.png",
				sizes: "180x180"
			},
			{
				rel: "shortcut icon",
				href: "/favicon.png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$13.useRouteContext();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadingProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "pt-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: { opacity: 0 },
						transition: {
							duration: .5,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
					}, pathname)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingActions, {})
		]
	});
}
var $$splitComponentImporter$12 = () => import("./routes-DdQ9XUj9.mjs");
var Route$12 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Solvix Core — AI Solutions, Web Development & Automation | Serving Globally" },
		{
			name: "description",
			content: "Solvix Core delivers affordable AI solutions, web development, automation, Shopify stores and app development worldwide. Prices from $299 USD. Serving Canada, UK, Pakistan and globally."
		},
		{
			name: "keywords",
			content: "AI solutions, web development agency, automation services, Shopify developer, affordable web design, cheap web development, web developer for hire, AI agency, n8n automation, LangChain developer, OpenAI integration, app development, SEO agency, digital marketing agency"
		},
		{
			property: "og:title",
			content: "Solvix Core — AI Solutions, Web Development & Automation"
		},
		{
			property: "og:description",
			content: "Premium AI, automation, web development and e-commerce services. Affordable pricing from $299 USD. Serving businesses globally."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./about-YE_FDLwn.mjs");
var Route$11 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Solvix Core — AI & Web Development Agency Serving Globally" },
		{
			name: "description",
			content: "Solvix Core is a global technology agency delivering AI solutions, web development, automation and Shopify services. Based in Canada, UK and Pakistan — serving clients worldwide."
		},
		{
			name: "keywords",
			content: "about Solvix Core, AI agency, web development company, technology agency Canada, UK web developer, Pakistan software company, global tech agency"
		},
		{
			property: "og:title",
			content: "About Solvix Core — AI & Web Development Agency"
		},
		{
			property: "og:description",
			content: "Global technology agency delivering AI, web development, automation and Shopify services. Serving clients worldwide."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./blog-D6Dcvb3W.mjs");
var Route$10 = createFileRoute("/blog")({
	head: () => ({ meta: [
		{ title: "Blog — Tech Insights | Solvix Core" },
		{
			name: "description",
			content: "Articles from the Solvix Core team on AI, automation, web development, Shopify and digital marketing — for businesses in Canada, UK and Pakistan."
		},
		{
			property: "og:title",
			content: "Blog — Tech Insights | Solvix Core"
		},
		{
			property: "og:description",
			content: "Practical tech insights for modern businesses."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./careers-dUUXqGUX.mjs");
var Route$9 = createFileRoute("/careers")({
	head: () => ({ meta: [
		{ title: "Careers — Join Solvix Core" },
		{
			name: "description",
			content: "Open roles across engineering, AI, design and growth at Solvix Core — remote-first positions serving Canada, UK and Pakistan."
		},
		{
			property: "og:title",
			content: "Careers — Join Solvix Core"
		},
		{
			property: "og:description",
			content: "Remote-first roles. Real impact. Competitive pay."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./contact-qxZDlhi0.mjs");
var Route$8 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact Solvix Core — Hire AI & Web Development Experts Globally" },
		{
			name: "description",
			content: "Contact Solvix Core to hire expert developers for AI, web development, automation and Shopify projects. Serving clients globally. Fast response within 24 hours."
		},
		{
			name: "keywords",
			content: "hire web developer, contact AI agency, web development quote, Shopify developer for hire, affordable web design, hire automation developer"
		},
		{
			property: "og:title",
			content: "Contact Solvix Core — Get a Free Quote"
		},
		{
			property: "og:description",
			content: "Get a free project quote. AI, web development, automation and Shopify services worldwide. Response within 24 hours."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./faqs-CM_bLmoO.mjs");
var Route$7 = createFileRoute("/faqs")({
	head: () => ({ meta: [
		{ title: "FAQs — Web Development & AI Services Questions | Solvix Core" },
		{
			name: "description",
			content: "Answers to common questions about our web development, AI, automation and Shopify services — pricing in USD, project timelines, ownership, support and more."
		},
		{
			name: "keywords",
			content: "web development FAQ, AI service questions, how much does web development cost, Shopify developer price, automation service FAQ, tech agency questions"
		},
		{
			property: "og:title",
			content: "FAQs — Your Questions Answered | Solvix Core"
		},
		{
			property: "og:description",
			content: "Pricing, timelines, ownership and everything else you want to know before starting a project."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./industries-B17Gej_W.mjs");
var Route$6 = createFileRoute("/industries")({
	head: () => ({ meta: [
		{ title: "Industries We Serve Globally | Solvix Core" },
		{
			name: "description",
			content: "E-commerce, healthcare, finance, real estate, education, logistics and more — Solvix Core delivers proven tech solutions for businesses in every industry worldwide."
		},
		{
			name: "keywords",
			content: "e-commerce web development, healthcare software, fintech development, real estate website, education platform, logistics software, retail POS system"
		},
		{
			property: "og:title",
			content: "Industries We Serve Globally | Solvix Core"
		},
		{
			property: "og:description",
			content: "Technology solutions for every industry — e-commerce, healthcare, finance, real estate and more."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./projects-C6XlcF-H.mjs");
var Route$5 = createFileRoute("/projects")({
	head: () => ({ meta: [
		{ title: "Our Work — Web, AI & POS Projects | Solvix Core" },
		{
			name: "description",
			content: "See real projects delivered by Solvix Core — business websites, point of sale systems, AI platforms and web applications for clients in Canada, UK, Pakistan and globally."
		},
		{
			name: "keywords",
			content: "web development portfolio, AI project examples, POS system project, business website examples, Solvix Core portfolio, web developer work"
		},
		{
			property: "og:title",
			content: "Our Work — Real Projects, Real Results | Solvix Core"
		},
		{
			property: "og:description",
			content: "Business websites, POS systems and AI platforms delivered for global clients."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./technologies-ygH6fGA3.mjs");
var Route$4 = createFileRoute("/technologies")({
	head: () => ({ meta: [
		{ title: "Tech Stack — React, Next.js, AI, Shopify & More | Solvix Core" },
		{
			name: "description",
			content: "Solvix Core builds with React, Next.js, TypeScript, Python, OpenAI, LangChain, n8n, Shopify, AWS and more — modern technologies chosen for performance and reliability."
		},
		{
			name: "keywords",
			content: "React developer, Next.js development, TypeScript developer, Python AI developer, OpenAI developer, LangChain developer, Shopify developer, AWS cloud, n8n automation"
		},
		{
			property: "og:title",
			content: "Our Technology Stack | Solvix Core"
		},
		{
			property: "og:description",
			content: "React, Next.js, AI, Shopify and cloud technologies — modern stack for modern businesses."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./case-studies-C1ahrGB_.mjs");
var Route$3 = createFileRoute("/case-studies/")({
	head: () => ({ meta: [
		{ title: "Case Studies — Real Client Results | Solvix Core" },
		{
			name: "description",
			content: "Real case studies from Solvix Core — business website for UK accounting firm, POS system for grocery store, enterprise web platform. See the results we deliver globally."
		},
		{
			name: "keywords",
			content: "web development case study, POS system case study, UK business website, grocery store software, AI platform results, tech agency portfolio"
		},
		{
			property: "og:title",
			content: "Case Studies — Real Results | Solvix Core"
		},
		{
			property: "og:description",
			content: "Business website, POS system and AI platform case studies with real measurable outcomes."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("../_slug-me8mkCkB.mjs");
var Route$2 = createFileRoute("/case-studies/$slug")({
	loader: ({ params }) => {
		const study = CASE_STUDIES.find((c) => c.slug === params.slug);
		if (!study) throw notFound();
		return {
			study,
			project: PROJECTS.find((p) => p.slug === params.slug)
		};
	},
	head: ({ loaderData }) => ({ meta: [
		{ title: `${loaderData?.study.title ?? "Case study"} — Solvix Core` },
		{
			name: "description",
			content: loaderData?.study.challenge ?? "Solvix Core case study."
		},
		{
			property: "og:title",
			content: `${loaderData?.study.title ?? "Case study"} — Solvix Core`
		},
		{
			property: "og:description",
			content: loaderData?.study.approach ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./services-BuOXW4R3.mjs");
var Route$1 = createFileRoute("/services/")({
	head: () => ({ meta: [
		{ title: "Services — AI Solutions, Web Dev, Shopify & Automation | Solvix Core" },
		{
			name: "description",
			content: "AI solutions, web development, Shopify store design, n8n automation, LangChain, OpenAI integration, mobile apps and SEO — all from $299 USD. Serving businesses globally."
		},
		{
			name: "keywords",
			content: "AI solutions service, web development service, Shopify store design, n8n automation service, LangChain integration, OpenAI integration, mobile app development, SEO marketing service, affordable tech services"
		},
		{
			property: "og:title",
			content: "Services — AI, Web, Shopify & Automation | Solvix Core"
		},
		{
			property: "og:description",
			content: "Nine premium tech services from $299 USD. Serving businesses globally."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("../_slug-DXRoH9n9.mjs");
var Route = createFileRoute("/services/$slug")({
	loader: ({ params }) => {
		const service = SERVICES.find((s) => s.slug === params.slug);
		if (!service) throw notFound();
		return service;
	},
	head: ({ loaderData }) => ({ meta: [
		{ title: `${loaderData?.title ?? "Service"} — Affordable Service Globally | Solvix Core` },
		{
			name: "description",
			content: `${loaderData?.blurb ?? "Premium tech service"} — Affordable pricing in USD. Serving businesses globally. Get a free quote from Solvix Core.`
		},
		{
			name: "keywords",
			content: `${loaderData?.title ?? "tech service"}, affordable ${loaderData?.title?.toLowerCase() ?? "service"}, hire ${loaderData?.title?.toLowerCase() ?? "developer"}, ${loaderData?.title?.toLowerCase() ?? "service"} price USD, Solvix Core`
		},
		{
			property: "og:title",
			content: `${loaderData?.title ?? "Service"} | Solvix Core`
		},
		{
			property: "og:description",
			content: `${loaderData?.blurb ?? "Solvix Core service."} Serving clients globally.`
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$12.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$13
});
var AboutRoute = Route$11.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$13
});
var BlogRoute = Route$10.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$13
});
var CareersRoute = Route$9.update({
	id: "/careers",
	path: "/careers",
	getParentRoute: () => Route$13
});
var ContactRoute = Route$8.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$13
});
var FaqsRoute = Route$7.update({
	id: "/faqs",
	path: "/faqs",
	getParentRoute: () => Route$13
});
var IndustriesRoute = Route$6.update({
	id: "/industries",
	path: "/industries",
	getParentRoute: () => Route$13
});
var ProjectsRoute = Route$5.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$13
});
var TechnologiesRoute = Route$4.update({
	id: "/technologies",
	path: "/technologies",
	getParentRoute: () => Route$13
});
var CaseStudiesIndexRoute = Route$3.update({
	id: "/case-studies/",
	path: "/case-studies/",
	getParentRoute: () => Route$13
});
var CaseStudiesSlugRoute = Route$2.update({
	id: "/case-studies/$slug",
	path: "/case-studies/$slug",
	getParentRoute: () => Route$13
});
var ServicesIndexRoute = Route$1.update({
	id: "/services/",
	path: "/services/",
	getParentRoute: () => Route$13
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	BlogRoute,
	CareersRoute,
	ContactRoute,
	FaqsRoute,
	IndustriesRoute,
	ProjectsRoute,
	TechnologiesRoute,
	CaseStudiesSlugRoute,
	ServicesSlugRoute: Route.update({
		id: "/services/$slug",
		path: "/services/$slug",
		getParentRoute: () => Route$13
	}),
	CaseStudiesIndexRoute,
	ServicesIndexRoute
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { CtaBand as i, Route as n, Route$2 as r, router_exports as t };
