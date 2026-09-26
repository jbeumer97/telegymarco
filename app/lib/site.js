// Zentrale Unternehmens- und Kampagnendaten der Landingpage.
// Alle mit "TODO" markierten Werte sind Platzhalter und müssen vor dem
// Livegang durch echte, belegbare Angaben ersetzt werden (UWG / Impressumspflicht).

export const site = {
  name: "EnterCon",
  legalName: "MC Enterprise Consulting", // TODO: vollständige Firmierung inkl. Rechtsform
  claim: "Wir verbinden Unternehmen mit den richtigen Lösungen.",
  url: "https://entercon.de", // TODO: finale Domain

  phone: { display: "+49 (0) 89 – 123 456", href: "tel:+4989123456" }, // TODO
  email: "info@entercon.de", // TODO
  address: { street: "Musterstraße 1", zip: "80331", city: "München" }, // TODO

  contactPerson: {
    name: "Marco Catgiu", // TODO: Name/Funktion prüfen
    role: "Ihr persönlicher Ansprechpartner",
    initials: "MC",
    // TODO: Portrait unter /public/team/ ablegen und hier eintragen, z. B. "/team/marco.jpg"
    photo: null,
  },

  // Netzbetreiber, deren Tarife verglichen werden. TODO: Partnerstatus prüfen,
  // Logos nur mit Freigabe des jeweiligen Anbieters verwenden.
  carriers: ["Telekom", "Vodafone", "O2 Telefónica"],

  // Kennzahlen für Hero & Trust-Elemente. TODO: durch echte Werte ersetzen.
  stats: [
    { value: 30, prefix: "Ø ", suffix: " %", label: "Kostenersparnis" },
    { value: 200, suffix: "+", label: "betreute Unternehmen" },
    { value: 4.5, decimals: 1, suffix: " Mio. €", label: "betreutes Vertragsvolumen" },
  ],

  // Terminbuchung (z. B. https://calendly.com/entercon/erstanalyse). Leer = Button ausgeblendet.
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || "",
  // Webhook für Leads (Make, n8n, Zapier, HubSpot, Formspree …). Leer = Übermittlung wird simuliert.
  leadWebhookUrl: process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL || "",
};

export const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#referenzen", label: "Referenzen" },
  { href: "#faq", label: "FAQ" },
];
