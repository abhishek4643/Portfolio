"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check, ArrowRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { fadeUp, stagger } from "@/lib/animations";
import { TiltCard } from "./TiltCard";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText("abhishekp.perumalla@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden py-24">
      {/* Massive Background Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.03] z-0">
        <h1 className="text-[10vw] font-black leading-none whitespace-nowrap text-white">
          LET&apos;S TALK
        </h1>
        <h1 className="text-[10vw] font-black leading-none whitespace-nowrap text-transparent stroke-text" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.5)" }}>
          LET&apos;S TALK
        </h1>
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="w-full max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center"
      >
        <motion.div variants={fadeUp} className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#00C2FF] animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-[#00C2FF] uppercase">Open To Opportunities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Ready to build something <span className="gradient-text">extraordinary?</span>
          </h2>
        </motion.div>

        <motion.div variants={fadeUp} className="w-full max-w-2xl">
          <TiltCard className="w-full">
            <a
              href="mailto:abhishekp.perumalla@gmail.com"
              onClick={handleCopy}
              className="group block relative glass p-6 md:p-10 rounded-[2rem] overflow-hidden cursor-pointer border border-white/10 hover:border-[#7F5AF0]/50 transition-colors"
            >
              {/* Dynamic Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0]/0 to-[#00C2FF]/0 group-hover:from-[#7F5AF0]/10 group-hover:to-[#00C2FF]/10 transition-all duration-500" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <p className="text-sm font-semibold tracking-widest text-white/50 uppercase mb-2">Drop me a line</p>
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#00C2FF] transition-colors">
                    abhishekp.perumalla@gmail.com
                  </h3>
                </div>
                
                <div className="h-12 px-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center gap-3 group-hover:bg-[#7F5AF0] group-hover:border-[#7F5AF0] transition-all duration-300 shadow-lg">
                  {copied ? (
                    <>
                      <Check size={20} className="text-white" />
                      <span className="text-sm font-bold text-white">Copied!</span>
                    </>
                  ) : (
                    <>
                      <span className="text-sm font-bold text-white uppercase tracking-wider">Copy</span>
                      <ArrowRight size={18} className="text-white group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </div>
              </div>
            </a>
          </TiltCard>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-20 flex flex-col items-center gap-6">
          <p className="text-sm text-white/40 font-semibold tracking-widest uppercase">Or find me on</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/abhishek4643" target="_blank" className="group flex items-center justify-center w-14 h-14 rounded-full glass hover:border-[#7F5AF0]/50 hover:-translate-y-1 transition-all">
              <GitHubIcon size={24} className="text-white/60 group-hover:text-white transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/abhishek-perumalla-a1ab57251" target="_blank" className="group flex items-center justify-center w-14 h-14 rounded-full glass hover:border-[#00C2FF]/50 hover:-translate-y-1 transition-all">
              <LinkedInIcon size={24} className="text-white/60 group-hover:text-[#00C2FF] transition-colors" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
