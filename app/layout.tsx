import type { Metadata } from "next";
import "./globals.css";
import { Fraunces, JetBrains_Mono, Sora } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";

const headingFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700"],
});

const bodyFont = Sora({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased selection:bg-[#7F5AF0]/30 selection:text-white font-sans text-sm md:text-base bg-black text-white">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
