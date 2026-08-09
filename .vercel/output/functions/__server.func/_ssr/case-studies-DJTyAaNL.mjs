import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { b as Reveal, r as CASE_STUDIES } from "./primitives-C24J9EbA.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { j as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { i as CtaBand } from "./router-Df1P-54n.mjs";
import { t as PageHero } from "./PageHero-0EBhvYmV.mjs";
import { t as dashboard_default } from "./dashboard-F6NN-ziS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/case-studies-DJTyAaNL.js
var import_jsx_runtime = require_jsx_runtime();
function CaseStudies() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Case Studies",
			title: "Real results, stated plainly.",
			body: "Each engagement is measured against numbers agreed before a line of code is written. Here is what actually changed.",
			image: dashboard_default,
			imageAlt: "Case studies and results"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-lux pb-24",
			children: CASE_STUDIES.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .06,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/case-studies/$slug",
					params: { slug: c.slug },
					className: "group grid gap-8 border-t border-border py-12 transition-colors hover:bg-card/50 lg:grid-cols-[0.35fr_1fr_0.6fr]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: c.client
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display-md transition-transform duration-500 group-hover:translate-x-2",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xl text-muted-foreground",
								children: c.challenge
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary",
								children: ["Read the study ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: c.results.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-3xl",
									children: r.k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-right text-xs text-muted-foreground",
									children: r.v
								})]
							}, r.k))
						})
					]
				})
			}, c.slug))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			eyebrow: "Your outcome",
			title: "Want results like these?"
		})
	] });
}
//#endregion
export { CaseStudies as component };
