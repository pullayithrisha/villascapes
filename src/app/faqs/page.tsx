'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQsPage() {
  const faqs = [
    {
      q: 'Where is Villa Scapes located exactly?',
      a: 'Villa Scapes is located at Gandipet, Kokapet Road, Hyderabad (PIN 500075). It lies directly opposite Villa Greens, just 2 Km from the Outer Ring Road (ORR) exit and 8 Km from the Financial District.',
    },
    {
      q: 'What are the configurations and built-up areas of the villas?',
      a: 'The community offers G+2 structured villas. Type A villas feature 4 BHK across 2,925 Sq Ft built-up area (325 Sq Yards plot), while Type B villas feature 4 BHK across 4,050 Sq Ft built-up area (450 Sq Yards plot). Custom 5 BHK variants stretch up to 5,200 Sq Ft.',
    },
    {
      q: 'Is Villa Scapes RERA approved?',
      a: 'Villa Scapes is a completed residential project (commenced in 2011 and fully delivered in 2015). Because it was completed before the RERA Act was implemented in 2017, it is classified as a pre-RERA project. However, the entire layout is 100% HMDA approved.',
    },
    {
      q: 'Are home loans available for resale villas here?',
      a: 'Yes. Being a completed project with clear HMDA layout titles and no construction risk, it is approved by all leading banks, including SBI, HDFC, ICICI, and LIC Housing Finance.',
    },
    {
      q: 'Is the community design Vastu compliant?',
      a: 'Yes. NK Leasing & Constructions specifically engineers residential layouts following complete Vastu principles, including entrance directions, room positionings, and open front-view corridors.',
    },
    {
      q: 'Who is the developer of this community?',
      a: 'The project was developed by NK Leasing & Constructions Ltd. (NKLC), a founding-era group in Hyderabad with a legacy of over 45 years, famous for commercial twin-city icons like Taramandal Complex and Chenoy Trade Centre.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="bg-ivory text-charcoal py-16 md:py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-3xl mx-auto flex flex-col gap-16 mt-8">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="flex items-center gap-3">
            <div className="w-6 h-[1px] bg-gold" />
            <span className="font-accent text-[10px] md:text-xs tracking-[0.3em] text-gold uppercase">
              The Clarifications
            </span>
            <div className="w-6 h-[1px] bg-gold" />
          </div>
          <h1 className="font-heading font-light text-charcoal text-4xl md:text-6xl leading-tight">
            Frequently Asked Questions <br />
            <span className="font-serif italic text-teal">Answers to Your Enquiries</span>
          </h1>
        </div>

        {/* FAQs Accordion */}
        <div className="flex flex-col gap-4 my-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-gold/10 hover:border-gold/30 rounded-sm transition-all duration-300 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="font-heading text-sm md:text-base font-normal text-charcoal">
                      {faq.q}
                    </span>
                  </div>
                  <div className="shrink-0 p-1 rounded-full bg-gold/10 text-gold">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gold/5 bg-ivory/20"
                    >
                      <p className="p-6 text-xs md:text-sm font-body text-text-secondary leading-relaxed pl-11">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
