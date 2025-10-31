"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Paintbrush } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg dark:bg-gray-900/95"
            : "bg-white/80 backdrop-blur-lg dark:bg-black/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
                  <Paintbrush className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Ibrhams World
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
                  Painting & Decorating
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="tel:+1234567890"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">Call Us</span>
              </Link>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Get Quote
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 },
                }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="lg:hidden fixed top-0 right-0 z-50 w-80 h-full bg-white dark:bg-gray-900 shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Paintbrush className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">
                    Ibrhams World
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="p-6">
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                          isActive(item.href)
                            ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                            : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                        }`}
                      >
                        <span className="font-medium">{item.label}</span>
                        {isActive(item.href) && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
                  <Link
                    href="tel:+1234567890"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center space-x-2 w-full p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="font-medium">Call Us Now</span>
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Get Free Quote
                  </Link>
                </div>

                <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                  <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="mt-1">Sat: 9:00 AM - 4:00 PM</p>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="h-16 lg:h-20" />
    </>
  );
}