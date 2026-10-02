import React from "react";

const technologies = [
  { name: "React", src: "/tech/react.svg" },
  { name: "Next.js", src: "/tech/nextjs.svg" },
  { name: "TypeScript", src: "/tech/typescript.svg" },
  { name: "Node.js", src: "/tech/nodejs.svg" },
  { name: "Python", src: "/tech/python.svg" },
  { name: "AWS", src: "/tech/amazonwebservices.svg" },
  { name: "Docker", src: "/tech/docker.svg" },
  { name: "PostgreSQL", src: "/tech/postgresql.svg" },
  { name: "Flutter", src: "/tech/flutter.svg" },
  { name: "MongoDB", src: "/tech/mongodb.svg" },
  { name: "Firebase", src: "/tech/firebase.svg" },
  { name: "GraphQL", src: "/tech/graphql.svg" },
];

export default function TechMarquee() {
  // Double the list to create a seamless infinite loop
  const duplicatedLogos = [...technologies, ...technologies];

  return (
    <section aria-label="Technologies we use" className="w-full bg-brand-card border-b border-brand-border py-12 overflow-hidden flex flex-col items-center">
      <p className="text-sm font-medium text-brand-text-secondary uppercase tracking-widest mb-8 px-4 text-center">
        Powered by modern, enterprise-grade technology
      </p>
      
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
        {/* Left and Right Fade Gradients for a premium effect */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-card to-transparent z-10 hidden md:block"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-card to-transparent z-10 hidden md:block"></div>

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
                className={`h-10 w-auto object-contain ${tech.name === "Next.js" ? "invert-on-dark" : ""}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
