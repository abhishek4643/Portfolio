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
        className="flex whitespace-nowrap gap-8 items-center"
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {/* Render the items three times to ensure smooth infinite looping */}
        {[...items, ...items, ...items].map((text, i) => (
          <span 
            key={i} 
            className={`text-2xl md:text-3xl font-black uppercase tracking-widest ${text === "•" ? "text-[#7F5AF0]" : "text-white/10"}`}
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
