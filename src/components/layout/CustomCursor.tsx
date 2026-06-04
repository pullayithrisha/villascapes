'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [hidden, setHidden] = useState(true);
  const [isClicking, setIsClicking] = useState(false);

  // Motion values for smooth cursor tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring config for a buttery smooth organic feel
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (hidden) setHidden(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY, hidden]);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const interactiveEl = target.closest('a, button, .interactive, input, textarea');
      
      if (interactiveEl) {
        setIsHovered(true);
        // Extract text if we want to show something specific inside the cursor
        const text = interactiveEl.getAttribute('data-cursor-text') || '';
        setHoverText(text);
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  if (hidden) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999] hidden md:flex items-center justify-center mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      {/* Outer Ring / Glow */}
      <motion.div
        animate={{
          width: isHovered ? 80 : isClicking ? 30 : 40,
          height: isHovered ? 80 : isClicking ? 30 : 40,
          backgroundColor: isHovered ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)',
          borderColor: isHovered ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 1)',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
        className="rounded-full border-[1.5px] flex items-center justify-center relative overflow-hidden"
      >
        {/* Inner Dot */}
        <motion.div
          animate={{
            scale: isHovered ? 0 : isClicking ? 0.5 : 1,
            opacity: isHovered ? 0 : 1,
          }}
          className="w-2 h-2 bg-white rounded-full absolute"
        />
        
        {/* Hover Text */}
        <motion.span
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.5,
          }}
          className="text-black font-accent text-[8px] tracking-[0.2em] font-bold absolute text-center uppercase mix-blend-normal"
        >
          {hoverText || 'Explore'}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
