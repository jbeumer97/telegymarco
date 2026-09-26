export default function SectionHeading({ id, eyebrow, title, intro, align = "center", tone = "light" }) {
  const dark = tone === "dark";
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p
        className={`reveal text-sm font-bold uppercase tracking-[0.18em] ${dark ? "text-signal-400" : "text-electric-600"}`}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`reveal mt-3 text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] ${
          dark ? "text-white" : "text-navy-900"
        }`}
        style={{ "--reveal-delay": "80ms" }}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`reveal mt-5 text-lg leading-relaxed ${dark ? "text-navy-200" : "text-navy-600"}`}
          style={{ "--reveal-delay": "160ms" }}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
