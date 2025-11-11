"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gray-50 dark:bg-gray-900 text-center"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold mb-6 text-indigo-600"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h2>

      {/* Short Message */}
      <motion.p
        className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Thanks for stopping by! Whether you’d like to collaborate, discuss tech,
        or just say hi — my inbox is always open. 💬
      </motion.p>

      {/* Contact Links */}
      <motion.div
        className="flex gap-8 justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {/* Email */}
        <a
          href="mailto:ananysingh268@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-indigo-600 transition"
        >
          <Mail />
          <span>Email</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/ananya-singh-choudhary/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-indigo-600 transition"
        >
          <Linkedin />
          <span>LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/ananya-singh-choudhary-268"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-indigo-600 transition"
        >
          <Github />
          <span>GitHub</span>
        </a>
      </motion.div>

      {/* Footer Text */}
      <motion.p
        className="text-sm text-gray-500 mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        © {new Date().getFullYear()} Ananya Singh Choudhary. All rights
        reserved.
      </motion.p>
    </section>
  );
}
