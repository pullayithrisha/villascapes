'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'unset';
    }, 1500);

    return () => {
      document.body.style.overflow = 'unset';
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 bg-[#0F1B2D] z-[9999] flex flex-col items-center justify-center text-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-center text-center px-6"
          >
            <span className="font-accent text-xl md:text-3xl tracking-[0.3em] text-white">
              VILLA SCAPES
            </span>
            <span className="text-[9px] md:text-[11px] tracking-[0.4em] text-[#C9A84C] font-body font-medium uppercase mt-2">
              Gandipet, Hyderabad
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
