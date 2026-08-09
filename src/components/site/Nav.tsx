import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronRight, Menu, Search, X } from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/site-data";
import { Magnetic } from "./primitives";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.PNG";

const GROUPS = ["Build", "Intelligence", "Platforms", "Growth"];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [search, setSearch] = useState(false);
  const [q, setQ] = useState("");
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobile(false); setMega(false); setSearch(false); }, [path]);

  useEffect(() => {
    if (mobile) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobile]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); setSearch((s) => !s); }
      if (e.key === "Escape") { setSearch(false); setMobile(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const results = q
    ? SERVICES.filter((s) => s.title.toLowerCase().includes(q.toLowerCase())).slice(0, 6)
    : SERVICES.slice(0, 6);

  return (
    <>
      <header className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}>
        <div className="container-lux">
          <motion.div
            className={cn(
              "flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 md:px-5",
              scrolled
                ? "border border-border bg-white/95 shadow-soft backdrop-blur-2xl"
                : "border border-white/20 bg-white/80 backdrop-blur-md shadow-sm",
            )}
            layout
          >
            {/* Logo */}
            <Link to="/" className="group flex items-center gap-3 pl-1">
              <motion.span
                whileHover={{ scale: 1.08, rotate: -2 }}
                whileTap={{ scale: 0.96 }}
                className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-border shadow-sm"
              >
                <img src={logo} alt="Solvix Core" className="h-full w-full object-contain" />
              </motion.span>
              <span className="font-display text-xl tracking-tight">{COMPANY.name}</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-0.5 lg:flex">
              <div onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)} className="relative">
                <Link to="/services" className="group flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-surface hover:text-foreground">
                  Services
                  <motion.span
                    animate={{ rotate: mega ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="h-3.5 w-3.5 text-muted-foreground"
                  >
                    ▾
                  </motion.span>
                </Link>
              </div>
              {NAV_LINKS.filter((l) => l.label !== "Services").map((l) => (
                <Link key={l.to} to={l.to} className={cn(
                  "rounded-xl px-3.5 py-2 text-sm font-medium transition-all duration-200",
                  path === l.to
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-foreground/70 hover:bg-surface hover:text-foreground",
                )}>
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* CTA + search + hamburger */}
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                aria-label="Search"
                onClick={() => setSearch(true)}
                className="hidden sm:flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
              >
                <Search className="h-3.5 w-3.5" />
              </motion.button>

              <Magnetic>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/contact" className="group hidden items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md sm:inline-flex">
                    Get a Quote
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </motion.div>
              </Magnetic>

              <motion.button
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                aria-label="Menu"
                onClick={() => setMobile(true)}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card lg:hidden"
              >
                <Menu className="h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Mega menu */}
        <AnimatePresence>
          {mega && (
            <motion.div
              onMouseEnter={() => setMega(true)}
              onMouseLeave={() => setMega(false)}
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="container-lux hidden pt-2 lg:block"
            >
              <div className="card-lux rounded-2xl grid grid-cols-5 gap-6 p-6 shadow-lift">
                <div className="col-span-1 rounded-xl bg-primary/5 p-5 border border-primary/10">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
                    <span className="text-primary text-lg font-bold">S</span>
                  </div>
                  <p className="font-display text-lg leading-tight">11 services. One team.</p>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">AI, automation, web, Shopify and more — all delivered from a single studio.</p>
                  <Link to="/services" className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                    View all <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
                <div className="col-span-4 grid grid-cols-4 gap-4">
                  {GROUPS.map((g) => (
                    <div key={g}>
                      <p className="eyebrow mb-3 text-primary">{g}</p>
                      <ul className="space-y-1">
                        {SERVICES.filter((s) => s.group === g).map((s) => (
                          <li key={s.slug}>
                            <Link to={`/services/${s.slug}`} className="group flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm text-foreground/70 transition-all hover:bg-surface hover:text-primary">
                              <ChevronRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                              {s.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Mobile Full-Screen Nav ──────────────────────────────── */}
      <AnimatePresence>
        {mobile && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobile(false)}
              className="fixed inset-0 z-[60] bg-ink/50 backdrop-blur-sm lg:hidden"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="fixed right-0 top-0 bottom-0 z-[70] w-[85vw] max-w-[360px] bg-background lg:hidden flex flex-col overflow-hidden"
            >
              {/* Top bar */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-surface">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 overflow-hidden rounded-xl bg-white ring-1 ring-border">
                    <img src={logo} alt="Solvix Core" className="h-full w-full object-contain p-1" />
                  </span>
                  <span className="font-display text-base font-semibold">{COMPANY.name}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }}
                  onClick={() => setMobile(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card"
                >
                  <X className="h-4 w-4" />
                </motion.button>
              </div>

              {/* Nav links */}
              <div className="flex-1 overflow-y-auto px-3 py-3">
                {[{ label: "Home", to: "/" }, ...NAV_LINKS].map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={l.to}
                      onClick={() => setMobile(false)}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3.5 mb-1 text-sm font-medium transition-all",
                        path === l.to
                          ? "bg-primary/10 text-primary font-semibold"
                          : "text-foreground hover:bg-surface hover:translate-x-1",
                      )}
                    >
                      <span>{l.label}</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </Link>
                  </motion.div>
                ))}

                {/* Services quick links */}
                <div className="mt-4 rounded-xl border border-border bg-surface p-4">
                  <p className="eyebrow mb-3">Quick Services</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {SERVICES.slice(0, 6).map((s, i) => (
                      <motion.div
                        key={s.slug}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + 0.04 * i }}
                      >
                        <Link
                          to={`/services/${s.slug}`}
                          onClick={() => setMobile(false)}
                          className="block rounded-lg bg-card px-3 py-2 text-xs font-medium text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors border border-border"
                        >
                          {s.title}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="border-t border-border bg-surface p-4 space-y-3">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/contact"
                    onClick={() => setMobile(false)}
                    className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground"
                  >
                    Get a Free Quote <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "CA", href: COMPANY.whatsapp.canada },
                    { label: "UK", href: COMPANY.whatsapp.uk },
                    { label: "PK", href: COMPANY.whatsapp.pakistan },
                  ].map((c) => (
                    <motion.a
                      key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center rounded-xl bg-card border border-border py-2.5 text-xs font-bold text-foreground/70 hover:text-primary hover:border-primary/30 transition-colors"
                    >
                      {c.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Search */}
      <AnimatePresence>
        {search && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-start justify-center bg-ink/30 p-4 pt-[12vh] backdrop-blur-md"
            onClick={() => setSearch(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="card-lux w-full max-w-xl overflow-hidden rounded-2xl shadow-lift"
            >
              <div className="flex items-center gap-3 border-b border-border px-5 py-4">
                <Search className="h-4 w-4 text-muted-foreground shrink-0" />
                <input
                  autoFocus value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search services…"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
                <kbd className="rounded-lg border border-border bg-surface px-2 py-1 font-mono text-[10px] text-muted-foreground">ESC</kbd>
              </div>
              <ul className="max-h-72 overflow-y-auto p-2">
                {results.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/services/${s.slug}`}
                      onClick={() => setSearch(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-3 text-sm transition-colors hover:bg-surface group"
                    >
                      <span className="group-hover:text-primary transition-colors">{s.title}</span>
                      <span className="text-[11px] text-muted-foreground bg-surface px-2 py-0.5 rounded-full">{s.group}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
