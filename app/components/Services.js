const services = [
  {
    color: "from-blue-600 to-blue-700",
    bgLight: "bg-blue-50",
    borderColor: "border-blue-100",
    iconBg: "bg-blue-600",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: "Business-Mobilfunk",
    tag: "Beliebteste Lösung",
    description:
      "Unternehmensverträge für Mobilfunk mit zentraler SIM-Verwaltung, Flat-Rates und dediziertem Business-Support. Weniger Kosten, mehr Kontrolle.",
    features: [
      "Alle Netze: Telekom, Vodafone, O2",
      "Zentrale Geräteverwaltung (MDM)",
      "Transparente Kostenabrechnung",
      "Internationale Datenpakete",
    ],
  },
  {
    color: "from-[#0f2644] to-[#1a3a5c]",
    bgLight: "bg-slate-50",
    borderColor: "border-slate-100",
    iconBg: "bg-[#0f2644]",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "IT-Infrastruktur & Cloud",
    tag: "Zukunftssicher",
    description:
      "Von der lokalen Serverstruktur bis zur vollständigen Cloud-Migration: Wir planen, migrieren und betreiben Ihre IT-Infrastruktur — sicher und skalierbar.",
    features: [
      "Cloud-Migration & -Betrieb",
      "Security & Firewall-Konzepte",
      "Microsoft 365 & Azure Setup",
      "Backup & Disaster Recovery",
    ],
  },
  {
    color: "from-orange-500 to-orange-600",
    bgLight: "bg-orange-50",
    borderColor: "border-orange-100",
    iconBg: "bg-orange-500",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12 19.79 19.79 0 0 1 1.04 3.38A2 2 0 0 1 3 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: "Festnetz & Telekommunikation",
    tag: "Komplett aus einer Hand",
    description:
      "Moderne Telefonanlagen, VoIP-Systeme und Glasfaseranschlüsse für Ihr Unternehmen. Wir ersetzen veraltete ISDN-Lösungen durch leistungsstarke IP-Telefonie.",
    features: [
      "VoIP & IP-Telefonanlagen",
      "Glasfaser-Direktanschlüsse",
      "Video-Konferenz-Systeme",
      "ISDN-Migration & SIP-Trunk",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="leistungen"
      className="bg-white py-20 lg:py-28"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="reveal text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">
            Unsere Leistungen
          </p>
          <h2
            id="services-heading"
            className="reveal delay-1 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f2644] leading-tight mb-4"
          >
            Lösungen für{" "}
            <span className="gradient-text">Ihr Unternehmen</span>
          </h2>
          <p className="reveal delay-2 text-lg text-slate-600">
            Alle Leistungen aus einer Hand — ohne Schnittstellenprobleme,
            ohne versteckte Kosten.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`reveal delay-${i + 1} card-hover ${s.bgLight} rounded-2xl border ${s.borderColor} overflow-hidden flex flex-col`}
            >
              {/* Card top bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${s.color}`} aria-hidden="true" />

              <div className="p-7 flex flex-col flex-1 gap-5">
                {/* Icon + Tag */}
                <div className="flex items-start justify-between gap-4">
                  <div className={`w-12 h-12 rounded-xl ${s.iconBg} flex items-center justify-center flex-shrink-0 shadow-md`}>
                    {s.icon}
                  </div>
                  <span className="text-xs font-bold bg-white border border-current text-blue-600 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {s.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0f2644] mb-2">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.description}</p>
                </div>

                {/* Features list */}
                <ul className="space-y-2 flex-1">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#kontakt"
                  className="mt-2 text-blue-600 font-semibold text-sm flex items-center gap-1.5 hover:gap-3 transition-all duration-200 group"
                  aria-label={`Mehr erfahren zu ${s.title} – Kontakt aufnehmen`}
                >
                  Mehr erfahren & anfragen
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
