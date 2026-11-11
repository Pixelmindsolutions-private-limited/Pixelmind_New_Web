import Link from "next/link";
export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-5 py-20 text-center">
      <div>
        <p className="text-sm font-bold tracking-widest text-sky-700">
          404 / PAGE NOT FOUND
        </p>
        <h1 className="mt-5 text-5xl font-bold text-slate-950">
          This page wandered off.
        </h1>
        <p className="mt-4 text-slate-500">
          The link may be outdated or the page may have moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-sky-700 px-6 py-3 font-semibold text-white"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
