import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { C as SectionHead, b as Reveal, g as PROCESS, h as PRICING, s as FAQS } from "./_ssr/primitives-BQZYHDli.mjs";
import { v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { T as Check, j as ArrowUpRight } from "./_libs/lucide-react.mjs";
import { r as CtaBand } from "./_ssr/router-C0-N09wx.mjs";
import { t as Route } from "./_ssr/router-C0-N09wx2.mjs";
import { t as PageHero } from "./_ssr/PageHero-CUBd4UuI.mjs";
import { t as pos_portfolio_default } from "./_ssr/pos-portfolio-BywQPkOO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-BoRZsvhW.js
var import_jsx_runtime = require_jsx_runtime();
var ai_integration_default = "/assets/ai-integration-CQXvHYw2.PNG";
var heroImages = {
	"ai-solutions": ai_integration_default,
	"web-development": "/assets/web-development-CaXD7QWC.PNG",
	"content-creation": "/assets/content%20creation-D7uzFij8.PNG",
	"marketing-seo": "/assets/marketing-IJzl7Cqs.PNG",
	"langchain-integration": "/assets/langchain-C1oJI0mV.PNG",
	"openai-integration": ai_integration_default,
	"pos-systems": pos_portfolio_default
};
var servicePricing = {
	"ai-solutions": [
		{
			name: "Pilot",
			price: "$12,999",
			cadence: "CAD / fixed",
			tagline: "Proof of value with a working AI feature.",
			featured: false,
			features: [
				"AI discovery workshop",
				"Prototype integration",
				"Model evaluation and hardening"
			]
		},
		{
			name: "Production",
			price: "$34,999",
			cadence: "CAD / fixed",
			tagline: "Full production-ready AI feature with monitoring.",
			featured: true,
			features: [
				"Custom model pipeline",
				"Secure deployment",
				"Ongoing performance tuning"
			]
		},
		{
			name: "Scale",
			price: "Bespoke",
			cadence: "tailored quote",
			tagline: "An enterprise-grade AI platform for long-term growth.",
			featured: false,
			features: [
				"Multi-model architecture",
				"Enterprise data governance",
				"Dedicated support squad"
			]
		}
	],
	"n8n-automation": [
		{
			name: "Launch",
			price: "$8,999",
			cadence: "CAD / fixed",
			tagline: "Automate a core workflow with real business impact.",
			featured: false,
			features: [
				"Workflow mapping",
				"n8n implementation",
				"Toolchain integration"
			]
		},
		{
			name: "Grow",
			price: "$22,999",
			cadence: "CAD / fixed",
			tagline: "Multi-system automation with fail-safe operations.",
			featured: true,
			features: [
				"Advanced orchestration",
				"Retry logic and alerts",
				"Ongoing transaction visibility"
			]
		},
		{
			name: "Enterprise",
			price: "Bespoke",
			cadence: "tailored quote",
			tagline: "A fully managed automation platform for your business.",
			featured: false,
			features: [
				"Custom operations centre",
				"SLA-backed automation",
				"Dedicated automation engineers"
			]
		}
	],
	"web-development": [
		{
			name: "Start",
			price: "$9,499",
			cadence: "CAD / fixed",
			tagline: "A modern website or web app built for launch.",
			featured: false,
			features: [
				"Responsive UX",
				"CMS or admin panel",
				"Performance tuning"
			]
		},
		{
			name: "Scale",
			price: "$28,999",
			cadence: "CAD / fixed",
			tagline: "A scalable web platform with analytics and automation.",
			featured: true,
			features: [
				"Custom API architecture",
				"Production reliability",
				"Observability and testing"
			]
		},
		{
			name: "Custom",
			price: "Bespoke",
			cadence: "tailored quote",
			tagline: "The right web platform for complex business operations.",
			featured: false,
			features: [
				"Headless or full-stack build",
				"Enterprise integrations",
				"Ongoing feature roadmap"
			]
		}
	],
	"shopify-store-design": [
		{
			name: "Launch",
			price: "$7,499",
			cadence: "CAD / fixed",
			tagline: "A high-converting Shopify store built to sell.",
			featured: false,
			features: [
				"Storefront design",
				"Checkout optimisation",
				"Shopify setup"
			]
		},
		{
			name: "Growth",
			price: "$19,999",
			cadence: "CAD / fixed",
			tagline: "A richer Shopify store with custom conversion tools.",
			featured: true,
			features: [
				"Custom sections",
				"Inventory sync",
				"Conversion analytics"
			]
		},
		{
			name: "Enterprise",
			price: "Bespoke",
			cadence: "tailored quote",
			tagline: "A Shopify ecosystem built for retail scale.",
			featured: false,
			features: [
				"POS and inventory workflows",
				"Headless commerce",
				"Ongoing optimization"
			]
		}
	],
	"mobile-app-development": [
		{
			name: "MVP",
			price: "$14,999",
			cadence: "CAD / fixed",
			tagline: "A polished mobile app to validate your idea.",
			featured: false,
			features: [
				"Native or cross-platform ux",
				"Core feature set",
				"App store deployment"
			]
		},
		{
			name: "Product",
			price: "$34,999",
			cadence: "CAD / fixed",
			tagline: "A fully featured app ready for scale.",
			featured: true,
			features: [
				"Advanced mobile flows",
				"Backend integration",
				"Performance monitoring"
			]
		},
		{
			name: "Platform",
			price: "Bespoke",
			cadence: "tailored quote",
			tagline: "A mobile product engineered for long-term growth.",
			featured: false,
			features: [
				"Offline and sync logic",
				"Security and auth",
				"Release and support plan"
			]
		}
	],
	"content-creation": [
		{
			name: "Kickoff",
			price: "$4,999",
			cadence: "CAD / fixed",
			tagline: "A content launch package to build your brand voice.",
			featured: false,
			features: [
				"Content strategy",
				"Video and copy drafts",
				"Distribution plan"
			]
		},
		{
			name: "Campaign",
			price: "$12,999",
			cadence: "CAD / fixed",
			tagline: "A cross-channel campaign with measurable engagement.",
			featured: true,
			features: [
				"Video, blog and social assets",
				"SEO and conversion copy",
				"Performance reporting"
			]
		},
		{
			name: "Retainer",
			price: "Bespoke",
			cadence: "tailored quote",
			tagline: "A steady content engine for audience growth.",
			featured: false,
			features: [
				"Editorial cadence",
				"Creative direction",
				"Ongoing optimisation"
			]
		}
	],
	"marketing-seo": [
		{
			name: "Launch",
			price: "$3,999",
			cadence: "CAD / fixed",
			tagline: "SEO and marketing foundations for immediate visibility.",
			featured: false,
			features: [
				"Keyword planning",
				"Campaign setup",
				"Conversion tracking"
			]
		},
		{
			name: "Growth",
			price: "$11,999",
			cadence: "CAD / fixed",
			tagline: "A growth program that scales demand reliably.",
			featured: true,
			features: [
				"Monthly content",
				"Paid media optimisation",
				"SEO technical fixes"
			]
		},
		{
			name: "Partner",
			price: "Bespoke",
			cadence: "tailored quote",
			tagline: "A long-term acquisition and retention program.",
			featured: false,
			features: [
				"Growth strategy",
				"Campaign execution",
				"Performance reviews"
			]
		}
	],
	"langchain-integration": [
		{
			name: "Pilot",
			price: "$14,999",
			cadence: "CAD / fixed",
			tagline: "A LangChain proof-of-concept with real data.",
			featured: false,
			features: [
				"Prompt engineering",
				"Chain orchestration",
				"Custom retrieval setup"
			]
		},
		{
			name: "Production",
			price: "$32,999",
			cadence: "CAD / fixed",
			tagline: "A production-ready LangChain app or agent.",
			featured: true,
			features: [
				"Resilient chain design",
				"Monitoring and logs",
				"Secure data access"
			]
		},
		{
			name: "Platform",
			price: "Bespoke",
			cadence: "tailored quote",
			tagline: "A full AI agent platform for knowledge workflows.",
			featured: false,
			features: [
				"Multi-agent orchestration",
				"Enterprise governance",
				"Continuous improvement"
			]
		}
	],
	"openai-integration": [
		{
			name: "Feature",
			price: "$12,999",
			cadence: "CAD / fixed",
			tagline: "A single OpenAI-powered feature integrated into your product.",
			featured: false,
			features: [
				"API integration",
				"User experience design",
				"Prompt tuning"
			]
		},
		{
			name: "Product",
			price: "$28,999",
			cadence: "CAD / fixed",
			tagline: "An OpenAI-powered product launch with real user outcomes.",
			featured: true,
			features: [
				"Custom workflow automation",
				"UX and safety review",
				"Launch-ready delivery"
			]
		},
		{
			name: "Custom",
			price: "Bespoke",
			cadence: "tailored quote",
			tagline: "A strategic OpenAI integration built for your business model.",
			featured: false,
			features: [
				"Security and compliance",
				"API orchestration",
				"Long-term maintenance"
			]
		}
	],
	"pos-systems": [
		{
			name: "Retail Start",
			price: "$9,999",
			cadence: "CAD / fixed",
			tagline: "A modern POS system to replace manual retail workflows.",
			featured: false,
			features: [
				"Inventory sync",
				"Payments setup",
				"Basic reporting"
			]
		},
		{
			name: "Retail Growth",
			price: "$24,999",
			cadence: "CAD / fixed",
			tagline: "A complete retail POS solution with customer and stock automation.",
			featured: true,
			features: [
				"Multi-location inventory",
				"CRM integration",
				"Reporting dashboards"
			]
		},
		{
			name: "Enterprise",
			price: "Bespoke",
			cadence: "tailored quote",
			tagline: "A tailored retail tech stack for hospitality and store networks.",
			featured: false,
			features: [
				"Custom checkout flows",
				"Loyalty and payments",
				"24/7 support"
			]
		}
	]
};
function ServiceDetail() {
	const s = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: s.group,
			title: s.title,
			body: s.blurb,
			heroNote: `This service is delivered as a focused capability with clear milestones, production readiness and measurable business impact.`,
			image: heroImages[s.slug],
			imageAlt: s.title,
			imageMode: "portrait",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[2rem] border border-border bg-card p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "What we build"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted-foreground",
						children: "We turn your requirement into a delivered, testable outcome — with the right tools, integrations and production controls for the service you need."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[2rem] border border-border bg-card p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "How we work"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted-foreground",
						children: "Every engagement begins with diagnostics, ends with a live release, and includes clear handover documentation so your team is confident after launch."
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-lux pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-[1fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Overview",
					title: "What this engagement actually looks like.",
					body: `${s.blurb} We start with a diagnostic, agree the measures of success, then deliver in two-week increments with everything running in production from the first one.`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Features"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3",
						children: [
							"Dedicated senior squad",
							"Architecture & security review",
							"Design system foundations",
							"Automated testing pipeline",
							"Observability from day one"
						].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), f]
						}, f))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Benefits"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3",
						children: [
							"Lower total cost of ownership",
							"Change velocity that holds up",
							"Fewer production incidents",
							"Documentation your team trusts",
							"A capability, not a dependency"
						].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-coral" }), f]
						}, f))
					})] })]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-lux py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Working process",
				title: "Five movements, repeated with discipline."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border md:grid-cols-5",
				children: PROCESS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-primary",
							children: p.step
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display mt-4 text-xl leading-tight",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: p.body
						})
					]
				}, p.step))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-lux pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Pricing",
				title: "Pricing tailored for this service."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 lg:grid-cols-3",
				children: (servicePricing[s.slug] ?? PRICING).map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `flex h-full flex-col rounded-[2rem] p-9 ${p.featured ? "bg-ink text-background shadow-lift lg:-translate-y-4" : "card-lux"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `eyebrow ${p.featured ? "text-background/60" : ""}`,
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display mt-5 text-5xl",
								children: p.price
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `mt-1 text-xs ${p.featured ? "text-background/55" : "text-muted-foreground"}`,
								children: p.cadence
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `mt-6 text-sm ${p.featured ? "text-background/70" : "text-muted-foreground"}`,
								children: p.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-8 flex-1 space-y-3",
								children: p.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: p.featured ? "text-background/80" : "text-muted-foreground",
										children: f
									})]
								}, f))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: `mt-9 rounded-full px-6 py-3.5 text-center text-sm font-semibold transition-transform hover:-translate-y-0.5 ${p.featured ? "bg-background text-foreground" : "bg-ink text-background"}`,
								children: p.price === "Bespoke" ? "Talk to us" : "Reserve a squad"
							})
						]
					})
				}, p.name))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-lux pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "FAQs",
				title: "Questions we're asked before signing."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 divide-y divide-border border-y border-border",
				children: FAQS.slice(0, 4).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "group py-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
						className: "font-display flex cursor-pointer items-center justify-between gap-6 text-xl",
						children: [f.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-90" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl leading-relaxed text-muted-foreground",
						children: f.a
					})]
				}, f.q))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, { title: `Let's talk about ${s.title.toLowerCase()}.` })
	] });
}
//#endregion
export { ServiceDetail as component };
