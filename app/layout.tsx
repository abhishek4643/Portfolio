import type { Metadata } from "next";
import "./globals.css";
import { Oxanium, JetBrains_Mono } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Perumalla Abhishek | AI Developer & Computer Vision Engineer",
  description:
    "Final-year CS student building AI-powered apps with PyTorch, OpenCV, and Flask — from medical image analysis to real-time emotion detection. Based in Hyderabad, India.",
  keywords: [
    "Perumalla Abhishek",
    "AI Developer",
    "Computer Vision Engineer",
    "PyTorch",
    "OpenCV",
    "Flask",
    "Python Developer",
    "Machine Learning",
    "Hyderabad",
  ],
  authors: [{ name: "Perumalla Abhishek" }],
  openGraph: {
    title: "Perumalla Abhishek | AI Developer",
    description:
      "Building AI-powered apps — from medical image analysis to real-time emotion detection.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oxanium.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased selection:bg-[#00FF87]/30 selection:text-white font-sans text-sm md:text-base bg-[#0B0F14] text-[#F8FAFC]">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
