import PageHero from "@/components/common/PageHero";
export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Pixelmindsolutions.",
};
export default function Legal() {
  return (
    <>
      <PageHero
        eyebrow="Legal information · Pixelmind Solutions"
        title="Privacy Policy"
        highlight="Understand how information is handled."
        description="Review how website information is collected, used and protected. The published policy should reflect Pixelmind’s actual data practices."
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
            This page is an editable privacy policy placeholder. Replace it with
            a policy that accurately describes the information your organization
            collects, why it is used, the legal basis where applicable,
            retention periods, sharing, security practices, user rights and
            contact process. Do not publish until reviewed for your
            jurisdictions and actual data practices.
          </div>
          <p className="mt-8 text-sm text-slate-500">
            Last updated: [Insert date]
          </p>
        </div>
      </section>
    </>
  );
}
