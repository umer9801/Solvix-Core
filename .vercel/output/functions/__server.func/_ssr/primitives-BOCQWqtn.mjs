import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as useScroll, i as useMotionValue, n as useSpring, r as useTransform, t as useInView } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/primitives-BOCQWqtn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var COMPANY = {
	name: "Solvix Core",
	tagline: "Premium technology solutions for modern businesses",
	email: "info@solvixcore.com",
	emailAdmin: "admin@solvixcore.com",
	phone: {
		canada: "+1 437 889 8256",
		uk: "+44 734 848 6506",
		pakistan: "+92 320 580 7054"
	},
	whatsapp: {
		canada: "https://wa.me/14378898256",
		uk: "https://wa.me/447348486506",
		pakistan: "https://wa.me/923205807054"
	}
};
var NAV_LINKS = [
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Services",
		to: "/services"
	},
	{
		label: "Pricing",
		to: "/pricing"
	},
	{
		label: "Industries",
		to: "/industries"
	},
	{
		label: "Technologies",
		to: "/technologies"
	},
	{
		label: "Blog",
		to: "/blog"
	},
	{
		label: "FAQs",
		to: "/faqs"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
var SERVICES = [
	{
		slug: "ai-solutions",
		title: "AI Solutions",
		group: "Intelligence",
		blurb: "Custom AI implementations powered by OpenAI, LangChain and advanced ML models tailored to your business.",
		accent: "primary"
	},
	{
		slug: "n8n-automation",
		title: "n8n Automation",
		group: "Intelligence",
		blurb: "Powerful workflow automation and integrations that eliminate manual tasks and connect your business tools.",
		accent: "violet"
	},
	{
		slug: "web-development",
		title: "Web Development",
		group: "Build",
		blurb: "Custom websites and applications built with modern tech stack — fast, secure and scalable.",
		accent: "sage"
	},
	{
		slug: "shopify-store-design",
		title: "Shopify Store Design",
		group: "Platforms",
		blurb: "Premium Shopify stores designed to convert — from setup and theme customisation to full e-commerce solutions.",
		accent: "peach"
	},
	{
		slug: "mobile-app-development",
		title: "App Development",
		group: "Build",
		blurb: "Native and cross-platform mobile applications for iOS and Android built with modern frameworks.",
		accent: "coral"
	},
	{
		slug: "content-creation",
		title: "Content Creation",
		group: "Growth",
		blurb: "High-quality content strategy, video editing and creation that resonates with your audience and drives engagement.",
		accent: "coral"
	},
	{
		slug: "marketing-seo",
		title: "Marketing & SEO",
		group: "Growth",
		blurb: "Data-driven marketing strategies and SEO optimisation to maximise your online visibility and drive qualified traffic.",
		accent: "sage"
	},
	{
		slug: "langchain-integration",
		title: "LangChain Integration",
		group: "Intelligence",
		blurb: "Advanced LLM application development using LangChain — chatbots, RAG pipelines and AI agents.",
		accent: "violet"
	},
	{
		slug: "openai-integration",
		title: "OpenAI Integration",
		group: "Intelligence",
		blurb: "Seamless OpenAI API integration — from GPT-powered features to DALL-E, Whisper and custom assistants.",
		accent: "primary"
	}
];
var STATS = [
	{
		value: 500,
		suffix: "+",
		label: "Projects delivered"
	},
	{
		value: 3,
		suffix: "",
		label: "Countries served"
	},
	{
		value: 98,
		suffix: "%",
		label: "Client satisfaction"
	},
	{
		value: 50,
		suffix: "+",
		label: "Expert team members"
	}
];
var PROCESS = [
	{
		step: "01",
		title: "Discovery & Planning",
		body: "We understand your business goals, target audience and technical requirements before writing a single line of code."
	},
	{
		step: "02",
		title: "Design & Architecture",
		body: "Wireframes, UI designs and technical blueprints reviewed and approved by you before development begins."
	},
	{
		step: "03",
		title: "Agile Development",
		body: "Two-week sprints with regular demos so you see progress and can provide feedback throughout the build."
	},
	{
		step: "04",
		title: "Testing & QA",
		body: "Thorough testing across devices, browsers and scenarios to ensure everything works flawlessly."
	},
	{
		step: "05",
		title: "Launch & Support",
		body: "Smooth deployment with post-launch monitoring and ongoing support to keep your solution running at its best."
	}
];
var TECHNOLOGIES = [
	{
		group: "Frontend",
		items: [
			"React",
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"TanStack",
			"Vue.js"
		]
	},
	{
		group: "Backend",
		items: [
			"Node.js",
			"Python",
			"PHP",
			"Go",
			"GraphQL",
			"REST APIs"
		]
	},
	{
		group: "AI & Automation",
		items: [
			"OpenAI",
			"LangChain",
			"n8n",
			"LangGraph",
			"PyTorch",
			"Anthropic"
		]
	},
	{
		group: "E-Commerce",
		items: [
			"Shopify",
			"WooCommerce",
			"Stripe",
			"PayPal",
			"Klarna",
			"Square"
		]
	},
	{
		group: "Cloud & DevOps",
		items: [
			"AWS",
			"Vercel",
			"Netlify",
			"Docker",
			"GitHub Actions",
			"Cloudflare"
		]
	},
	{
		group: "Databases",
		items: [
			"PostgreSQL",
			"MongoDB",
			"MySQL",
			"Redis",
			"Supabase",
			"Firebase"
		]
	}
];
var INDUSTRIES = [
	{
		name: "E-Commerce & Retail",
		note: "Shopify stores, headless storefronts and payment systems."
	},
	{
		name: "Healthcare",
		note: "Patient portals, clinic management and health tech platforms."
	},
	{
		name: "Finance & Fintech",
		note: "Payment processing, accounting automation and dashboards."
	},
	{
		name: "Real Estate",
		note: "Property listing platforms, CRM and lead management systems."
	},
	{
		name: "Education & EdTech",
		note: "Learning management systems and student portals."
	},
	{
		name: "Logistics & Supply Chain",
		note: "Fleet tracking, inventory and order management."
	},
	{
		name: "Hospitality & Tourism",
		note: "Booking systems, POS and guest experience platforms."
	},
	{
		name: "Professional Services",
		note: "CRM, automation and client management solutions."
	}
];
var PROJECTS = [
	{
		slug: "ai-ecommerce-canada",
		title: "AI-Powered E-Commerce Platform",
		sector: "E-Commerce",
		year: "2025",
		summary: "A full Shopify + AI recommendation engine for a Canadian retail brand, boosting conversions by 42%.",
		metric: "+42% conversion rate",
		image: "project-1"
	},
	{
		slug: "automation-uk",
		title: "Business Automation Suite",
		sector: "Professional Services",
		year: "2025",
		summary: "n8n-powered automation connecting CRM, invoicing and email — saving 120 hours per month for a UK firm.",
		metric: "120 hrs/mo saved",
		image: "project-2"
	},
	{
		slug: "web-platform-pakistan",
		title: "Enterprise Web Platform",
		sector: "Technology",
		year: "2024",
		summary: "Custom Next.js platform with AI chatbot and real-time analytics for a Pakistan-based tech company.",
		metric: "3x user engagement",
		image: "project-3"
	}
];
var CASE_STUDIES = [
	{
		slug: "ai-ecommerce-canada",
		client: "Canadian Retail Brand",
		title: "AI recommendation engine that tripled average order value",
		challenge: "A Canadian e-commerce store was struggling with low repeat purchases and poor product discovery on their Shopify store.",
		approach: "We integrated a custom OpenAI-powered recommendation engine with personalised email automation via n8n, all connected to their Shopify backend.",
		results: [
			{
				k: "42%",
				v: "conversion rate uplift"
			},
			{
				k: "3x",
				v: "average order value"
			},
			{
				k: "6 wks",
				v: "from brief to launch"
			}
		]
	},
	{
		slug: "automation-uk",
		client: "UK Professional Services Firm",
		title: "120 hours a month reclaimed through smart automation",
		challenge: "Manual data entry between CRM, invoicing software and email was consuming two full-time staff.",
		approach: "We built a suite of n8n workflows connecting HubSpot, Xero and Gmail, with AI-assisted document parsing and exception handling.",
		results: [
			{
				k: "120 hrs",
				v: "saved every month"
			},
			{
				k: "38k GBP",
				v: "annual cost saving"
			},
			{
				k: "2 wks",
				v: "implementation time"
			}
		]
	},
	{
		slug: "web-platform-pakistan",
		client: "Pakistan Tech Company",
		title: "Enterprise platform with AI chatbot serving 50,000 users",
		challenge: "An outdated PHP system could not scale to meet growing user demand or integrate modern AI features.",
		approach: "We rebuilt the platform in Next.js with a LangChain-powered chatbot, real-time analytics and a headless CMS — deployed on AWS.",
		results: [
			{
				k: "3x",
				v: "user engagement"
			},
			{
				k: "50k+",
				v: "active users"
			},
			{
				k: "99.9%",
				v: "uptime achieved"
			}
		]
	}
];
var TESTIMONIALS = [
	{
		quote: "Solvix Core transformed our business with their AI automation. The n8n workflows they built have saved us hundreds of hours every month.",
		name: "James Mitchell",
		role: "CEO, TechVentures Canada"
	},
	{
		quote: "Outstanding web development work. The team delivered beyond our expectations — fast, modern, and exactly what our brand needed.",
		name: "Sarah Thornton",
		role: "Founder, Digital Hub London"
	},
	{
		quote: "Solvix Core's AI solutions took our e-commerce store to the next level. The Shopify customisation and marketing automation is world-class.",
		name: "Ahmed Raza",
		role: "Director, Commerce Pakistan"
	}
];
var CLIENTS = [
	"CANADA",
	"UK",
	"PAKISTAN",
	"SOLVIX CORE",
	"LEPRO TRADING",
	"GLOBAL REACH",
	"AI SOLUTIONS",
	"AUTOMATION"
];
var PRICING = [
	{
		name: "Starter",
		price: "$1,299",
		cadence: "CAD / one-time",
		tagline: "Perfect for small businesses and startups.",
		features: [
			"Up to 5-page website",
			"Responsive mobile design",
			"Basic SEO setup",
			"Contact form integration",
			"30 days support"
		],
		featured: false
	},
	{
		name: "Professional",
		price: "$3,999",
		cadence: "CAD / one-time",
		tagline: "Our most popular solution for growing businesses.",
		features: [
			"Up to 15-page website",
			"Custom UI/UX design",
			"Advanced SEO optimisation",
			"CMS integration",
			"AI chatbot integration",
			"90 days support"
		],
		featured: true
	},
	{
		name: "Enterprise",
		price: "Custom",
		cadence: "tailored quote",
		tagline: "Full-scale solutions for complex requirements.",
		features: [
			"Unlimited pages & features",
			"Custom web or mobile app",
			"AI & automation workflows",
			"Shopify / e-commerce",
			"Dedicated project manager",
			"1 year support & maintenance"
		],
		featured: false
	}
];
var FAQS = [
	{
		q: "Which countries do you serve?",
		a: "We proudly serve clients in Canada, the United Kingdom and Pakistan, with fully remote delivery worldwide. Contact us via WhatsApp or email in your timezone."
	},
	{
		q: "How quickly can a project start?",
		a: "Most projects begin within one week of a signed agreement. We can accommodate urgent timelines — reach out and we will find a way."
	},
	{
		q: "Do you offer payment plans?",
		a: "Yes. We typically work on a 50% deposit with the balance on completion for fixed-price projects. Monthly retainer options are also available."
	},
	{
		q: "What is your pricing currency?",
		a: "All prices are quoted in Canadian Dollars (CAD). We accept payment via bank transfer, credit card and PayPal."
	},
	{
		q: "Who owns the code and IP?",
		a: "You do — entirely, from the first commit. All source code, designs and assets are transferred to you upon final payment."
	},
	{
		q: "Do you offer ongoing maintenance?",
		a: "Yes. We offer monthly maintenance and support retainers to keep your platform updated, secure and performing at its best."
	}
];
var POSTS = [
	{
		slug: "ai-for-small-business",
		title: "How AI is transforming small businesses in Canada, UK and Pakistan",
		category: "AI",
		date: "July 2025",
		read: "6 min",
		excerpt: "Practical AI tools like ChatGPT, LangChain and n8n are no longer just for enterprise — here is how SMBs are using them to compete."
	},
	{
		slug: "shopify-conversion-tips",
		title: "10 Shopify optimisations that will boost your conversions this year",
		category: "E-Commerce",
		date: "June 2025",
		read: "7 min",
		excerpt: "From AI product recommendations to checkout UX — the most impactful improvements we have made across 50+ Shopify stores."
	},
	{
		slug: "n8n-automation-guide",
		title: "Getting started with n8n: automate your business without code",
		category: "Automation",
		date: "May 2025",
		read: "8 min",
		excerpt: "A practical guide to building your first n8n workflow — connecting your CRM, email, invoicing and more in under an hour."
	},
	{
		slug: "seo-2025-guide",
		title: "SEO in 2025: what has changed and what actually works now",
		category: "Marketing",
		date: "April 2025",
		read: "9 min",
		excerpt: "Google's AI-driven search landscape has changed the rules. Here is our updated playbook for earning organic traffic."
	},
	{
		slug: "web-dev-trends-2025",
		title: "Web development trends every business should know in 2025",
		category: "Development",
		date: "March 2025",
		read: "5 min",
		excerpt: "From server components to edge deployment — the technologies we are building with right now and why they matter for your project."
	},
	{
		slug: "mobile-app-vs-pwa",
		title: "Native mobile app vs PWA: which is right for your business?",
		category: "Mobile",
		date: "February 2025",
		read: "6 min",
		excerpt: "The honest comparison — cost, performance, reach and maintenance — to help you make the right decision for your budget."
	}
];
var ROLES = [
	{
		title: "Senior React Developer",
		team: "Engineering",
		location: "Remote (Canada / UK / Pakistan)"
	},
	{
		title: "AI Solutions Engineer",
		team: "Intelligence",
		location: "Remote (Global)"
	},
	{
		title: "UI/UX Designer",
		team: "Design",
		location: "Remote (Global)"
	},
	{
		title: "n8n Automation Specialist",
		team: "Automation",
		location: "Remote (Global)"
	},
	{
		title: "Shopify Developer",
		team: "E-Commerce",
		location: "Remote (Global)"
	},
	{
		title: "SEO & Marketing Strategist",
		team: "Growth",
		location: "Remote (Global)"
	}
];
var OFFICES = [
	{
		city: "Canada",
		line: "Suite 104 - 2 Gurdwara Road, Ottawa, ON K2E 1A2",
		tz: "GMT-5",
		phone: "+1 437 889 8256",
		flag: "CA"
	},
	{
		city: "United Kingdom",
		line: "London, United Kingdom",
		tz: "GMT",
		phone: "+44 734 848 6506",
		flag: "GB"
	},
	{
		city: "Pakistan",
		line: "Lahore, Pakistan",
		tz: "GMT+5",
		phone: "+92 320 580 7054",
		flag: "PK"
	}
];
var VALUES = [
	{
		title: "Client success first",
		body: "Everything we build is measured against real outcomes for your business, not our portfolio."
	},
	{
		title: "Transparency always",
		body: "Clear communication, honest timelines and no surprises — you are always in the loop."
	},
	{
		title: "Quality without compromise",
		body: "We do not ship work we would not be proud to put our name on."
	},
	{
		title: "Innovation-driven",
		body: "We stay at the cutting edge so our clients always have a competitive advantage."
	}
];
var TIMELINE = [
	{
		year: "2019",
		title: "Solvix Core founded",
		body: "Started as a web development studio serving clients in Canada with a focus on quality and delivery."
	},
	{
		year: "2020",
		title: "Expanded to UK market",
		body: "Opened operations serving United Kingdom businesses, growing our team and service offering."
	},
	{
		year: "2021",
		title: "Pakistan operations launched",
		body: "Established our Pakistan presence, building a world-class development team."
	},
	{
		year: "2022",
		title: "AI & Automation practice",
		body: "Launched our intelligence practice, delivering LangChain, OpenAI and n8n solutions."
	},
	{
		year: "2023",
		title: "500+ projects milestone",
		body: "Delivered over 500 projects across Canada, UK and Pakistan — 98% client satisfaction."
	},
	{
		year: "2025",
		title: "Partnered with Lepro Trading Inc",
		body: "Strategic partnership to expand reach and deliver even greater value to clients globally."
	}
];
var TEAM = [
	{
		name: "Umar Farooq",
		role: "Founder & CEO",
		initials: "UF"
	},
	{
		name: "Sarah Ahmed",
		role: "Head of Development",
		initials: "SA"
	},
	{
		name: "James Wilson",
		role: "AI Solutions Lead",
		initials: "JW"
	},
	{
		name: "Fatima Khan",
		role: "Design Director",
		initials: "FK"
	},
	{
		name: "Daniel Brooks",
		role: "Automation Specialist",
		initials: "DB"
	},
	{
		name: "Aisha Malik",
		role: "Client Success Manager",
		initials: "AM"
	}
];
var AWARDS = [
	{
		year: "2025",
		name: "Partnered with Lepro Trading Inc — Canada"
	},
	{
		year: "2025",
		name: "500+ Projects Delivered Milestone"
	},
	{
		year: "2024",
		name: "98% Client Satisfaction Rate"
	},
	{
		year: "2024",
		name: "Expanded to 3 Countries — CA, UK, PK"
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Reveal({ children, delay = 0, y = 26, blur = true, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: {
			opacity: 0,
			y,
			filter: blur ? "blur(10px)" : "none"
		},
		whileInView: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)"
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .9,
			delay,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		children
	});
}
function TextReveal({ text, className, delay = 0, as: Tag = "h2" }) {
	const words = text.split(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		className,
		children: words.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-block overflow-hidden align-bottom",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
				className: "inline-block",
				initial: {
					y: "110%",
					opacity: 0
				},
				whileInView: {
					y: "0%",
					opacity: 1
				},
				viewport: {
					once: true,
					margin: "-60px"
				},
				transition: {
					duration: .85,
					delay: delay + i * .045,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				children: [w, i < words.length - 1 ? "\xA0" : ""]
			})
		}, `${w}-${i}`))
	});
}
function Magnetic({ children, strength = .35 }) {
	const ref = (0, import_react.useRef)(null);
	const x = useSpring(useMotionValue(0), {
		stiffness: 220,
		damping: 18
	});
	const y = useSpring(useMotionValue(0), {
		stiffness: 220,
		damping: 18
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
		ref,
		style: {
			x,
			y,
			display: "inline-block"
		},
		onMouseMove: (e) => {
			const r = ref.current?.getBoundingClientRect();
			if (!r) return;
			x.set((e.clientX - (r.left + r.width / 2)) * strength);
			y.set((e.clientY - (r.top + r.height / 2)) * strength);
		},
		onMouseLeave: () => {
			x.set(0);
			y.set(0);
		},
		children
	});
}
function LuxButton({ children, variant = "solid", className, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		...rest,
		className: cn("group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-tight transition-all duration-500", variant === "solid" && "bg-ink text-background shadow-soft hover:shadow-lift", variant === "coral" && "bg-coral text-background shadow-soft hover:shadow-lift", variant === "ghost" && "border border-border bg-card text-foreground hover:border-primary", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative z-10 flex items-center gap-2.5",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 z-0 translate-y-full bg-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" })]
	}) });
}
function Counter({ value, suffix = "" }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-60px"
	});
	const [n, setN] = (0, import_react.useState)(0);
	const decimals = value % 1 !== 0 ? 2 : 0;
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const start = performance.now();
		const dur = 1800;
		let raf = 0;
		const tick = (t) => {
			const p = Math.min((t - start) / dur, 1);
			setN(value * (1 - Math.pow(1 - p, 3)));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [inView, value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className: "tabular-nums",
		children: [n.toFixed(decimals), suffix]
	});
}
function Marquee({ items, className, itemClassName }) {
	const doubled = [...items, ...items];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative overflow-hidden", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "animate-marquee flex w-max gap-14",
				children: doubled.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("whitespace-nowrap", itemClassName),
					children: it
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" })
		]
	});
}
function Blobs({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-float-slow absolute -left-32 top-[-6rem] h-[26rem] w-[26rem] rounded-full bg-primary-soft opacity-70 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "animate-float-slow absolute right-[-8rem] top-24 h-[22rem] w-[22rem] rounded-full bg-violet-soft opacity-70 blur-3xl",
				style: { animationDelay: "-4s" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "animate-float-slow absolute bottom-[-10rem] left-1/3 h-[24rem] w-[24rem] rounded-full bg-peach-soft opacity-70 blur-3xl",
				style: { animationDelay: "-8s" }
			})
		]
	});
}
function SectionHead({ eyebrow, title, body, align = "left", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("max-w-3xl", align === "center" && "mx-auto text-center", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex items-center gap-3", align === "center" && "justify-center"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: eyebrow
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextReveal, {
				text: title,
				className: "display-lg mt-6 text-foreground",
				delay: .05
			}),
			body ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .15,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-lg leading-relaxed text-muted-foreground",
					children: body
				})
			}) : null
		]
	});
}
function ParallaxImage({ src, alt, className, range = 60, rounded = "rounded-3xl" }) {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [-range, range]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("relative overflow-hidden bg-muted", rounded, className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
			src,
			alt,
			loading: "lazy",
			style: { y },
			className: "h-full w-full scale-[1.15] object-cover"
		})
	});
}
function SpotlightCard({ children, className }) {
	const ref = (0, import_react.useRef)(null);
	const [pos, setPos] = (0, import_react.useState)({
		x: 50,
		y: 50
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		onMouseMove: (e) => {
			const r = ref.current?.getBoundingClientRect();
			if (!r) return;
			setPos({
				x: (e.clientX - r.left) / r.width * 100,
				y: (e.clientY - r.top) / r.height * 100
			});
		},
		className: cn("group relative overflow-hidden", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
			style: { background: `radial-gradient(30rem 20rem at ${pos.x}% ${pos.y}%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 65%)` }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative",
			children
		})]
	});
}
var accentBg = {
	primary: "bg-primary-soft",
	coral: "bg-coral-soft",
	violet: "bg-violet-soft",
	sage: "bg-sage-soft",
	peach: "bg-peach-soft"
};
//#endregion
export { VALUES as A, SectionHead as C, TESTIMONIALS as D, TECHNOLOGIES as E, cn as M, TIMELINE as O, STATS as S, TEAM as T, PROJECTS as _, COMPANY as a, Reveal as b, INDUSTRIES as c, Marquee as d, NAV_LINKS as f, PROCESS as g, PRICING as h, CLIENTS as i, accentBg as j, TextReveal as k, LuxButton as l, POSTS as m, Blobs as n, Counter as o, OFFICES as p, CASE_STUDIES as r, FAQS as s, AWARDS as t, Magnetic as u, ParallaxImage as v, SpotlightCard as w, SERVICES as x, ROLES as y };
