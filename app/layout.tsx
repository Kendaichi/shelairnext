import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shelair.com.au"),
  icons: { icon: "/favicon.png" },
  title: {
    template: "%s | Shelair",
    default: "Shelair | Air Conditioning Installation & Service Brisbane, Gold Coast & Sunshine Coast",
  },
  description:
    "Expert commercial air conditioning installation, service and maintenance across Brisbane, Gold Coast and Sunshine Coast. 30+ years experience. 5-year workmanship guarantee. Licensed HVAC technicians.",
  authors: [{ name: "Shelair" }],
  openGraph: {
    type: "website",
    siteName: "Shelair",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Shelair | Air Conditioning Installation & Service Brisbane, Gold Coast & Sunshine Coast" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfairDisplay.variable} antialiased`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 pt-16 md:pt-20">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
