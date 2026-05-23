import { siteUrl } from "@/lib/data";

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DreamRides Dubai",
    url: siteUrl,
    description:
      "Premium luxury car rental service in Dubai for exotic supercars, VIP sedans, and high-performance rentals.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/cars?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function getAutoRentalSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoRental"],
    "@id": `${siteUrl}/#business`,
    name: "DreamRides Dubai",
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    image: `${siteUrl}/logo.svg`,
    description:
      "Luxury car rental service in Dubai offering exotic supercars, executive sedans, premium SUVs, VIP delivery, and concierge booking support.",
    telephone: "+971551234567",
    email: "info@dreamrides-dubai.com",
    priceRange: "AED 620-2999",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Dubai",
      },
      {
        "@type": "Country",
        name: "United Arab Emirates",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getCarSchema(car: {
  name: string;
  brand: string;
  category: string;
  price: number;
  transmission: string;
  seats: number;
  description: string;
  image: string;
  url: string;
  productId?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: car.name,
    brand: {
      "@type": "Brand",
      name: car.brand,
    },
    description: car.description,
    image: [car.image],
    offers: {
      "@type": "Offer",
      priceCurrency: "AED",
      price: car.price,
      url: car.url,
      availability: "https://schema.org/InStock",
    },
    productID: car.productId ?? car.url,
  };
}
