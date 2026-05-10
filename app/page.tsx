import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { MarqueeWidget } from "@/components/MarqueeWidget";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeWidget />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
