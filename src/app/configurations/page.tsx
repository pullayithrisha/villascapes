'use client';

import Image from 'next/image';
import { Key, Layers, Ruler } from 'lucide-react';

export default function ConfigurationsPage() {
  const configs = [
    {
      type: '4 BHK VILLA - TYPE A',
      title: 'The Elite Residence',
      bua: '2,925 Sq Ft',
      plot: '325 Sq Yards',
      price: '₹1.75 Cr*',
      priceSubtitle: 'Resale Baseline Estimate',
      image: 'https://imgcdn.houssed.com/assets/Files/Projects/124076/BHK_Configuration/4-BHK-VILLA-2925-BUA-1735991134.webp',
      specs: [
        { label: 'Ground Floor', detail: 'Entrance lobby, G+2 stair hall, guest room with toilet, living & dining hall, utility kitchen, rear garden.' },
        { label: 'First Floor', detail: 'Master Bedroom with custom walk-in wardrobe and en-suite bath, 2 guest bedrooms with private washrooms.' },
        { label: 'Second Floor', detail: 'Penthouse master suite / home theatre room, open lounge terrace, laundry area.' },
      ],
    },
    {
      type: '4 BHK VILLA - TYPE B',
      title: 'The Sovereign Estate',
      bua: '4,050 Sq Ft',
      plot: '450 Sq Yards',
      price: '₹2.50 Cr*',
      priceSubtitle: 'Resale Baseline Estimate',
      image: 'https://imgcdn.houssed.com/assets/Files/Projects/124076/BHK_Configuration/4-BHK-VILLA-4050-BUA-1735991148.webp',
      specs: [
        { label: 'Ground Floor', detail: 'Majestic entryway foyer, double height family dining room, formal drawing lounge, modular chef kitchen, helper suite.' },
        { label: 'First Floor', detail: 'Grand master suite with custom bath lounge, secondary family study corner, 2 double bedrooms with attached washrooms.' },
        { label: 'Second Floor', detail: 'Multi-utility terrace room, front-facing sun lounge, open sky terrace overlooking Gandipet Lake.' },
      ],
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
              The Configurations
            </span>
            <div className="w-6 h-[1px] bg-gold" />
          </div>
          <h1 className="font-heading font-light text-charcoal text-4xl md:text-6xl leading-tight">
            Villa Specifications <br />
            <span className="font-serif italic text-teal">Space, Light & Architectural Clarity</span>
          </h1>
        </div>

        {/* Configurations List */}
        <div className="flex flex-col gap-24">
          {configs.map((config) => (
            <div key={config.type} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-b border-gold/15 pb-16 last:border-b-0">
              {/* Left Info Column */}
              <div className="flex flex-col gap-6 order-2 lg:order-1">
                <div className="font-accent text-[10px] tracking-[0.25em] text-gold">{config.type}</div>
                <h2 className="font-heading text-3xl font-light text-charcoal">{config.title}</h2>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 border-y border-gold/15 py-4 my-2 text-xs">
                  <div className="flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-gold shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-[9px] text-text-secondary uppercase">BUILT-UP</span>
                      <span className="font-semibold text-charcoal">{config.bua}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-gold shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-[9px] text-text-secondary uppercase">PLOT SIZE</span>
                      <span className="font-semibold text-charcoal">{config.plot}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Key className="w-4 h-4 text-gold shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-[9px] text-text-secondary uppercase">STATUS</span>
                      <span className="font-semibold text-charcoal text-teal">Ready to Move</span>
                    </div>
                  </div>
                </div>

                {/* Floor specifications */}
                <div className="flex flex-col gap-4">
                  {config.specs.map((spec) => (
                    <div key={spec.label} className="flex flex-col gap-1 text-xs">
                      <span className="font-accent text-[9px] tracking-wider text-gold uppercase">{spec.label}</span>
                      <p className="font-body text-text-secondary leading-relaxed">{spec.detail}</p>
                    </div>
                  ))}
                </div>

                {/* Price Display without Request Brochure */}
                <div className="mt-4 border-t border-gold/10 pt-4 flex flex-col">
                  <span className="text-xl font-display font-light text-charcoal">{config.price}</span>
                  <span className="text-[9px] font-body text-text-secondary uppercase tracking-wider">{config.priceSubtitle}</span>
                </div>
              </div>

              {/* Right Image Column */}
              <div className="relative h-[250px] md:h-[400px] w-full rounded-sm border border-gold/15 overflow-hidden shadow-lg order-1 lg:order-2">
                <Image
                  src={config.image}
                  alt={config.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
