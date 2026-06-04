'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, CheckCircle2 } from 'lucide-react';

export default function BrochureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setSubmitted(false);
    };

    window.addEventListener('open-brochure-modal', handleOpen);
    return () => window.removeEventListener('open-brochure-modal', handleOpen);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
    
    // Simulate brochure download trigger
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '#'; // Mock brochure link
      link.download = 'VillaScapes_Premium_Brochure.pdf';
      document.body.appendChild(link);
      // link.click(); // Avoid triggering navigation/download issues on user browser unless actual PDF exists
      document.body.removeChild(link);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-navy/80 backdrop-blur-md"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative bg-navy border border-gold/25 p-6 md:p-8 max-w-md w-full rounded-sm text-white shadow-2xl z-10 overflow-hidden"
          >
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 bg-radial-to-br from-teal/10 via-transparent to-transparent -z-10 pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-gold transition-colors p-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-10 gap-4">
                <CheckCircle2 className="w-16 h-16 text-gold" />
                <h3 className="font-heading text-2xl font-normal">Brochure Ready</h3>
                <p className="font-body text-xs text-white/60 leading-relaxed max-w-xs">
                  Thank you, {name}. The premium digital brochure has been prepared. Your download should begin automatically. We have also queued the copy to your email.
                </p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-4 px-6 py-2.5 bg-gold text-navy text-xs font-accent font-bold hover:bg-gold-light transition-all rounded-xs"
                >
                  Return to Site
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-gold">
                    <Download className="w-4 h-4" />
                    <span className="font-accent text-[9px] tracking-wider uppercase">Lead Magnet</span>
                  </div>
                  <h3 className="font-heading text-xl text-white font-normal mt-1">
                    Download Digital Brochure
                  </h3>
                  <p className="font-body text-[11px] text-white/50 leading-relaxed">
                    Verify details to unlock the high-definition master plan, layout specifications, and project brochure.
                  </p>
                </div>

                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="modal-name" className="font-accent text-[8px] tracking-wider text-white/40 uppercase">
                    YOUR NAME *
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    placeholder="e.g. Rajeev Reddy"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white/5 border border-white/10 focus:border-gold px-4 py-3 text-xs text-white placeholder-white/20 outline-none transition-colors rounded-xs"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="modal-phone" className="font-accent text-[8px] tracking-wider text-white/40 uppercase">
                    MOBILE NUMBER *
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-white/5 border border-white/10 focus:border-gold px-4 py-3 text-xs text-white placeholder-white/20 outline-none transition-colors rounded-xs"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="modal-email" className="font-accent text-[8px] tracking-wider text-white/40 uppercase">
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    placeholder="e.g. rajeev@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/5 border border-white/10 focus:border-gold px-4 py-3 text-xs text-white placeholder-white/20 outline-none transition-colors rounded-xs"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full mt-2 py-3.5 bg-gold text-navy text-xs font-accent font-bold hover:bg-gold-light transition-all rounded-xs"
                  style={{
                    clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
                  }}
                >
                  Unlock Brochure Download
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
