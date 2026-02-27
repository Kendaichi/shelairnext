import type { Metadata } from "next";
import Index from "@/components/pages/Index";

export const metadata: Metadata = {
  title: "Air Conditioning Installation & Service Brisbane, Gold Coast & Sunshine Coast",
  description:
    "Expert commercial air conditioning installation, service and maintenance across Brisbane, Gold Coast and Sunshine Coast. 30+ years experience. 5-year workmanship guarantee. Licensed HVAC technicians.",
  alternates: {
    canonical: "https://shelair.com.au/",
  },
  openGraph: {
    url: "https://shelair.com.au/",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Shelair",
  description:
    "Brisbane's trusted HVAC & air conditioning experts. Commercial air conditioning installation, service and maintenance across Brisbane, the Gold Coast and the Sunshine Coast. Part of the HVACR Group.",
  url: "https://shelair.com.au",
  telephone: "0732049511",
  email: "info@shelair.com.au",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 3, 9-11 Imboon Street",
    addressLocality: "Deception Bay",
    addressRegion: "QLD",
    postalCode: "4508",
    addressCountry: "AU",
  },
  openingHours: "Mo-Fr 07:30-16:30",
  areaServed: ["Brisbane", "Gold Coast", "Sunshine Coast", "SE Queensland"],
  priceRange: "$$",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Index />
    </>
  );
}
