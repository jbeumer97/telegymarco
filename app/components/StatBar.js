const stats = [
  {
    value: "10+",
    label: "Jahre Erfahrung",
    sub: "in IT & Telekommunikation",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    value: "200+",
    label: "Projekte umgesetzt",
    sub: "deutschlandweit",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    value: "99%",
    label: "Kundenzufriedenheit",
    sub: "laut Kundenbefragung 2024",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export default function StatBar() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-label="Unsere Kennzahlen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal delay-${i + 1} flex flex-col items-center text-center gap-3 p-8 rounded-2xl bg-slate-50 border border-slate-100`}
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-200">
                {stat.icon}
              </div>
              <div>
                <div className="stat-number text-5xl font-extrabold text-[#0f2644] leading-none mb-1">
                  {stat.value}
                </div>
                <div className="text-lg font-bold text-slate-700">{stat.label}</div>
                <div className="text-sm text-slate-500 mt-1">{stat.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
