import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Contact DreamRides Dubai | Book a Luxury Car",
    description: "Contact DreamRides Dubai for luxury car rental inquiries, airport delivery bookings, and VIP chauffeur services.",
    alternates: {
      canonical: "/contact",
    },
  };
}

export default function ContactPage() {
  return (
    <div className="space-y-20 px-6 py-20 sm:px-8 lg:px-12">
      <section className="mx-auto max-w-7xl space-y-10">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-gold-200">Contact concierge</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Book a luxury car rental or request VIP concierge support.</h1>
          <p className="max-w-3xl text-white/70">
            Reach out for airport delivery, premium vehicle selection, and custom Dubai driving experiences.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.7fr]">
          <div className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-8">
            <form className="space-y-6">
              <label className="block text-sm uppercase tracking-[0.28em] text-white/60">
                Full name
                <input type="text" name="name" required className="mt-3 w-full rounded-3xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none focus:border-gold-200" />
              </label>
              <label className="block text-sm uppercase tracking-[0.28em] text-white/60">
                Email address
                <input type="email" name="email" required className="mt-3 w-full rounded-3xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none focus:border-gold-200" />
              </label>
              <label className="block text-sm uppercase tracking-[0.28em] text-white/60">
                Phone / WhatsApp
                <input type="tel" name="phone" className="mt-3 w-full rounded-3xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none focus:border-gold-200" />
              </label>
              <label className="block text-sm uppercase tracking-[0.28em] text-white/60">
                Booking details
                <textarea name="message" rows={5} className="mt-3 w-full rounded-3xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none focus:border-gold-200" placeholder="Tell us your preferred dates, car model, and pickup location."></textarea>
              </label>
              <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-gold-200 px-6 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-gold-300">
                Send inquiry
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-gold-200">Office hours</p>
              <p className="mt-4 text-white/70">24/7 VIP support with immediate WhatsApp booking.</p>
              <div className="mt-6 space-y-4 text-white/80">
                <div>
                  <p className="font-semibold text-white">Address</p>
                  <p>Dubai, United Arab Emirates</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p>+971 55 123 4567</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p>info@dreamrides-dubai.com</p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-gold-200">Google Maps</p>
              <div className="mt-6 h-72 overflow-hidden rounded-3xl border border-white/10">
                <iframe
                  title="DreamRides Dubai location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.2914955752694!2d55.16705401500906!3d25.143407883904093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43464c18c4ef%3A0x28245e2c084adf7a!2sDubai%20International%20Airport!5e0!3m2!1sen!2sae!4v1716314061635!5m2!1sen!2sae"
                  className="h-full w-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
