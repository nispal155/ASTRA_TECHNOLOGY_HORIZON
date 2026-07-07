"use client";

import { motion } from "framer-motion";

export default function Map() {
 return (
 <section className="py-24 bg-white border-b border-slate-200 ">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <h2 className="text-3xl font-bold text-brand-primary mb-4">Visit Our Headquarters</h2>
 <p className="text-slate-600 ">Itahari-4, Sunsari, Koshi Province, Nepal</p>
 </div>
 
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.7 }}
 className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 "
 >
 <iframe
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14258.917539665798!2d87.2694178!3d26.6892601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6c6a4918e97f%3A0x6a0c007c08a94b59!2sItahari%204%2C%20Itahari%2056705%2C%20Nepal!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
 width="100%"
 height="100%"
 style={{ border: 0, filter: "contrast(1.1) opacity(0.9)" }}
 allowFullScreen={false}
 loading="lazy"
 referrerPolicy="no-referrer-when-downgrade"
 className="" // Quick trick to make maps dark mode compatible
 ></iframe>
 </motion.div>
 </div>
 </section>
 );
}
