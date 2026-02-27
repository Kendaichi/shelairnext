import type { Metadata } from "next";
import Brands from "@/components/pages/Brands";

export const metadata: Metadata = {
  title: "Air Conditioning Brands We Install & Service | Shelair",
  description:
    "We install and service all major air conditioning brands — Panasonic, Daikin, Mitsubishi Electric, Fujitsu, Samsung, LG and more. Expert HVAC technicians across Brisbane, Gold Coast and Sunshine Coast.",
  alternates: { canonical: "https://shelair.com.au/brands" },
  openGraph: { url: "https://shelair.com.au/brands" },
};

export default function BrandsPage() {
  return <Brands />;
}
