import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as useScroll, r as useTransform } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { C as SectionHead, E as TESTIMONIALS, O as TextReveal, S as STATS, b as Reveal, d as Marquee, g as PROCESS, i as CLIENTS, l as LuxButton, n as Blobs, o as Counter, w as SpotlightCard, x as SERVICES } from "./primitives-DL1IYeHP.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Gauge, D as Brain, M as ArrowRight, O as Bot, c as Smartphone, f as Quote, i as Video, j as ArrowUpRight, l as ShoppingBag, r as Workflow, t as Zap, w as CircleCheckBig } from "../_libs/lucide-react.mjs";
import { r as CtaBand } from "./router-CUTUSDtf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BOx_dP-d.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var home_hero_default = "/assets/home-hero-C7z52xSX.PNG";
var serviceIcons = {
	"ai-solutions": Brain,
	"n8n-automation": Workflow,
	"web-development": Zap,
	"shopify-store-design": ShoppingBag,
	"mobile-app-development": Smartphone,
	"content-creation": Video,
	"marketing-seo": ArrowUpRight,
	"langchain-integration": Bot,
	"openai-integration": Brain,
	"pos-systems": ShoppingBag
};
var accentStyles = {
	primary: {
		bg: "bg-blue-50",
		icon: "text-blue-600",
		border: "group-hover:border-blue-300"
	},
	violet: {
		bg: "bg-violet-50",
		icon: "text-violet-600",
		border: "group-hover:border-violet-300"
	},
	sage: {
		bg: "bg-emerald-50",
		icon: "text-emerald-600",
		border: "group-hover:border-emerald-300"
	},
	peach: {
		bg: "bg-orange-50",
		icon: "text-orange-600",
		border: "group-hover:border-orange-300"
	},
	coral: {
		bg: "bg-red-50",
		icon: "text-red-600",
		border: "group-hover:border-red-300"
	}
};
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "relative overflow-hidden pb-20 pt-10 md:pb-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blobs, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-lux",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex h-2 w-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-primary" })]
						}), "Now serving globally — Canada · UK · Pakistan"]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "display-xl mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextReveal, {
							as: "p",
							text: "Technology that",
							className: "block"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextReveal, {
									as: "p",
									text: "drives",
									className: "inline-block",
									delay: .18
								}),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									initial: {
										opacity: 0,
										filter: "blur(14px)"
									},
									animate: {
										opacity: 1,
										filter: "blur(0px)"
									},
									transition: {
										duration: 1.1,
										delay: .7,
										ease: [
											.16,
											1,
											.3,
											1
										]
									},
									className: "italic text-primary",
									children: "real results"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .5,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground",
							children: "Solvix Core builds AI, automation, web and Shopify systems that cut launch time, reduce operating cost and keep work aligned to the value your team needs."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .62,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-lg text-sm leading-relaxed text-muted-foreground",
							children: "We design, deliver and support production-ready systems with the discipline of a consultancy and the speed of a product team."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .76,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LuxButton, { children: ["Start a project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxButton, {
									variant: "ghost",
									children: "Explore services"
								})
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .74,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8",
							children: STATS.slice(0, 3).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-display text-3xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
									value: s.value,
									suffix: s.suffix
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-xs text-muted-foreground",
								children: s.label
							})] }, s.label))
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					style: {
						y,
						scale
					},
					className: "relative hidden lg:block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative overflow-hidden rounded-[2.5rem] border border-border shadow-lift",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: home_hero_default,
							alt: "Solvix Core home hero",
							width: 1408,
							height: 1200,
							className: "h-full w-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: 1,
							duration: .8,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: "absolute -bottom-8 -left-6 w-64 rounded-3xl border border-border bg-card/90 p-5 shadow-lift backdrop-blur-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold",
									children: "Client satisfaction"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display mt-3 text-4xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
									value: 98,
									suffix: "%"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Across all delivered projects"
							})
						]
					})]
				})]
			})
		})]
	});
}
function TrustedBy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border bg-surface-2 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-lux flex flex-col gap-6 md:flex-row md:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow shrink-0 md:w-44",
				children: "Serving teams in"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {
				items: CLIENTS,
				className: "flex-1",
				itemClassName: "font-display text-xl tracking-tight text-foreground/35"
			})]
		})
	});
}
function FeaturedServices() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-lux py-20 md:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-12 flex flex-wrap items-end justify-between gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "What we do",
				title: "Nine services. One team. Zero hand-offs.",
				className: "max-w-xl"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/services",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LuxButton, {
					variant: "ghost",
					children: ["All services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: SERVICES.map((s, i) => {
				const Icon = serviceIcons[s.slug] ?? Zap;
				const style = accentStyles[s.accent] ?? accentStyles.primary;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpotlightCard, {
						className: `group relative h-full overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${style.border}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: `/services/${s.slug}`,
							className: "flex h-full flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute -right-6 -top-6 h-24 w-24 rounded-full ${style.bg} opacity-60 blur-2xl transition-all duration-500 group-hover:opacity-100` }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `inline-flex h-11 w-11 items-center justify-center rounded-xl ${style.bg}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `h-5 w-5 ${style.icon}` })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: `eyebrow mt-5 ${style.icon}`,
											children: s.group
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display mt-1.5 text-xl leading-tight text-foreground",
											children: s.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3",
											children: s.blurb
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: `mt-5 inline-flex items-center gap-1.5 text-xs font-semibold ${style.icon}`,
									children: ["Learn more", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
								})
							]
						})
					})
				}, s.slug);
			})
		})]
	});
}
function StatsBand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-ink py-20 text-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-hue-drift pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-primary/25 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-lux relative",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-10 md:grid-cols-4",
				children: STATS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-l border-background/15 pl-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-5xl md:text-6xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								value: s.value,
								suffix: s.suffix
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-background/60",
							children: s.label
						})]
					})
				}, s.label))
			})
		})]
	});
}
function ProcessSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-lux py-20 md:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-12 flex flex-wrap items-end justify-between gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "How we work",
				title: "Five steps from brief to live.",
				className: "max-w-xl"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/about",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LuxButton, {
					variant: "ghost",
					children: ["About us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-5",
			children: PROCESS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .07,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lift",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs font-bold text-primary",
							children: p.step
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display mt-3 text-lg leading-tight",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: p.body
						})
					]
				})
			}, p.step))
		})]
	});
}
function WhyUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border bg-surface py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-lux",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Why Solvix Core",
					title: "Premium quality at prices that make sense."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [
						"35% below market rates — all prices in CAD",
						"Senior engineers and AI specialists only",
						"You own 100% of the code from day one",
						"Serving Canada, UK and Pakistan",
						"Partnered with Lepro Trading Inc",
						"98% client satisfaction rate"
					].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .06,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: r
							})]
						})
					}, r))
				})]
			})
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-lux py-20 md:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-12 flex flex-wrap items-end justify-between gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Clients",
				title: "What our clients say.",
				className: "max-w-xl"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contact",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LuxButton, {
					variant: "ghost",
					children: ["Work with us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-3",
			children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .09,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-6 w-6 text-primary/40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "font-display mt-5 flex-1 text-lg leading-snug",
							children: [
								"\"",
								t.quote,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-6 flex items-center gap-3 border-t border-border pt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary",
								children: t.name.split(" ").map((n) => n[0]).join("")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								children: t.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: t.role
							})] })]
						})
					]
				})
			}, t.name))
		})]
	});
}
function LeproPartnership() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-lux py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/5 via-blue-50 to-primary/5 px-8 py-10 md:px-14 md:py-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-primary/10 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-300/20 blur-2xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex flex-col items-center gap-6 text-center md:flex-row md:text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border-2 border-primary/30 bg-white shadow-md",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								className: "h-9 w-9 text-primary",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor",
								strokeWidth: 1.5,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									d: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-primary mb-2",
									children: "Official Partnership"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-display text-3xl md:text-4xl leading-tight text-foreground",
									children: [
										"Proudly Partnered With",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: "Lepro Trading Inc"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-xl text-muted-foreground leading-relaxed",
									children: "A strategic alliance committed to delivering world-class technology solutions across Canada, UK and Pakistan — backed by trust, reliability and shared vision."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center gap-2 shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2",
								children: [
									"CA",
									"UK",
									"PK"
								].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-lg border border-border bg-white px-3 py-1.5 font-mono text-xs font-semibold text-foreground shadow-sm",
									children: c
								}, c))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs text-muted-foreground",
								children: "3 Countries · 1 Standard"
							})]
						})
					]
				})
			]
		}) })
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustedBy, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeproPartnership, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedServices, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsBand, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { Home as component };
