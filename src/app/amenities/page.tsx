'use client';

import { motion } from 'framer-motion';
import { Check, Waves, Heart, Shield, Activity, Sparkles, Trees, Eye, Compass } from 'lucide-react';

export default function AmenitiesPage() {
  const groups = [
    {
      title: 'Sports & Recreation',
      icon: Activity,
      items: [
        'Swimming Pool + Kids Pool',
        'Fully Equipped Gymnasium',
        'Multipurpose Play Court',
        'Indoor Table Tennis Arena',
        'Children Play Zones',
        'Jogging & Walking Tracks',
      ],
    },
    {
      title: 'Clubhouse & Social',
      icon: Sparkles,
      items: [
        'West-Facing Sunset Clubhouse',
        'Community Multipurpose Hall',
        'Relaxation Gazebos & Parks',
        'Dedicated Senior Citizen Track',
        'Society Administrative Office',
        'Convenience Store & Café Space',
      ],
    },
    {
      title: 'Safety & Convenience',
      icon: Shield,
      items: [
        '24/7 Gated Entrance Guards',
        'CCTV Grid Across Community',
        'Wi-Fi Enabled Common Areas',
        'Multi-Stranded Copper Cabling',
        'Reserved Four-Wheeler Parkings',
        'Visitor Parking Enclaves',
      ],
    },
    {
      title: 'Ecological & Green Systems',
      icon: Trees,
      items: [
        'Sewage Treatment Plant (STP)',
        'Organic Waste Converter',
        'Central Cool Water Body',
        'Drip Irrigation for Green Belts',
        'Dedicated Pet Play Zones',
        'Lush Landscaped Perimeter Walls',
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
              The Conveniences
            </span>
            <div className="w-6 h-[1px] bg-gold" />
          </div>
          <h1 className="font-heading font-light text-charcoal text-4xl md:text-6xl leading-tight">
            World-Class Amenities <br />
            <span className="font-serif italic text-teal">A Life Fully Nurtured</span>
          </h1>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col gap-3 p-5 bg-white border border-gold/15 rounded-sm hover:shadow-md transition-shadow">
            <Waves className="w-7 h-7 text-gold" />
            <h3 className="font-accent text-xs tracking-wider text-charcoal uppercase font-bold">Lakeside District</h3>
            <p className="font-body text-xs text-text-secondary leading-relaxed">
              Scenic views of the Osman Sagar reservoir boundary, offering cooler breezes.
            </p>
          </div>
          <div className="flex flex-col gap-3 p-5 bg-white border border-gold/15 rounded-sm hover:shadow-md transition-shadow">
            <Compass className="w-7 h-7 text-gold" />
            <h3 className="font-accent text-xs tracking-wider text-charcoal uppercase font-bold">Vastu Compliant</h3>
            <p className="font-body text-xs text-text-secondary leading-relaxed">
              Every home structure aligned perfectly to coordinate positive solar movement.
            </p>
          </div>
          <div className="flex flex-col gap-3 p-5 bg-white border border-gold/15 rounded-sm hover:shadow-md transition-shadow">
            <Eye className="w-7 h-7 text-gold" />
            <h3 className="font-accent text-xs tracking-wider text-charcoal uppercase font-bold">Open Layouts</h3>
            <p className="font-body text-xs text-text-secondary leading-relaxed">
              Villas designed with open front yards, avoiding congested structural boundaries.
            </p>
          </div>
          <div className="flex flex-col gap-3 p-5 bg-white border border-gold/15 rounded-sm hover:shadow-md transition-shadow">
            <Heart className="w-7 h-7 text-gold" />
            <h3 className="font-accent text-xs tracking-wider text-charcoal uppercase font-bold">Completed Project</h3>
            <p className="font-body text-xs text-text-secondary leading-relaxed">
              No development delays. Establish immediate residency in a thriving community.
            </p>
          </div>
        </div>

        {/* Detailed Groups with icons and minimalistic points grid */}
        <div className="flex flex-col gap-8 my-4">
          {groups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-navy border border-gold/15 p-5 md:p-8 rounded-sm text-white flex flex-col gap-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-heading text-lg md:text-xl font-normal text-white">{group.title}</h3>
                </div>

                {/* Grid items with checkmarks and nice mini borders */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {group.items.map((item) => (
                    <div 
                      key={item} 
                      className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-sm hover:border-gold/40 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-gold" />
                      </div>
                      <span className="font-body text-xs text-white/80 font-medium leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
