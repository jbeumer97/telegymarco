import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";
import Footer from "./Footer";

// Schlichtes Layout für Impressum & Datenschutz.
export default function LegalPage({ title, children }) {
  return (
    <>
      <header className="bg-navy-950">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo href="/" />
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-200 hover:text-white"
          >
            <Icon name="arrow-left" className="size-4" />
            Zur Startseite
          </Link>
        </div>
      </header>
      <main id="main-content" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <h1 className="text-4xl font-extrabold tracking-tight text-navy-900">{title}</h1>
        <p className="mt-6 rounded-xl bg-signal-500/10 p-4 text-sm font-medium text-navy-800 ring-1 ring-signal-500/30">
          Platzhalter: Die Angaben in [eckigen Klammern] müssen vor dem Livegang ergänzt und rechtlich geprüft werden.
        </p>
        <div className="mt-10 space-y-8 leading-relaxed text-navy-700 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-navy-900">
          {children}
        </div>
      </main>
      <Footer home="/" />
    </>
  );
}
