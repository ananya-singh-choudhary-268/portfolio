"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-50 dark:bg-gray-900"
    >
      {/* Animated Heading */}
      <motion.h2
        className="text-4xl font-bold mb-6 text-indigo-600"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      {/* Short Introduction */}
      <motion.p
        className="max-w-2xl text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        I’m a Computer Science student at SKIT Jaipur, passionate about building
        intelligent, user-focused applications. I enjoy blending clean design
        with solid engineering — from sleek frontends to powerful backend logic.
      </motion.p>

      {/* Skills / Tech Stack Badges */}
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
            className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
