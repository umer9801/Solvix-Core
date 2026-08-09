import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { C as SectionHead, b as Reveal, v as ParallaxImage } from "./_ssr/primitives-C24J9EbA.mjs";
import { i as CtaBand, r as Route$2 } from "./_ssr/router-Df1P-54n.mjs";
import { t as PageHero } from "./_ssr/PageHero-0EBhvYmV.mjs";
import { t as pos_portfolio_default } from "./_ssr/pos-portfolio-BywQPkOO.mjs";
import { t as project_3_default } from "./_ssr/project-3-ESm6Vkz6.mjs";
import { t as web_portfolio_default } from "./_ssr/web-portfolio-ItcxmmE-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-VuIBNE7e.js
var import_jsx_runtime = require_jsx_runtime();
var images = {
	"project-1": web_portfolio_default,
	"project-2": pos_portfolio_default,
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
			})),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[2rem] border border-border bg-card p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "The impact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted-foreground",
						children: "These case studies show the business value we delivered, not just the technology we built."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[2rem] border border-border bg-card p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Our role"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted-foreground",
						children: "We acted as the delivery partner, handling design, engineering, and risk while the client stayed aligned."
					})]
				})]
			})
		}),
		project ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-lux pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParallaxImage, {
				src: images[project.image] ?? "/assets/web-portfolio-Du-InA2C.png",
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
