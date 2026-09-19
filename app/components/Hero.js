import Image from "next/image";

const trustLogos = [
  "Deutsche Telekom",
  "Vodafone Business",
  "Cisco",
  "Microsoft",
  "SAP",
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0f2644] hero-grid"
      aria-labelledby="hero-heading"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f2644] via-[#0f2644]/95 to-[#1a3a5c]/80 pointer-events-none" aria-hidden="true" />

      {/* Decorative glow blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/8 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text Content */}
          <div>
            {/* Badge */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 bg-blue-600/15 border border-blue-500/25 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" aria-hidden="true" />
              <span className="text-blue-300 text-sm font-semibold tracking-wide">
                Zertifizierter Partner · Telekom · Vodafone · O2
              </span>
            </div>

            {/* H1 */}
            <h1
              id="hero-heading"
              className="animate-fade-in-up delay-100 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              Ihr Partner für moderne{" "}
              <span className="gradient-text">Unternehmenslösungen</span>{" "}
              in IT &amp; Telekommunikation
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-in-up delay-200 text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              Zu hohe Mobilfunkkosten, veraltete IT-Infrastruktur, zu viele Anbieter?{" "}
              <strong className="text-white font-semibold">
                Wir lösen das.
              </strong>{" "}
              Maßgeschneiderte IT- und Telekommunikationslösungen für
              mittelständische Unternehmen — professionell, zuverlässig,
              zukunftsorientiert.
            </p>

            {/* CTAs */}
            <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#kontakt"
                id="hero-cta-primary"
                className="btn-cta text-white font-bold text-base px-8 py-4 rounded-xl text-center inline-flex items-center justify-center gap-2"
              >
                Jetzt unverbindlich anfragen
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href="#leistungen"
                id="hero-cta-secondary"
                className="border-2 border-white/25 hover:border-blue-400 text-white font-semibold text-base px-8 py-4 rounded-xl text-center transition-all duration-200 hover:bg-white/5"
              >
                Unsere Leistungen
              </a>
            </div>

            {/* Trust Logos */}
            <div className="animate-fade-in-up delay-400">
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-3">
                Vertrauen von führenden Unternehmen
              </p>
              <div className="flex flex-wrap gap-3" role="list" aria-label="Partnerunternehmen">
                {trustLogos.map((logo) => (
                  <div
                    key={logo}
                    role="listitem"
                    className="px-4 py-2 bg-white/6 border border-white/10 rounded-lg"
                  >
                    <span className="text-slate-300 text-sm font-semibold">{logo}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Dashboard Image */}
          <div className="animate-fade-in-up delay-300 relative">
            <div className="animate-float relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/40 border border-white/10">
              <Image
                src="/hero-dashboard.jpg"
                alt="EnterCon IT- und Telekommunikations-Dashboard mit Netzwerk-Metriken und Kostenübersicht"
                width={700}
                height={440}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto"
                quality={90}
              />
              {/* Glowing overlay accent */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent pointer-events-none" aria-hidden="true" />
            </div>

            {/* Floating KPI badges */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-slate-100 flex items-center gap-3" aria-label="Kosteneinsparung">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800">Ø 32% Ersparnis</div>
                <div className="text-xs text-slate-500">gegenüber Vorvertrag</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-[#0f2644] rounded-xl px-4 py-3 shadow-xl border border-blue-500/25 flex items-center gap-3" aria-label="Netzwerk-Uptime">
              <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-white">99,9% Uptime</div>
                <div className="text-xs text-blue-300">SLA-garantiert</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 lg:h-16">
          <path d="M0 60H1440V30C1200 60 960 10 720 30C480 50 240 0 0 30V60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
