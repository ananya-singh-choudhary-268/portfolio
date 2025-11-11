import Hero from "@/components/hero";
import Navbar from "../components/navbar";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-zinc-50 text-gray-900 dark:bg-black dark:text-gray-100 font-sans">
      {/* Navbar stays fixed at the top */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
