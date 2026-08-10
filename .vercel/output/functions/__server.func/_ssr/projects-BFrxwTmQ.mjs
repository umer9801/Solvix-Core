import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as PROJECTS, b as Reveal } from "./primitives-C24J9EbA.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { j as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { i as CtaBand } from "./router-aLZtMv8c.mjs";
import { t as PageHero } from "./PageHero-0EBhvYmV.mjs";
import { t as office_team_default } from "./office-team-D7LZnJkD.mjs";
import { t as pos_portfolio_default } from "./pos-portfolio-BywQPkOO.mjs";
import { t as project_3_default } from "./project-3-ESm6Vkz6.mjs";
import { t as web_portfolio_default } from "./web-portfolio-ItcxmmE-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-BFrxwTmQ.js
var import_jsx_runtime = require_jsx_runtime();
var images = {
	"project-1": web_portfolio_default,
	"project-2": pos_portfolio_default,
	"project-3": project_3_default
};
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Our Work",
			title: "Projects that drive real business results.",
			body: "A selection of AI, automation, web and e-commerce projects delivered for clients across Canada, UK and Pakistan.",
			image: office_team_default,
			imageAlt: "Solvix Core projects"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-lux pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-8",
				children: PROJECTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/case-studies/$slug",
						params: { slug: p.slug },
						className: "group grid items-center gap-8 overflow-hidden rounded-[2rem] border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift md:grid-cols-[1.1fr_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: i % 2 === 1 ? "md:order-2" : "",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden bg-surface",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: images[p.image] ?? "/assets/project-3-BCxR7Dse.jpg",
									alt: p.title,
									loading: "lazy",
									width: 700,
									height: 560,
									className: "aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-8 md:px-10",
							children: [
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
									className: "mt-4 text-muted-foreground",
									children: p.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 inline-block rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary",
									children: p.metric
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-6 flex items-center gap-2 text-sm font-semibold text-primary",
									children: ["Read case study", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" })]
								})
							]
						})]
					})
				}, p.slug))
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
