import Icon from "./Icon";
import CountUp from "./CountUp";
import SectionHeading from "./SectionHeading";

// TODO: PLATZHALTER – vor dem Livegang durch echte, freigegebene Referenzen ersetzen.
// Erfundene Kundenstimmen sind wettbewerbswidrig (UWG). Fotos unter /public/referenzen/ ablegen.
const cases = [
  {
    industry: "Logistik",
    size: "120 Mitarbeitende · 3 Standorte",
    kpi: { value: 32, prefix: "−", suffix: " %" },
    kpiLabel: "Telekommunikationskosten",
    highlight: "18.400 € Ersparnis pro Jahr",
    quote:
      "EnterCon hat unsere komplette Mobilfunkflotte konsolidiert und dabei fast ein Drittel der Kosten eingespart. Die Umstellung lief im laufenden Betrieb – ohne eine Minute Ausfall.",
    author: "Geschäftsführer",
    company: "Logistikunternehmen, NRW",
    initials: "GF",
  },
  {
    industry: "Steuerberatung",
    size: "35 Mitarbeitende",
    kpi: { value: 6, suffix: " Wochen" },
    kpiLabel: "von der ISDN-Anlage zur Cloud-Telefonie",
    highlight: "−41 % Festnetzkosten",
    quote:
      "Unsere alte Telefonanlage war ein Dauerproblem. Heute telefonieren wir aus dem Homeoffice genauso wie aus der Kanzlei – und zahlen weniger als vorher.",
    author: "Kanzleipartnerin",
    company: "Steuerberatungsgesellschaft",
    initials: "KP",
  },
  {
    industry: "Maschinenbau",
    size: "250 Mitarbeitende",
    kpi: { value: 10, suffix: "×" },
    kpiLabel: "mehr Bandbreite durch Glasfaser",
    highlight: "−24 % Gesamtkosten",
    quote:
      "Was mich überzeugt hat: kein Verkaufsgespräch, sondern echte Beratung. Die Erstanalyse hat uns Einsparungen gezeigt, von denen wir nichts wussten.",
    author: "Kaufmännischer Leiter",
    company: "Maschinenbau, Baden-Württemberg",
    initials: "KL",
  },
];

export default function CaseStudies() {
  return (
    <section id="referenzen" aria-labelledby="cases-heading" className="bg-navy-50 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="cases-heading"
          eyebrow="Ergebnisse"
          title="Messbare Ergebnisse für den Mittelstand"
          intro="Zahlen statt Versprechen: So haben Unternehmen wie Ihres ihre Telekommunikation mit uns optimiert."
        />

        <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {cases.map((c, i) => (
            <div key={c.industry} className="reveal" style={{ "--reveal-delay": `${i * 110}ms` }}>
              <figure className="group flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-navy-100 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(11,28,55,0.35)] sm:p-8">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                  <span className="rounded-full bg-navy-900 px-3 py-1 text-white">{c.industry}</span>
                  <span className="text-navy-500">{c.size}</span>
                </div>

                <div className="mt-6 border-b border-navy-100 pb-6">
                  <p className="text-5xl font-extrabold tracking-tight text-navy-900">
                    <CountUp value={c.kpi.value} prefix={c.kpi.prefix} suffix={c.kpi.suffix} />
                  </p>
                  <p className="mt-1 font-semibold text-navy-700">{c.kpiLabel}</p>
                  <p className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2.5 py-1 text-sm font-bold text-emerald-700">
                    <Icon name="trending-down" className="size-4" />
                    {c.highlight}
                  </p>
                </div>

                <blockquote className="mt-6 flex-1">
                  <Icon name="quote" className="size-6 text-electric-300" strokeWidth={1.5} />
                  <p className="mt-3 leading-relaxed text-navy-700">„{c.quote}“</p>
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3">
                  {/* Platzhalter-Avatar: durch Foto (next/image) ersetzen */}
                  <span
                    className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-electric-500 to-navy-800 text-sm font-bold text-white"
                    aria-hidden="true"
                  >
                    {c.initials}
                  </span>
                  <span>
                    <span className="block font-bold text-navy-900">{c.author}</span>
                    <span className="text-sm text-navy-500">{c.company}</span>
                  </span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <p className="text-lg font-semibold text-navy-800">Wie viel steckt in Ihren Verträgen?</p>
          <a
            href="#analyse"
            className="arrow-nudge inline-flex items-center gap-2 font-bold text-electric-600 hover:text-electric-500"
            data-cta="cases"
          >
            Jetzt kostenlos herausfinden
            <Icon name="arrow-right" className="size-4" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
