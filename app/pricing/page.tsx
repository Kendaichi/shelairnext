import type { Metadata } from "next";
import CTABanner from "@/components/home/CTABanner";
import FAQSection from "@/components/home/FAQSection";
import Layout from "@/components/Layout";
import { createAdminClient } from "@/lib/supabase/admin";
import { getAllPricingTiers } from "@/lib/supabase/content";
import { withRetry } from "@/lib/retry";
import PricingCards from "./PricingCards";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Air Conditioning Pricing",
  description:
    "Transparent pricing for commercial air conditioning installation, service and maintenance. Get a custom quote for your project.",
  alternates: { canonical: "https://shelair.com.au/pricing" },
  openGraph: { url: "https://shelair.com.au/pricing" },
};

export default async function PricingPage() {
  const supabase = createAdminClient();
  const tiers = await withRetry(() => getAllPricingTiers(supabase));

  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Air Conditioning Services — Pricing",
    description:
      "Transparent pricing for air conditioning services including emergency call-outs, maintenance plans and installations.",
    url: "https://shelair.com.au/pricing",
    provider: {
      "@type": "LocalBusiness",
      name: "Shelair",
      url: "https://shelair.com.au",
      telephone: "0732049511",
    },
    itemListElement: tiers.map((tier) => ({
      "@type": "OfferCatalog",
      name: tier.name,
      description: tier.description,
      itemListElement: [
        {
          "@type": "Offer",
          name: tier.name,
          description: tier.description,
          price: tier.price.replace(/[^0-9.]/g, ""),
          priceCurrency: "AUD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: tier.price.replace(/[^0-9.]/g, ""),
            priceCurrency: "AUD",
            unitText: tier.unit,
          },
          eligibleRegion: {
            "@type": "State",
            name: "Queensland",
            addressCountry: "AU",
          },
          itemOffered: {
            "@type": "Service",
            name: tier.name,
            description: tier.features.join(". ") + ".",
            provider: {
              "@type": "LocalBusiness",
              name: "Shelair",
            },
          },
        },
      ],
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://shelair.com.au" },
      { "@type": "ListItem", position: 2, name: "Pricing", item: "https://shelair.com.au/pricing" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Layout>
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <PricingCards tiers={tiers} />
          </div>
        </section>
        <CTABanner />
        <FAQSection />
      </Layout>
    </>
  );
}
