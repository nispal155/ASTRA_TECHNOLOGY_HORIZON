"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Artificial delay to allow preloader animation to play and build anticipation
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Wait for exit animation to finish before unmounting
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 text-white"
        >
          {/* Logo Reveal Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex flex-col items-center"
          >
            <div className="w-24 h-24 sm:w-32 sm:h-32 relative mb-6 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(245,158,11,0.2)]">
              <Image 
                src="/Company-Logo.jpg" 
                alt="Astra Technology Horizon" 
                fill 
                className="object-cover"
                priority
              />
              
              {/* Shine effect passing over logo */}
              <motion.div 
                initial={{ x: "-100%", skewX: -20 }}
                animate={{ x: "200%" }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                className="absolute inset-0 w-1/2 bg-white/30 backdrop-blur-sm"
              />
            </div>
            
            <div className="overflow-hidden h-8">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
                className="text-2xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-white"
              >
                Astra Tech
              </motion.h1>
            </div>
          </motion.div>

          {/* Loading Progress Line */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="h-full bg-brand-accent rounded-full shadow-[0_0_10px_rgba(245,158,11,0.8)]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
