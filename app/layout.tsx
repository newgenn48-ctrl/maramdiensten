import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Maram Diensten | Snelle & Betrouwbare Koeriersdiensten",
    template: "%s | Maram Diensten",
  },
  description:
    "Maram Diensten biedt snelle, betrouwbare koeriersdiensten in heel Nederland. Spoedkoeriers, same-day delivery en zakelijk transport. Bel nu voor een offerte!",
  keywords: [
    "koerier",
    "koeriersdiensten",
    "spoedkoerier",
    "same-day delivery",
    "zakelijk transport",
    "pakketbezorging",
    "Nederland",
    "betrouwbaar",
    "snel",
  ],
  authors: [{ name: "Maram Diensten" }],
  creator: "Maram Diensten",
  publisher: "Maram Diensten",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://maramdiensten.nl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Maram Diensten | Snelle & Betrouwbare Koeriersdiensten",
    description:
      "Maram Diensten biedt snelle, betrouwbare koeriersdiensten in heel Nederland. Spoedkoeriers, same-day delivery en zakelijk transport.",
    url: "https://maramdiensten.nl",
    siteName: "Maram Diensten",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maram Diensten | Snelle & Betrouwbare Koeriersdiensten",
    description:
      "Snelle, betrouwbare koeriersdiensten in heel Nederland. Spoedkoeriers, same-day delivery en zakelijk transport.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Maram Diensten",
  description:
    "Snelle en betrouwbare koeriersdiensten in heel Nederland. Spoedkoeriers, same-day delivery en zakelijk transport.",
  url: "https://maramdiensten.nl",
  telephone: "+31612345678",
  email: "info@maramdiensten.nl",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NL",
    addressLocality: "Nederland",
  },
  areaServed: {
    "@type": "Country",
    name: "Nederland",
  },
  serviceType: [
    "Spoedkoeriers",
    "Same-day delivery",
    "Zakelijke koeriersdiensten",
    "Regionaal transport",
    "Nationaal transport",
  ],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:00",
    closes: "18:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Ga naar hoofdinhoud
        </a>
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
