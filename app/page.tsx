import Link from "next/link";
import type { Metadata } from "next";
import { cars, brands, brandsList, blogPosts, faqs, getBrandSlug } from "@/lib/data";
import CarCard from "@/app/components/CarCard";
import BlogCard from "@/app/components/BlogCard";
import HeroCarousel from "@/app/components/HeroCarousel";

export const metadata: Metadata = {
  title: "Luxury Car Rental in Dubai | DreamRides",
  description:
    "Rent luxury cars in Dubai with DreamRides. Book Ferrari, Lamborghini, Rolls Royce, Porsche, and VIP SUVs with concierge delivery.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Luxury Car Rental in Dubai | DreamRides",
    description:
      "Rent luxury cars in Dubai with VIP delivery, exotic supercars, clear rates, and WhatsApp concierge booking.",
    url: "/",
    type: "website",
  },
};

const rentalTerms = [
  {
    value: "No deposit",
    label: "eligible rentals",
    copy: "Clear booking terms before handover, with no-deposit options on selected cars.",
  },
  {
    value: "VAT included",
    label: "transparent rate",
    copy: "Rates are presented with the essentials included, so clients can compare quickly.",
  },
  {
    value: "300 km",
    label: "daily mileage",
    copy: "Generous mileage guidance for city meetings, coastline drives, and hotel transfers.",
  },
  {
    value: "24/7",
    label: "concierge",
    copy: "WhatsApp-first booking support, airport delivery, and on-trip assistance.",
  },
];

const categories = [
  ["Exotic", "Supercar"],
  ["Luxury", "Luxury Sedan"],
  ["Supercar", "Supercar"],
  ["Most popular", ""],
  ["New cars", ""],
  ["Exclusive", "Grand Tourer"],
  ["SUV", "Luxury SUV"],
  ["Convertible", "Sports Car"],
];

const services = [
  {
    title: "Airport luxury rental",
    copy: "DXB and DWC delivery with meet-and-greet timing, prepared documents, and a ready-to-drive handover.",
  },
  {
    title: "Weekly and monthly plans",
    copy: "Flexible terms for business travel, extended stays, seasonal guests, and residents who want more freedom.",
  },
  {
    title: "Chauffeur service",
    copy: "A discreet driver for executive meetings, weddings, VIP events, and evenings when comfort matters most.",
  },
  {
    title: "Doorstep delivery",
    copy: "Hotel, residence, office, marina, or private terminal delivery across Dubai and nearby Emirates.",
  },
];

const occasions = ["Business travel", "Weddings", "VIP events", "Photo shoots", "Dubai holidays", "Corporate transfers"];

const reliableLogoSlugs = ["lamborghini", "ferrari", "rollsroyce", "porsche", "audi", "bmw", "bentley", "tesla"];

function BrandCarouselMark({
  brand,
}: {
  brand: {
    name: string;
    logoSlug?: string;
    logoMark?: string;
  };
}) {
  const svgClass = "h-10 w-24 text-[#d7b46a]";

  if (brand.logoSlug && reliableLogoSlugs.includes(brand.logoSlug)) {
    return (
      <span
        aria-label={`${brand.name} logo`}
        role="img"
        className="block h-9 w-24 shrink-0 bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://cdn.simpleicons.org/${brand.logoSlug}/d7b46a")`,
        }}
      />
    );
  }

  if (brand.name === "Chevrolet") {
    return (
      <svg viewBox="0 0 120 48" className={svgClass} aria-label="Chevrolet logo" role="img">
        <path fill="currentColor" d="M45 15h32l-3 7h31v8H70l-4 8H34l4-8H15v-8h27l3-7Z" />
        <path fill="#141414" d="M49 20h22l-2 5h26v2H65l-4 7H43l3-7H25v-2h23l1-5Z" opacity=".75" />
      </svg>
    );
  }

  if (brand.name === "GMC") {
    return (
      <svg viewBox="0 0 120 48" className={svgClass} aria-label="GMC logo" role="img">
        <text x="60" y="32" textAnchor="middle" fill="currentColor" fontSize="28" fontWeight="800" letterSpacing="2">
          GMC
        </text>
      </svg>
    );
  }

  if (brand.name === "Jetour") {
    return (
      <svg viewBox="0 0 120 48" className={svgClass} aria-label="Jetour logo" role="img">
        <path fill="currentColor" d="M28 29h28l8-10h28l-8 10H66l-7 8H22l6-8Zm36-18h34l-5 6H59l5-6Z" />
        <path fill="currentColor" d="M30 18h24l-5 6H25l5-6Z" opacity=".72" />
      </svg>
    );
  }

  if (brand.name === "Land Rover") {
    return (
      <svg viewBox="0 0 120 48" className={svgClass} aria-label="Land Rover logo" role="img">
        <ellipse cx="60" cy="24" rx="43" ry="16" fill="none" stroke="currentColor" strokeWidth="3" />
        <text x="60" y="22" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="800" letterSpacing="1">
          LAND
        </text>
        <text x="60" y="34" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="800" letterSpacing="1">
          ROVER
        </text>
      </svg>
    );
  }

  if (brand.name === "Maybach") {
    return (
      <svg viewBox="0 0 120 48" className={svgClass} aria-label="Maybach logo" role="img">
        <path fill="none" stroke="currentColor" strokeWidth="3" d="M60 5 91 41H29L60 5Z" />
        <path fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" d="M42 35V17l18 18 18-18v18M52 35V23l8 9 8-9v12" />
      </svg>
    );
  }

  if (brand.name === "Mercedes-Benz") {
    return (
      <svg viewBox="0 0 120 48" className={svgClass} aria-label="Mercedes-Benz logo" role="img">
        <circle cx="60" cy="24" r="18" fill="none" stroke="currentColor" strokeWidth="3" />
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M60 8v16l13 12M60 24 47 36M60 24 74 15" />
      </svg>
    );
  }

  if (brand.name === "Ram") {
    return (
      <svg viewBox="0 0 120 48" className={svgClass} aria-label="Ram logo" role="img">
        <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="3" d="M35 10h50l-5 25-20 8-20-8-5-25Z" />
        <path fill="currentColor" d="M47 19c6-6 20-6 26 0l-4 5c-5-4-13-4-18 0l-4-5Zm3 7 10 12 10-12-10 4-10-4Z" />
      </svg>
    );
  }

  if (brand.name === "Cadillac") {
    return (
      <svg viewBox="0 0 120 48" className={svgClass} aria-label="Cadillac logo" role="img">
        <path fill="none" stroke="currentColor" strokeWidth="3" d="M42 9h36v18c0 12-11 18-18 20-7-2-18-8-18-20V9Z" />
        <path fill="currentColor" d="M48 15h8v22c-3-2-8-6-8-12V15Zm12 0h8v26c-2 1-6 1-8 0V15Zm12 0h0v10c0 6-5 10-8 12V15h8Z" />
      </svg>
    );
  }

  return <span className="text-center text-sm font-semibold uppercase leading-5 tracking-[0.2em] text-[#d7b46a]">{brand.logoMark ?? brand.name}</span>;
}

export default function Home() {
  const featuredCars = cars.slice(0, 6);
  const heroSlides = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Lamborghini_Huracan_Evo%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS1010%29.jpg",
      alt: "Orange Lamborghini displayed inside a premium auto showroom",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Porsche_911_GT3_RS_%282022%29_1X7A7164.jpg",
      alt: "Porsche 911 GT3 RS displayed under indoor auto show lighting",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/dd/McLaren_720S%2C_IAA_2017%2C_%281Y7A3405%29.jpg",
      alt: "McLaren 720S displayed inside an indoor luxury motor show",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/3/30/BMW_i8_Roadster%2C_GIMS_2018%2C_Le_Grand-Saconnex_%281X7A1877%29.jpg",
      alt: "BMW i8 Roadster displayed inside a polished showroom setting",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Ferrari_Purosangue_IMG_9554.jpg",
      alt: "Ferrari Purosangue displayed inside a premium car exhibition space",
    },
  ];

  return (
    <div className="overflow-hidden bg-[#f5f1e8] text-[#151515]">
      <section className="relative min-h-[calc(100svh-80px)] overflow-hidden text-white">
        <HeroCarousel slides={heroSlides} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(0,0,0,0.82)_0%,_rgba(0,0,0,0.56)_44%,_rgba(0,0,0,0.22)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(0deg,_#f5f1e8_0%,_rgba(245,241,232,0)_100%)]" />

        <div className="relative mx-auto flex min-h-[calc(100svh-80px)] max-w-7xl flex-col justify-center px-6 pb-24 pt-20 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-7">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d7b46a]">
              Dubai luxury car rental
            </p>
            <h1 className="text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Luxury Car Rental in Dubai
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/78">
              A modern VIP rental experience inspired by the best boutique operators: curated supercars, clear terms,
              fast WhatsApp booking, and delivery wherever your itinerary begins.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/cars"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#d7b46a] px-7 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#f0cd7e]"
              >
                View cars
              </Link>
              <Link
                href="https://wa.me/971551234567?text=Hello%20DreamRides%2C%20I%27d%20like%20to%20book%20a%20luxury%20car%20rental."
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/25 px-7 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[#d7b46a] hover:text-[#d7b46a]"
              >
                WhatsApp concierge
              </Link>
            </div>
          </div>

          <form
            action="/cars"
            className="mt-12 grid gap-3 border border-white/15 bg-black/58 p-3 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-[1.15fr_1fr_0.9fr_0.9fr_auto]"
          >
            <label className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/55">
              Brand
              <select
                name="brand"
                className="lux-select mt-2 min-h-12 w-full rounded-md border border-white/10 bg-white py-3 pl-3 pr-14 text-sm font-medium text-black outline-none focus:border-[#d7b46a]"
                defaultValue=""
              >
                <option value="">All brands</option>
                {brandsList.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/55">
              Category
              <select
                name="category"
                className="lux-select mt-2 min-h-12 w-full rounded-md border border-white/10 bg-white py-3 pl-3 pr-14 text-sm font-medium text-black outline-none focus:border-[#d7b46a]"
                defaultValue=""
              >
                <option value="">Any category</option>
                <option value="Supercar">Supercar</option>
                <option value="Sports Car">Sports car</option>
                <option value="Luxury Sedan">Luxury sedan</option>
                <option value="Luxury SUV">Luxury SUV</option>
              </select>
            </label>
            <label className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/55">
              Service
              <select
                name="service"
                className="lux-select mt-2 min-h-12 w-full rounded-md border border-white/10 bg-white py-3 pl-3 pr-14 text-sm font-medium text-black outline-none focus:border-[#d7b46a]"
                defaultValue=""
              >
                <option value="">Any service</option>
                <option value="self-drive">Self drive</option>
                <option value="chauffeur">With chauffeur</option>
                <option value="airport">Airport delivery</option>
                <option value="event">Event rental</option>
              </select>
            </label>
            <label className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/55">
              Max AED
              <input
                name="maxPrice"
                inputMode="numeric"
                placeholder="3000"
                className="mt-2 min-h-12 w-full rounded-md border border-white/10 bg-white px-3 text-sm font-medium text-black outline-none focus:border-[#d7b46a]"
              />
            </label>
            <button
              type="submit"
              className="min-h-12 self-end rounded-md bg-white px-6 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-[#d7b46a]"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden border-y border-black/10 bg-[#111111] py-7 text-white">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-[linear-gradient(90deg,_#111111_0%,_rgba(17,17,17,0)_100%)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-[linear-gradient(270deg,_#111111_0%,_rgba(17,17,17,0)_100%)]" />
        <div className="brand-marquee flex w-max items-center">
          {[0, 1].map((track) => (
            <div key={track} className="flex shrink-0 items-center gap-4 pr-4">
              {brands.map((brand) => (
                <Link
                  key={`${track}-${brand.name}`}
                  href={`/brands/${getBrandSlug(brand.name)}`}
                  className="flex h-24 min-w-48 flex-col items-center justify-center rounded-md border border-white/10 bg-white/[0.03] px-6 transition hover:border-[#d7b46a]/60 hover:bg-white/[0.06]"
                  aria-label={`View ${brand.name} models`}
                >
                  <BrandCarouselMark brand={brand} />
                  <span className="mt-2 block text-center text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/72">
                    {brand.name}
                  </span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-6 pt-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-lg border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {rentalTerms.map((term) => (
            <div key={term.value} className="bg-[#f5f1e8] p-6">
              <p className="text-2xl font-semibold tracking-tight text-[#151515]">{term.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6a2f]">{term.label}</p>
              <p className="mt-4 text-sm leading-6 text-[#514d45]">{term.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a6a2f]">Browse by intent</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#151515] sm:text-5xl">
                Find the right car before the first message.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(([category, filter]) => (
                <Link
                  key={category}
                  href={filter ? `/cars?category=${encodeURIComponent(filter)}` : "/cars"}
                  className="rounded-md border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-[#25221d] transition hover:border-[#8a6a2f] hover:text-[#8a6a2f]"
                >
                  Rent {category} Car
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredCars.map((car) => (
              <CarCard key={car.slug} car={car} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d7b46a]">Service coverage</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Built for Dubai arrivals, business days, and special nights.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/68">
              Boutique-level convenience belongs near the top of the experience: delivery, flexible durations,
              chauffeur options, and direct concierge contact should be visible before users reach checkout.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2">
            {services.map((service, index) => (
              <div key={service.title} className="bg-[#171717] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7b46a]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/64">{service.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a6a2f]">Any occasion</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#151515] sm:text-5xl">
              Premium rentals for how Dubai is actually used.
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {occasions.map((occasion) => (
                <div key={occasion} className="rounded-md border border-black/10 bg-white p-5">
                  <p className="font-semibold text-[#171717]">{occasion}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-[0_24px_80px_rgba(20,16,10,0.12)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a6a2f]">How booking works</p>
            <div className="mt-6 space-y-6">
              {[
                ["Choose a model", "Filter by brand, body style, seats, and budget from the live cars."],
                ["Confirm terms", "Review mileage, deposit option, payment method, delivery point, and rental duration."],
                ["Meet the car", "Your concierge coordinates documents, delivery timing, and support by WhatsApp."],
              ].map(([title, copy], index) => (
                <div key={title} className="grid grid-cols-[2.5rem_1fr] gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#151515] text-sm font-semibold text-[#d7b46a]">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#171717]">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#59544c]">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a6a2f]">Rental intelligence</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#151515] sm:text-5xl">
                Guides that help clients book with confidence.
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-black/15 px-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#151515] transition hover:border-[#8a6a2f] hover:text-[#8a6a2f]"
            >
              Read blog
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {blogPosts.slice(0, 2).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a6a2f]">Questions before booking</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#151515] sm:text-5xl">
              Keep the details close to the decision.
            </h2>
          </div>
          <div className="divide-y divide-black/10 rounded-lg border border-black/10 bg-white">
            {faqs.slice(0, 4).map((faq) => (
              <details key={faq.question} className="group p-6">
                <summary className="cursor-pointer list-none font-semibold text-[#171717]">
                  {faq.question}
                </summary>
                <p className="mt-4 text-sm leading-7 text-[#59544c]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-lg bg-[#151515] p-8 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d7b46a]">Callback in minutes</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Tell us the car, date, and delivery point. Concierge handles the rest.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#d7b46a] px-6 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-[#f0cd7e]"
            >
              Request callback
            </Link>
            <Link
              href="/cars"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/20 px-6 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:border-[#d7b46a] hover:text-[#d7b46a]"
            >
              Compare cars
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
