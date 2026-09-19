"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { href: "#leistungen", label: "Leistungen" },
    { href: "#ueber-uns", label: "Über uns" },
    { href: "#referenzen", label: "Referenzen" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-scrolled" : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3"
            aria-label="EnterCon – Startseite"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 2L18 6.5V13.5L10 18L2 13.5V6.5L10 2Z" stroke="white" strokeWidth="1.5" fill="none"/>
                <circle cx="10" cy="10" r="2.5" fill="white"/>
              </svg>
            </div>
            <div>
              <span className="text-white font-bold text-xl tracking-tight">EnterCon</span>
              <span className="hidden sm:block text-blue-300 text-xs font-medium tracking-wide">
                MC Enterprise Consulting
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Hauptnavigation">
            <ul className="flex items-center gap-8">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-slate-200 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
                  >
                    {l.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#kontakt"
              id="header-cta"
              className="btn-cta text-white font-semibold text-sm px-5 py-2.5 rounded-lg inline-flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12 19.79 19.79 0 0 1 1.04 3.38A2 2 0 0 1 3 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Kostenlose Beratung
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0f2644] border-t border-white/10 shadow-2xl">
          <nav className="px-4 py-6 flex flex-col gap-4" role="navigation" aria-label="Mobile Navigation">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate-200 hover:text-white font-medium text-base py-2 border-b border-white/10"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="btn-cta text-white font-semibold px-5 py-3 rounded-lg text-center mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Jetzt kostenlose Potenzialanalyse sichern →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
