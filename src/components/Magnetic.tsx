"use client";

import { useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function Magnetic({ children }: { children: React.ReactElement }) {
 const ref = useRef<HTMLDivElement>(null);
 const [isHovered, setIsHovered] = useState(false);

 const x = useMotionValue(0);
 const y = useMotionValue(0);

 // Physics tuning for the magnetic pull
 const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
 const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

 const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
 if (!ref.current) return;
 
 // Get mouse position relative to the element's bounding box
 const { clientX, clientY } = e;
 const { height, width, left, top } = ref.current.getBoundingClientRect();
 
 const middleX = clientX - (left + width / 2);
 const middleY = clientY - (top + height / 2);
 
 // Pull factor (how strongly it follows the cursor)
 x.set(middleX * 0.2);
 y.set(middleY * 0.2);
 };

 const handleMouseLeave = () => {
 setIsHovered(false);
 // Snap back to original position
 x.set(0);
 y.set(0);
 };

 return (
 <motion.div
 ref={ref}
 onMouseMove={handleMouseMove}
 onMouseEnter={() => setIsHovered(true)}
 onMouseLeave={handleMouseLeave}
 animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
 style={{ x: springX, y: springY }}
 className="inline-block"
 >
 {children}
 </motion.div>
 );
}
