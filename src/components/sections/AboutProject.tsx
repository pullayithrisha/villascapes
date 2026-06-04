'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Waves, ShieldCheck, Minimize2, Check } from 'lucide-react';

export default function AboutProject() {
  const features = [
    { icon: Waves, text: 'Osman Sagar Lake District' },
    { icon: Minimize2, text: 'Low Density (6 Villas/Acre)' },
    { icon: ShieldCheck, text: 'Gated Security Enclave' },
    { icon: Check, text: '100% Vastu Compliant' },
  ];

  return (
    <section id="about" className="py-12 md:py-16 px-4 md:px-16 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Left: Cinematic Image Composition */}
        <div className="relative h-[280px] md:h-[400px] w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 w-[75%] h-[75%] shadow-2xl"
          >
            <Image
              src="https://imgcdn.houssed.com/assets/Files/Projects/124076/Project%20Image/7-1735991160.webp"
              alt="Villa Scapes Luxury Villa Elevation"
              fill
              className="object-cover rounded-sm filter brightness-95"
              sizes="(max-width: 1024px) 75vw, 40vw"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute bottom-0 right-0 w-[55%] h-[55%] border-8 border-ivory shadow-2xl z-10"
          >
            <Image
              src="https://imgcdn.houssed.com/assets/Files/Projects/124076/Project%20Image/6-1735991160.webp"
              alt="Villa Scapes Gated Street Layout"
              fill
              className="object-cover rounded-sm filter brightness-90"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </motion.div>

          {/* Floating Legacy Seal Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.6 }}
            className="absolute top-[40%] left-[60%] -translate-x-1/2 -translate-y-1/2 bg-navy border border-gold/30 text-white rounded-full w-20 h-20 md:w-28 md:h-28 flex flex-col items-center justify-center text-center shadow-xl z-20"
          >
            <span className="font-display text-lg md:text-2xl text-gold font-light">100%</span>
            <span className="font-accent text-[6px] md:text-[8px] tracking-wider text-white/75 mt-0.5">COMPLETED</span>
            <span className="font-body text-[6px] md:text-[8px] text-gold/80 italic">Ready to Move</span>
          </motion.div>
        </div>

        {/* Right: Premium Story Content */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="w-6 h-[1px] bg-gold" />
            <span className="font-accent text-[10px] md:text-xs tracking-[0.3em] text-gold uppercase">
              The Sanctuary
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading font-light text-charcoal text-3xl md:text-5xl leading-tight"
          >
            Lakeside Living <br />
            <span className="font-serif italic text-teal">Redefined for the Select Few</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-sm text-text-secondary leading-relaxed max-w-xl"
          >
            Nestled alongside the pristine water body and within close proximity of Osman Sagar Lake, Villa Scapes is a completed 20-acre low-density gated community. Built by the legendary NK Leasing & Constructions, the project blends time-tested Vastu architecture with contemporary luxury layout specifications.
          </motion.p>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2"
          >
            {features.map((feature, index) => {
              const IconComp = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white border border-gold/10 hover:border-gold/30 rounded-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <IconComp className="w-4 h-4 text-gold" />
                  </div>
                  <span className="font-body text-xs font-semibold text-charcoal">{feature.text}</span>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4"
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 font-accent text-xs tracking-widest text-gold-light hover:text-gold uppercase group transition-colors"
            >
              Discover the Legacy <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
