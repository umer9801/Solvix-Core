import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { C as SectionHead, b as Reveal, v as ParallaxImage } from "./_ssr/primitives-BOCQWqtn.mjs";
import { i as CtaBand, r as Route$2 } from "./_ssr/router-CmXWfgUi.mjs";
import { t as PageHero } from "./_ssr/PageHero-xNcDTARy.mjs";
import { n as project_2_default, t as project_1_default } from "./_ssr/project-2-DfosXdGn.mjs";
import { t as project_3_default } from "./_ssr/project-3-ESm6Vkz6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-Bz3zsdcw.js
var import_jsx_runtime = require_jsx_runtime();
var images = {
	"project-1": project_1_default,
	"project-2": project_2_default,
	"project-3": project_3_default
};
function CaseStudy() {
	const { study, project } = Route$2.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: study.client,
			title: study.title,
			body: study.challenge,
			meta: study.results.map((r) => ({
				k: r.k,
				v: r.v
			}))
		}),
		project ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-lux pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParallaxImage, {
				src: images[project.image] ?? "/assets/project-1-C_NWJ2AJ.jpg",
				alt: project.title,
				className: "aspect-[21/9] rounded-[2.5rem]"
			})
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-lux pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "The challenge",
					title: "Where it started.",
					body: study.challenge
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Our approach",
					title: "What we did.",
					body: study.approach
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-ink py-24 text-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-lux grid gap-10 md:grid-cols-3",
				children: study.results.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-l border-background/20 pl-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-6xl",
							children: r.k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-background/60",
							children: r.v
						})]
					})
				}, r.k))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			eyebrow: "Similar problem",
			title: "We've seen this shape of problem before."
		})
	] });
}
//#endregion
export { CaseStudy as component };
