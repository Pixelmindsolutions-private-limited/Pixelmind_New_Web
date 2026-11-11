import { siteUrl } from "@/lib/site";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { projects } from "@/data/portfolio";
import { posts } from "@/data/blogs";
export default function sitemap() {
  const fixed = [
    "",
    "about",
    "services",
    "industries",
    "solutions",
    "technologies",
    "portfolio",
    "team",
    "blog",
    "contact",
    "book-appointment",
    "project-estimator",
    "privacy-policy",
    "terms-and-conditions",
    "cookie-policy",
  ];
  const paths = [
    ...fixed.map((x) => `/${x}`),
    ...services.map((x) => `/services/${x.slug}`),
    ...industries.map((x) => `/industries/${x.slug}`),
    ...projects.map((x) => `/portfolio/${x.slug}`),
    ...posts.map((x) => `/blog/${x.slug}`),
  ];
  return paths.map((path) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
