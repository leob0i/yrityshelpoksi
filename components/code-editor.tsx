"use client"

import { motion } from "framer-motion"
import { TrendingUp, Wallet, FileText, Globe } from "lucide-react"

const bars = [40, 65, 45, 80, 55, 70, 60, 85, 72]

export function CodeEditor() {
  return (
    <div className="relative w-full max-w-lg">
      {/* Glow effect behind card */}
      <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 blur-2xl" />

      {/* Dashboard card */}
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0f0f0f] shadow-2xl">
        {/* Window controls */}
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-3 text-xs text-white/30">taloushallinto</span>
          <div className="ml-auto flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="text-xs text-emerald-400">Ajan tasalla</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Stats row */}
          <div className="mb-4 grid grid-cols-3 gap-3">
            {[
              { icon: Wallet, label: "Liikevaihto", value: "8 240 €" },
              { icon: FileText, label: "Tositteet", value: "18 / 20" },
              { icon: TrendingUp, label: "Tulos", value: "+12 %" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-lg border border-white/5 bg-white/[0.03] p-3">
                <stat.icon className="mb-2 h-4 w-4 text-emerald-400" />
                <p className="text-[11px] text-white/40">{stat.label}</p>
                <p className="text-sm font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="rounded-lg border border-white/5 bg-white/[0.03] p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs text-white/50">Kuukausittainen kassavirta</p>
              <span className="text-xs text-emerald-400">2026</span>
            </div>
            <div className="flex h-24 items-end gap-1.5">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-emerald-500/40 to-teal-400/70"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                />
              ))}
            </div>
          </div>

          {/* Website row */}
          <div className="mt-4 flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.03] p-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500">
              <Globe className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">Nettisivut julkaistu</p>
              <p className="text-[11px] text-white/40">yrityksesi.fi · löytyy Googlesta</p>
            </div>
            <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[11px] text-emerald-400">Online</span>
          </div>
        </div>
      </div>
    </div>
  )
}
