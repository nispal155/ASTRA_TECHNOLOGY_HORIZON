"use client";

import { motion } from "framer-motion";
import { Quote, Star, ArrowUpRight } from "lucide-react";
import TextReveal from "./TextReveal";
import { useCursor } from "./CursorContext";
import Link from "next/link";

const testimonials = [
  {
    name: "Bodhi Tree Journeys Nepal",
    role: "Travel & Tour Operator",
    content: "Astra Technology Horizon completely transformed our digital presence. The website they built for us is fast, intuitive, and beautifully represents our brand. Their technical execution was spot on.",
    rating: 5,
    gradient: "from-blue-50 to-brand-primary/10",
    link: "https://bodhitreejourneysnepal.com/",
  },
  {
    name: "Rahul Parajuli",
    role: "Personal Portfolio",
    content: "The attention to detail and design aesthetics provided by Astra Technology Horizon elevated my personal brand to a whole new level. Highly recommended!",
    rating: 5,
    gradient: "from-brand-accent/10 to-orange-50",
    link: "https://rahulparajuli.com.np/",
  },
];

const loopingTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

export default function Testimonials() {
  const { setCursorType } = useCursor();

  return (
    <section className="py-24 md:py-32 bg-brand-light-bg border-y border-slate-200 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/5 border border-brand-accent/20 text-sm font-semibold text-brand-accent mb-6 backdrop-blur-md"
          >
            <Star className="w-4 h-4" />
            <span>Testimonials</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text tracking-tight">
            <TextReveal>What our</TextReveal>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
              <TextReveal delay={0.2}>clients say.</TextReveal>
            </span>
          </h2>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1.5rem)); } 
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `,
        }}
      />

      <div
        className="w-full relative z-20 flex overflow-hidden group cursor-none"
        onMouseEnter={() => setCursorType("view")}
        onMouseLeave={() => setCursorType("default")}
      >
        <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-brand-light-bg to-transparent z-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-brand-light-bg to-transparent z-30 pointer-events-none" />

        <div className="flex gap-6 px-3 w-max animate-marquee">
          {loopingTestimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`w-[350px] md:w-[450px] flex-shrink-0 rounded-3xl p-8 md:p-10 border border-slate-200/60 bg-gradient-to-br ${testimonial.gradient} backdrop-blur-xl relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 shadow-lg hover:shadow-2xl flex flex-col justify-between`}
              style={{
                background: "rgba(255, 255, 255, 0.7)",
              }}
            >
              <Quote className="absolute top-6 right-6 w-20 h-20 text-slate-100 -z-10 transform rotate-12" />

              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-accent text-brand-accent" />
                  ))}
                </div>

                <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium mb-8">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center font-bold text-white text-lg shadow-md">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <Link
                    href={testimonial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-brand-text hover:text-brand-accent transition-colors flex items-center gap-1 group/link"
                  >
                    {testimonial.name}
                    <ArrowUpRight className="w-3 h-3 opacity-50 group-hover/link:opacity-100 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-all" />
                  </Link>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
