"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  {
    q: "How quickly can you respond to an emergency breakdown?",
    a: "We offer 24/7 emergency call-outs across Brisbane, Gold Coast and Sunshine Coast. Call 07 3204 9511 and speak directly with a qualified HVAC technician.",
  },
  {
    q: "Do you service all air conditioning brands?",
    a: "Yes. Our technicians are trained and equipped to service, repair, and install all major AC brands including Panasonic, Daikin, Mitsubishi Electric, Fujitsu, Samsung, LG, Toshiba, and more.",
  },
  {
    q: "What does a preventative maintenance plan include?",
    a: "Our plans include scheduled servicing visits, filter and component checks, refrigerant level monitoring, energy efficiency assessments, and priority emergency response with discounted repair rates for contract customers.",
  },
  {
    q: "Do you offer a workmanship guarantee?",
    a: "Yes. Every installation is backed by our 5-year workmanship guarantee, giving you complete peace of mind that the job is done right.",
  },
  {
    q: "Do you provide free quotes?",
    a: "Yes — we provide no-obligation quotes with $0 upfront. Interest-free finance options are also available. Contact us to arrange a site inspection.",
  },
  {
    q: "What areas do you service?",
    a: "We service Brisbane, the Gold Coast, and the Sunshine Coast. Our main depot is in Deception Bay, with teams across the region for fast response times.",
  },
];

const FAQSection = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow max-w-3xl">
      <ScrollReveal className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground text-lg">
          Common questions about our air conditioning services.
        </p>
      </ScrollReveal>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <ScrollReveal key={i} delay={i * 60}>
            <AccordionItem
              value={`faq-${i}`}
              className="bg-card rounded-xl border border-border px-4 sm:px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-sm py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          </ScrollReveal>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
