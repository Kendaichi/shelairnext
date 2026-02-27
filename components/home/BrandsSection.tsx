"use client";

import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.08 },
  }),
};

const brands = [
  {
    slug: "panasonic",
    name: "Panasonic",
    desc: "Energy-efficient inverter systems with industry-leading reliability. Shelair's preferred brand for commercial installations.",
    speciality: "Preferred Supplier",
  },
  {
    slug: "daikin",
    name: "Daikin",
    desc: "Premium split systems and VRV multi-zone installations for commercial environments.",
    speciality: "Split & VRV Systems",
  },
  {
    slug: "mitsubishi",
    name: "Mitsubishi Electric",
    desc: "High-performance heat pump and ducted systems ideal for offices and retail.",
    speciality: "Ducted & Heat Pump",
  },
];

const otherBrands = [
  "Fujitsu", "Samsung", "LG", "Toshiba", "Carrier", "Actron", "Hitachi", "Kelvinator", "Brivis", "Temperzone",
];

const BrandsSection = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow">
      <motion.div
        className="text-center mb-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
          <Star className="w-3.5 h-3.5" /> Brand Specialists
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Our Trusted Brands — Preferred Supplier: Panasonic
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We install and service every major air conditioning brand — from split
          systems to full commercial VRV and ducted installations.
        </p>
      </motion.div>

      {/* Featured brand cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {brands.map((brand, i) => (
          <motion.div
            key={brand.slug}
            custom={i}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            whileHover={{ y: -4 }}
          >
            <Link
              href={`/brands/${brand.slug}`}
              className="block bg-card rounded-2xl p-8 border border-border shadow-sm group hover:border-primary/20 h-full"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-semibold text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">
                  {brand.speciality}
                </span>
              </div>
              <h3 className="text-2xl font-extrabold mb-2 group-hover:text-primary transition-colors">
                {brand.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {brand.desc}
              </p>
              <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                View {brand.name} Services <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Other brands pill row */}
      <motion.div
        className="bg-secondary rounded-2xl px-8 py-6 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
          Also Servicing
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {otherBrands.map((brand) => (
            <span
              key={brand}
              className="px-3 py-1.5 bg-background border border-border rounded-full text-sm font-medium text-muted-foreground"
            >
              {brand}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default BrandsSection;
