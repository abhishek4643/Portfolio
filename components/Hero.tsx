"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background Glow */}
      <div className="hero-glow -top-[200px] -left-[200px] bg-[#7F5AF0]" />
      <div className="hero-glow -bottom-[200px] -right-[200px] bg-[#00C2FF]" style={{ animationDelay: "2s" }} />

      <div className="max-w-4xl mx-auto text-center px-6 relative z-10 w-full">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.p variants={fadeUp} className="text-[#7F5AF0] text-sm md:text-base font-medium mb-4">
            Hi, I&apos;m
          </motion.p>
          
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight leading-tight">
            Perumalla <span className="gradient-text pb-2 inline-block">Abhishek</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/60 mb-4 font-medium tracking-wide">
            AI & Computer Vision Engineer
          </motion.p>
          
          <motion.p variants={fadeUp} className="text-sm md:text-base text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Final-year Computer Science student specializing in <strong className="text-[#7F5AF0]">AI, machine learning, and computer vision</strong>. Building production-ready AI systems with PyTorch, OpenCV, and Flask.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#7F5AF0] hover:bg-[#6B47D1] rounded-lg font-semibold text-sm text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(127,90,240,0.3)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              View Projects
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/10 hover:border-[#7F5AF0] hover:bg-[#7F5AF0]/10 rounded-lg font-semibold text-sm text-white transition-all hover:-translate-y-0.5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Get In Touch
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeUp} className="grid grid-cols-3 gap-8 mt-16 w-full max-w-2xl mx-auto">
            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl md:text-3xl font-black gradient-text">7+</div>
              <div className="text-xs font-semibold text-white/50 mt-1 uppercase tracking-wider">National Wins</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl md:text-3xl font-black gradient-text">3</div>
              <div className="text-xs font-semibold text-white/50 mt-1 uppercase tracking-wider">Major Projects</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl md:text-3xl font-black gradient-text">97.03%</div>
              <div className="text-xs font-semibold text-white/50 mt-1 uppercase tracking-wider">Naukri Percentile</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
