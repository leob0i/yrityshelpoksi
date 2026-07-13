import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ProPage } from "@/components/pro-page"
import { SITE_URL, SITE_NAME } from "@/lib/site-config"

const title = "Pro — taloushallinto ja nettisivut suuremmalle volyymille 399,90 €/kk"
const description =
  "Kirjanpito ja nettisivut samassa paketissa 399,90 €/kk. Yrityksille, joilla on suurempi volyymi — henkilökohtainen kirjanpitäjä, palkanlaskenta ja räätälöidyt nettisivut yhdellä sopimuksella."
const path = "/paketit/pro"

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

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pro — kirjanpito ja nettisivut",
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: "FI",
  offers: {
    "@type": "Offer",
    price: "399.90",
    priceCurrency: "EUR",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      billingIncrement: 1,
      unitText: "kuukausi",
    },
  },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Etusivu", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Paketit", item: `${SITE_URL}/#hinnat` },
    { "@type": "ListItem", position: 3, name: "Pro", item: `${SITE_URL}${path}` },
  ],
}

export default function Page() {
  return (
    <main className="bg-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />
      <ProPage />
      <Footer showPartners={false} />
      <WhatsAppButton />
    </main>
  )
}
