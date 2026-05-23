import Image from "next/image";
import Link from "next/link";
import CurrencySwitcher from "@/app/components/CurrencySwitcher";

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "TikTok", href: "https://tiktok.com", icon: "tiktok" },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
  { label: "Snapchat", href: "https://snapchat.com", icon: "snapchat" },
];

function SocialIcon({ icon }: { icon: string }) {
  if (icon === "facebook") {
    return <text x="12" y="17" textAnchor="middle" fontSize="15" fontWeight="800" fill="currentColor">f</text>;
  }

  if (icon === "instagram") {
    return (
      <>
        <rect x="6.5" y="6.5" width="11" height="11" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="2.4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="15.7" cy="8.4" r="1" fill="currentColor" />
      </>
    );
  }

  if (icon === "tiktok") {
    return <path d="M13.8 5v8.1a3.8 3.8 0 1 1-3.8-3.8h.8v2.6H10a1.2 1.2 0 1 0 1.2 1.2V5h2.6c.4 2 1.7 3.2 3.4 3.5v2.7c-1.3-.1-2.5-.6-3.4-1.4Z" fill="currentColor" />;
  }

  if (icon === "youtube") {
    return (
      <>
        <rect x="4.8" y="7.3" width="14.4" height="9.4" rx="3" fill="currentColor" />
        <path d="m10.8 9.6 4.4 2.4-4.4 2.4Z" fill="#000" />
      </>
    );
  }

  return (
    <>
      <path d="M8.2 17.6c1.1 1.1 2.4 1.6 3.8 1.6s2.7-.5 3.8-1.6c.6.2 1.2.2 1.7-.1-.7-.5-1.1-1-1.3-1.7 1.1-.5 1.8-1.4 2-2.5-.7.3-1.3.3-1.9.1V9.8a4.3 4.3 0 0 0-8.6 0v3.6c-.6.2-1.2.2-1.9-.1.2 1.1.9 2 2 2.5-.2.7-.6 1.2-1.3 1.7.5.3 1.1.3 1.7.1Z" fill="currentColor" />
    </>
  );
}

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/94 backdrop-blur-xl">
      <div className="mx-auto flex w-full flex-wrap items-center gap-5 px-5 py-3 sm:px-7 lg:flex-nowrap lg:px-12">
        <Link href="/" className="inline-flex min-w-0 items-center">
          <Image src="/logo.svg" alt="DreamRides Dubai" width={210} height={50} preload className="h-auto w-[164px] sm:w-[190px] lg:w-[210px]" />
        </Link>

        <nav className="order-3 hidden min-w-0 shrink-0 items-center justify-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/66 lg:order-none lg:flex">
          {[
            ["Home", "/"],
            ["Cars", "/cars"],
            ["Brands", "/brands"],
            ["Blog", "/blog"],
            ["FAQ", "/faq"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="rounded-full px-3 py-3 transition hover:bg-white/[0.08] hover:text-white xl:px-4"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 xl:gap-3">
          <form action="/cars" className="relative hidden xl:block">
            <label className="sr-only" htmlFor="nav-search">
              Search car rental
            </label>
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#d7b46a]">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m21 21-4.2-4.2m2.2-5.3a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <input
              id="nav-search"
              name="q"
              type="search"
              placeholder="Search models"
              className="h-11 w-56 rounded-full border border-white/10 bg-white/[0.04] py-2 pl-10 pr-4 text-sm font-medium text-white outline-none placeholder:text-white/42 transition focus:border-[#d7b46a] 2xl:w-80"
            />
          </form>

          <div className="hidden items-center gap-2 2xl:flex">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:border-[#d7b46a] hover:bg-[#d7b46a] hover:text-black"
                aria-label={item.label}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true">
                  <SocialIcon icon={item.icon} />
                </svg>
              </a>
            ))}
          </div>

          <CurrencySwitcher />

          <Link
            href="/contact"
            className="hidden h-11 items-center justify-center rounded-full bg-white px-5 text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-[#d7b46a] sm:inline-flex"
          >
            Contact
          </Link>

          <Link
            href="/cars"
            className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 px-4 text-xs font-semibold uppercase tracking-[0.14em] text-white lg:hidden"
          >
            Cars
          </Link>
        </div>
      </div>
    </header>
  );
}
