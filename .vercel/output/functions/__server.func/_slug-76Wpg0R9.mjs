import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { C as SectionHead, b as Reveal, g as PROCESS, h as PRICING, s as FAQS } from "./_ssr/primitives-CLSdz6WR.mjs";
import { v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { T as Check, j as ArrowUpRight } from "./_libs/lucide-react.mjs";
import { i as CtaBand, n as Route } from "./_ssr/router-DonJhFq0.mjs";
import { t as PageHero } from "./_ssr/PageHero-DE44CvKF.mjs";
import { t as pos_portfolio_default } from "./_ssr/pos-portfolio-BywQPkOO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-76Wpg0R9.js
var import_jsx_runtime = require_jsx_runtime();
var heroImages = {
	"ai-solutions": "/assets/ai-solutions-CnUBFx81.jpeg",
	"n8n-automation": "/assets/n8n-CxKdlVAR.jpeg",
	"web-development": "/assets/web-development-CaXD7QWC.PNG",
	"shopify-store-design": "/assets/shopify-store-BHVzBYOq.jpeg",
	"mobile-app-development": "/assets/app-development-CTsKIqlO.jpeg",
	"content-creation": "/assets/content-creation-D7uzFij8.PNG",
	"marketing-seo": "/assets/marketing-IJzl7Cqs.PNG",
	"langchain-integration": "/assets/langchain-C1oJI0mV.PNG",
	"openai-integration": "/assets/openAi-CFPoQLV8.jpeg",
	"pos-systems": pos_portfolio_default,
	"crm-development": "/assets/crm-DLeOvMIh.jpeg"
};
var servicePricing = {
	"ai-solutions": [
		{
			name: "Starter",
			price: "$1,500",
			cadence: "USD / one-time",
			tagline: "Ideal for businesses exploring AI for the first time.",
			featured: false,
			features: [
				"AI strategy consultation",
				"1 custom AI feature integration",
				"OpenAI or LangChain setup",
				"Basic prompt engineering",
				"30 days support"
			]
		},
		{
			name: "Professional",
			price: "$4,500",
			cadence: "USD / one-time",
			tagline: "A complete AI solution for real business operations.",
			featured: true,
			features: [
				"Custom AI model pipeline",
				"Up to 3 AI features",
				"RAG / knowledge base setup",
				"API integration with your system",
				"Performance monitoring setup",
				"90 days support"
			]
		},
		{
			name: "Enterprise",
			price: "Custom",
			cadence: "USD / tailored quote",
			tagline: "Full-scale AI transformation for complex operations.",
			featured: false,
			features: [
				"Multi-agent AI architecture",
				"Unlimited features & integrations",
				"Enterprise security & compliance",
				"Dedicated AI consultant",
				"1 year support & maintenance"
			]
		}
	],
	"n8n-automation": [
		{
			name: "Starter",
			price: "$500",
			cadence: "USD / one-time",
			tagline: "Automate your first workflow and save hours every week.",
			featured: false,
			features: [
				"n8n setup & configuration",
				"Up to 3 automation workflows",
				"App integrations (email, CRM, Sheets)",
				"Error handling & alerts",
				"30 days support"
			]
		},
		{
			name: "Professional",
			price: "$1,800",
			cadence: "USD / one-time",
			tagline: "Multi-system automation that runs your business 24/7.",
			featured: true,
			features: [
				"Up to 10 complex workflows",
				"Advanced API integrations",
				"Conditional logic & retry handling",
				"Webhook & scheduler setup",
				"Custom node development",
				"90 days support"
			]
		},
		{
			name: "Enterprise",
			price: "Custom",
			cadence: "USD / tailored quote",
			tagline: "A fully managed automation platform built for scale.",
			featured: false,
			features: [
				"Unlimited workflows",
				"n8n self-hosted deployment",
				"Enterprise security setup",
				"Team training & documentation",
				"1 year support & maintenance"
			]
		}
	],
	"web-development": [
		{
			name: "Starter",
			price: "$800",
			cadence: "USD / one-time",
			tagline: "A professional website that represents your business online.",
			featured: false,
			features: [
				"Up to 6 pages",
				"Mobile-responsive design",
				"Contact form & basic SEO",
				"Google Analytics integration",
				"30 days support"
			]
		},
		{
			name: "Professional",
			price: "$2,500",
			cadence: "USD / one-time",
			tagline: "A powerful web platform built for growth.",
			featured: true,
			features: [
				"Up to 15 pages",
				"Custom UI/UX design",
				"CMS integration (blog, products)",
				"Advanced SEO optimisation",
				"Performance & speed optimisation",
				"90 days support"
			]
		},
		{
			name: "Enterprise",
			price: "Custom",
			cadence: "USD / tailored quote",
			tagline: "A full-scale web application for complex business needs.",
			featured: false,
			features: [
				"Custom web application",
				"User authentication & dashboard",
				"Third-party API integrations",
				"Dedicated project manager",
				"1 year support & maintenance"
			]
		}
	],
	"shopify-store-design": [
		{
			name: "Starter",
			price: "$700",
			cadence: "USD / one-time",
			tagline: "A clean, converting Shopify store ready to sell.",
			featured: false,
			features: [
				"Shopify store setup",
				"Theme customisation",
				"Up to 50 products uploaded",
				"Payment gateway setup",
				"Mobile-responsive design",
				"30 days support"
			]
		},
		{
			name: "Professional",
			price: "$2,200",
			cadence: "USD / one-time",
			tagline: "A fully branded store built for conversion and growth.",
			featured: true,
			features: [
				"Custom Shopify theme",
				"Up to 200 products",
				"Advanced checkout optimisation",
				"Email marketing setup",
				"App integrations",
				"SEO & analytics setup",
				"90 days support"
			]
		},
		{
			name: "Enterprise",
			price: "Custom",
			cadence: "USD / tailored quote",
			tagline: "A scalable e-commerce platform for serious retail.",
			featured: false,
			features: [
				"Shopify Plus / headless setup",
				"Multi-channel integration",
				"Custom app development",
				"Inventory management system",
				"1 year support & maintenance"
			]
		}
	],
	"mobile-app-development": [
		{
			name: "MVP",
			price: "$3,500",
			cadence: "USD / one-time",
			tagline: "Launch your app idea fast with a polished MVP.",
			featured: false,
			features: [
				"iOS or Android (single platform)",
				"Up to 5 core features",
				"Custom UI/UX design",
				"API integration",
				"App store deployment",
				"30 days support"
			]
		},
		{
			name: "Full App",
			price: "$8,000",
			cadence: "USD / one-time",
			tagline: "A fully featured cross-platform app built to scale.",
			featured: true,
			features: [
				"iOS & Android apps",
				"Up to 12 features",
				"Backend development",
				"Push notifications",
				"Analytics integration",
				"App store deployment",
				"90 days support"
			]
		},
		{
			name: "Enterprise",
			price: "Custom",
			cadence: "USD / tailored quote",
			tagline: "A mobile platform engineered for long-term growth.",
			featured: false,
			features: [
				"Unlimited features",
				"Real-time & offline sync",
				"Advanced security & auth",
				"Admin dashboard",
				"1 year support & maintenance"
			]
		}
	],
	"content-creation": [
		{
			name: "Starter",
			price: "$300",
			cadence: "USD / month",
			tagline: "Regular content to keep your brand active online.",
			featured: false,
			features: [
				"8 social media posts/month",
				"Captions & hashtags",
				"2 platforms (Facebook, Instagram)",
				"Basic graphics",
				"Monthly revision"
			]
		},
		{
			name: "Professional",
			price: "$700",
			cadence: "USD / month",
			tagline: "A consistent content strategy that builds your audience.",
			featured: true,
			features: [
				"20 social media posts/month",
				"4 platforms covered",
				"Custom graphic design",
				"2 short videos/month",
				"Monthly analytics report",
				"Content calendar"
			]
		},
		{
			name: "Enterprise",
			price: "Custom",
			cadence: "USD / tailored quote",
			tagline: "Full-service content production for rapid brand growth.",
			featured: false,
			features: [
				"Unlimited posts & platforms",
				"Long-form video production",
				"Blog writing & SEO content",
				"Ad creatives included",
				"Dedicated content manager"
			]
		}
	],
	"marketing-seo": [
		{
			name: "Starter",
			price: "$400",
			cadence: "USD / month",
			tagline: "Get found online and start generating leads.",
			featured: false,
			features: [
				"On-page SEO optimisation",
				"4–6 target keywords",
				"Google Business setup",
				"Monthly performance report",
				"Basic technical SEO fixes"
			]
		},
		{
			name: "Professional",
			price: "$1,000",
			cadence: "USD / month",
			tagline: "A complete SEO & marketing program for consistent growth.",
			featured: true,
			features: [
				"Full technical SEO audit",
				"12–15 keywords targeted",
				"4 blog posts/month",
				"Google Ads management",
				"Backlink building",
				"Competitor analysis",
				"Monthly strategy call"
			]
		},
		{
			name: "Enterprise",
			price: "Custom",
			cadence: "USD / tailored quote",
			tagline: "Aggressive growth marketing for market-leading brands.",
			featured: false,
			features: [
				"30+ keywords",
				"Full paid media management",
				"8 blog posts/month",
				"Social ads + Google Ads",
				"Dedicated marketing manager"
			]
		}
	],
	"langchain-integration": [
		{
			name: "Starter",
			price: "$1,200",
			cadence: "USD / one-time",
			tagline: "Build your first LangChain-powered AI application.",
			featured: false,
			features: [
				"LangChain setup & integration",
				"Document Q&A / chatbot",
				"Vector database setup",
				"Up to 3 AI chains",
				"30 days support"
			]
		},
		{
			name: "Professional",
			price: "$3,500",
			cadence: "USD / one-time",
			tagline: "Advanced LangChain agents for real operational workflows.",
			featured: true,
			features: [
				"Custom AI agents",
				"Multi-document processing",
				"Advanced memory & context",
				"API development",
				"Up to 10 chains",
				"Performance optimisation",
				"90 days support"
			]
		},
		{
			name: "Enterprise",
			price: "Custom",
			cadence: "USD / tailored quote",
			tagline: "Enterprise LangChain platform with full governance.",
			featured: false,
			features: [
				"Multi-agent systems",
				"Custom model fine-tuning",
				"Enterprise security & RAG",
				"Scalable architecture",
				"1 year support & maintenance"
			]
		}
	],
	"openai-integration": [
		{
			name: "Starter",
			price: "$900",
			cadence: "USD / one-time",
			tagline: "Add a powerful AI feature to your existing product.",
			featured: false,
			features: [
				"OpenAI API integration",
				"GPT-powered chat or feature",
				"Basic prompt engineering",
				"Usage & cost monitoring",
				"30 days support"
			]
		},
		{
			name: "Professional",
			price: "$2,800",
			cadence: "USD / one-time",
			tagline: "A complete OpenAI-powered product that users love.",
			featured: true,
			features: [
				"Custom GPT implementation",
				"Function calling & tools",
				"DALL-E or Whisper integration",
				"Up to 5 AI features",
				"Cost optimisation",
				"90 days support"
			]
		},
		{
			name: "Enterprise",
			price: "Custom",
			cadence: "USD / tailored quote",
			tagline: "Full OpenAI platform with security and compliance.",
			featured: false,
			features: [
				"Multi-modal AI (text, image, audio)",
				"Custom assistants & fine-tuning",
				"Enterprise security & PII controls",
				"Performance monitoring",
				"1 year support & maintenance"
			]
		}
	],
	"pos-systems": [
		{
			name: "Basic POS",
			price: "$600",
			cadence: "USD / one-time",
			tagline: "A simple, reliable POS to replace paper-based checkout.",
			featured: false,
			features: [
				"Tablet-based POS system",
				"Barcode scanning",
				"Product & category management",
				"Daily sales reports",
				"30 days support"
			]
		},
		{
			name: "Full POS",
			price: "$1,800",
			cadence: "USD / one-time",
			tagline: "A complete retail solution with inventory & reporting.",
			featured: true,
			features: [
				"Full POS system",
				"Real-time inventory tracking",
				"Low-stock alerts",
				"Customer management",
				"Sales analytics dashboard",
				"Multi-user access",
				"90 days support"
			]
		},
		{
			name: "Enterprise",
			price: "Custom",
			cadence: "USD / tailored quote",
			tagline: "A multi-location retail platform built for scale.",
			featured: false,
			features: [
				"Multi-location inventory sync",
				"Custom checkout flows",
				"Loyalty & payments integration",
				"ERP / accounting integration",
				"1 year support & maintenance"
			]
		}
	],
	"crm-development": [
		{
			name: "Starter CRM",
			price: "$1,000",
			cadence: "USD / one-time",
			tagline: "A simple CRM to manage your leads and clients.",
			featured: false,
			features: [
				"Contact & lead management",
				"Pipeline tracking",
				"Email integration",
				"Notes & activity log",
				"30 days support"
			]
		},
		{
			name: "Custom CRM",
			price: "$3,200",
			cadence: "USD / one-time",
			tagline: "A fully custom CRM built around your sales process.",
			featured: true,
			features: [
				"Custom pipeline & stages",
				"Automated follow-up reminders",
				"Reports & sales dashboard",
				"Role-based access",
				"Third-party integrations",
				"Mobile-responsive",
				"90 days support"
			]
		},
		{
			name: "Enterprise",
			price: "Custom",
			cadence: "USD / tailored quote",
			tagline: "A full CRM platform integrated with your entire stack.",
			featured: false,
			features: [
				"Advanced automation workflows",
				"Marketing & email campaigns",
				"Custom reporting & analytics",
				"API integrations",
				"1 year support & maintenance"
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
			image: heroImages[s.slug] ?? "/assets/office-team-D_d1SaTh.jpg",
			imageAlt: s.title,
			landscape: s.slug === "n8n-automation",
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
