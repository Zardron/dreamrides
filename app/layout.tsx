import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import WhatsAppCTA from "@/app/components/WhatsAppCTA";
import { siteUrl } from "@/lib/data";
import { getAutoRentalSchema, getWebsiteSchema } from "@/lib/structuredData";

const googleAnalyticsId = "G-5T4XMODQRH";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  applicationName: "DreamRides Dubai",
  title: "DreamRides Dubai | Luxury Car Rental",
  description:
    "Book premium luxury cars in Dubai with VIP delivery, exotic supercars, and bespoke rental experiences.",
  metadataBase: new URL(siteUrl),
  keywords: [
    "luxury car rental Dubai",
    "rent supercar Dubai",
    "exotic car rental Dubai",
    "Ferrari rental Dubai",
    "Lamborghini rental Dubai",
    "Rolls Royce rental Dubai",
    "VIP car rental Dubai",
  ],
  authors: [{ name: "DreamRides Dubai" }],
  creator: "DreamRides Dubai",
  publisher: "DreamRides Dubai",
  category: "Luxury car rental",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "DreamRides Dubai | Luxury Car Rental",
    description:
      "Dubai’s premier exotic car rental service with Ferrari, Lamborghini, Rolls Royce, Porsche, and VIP packages.",
    type: "website",
    url: "/",
    siteName: "DreamRides Dubai",
    locale: "en_AE",
    images: [
      {
        url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DreamRides Dubai | Luxury Car Rental",
    description:
      "Book premium luxury cars in Dubai with VIP delivery, exotic supercars, and bespoke rental experiences.",
    images: ["https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebsiteSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getAutoRentalSchema()) }}
        />
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,203,77,0.12),_transparent_35%),linear-gradient(180deg,_#070707_0%,_#070707_88%,_#020202_100%)]">
          <NavBar />
          <main>{children}</main>
          <Footer />
          <WhatsAppCTA />
        </div>
      </body>
    </html>
  );
}
