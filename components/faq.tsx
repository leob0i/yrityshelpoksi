"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Mitä paketti käytännössä sisältää?",
    answer:
      "Yhdellä sopimuksella saat henkilökohtaisen kirjanpitäjän, joka hoitaa lakisääteisen kirjanpidon, ALV- ja veroilmoitukset sekä tilinpäätökset, ja lisäksi räätälöidyt nettisivut, joiden ylläpito, domain, hosting ja tietoturva on hoidettu puolestasi. Tarvittaessa pakettiin voidaan liittää myös verkkokauppa ja palkanlaskenta. Sinä keskityt liiketoimintaan — me hoidamme loput.",
  },
  {
    question: "Miten pääsen alkuun ja kuinka nopeasti?",
    answer:
      "Ota yhteyttä, niin kartoitamme tilanteesi ja ehdotamme sopivan paketin — kartoitus ei sido mihinkään. Kirjanpito otetaan haltuun heti aloituspalaverin jälkeen, ja yksinkertaiset nettisivut valmistuvat tyypillisesti päivistä viikkoon alkukartoituksesta. Laajemmat kokonaisuudet, kuten verkkokaupat, aikataulutetaan erikseen.",
  },
  {
    question: "Minulla on jo tilitoimisto — onko vaihtaminen hankalaa?",
    answer:
      "Ei ole. Tilitoimiston vaihto on yleensä paljon helpompaa kuin yrittäjät luulevat, ja hoidamme siirron puolestasi. Käymme aloituspalaverissa läpi käytännön asiat, ja kirjanpitosi jatkuu katkotta uuden kirjanpitäjän kanssa.",
  },
  {
    question: "Minulla on jo nettisivut — voinko silti ottaa paketin?",
    answer:
      "Kyllä. Rakennamme tilalle uudet, nopeat ja räätälöidyt sivut, ja nykyinen domainisi (esim. yrityksesi.fi) siirretään uusille sivuille, joten osoitteesi ja löydettävyytesi säilyvät. Olemassa olevaa sisältöä ja kuvia voidaan hyödyntää pohjana.",
  },
  {
    question: "Tarvitseeko minun osata mitään teknistä?",
    answer:
      "Ei tarvitse. Kirjanpito hoituu täysin sähköisesti modernilla taloushallinto-ohjelmistolla, eikä sinun tarvitse säilyttää paperitositteita. Nettisivujen osalta riittää, että kerrot perustiedot yrityksestäsi ja hyväksyt lopputuloksen — suunnittelu, toteutus, domainit ja kaikki tekninen hoidetaan puolestasi.",
  },
  {
    question: "Mikä on tosite?",
    answer:
      "Tosite on yksi osto- tai myyntilasku tai muu kirjanpitoon kirjattava tapahtuma — käytännössä jokaisesta yrityksesi ostosta ja myynnistä syntyy yksi tosite. Kuukausittainen tositemäärä auttaa valitsemaan sinulle sopivan paketin, ja autamme arvioimaan sen aloituspalaverissa.",
  },
  {
    question: "Miten nettisivujen päivitykset hoituvat jatkossa?",
    answer:
      "Yhdellä WhatsApp-viestillä. Lähetä uusi kuva, tarjous, aukioloaika tai palvelu, ja se päivitetään sivuillesi nopeasti — myös viikonloppuisin. Pienet sisältöpäivitykset kuuluvat pakettiin, ja isommat lisäykset, kuten ajanvaraus tai chatbotti, toteutetaan erikseen sovittavalla tavalla.",
  },
  {
    question: "Löytyykö yritykseni Googlesta?",
    answer:
      "Kyllä — se on koko idea. Sivut rakennetaan teknisesti oikein alusta alkaen: hakukoneoptimointi (SEO), nopea latausaika ja mobiilioptimointi ovat mukana jokaisessa projektissa. Lisäksi sivut optimoidaan tekoälyhakuihin (GEO), jotta yrityksesi löytyy myös ChatGPT:n ja Googlen tekoälyhaun kaltaisista palveluista.",
  },
  {
    question: "Toimiiko palvelu missä päin Suomea tahansa?",
    answer:
      "Toimii. Sekä kirjanpito että nettisivupalvelut hoidetaan täysin digitaalisesti, joten asiakkaaksi voi tulla mistä päin Suomea tahansa toimialasta riippumatta. Kaikki hoituu etänä — WhatsAppilla, sähköpostilla ja sähköisillä työkaluilla, ilman paperien pyörittelyä tai paikan päällä käyntejä.",
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="ukk" className="relative bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400">
            UKK
          </span>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Usein{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              kysyttyä
            </span>
          </h2>
        </motion.div>

        {/* Questions */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-white">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-emerald-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-white/50">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
