# EnterCon – B2B-Landingpage

Conversion-optimierte Landingpage für **EnterCon (MC Enterprise Consulting)**: Telekommunikationsberatung für den Mittelstand.
Gebaut mit Next.js 16 (App Router, statischer Export) und Tailwind CSS v4.

- Copy-Deck und Interaktionskonzept: [`docs/copywriting.md`](docs/copywriting.md)
- Seitenstruktur: Header → Hero → Herausforderungen → Leistungen → Ablauf → Referenzen → FAQ → Analyse-Formular → Footer

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # statischer Export nach ./out (auf jedem Webspace/CDN hostbar)
```

## Konfiguration

Umgebungsvariablen in `.env.local` (Vorlage: `.env.example`):

| Variable | Zweck |
| --- | --- |
| `NEXT_PUBLIC_LEAD_WEBHOOK_URL` | Jede Anfrage wird als JSON an diesen Webhook gepostet (Make, n8n, Zapier, HubSpot, Formspree …). Der Endpoint muss CORS erlauben. Ohne Wert wird die Übermittlung nur simuliert. |
| `NEXT_PUBLIC_CALENDLY_URL` | Buchungslink. Blendet „Termin wählen“ im Formularbereich und auf der Danke-Seite ein (Name/E-Mail werden vorausgefüllt). |

### Lead-Payload

```json
{
  "source": "landingpage",
  "submittedAt": "2026-09-26T10:00:00.000Z",
  "priority": "A",
  "needs": ["mobilfunk", "internet"],
  "employees": "50-249",
  "monthlyCosts": "2000-5000",
  "name": "Erika Musterfrau",
  "company": "Muster GmbH",
  "email": "erika@muster.de",
  "phone": "+49 170 1234567",
  "page": "https://…/?utm_source=google",
  "referrer": null,
  "tracking": { "utm_source": "google", "gclid": "…" }
}
```

`priority` ist ein einfaches Lead-Scoring aus Unternehmensgröße und monatlichen Kosten (A = sofort anrufen, B = zeitnah, C = Nurturing) und eignet sich für das Routing im CRM. Die Regeln stehen in `app/components/LeadForm.js`.

### Tracking

Die Seite schreibt Events in `window.dataLayer` (Google Tag Manager / Google Ads):
`cta_click` (mit `cta_location`), `lead_form_step`, `generate_lead`. Das GTM-Snippet ist in `app/layout.js` vorbereitet und sollte erst nach Einwilligung geladen werden.

## Vor dem Livegang ersetzen

Alle Platzhalter sind im Code mit `TODO` markiert, die meisten zentral in `app/lib/site.js`:

- Kontaktdaten, Adresse, Firmierung, Domain
- Kennzahlen im Hero (Ersparnis, betreute Unternehmen, Vertragsvolumen)
- Referenzen in `app/components/CaseStudies.js`: nur echte, freigegebene Kundenstimmen verwenden (UWG)
- Portrait des Ansprechpartners (`site.contactPerson.photo`) und Kundenfotos
- Netzbetreiber-Logos nur mit Freigabe der Anbieter
- Impressum und Datenschutzerklärung (`app/impressum`, `app/datenschutz`) vervollständigen und rechtlich prüfen lassen
