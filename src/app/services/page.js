import PageHero from "@/components/common/PageHero";
import Link from "next/link";
import SectionHeading from "@/components/common/SectionHeading";
import CTA from "@/components/common/CTA";
import { services } from "@/data/services";
export const metadata = {
  title: "Services",
  description:
    "Explore web, mobile, design, enterprise and technology services.",
};
export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our services · Strategy to delivery"
        title="The capabilities to take"
        highlight="your idea further."
        description="A connected set of design and engineering services to help you solve problems, modernize operations and build useful digital experiences."
        primaryLabel="Discuss your project"
        primaryHref="/contact"
        secondaryLabel="View selected work"
        secondaryHref="/portfolio"
        panelTitle="Service ecosystem"
        panelSubtitle="Connected capabilities"
        items={[
          "Product strategy & design",
          "Web, mobile & platforms",
          "Cloud, AI & integrations",
        ]}
      />
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="rounded-3xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-soft"
            >
              <span className="text-xs font-bold text-sky-700">
                SERVICE / {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-5 text-xl font-bold text-slate-950">
                {s.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                {s.description}
              </p>
              <span className="mt-6 inline-block text-sm font-bold text-sky-700">
                Explore service →
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
