import Image from "next/image";
import Link from "next/link";
import type { Car } from "@/lib/data";

export default function CarCard({ car, showCompare }: { car: Car; showCompare?: boolean }) {
  return (
    <article className="group relative overflow-hidden rounded-lg border border-black/10 bg-white text-[#151515] shadow-[0_18px_60px_rgba(24,20,14,0.08)] transition hover:-translate-y-1 hover:border-[#8a6a2f]/50">
      {showCompare ? (
        <div className="absolute right-4 top-4 z-10">
          <label className="inline-flex items-center gap-2 rounded-md bg-black/70 px-3 py-2 text-xs uppercase tracking-[0.18em] text-white backdrop-blur">
            <input type="checkbox" name="compare" value={car.slug} className="h-4 w-4 rounded border-white/20 bg-zinc-950 text-gold-200 focus:ring-gold-200" />
            Compare
          </label>
        </div>
      ) : null}
      <Link href={`/cars/${car.slug}`} className="block">
        <div className="relative h-72 w-full overflow-hidden bg-zinc-900">
          <Image
            src={car.image}
            alt={car.name}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </Link>
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-md bg-[#f5f1e8] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#5e513c]">
            {car.category}
          </span>
          <span className="text-sm font-semibold text-[#8a6a2f]">
            <span data-currency-price="" data-aed={car.price}>
              AED {car.price}
            </span>
            /day
          </span>
        </div>
        <div>
          <Link href={`/cars/${car.slug}`} className="text-xl font-semibold text-[#151515] transition hover:text-[#8a6a2f]">
            {car.name}
          </Link>
          <p className="mt-2 text-sm leading-6 text-[#5f5a51]">{car.description}</p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#777064]">
          <span>{car.seats} seats</span>
          <span>{car.transmission}</span>
        </div>
      </div>
    </article>
  );
}
