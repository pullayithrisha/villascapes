'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CheckCircle2, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [config, setConfig] = useState('4-bhk-a');
  const [msg, setMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-ivory text-charcoal py-16 md:py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col gap-16 mt-8">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="flex items-center gap-3">
            <div className="w-6 h-[1px] bg-gold" />
            <span className="font-accent text-[10px] md:text-xs tracking-[0.3em] text-gold uppercase">
              Get in Touch
            </span>
            <div className="w-6 h-[1px] bg-gold" />
          </div>
          <h1 className="font-heading font-light text-charcoal text-4xl md:text-6xl leading-tight">
            Schedule a Visitation <br />
            <span className="font-serif italic text-teal">Register for Private Property Tours</span>
          </h1>
        </div>

        {/* Contact Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="font-heading text-2xl font-light text-charcoal leading-tight">
                Connect Directly
              </h3>
              <p className="font-body text-xs text-text-secondary leading-relaxed">
                Contact our relationship team for immediate resale inventory quotes and property details.
              </p>
            </div>

            {/* List */}
            <ul className="flex flex-col gap-5 text-xs text-text-secondary font-body">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>
                  <strong>Villa Scapes Gated Society</strong>
                  <br />
                  Kokapet Road, Gandipet,
                  <br />
                  Hyderabad, Telangana – 500075
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <a href="tel:+914023115817" className="hover:text-gold transition-colors font-semibold text-charcoal">
                  +91 40 23115817 / 18
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <a href="mailto:info@nklc.in" className="hover:text-gold transition-colors">
                  info@nklc.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold shrink-0" />
                <span>Hours: 10:00 AM - 6:00 PM Daily</span>
              </li>
            </ul>

            {/* Quick WhatsApp Link */}
            <div className="p-5 bg-white border border-gold/15 rounded-sm flex flex-col gap-4">
              <h4 className="font-accent text-[9px] tracking-wider text-gold uppercase font-bold">Quick WhatsApp chat</h4>
              <p className="font-body text-xs text-text-secondary leading-relaxed">
                Prefer texting? Message our desk directly to ask questions instantly.
              </p>
              <a
                href="https://wa.me/914023115817?text=Hi,%20I'm%20interested%20in%20Villa%20Scapes%20Gandipet."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-[#25D366] text-white hover:bg-[#20ba56] transition-colors rounded-sm flex items-center justify-center gap-2 text-xs font-accent font-bold"
              >
                <MessageSquare className="w-4 h-4 fill-white" /> Message Us Now
              </a>
            </div>
          </div>

          {/* Right Column Form (7 cols) */}
          <div className="lg:col-span-7 bg-navy text-white p-6 md:p-8 rounded-sm shadow-2xl relative">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16 gap-4"
              >
                <CheckCircle2 className="w-16 h-16 text-gold" />
                <h3 className="font-heading text-2xl text-white font-normal">Registration Complete</h3>
                <p className="font-body text-xs text-white/60 leading-relaxed max-w-xs">
                  Thank you, {name}. A portfolio manager has received your interest and will coordinate your private site tour shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-accent text-xs tracking-[0.2em] text-gold uppercase border-b border-gold/15 pb-3">
                  Schedule Property Visit
                </h3>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="font-accent text-[9px] tracking-wider text-white/50 uppercase">
                    YOUR NAME *
                  </label>
                  <input
                    id="contact-name"
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
                  <label htmlFor="contact-phone" className="font-accent text-[9px] tracking-wider text-white/50 uppercase">
                    MOBILE NUMBER *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-navy-mid border border-white/10 focus:border-gold px-4 py-3 text-xs text-white placeholder-white/20 outline-none transition-colors rounded-xs"
                  />
                </div>

                {/* Email & Configuration */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email" className="font-accent text-[9px] tracking-wider text-white/50 uppercase">
                      EMAIL ADDRESS
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="e.g. rajeev@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-navy-mid border border-white/10 focus:border-gold px-4 py-3 text-xs text-white placeholder-white/20 outline-none transition-colors rounded-xs"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-config" className="font-accent text-[9px] tracking-wider text-white/50 uppercase">
                      CONFIG PREFERENCE
                    </label>
                    <select
                      id="contact-config"
                      value={config}
                      onChange={(e) => setConfig(e.target.value)}
                      className="bg-navy-mid border border-white/10 focus:border-gold px-4 py-3 text-xs text-white outline-none transition-colors rounded-xs"
                    >
                      <option value="4-bhk-a">4 BHK Type A (2925 Sq Ft)</option>
                      <option value="4-bhk-b">4 BHK Type B (4050 Sq Ft)</option>
                      <option value="5-bhk">5 BHK Premium (5200 Sq Ft)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-msg" className="font-accent text-[9px] tracking-wider text-white/50 uppercase">
                    ADDITIONAL COMMENTS
                  </label>
                  <textarea
                    id="contact-msg"
                    rows={3}
                    placeholder="e.g. Requesting callback timings or specific plot options..."
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    className="bg-navy-mid border border-white/10 focus:border-gold px-4 py-3 text-xs text-white placeholder-white/20 outline-none transition-colors rounded-xs resize-none"
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
                  Register Visitation Schedule
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
