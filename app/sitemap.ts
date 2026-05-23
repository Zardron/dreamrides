import type { MetadataRoute } from "next";
import { siteUrl, cars, blogPosts, brands, getBrandSlug } from "@/lib/data";

const siteLastModified = "2026-05-23";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "cars", priority: 0.95, changeFrequency: "daily" as const },
    { path: "brands", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "blog", priority: 0.75, changeFrequency: "weekly" as const },
    { path: "about", priority: 0.65, changeFrequency: "monthly" as const },
    { path: "contact", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "faq", priority: 0.65, changeFrequency: "monthly" as const },
  ];

  const pages = routes.map((route) => ({
    url: route.path ? `${siteUrl}/${route.path}` : siteUrl,
    lastModified: siteLastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const carPages = cars.map((car) => ({
    url: `${siteUrl}/cars/${car.slug}`,
    lastModified: siteLastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
    images: [car.image],
  }));

  const brandPages = brands.map((brand) => ({
    url: `${siteUrl}/brands/${getBrandSlug(brand.name)}`,
    lastModified: siteLastModified,
    changeFrequency: "weekly" as const,
    priority: 0.78,
    images: [brand.image],
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.6,
    images: [post.image],
  }));

  return [...pages, ...brandPages, ...carPages, ...blogPages];
}
