"use client"

import { useState, type FormEvent } from "react"

const WEB3FORMS_ACCESS_KEY = "a399d30b-4e5f-44e7-8591-64f8677eb68b"

type Status = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    // Honeypot — jos botti on täyttänyt piilokentän, ohitetaan lähetys hiljaisesti
    if (formData.get("botcheck")) {
      return
    }

    setStatus("submitting")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "Yhteydenotto – Yrittäjyyshelpoksi",
          from_name: "Yrittäjyyshelpoksi lomake",
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot-kenttä spam-suojaukseen */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label htmlFor="name" className="mb-2 block text-sm text-white/70">
          Nimi <span className="text-emerald-400">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors focus:border-emerald-500/50"
          placeholder="Etunimi Sukunimi"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm text-white/70">
          Sähköposti <span className="text-emerald-400">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors focus:border-emerald-500/50"
          placeholder="etunimi@yritys.fi"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm text-white/70">
          Puhelin
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors focus:border-emerald-500/50"
          placeholder="040 123 4567"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-white/70">
          Viesti <span className="text-emerald-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors focus:border-emerald-500/50"
          placeholder="Kerro lyhyesti yrityksestäsi ja tarpeistasi"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="h-12 w-full rounded-md bg-gradient-to-r from-emerald-600 to-teal-600 text-base font-semibold text-white transition-colors hover:from-emerald-500 hover:to-teal-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Lähetetään..." : "Lähetä viesti"}
      </button>

      {status === "success" && (
        <p className="text-center text-sm text-emerald-400">Kiitos! Palaamme asiaan pian.</p>
      )}
      {status === "error" && (
        <p className="text-center text-sm text-red-400">
          Lähetys epäonnistui, yritä uudelleen tai laita sähköpostia suoraan.
        </p>
      )}
    </form>
  )
}
