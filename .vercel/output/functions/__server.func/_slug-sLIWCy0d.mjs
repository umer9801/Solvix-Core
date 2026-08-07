import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { C as SectionHead, E as TECHNOLOGIES, _ as PROJECTS, b as Reveal, g as PROCESS, s as FAQS } from "./_ssr/primitives-BOCQWqtn.mjs";
import { v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { T as Check, j as ArrowUpRight } from "./_libs/lucide-react.mjs";
import { i as CtaBand, n as Route } from "./_ssr/router-CmXWfgUi.mjs";
import { t as PageHero } from "./_ssr/PageHero-xNcDTARy.mjs";
import { n as project_2_default, t as project_1_default } from "./_ssr/project-2-DfosXdGn.mjs";
import { t as project_3_default } from "./_ssr/project-3-ESm6Vkz6.mjs";
import { t as ai_graphic_default } from "./_ssr/ai-graphic-BaZulF87.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-sLIWCy0d.js
var import_jsx_runtime = require_jsx_runtime();
var images = {
	"project-1": project_1_default,
	"project-2": project_2_default,
	"project-3": project_3_default
};
function ServiceDetail() {
	const s = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: s.title,
			title: s.title,
			body: s.blurb
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-lux pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: ai_graphic_default,
				alt: `${s.title} illustration`,
				loading: "lazy",
				width: 1200,
				height: 1200,
				className: "aspect-[21/9] w-full rounded-[2.5rem] border border-border object-cover"
			}) })
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
				eyebrow: "Related work",
				title: "Recent projects in this territory."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-3",
				children: PROJECTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/case-studies/$slug",
					params: { slug: p.slug },
					className: "group card-lux overflow-hidden rounded-[1.75rem] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: images[p.image],
						alt: p.title,
						loading: "lazy",
						width: 1200,
						height: 1008,
						className: "aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: p.sector
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display mt-2 text-xl",
							children: p.title
						})]
					})]
				}, p.slug))
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
