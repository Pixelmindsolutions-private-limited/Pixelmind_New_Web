import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Layers3,
  Workflow,
  ShieldCheck,
  Rocket,
  MessageCircle,
} from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const icons = [Layers3, Workflow, ShieldCheck, Rocket];
export default function DetailSections({
  eyebrow = "How we help",
  title = "Thoughtful strategy. Practical execution.",
  intro,
  sections = [],
  process = [],
  technologies = [],
  related = [],
  faq = [],
}) {
  return (
    <>
      {sections.length > 0 && (
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              description={intro}
            />
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {sections.map((s, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <article
                    key={s.title}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-[0_24px_65px_rgba(8,70,70,.09)]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-900">
                        <Icon size={21} />
                      </span>
                      <span className="text-xs font-extrabold tracking-[.2em] text-slate-300">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-7 text-xl font-bold tracking-tight text-[#09282d]">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {s.text}
                    </p>
                    {s.items?.length > 0 && (
                      <ul className="mt-5 space-y-2.5">
                        {s.items.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2.5 text-xs leading-5 text-slate-600"
                          >
                            <Check
                              size={15}
                              className="mt-0.5 shrink-0 text-sky-700"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="absolute -bottom-16 -right-16 h-36 w-36 rounded-full bg-sky-50 opacity-0 blur-2xl transition group-hover:opacity-100" />
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}
      {process.length > 0 && (
        <section className="bg-[#08262b] py-20 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <p className="text-[11px] font-extrabold uppercase tracking-[.22em] text-cyan-300">
                Our approach
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">
                A clear path from first conversation to launch.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/55">
                A collaborative process keeps priorities visible, decisions
                grounded and delivery moving forward.
              </p>
            </div>
            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((p, i) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-white/10 bg-white/[.045] p-6"
                >
                  <span className="text-xs font-extrabold tracking-[.2em] text-cyan-300">
                    PHASE {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {technologies.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="rounded-[2rem] border border-slate-900/10 bg-[#f3f8f7] p-8 sm:p-12">
              <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[.2em] text-sky-700">
                    Technology ecosystem
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#09282d]">
                    The right tools for the job.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Technology choices are guided by your product requirements,
                    team, integrations and long-term operating needs.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-900/10 bg-white px-4 py-2.5 text-xs font-semibold text-slate-950"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {faq.length > 0 && (
        <section className="py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[.2em] text-sky-700">
                FAQs
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#09282d]">
                Questions worth asking.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                A few helpful answers to get your planning started.
              </p>
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-sky-900"
              >
                Ask us a question <MessageCircle size={17} />
              </Link>
            </div>
            <div className="space-y-3">
              {faq.map((f, i) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-slate-200 bg-white p-6"
                  open={i === 0}
                >
                  <summary className="cursor-pointer list-none pr-6 text-sm font-bold text-[#09282d] marker:hidden">
                    {f.q}
                    <span className="float-right text-xl font-normal text-sky-700">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}
      {related.length > 0 && (
        <section className="bg-[#f3f8f7] py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[.2em] text-sky-700">
                  Keep exploring
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#09282d]">
                  Related capabilities
                </h2>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-sky-900"
              >
                Talk to our team <ArrowUpRight size={17} />
              </Link>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-cyan-300"
                >
                  <h3 className="font-bold text-[#09282d]">{r.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {r.text}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-sky-900">
                    Explore{" "}
                    <ArrowUpRight
                      size={15}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
