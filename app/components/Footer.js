export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#050e20] text-slate-400" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M10 2L18 6.5V13.5L10 18L2 13.5V6.5L10 2Z" stroke="white" strokeWidth="1.5" fill="none"/>
                  <circle cx="10" cy="10" r="2.5" fill="white"/>
                </svg>
              </div>
              <div>
                <span className="text-white font-bold text-lg">EnterCon</span>
                <span className="block text-xs text-slate-500">MC Enterprise Consulting</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-5">
              Ihr Partner für moderne IT- und Telekommunikationslösungen. Maßgeschneidert, professionell und zukunftsorientiert.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Musterstraße 1, 80331 München</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:info@entercon.de" className="hover:text-blue-400 transition-colors">info@entercon.de</a>
              </div>
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12 19.79 19.79 0 0 1 1.04 3.38A2 2 0 0 1 3 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href="tel:+4989123456" className="hover:text-blue-400 transition-colors">+49 (0) 89 – 123 456</a>
              </div>
            </div>
          </div>

          {/* Leistungen */}
          <nav aria-label="Leistungen">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Leistungen</h3>
            <ul className="space-y-2.5 text-sm">
              {["Business-Mobilfunk", "IT-Infrastruktur", "Cloud-Lösungen", "Festnetz & VoIP", "Managed Services"].map((l) => (
                <li key={l}>
                  <a href="#leistungen" className="hover:text-blue-400 transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Unternehmen */}
          <nav aria-label="Unternehmen">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Unternehmen</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Über uns", href: "#ueber-uns" },
                { label: "Referenzen", href: "#referenzen" },
                { label: "Kontakt", href: "#kontakt" },
                { label: "Impressum", href: "/impressum" },
                { label: "Datenschutz", href: "/datenschutz" },
                { label: "AGB", href: "/agb" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-blue-400 transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {year} MC Enterprise Consulting GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex gap-5">
            <a href="/impressum" className="hover:text-blue-400 transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-blue-400 transition-colors">Datenschutz</a>
            <a href="/agb" className="hover:text-blue-400 transition-colors">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
