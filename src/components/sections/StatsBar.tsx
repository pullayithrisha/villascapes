'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

function StatCounter({ value, duration = 1.5 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMilliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMilliseconds / end), 15);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function StatsBar() {
  const stats = [
    { value: 20, label: 'Acres Township', suffix: '' },
    { value: 121, label: 'Lakeside Villas', suffix: '' },
    { value: 43, label: 'Open Spaces', suffix: '%' },
    { value: 45, label: 'Builder Legacy', suffix: '+ Yrs' },
    { value: 10, label: 'To Financial District', suffix: ' Mins' },
  ];

  return (
    <section className="bg-navy border-y border-gold/20 text-white relative z-20">
      {/* Grid: 6 columns on mobile (Row 1: 2+2+2=6, Row 2: 3+3=6), 5 columns on desktop */}
      <div className="max-w-7xl mx-auto grid grid-cols-6 md:grid-cols-5">
        {stats.map((stat, index) => {
          // On mobile, first 3 items take 2 columns, last 2 take 3 columns.
          // On desktop, all items take 1 column.
          const colSpan = index < 3 ? 'col-span-2 md:col-span-1' : 'col-span-3 md:col-span-1';

          // Custom borders for perfect grid lines (2 rows on mobile, 1 row on desktop)
          const borderClasses = `
            border-gold/15
            ${index === 0 || index === 1 || index === 3 ? 'border-r' : ''}
            ${index >= 3 ? 'border-t' : ''}
            md:border-t-0
            ${index < 4 ? 'md:border-r' : 'md:border-r-0'}
          `;

          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col items-center justify-center text-center p-3 md:p-6 ${colSpan} ${borderClasses}`}
            >
              <div className="font-display text-2xl md:text-4xl lg:text-5xl font-light text-gold mb-1">
                <StatCounter value={stat.value} />
                <span className="text-sm md:text-2xl font-body font-normal text-gold-light ml-0.5">{stat.suffix}</span>
              </div>
              <div className="font-accent text-[8px] md:text-[10px] tracking-[0.2em] text-white/50 uppercase select-none">
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
