"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 text-center"
    >
      {/* Glass container wrapper */}
      <motion.div
        className="backdrop-blur-xl bg-white/10 dark:bg-white/5 rounded-3xl p-8 md:p-12 max-w-3xl w-full shadow-2xl border border-white/20"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Heading with gradient */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        {/* Decorative line */}
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mb-8 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />

        {/* Short Message */}
        <motion.p
          className="text-base md:text-lg mb-10 max-w-xl mx-auto text-white/80 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Thanks for stopping by! Whether you&apos;d like to collaborate,
          discuss tech, or just say hi — my inbox is always open. 💬
        </motion.p>

        {/* Contact Links */}
        <motion.div
          className="flex gap-4 md:gap-6 justify-center flex-wrap mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Email Button */}
          <motion.a
            href="mailto:ananysingh268@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-indigo-500/20 backdrop-blur-sm rounded-xl border border-indigo-400/30 hover:bg-indigo-500/40 hover:border-indigo-400/60 transition-all duration-300 text-white shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-medium">Email</span>
          </motion.a>

          {/* LinkedIn Button */}
          <motion.a
            href="https://www.linkedin.com/in/ananya-singh-choudhary/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-blue-500/20 backdrop-blur-sm rounded-xl border border-blue-400/30 hover:bg-blue-500/40 hover:border-blue-400/60 transition-all duration-300 text-white shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-medium">LinkedIn</span>
          </motion.a>

          {/* GitHub Button */}
          <motion.a
            href="https://github.com/ananya-singh-choudhary-268"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-purple-500/20 backdrop-blur-sm rounded-xl border border-purple-400/30 hover:bg-purple-500/40 hover:border-purple-400/60 transition-all duration-300 text-white shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-medium">GitHub</span>
          </motion.a>
        </motion.div>

        {/* Quick Email CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <a
            href="mailto:ananysingh268@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Send className="w-5 h-5" />
            Send me a message
          </a>
        </motion.div>

        {/* Footer Text */}
        <motion.p
          className="text-sm mt-12 text-white/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} Ananya Singh Choudhary. All rights
          reserved.
        </motion.p>
      </motion.div>
    </section>
  );
}
