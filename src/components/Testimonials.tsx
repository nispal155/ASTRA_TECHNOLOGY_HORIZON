"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
 const testimonials = [
 {
 name: "Bodhi Tree Journeys Nepal",
 role: "Travel & Tour Operator",
 content: "Astra Technology Horizon completely transformed our digital presence. The website they built for us is not only incredibly fast but beautifully represents our brand. Their technical expertise is unmatched in Nepal.",
 rating: 5
 }
 ];

 return (
 <section className="py-24 bg-brand-light-bg border-b border-slate-200 ">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-sm font-semibold text-brand-accent mb-6"
 >
 <Star className="w-4 h-4" />
 <span>Client Success Stories</span>
 </motion.div>
 <motion.h2 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.1 }}
 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6 tracking-tight"
 >
 Trusted by innovators.
 </motion.h2>
 </div>

 <div className="max-w-3xl mx-auto">
 {testimonials.map((testimonial, idx) => (
 <motion.div 
 key={idx}
 initial={{ opacity: 0, scale: 0.95 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5 }}
 className="bg-white rounded-3xl p-10 md:p-14 shadow-xl border border-slate-200 relative overflow-hidden"
 >
 <Quote className="absolute top-10 right-10 w-24 h-24 text-slate-100 -z-10 transform rotate-12" />
 
 <div className="flex gap-1 mb-6">
 {[...Array(testimonial.rating)].map((_, i) => (
 <Star key={i} className="w-5 h-5 fill-brand-accent text-brand-accent" />
 ))}
 </div>
 
 <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium mb-8">
 "{testimonial.content}"
 </p>
 
 <div className="flex items-center gap-4">
 <div className="w-12 h-12 bg-brand-light-slate rounded-full flex items-center justify-center font-bold text-brand-primary text-lg">
 {testimonial.name.charAt(0)}
 </div>
 <div>
 <div className="font-bold text-brand-text ">{testimonial.name}</div>
 <div className="text-sm text-slate-500 ">{testimonial.role}</div>
 </div>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
