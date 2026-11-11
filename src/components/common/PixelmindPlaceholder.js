import { Sparkles } from "lucide-react";
export default function PixelmindPlaceholder({
  label = "Digital experience",
  className = "",
}) {
  return (
    <div
      className={`relative isolate flex min-h-48 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-sky-900 to-sky-600 p-8 text-white ${className}`}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #5EEAD4 0, transparent 25%), linear-gradient(135deg, transparent 45%, rgba(255,255,255,.15) 46%, transparent 47%)",
          backgroundSize: "auto,34px 34px",
        }}
      />
      <div className="relative text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
          <Sparkles size={22} />
        </div>
        <p className="text-xs font-bold tracking-[.28em]">PIXELMIND</p>
        <p className="mt-2 text-sm text-white/70">{label}</p>
      </div>
    </div>
  );
}
