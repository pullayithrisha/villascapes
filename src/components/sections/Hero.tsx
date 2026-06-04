'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Static Background Image with subtle zoom on load */}
      <motion.div 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 w-full h-full"
      >
        <Image
          src="/hero_background.png"
          alt="Villa Scapes Luxury Modern Architectural Villa"
          fill
          priority
          className="object-cover object-center brightness-[0.55]"
          sizes="100vw"
        />
        
        {/* Subtle, elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/20 to-navy/80" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 xl:px-12 flex flex-col items-center justify-center text-center h-full pt-16">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="font-display font-light text-white text-[2.5rem] leading-[1.1] md:text-[4rem] lg:text-[5.5rem] tracking-wide mb-4 max-w-4xl"
        >
          A Life Above <br className="hidden md:block" />
          <span className="font-serif italic text-gold">the Ordinary.</span>
        </motion.h1>

        {/* Sub-headline / Stats Teaser */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="font-body text-xs md:text-base tracking-[0.1em] text-white/80 max-w-2xl leading-relaxed mb-6 md:mb-12"
        >
          121 Ultra-Luxury Villas • 20 Acres • Ready to Move
        </motion.p>
      </div>

      {/* Floating Animated Scroll Down Cue for Mobile/Desktop */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 pointer-events-none select-none">
        <span className="font-accent text-[9px] tracking-[0.25em] text-white/55 uppercase">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-gold flex items-center justify-center"
        >
          {/* Custom SVG Double Down Arrow Icon */}
          <svg 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            viewBox="0 0 24 24" 
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
