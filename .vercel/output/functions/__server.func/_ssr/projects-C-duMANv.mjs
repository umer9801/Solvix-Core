import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as PROJECTS, b as Reveal } from "./primitives-Bw9MYgoN.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { j as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as project_3_default } from "./project-3-ESm6Vkz6.mjs";
import { t as PageHero } from "./PageHero--CmVGfYD.mjs";
import { r as CtaBand } from "./router-xyX49f_a.mjs";
import { t as pos_portfolio_default } from "./pos-portfolio-BywQPkOO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-C-duMANv.js
var import_jsx_runtime = require_jsx_runtime();
var images = {
	"project-1": "/assets/web-portfolio-Du-InA2C.png",
	"project-2": pos_portfolio_default,
	"project-3": project_3_default
};
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Work",
			title: "Systems that carry real businesses.",
			body: "A small selection. Much of our work sits behind NDAs inside regulated industries — we'll walk you through it in person.",
			heroNote: "Selected projects that show how we make complex operations simpler, safer and more profitable."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-lux pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-12",
				children: [PROJECTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					className: i === 0 ? "lg:col-span-12" : "lg:col-span-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/case-studies/$slug",
						params: { slug: p.slug },
						className: "group block overflow-hidden rounded-[2rem] border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden bg-surface",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: images[p.image],
								alt: p.title,
								loading: "lazy",
								width: 1200,
								height: 1008,
								className: `w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 ${i === 0 ? "aspect-[21/9]" : "aspect-[4/3]"}`
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-end justify-between gap-6 p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "eyebrow",
									children: [
										p.sector,
										" · ",
										p.year
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "display-md mt-3",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-lg text-muted-foreground",
									children: p.summary
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground",
								children: [p.metric, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
							})]
						})]
					})
				}, p.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "lg:col-span-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grain relative overflow-hidden rounded-[2rem] border border-border bg-surface-2 p-8 md:p-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid items-center gap-10 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "In progress"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "display-md mt-3",
									children: "Six more platforms shipping this year."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-md text-muted-foreground",
									children: "Treasury, clinical operations, grid analytics, retail POS, logistics visibility and a developer platform. Ask us about any of them."
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: dashboard,
								alt: "Analytics dashboard preview",
								loading: "lazy",
								width: 1408,
								height: 1008,
								className: "rounded-3xl border border-border shadow-lift"
							})]
						})
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			eyebrow: "Your project",
			title: "The next one on this page could be yours."
		})
	] });
}
//#endregion
export { Projects as component };
