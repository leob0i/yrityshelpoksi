import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ContactPage } from "@/components/contact-page"
import { SITE_URL, SITE_NAME } from "@/lib/site-config"

const title = "Ota yhteyttä"
const description = "Lähetä meille viesti yhteydenottolomakkeella, WhatsAppilla tai sähköpostilla."
const path = "/yhteys"

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${SITE_URL}${path}`,
  },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}${path}`,
    siteName: SITE_NAME,
    locale: "fi_FI",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
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
