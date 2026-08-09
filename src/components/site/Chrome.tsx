import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { ArrowUp, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.PNG";

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[80] h-[2px] origin-left bg-primary"
    />
  );
}

export function Loader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + (100 - p) * 0.08 + 0.5;
      });
    }, 30);
    const t = setTimeout(() => setDone(true), 2000);
    return () => { clearTimeout(t); clearInterval(interval); };
  }, []);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03, filter: "blur(8px)" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          {/* Subtle bg glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/8 blur-[120px]" />
          </div>

          <div className="relative flex flex-col items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 h-20 w-20 overflow-hidden rounded-2xl bg-white p-2.5 shadow-lift ring-1 ring-border"
            >
              <img src={logo} alt="Solvix Core" className="h-full w-full object-contain" />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl tracking-tight"
            >
              Solvix Core
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="eyebrow mt-2 text-muted-foreground"
            >
              Premium Tech Solutions
            </motion.p>

            {/* Progress bar */}
            <div className="mt-10 h-px w-48 overflow-hidden rounded-full bg-border">
              <motion.div
                className="h-full rounded-full bg-primary origin-left"
                style={{ scaleX: progress / 100 }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress / 100 }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-5 z-40 flex items-center gap-2"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="group flex items-center gap-2 rounded-full border border-primary/20 bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold shadow-lift"
            >
              <MessageCircle className="h-4 w-4" />
              Get a Quote
            </Link>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-background shadow-lift"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
