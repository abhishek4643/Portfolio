"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOADING_DURATION = 2.1;
const EXIT_DELAY = 3.3;

export default function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
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
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.25 }}
          className="fixed inset-0 z-[10000] bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Vignette + glow */}
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 40%, rgba(0,240,255,0.16), transparent 45%), radial-gradient(circle at 40% 70%, rgba(127,90,240,0.2), transparent 55%)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.55, 0.22] }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.7) 70%)",
            }}
          />

          {/* Calibration rings */}
          <motion.div
            className="absolute w-[74vmin] h-[74vmin] rounded-full"
            style={{
              backgroundImage:
                "repeating-conic-gradient(from 0deg, rgba(255,255,255,0.25) 0deg 2deg, transparent 2deg 9deg)",
              WebkitMaskImage:
                "radial-gradient(circle, transparent 62%, black 63%, black 66%, transparent 67%)",
              maskImage:
                "radial-gradient(circle, transparent 62%, black 63%, black 66%, transparent 67%)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-[60vmin] h-[60vmin] rounded-full border border-white/10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: [0, 0.7, 0.3], scale: [0.95, 1, 1.02] }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
          <motion.div
            className="absolute w-[44vmin] h-[44vmin] rounded-full border border-white/15"
            animate={{ opacity: [0.1, 0.35, 0.2] }}
            transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
          />

          {/* Sweep arc */}
          <motion.div
            className="absolute w-[70vmin] h-[70vmin] rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent, rgba(0,240,255,0.35) 18%, transparent 35%)",
              WebkitMaskImage:
                "radial-gradient(circle, transparent 60%, black 61%, black 67%, transparent 68%)",
              maskImage:
                "radial-gradient(circle, transparent 60%, black 61%, black 67%, transparent 68%)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
          />

          {/* Orbiting markers */}
          <motion.div
            className="absolute w-[66vmin] h-[66vmin]"
            animate={{ rotate: 360 }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute left-1/2 -translate-x-1/2 -top-1.5 w-2.5 h-2.5 rounded-full bg-[#00F0FF] shadow-[0_0_12px_rgba(0,240,255,0.8)]" />
          </motion.div>
          <motion.div
            className="absolute w-[54vmin] h-[54vmin]"
            animate={{ rotate: -360 }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 rounded-full bg-[#7F5AF0] shadow-[0_0_10px_rgba(127,90,240,0.7)]" />
          </motion.div>

          {/* Center reticle */}
          <div className="absolute w-16 h-[1px] bg-white/15" />
          <div className="absolute h-16 w-[1px] bg-white/15" />

          {/* Pulse ring */}
          <motion.div
            className="absolute w-[26vmin] h-[26vmin] rounded-full border border-white/10"
            animate={{ scale: [0.75, 1.05], opacity: [0, 0.35, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
          />

          {/* Content */}
          <motion.div
            className="relative z-10 flex flex-col items-center justify-center text-center px-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <motion.h1
              className="mt-3 text-3xl md:text-5xl font-black text-white tracking-[0.18em] uppercase"
              initial={{ opacity: 0, letterSpacing: "0.34em" }}
              animate={{ opacity: 1, letterSpacing: "0.18em" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              Welcome
            </motion.h1>

            <motion.div
              className="mt-8 w-64 h-[2px] bg-white/10 relative overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] via-[#7F5AF0] to-[#00F0FF]"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: LOADING_DURATION, ease: "linear" }}
              />
            </motion.div>
          </motion.div>

          {/* Status line */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] md:text-[11px] font-mono uppercase tracking-[0.4em] text-white/45"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            Initializing...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
