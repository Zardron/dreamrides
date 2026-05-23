import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/data";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="overflow-hidden rounded-lg border border-black/10 bg-[#151515] text-white transition hover:-translate-y-1 hover:border-[#d7b46a]/50">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-64 w-full overflow-hidden bg-zinc-900">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition duration-700 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </Link>
      <div className="space-y-4 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7b46a]">{post.category}</p>
        <Link href={`/blog/${post.slug}`} className="text-xl font-semibold text-white transition hover:text-gold-200">
          {post.title}
        </Link>
        <p className="leading-6 text-white/70">{post.excerpt}</p>
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/50">
          <span>{post.author}</span>
          <span>{post.publishedAt}</span>
        </div>
      </div>
    </article>
  );
}
