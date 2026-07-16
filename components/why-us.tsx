"use client"

import { motion } from "framer-motion"
import { Gift, Wrench, MapPin } from "lucide-react"

const highlights = [
  {
    icon: Gift,
    title: "Ilmainen konsultointi",
    description:
      "Konsultointi on asiakkaillemme aina ilmaista – niin talousasioissa kuin digipalveluissakin. Kyseessä on todellinen rahanarvoinen etu, joka on alallamme harvinainen.",
  },
  {
    icon: Wrench,
    title: "Parhaat työkalut käytössäsi",
    description:
      "Asiakkaamme saavat käyttöönsä nykyaikaisen Fennoa-taloudenhallintaohjelmiston edulliseen hintaan. Nettisivut ja verkkokaupat rakennamme moderneilla teknologioilla, jotka ovat nopeita, turvallisia ja hakukoneystävällisiä.",
  },
  {
    icon: MapPin,
    title: "Sijainnista riippumaton",
    description:
      "Asiakkaaksemme voit tulla mistä päin Suomea tahansa. Toimimme täysin digitaalisesti – sinun ei tarvitse säilyttää paperitositteita eikä käydä toimistolla.",
  },
]

export function WhyUs() {
  return (
    <section className="relative bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Kaksi osaajaa,{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                yksi kumppani
              </span>{" "}
              yrityksellesi
            </h2>
            <div className="mt-6 space-y-4 text-white/50">
              <p>
                Kirjanpito ja Digitoimisto Apell x Repola yhdistää kaksi asiaa, jotka jokainen yritys tarvitsee:
                ammattitaitoisen taloushallinnon ja toimivan digitaalisen näkyvyyden.
              </p>
              <p>
                Olemme kilpailukentästä erottuva, täysin digitaalisella toimintamallilla toimiva kirjanpito- ja
                digitoimisto. Meiltä saat saman katon alta kirjanpidon, tilinpäätökset ja palkanlaskennan – sekä
                nettisivut, verkkokaupat ja niiden jatkuvan ylläpidon.
              </p>
              <p>
                Haluamme olla asiakkaidemme pitkäaikainen kumppani niin liiketoiminnan kehittämisessä,
                taloushallinnossa kuin digitaalisessa kasvussakin.
              </p>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="space-y-8">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                    <item.icon className="h-5 w-5 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/50">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
