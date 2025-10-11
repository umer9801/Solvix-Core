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
        ? "bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]"
        : "text-gray-700 hover:bg-gradient-to-r hover:from-blue-400 hover:to-sky-400 hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
    )

  return (
    <>
      {/* 🌐 Navbar */}
      <motion.nav
        aria-label="Primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-4 left-1/2 z-50 flex h-16 w-[94%] max-w-6xl -translate-x-1/2 items-center justify-between rounded-2xl border border-white/30 bg-white/30 backdrop-blur-lg shadow-[0_0_25px_rgba(173,216,230,0.3)] px-5 sm:px-8"
      >
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-2" aria-label="Solvix Core Home">
          <Image
            src="/images/logo.jpg"
            alt="Solvix Core logo"
            width={36}
            height={36}
            className="rounded-md shadow-[0_0_8px_rgba(135,206,250,0.3)]"
            priority
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-lg sm:text-xl font-semibold tracking-tight bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]"
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
                className="text-sm font-medium text-gray-700 hover:bg-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-sky-400 hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)] focus-visible:ring-0 transition-all"
              >
                Services
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="min-w-64 bg-white/70 backdrop-blur-lg border border-white/30 shadow-[0_0_20px_rgba(173,216,230,0.4)] text-gray-700"
            >
              {services.map((s) => (
                <DropdownMenuItem key={s.href} asChild>
                  <Link
                    href={s.href}
                    className="w-full text-sm hover:bg-gradient-to-r hover:from-blue-400 hover:to-sky-400 hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)] transition-all"
                  >
                    {s.label}
                  </Link>
                </DropdownMenuItem>
              ))}
              <div className="px-2 pt-2">
                <Link
                  href="/services"
                  className="text-sm bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
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
          className="md:hidden text-blue-800 hover:text-blue-500 transition-all"
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
            className="fixed top-20 left-1/2 z-40 w-[90%] max-w-sm -translate-x-1/2 rounded-2xl border border-white/30 bg-blue-200/90 backdrop-blur-lg shadow-[0_0_25px_rgba(56,189,248,0.3)] p-4 flex flex-col gap-2 md:hidden"
          >
            <Link
              href="/"
              className="block text-sm text-blue-800 hover:text-blue-500 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-sm text-blue-800 hover:text-blue-500 transition-all"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>

            <div className="border-t border-blue-300/50 my-2" />

            {/* Services Dropdown */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex w-full justify-between items-center text-sm font-semibold text-blue-800 hover:text-blue-500 transition-all"
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
                        className="block text-sm text-blue-800 hover:text-blue-500 transition-all"
                        onClick={() => setIsOpen(false)}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="border-t border-blue-300/50 my-2" />

            <Link
              href="/contact"
              className="block text-sm text-blue-800 hover:text-blue-500 transition-all"
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
