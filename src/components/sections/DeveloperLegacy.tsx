'use client';

import { motion } from 'framer-motion';
import { Award, Compass, ShieldCheck, Milestone } from 'lucide-react';

export default function DeveloperLegacy() {
  const achievements = [
    {
      icon: Award,
      title: '45+ Years Tenure',
      desc: 'One of Hyderabad’s oldest development groups, shaping skylines since the late 1970s.',
    },
    {
      icon: Compass,
      title: 'Vastu Engineering',
      desc: 'Complete architectural alignment following traditional vastu principles for positive energy.',
    },
    {
      icon: ShieldCheck,
      title: 'Clean Handover Titles',
      desc: 'Bank approved by leading financial institutions, HMDA authorized, and pre-RERA completed.',
    },
    {
      icon: Milestone,
      title: '20+ Landmarked Sites',
      desc: 'Builders of commercial twin-city icons like Taramandal Complex and Swapnalok.',
    },
  ];

  const series = [
    { year: '1970s', name: 'Commercial Icons', detail: 'Taramandal, Swapnalok & Surya Kiran Complexes' },
    { year: '2000s', name: 'Residential Expansion', detail: 'Villa Heights & Villa Greens (Gandipet)' },
    { year: '2015', name: 'Villa Scapes', detail: '121 units lake-adjacent masterplanned community' },
    { year: '2026', name: 'Ongoing Horizons', detail: 'Suburban Villas (16 Acres, Shankarpally)' },
  ];

  return (
    <section id="developer" className="py-12 md:py-16 px-4 md:px-16 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-16">
        {/* Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-[1px] bg-gold" />
              <span className="font-accent text-[10px] md:text-xs tracking-[0.3em] text-gold uppercase">
                The Heritage
              </span>
            </div>
            <h2 className="font-heading font-light text-charcoal text-3xl md:text-5xl leading-tight">
              NK Leasing & Constructions <br />
              <span className="font-serif italic text-teal">A 45-Year Architectural Legacy</span>
            </h2>
          </div>
          <p className="font-body text-xs md:text-sm text-text-secondary max-w-md leading-relaxed">
            NKLC directors are pioneers in Hyderabad’s construction history, having built landmarks that remain central commercial hubs today, before shifting focus to luxury villa sanctuaries.
          </p>
        </div>

        {/* Legacy Core Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col gap-2 p-3 md:p-4 bg-white border border-gold/10 hover:border-gold/30 rounded-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0 group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                  <Icon className="w-4.5 h-4.5 md:w-6 md:h-6" />
                </div>
                <h3 className="font-heading text-sm md:text-lg text-charcoal font-normal">{item.title}</h3>
                <p className="font-body text-[10px] md:text-xs text-text-secondary leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline Strip */}
        <div className="border-t border-gold/15 pt-8 mt-2">
          <h4 className="font-accent text-[11px] tracking-[0.25em] text-gold uppercase mb-6 text-center">
            Legacy Milestones & Timelines
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 relative">
            {series.map((item) => (
              <div key={item.year} className="flex flex-col gap-1.5 text-center relative group">
                <div className="font-display text-2xl md:text-4xl text-teal font-light">{item.year}</div>
                <div className="font-accent text-[8px] md:text-[10px] tracking-wider text-charcoal font-semibold uppercase mt-1">
                  {item.name}
                </div>
                <div className="font-body text-[10px] md:text-xs text-text-secondary max-w-xs mx-auto">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
