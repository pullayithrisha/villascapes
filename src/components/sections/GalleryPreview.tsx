'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ZoomIn } from 'lucide-react';

export default function GalleryPreview() {
  const images = [
    {
      src: 'https://imgcdn.houssed.com/assets/Files/Projects/124076/Project%20Image/3-1735991160.webp',
      alt: 'Villa Elevation at Sunset',
      gridClass: 'md:col-span-2 md:row-span-2 h-[220px] md:h-[400px]',
    },
    {
      src: 'https://imgcdn.houssed.com/assets/Files/Projects/124076/Project%20Image/7-1735991160.webp',
      alt: 'Luxury Clubhouse Entrance',
      gridClass: 'md:col-span-1 md:row-span-1 h-[110px] md:h-[190px]',
    },
    {
      src: 'https://imgcdn.houssed.com/assets/Files/Projects/124076/Project%20Image/6-1735991160.webp',
      alt: 'Lush Gated Street Avenue',
      gridClass: 'md:col-span-1 md:row-span-1 h-[110px] md:h-[190px]',
    },
    {
      src: 'https://imgcdn.houssed.com/assets/Files/Projects/124076/Project%20Image/5-1735991160.webp',
      alt: 'Central Water Body Feature',
      gridClass: 'md:col-span-2 md:row-span-1 h-[110px] md:h-[190px]',
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 md:px-16 bg-navy text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-[1px] bg-gold" />
              <span className="font-accent text-[10px] md:text-xs tracking-[0.3em] text-gold uppercase">
                The Gallery
              </span>
            </div>
            <h2 className="font-heading font-light text-white text-3xl md:text-5xl leading-tight">
              A Visual Journey <br />
              <span className="font-serif italic text-gold-light">Through Our Villa Sanctuary</span>
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2.5 font-accent text-xs tracking-widest text-gold hover:text-navy uppercase group border border-gold/40 hover:bg-gold px-6 py-3 rounded-xs transition-all duration-300 font-bold shrink-0 self-start md:self-auto"
          >
            View Full Gallery <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-max">
          {images.map((img, index) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative rounded-sm overflow-hidden group shadow-lg ${img.gridClass}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <ZoomIn className="w-8 h-8 text-gold" />
                  <span className="font-accent text-[9px] tracking-widest text-white uppercase mt-1">
                    {img.alt}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
