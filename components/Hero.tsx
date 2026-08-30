"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { TypewriterEffect } from "./TypewriterEffect";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      <div className="max-w-3xl mx-auto text-center px-6 relative z-10 w-full">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Greeting */}
          <motion.p
            variants={fadeUp}
            className="text-xs md:text-sm font-light text-white/40 tracking-[0.25em] mb-4 font-mono"
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-7xl font-black text-[#00FF87] tracking-tight leading-tight mb-5"
          >
            Perumalla Abhishek
          </motion.h1>

          {/* Typewriter */}
          <motion.div variants={fadeUp} className="mb-8">
            <TypewriterEffect />
          </motion.div>
          {/* Bio */}
          <motion.p variants={fadeUp} className="text-sm md:text-base text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
            <strong className="text-white font-medium">Software Engineer</strong> specializing in <strong className="text-white font-medium">AI, Computer Vision, and React development</strong>. Passionate about building intelligent applications with <strong className="text-white font-medium">PyTorch, OpenCV, and Flask</strong> for robust backend AI systems, paired with <strong className="text-white font-medium">React</strong> for dynamic, user-facing web interfaces.
          </motion.p>


          {/* Learn More link */}
          <motion.a
            variants={fadeUp}
            href="#about"
            className="inline-flex items-center gap-2 text-sm text-[#00FF87] hover:text-[#00FF87]/80 transition-colors mb-16 group"
          >
            Learn More
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>

          {/* Scroll indicator */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center gap-2 text-white/20"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
