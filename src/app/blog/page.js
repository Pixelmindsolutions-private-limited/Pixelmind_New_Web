"use client";
import PageHero from "@/components/common/PageHero";
import { useMemo, useState } from "react";
import Link from "next/link";
import { posts } from "@/data/blogs";
import SectionHeading from "@/components/common/SectionHeading";
import CTA from "@/components/common/CTA";
export default function Blog() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const cats = ["All", ...new Set(posts.map((x) => x.category))];
  const visible = useMemo(
    () =>
      posts.filter(
        (x) =>
          (cat === "All" || x.category === cat) &&
          (x.title + x.excerpt).toLowerCase().includes(q.toLowerCase()),
      ),
    [q, cat],
  );
  return (
    <>
      <PageHero
        eyebrow="Resources & insights · Pixelmind journal"
        title="Ideas for building"
        highlight="what comes next."
        description="Perspectives on product thinking, design, engineering and the technology decisions shaping better digital experiences."
        primaryLabel="Discuss an idea"
        primaryHref="/contact"
        secondaryLabel="Explore services"
        secondaryHref="/services"
        panelTitle="Engineering journal"
        panelSubtitle="Notes from the build process"
        items={[
          "Product thinking",
          "Engineering insights",
          "Practical technology",
        ]}
      >
        <div className="flex max-w-xl flex-col gap-3 sm:flex-row">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search articles..."
            className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/[.08] px-5 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-cyan-300"
          />
          <select
            value={cat}
            onChange={(e) => setCat(e.target.value)}
            className="rounded-full border border-white/15 bg-[#0b2b30] px-5 py-3 text-sm text-white"
          >
            {cats.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </div>
      </PageHero>
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="rounded-3xl border border-slate-200 p-6 hover:shadow-soft"
            >
              <div className="flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-950 to-sky-600 text-xs font-bold tracking-[.25em] text-white">
                PIXELMIND / JOURNAL
              </div>
              <p className="mt-5 text-xs font-bold uppercase tracking-widest text-sky-700">
                {p.category} · {p.readingTime}
              </p>
              <h2 className="mt-3 text-xl font-bold text-slate-950">
                {p.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                {p.excerpt}
              </p>
              <p className="mt-5 text-xs text-slate-400">
                {p.author} · {p.date}
              </p>
            </Link>
          ))}
        </div>
        {visible.length === 0 && (
          <p className="text-center text-slate-500">
            No articles match your search.
          </p>
        )}
      </section>
      <CTA />
    </>
  );
}
