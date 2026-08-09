import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { b as Reveal, m as POSTS } from "./primitives-DL1IYeHP.mjs";
import { j as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { i as CtaBand } from "./router-3Qh8irLD.mjs";
import { t as PageHero } from "./PageHero-ZZlJPTFx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-BF4yj60E.js
var import_jsx_runtime = require_jsx_runtime();
function Blog() {
	const lead = POSTS[0];
	const rest = POSTS.slice(1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Journal",
			title: "Long-form notes from inside the work.",
			body: "One essay a month. No listicles, no thought-leadership filler.",
			heroNote: "Practical writing from practitioners, not agency copywriters — every post is grounded in the projects we do."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-lux pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "group grain relative overflow-hidden rounded-[2.5rem] border border-border bg-surface-2 p-10 md:p-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow",
						children: [
							lead.category,
							" · ",
							lead.date,
							" · ",
							lead.read
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-6 max-w-3xl",
						children: lead.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-lg text-muted-foreground",
						children: lead.excerpt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-9 inline-flex items-center gap-2 text-sm font-semibold text-primary",
						children: ["Read the essay ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: rest.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card-lux group flex h-full flex-col rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: p.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display mt-3 text-2xl leading-tight",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
								children: p.excerpt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-7 flex items-center justify-between border-t border-border pt-5 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.date }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.read })]
							})
						]
					})
				}, p.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			eyebrow: "Subscribe",
			title: "Get the next essay before anyone else."
		})
	] });
}
//#endregion
export { Blog as component };
