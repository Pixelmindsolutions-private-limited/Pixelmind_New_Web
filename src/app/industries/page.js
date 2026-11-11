import PageHero from "@/components/common/PageHero";
import Link from "next/link";
import SectionHeading from "@/components/common/SectionHeading";
import CTA from "@/components/common/CTA";
import { industries } from "@/data/industries";
export const metadata = {
  title: "Industries",
  description:
    "Explore digital experiences and software solutions for different industries.",
};
export default function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries · Domain understanding"
        title="Technology that understands"
        highlight="your context."
        description="Every sector has its own users, processes and constraints. We start there, then shape digital experiences around the realities of your business."
        primaryLabel="Discuss your industry"
        primaryHref="/contact"
        secondaryLabel="Explore solutions"
        secondaryHref="/solutions"
        panelTitle="Industry lens"
        panelSubtitle="Context shapes the solution"
        items={[
          "Understand sector needs",
          "Connect critical workflows",
          "Build for changing demands",
        ]}
      />
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
          {industries.map((x) => (
            <Link
              key={x.slug}
              href={`/industries/${x.slug}`}
              className="rounded-3xl border border-slate-200 p-7 hover:border-cyan-300 hover:shadow-soft"
            >
              <h2 className="text-xl font-bold text-slate-950">{x.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                {x.description}
              </p>
              <span className="mt-6 inline-block text-sm font-bold text-sky-700">
                Explore industry →
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
