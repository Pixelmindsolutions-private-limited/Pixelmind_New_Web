import PageHero from "@/components/common/PageHero";
import { technologyGroups } from "@/data/technologies";
import SectionHeading from "@/components/common/SectionHeading";
import CTA from "@/components/common/CTA";
export const metadata = {
  title: "Technologies",
  description:
    "Explore technology categories used to build modern digital products.",
};
export default function Technologies() {
  return (
    <>
      <PageHero
        eyebrow="Technology · Our engineering toolkit"
        title="Tools are important."
        highlight="How we apply them matters more."
        description="Technology choices should fit the product, team, performance needs and long-term maintenance context. We select tools to solve the right problem—not to follow a trend."
        primaryLabel="Talk through your stack"
        primaryHref="/contact"
        secondaryLabel="See our services"
        secondaryHref="/services"
        panelTitle="Technology ecosystem"
        panelSubtitle="The right tools for the job"
        items={[
          "Modern web & mobile",
          "Cloud, data & DevOps",
          "AI & intelligent systems",
        ]}
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl space-y-5 px-5 sm:px-8">
          {technologyGroups.map((g) => (
            <div
              key={g.category}
              className="grid gap-5 rounded-3xl border border-slate-200 p-7 md:grid-cols-[220px_1fr]"
            >
              <h2 className="text-xl font-bold text-slate-950">{g.category}</h2>
              <div className="flex flex-wrap gap-3">
                {g.items.map((x) => (
                  <span
                    key={x}
                    className="rounded-xl bg-sky-50 px-5 py-3 text-sm font-semibold text-sky-900"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
