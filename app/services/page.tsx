import type { Metadata } from "next";
import Services from "@/components/pages/Services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Commercial air conditioning installation, service & repairs, cold room hire and preventative maintenance across Brisbane, Gold Coast and Sunshine Coast.",
  alternates: { canonical: "https://shelair.com.au/services" },
  openGraph: { url: "https://shelair.com.au/services" },
};

export default function ServicesPage() {
  return <Services />;
}
