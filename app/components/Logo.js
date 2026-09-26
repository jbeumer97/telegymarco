import Link from "next/link";
import { site } from "../lib/site";

// Bildmarke: drei aufsteigende Signalbalken – der höchste in Signal-Orange.
export function LogoMark({ className = "size-9" }) {
  return (
    <svg viewBox="0 0 36 36" className={className} aria-hidden="true" focusable="false">
      <rect width="36" height="36" rx="9" fill="#2f6bff" />
      <rect x="9" y="19" width="4.5" height="8" rx="1.5" fill="#fff" />
      <rect x="15.75" y="14" width="4.5" height="13" rx="1.5" fill="#fff" />
      <rect x="22.5" y="9" width="4.5" height="18" rx="1.5" fill="#ff7a1a" />
    </svg>
  );
}

export default function Logo({ tone = "light", href = "#top" }) {
  const light = tone === "light";
  return (
    <Link href={href} className="group flex items-center gap-3" aria-label={`${site.name} – zur Startseite`}>
      <LogoMark className="size-9 shrink-0 transition-transform duration-300 group-hover:-rotate-6" />
      <span className="leading-none">
        <span className={`block text-xl font-extrabold tracking-tight ${light ? "text-white" : "text-navy-900"}`}>
          {site.name}
        </span>
        <span
          className={`mt-1 hidden text-[11px] font-semibold sm:block tracking-wide ${light ? "text-navy-300" : "text-navy-500"}`}
        >
          {site.legalName}
        </span>
      </span>
    </Link>
  );
}
