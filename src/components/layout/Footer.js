import Link from "next/link";
import { Sparkles } from "lucide-react";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";

export default function Footer() {
  const c = company.contact;

  return (
    <footer className="relative isolate overflow-hidden bg-[#061a30] text-white">
      {/* Background ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-52 -z-10 h-[560px] w-[560px] rounded-full bg-teal-400/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-64 -left-40 -z-10 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[120px]"
      />

      {/* Curved teal light trails */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <svg
          viewBox="0 0 1440 850"
          preserveAspectRatio="xMidYMid slice"
          className="absolute left-0 top-0 h-full w-full opacity-70"
          fill="none"
        >
          <defs>
            <linearGradient id="footerTrail1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#14B8A6" stopOpacity="0" />
              <stop offset="45%" stopColor="#2DD4BF" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="footerTrail2" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#0D9488" stopOpacity="0" />
              <stop offset="50%" stopColor="#14B8A6" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#67E8F9" stopOpacity="0" />
            </linearGradient>

            <filter id="footerGlow">
              <feGaussianBlur stdDeviation="7" />
            </filter>
          </defs>

          {/* Soft blurred curves */}
          <g filter="url(#footerGlow)" opacity="0.5">
            <path
              d="M-150 580 C180 350 360 780 690 530 S1190 210 1600 390"
              stroke="#14B8A6"
              strokeWidth="5"
            />
            <path
              d="M-100 690 C250 440 430 830 800 590 S1270 330 1580 490"
              stroke="#22D3EE"
              strokeWidth="4"
            />
          </g>

          {/* Main elegant curved trails */}
          <path
            d="M-150 580 C180 350 360 780 690 530 S1190 210 1600 390"
            stroke="url(#footerTrail1)"
            strokeWidth="1.5"
          />
          <path
            d="M-100 690 C250 440 430 830 800 590 S1270 330 1580 490"
            stroke="url(#footerTrail2)"
            strokeWidth="1.2"
          />
          <path
            d="M-100 520 C220 300 420 680 730 460 S1240 160 1550 310"
            stroke="#2DD4BF"
            strokeOpacity="0.2"
            strokeWidth="0.8"
          />
          <path
            d="M100 850 C360 590 540 780 900 560 S1280 430 1550 580"
            stroke="#22D3EE"
            strokeOpacity="0.18"
            strokeWidth="1"
          />
        </svg>

        {/* Subtle teal light spot */}
        <div className="absolute right-[12%] top-[18%] h-40 w-40 rounded-full bg-teal-400/10 blur-[90px]" />
        <div className="absolute bottom-[10%] left-[35%] h-52 w-52 rounded-full bg-cyan-400/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 sm:pt-20">
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center">
              <img
                src="/logo/whitepnglogo.png"
                alt="Pixelmind Solutions"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
              {company.description}
            </p>

            <p className="mt-6 text-xs font-semibold text-teal-200">
              Ideas engineered into digital impact.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[.17em] text-white/85">
              Explore
            </h3>

            <div className="mt-6 space-y-3 text-sm text-white/50">
              <Link
                className="block transition-colors duration-300 hover:translate-x-1 hover:text-teal-300"
                href="/about"
              >
                About us
              </Link>
              <Link
                className="block transition-colors duration-300 hover:translate-x-1 hover:text-teal-300"
                href="/portfolio"
              >
                Our work
              </Link>
              <Link
                className="block transition-colors duration-300 hover:translate-x-1 hover:text-teal-300"
                href="/industries"
              >
                Industries
              </Link>
              <Link
                className="block transition-colors duration-300 hover:translate-x-1 hover:text-teal-300"
                href="/technologies"
              >
                Technologies
              </Link>
              <Link
                className="block transition-colors duration-300 hover:translate-x-1 hover:text-teal-300"
                href="/blog"
              >
                Insights
              </Link>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[.17em] text-white/85">
              Capabilities
            </h3>

            <div className="mt-6 space-y-3 text-sm text-white/50">
              {services.slice(0, 6).map((s) => (
                <Link
                  key={s.slug}
                  className="block transition-colors duration-300 hover:translate-x-1 hover:text-teal-300"
                  href={`/services/${s.slug}`}
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Solutions and Contact */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[.17em] text-white/85">
              Solutions
            </h3>

            <div className="mt-6 space-y-3 text-sm text-white/50">
              {solutions.slice(0, 6).map((s) => (
                <Link
                  key={s.slug}
                  className="block transition-colors duration-300 hover:translate-x-1 hover:text-teal-300"
                  href={`/solutions/${s.slug}`}
                >
                  {s.title}
                </Link>
              ))}
            </div>

            <div className="mt-8 space-y-3 text-sm text-white/50">
              {c.email && (
                <a
                  className="block transition-colors hover:text-teal-300"
                  href={`mailto:${c.email}`}
                >
                  {c.email}
                </a>
              )}

              {c.phone && (
                <a
                  className="block transition-colors hover:text-teal-300"
                  href={`tel:${c.phone}`}
                >
                  {c.phone}
                </a>
              )}

              {c.address && <p className="leading-6">{c.address}</p>}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-teal-300/15 pt-7 text-[11px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              className="transition-colors hover:text-teal-300"
              href="/privacy-policy"
            >
              Privacy
            </Link>
            <Link
              className="transition-colors hover:text-teal-300"
              href="/terms-and-conditions"
            >
              Terms
            </Link>
            <Link
              className="transition-colors hover:text-teal-300"
              href="/cookie-policy"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
