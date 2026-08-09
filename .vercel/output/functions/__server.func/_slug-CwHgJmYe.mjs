import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { C as SectionHead, T as TECHNOLOGIES, b as Reveal, g as PROCESS, h as PRICING, s as FAQS } from "./_ssr/primitives-Bw9MYgoN.mjs";
import { v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { T as Check, j as ArrowUpRight } from "./_libs/lucide-react.mjs";
import { t as PageHero } from "./_ssr/PageHero--CmVGfYD.mjs";
import { r as CtaBand } from "./_ssr/router-xyX49f_a.mjs";
import { t as Route } from "./_ssr/router-xyX49f_a2.mjs";
import { t as pos_portfolio_default } from "./_ssr/pos-portfolio-BywQPkOO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CwHgJmYe.js
var import_jsx_runtime = require_jsx_runtime();
var ai_integration_default = "/assets/ai-integration-CQXvHYw2.PNG";
var heroImages = {
	"ai-solutions": ai_integration_default,
	"web-development": "/assets/web-development-CaXD7QWC.PNG",
	"content-creation": "/assets/content%20creation-D7uzFij8.PNG",
	"marketing-seo": "/assets/marketing-IJzl7Cqs.PNG",
	"langchain-integration": "/assets/langchain-C1oJI0mV.PNG",
	"openai-integration": ai_integration_default,
	"pos-systems": pos_portfolio_default
};
function ServiceDetail() {
	const s = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: s.title,
			title: s.title,
			body: s.blurb,
			heroNote: "Every service page explains what we deliver, how we move fast, and what success looks like in production.",
			image: heroImages[s.slug],
			imageAlt: s.title,
			imageMode: "portrait"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-lux pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-[1fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Overview",
					title: "What this engagement actually looks like.",
					body: `${s.blurb} We start with a diagnostic, agree the measures of success, then deliver in two-week increments with everything running in production from the first one.`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Features"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3",
						children: [
							"Dedicated senior squad",
							"Architecture & security review",
							"Design system foundations",
							"Automated testing pipeline",
							"Observability from day one"
						].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), f]
						}, f))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Benefits"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3",
						children: [
							"Lower total cost of ownership",
							"Change velocity that holds up",
							"Fewer production incidents",
							"Documentation your team trusts",
							"A capability, not a dependency"
						].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-coral" }), f]
						}, f))
					})] })]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-lux",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Technology",
					title: "What we'd likely build it with."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 flex flex-wrap gap-2",
					children: TECHNOLOGIES.flatMap((t) => t.items).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-border bg-card px-4 py-2 font-mono text-xs text-muted-foreground",
						children: t
					}, t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-lux py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Working process",
				title: "Five movements, repeated with discipline."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border md:grid-cols-5",
				children: PROCESS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-primary",
							children: p.step
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display mt-4 text-xl leading-tight",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: p.body
						})
					]
				}, p.step))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-lux pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Pricing",
				title: "Service pricing cards for every level."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 lg:grid-cols-3",
				children: PRICING.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `flex h-full flex-col rounded-[2rem] p-9 ${p.featured ? "bg-ink text-background shadow-lift lg:-translate-y-4" : "card-lux"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `eyebrow ${p.featured ? "text-background/60" : ""}`,
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display mt-5 text-5xl",
								children: p.price
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `mt-1 text-xs ${p.featured ? "text-background/55" : "text-muted-foreground"}`,
								children: p.cadence
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `mt-6 text-sm ${p.featured ? "text-background/70" : "text-muted-foreground"}`,
								children: p.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-8 flex-1 space-y-3",
								children: p.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: p.featured ? "text-background/80" : "text-muted-foreground",
										children: f
									})]
								}, f))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: `mt-9 rounded-full px-6 py-3.5 text-center text-sm font-semibold transition-transform hover:-translate-y-0.5 ${p.featured ? "bg-background text-foreground" : "bg-ink text-background"}`,
								children: p.price === "Bespoke" ? "Talk to us" : "Reserve a squad"
							})
						]
					})
				}, p.name))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-lux pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "FAQs",
				title: "Questions we're asked before signing."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 divide-y divide-border border-y border-border",
				children: FAQS.slice(0, 4).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "group py-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
						className: "font-display flex cursor-pointer items-center justify-between gap-6 text-xl",
						children: [f.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-90" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl leading-relaxed text-muted-foreground",
						children: f.a
					})]
				}, f.q))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, { title: `Let's talk about ${s.title.toLowerCase()}.` })
	] });
}
//#endregion
export { ServiceDetail as component };
