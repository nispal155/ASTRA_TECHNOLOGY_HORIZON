"use client";

import { motion } from 'framer-motion';

export default function TechStack() {
 const technologies = [
 "React", "Next.js", "TypeScript", "Node.js", "Python", 
 "AWS", "Azure", "TailwindCSS", "Framer Motion", "MongoDB", 
 "PostgreSQL", "Docker", "Kubernetes", "GraphQL"
 ];

 // Double the array for seamless infinite looping
 const scrollItems = [...technologies, ...technologies, ...technologies];

 return (
 <section className="py-20 bg-brand-primary overflow-hidden relative border-y border-white/10">
 
 {/* Gradient Masks for smooth fade on edges */}
 <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-primary to-transparent z-10"></div>
 <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-primary to-transparent z-10"></div>

 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center relative z-20">
 <h2 className="text-sm font-semibold tracking-widest text-brand-accent uppercase">Powered By Industry Standard Tech</h2>
 </div>

 <div className="relative flex whitespace-nowrap overflow-hidden group">
 <motion.div
 animate={{ x: ["0%", "-50%"] }}
 transition={{
 ease: "linear",
 duration: 30,
 repeat: Infinity,
 }}
 className="flex gap-8 md:gap-16 items-center w-max group-hover:[animation-play-state:paused] cursor-pointer"
 >
 {scrollItems.map((tech, index) => (
 <div 
 key={`${tech}-${index}`} 
 className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-slate-300 hover:text-white hover:bg-white/10 hover:border-brand-accent/50 transition-all duration-300"
 >
 <span className="text-xl md:text-2xl font-bold tracking-tight">{tech}</span>
 </div>
 ))}
 </motion.div>
 </div>
 </section>
 );
}
