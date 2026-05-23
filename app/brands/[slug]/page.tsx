import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CarCard from "@/app/components/CarCard";
import { brands, getBrandBySlug, getBrandSlug, getCarsByBrand, siteUrl } from "@/lib/data";
import { getBreadcrumbSchema, getCarItemListSchema } from "@/lib/structuredData";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return brands.map((brand) => ({
    slug: getBrandSlug(brand.name),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    return {
      title: "Luxury car brand not found | DreamRides Dubai",
      description: "This luxury car brand is not currently listed in the DreamRides Dubai rental fleet.",
    };
  }

  return {
    title: `Rent ${brand.name} in Dubai | DreamRides`,
    description: `Browse ${brand.name} luxury car rentals in Dubai with VIP delivery, concierge support, and premium booking service.`,
    alternates: {
      canonical: `/brands/${getBrandSlug(brand.name)}`,
    },
    openGraph: {
      title: `Rent ${brand.name} in Dubai | DreamRides`,
      description: `${brand.name} luxury car rental models available in Dubai with DreamRides concierge booking.`,
      url: `/brands/${getBrandSlug(brand.name)}`,
      images: [brand.image],
      type: "website",
    },
  };
}

export default async function BrandDetailPage({ params }: Props) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    notFound();
  }

  const brandCars = getCarsByBrand(brand.name);
  const brandUrl = `${siteUrl}/brands/${getBrandSlug(brand.name)}`;
  const breadcrumbs = [
    { name: "Home", url: siteUrl },
    { name: "Brands", url: `${siteUrl}/brands` },
    { name: brand.name, url: brandUrl },
  ];

  return (
    <div className="space-y-16 px-6 py-20 sm:px-8 lg:px-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getCarItemListSchema(
              brandCars.map((car) => ({
                name: car.name,
                brand: car.brand,
                image: car.image,
                price: car.price,
                url: `${siteUrl}/cars/${car.slug}`,
              })),
              `${brand.name} luxury car rentals in Dubai`,
            ),
          ),
        }}
      />

      <section className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.42fr] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-white/60">
              <Link href="/" className="text-[#d7b46a] transition hover:text-white">
                Home
              </Link>
              <span>/</span>
              <Link href="/brands" className="text-[#d7b46a] transition hover:text-white">
                Brands
              </Link>
              <span>/</span>
              <span>{brand.name}</span>
            </div>
            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.24em] text-[#d7b46a]">Luxury brand rental</p>
            <h1 className="mt-4 text-5xl font-semibold leading-none tracking-tight text-white sm:text-7xl">
              Rent {brand.name} in Dubai.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
              {brand.headline}. Choose from available {brand.name} models with VIP delivery, clear pricing, and DreamRides concierge booking.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm uppercase tracking-[0.18em] text-white/50">Available models</p>
            <p className="mt-3 text-5xl font-semibold text-[#d7b46a]">{brandCars.length}</p>
            <Link
              href="/contact"
              className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-[#d7b46a] px-5 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-[#f0cd7e]"
            >
              Contact concierge
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl">
        {brandCars.length === 0 ? (
          <div className="rounded-xl border border-white/10 bg-[#171717] p-12 text-center text-white/70">
            <p className="text-2xl font-semibold text-white">Models available on request</p>
            <p className="mt-4">Contact our concierge for current {brand.name} availability.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {brandCars.map((car) => (
              <CarCard key={car.slug} car={car} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
