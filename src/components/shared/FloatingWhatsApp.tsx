'use client';

import { useState } from 'react';
import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:block">
      <a
        href="https://wa.me/914023115817?text=Hi,%20I'm%20interested%20in%20Villa%20Scapes%20Gandipet.%20Please%2520share%20details."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group"
        aria-label="Contact on WhatsApp"
      >
        {/* Pulsing ring animation */}
        <span className="absolute -inset-1 rounded-full border-2 border-[#25D366] opacity-0 group-hover:animate-ping group-hover:opacity-30 pointer-events-none" />
        
        <MessageSquare className="w-7 h-7 fill-white" />
      </a>
      
      {/* Tooltip */}
      {hovered && (
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-navy border border-gold/15 py-2 px-4 rounded-xs text-xs font-accent tracking-wider text-gold shadow-xl whitespace-nowrap animate-fade-in">
          CONNECT ON WHATSAPP
        </div>
      )}
    </div>
  );
}
