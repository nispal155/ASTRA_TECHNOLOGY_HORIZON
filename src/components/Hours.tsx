"use client";

import { MapPin, Clock, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

export default function Hours() {
  return (
    <section id="location-hours" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-4">
            Location & <span className="text-brand-accent">Hours</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Visit our central office in Itahari, Nepal or connect with our team during operational hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map & Address Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full h-[320px] md:h-[380px] rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 relative"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14258.917539665798!2d87.2694178!3d26.6892601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6c6a4918e97f%3A0x6a0c007c08a94b59!2sItahari%204%2C%20Itahari%2056705%2C%20Nepal!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "contrast(1.05) opacity(0.95)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Astra Technology Horizon Location Map"
              ></iframe>
            </motion.div>

            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 shrink-0">
                <MapPin className="w-6 h-6 text-brand-accent" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-brand-primary mb-1">
                  Astra Technology Horizon
                </h4>
                <p className="text-slate-600 text-sm">Itahari-4, Sunsari, Koshi Province, Nepal</p>
              </div>
            </div>
          </div>

          {/* Business Hours Column */}
          <div className="lg:col-span-5 flex">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden text-brand-text flex flex-col justify-between w-full"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <Clock className="w-32 h-32" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-200">
                  <CalendarDays className="w-7 h-7 text-brand-accent" />
                  <h3 className="text-2xl font-bold text-brand-primary">Operational Hours</h3>
                </div>

                <ul className="space-y-6">
                  <li className="flex justify-between items-center pb-4 border-b border-slate-200/60">
                    <span className="font-medium text-slate-700">Sunday – Thursday</span>
                    <span className="font-bold text-brand-accent">10:00 AM – 5:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center pb-4 border-b border-slate-200/60">
                    <span className="font-medium text-slate-700">Friday</span>
                    <span className="font-bold text-brand-accent">10:00 AM – 2:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center pt-2">
                    <span className="font-medium text-slate-500">Saturday</span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-200 text-slate-600">
                      Closed
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 text-sm text-slate-500 relative z-10">
                Timezone: Nepal Standard Time (UTC+5:45)
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
