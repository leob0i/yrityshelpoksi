"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/paketit/starter", label: "STARTER" },
  { href: "/paketit/medium", label: "MEDIUM" },
  { href: "/paketit/pro", label: "PRO" },
  { href: "/#nain-se-toimii", label: "Näin se toimii" },
  { href: "/#hinnat", label: "Hinnat" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="/logo_horizontal_transparent.png" alt="Kirjanpito ja Digitoimisto — Apell x Repola" className="h-12 w-auto" />
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <Button
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500"
              asChild
            >
              <a href="/yhteys">Ota yhteyttä</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white/70"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Avaa valikko"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-[#0a0a0a] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />
            {/* Gradient orbs */}
            <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-600/20 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-teal-600/20 blur-[120px]" />

            <div className="relative flex min-h-full flex-col items-center justify-center gap-8 px-6 py-16">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-3xl font-bold text-white/80 transition-colors hover:text-white sm:text-4xl"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                className="mt-4 w-full max-w-xs"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ delay: navLinks.length * 0.06, duration: 0.35 }}
              >
                <Button
                  className="h-12 w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-base font-semibold text-white hover:from-emerald-500 hover:to-teal-500"
                  asChild
                >
                  <a href="/yhteys" onClick={() => setMobileOpen(false)}>
                    Ota yhteyttä
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
