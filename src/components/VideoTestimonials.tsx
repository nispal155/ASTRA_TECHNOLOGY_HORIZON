"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import testimonialData from "@content/testimonials.json";

interface Video {
  name: string;
  role: string;
  youtubeId: string;
  quote: string;
}

/** YouTube testimonials; loads the player only after a click (keeps the page fast). Hidden when none are configured. */
export default function VideoTestimonials() {
  const videos = testimonialData.videos as Video[];
  const [playing, setPlaying] = useState<string | null>(null);
  if (!videos.length) return null;

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-brand-primary mb-8 text-center">Hear it from our clients</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((v) => (
          <li key={v.youtubeId} className="card overflow-hidden">
            <div className="relative aspect-video bg-brand-navy">
              {playing === v.youtubeId ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}?autoplay=1`}
                  title={`Video testimonial from ${v.name}`}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <button type="button" onClick={() => setPlaying(v.youtubeId)} className="group absolute inset-0 w-full h-full" aria-label={`Play video testimonial from ${v.name}`}>
                  <Image src={`https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                  <span className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-brand-accent-strong text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 ml-1" aria-hidden="true" />
                  </span>
                </button>
              )}
            </div>
            <div className="p-6">
              <p className="text-brand-text-secondary mb-3">&ldquo;{v.quote}&rdquo;</p>
              <p className="font-semibold text-brand-primary">{v.name}</p>
              <p className="text-sm text-brand-text-secondary">{v.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
