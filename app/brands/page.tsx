import Link from "next/link";
import { Metadata } from "next";
import { brands } from "@/lib/data";

export function generateMetadata(): Metadata {
  return {
    title: "Luxury Car Brands in Dubai | DreamRides",
    description: "Explore our curated luxury car brands for premium rentals in Dubai, including Lamborghini, Ferrari, Rolls Royce, Porsche and more.",
  };
}

export default function BrandsPage() {
  return (
    <div className="space-y-20 px-6 py-20 sm:px-8 lg:px-12">
      <section className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-gold-200">Exclusive brands</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Premium automotive partners for Dubai luxury rentals.</h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Discover the world’s most prestigious supercar and luxury brands available through our Dubai fleet.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {brands.map((brand) => (
            <article
              key={brand.name}
              className="rounded-3xl border border-white/10 bg-zinc-950/80 p-6 text-center transition hover:-translate-y-1 hover:border-gold-200/40"
            >
              <div className="mx-auto flex h-28 w-full items-center justify-center rounded-2xl border border-white/10 bg-black/40 px-6">
                {brand.logoSlug && ["lamborghini", "ferrari", "rollsroyce", "porsche", "audi", "bmw", "bentley", "tesla"].includes(brand.logoSlug) ? (
                  <span
                    aria-label={`${brand.name} logo`}
                    role="img"
                    className="block h-16 w-32 bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url("https://cdn.simpleicons.org/${brand.logoSlug}/d7b46a")`,
                    }}
                  />
                ) : (
                  <span className="text-center text-sm font-semibold uppercase leading-5 tracking-[0.22em] text-gold-200">
                    {brand.logoMark ?? brand.name}
                  </span>
                )}
              </div>
              <h2 className="mt-6 text-2xl font-semibold text-white">{brand.name}</h2>
              <Link
                href={`/cars?brand=${encodeURIComponent(brand.name)}`}
                className="mt-6 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:border-gold-200 hover:text-gold-200"
              >
                View all model
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
