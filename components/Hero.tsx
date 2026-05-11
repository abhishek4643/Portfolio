"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { TypewriterEffect } from "./TypewriterEffect";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Absolute Black Background with minimal radial glow */}
      <div className="absolute inset-0 bg-black" />
      <div className="hero-glow -top-[200px] -left-[200px] bg-[#7F5AF0] opacity-[0.08]" />
      <div className="hero-glow -bottom-[200px] -right-[200px] bg-[#00F0FF] opacity-[0.05]" style={{ animationDelay: "2s" }} />

      <div className="max-w-4xl mx-auto text-center px-6 relative z-10 w-full">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.h1 
            variants={fadeUp} 
            className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-6"
          >
            PERUMALLA <br />
            <span className="gradient-text inline-block">ABHISHEK</span>
          </motion.h1>
          
          <motion.div variants={fadeUp} className="mb-4">
            <TypewriterEffect />
          </motion.div>
          
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
          <motion.div variants={fadeUp} className="grid grid-cols-3 gap-8 mt-20 w-full max-w-2xl mx-auto border-t border-white/[0.05] pt-12">
            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl md:text-4xl font-black text-white">07<span className="text-[#00F0FF]">+</span></div>
              <div className="font-mono text-[9px] md:text-[10px] text-white/40 mt-3 uppercase tracking-widest">National Wins</div>
            </div>
            <div className="flex flex-col items-center justify-center border-x border-white/[0.05]">
              <div className="text-2xl md:text-4xl font-black text-white">03<span className="text-[#7F5AF0]">.</span></div>
              <div className="font-mono text-[9px] md:text-[10px] text-white/40 mt-3 uppercase tracking-widest">Major Projects</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl md:text-4xl font-black text-white">97<span className="text-[#00F0FF]">%</span></div>
              <div className="font-mono text-[9px] md:text-[10px] text-white/40 mt-3 uppercase tracking-widest">Naukri Percentile</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
