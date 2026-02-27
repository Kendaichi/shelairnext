"use client";

import Layout from "@/components/Layout";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle, Wrench } from "lucide-react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
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

const brandsData: Record<string, {
  name: string;
  tagline: string;
  heroDesc: string;
  stats: { value: string; label: string }[];
  about: string;
  commonIssues: { title: string; desc: string }[];
  services: string[];
  productTypes: string[];
  relatedBrands: { slug: string; name: string; desc: string }[];
}> = {
  panasonic: {
    name: "Panasonic",
    tagline: "Panasonic Air Conditioning Installation & Servicing",
    heroDesc: "Shelair's preferred brand. We install, service and repair the full Panasonic commercial and residential air conditioning range — from wall-split systems to multi-split and ducted solutions across Brisbane, Gold Coast and Sunshine Coast.",
    stats: [
      { value: "500+", label: "Panasonic Installs" },
      { value: "5yr", label: "Workmanship Guarantee" },
      { value: "24/7", label: "Emergency Service" },
      { value: "30yr", label: "HVAC Experience" },
    ],
    about: "Panasonic is Shelair's preferred air conditioning supplier — chosen for their outstanding energy efficiency, inverter reliability, and long product lifespan. Whether you're installing a single split system or a full commercial multi-zone setup, Panasonic delivers consistent performance in Queensland's demanding climate. As a preferred installer, Shelair maintains strong supply relationships, ensuring competitive pricing and genuine parts availability.",
    commonIssues: [
      { title: "Inverter Board Failure", desc: "Faulty inverter PCBs causing erratic operation, error codes or complete system shutdown." },
      { title: "Refrigerant Leaks", desc: "Low charge due to flare joint or coil leaks reducing system efficiency and cooling capacity." },
      { title: "Drainage Blockages", desc: "Blocked condensate drain lines causing water leaks and potential mould growth." },
      { title: "Fan Motor Faults", desc: "Indoor or outdoor fan motor failure reducing airflow and causing high-pressure trips." },
      { title: "Remote / Control Faults", desc: "WiFi module or remote control communication errors preventing normal operation." },
      { title: "Dirty Coils & Filters", desc: "Blocked filters and fouled evaporator coils reducing efficiency and air quality." },
    ],
    services: [
      "New Panasonic split system installation",
      "Multi-split and ducted system installation",
      "Fault diagnosis and emergency repairs",
      "Filter and coil cleaning",
      "Refrigerant top-up and leak repair",
      "Inverter PCB diagnostics and replacement",
      "Drainage system servicing",
      "Preventative maintenance contracts",
      "Genuine Panasonic parts supply",
      "System performance and energy assessments",
    ],
    productTypes: [
      "Wall-Mounted Split Systems",
      "Cassette Systems",
      "Ducted Systems",
      "Multi-Split Systems",
      "Ceiling Suspended Units",
      "Floor Console Units",
    ],
    relatedBrands: [
      { slug: "daikin", name: "Daikin", desc: "Split systems, ducted and VRV multi-zone installation and servicing." },
      { slug: "mitsubishi", name: "Mitsubishi Electric", desc: "Heat pump, split system and City Multi commercial HVAC servicing." },
    ],
  },
  daikin: {
    name: "Daikin",
    tagline: "Daikin Air Conditioning Installation & Repairs",
    heroDesc: "Expert Daikin installation, servicing and repairs across the full product range — split systems, ducted, cassette, and VRV/VRF multi-zone commercial systems across South East Queensland.",
    stats: [
      { value: "400+", label: "Daikin Installs" },
      { value: "5yr", label: "Workmanship Guarantee" },
      { value: "24/7", label: "Emergency Service" },
      { value: "30yr", label: "HVAC Experience" },
    ],
    about: "Daikin is one of the world's most trusted HVAC manufacturers, widely specified for commercial buildings, offices, retail and hospitality across Australia. Their VRV systems are the go-to solution for multi-zone commercial environments. Shelair's technicians are trained on the full Daikin range and carry common parts to resolve most issues on the first visit.",
    commonIssues: [
      { title: "VRV Communication Errors", desc: "Indoor/outdoor unit communication faults causing system lockouts or zone failures." },
      { title: "Refrigerant Charge Issues", desc: "Under or overcharge causing reduced efficiency, icing or high-pressure faults." },
      { title: "PCB & Controller Faults", desc: "Main board failures requiring specialist diagnosis and genuine Daikin parts." },
      { title: "Compressor Noise or Failure", desc: "Inverter compressor issues causing noisy operation or loss of cooling/heating." },
      { title: "Drainage Problems", desc: "Blocked or incorrectly pitched drain lines causing water damage and shutdowns." },
      { title: "Filter & Coil Fouling", desc: "Dirty filters and coils leading to reduced airflow, efficiency loss and poor air quality." },
    ],
    services: [
      "New Daikin split system and ducted installation",
      "VRV/VRF multi-zone commercial installation",
      "Fault diagnosis and emergency repairs",
      "PCB and controller diagnostics",
      "Refrigerant leak detection and repair",
      "Filter and coil cleaning",
      "Drainage system servicing",
      "Preventative maintenance contracts",
      "Genuine Daikin parts supply",
      "VRV system commissioning and optimisation",
    ],
    productTypes: [
      "Wall-Mounted Split Systems",
      "Ducted Systems",
      "Cassette Units",
      "VRV/VRF Multi-Zone Systems",
      "Sky Air Commercial Units",
      "Ceiling Suspended Units",
    ],
    relatedBrands: [
      { slug: "panasonic", name: "Panasonic", desc: "Shelair's preferred brand — split system and ducted AC installation and servicing." },
      { slug: "mitsubishi", name: "Mitsubishi Electric", desc: "Heat pump, split system and City Multi commercial HVAC servicing." },
    ],
  },
  mitsubishi: {
    name: "Mitsubishi Electric",
    tagline: "Mitsubishi Electric AC Installation & Servicing",
    heroDesc: "Specialist Mitsubishi Electric air conditioning installation, servicing and repairs. From M-Series split systems to City Multi commercial VRF systems across Brisbane, Gold Coast and Sunshine Coast.",
    stats: [
      { value: "300+", label: "Mitsubishi Installs" },
      { value: "5yr", label: "Workmanship Guarantee" },
      { value: "24/7", label: "Emergency Service" },
      { value: "30yr", label: "HVAC Experience" },
    ],
    about: "Mitsubishi Electric is renowned for quiet, precise, and energy-efficient air conditioning — particularly their City Multi VRF systems, which are widely used in large commercial buildings across Australia. Their heat pump technology and inverter systems deliver reliable performance even in extreme conditions. Shelair technicians are trained on the full Mitsubishi Electric range.",
    commonIssues: [
      { title: "City Multi Communication Faults", desc: "Group controller or inter-unit communication errors causing zone failures." },
      { title: "Heat Pump Defrost Issues", desc: "Defrost cycle faults reducing heating performance in cooler conditions." },
      { title: "Inverter Compressor Faults", desc: "Compressor drive or inverter board failures causing performance loss." },
      { title: "Sensor Failures", desc: "Room, coil or pipe temperature sensor faults causing incorrect system response." },
      { title: "Remote Controller Errors", desc: "Centralised or individual controller faults preventing correct operation." },
      { title: "Refrigerant Imbalance", desc: "Incorrect charge or distribution in VRF systems causing uneven zone performance." },
    ],
    services: [
      "M-Series split system installation and servicing",
      "City Multi VRF commercial installation",
      "Fault diagnosis and emergency repairs",
      "Inverter and PCB diagnostics",
      "Heat pump servicing and repairs",
      "Refrigerant leak detection and repair",
      "Centralised controller programming",
      "Preventative maintenance contracts",
      "Genuine Mitsubishi Electric parts supply",
      "City Multi commissioning and optimisation",
    ],
    productTypes: [
      "M-Series Wall-Mounted Split Systems",
      "Ducted Systems",
      "Cassette Units",
      "City Multi VRF Systems",
      "Ceiling Suspended Units",
      "Heat Pump Systems",
    ],
    relatedBrands: [
      { slug: "panasonic", name: "Panasonic", desc: "Shelair's preferred brand — split system and ducted AC installation and servicing." },
      { slug: "daikin", name: "Daikin", desc: "Split systems, ducted and VRV multi-zone installation and servicing." },
    ],
  },
};

const BrandPage = () => {
  const { brandSlug } = useParams<{ brandSlug: string }>();
  const brand = brandsData[brandSlug || ""];

  if (!brand) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="text-4xl font-extrabold mb-4">Brand Not Found</h1>
          <Button asChild><Link href="/services">View All Services</Link></Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      

      {/* Breadcrumb */}
      <section className="bg-secondary px-6 py-4">
        <div className="container-narrow">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/brands">Brands</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>{brand.name}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div className="max-w-3xl" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
              {brand.name} Specialist
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">{brand.tagline}</h1>
            <p className="text-lg text-muted-foreground mb-8">{brand.heroDesc}</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg"><Link href="/contact">Book a {brand.name} Service <ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
              <Button asChild size="lg" variant="destructive" className="gradient-cta border-0">
                <a href="tel:0732049511"><Phone className="w-4 h-4 mr-2" /> 07 3204 9511</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary py-8 px-6">
        <div className="container-narrow grid grid-cols-2 md:grid-cols-4 gap-6">
          {brand.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-primary">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="section-padding bg-background">
        <div className="container-narrow grid lg:grid-cols-2 gap-12 items-start">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-extrabold mb-4">Why Choose a {brand.name} Specialist?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{brand.about}</p>
            <Button asChild variant="outline"><Link href="/contact">Discuss Your {brand.name} System <ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} transition={{ delay: 0.1 }}>
            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="font-bold text-lg mb-5">{brand.name} Products We Service</h3>
              <ul className="space-y-3">
                {brand.productTypes.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <motion.div className="text-center mb-16" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Common {brand.name} Issues We Fix</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our technicians are trained to diagnose and resolve these common {brand.name} faults quickly and correctly.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brand.commonIssues.map((issue, i) => (
              <motion.div
                key={issue.title}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-card rounded-2xl p-6 border border-border h-full"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Wrench className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{issue.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{issue.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-narrow max-w-3xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-extrabold mb-8">Our {brand.name} Services</h2>
            <div className="bg-card rounded-2xl border border-border p-8">
              <ul className="space-y-3">
                {brand.services.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Brands */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <motion.div className="mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-extrabold">Other Brands We Service</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {brand.relatedBrands.map((rb, i) => (
              <motion.div
                key={rb.slug}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Link href={`/brands/${rb.slug}`} className="block bg-card rounded-2xl p-8 border border-border shadow-sm group hover:border-primary/20 h-full">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{rb.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{rb.desc}</p>
                  <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    View {rb.name} Services <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default BrandPage;
