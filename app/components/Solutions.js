import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

// "need" verknüpft die Karte mit der Vorauswahl im Analyse-Formular.
const services = [
  {
    icon: "smartphone",
    need: "mobilfunk",
    tag: "Ø 30 % Ersparnis",
    title: "Tarifoptimierung & Business-Mobilfunk",
    text: "Wir analysieren Ihre bestehenden Verträge, vergleichen alle großen Netzbetreiber und sichern Ihnen Business-Konditionen, die zu Ihrer tatsächlichen Nutzung passen.",
    features: [
      "Anbieterunabhängiger Tarifvergleich",
      "Zentrale SIM- & Geräteverwaltung",
      "Eine transparente Sammelrechnung",
    ],
  },
  {
    icon: "cloud",
    need: "festnetz",
    tag: "Flexibel & ortsunabhängig",
    title: "Cloud-Telefonie",
    text: "Ersetzen Sie Ihre alte TK-Anlage durch eine moderne Cloud-Telefonanlage: telefonieren per Tischtelefon, Laptop oder Smartphone – im Büro, im Homeoffice und unterwegs.",
    features: [
      "Ihre Rufnummern bleiben erhalten",
      "Integration in Microsoft Teams & CRM",
      "Keine Hardware-Wartung mehr",
    ],
  },
  {
    icon: "network",
    need: "internet",
    tag: "Zukunftssicher",
    title: "Glasfaser & Business-Internet",
    text: "Wir prüfen die Glasfaser-Verfügbarkeit an Ihren Standorten, planen den Anschluss und begleiten den Ausbau – auf Wunsch mit Backup-Leitung für maximale Ausfallsicherheit.",
    features: [
      "Symmetrische Bandbreiten im Gigabit-Bereich",
      "Garantierte Entstörzeiten (SLA)",
      "Sichere Standortvernetzung",
    ],
  },
  {
    icon: "users",
    need: "alles",
    tag: "Alles aus einer Hand",
    title: "Ganzheitliche B2B-Betreuung",
    text: "Ein fester Ansprechpartner für alle Anbieter und Verträge: Wir behalten Laufzeiten im Blick, prüfen regelmäßig neue Konditionen und sind da, wenn es darauf ankommt.",
    features: [
      "Persönlicher Ansprechpartner statt Hotline",
      "Laufzeiten- & Vertragsmanagement",
      "IT-Infrastruktur & Cloud-Services",
    ],
  },
];

export default function Solutions() {
  return (
    <section id="leistungen" aria-labelledby="solutions-heading" className="bg-navy-50 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="solutions-heading"
          eyebrow="Unsere Leistungen"
          title="Ihre gesamte Telekommunikation – optimiert aus einer Hand."
          intro="Wir betrachten Ihre Kommunikationsinfrastruktur ganzheitlich: vom einzelnen Mobilfunkvertrag bis zur Vernetzung all Ihrer Standorte. Sie erhalten eine klare Empfehlung – und wir kümmern uns um die Umsetzung."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8">
          {services.map((s, i) => (
            <div key={s.title} className="reveal" style={{ "--reveal-delay": `${(i % 2) * 100}ms` }}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-7 ring-1 ring-navy-100 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(11,28,55,0.35)] hover:ring-electric-300 sm:p-9">
                <span
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-electric-500 to-signal-500 transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-14 place-items-center rounded-2xl bg-electric-500/10 text-electric-600 transition duration-300 group-hover:bg-electric-500 group-hover:text-white">
                    <Icon name={s.icon} className="size-7" strokeWidth={1.75} />
                  </span>
                  <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-bold text-navy-700 ring-1 ring-navy-100">
                    {s.tag}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-navy-900 sm:text-2xl">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-navy-600">{s.text}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-navy-800">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-emerald-500/15 text-emerald-600">
                        <Icon name="check" className="size-3.5" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#analyse"
                  data-need={s.need}
                  data-cta={`service-${s.need}`}
                  className="arrow-nudge mt-8 inline-flex items-center gap-2 self-start font-bold text-electric-600 transition-colors hover:text-electric-500"
                >
                  Kostenlos prüfen lassen
                  <span className="sr-only">: {s.title}</span>
                  <Icon name="arrow-right" className="size-4" strokeWidth={2.5} />
                </a>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
