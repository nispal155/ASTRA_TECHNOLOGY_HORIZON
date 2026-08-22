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
   window.addEventListener("scroll", toggleVisibility);
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
         className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-brand-primary text-white shadow-md hover:bg-brand-accent hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2"
         aria-label="Scroll to top"
       >
         <ArrowUp className="w-5 h-5" />
       </motion.button>
     )}
   </AnimatePresence>
 );
}
