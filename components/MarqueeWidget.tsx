"use client";
import { motion } from "framer-motion";

const items = [
  "Artificial Intelligence", "•",
  "Computer Vision", "•",
  "Deep Learning", "•",
  "Machine Learning", "•",
  "Neural Networks", "•",
  "Data Science", "•",
  "Predictive Analytics", "•",
  "NLP", "•",
];

export function MarqueeWidget() {
  return (
    <div className="w-full py-8 overflow-hidden bg-black/40 border-y border-white/5 relative flex items-center">
      {/* Gradient Mask for fading edges */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#0B0B0F] via-transparent to-[#0B0B0F] w-full" />
      
      {/* Infinite scrolling track */}
      <motion.div
        className="flex whitespace-nowrap items-center w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 50,
        }}
      >
        {/* Render the items twice to ensure smooth infinite looping by translating -50% */}
        {[...items, ...items].map((text, i) => (
          <span 
            key={i} 
            className={`text-2xl md:text-3xl font-black uppercase tracking-widest mx-4 md:mx-6 ${text === "•" ? "text-[#00FF87]" : "text-white/40"}`}
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
