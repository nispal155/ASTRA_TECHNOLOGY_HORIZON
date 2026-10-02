"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
 const [isVisible, setIsVisible] = useState(false);

 // Show button when page is scrolled down 400px
 const toggleVisibility = () => {
   if (window.scrollY > 400) {
     setIsVisible(true);
   } else {
     setIsVisible(false);
   }
 };

 const scrollToTop = () => {
   window.scrollTo({
     top: 0,
     behavior: "smooth"
   });
 };

 useEffect(() => {
   window.addEventListener("scroll", toggleVisibility, { passive: true });
   return () => window.removeEventListener("scroll", toggleVisibility);
 }, []);

 return (
   <AnimatePresence>
     {isVisible && (
       <motion.button
         initial={{ opacity: 0, scale: 0.8, y: 10 }}
         animate={{ opacity: 1, scale: 1, y: 0 }}
         exit={{ opacity: 0, scale: 0.8, y: 10 }}
         transition={{ duration: 0.2 }}
         onClick={scrollToTop}
         type="button"
         className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 p-3 rounded-full bg-brand-accent-strong text-white shadow-md hover:bg-brand-accent-strong-hover hover:shadow-lg transition-all"
         aria-label="Scroll to top"
       >
         <ArrowUp className="w-5 h-5" aria-hidden="true" />
       </motion.button>
     )}
   </AnimatePresence>
 );
}
