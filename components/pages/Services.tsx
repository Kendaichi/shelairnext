"use client";

import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Phone,
  CheckCircle,
  Wrench,
  Thermometer,
  ShieldCheck,
  Clock,
  BarChart3,
  Snowflake,
  Search,
  Monitor,
  FileText,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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

const services = [
  {
    icon: Clock,
    title: "24/7 Emergency Repairs",
    desc: "Round-the-clock emergency breakdown service with rapid response times across Brisbane, Gold Coast and Sunshine Coast.",
  },
  {
    icon: Wrench,
    title: "Preventative Maintenance",
    desc: "Scheduled maintenance plans that catch issues before they become costly breakdowns. Contract customers receive priority service and discounted repair rates.",
  },
  {
    icon: ShieldCheck,
    title: "5-Year Workmanship Guarantee",
    desc: "Every installation is backed by a certified 5-year workmanship guarantee — giving you complete confidence in quality and compliance.",
  },
  {
    icon: Thermometer,
    title: "Energy Efficiency Upgrades",
    desc: "System tune-ups and targeted upgrades that reduce energy consumption and running costs on ageing or poorly maintained HVAC systems.",
  },
  {
    icon: BarChart3,
    title: "System Design & Consulting",
    desc: "From single split systems to full commercial multi-zone designs — we assess your space and engineer the most efficient solution.",
  },
  {
    icon: Snowflake,
    title: "Cold Room Hire",
    desc: "Need temporary cool storage? We offer cold room hire across South East Queensland for events, peak seasons, or emergency use.",
  },
];

const steps = [
  {
    icon: Phone,
    num: "01",
    title: "You Call — 24/7",
    desc: "Speak to a real HVAC technician on our 24/7 emergency hotline. No call centres, no waiting. We triage your issue immediately.",
  },
  {
    icon: Search,
    num: "02",
    title: "We Dispatch & Diagnose",
    desc: "The nearest qualified technician is dispatched promptly. On-site fault diagnosis with full cost transparency before any work begins.",
  },
  {
    icon: Wrench,
    num: "03",
    title: "Repair or Install",
    desc: "We carry common parts and components on every truck. Most repairs and installations are completed on the first visit — minimising your downtime.",
  },
  {
    icon: CheckCircle,
    num: "04",
    title: "Test & Certify",
    desc: "System tested to manufacturer specifications. All work signed off by a licensed technician with full compliance documentation.",
  },
  {
    icon: Monitor,
    num: "05",
    title: "Workmanship Guarantee",
    desc: "Every installation is backed by our 5-year workmanship guarantee — so you can have complete confidence in the quality of our work.",
  },
  {
    icon: FileText,
    num: "06",
    title: "Ongoing Maintenance",
    desc: "Move from reactive to proactive with a scheduled maintenance plan. Extend system life, cut energy costs, and keep your business comfortable year-round.",
  },
];

const servicesData: Record<
  string,
  {
    title: string;
    subtitle: string;
    heroDesc: string;
    stats: { value: string; label: string }[];
    overview: string;
    benefits: string[];
    process: { step: string; title: string; desc: string }[];
    faqs: { q: string; a: string }[];
    relatedServices: { slug: string; title: string; desc: string }[];
  }
> = {
  "air-conditioning-installation": {
    title: "Air Conditioning Installation",
    subtitle: "AC Installation",
    heroDesc:
      "Full commercial AC design, supply, and installation across Brisbane, Gold Coast and Sunshine Coast. Every project backed by our 5-year workmanship guarantee.",
    stats: [
      { value: "5yr", label: "Workmanship Guarantee" },
      { value: "30+", label: "Years Experience" },
      { value: "ARC", label: "Authorised" },
      { value: "Free", label: "Quotes" },
    ],
    overview:
      "From single split systems to full VRV multi-zone installations, we handle every stage — site survey, system design, supply, installation, and commissioning. As Panasonic's preferred supplier and authorised installers for all major brands, we deliver the right system for your building and budget.",
    benefits: [
      "Full design-to-commissioning service",
      "Panasonic preferred supplier — all major brands available",
      "5-year workmanship guarantee on every installation",
      "ARC authorised technicians",
      "Free no-obligation quotes",
      "Interest-free finance options available",
    ],
    process: [
      {
        step: "1",
        title: "Site Survey",
        desc: "On-site assessment of your space, access, power, and climate control requirements.",
      },
      {
        step: "2",
        title: "Design & Quote",
        desc: "System specification, energy modelling, and a detailed fixed-price quote — no surprises.",
      },
      {
        step: "3",
        title: "Supply & Install",
        desc: "Equipment supplied and installed by our licensed HVAC technicians.",
      },
      {
        step: "4",
        title: "Commission & Guarantee",
        desc: "System commissioned, tested, and signed off with your 5-year workmanship guarantee.",
      },
    ],
    faqs: [
      {
        q: "What brands do you install?",
        a: "We install all major brands including Panasonic (our preferred supplier), Daikin, Mitsubishi Electric, Fujitsu, Samsung, LG, Toshiba, and more.",
      },
      {
        q: "Do you provide a workmanship guarantee?",
        a: "Yes — every installation is backed by our 5-year workmanship guarantee for complete peace of mind.",
      },
      {
        q: "Do you offer free quotes?",
        a: "Yes. We provide no-obligation quotes with $0 upfront. Interest-free finance options are also available.",
      },
    ],
    relatedServices: [
      {
        slug: "air-conditioning-service-repairs",
        title: "AC Service & Repairs",
        desc: "Keep your new system running at peak efficiency with ongoing servicing.",
      },
      {
        slug: "commercial-refrigeration-maintenance",
        title: "Preventative Maintenance",
        desc: "Scheduled maintenance plans for extended equipment life and lower running costs.",
      },
    ],
  },
  "air-conditioning-service-repairs": {
    title: "Air Conditioning Service & Repairs",
    subtitle: "AC Service & Repairs",
    heroDesc:
      "24/7 emergency AC repairs and scheduled servicing across Brisbane, Gold Coast and Sunshine Coast. Fast diagnosis and same-visit fixes for all major brands.",
    stats: [
      { value: "24/7", label: "Always On Call" },
      { value: "All", label: "Major Brands" },
      { value: "ARC", label: "Authorised" },
      { value: "Fast", label: "Response" },
    ],
    overview:
      "When your air conditioning breaks down, every hour matters. Our emergency repair team carries parts for all major brands on every van, so we diagnose and fix on the first visit wherever possible. From compressor failures and refrigerant leaks to electrical faults and control board issues, we've seen it all and fixed it fast.",
    benefits: [
      "24/7 emergency call-out service",
      "Fast response across Brisbane, Gold Coast and Sunshine Coast",
      "All major brands serviced — Panasonic, Daikin, Mitsubishi, Fujitsu and more",
      "Fully stocked vans with common parts",
      "ARC authorised technicians",
      "Transparent pricing — no hidden call-out fees",
    ],
    process: [
      {
        step: "1",
        title: "Call Us",
        desc: "Call our 24/7 line. A qualified HVAC technician answers — not a call centre.",
      },
      {
        step: "2",
        title: "Priority Dispatch",
        desc: "We dispatch the nearest available technician with the right parts for your system.",
      },
      {
        step: "3",
        title: "Diagnose & Fix",
        desc: "On-site diagnosis and repair, typically within a single visit.",
      },
      {
        step: "4",
        title: "Test & Document",
        desc: "System tested and signed off with full service documentation.",
      },
    ],
    faqs: [
      {
        q: "How quickly can you respond to an emergency?",
        a: "We offer 24/7 emergency call-outs across Brisbane, Gold Coast and Sunshine Coast with fast response times.",
      },
      {
        q: "Do you charge extra for after-hours call-outs?",
        a: "We have transparent after-hours rates with no hidden fees. You'll know the cost before we start work.",
      },
      {
        q: "What brands do you repair?",
        a: "We service all major commercial AC brands including Panasonic, Daikin, Mitsubishi Electric, Fujitsu, Samsung, LG, Toshiba, and more.",
      },
    ],
    relatedServices: [
      {
        slug: "air-conditioning-installation",
        title: "AC Installation",
        desc: "When repairs aren't enough — full design, supply, and installation service.",
      },
      {
        slug: "commercial-refrigeration-maintenance",
        title: "Preventative Maintenance",
        desc: "Scheduled servicing that prevents emergencies before they happen.",
      },
    ],
  },
  "commercial-refrigeration-maintenance": {
    title: "Preventative Maintenance Plans",
    subtitle: "Preventative Maintenance",
    heroDesc:
      "Scheduled HVAC maintenance that catches problems before they become costly breakdowns. Reduce downtime, extend equipment life, and unlock priority service + discounted repair rates.",
    stats: [
      { value: "60%", label: "Fewer Breakdowns" },
      { value: "30%", label: "Energy Savings" },
      { value: "2x", label: "System Lifespan" },
      { value: "Priority", label: "Emergency Response" },
    ],
    overview:
      "Reactive repairs cost significantly more than prevention. Our maintenance plans include scheduled inspections, filter cleaning, refrigerant checks, electrical testing and system optimisation — everything you need to keep systems running efficiently and avoid surprise breakdowns.",
    benefits: [
      "Scheduled inspections by qualified HVAC technicians",
      "Filter cleaning and component checks",
      "Refrigerant level and leak testing",
      "Electrical connection and safety testing",
      "Energy efficiency assessment",
      "Priority emergency response and discounted repair rates for plan members",
    ],
    process: [
      {
        step: "1",
        title: "System Audit",
        desc: "We assess your current systems, age, condition and service history.",
      },
      {
        step: "2",
        title: "Custom Plan",
        desc: "A maintenance schedule tailored to your equipment and operational requirements.",
      },
      {
        step: "3",
        title: "Scheduled Visits",
        desc: "Regular inspections with full service reporting.",
      },
      {
        step: "4",
        title: "Ongoing Priority",
        desc: "Priority emergency response and discounted repair rates throughout your contract.",
      },
    ],
    faqs: [
      {
        q: "How often do you service?",
        a: "Most plans include quarterly visits, but we tailor frequency to your system age, usage and requirements.",
      },
      {
        q: "Do maintenance plan members get priority for emergencies?",
        a: "Yes — maintenance plan members receive priority dispatch and discounted repair rates.",
      },
      {
        q: "Will this actually save me money?",
        a: "On average, our clients see significantly fewer breakdowns and lower energy costs within the first year.",
      },
    ],
    relatedServices: [
      {
        slug: "air-conditioning-service-repairs",
        title: "AC Service & Repairs",
        desc: "Round-the-clock breakdown service when you need it most.",
      },
      {
        slug: "air-conditioning-installation",
        title: "AC Installation",
        desc: "When it's time to upgrade — full design, supply, and installation.",
      },
    ],
  },
};

const Services = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = servicesData[serviceSlug || ""];

  if (!service) {
    return (
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
                <Wrench className="w-3.5 h-3.5" /> Our Services
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl font-extrabold mb-6"
              >
                Air Conditioning Installation, Service & Repairs
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-lg text-muted-foreground"
              >
                From emergency callouts to full commercial installations and
                ongoing maintenance plans — one expert HVAC team for every need
                across Brisbane, Gold Coast & Sunshine Coast.
              </motion.p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  custom={i}
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <div className="flex flex-col h-full bg-card rounded-2xl p-8 border border-border shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <s.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-xl font-extrabold mb-3">{s.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Callout Banner */}
        <section className="bg-primary py-12 px-6">
          <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-extrabold text-primary-foreground mb-2">
                Air Conditioning Emergency?
              </h2>
              <p className="text-primary-foreground/80">
                Call now for priority dispatch — fast response, 24/7 across
                South East Queensland.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary" className="shrink-0">
              <a href="tel:0732049511">
                <Phone className="w-4 h-4 mr-2" /> 07 3204 9511
              </a>
            </Button>
          </div>
        </section>

        {/* All Brands Prose Block */}
        <section className="section-padding bg-background">
          <div className="container-narrow grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground leading-relaxed mb-4">
                We install and service all major air conditioning brands —
                Panasonic (our preferred supplier), Daikin, Mitsubishi Electric,
                Fujitsu, Samsung, LG, Toshiba and more. Whether it&apos;s a
                split system, ducted unit, VRV/VRF system or cassette —
                we&apos;ve installed it and we can fix it.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When you need new HVAC capacity, we also design, supply and
                install complete systems for commercial buildings, offices,
                retail spaces, and industrial environments.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="rounded-2xl overflow-hidden aspect-video bg-muted">
                <Image
                  src="/hero.jpg"
                  alt="Commercial air conditioning installation by Shelair"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* How We Deliver */}
        <section className="section-padding bg-secondary">
          <div className="container-narrow">
            <motion.div
              className="text-center mb-16"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                Our Process
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                How We Deliver Your Project
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A transparent, structured process that keeps you informed at
                every stage — from first call to final sign-off.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  custom={i}
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-card rounded-2xl p-6 border border-border h-full"
                >
                  <div className="w-10 h-10 rounded-full gradient-cta text-primary-foreground flex items-center justify-center font-extrabold text-sm mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
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
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/services">Services</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{service.subtitle}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div
            className="max-w-3xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
              <Wrench className="w-3.5 h-3.5" /> {service.subtitle}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              {service.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {service.heroDesc}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get a Quote <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="destructive"
                className="gradient-cta border-0"
              >
                <a href="tel:0732049511">
                  <Phone className="w-4 h-4 mr-2" /> 07 3204 9511
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary py-8 px-6">
        <div className="container-narrow grid grid-cols-2 md:grid-cols-4 gap-6">
          {service.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-primary">
                {s.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Overview & Benefits */}
      <section className="section-padding bg-background">
        <div className="container-narrow grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold mb-4">
              What&apos;s Included
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {service.overview}
            </p>
            <Button asChild variant="outline">
              <Link href="/contact">
                Discuss Your Needs <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="font-bold text-lg mb-5">Key Benefits</h3>
              <ul className="space-y-3">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              How It Works
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((p, i) => (
              <motion.div
                key={p.step}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-card rounded-2xl p-6 border border-border h-full"
              >
                <div className="w-10 h-10 rounded-full gradient-cta text-primary-foreground flex items-center justify-center font-extrabold text-sm mb-4">
                  {p.step}
                </div>
                <h3 className="font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-narrow max-w-3xl">
          <motion.div
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="space-y-6">
            {service.faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="bg-card rounded-2xl border border-border p-6"
              >
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <motion.div
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold mb-4">Related Services</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {service.relatedServices.map((rs, i) => (
              <motion.div
                key={rs.slug}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Link
                  href={`/services/${rs.slug}`}
                  className="block bg-card rounded-2xl p-8 border border-border shadow-sm group hover:border-primary/20 h-full"
                >
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {rs.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {rs.desc}
                  </p>
                  <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
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

export default Services;
