"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20"
    >
      <div className="glass rounded-3xl p-12 max-w-4xl shadow-2xl">
        <motion.h2
          className="text-5xl font-bold mb-6 text-indigo-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="max-w-2xl text-lg leading-relaxed text-white/80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          I&apos;m a Computer Science student at SKIT Jaipur, passionate about
          building intelligent, user-focused applications. I enjoy blending
          clean design with solid engineering — from sleek frontends to powerful
          backend logic.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Python",
            "Java",
            "Machine Learning",
            "Tailwind CSS",
          ].map((skill) => (
            <span
              key={skill}
              className="px-5 py-2 bg-indigo-500/20 backdrop-blur-sm text-indigo-300 rounded-full text-sm font-medium border border-indigo-400/30 hover:bg-indigo-500/30 hover:scale-105 transition-all"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
