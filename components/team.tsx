"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const team = [
  {
    firstName: "eero",
    lastName: "repola",
    image: "/eero.repola.png",
    alt: "Eero Repola",
    bio: "Eero on aktiivinen, osaava ja aina valmiudessa oleva asiakaslähtöinen kirjanpitäjä. Eerolta löytyy kokemus kirjanpidosta, tilinpäätöksistä ja palkanlaskennasta.",
    skills: ["Kirjanpito", "Asiakaspalvelu", "Konsultointi", "Asiakkuudet", "Toimitusjohtaja", "Verosuunnittelu"],
    primary: {
      label: "Whatsapp",
      href: "https://api.whatsapp.com/send/?phone=%2B358409327019&text&type=phone_number&app_absent=0",
      icon: MessageCircle,
    },
    email: "mailto:eero@kirjanpitopalvelutrepola.fi?subject=Hei%20Eero.",
  },
  {
    firstName: "leo",
    lastName: "apell",
    image: "/leo.apell.jpeg",
    alt: "Leo Apell",
    bio: "Leo on Leo Digital Suomen perustaja, joka rakentaa yrityksille verkkosivuja, sovelluksia ja digitaalisia palveluja täysin etänä. Entinen BMW:n ja Mercedes-Benzin merkkihuoltojen mekaanikko yhdistää autoalan huolellisuuden moderniin web-kehitykseen.",
    skills: ["Verkkosivut", "Sovelluskehitys", "SEO", "Tekninen toteutus", "Vahva tekoälyn osaaminen"],
    primary: {
      label: "Whatsapp",
      href: "https://api.whatsapp.com/send/?phone=%2B358452031377&text&type=phone_number&app_absent=0",
      icon: MessageCircle,
    },
    email: "mailto:leo@leodigital.fi",
  },
]

export function Team() {
  return (
    <section id="tiimi" className="relative bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Kokenut{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              tiimimme
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/50">
            Meidän asiakkaanamme et jää ikinä yksin edes viikonloppuisin. Tahdomme olla enemmän kuin digi- tai
            kirjanpitotoimisto. Olemme liikekumppani ja ystäväsi yrityksesi tukena.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {team.map((member, i) => (
            <motion.div
              key={member.firstName}
              className="flex flex-col items-center gap-6 rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center sm:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <h3 className="font-mono text-4xl font-bold uppercase leading-tight tracking-tight sm:text-5xl">
                <span className="text-white">{member.firstName}</span>{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  {member.lastName}
                </span>
              </h3>

              <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:h-56 sm:w-56 lg:h-64 lg:w-64">
                <Image src={member.image} alt={member.alt} fill sizes="256px" className="object-cover" />
              </div>

              <div className="w-full">
                <p className="text-sm leading-relaxed text-white/50">{member.bio}</p>

                <div className="mt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-white/40">Osaamisalue</h4>
                  <div className="mt-3 flex flex-wrap justify-center gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Button
                    asChild
                    className="h-10 gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 px-5 text-sm font-semibold text-white hover:from-emerald-500 hover:to-teal-500"
                  >
                    <a href={member.primary.href} target="_blank" rel="noopener noreferrer">
                      <member.primary.icon className="h-4 w-4" />
                      {member.primary.label}
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    asChild
                    className="h-10 gap-2 border border-white/10 px-5 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                  >
                    <a href={member.email}>
                      <Mail className="h-4 w-4" />
                      Sähköposti
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
