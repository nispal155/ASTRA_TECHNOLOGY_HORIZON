"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from "framer-motion";
import { Users, Target, Rocket, Award } from "lucide-react";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.round(latest)) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

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
    { label: "Years Experience", value: 10, suffix: "+", icon: <Award className="w-6 h-6" /> },
    { label: "Successful Projects", value: 50, suffix: "+", icon: <Target className="w-6 h-6" /> },
    { label: "Team Members", value: 25, suffix: "+", icon: <Users className="w-6 h-6" /> },
    { label: "Client Satisfaction", value: 99, suffix: "%", icon: <Rocket className="w-6 h-6" /> },
  ];

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative py-32 bg-brand-light-bg border-y border-slate-200 overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute top-0 right-0 w-full h-[150%] pointer-events-none opacity-30 "
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary leading-tight">
              Engineering the future of <span className="text-brand-accent">intelligent technology.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Based in Itahari, Nepal, Astra Technology Horizon is a premier IT consulting and software engineering firm. We specialize in transforming complex business challenges into scalable, efficient, and beautifully designed digital solutions.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
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
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-slate-200/50 shadow-xl"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-brand-accent mb-6 shadow-inner">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-brand-primary mb-2 tracking-tight">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm uppercase tracking-wider text-slate-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
