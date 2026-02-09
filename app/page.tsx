import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import PressureFieldBackground from "@/components/pressure-field-background";

export default function Home() {
  return (
    <>
      {/* Pressure Field Background - subtle, almost-static */}
      <PressureFieldBackground />

      <main className="relative flex flex-col items-center justify-center font-sans">
        {/* Navbar stays fixed at the top */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Education Section */}
        <Education />

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
