import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { site } from "../lib/site";

const faqs = [
  {
    q: "Was kostet die Erstanalyse?",
    a: "Nichts. Die Erstanalyse ist für Sie zu 100 % kostenlos und unverbindlich. Sie entscheiden anschließend in Ruhe, ob und wie Sie unsere Empfehlungen umsetzen möchten.",
  },
  {
    q: "Muss ich dafür meinen Anbieter wechseln?",
    a: "Nicht zwingend. Oft lassen sich schon beim bestehenden Anbieter deutlich bessere Konditionen erzielen. Wir beraten anbieterunabhängig und empfehlen die Lösung, die für Sie wirtschaftlich und technisch am sinnvollsten ist.",
  },
  {
    q: "Was passiert mit unseren Rufnummern?",
    a: "Ihre Rufnummern bleiben selbstverständlich erhalten. Wir übernehmen die Portierung vollständig und koordinieren den Umstellungstermin so, dass Sie jederzeit erreichbar sind.",
  },
  {
    q: "Wie viel Aufwand habe ich mit der Umstellung?",
    a: "Minimal. Sie stellen uns Ihre aktuellen Rechnungen zur Verfügung – alles Weitere, von der Kündigung über die Portierung bis zur Inbetriebnahme, übernehmen wir für Sie.",
  },
  {
    q: "Unsere Verträge laufen noch. Lohnt sich die Analyse trotzdem?",
    a: "Ja. Wir erfassen alle Laufzeiten und planen den Wechsel zum optimalen Zeitpunkt. Häufig lassen sich laufende Verträge bereits vorzeitig anpassen oder um günstigere Optionen ergänzen.",
  },
  {
    q: "Für welche Unternehmensgrößen ist EnterCon geeignet?",
    a: "Wir betreuen Unternehmen ab etwa 5 Mitarbeitenden bis hin zu Mittelständlern mit mehreren Standorten und Hunderten von Anschlüssen – branchenübergreifend und deutschlandweit.",
  },
];

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="faq-heading"
            align="left"
            eyebrow="Häufige Fragen"
            title="Gut zu wissen, bevor Sie starten"
            intro="Sie haben eine Frage, die hier nicht beantwortet wird? Sprechen Sie uns direkt an – wir nehmen uns Zeit für Sie."
          />
          <a
            href={site.phone.href}
            className="reveal mt-8 inline-flex items-center gap-3 rounded-2xl bg-navy-50 px-5 py-4 ring-1 ring-navy-100 transition hover:ring-electric-300"
            data-cta="faq-phone"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-navy-900 text-white">
              <Icon name="phone" className="size-5" />
            </span>
            <span>
              <span className="block text-sm text-navy-500">Direkt anrufen</span>
              <span className="font-bold text-navy-900">{site.phone.display}</span>
            </span>
          </a>
        </div>

        <div className="divide-y divide-navy-100 border-y border-navy-100">
          {faqs.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 text-left text-lg font-bold text-navy-900 transition-colors hover:text-electric-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric-500">
                {f.q}
                <span className="faq-icon grid size-8 shrink-0 place-items-center rounded-full bg-navy-50 text-navy-700 transition-[transform,background-color] duration-300 group-hover:bg-electric-500 group-hover:text-white group-open:bg-navy-900 group-open:text-white">
                  <Icon name="plus" className="size-4" strokeWidth={2.5} />
                </span>
              </summary>
              <p className="-mt-1 max-w-2xl pb-6 pr-12 leading-relaxed text-navy-600 motion-safe:animate-fade-up">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
