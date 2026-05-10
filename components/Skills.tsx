"use client";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, stagger } from "@/lib/animations";

import { TiltCard } from "./TiltCard";

const skillCategories = [
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    colorTheme: "purple",
    skills: ["PyTorch", "TensorFlow", "YOLO", "Ultralytics", "CNN", "NLP", "Deep Learning"],
  },
  {
    icon: "👁️",
    title: "Computer Vision",
    colorTheme: "cyan",
    skills: ["OpenCV", "Image Classification", "Object Detection", "Real-Time Analysis", "Medical Imaging"],
  },
  {
    icon: "🌐",
    title: "Web & Deployment",
    colorTheme: "purple",
    skills: ["Flask", "Streamlit", "REST APIs", "HTML/CSS", "Streamlit Cloud"],
  },
  {
    icon: "🔐",
    title: "Cybersecurity",
    colorTheme: "cyan",
    skills: ["Nmap", "Network Reconnaissance", "Vulnerability Scanning", "Bash Scripting"],
  },
  {
    icon: "🛠️",
    title: "Tools & Platforms",
    colorTheme: "purple",
    skills: ["Git / GitHub", "Google Colab", "VS Code", "Roboflow", "Tableau"],
  },
  {
    icon: "📚",
    title: "Core CS Concepts",
    colorTheme: "cyan",
    skills: ["Data Structures", "Algorithms", "OOP", "DBMS"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-container relative">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Heading */}
        <motion.div variants={fadeUp} className="mb-12">
          <p className="text-[#7F5AF0] text-sm font-semibold tracking-widest uppercase mb-3">
            02. Technical Arsenal
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 rounded-full" style={{ background: "linear-gradient(90deg,#7F5AF0,#00C2FF)" }} />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div key={cat.title} variants={scaleIn}>
              <TiltCard className="h-full">
                <div
                  className="glass p-8 rounded-2xl flex flex-col transition-all duration-300 h-full hover:border-violet-500/40 relative z-10"
                >
                  <div className="text-4xl mb-4">{cat.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{cat.title}</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`text-[13px] px-3 py-1.5 rounded-md font-medium transition-transform hover:-translate-y-0.5 ${
                          cat.colorTheme === "purple" 
                            ? "bg-purple-500/20 text-purple-300 border border-purple-500/10" 
                            : "bg-cyan-500/20 text-cyan-300 border border-cyan-500/10"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
