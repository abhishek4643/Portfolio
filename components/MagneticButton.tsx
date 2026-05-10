"use client";
import { useRef, useState, ReactNode, MouseEvent, CSSProperties } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
}

export function MagneticButton({
  children,
  className = "",
  style: externalStyle,
  onClick,
  href,
  type = "button",
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setOffset({ x: (e.clientX - cx) * 0.28, y: (e.clientY - cy) * 0.28 });
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  const wrapperStyle: CSSProperties = {
    transform: `translate(${offset.x}px, ${offset.y}px)`,
    transition:
      offset.x === 0 && offset.y === 0
        ? "transform 0.5s ease"
        : "transform 0.12s ease",
    display: "inline-block",
  };

  if (href) {
    return (
      <div
        ref={ref}
        style={wrapperStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <a
          href={href}
          target={target}
          rel={rel}
          className={className}
          style={externalStyle}
        >
          {children}
        </a>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      style={wrapperStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type={type}
        onClick={onClick}
        className={className}
        style={externalStyle}
      >
        {children}
      </button>
    </div>
  );
}
