"use client";
import { useState } from "react";
import Image from "next/image";
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
    accent: "#00FF87",
    images: [
      {
        src: "/path 1.jpeg",
        alt: "Path Master certificate",
      },
      {
        src: "/path 2.jpeg",
        alt: "Path Master award ceremony",
      },
      {
        src: "/path 3.jpeg",
        alt: "Path Master robot build",
      },
    ],
  },
  {
    number: "02",
    title: "2nd Prize — Obstacle Smash",
    org: "ACUMEN Tech Fest 2026 · Vasavi College of Engineering",
    desc: "Developed obstacle detection and navigation system for autonomous robotics competition.",
    date: "Apr 2026",
    accent: "#00FF87",
    images: [
      {
        src: "/Obsticle 1.jpeg",
        alt: "Obstacle Smash certificate",
      },
      {
        src: "/Obsticle 2.jpeg",
        alt: "Obstacle Smash award ceremony",
      },
    ],
  },
  {
    number: "03",
    title: "MakeX Hackathon — AEON",
    org: "Mahindra University · MakeX Hackathon",
    desc: "Achieved 2nd Place after five progressive rounds that tested adaptability, speed, and technical execution. Built momentum through iterative improvements under pressure and secured the runner-up position.",
    date: "2026",
    accent: "#00FF87",
    images: [
      {
        src: "/make 1.jpeg",
        alt: "MakeX Hackathon moment 1",
      },
      {
        src: "/make 2.jpeg",
        alt: "MakeX Hackathon moment 2",
      },
      {
        src: "/make 3.jpeg",
        alt: "MakeX Hackathon moment 3",
      },
    ],
  },
  {
    number: "04",
    title: "97.03 Percentile — Young Turks 2025",
    org: "Naukri Campus · India's Largest Campus Skill Contest",
    desc: "Achieved top 3% ranking evaluated across aptitude, programming, and domain knowledge by industry experts.",
    date: "Sep 2025",
    accent: "#00FF87",
    images: [
      {
        src: "/97.03.jpg",
        alt: "Young Turks 2025 recognition",
      },
    ],
  },
  {
    number: "05",
    title: "Vyoma Hackathon — TechSurge2k25",
    org: "B.V. Raju Institute of Technology · Health & Well-Being Domain",
    desc: "Built Purva Laksana, an AI healthcare companion with medical image analysis and multilingual chatbot support.",
    date: "Jul 2025",
    accent: "#00FF87",
    images: [
      {
        src: "/Vyoma Hackathon at TechSurge2k25.jpg",
        alt: "Vyoma Hackathon certificate",
      },
    ],
  },
  {
    number: "06",
    title: "HackSavvy-25 National Hackathon",
    org: "MGIT · 200+ Teams · 24-Hour Competition",
    desc: "Developed emotion-based music recommendation system using CNN and Flask, competed nationally.",
    date: "Mar 2025",
    accent: "#00FF87",
    images: [
      {
        src: "/National level certificate(MGIT).jpg",
        alt: "MGIT national hackathon certificate",
      },
    ],
  },
];

export default function Achievements() {
  const [selectedImage, setSelectedImage] = useState<null | { src: string; alt: string }>(null);

  return (
    <section id="achievements" className="section-container relative">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div variants={fadeUp} className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00FF87] to-[#00FF87]">Achievements & Awards</h2>
          <div className="w-20 h-1 rounded-full mx-auto" style={{ background: "linear-gradient(90deg,#00FF87,#00FF87)" }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, i) => (
            <motion.div key={i} variants={scaleIn}>
              <TiltCard className="h-full">
                <div className="glass p-7 rounded-2xl flex flex-col transition-all duration-300 h-full  relative z-10 overflow-hidden">
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

                  <h3 className="section-heading text-[1.35rem] md:text-[1.7rem] mb-2 text-white leading-snug">{item.title}</h3>
                  <p className="label-mono mb-3" style={{ color: item.accent }}>{item.org}</p>
                  <p className="text-white/60 text-[14px] leading-[1.75] font-light mb-4 flex-grow">{item.desc}</p>
                  {item.images && item.images.length > 0 && (
                    <div className="mb-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {item.images.map((image) => (
                        <button
                          key={image.src}
                          type="button"
                          onClick={() => setSelectedImage(image)}
                          className="relative w-full overflow-hidden rounded-lg  aspect-[4/3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF87]/70"
                          aria-label={`Open image: ${image.alt}`}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                  <p className="label-mono">{item.date}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div variants={fadeUp} className="mt-20 text-center">
          <p className="label-mono mb-3">Education</p>
          <h3 className="section-heading text-[1.8rem] md:text-[2.4rem] text-transparent bg-clip-text bg-gradient-to-r from-[#00FF87] to-[#00FF87] inline-block mb-8">Academic Journey</h3>
          <div className="glass p-8 rounded-2xl  transition-colors duration-500 hover:shadow-[0_12px_40px_rgba(0, 255, 135,0.15)]">
            <div className="flex flex-col items-center text-center gap-4">
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white" style={{ fontFamily: 'var(--font-heading)' }}>B.Tech in Computer Science and Engineering</h4>
                <p className="text-[#00FF87] mb-2 font-medium label-mono" style={{ letterSpacing: '0.08em' }}>Guru Nanak Institutions Technical Campus</p>
                <p className="text-white/45 text-[13px] mt-1">Hyderabad, India</p>
              </div>
              <div>
                <p className="text-white/50 font-medium text-sm">Expected July 2026</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl  bg-black"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-3 top-3 z-10 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white/80 hover:text-white"
            >
              Close
            </button>
            <div className="relative w-full aspect-[16/10]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
