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
      className="relative border-t bg-gradient-to-r from-[#eaf7ff] via-[#f5fbff] to-[#e9f6ff] text-gray-800 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(100,200,255,0.2),transparent_70%)] blur-2xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold tracking-wide text-sky-600 drop-shadow-[0_0_6px_rgba(100,200,255,0.4)]">
            Solvix Core
          </h3>
          <p className="mt-3 text-sm text-gray-700 leading-relaxed">
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
          <h3 className="text-sm font-semibold tracking-wide text-sky-600">Company</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><Link className="hover:text-sky-500 transition-colors" href="/about">About</Link></li>
            <li><Link className="hover:text-sky-500 transition-colors" href="/services">Services</Link></li>
            <li><Link className="hover:text-sky-500 transition-colors" href="/contact">Contact</Link></li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-sm font-semibold tracking-wide text-sky-600">Services</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><Link className="hover:text-sky-500 transition-colors" href="/services/langchain">LangChain</Link></li>
            <li><Link className="hover:text-sky-500 transition-colors" href="/services/openai-agent-sdk">OpenAI Agent SDK</Link></li>
            <li><Link className="hover:text-sky-500 transition-colors" href="/services/customized-websites">Customized Websites</Link></li>
            <li><Link className="hover:text-sky-500 transition-colors" href="/services/ai-ml">AI / ML</Link></li>
          </ul>
        </motion.div>

        {/* Contact + Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-sm font-semibold tracking-wide text-sky-600">Contact</h3>
          <ul className="mt-3 space-y-3 text-sm text-gray-700">
            {/* Mail */}
            <li>
              <a
                href="mailto:info@solvixcore.com"
                className="flex items-center gap-2 text-sky-600 hover:text-sky-700 transition-colors hover:underline"
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
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-300 text-sky-600 hover:bg-sky-100 hover:text-sky-700 transition-all shadow-[0_0_8px_rgba(100,200,255,0.25)]"
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
        className="relative border-t border-sky-200/70"
      >
        <div className="mx-auto max-w-6xl p-6 text-center text-sm text-gray-700">
          © {new Date().getFullYear()} <span className="text-sky-600 font-medium">Solvix Core</span>. All rights reserved.
        </div>
      </motion.div>
    </motion.footer>
  )
}
