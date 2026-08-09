import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { O as TextReveal, b as Reveal, n as Blobs } from "./primitives-Bw9MYgoN.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero--CmVGfYD.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, body, children, meta, image, imageAlt, hideImage, imageMode = "landscape", heroNote, heroNoteClassName }) {
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
							className: "text-foreground font-medium",
							children: eyebrow
						})
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `mt-8 grid gap-10 lg:items-center ${hideImage ? "lg:grid-cols-1" : "lg:grid-cols-[1.1fr_0.9fr]"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-primary tracking-wide uppercase",
								children: eyebrow
							})]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextReveal, {
							text: title,
							as: "h1",
							className: "display-xl mt-6 max-w-2xl"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground",
								children: body
							})
						}),
						heroNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .3,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `mt-8 max-w-2xl rounded-[2rem] border-l-4 border-primary/30 bg-surface p-6 shadow-sm ${heroNoteClassName ?? "text-foreground"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-relaxed text-foreground/90",
									children: heroNote
								})
							})
						}) : null,
						meta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .3,
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
						}) : null
					] }), !hideImage && (image ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
								width: imageMode === "portrait" ? 560 : 700,
								height: imageMode === "portrait" ? 700 : 560,
								className: `w-full object-cover ${imageMode === "portrait" ? "aspect-[4/5]" : "aspect-[5/4]"}`
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-dots absolute -right-4 -bottom-4 -z-10 h-32 w-32 rounded-2xl" })]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
						className: "hidden lg:flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative w-full max-w-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aurora aspect-square rounded-[2.5rem] border border-border bg-surface" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-2xl text-primary font-bold",
											children: "SC"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-2xl leading-tight",
										children: eyebrow
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "Solvix Core"
									})
								]
							})]
						})
					}))]
				}),
				children
			]
		})]
	});
}
//#endregion
export { PageHero as t };
