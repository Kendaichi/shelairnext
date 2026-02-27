export interface ServiceFaq {
  q: string;
  a: string;
}

export const servicesData: Record<string, { title: string; description: string; faqs: ServiceFaq[] }> = {
  "air-conditioning-installation": {
    title: "Air Conditioning Installation",
    description:
      "Full commercial AC design, supply, and installation across Brisbane, Gold Coast and Sunshine Coast. Every project backed by our 5-year workmanship guarantee.",
    faqs: [
      { q: "What brands do you install?", a: "We install all major brands including Panasonic (our preferred supplier), Daikin, Mitsubishi Electric, Fujitsu, Samsung, LG, and more." },
      { q: "Do you provide a workmanship guarantee?", a: "Yes — every installation is backed by our 5-year workmanship guarantee for complete peace of mind." },
      { q: "Do you offer free quotes?", a: "Yes. We provide no-obligation quotes with $0 upfront. Interest-free finance options are also available." },
    ],
  },
  "air-conditioning-service-repairs": {
    title: "Air Conditioning Service & Repairs",
    description:
      "24/7 emergency AC repairs and scheduled servicing across Brisbane, Gold Coast and Sunshine Coast. Fast diagnosis and same-visit fixes for all major brands.",
    faqs: [
      { q: "How quickly can you respond to an emergency?", a: "We offer 24/7 emergency call-outs across Brisbane, Gold Coast and Sunshine Coast with fast response times." },
      { q: "Do you charge extra for after-hours call-outs?", a: "We have transparent after-hours rates with no hidden fees. You'll know the cost before we start work." },
      { q: "What brands do you repair?", a: "We service all major commercial AC brands including Panasonic, Daikin, Mitsubishi Electric, Fujitsu, Samsung, LG, Toshiba, and more." },
    ],
  },
  "cold-room-hire": {
    title: "Cold Room Hire",
    description:
      "Flexible cold room hire solutions for events, construction sites, and businesses requiring temporary refrigeration. Available across Brisbane, Gold Coast and Sunshine Coast.",
    faqs: [
      { q: "How quickly can a cold room be delivered?", a: "We can typically deliver and set up a hired cold room within 24–48 hours depending on availability and location." },
      { q: "What sizes are available?", a: "We offer a range of cold room sizes to suit your needs. Contact us to discuss your requirements and we'll recommend the right unit." },
      { q: "Is ongoing support included?", a: "Yes — all hired units come with support and we can arrange a maintenance visit if any issues arise during the hire period." },
    ],
  },
  "commercial-refrigeration-maintenance": {
    title: "Preventative Maintenance Plans",
    description:
      "Scheduled HVAC maintenance that catches problems before they become costly breakdowns. Reduce downtime, extend equipment life, and unlock priority service + discounted repair rates.",
    faqs: [
      { q: "How often do you service?", a: "Most plans include quarterly visits, but we tailor frequency to your system age, usage and requirements." },
      { q: "Do maintenance plan members get priority for emergencies?", a: "Yes — maintenance plan members receive priority dispatch and discounted repair rates." },
      { q: "Will this actually save me money?", a: "On average, our clients see significantly fewer breakdowns and lower energy costs within the first year." },
    ],
  },
};
