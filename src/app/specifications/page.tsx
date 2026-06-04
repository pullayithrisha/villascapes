'use client';

import { motion } from 'framer-motion';
import { Hammer, Paintbrush, Home, Zap, Droplet, Layers } from 'lucide-react';

export default function SpecificationsPage() {
  const specs = [
    {
      title: 'Structural Masonry',
      icon: Hammer,
      items: [
        'RCC Framed structure designed for seismic zone II compliance.',
        '9" block masonry for external walls and 4.5" for internal walls.',
        'Double-coat cement plastering for all external surfaces.',
      ],
    },
    {
      title: 'Premium Flooring & Cladding',
      icon: Layers,
      items: [
        '4\' x 2\' Vitrified tiling in Living, Dining, Kitchen and foyer corridors.',
        'Imported laminated wooden flooring in all master and guest bedrooms.',
        'Anti-skid ceramic floor tiling with glazed tile dado up to lintel in toilets.',
      ],
    },
    {
      title: 'Doors & Window Openings',
      icon: Home,
      items: [
        'Pre-hung solid wood frame doors with melamine premium laminate polish.',
        'Premium UPVC sliding windows with mesh shutter provisions.',
        'Custom heavy-duty brass locks and security bolts on main entry doors.',
      ],
    },
    {
      title: 'Electrical Grids',
      icon: Zap,
      items: [
        'Concealed copper wiring in conduit piping of ISI approved brands.',
        'Adequate modular sockets for TV, air conditioners and internet in all bedrooms.',
        'Geyser and exhaust ventilation provisions in all bathrooms.',
      ],
    },
    {
      title: 'Sanitary & Plumbing',
      icon: Droplet,
      items: [
        'Concealed plumbing using premium CPC pipes and drainage grids.',
        'Wall-hung washrooms with concealed flush tanks and chrome faucets.',
        'Premium sanitary ware of Kohler / Hindware or equivalent luxury brands.',
      ],
    },
    {
      title: 'Kitchen & Painting finishes',
      icon: Paintbrush,
      items: [
        'Polished black granite counter top with dual stainless steel sink.',
        'Acrylic emulsion paint over smooth POP punning for interior walls.',
        'Weather-proof texturized paint for external facade protection.',
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
              The Engineering
            </span>
            <div className="w-6 h-[1px] bg-gold" />
          </div>
          <h1 className="font-heading font-light text-charcoal text-4xl md:text-6xl leading-tight">
            Premium Specifications <br />
            <span className="font-serif italic text-teal">Built to Stand the Test of Time</span>
          </h1>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-4">
          {specs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white border border-gold/10 p-6 md:p-8 rounded-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-lg font-normal text-charcoal">{item.title}</h3>
                </div>

                <ul className="flex flex-col gap-2.5 text-xs text-text-secondary font-body list-disc pl-4 leading-relaxed">
                  {item.items.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
