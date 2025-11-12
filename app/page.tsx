import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import ThreeBackground from "@/components/three-background";

export default function Home() {
  return (
    <>
      {/* 3D Background - renders behind everything */}
      <ThreeBackground />

      <main className="relative flex flex-col items-center justify-center font-sans">
        {/* Navbar stays fixed at the top */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>
    </>
  );
}
