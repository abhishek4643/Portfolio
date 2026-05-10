"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState<"default" | "hover" | "text">("default");
  const [cursorText, setCursorText] = useState("");
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, { stiffness: 100, damping: 20, mass: 0.2 });
  const ringY = useSpring(mouseY, { stiffness: 100, damping: 20, mass: 0.2 });

  const trailX = useSpring(mouseX, { stiffness: 30, damping: 15, mass: 1 });
  const trailY = useSpring(mouseY, { stiffness: 30, damping: 15, mass: 1 });

  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = target.closest("a, button, [role='button'], .cursor-pointer, .tilt-card");
      
      if (clickable) {
        const text = (clickable.textContent || "").toLowerCase();
        const ariaLabel = (clickable.getAttribute("aria-label") || "").toLowerCase();
        
        if (text.includes("github") || text.includes("linkedin") || text.includes("view")) {
          setCursorText("VIEW");
          setCursorState("text");
        } else if (text.includes("hello") || text.includes("copy") || text.includes("contact")) {
          setCursorText("TALK");
          setCursorState("text");
        } else {
          setCursorState("hover");
          setCursorText("");
        }
      } else {
        setCursorState("default");
        setCursorText("");
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="holographic">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="holographic" />
            <feComposite in="SourceGraphic" in2="holographic" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Energy Trail */}
      <motion.div
        className="fixed top-0 left-0 w-80 h-80 rounded-full pointer-events-none z-[9996] hidden md:flex items-center justify-center mix-blend-screen"
        style={{ x: trailX, y: trailY, translateX: "-50%", translateY: "-50%" }}
      >
        <div className="w-full h-full bg-gradient-to-r from-[#7F5AF0]/20 to-[#00C2FF]/20 blur-[60px] rounded-full animate-pulse" />
      </motion.div>

      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:flex items-center justify-center"
        style={{ 
          x: ringX, y: ringY, 
          translateX: "-50%", translateY: "-50%",
          filter: "url(#holographic)"
        }}
        animate={{
          width: cursorState === "hover" ? 60 : cursorState === "text" ? 90 : 36,
          height: cursorState === "hover" ? 60 : cursorState === "text" ? 90 : 36,
          borderRadius: cursorState === "text" ? "16px" : "50%",
          backgroundColor: isClicking ? "rgba(127, 90, 240, 0.3)" : "rgba(127, 90, 240, 0.05)",
          border: `1.5px solid ${cursorState !== "default" ? "#00C2FF" : "#7F5AF0"}`,
          rotate: isClicking ? 45 : 0,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
      >
        <AnimatePresence>
          {cursorState === "text" && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-[9px] font-black text-white tracking-[0.3em] absolute"
            >
              {cursorText}
            </motion.span>
          )}
        </AnimatePresence>
        
        {/* Animated Scan Line */}
        {cursorState !== "default" && (
          <motion.div 
            className="absolute top-0 left-0 w-full h-[1px] bg-[#00C2FF]/50"
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        )}
      </motion.div>

      {/* Core Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block mix-blend-difference"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          className="w-1 h-1 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"
          animate={{ scale: isClicking ? 2 : 1 }}
        />
      </motion.div>
    </>
  );
}

