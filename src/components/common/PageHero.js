"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  CheckCircle2,
  Code2,
  Radio,
  Sparkles,
  Zap,
} from "lucide-react";

const defaultItems = [
  "Product strategy & discovery",
  "Web, mobile & business platforms",
  "Cloud, data & intelligent automation",
];

function splitIntoTwoLines(value = "") {
  const words = String(value).trim().split(/\s+/).filter(Boolean);
  if (words.length <= 1) return [words.join(" "), ""];

  let bestIndex = 1;
  let bestDifference = Infinity;
  for (let index = 1; index < words.length; index += 1) {
    const first = words.slice(0, index).join(" ");
    const second = words.slice(index).join(" ");
    const difference = Math.abs(first.length - second.length);
    if (difference < bestDifference) {
      bestDifference = difference;
      bestIndex = index;
    }
  }
  return [words.slice(0, bestIndex).join(" "), words.slice(bestIndex).join(" ")];
}

export default function PageHero({
  eyebrow = "Pixelmind Solutions · Engineering Studio",
  title,
  highlight,
  description,
  primaryLabel = "Schedule a Consultation",
  primaryHref = "/contact",
  secondaryLabel = "Explore Our Work",
  secondaryHref = "/portfolio",
  items = defaultItems,
  panelTitle = "Delivery workspace",
  panelSubtitle = "One connected view of the work",
  panelItems,
  metrics = [
    ["01", "Discover"],
    ["02", "Design"],
    ["03", "Deliver"],
  ],
  children,
  compact = false,
}) {
  const [titleLineOne, titleLineTwo] = splitIntoTwoLines(title);
  const [highlightLineOne, highlightLineTwo] = splitIntoTwoLines(highlight);

  return (
    <section className="relative isolate flex flex-col overflow-hidden bg-[#061b31] text-white lg:h-[calc(100svh-5.5rem)] lg:min-h-0">
      {/* Atmospheric blue-to-teal lighting and fine technical texture */}
      <div
        aria-hidden="true"
        className="techora-hero-bg absolute inset-0 -z-20"
      />
      <div
        aria-hidden="true"
        className="techora-hero-grid absolute inset-0 -z-10"
      />
      <div
        aria-hidden="true"
        className="techora-hero-glow techora-hero-glow-one"
      />
      <div
        aria-hidden="true"
        className="techora-hero-glow techora-hero-glow-two"
      />
      <div
        aria-hidden="true"
        className="techora-hero-streak techora-hero-streak-one"
      />
      <div
        aria-hidden="true"
        className="techora-hero-streak techora-hero-streak-two"
      />

      <div
        className={`relative mx-auto grid w-full max-w-7xl flex-1 min-h-0 grid-cols-1 items-center gap-8 px-4 py-10 sm:gap-10 sm:px-7 sm:py-14 md:px-8 lg:min-h-0 lg:grid-cols-[1.03fr_.97fr] lg:gap-6 lg:px-8 xl:gap-8 xl:px-10 2xl:px-12 ${compact ? "lg:py-10" : "lg:py-[clamp(0.75rem,2.5vh,2rem)]"} [@media(max-height:800px)]:lg:gap-5 [@media(max-height:800px)]:lg:py-2 [@media(max-height:700px)]:lg:gap-3`}
      >
        {/* Copy column */}
        <div className="relative z-10 mx-auto w-full max-w-[820px] lg:mx-0">
          <div className="mb-5 flex flex-col items-start gap-3 sm:mb-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5 xl:gap-6 [@media(max-height:800px)]:lg:mb-3">
            <span className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[.2em] text-orange-400 sm:text-[10px] sm:tracking-[.24em] lg:text-xs">
              <span className="h-px w-8 bg-orange-500" />
              {eyebrow}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/[.07] px-4 py-2 text-[8px] font-bold uppercase tracking-[.14em] text-cyan-300 shadow-[0_0_28px_rgba(34,211,238,.08)] sm:text-[9px] sm:tracking-[.18em] lg:text-[10px]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                <span className="relative h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
              </span>
              Available for new projects
            </span>
          </div>

          <h1 className="w-full max-w-[900px] text-[clamp(2rem,8vw,3.35rem)] font-semibold leading-[0.99] tracking-[-.065em] text-white sm:text-[clamp(3rem,5.3vw,5.5rem)] sm:leading-[0.98] lg:text-[clamp(2.35rem,5.4vh,4.8rem)] lg:leading-[0.96] [@media(max-height:800px)]:lg:text-[clamp(2rem,4.8vh,3.8rem)]">
            <span className="block break-words sm:whitespace-nowrap">{titleLineOne}</span>
            {titleLineTwo && <span className="block break-words sm:whitespace-nowrap">{titleLineTwo}</span>}
            {highlight && (
              <span className="techora-highlight block">
                <span className="block break-words sm:whitespace-nowrap">{highlightLineOne}</span>
                {highlightLineTwo && <span className="block break-words sm:whitespace-nowrap">{highlightLineTwo}</span>}
              </span>
            )}
          </h1>

          <p className="mt-6 max-w-[680px] text-sm font-medium leading-[1.7] text-slate-200/80 sm:mt-7 sm:text-base sm:leading-[1.75] lg:mt-[clamp(0.8rem,2.2vh,1.5rem)] lg:text-[clamp(0.95rem,1.25vw,1.15rem)] [@media(max-height:800px)]:lg:mt-4">
            {description}
          </p>

          <div className="mt-6 flex w-full flex-col gap-3 sm:mt-7 sm:w-auto sm:flex-row sm:flex-wrap lg:mt-[clamp(0.8rem,2.2vh,1.5rem)] [@media(max-height:800px)]:lg:mt-4">
            <Link
              href={primaryHref}
              className="group inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-center text-xs font-bold sm:min-h-[54px] sm:w-auto sm:px-7 sm:py-4 sm:text-sm text-[#102c48] shadow-[0_12px_35px_rgba(0,0,0,.18)] transition duration-300 hover:-translate-y-1 hover:bg-cyan-50"
            >
              {primaryLabel}
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[.025] px-5 py-3 text-center text-xs font-bold sm:min-h-[54px] sm:w-auto sm:px-7 sm:py-4 sm:text-sm text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-white/[.08]"
            >
              {secondaryLabel}
              <ArrowRight size={16} />
            </Link>
          </div>
          {children && <div className="mt-7 max-w-xl">{children}</div>}
          <div className="mt-6 flex flex-col flex-wrap gap-x-5 gap-y-2.5 border-t border-white/10 pt-5 text-[10px] font-medium text-slate-200/65 sm:mt-8 sm:flex-row sm:pt-5 sm:text-[11px] lg:mt-[clamp(0.8rem,2.2vh,1.5rem)] [@media(max-height:800px)]:lg:mt-4 [@media(max-height:800px)]:lg:pt-4">
            {items.map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 size={14} className="shrink-0 text-cyan-300" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Floating delivery dashboard with orbital light rings */}
        <div className="relative mx-auto mt-1 w-full max-w-[660px] min-w-0 px-0 pb-12 pt-4 sm:mt-0 sm:px-2 sm:py-10 lg:py-[clamp(0.5rem,2vh,1.5rem)] [@media(max-height:800px)]:lg:py-1">
          <div aria-hidden="true" className="techora-orbit-field pointer-events-none">
            <span className="techora-orbit-ring techora-orbit-ring-one" />
            <span className="techora-orbit-ring techora-orbit-ring-two" />
            <span className="techora-orbit-ring techora-orbit-ring-three" />
            <i className="techora-orbit-dot techora-orbit-dot-one" />
            <i className="techora-orbit-dot techora-orbit-dot-two" />
            <i className="techora-orbit-dot techora-orbit-dot-three" />
          </div>

          <div className="techora-dashboard relative z-10 mx-auto w-[94%] max-w-[530px] rounded-2xl border border-white/[.16] bg-slate-300/[.12] p-3.5 shadow-[0_25px_70px_rgba(0,0,0,.3)] backdrop-blur-2xl sm:w-full sm:rounded-[27px] sm:p-5 md:p-6 lg:p-[clamp(0.75rem,1.5vw,1.25rem)] [@media(max-height:800px)]:lg:p-3">
            <div className="mb-4 flex items-center justify-between gap-2 border-b border-white/[.10] pb-3 sm:mb-5 sm:pb-3 lg:mb-5 [@media(max-height:800px)]:lg:mb-3 [@media(max-height:800px)]:lg:pb-2">
              <div className="flex items-center gap-2">
                <i className="h-2.5 w-2.5 rounded-full bg-[#ff684d]" />
                <i className="h-2.5 w-2.5 rounded-full bg-orange-400" />
                <i className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
              </div>
              <span className="truncate text-[8px] font-bold uppercase tracking-[.12em] text-white/40 sm:text-[9px] sm:tracking-[.2em]">
                {panelTitle}
              </span>
              <span className="flex items-center gap-1.5 shrink-0 text-[7px] font-bold uppercase tracking-[.12em] text-cyan-200 sm:text-[8px] sm:tracking-[.18em]">
                <Radio size={11} className="animate-pulse" /> Live
              </span>
            </div>

            <div className="space-y-2.5 sm:space-y-3 lg:space-y-3 [@media(max-height:800px)]:lg:space-y-2">
              <div className="techora-dashboard-row flex items-center justify-between gap-3 rounded-lg border border-white/[.08] bg-white/[.075] px-3 py-3 sm:gap-4 sm:rounded-xl sm:px-5 sm:py-4">
                <span className="text-[8px] font-bold uppercase tracking-[.15em] text-slate-200/55 sm:text-[9px] sm:tracking-[.23em]">
                  Scope
                </span>
                <span className="text-right text-xs font-bold tracking-tight text-white sm:text-sm md:text-base">
                  Platform rebuild
                </span>
              </div>
              <div className="techora-dashboard-row flex items-center justify-between gap-3 rounded-lg border border-white/[.08] bg-white/[.075] px-3 py-3 sm:gap-4 sm:rounded-xl sm:px-5 sm:py-4">
                <span className="text-[8px] font-bold uppercase tracking-[.15em] text-slate-200/55 sm:text-[9px] sm:tracking-[.23em]">
                  Velocity
                </span>
                <span className="text-right text-base font-bold text-white sm:text-lg">
                  +41%
                </span>
              </div>
              <div className="techora-dashboard-row flex items-center justify-between gap-3 rounded-lg border border-white/[.08] bg-white/[.075] px-3 py-3 sm:gap-4 sm:rounded-xl sm:px-5 sm:py-4">
                <span className="text-[8px] font-bold uppercase tracking-[.15em] text-slate-200/55 sm:text-[9px] sm:tracking-[.23em]">
                  Release
                </span>
                <span className="text-right text-sm font-bold text-white sm:text-base">
                  On track
                </span>
              </div>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/[.10] sm:mt-5 sm:h-[9px] [@media(max-height:800px)]:lg:mt-3">
              <div className="techora-progress h-full w-[72%] rounded-full bg-gradient-to-r from-cyan-500 via-cyan-300 to-sky-300" />
            </div>
            <div className="mt-4 flex items-center justify-between gap-1 rounded-full border border-white/[.08] bg-[#061c32]/75 p-1 sm:mt-4 sm:gap-2 sm:p-1.5 [@media(max-height:800px)]:lg:mt-3">
              {(metrics || []).slice(0, 3).map((metric, index) => (
                <div
                  key={`${metric[0]}-${metric[1]}`}
                  className={`flex min-w-0 flex-1 items-center justify-center gap-2 rounded-full px-1.5 py-2.5 text-[7px] font-bold uppercase tracking-[.08em] sm:px-2 sm:py-3 sm:text-[8px] sm:tracking-[.14em] md:text-[9px] ${index === 0 ? "bg-cyan-300 text-[#06243a] shadow-[0_0_22px_rgba(34,211,238,.25)]" : "text-white/55"}`}
                >
                  <span className="hidden sm:inline">{metric[0]}</span>
                  <span className="truncate">{metric[1]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="techora-float-card techora-float-card-left absolute left-0 top-[24%] z-20 hidden rounded-2xl border border-cyan-100/15 bg-slate-300/[.13] px-4 py-4 shadow-xl backdrop-blur-xl sm:block">
            <p className="text-[9px] font-bold uppercase tracking-[.22em] text-white/45">
              Sprint
            </p>
            <p className="mt-2 text-xl font-bold text-white">02</p>
          </div>
          <div className="techora-float-card techora-float-card-right absolute right-0 top-[7%] z-20 hidden rounded-2xl border border-cyan-100/15 bg-slate-300/[.13] px-5 py-4 shadow-xl backdrop-blur-xl sm:block">
            <p className="text-[9px] font-bold uppercase tracking-[.22em] text-white/45">
              AI ops delivery
            </p>
            <p className="mt-1 text-xl font-bold text-white">99.98%</p>
          </div>
          <div className="absolute bottom-0 right-1 z-20 flex max-w-[calc(100%-8px)] items-center gap-2 rounded-xl border border-cyan-100/15 bg-[#082943]/95 px-3 py-2.5 shadow-2xl backdrop-blur-xl sm:-bottom-1 sm:right-[5%] sm:max-w-none sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-300/15 text-cyan-200">
              <Activity size={17} />
            </span>
            <div>
              <p className="text-[7px] font-bold uppercase tracking-[.12em] text-white/40 sm:text-[8px] sm:tracking-[.2em]">
                {panelSubtitle}
              </p>
              <p className="mt-0.5 text-[9px] font-bold text-white sm:text-[11px]">
                Built to move business forward
              </p>
            </div>
            <Sparkles size={15} className="ml-1 text-cyan-300" />
          </div>
          <div className="absolute -left-1 bottom-[9%] z-20 hidden h-10 w-10 items-center justify-center rounded-xl border border-cyan-100/15 bg-[#0a3450]/90 text-cyan-200 shadow-xl backdrop-blur sm:flex">
            <Code2 size={18} />
          </div>
          <div className="absolute right-[2%] top-[48%] z-20 hidden h-10 w-10 items-center justify-center rounded-xl border border-cyan-100/15 bg-[#0a3450]/90 text-cyan-200 shadow-xl backdrop-blur sm:flex">
            <Zap size={18} />
          </div>
        </div>
      </div>

      <div className="relative shrink-0 border-t border-white/[.09] bg-[#06182b]/35">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-3 px-4 py-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:px-8 sm:py-4 xl:px-12">
          <p className="text-[10px] font-bold uppercase tracking-[.22em] text-white/35">
            From idea to impact
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[9px] font-semibold uppercase tracking-[.12em] text-white/45 sm:gap-x-7 sm:text-[10px] sm:tracking-[.17em]">
            <span>Strategy</span>
            <span>Design</span>
            <span>Engineering</span>
            <span>Integration</span>
            <span>Continuous improvement</span>
          </div>
        </div>
      </div>
    </section>
  );
}
