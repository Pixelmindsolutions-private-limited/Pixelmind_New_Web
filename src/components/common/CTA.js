import Button from "@/components/ui/Button";
import { ArrowUpRight, Sparkles } from "lucide-react";
export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-sky-700 py-20 text-white">
      <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border border-white/10" />
      <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full border border-white/10" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[.22em] text-cyan-300">
              <Sparkles size={15} /> Let&apos;s create what&apos;s next
            </p>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Have an Idea? Let&apos;s Build Something Powerful.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/65">
              Tell us what you&apos;re working toward. We&apos;ll help you
              explore a practical path from idea to digital experience.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/contact" variant="light">
              Start a Project <ArrowUpRight size={16} />
            </Button>
            <Button href="/book-appointment" variant="secondary">
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
