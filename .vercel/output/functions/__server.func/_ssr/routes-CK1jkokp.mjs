import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as useScroll, r as useTransform } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { C as SectionHead, D as TESTIMONIALS, E as TECHNOLOGIES, S as STATS, _ as PROJECTS, b as Reveal, c as INDUSTRIES, d as Marquee, g as PROCESS, i as CLIENTS, j as accentBg, k as TextReveal, l as LuxButton, n as Blobs, o as Counter, r as CASE_STUDIES, v as ParallaxImage, w as SpotlightCard, x as SERVICES } from "./primitives-BOCQWqtn.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Compass, D as Boxes, M as ArrowRight, O as Bot, S as Gauge, j as ArrowUpRight, n as Workflow, o as Sparkles, s as ShieldCheck, u as Quote, v as Layers, w as CloudCog } from "../_libs/lucide-react.mjs";
import { i as CtaBand } from "./router-CmXWfgUi.mjs";
import { n as project_2_default, t as project_1_default } from "./project-2-DfosXdGn.mjs";
import { t as project_3_default } from "./project-3-ESm6Vkz6.mjs";
import { t as ai_graphic_default } from "./ai-graphic-BaZulF87.mjs";
import { n as office_team_default, t as hero_abstract_default } from "./hero-abstract-C9g1yG_E.mjs";
import { t as dashboard_default } from "./dashboard-F6NN-ziS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CK1jkokp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var projectImages = {
	"project-1": project_1_default,
	"project-2": project_2_default,
	"project-3": project_3_default
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
		className: "relative overflow-hidden pb-24 pt-10 md:pb-32",
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
						}), "Two delivery squads open for Q3 2026"]
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
							children: "Solvix Core is a premium technology solutions provider serving businesses in Canada, UK and Pakistan. We build AI systems, automation workflows, websites, Shopify stores and mobile apps — at 35% below market rates."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .62,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LuxButton, { children: ["Start a project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/projects",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxButton, {
									variant: "ghost",
									children: "See selected work"
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
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative overflow-hidden rounded-[2.5rem] border border-border shadow-lift",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hero_abstract_default,
							alt: "Sculptural abstract forms in emerald, coral and violet",
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
									children: "Delivery health"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display mt-3 text-4xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
									value: 99.99,
									suffix: "%"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Uptime across managed platforms"
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
		className: "border-y border-border bg-surface-2 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-lux flex flex-col gap-6 md:flex-row md:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow shrink-0 md:w-56",
				children: "Trusted by teams at"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {
				items: CLIENTS,
				className: "flex-1",
				itemClassName: "font-display text-2xl tracking-tight text-foreground/35"
			})]
		})
	});
}
function Intro() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-lux py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParallaxImage, {
					src: office_team_default,
					alt: "Solvix Core team collaborating",
					className: "aspect-[4/5] rounded-[2rem]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-dots absolute -right-6 -top-6 -z-10 h-40 w-40 rounded-3xl" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "The company",
				title: "We are the team businesses in Canada, UK and Pakistan call when results matter.",
				body: "50+ designers, engineers and AI specialists working remotely across three countries. No account managers, no delays — the people who plan the work are the people who ship it."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-8 sm:grid-cols-2",
				children: [
					{
						icon: Compass,
						title: "Judgement first",
						body: "We start with the operating model, not the tech stack."
					},
					{
						icon: ShieldCheck,
						title: "Production from day one",
						body: "Every increment is deployable, observable and tested."
					},
					{
						icon: Layers,
						title: "Systems, not screens",
						body: "Design systems and architecture your team can extend."
					},
					{
						icon: Sparkles,
						title: "Craft that compounds",
						body: "Lower running costs, faster change, fewer surprises."
					}
				].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-5 w-5 text-primary" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: f.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-sm leading-relaxed text-muted-foreground",
							children: f.body
						})] })]
					})
				}, f.title))
			})] })]
		})
	});
}
function StatsBand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-ink py-24 text-background",
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
function FeaturedServices() {
	const featured = SERVICES.slice(0, 8);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-lux py-24 md:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-end justify-between gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Capabilities",
				title: "Twenty-two disciplines. One delivery standard.",
				className: "max-w-2xl"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/services",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LuxButton, {
					variant: "ghost",
					children: ["All services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 grid gap-5 md:grid-cols-6",
			children: featured.map((s, i) => {
				const large = i === 0 || i === 5;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .05,
					className: large ? "md:col-span-3" : "md:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpotlightCard, {
						className: "card-lux group h-full rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services/$slug",
							params: { slug: s.slug },
							className: "flex h-full flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `flex h-12 w-12 items-center justify-center rounded-2xl ${accentBg[s.accent]}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Boxes, { className: "h-5 w-5 text-ink/70" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow mt-8",
									children: s.group
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: `mt-2 ${large ? "display-md" : "font-display text-2xl leading-tight"}`,
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 flex-1 text-sm leading-relaxed text-muted-foreground",
									children: s.blurb
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary",
									children: ["Explore", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" })]
								})
							]
						})
					})
				}, s.slug);
			})
		})]
	});
}
function TechStack() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border bg-surface py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-lux",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Technology",
				title: "Boring where it should be. Sharp where it counts.",
				body: "We choose tools for their operational cost over five years, not their popularity this quarter.",
				align: "center"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border md:grid-cols-3",
				children: TECHNOLOGIES.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full bg-card p-8 transition-colors duration-500 hover:bg-surface-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl",
							children: t.group
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 flex flex-wrap gap-2",
							children: t.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-full border border-border px-3 py-1.5 font-mono text-[11px] text-muted-foreground",
								children: it
							}, it))
						})]
					})
				}, t.group))
			})]
		})
	});
}
function ProcessSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-lux py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-16 lg:grid-cols-[0.9fr_1.1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:sticky lg:top-32 lg:self-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "How we work",
					title: "A method built for consequence, not ceremony.",
					body: "Five movements, repeated with discipline. Each one ends with something real: a decision, a design, a deployment."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxButton, {
								variant: "ghost",
								children: "Read our principles"
							})
						})
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "relative border-l border-border pl-8",
				children: PROCESS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .07,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "group relative pb-12 last:pb-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -left-[2.55rem] flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card font-mono text-[10px] transition-colors group-hover:bg-primary group-hover:text-primary-foreground",
								children: p.step
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-3xl leading-tight",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-lg leading-relaxed text-muted-foreground",
								children: p.body
							})
						]
					})
				}, p.step))
			})]
		})
	});
}
function Automation() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-lux pb-24 md:pb-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grain relative overflow-hidden rounded-[2.5rem] border border-border bg-surface-2 p-8 md:p-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Business automation",
					title: "Remove the work between the work.",
					body: "We map the process, quantify the drag, then orchestrate systems so people stop being the integration layer."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 space-y-5",
					children: [
						{
							k: "Process mapping",
							v: "Every handoff, queue and rework loop, measured."
						},
						{
							k: "Orchestration",
							v: "Event-driven workflows across your existing tools."
						},
						{
							k: "Human-in-the-loop",
							v: "Approvals and exceptions handled with dignity."
						}
					].map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-5 border-b border-border pb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workflow, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: row.k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: row.v
							})] })]
						})
					}, row.k))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .15,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: dashboard_default,
							alt: "Light analytics dashboard interface",
							loading: "lazy",
							width: 1408,
							height: 1008,
							className: "w-full rounded-3xl border border-border shadow-lift"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "animate-float-slow absolute -bottom-6 -right-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-lift",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Manual hours removed"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
									value: 11400,
									suffix: "/yr"
								})
							})]
						})]
					})
				})]
			})
		})
	});
}
function AiSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden bg-ink py-24 text-background md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-lux",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-background/60",
							children: "Intelligence practice"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextReveal, {
						text: "AI that survives contact with production.",
						className: "display-lg mt-6 max-w-xl"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-lg text-lg leading-relaxed text-background/70",
							children: "Retrieval grounded in your data, evaluation harnesses that catch regressions, and guardrails your compliance team can read. Demos are easy — we build the other 90%."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-px overflow-hidden rounded-3xl bg-background/15 sm:grid-cols-3",
						children: [
							{
								icon: Bot,
								k: "Assistants",
								v: "Grounded, cited, handoff-aware"
							},
							{
								icon: CloudCog,
								k: "Pipelines",
								v: "Evaluated on every deploy"
							},
							{
								icon: ShieldCheck,
								k: "Guardrails",
								v: "Policy, PII and audit built in"
							}
						].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .08,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "h-full bg-ink px-6 py-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-5 w-5 text-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 font-semibold",
										children: c.k
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-background/55",
										children: c.v
									})
								]
							})
						}, c.k))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: ai_graphic_default,
						alt: "Abstract neural network illustration",
						loading: "lazy",
						width: 1200,
						height: 1200,
						className: "animate-float-slow w-full rounded-[2.5rem]"
					})
				})]
			})
		})
	});
}
function FeaturedWork() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-lux py-24 md:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			eyebrow: "Selected work",
			title: "Three platforms, three very different problems."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 space-y-8",
			children: PROJECTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .06,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/case-studies/$slug",
					params: { slug: p.slug },
					className: "group grid items-center gap-8 rounded-[2rem] border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift md:grid-cols-[1.1fr_1fr] md:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: i % 2 === 1 ? "md:order-2" : "",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-3xl bg-surface",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: projectImages[p.image],
								alt: p.title,
								loading: "lazy",
								width: 1200,
								height: 1008,
								className: "w-full transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-2 md:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.sector }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-border" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.year })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "display-md mt-4",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-md leading-relaxed text-muted-foreground",
								children: p.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 inline-block rounded-full bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground",
								children: p.metric
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-8 flex items-center gap-2 text-sm font-semibold text-primary",
								children: ["Read the case study", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" })]
							})
						]
					})]
				})
			}, p.slug))
		})]
	});
}
function IndustriesStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border bg-surface py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-lux",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Industries",
					title: "Domains we know cold.",
					className: "max-w-xl"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/industries",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxButton, {
						variant: "ghost",
						children: "Explore industries"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14",
				children: INDUSTRIES.map((ind, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .04,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group flex flex-col justify-between gap-2 border-t border-border py-6 transition-colors hover:bg-card/60 md:flex-row md:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-muted-foreground",
								children: String(i + 1).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl transition-transform duration-500 group-hover:translate-x-2 md:text-4xl",
								children: ind.name
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-sm text-sm text-muted-foreground md:text-right",
							children: ind.note
						})]
					})
				}, ind.name))
			})]
		})
	});
}
function CaseStudyPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-lux py-24 md:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			eyebrow: "Evidence",
			title: "Outcomes, stated plainly.",
			body: "Every engagement is measured against numbers agreed before we start.",
			align: "center"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 grid gap-6 md:grid-cols-3",
			children: CASE_STUDIES.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/case-studies/$slug",
					params: { slug: c.slug },
					className: "card-lux group flex h-full flex-col rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: c.client
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display mt-3 text-2xl leading-tight",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 space-y-3 border-t border-border pt-6",
							children: c.results.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl text-primary",
									children: r.k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-right text-xs text-muted-foreground",
									children: r.v
								})]
							}, r.k))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-8 flex items-center gap-2 text-sm font-semibold",
							children: ["Full story", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" })]
						})
					]
				})
			}, c.slug))
		})]
	});
}
function WhyUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-lux pb-24 md:pb-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "order-2 lg:order-1",
				children: [
					{
						k: "Senior-only teams",
						v: "Median 11 years of experience. No pyramid staffing."
					},
					{
						k: "Fixed monthly capacity",
						v: "Predictable cost, flexible roadmap, no change-order games."
					},
					{
						k: "You own everything",
						v: "Code, infrastructure, documentation — in your org from commit one."
					},
					{
						k: "Enablement built in",
						v: "Your engineers pair with ours. We plan our own redundancy."
					}
				].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .07,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group flex items-start gap-6 border-b border-border py-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-4xl text-primary/25 transition-colors group-hover:text-primary",
							children: String(i + 1).padStart(2, "0")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl",
							children: r.k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: r.v
						})] })]
					})
				}, r.k))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "order-1 lg:order-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Why Solvix Core",
					title: "Premium quality at prices that make sense for your business.",
					body: "We deliver 35% below market rates without cutting corners — because we have built efficient processes, a remote-first team and a relentless focus on value."
				})
			})]
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border bg-surface-2 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-lux",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Testimonials",
				title: "What partners say when we're not in the room."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-6 md:grid-cols-3",
				children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .09,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: `card-lux flex h-full flex-col rounded-[1.75rem] p-8 ${i === 1 ? "md:-translate-y-6" : ""}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-7 w-7 text-primary/40" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "font-display mt-6 flex-1 text-xl leading-snug",
								children: [
									"“",
									t.quote,
									"”"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-8 flex items-center gap-3 border-t border-border pt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex h-10 w-10 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground",
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
		})
	});
}
function GlobalReach() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-lux py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Global reach",
				title: "Four studios. Sixteen hours of overlap.",
				body: "Follow-the-sun delivery without the follow-the-sun confusion — one backlog, one standard, one team."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .15,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rule-dots relative aspect-[16/9] overflow-hidden rounded-[2rem] border border-border bg-surface",
					children: [
						{
							city: "Lisbon",
							tz: "GMT+1",
							x: "44%",
							y: "48%"
						},
						{
							city: "London",
							tz: "GMT",
							x: "47%",
							y: "36%"
						},
						{
							city: "New York",
							tz: "GMT-5",
							x: "24%",
							y: "44%"
						},
						{
							city: "Singapore",
							tz: "GMT+8",
							x: "76%",
							y: "62%"
						}
					].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute",
						style: {
							left: c.x,
							top: c.y
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex h-3 w-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70",
								style: { animationDelay: `${i * .4}s` }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-3 w-3 rounded-full bg-primary" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-card px-3 py-1 text-[10px] font-semibold shadow-soft",
							children: [
								c.city,
								" · ",
								c.tz
							]
						})]
					}, c.city))
				})
			})]
		})
	});
}
function ClientLogos() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-lux",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-center",
				children: "Partners, platforms and alliances"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4",
				children: [
					"AWS Advanced",
					"Google Cloud",
					"Cloudflare",
					"Snowflake"
				].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-center bg-card px-6 py-8 font-mono text-xs tracking-widest text-muted-foreground",
					children: p.toUpperCase()
				}, p))
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustedBy, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Intro, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsBand, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedServices, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechStack, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Automation, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedWork, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndustriesStrip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseStudyPreview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientLogos, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalReach, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { Home as component };
