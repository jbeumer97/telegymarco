import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://entercon.de"),
  title: "B2B IT & Telekom-Lösungen | EnterCon Consulting",
  description:
    "Maßgeschneiderte IT- & Telekomlösungen für Unternehmen. EnterCon – Ihr Partner für Mobilfunk, IT-Infrastruktur & Cloud. Jetzt kostenlose Potenzialanalyse sichern.",
  keywords: [
    "B2B Telekommunikation",
    "IT-Lösungen Unternehmen",
    "Business Mobilfunk",
    "IT-Infrastruktur Mittelstand",
    "Unternehmensberatung IT",
    "EnterCon Consulting",
    "MC Enterprise Consulting",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://entercon.de",
    siteName: "EnterCon – MC Enterprise Consulting",
    title: "B2B IT & Telekommunikationslösungen | EnterCon Consulting",
    description:
      "Maßgeschneiderte IT- & Telekomlösungen. Kostenlose Potenzialanalyse anfordern.",
  },
  alternates: { canonical: "https://entercon.de" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        {/* ============================================
            GOOGLE TAG MANAGER — Platzhalter
            Ersetze GTM-XXXXXXX mit deiner Container-ID
        ============================================ */}
        {/* <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXXXX');` }} /> */}

        {/* ============================================
            GOOGLE ADS CONVERSION PIXEL — Platzhalter
            Ersetze AW-XXXXXXXXX/YYYYYYY mit deiner ID
        ============================================ */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','AW-XXXXXXXXX');` }} /> */}
      </head>
      <body className="antialiased">
        {/* GTM NoScript Fallback */}
        {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript> */}
        <a
          href="#kontakt"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
        >
          Zum Kontaktformular springen
        </a>
        {children}
      </body>
    </html>
  );
}
