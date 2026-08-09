import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as SectionHead, a as COMPANY, b as Reveal, p as OFFICES, s as FAQS } from "./primitives-CLSdz6WR.mjs";
import { _ as MapPin, h as MessageCircle, m as Phone, u as Send, v as Mail, w as CircleCheckBig } from "../_libs/lucide-react.mjs";
import { t as PageHero } from "./PageHero-DE44CvKF.mjs";
import { t as dashboard_default } from "./dashboard-F6NN-ziS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Cdudgajp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		phone: "",
		company: "",
		country: "",
		service: "",
		budget: "",
		timeline: "",
		description: "",
		howDidYouHear: ""
	});
	const handleChange = (e) => {
		setForm((prev) => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setSent(true);
	};
	const inputClass = "mt-2 w-full rounded-2xl border border-border bg-surface-2 px-4 py-3.5 text-sm outline-none transition-colors focus:border-primary";
	const selectClass = "mt-2 w-full rounded-2xl border border-border bg-surface-2 px-4 py-3.5 text-sm outline-none transition-colors focus:border-primary appearance-none cursor-pointer";
	const labelClass = "block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Contact",
			title: "Tell us about your project.",
			body: "Fill in the form and we will get back to you within 24 hours with a clear plan, timeline and honest pricing.",
			image: dashboard_default,
			imageAlt: "Contact Solvix Core"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-lux pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-[1.4fr_0.6fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-center gap-6 rounded-[2rem] border border-primary/20 bg-primary/5 p-16 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-16 w-16 items-center justify-center rounded-full bg-primary/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-8 w-8 text-primary" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl",
							children: "Message received!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-md text-muted-foreground",
							children: "Thank you for reaching out. We will review your project and get back to you within 24 hours with a clear proposal."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: [
								"Need a faster reply?",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: COMPANY.whatsapp.canada,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "text-primary font-semibold hover:underline",
									children: "Message us on WhatsApp"
								})
							]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "card-lux rounded-[2rem] p-8 md:p-10 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl mb-4",
							children: "Your Details"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: labelClass,
										children: "Full Name *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										name: "name",
										type: "text",
										value: form.name,
										onChange: handleChange,
										placeholder: "John Smith",
										className: inputClass
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: labelClass,
										children: "Email Address *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										name: "email",
										type: "email",
										value: form.email,
										onChange: handleChange,
										placeholder: "john@company.com",
										className: inputClass
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: labelClass,
										children: "Phone / WhatsApp"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "phone",
										type: "tel",
										value: form.phone,
										onChange: handleChange,
										placeholder: "+1 437 889 8256",
										className: inputClass
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: labelClass,
										children: "Company Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "company",
										type: "text",
										value: form.company,
										onChange: handleChange,
										placeholder: "Your company (optional)",
										className: inputClass
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: labelClass,
										children: "Country *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										required: true,
										name: "country",
										value: form.country,
										onChange: handleChange,
										className: selectClass,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: "Select your country"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Canada",
												children: "Canada"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "UK",
												children: "United Kingdom"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Pakistan",
												children: "Pakistan"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "USA",
												children: "United States"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Australia",
												children: "Australia"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "UAE",
												children: "UAE"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Other",
												children: "Other"
											})
										]
									})]
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl mb-4",
								children: "Project Details"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: labelClass,
											children: "Service Required *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											required: true,
											name: "service",
											value: form.service,
											onChange: handleChange,
											className: selectClass,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													children: "What do you need?"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Web Development",
													children: "Web Development"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "AI Solutions",
													children: "AI Solutions"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "n8n Automation",
													children: "n8n Automation"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Shopify Store",
													children: "Shopify Store Design"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Mobile App",
													children: "Mobile App Development"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "CRM Development",
													children: "CRM Development"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "POS System",
													children: "Retail POS System"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Marketing & SEO",
													children: "Marketing & SEO"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Content Creation",
													children: "Content Creation"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "LangChain",
													children: "LangChain Integration"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "OpenAI",
													children: "OpenAI Integration"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Multiple Services",
													children: "Multiple Services"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Not Sure",
													children: "Not Sure — Need Advice"
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: labelClass,
											children: "Budget Range (USD) *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											required: true,
											name: "budget",
											value: form.budget,
											onChange: handleChange,
											className: selectClass,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													children: "Select your budget"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Under $500",
													children: "Under $500"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "$500 - $1,000",
													children: "$500 – $1,000"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "$1,000 - $2,500",
													children: "$1,000 – $2,500"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "$2,500 - $5,000",
													children: "$2,500 – $5,000"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "$5,000 - $10,000",
													children: "$5,000 – $10,000"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "$10,000 - $25,000",
													children: "$10,000 – $25,000"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "$25,000+",
													children: "$25,000+"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Not Sure",
													children: "Not Sure"
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: labelClass,
											children: "Timeline *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											required: true,
											name: "timeline",
											value: form.timeline,
											onChange: handleChange,
											className: selectClass,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													children: "When do you need it?"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "ASAP",
													children: "ASAP — As Soon As Possible"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "1-2 weeks",
													children: "1–2 Weeks"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "1 month",
													children: "Within 1 Month"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "2-3 months",
													children: "2–3 Months"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "3-6 months",
													children: "3–6 Months"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "No rush",
													children: "No Rush — Just Exploring"
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: labelClass,
											children: "How Did You Find Us?"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											name: "howDidYouHear",
											value: form.howDidYouHear,
											onChange: handleChange,
											className: selectClass,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													children: "Select one"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Google",
													children: "Google Search"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Social Media",
													children: "Social Media"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Referral",
													children: "Referral from someone"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "LinkedIn",
													children: "LinkedIn"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "WhatsApp",
													children: "WhatsApp"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Other",
													children: "Other"
												})
											]
										})]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-t border-border pt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: labelClass,
									children: "Describe Your Project *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									required: true,
									name: "description",
									value: form.description,
									onChange: handleChange,
									rows: 6,
									placeholder: "Tell us exactly what you need — what problem are you solving? What features do you want? Do you have any designs or references? The more detail the better.",
									className: `${inputClass} resize-none`
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							className: "inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5",
							children: ["Send My Project Brief", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-xs text-muted-foreground",
							children: "We respond within 24 hours. Your information is kept private and never shared."
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .08,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card-lux rounded-[2rem] p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow mb-4",
										children: "Email Us"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `mailto:${COMPANY.email}`,
										className: "flex items-center gap-3 text-sm hover:text-primary transition-colors",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-primary shrink-0" }),
											" ",
											COMPANY.email
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `mailto:${COMPANY.emailAdmin}`,
										className: "mt-3 flex items-center gap-3 text-sm hover:text-primary transition-colors",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-primary shrink-0" }),
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
								className: "card-lux rounded-[2rem] p-7",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow mb-4",
									children: "WhatsApp"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: COMPANY.whatsapp.canada,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "flex items-center gap-3 text-sm hover:text-primary transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Canada — ", COMPANY.phone.canada] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: COMPANY.whatsapp.uk,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "flex items-center gap-3 text-sm hover:text-primary transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["UK — ", COMPANY.phone.uk] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: COMPANY.whatsapp.pakistan,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "flex items-center gap-3 text-sm hover:text-primary transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Pakistan — ", COMPANY.phone.pakistan] })]
										})
									]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .16,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grain relative overflow-hidden rounded-[2rem] bg-ink p-7 text-background",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5 text-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display mt-4 text-xl leading-tight",
										children: "Prefer to talk directly?"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-background/65",
										children: "Send us a WhatsApp message and we will reply immediately during business hours."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: COMPANY.whatsapp.canada,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "mt-5 inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-semibold text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " Open WhatsApp"]
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card-lux rounded-[2rem] p-7 space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow mb-2",
									children: "What Happens Next?"
								}), [
									"We review your brief within 24 hours",
									"We send a clear proposal with pricing",
									"You approve and we start immediately"
								].map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary",
										children: i + 1
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: step
									})]
								}, i))]
							})
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-lux",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Global presence",
					title: "Serving clients worldwide."
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
			className: "container-lux py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Quick answers",
				title: "Common questions."
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
