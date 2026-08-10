import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { C as SectionHead, T as TECHNOLOGIES, b as Reveal } from "./primitives-C24J9EbA.mjs";
import { i as CtaBand } from "./router-B4Ixa73M.mjs";
import { t as PageHero } from "./PageHero-0EBhvYmV.mjs";
import { t as project_3_default } from "./project-3-ESm6Vkz6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/technologies-CMqOPPzE.js
var import_jsx_runtime = require_jsx_runtime();
function Technologies() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Technologies",
			title: "Chosen for the next five years, not this quarter.",
			body: "We keep a deliberately small, deeply known stack — and we're honest when your problem needs something outside it.",
			heroNote: "Our stack is optimized for reliability, maintainability and lower ongoing cost — not vendor marketing.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-6 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[2rem] border border-border bg-card p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Focused stack"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: "We choose tools that reduce long-term maintenance, not the ones that win awards."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[2rem] border border-border bg-card p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Built for scale"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: "Our infrastructure decisions are guided by reliability, cost and the customer experience."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[2rem] border border-border bg-card p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Honest tradeoffs"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: "We tell you when a new tool matters and when it only adds complexity."
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-lux pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: TECHNOLOGIES.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-lux h-full rounded-[2rem] p-9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display-md",
								children: t.group
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-muted-foreground",
								children: String(i + 1).padStart(2, "0")
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-7 flex flex-wrap gap-2",
							children: t.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-surface px-4 py-2 font-mono text-xs text-muted-foreground",
								children: it
							}, it))
						})]
					})
				}, t.group))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-lux grid gap-14 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Architecture",
					title: "Infrastructure that stays boring under load.",
					body: "Multi-region by default where it earns its cost, single-region where it doesn't. Every architectural decision comes with a written record and a price tag."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: project_3_default,
						alt: "Abstract cloud infrastructure illustration",
						loading: "lazy",
						width: 1200,
						height: 1008,
						className: "w-full rounded-[2rem] border border-border"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			eyebrow: "Stack review",
			title: "Have us audit what you're running today."
		})
	] });
}
//#endregion
export { Technologies as component };
