"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { site } from "../lib/site";
import { trackEvent } from "../lib/track";

const needOptions = [
  { value: "mobilfunk", label: "Mobilfunk", icon: "smartphone" },
  { value: "festnetz", label: "Festnetz & Telefonanlage", icon: "phone" },
  { value: "internet", label: "Internet & Glasfaser", icon: "network" },
  { value: "it", label: "IT & Cloud-Services", icon: "cloud" },
  { value: "alles", label: "Alles prüfen lassen", icon: "search" },
];

const sizeOptions = [
  { value: "1-9", label: "1–9", points: 0 },
  { value: "10-49", label: "10–49", points: 1 },
  { value: "50-249", label: "50–249", points: 2 },
  { value: "250+", label: "250+", points: 3 },
];

const costOptions = [
  { value: "<500", label: "bis 500 €", points: 0 },
  { value: "500-2000", label: "500–2.000 €", points: 1 },
  { value: "2000-5000", label: "2.000–5.000 €", points: 2 },
  { value: ">5000", label: "über 5.000 €", points: 3 },
  { value: "unbekannt", label: "Weiß ich nicht", points: 1 },
];

const steps = [
  { title: "Wo sehen Sie den größten Handlungsbedarf?", hint: "Mehrfachauswahl möglich" },
  {
    title: "Erzählen Sie uns kurz von Ihrem Unternehmen",
    hint: "So können wir Ihr Potenzial realistisch einschätzen.",
  },
  { title: "Wohin dürfen wir Ihre Analyse senden?", hint: "Fast geschafft – nur noch Ihre Kontaktdaten." },
];

const emptyContact = { name: "", company: "", email: "", phone: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validateContact(c) {
  const errors = {};
  if (c.name.trim().length < 2) errors.name = "Bitte geben Sie Ihren Namen an.";
  if (c.company.trim().length < 2) errors.company = "Bitte geben Sie Ihr Unternehmen an.";
  if (!EMAIL_RE.test(c.email.trim())) errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
  if (c.phone.replace(/\D/g, "").length < 6) errors.phone = "Bitte geben Sie eine Telefonnummer für Rückfragen an.";
  return errors;
}

// Einfaches Lead-Scoring fürs CRM-Routing: A = sofort anrufen, B = zeitnah, C = Nurturing.
function leadPriority(size, cost) {
  const points =
    (sizeOptions.find((o) => o.value === size)?.points ?? 0) + (costOptions.find((o) => o.value === cost)?.points ?? 0);
  if (points >= 4) return "A";
  if (points >= 2) return "B";
  return "C";
}

// UTM-Parameter und Klick-IDs für die Kampagnen-Zuordnung (z. B. Google-Ads-Offline-Conversions).
function trackingParams() {
  const params = new URLSearchParams(window.location.search);
  return Object.fromEntries(
    [...params].filter(([key]) => key.startsWith("utm_") || key === "gclid" || key === "fbclid"),
  );
}

async function sendLead(payload) {
  if (!site.leadWebhookUrl) {
    console.info("[Lead] NEXT_PUBLIC_LEAD_WEBHOOK_URL ist nicht gesetzt – Übermittlung wird nur simuliert.", payload);
    await new Promise((resolve) => setTimeout(resolve, 900));
    return;
  }
  const res = await fetch(site.leadWebhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Lead-Webhook antwortete mit Status ${res.status}`);
}

function OptionTile({ type, name, value, checked, onChange, icon, children }) {
  return (
    <label className="relative block cursor-pointer">
      <input type={type} name={name} value={value} checked={checked} onChange={onChange} className="peer sr-only" />
      <span
        className={`flex h-full items-center gap-3 rounded-xl border-2 px-4 py-3.5 text-[15px] font-semibold transition duration-200 peer-focus-visible:ring-4 peer-focus-visible:ring-electric-500/25 active:scale-[0.98] ${
          checked
            ? "border-electric-500 bg-electric-500/[0.06] text-navy-900"
            : "border-navy-100 bg-white text-navy-700 hover:border-electric-300 hover:bg-navy-50"
        }`}
      >
        {icon && (
          <span
            className={`grid size-9 shrink-0 place-items-center rounded-lg transition-colors duration-200 ${
              checked ? "bg-electric-500 text-white" : "bg-navy-50 text-navy-600"
            }`}
          >
            <Icon name={icon} className="size-[18px]" />
          </span>
        )}
        <span className="pr-6">{children}</span>
        {checked && (
          <span className="absolute right-3 top-3 grid size-5 place-items-center rounded-full bg-electric-500 text-white motion-safe:animate-pop">
            <Icon name="check" className="size-3" strokeWidth={3.5} />
          </span>
        )}
      </span>
    </label>
  );
}

function Field({ id, label, error, valid, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-navy-800">
        {label}
      </label>
      <div className="relative mt-1.5">
        <input
          id={id}
          name={id}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full rounded-xl border-2 bg-white px-4 py-3 pr-10 text-navy-900 outline-none transition placeholder:text-navy-300 focus:border-electric-500 focus:ring-4 focus:ring-electric-500/15 ${
            error ? "border-rose-400" : "border-navy-100 hover:border-navy-200"
          }`}
          {...props}
        />
        {valid && (
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500 motion-safe:animate-pop">
            <Icon name="check" className="size-5" strokeWidth={3} />
          </span>
        )}
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm font-medium text-rose-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default function LeadForm() {
  const [step, setStep] = useState(0);
  const [needs, setNeeds] = useState([]);
  const [size, setSize] = useState("");
  const [cost, setCost] = useState("");
  const [contact, setContact] = useState(emptyContact);
  const [touched, setTouched] = useState({});
  const [stepError, setStepError] = useState("");
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [honeypot, setHoneypot] = useState("");
  const headingRef = useRef(null);
  const interacted = useRef(false);

  // Nach einem Schrittwechsel den Fokus auf die neue Überschrift setzen (Screenreader & Tastatur).
  const done = status === "success";
  useEffect(() => {
    if (interacted.current) headingRef.current?.focus({ preventScroll: true });
  }, [step, done]);

  // Klick auf "Kostenlos prüfen lassen" in einer Leistungskarte wählt den Bereich vor.
  useEffect(() => {
    const onClick = (e) => {
      const need = e.target.closest?.("a[data-need]")?.dataset.need;
      if (!need) return;
      setNeeds((prev) => {
        if (need === "alles") return ["alles"];
        return prev.includes(need) ? prev : [...prev.filter((v) => v !== "alles"), need];
      });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const toggleNeed = (value) => {
    setStepError("");
    setNeeds((prev) => {
      if (value === "alles") return prev.includes("alles") ? [] : ["alles"];
      const rest = prev.filter((v) => v !== "alles");
      return rest.includes(value) ? rest.filter((v) => v !== value) : [...rest, value];
    });
  };

  const goTo = (next) => {
    interacted.current = true;
    setStepError("");
    setStep(next);
    trackEvent("lead_form_step", { form_step: next + 1 });
  };

  const errors = validateContact(contact);
  const showError = (field) => (touched[field] || submitAttempted) && errors[field];
  const isValid = (field) => touched[field] && !errors[field];

  const updateContact = (e) => setContact((c) => ({ ...c, [e.target.name]: e.target.value }));
  const touch = (e) => setTouched((t) => ({ ...t, [e.target.name]: true }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (step === 0) {
      if (needs.length === 0) return setStepError("Bitte wählen Sie mindestens einen Bereich aus.");
      return goTo(1);
    }
    if (step === 1) {
      if (!size || !cost) return setStepError("Bitte beantworten Sie beide Fragen.");
      return goTo(2);
    }

    setSubmitAttempted(true);
    if (Object.keys(errors).length > 0) {
      document.getElementById(Object.keys(errors)[0])?.focus();
      return;
    }

    interacted.current = true;
    const priority = leadPriority(size, cost);
    if (honeypot) {
      setStatus("success");
      return;
    }

    setStatus("sending");
    try {
      await sendLead({
        source: "landingpage",
        submittedAt: new Date().toISOString(),
        priority,
        needs,
        employees: size,
        monthlyCosts: cost,
        ...contact,
        page: window.location.href,
        referrer: document.referrer || null,
        tracking: trackingParams(),
      });
      setStatus("success");
      trackEvent("generate_lead", { lead_priority: priority, lead_needs: needs.join(",") });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (done) {
    const firstName = contact.name.trim().split(/\s+/)[0];
    const calendlyHref = site.calendlyUrl
      ? `${site.calendlyUrl}?name=${encodeURIComponent(contact.name)}&email=${encodeURIComponent(contact.email)}`
      : null;
    return (
      <div className="py-4 text-center" role="status">
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 motion-safe:animate-pop">
          <Icon name="check" className="size-8" strokeWidth={3} />
        </span>
        <h3 ref={headingRef} tabIndex={-1} className="mt-6 text-2xl font-extrabold text-navy-900 outline-none">
          Vielen Dank{firstName ? `, ${firstName}` : ""}!
        </h3>
        <p className="mx-auto mt-3 max-w-sm leading-relaxed text-navy-600">
          Ihre Anfrage ist eingegangen. {site.contactPerson.name} meldet sich innerhalb von 24 Stunden persönlich bei
          Ihnen.
        </p>
        <ol className="mx-auto mt-8 max-w-sm space-y-3 text-left text-sm">
          {[
            "Wir sichten Ihre Angaben und bereiten das Gespräch vor.",
            "Kurzes Telefonat: Wir klären offene Fragen und fordern Ihre Rechnungen an.",
            "Sie erhalten Ihre persönliche Kostenanalyse – kostenlos.",
          ].map((t, i) => (
            <li key={t} className="flex gap-3 rounded-xl bg-navy-50 p-3 text-navy-700">
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-navy-900 text-xs font-bold text-white">
                {i + 1}
              </span>
              {t}
            </li>
          ))}
        </ol>
        {calendlyHref && (
          <a
            href={calendlyHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-signal arrow-nudge mt-8 inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-bold"
            data-cta="success-calendly"
          >
            <Icon name="calendar" className="size-5" />
            Noch schneller: Termin direkt wählen
            <Icon name="arrow-right" className="size-4" strokeWidth={2.5} />
          </a>
        )}
      </div>
    );
  }

  const progress = ((step + 1) / steps.length) * 100;

  return (
    <form onSubmit={handleSubmit} noValidate aria-labelledby="lead-step-title">
      <div className="flex items-center justify-between text-sm font-semibold">
        <span className="text-electric-600">
          Schritt {step + 1} von {steps.length}
        </span>
        <span className="text-navy-400">{step === 2 ? "Fast geschafft!" : "Dauert < 2 Min."}</span>
      </div>
      <div
        className="mt-3 h-1.5 overflow-hidden rounded-full bg-navy-100"
        role="progressbar"
        aria-label="Fortschritt"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress)}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-electric-500 to-signal-500 transition-[width] duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div key={step} className="mt-7 motion-safe:animate-step-in">
        <h3
          id="lead-step-title"
          ref={headingRef}
          tabIndex={-1}
          className="text-xl font-extrabold text-navy-900 outline-none sm:text-2xl"
        >
          {steps[step].title}
        </h3>
        <p className="mt-1.5 text-sm text-navy-500">{steps[step].hint}</p>

        {step === 0 && (
          <fieldset className="mt-6">
            <legend className="sr-only">Bereiche</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              {needOptions.map((o) => (
                <OptionTile
                  key={o.value}
                  type="checkbox"
                  name="needs"
                  value={o.value}
                  icon={o.icon}
                  checked={needs.includes(o.value)}
                  onChange={() => toggleNeed(o.value)}
                >
                  {o.label}
                </OptionTile>
              ))}
            </div>
          </fieldset>
        )}

        {step === 1 && (
          <div className="mt-6 space-y-7">
            <fieldset>
              <legend className="text-sm font-bold text-navy-800">Wie viele Mitarbeitende hat Ihr Unternehmen?</legend>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {sizeOptions.map((o) => (
                  <OptionTile
                    key={o.value}
                    type="radio"
                    name="employees"
                    value={o.value}
                    checked={size === o.value}
                    onChange={() => {
                      setStepError("");
                      setSize(o.value);
                    }}
                  >
                    {o.label}
                  </OptionTile>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-bold text-navy-800">
                Wie hoch sind Ihre monatlichen Telekommunikationskosten?
              </legend>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {costOptions.map((o) => (
                  <OptionTile
                    key={o.value}
                    type="radio"
                    name="monthlyCosts"
                    value={o.value}
                    checked={cost === o.value}
                    onChange={() => {
                      setStepError("");
                      setCost(o.value);
                    }}
                  >
                    {o.label}
                  </OptionTile>
                ))}
              </div>
            </fieldset>
          </div>
        )}

        {step === 2 && (
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field
              id="name"
              label="Vor- und Nachname"
              autoComplete="name"
              placeholder="Max Mustermann"
              value={contact.name}
              onChange={updateContact}
              onBlur={touch}
              error={showError("name")}
              valid={isValid("name")}
            />
            <Field
              id="company"
              label="Unternehmen"
              autoComplete="organization"
              placeholder="Muster GmbH"
              value={contact.company}
              onChange={updateContact}
              onBlur={touch}
              error={showError("company")}
              valid={isValid("company")}
            />
            <Field
              id="email"
              type="email"
              label="Geschäftliche E-Mail"
              autoComplete="email"
              inputMode="email"
              placeholder="max@muster.de"
              value={contact.email}
              onChange={updateContact}
              onBlur={touch}
              error={showError("email")}
              valid={isValid("email")}
            />
            <Field
              id="phone"
              type="tel"
              label="Telefon für Rückfragen"
              autoComplete="tel"
              inputMode="tel"
              placeholder="+49 170 1234567"
              value={contact.phone}
              onChange={updateContact}
              onBlur={touch}
              error={showError("phone")}
              valid={isValid("phone")}
            />
            <div className="hidden" aria-hidden="true">
              <label>
                Website
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </label>
            </div>
          </div>
        )}
      </div>

      {stepError && (
        <p className="mt-4 text-sm font-medium text-rose-600" role="alert">
          {stepError}
        </p>
      )}
      {status === "error" && (
        <p className="mt-5 rounded-xl bg-rose-50 p-4 text-sm text-rose-700" role="alert">
          Die Übermittlung hat leider nicht geklappt. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an:{" "}
          <a href={site.phone.href} className="font-bold underline">
            {site.phone.display}
          </a>
        </p>
      )}

      <div className="mt-8 flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:gap-3">
        {step > 0 && (
          <button
            type="button"
            onClick={() => goTo(step - 1)}
            className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold text-navy-600 transition hover:bg-navy-50 hover:text-navy-900 sm:py-4"
          >
            <Icon name="arrow-left" className="size-4" />
            Zurück
          </button>
        )}
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-signal arrow-nudge inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-4 py-4 text-[15px] font-bold sm:px-6 sm:text-base"
        >
          {status === "sending" ? (
            <>
              <span
                className="size-5 animate-spin rounded-full border-[3px] border-navy-950/25 border-t-navy-950"
                aria-hidden="true"
              />
              Wird gesendet …
            </>
          ) : (
            <>
              {step === 2 ? "Kostenlose Analyse anfordern" : "Weiter"}
              <Icon name="arrow-right" className="size-5" strokeWidth={2.5} />
            </>
          )}
        </button>
      </div>

      {step === 2 && (
        <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-navy-500">
          <Icon name="lock" className="mt-0.5 size-3.5 shrink-0" />
          <span>
            Ihre Daten werden verschlüsselt übertragen und ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Kein
            Newsletter, kein Spam. Mehr in unserer{" "}
            <Link href="/datenschutz/" className="font-semibold text-electric-600 underline underline-offset-2">
              Datenschutzerklärung
            </Link>
            .
          </span>
        </p>
      )}
    </form>
  );
}
