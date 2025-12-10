"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"

const services = [
  { label: "N&N", href: "/services/n-and-n" },
  { label: "LangChain", href: "/services/langchain" },
  { label: "Customized Websites", href: "/services/customized-websites" },
  { label: "OpenAI Agent SDK", href: "/services/openai-agent-sdk" },
  { label: "AI/ML", href: "/services/ai-ml" },
  { label: "Application Development", href: "/services/application-development" },
  { label: "Video Editing", href: "/services/video-editing" },
  { label: "Graphic Designing", href: "/services/graphic-designing" },
  { label: "Content Creation", href: "/services/content-creation" },
  { label: "Shopify Store Designing", href: "/services/shopify-store-designing" },
]

export default function SiteNavbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const linkClass = (target: string) =>
    cn(
      "rounded-md px-3 py-2 text-sm font-medium transition-all duration-300",
      pathname === target
        ? "text-foreground font-semibold bg-secondary"
        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
    )

  return (
    <>
      {/* 🌐 Navbar */}
      <motion.nav
        aria-label="Primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-4 left-1/2 z-50 flex h-16 w-[94%] max-w-6xl -translate-x-1/2 items-center justify-between rounded-xl border border-border bg-card/95 backdrop-blur-xl shadow-lg px-5 sm:px-8"
      >
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-2" aria-label="Solvix Core Home">
          <Image
            src="/logo.png"
            alt="Solvix Core logo"
            width={56}
            height={48}
            className="rounded-md"
            priority
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-lg sm:text-xl font-semibold tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
          >
            Solvix Core
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            About Us
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-sm font-medium text-foreground hover:bg-secondary/50 focus-visible:ring-0 transition-all"
              >
                Services
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="min-w-64 bg-card border border-border shadow-lg text-foreground"
            >
              {services.map((s) => (
                <DropdownMenuItem key={s.href} asChild>
                  <Link
                    href={s.href}
                    className="w-full text-sm hover:bg-secondary/50 hover:text-foreground transition-all"
                  >
                    {s.label}
                  </Link>
                </DropdownMenuItem>
              ))}
              <div className="px-2 pt-2">
                <Link
                  href="/services"
                  className="text-sm text-primary hover:text-primary/80 font-medium"
                >
                  View all services
                </Link>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/contact" className={linkClass("/contact")}>
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground hover:text-foreground/80 transition-all"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-1/2 z-40 w-[90%] max-w-sm -translate-x-1/2 rounded-xl border border-border bg-card backdrop-blur-lg shadow-lg p-4 flex flex-col gap-2 md:hidden"
          >
            <Link
              href="/"
              className="block text-sm text-foreground hover:text-foreground/80 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-sm text-foreground hover:text-foreground/80 transition-all"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>

            <div className="border-t border-border my-2" />

            {/* Services Dropdown */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex w-full justify-between items-center text-sm font-semibold text-foreground hover:text-foreground/80 transition-all"
              >
                Services {servicesOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="pl-4 mt-2 flex flex-col gap-1"
                  >
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block text-sm text-foreground hover:text-foreground/80 transition-all"
                        onClick={() => setIsOpen(false)}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="border-t border-border my-2" />

            <Link
              href="/contact"
              className="block text-sm text-foreground hover:text-foreground/80 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
