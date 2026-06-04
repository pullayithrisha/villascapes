import Link from 'next/link';
import { Phone, Mail, MapPin, Compass } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const linksGroup1 = [
    { name: 'About Project', href: '/#about' },
    { name: 'Villa Configurations', href: '/#configurations' },
    { name: 'Amenities', href: '/#amenities' },
    { name: 'Photo Gallery', href: '/#gallery' },
  ];

  const linksGroup2 = [
    { name: 'Location Advantages', href: '/#location' },
    { name: 'Floor Plans', href: '/#configurations' },
    { name: 'Specifications', href: '/#configurations' },
    { name: 'FAQs', href: '/faqs' },
  ];

  return (
    <footer className="bg-navy border-t border-gold/10 text-white/85 py-8 md:py-12 px-6 md:px-16 font-body text-xs relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-radial from-teal/5 to-transparent filter blur-3xl -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Column (Full width on mobile, 1 col on desktop) */}
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-3">
          <Link href="/" className="flex flex-col gap-0.5">
            <span className="font-accent text-base tracking-[0.25em] text-white">
              VILLA SCAPES
            </span>
            <span className="text-[8px] tracking-[0.35em] text-gold font-medium uppercase">
              Gandipet, Hyderabad
            </span>
          </Link>
          <p className="text-white/80 leading-relaxed text-[11px] max-w-sm">
            A premium G+2 gated villa community spread across 20 lush acres near the serene Osman Sagar Lake. Built with 45 years of architectural legacy.
          </p>
          <div className="flex items-center gap-2 text-gold text-[10px] font-accent tracking-wider mt-1">
            <Compass className="w-3.5 h-3.5 animate-spin-slow" /> VASTU COMPLIANT DESIGN
          </div>
        </div>

        {/* Navigation Links Column 1 (1 col on mobile) */}
        <div className="col-span-1 flex flex-col gap-2">
          <div role="heading" aria-level={4} className="font-accent text-[10px] tracking-[0.2em] text-white uppercase border-b border-gold/15 pb-1 font-semibold">
            The Community
          </div>
          <ul className="flex flex-col gap-1.5">
            {linksGroup1.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-gold transition-colors duration-200">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation Links Column 2 (1 col on mobile) */}
        <div className="col-span-1 flex flex-col gap-2">
          <div role="heading" aria-level={4} className="font-accent text-[10px] tracking-[0.2em] text-white uppercase border-b border-gold/15 pb-1 font-semibold">
            Resources
          </div>
          <ul className="flex flex-col gap-1.5">
            {linksGroup2.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-gold transition-colors duration-200">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact/Developer Column (Full width on mobile, 1 col on desktop) */}
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-3">
          <div role="heading" aria-level={4} className="font-accent text-[10px] tracking-[0.2em] text-white uppercase border-b border-gold/15 pb-1 font-semibold">
            Developer Office
          </div>
          <ul className="flex flex-col gap-2 text-white/80">
            <li className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
              <span className="text-[11px] leading-relaxed">
                <strong>NK Leasing & Constructions Ltd.</strong>
                <br />
                Saifabad, Hyderabad – 500004
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
              <a href="tel:+914023115817" className="hover:text-gold transition-colors">
                +91 40 23115817
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
              <a href="mailto:info@nklc.in" className="hover:text-gold transition-colors">
                info@nklc.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-gold/10 my-6 max-w-7xl mx-auto" />

      {/* Disclaimers & Copyright */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-white/70 text-center md:text-left">
        <div className="flex flex-col gap-0.5 md:max-w-2xl">
          <p>© {currentYear} Villa Scapes Gandipet Portfolio. All rights reserved.</p>
          <p className="leading-normal">
            Disclaimer: This is a premium developer legacy portfolio. Property listings and resale quotes are for conceptual purposes. Developed by NK Leasing & Constructions Ltd. Layout is HMDA Approved, completed in 2015.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0 font-accent tracking-wider mt-2 md:mt-0">
          <Link href="/privacy" className="hover:text-gold transition-colors">PRIVACY POLICY</Link>
          <span>|</span>
          <Link href="/contact" className="hover:text-gold transition-colors">CONTACT US</Link>
        </div>
      </div>
    </footer>
  );
}
