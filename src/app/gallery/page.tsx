'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

export default function GalleryPage() {
  const images = [
    { src: 'https://imgcdn.houssed.com/assets/Files/Projects/124076/Project%20Image/3-1735991160.webp', alt: 'Villa Elevation - Front Facing' },
    { src: 'https://imgcdn.houssed.com/assets/Files/Projects/124076/Project%20Image/7-1735991160.webp', alt: 'Clubhouse Elevation at Golden Hour' },
    { src: 'https://imgcdn.houssed.com/assets/Files/Projects/124076/Project%20Image/6-1735991160.webp', alt: 'Lush Green Belt Avenue' },
    { src: 'https://imgcdn.houssed.com/assets/Files/Projects/124076/Project%20Image/4-1735991160.webp', alt: 'West-Facing Villa G+2 Structure' },
    { src: 'https://imgcdn.houssed.com/assets/Files/Projects/124076/Project%20Image/5-1735991160.webp', alt: 'Water Body Central Focal Point' },
    { src: 'https://imgcdn.houssed.com/assets/Files/Projects/124076/Amenities/1-1735991168.webp', alt: 'Outdoor Children Play Zone' },
    { src: 'https://imgcdn.houssed.com/assets/Files/Projects/124076/Amenities/2-1735991168.webp', alt: 'Clubhouse Multipurpose Hall' },
    { src: 'https://imgcdn.houssed.com/assets/Files/Projects/124076/Master%20Plan/MP-1735991182.webp', alt: 'Villa Scapes Master Plan Vector' },
  ];

  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <div className="bg-ivory text-charcoal py-16 md:py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col gap-16 mt-8">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="flex items-center gap-3">
            <div className="w-6 h-[1px] bg-gold" />
            <span className="font-accent text-[10px] md:text-xs tracking-[0.3em] text-gold uppercase">
              The Collection
            </span>
            <div className="w-6 h-[1px] bg-gold" />
          </div>
          <h1 className="font-heading font-light text-charcoal text-4xl md:text-6xl leading-tight">
            Photo Gallery <br />
            <span className="font-serif italic text-teal">A Vision of Elegance</span>
          </h1>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img) => (
            <div
              key={img.src}
              onClick={() => setActiveImage(img.src)}
              className="relative h-60 md:h-72 w-full rounded-sm border border-gold/10 overflow-hidden shadow-md group cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-95"
                sizes="(max-width: 768px) 100vw, 30vw"
              />
              <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <ZoomIn className="w-6 h-6 text-gold" />
                  <span className="font-accent text-[8px] tracking-widest text-white uppercase mt-1">
                    {img.alt}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeImage && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveImage(null)}
                className="absolute inset-0 bg-navy/90 backdrop-blur-md"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-4xl w-full h-[300px] md:h-[600px] z-10"
              >
                <button
                  onClick={() => setActiveImage(null)}
                  className="absolute top-[-40px] right-0 text-white hover:text-gold transition-colors p-1"
                  aria-label="Close image view"
                >
                  <X className="w-6 h-6" />
                </button>
                <Image
                  src={activeImage}
                  alt="Expanded gallery view"
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
