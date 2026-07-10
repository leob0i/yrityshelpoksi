import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ContactPage } from "@/components/contact-page"

export const metadata: Metadata = {
  title: "Ota yhteyttä — Yrityshelpoksi",
  description: "Lähetä meille viesti yhteydenottolomakkeella, WhatsAppilla tai sähköpostilla.",
}

export default function Page() {
  return (
    <main className="bg-[#0a0a0a]">
      <Navbar />
      <ContactPage />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
