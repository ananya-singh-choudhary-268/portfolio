"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 dark:bg-black/60 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <a href="#home" className="font-bold text-lg hover:text-indigo-600">
          Ananya.dev
        </a>

        <div className="flex items-center gap-6">
          {/* Navigation links */}
          <div className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-indigo-600 transition">
              About
            </a>
            <a href="#projects" className="hover:text-indigo-600 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-indigo-600 transition">
              Contact
            </a>
          </div>

          {/* Theme toggle */}
          <button
            aria-label="Toggle theme"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            title="Toggle dark / light"
          >
            {/* Wait until mounted so that server/client mismatch is prevented */}
            {mounted ? (
              theme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )
            ) : null}
          </button>
        </div>
      </div>
    </nav>
  );
}
