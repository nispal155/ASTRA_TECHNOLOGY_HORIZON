"use client";

import { motion } from "framer-motion";
import { Users, Target, Rocket, Award } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "10+", icon: <Award className="w-6 h-6" /> },
    { label: "Successful Projects", value: "50+", icon: <Target className="w-6 h-6" /> },
    { label: "Team Members", value: "25+", icon: <Users className="w-6 h-6" /> },
    { label: "Client Satisfaction", value: "99%", icon: <Rocket className="w-6 h-6" /> },
  ];

  return (
    <section id="about" className="py-24 bg-brand-light-bg dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-sm font-semibold text-brand-accent mb-2">
              <Users className="w-4 h-4" />
              <span>About Us</span>
            </div>
            <h2 className="text-4xl font-bold text-brand-primary dark:text-white leading-tight">
              Engineering the future of <span className="text-brand-accent">intelligent technology.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Based in Itahari, Nepal, Astra Technology Horizon is a premier IT consulting and software engineering firm. We specialize in transforming complex business challenges into scalable, efficient, and beautifully designed digital solutions.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Our mission is to empower businesses worldwide with robust technical architectures, moving from initial concept to a polished, production-ready product with unwavering precision.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm"
              >
                <div className="w-12 h-12 bg-brand-light-slate dark:bg-slate-700 rounded-2xl flex items-center justify-center text-brand-accent mb-6">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-brand-primary dark:text-white mb-2">{stat.value}</div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
