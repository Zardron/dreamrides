import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-6 text-center text-white">
      <p className="text-sm uppercase tracking-[0.35em] text-gold-200">404</p>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 max-w-xl text-white/70">
        The page you are looking for does not exist yet. Return to the DreamRides home page and continue your luxury booking journey.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full border border-gold-200 bg-gold-200/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-gold-100 transition hover:bg-gold-200 hover:text-black"
      >
        Go home
      </Link>
    </div>
  );
}
