import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as SectionHead, a as COMPANY, b as Reveal, p as OFFICES, s as FAQS } from "./primitives-Bw9MYgoN.mjs";
import { _ as MapPin, h as MessageCircle, m as Phone, u as Send, v as Mail } from "../_libs/lucide-react.mjs";
import { t as PageHero } from "./PageHero--CmVGfYD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DNEDp-Dp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Contact",
			title: "Let's build something great together.",
			body: "We serve clients in Canada, UK and Pakistan. Reach out via WhatsApp or email — we respond within 24 hours.",
			heroNote: "Share your challenge, and we will get back with a clear plan, real team availability and honest pricing."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-lux pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-[1.2fr_0.8fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						setSent(true);
					},
					className: "card-lux rounded-[2rem] p-8 md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [
								{
									label: "Name",
									type: "text",
									ph: "Your full name"
								},
								{
									label: "Company",
									type: "text",
									ph: "Your company name"
								},
								{
									label: "Email",
									type: "email",
									ph: "you@company.com"
								},
								{
									label: "Service needed",
									type: "text",
									ph: "e.g. AI Solutions, Shopify, SEO"
								}
							].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow",
									children: f.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: f.type,
									placeholder: f.ph,
									className: "mt-2 w-full rounded-2xl border border-border bg-surface-2 px-4 py-3.5 text-sm outline-none transition-colors focus:border-primary"
								})]
							}, f.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-5 block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "Tell us about your project"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								required: true,
								rows: 5,
								placeholder: "Describe what you need — the more detail the better.",
								className: "mt-2 w-full resize-none rounded-2xl border border-border bg-surface-2 px-4 py-3.5 text-sm outline-none transition-colors focus:border-primary"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5",
							children: [sent ? "Thank you — we will be in touch within 24 hours" : "Send message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })]
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .08,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card-lux rounded-[2rem] p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: "Email us"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `mailto:${COMPANY.email}`,
										className: "mt-4 flex items-center gap-3 text-sm hover:text-primary",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-primary" }),
											" ",
											COMPANY.email
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `mailto:${COMPANY.emailAdmin}`,
										className: "mt-3 flex items-center gap-3 text-sm hover:text-primary",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-primary" }),
											" ",
											COMPANY.emailAdmin
										]
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .12,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card-lux rounded-[2rem] p-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "WhatsApp — reach us instantly"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: COMPANY.whatsapp.canada,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "flex items-center gap-3 text-sm hover:text-primary",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Canada — ", COMPANY.phone.canada] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: COMPANY.whatsapp.uk,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "flex items-center gap-3 text-sm hover:text-primary",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["UK — ", COMPANY.phone.uk] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: COMPANY.whatsapp.pakistan,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "flex items-center gap-3 text-sm hover:text-primary",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Pakistan — ", COMPANY.phone.pakistan] })]
										})
									]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .16,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grain relative overflow-hidden rounded-[2rem] bg-ink p-8 text-background",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5 text-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display mt-5 text-2xl leading-tight",
										children: "Prefer to talk? Message us on WhatsApp"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-background/65",
										children: "Available Monday to Friday, 9am to 6pm in your local timezone."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: COMPANY.whatsapp.canada,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "mt-6 inline-block rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground",
										children: "Open WhatsApp"
									})
								]
							})
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-lux",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Global presence",
					title: "Serving Canada, UK and Pakistan."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border md:grid-cols-3",
					children: OFFICES.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display mt-4 text-2xl",
								children: o.city
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: o.line
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-mono text-xs text-muted-foreground",
								children: o.tz
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `https://wa.me/${o.phone.replace(/[^0-9]/g, "")}`,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "mt-3 flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-3.5 w-3.5" }),
									" ",
									o.phone
								]
							})
						]
					}, o.city))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-lux py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Quick answers",
				title: "Common questions before you reach out."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 divide-y divide-border border-y border-border",
				children: FAQS.slice(0, 4).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "group py-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
						className: "font-display cursor-pointer text-xl",
						children: f.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl leading-relaxed text-muted-foreground",
						children: f.a
					})]
				}, f.q))
			})]
		})
	] });
}
//#endregion
export { Contact as component };
