"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    quote: "Vihdoin kirjanpito ja nettisivut samasta paikasta. Säästän aikaa ja hermoja, kun kaikki hoituu yhdellä sopimuksella.",
    author: "Anna Korhonen",
    role: "Yrittäjä",
    company: "Kukkakauppa Floora",
    avatar: "https://i.pravatar.cc/80?img=1",
  },
  {
    quote: "Sivut löytyvät nyt Googlesta ja asiakkaat ottavat yhteyttä. Muutokset hoituvat WhatsAppilla minuuteissa.",
    author: "Mikko Virtanen",
    role: "Toimitusjohtaja",
    company: "Remontti Virtanen Oy",
    avatar: "https://i.pravatar.cc/80?img=3",
  },
  {
    quote: "Oma kirjanpitäjä tuntee yritykseni ja veroilmoitukset hoituvat ajallaan. Voin keskittyä olennaiseen.",
    author: "Laura Mäkinen",
    role: "Perustaja",
    company: "Studio Lumo",
    avatar: "https://i.pravatar.cc/80?img=5",
  },
]

export function Testimonials() {
  return (
    <section id="asiakkaat" className="relative bg-[#0a0a0a] py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400">
            Asiakkaat
          </span>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Yrittäjien{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              suosima
            </span>
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {/* Quote icon */}
              <svg className="absolute -right-2 -top-2 h-24 w-24 text-emerald-500/5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="relative mb-6 text-lg leading-relaxed text-white/70">
                &quot;{testimonial.quote}&quot;
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="font-medium text-white">{testimonial.author}</p>
                  <p className="text-sm text-white/40">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
