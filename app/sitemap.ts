import { siteUrl, cars, blogPosts } from "@/lib/data";

export default function sitemap() {
  const routes = [
    "",
    "cars",
    "brands",
    "blog",
    "about",
    "contact",
    "faq",
    "admin",
  ];

  const pages = routes.map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString(),
  }));

  const carPages = cars.map((car) => ({
    url: `${siteUrl}/cars/${car.slug}`,
    lastModified: new Date().toISOString(),
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  return [...pages, ...carPages, ...blogPages];
}
