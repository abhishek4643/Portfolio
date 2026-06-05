"use client";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, stagger } from "@/lib/animations";

import { TiltCard } from "./TiltCard";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    colorTheme: "purple",
    skills: ["PyTorch", "TensorFlow", "YOLO", "Ultralytics", "CNN", "NLP", "Deep Learning"],
  },
  {
    title: "Computer Vision",
    colorTheme: "cyan",
    skills: ["OpenCV", "Image Classification", "Object Detection", "Real-Time Analysis", "Medical Imaging"],
  },
  {
    title: "Web & Deployment",
    colorTheme: "purple",
    skills: ["Flask", "Streamlit", "REST APIs", "HTML/CSS", "Streamlit Cloud"],
  },
  {
    title: "Cybersecurity",
    colorTheme: "cyan",
    skills: ["Nmap", "Network Reconnaissance", "Vulnerability Scanning", "Bash Scripting"],
  },
  {
    title: "Tools & Platforms",
    colorTheme: "purple",
    skills: ["Git / GitHub", "Google Colab", "VS Code", "Roboflow", "Tableau"],
  },
  {
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
        <motion.div variants={fadeUp} className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00FF87] to-[#00FF87]">Skills and Technologies</h2>
          <div className="w-20 h-1 rounded-full mx-auto" style={{ background: "linear-gradient(90deg,#00FF87,#00FF87)" }} />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div key={cat.title} variants={scaleIn}>
              <TiltCard className="h-full">
                <div
                  className="glass p-8 rounded-2xl flex flex-col transition-all duration-300 h-full  relative z-10"
                >
                  <div 
                    className="w-10 h-[2px] rounded-full mb-6"
                    style={{ 
                      background: cat.colorTheme === "purple" 
                        ? "linear-gradient(90deg, #00FF87, transparent)" 
                        : "linear-gradient(90deg, #00FF87, transparent)" 
                    }}
                  />
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
