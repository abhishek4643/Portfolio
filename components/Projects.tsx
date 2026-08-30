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
        Developed a healthcare AI application using <strong className="text-white font-medium">PyTorch</strong> and OpenCV to analyze <strong className="text-white font-medium">medical images</strong>, <strong className="text-white font-medium">track heart rate</strong> from camera feeds, and identify <strong className="text-white font-medium">disease risk</strong> indicators. Added a multilingual <strong className="text-white font-medium">NLP chatbot</strong> to allow patients to ask health-related questions in their native language. Hosted on <strong className="text-white font-medium">Streamlit Cloud</strong> for live health updates. <strong className="text-white font-medium">Shortlisted</strong> at Vyoma National Hackathon (BVRIT, 200+ teams).
      </>
    ),
    tech: ["Python", "PyTorch", "OpenCV", "Streamlit", "NLP"],
    github: "https://github.com/abhishek4643",
    link: "#",
  },
  {
    title: "Emotion-Based Music Recognition System",
    tag: "Deep Learning · CV",
    tagColor: "#00FF87",
    date: "Oct 2025",
    gradient: "linear-gradient(135deg,#00FF87,#00FF87)",
    description: (
      <>
        Created <strong className="text-white font-medium">a live application</strong> that detects <strong className="text-white font-medium">facial expressions</strong> through a webcam and suggests YouTube music based on the user&apos;s current emotion. Trained a <strong className="text-white font-medium">CNN</strong> model to classify <strong className="text-white font-medium">7 different emotions</strong> with <strong className="text-white font-medium">95% accuracy</strong>. Combined live camera feed, emotion prediction, and music playback into one <strong className="text-white font-medium">Flask + OpenCV</strong> application. Presented at HackSavvy-25 (MGIT, <strong className="text-white font-medium">24-hour national hackathon</strong>, 200+ teams).
      </>
    ),
    tech: ["Python", "Flask", "OpenCV", "CNN", "Deep Learning"],
    github: "https://github.com/abhishek4643",
    link: "#",
  },
  {
    title: "Veypass — Cloud-Native Bus Ticketing Platform",
    tag: "Full-Stack · ML",
    tagColor: "#00FF87",
    date: "Aug 2025",
    gradient: "linear-gradient(135deg,#00FF87,#00FF87)",
    description: (
      <>
        Built a <strong className="text-white font-medium">cloud-native bus ticketing</strong> system with <strong className="text-white font-medium">React</strong> frontend and <strong className="text-white font-medium">FastAPI</strong> backend. Integrated a <strong className="text-white font-medium">Scikit-Learn ML model</strong> for dynamic pricing based on demand, distance, and seat occupancy. Implemented <strong className="text-white font-medium">JWT-encrypted QR code</strong> tickets for offline conductor verification. Features an interactive <strong className="text-white font-medium">3D seat selection</strong> UI with Framer Motion animations. Deployed on <strong className="text-white font-medium">Vercel + Render</strong> with Supabase PostgreSQL.
      </>
    ),
    tech: ["React", "FastAPI", "Scikit-Learn", "PostgreSQL", "JWT", "Tailwind CSS"],
    github: "https://github.com/abhishek4643/Veypass",
    link: "https://veypass.vercel.app",
  },
  {
    title: "Automated Network Reconnaissance Tool",
    tag: "Cybersecurity",
    tagColor: "#00FF87",
    date: "Mar 2025",
    gradient: "linear-gradient(135deg, #00FF87, #00FF87)",
    description: (
      <>
        Wrote a Bash script using <strong className="text-white font-medium">Nmap</strong> to run quick, normal, and deep network scans <strong className="text-white font-medium">using CLI arguments</strong>, reducing the need for manual commands. Added <strong className="text-white font-medium">text and XML output formats</strong> with timestamps to track scan results. Included <strong className="text-white font-medium">OS detection</strong>, service version checking, and <strong className="text-white font-medium">NSE</strong> scripts to find common <strong className="text-white font-medium">CVEs</strong> and <strong className="text-white font-medium">vulnerabilities</strong>. Tested on a local lab network for accuracy.
      </>
    ),
    tech: ["Bash", "Nmap", "Linux", "Shell Scripting"],
    github: "https://github.com/abhishek4643/Nmap-Project",
    link: "#",
  },
  {
    title: "Vindela — Fine Dining Reservation System",
    tag: "Full-Stack · MERN",
    tagColor: "#00FF87",
    date: "Aug 2025",
    gradient: "linear-gradient(135deg,#00FF87,#00FF87)",
    description: (
      <>
        Built a full-stack <strong className="text-white font-medium">Restaurant Reservation Management System</strong> with <strong className="text-white font-medium">React</strong>, Node.js, Express, and <strong className="text-white font-medium">MongoDB</strong>. Features customer-facing table reservations with <strong className="text-white font-medium">real-time availability</strong> checking and an admin command center. Implements <strong className="text-white font-medium">JWT-based role access control</strong> (Customer vs Admin), fixed time-slot booking with conflict prevention, and automated capacity filtering. Seeded database with default admin credentials.
      </>
    ),
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/abhishek4643/Vindela",
    link: "#",
  },
  {
    title: "DataPure — Intelligent Data Deduplication",
    tag: "Cloud · Full-Stack",
    tagColor: "#00FF87",
    date: "Aug 2025",
    gradient: "linear-gradient(135deg,#00FF87,#00FF87)",
    description: (
      <>
        Built a full-stack cloud application with a <strong className="text-white font-medium">two-layer validation pipeline</strong> — <strong className="text-white font-medium">SHA-256</strong> exact hashing followed by <strong className="text-white font-medium">RapidFuzz</strong> semantic similarity — to detect and prevent duplicate data before it reaches the database. Features a <strong className="text-white font-medium">React + Vite</strong> frontend with real-time analytics dashboard, live search command palette, and a manual flagged-entry review workflow. Backend powered by <strong className="text-white font-medium">FastAPI</strong> with <strong className="text-white font-medium">Supabase PostgreSQL</strong>. Built for the <strong className="text-white font-medium">CodeAlpha Cloud Computing Internship</strong>.
      </>
    ),
    tech: ["React", "FastAPI", "Supabase", "RapidFuzz", "SHA-256", "Framer Motion"],
    github: "https://github.com/abhishek4643/DataPure",
    link: "#",
  },
  {
    title: "CloudShield — Cloud Security Platform",
    tag: "Cloud · Security",
    tagColor: "#00FF87",
    date: "2025",
    gradient: "linear-gradient(135deg,#00FF87,#00FF87)",
    description: (
      <>
        Developed a <strong className="text-white font-medium">cloud security monitoring</strong> platform focused on protecting cloud infrastructure from threats and vulnerabilities. Built with a structured <strong className="text-white font-medium">code architecture</strong> and integrated <strong className="text-white font-medium">database layer</strong> for persistent threat logging. Designed to detect, alert, and respond to security incidents across <strong className="text-white font-medium">cloud environments</strong> with automated scanning and compliance checks.
      </>
    ),
    tech: ["Python", "Cloud Security", "Database", "Threat Detection"],
    github: "https://github.com/abhishek4643/CloudShield",
    link: "#",
  },
  {
    title: "Notes — Mobile Notes App",
    tag: "Mobile · React Native",
    tagColor: "#00FF87",
    date: "2025",
    gradient: "linear-gradient(135deg,#00FF87,#00FF87)",
    description: (
      <>
        Built a cross-platform <strong className="text-white font-medium">mobile notes application</strong> using <strong className="text-white font-medium">React Native</strong> and <strong className="text-white font-medium">Expo</strong> with TypeScript. Features a clean, minimal UI for creating, editing, and organizing personal notes. Configured with <strong className="text-white font-medium">EAS Build</strong> for streamlined deployment to iOS and Android. Implements local state management and a responsive layout optimized for mobile devices.
      </>
    ),
    tech: ["React Native", "Expo", "TypeScript", "EAS Build"],
    github: "https://github.com/abhishek4643/Notes",
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

        {/* 2-Column Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div key={idx} variants={fadeUp}>
              <TiltCard className="h-full">
                <article className="group relative rounded-2xl p-6 md:p-8 overflow-hidden transition-all duration-500 flex flex-col h-full">
                  
                  <div className="flex flex-col h-full relative z-10">
                    {/* Top Row: Tag, Date & Links */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <span
                          className="text-[11px] px-2.5 py-1 rounded-md font-semibold border uppercase tracking-wider"
                          style={{
                            color: project.tagColor,
                            backgroundColor: `${project.tagColor}15`,
                            borderColor: `${project.tagColor}30`,
                          }}
                        >
                          {project.tag}
                        </span>
                        <span className="text-[11px] font-bold text-white/25 uppercase tracking-widest">
                          {project.date}
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-[#00FF87] transition-colors">
                          <GitHubIcon size={16} />
                        </a>
                        {project.link !== "#" && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-[#00FF87] transition-colors">
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#00FF87] transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/60 mb-6 leading-relaxed text-sm md:text-base">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/[0.04] border border-white/[0.08] text-white/40">
                          {t}
                        </span>
                      ))}
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
