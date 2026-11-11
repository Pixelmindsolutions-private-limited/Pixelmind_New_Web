import PageHero from "@/components/common/PageHero";
export const metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for Pixelmindsolutions.",
};
export default function Legal() {
  return (
    <>
      <PageHero
        eyebrow="Legal information · Pixelmind Solutions"
        title="Cookie Policy"
        highlight="A clearer view of website preferences."
        description="Learn how cookies and similar technologies may support website functionality, analytics and user preferences."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Back to home"
        secondaryHref="/"
        compact
      />
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-900">
            Editable draft placeholder — requires review before publication.
          </p>
          <div className="mt-8 rounded-3xl bg-white p-8 text-base leading-8 text-slate-600 shadow-sm">
            This page is an editable cookie policy placeholder. Document the
            cookies and similar technologies actually used on this website,
            their purposes, providers, durations and consent controls. Remove
            categories that do not apply and obtain appropriate legal review.
          </div>
          <p className="mt-8 text-sm text-slate-500">
            Last updated: [Insert date]
          </p>
        </div>
      </section>
    </>
  );
}
