"use client";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";

export default function Footer() {
  return (
    <footer
      className="text-center py-10 px-6"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="flex items-center justify-center gap-5 mb-4">
        {[
          { icon: GitHubIcon, href: "https://github.com/abhishek4643", label: "GitHub" },
          { icon: LinkedInIcon, href: "https://www.linkedin.com/in/abhishek-perumalla-a1ab57251", label: "LinkedIn" },
          { icon: Mail, href: "mailto:abhishekp.perumalla@gmail.com", label: "Email" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-110 hover:border-violet-500/50 hover:text-violet-400"
            style={{
              borderColor: "rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.4)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
      <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
        Designed &amp; Built with ❤️ by{" "}
        <span className="gradient-text font-semibold">Perumalla Abhishek</span>{" "}
        · 2025
      </p>
    </footer>
  );
}
