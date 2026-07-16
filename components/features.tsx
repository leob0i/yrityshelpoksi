"use client"

import { motion } from "framer-motion"
import { Calculator, Globe, ShoppingCart, MessageCircle } from "lucide-react"

const features = [
  {
    icon: Calculator,
    title: "Taloushallinto",
    description: "Taloushallinto ja kirjanpito samasta. Henkilökohtainen kirjanpitäjä hoitaa lakisääteisen kirjanpidon ja veroilmoitukset puolestasi.",
  },
  {
    icon: Globe,
    title: "Kotisivut",
    description: "Räätälöidyt, nopeat nettisivut jotka löytyvät Googlesta ja tekoälyhauista. Domain, hosting ja ylläpito hoidettu.",
  },
  {
    icon: ShoppingCart,
    title: "Verkkokaupat",
    description: "Toimiva verkkokauppa helposti ja nopeasti pystyyn puolestasi — myy tuotteitasi verkossa vaivattomasti.",
  },
  {
    icon: MessageCircle,
    title: "Tuki WhatsAppilla",
    description: "Päivitykset ja muutokset hoituvat yhdellä WhatsApp-viestillä. Ei jonotusta, ei monimutkaisia lomakkeita.",
  },
]

export function Features() {
  return (
    <section id="palvelut" className="relative bg-[#0a0a0a] py-24">
      {/* Background elements */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Kaikki mitä tarvitset{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              yrityksellesi
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/50">
            Kirjanpito ja Digitoimisto Apell x Repola yhdistää saman katon alle nykyaikaisen taloushallinnon ja
            digitaaliset kasvupalvelut. Saat henkilökohtaisen kirjanpitäjän lisäksi nettisivut, verkkokaupan,
            sähköpostit, ylläpidon ja jatkuvan teknisen tuen yhdeltä kumppanilta.
          </p>
        </motion.div>

        {/* Features grid - 4 in a row */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:border-emerald-500/30 hover:bg-white/[0.04] sm:p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity group-hover:opacity-100">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10" />
              </div>

              <div className="relative">
                <div className="flex items-center gap-3 sm:block">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 sm:mb-4 sm:h-12 sm:w-12">
                    <feature.icon className="h-5 w-5 text-emerald-400 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-base font-semibold text-white sm:mb-2 sm:text-lg">{feature.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/50 sm:mt-0">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
