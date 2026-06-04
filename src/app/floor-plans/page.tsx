'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function FloorPlansPage() {
  const plans = [
    {
      id: 'type-a',
      name: '4 BHK Villa (Type A)',
      bua: '2,925 Sq Ft',
      plot: '325 Sq Yards',
      image: 'https://imgcdn.houssed.com/assets/Files/Projects/124076/BHK_Configuration/4-BHK-VILLA-2925-BUA-1735991134.webp',
      desc: 'An optimized floorplate designed for functional layout utility, featuring a private backyard, G+2 staircase hall, and open-front balcony vistas.',
    },
    {
      id: 'type-b',
      name: '4 BHK Villa (Type B)',
      bua: '4,050 Sq Ft',
      plot: '450 Sq Yards',
      image: 'https://imgcdn.houssed.com/assets/Files/Projects/124076/BHK_Configuration/4-BHK-VILLA-4050-BUA-1735991148.webp',
      desc: 'Our spacious flagship floorplate offering massive double-height dining halls, larger lawn spaces, private home-theatre spaces, and lakeview terraces.',
    },
  ];

  const [activePlan, setActivePlan] = useState(plans[0]);

  return (
    <div className="bg-ivory text-charcoal py-16 md:py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col gap-16 mt-8">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="flex items-center gap-3">
            <div className="w-6 h-[1px] bg-gold" />
            <span className="font-accent text-[10px] md:text-xs tracking-[0.3em] text-gold uppercase">
              The Architecture
            </span>
            <div className="w-6 h-[1px] bg-gold" />
          </div>
          <h1 className="font-heading font-light text-charcoal text-4xl md:text-6xl leading-tight">
            Interactive Floor Plans <br />
            <span className="font-serif italic text-teal">Space Engineered to Perfection</span>
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex justify-center border-b border-gold/15 pb-1">
          {plans.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePlan(p)}
              className={`px-8 py-3 font-accent text-xs tracking-wider uppercase border-b-2 transition-all ${
                activePlan.id === p.id ? 'border-gold text-gold font-bold' : 'border-transparent text-text-secondary hover:text-charcoal'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Floorplan details box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="font-heading text-2xl font-light text-charcoal">{activePlan.name} Layout</h3>
            <p className="font-body text-sm text-text-secondary leading-relaxed">{activePlan.desc}</p>
            
            <div className="p-4 bg-white border border-gold/10 rounded-sm flex flex-col gap-2 font-body text-xs text-text-secondary">
              <div className="flex justify-between">
                <span>Built-Up Area:</span>
                <strong className="text-charcoal">{activePlan.bua}</strong>
              </div>
              <div className="flex justify-between">
                <span>Plot Size:</span>
                <strong className="text-charcoal">{activePlan.plot}</strong>
              </div>
              <div className="flex justify-between">
                <span>Structure:</span>
                <strong className="text-charcoal">G + 2 Floors</strong>
              </div>
            </div>
          </div>

          {/* Image (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-gold/15 p-6 rounded-sm flex items-center justify-center relative min-h-[350px] md:min-h-[450px]">
            <Image
              src={activePlan.image}
              alt={activePlan.name}
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
