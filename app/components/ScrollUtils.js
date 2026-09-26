"use client";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import { site } from "../lib/site";
import { trackEvent } from "../lib/track";

export default function ScrollUtils() {
  const [pastHero, setPastHero] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    // Scroll-Reveal
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            revealObserver.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

    // Mobile CTA-Leiste: erst nach dem Hero einblenden, beim Formular wieder ausblenden.
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.target.id === "top") setPastHero(!e.isIntersecting);
        if (e.target.id === "analyse") setFormVisible(e.isIntersecting);
      });
    });
    ["top", "analyse"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    // CTA-Klicks für GTM/Google Ads auswerten (Elemente mit data-cta).
    const onClick = (e) => {
      const cta = e.target.closest?.("[data-cta]");
      if (cta) trackEvent("cta_click", { cta_location: cta.dataset.cta });
    };
    document.addEventListener("click", onClick);

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
      document.removeEventListener("click", onClick);
    };
  }, []);

  const showBar = pastHero && !formVisible;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-navy-100 bg-white/95 p-3 shadow-[0_-12px_32px_-12px_rgba(11,28,55,0.25)] backdrop-blur transition-transform duration-500 ease-out md:hidden ${
        showBar ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!showBar}
      inert={!showBar}
    >
      <div className="flex gap-3">
        <a
          href="#analyse"
          className="btn-signal arrow-nudge flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3.5 font-bold"
          data-cta="mobile-bar"
        >
          Kostenlose Analyse starten
          <Icon name="arrow-right" className="size-5" strokeWidth={2.5} />
        </a>
        <a
          href={site.phone.href}
          className="grid size-[52px] shrink-0 place-items-center rounded-xl bg-navy-900 text-white"
          aria-label={`Anrufen: ${site.phone.display}`}
          data-cta="mobile-bar-phone"
        >
          <Icon name="phone" className="size-5" />
        </a>
      </div>
    </div>
  );
}
