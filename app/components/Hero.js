import Icon from "./Icon";
import CountUp from "./CountUp";
import { site } from "../lib/site";

const promises = ["100 % kostenlos & unverbindlich", "Antwort innerhalb von 24 h", "Anbieterunabhängig"];

// Beispielrechnung für die Hero-Visualisierung (Monatskosten in €).
const example = [
  { label: "Mobilfunk · 42 SIM-Karten", before: 2310, after: 1520 },
  { label: "Festnetz & Telefonanlage", before: 890, after: 540 },
  { label: "Internet · 2 Standorte", before: 760, after: 590 },
];
const totalBefore = example.reduce((sum, r) => sum + r.before, 0);
const totalAfter = example.reduce((sum, r) => sum + r.after, 0);
const maxValue = Math.max(...example.map((r) => r.before));
const eur = (n) => `${n.toLocaleString("de-DE")} €`;

function SavingsCard() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="absolute -inset-6 rounded-[2rem] bg-electric-500/20 blur-3xl" aria-hidden="true" />

      <figure className="relative rounded-3xl bg-white p-6 shadow-2xl shadow-navy-950/60 ring-1 ring-white/10 sm:p-7">
        <figcaption className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-electric-600">Beispielrechnung</p>
            <p className="mt-1 text-lg font-bold text-navy-900">Ihre Kostenanalyse</p>
            <p className="text-sm text-navy-500">Mittelständler · 45 Mitarbeitende</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-700 ring-1 ring-emerald-200">
            <Icon name="trending-down" className="size-4" />−{Math.round((1 - totalAfter / totalBefore) * 100)} %
          </span>
        </figcaption>

        <ul className="mt-6 space-y-5">
          {example.map((row, i) => (
            <li key={row.label}>
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <span className="font-medium text-navy-700">{row.label}</span>
                <span className="whitespace-nowrap">
                  <span className="mr-2 text-navy-400 line-through decoration-navy-300">{eur(row.before)}</span>
                  <span className="font-bold text-navy-900">{eur(row.after)}</span>
                </span>
              </div>
              <div className="relative mt-2 h-2.5 overflow-hidden rounded-full bg-navy-50" aria-hidden="true">
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-navy-200"
                  style={{ width: `${(row.before / maxValue) * 100}%` }}
                />
                <div
                  className="absolute inset-y-0 left-0 origin-left rounded-full bg-gradient-to-r from-electric-500 to-electric-400 motion-safe:animate-grow-x"
                  style={{ width: `${(row.after / maxValue) * 100}%`, animationDelay: `${500 + i * 150}ms` }}
                />
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-end justify-between gap-4 rounded-2xl bg-navy-950 px-5 py-4 text-white">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-navy-300">Ersparnis pro Jahr</p>
            <p className="text-3xl font-extrabold tracking-tight text-signal-400">
              <CountUp value={(totalBefore - totalAfter) * 12} suffix=" €" duration={1800} />
            </p>
          </div>
          <p className="text-right text-xs leading-relaxed text-navy-300">
            {eur(totalBefore)} → <span className="font-bold text-white">{eur(totalAfter)}</span>
            <br />
            pro Monat
          </p>
        </div>
      </figure>

      <div className="absolute -left-3 -top-5 hidden items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-navy-100 motion-safe:animate-fade-up sm:flex [animation-delay:900ms]">
        <span className="grid size-8 place-items-center rounded-lg bg-electric-500/10 text-electric-600">
          <Icon name="zap" className="size-4" />
        </span>
        <span className="text-sm leading-tight">
          <span className="block font-bold text-navy-900">Glasfaser verfügbar</span>
          <span className="text-navy-500">bis 1 Gbit/s symmetrisch</span>
        </span>
      </div>
      <div className="absolute -bottom-5 -right-3 hidden items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-navy-100 motion-safe:animate-fade-up sm:flex [animation-delay:1100ms]">
        <span className="grid size-8 place-items-center rounded-lg bg-signal-500/15 text-signal-600">
          <Icon name="clock" className="size-4" />
        </span>
        <span className="text-sm leading-tight">
          <span className="block font-bold text-navy-900">Ergebnis in 48 h</span>
          <span className="text-navy-500">nach Rechnungseingang</span>
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-navy-950 pb-16 pt-28 sm:pt-32 lg:pb-20 lg:pt-36"
    >
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full bg-electric-500/25 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-48 -left-32 size-[28rem] rounded-full bg-signal-500/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.08fr_1fr] lg:gap-16 lg:px-8">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-navy-100 motion-safe:animate-fade-up sm:text-sm">
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            B2B-Telekommunikationsberatung für den Mittelstand
          </p>

          <h1
            id="hero-heading"
            className="mt-6 text-[2.25rem] font-extrabold leading-[1.08] tracking-tight text-balance text-white sm:text-5xl lg:text-[3.75rem]"
          >
            Bis zu <span className="text-signal-400">30 % weniger</span> Kosten für Ihre Telekommunikation.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-200 motion-safe:animate-fade-up sm:text-lg [animation-delay:150ms]">
            <strong className="font-semibold text-white">Mehr Leistung, weniger Aufwand:</strong> Wir prüfen Ihre
            Mobilfunk-, Festnetz- und Internetverträge kostenlos, decken versteckte Kostentreiber auf und bringen Ihr
            Unternehmen auf Glasfaser und Cloud-Telefonie – mit einem festen Ansprechpartner, der sich um alles kümmert.
          </p>

          <div className="mt-8 flex flex-col gap-3 motion-safe:animate-fade-up [animation-delay:300ms] sm:flex-row sm:items-center">
            <a
              href="#analyse"
              className="btn-signal arrow-nudge inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-base font-bold"
              data-cta="hero"
            >
              Kostenlose Analyse anfordern
              <Icon name="arrow-right" className="size-5" strokeWidth={2.5} />
            </a>
            <a
              href="#ablauf"
              className="arrow-nudge inline-flex items-center justify-center gap-2 rounded-xl px-5 py-4 text-base font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/5 hover:ring-white/40"
              data-cta="hero-secondary"
            >
              So funktioniert&apos;s
              <Icon name="arrow-right" className="size-4" />
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-navy-200 motion-safe:animate-fade-up [animation-delay:400ms]">
            {promises.map((p) => (
              <li key={p} className="flex items-center gap-1.5">
                <Icon name="check" className="size-4 text-emerald-400" strokeWidth={3} />
                {p}
              </li>
            ))}
          </ul>

          <dl className="mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-8 motion-safe:animate-fade-up [animation-delay:500ms]">
            {site.stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <dt className="order-2 mt-1 text-xs leading-snug text-navy-300 sm:text-sm">{s.label}</dt>
                <dd className="whitespace-nowrap text-xl font-extrabold tracking-tight text-white sm:text-3xl">
                  <CountUp value={s.value} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="motion-safe:animate-fade-up [animation-delay:250ms]">
          <SavingsCard />
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:mt-20 lg:px-8">
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 sm:flex-row sm:justify-between">
          <p className="text-center text-sm font-medium text-navy-300 sm:text-left">
            Unabhängiger Tarifvergleich aller großen Netzbetreiber
          </p>
          {/* TODO: Anbieter-Logos (SVG, mit Freigabe) statt Wortmarken einsetzen */}
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2" aria-label="Netzbetreiber">
            {site.carriers.map((c) => (
              <li key={c} className="text-lg font-bold tracking-tight text-white/70 transition-colors hover:text-white">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
