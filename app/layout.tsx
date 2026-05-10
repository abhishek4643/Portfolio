import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className={inter.variable}>
      <body className="antialiased selection:bg-[#7F5AF0]/30 selection:text-white font-sans text-sm md:text-base bg-background text-white">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
