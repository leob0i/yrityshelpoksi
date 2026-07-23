"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calculator, Check, Globe, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const kirjanpito = [
  "Henkilökohtainen kirjanpitäjä",
  "Lakisääteinen kirjanpito ja veroilmoitukset",
  "Tositemäärä 20–40 kpl/kk",
  "1–2 palkanlaskentaa/kk",
  "Liikevaihto 100 000–300 000 €/vuosi",
]

const nettisivut = [
  "Räätälöidyt nettisivut yrityksesi näköiseksi — ei valmispohjia, ulkoasu ja sisältö tehdään sinun brändisi mukaan",
  "Löydyt Googlesta ja tekoälyhauista — sivut rakennetaan niin, että Google, ChatGPT ja muut hakukoneet suosittelevat sinua",
  "Nopeat ja mobiilioptimoidut sivut — toimii täydellisesti puhelimella, tabletilla ja tietokoneella",
  "Domain, hosting ja tietoturva hoidettu — ei erillisiä laskuja tai palveluntarjoajia, kaikki samassa",
  "Jatkuva ylläpito ja varmuuskopiot — sivut pysyvät kunnossa ja turvassa ilman että sinun tarvitsee tehdä mitään",
  "Sivut kasvavat mukanasi — ajanvaraus, verkkokauppa tai muut lisäykset onnistuvat myöhemmin ilman uutta projektia",
  "1 sähköpostilaatikko",
  "2-kielisyys",
  "Aktiivinen perus-SEO joka päivityksen yhteydessä",
]

const addOns = [
  { label: "Tosite", price: "1,50 €/tosite" },
  { label: "Palkanlaskenta", price: "15,90 €/palkanlaskenta" },
  { label: "Tilinpäätös ja muut työt (hakemusten tekeminen ja lähettäminen jne.)", price: "80,00 €/h" },
  { label: "Muut Fennoa-kulut", price: "Laskutetaan erikseen" },
  { label: "Lisäsähköpostit, esim. info@yrityksesi.fi", price: "+5 €/kk / laatikko" },
  {
    label: "Verkkokauppa",
    price: "+29–99 €/kk",
    note: "Entä maksujen välitys? Kun asiakkaasi maksaa verkkokaupassa, rahaliikenne kulkee maksunvälittäjän kautta (esim. Stripe tai Visma Pay). He veloittavat jokaisesta myynnistä pienen palkkion — yleensä muutama prosentti + kiinteä sentti per tapahtuma, joillakin lisäksi kuukausimaksu. Tämä on alan vakiokäytäntö kaikilla verkkokaupoilla, ja maksat sen suoraan palveluntarjoajalle. Me emme ota siitä osuutta. Autamme sinut valitsemaan sopivimman vaihtoehdon ja kerromme etukäteen mitä se maksaa.",
  },
]

export function MediumPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-[#0a0a0a] pt-32 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/nettikauppa.maksu.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/70" />
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
            Medium-paketti
          </span>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Kirjanpito ja nettisivut{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              kasvavalle yritykselle
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/50">
            Kirjanpito ja verkkonäkyvyys yhdessä palvelussa. Saat enemmän näkyvyyttä, enemmän tukea ja enemmän
            aikaa liiketoiminnalle.
          </p>
        </motion.div>
      </section>

      {/* Kuvaus */}
      <section className="relative bg-[#0a0a0a] pt-16 pb-16 sm:pt-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-mono text-6xl font-bold uppercase tracking-tight text-white sm:text-7xl">Medium</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/50">
            Medium on tehty kasvavalle yritykselle, jolla on jo työntekijöitä ja palkanlaskennan tarpeita.
            Nettisivusi toimivat kaksikielisesti ja niitä kehitetään aktiivisemman hakukoneoptimoinnin (SEO) avulla,
            jotta näkyvyytesi kasvaa liiketoimintasi mukana.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="relative bg-[#0a0a0a] pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 sm:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-white">Mitä sisältää</h2>
            <p className="mt-2 text-white/50">
              Taloushallinto ja nettisivut yhtenä kokonaisuutena — ei erillisiä sopimuksia tai laskuja.
            </p>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                  <Calculator className="h-5 w-5 text-orange-400" />
                  Kirjanpito
                </h3>
                <ul className="mt-4 space-y-4">
                  {kirjanpito.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                  <Globe className="h-5 w-5 text-blue-400" />
                  Nettisivut
                </h3>
                <ul className="mt-4 space-y-4">
                  {nettisivut.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-white/5 pt-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                <MessageCircle className="h-5 w-5 text-green-400" />
                Yhteydenpito ja muutokset
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Saat yhteyden sekä henkilökohtaiseen kirjanpitäjääsi että nettisivuista vastaavaan asiantuntijaasi
                samassa WhatsApp-keskustelussa vuoden jokaisena päivänä. Voit kysyä kirjanpidosta, lähettää kuitteja
                tai pyytää nettisivuille muutoksia, kuten uusia kuvia, tarjouksia tai tekstejä. (sisältää noin 2h
                päivitystyötä, kaikki ylimenevä laskutetaan 30€/h).
              </p>
            </div>
          </motion.div>

          {/* Add-ons */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-white">Add-onit</h2>
            <p className="mt-2 text-white/50">Kasvatatko toimintaasi Mediumin puitteissa? Lisää vain tarvitsemasi.</p>

            <ul className="mt-6 divide-y divide-white/5 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02]">
              {addOns.map((addOn) => (
                <li key={addOn.label} className="p-5">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-sm text-white/70">{addOn.label}</span>
                    <span className="text-sm font-semibold text-emerald-400">{addOn.price}</span>
                  </div>
                  {addOn.note && <p className="mt-3 text-sm leading-relaxed text-white/40">{addOn.note}</p>}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Price summary */}
          <motion.div
            className="mt-16 overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-emerald-500/10 to-transparent p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-white/50">Yhteensä</p>
            <p className="mt-2 text-4xl font-bold text-white sm:text-5xl">
              199,90 € <span className="text-lg font-normal text-white/50">/kk</span>
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm text-emerald-400/80">
              Aloitusmaksu alk. 99 € — sisältää 8 sivua sekä tietosuoja- ja käyttöehtosivut. Laajemmat sivustot
              tai räätälöidyt ominaisuudet hinnoitellaan erikseen, edullinen aloitusmaksu säilyy silti.
            </p>
            <Button
              size="lg"
              className="mt-8 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 px-8 text-base font-semibold text-white hover:from-emerald-500 hover:to-teal-500"
              asChild
            >
              <a href="/yhteys">Aloita nyt</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
