"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { navigationLinks } from "@/lib/site";
import { megaMenus } from "./navigationData";
import GlobalSearch from "./GlobalSearch";
import Button from "@/components/ui/Button";
export default function Header() {
  const [active, setActive] = useState("");
  const [mobile, setMobile] = useState(false);
  const [search, setSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState("");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearch(true);
      }
      if (e.key === "Escape") {
        setActive("");
        setMobile(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);
  const menu = megaMenus[active];
  return (
    <>
      <div className="bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 text-[11px] sm:px-8">
          <p className="tracking-wide text-white/80">
            Engineering studio · Available for new projects
          </p>
          <Link
            href="/contact"
            className="hidden items-center gap-1 font-semibold text-cyan-300 sm:flex"
          >
            Let&apos;s talk <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
      <header
        className={`sticky top-0 z-50 border-b border-slate-200/70 bg-[#f8fbff]/95 backdrop-blur-xl transition-shadow ${scrolled ? "shadow-[0_8px_30px_rgba(16,42,48,.08)]" : ""}`}
        onMouseLeave={() => setActive("")}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="Pixelmindsolutions home"
          >
            <img
              src="/logo/longpnglogo.png"
              alt="Pixelmind Solutions"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <nav
            className="hidden items-center gap-0.5 xl:flex"
            aria-label="Main navigation"
          >
            {navigationLinks.map((item) => (
              <div
                key={item.label}
                onMouseEnter={() =>
                  item.menu ? setActive(item.menu) : setActive("")
                }
              >
                <Link
                  href={item.href}
                  onFocus={() => item.menu && setActive(item.menu)}
                  onClick={() => setActive("")}
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-3 text-[12px] font-semibold transition ${active === item.menu ? "bg-sky-50 text-sky-900" : "text-slate-600 hover:bg-slate-50 hover:text-sky-900"}`}
                >
                  {item.label}
                  {item.menu && <ChevronDown size={13} />}
                </Link>
              </div>
            ))}
          </nav>
          <div className="hidden items-center gap-3 xl:flex">
            <button
              onClick={() => setSearch(true)}
              aria-label="Search"
              className="rounded-full p-3 text-slate-600 hover:bg-sky-50 hover:text-sky-700"
            >
              <Search size={18} />
            </button>
            <Button href="/book-appointment" className="!px-5 !py-3 !text-xs">
              Start a Project <ArrowUpRight size={14} />
            </Button>
          </div>
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => setSearch(true)}
              aria-label="Search"
              className="rounded-xl p-2.5 text-slate-950 hover:bg-sky-50"
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => setMobile(true)}
              aria-label="Open navigation"
              className="rounded-xl bg-sky-50 p-2.5 text-slate-900"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
        {menu && (
          <div
            className="absolute left-0 right-0 top-full hidden border-t border-slate-100 bg-white shadow-soft xl:block"
            onMouseEnter={() => setActive(active)}
          >
            <div className="mx-auto grid max-w-7xl grid-cols-[.8fr_2fr_.9fr] gap-12 px-8 py-9">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.2em] text-teal-500">
                  Explore
                </p>
                <h3 className="mt-4 text-2xl font-bold text-slate-950">
                  {menu.heading}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {menu.intro}
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-teal-500"
                >
                  Talk to our team <ArrowUpRight size={15} />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-8">
                {menu.groups.map((group) => (
                  <div key={group[0]}>
                    <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
                      {group[0]}
                    </p>
                    <div className="space-y-1">
                      {group[1].map((link) => (
                        <Link
                          key={link.href + link.label}
                          href={link.href}
                          onClick={() => setActive("")}
                          className="group flex items-center justify-between rounded-xl px-3 py-2.5 hover:bg-sky-50"
                        >
                          <span>
                            <span className="block text-sm font-semibold text-slate-950">
                              {link.label}
                            </span>
                            {link.desc && (
                              <span className="text-xs text-slate-500">
                                {link.desc}
                              </span>
                            )}
                          </span>
                          <ArrowUpRight
                            size={14}
                            className="text-sky-600 opacity-0 transition group-hover:opacity-100"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-slate-950 to-teal-500 p-6 text-white">
                <Sparkles className="text-cyan-300" />
                <p className="mt-6 text-xl font-bold">
                  Have a challenge in mind?
                </p>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Let&apos;s shape the right digital approach for your business.
                </p>
                <Link
                  href="/project-estimator"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-200"
                >
                  Explore project estimator <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
      {mobile && (
        <div className="fixed inset-0 z-[80] xl:hidden">
          <button
            aria-label="Close navigation overlay"
            onClick={() => setMobile(false)}
            className="absolute inset-0 bg-slate-950/55 backdrop-blur-sm"
          />
          <aside className="absolute bottom-0 right-0 top-0 flex w-[min(90vw,420px)] flex-col bg-white shadow-2xl">
            <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
              <span className="font-bold text-slate-950">
                pixelmind <span className="text-sky-700">solutions</span>
              </span>
              <button
                onClick={() => setMobile(false)}
                aria-label="Close menu"
                className="rounded-xl bg-slate-100 p-2"
              >
                <X />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-5">
              <Link
                onClick={() => setMobile(false)}
                href="/"
                className="block border-b border-slate-100 py-4 font-semibold text-slate-950"
              >
                Home
              </Link>
              {navigationLinks
                .filter((x) => x.menu || x.label === "Technologies")
                .map((item) => (
                  <div key={item.label} className="border-b border-slate-100">
                    <div className="flex items-center justify-between py-4">
                      <Link
                        href={item.href}
                        onClick={() => setMobile(false)}
                        className="font-semibold text-slate-950"
                      >
                        {item.label}
                      </Link>
                      {item.menu && (
                        <button
                          onClick={() =>
                            setExpanded(expanded === item.menu ? "" : item.menu)
                          }
                          aria-label={`Expand ${item.label}`}
                          className="rounded-lg p-2 hover:bg-sky-50"
                        >
                          <ChevronDown
                            size={18}
                            className={
                              expanded === item.menu
                                ? "rotate-180 transition"
                                : "transition"
                            }
                          />
                        </button>
                      )}
                    </div>
                    {item.menu && expanded === item.menu && (
                      <div className="mb-3 rounded-2xl bg-sky-50 p-3">
                        {megaMenus[item.menu].groups
                          .flatMap((g) => g[1])
                          .map((link) => (
                            <Link
                              key={link.href + link.label}
                              onClick={() => setMobile(false)}
                              href={link.href}
                              className="block rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-white"
                            >
                              {link.label}
                            </Link>
                          ))}
                      </div>
                    )}
                  </div>
                ))}
              <Link
                href="/blog"
                onClick={() => setMobile(false)}
                className="block border-b border-slate-100 py-4 font-semibold text-slate-950"
              >
                Blog & Insights
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobile(false)}
                className="block py-4 font-semibold text-slate-950"
              >
                Contact
              </Link>
            </div>
            <div className="border-t border-teal-100 p-5">
              <Button
                href="/book-appointment"
                className="w-full"
                onClick={() => setMobile(false)}
              >
                Start a Project <ArrowUpRight size={16} />
              </Button>
            </div>
          </aside>
        </div>
      )}
      <GlobalSearch open={search} onClose={() => setSearch(false)} />
    </>
  );
}
