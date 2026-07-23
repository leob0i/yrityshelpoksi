"use client"

import { motion } from "framer-motion"
import { Mail, MessageCircle, Phone } from "lucide-react"
import { ContactForm } from "@/components/ContactForm"
import { Button } from "@/components/ui/button"

export function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] pt-16 pb-24">
      <motion.div
        className="relative mb-16 flex h-40 w-full items-center justify-center overflow-hidden bg-black sm:h-48"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/logo_horizontal_transparent.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/60" />
        <h1 className="relative px-6 text-balance text-center text-6xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
          Lähetä meille{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            viesti
          </span>
        </h1>
      </motion.div>

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
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <img src="/logo_horizontal_transparent.png" alt="Apell x Repola" className="mx-auto h-14 w-auto" />

          <p className="mx-auto mt-6 max-w-xl text-lg text-white/50">
            Voit ottaa meihin yhteyden mitä vain kanavaa käyttäen, vastaamme mahdollisimman pian kuitenkin 24h
            sisällä.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <Button
              asChild
              className="h-11 gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 px-6 text-sm font-semibold text-white hover:from-emerald-500 hover:to-teal-500"
            >
              <a
                href="https://api.whatsapp.com/send/?phone=%2B358452031377&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>

            <a
              href="tel:+358452031377"
              className="flex items-center gap-2 text-white/70 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 text-emerald-400" />
              +358452031377
            </a>

            <a
              href="mailto:leo@leodigital.fi"
              className="flex items-center gap-2 text-white/70 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 text-emerald-400" />
              leo@leodigital.fi
            </a>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 rounded-2xl border border-white/5 bg-white/[0.02] p-8 sm:p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}
