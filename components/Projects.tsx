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
        Developed a healthcare AI application using <strong className="text-white">PyTorch</strong> and OpenCV to analyze <strong className="text-white">medical images</strong>, <strong className="text-white">track heart rate</strong> from camera feeds, and identify <strong className="text-white">disease risk</strong> indicators. Added a multilingual <strong className="text-white">NLP chatbot</strong> to allow patients to ask health-related questions in their native language, making the system easier to use. Hosted the application on <strong className="text-white">Streamlit Cloud</strong> to support multiple users at the same time with live health updates and automated reports. <strong className="text-white">Shortlisted</strong> at Vyoma National Hackathon (BVRIT, 200+ teams, Health &amp; Well-Being track).
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
        Created <strong className="text-white">a live application</strong> that detects <strong className="text-white">facial expressions</strong> through a webcam and suggests YouTube music based on the user&apos;s current emotion. Trained a <strong className="text-white">CNN</strong> model to classify <strong className="text-white">7 different emotions</strong>, reaching <strong className="text-white">95% accuracy</strong> on testing data. Combined the live camera feed, emotion prediction, and music playback into one <strong className="text-white">Flask + OpenCV</strong> application. Presented at HackSavvy-25 (MGIT, <strong className="text-white">24-hour national hackathon</strong>, 200+ competing teams).
      </>
    ),
    tech: ["Python", "Flask", "OpenCV", "CNN", "Deep Learning"],
    github: "https://github.com/abhishek4643",
    link: "#",
  },
  {
    title: "Automated Network Reconnaissance Tool (Nmap & Bash)",
    tag: "Cybersecurity",
    tagColor: "#00FF87",
    date: "Mar 2025",
    gradient: "linear-gradient(135deg, #00FF87, #00FF87)",
    description: (
      <>
        Wrote a Bash script using <strong className="text-white">Nmap</strong> to run quick, normal, and deep network scans <strong className="text-white">using CLI arguments</strong>, reducing the need to type out manual commands. Added <strong className="text-white">text and XML output formats</strong> with timestamps to keep track of scan results over time. Included <strong className="text-white">OS detection</strong>, service version checking, and <strong className="text-white">NSE</strong> scripts to find common <strong className="text-white">CVEs</strong> and <strong className="text-white">vulnerabilities</strong>. Ran tests on a local lab network to ensure the tool gave accurate and consistent results.
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
