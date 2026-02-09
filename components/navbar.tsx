// "use client";

// import { useEffect, useState } from "react";
// import { Sun, Moon, Menu, X } from "lucide-react";

// export default function Navbar() {
//   // Track current theme mode
//   const [isDark, setIsDark] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // On mount: read existing theme (default to light)
//   useEffect(() => {
//     const html = document.documentElement;
//     const currentTheme = html.dataset.theme || "light";
//     setIsDark(currentTheme === "dark");
//   }, []);

//   // Toggle handler
//   const toggleTheme = () => {
//     const html = document.documentElement;
//     const newTheme = isDark ? "light" : "dark";
//     html.dataset.theme = newTheme;
//     setIsDark(!isDark);
//   };

//   // Close mobile menu when link is clicked
//   const handleLinkClick = () => {
//     setMobileMenuOpen(false);
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 transition-colors duration-300">
//       {/* Glass navbar container */}
//       <div className="backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-lg">
//         <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
//           {/* Brand / Logo */}
//           <a
//             href="#home"
//             className="font-bold text-xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent hover:from-indigo-300 hover:to-purple-300 transition-all duration-300"
//           >
//             Ananya.dev
//           </a>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8">
//             {/* Navigation Links */}
//             <a
//               href="#about"
//               className="text-white/80 hover:text-indigo-400 transition-colors duration-200 font-medium"
//             >
//               About
//             </a>
//             <a
//               href="#projects"
//               className="text-white/80 hover:text-indigo-400 transition-colors duration-200 font-medium"
//             >
//               Projects
//             </a>
//             <a
//               href="#contact"
//               className="text-white/80 hover:text-indigo-400 transition-colors duration-200 font-medium"
//             >
//               Contact
//             </a>

//             {/* Theme Toggle Button */}
//             <button
//               type="button"
//               aria-label="Toggle theme"
//               onClick={toggleTheme}
//               className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20"
//             >
//               {isDark ? (
//                 <Sun size={18} strokeWidth={2} className="text-yellow-300" />
//               ) : (
//                 <Moon size={18} strokeWidth={2} className="text-indigo-400" />
//               )}
//             </button>
//           </div>

//           {/* Mobile Menu Button & Theme Toggle */}
//           <div className="md:hidden flex items-center gap-4">
//             {/* Theme Toggle for Mobile */}
//             <button
//               type="button"
//               aria-label="Toggle theme"
//               onClick={toggleTheme}
//               className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20"
//             >
//               {isDark ? (
//                 <Sun size={18} strokeWidth={2} className="text-yellow-300" />
//               ) : (
//                 <Moon size={18} strokeWidth={2} className="text-indigo-400" />
//               )}
//             </button>

//             {/* Mobile Menu Toggle */}
//             <button
//               type="button"
//               aria-label="Toggle mobile menu"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20"
//             >
//               {mobileMenuOpen ? (
//                 <X size={20} strokeWidth={2} className="text-white" />
//               ) : (
//                 <Menu size={20} strokeWidth={2} className="text-white" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         {mobileMenuOpen && (
//           <div className="md:hidden backdrop-blur-xl bg-white/5 border-t border-white/10">
//             <div className="flex flex-col px-6 py-4 space-y-4">
//               <a
//                 href="#about"
//                 onClick={handleLinkClick}
//                 className="text-white/80 hover:text-indigo-400 transition-colors duration-200 font-medium py-2"
//               >
//                 About
//               </a>
//               <a
//                 href="#projects"
//                 onClick={handleLinkClick}
//                 className="text-white/80 hover:text-indigo-400 transition-colors duration-200 font-medium py-2"
//               >
//                 Projects
//               </a>
//               <a
//                 href="#contact"
//                 onClick={handleLinkClick}
//                 className="text-white/80 hover:text-indigo-400 transition-colors duration-200 font-medium py-2"
//               >
//                 Contact
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when link is clicked
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-colors duration-300">
      {/* Glass navbar container */}
      <div className="backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Brand / Logo */}
          <a
            href="#home"
            className="font-bold text-xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent hover:from-indigo-300 hover:to-purple-300 transition-all duration-300"
          >
            Ananya.dev
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Navigation Links */}
            <a
              href="#about"
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
            >
              About
            </a>
            <a
              href="#education"
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
            >
              Education
            </a>
            <a
              href="#experience"
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
            >
              Contact
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-1.5 text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Mobile Menu Toggle */}
            <button
              type="button"
              aria-label="Toggle mobile menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20"
            >
              {mobileMenuOpen ? (
                <X size={20} strokeWidth={2} className="text-white" />
              ) : (
                <Menu size={20} strokeWidth={2} className="text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden backdrop-blur-xl bg-white/5 border-t border-white/10">
            <div className="flex flex-col px-6 py-4 space-y-4">
              <a
                href="#about"
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium py-2"
              >
                About
              </a>
              <a
                href="#education"
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium py-2"
              >
                Education
              </a>
              <a
                href="#projects"
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium py-2"
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium py-2"
              >
                Contact
              </a>
              <a
                href="/resume.pdf"
                download
                onClick={handleLinkClick}
                className="inline-flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium py-2"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
