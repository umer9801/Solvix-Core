import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { b as Reveal, k as TextReveal, n as Blobs } from "./primitives-BOCQWqtn.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-xNcDTARy.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, body, children, meta }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden pb-16 pt-16 md:pb-24 md:pt-24",
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
							className: "text-foreground",
							children: eyebrow
						})
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextReveal, {
						text: title,
						as: "h1",
						className: "display-xl max-w-4xl"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-md text-lg leading-relaxed text-muted-foreground lg:pb-3",
							children: body
						})
					})]
				}),
				meta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .3,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4",
						children: meta.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card px-6 py-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl",
								children: m.k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: m.v
							})]
						}, m.k))
					})
				}) : null,
				children
			]
		})]
	});
}
//#endregion
export { PageHero as t };
