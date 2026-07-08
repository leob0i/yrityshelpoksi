"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Ota yhteyttä",
    description: "Kerro yrityksestäsi ja tarpeistasi. Kartoitamme tilanteesi ja ehdotamme sopivan paketin.",
  },
  {
    number: "02",
    title: "Kirjanpito haltuun",
    description:
      "Henkilökohtainen kirjanpitäjä ottaa taloushallintosi hoitoon — kirjanpito ja veroilmoitukset hoituvat ajallaan lainmukaisesti ja oikein.",
  },
  {
    number: "03",
    title: "Nettisivut käyttöön",
    description:
      "LeoDigital rakentaa räätälöidyt nettisivut brändisi mukaan, jotka löytyvät Googlesta ja tekoälyhauista. Niiden tarkoitus on helpottaa liiketoimintaasi ja tuoda sinut näkyville. Jatkuva ylläpito sekä domain, hosting, tietoturva ja päivitykset hoidetaan puolestasi — muutokset yhdellä WhatsApp-viestillä.",
  },
  {
    number: "04",
    title: "Jatkuva tuki",
    description:
      "Kaikki mitä tarvitset menestyvään yritykseesi niin taloudellisesti ja digitaalisesti arkeasi helpottaen. Saat jatkuvan tuen kirjanpitäjältäsi sekä muutokset kotisivuille tai verkkokauppaan helposti ja nopeasti yhdellä WhatsApp-viestillä.",
  },
]

export function HowItWorks() {
  return (
    <section id="nain-se-toimii" className="relative bg-[#0a0a0a] py-24">
      {/* Gradient accent */}
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400">
            Näin se toimii
          </span>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Yrityksesi kuntoon{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              neljässä vaiheessa
            </span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-emerald-500/50 via-teal-500/50 to-transparent lg:left-1/2 lg:-translate-x-px" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className={`relative flex flex-col gap-8 lg:flex-row lg:items-center ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                {/* Number marker */}
                <div className="absolute left-0 flex h-16 w-16 items-center justify-center lg:left-1/2 lg:-translate-x-1/2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/30 bg-[#0a0a0a]">
                    <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-xl font-bold text-transparent">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 pl-24 lg:pl-0 ${i % 2 === 0 ? "lg:pr-24 lg:text-right" : "lg:pl-24"}`}>
                  <h3 className="mb-2 text-2xl font-semibold text-white">{step.title}</h3>
                  <p className="text-white/50">{step.description}</p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden flex-1 lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
