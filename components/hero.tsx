"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CodeEditor } from "./code-editor"

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/lasitalot.jpg')" }}
      />
      <div className="absolute inset-0 bg-[#0a0a0a]/70" />

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-600/20 blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-teal-600/20 blur-[120px]" />
      <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-500/10 blur-[100px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-6 pt-24 pb-20 lg:flex-row lg:gap-16">
        {/* Left side - Content */}
        <motion.div
          className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow */}
          <motion.p
            className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Kirjanpito + nettisivut ja verkkokaupat yhdellä sopimuksella
          </motion.p>

          {/* Headline */}
          <motion.h1
            className="text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Taloushallinto ja{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
              kotisivut
            </span>{" "}
            samasta
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mt-6 max-w-xl text-pretty text-lg text-white/50 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Henkilökohtainen kirjanpitäjä hoitaa taloushallinnon ja LeoDigital
            rakentaa nopeat, Googlesta löytyvät nettisivut — kaikki yhdessä
            paketissa.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button
              size="lg"
              className="h-12 bg-gradient-to-r from-emerald-600 to-teal-600 px-8 text-base font-semibold text-white hover:from-emerald-500 hover:to-teal-500"
              asChild
            >
              <a href="/yhteys">Pyydä tarjous</a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="h-12 gap-2 border border-white/10 px-6 text-base text-white/80 hover:bg-white/5 hover:text-white"
              asChild
            >
              <a href="#hinnat">
                Katso paketit
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right side - Code Editor */}
        <motion.div
          className="flex flex-1 justify-center lg:justify-end"
          initial={{ opacity: 0, x: 40, rotate: 0 }}
          animate={{ opacity: 1, x: 0, rotate: -2 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
        >
          <CodeEditor />
        </motion.div>
      </div>
    </section>
  )
}
