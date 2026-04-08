import type { Metadata } from "next";
import { createAdminClient } from "@/lib/supabase/admin";
import { getAllCities } from "@/lib/supabase/content";
import { withRetry } from "@/lib/retry";
import LocationsHub from "@/components/pages/LocationsHub";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Air Conditioning Installation & Service Near You — Service Areas",
  description:
    "Expert commercial air conditioning installation, service and maintenance across Brisbane, Gold Coast and Sunshine Coast. Find your local Shelair team.",
  alternates: { canonical: "https://shelair.com.au/locations" },
  openGraph: { url: "https://shelair.com.au/locations" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shelair.com.au" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://shelair.com.au/locations" },
  ],
};

export default async function LocationsPage() {
  const supabase = createAdminClient();
  const cities = await withRetry(() => getAllCities(supabase));
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <LocationsHub cities={cities} />
    </>
  );
}
