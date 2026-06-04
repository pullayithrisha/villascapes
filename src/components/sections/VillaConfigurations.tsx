'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function VillaConfigurations() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    }
  };

  const configs = [
    {
      type: '4 BHK VILLA - TYPE A',
      title: 'The Elite Residence',
      bua: '2,925 Sq Ft',
      plot: '325 Sq Yards',
      price: '₹1.75 Cr*',
      priceSubtitle: 'Resale Starting Value',
      image: 'https://imgcdn.houssed.com/assets/Files/Projects/124076/BHK_Configuration/4-BHK-VILLA-2925-BUA-1735991134.webp',
      features: ['G+2 Floors Structure', '2 Covered Car Parkings', 'Private Garden Courtyard', 'Guest Suite on Ground Floor'],
    },
    {
      type: '4 BHK VILLA - TYPE B',
      title: 'The Sovereign Estate',
      bua: '4,050 Sq Ft',
      plot: '450 Sq Yards',
      price: '₹2.50 Cr*',
      priceSubtitle: 'Resale Starting Value',
      image: 'https://imgcdn.houssed.com/assets/Files/Projects/124076/BHK_Configuration/4-BHK-VILLA-4050-BUA-1735991148.webp',
      features: ['Grand Entrance Foyer', 'Master Suite with Wardrobe', 'Family TV Lounge on First Floor', 'Double Height Living Spaces'],
      featured: true,
    },
    {
      type: '5 BHK VILLA - PREMIUM',
      title: 'The Imperial Sanctuary',
      bua: '5,200 Sq Ft',
      plot: '450+ Sq Yards',
      price: '₹3.50 Cr*',
      priceSubtitle: 'Resale Starting Value',
      image: 'https://imgcdn.houssed.com/assets/Files/Projects/124076/Project%20Image/4-1735991160.webp',
      features: ['Penthouse Master Suite', 'Private Multi-purpose Hall', 'Second Floor Sun Terrace', 'Premium Anti-skid Laminated Flooring'],
    },
  ];

  return (
    <section id="configurations" className="py-12 md:py-16 px-4 md:px-16 bg-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-[1px] bg-gold" />
              <span className="font-accent text-[10px] md:text-xs tracking-[0.3em] text-gold uppercase">
                The Estates
              </span>
            </div>
            <h2 className="font-heading font-light text-white text-3xl md:text-5xl leading-tight">
              Villa Configurations <br />
              <span className="font-serif italic text-gold-light">Designed for Distinction</span>
            </h2>
          </div>
          <p className="font-body text-xs md:text-sm text-white/85 max-w-md leading-relaxed">
            Choose from three bespoke layout variants, each offering massive floorplates, premium wooden laminated finishes, and G+2 structures that capture natural light.
          </p>
        </div>

        {/* Configurations Slider Area */}
        <div className="relative">
          {/* Mobile Arrow Navigation Icons */}
          <div className="flex md:hidden items-center justify-between absolute top-1/2 -translate-y-1/2 left-[-10px] right-[-10px] z-20 pointer-events-none">
            <button
              onClick={scrollLeft}
              className="w-8 h-8 rounded-full bg-navy border border-gold/40 text-gold flex items-center justify-center pointer-events-auto active:scale-90 transition-transform shadow-lg"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              onClick={scrollRight}
              className="w-8 h-8 rounded-full bg-navy border border-gold/40 text-gold flex items-center justify-center pointer-events-auto active:scale-90 transition-transform shadow-lg"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* Configurations Grid - Horizontal Swipe on Mobile, Standard Grid on Desktop */}
          <div
            ref={scrollContainerRef}
            className="flex md:grid overflow-x-auto md:overflow-x-visible pb-6 md:pb-0 gap-4 md:gap-8 scrollbar-hide snap-x snap-mandatory"
          >
            {configs.map((config, index) => (
              <motion.div
                key={config.type}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col justify-between p-3.5 md:p-6 bg-white/5 border border-gold/15 rounded-sm overflow-hidden hover:bg-white/10 hover:shadow-2xl transition-all duration-500 group snap-center min-w-[82vw] sm:min-w-[50vw] md:min-w-0 ${
                  config.featured ? 'bg-gold/5 border-gold/45 shadow-xl' : ''
                }`}
              >
                {/* Image Container */}
                <div className="relative h-32 md:h-52 w-full mb-3.5 md:mb-5 overflow-hidden rounded-sm">
                  <Image
                    src={config.image}
                    alt={config.type}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  {config.featured && (
                    <span className="absolute top-4 right-4 bg-gold text-navy font-accent text-[8px] font-bold tracking-widest px-3 py-1 uppercase rounded-xs">
                      MOST COVETED
                    </span>
                  )}
                </div>

                {/* Info */}
                <div>
                  <div className="font-accent text-[9px] tracking-[0.25em] text-gold mb-2">{config.type}</div>
                  <h3 className="font-heading text-xl text-white font-normal mb-4">{config.title}</h3>
                  
                  {/* Area Metrics */}
                  <div className="grid grid-cols-2 gap-2 p-2.5 md:p-3.5 bg-navy-mid border border-white/5 mb-3 md:mb-5">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-accent text-[8px] tracking-wider text-white/70">BUILT-UP AREA</span>
                      <span className="font-display text-base text-gold-light font-medium">{config.bua}</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-accent text-[8px] tracking-wider text-white/70">PLOT SIZE</span>
                      <span className="font-display text-base text-gold-light font-medium">{config.plot}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="flex flex-col gap-1 md:gap-1.5 mb-3.5 md:mb-5">
                    {config.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-white/90">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing & CTA */}
                <div className="border-t border-white/10 pt-3 md:pt-5 mt-auto">
                  <div className="flex items-baseline justify-between mb-4">
                    <div className="flex flex-col">
                      <span className="text-2xl font-display font-light text-white">{config.price}</span>
                      <span className="text-[9px] font-body text-white/75 uppercase tracking-wider">{config.priceSubtitle}</span>
                    </div>
                    <span className="text-[10px] text-gold-light font-accent underline select-none font-semibold">HMDA APPROVED</span>
                  </div>

                  <Link
                    href="/floor-plans"
                    className="w-full py-3 text-center text-xs font-accent border border-gold/40 text-gold-light font-bold hover:bg-gold hover:text-navy transition-all duration-300 flex items-center justify-center gap-2 rounded-xs"
                    style={{
                      clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
                    }}
                  >
                    View Floor Plans <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Swipe Helper Guidance */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-2 text-gold/60 text-[9px] font-accent tracking-widest uppercase select-none">
          <motion.span animate={{ x: [-4, 2, -4] }} transition={{ duration: 1.5, repeat: Infinity }}>←</motion.span>
          <span>Swipe Side Ways or Tap Arrows</span>
          <motion.span animate={{ x: [4, -2, 4] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
        </div>
      </div>
    </section>
  );
}
