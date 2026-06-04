'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Project', href: '/#about' },
    { name: 'Villas', href: '/#configurations' },
    { name: 'Floor Plans', href: '/#configurations' },
    { name: 'Amenities', href: '/#amenities' },
    { name: 'Master Plan', href: '/#configurations' },
    { name: 'Location', href: '/#location' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Specifications', href: '/#configurations' },
    { name: 'Developer', href: '/#developer' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out py-6 px-6 md:px-16 ${
        isScrolled
          ? 'bg-navy/95 backdrop-blur-md border-b border-gold/15 py-4'
          : 'bg-gradient-to-b from-navy/80 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile Hamburger (On Left) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white hover:text-gold transition-colors p-2 -ml-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo (Aligned Left on Desktop, Right on Mobile) */}
        <Link href="/" className="group flex flex-col gap-0.5 lg:mr-auto lg:ml-0 ml-auto lg:text-left text-right">
          <span className="font-accent text-sm md:text-lg tracking-[0.25em] text-white transition-colors duration-300 group-hover:text-gold">
            VILLA SCAPES
          </span>
          <span className="text-[9px] tracking-[0.35em] text-gold font-body font-medium select-none uppercase">
            Gandipet, Hyderabad
          </span>
        </Link>

        {/* Desktop Menu (No Enquire Button, Clean Links) */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-body text-xs tracking-wider text-white/80 hover:text-gold uppercase transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer (Slides / Opens from Left) */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Drawer Panel */}
          <div className="lg:hidden fixed inset-y-0 left-0 w-[260px] h-[100dvh] bg-navy z-50 flex flex-col p-6 shadow-2xl border-r border-gold/15 overflow-hidden">
            {/* Header of Drawer */}
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
              <span className="font-accent text-xs tracking-widest text-gold">VILLA SCAPES</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-gold p-1"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Evenly Spaced Nav Links (Small, Left-Aligned, Non-Scrolling) */}
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-accent text-xs tracking-[0.15em] text-white/85 hover:text-gold transition-colors py-2 border-b border-white/5 uppercase text-left"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
