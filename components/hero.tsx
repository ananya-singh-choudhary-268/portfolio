"use client";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-900"
    >
      {/* Animated heading */}
      <motion.h1
        className="text-5xl sm:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-100"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi I’m <span className="text-indigo-600">Ananya Singh Choudhary</span>
      </motion.h1>
      {/* Subtitle */}
      <motion.p
        className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        A Computer Science student passionate about building intelligent,
        user-focused applications using{" "}
        <span className="font-semibold">Next.js</span>,{" "}
        <span className="font-semibold">React</span>, and{" "}
        <span className="font-semibold">AI/ML</span>.
      </motion.p>
      {/* Call-to-action button */}
      <motion.a
        href="#projects"
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-transform transform hover:scale-105"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        View My Work!
      </motion.a>
    </section>
  );
}
