"use client";
import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight, stagger } from "@/lib/animations";

export default function About() {
  return (
    <section id="about" className="section-container relative">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div variants={fadeUp} className="w-full flex flex-col items-center justify-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00FF87] to-[#00FF87]">About me</h2>
          <div className="w-20 h-1 rounded-full" style={{ background: "linear-gradient(90deg,#00FF87,#00FF87)" }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div variants={slideLeft} className="flex flex-col gap-6 text-white/60 text-sm md:text-base leading-relaxed text-justify">
            <p>
              I&apos;m a <strong className="text-white font-medium">Software Engineer</strong> specializing in <strong className="text-white font-medium">AI, Computer Vision, and React development</strong>.
            </p>
            <p>
              I build <strong className="text-white font-medium">production-ready AI systems</strong> — from healthcare platforms with medical image analysis to real-time emotion detection systems. My work combines deep learning, computer vision, and web frameworks to create impactful solutions.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m leading teams at <strong className="text-white font-medium">national-level hackathons</strong>, where I&apos;ve secured <strong className="text-white font-medium">3+ wins</strong> including recognition from ISRO and Microsoft.
            </p>
            <p>
              I&apos;m passionate about applying AI to solve real-world problems in <strong className="text-white font-medium">healthcare, cybersecurity, and human-computer interaction</strong>.
            </p>
          </motion.div>

          <motion.div variants={slideRight} className="lg:pl-16 xl:pl-20">
            <div>
              <h3 className="text-xl font-bold mb-6 text-white tracking-wider">Education</h3>
              <div className="flex flex-col gap-2 text-sm md:text-base leading-relaxed text-white/60">
                <p>Guru Nanak Institutions</p>
                <p>Technical Campus</p>
                <p>Bachelor of Technology in</p>
                <p>Computer Science and Engineering</p>
                <p className="text-[#00FF87] mt-1 font-semibold">GPA: 7.9</p>
                <p>Expected: Sep 2026</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
