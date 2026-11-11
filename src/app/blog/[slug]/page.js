import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "@/data/blogs";
import PageHero from "@/components/common/PageHero";
export function generateStaticParams() {
  return posts.map((x) => ({ slug: x.slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.excerpt } : {};
}
export default async function Article({ params }) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <article>
      <PageHero
        eyebrow={`Journal / ${p.category} · ${p.readingTime}`}
        title={p.title}
        description={`${p.excerpt} By ${p.author} · ${p.date}.`}
        primaryLabel="Discuss this topic"
        primaryHref="/contact"
        secondaryLabel="All insights"
        secondaryHref="/blog"
        panelTitle="Pixelmind journal"
        panelSubtitle="Ideas into practice"
        items={[
          "Product thinking",
          "Engineering insights",
          "Technology choices",
        ]}
        compact
      />
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <div className="mb-10 flex h-56 items-center justify-center rounded-3xl bg-gradient-to-br from-slate-950 to-sky-600 font-bold tracking-[.3em] text-white">
          PIXELMIND
        </div>
        <div className="space-y-6 text-base leading-8 text-slate-600">
          {p.content.map((x, i) => (
            <p key={i}>{x}</p>
          ))}
        </div>
        <div className="mt-12 border-t border-slate-200 pt-7">
          <Link href="/contact" className="font-bold text-sky-700">
            Discuss your project →
          </Link>
        </div>
      </div>
    </article>
  );
}
