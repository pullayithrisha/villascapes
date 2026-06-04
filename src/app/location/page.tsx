'use client';

import Image from 'next/image';
import { MapPin } from 'lucide-react';

export default function LocationPage() {
  const categories = [
    {
      title: 'Premium Schools',
      items: [
        { name: 'Rockwell International School', dist: '2.0 Km / 5 Mins' },
        { name: 'Government School Gandipet', dist: '2.0 Km / 5 Mins' },
        { name: 'CBIT Engineering College', dist: '1.2 Km / 3 Mins' },
        { name: 'Meridian School Gachibowli', dist: '12.0 Km / 20 Mins' },
      ],
    },
    {
      title: 'Healthcare Facilities',
      items: [
        { name: 'Continental Hospitals', dist: '7.0 Km / 15 Mins' },
        { name: 'Pulse Hospitals', dist: '4.0 Km / 8 Mins' },
        { name: 'Care Hospital Gachibowli', dist: '12.0 Km / 20 Mins' },
        { name: 'Apollo Hospitals Jubilee Hills', dist: '15.0 Km / 25 Mins' },
      ],
    },
    {
      title: 'IT Hubs & Parks',
      items: [
        { name: 'Financial District SEZ', dist: '8.0 Km / 15 Mins' },
        { name: 'Kokapet Neopolis SEZ', dist: '5.0 Km / 10 Mins' },
        { name: 'WaveRock SEZ Gachibowli', dist: '9.0 Km / 18 Mins' },
        { name: 'HITEC City Cyberabad', dist: '12.0 Km / 22 Mins' },
      ],
    },
    {
      title: 'Parks & Retail Centers',
      items: [
        { name: 'Gandipet Landscape Park', dist: '2.0 Km / 5 Mins' },
        { name: 'Aparna Neo Mall Nallagandla', dist: '5.0 Km / 12 Mins' },
        { name: 'Osman Sagar Lake District', dist: '1.5 Km / 5 Mins' },
        { name: 'Sarath City Capital Mall', dist: '12.0 Km / 22 Mins' },
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
              The Geography
            </span>
            <div className="w-6 h-[1px] bg-gold" />
          </div>
          <h1 className="font-heading font-light text-charcoal text-4xl md:text-6xl leading-tight">
            Location & Proximity <br />
            <span className="font-serif italic text-teal">Uncompromised Connectivity</span>
          </h1>
        </div>

        {/* Illustrated Map Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[300px] md:h-[450px] w-full rounded-sm border border-gold/15 overflow-hidden shadow-xl">
            <Image
              src="https://imgcdn.houssed.com/assets/Files/Projects/124076/Location/Hou-1735991175.webp"
              alt="Villa Scapes Detailed Location Map"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-heading text-2xl font-light text-charcoal leading-tight">
              A Quiet Retreat at the Edge of the City
            </h3>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              Situated opposite Villa Greens on Kokapet Road, Gandipet (500075), Villa Scapes is optimally positioned to let you enjoy the clean air of the lake district while staying less than 15 minutes away from your office in the Financial District or Gachibowli.
            </p>
            <div className="flex items-start gap-3 p-4 bg-white border border-gold/10 rounded-sm">
              <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div className="flex flex-col text-xs font-body text-text-secondary">
                <span className="font-accent text-[9px] tracking-wider text-gold font-bold">EXACT COORDINATES</span>
                <span>Latitude: 17.381389</span>
                <span>Longitude: 78.322824</span>
              </div>
            </div>
          </div>
        </div>

        {/* Proximity Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          {categories.map((cat) => (
            <div key={cat.title} className="p-6 bg-white border border-gold/10 rounded-sm flex flex-col gap-4">
              <h3 className="font-accent text-xs tracking-wider text-gold uppercase border-b border-gold/10 pb-2 font-bold">
                {cat.title}
              </h3>
              <ul className="flex flex-col gap-3 text-xs font-body text-text-secondary">
                {cat.items.map((item) => (
                  <li key={item.name} className="flex justify-between items-center gap-2">
                    <span className="font-semibold text-charcoal">{item.name}</span>
                    <span className="shrink-0 text-teal text-[11px] font-accent tracking-wider">{item.dist}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
