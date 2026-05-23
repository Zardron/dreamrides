import Image from "next/image";
import Link from "next/link";
import { cars } from "@/lib/data";
import type { Metadata } from "next";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export function generateMetadata(): Metadata {
  return {
    title: "Compare Luxury Cars | DreamRides Dubai",
    description: "Compare selected Dubai luxury cars side-by-side to choose the perfect rental.",
    alternates: {
      canonical: "/cars/compare",
    },
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  };
}

export default async function CompareCarsPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const compare = params.compare;
  const compareSlugs = Array.isArray(compare) ? compare : compare ? [compare] : [];
  const selectedCars = cars.filter((car) => compareSlugs.includes(car.slug)).slice(0, 3);

  if (compareSlugs.length === 0) {
    return (
      <div className="space-y-10 px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-zinc-950/80 p-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-gold-200">Car comparison</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Select cars from the fleet to compare them side-by-side.</h1>
          <p className="mt-6 text-white/70">Go back to the car listing, pick up to three vehicles, and compare performance, price, and luxury features.</p>
          <Link href="/cars" className="mt-10 inline-flex rounded-full bg-gold-200 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-gold-300">
            Browse cars
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-16 px-6 py-20 sm:px-8 lg:px-12">
      <section className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-gold-200">Car comparison</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Compare your selected luxury cars.</h1>
          <p className="mt-4 max-w-2xl text-white/70">Review the most important details for each vehicle side-by-side and choose the perfect Dubai rental.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {selectedCars.map((car) => (
            <div key={car.slug} className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-6">
              <div className="relative h-56 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
                <Image src={car.image} alt={car.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="mt-6 space-y-4">
                <p className="text-xs uppercase tracking-[0.35em] text-gold-200">{car.brand}</p>
                <h2 className="text-2xl font-semibold text-white">{car.name}</h2>
                <p className="text-white/70">{car.description}</p>
                <div className="space-y-2 rounded-3xl border border-white/10 bg-black/40 p-4 text-sm text-white/70">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-semibold text-white">Category</span>
                    <span>{car.category}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-semibold text-white">Price</span>
                    <span>
                      <span data-currency-price="" data-aed={car.price}>
                        AED {car.price}
                      </span>
                      /day
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-semibold text-white">Seats</span>
                    <span>{car.seats}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-semibold text-white">Transmission</span>
                    <span>{car.transmission}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-white/60">Highlights</p>
                  <ul className="mt-4 space-y-2 text-white/70">
                    {car.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-gold-200">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#090706]/90 p-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-white">Need more help choosing?</h2>
            <p className="mt-4 text-white/70">Contact our concierge for a personalized recommendation and VIP delivery options in Dubai.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-gold-200 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-gold-300">
            Contact concierge
          </Link>
        </div>
      </section>
    </div>
  );
}
