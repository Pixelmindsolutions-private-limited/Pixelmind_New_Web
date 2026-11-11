"use client";
import { useEffect, useMemo, useState } from "react";
import { Search, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { posts } from "@/data/blogs";
const entries = [
  { title: "About Pixelmindsolutions", href: "/about", type: "Company" },
  { title: "Contact", href: "/contact", type: "Page" },
  { title: "Book a consultation", href: "/book-appointment", type: "Page" },
  {
    ...{ title: "Project estimator", href: "/project-estimator", type: "Tool" },
  },
  ...services.map((x) => ({
    title: x.title,
    href: `/services/${x.slug}`,
    type: "Service",
  })),
  ...industries.map((x) => ({
    title: x.title,
    href: `/industries/${x.slug}`,
    type: "Industry",
  })),
  ...posts.map((x) => ({
    title: x.title,
    href: `/blog/${x.slug}`,
    type: "Article",
  })),
];
export default function GlobalSearch({ open, onClose }) {
  const [q, setQ] = useState("");
  const results = useMemo(
    () =>
      q.trim()
        ? entries
            .filter((x) => x.title.toLowerCase().includes(q.toLowerCase()))
            .slice(0, 8)
        : entries.slice(0, 5),
    [q],
  );
  useEffect(() => {
    if (!open) return;
    const fn = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-slate-950/60 px-4 pt-[12vh] backdrop-blur-sm"
      onMouseDown={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search website"
        className="w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-slate-100 px-5">
          <Search className="text-sky-700" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search services, pages, insights..."
            className="h-16 flex-1 bg-transparent text-base outline-none"
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="rounded-xl p-2 hover:bg-slate-100"
          >
            <X />
          </button>
        </div>
        <div className="p-3">
          <p className="px-3 py-2 text-xs font-bold uppercase tracking-widest text-slate-400">
            {q ? "Search results" : "Quick links"}
          </p>
          {results.length ? (
            results.map((x) => (
              <Link
                onClick={onClose}
                key={x.href + x.title}
                href={x.href}
                className="flex items-center justify-between rounded-2xl px-3 py-3 hover:bg-sky-50"
              >
                <span>
                  <span className="block font-semibold text-slate-950">
                    {x.title}
                  </span>
                  <span className="text-xs text-slate-500">{x.type}</span>
                </span>
                <ArrowUpRight size={17} className="text-sky-700" />
              </Link>
            ))
          ) : (
            <p className="p-5 text-sm text-slate-500">
              No matching pages found. Try another keyword.
            </p>
          )}
        </div>
        <div className="border-t border-slate-100 px-5 py-3 text-xs text-slate-400">
          Press Esc to close
        </div>
      </div>
    </div>
  );
}
