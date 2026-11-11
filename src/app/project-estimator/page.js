"use client";
import PageHero from "@/components/common/PageHero";
import { useMemo, useState } from "react";
import Link from "next/link";
import SectionHeading from "@/components/common/SectionHeading";
const options = {
  type: [
    "Website",
    "Web application",
    "Mobile app",
    "E-commerce",
    "Enterprise software",
  ],
  platform: ["Web", "iOS + Android", "Cross-platform", "Not sure"],
  complexity: ["Standard", "Advanced", "Custom"],
  timeline: ["Flexible", "1–3 months", "3–6 months", "Time-sensitive"],
};
export default function Estimator() {
  const [v, setV] = useState({
    type: "Website",
    pages: 8,
    features: ["Contact forms"],
    platform: "Web",
    complexity: "Standard",
    integrations: 0,
    timeline: "Flexible",
  });
  const featureList = [
    "User accounts",
    "Admin interface",
    "Payments",
    "Booking or scheduling",
    "Reporting",
    "Third-party integrations",
  ];
  const estimate = useMemo(() => {
    let base = {
      Website: 2500,
      "Web application": 7000,
      "Mobile app": 8000,
      "E-commerce": 5000,
      "Enterprise software": 12000,
    }[v.type];
    base +=
      Math.max(0, v.pages - 5) * 180 +
      v.features.length * 650 +
      v.integrations * 500 +
      { Standard: 0, Advanced: 2500, Custom: 6000 }[v.complexity];
    return {
      low: Math.round((base * 0.8) / 100) * 100,
      high: Math.round((base * 1.35) / 100) * 100,
    };
  }, [v]);
  const set = (k, x) => setV((d) => ({ ...d, [k]: x }));
  return (
    <>
      <PageHero
        eyebrow="Project estimator · Shape your brief"
        title="Make the next step"
        highlight="clearer."
        description="Explore an indicative project range by adjusting a few assumptions. Use it to shape an initial brief before speaking with our team."
        primaryLabel="Request a tailored quote"
        primaryHref="/contact"
        secondaryLabel="Book a consultation"
        secondaryHref="/book-appointment"
        panelTitle="Project planning"
        panelSubtitle="Scope before estimates"
        items={[
          "Project type & platform",
          "Features & integrations",
          "Complexity & timeline",
        ]}
      />
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1.2fr_.8fr]">
          <div className="rounded-3xl border border-slate-200 p-6 sm:p-9">
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                ["type", "Project type"],
                ["platform", "Platform"],
                ["complexity", "Design & build complexity"],
                ["timeline", "Preferred timeline"],
              ].map(([k, label]) => (
                <label key={k} className="text-sm font-semibold text-slate-950">
                  {label}
                  <select
                    value={v[k]}
                    onChange={(e) => set(k, e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3"
                  >
                    {options[k].map((x) => (
                      <option key={x}>{x}</option>
                    ))}
                  </select>
                </label>
              ))}
            </div>
            <label className="mt-7 block text-sm font-semibold text-slate-950">
              Approximate number of pages / screens: {v.pages}
              <input
                type="range"
                min="1"
                max="40"
                value={v.pages}
                onChange={(e) => set("pages", Number(e.target.value))}
                className="mt-4 w-full accent-sky-700"
              />
            </label>
            <div className="mt-7">
              <p className="text-sm font-semibold text-slate-950">Features</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {featureList.map((x) => (
                  <label
                    key={x}
                    className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 text-sm text-slate-600"
                  >
                    <input
                      type="checkbox"
                      checked={v.features.includes(x)}
                      onChange={(e) =>
                        set(
                          "features",
                          e.target.checked
                            ? [...v.features, x]
                            : v.features.filter((y) => y !== x),
                        )
                      }
                      className="h-4 w-4 accent-sky-700"
                    />
                    {x}
                  </label>
                ))}
              </div>
            </div>
            <label className="mt-7 block text-sm font-semibold text-slate-950">
              Number of external integrations: {v.integrations}
              <input
                type="range"
                min="0"
                max="10"
                value={v.integrations}
                onChange={(e) => set("integrations", Number(e.target.value))}
                className="mt-4 w-full accent-sky-700"
              />
            </label>
          </div>
          <aside className="h-fit rounded-3xl bg-slate-950 p-8 text-white">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              Indicative estimate
            </p>
            <p className="mt-5 text-sm text-white/60">
              Illustrative project range
            </p>
            <p className="mt-2 text-4xl font-bold">
              US${estimate.low.toLocaleString()} –{" "}
              {estimate.high.toLocaleString()}
            </p>
            <p className="mt-4 text-xs leading-6 text-white/55">
              Illustrative USD calculation only. Actual pricing depends on
              discovery, scope, team, location, delivery model and assumptions.
              Not official Pixelmindsolutions pricing.
            </p>
            <div className="mt-7 border-t border-white/15 pt-6">
              <p className="text-sm font-semibold">Your brief</p>
              <ul className="mt-3 space-y-2 text-sm text-white/65">
                <li>
                  {v.type} · {v.platform}
                </li>
                <li>{v.pages} pages / screens</li>
                <li>{v.features.length} selected features</li>
                <li>{v.integrations} integrations</li>
                <li>{v.complexity} complexity</li>
              </ul>
            </div>
            <Link
              href="/contact"
              className="mt-8 block rounded-full bg-white px-5 py-3 text-center text-sm font-bold text-slate-950 hover:bg-sky-50"
            >
              Request a tailored quote →
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
