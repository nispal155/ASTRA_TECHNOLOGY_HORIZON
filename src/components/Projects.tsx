"use client";

import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Projects() {
 const projects = [
 {
 title: 'Bodhi Tree Journeys Nepal',
 description: 'A comprehensive travel and tourism platform showcasing Nepal\'s rich heritage and offering seamless booking experiences.',
 link: 'https://bodhitreejourneysnepal.com/',
 tags: ['Web Development', 'Travel Platform'],
 }
 // More projects will be added here in the future
 ];

 const containerVariants = {
 hidden: { opacity: 0 },
 visible: {
 opacity: 1,
 transition: { staggerChildren: 0.2 }
 }
 };

 const itemVariants = {
 hidden: { opacity: 0, y: 30 },
 visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
 };

 return (
 <section id="projects" className="py-24 bg-white border-b border-slate-100">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
 <motion.div 
 initial={{ opacity: 0, x: -30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="max-w-2xl"
 >
 <h2 className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-3">Our Portfolio</h2>
 <h3 className="text-3xl md:text-5xl font-bold text-brand-text mb-4 tracking-tight">Completed Projects</h3>
 <p className="text-lg text-slate-600 ">
 Explore some of the recent digital solutions we've engineered for our clients.
 </p>
 </motion.div>
 </div>

 <motion.div 
 variants={containerVariants}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "0px" }}
 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
 >
 {projects.map((project, index) => (
 <motion.div 
 key={index}
 variants={itemVariants}
 whileHover={{ y: -10 }}
 className="bg-brand-light-bg rounded-3xl p-8 border border-slate-200 shadow-sm transition-all duration-300 group flex flex-col h-full"
 >
 <div className="flex-grow">
 <h4 className="text-2xl font-bold text-brand-text mb-3 group-hover:text-brand-accent transition-colors">{project.title}</h4>
 <p className="text-slate-600 leading-relaxed mb-6">
 {project.description}
 </p>
 <div className="flex flex-wrap gap-2 mb-8">
 {project.tags.map((tag, tagIndex) => (
 <span 
 key={tagIndex} 
 className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-700 "
 >
 {tag}
 </span>
 ))}
 </div>
 </div>
 
 <div className="pt-6 border-t border-slate-200 mt-auto">
 <a 
 href={project.link} 
 target="_blank" 
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:text-amber-600 transition-colors group/link"
 >
 View Live Project
 <ExternalLink className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
 </a>
 </div>
 </motion.div>
 ))}
 </motion.div>
 </div>
 </section>
 );
}
