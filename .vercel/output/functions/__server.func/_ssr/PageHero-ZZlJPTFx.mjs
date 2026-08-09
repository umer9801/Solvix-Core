import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { b as Reveal, n as Blobs } from "./primitives-DL1IYeHP.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-ZZlJPTFx.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, body, children, meta, image, imageAlt }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden pb-16 pt-10 md:pb-20 md:pt-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blobs, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-lux",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "transition-colors hover:text-foreground",
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: eyebrow
						})
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold uppercase tracking-wide text-primary",
								children: eyebrow
							})]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
							initial: {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .7,
								delay: .1,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							className: "display-xl mt-6 max-w-2xl",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .25,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground",
								children: body
							})
						}),
						meta && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .35,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4",
								children: meta.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-display text-3xl",
									children: m.k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-xs text-muted-foreground",
									children: m.v
								})] }, m.k))
							})
						})
					] }), image && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							delay: .3,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: "relative hidden lg:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-[2rem] border border-border shadow-lift",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: image,
								alt: imageAlt ?? eyebrow,
								width: 700,
								height: 900,
								className: "aspect-[3/4] w-full object-cover object-center"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-dots absolute -right-4 -bottom-4 -z-10 h-32 w-32 rounded-2xl" })]
					})]
				}),
				children
			]
		})]
	});
}
//#endregion
export { PageHero as t };
