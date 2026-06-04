'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, PhoneCall } from 'lucide-react';

export default function CTABanner() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [config, setConfig] = useState('4-bhk-a');
  const [visitDate, setVisitDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setFormSubmitted(true);
  };

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 bg-navy text-white overflow-hidden relative border-t border-gold/15">
      {/* Decorative Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-teal/10 blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gold/5 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        {/* Left Info Column (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-[1px] bg-gold" />
            <span className="font-accent text-[10px] md:text-xs tracking-[0.3em] text-gold uppercase">
              Exclusive Access
            </span>
          </div>

          <h2 className="font-heading font-light text-white text-3xl md:text-5xl leading-tight">
            Schedule an Exclusive <br />
            <span className="font-serif italic text-gold-light">Private Site Tour</span>
          </h2>

          <p className="font-body text-xs md:text-sm text-white/60 leading-relaxed max-w-xl">
            Experience lakeside luxury firsthand. Let our property experts guide you through the community, the G+2 villa structures, the west-facing clubhouse, and the tranquil central water body.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center text-xs mt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-accent text-[8px] tracking-wider text-white/40">VISITING HOURS</span>
                <span className="font-body text-white/95 font-semibold">10:00 AM - 6:00 PM Daily</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal/15 text-teal flex items-center justify-center">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-accent text-[8px] tracking-wider text-white/40">ASSISTANCE DESK</span>
                <a href="tel:+914023115817" className="font-body text-white/95 font-semibold hover:text-gold transition-colors">
                  +91 40 23115817
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Column (5 cols) */}
        <div className="lg:col-span-5 bg-white/5 border border-gold/15 p-6 md:p-8 rounded-sm shadow-2xl relative">
          {formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center py-12 gap-4"
            >
              <CheckCircle2 className="w-16 h-16 text-gold" />
              <h3 className="font-heading text-2xl text-white font-normal">Booking Confirmed</h3>
              <p className="font-body text-xs text-white/60 leading-relaxed max-w-xs">
                Thank you, {name}. A portfolio specialist will contact you shortly on your provided number to coordinate your site tour.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <h3 className="font-accent text-xs tracking-[0.2em] text-white uppercase border-b border-gold/10 pb-3">
                Request Callback & Visit
              </h3>

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="cta-name" className="font-accent text-[9px] tracking-wider text-white/50 uppercase">
                  FULL NAME *
                </label>
                <input
                  id="cta-name"
                  type="text"
                  required
                  placeholder="e.g. Rajeev Reddy"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-navy-mid border border-white/10 focus:border-gold px-4 py-3 text-xs text-white placeholder-white/20 outline-none transition-colors rounded-xs"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="cta-phone" className="font-accent text-[9px] tracking-wider text-white/50 uppercase">
                  MOBILE NUMBER *
                </label>
                <input
                  id="cta-phone"
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-navy-mid border border-white/10 focus:border-gold px-4 py-3 text-xs text-white placeholder-white/20 outline-none transition-colors rounded-xs"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="cta-email" className="font-accent text-[9px] tracking-wider text-white/50 uppercase">
                  EMAIL ADDRESS
                </label>
                <input
                  id="cta-email"
                  type="email"
                  placeholder="e.g. rajeev@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-navy-mid border border-white/10 focus:border-gold px-4 py-3 text-xs text-white placeholder-white/20 outline-none transition-colors rounded-xs"
                />
              </div>

              {/* Grid: Config & Date */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cta-config" className="font-accent text-[9px] tracking-wider text-white/50 uppercase">
                    INTERESTED IN
                  </label>
                  <select
                    id="cta-config"
                    value={config}
                    onChange={(e) => setConfig(e.target.value)}
                    className="bg-navy-mid border border-white/10 focus:border-gold px-4 py-3 text-xs text-white outline-none transition-colors rounded-xs select-none"
                  >
                    <option value="4-bhk-a">4 BHK Type A</option>
                    <option value="4-bhk-b">4 BHK Type B</option>
                    <option value="5-bhk">5 BHK Premium</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cta-date" className="font-accent text-[9px] tracking-wider text-white/50 uppercase">
                    PREFERRED DATE
                  </label>
                  <input
                    id="cta-date"
                    type="date"
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                    className="bg-navy-mid border border-white/10 focus:border-gold px-4 py-3 text-xs text-white outline-none transition-colors rounded-xs"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full mt-2 py-3.5 px-6 text-xs font-accent bg-gold text-navy font-bold hover:bg-gold-light hover:shadow-xl transition-all duration-300 rounded-xs"
                style={{
                  clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
                }}
              >
                Schedule Tour & Call
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
