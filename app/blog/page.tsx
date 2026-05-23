import BlogCard from "@/app/components/BlogCard";
import { blogPosts } from "@/lib/data";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Dubai Luxury Car Rental Blog | DreamRides",
    description: "Insights, routes, and rental tips for Dubai luxury cars, supercars, and VIP travel experiences.",
    alternates: {
      canonical: "/blog",
    },
  };
}

export default function BlogPage() {
  return (
    <div className="space-y-20 px-6 py-20 sm:px-8 lg:px-12">
      <section className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-gold-200">Dubai insights</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Luxury travel stories for your Dubai experience.</h1>
          <p className="mt-4 max-w-2xl text-white/70">
            From supercar routes to rental concierge tips, our blog covers the luxury mobility lifestyle in Dubai.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
