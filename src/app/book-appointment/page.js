"use client";
import PageHero from "@/components/common/PageHero";
import { useState } from "react";
import { bookingProviderUrl } from "@/lib/site";
import SectionHeading from "@/components/common/SectionHeading";
const types = [
  "General Consultation",
  "Web Development",
  "Mobile App Development",
  "UI/UX Consultation",
  "Enterprise Solutions",
  "Project Discussion",
];
const slots = ["10:00 AM", "11:30 AM", "02:00 PM", "03:30 PM"];
export default function Booking() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    type: types[0],
    date: "",
    time: slots[0],
    name: "",
    email: "",
    phone: "",
    company: "",
    description: "",
  });
  const [status, setStatus] = useState("");
  const update = (k, v) => setData((d) => ({ ...d, [k]: v }));
  const next = () => setStep((s) => Math.min(4, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));
  const submit = async () => {
    if (bookingProviderUrl) {
      window.location.href = bookingProviderUrl;
      return;
    }
    setStatus(
      "Your consultation request is ready, but online booking is not connected. Please use the Contact page to send an enquiry. No appointment has been booked.",
    );
  };
  return (
    <>
      <PageHero
        eyebrow="Book a consultation · First conversation"
        title="Start with a"
        highlight="focused conversation."
        description="Choose a consultation topic and preferred time. Share a little about your project so we can make the discussion useful from the start."
        primaryLabel="Contact our team"
        primaryHref="/contact"
        secondaryLabel="Explore services"
        secondaryHref="/services"
        panelTitle="Consultation"
        panelSubtitle="A practical first meeting"
        items={[
          "Understand your goals",
          "Discuss scope & options",
          "Agree on next steps",
        ]}
      />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="mb-8 flex gap-2">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className={`h-1.5 flex-1 rounded-full ${step >= n ? "bg-sky-600" : "bg-slate-200"}`}
              />
            ))}
          </div>
          <div className="rounded-3xl border border-slate-200 p-6 shadow-soft sm:p-9">
            <p className="text-xs font-bold uppercase tracking-widest text-sky-700">
              Step {step} of 4
            </p>
            {step === 1 && (
              <>
                <h2 className="mt-3 text-2xl font-bold text-slate-950">
                  What would you like to discuss?
                </h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {types.map((t) => (
                    <button
                      key={t}
                      onClick={() => update("type", t)}
                      className={`rounded-2xl border p-4 text-left text-sm font-semibold ${data.type === t ? "border-sky-600 bg-sky-50 text-slate-900" : "border-slate-200"}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </>
            )}
            {step === 2 && (
              <>
                <h2 className="mt-3 text-2xl font-bold text-slate-950">
                  Choose a preferred date and time.
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  These are preference examples only. They are not live
                  availability.
                </p>
                <label className="mt-6 block text-sm font-semibold">
                  Preferred date
                  <input
                    type="date"
                    min={new Date().toISOString().slice(0, 10)}
                    value={data.date}
                    onChange={(e) => update("date", e.target.value)}
                    className="mt-2 block w-full rounded-xl border border-slate-200 p-3"
                  />
                </label>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {slots.map((t) => (
                    <button
                      key={t}
                      onClick={() => update("time", t)}
                      className={`rounded-xl border p-3 text-sm ${data.time === t ? "border-sky-600 bg-sky-50" : "border-slate-200"}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </>
            )}
            {step === 3 && (
              <>
                <h2 className="mt-3 text-2xl font-bold text-slate-950">
                  A little about you.
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    ["name", "Full name"],
                    ["email", "Email address"],
                    ["phone", "Phone number"],
                    ["company", "Company (optional)"],
                  ].map(([k, l]) => (
                    <label key={k} className="text-sm font-semibold">
                      {l}
                      <input
                        required={k !== "company"}
                        type={k === "email" ? "email" : "text"}
                        value={data[k]}
                        onChange={(e) => update(k, e.target.value)}
                        className="mt-2 w-full rounded-xl border border-slate-200 p-3 font-normal"
                      />
                    </label>
                  ))}
                </div>
                <label className="mt-4 block text-sm font-semibold">
                  Project details
                  <textarea
                    value={data.description}
                    onChange={(e) => update("description", e.target.value)}
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-slate-200 p-3 font-normal"
                  />
                </label>
              </>
            )}
            {step === 4 && (
              <>
                <h2 className="mt-3 text-2xl font-bold text-slate-950">
                  Review your request.
                </h2>
                <div className="mt-6 space-y-3 rounded-2xl bg-slate-50 p-5 text-sm">
                  {Object.entries({
                    Type: data.type,
                    Date: data.date || "Not selected",
                    "Preferred time": data.time,
                    Name: data.name,
                    Email: data.email,
                    Phone: data.phone,
                    Company: data.company || "Not provided",
                    Details: data.description || "Not provided",
                  }).map(([k, v]) => (
                    <p key={k}>
                      <b className="text-slate-950">{k}: </b>
                      <span className="text-slate-600">{v}</span>
                    </p>
                  ))}
                </div>
              </>
            )}
            {status && (
              <p
                role="status"
                className="mt-5 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900"
              >
                {status}
              </p>
            )}
            <div className="mt-8 flex justify-between">
              <button
                onClick={back}
                disabled={step === 1}
                className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold disabled:opacity-30"
              >
                Back
              </button>
              {step < 4 ? (
                <button
                  onClick={next}
                  disabled={
                    (step === 2 && !data.date) ||
                    (step === 3 && (!data.name || !data.email || !data.phone))
                  }
                  className="rounded-full bg-sky-700 px-6 py-3 text-sm font-bold text-white disabled:opacity-40"
                >
                  Continue
                </button>
              ) : (
                <button
                  onClick={submit}
                  className="rounded-full bg-sky-700 px-6 py-3 text-sm font-bold text-white"
                >
                  {bookingProviderUrl
                    ? "Continue to booking provider"
                    : "Request consultation"}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
