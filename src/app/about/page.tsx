'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Compass, Shield, Sparkles } from 'lucide-react';

export default function AboutPage() {
  const sections = [
    {
      title: 'The Philosophy',
      desc: 'Creating environments, not just structures. Villa Scapes was born out of a desire to create a serene lakeside sanctuary that brings together the best of modern building design, Vastu guidelines, and Hyderabad’s beautiful lake geography.',
      icon: Compass,
    },
    {
      title: 'NK Legacy',
      desc: 'NK Leasing & Constructions Ltd. has been active for over 45 years in the Hyderabad market. Creators of landmark commercial complexes such as Taramandal and Chenoy Trade Centre, we have transitioned over the years into a premier villa builder group.',
      icon: Sparkles,
    },
    {
      title: 'Low Density Enclave',
      desc: 'Spread across 20 lush acres with 43% designated as open green belts and pathways, Villa Scapes features only 121 luxury units, establishing an average density of just 6 villas per acre.',
      icon: Shield,
    },
  ];

  return (
    <div className="bg-ivory text-charcoal py-16 md:py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col gap-16 mt-8">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="flex items-center gap-3">
            <div className="w-6 h-[1px] bg-gold" />
            <span className="font-accent text-[10px] md:text-xs tracking-[0.3em] text-gold uppercase">
              The Journey
            </span>
            <div className="w-6 h-[1px] bg-gold" />
          </div>
          <h1 className="font-heading font-light text-charcoal text-4xl md:text-6xl leading-tight">
            About Villa Scapes <br />
            <span className="font-serif italic text-teal">A Legacy of Lakeside Luxury</span>
          </h1>
        </div>

        {/* Narrative & Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[300px] md:h-[450px] w-full rounded-sm border border-gold/15 overflow-hidden shadow-xl">
            <Image
              src="https://imgcdn.houssed.com/assets/Files/Projects/124076/Project%20Image/7-1735991160.webp"
              alt="Villa Scapes Gated Community Elevation"
              fill
              className="object-cover animate-pulse-slow"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-heading text-2xl font-light text-charcoal leading-tight">
              An Architectural Milestone in Gandipet
            </h3>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              Launched in 2011 and completed successfully in 2015, Villa Scapes remains a premier benchmark for gated communities in Hyderabad’s western suburbs. With a majestic west-facing clubhouse, lush green landscapes, and clear HMDA approvals, the project delivers absolute peace of mind for luxury homeowners.
            </p>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              Every detail — from the false ceilings to the pre-hung doors and vitrified tiling — reflects the engineering excellence that NK Leasing is famous for.
            </p>
          </div>
        </div>

        {/* Features Split */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gold/15 pt-16">
          {sections.map((sec, index) => {
            const Icon = sec.icon;
            return (
              <motion.div
                key={sec.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col gap-4 p-6 bg-white border border-gold/10 hover:border-gold/30 rounded-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg text-charcoal font-normal">{sec.title}</h3>
                <p className="font-body text-xs text-text-secondary leading-relaxed">{sec.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-navy border border-gold/15 p-8 md:p-12 text-center text-white rounded-sm flex flex-col items-center gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-to-br from-teal/10 to-transparent pointer-events-none" />
          <h3 className="font-heading text-2xl md:text-3xl font-light text-white leading-tight relative z-10">
            Interested in Viewing Resale Villa Opportunities?
          </h3>
          <p className="font-body text-xs md:text-sm text-white/60 max-w-xl relative z-10 leading-relaxed">
            Schedule an exclusive, guided tour to walk through completed villas, experience the clubhouse amenities, and review resale options with our portfolio experts.
          </p>
          <Link
            href="/contact"
            className="py-3 px-8 text-xs font-accent bg-gold text-navy font-bold hover:bg-gold-light transition-all flex items-center gap-2 rounded-sm shadow-xl relative z-10"
            style={{
              clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
            }}
          >
            Enquire About Resale Units <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
