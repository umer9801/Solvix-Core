import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { A as accentBg, b as Reveal, w as SpotlightCard, x as SERVICES } from "./primitives-C24J9EbA.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { j as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { i as CtaBand } from "./router-Df1P-54n.mjs";
import { t as PageHero } from "./PageHero-0EBhvYmV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-DsDgFHJc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var GROUPS = [
	"All",
	"Build",
	"Design",
	"Intelligence",
	"Platforms",
	"Infrastructure",
	"Growth"
];
function Services() {
	const [group, setGroup] = (0, import_react.useState)("All");
	const list = group === "All" ? SERVICES : SERVICES.filter((s) => s.group === group);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Our Services",
			title: "Everything you need to grow your business online.",
			body: "Nine core services across AI, automation, web development, Shopify and marketing — all delivered at 35% below market rates.",
			heroNote: "Choose the capability your business needs today, and we'll wrap it in the delivery, governance and quality controls that make it work.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-6 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[2rem] border border-border bg-card p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Choose with confidence"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: "We help you land on the right service by focusing on the outcome first, not the feature list."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[2rem] border border-border bg-card p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Built for production"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: "Every service is scoped for a working launch, clear next steps, and a path to scale once it proves value."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[2rem] border border-border bg-card p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Faster handover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: "Documentation, training and support are included so your team can run the system confidently."
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-lux pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sticky top-24 z-20 -mx-1 mb-12 flex gap-2 overflow-x-auto rounded-full border border-border bg-card/80 p-1.5 backdrop-blur-xl",
				children: GROUPS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setGroup(g),
					className: `whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all ${group === g ? "bg-ink text-background" : "text-muted-foreground hover:text-foreground"}`,
					children: g
				}, g))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: list.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 6 * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpotlightCard, {
						className: "card-lux group h-full rounded-[1.75rem] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: `/services/${s.slug}`,
							className: "flex h-full flex-col p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-10 w-10 rounded-2xl ${accentBg[s.accent]}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px] text-muted-foreground",
										children: String(i + 1).padStart(2, "0")
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow mt-8",
									children: s.group
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display mt-2 text-2xl leading-tight",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
									children: s.blurb
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary",
									children: ["Details", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" })]
								})
							]
						})
					})
				}, s.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			eyebrow: "Not sure where to start",
			title: "Bring us the problem, not the spec.",
			body: "Half of our engagements begin with a client unsure which capability they need. Diagnosing that is part of the work."
		})
	] });
}
//#endregion
export { Services as component };
