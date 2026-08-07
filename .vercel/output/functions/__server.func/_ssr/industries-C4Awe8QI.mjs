import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { b as Reveal, c as INDUSTRIES } from "./primitives-BOCQWqtn.mjs";
import { i as CtaBand } from "./router-CmXWfgUi.mjs";
import { t as PageHero } from "./PageHero-xNcDTARy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/industries-C4Awe8QI.js
var import_jsx_runtime = require_jsx_runtime();
function Industries() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Industries",
			title: "Domain knowledge you don't have to pay us to acquire.",
			body: "We specialise in industries where the rules are strict, the data is messy and failure is expensive."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-lux pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-2",
				children: INDUSTRIES.map((ind, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group card-lux relative h-full overflow-hidden rounded-[2rem] p-9 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -right-6 -top-8 font-display text-[7rem] leading-none text-foreground/[0.04]",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display-md",
								children: ind.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-sm text-muted-foreground",
								children: ind.note
							})
						]
					})
				}, ind.name))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			eyebrow: "Your sector",
			title: "Tell us about the constraints you work inside."
		})
	] });
}
//#endregion
export { Industries as component };
