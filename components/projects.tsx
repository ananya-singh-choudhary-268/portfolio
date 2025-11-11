"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Smart Document Insight Generator",
    tech: "React.js · FastAPI · LangChain · OpenAI · Tesseract · FAISS",
    description:
      "Developed a GenAI RAG platform to extract insights from 5,000+ semi-structured documents using multilingual OCR and FAISS. Reduced document review time by 80%.",
    link: "https://github.com/ananya-singh-choudhary-268/smart-document-insight-generator",
  },
  {
    title: "Intuitive Brightness Control",
    tech: "Python · OpenCV · MediaPipe · Tkinter",
    description:
      "Built a gesture-based brightness control desktop app using OpenCV and MediaPipe, improving accessibility and reducing manual adjustments by ~70%.",
    link: "https://github.com/ananya-singh-choudhary-268/brightness-control",
  },
  {
    title: "Indian Sign Language Translator",
    tech: "Python · TensorFlow · OpenCV · FlutterFlow",
    description:
      "Trained a CNN-based ISL-to-text translator on 2,000+ gesture samples (80% accuracy) and deployed a mobile prototype to improve communication accessibility.",
    link: "https://github.com/ananya-singh-choudhary-268/isl-translator",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-white dark:bg-black text-center"
    >
      {/* Section Heading */}
      <motion.h2
        className="text-4xl font-bold mb-10 text-indigo-600"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-zinc-900 hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-sm text-indigo-500 mb-2">{project.tech}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              className="text-indigo-600 hover:underline font-medium"
            >
              View on GitHub →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
