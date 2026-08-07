import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useMotionValue, useSpring, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

/* ---------------- Reveal ---------------- */

export function Reveal({
  children,
  delay = 0,
  y = 26,
  blur = true,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  blur?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: blur ? "blur(10px)" : "none" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Word-by-word text reveal ---------------- */

export function TextReveal({
  text,
  className,
  delay = 0,
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
}) {
  const words = text.split(" ");
  return (
    <Tag className={className}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: delay + i * 0.045, ease: [0.16, 1, 0.3, 1] }}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/* ---------------- Magnetic wrapper ---------------- */

export function Magnetic({ children, strength = 0.35 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });

  return (
    <motion.span
      ref={ref}
      style={{ x, y, display: "inline-block" }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.span>
  );
}

/* ---------------- Buttons ---------------- */

export function LuxButton({
  children,
  variant = "solid",
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "solid" | "ghost" | "coral" }) {
  return (
    <Magnetic>
      <button
        {...rest}
        className={cn(
          "group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-tight transition-all duration-500",
          variant === "solid" && "bg-ink text-background shadow-soft hover:shadow-lift",
          variant === "coral" && "bg-coral text-background shadow-soft hover:shadow-lift",
          variant === "ghost" && "border border-border bg-card text-foreground hover:border-primary",
          className,
        )}
      >
        <span className="relative z-10 flex items-center gap-2.5">{children}</span>
        <span className="absolute inset-0 z-0 translate-y-full bg-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
      </button>
    </Magnetic>
  );
}

/* ---------------- Counter ---------------- */

export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);
  const decimals = value % 1 !== 0 ? 2 : 0;

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1800;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(value * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* ---------------- Marquee ---------------- */

export function Marquee({
  items,
  className,
  itemClassName,
}: {
  items: string[];
  className?: string;
  itemClassName?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="animate-marquee flex w-max gap-14">
        {doubled.map((it, i) => (
          <span key={i} className={cn("whitespace-nowrap", itemClassName)}>
            {it}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}

/* ---------------- Floating blobs backdrop ---------------- */

export function Blobs({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      <div className="animate-float-slow absolute -left-32 top-[-6rem] h-[26rem] w-[26rem] rounded-full bg-primary-soft opacity-70 blur-3xl" />
      <div
        className="animate-float-slow absolute right-[-8rem] top-24 h-[22rem] w-[22rem] rounded-full bg-violet-soft opacity-70 blur-3xl"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="animate-float-slow absolute bottom-[-10rem] left-1/3 h-[24rem] w-[24rem] rounded-full bg-peach-soft opacity-70 blur-3xl"
        style={{ animationDelay: "-8s" }}
      />
    </div>
  );
}

/* ---------------- Section heading ---------------- */

export function SectionHead({
  eyebrow,
  title,
  body,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Reveal>
        <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
          <span className="h-px w-8 bg-primary" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      </Reveal>
      <TextReveal text={title} className="display-lg mt-6 text-foreground" delay={0.05} />
      {body ? (
        <Reveal delay={0.15}>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{body}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

/* ---------------- Parallax image ---------------- */

export function ParallaxImage({
  src,
  alt,
  className,
  range = 60,
  rounded = "rounded-3xl",
}: {
  src: string;
  alt: string;
  className?: string;
  range?: number;
  rounded?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-range, range]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden bg-muted", rounded, className)}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y }}
        className="h-full w-full scale-[1.15] object-cover"
      />
    </div>
  );
}

/* ---------------- Mouse-follow highlight ---------------- */

export function SpotlightCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
      }}
      className={cn("group relative overflow-hidden", className)}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(30rem 20rem at ${pos.x}% ${pos.y}%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 65%)`,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

export const accentBg: Record<string, string> = {
  primary: "bg-primary-soft",
  coral: "bg-coral-soft",
  violet: "bg-violet-soft",
  sage: "bg-sage-soft",
  peach: "bg-peach-soft",
};

export const accentText: Record<string, string> = {
  primary: "text-primary",
  coral: "text-coral",
  violet: "text-violet",
  sage: "text-primary",
  peach: "text-coral",
};
