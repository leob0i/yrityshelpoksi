import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SITE_URL, SITE_NAME, WHATSAPP_NUMBER } from '@/lib/site-config'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Kirjanpito ja digitoimisto — taloushallinto ja nettisivut samasta paketista',
    template: '%s | Apell x Repola',
  },
  description: 'Kirjanpito ja tilitoimisto hoitavat taloushallintosi, ja rakennamme nopeat nettisivut yritykselle Googlesta löytyväksi — samassa paketissa.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo_horizontal_transparent.png`,
  description:
    'Kirjanpito, taloushallinto ja nettisivut yhdellä sopimuksella suomalaisille yrityksille. Palvelu toimii koko Suomessa etänä.',
  areaServed: 'FI',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: `+${WHATSAPP_NUMBER}`,
    contactType: 'customer service',
    areaServed: 'FI',
    availableLanguage: ['fi', 'en'],
  },
  parentOrganization: {
    '@type': 'Organization',
    name: 'Kirjanpitopalvelut Repola',
    url: 'https://www.kirjanpitopalvelutrepola.fi',
  },
  sameAs: ['https://www.leodigital.fi', 'https://www.kirjanpitopalvelutrepola.fi'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fi" className="bg-[#0a0a0a]">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
