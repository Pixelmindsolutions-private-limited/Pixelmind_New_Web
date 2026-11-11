"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
export default function FAQ({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white">
      {items.map((item, i) => (
        <div key={item.q} className="px-5 sm:px-7">
          <button
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
            className="flex w-full items-center justify-between gap-5 py-5 text-left font-semibold text-slate-950"
          >
            <span>{item.q}</span>
            <ChevronDown
              className={`shrink-0 text-sky-700 transition ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i && (
            <p className="max-w-3xl pb-6 pr-8 text-sm leading-7 text-slate-600">
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
