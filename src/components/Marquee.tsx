"use client";
import { motion } from "framer-motion";
import { Server, Database, Cloud, Code, Monitor, Cpu, ShieldCheck, Layers, Globe, Smartphone } from "lucide-react";

export default function Marquee() {
 const techStack = [
 { name: "React", icon: <Code className="w-6 h-6" /> },
 { name: "Next.js", icon: <Layers className="w-6 h-6" /> },
 { name: "Node.js", icon: <Server className="w-6 h-6" /> },
 { name: "AWS", icon: <Cloud className="w-6 h-6" /> },
 { name: "PostgreSQL", icon: <Database className="w-6 h-6" /> },
 { name: "Cybersecurity", icon: <ShieldCheck className="w-6 h-6" /> },
 { name: "Machine Learning", icon: <Cpu className="w-6 h-6" /> },
 { name: "Web Apps", icon: <Monitor className="w-6 h-6" /> },
 { name: "Mobile Apps", icon: <Smartphone className="w-6 h-6" /> },
 { name: "Global Scale", icon: <Globe className="w-6 h-6" /> },
 ];

 // Duplicate the array to create a seamless infinite loop
 const duplicatedTech = [...techStack, ...techStack];

 return (
 <section className="py-12 bg-white border-y border-brand-light-slate overflow-hidden">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
 <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest">
 Powered By Modern Technologies
 </p>
 </div>
 
 <div className="relative flex w-full overflow-hidden">
 {/* Left/Right Fades */}
 <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
 <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
 
 <motion.div
 className="flex whitespace-nowrap py-2"
 animate={{ x: ["0%", "-50%"] }}
 transition={{ ease: "linear", duration: 30, repeat: Infinity }}
 >
 {duplicatedTech.map((tech, index) => (
 <div 
 key={index} 
 className="flex items-center gap-3 px-8 py-4 mx-4 bg-brand-light-bg rounded-2xl border border-slate-200 shadow-sm"
 >
 <div className="text-brand-accent">{tech.icon}</div>
 <span className="font-semibold text-brand-primary text-lg">{tech.name}</span>
 </div>
 ))}
 </motion.div>
 </div>
 </section>
 );
}
