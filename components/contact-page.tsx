"use client"

import { motion } from "framer-motion"
import { ContactForm } from "@/components/ContactForm"

export function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] pt-32 pb-24">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-600/20 blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-teal-600/20 blur-[120px]" />

      <div className="relative mx-auto max-w-2xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Lähetä meille{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              viesti
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/50">
            Alla olevan yhteydenottolomakkeen kautta voit lähettää meille viestiä, joka saapuu suoraan
            sähköposteihimme. Voit myös soittaa WhatsAppin kautta, tai lähettää sähköpostia milloin tahansa.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 rounded-2xl border border-white/5 bg-white/[0.02] p-8 sm:p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}
