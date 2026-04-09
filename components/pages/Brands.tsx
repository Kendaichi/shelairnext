"use client";

import Layout from "@/components/Layout";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Phone } from "lucide-react";
import CTABanner from "@/components/home/CTABanner";
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

const featuredBrands = [
  {
    slug: "panasonic",
    name: "Panasonic",
    desc: "Installation, servicing and repairs across the full Panasonic commercial and residential AC range.",
    speciality: "Preferred Supplier",
    detail:
      "Shelair's preferred brand — known for industry-leading energy efficiency, inverter technology and long-term reliability across split, multi-split and ducted systems.",
  },
  {
    slug: "daikin",
    name: "Daikin",
    desc: "Split systems, ducted, cassette and VRV multi-zone system installation, servicing and repairs.",
    speciality: "Split & Ducted",
    detail:
      "One of the world's most trusted HVAC brands — Daikin's VRV and inverter systems are widely used in commercial buildings, offices and retail across Australia.",
  },
  {
    slug: "mitsubishi",
    name: "Mitsubishi Electric",
    desc: "High-performance heat pump, split system and ducted AC installation and servicing.",
    speciality: "Heat Pumps & Ducted",
    detail:
      "Mitsubishi Electric's M-Series and City Multi systems are renowned for quiet operation, precise temperature control and energy efficiency in commercial environments.",
  },
];

const otherBrands = [
  { name: "Fujitsu", category: "Split & Ducted" },
  { name: "Samsung", category: "Split & Ducted" },
  { name: "LG", category: "Split & Ducted" },
  { name: "Toshiba", category: "Split & Ducted" },
  { name: "Carrier", category: "Commercial HVAC" },
  { name: "Actron", category: "Ducted Systems" },
  { name: "Hitachi", category: "Split & Ducted" },
  { name: "Kelvinator", category: "Residential & Light Commercial" },
  { name: "Brivis", category: "Ducted & Evaporative" },
  { name: "Temperzone", category: "Commercial HVAC" },
];

const Brands = () => (
  <Layout>
    {/* Hero */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          className="max-w-3xl mb-16"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4"
          >
            <Wrench className="w-3.5 h-3.5" /> Brand Specialists
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            All Major Brands. One Expert Team.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
            We install, repair and maintain commercial refrigeration, HVAC and
            beer systems across all major brands, from split systems and cold
            rooms to complex VRV, VRF and glycol installations.
          </motion.p>
        </motion.div>

        {/* Emergency banner */}
        <motion.div
          className="gradient-cta rounded-2xl p-6 md:p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-4"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-primary-foreground mb-1">
              AC System Failure?
            </h2>
            <p className="text-primary-foreground/80 text-sm">
              Call now — fast response, 24/7 across Brisbane, Gold Coast &
              Sunshine Coast.
            </p>
          </div>
          <Button asChild size="lg" variant="secondary" className="shrink-0">
            <a href="tel:0732049511">
              <Phone className="w-4 h-4 mr-2" /> 07 3204 9511
            </a>
          </Button>
        </motion.div>

        {/* Featured brand cards */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-4"
        >
          <h2 className="text-2xl font-extrabold mb-2">
            Featured Brand Specialists
          </h2>
          <p className="text-muted-foreground mb-10">
            Deep expertise in these brands with dedicated service pages, parts
            supply and specialist technicians.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {featuredBrands.map((brand, i) => (
            <motion.div
              key={brand.slug}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <Link
                href={`/brands/${brand.slug}`}
                className="block bg-card rounded-2xl p-8 border border-border shadow-sm group hover:border-primary/20 h-full"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">
                    {brand.speciality}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold mb-2 group-hover:text-primary transition-colors">
                  {brand.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {brand.detail}
                </p>
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
      </div>
    </section>

    {/* All Other Brands */}
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Also Servicing These Brands
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our technicians are trained across the full range of major air
            conditioning brands — whatever system you run, we can help.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {otherBrands.map((brand, i) => (
            <motion.div
              key={brand.name}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-card rounded-2xl p-6 border border-border text-center shadow-sm hover:border-primary/20 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Wrench className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-sm mb-1">{brand.name}</h3>
              <p className="text-xs text-muted-foreground">{brand.category}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-card rounded-2xl p-8 md:p-12 border border-border text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-extrabold mb-3">
            Don't See Your Brand?
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto">
            We install and service virtually all major air conditioning brands.
            If you don&apos;t see your system listed, get in touch — chances are
            we&apos;ve worked on it before.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Enquire About Your Brand <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>

    <CTABanner />
  </Layout>
);

export default Brands;
