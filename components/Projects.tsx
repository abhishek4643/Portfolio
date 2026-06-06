"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "./icons";
import { fadeUp, stagger } from "@/lib/animations";
import { TiltCard } from "./TiltCard";

const projects = [
  {
    title: "Purva Laksana — AI Healthcare Companion",
    tag: "AI · Healthcare",
    tagColor: "#00FF87",
    date: "Jul 2025",
    gradient: "linear-gradient(135deg,#00FF87,#00FF87)",
    description: (
      <>
        Comprehensive healthcare AI platform leveraging <strong className="text-white">computer vision</strong> for medical image analysis, <strong className="text-white">heart rate monitoring</strong>, and <strong className="text-white">disease risk prediction</strong>. Integrated multilingual AI chatbot powered by NLP for patient queries, deployed on Streamlit Cloud with real-time health updates.
      </>
    ),
    tech: ["Python", "PyTorch", "OpenCV", "Streamlit", "NLP"],
    github: "https://github.com/abhishek4643",
    link: "#",
  },
  {
    title: "Emotion-Based Music Recommendation System",
    tag: "Deep Learning · CV",
    tagColor: "#00FF87",
    date: "Oct 2025",
    gradient: "linear-gradient(135deg,#00FF87,#00FF87)",
    description: (
      <>
        Real-time <strong className="text-white">facial emotion recognition system</strong> using deep learning that detects user mood from live camera input and serves personalized music via YouTube. Trained custom <strong className="text-white">CNN from scratch</strong> to classify 7 emotional states with <strong className="text-white">95% accuracy</strong>. Full end-to-end pipeline with Flask backend.
      </>
    ),
    tech: ["Python", "Flask", "OpenCV", "CNN", "Deep Learning"],
    github: "https://github.com/abhishek4643",
    link: "#",
  },
  {
    title: "Automated Network Reconnaissance — Nmap & Bash",
    tag: "Cybersecurity",
    tagColor: "#00FF87",
    date: "Mar 2025",
    gradient: "linear-gradient(135deg, #00FF87, #00FF87)",
    description: (
      <>
        Modular <strong className="text-white">Bash-based network scanning automation tool</strong> that wraps Nmap operations. Implemented CLI with argument parsing, <strong className="text-white">multi-format output</strong> (text/XML), timestamped archives. Integrated <strong className="text-white">OS detection, NSE vulnerability scanning</strong>, and service version identification.
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
        <motion.div variants={fadeUp} className="mb-12 border-b border-white/[0.05] pb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00FF87] to-[#00FF87]">My Projects</h2>
          <div className="w-20 h-1 rounded-full mx-auto" style={{ background: "linear-gradient(90deg,#00FF87,#00FF87)" }} />
        </motion.div>

        {/* Stack */}
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <motion.div key={idx} variants={fadeUp}>
              <TiltCard className="h-full">
                <article className="group relative rounded-2xl p-8 overflow-hidden transition-all duration-500 flex flex-col h-full">
                  
                  <div className="flex flex-col h-full relative z-10">
                    {/* Top Row: Tag & Links */}
                    <div className="flex items-center justify-between mb-8 border-b border-white/[0.05] pb-5">
                      <span
                        className="text-[13px] px-3 py-1.5 rounded-md font-medium border"
                        style={{
                          color: project.tagColor,
                          backgroundColor: `${project.tagColor}22`,
                          borderColor: `${project.tagColor}33`,
                        }}
                      >
                        {project.tag}
                      </span>
                      <div className="flex gap-4">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[#00FF87] transition-colors">
                          <GitHubIcon size={18} />
                        </a>
                        <a href={project.link} className="text-white/30 hover:text-[#00FF87] transition-colors">
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight uppercase group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/40 mb-8 leading-relaxed max-w-4xl text-sm font-medium">
                      {project.description}
                    </p>

                    {/* Bottom Row: Tech Stack & Date */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-white/50">
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="text-xs font-bold text-white/30 uppercase tracking-widest shrink-0">
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
