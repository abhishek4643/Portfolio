"use client";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, stagger } from "@/lib/animations";
import { TiltCard } from "./TiltCard";

const achievements = [
  {
    number: "01",
    title: "1st Prize — Path Master",
    org: "ACUMEN Tech Fest 2026 · Vasavi College of Engineering",
    desc: "Built autonomous robotic systems leveraging sensor integration, path optimization, and real-time embedded control algorithms.",
    date: "Apr 2026",
    accent: "#7F5AF0",
  },
  {
    number: "02",
    title: "2nd Prize — Obstacle Smash",
    org: "ACUMEN Tech Fest 2026 · Vasavi College of Engineering",
    desc: "Developed obstacle detection and navigation system for autonomous robotics competition.",
    date: "Apr 2026",
    accent: "#00C2FF",
  },
  {
    number: "03",
    title: "97.03 Percentile — Young Turks 2025",
    org: "Naukri Campus · India's Largest Campus Skill Contest",
    desc: "Achieved top 3% ranking evaluated across aptitude, programming, and domain knowledge by industry experts.",
    date: "Sep 2025",
    accent: "#7F5AF0",
  },
  {
    number: "04",
    title: "Vyoma Hackathon — TechSurge2k25",
    org: "B.V. Raju Institute of Technology · Health & Well-Being Domain",
    desc: "Built Purva Laksana, an AI healthcare companion with medical image analysis and multilingual chatbot support.",
    date: "Jul 2025",
    accent: "#00C2FF",
  },
  {
    number: "05",
    title: "HackSavvy-25 National Hackathon",
    org: "MGIT · 200+ Teams · 24-Hour Competition",
    desc: "Developed emotion-based music recommendation system using CNN and Flask, competed nationally.",
    date: "Mar 2025",
    accent: "#7F5AF0",
  },
  {
    number: "06",
    title: "Bharatiya Antariksh Hackathon 2025",
    org: "ISRO · Hack2skill",
    desc: "Submitted idea addressing space technology challenges; received Certificate of Acknowledgement from ISRO.",
    date: "Jan 2025",
    accent: "#00C2FF",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-container relative">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div variants={fadeUp} className="mb-12">
          <p className="text-[#7F5AF0] text-sm font-semibold tracking-widest uppercase mb-3">
            04. Recognition
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Achievements & Awards</h2>
          <div className="w-20 h-1 rounded-full" style={{ background: "linear-gradient(90deg,#7F5AF0,#00C2FF)" }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, i) => (
            <motion.div key={i} variants={scaleIn}>
              <TiltCard className="h-full">
                <div className="glass p-7 rounded-2xl flex flex-col transition-all duration-300 h-full hover:border-violet-500/40 relative z-10 overflow-hidden">
                  {/* Accent number */}
                  <div
                    className="absolute top-5 right-6 text-5xl font-black select-none pointer-events-none"
                    style={{ color: `${item.accent}14`, fontVariantNumeric: "tabular-nums" }}
                  >
                    {item.number}
                  </div>

                  {/* Accent bar */}
                  <div
                    className="w-8 h-[2px] rounded-full mb-4"
                    style={{ background: `linear-gradient(90deg, ${item.accent}, transparent)` }}
                  />

                  <h3 className="text-base font-semibold mb-2 text-white leading-snug">{item.title}</h3>
                  <p className="text-[11px] mb-3 font-medium tracking-wide" style={{ color: item.accent }}>{item.org}</p>
                  <p className="text-white/55 text-sm leading-relaxed mb-4 flex-grow">{item.desc}</p>
                  <p className="text-white/35 text-xs font-semibold tracking-wider uppercase">{item.date}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div variants={fadeUp} className="mt-20">
          <h3 className="text-xl font-bold mb-8 text-white">Education</h3>
          <div className="glass p-8 rounded-2xl hover:border-[#7F5AF0]/40 transition-colors duration-500 hover:shadow-[0_12px_40px_rgba(127,90,240,0.15)]">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <h4 className="text-base font-semibold mb-2 text-white">B.Tech in Computer Science and Engineering</h4>
                <p className="text-[#7F5AF0] mb-2 font-medium text-sm">Guru Nanak Institutions Technical Campus</p>
                <p className="text-white/50 text-sm">Hyderabad, India</p>
              </div>
              <div className="md:text-right">
                <p className="text-white/50 font-medium text-sm">Expected July 2026</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
