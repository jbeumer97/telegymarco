import Icon from "./Icon";
import LeadForm from "./LeadForm";
import SectionHeading from "./SectionHeading";
import { site } from "../lib/site";

const deliverables = [
  "Vollständige Übersicht über alle Verträge, Kosten & Laufzeiten",
  "Ihr konkretes Einsparpotenzial – in Euro, nicht in Prozent-Floskeln",
  "Klare Empfehlung zu Glasfaser, Cloud-Telefonie & Mobilfunk",
  "Persönliches Auswertungsgespräch mit Ihrem Ansprechpartner",
];

export default function LeadSection() {
  const { contactPerson } = site;
  return (
    <section
      id="analyse"
      aria-labelledby="lead-heading"
      className="relative overflow-hidden bg-navy-950 py-20 sm:py-24 lg:py-32"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-40 top-1/4 size-[32rem] rounded-full bg-electric-500/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 size-80 rounded-full bg-signal-500/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-x-16 lg:gap-y-10 lg:px-8">
        <div className="lg:col-start-1 lg:row-start-1">
          <SectionHeading
            id="lead-heading"
            align="left"
            tone="dark"
            eyebrow="Kostenlose Erstanalyse"
            title="Finden Sie heraus, wie viel Sie sparen können."
            intro="Beantworten Sie drei kurze Fragen – wir melden uns innerhalb von 24 Stunden mit einer ersten Einschätzung. Kostenlos, unverbindlich und ohne Verkaufsdruck."
          />
        </div>

        <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <div
            className="reveal rounded-3xl bg-white p-6 shadow-2xl shadow-black/40 sm:p-8 lg:p-10"
            style={{ "--reveal-delay": "120ms" }}
          >
            <LeadForm />
          </div>
        </div>

        <div className="lg:col-start-1 lg:row-start-2">
          <h3 className="reveal font-bold text-white">Das erhalten Sie:</h3>
          <ul className="mt-4 space-y-3.5">
            {deliverables.map((d, i) => (
              <li key={d} className="reveal flex gap-3 text-navy-100" style={{ "--reveal-delay": `${i * 70}ms` }}>
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-signal-500 text-navy-950">
                  <Icon name="check" className="size-3.5" strokeWidth={3.5} />
                </span>
                {d}
              </li>
            ))}
          </ul>

          <div className="reveal mt-10 flex flex-col gap-5 rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10 sm:flex-row sm:items-center">
            {/* TODO: Portrait einsetzen (site.contactPerson.photo) – echte Gesichter steigern das Vertrauen messbar. */}
            {contactPerson.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={contactPerson.photo}
                alt={contactPerson.name}
                width={64}
                height={64}
                className="size-16 shrink-0 rounded-full object-cover ring-2 ring-signal-500"
              />
            ) : (
              <span
                className="grid size-16 shrink-0 place-items-center rounded-full bg-gradient-to-br from-electric-500 to-navy-700 text-lg font-extrabold text-white ring-2 ring-signal-500 ring-offset-2 ring-offset-navy-950"
                aria-hidden="true"
              >
                {contactPerson.initials}
              </span>
            )}
            <div className="flex-1">
              <p className="font-bold text-white">{contactPerson.name}</p>
              <p className="text-sm text-navy-300">{contactPerson.role}</p>
              <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                <a
                  href={site.phone.href}
                  className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-signal-400"
                  data-cta="lead-phone"
                >
                  <Icon name="phone" className="size-4 text-signal-400" />
                  {site.phone.display}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-signal-400"
                  data-cta="lead-mail"
                >
                  <Icon name="mail" className="size-4 text-signal-400" />
                  {site.email}
                </a>
              </div>
            </div>
          </div>

          {site.calendlyUrl && (
            <a
              href={site.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal arrow-nudge mt-4 inline-flex items-center gap-2 font-semibold text-navy-100 hover:text-white"
              data-cta="lead-calendly"
            >
              <Icon name="calendar" className="size-5 text-signal-400" />
              Lieber direkt einen Termin wählen
              <Icon name="arrow-right" className="size-4" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
