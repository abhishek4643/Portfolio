"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const LINKS = [
  {
    id: "github",
    label: "GitHub",
    handle: "@abhishek4643",
    href: "https://github.com/abhishek4643",
    color: "#00FF87",
    hoverColor: "#00FF87",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "abhishek-perumalla",
    href: "https://www.linkedin.com/in/abhishek-perumalla-a1ab57251",
    color: "#00FF87",
    hoverColor: "#00FF87",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: "email",
    label: "Email",
    handle: "abhishekp.perumalla@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=abhishekp.perumalla@gmail.com",
    color: "#00FF87",
    hoverColor: "#00FF87",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText("abhishekp.perumalla@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black py-24"
    >
      {/* Background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#00FF87] opacity-[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#00FF87] opacity-[0.04] blur-[100px] pointer-events-none" />

      {/* Massive ghost text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="text-[18vw] font-black leading-none text-white whitespace-nowrap"
          style={{ opacity: 0.025, WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}
        >
          CONNECT
        </span>
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6"
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-[10px] font-mono tracking-[0.2em] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Open to opportunities
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Let&apos;s build something<br />
            <span className="gradient-text">extraordinary</span>
          </h2>
          <p className="mt-4 text-white/40 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Whether it&apos;s a project, a collab, or just a conversation — my inbox is always open.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Big email card */}
          <div className="md:col-span-2 group relative rounded-2xl p-8 overflow-hidden transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00FF87]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.25em] mb-3">Primary contact</p>
              <p className="text-xl md:text-2xl font-bold text-white mb-6 break-all">
                abhishekp.perumalla@gmail.com
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00FF87] hover:bg-[#00FF87] text-white text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0, 255, 135,0.4)]"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.span
                        key="copied"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="flex items-center gap-2"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                        Copied!
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="flex items-center gap-2"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                        Copy email
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=abhishekp.perumalla@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10  text-white/60 hover:text-white text-sm font-semibold transition-all hover:-translate-y-0.5"
                >
                  Send mail
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Status card */}
          <div className="relative rounded-2xl p-8 flex flex-col justify-between overflow-hidden">
            <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-[#00FF87] opacity-[0.08] blur-[40px] pointer-events-none" />
            <div>
              <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.25em] mb-4">Current status</p>
              <div className="flex flex-col gap-3">
                {[
                  { dot: "bg-green-400", label: "Available to work" },
                  { dot: "bg-[#00FF87]", label: "Open to freelance" },
                  { dot: "bg-[#00FF87]", label: "Up for collabs" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${s.dot} animate-pulse`} />
                    <span className="text-xs text-white/50 font-mono">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-[10px] font-mono text-white/20 mt-6">Based in Hyderabad, India 🇮🇳</p>
          </div>

          {/* Social link cards */}
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredLink(link.id)}
              onMouseLeave={() => setHoveredLink(null)}
              className="group relative rounded-2xl p-6 flex items-center gap-4 overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 20% 50%, ${link.color}12 0%, transparent 70%)` }}
              />
              <div
                className="relative z-10 w-10 h-10 rounded-xl flex items-center justify-center  group- transition-colors"
                style={{ color: hoveredLink === link.id ? link.hoverColor : "rgba(255,255,255,0.4)" }}
              >
                {link.icon}
              </div>
              <div className="relative z-10 flex flex-col">
                <span className="text-xs text-white/30 font-mono">{link.label}</span>
                <span className="text-sm text-white/70 font-medium group-hover:text-white transition-colors truncate max-w-[160px]">
                  {link.handle}
                </span>
              </div>
              <svg
                width="14" height="14"
                className="ml-auto relative z-10 text-white/20 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          ))}
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          variants={fadeUp}
          className="text-center mt-12 text-[11px] font-mono tracking-[0.3em] uppercase text-[#00FF87]/60"
          style={{ textShadow: "0 0 10px rgba(0,255,135,0.3)" }}
        >
          Response time: usually within 24 hours
        </motion.p>
      </motion.div>
    </section>
  );
}
