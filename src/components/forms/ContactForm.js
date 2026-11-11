"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { contactEndpoint, companyEmail, companyWhatsApp } from "@/lib/site";
const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, "Please share a little more detail"),
});
export default function ContactForm() {
  const [status, setStatus] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });
  const submit = async (values) => {
    setStatus("");
    if (!contactEndpoint) {
      setStatus("not-configured");
      return;
    }
    try {
      const res = await fetch(contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };
  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {[
          ["name", "Full name", "text"],
          ["email", "Email address", "email"],
          ["phone", "Phone number (optional)", "tel"],
          ["company", "Company (optional)", "text"],
        ].map(([name, label, type]) => (
          <label key={name} className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-950">
              {label}
            </span>
            <input
              type={type}
              {...register(name)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-sky-600 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
            />
            {errors[name] && (
              <span className="mt-1 block text-xs text-red-600">
                {errors[name].message}
              </span>
            )}
          </label>
        ))}
      </div>
      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-slate-950">
          Tell us about your project
        </span>
        <textarea
          rows={5}
          {...register("message")}
          className="w-full resize-y rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-sky-600 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
        />
        {errors.message && (
          <span className="mt-1 block text-xs text-red-600">
            {errors.message.message}
          </span>
        )}
      </label>
      <button
        disabled={isSubmitting}
        className="rounded-full bg-sky-700 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-sky-900 disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send enquiry"}
      </button>
      {status === "success" && (
        <p
          role="status"
          className="rounded-xl bg-emerald-50 p-4 text-sm text-emerald-800"
        >
          Your enquiry was submitted successfully.
        </p>
      )}
      {status === "not-configured" && (
        <div
          role="status"
          className="rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-amber-900"
        >
          The online form is not connected yet. Your details have not been sent
          or stored.{" "}
          {companyEmail && (
            <>
              Email us at{" "}
              <a
                className="font-bold underline"
                href={`mailto:${companyEmail}`}
              >
                {companyEmail}
              </a>
              .{" "}
            </>
          )}
          {companyWhatsApp && (
            <>
              You can also{" "}
              <a
                className="font-bold underline"
                href={`https://wa.me/${companyWhatsApp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
              >
                contact us on WhatsApp
              </a>
              .
            </>
          )}
        </div>
      )}
      {status === "error" && (
        <p
          role="alert"
          className="rounded-xl bg-red-50 p-4 text-sm text-red-700"
        >
          We couldn&apos;t submit your enquiry. Please try again or use the
          contact details listed on this page.
        </p>
      )}
    </form>
  );
}
