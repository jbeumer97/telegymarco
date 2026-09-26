"use client";
import { useEffect, useRef, useState } from "react";

const format = (n, decimals) =>
  n.toLocaleString("de-DE", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

// Zählt eine Kennzahl hoch, sobald sie ins Bild scrollt. Server-HTML enthält
// bereits den Endwert (SEO, kein JS, reduzierte Bewegung).
export default function CountUp({ value, decimals = 0, prefix = "", suffix = "", duration = 1400 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Noch nicht (ausreichend) sichtbar: auf 0 setzen, damit kein Sprung sichtbar wird.
        if (entry.intersectionRatio < 0.6) {
          setDisplay(0);
          return;
        }
        observer.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 4);
          setDisplay(value * eased);
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: [0, 0.6] },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {format(display, decimals)}
      {suffix}
    </span>
  );
}
