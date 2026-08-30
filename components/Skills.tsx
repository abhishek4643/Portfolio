"use client";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, stagger } from "@/lib/animations";

import { TiltCard } from "./TiltCard";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "LLMs", "NLP", "Deep Learning", "RapidFuzz"],
  },
  {
    title: "Computer Vision",
    skills: ["OpenCV", "YOLOv9", "Image Classification", "Object Detection", "Medical Imaging", "Roboflow"],
  },
  {
    title: "Full-Stack Web",
    skills: ["React", "Node.js", "Express", "FastAPI", "Spring Boot", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Databases & Cache",
    skills: ["PostgreSQL", "MongoDB", "Supabase", "Redis", "Vector Databases", "DBMS"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Docker", "Vercel", "Render", "Streamlit Cloud", "Git / GitHub", "REST APIs"],
  },
  {
    title: "Cybersecurity & Core",
    skills: ["Nmap", "JWT", "SHA-256", "Bash Scripting", "Python", "Java", "Data Structures"],
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
                  className="p-8 rounded-2xl flex flex-col transition-all duration-300 h-full relative z-10"
                >
                  <div 
                    className="w-10 h-[2px] rounded-full mb-6"
                    style={{ 
                      background: "linear-gradient(90deg, #00FF87, transparent)" 
                    }}
                  />
                  <h3 className="text-xl font-semibold mb-4 text-white">{cat.title}</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[13px] px-3 py-1.5 rounded-md font-medium transition-transform hover:-translate-y-0.5"
                        style={{
                          background: "rgba(0, 255, 135, 0.1)",
                          color: "rgba(0, 255, 135, 0.85)",
                          border: "1px solid rgba(0, 255, 135, 0.15)",
                        }}
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
