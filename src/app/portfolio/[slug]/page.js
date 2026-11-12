import PageHero from "@/components/common/PageHero";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/portfolio";
import PixelmindPlaceholder from "@/components/common/PixelmindPlaceholder";
import DetailSections from "@/components/details/DetailSections";
import CTA from "@/components/common/CTA";

export function generateStaticParams() {
  return projects.map((x) => ({ slug: x.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.description } : {};
}

export default async function Project({ params }) {
  const { slug } = await params;
  const index = projects.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];
  const related = projects.filter((x) => x.slug !== p.slug).slice(0, 2);

  const process = [
    {
      title: "Understand",
      text: "Map the audience, business context and friction points that shape the experience.",
    },
    {
      title: "Shape",
      text: "Translate the opportunity into product priorities, user journeys and a clear concept.",
    },
    {
      title: "Create",
      text: "Bring the experience to life through interface design and a considered technical approach.",
    },
    {
      title: "Validate",
      text: "Review key journeys, test assumptions and identify the next iteration.",
    },
  ];

  const sections = [
    {
      title: "The context",
      text: p.challenge,
      items: [
        "Understand user expectations",
        "Identify workflow friction",
        "Clarify the desired experience",
      ],
    },
    {
      title: "The concept",
      text: p.solution,
      items: [
        "Connected user journeys",
        "Purposeful interface patterns",
        "A foundation for future enhancements",
      ],
    },
    {
      title: "Experience highlights",
      text: "The concept focuses on clarity, consistency and useful functionality across the most important product touchpoints.",
      items: p.highlights,
    },
    {
      title: "Engineering considerations",
      text: "The proposed stack and architecture are illustrative starting points. Final choices would depend on requirements, security, scale and integrations.",
      items: p.stack,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={`Portfolio / ${p.category} / ${p.type}`}
        title={p.title}
        highlight=" — a product concept."
        description={p.description}
        primaryLabel="Discuss a similar project"
        primaryHref="/contact"
        secondaryLabel="All projects"
        secondaryHref="/portfolio"
        panelTitle="Project overview"
        panelSubtitle="Concept focus areas"
        items={[
          `Category · ${p.category}`,
          `Engagement · ${p.type}`,
          `Focus · ${p.stack.slice(0, 2).join(" + ")}`,
        ]}
        panelItems={p.stack.slice(0, 3)}
        metrics={[
          ["01", "Discover"],
          ["02", "Create"],
          ["03", "Validate"],
        ]}
      />

      {/* Hero image + metrics strip */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-teal-100 bg-white p-3 shadow-xl shadow-teal-500/10">
            {p.image ? (
              <img
                src={p.image}
                alt={`${p.title} — concept preview`}
                className="max-h-[520px] w-full rounded-[1.5rem] object-cover"
              />
            ) : (
              <PixelmindPlaceholder
                label={`${p.title} — concept preview`}
                className="min-h-[300px] rounded-[1.5rem] sm:min-h-[480px]"
              />
            )}
          </div>

          {p.metrics?.length > 0 && (
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {p.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-teal-100 bg-white p-6 text-center shadow-lg shadow-slate-900/5 transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-500/10"
                >
                  <p className="text-3xl font-bold text-teal-500">{m.value}</p>
                  <p className="mt-2 text-sm text-slate-500">{m.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Challenge / Concept */}
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg shadow-slate-900/5">
              <p className="text-xs font-bold uppercase tracking-widest text-teal-600">
                01 / The challenge
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                What needed to improve?
              </h2>
              <p className="mt-4 leading-8 text-slate-600">{p.challenge}</p>
            </article>
            <article className="rounded-3xl border border-slate-800 bg-slate-950 p-8 text-white shadow-lg shadow-teal-500/10">
              <p className="text-xs font-bold uppercase tracking-widest text-teal-300">
                02 / The concept
              </p>
              <h2 className="mt-3 text-2xl font-bold">
                A considered direction.
              </h2>
              <p className="mt-4 leading-8 text-white/70">{p.solution}</p>
            </article>
          </div>

          {/* Key highlights */}
          {p.highlights?.length > 0 && (
            <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-900/5">
              <p className="text-xs font-bold uppercase tracking-widest text-teal-600">
                03 / Key highlights
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                What the concept delivers.
              </h2>
              <ul className="mt-6 grid gap-4 md:grid-cols-3">
                {p.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 rounded-2xl border border-teal-100 bg-teal-50 p-5 text-sm font-medium text-slate-800 shadow-sm"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-teal-500"
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <DetailSections
        eyebrow="Inside the concept"
        title="From a business challenge to a considered experience."
        intro="Explore the thinking, experience priorities and delivery considerations behind this demonstration project."
        sections={sections}
        process={process}
        technologies={p.stack}
        related={related
          .map((x) => ({
            title: x.title,
            text: x.description,
            href: `/portfolio/${x.slug}`,
          }))
          .concat([
            {
              title: "Explore our services",
              text: "See the capabilities that support product delivery.",
              href: "/services",
            },
          ])}
      />

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 text-sm leading-7 text-amber-950 shadow-sm">
            <strong>Case study note:</strong> This is a demonstration concept
            intended to illustrate possible product thinking. It does not claim
            a verified client engagement, deployment, performance metric or
            business result.
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {p.stack.map((x) => (
              <span
                key={x}
                className="rounded-full border border-teal-100 bg-teal-50 px-4 py-2 text-xs font-bold text-teal-900 shadow-sm"
              >
                <CheckCircle2 className="mr-1 inline text-teal-500" size={14} />
                {x}
              </span>
            ))}
          </div>

          {/* Next project */}
          {next && next.slug !== p.slug && (
            <Link
              href={`/portfolio/${next.slug}`}
              className="group mt-12 flex items-center justify-between gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-900/5 transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-500/10"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-teal-600">
                  Next project
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-950 sm:text-2xl">
                  {next.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{next.category}</p>
              </div>
              <ArrowRight
                className="shrink-0 text-teal-500 transition group-hover:translate-x-1"
                size={28}
              />
            </Link>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
