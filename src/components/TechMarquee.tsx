import React from "react";

const technologies = [
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Flutter", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Firebase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { name: "GraphQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
];

export default function TechMarquee() {
  // Double the list to create a seamless infinite loop
  const duplicatedLogos = [...technologies, ...technologies];

  return (
    <section aria-label="Technologies we use" className="w-full bg-white border-b border-brand-border py-12 overflow-hidden flex flex-col items-center">
      <p className="text-sm font-medium text-brand-text-secondary uppercase tracking-widest mb-8 px-4 text-center">
        Powered by modern, enterprise-grade technology
      </p>
      
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
        {/* Left and Right Fade Gradients for a premium effect */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 hidden md:block"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 hidden md:block"></div>

        {/* Scrolling Track */}
        <ul className="flex w-max animate-scroll items-center gap-16 px-8">
          {duplicatedLogos.map((tech, index) => (
            <li
              key={`${tech.name}-${index}`}
              aria-hidden={index >= technologies.length ? true : undefined}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tech.src}
                alt={index >= technologies.length ? "" : tech.name}
                title={tech.name}
                width={40}
                height={40}
                loading="lazy"
                decoding="async"
                className="h-10 w-auto object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
