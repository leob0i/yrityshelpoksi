import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MediumPage } from "@/components/medium-page"

export const metadata: Metadata = {
  title: "Medium-paketti — Yrityshelpoksi",
  description:
    "Kirjanpito ja nettisivut samassa paketissa 219,90 €/kk. Sopii kasvaville yrityksille — henkilökohtainen kirjanpitäjä, palkanlaskenta ja räätälöidyt nettisivut yhdellä sopimuksella.",
}

export default function Page() {
  return (
    <main className="bg-[#0a0a0a]">
      <Navbar />
      <MediumPage />
      <Footer showPartners={false} />
      <WhatsAppButton />
    </main>
  )
}
