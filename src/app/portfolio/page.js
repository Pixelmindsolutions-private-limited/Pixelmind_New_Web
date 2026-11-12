"use client";
import PageHero from "@/components/common/PageHero";
import { useMemo, useState } from "react";
import Link from "next/link";
import { projects } from "@/data/portfolio";
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

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Section heading */}
          <div className="mb-10 max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-widest text-teal-600">
              Selected Work
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              What we <span className="italic text-teal-500">built.</span>
            </h2>
            <p className="mt-3 text-slate-500">
              Scope, stack, and outcomes — project by project.
            </p>
          </div>

          {/* Category filter */}
          <div className="mb-12 flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                  category === c
                    ? "border-teal-500 bg-teal-500 text-white shadow-md shadow-teal-500/30"
                    : "border-teal-100 bg-teal-50 text-teal-900 hover:border-teal-300 hover:bg-teal-100"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Case-study cards */}
          <div className="space-y-10 sm:space-y-14">
            {visible.map((p, i) => (
              <article
                key={p.slug}
                className={`grid items-center gap-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5 transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-500/10 sm:p-8 lg:grid-cols-2 lg:gap-14 ${
                  i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div>
                  <Link
                    href={`/portfolio/${p.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-teal-100 bg-teal-50 shadow-md shadow-slate-900/5"
                  >
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <PixelmindPlaceholder
                        label={p.category}
                        className="min-h-[300px] transition duration-500 group-hover:scale-105"
                      />
                    )}
                  </Link>
                </div>

                {/* Content */}
                <div>
                  <span className="text-5xl font-bold leading-none text-teal-100">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-4 text-[11px] font-bold uppercase tracking-widest text-teal-600">
                    {p.category}
                    {p.type ? ` · ${p.type}` : ""}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
                    <Link
                      href={`/portfolio/${p.slug}`}
                      className="transition hover:text-teal-500"
                    >
                      {p.title}
                    </Link>
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {p.description}
                  </p>

                  {/* Highlight bullets */}
                  {p.highlights?.length > 0 && (
                    <ul className="mt-5 space-y-2">
                      {p.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Metrics */}
                  {p.metrics?.length > 0 && (
                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {p.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-2xl border border-teal-100 bg-teal-50/60 p-4 shadow-sm"
                        >
                          <p className="text-xl font-bold text-teal-600">
                            {m.value}
                          </p>
                          <p className="mt-1 text-xs leading-5 text-slate-500">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <Link
                    href={`/portfolio/${p.slug}`}
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-teal-500/30 transition hover:bg-teal-600"
                  >
                    Read case study <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
