import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    icon: "send",
    title: "Analyse anfragen",
    text: "Drei kurze Fragen beantworten – das dauert weniger als 2 Minuten.",
  },
  {
    icon: "search",
    title: "Kostenlose Erstanalyse",
    text: "Wir prüfen Ihre Verträge und Rechnungen und zeigen Ihnen schwarz auf weiß, wo Sie sparen.",
  },
  {
    icon: "clipboard-check",
    title: "Ihr Optimierungskonzept",
    text: "Sie erhalten eine klare Empfehlung mit transparentem Kostenvergleich – ohne Verpflichtung.",
  },
  {
    icon: "wrench",
    title: "Umsetzung & Betreuung",
    text: "Wir übernehmen Kündigung, Rufnummern-Portierung und Umstellung – und bleiben Ihr Ansprechpartner.",
  },
];

export default function Process() {
  return (
    <section id="ablauf" aria-labelledby="process-heading" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="process-heading"
          eyebrow="So einfach geht's"
          title="In 4 Schritten zu einer schlankeren Telekommunikation"
          intro="Sie investieren wenige Minuten – den Rest übernehmen wir. Transparent, planbar und ohne Unterbrechung Ihres Geschäftsbetriebs."
        />

        <div className="relative mt-14 lg:mt-20">
          <span
            className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-gradient-to-r from-electric-300 via-navy-200 to-signal-300 lg:block"
            aria-hidden="true"
          />
          <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((s, i) => (
              <li key={s.title} className="reveal" style={{ "--reveal-delay": `${i * 110}ms` }}>
                <div className="group relative flex gap-5 lg:flex-col lg:items-center lg:text-center">
                  <span className="relative grid size-16 shrink-0 place-items-center rounded-2xl bg-white text-navy-800 shadow-[0_10px_30px_-12px_rgba(11,28,55,0.35)] ring-1 ring-navy-100 transition duration-300 group-hover:-translate-y-1 group-hover:bg-navy-900 group-hover:text-white">
                    <Icon name={s.icon} className="size-7" strokeWidth={1.75} />
                    <span className="absolute -right-2 -top-2 grid size-6 place-items-center rounded-full bg-signal-500 text-xs font-extrabold text-navy-950">
                      {i + 1}
                    </span>
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 lg:mt-6">{s.title}</h3>
                    <p className="mt-2 leading-relaxed text-navy-600">{s.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="reveal mt-14 flex flex-col items-center gap-3 text-center lg:mt-16">
          <a
            href="#analyse"
            className="btn-signal arrow-nudge inline-flex items-center gap-2 rounded-xl px-7 py-4 text-base font-bold"
            data-cta="process"
          >
            Jetzt mit Schritt 1 starten
            <Icon name="arrow-right" className="size-5" strokeWidth={2.5} />
          </a>
          <p className="flex items-center gap-1.5 text-sm text-navy-500">
            <Icon name="clock" className="size-4" /> Dauert weniger als 2 Minuten
          </p>
        </div>
      </div>
    </section>
  );
}
