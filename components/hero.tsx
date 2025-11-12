// "use client";
// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative"
//     >
//       {/* Glass container for content */}
//       <div className="backdrop-blur-xl bg-white/10 dark:bg-white/5 rounded-3xl p-12 max-w-4xl shadow-2xl border border-white/20">
//         <motion.h1
//           className="text-5xl sm:text-7xl font-bold mb-4 text-white"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           Hi, I&apos;m{" "}
//           <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
//             Ananya Singh Choudhary
//           </span>
//         </motion.h1>

//         <motion.p
//           className="text-lg sm:text-xl mb-8 max-w-2xl text-white/80"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//         >
//           A Computer Science student passionate about building intelligent,
//           user-focused applications using{""}
//           <span className="font-semibold text-indigo-300">Next.js</span>,{" "}
//           <span className="font-semibold text-indigo-300">React</span>, and{" "}
//           <span className="font-semibold text-indigo-300">AI/ML</span>.
//         </motion.p>

//         <motion.a
//           href="#projects"
//           className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-xl text-lg font-medium hover:from-indigo-600 hover:to-purple-600 hover:scale-105 transition-all shadow-lg"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//         >
//           View My Work!
//         </motion.a>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative"
    >
      {/* Glass container for content */}
      <div className="backdrop-blur-xl bg-white/10 dark:bg-white/5 rounded-3xl p-12 max-w-5xl shadow-2xl border border-white/20">
        <motion.h1
          className="text-5xl sm:text-7xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Ananya Singh Choudhary
          </span>
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl mb-4 text-indigo-300 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Generative AI/ML Engineer & Full-Stack Developer
        </motion.p>

        <motion.p
          className="text-base sm:text-lg mb-8 max-w-3xl mx-auto text-white/80 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Final-year B.Tech Computer Science student specializing in building
          scalable, AI-driven applications.{" "}
          <span className="text-indigo-300 font-semibold">
            Smart India Hackathon 2024 Finalist
          </span>{" "}
          with hands-on experience in{" "}
          <span className="font-semibold text-white">Python</span>,{" "}
          <span className="font-semibold text-white">LangChain</span>,{" "}
          <span className="font-semibold text-white">React.js</span>, and{" "}
          <span className="font-semibold text-white">FastAPI</span>.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-xl text-lg font-medium hover:from-indigo-600 hover:to-purple-600 hover:scale-105 transition-all shadow-lg"
          >
            View My Work ✨
          </a>
          <a
            href="#contact"
            className="inline-block backdrop-blur-sm bg-white/10 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-white/20 hover:scale-105 transition-all shadow-lg border border-white/20"
          >
            Get in Touch 💬
          </a>
        </motion.div>
      </div>
    </section>
  );
}
