import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as VALUES, C as SectionHead, O as TIMELINE, S as STATS, T as TEAM, b as Reveal, o as Counter, t as AWARDS, v as ParallaxImage } from "./primitives-BOCQWqtn.mjs";
import { a as Target, b as Heart, i as Telescope, k as Award } from "../_libs/lucide-react.mjs";
import { i as CtaBand } from "./router-CmXWfgUi.mjs";
import { t as PageHero } from "./PageHero-xNcDTARy.mjs";
import { n as office_team_default, t as hero_abstract_default } from "./hero-abstract-C9g1yG_E.mjs";
import { t as culture_default } from "./culture-pxkxxfjC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CuJJuAHq.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "About",
			title: "Built to deliver premium tech solutions across three continents.",
			body: "Solvix Core was founded with one mission — make cutting-edge technology accessible and affordable for businesses in Canada, the UK and Pakistan.",
			meta: STATS.map((s) => ({
				k: `${s.value}${s.suffix}`,
				v: s.label
			}))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-lux py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParallaxImage, {
					src: office_team_default,
					alt: "The Solvix Core team at work",
					className: "aspect-[5/4] rounded-[2rem]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Our story",
					title: "Started in Canada. Grown globally.",
					body: "We never compromised on quality, never cut corners, and never took on a project we did not believe in. That approach has earned us a 98% client satisfaction rate and a reputation that speaks for itself."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 leading-relaxed text-muted-foreground",
						children: "Today Solvix Core is a team of 50+ designers, engineers and AI specialists operating across Canada, the UK and Pakistan. We work with startups, SMBs and enterprises — delivering AI solutions, automation, web development, Shopify stores and mobile apps that drive real results."
					})
				})] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-lux grid gap-6 md:grid-cols-2",
				children: [{
					icon: Target,
					label: "Mission",
					title: "Make premium technology accessible to every business.",
					body: "We deliver enterprise-grade AI, automation and web solutions at prices that make sense for Canada, UK and Pakistan."
				}, {
					icon: Telescope,
					label: "Vision",
					title: "The tech partner businesses keep for the long term.",
					body: "Not just a vendor — a trusted partner that grows with you, adapts to your needs and consistently delivers results."
				}].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-lux h-full rounded-[2rem] p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-accent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-5 w-5 text-primary" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mt-8",
								children: c.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "display-md mt-3",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 leading-relaxed text-muted-foreground",
								children: c.body
							})
						]
					})
				}, c.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-lux py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Core values",
				title: "Four commitments we actually enforce."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border md:grid-cols-4",
				children: VALUES.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .07,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full bg-card p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-xs text-primary",
								children: ["0", i + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display mt-5 text-2xl leading-tight",
								children: v.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: v.body
							})
						]
					})
				}, v.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-ink py-24 text-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-lux",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-background/60",
							children: "Timeline"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-6 max-w-2xl",
						children: "Six years, six turning points."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-16 grid gap-10 md:grid-cols-3",
						children: TIMELINE.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .07,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "border-t border-background/20 pt-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-xs text-primary",
										children: t.year
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display mt-3 text-2xl",
										children: t.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-background/60",
										children: t.body
									})
								]
							})
						}, t.year))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-lux py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Team",
				title: "The people who will actually be in the room."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: TEAM.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group card-lux flex items-center gap-5 rounded-[1.5rem] p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-surface text-xl transition-colors group-hover:bg-primary-soft",
							children: m.initials
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: m.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: m.role
						})] })]
					})
				}, m.name))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-lux pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "md:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParallaxImage, {
						src: culture_default,
						alt: "A quiet corner of the Lisbon studio",
						className: "aspect-[16/9] rounded-[2rem]"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParallaxImage, {
						src: hero_abstract_default,
						alt: "Solvix Core brand system",
						className: "h-full min-h-64 rounded-[2rem]"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 grid gap-14 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Culture",
					title: "Remote-first. Quality-obsessed.",
					body: "We believe great work can come from anywhere — our team spans Canada, UK and Pakistan, united by high standards, clear communication and a genuine passion for building things that work."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [
						"Remote-first team",
						"24hr response SLA",
						"Transparent pricing",
						"Client-owned code"
					].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-border bg-card px-4 py-2 text-xs font-medium",
						children: p
					}, p))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "Achievements"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8",
						children: AWARDS.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .06,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-baseline justify-between gap-6 border-b border-border py-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-xl",
									children: a.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-muted-foreground",
									children: a.year
								})]
							})
						}, a.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex items-center gap-4 rounded-3xl bg-surface p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-5 w-5 shrink-0 text-coral" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
										value: 1,
										suffix: "%"
									})
								}),
								" ",
								"of studio revenue funds open-source maintenance and civic technology."
							]
						})]
					})
				] })]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			eyebrow: "Work with us",
			title: "Ready to start your project? Let us talk.",
			body: "Tell us what you need — AI, automation, web development or Shopify. We will come back with a clear plan and honest pricing within 24 hours."
		})
	] });
}
//#endregion
export { About as component };
