"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Vain nettisivut",
    price: "49 €",
    period: "/kk",
    description: "LeoDigitalin nettisivupalvelut ilman kirjanpitoa.",
    features: [
      "Räätälöidyt sivut brändisi mukaan",
      "Näkyvyys Googlessa ja tekoälyhauissa",
      "Domain, hosting ja tietoturva",
      "Päivitykset WhatsApp-viestillä",
    ],
    cta: "Pyydä tarjous",
    featured: false,
  },
  {
    name: "Starter",
    price: "118,90 €",
    period: "/kk",
    description: "Kirjanpito ja nettisivut samassa paketissa.",
    note: "kirjanpito 69,90 € + nettisivut 49 € · Aloitusmaksu alk. 99 €",
    features: [
      "Henkilökohtainen kirjanpitäjä",
      "Lakisääteinen kirjanpito ja veroilmoitukset",
      "0–20 tositetta/kk, liikevaihto 0–100k",
      "Räätälöidyt nettisivut (ei valmispohjia)",
      "Näkyvyys Googlessa ja tekoälyhauissa",
      "Domain, hosting ja ylläpito hoidettu",
    ],
    cta: "Aloita nyt",
    featured: true,
  },
  {
    name: "Kasvu",
    price: "Räätälöity",
    description: "Suuremmalle tositemäärälle ja liikevaihdolle.",
    features: [
      "Kaikki Starter-paketin edut",
      "Enemmän tositteita ja suurempi liikevaihto",
      "Palkanlaskenta ja laskutus",
      "Verkkokauppa tarvittaessa",
      "Nimetty asiantuntija",
    ],
    cta: "Ota yhteyttä",
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="hinnat" className="relative bg-[#0a0a0a] py-24">
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
            Paketit
          </span>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Selkeä{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              hinnoittelu
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/50">
            Kirjanpito ja diginäkyvyys samasta paikasta. Ei piilokuluja.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid items-start gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`relative overflow-hidden rounded-2xl border p-8 ${
                plan.featured
                  ? "border-emerald-500/50 bg-gradient-to-b from-emerald-500/10 to-transparent"
                  : "border-white/5 bg-white/[0.02]"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {plan.featured && (
                <div className="absolute -right-12 top-6 rotate-45 bg-gradient-to-r from-emerald-600 to-teal-600 px-12 py-1 text-xs font-medium text-white">
                  Suosituin
                </div>
              )}

              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.period && <span className="text-white/50">{plan.period}</span>}
              </div>
              <p className="mt-2 text-sm text-white/50">{plan.description}</p>
              {plan.note && <p className="mt-2 text-xs text-emerald-400/80">{plan.note}</p>}

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-white/70">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`mt-8 w-full ${
                  plan.featured
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500"
                    : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-white/40">
          Kaikki paketit sisältävät samat LeoDigitalin nettisivupalvelut — 49 €/kk.
        </p>
      </div>
    </section>
  )
}
