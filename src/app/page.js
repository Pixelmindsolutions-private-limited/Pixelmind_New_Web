import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  Bot,
  Boxes,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Fingerprint,
  Gauge,
  Globe2,
  Layers3,
  LifeBuoy,
  LockKeyhole,
  MessageSquareText,
  MonitorSmartphone,
  PanelsTopLeft,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/common/Reveal";
import FAQ from "@/components/common/FAQ";
import CTA from "@/components/common/CTA";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";
import { industries } from "@/data/industries";
import { projects } from "@/data/portfolio";
import { technologyGroups } from "@/data/technologies";
import { faqs } from "@/data/faqs";
import { company } from "@/data/company";

const serviceIcons = {
  Code2,
  PanelsTopLeft,
  Smartphone,
  ShoppingBag,
  Building2,
  Workflow,
  BrainCircuit,
  Zap,
  Cloud,
  Gauge,
  LifeBuoy,
  MonitorSmartphone,
  Rocket,
};
const industryIcons = [
  Activity,
  Globe2,
  ShoppingBag,
  Building2,
  LockKeyhole,
  Boxes,
  Smartphone,
  Database,
  Rocket,
  Layers3,
];
const outcomes = [
  {
    value: "01",
    title: "Understand the problem",
    text: "We start with your users, business goals and the friction you want to remove.",
  },
  {
    value: "02",
    title: "Design the right approach",
    text: "We shape a practical roadmap, product experience and technical foundation.",
  },
  {
    value: "03",
    title: "Build with intent",
    text: "Focused delivery, regular feedback and quality checks keep progress visible.",
  },
  {
    value: "04",
    title: "Improve over time",
    text: "Launch is a beginning. We help you learn, refine and grow with confidence.",
  },
];
const principles = [
  {
    icon: Fingerprint,
    title: "Designed around your business",
    text: "No one-size-fits-all templates. We shape the experience around your workflows, people and priorities.",
  },
  {
    icon: ShieldCheck,
    title: "Quality built into the process",
    text: "Thoughtful architecture, careful testing and maintainable code are part of the work from day one.",
  },
  {
    icon: MessageSquareText,
    title: "A collaborative team",
    text: "Clear communication and shared decisions keep stakeholders connected throughout delivery.",
  },
];
const stats = [
  "Product thinking",
  "Engineering craft",
  "Transparent delivery",
  "Long-term partnership",
];

function SectionKicker({ children, light = false }) {
  return (
    <p
      className={`mb-4 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[.22em] ${light ? "text-teal-300" : "text-[#087e8b]"}`}
    >
      <span className={`h-px w-7 ${light ? "bg-teal-300" : "bg-sky-700"}`} />
      {children}
    </p>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[min(100%,38rem)]">
      <div className="absolute -inset-8 rounded-[3rem] bg-cyan-400/20 blur-3xl" />
      <div className="relative overflow-hidden rounded-[clamp(1.25rem,3vw,2rem)] border border-white/10 bg-[#0b2742] p-[clamp(.85rem,2vw,1.25rem)] shadow-[0_35px_100px_rgba(2,32,37,.28)] ">
        <div className="flex items-center justify-between border-b border-white/10 px-2 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-teal-300" />
            <span className="text-xs font-semibold tracking-wide text-white/80">
              pixelmind / product studio
            </span>
          </div>
          <span className="rounded-full border border-cyan-300/20 bg-teal-300/10 px-3 py-1 text-[10px] font-bold text-sky-200">
            LIVE WORKSPACE
          </span>
        </div>
        <div className="grid gap-3 py-3 sm:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-2xl border border-white/10 bg-white/[.055] p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[.16em] text-white/45">
                  Delivery overview
                </p>
                <p className="mt-1 text-[clamp(1rem,1.35vw,1.125rem)] font-bold text-white">
                  Build. Learn. Scale.
                </p>
              </div>
              <span className="rounded-xl bg-teal-300/10 p-2 text-sky-200">
                <Activity size={18} />
              </span>
            </div>
            <div className="mt-5 flex h-[clamp(5rem,9vw,7rem)] items-end gap-2">
              {[34, 49, 42, 66, 54, 78, 68, 92, 76, 100, 83, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-teal-700 via-cyan-500 to-teal-300"
                  style={{ height: `${h}%`, opacity: 0.45 + i * 0.045 }}
                />
              ))}
            </div>
            <div className="mt-3 flex justify-between text-[10px] text-white/35">
              <span>Discovery</span>
              <span>Delivery</span>
              <span>Growth</span>
            </div>
          </div>
          <div className="grid gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[.055] p-4">
              <div className="flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-[.16em] text-white/45">
                  System health
                </p>
                <Gauge size={17} className="text-sky-200" />
              </div>
              <p className="mt-3 text-3xl font-bold text-white">
                Stable<span className="text-teal-300">.</span>
              </p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[86%] rounded-full bg-teal-300" />
              </div>
              <p className="mt-2 text-[10px] text-white/40">
                Designed for dependable operations
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-teal-700/55 via-cyan-900/45 to-teal-900/45 p-4">
              <Bot size={19} className="text-sky-200" />
              <p className="mt-4 text-sm font-bold text-white">
                Intelligent workflows
              </p>
              <p className="mt-1 text-[11px] leading-5 text-white/55">
                Connect people, platforms and processes.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { n: "01", t: "Discover" },
            { n: "02", t: "Engineer" },
            { n: "03", t: "Evolve" },
          ].map((x) => (
            <div
              key={x.n}
              className="rounded-xl border border-white/10 bg-white/[.035] px-3 py-3"
            >
              <span className="text-[10px] font-bold text-teal-300">{x.n}</span>
              <p className="mt-1 text-xs font-semibold text-white/80">{x.t}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -left-3 top-[18%] hidden rounded-2xl border border-white bg-white px-4 py-3 shadow-xl xl:block">
        <div className="flex items-center gap-3">
          <span className="rounded-xl bg-teal-50 p-2.5 text-[#087e8b]">
            <Code2 size={18} />
          </span>
          <div>
            <p className="text-[10px] text-slate-400">Engineering</p>
            <p className="text-xs font-bold text-slate-900">Built to scale</p>
          </div>
        </div>
      </div>
      <div className="absolute -right-3 bottom-[13%] hidden rounded-2xl border border-white bg-white px-4 py-3 shadow-xl xl:block">
        <div className="flex items-center gap-3">
          <span className="rounded-xl bg-teal-50 p-2.5 text-[#087e8b]">
            <Sparkles size={18} />
          </span>
          <div>
            <p className="text-[10px] text-slate-400">Experience</p>
            <p className="text-xs font-bold text-slate-900">Made for people</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-[#f0faf9] text-slate-900">
      <section className="relative isolate overflow-hidden bg-[#061a30] text-white">
        {/* Responsive atmospheric teal lighting */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_34%,rgba(20,184,166,.32),transparent_40%),radial-gradient(ellipse_at_8%_100%,rgba(20,184,166,.24),transparent_38%)]" />
        <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[min(75vw,58rem)] w-[min(75vw,58rem)] rounded-full border border-teal-200/[.14]" />
        <div className="pointer-events-none absolute -right-12 -top-20 -z-10 h-[min(52vw,38rem)] w-[min(52vw,38rem)] rounded-full border border-teal-200/[.16]" />

        <div className="mx-auto grid min-h-[auto] w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-12 pt-28 sm:px-8 sm:pb-14 sm:pt-32 md:gap-12 lg:min-h-[calc(100svh-10rem)] lg:grid-cols-[1.02fr_.98fr] lg:gap-8 lg:px-8 lg:py-[clamp(2rem,5vh,4rem)] xl:px-10">
          <div className="relative z-10 mx-auto w-full max-w-[680px] lg:mx-0">
            <div className="mb-5 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-teal-300/25 bg-teal-300/[.07] px-3 py-2 text-[9px] font-bold uppercase tracking-[.14em] text-sky-100 sm:mb-6 sm:px-4 sm:text-[10px] sm:tracking-[.16em]">
              <span className="h-2 w-2 shrink-0 rounded-full bg-teal-300 shadow-[0_0_14px_#5eead4]" />
              Pixelmind · Engineering Studio · Available for new projects
            </div>

            <h1 className="max-w-full text-[clamp(2.2rem,8.5vw,4.2rem)] font-semibold leading-[.98] tracking-[-.065em] text-white sm:text-[clamp(3rem,5.8vw,4.8rem)] lg:text-[clamp(2.4rem,min(4.1vw,6.5vh),4.3rem)]">
              <span className="block">Software built for</span>
              <span className="block bg-gradient-to-r from-cyan-200 via-teal-300 to-teal-200 bg-clip-text text-transparent">growth.</span>
              <span className="block">Engineering built for</span>
              <span className="block bg-gradient-to-r from-cyan-200 via-teal-300 to-teal-200 bg-clip-text text-transparent">scale.</span>
            </h1>

            <p className="mt-5 max-w-xl text-[clamp(.95rem,1.15vw,1.1rem)] leading-[1.65] text-white/65 sm:mt-6 sm:leading-[1.7] lg:mt-5">
              We help businesses build digital products, modernize systems and
              connect technology to the work that matters—from first discovery
              to launch and beyond.
            </p>

            <div className="mt-6 flex flex-col gap-3 min-[460px]:flex-row min-[460px]:flex-wrap lg:mt-7">
              <Button href="/contact">
                Start a conversation <ArrowUpRight size={16} />
              </Button>
              <Link
                href="/portfolio"
                className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-teal-200/70 hover:bg-white/5"
              >
                Explore our work <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-5 text-[11px] font-medium text-white/55 sm:mt-9 sm:pt-6">
              {stats.map((x) => (
                <span key={x} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="shrink-0 text-teal-300" />
                  {x}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[620px] min-w-0 lg:max-w-none">
            <HeroVisual />
          </div>
        </div>

        <div className="border-t border-white/10 bg-[#061a30]/30">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-8">
            <p className="text-[9px] font-bold uppercase tracking-[.18em] text-white/35 sm:text-[10px]">
              From idea to impact
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-semibold text-white/55 sm:gap-x-8 sm:text-xs">
              <span>Strategy</span>
              <span>Design</span>
              <span>Engineering</span>
              <span>Integration</span>
              <span>Continuous improvement</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-[#f0f9f8] py-[clamp(1.25rem,3vw,2rem)]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 sm:px-8">
          <p className="max-w-xs text-xs font-semibold leading-5 text-slate-500">
            A connected team for your next digital milestone.
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs font-bold tracking-wide text-slate-400">
            <span>PRODUCT THINKING</span>
            <span>WEB PLATFORMS</span>
            <span>MOBILE EXPERIENCES</span>
            <span>BUSINESS SYSTEMS</span>
            <span>AI & AUTOMATION</span>
          </div>
        </div>
      </section>

      <section className="py-[clamp(4rem,8vw,7rem)]">
        <div className="mx-auto grid max-w-7xl gap-[clamp(2.5rem,5vw,4.5rem)] px-[clamp(1.25rem,4vw,3rem)] lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <Reveal>
            <SectionKicker>Who we are</SectionKicker>
            <h2 className="max-w-xl text-[clamp(2rem,3.4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-.045em] text-[#0a2540] ">
              Technology should create{" "}
              <span className="text-[#087e8b]">momentum.</span>
            </h2>
            <p className="mt-7 max-w-lg text-sm leading-8 text-slate-600">
              {company.overview}
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#087e8b]"
            >
              More about Pixelmind <ArrowUpRight size={16} />
            </Link>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-[clamp(1.1rem,2vw,1.5rem)] transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_20px_60px_rgba(14,65,120,.08)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e0f5f1] text-[#087e8b]">
                    <p.icon size={21} />
                  </span>
                  <h3 className="mt-6 text-[clamp(.95rem,1.2vw,1rem)] font-bold text-[#0a2540]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-slate-500">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f1f8fa] py-[clamp(4rem,8vw,7rem)]">
        <div className="mx-auto w-full max-w-7xl px-[clamp(1.25rem,4vw,3rem)]">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <SectionKicker>What we do</SectionKicker>
              <h2 className="max-w-2xl text-[clamp(2rem,3.4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-.045em] text-[#0a2540] ">
                End-to-end capabilities for{" "}
                <span className="text-[#087e8b]">what’s next.</span>
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500">
                Bring strategy, design and technology together with a team
                focused on the outcomes that matter to your business.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#087e8b]"
            >
              Explore all services <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="mt-[clamp(2rem,4vw,3.5rem)] grid grid-cols-1 gap-4 min-[520px]:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 9).map((s, i) => {
              const Icon = serviceIcons[s.icon] || Code2;
              return (
                <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group relative flex h-full min-h-[clamp(190px,22vw,230px)] flex-col overflow-hidden rounded-2xl border border-teal-100 bg-white p-[clamp(1.15rem,2vw,1.75rem)] transition duration-300 hover:-translate-y-1 hover:border-teal-400 hover:shadow-[0_22px_55px_rgba(14,65,120,.09)]"
                  >
                    <div className="flex items-start justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e0f5f1] text-[#087e8b] transition group-hover:bg-teal-800 group-hover:text-white">
                        <Icon size={22} />
                      </span>
                      <span className="text-xs font-bold text-slate-300">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-7 text-[clamp(1rem,1.35vw,1.125rem)] font-bold tracking-tight text-[#0a2540]">
                      {s.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">
                      {s.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#087e8b]">
                      Explore capability{" "}
                      <ArrowUpRight
                        size={14}
                        className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </span>
                    <div className="absolute -bottom-14 -right-12 h-32 w-32 rounded-full bg-teal-50 opacity-0 blur-2xl transition group-hover:opacity-100" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#071b31] py-[clamp(4rem,8vw,7rem)] text-white">
        <div className="mx-auto w-full max-w-7xl px-[clamp(1.25rem,4vw,3rem)]">
          <div className="grid gap-[clamp(2rem,4vw,3.5rem)] lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <SectionKicker light>Who we serve</SectionKicker>
              <h2 className="text-[clamp(2rem,3.4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-.045em] ">
                Technology shaped around{" "}
                <span className="text-teal-300">your world.</span>
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/55">
              Every industry has its own language, constraints and
              opportunities. We bring adaptable engineering to the details that
              make your business different.
            </p>
          </div>
          <div className="mt-[clamp(2rem,4vw,3.5rem)] grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 lg:grid-cols-5">
            {industries.map((x, i) => {
              const Icon = industryIcons[i] || Boxes;
              return (
                <Link
                  key={x.slug}
                  href={`/industries/${x.slug}`}
                  className="group rounded-2xl border border-white/10 bg-white/[.035] p-[clamp(1rem,1.6vw,1.25rem)] transition hover:border-teal-400/40 hover:bg-white/[.075]"
                >
                  <Icon size={21} className="text-teal-300" />
                  <h3 className="mt-7 text-sm font-bold text-white">
                    {x.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-white/45">
                    {x.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold text-teal-300">
                    Explore <ArrowUpRight size={13} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-[clamp(4rem,8vw,7rem)]">
        <div className="mx-auto w-full max-w-7xl px-[clamp(1.25rem,4vw,3rem)]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionKicker>Solutions</SectionKicker>
              <h2 className="max-w-2xl text-[clamp(2rem,3.4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-.045em] text-[#0a2540] ">
                Connected systems.{" "}
                <span className="text-[#087e8b]">Clearer operations.</span>
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500">
                Purpose-built platforms that help bring information, teams and
                everyday workflows into one place.
              </p>
            </div>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#087e8b]"
            >
              View all solutions <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="mt-[clamp(2rem,4vw,3.5rem)] grid grid-cols-1 gap-4 min-[520px]:grid-cols-2 xl:grid-cols-4">
            {solutions.slice(0, 8).map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 0.05}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 p-[clamp(1.1rem,2vw,1.5rem)] transition hover:-translate-y-1 hover:border-teal-400 hover:shadow-soft"
                >
                  <span className="text-[10px] font-extrabold tracking-[.2em] text-[#087e8b]">
                    SOLUTION / 0{i + 1}
                  </span>
                  <h3 className="mt-6 text-[clamp(1rem,1.35vw,1.125rem)] font-bold text-[#0a2540]">
                    {s.title}
                  </h3>
                  <p className="mt-3 flex-1 text-xs leading-6 text-slate-500">
                    {s.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#087e8b]">
                    Discover solution{" "}
                    <ArrowRight
                      size={14}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f1f8fa] py-[clamp(4rem,8vw,7rem)]">
        <div className="mx-auto w-full max-w-7xl px-[clamp(1.25rem,4vw,3rem)]">
          <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
            <div>
              <SectionKicker>Technology ecosystem</SectionKicker>
              <h2 className="text-[clamp(2rem,3.4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-.045em] text-[#0a2540] ">
                The right tools,{" "}
                <span className="text-[#087e8b]">for the right reasons.</span>
              </h2>
              <p className="mt-6 text-sm leading-7 text-slate-500">
                We choose technologies based on the product, your team and the
                future you’re building toward—not trends alone.
              </p>
              <Link
                href="/technologies"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#087e8b]"
              >
                Explore our technology stack <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-3 min-[520px]:grid-cols-2">
              {technologyGroups.map((g, i) => (
                <div
                  key={g.category}
                  className="rounded-2xl border border-slate-200 bg-white p-[clamp(1.1rem,2vw,1.5rem)]"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-[#0a2540]">
                      {g.category}
                    </h3>
                    <span className="text-[10px] font-bold text-[#087e8b]">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-[#f1f8fa] px-3 py-2 text-[11px] font-medium text-slate-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-[clamp(4rem,8vw,7rem)]">
        <div className="mx-auto w-full max-w-7xl px-[clamp(1.25rem,4vw,3rem)]">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <SectionKicker>Selected work</SectionKicker>
              <h2 className="text-[clamp(2rem,3.4vw,3.25rem)] font-semibold tracking-[-.045em] text-[#0a2540] ">
                Ideas, made tangible.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
                A look at the kinds of digital experiences and platforms we can
                help bring to life.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#087e8b]"
            >
              View portfolio <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="mt-[clamp(2rem,4vw,3.5rem)] grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.07}>
                <Link href={`/portfolio/${p.slug}`} className="group block">
                  <div className="relative flex min-h-[clamp(220px,25vw,300px)] items-end overflow-hidden rounded-2xl bg-[#0b3150] p-6">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(56,189,248,.30),transparent_38%),linear-gradient(145deg,#0b3150,#061a30)] transition duration-500 group-hover:scale-105" />
                    <div className="absolute right-6 top-6 grid h-28 w-36 rotate-3 grid-cols-3 gap-2 rounded-xl border border-white/15 bg-white/[.07] p-3 backdrop-blur">
                      <div className="col-span-2 rounded-md bg-teal-300/30" />
                      <div className="rounded-md bg-white/10" />
                      <div className="rounded-md bg-white/10" />
                      <div className="col-span-2 rounded-md bg-sky-100/20" />
                      <div className="col-span-3 rounded-md bg-white/10" />
                    </div>
                    <div className="relative">
                      <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold text-sky-100 backdrop-blur">
                        {p.category}
                      </span>
                      <h3 className="mt-4 text-[clamp(1.25rem,2vw,1.5rem)] font-bold text-white">
                        {p.title}
                      </h3>
                    </div>
                    <span className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 transition group-hover:rotate-45">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4 pt-5">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[.17em] text-[#087e8b]">
                        {p.type}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-[11px] text-slate-400">
            Portfolio entries are demonstration concepts and do not represent
            verified client engagements or performance claims.
          </p>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#071b31] py-[clamp(4rem,8vw,7rem)] text-white">
        <div className="mx-auto w-full max-w-7xl px-[clamp(1.25rem,4vw,3rem)]">
          <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr]">
            <div>
              <SectionKicker light>How we work</SectionKicker>
              <h2 className="text-[clamp(2rem,3.4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-.045em] ">
                A practical path from{" "}
                <span className="text-teal-300">first thought to launch.</span>
              </h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
                A transparent, iterative process helps us make the right
                decisions early and deliver meaningful progress at every stage.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-teal-300"
              >
                Talk through your project <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
              {outcomes.map((x, i) => (
                <div
                  key={x.value}
                  className="border-t border-white/15 py-6 sm:px-6"
                >
                  <span className="text-xs font-bold tracking-[.2em] text-teal-300">
                    {x.value}
                  </span>
                  <h3 className="mt-4 text-[clamp(1rem,1.35vw,1.125rem)] font-bold text-white">
                    {x.title}
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-white/50">
                    {x.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-[clamp(4rem,8vw,7rem)]">
        <div className="mx-auto grid max-w-7xl gap-[clamp(2.5rem,5vw,4.5rem)] px-[clamp(1.25rem,4vw,3rem)] lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <SectionKicker>Frequently asked</SectionKicker>
            <h2 className="text-[clamp(2rem,3.4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-.045em] text-[#0a2540] ">
              Good questions.{" "}
              <span className="text-[#087e8b]">Clear answers.</span>
            </h2>
            <p className="mt-6 text-sm leading-7 text-slate-500">
              A little more about how we collaborate, plan and deliver digital
              projects.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#087e8b]"
            >
              Have another question? <ArrowUpRight size={16} />
            </Link>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>
      <CTA />
    </div>
  );
}
