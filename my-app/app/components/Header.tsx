"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg shadow-sm dark:bg-black/80">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 tracking-tight">
          Ibrhams <span className="text-gray-900 dark:text-gray-100">World</span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300 text-sm font-medium">
          <Link href="#home" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/about"className="hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link
            href="#services"
            className="hover:text-blue-600 transition-colors"
          >
            Services
          </Link>
          <Link
            href="#portfolio"
            className="hover:text-blue-600 transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="#contact"
            className="hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col items-center py-4 space-y-4 text-gray-700 dark:text-gray-200 font-medium">
              <Link
                href="#home"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600"
              >
                Home
              </Link>
              <Link
                href="/about"

                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600"
              >
                About
              </Link>
              <Link
                href="#services"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600"
              >
                Services
              </Link>
              <Link
                href="#portfolio"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600"
              >
                Portfolio
              </Link>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600"
              >
                Contact
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
