import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import CompareLimitToast from "@/app/components/CompareLimitToast";
import { brands, brandsList, cars, siteUrl } from "@/lib/data";
import { getCarItemListSchema } from "@/lib/structuredData";
import type { Car } from "@/lib/data";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

const categoryOptions = [
  "Supercar",
  "Sports Car",
  "Grand Tourer",
  "Luxury Sedan",
  "Luxury SUV",
  "Premium SUV",
  "Luxury Truck",
  "Electric Performance",
  "Hybrid Sports",
];

const seatOptions = [2, 4, 5, 7];

function asString(value: string | string[] | undefined) {
  return typeof value === "string" ? value : "";
}

function mergeHref(params: Record<string, string | string[] | undefined>, key: string, value: string) {
  const next = new URLSearchParams();

  for (const [paramKey, paramValue] of Object.entries(params)) {
    if (typeof paramValue === "string" && paramValue && paramKey !== key) {
      next.set(paramKey, paramValue);
    }
  }

  if (asString(params[key]) !== value) {
    next.set(key, value);
  }

  const query = next.toString();
  return query ? `/cars?${query}` : "/cars";
}

function CarShowroomCard({ car }: { car: Car }) {
  const whatsappText = encodeURIComponent(`Hello DreamRides, I would like to rent the ${car.name} in Dubai.`);

  return (
    <article className="group overflow-hidden rounded-xl border border-white/10 bg-[#151515] text-white shadow-[0_24px_70px_rgba(0,0,0,0.3)] transition hover:-translate-y-1 hover:border-[#d7b46a]/45">
      <Link href={`/cars/${car.slug}`} className="relative block aspect-[1.34] overflow-hidden bg-zinc-900">
        <Image
          src={car.image}
          alt={car.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0.05)_0%,_rgba(0,0,0,0.55)_100%)]" />
        <div className="absolute left-4 top-4 rounded-md bg-[#d7b46a] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-black">
          {car.available ? "Available now" : "On request"}
        </div>
        <div className="absolute bottom-4 right-4 rounded-md border border-white/15 bg-black/58 px-4 py-3 text-right backdrop-blur-md">
          <p className="text-xs uppercase tracking-[0.16em] text-white/55">From</p>
          <p className="text-2xl font-semibold text-[#d7b46a]" data-currency-price="" data-aed={car.price}>
            AED {car.price}
          </p>
        </div>
      </Link>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7b46a]">{car.brand}</p>
            <Link href={`/cars/${car.slug}`} className="mt-2 block text-2xl font-semibold tracking-tight transition hover:text-[#d7b46a]">
              {car.name}
            </Link>
          </div>
          <label className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-md border border-white/15 bg-white/5" aria-label={`Compare ${car.name}`}>
            <input type="checkbox" name="compare" value={car.slug} className="h-4 w-4 rounded border-white/30 bg-transparent" />
          </label>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-px overflow-hidden rounded-md bg-white/10 text-center text-xs font-semibold uppercase tracking-[0.12em] text-white/72">
          <span className="bg-[#1f1f1f] px-2 py-3">{car.seats} seats</span>
          <span className="bg-[#1f1f1f] px-2 py-3">{car.transmission}</span>
          <span className="bg-[#1f1f1f] px-2 py-3">{car.category}</span>
        </div>

        <p className="mt-5 line-clamp-2 text-sm leading-6 text-white/62">{car.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {car.highlights.slice(0, 2).map((highlight) => (
            <span key={highlight} className="rounded-md border border-white/10 px-3 py-2 text-xs text-white/64">
              {highlight}
            </span>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-[1fr_1fr_auto] gap-3">
          <a
            href={`https://wa.me/971551234567?text=${whatsappText}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#d7b46a] px-4 text-sm font-semibold text-[#d7b46a] transition hover:bg-[#d7b46a] hover:text-black"
          >
            Rent
          </a>
          <Link
            href={`/cars/${car.slug}`}
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#d7b46a] px-4 text-sm font-semibold text-black transition hover:bg-[#f0cd7e]"
          >
            Details
          </Link>
          <a
            href="tel:+971551234567"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/10 text-xs font-semibold text-white transition hover:border-[#d7b46a] hover:text-[#d7b46a]"
            aria-label={`Call about ${car.name}`}
          >
            Call
          </a>
        </div>
      </div>
    </article>
  );
}

export async function generateMetadata({ searchParams }: { searchParams: SearchParams }): Promise<Metadata> {
  const params = await searchParams;
  const hasFilters = Object.values(params).some((value) => Boolean(asString(value)));

  return {
    title: "Luxury Car Rentals in Dubai | Fleet",
    description:
      "Browse our premium Dubai fleet of Lamborghini, Ferrari, Rolls Royce, Porsche and luxury rentals with VIP delivery.",
    alternates: {
      canonical: "/cars",
    },
    robots: hasFilters
      ? {
          index: false,
          follow: true,
        }
      : {
          index: true,
          follow: true,
        },
    openGraph: {
      title: "Luxury Car Rentals in Dubai | DreamRides Fleet",
      description:
        "Browse luxury car rentals in Dubai with premium supercars, SUVs, sedans, and VIP delivery from DreamRides.",
      url: "/cars",
      type: "website",
    },
  };
}

export default async function CarsPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const query = asString(params.q).trim().toLowerCase();
  const brand = asString(params.brand);
  const category = asString(params.category);
  const seats = asString(params.seats) ? Number(params.seats) : undefined;
  const maxPrice = asString(params.maxPrice) ? Number(params.maxPrice) : undefined;

  const filteredCars = cars.filter((car) => {
    if (query && !`${car.name} ${car.brand} ${car.category}`.toLowerCase().includes(query)) return false;
    if (brand && car.brand !== brand) return false;
    if (category && car.category !== category) return false;
    if (seats && car.seats !== seats) return false;
    if (maxPrice && car.price > maxPrice) return false;
    return true;
  });

  return (
    <div className="bg-[#0f0f0f] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getCarItemListSchema(
              filteredCars.map((car) => ({
                name: car.name,
                brand: car.brand,
                image: car.image,
                price: car.price,
                url: `${siteUrl}/cars/${car.slug}`,
              })),
            ),
          ),
        }}
      />
      <CompareLimitToast />
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-16 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,_rgba(215,180,106,0.18),_transparent_32%),radial-gradient(circle_at_88%_12%,_rgba(255,255,255,0.08),_transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-white/60">
            <Link href="/" className="text-[#d7b46a] transition hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span>Car List</span>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d7b46a]">Curated Dubai fleet</p>
              <h1 className="mt-4 text-5xl font-semibold leading-none tracking-tight sm:text-7xl">
                Choose your luxury car.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
                A clean showroom catalog with top filters, direct booking actions, and premium vehicles arranged for fast comparison.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-white/50">Available now</p>
              <div className="mt-4 grid grid-cols-3 gap-px overflow-hidden rounded-md bg-white/10 text-center">
                <div className="bg-[#161616] p-4">
                  <p className="text-2xl font-semibold text-[#d7b46a]">{cars.length}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/55">Cars</p>
                </div>
                <div className="bg-[#161616] p-4">
                  <p className="text-2xl font-semibold text-[#d7b46a]">{brands.length}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/55">Brands</p>
                </div>
                <div className="bg-[#161616] p-4">
                  <p className="text-2xl font-semibold text-[#d7b46a]">24/7</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/55">Concierge</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="mx-auto max-w-[118rem] px-6 py-10 sm:px-8 lg:px-12">
        <div className="sticky top-[4.5rem] z-40 rounded-xl border border-white/10 bg-[#101010]/92 p-4 shadow-[0_22px_80px_rgba(0,0,0,0.48)] backdrop-blur-xl lg:top-[4.5rem]">
          <form action="/cars" className="grid gap-3 md:grid-cols-2 xl:grid-cols-[1.25fr_1fr_1fr_0.72fr_0.9fr_auto]">
            <label className="block">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/45">Search</span>
              <input
                name="q"
                defaultValue={asString(params.q)}
                placeholder="Model or brand"
                className="mt-2 min-h-12 w-full rounded-md border border-white/10 bg-white px-4 text-sm font-medium text-black outline-none placeholder:text-black/45 focus:border-[#d7b46a]"
              />
            </label>
            <label className="block">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/45">Brand</span>
              <select
                name="brand"
                defaultValue={brand}
                className="lux-select mt-2 min-h-12 w-full rounded-md border border-white/10 bg-white py-3 pl-4 pr-14 text-sm font-medium text-black outline-none focus:border-[#d7b46a]"
              >
                <option value="">All brands</option>
                {brandsList.map((brandOption) => (
                  <option key={brandOption} value={brandOption}>
                    {brandOption}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/45">Category</span>
              <select
                name="category"
                defaultValue={category}
                className="lux-select mt-2 min-h-12 w-full rounded-md border border-white/10 bg-white py-3 pl-4 pr-14 text-sm font-medium text-black outline-none focus:border-[#d7b46a]"
              >
                <option value="">All categories</option>
                {categoryOptions.map((categoryOption) => (
                  <option key={categoryOption} value={categoryOption}>
                    {categoryOption}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/45">Seats</span>
              <select
                name="seats"
                defaultValue={asString(params.seats)}
                className="lux-select mt-2 min-h-12 w-full rounded-md border border-white/10 bg-white py-3 pl-4 pr-14 text-sm font-medium text-black outline-none focus:border-[#d7b46a]"
              >
                <option value="">Any</option>
                {seatOptions.map((seat) => (
                  <option key={seat} value={seat}>
                    {seat}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/45">Max AED</span>
              <input
                name="maxPrice"
                defaultValue={asString(params.maxPrice)}
                inputMode="numeric"
                placeholder="3000"
                className="mt-2 min-h-12 w-full rounded-md border border-white/10 bg-white px-4 text-sm font-medium text-black outline-none placeholder:text-black/45 focus:border-[#d7b46a]"
              />
            </label>
            <button type="submit" className="mt-auto min-h-12 rounded-md bg-[#d7b46a] px-6 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-[#f0cd7e]">
              Filter
            </button>
          </form>

          <div className="mt-4 flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex min-w-0 gap-2 overflow-x-auto pb-1 xl:pb-0">
              <Link href="/cars" className="shrink-0 rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/75 transition hover:border-[#d7b46a] hover:text-[#d7b46a]">
                All cars
              </Link>
              {categoryOptions.slice(0, 7).map((categoryOption) => (
                <Link
                  key={categoryOption}
                  href={mergeHref(params, "category", categoryOption)}
                  className={`shrink-0 rounded-md border px-4 py-3 text-sm font-semibold transition ${
                    category === categoryOption
                      ? "border-[#d7b46a] bg-[#d7b46a] text-black"
                      : "border-white/10 bg-white/5 text-white/75 hover:border-[#d7b46a] hover:text-[#d7b46a]"
                  }`}
                >
                  {categoryOption}
                </Link>
              ))}
            </div>
            <div className="grid shrink-0 grid-cols-2 gap-3 sm:flex">
              <Link href="/cars" className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/15 px-5 text-sm font-semibold text-white transition hover:border-[#d7b46a] hover:text-[#d7b46a]">
                Reset
              </Link>
              <button form="fleet-compare" type="submit" className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#d7b46a] px-5 text-sm font-semibold text-[#d7b46a] transition hover:bg-[#d7b46a] hover:text-black">
                Compare selected
              </button>
            </div>
          </div>
        </div>

        <form id="fleet-compare" action="/cars/compare" method="get" className="mt-8 space-y-8">
          {filteredCars.length === 0 ? (
            <div className="rounded-xl border border-white/10 bg-[#171717] p-16 text-center text-white/70">
              <p className="text-2xl font-semibold text-white">No matching cars found</p>
              <p className="mt-4">Try adjusting your filters or browsing the full fleet.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
              {filteredCars.map((car) => (
                <CarShowroomCard key={car.slug} car={car} />
              ))}
            </div>
          )}
        </form>
      </section>
    </div>
  );
}
