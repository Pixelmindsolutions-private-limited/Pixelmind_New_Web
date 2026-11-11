import PageHero from "@/components/common/PageHero";
import { team } from "@/data/team";
import SectionHeading from "@/components/common/SectionHeading";
import CTA from "@/components/common/CTA";
export const metadata = {
  title: "Our Team",
  description: "Meet the people and disciplines behind Pixelmindsolutions.",
};
export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="Our people · The team behind the work"
        title="Good work is"
        highlight="a team effort."
        description="Great digital products come from curious minds, shared ownership and people who care about the details. Meet the team behind Pixelmind Solutions."
        primaryLabel="Work with us"
        primaryHref="/contact"
        secondaryLabel="About Pixelmind"
        secondaryHref="/about"
        panelTitle="Team collaboration"
        panelSubtitle="One team, shared outcomes"
        items={["Product thinking", "Engineering craft", "Open collaboration"]}
      />
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
          {team.map((x) => (
            <div
              key={x.role}
              className="rounded-3xl border border-slate-200 p-6"
            >
              <div className="flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-950 to-sky-600 text-4xl font-bold text-white">
                PM
              </div>
              <h2 className="mt-5 text-lg font-bold text-slate-950">
                {x.name}
              </h2>
              <p className="mt-1 text-sm font-semibold text-sky-700">
                {x.role}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                {x.description}
              </p>
              <span className="mt-4 inline-block rounded-full bg-amber-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-800">
                Editable placeholder
              </span>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
