import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogBySlug, blogPosts } from "@/lib/data";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) {
    return {
      title: "Blog post not found | DreamRides Dubai",
      description: "The requested blog article could not be found.",
    };
  }

  return {
    title: `${post.title} | DreamRides Dubai Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) {
    notFound();
  }

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <div className="space-y-16 px-6 py-20 sm:px-8 lg:px-12">
      <section className="mx-auto max-w-6xl">
        <div className="mb-10 text-sm uppercase tracking-[0.28em] text-white/60">
          <Link href="/blog" className="transition hover:text-white">
            Blog
          </Link>
          <span className="mx-3">•</span>
          <span>{post.title}</span>
        </div>
        <article className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-8">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-gold-200">{post.category}</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{post.title}</h1>
            <p className="text-sm uppercase tracking-[0.28em] text-white/60">{post.publishedAt} • {post.author}</p>
          </div>
          <div className="mt-10 space-y-8 text-white/75">
            {post.content.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-white/10 bg-[#090706]/90 p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-gold-200">Related stories</p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="rounded-3xl border border-white/10 bg-zinc-950/80 p-6 transition hover:-translate-y-1"
              >
                <p className="text-sm uppercase tracking-[0.28em] text-white/60">{item.category}</p>
                <h2 className="mt-4 text-2xl font-semibold text-white">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/70">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
