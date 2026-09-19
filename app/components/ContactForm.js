"use client";
import { useState } from "react";

const interests = [
  "Bitte wählen…",
  "Business-Mobilfunk",
  "IT-Infrastruktur & Cloud",
  "Festnetz & VoIP",
  "Alles davon / Gesamtpaket",
  "Sonstiges",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "Vorname ist erforderlich.";
    if (!form.lastName.trim()) e.lastName = "Nachname ist erforderlich.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Bitte eine gültige E-Mail-Adresse eingeben.";
    if (!form.phone.trim()) e.phone = "Telefonnummer ist erforderlich.";
    if (!form.company.trim()) e.company = "Firmenname ist erforderlich.";
    if (!form.interest || form.interest === "Bitte wählen…")
      e.interest = "Bitte wählen Sie ein Thema aus.";
    return e;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    // Simulierte Übertragung (hier API-Endpoint einsetzen)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="kontakt"
      className="py-20 lg:py-28 bg-[#0f2644] relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" aria-hidden="true" />
      <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-blue-600/8 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-blue-500/6 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: Info */}
          <div className="text-white">
            <p className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-3">
              Kostenlose Potenzialanalyse
            </p>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-5"
            >
              Starten Sie jetzt in
              <br />
              <span className="gradient-text">die digitale Zukunft</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-10">
              Hinterlassen Sie Ihre Daten für ein unverbindliches Erstgespräch.{" "}
              <strong className="text-white">
                Wir melden uns innerhalb von 24 Stunden.
              </strong>
            </p>

            {/* Process steps */}
            <div className="space-y-5">
              {[
                {
                  step: "01",
                  title: "Anfrage senden",
                  text: "Formular ausfüllen — dauert unter 60 Sekunden.",
                },
                {
                  step: "02",
                  title: "Erstkontakt innerhalb 24h",
                  text: "Ihr persönlicher Berater meldet sich zeitnah.",
                },
                {
                  step: "03",
                  title: "Kostenlose Potenzialanalyse",
                  text: "Wir zeigen Ihnen konkrete Einspar- und Verbesserungspotenziale.",
                },
                {
                  step: "04",
                  title: "Maßgeschneidertes Angebot",
                  text: "Individuelles Konzept – unverbindlich, transparent, verständlich.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 text-blue-400 font-bold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{item.title}</div>
                    <div className="text-slate-400 text-sm mt-0.5">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0f2644] mb-2">
                  Anfrage erfolgreich gesendet!
                </h3>
                <p className="text-slate-600">
                  Vielen Dank, <strong>{form.firstName}</strong>! Ihr persönlicher
                  Berater meldet sich innerhalb von 24 Stunden bei Ihnen.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Kontaktformular für kostenlose Beratung"
              >
                <h3 className="text-xl font-bold text-[#0f2644] mb-1">
                  Jetzt kostenlose Beratung anfordern
                </h3>
                <p className="text-slate-500 text-sm mb-6">
                  Alle mit * markierten Felder sind Pflichtfelder.
                </p>

                {/* Row 1: Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Vorname *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      autoComplete="given-name"
                      required
                      placeholder="Max"
                      value={form.firstName}
                      onChange={handleChange}
                      aria-invalid={!!errors.firstName}
                      aria-describedby={errors.firstName ? "firstName-error" : undefined}
                      className={`form-input ${errors.firstName ? "border-red-400" : ""}`}
                    />
                    {errors.firstName && (
                      <p id="firstName-error" className="text-red-500 text-xs mt-1" role="alert">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Nachname *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      autoComplete="family-name"
                      required
                      placeholder="Mustermann"
                      value={form.lastName}
                      onChange={handleChange}
                      aria-invalid={!!errors.lastName}
                      aria-describedby={errors.lastName ? "lastName-error" : undefined}
                      className={`form-input ${errors.lastName ? "border-red-400" : ""}`}
                    />
                    {errors.lastName && (
                      <p id="lastName-error" className="text-red-500 text-xs mt-1" role="alert">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      E-Mail (Arbeit) *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="work email"
                      required
                      placeholder="max@firma.de"
                      value={form.email}
                      onChange={handleChange}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`form-input ${errors.email ? "border-red-400" : ""}`}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-red-500 text-xs mt-1" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Telefonnummer *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      required
                      placeholder="+49 123 456789"
                      value={form.phone}
                      onChange={handleChange}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className={`form-input ${errors.phone ? "border-red-400" : ""}`}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="text-red-500 text-xs mt-1" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 3: Company */}
                <div className="mb-4">
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Firmenname *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    autoComplete="organization"
                    required
                    placeholder="Muster GmbH"
                    value={form.company}
                    onChange={handleChange}
                    aria-invalid={!!errors.company}
                    aria-describedby={errors.company ? "company-error" : undefined}
                    className={`form-input ${errors.company ? "border-red-400" : ""}`}
                  />
                  {errors.company && (
                    <p id="company-error" className="text-red-500 text-xs mt-1" role="alert">
                      {errors.company}
                    </p>
                  )}
                </div>

                {/* Row 4: Interest */}
                <div className="mb-4">
                  <label
                    htmlFor="interest"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Wofür interessieren Sie sich? *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={form.interest}
                    onChange={handleChange}
                    aria-invalid={!!errors.interest}
                    aria-describedby={errors.interest ? "interest-error" : undefined}
                    className={`form-input ${errors.interest ? "border-red-400" : ""}`}
                  >
                    {interests.map((opt) => (
                      <option key={opt} value={opt} disabled={opt === "Bitte wählen…"}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.interest && (
                    <p id="interest-error" className="text-red-500 text-xs mt-1" role="alert">
                      {errors.interest}
                    </p>
                  )}
                </div>

                {/* Row 5: Message (optional) */}
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Nachricht{" "}
                    <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Beschreiben Sie kurz Ihre aktuelle Situation oder Ihr Anliegen…"
                    value={form.message}
                    onChange={handleChange}
                    className="form-input resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  id="form-submit"
                  disabled={loading}
                  className="btn-cta w-full text-white font-bold text-base px-6 py-4 rounded-xl flex items-center justify-center gap-2 disabled:opacity-70"
                  aria-label="Kostenlose Beratung anfordern"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Anfrage wird gesendet…
                    </>
                  ) : (
                    <>
                      Jetzt kostenlose Beratung anfordern
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-400 mt-4">
                  Mit dem Absenden stimmen Sie unserer{" "}
                  <a href="/datenschutz" className="text-blue-600 underline">
                    Datenschutzerklärung
                  </a>{" "}
                  zu. Keine versteckten Kosten.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
