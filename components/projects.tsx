"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Based UFDR Forensic Analysis Platform",
    tech: "Python · FastAPI · PostgreSQL · pgvector · Qdrant · OpenAI Agents SDK · Docker",
    duration: "Oct 2025 – Dec 2025",
    description:
      "Built a complete UFDR ingestion pipeline that processes uploads in under 3 minutes. Enabled natural language search across chats, calls, media, and location history using vector based semantic search.",
    link: "https://github.com/ananya-singh-choudhary-268",
  },
  {
    title: "Smart Document Insight Generator",
    tech: "React.js · FastAPI · Python · LangChain · OpenAI · Tesseract · FAISS",
    duration: "Jul 2025 – Sep 2025",
    description:
      "Created a GenAI RAG platform to extract insights from over 5,000 documents using multilingual OCR. The system automates summarization and Q&A, slashing manual review time by 80%.",
    link: "https://github.com/ananya-singh-choudhary-268/smart-document-insight-generator",
  },
  {
    title: "Intuitive Brightness Control",
    tech: "Python · OpenCV · MediaPipe · Tkinter · NumPy",
    duration: "Jan 2025 – Mar 2025",
    description:
      "Developed a desktop app for gesture-based brightness control in real time. This tool improves accessibility and reduces the need for manual adjustments by nearly 70%.",
    link: "https://github.com/ananya-singh-choudhary-268/brightness-control",
  },
  {
    title: "Indian Sign Language Translator",
    tech: "Python · TensorFlow · OpenCV · FlutterFlow",
    duration: "Nov 2024 – Dec 2024",
    description:
      "Trained a CNN model on over 2,000 gesture samples to translate ISL to text with 80%+ accuracy. Deployed a mobile prototype to help bridge communication gaps for the hearing impaired.",
    link: "https://github.com/ananya-singh-choudhary-268/isl-translator",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20"
    >
      <motion.h2
        className="text-5xl font-bold mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="backdrop-blur-[10px] bg-white/40 rounded-2xl p-6 flex flex-col justify-between h-full hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-white/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {project.title}
              </h3>
              <p className="text-sm text-indigo-600 mb-3">{project.tech}</p>
              <p className="text-black mb-4 text-sm">
                {project.description}
              </p>
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-700 font-medium mt-auto inline-flex items-center gap-2 group"
            >
              View on GitHub
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
