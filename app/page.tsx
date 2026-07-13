import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Pricing } from "@/components/pricing"
import { Faq } from "@/components/faq"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { faqs } from "@/lib/faq-data"
import { SITE_URL, SITE_NAME } from "@/lib/site-config"

const title = "Kirjanpito ja digitoimisto — taloushallinto ja nettisivut samasta paketista"
const description =
  "Kirjanpito ja tilitoimisto hoitavat taloushallintosi, ja rakennamme nopeat nettisivut yritykselle Googlesta löytyväksi — samassa paketissa."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function Page() {
  return (
    <main className="bg-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Faq />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
