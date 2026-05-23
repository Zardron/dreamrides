import Image from "next/image";
import Link from "next/link";

const fleetLinks = [
  ["Luxury SUVs", "/cars?category=Luxury%20SUV"],
  ["Supercars", "/cars?category=Supercar"],
  ["Sports Cars", "/cars?category=Sports%20Car"],
  ["Luxury Sedans", "/cars?category=Luxury%20Sedan"],
];

const companyLinks = [
  ["Brands", "/brands"],
  ["Blog", "/blog"],
  ["About", "/about"],
  ["FAQ", "/faq"],
];

const socialLinks = [
  ["Instagram", "https://www.instagram.com"],
  ["TikTok", "https://www.tiktok.com"],
  ["YouTube", "https://www.youtube.com"],
  ["LinkedIn", "https://www.linkedin.com"],
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] text-sm text-white/66">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,_transparent,_rgba(215,180,106,0.75),_transparent)]" />

      <div className="mx-auto max-w-[118rem] px-5 pt-12 pb-6 sm:px-7 lg:px-12 lg:pt-16 lg:pb-8">
        <div className="grid gap-6 rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.35)] lg:grid-cols-[1.05fr_auto] lg:items-center lg:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d7b46a]">Dubai luxury car rental</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Reserve a premium car with concierge delivery anywhere in Dubai.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              href="/cars"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#d7b46a] px-7 text-xs font-bold uppercase tracking-[0.16em] text-black transition hover:bg-[#f0cd7e]"
            >
              View cars
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-7 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:border-[#d7b46a] hover:text-[#d7b46a]"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="grid gap-10 border-b border-white/10 py-12 lg:grid-cols-[1.15fr_1.4fr_0.9fr] lg:gap-14">
          <div>
            <Link href="/" className="inline-flex">
              <Image src="/logo.svg" alt="DreamRides Luxury Car Rental" width={250} height={60} className="h-auto w-[210px]" />
            </Link>
            <p className="mt-6 max-w-md text-base leading-8 text-white/62">
              Exotic supercars, executive sedans, and VIP SUVs prepared for airport arrivals, hotel delivery, business
              meetings, and special occasions across Dubai.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
              {[
                ["No deposit", "selected cars"],
                ["300 km", "daily mileage"],
                ["24/7", "concierge"],
              ].map(([value, label]) => (
                <div key={value} className="bg-[#0d0d0d] p-4">
                  <p className="text-lg font-semibold text-white">{value}</p>
                  <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#d7b46a]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-white">Fleet</p>
              <ul className="space-y-3">
                {fleetLinks.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="transition hover:text-[#d7b46a]">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-white">Company</p>
              <ul className="space-y-3">
                {companyLinks.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="transition hover:text-[#d7b46a]">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-white">Contact</p>
            <div className="space-y-4 leading-7">
              <p>Dubai, United Arab Emirates</p>
              <a href="tel:+971551234567" className="block text-white transition hover:text-[#d7b46a]">
                +971 55 123 4567
              </a>
              <a href="mailto:info@dreamrides-dubai.com" className="block transition hover:text-[#d7b46a]">
                info@dreamrides-dubai.com
              </a>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {socialLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition hover:border-[#d7b46a] hover:text-[#d7b46a]"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 DreamRides Dubai. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/faq" className="transition hover:text-white">
              Rental terms
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Support
            </Link>
            <Link href="/sitemap.xml" className="transition hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
