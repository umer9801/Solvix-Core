import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { b as Reveal, s as FAQS } from "./primitives-DL1IYeHP.mjs";
import { p as Plus } from "../_libs/lucide-react.mjs";
import { t as PageHero } from "./PageHero-CDJ9mRNv.mjs";
import { r as CtaBand } from "./router-CUTUSDtf.mjs";
import { t as hero_abstract_default } from "./hero-abstract-DQf8B25I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faqs-CckKaeLC.js
var import_jsx_runtime = require_jsx_runtime();
function Faqs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "FAQs",
			title: "Straight answers, before you ask.",
			body: "Everything you want to know before starting a project — from pricing to ownership to timelines.",
			image: hero_abstract_default,
			imageAlt: "Frequently asked questions"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-lux pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-3xl divide-y divide-border border-y border-border",
				children: FAQS.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "group py-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
							className: "font-display flex cursor-pointer items-start justify-between gap-8 text-2xl leading-tight",
							children: [f.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mt-1 h-5 w-5 shrink-0 text-primary transition-transform duration-500 group-open:rotate-45" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 leading-relaxed text-muted-foreground",
							children: f.a
						})]
					})
				}, f.q))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			eyebrow: "Still curious",
			title: "Ask us something harder."
		})
	] });
}
//#endregion
export { Faqs as component };
