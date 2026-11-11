import PageHero from "@/components/common/PageHero";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { industries } from "@/data/industries";
import DetailSections from "@/components/details/DetailSections";
import CTA from "@/components/common/CTA";
export function generateStaticParams() {
  return industries.map((x) => ({ slug: x.slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const x = industries.find((y) => y.slug === slug);
  return x ? { title: x.title, description: x.description } : {};
}
export default async function IndustryDetail({ params }) {
  const { slug } = await params;
  const x = industries.find((y) => y.slug === slug);
  if (!x) notFound();
  const sections = [
    {
      title: "Understand the operating environment",
      text: `Every ${x.title.toLowerCase()} organization has its own users, regulations, workflows and service expectations. We begin by understanding the context before recommending technology.`,
      items: x.challenges,
    },
    {
      title: "Improve important journeys",
      text: "Identify high-friction moments across customer, employee and partner experiences, then prioritize improvements that can be delivered and measured.",
      items: x.opportunities,
    },
    {
      title: "Connect the tools and teams",
      text: "Bring the right information into the right workflow, with clear roles and integration boundaries.",
      items: x.solutions,
    },
    {
      title: "Build for trust and continuity",
      text: "Plan for accessibility, security, maintainability and operational support from the earliest stages.",
      items: [
        "Role-aware access and permissions",
        "Reliable data handling",
        "Maintainable technical foundations",
      ],
    },
    {
      title: "Measure and keep improving",
      text: "Use feedback and operational signals to guide future enhancements instead of treating launch as the finish line.",
      items: [
        "Define meaningful success measures",
        "Review adoption and user feedback",
        "Prioritize iterative improvements",
      ],
    },
  ];
  const process = [
    {
      title: "Listen",
      text: "Understand your sector, audience, constraints and business priorities.",
    },
    {
      title: "Prioritize",
      text: "Identify the highest-value journeys, workflows and integration needs.",
    },
    {
      title: "Deliver",
      text: "Design and build a practical first release with clear milestones.",
    },
    {
      title: "Evolve",
      text: "Support adoption, learn from usage and plan the next improvements.",
    },
  ];
  return (
    <>
      <PageHero
        eyebrow={`Industry expertise / ${x.title}`}
        title={`Digital experiences for`}
        highlight={`the realities of ${x.title.toLowerCase()}.`}
        description={`${x.description} We connect user needs, operational priorities and thoughtful technology to create experiences that are useful in the real world.`}
        primaryLabel="Discuss your industry needs"
        primaryHref="/contact"
        secondaryLabel="All industries"
        secondaryHref="/industries"
        panelTitle={x.title}
        panelSubtitle="Industry delivery lens"
        items={[
          "User-centered thinking",
          "Connected operations",
          "Scalable delivery",
        ]}
        panelItems={x.opportunities?.slice(0, 3)}
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Challenges", x.challenges],
              ["Opportunities", x.opportunities],
              ["Solution directions", x.solutions],
            ].map(([title, items]) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 p-7"
              >
                <h2 className="text-lg font-bold text-slate-950">{title}</h2>
                <ul className="mt-5 space-y-3">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-6 text-slate-600"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-sky-600"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <DetailSections
        eyebrow="Industry approach"
        title="Technology shaped by your operating reality."
        intro={`A practical approach to ${x.title.toLowerCase()} digital initiatives, from understanding the context through to delivery and continuous improvement.`}
        sections={sections}
        process={process}
        technologies={[
          "Web platforms",
          "Mobile applications",
          "Workflow systems",
          "API integrations",
          "Cloud infrastructure",
        ]}
        related={[
          {
            title: "Explore solutions",
            text: "Discover platforms for connected business workflows.",
            href: "/solutions",
          },
          {
            title: "Explore services",
            text: "See the capabilities available across design and engineering.",
            href: "/services",
          },
          {
            title: "Portfolio concepts",
            text: "Browse product and platform demonstration concepts.",
            href: "/portfolio",
          },
        ]}
      />
      <CTA />
    </>
  );
}
