import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import PixelmindPlaceholder from "@/components/common/PixelmindPlaceholder";
import CTA from "@/components/common/CTA";
import { company } from "@/data/company";
export const metadata = {
  title: "About Us",
  description:
    "Learn about Pixelmindsolutions, our mission, vision and approach.",
};
export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Pixelmind · Who we are"
        title="Technology shaped around people"
        highlight="and possibility."
        description={company.overview}
        primaryLabel="Meet our team"
        primaryHref="/team"
        secondaryLabel="Explore our approach"
        secondaryHref="/services"
        panelTitle="Our approach"
        panelSubtitle="A people-first engineering studio"
        items={[
          "Thoughtful product decisions",
          "Collaborative engineering",
          "Long-term partnerships",
        ]}
      />
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <PixelmindPlaceholder label="Our story" className="min-h-[380px]" />
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Start with the problem. Build toward the possibility."
              description="Our work is grounded in understanding the people who use a product and the teams who rely on it. We bring design and engineering into the same conversation so decisions stay connected to real outcomes."
            />
          </div>
        </div>
      </section>
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[.05] p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              Mission
            </p>
            <h2 className="mt-4 text-3xl font-bold">{company.mission}</h2>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[.05] p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              Vision
            </p>
            <h2 className="mt-4 text-3xl font-bold">{company.vision}</h2>
          </div>
        </div>
      </section>
      <section id="process" className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our values"
            title="Principles that guide the work."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {company.values.map((v, i) => (
              <div key={v} className="rounded-2xl bg-sky-50 p-6">
                <span className="text-xs font-bold text-sky-700">0{i + 1}</span>
                <h3 className="mt-5 font-bold text-slate-950">{v}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
