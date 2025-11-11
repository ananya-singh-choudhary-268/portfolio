import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import ThreeBackground from "@/components/three-background";

export default function Home() {
  return (
    <>
      {/* 3D Background - renders behind everything */}
      <ThreeBackground />

      <main className="relative flex flex-col items-center justify-center font-sans">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
