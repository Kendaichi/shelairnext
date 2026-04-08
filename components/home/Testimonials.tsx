"use client";

import { Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { testimonialsSection } from "@/data/home";

type ReviewItem = { name: string; role: string; quote: string; rating: number };

const Testimonials = ({ initialTestimonials }: { initialTestimonials?: ReviewItem[] }) => {
  const items = initialTestimonials?.length
    ? initialTestimonials
    : testimonialsSection.testimonials.map((t) => ({ ...t, rating: 5 }));

  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <ScrollReveal className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See what our clients say about working with Shelair.
          </p>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 120}>
              <div className="bg-card rounded-2xl p-5 md:p-8 border border-border shadow-sm hover-lift h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`w-4 h-4 ${
                        j < (t.rating ?? 5)
                          ? "fill-primary text-primary"
                          : "text-muted-foreground/25"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6 text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
