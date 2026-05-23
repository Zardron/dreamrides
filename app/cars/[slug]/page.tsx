import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCarBySlug, getRelatedCars, siteUrl } from "@/lib/data";
import { getBreadcrumbSchema, getCarSchema } from "@/lib/structuredData";
import type { Metadata } from "next";
import CarCard from "@/app/components/CarCard";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) {
    return {
      title: "Car not found | DreamRides Dubai",
      description: "This luxury car could not be located in our fleet.",
    };
  }

  return {
    title: `${car.name} | Luxury Car Rental Dubai`,
    description: car.description,
    openGraph: {
      title: `${car.name} | DreamRides Dubai`,
      description: car.description,
      images: [car.image],
      type: "website",
    },
  };
}

export default async function CarDetailPage({ params }: Props) {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) {
    notFound();
  }

  const related = getRelatedCars(car.brand, car.slug);
  const breadcrumbs = [
    { name: "Home", url: `${siteUrl}` },
    { name: "Cars", url: `${siteUrl}/cars` },
    { name: car.name, url: `${siteUrl}/cars/${car.slug}` },
  ];
  const schema = getCarSchema({
    ...car,
    url: `${siteUrl}/cars/${car.slug}`,
    productId: car.slug,
  });

  return (
    <div className="space-y-16 px-6 py-20 sm:px-8 lg:px-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="mx-auto max-w-7xl">
        <div className="mb-4 flex flex-wrap items-center gap-4 text-sm uppercase tracking-[0.28em] text-white/60">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <span>•</span>
          <Link href="/cars" className="transition hover:text-white">
            Cars
          </Link>
          <span>•</span>
          <span className="text-white">{car.name}</span>
        </div>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_0.65fr] lg:items-start">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-6">
              <div className="grid gap-4 sm:grid-cols-[1.4fr_0.6fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-gold-200">{car.brand}</p>
                  <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{car.name}</h1>
                  <p className="mt-6 leading-8 text-white/70">{car.description}</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/50 p-6 text-center">
                  <p className="text-sm uppercase tracking-[0.35em] text-white/70">From</p>
                  <p className="mt-4 text-5xl font-semibold text-gold-200" data-currency-price="" data-aed={car.price}>
                    AED {car.price}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.28em] text-white/60">per day</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {car.gallery.map((src) => (
                <div key={src} className="relative h-56 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
                  <Image src={src} alt={car.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
              ))}
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-8">
              <h2 className="text-2xl font-semibold text-white">Specifications</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-black/50 p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-white/60">Category</p>
                  <p className="mt-3 text-lg text-white">{car.category}</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/50 p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-white/60">Seats</p>
                  <p className="mt-3 text-lg text-white">{car.seats}</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/50 p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-white/60">Transmission</p>
                  <p className="mt-3 text-lg text-white">{car.transmission}</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/50 p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-white/60">Availability</p>
                  <p className="mt-3 text-lg text-white">{car.available ? "In stock" : "Unavailable"}</p>
                </div>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {car.features.map((feature) => (
                  <div key={feature} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-gold-200/15 bg-[#0f0f0f]/95 p-8 shadow-xl shadow-black/25">
              <p className="text-sm uppercase tracking-[0.35em] text-gold-200">Booking inquiry</p>
              <p className="mt-4 text-3xl font-semibold text-white">Luxury rental in Dubai</p>
              <ul className="mt-8 space-y-4 text-white/80">
                <li>✅ VIP delivery</li>
                <li>✅ Airport pickup</li>
                <li>✅ 24/7 concierge support</li>
                <li>✅ Flexible rental plans</li>
              </ul>
              <a
                href={`https://wa.me/971551234567?text=${encodeURIComponent(`I would like to rent the ${car.name} in Dubai.`)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gold-200 px-6 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-gold-300"
              >
                Inquire via WhatsApp
              </a>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">Related luxury cars</p>
              <div className="mt-6 space-y-4">
                {related.map((item) => (
                  <CarCard key={item.slug} car={item} />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
