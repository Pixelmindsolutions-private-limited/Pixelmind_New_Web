import PageHero from "@/components/common/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import SectionHeading from "@/components/common/SectionHeading";
import { company } from "@/data/company";
export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Pixelmindsolutions about your next digital project.",
};
export default function Contact() {
  const c = company.contact;
  return (
    <>
      <PageHero
        eyebrow="Contact · Start a conversation"
        title="Let's talk about"
        highlight="what you're building."
        description="Share a little about your goals and the challenges you want to solve. We'll use that context to guide a focused, useful first conversation."
        primaryLabel="Send a project enquiry"
        primaryHref="#contact-form"
        secondaryLabel="Book a consultation"
        secondaryHref="/book-appointment"
        panelTitle="Project kickoff"
        panelSubtitle="A clear first step"
        items={[
          "No-pressure discovery",
          "Clear next steps",
          "Collaborative planning",
        ]}
      />
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <h2 className="text-2xl font-bold text-slate-950">
              Start a conversation
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-500">
              Use the form to tell us about your project. Contact channels
              appear here when configured by the company.
            </p>
            <div className="mt-8 space-y-5 text-sm">
              {c.email && (
                <p>
                  <b className="block text-slate-950">Email</b>
                  <a className="text-sky-700" href={`mailto:${c.email}`}>
                    {c.email}
                  </a>
                </p>
              )}
              {c.phone && (
                <p>
                  <b className="block text-slate-950">Phone</b>
                  <a className="text-sky-700" href={`tel:${c.phone}`}>
                    {c.phone}
                  </a>
                </p>
              )}
              {c.address && (
                <p>
                  <b className="block text-slate-950">Address</b>
                  <span className="text-slate-500">{c.address}</span>
                </p>
              )}
              {c.hours && (
                <p>
                  <b className="block text-slate-950">Business hours</b>
                  <span className="text-slate-500">{c.hours}</span>
                </p>
              )}
              {!c.email && !c.phone && !c.address && !c.hours && (
                <p className="rounded-2xl bg-sky-50 p-5 text-slate-600">
                  Company contact details have not been configured yet.
                </p>
              )}
            </div>
          </div>
          <div
            id="contact-form"
            className="rounded-3xl border border-slate-200 p-6 shadow-soft sm:p-9"
          >
            <h2 className="mb-7 text-xl font-bold text-slate-950">
              Tell us about your project
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
