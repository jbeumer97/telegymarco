"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import { navLinks, site } from "../lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e) => e.key === "Escape" && setMobileOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        solid
          ? "bg-navy-950/90 shadow-[0_1px_0_rgba(255,255,255,0.06),0_12px_32px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 transition-[height] duration-300 sm:px-6 lg:px-8 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Logo />

        <nav aria-label="Hauptnavigation" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative py-2 text-sm font-medium text-navy-200 transition-colors hover:text-white"
                >
                  {l.label}
                  <span
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-signal-500 transition-transform duration-300 group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={site.phone.href}
            className="hidden items-center gap-2 text-sm font-semibold text-navy-100 transition-colors hover:text-white lg:inline-flex"
            data-cta="header-phone"
          >
            <Icon name="phone" className="size-4 text-signal-400" />
            {site.phone.display}
          </a>
          <a
            href="#analyse"
            className="btn-signal arrow-nudge inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold sm:px-5"
            data-cta="header"
          >
            <span className="sm:hidden">Analyse</span>
            <span className="hidden sm:inline">Kostenlose Analyse</span>
            <Icon name="arrow-right" className="size-4" strokeWidth={2.5} />
          </a>
          <button
            type="button"
            className="-mr-2 rounded-lg p-2 text-white focus-visible:outline-2 focus-visible:outline-signal-400 md:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          >
            <Icon name={mobileOpen ? "x" : "menu"} className="size-6" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile Navigation"
          className="motion-safe:animate-fade-up h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-navy-950 px-4 pb-10 pt-4 md:hidden"
        >
          <ul className="divide-y divide-white/10">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-4 text-lg font-semibold text-white"
                >
                  {l.label}
                  <Icon name="arrow-right" className="size-5 text-navy-400" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#analyse"
            onClick={() => setMobileOpen(false)}
            className="btn-signal mt-6 flex items-center justify-center gap-2 rounded-xl px-5 py-4 text-base font-bold"
            data-cta="mobile-menu"
          >
            Kostenlose Analyse starten
            <Icon name="arrow-right" className="size-5" strokeWidth={2.5} />
          </a>
          <a
            href={site.phone.href}
            className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-4 font-semibold text-white"
            data-cta="mobile-menu-phone"
          >
            <Icon name="phone" className="size-5 text-signal-400" />
            {site.phone.display}
          </a>
        </nav>
      )}
    </header>
  );
}
