import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

const problems = [
  {
    icon: "file-text",
    title: "Undurchsichtige Alt-Verträge",
    text: "Über Jahre gewachsen, automatisch verlängert, voller Optionen, die niemand mehr nutzt. Was Sie tatsächlich bezahlen, weiß im Haus keiner genau.",
  },
  {
    icon: "euro",
    title: "Zu hohe monatliche Kosten",
    text: "Sie zahlen Konditionen von gestern. Aktuelle Business-Tarife bieten mehr Leistung – häufig zu einem deutlich niedrigeren Preis.",
  },
  {
    icon: "headset",
    title: "Support in der Warteschleife",
    text: "Bei Störungen landen Sie in der Hotline statt bei jemandem, der Ihr Unternehmen kennt. Jede Stunde Ausfall kostet Umsatz und Nerven.",
  },
  {
    icon: "gauge",
    title: "Kupfer statt Glasfaser",
    text: "Langsame Leitungen bremsen Cloud-Anwendungen, Videocalls und Datentransfers – und damit die Produktivität Ihres gesamten Teams.",
  },
  {
    icon: "server",
    title: "Veraltete Telefonanlage",
    text: "Die alte TK-Anlage im Serverschrank ist wartungsintensiv, unflexibel und nicht für Homeoffice und mobiles Arbeiten gemacht.",
  },
  {
    icon: "layers",
    title: "Zu viele Anbieter & Rechnungen",
    text: "Mobilfunk hier, Festnetz dort, Internet woanders: unterschiedliche Laufzeiten, Ansprechpartner und Abrechnungen – ohne Gesamtüberblick.",
  },
];

export default function Problems() {
  return (
    <section id="herausforderungen" aria-labelledby="problems-heading" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="problems-heading"
          eyebrow="Die Ausgangslage"
          title="Kennen Sie diese Herausforderungen?"
          intro="In fast jedem mittelständischen Unternehmen stoßen wir auf dieselben Kostenfallen. Das Problem: Im Tagesgeschäft fehlt schlicht die Zeit, sich darum zu kümmern."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {problems.map((p, i) => (
            <li key={p.title} className="reveal" style={{ "--reveal-delay": `${(i % 3) * 90}ms` }}>
              <div className="group h-full rounded-2xl border border-navy-100 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-signal-300 hover:shadow-[0_20px_40px_-20px_rgba(11,28,55,0.25)] sm:p-7">
                <div className="flex items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-700 transition-colors duration-300 group-hover:bg-signal-500 group-hover:text-navy-950">
                    <Icon name={p.icon} className="size-6" />
                  </span>
                  <h3 className="text-lg font-bold leading-snug text-navy-900">{p.title}</h3>
                </div>
                <p className="mt-4 leading-relaxed text-navy-600">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="reveal mt-12 overflow-hidden rounded-3xl bg-navy-950 lg:mt-16">
          <div className="relative flex flex-col gap-8 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
            <div
              className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-electric-500/30 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative max-w-2xl">
              <p className="text-xl font-bold leading-snug text-white sm:text-2xl">
                Das Ergebnis: Sie zahlen jeden Monat für Leistungen, die Sie nicht nutzen – und verzichten auf Technik,
                die Ihr Team dringend bräuchte.
              </p>
              <p className="mt-3 text-navy-200">
                Die gute Nachricht: Das lässt sich ändern. Schnell, planbar und ohne Aufwand für Sie.
              </p>
            </div>
            <a
              href="#analyse"
              className="btn-signal arrow-nudge relative inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-6 py-4 font-bold"
              data-cta="problems"
            >
              Einsparpotenzial prüfen lassen
              <Icon name="arrow-right" className="size-5" strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
