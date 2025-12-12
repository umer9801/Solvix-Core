"use client"

export default function WhySolvix() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16 animate-fade-up">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground">Why Solvix Core</h2>
          <p className="mt-2 text-muted-foreground">
            We combine product thinking with engineering rigor—shaping ideas into measurable outcomes.
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed">
            <li>
              <strong>Outcome-first.</strong> Clear success metrics, shipped incrementally.
            </li>
            <li>
              <strong>Craftsmanship.</strong> Accessible UI, sound architecture, observable systems.
            </li>
            <li>
              <strong>AI done right.</strong> Grounded, testable, monitored—no hype-driven decisions.
            </li>
            <li>
              <strong>Security by default.</strong> Least-privilege, secrets hygiene, reviewable changes.
            </li>
            <li>
              <strong>Transparent delivery.</strong> Demos, docs, and traces you can trust.
            </li>
          </ul>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-5 card-glow bg-card shadow-md">
            <p className="text-3xl font-semibold text-card-foreground">50%+</p>
            <p className="mt-1 text-sm text-muted-foreground">Avg. time-to-value improvement</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-5 card-glow bg-white shadow-md">
            <p className="text-3xl font-semibold text-card-foreground">A+</p>
            <p className="mt-1 text-sm text-muted-foreground">Accessibility & Core Web Vitals</p>
          </div>
          <div className="rounded-lg border border-border p-5 card-glow bg-card shadow-md">
            <p className="text-3xl font-semibold text-card-foreground">99.9%</p>
            <p className="mt-1 text-sm text-muted-foreground">Target uptime for critical paths</p>
          </div>
          <div className="rounded-lg border border-border p-5 card-glow bg-card shadow-md">
            <p className="text-3xl font-semibold text-card-foreground">24h</p>
            <p className="mt-1 text-sm text-muted-foreground">Typical first demo turnaround</p>
          </div>
        </div>
      </div>
    </section>
  )
}
