"use client";

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useCursor } from './CursorContext';

export default function CustomCursor() {
 const [isMounted, setIsMounted] = useState(false);
 const [isHovering, setIsHovering] = useState(false);
 const { cursorType } = useCursor();
 
 // Mouse position values
 const cursorX = useMotionValue(-100);
 const cursorY = useMotionValue(-100);
 
 // Spring physics for smooth trailing
 const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
 const cursorXSpring = useSpring(cursorX, springConfig);
 const cursorYSpring = useSpring(cursorY, springConfig);

 useEffect(() => {
 setIsMounted(true);
 
 // Hide default cursor on desktop
 if (window.matchMedia('(pointer: fine)').matches) {
 document.body.style.cursor = 'none';
 }
 
 const moveCursor = (e: MouseEvent) => {
 cursorX.set(e.clientX);
 cursorY.set(e.clientY);
 };

 const handleMouseOver = (e: MouseEvent) => {
 // Check if hovering over interactive elements
 const target = e.target as HTMLElement;
 if (
 target.tagName.toLowerCase() === 'a' ||
 target.tagName.toLowerCase() === 'button' ||
 target.closest('a') ||
 target.closest('button') ||
 target.classList.contains('interactive')
 ) {
 setIsHovering(true);
 } else {
 setIsHovering(false);
 }
 };

 window.addEventListener('mousemove', moveCursor);
 window.addEventListener('mouseover', handleMouseOver);

 return () => {
 window.removeEventListener('mousemove', moveCursor);
 window.removeEventListener('mouseover', handleMouseOver);
 document.body.style.cursor = 'auto';
 };
 }, [cursorX, cursorY]);

 // Don't render on server or touch devices
 if (!isMounted) return null;
 if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
 return null; 
 }

 // Define variants based on cursor type
 const variants = {
 default: {
 height: 32,
 width: 32,
 x: "-50%",
 y: "-50%",
 scale: isHovering ? 1.5 : 1,
 backgroundColor: isHovering ? "rgba(245, 158, 11, 0.1)" : "rgba(245, 158, 11, 0.4)",
 borderColor: "rgba(245, 158, 11, 1)",
 },
 view: {
 height: 96,
 width: 96,
 x: "-50%",
 y: "-50%",
 scale: 1,
 backgroundColor: "rgba(245, 158, 11, 0.9)",
 borderColor: "rgba(245, 158, 11, 1)",
 },
 text: {
 height: 64,
 width: 64,
 x: "-50%",
 y: "-50%",
 scale: 1,
 backgroundColor: "transparent",
 borderColor: "rgba(255, 255, 255, 0.5)",
 },
 hidden: {
 opacity: 0
 }
 };

 return (
 <motion.div
 className="fixed top-0 left-0 pointer-events-none z-[9999] border-2 rounded-full flex items-center justify-center backdrop-blur-[2px]"
 style={{
 x: cursorXSpring,
 y: cursorYSpring,
 }}
 animate={cursorType as keyof typeof variants}
 variants={variants as any}
 transition={{ type: "spring", stiffness: 300, damping: 20 }}
 >
 {/* Inner dot for precision (only in default state) */}
 {cursorType === "default" && (
 <motion.div 
 className="w-1.5 h-1.5 bg-brand-accent rounded-full"
 animate={{ scale: isHovering ? 0 : 1 }}
 />
 )}
 
 {/* Label for view state */}
 {cursorType === "view" && (
 <motion.span 
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 className="text-white text-sm font-semibold tracking-wide"
 >
 View
 </motion.span>
 )}
 </motion.div>
 );
}
