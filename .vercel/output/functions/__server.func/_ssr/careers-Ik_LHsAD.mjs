import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { C as SectionHead, b as Reveal, k as VALUES, y as ROLES } from "./primitives-CLSdz6WR.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { j as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { i as CtaBand } from "./router-agnT2uRD.mjs";
import { t as PageHero } from "./PageHero-DE44CvKF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/careers-Ik_LHsAD.js
var import_jsx_runtime = require_jsx_runtime();
var culture_default = "/assets/culture-DYIpVAv9.jpg";
function Careers() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Careers",
			title: "Join a team that ships things that matter.",
			body: "Remote-first, senior roles only — we hire slowly, pay fairly and give people the time it takes to do their best work.",
			image: culture_default,
			imageAlt: "Solvix Core team culture"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-lux pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Open roles",
				title: "Current openings."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 border-t border-border",
				children: ROLES.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "group flex flex-col gap-3 border-b border-border py-7 transition-colors hover:bg-card/60 md:flex-row md:items-center md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl transition-transform duration-500 group-hover:translate-x-2 md:text-3xl",
							children: r.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: [
								r.team,
								" · ",
								r.location
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 text-sm font-semibold text-primary",
							children: ["Apply ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
						})]
					})
				}, r.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-lux",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "How we operate",
					title: "What you would be signing up to."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-4",
					children: VALUES.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .06,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-lux h-full rounded-[1.5rem] p-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl leading-tight",
								children: v.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: v.body
							})]
						})
					}, v.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			eyebrow: "Speculative",
			title: "Nothing fits? Write to us anyway."
		})
	] });
}
//#endregion
export { Careers as component };
