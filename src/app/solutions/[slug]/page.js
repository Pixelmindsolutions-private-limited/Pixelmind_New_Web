import PageHero from "@/components/common/PageHero";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Boxes } from "lucide-react";
import { solutions } from "@/data/solutions";
import DetailSections from "@/components/details/DetailSections";
import CTA from "@/components/common/CTA";
export function generateStaticParams() {
  return solutions.map((x) => ({ slug: x.slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const x = solutions.find((y) => y.slug === slug);
  return x ? { title: x.title, description: x.description } : {};
}
export default async function SolutionDetail({ params }) {
  const { slug } = await params;
  const x = solutions.find((y) => y.slug === slug);
  if (!x) notFound();
  const sections = [
    {
      title: "A connected workspace",
      text: x.overview,
      items: [
        "A clear home for essential information",
        "Views shaped around user responsibilities",
        "Consistent navigation across the platform",
      ],
    },
    {
      title: "Purpose-built modules",
      text: "Start with the capabilities that matter most and expand the platform as your processes mature.",
      items: x.features,
    },
    {
      title: "Useful operational insight",
      text: "Give teams and decision-makers a clearer picture of activity, status and the work that needs attention.",
      items: [
        "At-a-glance status views",
        "Searchable records and activity",
        "Configurable reports and summaries",
      ],
    },
    {
      title: "Integration-ready foundation",
      text: "Plan how the solution exchanges information with the tools your organization already uses.",
      items: [
        "API-first integration planning",
        "Import and export workflows",
        "Secure access and role permissions",
      ],
    },
    {
      title: "Designed to adapt",
      text: "A modular approach helps the platform respond to changing teams, processes and business priorities.",
      items: [
        "Configurable workflows",
        "Extensible data structures",
        "Phased feature roadmap",
      ],
    },
    {
      title: "Adoption and support",
      text: "A successful rollout includes the people and processes around the software, not just the software itself.",
      items: [
        "User onboarding considerations",
        "Admin guidance and documentation",
        "Ongoing improvement planning",
      ],
    },
  ];
  const process = [
    {
      title: "Map the workflow",
      text: "Understand how work happens today, where friction appears and what should change.",
    },
    {
      title: "Define the platform",
      text: "Prioritize modules, user roles, data and integrations into a practical scope.",
    },
    {
      title: "Configure and build",
      text: "Design and implement the core experience, validating it with stakeholders.",
    },
    {
      title: "Roll out and improve",
      text: "Prepare users, launch in phases and evolve the platform using real feedback.",
    },
  ];
  const faq = [
    {
      q: `What does a ${x.title.toLowerCase()} platform include?`,
      a: `The platform can include ${x.features.join(", ").toLowerCase()}. The final module set depends on your workflows and priorities.`,
    },
    {
      q: "Can the solution be customized?",
      a: "Yes. The information architecture, workflows, roles, dashboards and integrations can be planned around your organization's requirements.",
    },
    {
      q: "Can it integrate with our existing software?",
      a: "Integration feasibility depends on the systems involved and the interfaces they expose. We assess those dependencies during discovery.",
    },
    {
      q: "Can we launch in phases?",
      a: "A phased rollout is often a practical way to prioritize core workflows, validate adoption and add further capabilities over time.",
    },
  ];
  return (
    <>
      <PageHero
        eyebrow="Solutions / Business platforms"
        title={x.title}
        highlight=" that works the way you do."
        description={`${x.description} ${x.overview}`}
        primaryLabel="Discuss this solution"
        primaryHref="/contact"
        secondaryLabel="All solutions"
        secondaryHref="/solutions"
        panelTitle="Solution framework"
        panelSubtitle="One connected view of your operations"
        items={[
          "Flexible modules",
          "Role-based workflows",
          "Integration-aware",
        ]}
        panelItems={x.features.slice(0, 3)}
      />
      <section className="py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-3 sm:px-8">
          {[
            ["Designed around", "Your workflows"],
            ["Built for", "Your teams"],
            ["Focused on", "Useful outcomes"],
          ].map(([a, b]) => (
            <div key={a} className="border-l-2 border-cyan-500 pl-5">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                {a}
              </p>
              <p className="mt-2 text-lg font-bold text-slate-950">{b}</p>
            </div>
          ))}
        </div>
      </section>
      <DetailSections
        eyebrow="Solution capabilities"
        title="The building blocks of a better workflow."
        intro={x.overview}
        sections={sections}
        process={process}
        technologies={x.technologies}
        faq={faq}
        related={[
          {
            title: "Related services",
            text: "Explore the design and engineering capabilities behind the platform.",
            href: "/services",
          },
          {
            title: "Industry expertise",
            text: "Discover how digital workflows can support your sector.",
            href: "/industries",
          },
          {
            title: "Portfolio concepts",
            text: "See examples of product experiences and platform concepts.",
            href: "/portfolio",
          },
        ]}
      />
      <CTA />
    </>
  );
}
