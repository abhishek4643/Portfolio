"use client";
import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const textString = "INITIALIZING...";
const TYPE_INTERVAL = 0.14; // seconds per char
const HOLD_TIME = 2.5; // stabilizes at 2.5s

// Deterministic pseudo-random generator
const pseudoRandom = (seed: number) => {
  const x = Math.sin(seed * 999.99) * 10000;
  return x - Math.floor(x);
};

export default function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  // Pre-calculate glitch frames to avoid hydration mismatch
  const { glitchData } = useMemo(() => {
    const FPS = 60;
    const TOTAL_FRAMES = Math.floor(3.5 * FPS);

    const shakeX = [];
    const shakeY = [];
    const textShadows = [];
    const bgFlash = [];
    const shakeTimes = [];

    for (let frame = 0; frame <= TOTAL_FRAMES; frame++) {
      const t = frame / FPS;
      shakeTimes.push(Math.round((t / 3.5) * 1000) / 1000);

      if (t >= HOLD_TIME) {
        // Stabilization phase: Pristine stillness with subtle green aura pulse
        shakeX.push(0);
        shakeY.push(0);
        
        // Sine wave for smooth pulsing glow during the hold
        const pulse = (Math.sin((t - HOLD_TIME) * 12) + 1) / 2; // 0 to 1
        const glowOpacity = Math.round((0.2 + pulse * 0.4) * 100) / 100;
        const glowSpread = Math.round((12 + pulse * 12) * 100) / 100;
        
        textShadows.push(`0px 0px 8px rgba(0,255,135,0.8), 0px 0px ${glowSpread}px rgba(0,255,135,${glowOpacity})`);
        bgFlash.push("rgba(0,0,0,0)");
      } else {
        let intensity = 0;
        let isStrike = false;

        if (t <= textString.length * TYPE_INTERVAL) {
          // Typing phase
          const charIndex = Math.floor(t / TYPE_INTERVAL);
          const timeSinceStrike = t - (charIndex * TYPE_INTERVAL);
          
          // Tiny tap on keystroke
          if (timeSinceStrike < 0.05) isStrike = true;

          // Only shake heavily on the final 3 dots (indices 12, 13, 14)
          if (charIndex >= 12) {
            intensity = 2 + (charIndex - 11); // Ramps up: 3, 4, 5
            if (pseudoRandom(frame * 7) > 0.5) isStrike = true; // Continuous glitching
          } else {
            // Almost completely still during normal letters
            intensity = isStrike ? 0.5 : 0;
          }
        } else {
          // After typing finishes (2.1s), hit peak tremor before stabilizing at 2.5s
          if (t < 2.3) {
            intensity = 6.0; // Violent final shake
            if (pseudoRandom(frame * 7) > 0.3) isStrike = true; // Heavy flash
          } else {
            intensity = 0.2; // Winding down
          }
        }

        // Clean, premium micro-tremors
        const randX = pseudoRandom(frame * 1) - 0.5;
        const randY = pseudoRandom(frame * 2) - 0.5;
        
        shakeX.push(Math.round(randX * intensity * 100) / 100);
        shakeY.push(Math.round(randY * intensity * 100) / 100);

        // Neon-green energy pulse flash (replaces white flash)
        if (isStrike) {
          bgFlash.push("rgba(0, 255, 135, 0.04)");
        } else {
          bgFlash.push("rgba(0, 0, 0, 0)");
        }

        // Tiny pure green glitch flashes (replaces red/cyan RGB split)
        if (isStrike || pseudoRandom(frame * 5) > 0.95) {
          const rgbScale = intensity * 1.5;
          const shiftX = Math.round(randX * rgbScale * 100) / 100;
          const shiftY = Math.round(randY * rgbScale * 100) / 100;
          textShadows.push(`
            ${shiftX}px ${shiftY}px 0 rgba(0,255,135,0.7), 
            -${shiftX}px -${shiftY}px 0 rgba(0,200,100,0.5),
            0 0 8px rgba(0,255,135,0.5)
          `);
        } else {
          textShadows.push(`0 0 5px rgba(0,255,135,0.15)`); // Faint green glow around text
        }
      }
    }
    
    return { glitchData: { shakeX, shakeY, textShadows, bgFlash, shakeTimes } };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-overlay"
          className="fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 1, 0] }}
          transition={{ duration: 3.5, times: [0, 3.0 / 3.5, 1], ease: "easeInOut" }}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
          {/* Subtle Neon-Green Energy Pulse synchronized with typing */}
          <motion.div
            className="absolute inset-0 pointer-events-none mix-blend-screen z-0"
            animate={{ backgroundColor: glitchData.bgFlash }}
            transition={{ duration: 3.5, times: glitchData.shakeTimes, ease: "linear" }}
          />

          {/* Soft Scanline Interference Overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay z-0" 
            style={{ backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent 2px, rgba(0,255,135,1) 2px, rgba(0,255,135,1) 4px)" }} 
          />
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,#000_100%)] opacity-80 z-0" />

          {/* Central Shake Container - Small Font */}
          <motion.div
            className="relative z-20 flex items-center justify-center"
            animate={{ x: glitchData.shakeX, y: glitchData.shakeY }}
            transition={{ duration: 3.5, times: glitchData.shakeTimes, ease: "linear" }}
          >
            <motion.h1
              className="text-sm md:text-base lg:text-lg font-light uppercase tracking-[0.4em] whitespace-nowrap flex items-center"
              style={{ fontFamily: "var(--font-heading)" }}
              animate={{ textShadow: glitchData.textShadows }}
              transition={{ duration: 3.5, times: glitchData.shakeTimes, ease: "linear" }}
            >
              <div className="flex">
                {textString.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="text-[#00FF87] inline-block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0, delay: i * TYPE_INTERVAL }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>

              {/* Minimal Blinking Terminal Cursor */}
              <motion.span
                className="w-1.5 md:w-2 h-[1em] bg-[#00FF87] ml-2 inline-block"
                style={{ boxShadow: "0 0 10px rgba(0,255,135,0.7)" }}
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear", times: [0, 0.49, 0.5, 1] }}
              />
            </motion.h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
