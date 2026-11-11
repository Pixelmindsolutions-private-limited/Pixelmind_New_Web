import PageHero from "@/components/common/PageHero";
export const metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for Pixelmindsolutions.",
};
export default function Legal() {
  return (
    <>
      <PageHero
        eyebrow="Legal information · Pixelmind Solutions"
        title="Terms and Conditions"
        highlight="Clear expectations for using this website."
        description="Review the terms that govern access to this website and its published content."
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
            This page is an editable terms placeholder. Add accurate terms
            covering website use, intellectual property, acceptable use, service
            scope, payment and cancellation terms where relevant, disclaimers,
            liability, governing law and dispute resolution. Obtain appropriate
            legal review before publication.
          </div>
          <p className="mt-8 text-sm text-slate-500">
            Last updated: [Insert date]
          </p>
        </div>
      </section>
    </>
  );
}
