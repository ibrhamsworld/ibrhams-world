"use client"
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";
import WhatsAppFloat from "./components/ui/WhatsAppFloat";
import Testimonials from "./components/Testimonials"
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Ibrhams World</h2>
          <p className="text-gray-600 dark:text-gray-400">Loading your dream space...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-blue-900/10 dark:to-gray-900">
      <Header />
      
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="services">
          <Features />
        </section>
        
        <section id="portfolio">
          <Portfolio />
        </section>
        
        <section id="testimonials">
          <Testimonials />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />

      <ScrollToTop />
      <WhatsAppFloat />
      
      {isMobile && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 md:hidden">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
              <span>Scroll to explore</span>
              <div className="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        @media (max-width: 768px) {
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
        }
        
        body {
          overflow-x: hidden;
        }
        
        * {
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
}