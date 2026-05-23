import Link from "next/link";
import { cars, blogPosts } from "@/lib/data";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Admin Dashboard | DreamRides Dubai",
    description: "Manage cars, blogs, SEO fields, and bookings with the DreamRides admin dashboard.",
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

export default function AdminPage() {
  return (
    <div className="space-y-16 px-6 py-20 sm:px-8 lg:px-12">
      <section className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-zinc-950/90 p-10 shadow-2xl shadow-black/20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gold-200">Dashboard</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Manage your luxury car rental portfolio.</h1>
            <p className="mt-4 max-w-2xl text-white/70">
              Admin panels for cars, blogs, SEO details, image uploads, and real-time booking overview.
            </p>
          </div>
          <Link href="/cars" className="inline-flex rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm uppercase tracking-[0.25em] text-white transition hover:border-gold-200 hover:text-gold-200">
            View cars
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-white/60">Cars</p>
            <p className="mt-4 text-4xl font-semibold text-white">{cars.length}</p>
            <p className="mt-2 text-sm text-white/70">Active fleet models</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-white/60">Blogs</p>
            <p className="mt-4 text-4xl font-semibold text-white">{blogPosts.length}</p>
            <p className="mt-2 text-sm text-white/70">Articles published</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-white/60">SEO</p>
            <p className="mt-4 text-4xl font-semibold text-white">Optimized</p>
            <p className="mt-2 text-sm text-white/70">Rich metadata and schema</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-white/60">Analytics</p>
            <p className="mt-4 text-4xl font-semibold text-white">Realtime</p>
            <p className="mt-2 text-sm text-white/70">Dashboard-ready metrics</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-gold-200">Manage cars</p>
            <div className="mt-6 space-y-3">
              {cars.slice(0, 3).map((car) => (
                <div key={car.slug} className="rounded-3xl border border-white/10 bg-black/40 p-4">
                  <p className="font-semibold text-white">{car.name}</p>
                  <p className="text-sm text-white/60">
                    {car.brand} •{" "}
                    <span data-currency-price="" data-aed={car.price}>
                      AED {car.price}
                    </span>
                    /day
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-gold-200">Manage blog</p>
            <div className="mt-6 space-y-3">
              {blogPosts.slice(0, 3).map((post) => (
                <div key={post.slug} className="rounded-3xl border border-white/10 bg-black/40 p-4">
                  <p className="font-semibold text-white">{post.title}</p>
                  <p className="text-sm text-white/60">{post.publishedAt}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-gold-200">CMS features</p>
            <ul className="mt-6 space-y-3 text-white/70">
              <li>• Add or update vehicle details</li>
              <li>• Publish SEO-friendly articles</li>
              <li>• Manage metadata and images</li>
              <li>• Review booking inquiries</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
