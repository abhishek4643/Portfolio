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
        <motion.div variants={fadeUp} className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00FF87] to-[#00FF87]">About me</h2>
          <div className="w-20 h-1 rounded-full mx-auto" style={{ background: "linear-gradient(90deg,#00FF87,#00FF87)" }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div variants={slideLeft} className="flex flex-col gap-6 text-white/60 text-sm md:text-base leading-relaxed">
            <p>
              I&apos;m a final-year <strong className="text-white font-medium">Computer Science Engineering student</strong> at Guru Nanak Institutions Technical Campus, specializing in <strong className="text-white font-medium">AI, machine learning, and computer vision</strong>.
            </p>
            <p>
              I build <strong className="text-white font-medium">production-ready AI systems</strong> — from healthcare platforms with medical image analysis to real-time emotion detection systems. My work combines deep learning, computer vision, and web frameworks to create impactful solutions.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m leading teams at <strong className="text-white font-medium">national-level hackathons</strong>, where I&apos;ve secured <strong className="text-white font-medium">4+ wins</strong> including recognition from ISRO and Microsoft.
            </p>
            <p>
              I&apos;m passionate about applying AI to solve real-world problems in <strong className="text-white font-medium">healthcare, cybersecurity, and human-computer interaction</strong>.
            </p>
          </motion.div>

          <motion.div variants={slideRight}>
            <div className="glass p-8 md:p-10 rounded-[2rem]  transition-colors duration-500 hover:shadow-[0_12px_40px_rgba(0, 255, 135,0.15)]">
              <h3 className="text-xl font-semibold mb-8 text-[#00FF87]">Core Technologies</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-white/50 mb-3 font-medium uppercase tracking-wider">AI &amp; ML</p>
                  <div className="flex flex-wrap gap-2">
                    {["PyTorch", "TensorFlow", "YOLO", "CNN", "NLP"].map(s => (
                      <span key={s} className="text-[13px] px-3 py-1.5 bg-[#00FF87]/10 border border-[#00FF87]/30 text-[#00FF87] rounded-lg font-medium">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-3 font-medium uppercase tracking-wider">Computer Vision</p>
                  <div className="flex flex-wrap gap-2">
                    {["OpenCV", "Roboflow", "Image Classification"].map(s => (
                      <span key={s} className="text-[13px] px-3 py-1.5 bg-[#00FF87]/10 border border-[#00FF87]/30 text-[#00FF87] rounded-lg font-medium">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-3 font-medium uppercase tracking-wider">Web &amp; Deployment</p>
                  <div className="flex flex-wrap gap-2">
                    {["Flask", "Streamlit", "REST APIs"].map(s => (
                      <span key={s} className="text-[13px] px-3 py-1.5 bg-[#00FF87]/10 border border-[#00FF87]/30 text-[#00FF87] rounded-lg font-medium">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-3 font-medium uppercase tracking-wider">Languages</p>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "C", "Bash"].map(s => (
                      <span key={s} className="text-[13px] px-3 py-1.5 bg-[#00FF87]/10 border border-[#00FF87]/30 text-[#00FF87] rounded-lg font-medium">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
