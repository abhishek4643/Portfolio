"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const publications = [
  {
    title: "Securing Cloud Systems with Smart Authentication and Adaptive Encryption",
    type: "Research Paper",
    journal: "IJERST",
    year: "2026",
    link: "https://www.linkedin.com/in/perumalla-abhishek-a1ab57251/overlay/Certifications/818973327/treasury/?profileId=ACoAAD5I3fYBp7Kdjis344OIeOn-9kW_qhDAftU",
    description: "Research on intelligent cloud security using adaptive cryptography and a hybrid CNN–Transformer model for real-time attack prediction.",
    color: "#00FF87",
  }
];

export default function Publications() {
  return (
    <section id="publications" className="section-container relative z-10 pt-10">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div variants={fadeUp} className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00FF87] to-[#00FF87]">
            Publications
          </h2>
          <div className="w-16 h-[3px] mx-auto rounded-full bg-[#00FF87]" />
        </motion.div>

        <div className="max-w-4xl mx-auto flex flex-col gap-16 px-4 md:px-0">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="flex flex-col items-start text-left"
            >
              <h3 className="text-xl md:text-[1.4rem] font-mono font-semibold text-[#e6edf3] mb-4 leading-snug">
                {pub.title}
              </h3>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-4 py-1 rounded-full border border-white/50 text-[#00FF87] font-mono text-[13px] tracking-wide">
                  {pub.type}
                </span>
                <span className="text-white/40 font-mono text-[13px] tracking-widest">
                  {pub.year}
                </span>
              </div>

              <div className="flex flex-col gap-1.5 font-mono text-[13px] md:text-sm mb-5 tracking-wide">
                <div>
                  <span className="text-[#00FF87]">Journal:</span> <span className="text-white/70 ml-2">{pub.journal}</span>
                </div>
                <div>
                  <span className="text-[#00FF87]">Status:</span> 
                  <a 
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-[#00FF87] ml-3 transition-colors hover:underline underline-offset-4 decoration-[#00FF87]/50"
                  >
                    CERTIFICATE
                  </a>
                </div>
              </div>
              
              <p className="text-white/50 font-mono text-[13px] md:text-[13.5px] leading-relaxed max-w-3xl tracking-wide">
                {pub.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
