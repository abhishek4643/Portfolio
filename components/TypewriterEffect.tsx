"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const titles = [
  "AI & Computer Vision Engineer",
  "Python Developer",
  "Machine Learning Specialist",
  "Deep Learning Enthusiast"
];

export function TypewriterEffect() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-[30px] flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/60 font-medium tracking-wide"
        >
          {titles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
