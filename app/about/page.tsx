import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "About DreamRides Dubai | Premium Car Rental",
    description: "Learn about DreamRides Dubai's luxury car rental service, VIP support, and bespoke experiences for travelers.",
  };
}

export default function AboutPage() {
  return (
    <div className="space-y-20 px-6 py-20 sm:px-8 lg:px-12">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-gold-200">About DreamRides</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Dubai’s elite choice for luxury car rentals and concierge mobility.</h1>
            <p className="max-w-2xl leading-8 text-white/70">
              Founded for discerning travelers, DreamRides Dubai blends exotic automotive excellence with premium service, local expertise, and seamless delivery.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "VIP delivery across Dubai",
                "Curated fleet of supercars",
                "Concierge booking support",
                "Custom rental packages",
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-zinc-950/80 p-6 text-white/80">
                  {item}
                </div>
              ))}
            </div>
            <Link href="/contact" className="inline-flex rounded-full bg-gold-200 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-gold-300">
              Meet our concierge
            </Link>
          </div>
          <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-950/80 shadow-2xl shadow-black/20">
            <div className="relative h-96 w-full">
              <Image
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury car rental Dubai"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#090706]/90 p-10">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gold-200">Our promise</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">Delivered on luxury, trust, and performance.</h2>
          </div>
          <div className="space-y-4 text-white/70">
            <p>
              Every rental includes full support, transparent pricing, and premium personalization for travelers seeking unforgettable automotive experiences in Dubai.
            </p>
            <p>
              We partner with the world’s most desirable luxury brands, and our team manages everything from airport delivery to custom itinerary planning.
            </p>
          </div>
          <div className="space-y-4 text-white/70">
            <p>
              Whether you require a supercar for an event or a Rolls Royce for VIP transportation, our service is built around speed, discretion, and attention to detail.
            </p>
            <p>
              Every booking is backed by 24/7 concierge assistance and an elevated Dubai arrival experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
