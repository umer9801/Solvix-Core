import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { C as SectionHead, b as Reveal, h as PRICING, s as FAQS } from "./primitives-BOCQWqtn.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as Check } from "../_libs/lucide-react.mjs";
import { i as CtaBand } from "./router-CmXWfgUi.mjs";
import { t as PageHero } from "./PageHero-xNcDTARy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pricing-Ek51elEj.js
var import_jsx_runtime = require_jsx_runtime();
function Pricing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Pricing",
			title: "Fixed capacity. Flexible roadmap. No surprises.",
			body: "We sell teams, not tickets. You get a known monthly cost and the right to change your mind about what we build."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-lux pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-lux pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Fine print",
				title: "The questions behind the numbers."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 divide-y divide-border border-y border-border",
				children: FAQS.slice(0, 4).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "group py-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
						className: "font-display cursor-pointer text-xl",
						children: f.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl leading-relaxed text-muted-foreground",
						children: f.a
					})]
				}, f.q))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			eyebrow: "Budgeting",
			title: "Need a number for the board this week?"
		})
	] });
}
//#endregion
export { Pricing as component };
