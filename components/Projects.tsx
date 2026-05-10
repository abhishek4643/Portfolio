"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "./icons";
import { fadeUp, stagger } from "@/lib/animations";
import { TiltCard } from "./TiltCard";

const projects = [
  {
    title: "Purva Laksana — AI Healthcare Companion",
    emoji: "🏥",
    date: "Jul 2025",
    gradient: "linear-gradient(135deg,#7F5AF0,#00C2FF)",
    description: (
      <>
        Comprehensive healthcare AI platform leveraging <strong className="text-white">computer vision</strong> for medical image analysis, <strong className="text-purple-400">heart rate monitoring</strong>, and <strong className="text-cyan-400">disease risk prediction</strong>. Integrated multilingual AI chatbot powered by NLP for patient queries, deployed on Streamlit Cloud with real-time health updates.
      </>
    ),
    tech: ["Python", "PyTorch", "OpenCV", "Streamlit", "NLP"],
    github: "https://github.com/abhishek4643",
    link: "#",
  },
  {
    title: "Emotion-Based Music Recommendation System",
    emoji: "🎵",
    date: "Oct 2025",
    gradient: "linear-gradient(135deg,#FF3366,#FF9933)",
    description: (
      <>
        Real-time <strong className="text-white">facial emotion recognition system</strong> using deep learning that detects user mood from live camera input and serves personalized music via YouTube. Trained custom <strong className="text-purple-400">CNN from scratch</strong> to classify 7 emotional states with <strong className="text-cyan-400">95% accuracy</strong>. Full end-to-end pipeline with Flask backend.
      </>
    ),
    tech: ["Python", "Flask", "OpenCV", "CNN", "Deep Learning"],
    github: "https://github.com/abhishek4643",
    link: "#",
  },
  {
    title: "Automated Network Reconnaissance — Nmap & Bash",
    emoji: "🔐",
    date: "Mar 2025",
    gradient: "linear-gradient(135deg, #00F260, #0575E6)",
    description: (
      <>
        Modular <strong className="text-white">Bash-based network scanning automation tool</strong> that wraps Nmap operations. Implemented CLI with argument parsing, <strong className="text-purple-400">multi-format output</strong> (text/XML), timestamped archives. Integrated <strong className="text-cyan-400">OS detection, NSE vulnerability scanning</strong>, and service version identification.
      </>
    ),
    tech: ["Bash", "Nmap", "Linux", "Shell Scripting"],
    github: "https://github.com/abhishek4643/Nmap-Project",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-container relative">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#00C2FF" }}>
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">My Projects</h2>
          <div className="w-16 h-[3px] rounded-full" style={{ background: "linear-gradient(90deg,#7F5AF0,#00C2FF)" }} />
        </motion.div>

        {/* Stack */}
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <motion.div key={idx} variants={fadeUp}>
              <TiltCard className="h-full">
                <article className="group relative glass rounded-[2rem] overflow-hidden border border-white/[0.08] hover:border-white/[0.15] transition-all p-8 md:p-10 h-full">
                  <div 
                    className="absolute top-0 left-0 right-0 h-1 transition-transform duration-500 scale-x-0 origin-left group-hover:scale-x-100" 
                    style={{ background: project.gradient }} 
                  />
                  
                  <div className="flex flex-col h-full relative z-10">
                    {/* Top Row: Emoji & Links */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{project.emoji}</div>
                      <div className="flex gap-3">
                        <a href={project.github} className="text-white/40 hover:text-white transition-colors">
                          <GitHubIcon size={24} />
                        </a>
                        <a href={project.link} className="text-white/40 hover:text-white transition-colors">
                          <ExternalLink size={24} />
                        </a>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#c4b5fd] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/60 mb-6 leading-relaxed max-w-4xl text-sm md:text-base">
                      {project.description}
                    </p>

                    {/* Bottom Row: Tech Stack & Date */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-white/50">
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="text-sm font-bold text-white/30 uppercase tracking-widest shrink-0">
                        {project.date}
                      </div>
                    </div>
                  </div>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
