const testimonials = [
  {
    name: "Stefan Bergmann",
    role: "IT-Leiter, Bergmann Logistik GmbH",
    initials: "SB",
    color: "bg-blue-600",
    text: "EnterCon hat unsere gesamte Mobilfunkflotte konsolidiert und dabei 35% der Kosten eingespart. Die Umstellung lief reibungslos, der Support ist top.",
    stars: 5,
  },
  {
    name: "Dr. Karin Hoffmann",
    role: "Geschäftsführerin, Hoffmann & Partner Rechtsanwälte",
    initials: "KH",
    color: "bg-orange-500",
    text: "Endlich ein Anbieter, der die Komplexität versteht und einfache Lösungen liefert. Unsere neue VoIP-Anlage ist eine Revolution für unseren Kanzleibetrieb.",
    stars: 5,
  },
  {
    name: "Markus Reiter",
    role: "COO, Reiter Industrietechnik AG",
    initials: "MR",
    color: "bg-[#0f2644]",
    text: "Was mich überzeugt hat: kein Verkaufsgespräch, sondern echte Beratung. Die Potenzialanalyse hat uns die Augen geöffnet. Klare Empfehlung!",
    stars: 5,
  },
];

export default function References() {
  return (
    <section
      id="referenzen"
      className="bg-slate-50 py-20 lg:py-28"
      aria-labelledby="references-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="reveal text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">
            Referenzen
          </p>
          <h2
            id="references-heading"
            className="reveal delay-1 text-3xl sm:text-4xl font-extrabold text-[#0f2644] leading-tight"
          >
            Was unsere Kunden sagen
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <blockquote
              key={t.name}
              className={`reveal delay-${i + 1} card-hover bg-white rounded-2xl p-7 border border-slate-100 shadow-sm flex flex-col gap-5`}
            >
              {/* Stars */}
              <div className="flex gap-1" aria-label={`${t.stars} von 5 Sternen`}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <svg key={j} width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-600 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Attribution */}
              <footer className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`} aria-hidden="true">
                  {t.initials}
                </div>
                <div>
                  <cite className="not-italic font-bold text-[#0f2644] text-sm">{t.name}</cite>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
