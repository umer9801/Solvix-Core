import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, Search, X } from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/site-data";
import { Magnetic } from "./primitives";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.PNG";

const GROUPS = ["Build", "Design", "Intelligence", "Platforms", "Infrastructure", "Growth"];

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

  useEffect(() => {
    setMobile(false);
    setMega(false);
    setSearch(false);
  }, [path]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearch((s) => !s);
      }
      if (e.key === "Escape") setSearch(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const results = q
    ? SERVICES.filter((s) => s.title.toLowerCase().includes(q.toLowerCase())).slice(0, 6)
    : SERVICES.slice(0, 6);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-sm transition-all duration-500",
          scrolled ? "py-2 shadow-sm" : "py-5",
        )}
      >
        <div className="container-lux">
          <div
            className={cn(
              "flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 md:px-5",
              scrolled
                ? "border border-border bg-white shadow-soft backdrop-blur-xl"
                : "border border-border bg-white shadow-sm",
            )}
          >
            <Link to="/" className="group flex items-center gap-2.5 pl-1">
              <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-sm">
                <img src={logo} alt="Solvix Core Logo" className="h-full w-full object-contain" />
              </span>
              <span className="font-display text-xl tracking-tight">{COMPANY.name}</span>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              <div
                onMouseEnter={() => setMega(true)}
                onMouseLeave={() => setMega(false)}
                className="relative"
              >
                <Link
                  to="/services"
                  className="flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                >
                  Services
                  <span
                    className={cn(
                      "h-1 w-1 rounded-full bg-primary transition-opacity",
                      mega ? "opacity-100" : "opacity-0",
                    )}
                  />
                </Link>
              </div>
              {NAV_LINKS.filter((l) => l.label !== "Services").map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    path === l.to
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground/70 hover:text-foreground",
                  )}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                aria-label="Search"
                onClick={() => setSearch(true)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
              >
                <Search className="h-4 w-4" />
              </button>
              <Magnetic>
                <Link
                  to="/contact"
                  className="group hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-background transition-all hover:shadow-lift sm:inline-flex"
                >
                  Start a project
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Magnetic>
              <button
                aria-label="Menu"
                onClick={() => setMobile(true)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card lg:hidden"
              >
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Mega menu */}
        <AnimatePresence>
          {mega ? (
            <motion.div
              onMouseEnter={() => setMega(true)}
              onMouseLeave={() => setMega(false)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="container-lux hidden pt-3 lg:block"
            >
              <div className="card-lux grid grid-cols-4 gap-8 p-8">
                <div className="col-span-1 rounded-2xl bg-surface p-6">
                  <p className="eyebrow">Capabilities</p>
                  <p className="font-display mt-3 text-2xl leading-tight">
                    Twenty-two disciplines, one delivery standard.
                  </p>
                  <Link
                    to="/services"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    All services <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="col-span-3 grid grid-cols-3 gap-x-8 gap-y-6">
                  {GROUPS.map((g) => (
                    <div key={g}>
                      <p className="eyebrow mb-3">{g}</p>
                      <ul className="space-y-1.5">
                        {SERVICES.filter((s) => s.group === g).map((s) => (
                          <li key={s.slug}>
                            <Link
                              to={`/services/${s.slug}`}
                              className="text-sm text-foreground/75 transition-colors hover:text-primary"
                            >
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
          ) : null}
        </AnimatePresence>
      </header>

      {/* Mobile drawer - slides in from right */}
      <AnimatePresence>
        {mobile ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobile(false)}
              className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed right-0 top-0 bottom-0 z-[70] w-[80vw] max-w-sm bg-card shadow-lift lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-11 w-11 overflow-hidden rounded-xl bg-white p-1 shadow-sm">
                    <img src={logo} alt="Solvix Core" className="h-full w-full object-contain" />
                  </span>
                  <span className="font-display text-lg">{COMPANY.name}</span>
                </div>
                <button
                  aria-label="Close"
                  onClick={() => setMobile(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-4 py-4">
                {[{ label: "Home", to: "/" }, ...NAV_LINKS].map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={l.to}
                      className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
                        path === l.to ? "bg-accent text-accent-foreground" : "hover:bg-surface"
                      }`}
                      onClick={() => setMobile(false)}
                    >
                      {l.label}
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="border-t border-border p-4 space-y-3">
                <Link
                  to="/contact"
                  onClick={() => setMobile(false)}
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-ink px-5 py-3 text-sm font-semibold text-background"
                >
                  Start a project <ArrowUpRight className="h-4 w-4" />
                </Link>
                <div className="grid grid-cols-3 gap-2 text-center text-xs text-muted-foreground">
                  <a href={COMPANY.whatsapp.canada} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-surface p-2 hover:text-primary text-center">CA</a>
                  <a href={COMPANY.whatsapp.uk} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-surface p-2 hover:text-primary text-center">UK</a>
                  <a href={COMPANY.whatsapp.pakistan} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-surface p-2 hover:text-primary text-center">PK</a>
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>

      {/* Search modal */}
      <AnimatePresence>
        {search ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-start justify-center bg-ink/25 p-4 pt-[14vh] backdrop-blur-sm"
            onClick={() => setSearch(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="card-lux w-full max-w-xl overflow-hidden"
            >
              <div className="flex items-center gap-3 border-b border-border px-5 py-4">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  autoFocus
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search services, work, articles…"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
                <kbd className="rounded-md border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                  ESC
                </kbd>
              </div>
              <ul className="max-h-80 overflow-y-auto p-2">
                {results.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/services/${s.slug}`}
                      className="flex items-center justify-between rounded-xl px-3 py-3 text-sm transition-colors hover:bg-surface"
                    >
                      <span>{s.title}</span>
                      <span className="text-xs text-muted-foreground">{s.group}</span>
                    </Link>
                  </li>
                ))}
                {results.length === 0 ? (
                  <li className="px-3 py-6 text-center text-sm text-muted-foreground">
                    No matches. Try “AI”, “cloud” or “design”.
                  </li>
                ) : null}
              </ul>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
