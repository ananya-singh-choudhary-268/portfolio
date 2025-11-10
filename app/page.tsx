import Navbar from "../components/navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-zinc-50 text-gray-900 dark:bg-black dark:text-gray-100 font-sans">
      {/* Navbar stays fixed at the top */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="flex min-h-screen w-full flex-col items-center justify-center px-6 text-center"
      >
        <h1 className="text-5xl font-bold mb-4">
          Hi, I’m{" "}
          <span className="text-indigo-600">Ananya Singh Choudhary</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
          A passionate Computer Science student exploring full-stack development
          and AI/ML.
        </p>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen w-full flex flex-col items-center justify-center px-6 text-center bg-gray-100 dark:bg-gray-900"
      >
        <h2 className="text-4xl font-semibold mb-6 text-indigo-600">
          About Me
        </h2>
        <p className="max-w-2xl text-gray-700 dark:text-gray-300 text-lg">
          I enjoy solving real-world problems through elegant, scalable, and
          impactful solutions. Skilled in React, Next.js, Python, and Java —
          always learning and building.
        </p>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-20 text-center"
      >
        <h2 className="text-4xl font-semibold mb-10 text-indigo-600">
          Projects
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Coming soon — this is where my best work will live 🚀
        </p>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-20 text-center bg-gray-100 dark:bg-gray-900"
      >
        <h2 className="text-4xl font-semibold mb-6 text-indigo-600">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Feel free to reach out via email or connect on LinkedIn!
        </p>
        <div className="flex gap-6">
          <a
            href="mailto:your.email@example.com"
            className="text-indigo-600 hover:underline"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/yourlinkedin"
            target="_blank"
            className="text-indigo-600 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="text-indigo-600 hover:underline"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
