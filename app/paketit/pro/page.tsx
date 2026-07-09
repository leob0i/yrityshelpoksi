import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ProPage } from "@/components/pro-page"

export const metadata: Metadata = {
  title: "Pro-paketti — Yrityshelpoksi",
  description:
    "Kirjanpito ja nettisivut samassa paketissa 399,90 €/kk. Yrityksille, joilla on suurempi volyymi — henkilökohtainen kirjanpitäjä, palkanlaskenta ja räätälöidyt nettisivut yhdellä sopimuksella.",
}

export default function Page() {
  return (
    <main className="bg-[#0a0a0a]">
      <Navbar />
      <ProPage />
      <Footer showPartners={false} />
      <WhatsAppButton />
    </main>
  )
}
