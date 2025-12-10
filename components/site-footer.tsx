"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function SiteFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative border-t border-border bg-gradient-to-br from-secondary via-background to-primary/2 text-foreground overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--primary)/3,transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold tracking-wide bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Solvix Core
          </h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            We design, build, and scale intelligent digital products — combining strategy, technology,
            and design to drive measurable results.
          </p>
        </motion.div>

        {/* Company Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-sm font-semibold tracking-wide text-foreground">Company</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link className="hover:text-foreground transition-colors" href="/about">About</Link></li>
            <li><Link className="hover:text-foreground transition-colors" href="/services">Services</Link></li>
            <li><Link className="hover:text-foreground transition-colors" href="/contact">Contact</Link></li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-sm font-semibold tracking-wide text-foreground">Services</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link className="hover:text-foreground transition-colors" href="/services/langchain">LangChain</Link></li>
            <li><Link className="hover:text-foreground transition-colors" href="/services/openai-agent-sdk">OpenAI Agent SDK</Link></li>
            <li><Link className="hover:text-foreground transition-colors" href="/services/customized-websites">Customized Websites</Link></li>
            <li><Link className="hover:text-foreground transition-colors" href="/services/ai-ml">AI / ML</Link></li>
          </ul>
        </motion.div>

        {/* Contact + Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-sm font-semibold tracking-wide text-foreground">Contact</h3>
          <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
            {/* Mail */}
            <li>
              <a
                href="mailto:info@solvixcore.com"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors hover:underline"
              >
                <Mail className="h-4 w-4" /> info@solvixcore.com
              </a>
            </li>
            {/* WhatsApp */}
            <li>
              <a
                href="https://wa.me/14315335035"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors hover:underline"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp: +1 (431) 533-5035
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="mt-6 flex items-center gap-4">
            {[
              { Icon: Facebook, link: "https://facebook.com/solvixcore", title: "Facebook" },
              { Icon: Instagram, link: "https://instagram.com/solvixcore", title: "Instagram" },
              { Icon: Linkedin, link: "https://linkedin.com/company/solvixcore", title: "LinkedIn" },
            ].map(({ Icon, link, title }, i) => (
              <motion.div key={i} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground hover:bg-secondary hover:text-foreground transition-all shadow-sm hover:shadow-md"
                  title={title}
                >
                  <Icon className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="relative border-t border-border"
      >
        <div className="mx-auto max-w-6xl p-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="text-foreground font-semibold">Solvix Core</span>. All rights reserved.
        </div>
      </motion.div>
    </motion.footer>
  )
}
