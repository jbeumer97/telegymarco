const usps = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07" />
      </svg>
    ),
    title: "Ganzheitliche IT- und Telekommunikationsberatung",
    text: "Von der Analyse über die Konzeption bis zur Umsetzung — wir begleiten Sie durch den gesamten Prozess mit einem Team aus zertifizierten Experten.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Individuelle Lösungen für jede Unternehmensgröße",
    text: "Ob 5 oder 5.000 Mitarbeiter: Wir entwickeln maßgeschneiderte Lösungen, die exakt zu Ihrem Budget, Ihrer Branche und Ihren Wachstumszielen passen.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12 19.79 19.79 0 0 1 1.04 3.38A2 2 0 0 1 3 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: "Persönlicher Ansprechpartner für Ihr Unternehmen",
    text: "Kein Callcenter, kein Ticketsystem. Sie haben immer einen dedizierten Berater an Ihrer Seite, der Ihr Unternehmen kennt und schnell reagiert.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Langfristige Partnerschaft auf Augenhöhe",
    text: "Wir denken in Partnerschaften, nicht in Transaktionen. Unser Erfolg misst sich am nachhaltigen Mehrwert, den wir für Ihr Unternehmen schaffen.",
  },
];

export default function ValueProp() {
  return (
    <section
      id="ueber-uns"
      className="bg-slate-50 py-20 lg:py-28"
      aria-labelledby="usp-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="reveal text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">
            Warum EnterCon?
          </p>
          <h2
            id="usp-heading"
            className="reveal delay-1 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f2644] leading-tight mb-4"
          >
            Wir verbinden Unternehmen mit den{" "}
            <span className="gradient-text">richtigen Lösungen</span>
          </h2>
          <p className="reveal delay-2 text-lg text-slate-600">
            Nicht der günstigste Anbieter — der beste Partner. Das ist unser
            Versprechen an Sie.
          </p>
        </div>

        {/* USP Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((usp, i) => (
            <div
              key={usp.title}
              className={`reveal delay-${i + 1} card-hover bg-white rounded-2xl p-6 border border-slate-100 shadow-sm`}
            >
              <div className="service-icon mb-5">
                <span className="text-blue-600">{usp.icon}</span>
              </div>
              <h3 className="font-bold text-[#0f2644] text-base leading-snug mb-3">
                {usp.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{usp.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
