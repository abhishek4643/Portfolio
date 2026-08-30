"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black py-24 md:py-32"
    >
      {/* Background glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#00FF87] opacity-[0.03] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#00FF87] opacity-[0.03] blur-[150px] pointer-events-none" />

      {/* Massive ghost text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="text-[18vw] font-black leading-none text-white whitespace-nowrap"
          style={{ opacity: 0.02, WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}
        >
          ABHISHEK
        </span>
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-12"
      >
        {/* Left Column: Huge Typography */}
        <div className="flex flex-col justify-center">
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-block w-12 h-[2px] bg-[#00FF87] mb-6" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Start a<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF87] to-[#00aa5a]">
                conversation.
              </span>
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="text-white/50 text-base md:text-lg max-w-md leading-relaxed font-light mt-4">
            I&apos;m currently looking for new opportunities. Whether you have a project idea, need a developer, or just want to say hi, my inbox is always open.
          </motion.p>
        </div>

        {/* Right Column: Clean List */}
        <div className="flex flex-col justify-center gap-16 lg:pl-12">
          
          {/* Contact Information */}
          <motion.div variants={fadeUp} className="flex flex-col gap-2">
            <h3 className="text-[#00FF87] font-mono text-[11px] uppercase tracking-[0.2em] mb-4">Contact Details</h3>
            
            <a 
              href="mailto:abhishekp.perumalla@gmail.com" 
              className="group flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 py-6 hover:border-[#00FF87]/50 transition-colors gap-2"
            >
              <span className="text-xl md:text-2xl text-white/80 group-hover:text-white transition-colors font-medium">Email</span>
              <span className="text-sm text-white/50 group-hover:text-[#00FF87] transition-colors">abhishekp.perumalla@gmail.com</span>
            </a>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 py-6 gap-2">
              <span className="text-xl md:text-2xl text-white/80 font-medium">Phone</span>
              <span className="text-sm text-white/50">+91 8919415774</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 py-6 gap-2">
              <span className="text-xl md:text-2xl text-white/80 font-medium">Location</span>
              <span className="text-sm text-white/50">Hyderabad, India</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeUp} className="flex flex-col gap-2">
            <h3 className="text-[#00FF87] font-mono text-[11px] uppercase tracking-[0.2em] mb-6">Social Profiles</h3>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/abhishek4643" 
                target="_blank" 
                rel="noreferrer" 
                className="group relative px-8 py-4 rounded-full border border-white/20 overflow-hidden bg-black transition-all hover:border-[#00FF87]"
              >
                <div className="absolute inset-0 bg-[#00FF87] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10 text-white group-hover:text-black text-sm uppercase tracking-widest font-semibold transition-colors duration-300">
                  GitHub
                </span>
              </a>

              <a 
                href="https://www.linkedin.com/in/perumalla-abhishek-a1ab57251" 
                target="_blank" 
                rel="noreferrer" 
                className="group relative px-8 py-4 rounded-full border border-white/20 overflow-hidden bg-black transition-all hover:border-[#00FF87]"
              >
                <div className="absolute inset-0 bg-[#00FF87] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10 text-white group-hover:text-black text-sm uppercase tracking-widest font-semibold transition-colors duration-300">
                  LinkedIn
                </span>
              </a>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
