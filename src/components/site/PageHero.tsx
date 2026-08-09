import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Blobs, Reveal } from "./primitives";

export function PageHero({
  eyebrow,
  title,
  body,
  children,
  meta,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  body: string;
  children?: ReactNode;
  meta?: { k: string; v: string }[];
  image?: string;
  imageAlt?: string;
  heroNote?: string;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-10 md:pb-20 md:pt-14">
      {/* Colorful gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-16 -left-16 h-80 w-80 rounded-full bg-primary/18 blur-[70px]" />
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-violet/12 blur-[60px]" />
        <div className="absolute bottom-0 left-1/2 h-48 w-48 rounded-full bg-coral/10 blur-[50px]" />
      </div>
      <Blobs />
      <div className="container-lux">

        {/* Breadcrumb */}
        <Reveal>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-foreground">Home</Link>
            <span>/</span>
            <span className="font-medium text-foreground">{eyebrow}</span>
          </div>
        </Reveal>

        {/* Main grid */}
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start">

          {/* Left — content */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">{eyebrow}</span>
              </div>
            </Reveal>

            {/* Title — plain h1, no word-by-word animation */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="display-xl mt-6 max-w-2xl"
            >
              {title}
            </motion.h1>

            <Reveal delay={0.25}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">{body}</p>
            </Reveal>

            {meta && (
              <Reveal delay={0.35}>
                <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
                  {meta.map((m) => (
                    <div key={m.k}>
                      <dt className="font-display text-3xl">{m.k}</dt>
                      <dd className="mt-1 text-xs text-muted-foreground">{m.v}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            )}
          </div>

          {/* Right — image */}
          {image && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[2rem] border border-border shadow-lift">
                <img
                  src={image}
                  alt={imageAlt ?? eyebrow}
                  width={700}
                  height={900}
                  className="aspect-[3/4] w-full object-cover object-center"
                />
              </div>
              <div className="rule-dots absolute -right-4 -bottom-4 -z-10 h-32 w-32 rounded-2xl" />
            </motion.div>
          )}
        </div>

        {children}
      </div>
    </section>
  );
}
