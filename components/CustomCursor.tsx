"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorState = "default" | "hover" | "active";

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [isVisible, setIsVisible] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const followX = useSpring(mouseX, { damping: 26, stiffness: 300, mass: 0.7 });
  const followY = useSpring(mouseY, { damping: 26, stiffness: 300, mass: 0.7 });

  const getTargetState = useCallback((target: EventTarget | null): CursorState => {
    if (!target) return "default";
    const el = (target instanceof Element ? target : (target as Node)?.parentElement) as HTMLElement | null;
    if (!el) return "default";

    // 1. Clickable elements (links, buttons, inputs, interactive cards)
    const isClickable = Boolean(
      el.closest("a, button, .tilt-card, [role='button'], input, textarea, select, label")
    );
    if (isClickable) return "hover";

    // 2. Text elements & sentences (paragraphs, headings, spans, list items, quotes, badges)
    const isTextTag = Boolean(
      el.closest("p, h1, h2, h3, h4, h5, h6, span, strong, b, em, i, li, blockquote, code, pre, time")
    );
    const hasTextContent = Boolean(el.textContent && el.textContent.trim().length > 0);
    const isNotMedia = !el.closest("svg, img, video, canvas");

    if (isTextTag && hasTextContent && isNotMedia) {
      return "hover";
    }

    return "default";
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY, target } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);

    lastPos.current = { x: clientX, y: clientY };

    if (!isVisible) setIsVisible(true);

    const nextState = getTargetState(target);
    setCursorState((prev) => (prev === "active" ? "active" : nextState));
  }, [mouseX, mouseY, isVisible, getTargetState]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMouseOver = (e: MouseEvent) => {
      setCursorState((prev) => (prev === "active" ? "active" : getTargetState(e.target)));
    };

    const handleMouseDown = () => setCursorState("active");
    const handleMouseUp = (e: MouseEvent) => setCursorState(getTargetState(e.target));

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", () => setIsVisible(false));
    document.addEventListener("mouseenter", () => setIsVisible(true));

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, getTargetState]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      <motion.div
        className="absolute rounded-full border border-[#00FF87]"
        style={{
          x: followX,
          y: followY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorState === "hover" ? 56 : 28,
          height: cursorState === "hover" ? 56 : 28,
          opacity: cursorState === "active" ? 0.9 : 0.8,
          boxShadow: cursorState === "hover" 
            ? "0 0 30px 4px rgba(0, 255, 135, 0.6), inset 0 0 15px rgba(0, 255, 135, 0.4)" 
            : "0 0 15px rgba(0, 255, 135, 0.3)",
          backgroundColor: cursorState === "hover" ? "rgba(0, 255, 135, 0.15)" : "rgba(0, 255, 135, 0)",
        }}
        transition={{ type: "spring", stiffness: 280, damping: 20 }}
      />
    </div>
  );
}
