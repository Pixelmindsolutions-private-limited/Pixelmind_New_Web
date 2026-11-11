import PageHero from "@/components/common/PageHero";
import Link from "next/link";
import { ArrowUpRight, Boxes } from "lucide-react";
import { solutions } from "@/data/solutions";
import SectionHeading from "@/components/common/SectionHeading";
import CTA from "@/components/common/CTA";
export const metadata = {
  title: "Solutions",
  description: "Explore tailored business software and workflow solutions.",
};
export default function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="Solutions · Connected business platforms"
        title="Connect the systems"
        highlight="behind your business."
        description="Purpose-built business platforms that bring people, processes and information together. Explore capabilities designed around the way your teams work."
        primaryLabel="Find the right solution"
        primaryHref="/contact"
        secondaryLabel="Explore services"
        secondaryHref="/services"
        panelTitle="Solution framework"
        panelSubtitle="One connected operating view"
        items={[
          "Business operations",
          "Customer experience",
          "Workflow automation",
        ]}
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
          {solutions.map((x, i) => (
            <Link
              key={x.slug}
              href={`/solutions/${x.slug}`}
              className="group rounded-[1.75rem] border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-slate-950/5"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                  <Boxes size={22} />
                </span>
                <span className="text-xs font-bold tracking-widest text-slate-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="mt-7 text-xl font-bold text-slate-950">
                {x.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                {x.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {x.features.slice(0, 2).map((f) => (
                  <span
                    key={f}
                    className="rounded-full bg-slate-50 px-3 py-1.5 text-[11px] font-semibold text-slate-600"
                  >
                    {f}
                  </span>
                ))}
              </div>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-sky-700">
                Explore solution{" "}
                <ArrowUpRight
                  size={16}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
