import { faqs } from "@/lib/data";
import { getFAQSchema } from "@/lib/structuredData";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "FAQ | DreamRides Dubai",
    description: "Frequently asked questions about luxury car rentals, booking terms, and VIP delivery in Dubai.",
  };
}

export default function FAQPage() {
  return (
    <div className="space-y-20 px-6 py-20 sm:px-8 lg:px-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }} />
      <section className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-gold-200">Help center</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Questions about your luxury rental in Dubai.</h1>
          <p className="mt-4 max-w-2xl text-white/70">Answers to our most common booking, delivery, and service questions.</p>
        </div>
        <div className="grid gap-6">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-[2rem] border border-white/10 bg-zinc-950/80 p-6 open:border-gold-200/40">
              <summary className="cursor-pointer text-lg font-semibold text-white transition group-open:text-gold-200">
                {faq.question}
              </summary>
              <p className="mt-4 leading-8 text-white/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
