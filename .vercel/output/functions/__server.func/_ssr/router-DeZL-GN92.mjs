import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { a as useScroll, n as useSpring, s as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { a as COMPANY, f as NAV_LINKS, j as cn, n as Blobs, u as Magnetic, x as SERVICES } from "./primitives-k6Kkx87c.mjs";
import { R as notFound, _ as createRootRouteWithContext, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowUp, E as CalendarDays, d as Search, g as Menu, j as ArrowUpRight, n as X } from "../_libs/lucide-react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { a as logo_default, i as Footer, n as Route$13 } from "./router-DeZL-GN9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DeZL-GN9.js
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
var styles_default = "/assets/styles-DObk63Ks.css";
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
var Route$12 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Solvix Core — Premium Tech Solutions | Canada, UK & Pakistan" },
			{
				name: "description",
				content: "Solvix Core delivers premium technology solutions — AI, automation, web development, Shopify and app development — serving businesses in Canada, UK and Pakistan."
			},
			{
				name: "author",
				content: "Solvix Core"
			},
			{
				property: "og:title",
				content: "Solvix Core — Premium Tech Solutions"
			},
			{
				property: "og:description",
				content: "AI solutions, automation, web development and e-commerce — serving Canada, UK and Pakistan."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
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
				href: "/logo.png",
				type: "image/png"
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
	const { queryClient } = Route$12.useRouteContext();
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
var $$splitComponentImporter$11 = () => import("./routes-CNOl6dzA.mjs");
var Route$11 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Solvix Core — Premium Tech Solutions | Canada, UK & Pakistan" },
		{
			name: "description",
			content: "Solvix Core delivers AI solutions, automation, web development, Shopify stores and app development for businesses in Canada, UK and Pakistan."
		},
		{
			property: "og:title",
			content: "Solvix Core — Premium Tech Solutions"
		},
		{
			property: "og:description",
			content: "AI, automation, web development and e-commerce solutions for businesses in Canada, UK and Pakistan."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./about-7fzoiK-a.mjs");
var Route$10 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Solvix Core — Premium Tech Solutions for Canada, UK & Pakistan" },
		{
			name: "description",
			content: "Learn about Solvix Core — our mission, team, values and the story behind our premium technology solutions serving Canada, UK and Pakistan."
		},
		{
			property: "og:title",
			content: "About Solvix Core"
		},
		{
			property: "og:description",
			content: "Our story, values, team and the technology that powers our clients' success."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./blog-CFC6lyok.mjs");
var Route$9 = createFileRoute("/blog")({
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
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./careers-D1AWtHNM.mjs");
var Route$8 = createFileRoute("/careers")({
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
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./contact-eB7I11jZ.mjs");
var Route$7 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact Solvix Core — Start a Project" },
		{
			name: "description",
			content: "Contact Solvix Core for AI solutions, web development, automation and Shopify services. Serving Canada, UK and Pakistan via WhatsApp and email."
		},
		{
			property: "og:title",
			content: "Contact Solvix Core — Start a Project"
		},
		{
			property: "og:description",
			content: "Tell us about your project — we respond within 24 hours."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./faqs-D4HtZZkB.mjs");
var Route$6 = createFileRoute("/faqs")({
	head: () => ({ meta: [
		{ title: "FAQs — Working with Solvix Core" },
		{
			name: "description",
			content: "How projects start, how we price, who owns the IP, how quickly we can begin, and what happens after launch — all your questions answered."
		},
		{
			property: "og:title",
			content: "FAQs — Working with Solvix Core"
		},
		{
			property: "og:description",
			content: "Straight answers to the questions we get most."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./industries-DqfwXFAb.mjs");
var Route$5 = createFileRoute("/industries")({
	head: () => ({ meta: [
		{ title: "Industries We Serve | Solvix Core" },
		{
			name: "description",
			content: "E-commerce, healthcare, finance, real estate, education and more — industries where Solvix Core delivers proven results in Canada, UK and Pakistan."
		},
		{
			property: "og:title",
			content: "Industries We Serve | Solvix Core"
		},
		{
			property: "og:description",
			content: "Sectors where we deliver proven results."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./projects-BGz0CfLM.mjs");
var Route$4 = createFileRoute("/projects")({
	head: () => ({ meta: [
		{ title: "Selected Work | Solvix Core" },
		{
			name: "description",
			content: "AI platforms, Shopify stores, web applications and automation systems delivered by Solvix Core for clients in Canada, UK and Pakistan."
		},
		{
			property: "og:title",
			content: "Selected Work | Solvix Core"
		},
		{
			property: "og:description",
			content: "AI, e-commerce, automation and web projects."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./technologies-BSIZauO0.mjs");
var Route$3 = createFileRoute("/technologies")({
	head: () => ({ meta: [
		{ title: "Technologies — Our Stack | Solvix Core" },
		{
			name: "description",
			content: "The languages, frameworks, AI tooling and cloud infrastructure Solvix Core builds production systems with — serving Canada, UK and Pakistan."
		},
		{
			property: "og:title",
			content: "Technologies — Our Stack | Solvix Core"
		},
		{
			property: "og:description",
			content: "Chosen for performance, reliability and long-term value."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./case-studies-o3o0fBlz.mjs");
var Route$2 = createFileRoute("/case-studies/")({
	head: () => ({ meta: [
		{ title: "Case Studies — Real Results | Solvix Core" },
		{
			name: "description",
			content: "Detailed accounts of how Solvix Core delivered measurable results for clients in Canada, UK and Pakistan."
		},
		{
			property: "og:title",
			content: "Case Studies | Solvix Core"
		},
		{
			property: "og:description",
			content: "Challenge, approach and measured results."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./services-BKxa44nQ.mjs");
var Route$1 = createFileRoute("/services/")({
	head: () => ({ meta: [
		{ title: "Services — AI, Web, Shopify, Automation & More | Solvix Core" },
		{
			name: "description",
			content: "Nine core services across AI, automation, web development, Shopify, app development and marketing — delivered for businesses in Canada, UK and Pakistan."
		},
		{
			property: "og:title",
			content: "Services — AI, Web, Shopify & More | Solvix Core"
		},
		{
			property: "og:description",
			content: "Twenty-two capabilities, one delivery standard."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("../_slug-BmR4z7fH.mjs");
var Route = createFileRoute("/services/$slug")({
	loader: ({ params }) => {
		const service = SERVICES.find((s) => s.slug === params.slug);
		if (!service) throw notFound();
		return service;
	},
	head: ({ loaderData }) => ({ meta: [
		{ title: `${loaderData?.title ?? "Service"} — Solvix Core` },
		{
			name: "description",
			content: loaderData?.blurb ?? "Solvix Core service."
		},
		{
			property: "og:title",
			content: `${loaderData?.title ?? "Service"} — Solvix Core`
		},
		{
			property: "og:description",
			content: loaderData?.blurb ?? "Solvix Core service."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$11.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$12
});
var AboutRoute = Route$10.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$12
});
var BlogRoute = Route$9.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$12
});
var CareersRoute = Route$8.update({
	id: "/careers",
	path: "/careers",
	getParentRoute: () => Route$12
});
var ContactRoute = Route$7.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$12
});
var FaqsRoute = Route$6.update({
	id: "/faqs",
	path: "/faqs",
	getParentRoute: () => Route$12
});
var IndustriesRoute = Route$5.update({
	id: "/industries",
	path: "/industries",
	getParentRoute: () => Route$12
});
var ProjectsRoute = Route$4.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$12
});
var TechnologiesRoute = Route$3.update({
	id: "/technologies",
	path: "/technologies",
	getParentRoute: () => Route$12
});
var CaseStudiesIndexRoute = Route$2.update({
	id: "/case-studies/",
	path: "/case-studies/",
	getParentRoute: () => Route$12
});
var CaseStudiesSlugRoute = Route$13.update({
	id: "/case-studies/$slug",
	path: "/case-studies/$slug",
	getParentRoute: () => Route$12
});
var ServicesIndexRoute = Route$1.update({
	id: "/services/",
	path: "/services/",
	getParentRoute: () => Route$12
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
		getParentRoute: () => Route$12
	}),
	CaseStudiesIndexRoute,
	ServicesIndexRoute
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
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
export { getRouter as n, router_exports as r, Route as t };
