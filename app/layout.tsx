import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
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
    <html lang="en" className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased selection:bg-[#7F5AF0]/30 selection:text-white font-sans text-sm md:text-base bg-black text-white">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
