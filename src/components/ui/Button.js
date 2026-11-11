import Link from "next/link";
export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const styles =
    variant === "secondary"
      ? "border border-slate-900/15 bg-white text-slate-950 hover:border-sky-700 hover:text-sky-700"
      : variant === "light"
        ? "bg-white text-slate-950 hover:bg-sky-50"
        : "bg-teal-500 text-white shadow-teal hover:bg-sky-900";
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/25 ${styles} ${className}`;
  return href ? (
    <Link href={href} className={cls} {...props}>
      {children}
    </Link>
  ) : (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
