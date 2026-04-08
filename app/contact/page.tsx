import type { Metadata } from "next";
import Contact from "@/components/pages/Contact";
import { createAdminClient } from "@/lib/supabase/admin";
import { getSiteSettings } from "@/lib/supabase/content";
import { withRetry } from "@/lib/retry";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Request a quote for air conditioning installation, service or maintenance. Fast response, licensed HVAC technicians. Shelair — Brisbane & SE Queensland.",
  alternates: { canonical: "https://shelair.com.au/contact" },
  openGraph: { url: "https://shelair.com.au/contact" },
};

export default async function ContactPage() {
  const supabase = createAdminClient();
  const settings = await withRetry(() => getSiteSettings(supabase));
  return <Contact settings={settings} />;
}
