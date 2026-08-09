import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { C as SectionHead, b as Reveal, c as INDUSTRIES, n as Blobs } from "./primitives-jA_iRMB7.mjs";
import { i as CtaBand } from "./router-aP2IdmyG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/industries-BzSLBoPo.js
var import_jsx_runtime = require_jsx_runtime();
function Industries() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden pb-16 pt-10 md:pb-20 md:pt-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blobs, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-lux",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase text-primary",
							children: "Industries"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "display-xl mt-8",
							children: "Domain knowledge you don't have to pay us to acquire."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground",
							children: "We specialise in industries where the rules are strict, the data is messy and failure is expensive."
						})
					]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-lux py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Sector focus",
				title: "Every engagement starts with your industry context.",
				body: "We help teams in retail, healthcare, finance, real estate, education and logistics move faster with systems that understand their workflows, compliance and customer expectations."
			})
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
