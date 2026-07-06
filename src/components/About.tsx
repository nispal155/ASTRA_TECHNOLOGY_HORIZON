"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, Target, Rocket, Award } from "lucide-react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transform values
  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const yCards = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  const stats = [
    { label: "Years Experience", value: "10+", icon: <Award className="w-6 h-6" /> },
    { label: "Successful Projects", value: "50+", icon: <Target className="w-6 h-6" /> },
    { label: "Team Members", value: "25+", icon: <Users className="w-6 h-6" /> },
    { label: "Client Satisfaction", value: "99%", icon: <Rocket className="w-6 h-6" /> },
  ];

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative py-32 bg-brand-light-bg dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800 overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute top-0 right-0 w-full h-[150%] pointer-events-none opacity-30 dark:opacity-20"
      >
        <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-brand-accent/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-[20%] left-[5%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[150px]" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Slower Parallax Text */}
          <motion.div 
            style={{ y: yText }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-sm font-semibold text-brand-accent mb-2">
              <Users className="w-4 h-4" />
              <span>About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary dark:text-white leading-tight">
              Engineering the future of <span className="text-brand-accent">intelligent technology.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              Based in Itahari, Nepal, Astra Technology Horizon is a premier IT consulting and software engineering firm. We specialize in transforming complex business challenges into scalable, efficient, and beautifully designed digital solutions.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              Our mission is to empower businesses worldwide with robust technical architectures, moving from initial concept to a polished, production-ready product with unwavering precision.
            </p>
          </motion.div>
          
          {/* Faster Parallax Cards */}
          <motion.div 
            style={{ y: yCards }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-8 rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-xl"
              >
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-brand-accent mb-6 shadow-inner">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-brand-primary dark:text-white mb-2 tracking-tight">{stat.value}</div>
                <div className="text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
