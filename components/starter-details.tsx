"use client"

import { motion } from "framer-motion"
import { Check, Calculator, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

const kirjanpito = [
  "Henkilökohtainen kirjanpitäjä",
  "Lakisääteinen kirjanpito ja veroilmoitukset",
  "0–20 tositetta/kk, liikevaihto 0–100k",
]

const nettisivut = [
  "Räätälöidyt sivut brändisi mukaan — ei valmispohjia",
  "Näkyvyys Googlessa ja tekoälyhauissa",
  "Domain, hosting, tietoturva ja ylläpito hoidettu",
  "Päivitykset WhatsApp-viestillä",
]

export function StarterDetails() {
  return (
    <section className="relative bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400">
            Starter-paketti — kirjanpito ja nettisivut samassa
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Starter sisältää
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-white/50">
            Henkilökohtainen kirjanpitäjä hoitaa lakisääteisen kirjanpidon ja
            veroilmoitukset (0–20 tositetta/kk, liikevaihto 0–100k). LeoDigital
            tekee räätälöidyt, nopeat nettisivut jotka löytyvät Googlesta ja
            tekoälyhauista — domain, hosting, ylläpito ja päivitykset
            WhatsAppilla, kaikki hoidettu puolestasi.
          </p>
        </motion.div>

        <motion.div
          className="overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-emerald-500/10 to-transparent p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Kirjanpito */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                  <Calculator className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Kirjanpito (Repola)</h3>
                  <p className="text-sm text-emerald-400/80">69,90 €/kk</p>
                </div>
              </div>
              <ul className="space-y-3">
                {kirjanpito.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Nettisivut */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                  <Globe className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Nettisivut (LeoDigital)</h3>
                  <p className="text-sm text-emerald-400/80">49 €/kk</p>
                </div>
              </div>
              <ul className="space-y-3">
                {nettisivut.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Total */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
            <div>
              <p className="text-2xl font-bold text-white">Yhteensä 118,90 €/kk</p>
              <p className="text-sm text-white/40">Aloitusmaksu alk. 99 €</p>
            </div>
            <Button
              size="lg"
              className="h-12 bg-gradient-to-r from-emerald-600 to-teal-600 px-8 text-base font-semibold text-white hover:from-emerald-500 hover:to-teal-500"
            >
              Aloita nyt
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
