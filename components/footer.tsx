const footerLinks = {
  Palvelut: [
    { label: "Taloushallinto", href: "#" },
    { label: "Kotisivut", href: "#" },
    { label: "Verkkokaupat", href: "#" },
    { label: "Hinnat", href: "/#hinnat" },
  ],
  Tuki: [
    { label: "Usein kysytyt", href: "/#ukk" },
    { label: "Yhteys", href: "/yhteys" },
  ],
  Lakiasiat: [
    { label: "Tietosuoja", href: "#" },
    { label: "Käyttöehdot", href: "#" },
    { label: "Turvallisuus", href: "#" },
    { label: "Evästeet", href: "#" },
  ],
}

export function Footer({ showPartners = true }: { showPartners?: boolean }) {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a]">
      {/* Partners Section */}
      {showPartners && (
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <a
                href="https://www.leodigital.fi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <img src="/leodigitallogo.avif" alt="Leo Digital" className="h-10 w-auto" />
                <h3 className="text-xl font-semibold text-white">Leo Digital</h3>
              </a>
              <p className="mt-3 text-white/50">
                Rakennamme moderneja verkkosivuja, verkkokauppoja ja digitaalisia ratkaisuja
                yrityksille. Hoidamme suunnittelun, toteutuksen, ylläpidon ja
                hakukonenäkyvyyden saman katon alta, jotta voit keskittyä liiketoimintaasi.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <a
                href="https://www.kirjanpitopalvelutrepola.fi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <img src="/repolalogo.png" alt="Kirjanpitopalvelut Repola" className="h-10 w-auto" />
                <h3 className="text-xl font-semibold text-white">Kirjanpitopalvelut Repola</h3>
              </a>
              <p className="mt-3 text-white/50">
                Moderni ja täysin digitaalinen tilitoimisto, joka hoitaa kirjanpidon,
                palkanlaskennan, tilinpäätökset, veroilmoitukset sekä taloushallinnon
                asiantuntijapalvelut yrityksille helposti ja luotettavasti.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Links */}
      <div className="mx-auto max-w-7xl px-6 pb-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center">
              <img src="/logo_horizontal_transparent.png" alt="Kirjanpito ja Digitoimisto — Apell x Repola" className="h-14 w-auto" />
            </a>
            <p className="mt-4 text-sm text-white/40">
              Taloushallinto ja kotisivut samasta.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-semibold text-white">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-white/40 transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            &copy; 2026 Apell x Repola Kaikki oikeudet pidätetään.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="X (Twitter)" className="text-white/40 transition-colors hover:text-white">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white/40 transition-colors hover:text-white">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
