'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Navigation, Car, Clock } from 'lucide-react';

export default function LocationAdvantages() {
  const distances = [
    { destination: 'Outer Ring Road (ORR)', distance: '2.0 Km', time: '5 Mins' },
    { destination: 'Financial District', distance: '8.0 Km', time: '15 Mins' },
    { destination: 'Kokapet SEZ / Neopolis', distance: '5.0 Km', time: '10 Mins' },
    { destination: 'Gachibowli IT Hub', distance: '10.0 Km', time: '20 Mins' },
    { destination: 'Narsingi Junction', distance: '4.0 Km', time: '8 Mins' },
    { destination: 'Osman Sagar Lake', distance: '1.5 Km', time: '5 Mins' },
    { destination: 'Rockwell Intl. School', distance: '2.0 Km', time: '5 Mins' },
    { destination: 'RGIA Airport', distance: '24.0 Km', time: '35 Mins' },
  ];

  return (
    <section id="location" className="py-12 md:py-16 px-4 md:px-16 bg-navy text-white overflow-hidden relative">
      {/* Subtle Background Glow */}
      <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] rounded-full bg-teal/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
        {/* Left: Location Details & Distances Grid (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-[1px] bg-gold" />
              <span className="font-accent text-[10px] md:text-xs tracking-[0.3em] text-gold uppercase">
                The Address
              </span>
            </div>
            <h2 className="font-heading font-light text-white text-3xl md:text-5xl leading-tight">
              A Connected Oasis <br />
              <span className="font-serif italic text-gold-light">In Hyderabad’s Lake District</span>
            </h2>
            <p className="font-body text-xs md:text-sm text-white/60 max-w-xl leading-relaxed mt-2">
              Villa Scapes enjoys a highly premium, lake-adjacent address at Gandipet, providing clean air, minimal noise, and direct Outer Ring Road (ORR) access to the Financial District and Kokapet Neopolis SEZ.
            </p>
          </div>

          {/* Distances Grid */}
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            {distances.map((item, index) => (
              <motion.div
                key={item.destination}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center justify-between p-2 md:p-3 bg-white/5 border border-white/10 hover:border-gold/30 hover:bg-white/10 rounded-sm transition-all duration-300 group"
              >
                <div className="flex flex-col gap-0.5 truncate w-full">
                  <span className="font-body text-[10px] md:text-xs text-white/90 group-hover:text-white transition-colors truncate block">
                    {item.destination}
                  </span>
                  <div className="flex items-center gap-2 mt-1 text-[8px] md:text-[10px] text-white/40">
                    <span className="flex items-center gap-0.5 whitespace-nowrap">
                      <Car className="w-2.5 h-2.5 text-gold" /> {item.distance}
                    </span>
                    <span className="flex items-center gap-0.5 whitespace-nowrap">
                      <Clock className="w-2.5 h-2.5 text-teal" /> {item.time}
                    </span>
                  </div>
                </div>
                <Navigation className="w-3.5 h-3.5 text-stone/40 group-hover:text-gold group-hover:translate-x-0.5 transition-all hidden sm:block shrink-0" />
              </motion.div>
            ))}
          </div>

          <div className="mt-2">
            <Link
              href="/location"
              className="inline-flex items-center gap-2.5 font-accent text-xs tracking-widest text-gold-light hover:text-gold uppercase group transition-colors"
            >
              Detailed Proximity Map <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right: Custom Illustrated Map View (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative h-[240px] md:h-[360px] w-full rounded-sm border border-gold/15 overflow-hidden group shadow-2xl"
        >
          <Image
            src="https://imgcdn.houssed.com/assets/Files/Projects/124076/Location/Hou-1735991175.webp"
            alt="Villa Scapes Proximity Map Hyderabad"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
            sizes="(max-width: 1024px) 100vw, 35vw"
          />
          {/* Overlay Tag */}
          <div className="absolute bottom-4 left-4 bg-navy/95 border border-gold/20 p-3 rounded-xs flex items-center gap-2.5 shadow-lg select-none">
            <MapPin className="w-4 h-4 text-gold shrink-0 animate-bounce" />
            <div className="flex flex-col">
              <span className="font-accent text-[8px] tracking-wider text-gold">GOOGLE COORDINATES</span>
              <span className="text-[10px] text-white/80 font-body font-medium">17.381389, 78.322824</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
