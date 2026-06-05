"use client";
import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight, stagger } from "@/lib/animations";

const timeline = [
  {
    type: "work",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00FF87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>,
    title: "Team Leader",
    org: "Hackathons & Projects",
    period: "2024 – Present",
    description:
      "Managing project strategy, development coordination, and presentations. Focused on shipping working solutions that solve real user problems.",
    color: "#00FF87",
  },
  {
    type: "education",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00FF87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>,
    title: "B.Tech — Computer Science & Engineering",
    org: "Guru Nanak Institutions Technical Campus, Hyderabad",
    period: "Expected Aug 2026",
    description: "CGPA: 7.58 · Core coursework in Data Structures, Algorithms, ML, AI, Cloud Computing, OS, DBMS, and Computer Networks.",
    color: "#00FF87",
  },
  {
    type: "education",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00FF87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>,
    title: "Intermediate — MPC",
    org: "Narayana Junior College, Hyderabad",
    period: "2020 – 2022",
    description: "Percentage: 73% · Focused on Mathematics, Physics, and Chemistry.",
    color: "#00FF87",
  },
  {
    type: "education",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00FF87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"></path><path d="M9 8h1"></path><path d="M9 12h1"></path><path d="M14 8h1"></path><path d="M14 12h1"></path><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path></svg>,
    title: "Secondary School Certificate",
    org: "Narayana High School, Telangana",
    period: "2019 – 2020",
    description: "CGPA: 10.0 · Strong foundation in Sciences and Mathematics.",
    color: "#00FF87",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00FF87] to-[#00FF87]">My Journey</h2>
          <div className="w-16 h-[3px] mx-auto rounded-full" style={{ background: "linear-gradient(90deg,#00FF87,#00FF87)" }} />
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
                    className="w-full md:w-[calc(50%-36px)] glass p-6 hover:-translate-y-1 transition-all duration-300"
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
