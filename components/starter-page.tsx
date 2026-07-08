"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calculator, Check, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

const kirjanpito = [
  "Henkilökohtainen kirjanpitäjä",
  "Lakisääteinen kirjanpito ja veroilmoitukset",
  "Tositemäärä 0–20 kpl/kk",
  "Liikevaihto 0–100k",
]

const nettisivut = [
  "Räätälöidyt nettisivut yrityksesi näköiseksi — ei valmispohjia, ulkoasu ja sisältö tehdään sinun brändisi mukaan",
  "Löydyt Googlesta ja tekoälyhauista — sivut rakennetaan niin, että Google, ChatGPT ja muut hakukoneet suosittelevat sinua",
  "Nopeat ja mobiilioptimoidut sivut — toimii täydellisesti puhelimella, tabletilla ja tietokoneella",
  "Domain, hosting ja tietoturva hoidettu — ei erillisiä laskuja tai palveluntarjoajia, kaikki samassa",
  "Päivitykset WhatsAppilla — lähetä viesti, kuva tai uusi tarjous, minä päivitän sivuille",
  "Jatkuva ylläpito ja varmuuskopiot — sivut pysyvät kunnossa ja turvassa ilman että sinun tarvitsee tehdä mitään",
  "Sivut kasvavat mukanasi — ajanvaraus, verkkokauppa tai muut lisäykset onnistuvat myöhemmin ilman uutta projektia",
]

const addOns = [
  { label: "Tosite", price: "1,50 €/tosite" },
  { label: "Palkanlaskenta", price: "15,90 €/palkanlaskenta" },
  { label: "Tilinpäätös ja muut työt (hakemusten tekeminen ja lähettäminen jne.)", price: "80,00 €/h" },
  { label: "Sähköpostilaatikko, esim. info@yrityksesi.fi", price: "+5 €/kk / laatikko" },
  { label: "Verkkokauppa", price: "+39–79 €/kk" },
]

export function StarterPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-[#0a0a0a] pt-32 pb-16">
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

        <motion.div
          className="relative mx-auto max-w-3xl px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="/#hinnat"
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Takaisin paketteihin
          </a>

          <span className="mb-4 block w-fit rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400 mx-auto">
            Starter-paketti
          </span>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Kirjanpito ja nettisivut{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              samassa paketissa
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/50">
            Sopii aloittaville yrityksille. Henkilökohtainen kirjanpitäjä hoitaa taloushallinnon ja LeoDigital
            rakentaa räätälöidyt nettisivut — kaikki yhdessä sopimuksessa.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="relative bg-[#0a0a0a] pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Kirjanpito */}
            <motion.div
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                  <Calculator className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <h2 className="font-semibold text-white">Kirjanpito (Repola)</h2>
                  <p className="text-sm text-emerald-400/80">69,90 €/kk</p>
                </div>
              </div>
              <p className="mb-4 text-sm text-white/40">Sisältää:</p>
              <ul className="space-y-3">
                {kirjanpito.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Nettisivut */}
            <motion.div
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                  <Globe className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <h2 className="font-semibold text-white">Nettisivut (LeoDigital)</h2>
                  <p className="text-sm text-emerald-400/80">49 €/kk</p>
                </div>
              </div>
              <p className="mb-4 text-sm text-white/40">Sisältää:</p>
              <ul className="space-y-3">
                {nettisivut.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Price summary */}
          <motion.div
            className="mt-6 overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-emerald-500/10 to-transparent p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-white/50">Yhteensä</p>
            <p className="mt-2 text-4xl font-bold text-white sm:text-5xl">
              118,90 € <span className="text-lg font-normal text-white/50">/kk</span>
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm text-emerald-400/80">
              Aloitusmaksu alk. 99 € — sisältää 6 sivua sekä tietosuoja- ja käyttöehtosivut. Laajemmat sivustot
              (esim. 12 sivua) tai räätälöidyt ominaisuudet hinnoitellaan erikseen, edullinen aloitusmaksu säilyy
              silti.
            </p>
            <Button
              size="lg"
              className="mt-8 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 px-8 text-base font-semibold text-white hover:from-emerald-500 hover:to-teal-500"
            >
              Aloita nyt
            </Button>
          </motion.div>

          {/* Add-ons */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-white">Add-onit</h2>
            <p className="mt-2 text-white/50">Kasvatatko toimintaasi Starterin puitteissa? Lisää vain tarvitsemasi.</p>

            <ul className="mt-6 divide-y divide-white/5 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02]">
              {addOns.map((addOn) => (
                <li key={addOn.label} className="flex flex-col gap-1 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-sm text-white/70">{addOn.label}</span>
                  <span className="text-sm font-semibold text-emerald-400">{addOn.price}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  )
}
