import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { O as TextReveal, _ as PROJECTS, a as COMPANY, b as Reveal, f as NAV_LINKS, p as OFFICES, r as CASE_STUDIES, u as Magnetic, x as SERVICES } from "./primitives-DL1IYeHP.mjs";
import { R as notFound, g as createFileRoute, h as lazyRouteComponent, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as Github, a as Twitter, b as Instagram, j as ArrowUpRight, y as Linkedin } from "../_libs/lucide-react.mjs";
import { r as router_exports } from "./router-CUTUSDtf2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Footer-Cb4VOc7t.js
var import_jsx_runtime = require_jsx_runtime();
var logo_default = "/assets/logo-DixoYNo1.PNG";
function CtaBand({ eyebrow = "Ready to start?", title = "Let us build something great together.", body = "Tell us about your project — AI, automation, web development or Shopify. We serve Canada, UK and Pakistan and respond within 24 hours." }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-lux py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grain relative overflow-hidden rounded-[2.5rem] bg-ink px-8 py-20 text-background md:px-16 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-hue-drift pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/35 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "animate-hue-drift pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-violet/25 blur-3xl",
					style: { animationDelay: "-6s" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow text-background/60",
								children: eyebrow
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextReveal, {
							text: title,
							className: "display-lg mt-6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .15,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl text-lg leading-relaxed text-background/70",
								children: body
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .25,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									className: "group inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5",
									children: ["Start a conversation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/case-studies",
									className: "inline-flex items-center gap-2 rounded-full border border-background/25 px-7 py-3.5 text-sm font-semibold text-background/85 transition-colors hover:border-background/60",
									children: "Read the case studies"
								})]
							})
						})
					]
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden border-t border-border bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-lux py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-11 w-11 overflow-hidden rounded-xl bg-white p-1 shadow-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: logo_default,
									alt: "Solvix Core Logo",
									className: "h-full w-full object-contain"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl",
								children: COMPANY.name
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground",
							children: [COMPANY.tagline, ". Proudly serving Canada, UK and Pakistan — Partnered with Lepro Trading Inc."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-7 flex gap-2",
							children: [
								Twitter,
								Linkedin,
								Github,
								Instagram
							].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								"aria-label": "Social link",
								className: "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
							}, i))
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Company"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-2.5",
						children: NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: "text-sm text-foreground/70 transition-colors hover:text-primary",
							children: l.label
						}) }, l.to))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Capabilities"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-2.5",
						children: SERVICES.slice(0, 9).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: `/services/${s.slug}`,
							className: "text-sm text-foreground/70 transition-colors hover:text-primary",
							children: s.title
						}) }, s.slug))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Newsletter"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm leading-relaxed text-muted-foreground",
							children: "One considered essay a month on building software worth keeping."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => e.preventDefault(),
							className: "mt-5 flex items-center gap-2 rounded-full border border-border bg-card p-1.5 pl-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								required: true,
								placeholder: "you@company.com",
								className: "w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-background transition-transform hover:-translate-y-0.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 space-y-3",
							children: [OFFICES.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: o.city
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: " — "
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `https://wa.me/${o.phone.replace(/[^0-9]/g, "")}`,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "text-muted-foreground hover:text-primary transition-colors",
										children: o.phone
									})
								]
							}, o.city)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 space-y-1 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${COMPANY.email}`,
									className: "block hover:text-primary transition-colors",
									children: COMPANY.email
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${COMPANY.emailAdmin}`,
									className: "block hover:text-primary transition-colors",
									children: COMPANY.emailAdmin
								})]
							})]
						})
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					COMPANY.name,
					" Studio. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "transition-colors hover:text-foreground",
							children: "Privacy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "transition-colors hover:text-foreground",
							children: "Terms"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "transition-colors hover:text-foreground",
							children: "Security"
						})
					]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display pointer-events-none select-none whitespace-nowrap px-4 pb-6 text-center text-[18vw] leading-[0.8] tracking-tighter text-foreground/[0.045]",
			children: COMPANY.name
		})]
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-BYDTrssz.js
var $$splitComponentImporter = () => import("../_slug-Dy4-PiBK.mjs");
var Route = createFileRoute("/case-studies/$slug")({
	loader: ({ params }) => {
		const study = CASE_STUDIES.find((c) => c.slug === params.slug);
		if (!study) throw notFound();
		return {
			study,
			project: PROJECTS.find((p) => p.slug === params.slug)
		};
	},
	head: ({ loaderData }) => ({ meta: [
		{ title: `${loaderData?.study.title ?? "Case study"} — Solvix Core` },
		{
			name: "description",
			content: loaderData?.study.challenge ?? "Solvix Core case study."
		},
		{
			property: "og:title",
			content: `${loaderData?.study.title ?? "Case study"} — Solvix Core`
		},
		{
			property: "og:description",
			content: loaderData?.study.approach ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { logo_default as a, Footer as i, Route as n, CtaBand as r, router_exports as t };
