"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      setScrolled(scrollTop > 80);
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrollTop / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 z-[100] h-[2px]"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #7F5AF0, #00C2FF)",
          transition: "width 0.08s linear",
        }}
      />

      <nav
        className="fixed top-6 left-1/2 -translate-x-1/2 z-[90] transition-all duration-300 rounded-full"
        style={{
          width: scrolled ? "auto" : "calc(100% - 48px)",
          maxWidth: "1200px",
          background: scrolled
            ? "rgba(5,5,5,0.75)"
            : "rgba(5,5,5,0.4)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: scrolled ? "0 10px 40px rgba(0,0,0,0.5)" : "none",
        }}
      >
        <div className="px-6 h-14 flex items-center justify-between gap-12">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-1.5 select-none group"
          >
            <span className="text-base font-black tracking-tight gradient-text">Abhishek</span>
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#7F5AF0] opacity-80 group-hover:opacity-100 transition-opacity"
              style={{ boxShadow: "0 0 6px #7F5AF0" }}
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="relative px-2 py-2 text-[11px] font-mono tracking-widest uppercase transition-all duration-300 hover:text-white"
                  style={{ color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.4)" }}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-full h-[1px]"
                      style={{ background: "#00F0FF", boxShadow: "0 0 10px #00F0FF" }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white/70 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22 }}
              className="md:hidden border-t border-white/[0.06] px-6 pb-5 pt-3 flex flex-col gap-1"
              style={{ background: "rgba(11,11,15,0.95)" }}
            >
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left py-3 text-sm font-medium text-white/70 hover:text-white border-b border-white/[0.05] last:border-0 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
