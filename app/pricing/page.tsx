import type { Metadata } from "next";
import Pricing from "@/components/pages/Pricing";

export const metadata: Metadata = {
  title: "Commercial Refrigeration Pricing",
  description:
    "Transparent pricing for commercial cold rooms and refrigeration systems. Standard cold rooms from $15,000. Get a custom quote for your project.",
  alternates: { canonical: "https://shelair.com.au/pricing" },
  openGraph: { url: "https://shelair.com.au/pricing" },
};

export default function PricingPage() {
  return <Pricing />;
}
