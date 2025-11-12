"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Imagitime",
    role: "Software Developer Intern",
    duration: "Jul 2025 – Sep 2025",
    type: "Internship",
    description: [
      "Developed backend modules with Python and REST APIs, improving efficiency and maintainability",
      "Collaborated with developers to integrate AI-driven automation features and optimize workflows",
    ],
    color: "indigo",
  },
  {
    company: "Wells Fargo",
    role: "Software Engineering Simulation",
    duration: "Jun 2025",
    type: "Virtual Program (Forage)",
    description: [
      "Simulated full SDLC for portfolio management system design",
      "Designed a multi-layer REST API and debugging workflow for a financial system",
    ],
    color: "purple",
  },
  {
    company: "Standyou Data Info Labs Pvt Ltd",
    role: "SEO Intern",
    duration: "Jul 2024 – Aug 2024",
    type: "Internship",
    description: [
      "Conducted keyword analysis and optimized web content",
      "Achieved a 45% increase in organic traffic through strategic SEO implementation",
    ],
    color: "pink",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="max-w-5xl w-full space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="backdrop-blur-xl bg-white/10 dark:bg-white/5 rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20 hover:scale-[1.02] transition-all duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className={`w-5 h-5 text-${exp.color}-400`} />
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {exp.role}
                  </h3>
                </div>
                <p
                  className={`text-lg font-semibold text-${exp.color}-300 mb-1`}
                >
                  {exp.company}
                </p>
                <p className="text-sm text-white/60 italic">{exp.type}</p>
              </div>

              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Calendar className="w-4 h-4" />
                <span>{exp.duration}</span>
              </div>
            </div>

            <ul className="space-y-2 text-white/80">
              {exp.description.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className={`text-${exp.color}-400 mt-1`}>•</span>
                  <span className="text-sm md:text-base leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
