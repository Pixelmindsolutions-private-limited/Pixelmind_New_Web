import PageHero from "@/components/common/PageHero";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";
import DetailSections from "@/components/details/DetailSections";
import PixelmindPlaceholder from "@/components/common/PixelmindPlaceholder";
import CTA from "@/components/common/CTA";
export function generateStaticParams() {
  return services.map((x) => ({ slug: x.slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = services.find((x) => x.slug === slug);
  return item ? { title: item.title, description: item.description } : {};
}
export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const process = [
    {
      title: "Discover",
      text: "Understand your users, business context, constraints and measures of success.",
    },
    {
      title: "Plan & design",
      text: "Shape requirements into clear journeys, architecture and an actionable roadmap.",
    },
    {
      title: "Build & validate",
      text: "Develop in focused iterations, review progress and test quality continuously.",
    },
    {
      title: "Launch & evolve",
      text: "Prepare deployment, support adoption and prioritize ongoing improvements.",
    },
  ];
  const sections = [
    {
      title: "Strategy before screens",
      text: `We start with the real need behind your ${s.title.toLowerCase()} initiative, aligning stakeholders around outcomes, scope and priorities.`,
      items: [
        "Discovery workshops",
        "Requirements and user journeys",
        "Practical delivery roadmap",
      ],
    },
    {
      title: "Designed around people",
      text: "Clear information architecture and accessible interaction patterns help people complete important tasks with confidence.",
      items: [
        "Responsive interface design",
        "Reusable design systems",
        "Accessibility-minded patterns",
      ],
    },
    {
      title: "Engineering that lasts",
      text: "A maintainable technical foundation supports reliable delivery today and gives your product room to grow.",
      items: [
        "Modular implementation",
        "Integration planning",
        "Testing and documentation",
      ],
    },
    {
      title: "Connected workflows",
      text: "We consider the full ecosystem so your platform can work alongside the tools and teams you already rely on.",
      items: [
        "API and data integration",
        "Role-based experiences",
        "Operational visibility",
      ],
    },
    {
      title: "Quality at every stage",
      text: "Validation is part of delivery, not a final checkbox. We review usability, performance and edge cases throughout.",
      items: [
        "Functional and regression checks",
        "Performance review",
        "Release readiness",
      ],
    },
    {
      title: "Support beyond launch",
      text: "After release, we can help monitor, maintain and improve the experience as your needs change.",
      items: [
        "Technical maintenance",
        "Enhancement planning",
        "Knowledge handover",
      ],
    },
  ];
  const faq = [
    {
      q: `What is included in ${s.title.toLowerCase()}?`,
      a: "Scope is shaped around your goals. A typical engagement can include discovery, planning, design, development, testing, deployment preparation and post-launch support.",
    },
    {
      q: "How long does a project take?",
      a: "Timelines depend on scope, integrations, content readiness and review cycles. After discovery, we provide a phased plan with clear milestones.",
    },
    {
      q: "Can you work with an existing product?",
      a: "Yes. We can assess an existing platform, identify improvement opportunities and plan enhancements or modernization in manageable phases.",
    },
    {
      q: "How do we get started?",
      a: "Share your objectives, current challenges and any useful references through our contact page. We can arrange an initial discussion and recommend next steps.",
    },
  ];
  return (
    <>
      <PageHero
        eyebrow={`Services / ${s.title}`}
        title={s.title}
        highlight=" built around your next move."
        description={`${s.description} ${s.overview}`}
        primaryLabel="Discuss your project"
        primaryHref="/contact"
        secondaryLabel="View our work"
        secondaryHref="/portfolio"
        panelTitle={s.title}
        panelSubtitle="Service delivery framework"
        items={[
          "Collaborative delivery",
          "Scalable foundations",
          "Clear communication",
        ]}
        panelItems={s.technologies?.slice(0, 3)}
      />
      <section className="border-b border-slate-100 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 text-sm text-slate-500 sm:px-8">
          <span className="font-semibold text-slate-950">
            A connected delivery partner
          </span>
          <span>Discover · Design · Develop · Deliver</span>
          <span>Web · Mobile · Cloud · Integration</span>
        </div>
      </section>
      <DetailSections
        eyebrow="Service capabilities"
        title="More than a deliverable. A complete way forward."
        intro={s.overview}
        sections={sections}
        process={process}
        technologies={s.technologies}
        faq={faq}
        related={[
          {
            title: "Custom solutions",
            text: "Explore platforms tailored to your business operations.",
            href: "/solutions",
          },
          {
            title: "Industry expertise",
            text: "See how digital products support different sectors.",
            href: "/industries",
          },
          {
            title: "Selected work",
            text: "Browse demonstration concepts and product experiences.",
            href: "/portfolio",
          },
        ]}
      />
      <CTA />
    </>
  );
}
