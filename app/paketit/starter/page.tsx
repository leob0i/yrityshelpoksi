import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { StarterPage } from "@/components/starter-page"

export const metadata: Metadata = {
  title: "Starter-paketti — Yrityshelpoksi",
  description:
    "Kirjanpito ja nettisivut samassa paketissa 118,90 €/kk. Henkilökohtainen kirjanpitäjä ja räätälöidyt nettisivut yhdellä sopimuksella.",
}

export default function Page() {
  return (
    <main className="bg-[#0a0a0a]">
      <Navbar />
      <StarterPage />
      <Footer showPartners={false} />
      <WhatsAppButton />
    </main>
  )
}
