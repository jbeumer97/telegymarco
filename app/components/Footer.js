import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";
import { navLinks, site } from "../lib/site";

const services = [
  "Tarifoptimierung & Mobilfunk",
  "Cloud-Telefonie",
  "Glasfaser & Business-Internet",
  "Ganzheitliche B2B-Betreuung",
];

const legal = [
  { href: "/impressum/", label: "Impressum" },
  { href: "/datenschutz/", label: "Datenschutz" },
];

// home: Präfix für Anker-Links, wenn der Footer nicht auf der Landingpage steht (z. B. "/").
// Auf der Landingpage bleibt unten Platz für die mobile CTA-Leiste.
export default function Footer({ home = "" }) {
  const year = new Date().getFullYear();
  const linkClass = "text-navy-300 transition-colors hover:text-white";
  return (
    <footer className={`bg-navy-950 text-sm ${home ? "" : "pb-28 md:pb-0"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-t border-white/10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:py-16">
          <div>
            <Logo href={`${home}#top`} />
            <p className="mt-5 max-w-xs leading-relaxed text-navy-300">
              {site.claim} Unabhängige Beratung für Telekommunikation & IT-Infrastruktur im Mittelstand.
            </p>
            <address className="mt-6 space-y-2.5 not-italic text-navy-300">
              <p className="flex items-start gap-2.5">
                <Icon name="map-pin" className="mt-0.5 size-4 shrink-0 text-navy-400" />
                {site.address.street}, {site.address.zip} {site.address.city}
              </p>
              <a href={site.phone.href} className={`flex items-center gap-2.5 ${linkClass}`}>
                <Icon name="phone" className="size-4 text-navy-400" />
                {site.phone.display}
              </a>
              <a href={`mailto:${site.email}`} className={`flex items-center gap-2.5 ${linkClass}`}>
                <Icon name="mail" className="size-4 text-navy-400" />
                {site.email}
              </a>
            </address>
          </div>

          <nav aria-label="Leistungen">
            <h2 className="font-bold text-white">Leistungen</h2>
            <ul className="mt-4 space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a href={`${home}#leistungen`} className={linkClass}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Unternehmen">
            <h2 className="font-bold text-white">Unternehmen</h2>
            <ul className="mt-4 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={`${home}${l.href}`} className={linkClass}>
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={`${home}#analyse`} className={linkClass}>
                  Kostenlose Analyse
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Rechtliches">
            <h2 className="font-bold text-white">Rechtliches</h2>
            <ul className="mt-4 space-y-3">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-navy-400 sm:flex-row">
          <p>
            © {year} {site.legalName}. Alle Rechte vorbehalten.
          </p>
          <ul className="flex gap-6">
            {legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
