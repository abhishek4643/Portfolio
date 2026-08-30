import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

import Achievements from "@/components/Achievements";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import IntroAnimation from "@/components/IntroAnimation";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <div className="noise-overlay" />
      <IntroAnimation />
      <Navbar />
      <Hero />

      <About />
      <Skills />
      <Projects />

      <Achievements />
      <Publications />
      <Contact />
      <Footer />
    </main>
  );
}
