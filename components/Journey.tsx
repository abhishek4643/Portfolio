"use client";
import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight, stagger } from "@/lib/animations";

const timeline = [
  {
    type: "work",
    icon: "👨‍💼",
    title: "Team Leader",
    org: "Hackathons & Projects",
    period: "2024 – Present",
    description:
      "Managing project strategy, development coordination, and presentations. Focused on shipping working solutions that solve real user problems.",
    color: "#7F5AF0",
  },
  {
    type: "education",
    icon: "🎓",
    title: "B.Tech — Computer Science & Engineering",
    org: "Guru Nanak Institutions Technical Campus, Hyderabad",
    period: "Expected Aug 2026",
    description: "CGPA: 7.58 · Core coursework in Data Structures, Algorithms, ML, AI, Cloud Computing, OS, DBMS, and Computer Networks.",
    color: "#00C2FF",
  },
  {
    type: "education",
    icon: "📘",
    title: "Intermediate — MPC",
    org: "Narayana Junior College, Hyderabad",
    period: "2020 – 2022",
    description: "Percentage: 73% · Focused on Mathematics, Physics, and Chemistry.",
    color: "#7F5AF0",
  },
  {
    type: "education",
    icon: "🏫",
    title: "Secondary School Certificate",
    org: "Narayana High School, Telangana",
    period: "2019 – 2020",
    description: "CGPA: 10.0 · Strong foundation in Sciences and Mathematics.",
    color: "#00C2FF",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="section-container">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Heading */}
        <motion.div variants={fadeUp} className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#7F5AF0] to-[#00C2FF]">My Journey</h2>
          <div className="w-16 h-[3px] mx-auto rounded-full" style={{ background: "linear-gradient(90deg,#7F5AF0,#00C2FF)" }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="timeline-line hidden md:block" />

          <div className="flex flex-col gap-10 md:gap-0">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={item.title} className="relative flex items-center md:justify-center">
                  {/* Desktop: alternating sides */}
                  <motion.div
                    variants={isLeft ? slideLeft : slideRight}
                    className="w-full md:w-[calc(50%-36px)] glass p-6 hover:border-violet-500/30 hover:-translate-y-1 transition-all duration-300"
                    style={{
                      marginLeft: isLeft ? 0 : "auto",
                      marginRight: isLeft ? "auto" : 0,
                      position: "relative",
                    }}
                  >
                    {/* Period badge */}
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                      style={{
                        background: `${item.color}18`,
                        color: item.color,
                        border: `1px solid ${item.color}30`,
                      }}
                    >
                      {item.period}
                    </span>

                    <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-xs font-medium mb-3" style={{ color: item.color }}>
                      {item.org}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {item.description}
                    </p>
                  </motion.div>

                  {/* Center dot (desktop) */}
                  <div
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full items-center justify-center z-10 text-base"
                    style={{
                      background: "#0B0B0F",
                      border: `2px solid ${item.color}`,
                      boxShadow: `0 0 16px ${item.color}40`,
                    }}
                  >
                    {item.icon}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
