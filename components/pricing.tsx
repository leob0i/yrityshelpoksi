"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    price: "118,90 €",
    period: "/kk",
    description: "Sopii aloittaville yrityksille",
    note: "Aloitusmaksu alk. 99 €",
    href: "/paketit/starter",
    features: [
      "Henkilökohtainen kirjanpitäjä",
      "Kirjanpito ja veroilmoitukset",
      "Räätälöidyt nettisivut + ylläpito",
      "Domain, hosting ja tietoturva",
      "WhatsApp-päivitykset",
      "0–20 tositetta/kk",
      "Liikevaihto 0–100 000 €/vuosi",
    ],
    cta: "Aloita nyt",
    featured: false,
  },
  {
    name: "Medium",
    price: "188,90 €",
    period: "/kk",
    description: "Kasvaville yrityksille",
    note: "Aloitusmaksu alk. 99 €",
    features: [
      "Henkilökohtainen kirjanpitäjä",
      "Kirjanpito ja veroilmoitukset",
      "Räätälöidyt nettisivut + ylläpito",
      "Domain, hosting ja tietoturva",
      "WhatsApp-päivitykset",
      "20–40 tositetta/kk",
      "1–2 palkanlaskentaa/kk",
      "Liikevaihto 100 000–300 000 €/vuosi",
    ],
    cta: "Aloita nyt",
    featured: true,
  },
  {
    name: "Pro",
    price: "318,90 €",
    period: "/kk",
    description: "Yrityksille, joilla on suurempi volyymi",
    note: "Aloitusmaksu alk. 99 €",
    features: [
      "Henkilökohtainen kirjanpitäjä",
      "Kirjanpito ja veroilmoitukset",
      "Räätälöidyt nettisivut + ylläpito",
      "Domain, hosting ja tietoturva",
      "WhatsApp-päivitykset",
      "50–100 tositetta/kk",
      "3–5 palkanlaskentaa/kk",
      "Liikevaihto 300 000–500 000 €/vuosi",
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
              {plan.href && (
                <a
                  href={plan.href}
                  className="mt-2 inline-block text-xs text-white/40 underline underline-offset-2 transition-colors hover:text-white"
                >
                  Katso tarkemmin
                </a>
              )}

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
          Kaikki paketit sisältävät kirjanpidon ja LeoDigitalin nettisivupalvelut samassa hinnassa.
        </p>
      </div>
    </section>
  )
}
