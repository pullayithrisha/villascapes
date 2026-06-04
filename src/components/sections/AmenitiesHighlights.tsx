'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Trophy, Heart, Activity, TreePine } from 'lucide-react';

export default function AmenitiesHighlights() {
  const categories = [
    {
      id: 'sports',
      label: 'Sports & Fitness',
      icon: Activity,
      title: 'Active Living Enclave',
      desc: 'State-of-the-art facilities dedicated to physical well-being, featuring outdoor play courts and indoor fitness arenas.',
      image: 'https://imgcdn.houssed.com/assets/Files/Projects/124076/Amenities/1-1735991168.webp',
      items: ['Fully Equipped Gymnasium', 'Swimming Pool + Kids Pool', 'Multipurpose Play Court', 'Indoor Table Tennis & Carroms'],
    },
    {
      id: 'clubhouse',
      label: 'Clubhouse & Community',
      icon: Trophy,
      title: 'The West-Facing Clubhouse',
      desc: 'An iconic social hub positioned to capture spectacular sunset views over Osman Sagar Lake, designed for grand gatherings.',
      image: 'https://imgcdn.houssed.com/assets/Files/Projects/124076/Amenities/2-1735991168.webp',
      items: ['Sunset View Community Hall', 'Relaxation Lounges & Gazebos', 'Convenience Store', 'Society Administrative Office'],
    },
    {
      id: 'nature',
      label: 'Environment & Greenery',
      icon: TreePine,
      title: 'Lush Botanical Corridors',
      desc: 'Spread across 43% open areas, featuring landscaped gardens, cool blue water bodies, and ecological preservation systems.',
      image: 'https://imgcdn.houssed.com/assets/Files/Projects/124076/Project%20Image/5-1735991160.webp',
      items: ['Cool Blue Central Water Body', 'Organic Waste Converter', 'Drip Irrigation Systems', 'Jogging Track & Nature Walkways'],
    },
    {
      id: 'lifestyle',
      label: 'Lifestyle & Security',
      icon: Heart,
      title: 'Peace of Mind Living',
      desc: 'Uncompromised architectural design meeting complete Vastu specifications and 24/7 intelligent surveillance grids.',
      image: 'https://imgcdn.houssed.com/assets/Files/Projects/124076/Project%20Image/6-1735991160.webp',
      items: ['24/7 Gated Security & CCTV', '100% Vastu-Compliant Villas', 'Wi-Fi Enabled Entire Community', 'Dedicated Senior Citizen Zones'],
    },
  ];

  const [activeTab, setActiveTab] = useState(categories[0]);
  const [deckIndex, setDeckIndex] = useState(0);

  const handleNextCard = () => {
    setDeckIndex((prev) => (prev + 1) % categories.length);
  };

  return (
    <section id="amenities" className="py-12 md:py-16 px-4 md:px-16 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-[1px] bg-gold" />
              <span className="font-accent text-[10px] md:text-xs tracking-[0.3em] text-gold uppercase">
                The Conveniences
              </span>
            </div>
            <h2 className="font-heading font-light text-charcoal text-3xl md:text-5xl leading-tight">
              60+ Premium Amenities <br />
              <span className="font-serif italic text-teal">For an Unparalleled Lifestyle</span>
            </h2>
          </div>
          <Link
            href="/amenities"
            className="inline-flex items-center gap-2.5 font-accent text-xs tracking-widest text-gold hover:text-navy uppercase group border border-gold/40 hover:bg-gold px-6 py-3 rounded-xs transition-all duration-300 font-bold shrink-0 self-start md:self-auto"
          >
            Explore All Amenities <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Desktop Layout (Tab selection) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Menu Selection (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-4">
            {categories.map((category) => {
              const IconComp = category.icon;
              const isActive = activeTab.id === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category)}
                  className={`w-full text-left p-6 border rounded-sm flex items-center justify-between transition-all duration-300 group cursor-pointer ${
                    isActive
                      ? 'bg-navy text-white border-navy shadow-xl scale-[1.01]'
                      : 'bg-white text-charcoal border-gold/10 hover:border-gold/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isActive ? 'bg-gold text-navy' : 'bg-gold/10 text-gold group-hover:bg-gold/25'
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-accent text-[9px] tracking-wider uppercase text-gold">
                        {category.id}
                      </span>
                      <span className="font-heading text-base font-normal tracking-wide mt-0.5">
                        {category.label}
                      </span>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isActive ? 'text-gold translate-x-1' : 'text-stone/40 group-hover:translate-x-1 group-hover:text-gold'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Image/Detail Showcase (7 cols) */}
          <div className="lg:col-span-7 bg-navy border border-gold/15 p-6 flex flex-col justify-between rounded-sm relative min-h-[450px]">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 bg-radial-to-t from-navy/95 via-navy/60 to-transparent -z-10 pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6 h-full justify-between"
              >
                {/* Large Preview Image */}
                <div className="relative h-56 w-full overflow-hidden rounded-sm border border-white/5">
                  <Image
                    src={activeTab.image}
                    alt={activeTab.title}
                    fill
                    className="object-cover animate-ken-burns"
                    sizes="50vw"
                  />
                </div>

                {/* Info Text */}
                <div className="flex flex-col gap-3">
                  <h3 className="font-heading text-2xl font-light text-white leading-tight">
                    {activeTab.title}
                  </h3>
                  <p className="font-body text-xs text-white/60 leading-relaxed max-w-xl">
                    {activeTab.desc}
                  </p>
                </div>

                {/* Sub Features Grid */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                  {activeTab.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-gold-light/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Swiper Deck Layout (Stacked cards you swap like game cards) */}
        <div className="lg:hidden flex flex-col items-center">
          <div className="relative h-[410px] w-full max-w-[300px] mx-auto select-none">
            {categories.map((category, idx) => {
              const relativeIdx = (idx - deckIndex + categories.length) % categories.length;
              const isTop = relativeIdx === 0;
              const isSecond = relativeIdx === 1;
              const isVisible = relativeIdx < 3; // Show top 3 stacked cards

              if (!isVisible) return null;

              return (
                <motion.div
                  key={category.id}
                  style={{ zIndex: 30 - relativeIdx }}
                  animate={{
                    scale: isTop ? 1 : isSecond ? 0.94 : 0.88,
                    y: isTop ? 0 : isSecond ? 26 : 52, // Visual offsets to show peeking back cards
                    rotate: isTop ? 0 : isSecond ? 4 : -4,
                    opacity: isTop ? 1 : isSecond ? 0.85 : 0.5,
                  }}
                  transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                  whileTap={isTop ? { scale: 0.98 } : {}}
                  onClick={() => {
                    if (isTop) {
                      handleNextCard();
                    }
                  }}
                  className="absolute inset-0 bg-navy border border-gold/25 p-4 rounded-md flex flex-col justify-between shadow-2xl cursor-pointer"
                >
                  {/* Top Label */}
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <span className="font-accent text-[8px] tracking-[0.2em] text-gold uppercase">{category.label}</span>
                  {isTop && (
                    <span className="font-accent text-[7.5px] text-white/50 tracking-wider flex items-center gap-1.5 font-bold uppercase select-none">
                      TAP TO SWAP
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                      </span>
                    </span>
                  )}
                </div>

                  {/* Card Image */}
                  <div className="relative h-28 w-full my-2 overflow-hidden rounded-sm border border-white/5">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover"
                      sizes="85vw"
                    />
                  </div>

                  {/* Card Info */}
                  <div className="flex flex-col gap-1 my-1">
                    <h4 className="font-heading text-base font-light text-white leading-tight">{category.title}</h4>
                    <p className="font-body text-[10px] text-white/50 leading-relaxed line-clamp-2">{category.desc}</p>
                  </div>

                  {/* Card Highlights */}
                  <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-white/10">
                    {category.items.slice(0, 4).map((item) => (
                      <div key={item} className="flex items-center gap-1 text-[9px] text-gold-light/80">
                        <div className="w-1 h-1 rounded-full bg-gold shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Micro Animation indicator dots (Helps user understand click counts) */}
          <div className="flex justify-center gap-2.5 mt-20 select-none">
            {categories.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setDeckIndex(dotIdx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  deckIndex === dotIdx ? 'bg-gold w-6' : 'bg-charcoal/30'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
