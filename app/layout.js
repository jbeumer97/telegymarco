import { Plus_Jakarta_Sans } from "next/font/google";
import { site } from "./lib/site";
import "./globals.css";

// Wird beim Build selbst gehostet – kein Request an Google zur Laufzeit (DSGVO).
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

const title = "Telekommunikationskosten senken | Kostenlose Analyse – EnterCon";
const description =
  "Bis zu 30 % weniger Telekommunikationskosten: EnterCon analysiert Ihre Mobilfunk-, Festnetz- und Internetverträge kostenlos und bringt Ihr Unternehmen auf Glasfaser & Cloud-Telefonie.";

export const metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  keywords: [
    "Telekommunikationskosten senken",
    "Tarifoptimierung Unternehmen",
    "Cloud-Telefonie Mittelstand",
    "Glasfaser für Unternehmen",
    "Business Mobilfunk Beratung",
    "B2B Telekommunikationsberatung",
    "EnterCon",
    "MC Enterprise Consulting",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    siteName: `${site.name} – ${site.legalName}`,
    title,
    description,
  },
};

export const viewport = {
  themeColor: "#061125",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${site.name} – ${site.legalName}`,
  description,
  url: site.url,
  telephone: site.phone.href.replace("tel:", ""),
  email: site.email,
  areaServed: "DE",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.zip,
    addressLocality: site.address.city,
    addressCountry: "DE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={jakarta.variable}>
      <head>
        {/* ============================================
            GOOGLE TAG MANAGER — Platzhalter
            GTM-XXXXXXX durch die Container-ID ersetzen und erst nach Einwilligung (Cookie-Banner) laden.
            Die Seite pusht bereits: cta_click, lead_form_step, generate_lead.
        ============================================ */}
        {/* <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXXXX');` }} /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-signal-500 focus:px-4 focus:py-2 focus:font-bold focus:text-navy-950"
        >
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
