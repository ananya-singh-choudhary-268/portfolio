"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20"
    >
      <div className="backdrop-blur-[10px] bg-white/40 dark:bg-white/20 rounded-3xl p-12 max-w-4xl w-full shadow-2xl border border-white/30">
        <motion.h2
          className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto text-lg leading-relaxed text-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          I&apos;m a final-year Computer Science student at SKIT Jaipur who loves
          solving real-world problems with code. Whether it&apos;s training models
          for forensics or crafting intuitive React interfaces, I focus on building
          efficient, impactful solutions that actually work.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            "Python",
            "React.js",
            "FastAPI",
            "LangChain",
            "OpenAI",
            "PostgreSQL",
            "TensorFlow",
            "Docker",
            "TypeScript",
            "Java",
          ].map((skill) => (
            <span
              key={skill}
              className="px-5 py-2 bg-indigo-500/20 backdrop-blur-sm text-indigo-700 rounded-full text-sm font-medium border border-indigo-400/30 hover:bg-indigo-500/30 hover:scale-105 transition-all"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
