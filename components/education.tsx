"use client";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    institution: "Swami Keshvanand Institute of Technology, Jaipur",
    degree: "B.Tech in Computer Science and Engineering",
    duration: "2022 – 2026",
    color: "indigo",
  },
  {
    institution: "St. Xavier's School, Jaipur",
    degree: "Senior Secondary (Class XII)",
    duration: "2021 – 2022",
    color: "indigo",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>

      <div className="max-w-4xl w-full space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="backdrop-blur-[10px] bg-white/40 rounded-2xl p-6 md:p-8 shadow-2xl border border-white/30 hover:scale-[1.02] transition-all duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="w-5 h-5 text-indigo-400" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    {edu.degree}
                  </h3>
                </div>
                <p className="text-lg font-semibold text-indigo-600">
                  {edu.institution}
                </p>
              </div>

              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Calendar className="w-4 h-4" />
                <span>{edu.duration}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
