export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  light = false,
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow && (
        <p
          className={`mb-4 text-xs font-bold uppercase tracking-[.22em] ${light ? "text-cyan-300" : "text-sky-700"}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-slate-950"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-8 sm:text-lg ${light ? "text-white/65" : "text-slate-600"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
