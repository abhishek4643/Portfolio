"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOADING_DURATION = 2.5;
const EXIT_DELAY = 3.3;

export default function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Total duration: loading + reveal
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, EXIT_DELAY * 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
          className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Shutter reveal panels */}
          <motion.div
            className="absolute left-0 top-0 h-full w-1/2 bg-black"
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-0 top-0 h-full w-1/2 bg-black"
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#00F0FF] to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />

          <motion.div
            className="relative z-10 flex flex-col items-center justify-center text-center px-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h1
              className="text-3xl md:text-5xl font-black text-white mb-2 tracking-[0.2em] uppercase"
              initial={{ opacity: 0, letterSpacing: "0.4em" }}
              animate={{ opacity: 1, letterSpacing: "0.2em" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              PERUMALLA
            </motion.h1>
            <motion.h2
              className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#7F5AF0] to-[#00F0FF] tracking-[0.2em] uppercase"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              ABHISHEK
            </motion.h2>

            <motion.div
              className="mt-8 w-56 h-[2px] bg-white/10 relative overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] via-[#7F5AF0] to-[#00F0FF]"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: LOADING_DURATION, ease: "linear" }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute w-[70vmin] h-[70vmin] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(0,240,255,0.22) 0%, rgba(127,90,240,0.12) 35%, rgba(0,0,0,0) 70%)",
            }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: [0, 0.8, 0], scale: [0.85, 1.05, 1.2] }}
            transition={{ delay: LOADING_DURATION, duration: 0.6, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
