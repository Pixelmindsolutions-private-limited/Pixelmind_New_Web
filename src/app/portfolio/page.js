"use client";
import PageHero from "@/components/common/PageHero";
import { useMemo, useState } from "react";
import Link from "next/link";
import { projects } from "@/data/portfolio";
import SectionHeading from "@/components/common/SectionHeading";
import PixelmindPlaceholder from "@/components/common/PixelmindPlaceholder";
import CTA from "@/components/common/CTA";
export default function Portfolio() {
  const [category, setCategory] = useState("All");
  const cats = ["All", ...new Set(projects.map((x) => x.category))];
  const visible = useMemo(
    () =>
      category === "All"
        ? projects
        : projects.filter((x) => x.category === category),
    [category],
  );
  return (
    <>
      <PageHero
        eyebrow="Portfolio · Selected concepts"
        title="A look at ideas"
        highlight="in motion."
        description="Explore product and platform concepts that demonstrate how thoughtful design and engineering can turn business needs into useful digital experiences."
        primaryLabel="Discuss a similar project"
        primaryHref="/contact"
        secondaryLabel="Explore our services"
        secondaryHref="/services"
        panelTitle="Project showcase"
        panelSubtitle="From brief to experience"
        items={[
          "Product experience",
          "Business platforms",
          "Digital transformation",
        ]}
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-8 flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold ${category === c ? "bg-sky-700 text-white" : "bg-sky-50 text-sky-900"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <Link key={p.slug} href={`/portfolio/${p.slug}`}>
                <PixelmindPlaceholder
                  label={p.category}
                  className="min-h-[230px]"
                />
                <p className="mt-5 text-[10px] font-bold uppercase tracking-widest text-sky-700">
                  {p.type}
                </p>
                <h2 className="mt-2 text-xl font-bold text-slate-950">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-500">
                  {p.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
