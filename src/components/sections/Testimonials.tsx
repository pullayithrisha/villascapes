'use client';

import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Living at Villa Scapes has been an extraordinary experience. The low-density layout provides unmatched privacy, and being adjacent to Osman Sagar Lake brings a level of peace we couldn't find anywhere else in Hyderabad.",
      author: "Mr. Rajeev Reddy",
      designation: "Executive Director, IT SEZ",
      villa: "Owner, Villa #42 (Type B)",
    },
    {
      quote: "The design of the G+2 structure is perfectly vastu compliant. We appreciate the modular kitchen finishes, massive built-up areas, and the stunning west-facing clubhouse which has become our family's favorite weekend retreat.",
      author: "Mrs. Lakshmi Rao",
      designation: "SRE Lead, Financial District",
      villa: "Owner, Villa #108 (Type A)",
    },
    {
      quote: "NK Leasing has delivered on their promise. The construction is solid, maintenance of the central water body is top-notch, and the close proximity to schools like Rockwell is a huge advantage for our children.",
      author: "Dr. Anirudh Sen",
      designation: "Senior Cardiologist",
      villa: "Owner, Villa #15 (5 BHK variant)",
    },
  ];

  // Triplicate the array for seamless infinite looping
  const tripleTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-12 md:py-16 bg-ivory text-charcoal overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-12">
        {/* Title */}
        <div className="flex flex-col gap-3 text-center items-center px-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-[1px] bg-gold" />
            <span className="font-accent text-[10px] md:text-xs tracking-[0.3em] text-gold uppercase">
              The Resident Voices
            </span>
            <div className="w-6 h-[1px] bg-gold" />
          </div>
          <h2 className="font-heading font-light text-charcoal text-2xl md:text-4xl leading-tight">
            Hear from Our Community <br />
            <span className="font-serif italic text-teal">A Testament to Luxury & Trust</span>
          </h2>
        </div>

        {/* Auto-Scrolling Side-by-Side Testimonials (Infinite Marquee) */}
        <div className="relative flex overflow-x-hidden w-full py-4 select-none">
          {/* Subtle gradients to mask edges */}
          <div className="absolute inset-y-0 left-0 w-8 md:w-24 bg-gradient-to-r from-ivory to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 md:w-24 bg-gradient-to-l from-ivory to-transparent z-10 pointer-events-none" />

          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max">
            {tripleTestimonials.map((item, index) => (
              <div
                key={index}
                className="w-[280px] md:w-[350px] flex flex-col justify-between p-4 md:p-6 bg-white border border-gold/10 hover:border-gold/30 rounded-sm hover:shadow-lg transition-all duration-300 relative group shrink-0"
              >
                {/* Quote Mark */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-gold/10 group-hover:text-gold/20 transition-colors" />

                <div>
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4 text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold" />
                    ))}
                  </div>

                  <p className="font-body text-xs md:text-sm text-text-secondary leading-relaxed mb-4 italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="border-t border-gold/10 pt-4 mt-2">
                  <h4 className="font-heading text-sm md:text-base font-normal text-charcoal">{item.author}</h4>
                  <div className="flex flex-col gap-0.5 mt-1 text-[9px] md:text-[10px] text-text-secondary font-body">
                    <span>{item.designation}</span>
                    <span className="text-gold tracking-wider uppercase font-accent font-semibold">{item.villa}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
