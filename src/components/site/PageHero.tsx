import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Blobs, Reveal, TextReveal } from "./primitives";

export function PageHero({
  eyebrow,
  title,
  body,
  children,
  meta,
}: {
  eyebrow: string;
  title: string;
  body: string;
  children?: ReactNode;
  meta?: { k: string; v: string }[];
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-16 md:pb-24 md:pt-24">
      <Blobs />
      <div className="container-lux">
        <Reveal>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">{eyebrow}</span>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-end">
          <TextReveal text={title} as="h1" className="display-xl max-w-4xl" />
          <Reveal delay={0.2}>
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground lg:pb-3">{body}</p>
          </Reveal>
        </div>
        {meta ? (
          <Reveal delay={0.3}>
            <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
              {meta.map((m) => (
                <div key={m.k} className="bg-card px-6 py-7">
                  <p className="font-display text-3xl">{m.k}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{m.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        ) : null}
        {children}
      </div>
    </section>
  );
}
