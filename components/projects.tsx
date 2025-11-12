// "use client";
// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "Smart Document Insight Generator",
//     tech: "React.js · FastAPI · LangChain · OpenAI · Tesseract · FAISS",
//     description:
//       "Developed a GenAI RAG platform to extract insights from 5,000+ semi-structured documents using multilingual OCR and FAISS. Reduced document review time by 80%.",
//     link: "https://github.com/ananya-singh-choudhary-268/smart-document-insight-generator",
//   },
//   {
//     title: "Intuitive Brightness Control",
//     tech: "Python · OpenCV · MediaPipe · Tkinter",
//     description:
//       "Built a gesture-based brightness control desktop app using OpenCV and MediaPipe, improving accessibility and reducing manual adjustments by ~70%.",
//     link: "https://github.com/ananya-singh-choudhary-268/brightness-control",
//   },
//   {
//     title: "Indian Sign Language Translator",
//     tech: "Python · TensorFlow · OpenCV · FlutterFlow",
//     description:
//       "Trained a CNN-based ISL-to-text translator on 2,000+ gesture samples (80% accuracy) and deployed a mobile prototype to improve communication accessibility.",
//     link: "https://github.com/ananya-singh-choudhary-268/isl-translator",
//   },
// ];

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="min-h-screen flex flex-col justify-center items-center px-6 py-20"
//     >
//       <motion.h2
//         className="text-5xl font-bold mb-12 text-indigo-400"
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Projects
//       </motion.h2>

//       <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             className="backdrop-blur-xl bg-white/10 dark:bg-white/5 rounded-2xl p-6 flex flex-col justify-between h-full hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-white/20"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//             whileHover={{ y: -10 }}
//           >
//             <div>
//               <h3 className="text-xl font-semibold mb-3 text-white">
//                 {project.title}
//               </h3>
//               <p className="text-sm text-indigo-300 mb-3">{project.tech}</p>
//               <p className="text-white/70 mb-4 text-sm">
//                 {project.description}
//               </p>
//             </div>

//             <a
//               href={project.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-indigo-400 hover:text-indigo-300 font-medium mt-auto inline-flex items-center gap-2 group"
//             >
//               View on GitHub
//               <span className="group-hover:translate-x-1 transition-transform">
//                 →
//               </span>
//             </a>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Smart Document Insight Generator",
    tech: "React.js · FastAPI · Python · LangChain · OpenAI · Tesseract · FAISS",
    duration: "Ongoing",
    description:
      "Developed a GenAI RAG platform to extract insights from 5,000+ semi-structured documents using multilingual OCR and FAISS. Built a scalable React frontend and FastAPI backend, automating Q&A and document summarization to reduce review time by 80%.",
    link: "https://github.com/ananya-singh-choudhary-268/smart-document-insight-generator",
  },
  {
    title: "Intuitive Brightness Control",
    tech: "Python · OpenCV · MediaPipe · Tkinter · NumPy",
    duration: "Jan 2025 – Mar 2025",
    description:
      "Built a desktop app using OpenCV/MediaPipe for gesture-based brightness control in real-time. Improved accessibility and reduced manual brightness adjustments by approximately 70%.",
    link: "https://github.com/ananya-singh-choudhary-268/brightness-control",
  },
  {
    title: "Indian Sign Language Translator",
    tech: "Python · TensorFlow · OpenCV · FlutterFlow",
    duration: "Nov 2024 – Dec 2024",
    description:
      "Trained a CNN-based ISL-to-text translator on a dataset of 2,000+ gesture samples, achieving over 80% accuracy. Deployed a mobile prototype via FlutterFlow to enhance communication accessibility for the hearing-impaired.",
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
        className="text-5xl font-bold mb-12 text-indigo-400"
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
            className="backdrop-blur-xl bg-white/10 dark:bg-white/5 rounded-2xl p-6 flex flex-col justify-between h-full hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {project.title}
              </h3>
              <p className="text-sm text-indigo-300 mb-3">{project.tech}</p>
              <p className="text-white/70 mb-4 text-sm">
                {project.description}
              </p>
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 font-medium mt-auto inline-flex items-center gap-2 group"
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
