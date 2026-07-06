"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export default function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const words = children.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay }
    }
  };

  const child = {
    hidden: {
      y: "120%",
      opacity: 0,
      rotateZ: 5
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateZ: 0,
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 80,
        mass: 1
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, index) => (
        <span key={index} className="overflow-hidden mr-[0.25em] mb-[0.1em] pb-[0.1em] inline-block">
          <motion.span variants={child} className="inline-block origin-bottom-left">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
