"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-blue-600">Ibrhams World</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Ibrhams World is a top-tier painting, decorating, and paint
            production company. We specialize in delivering high-quality finishes
            for homes, offices, and industrial buildings. Our goal is to bring
            your vision to life with creativity, precision, and long-lasting
            results.
          </p>
          <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
            Founded by professionals passionate about color and design, we’ve
            helped clients transform ordinary spaces into artistic expressions.
            Whether it’s luxury painting, custom wall designs, or eco-friendly
            paint production — we’ve got you covered.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex justify-center"
        >
          <Image
            src="/about.jpg"
            alt="About Ibrhams World"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-white dark:bg-gray-900 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 text-center md:text-left">
          <div className="p-8 border rounded-2xl bg-gray-50 dark:bg-gray-800 shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To provide exceptional painting and decorating services that
              enhance the beauty, durability, and comfort of every space we
              touch. We aim to set a standard for innovation and excellence in
              the painting industry.
            </p>
          </div>
          <div className="p-8 border rounded-2xl bg-gray-50 dark:bg-gray-800 shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Vision</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To become a global leader in painting, decoration, and paint
              production — known for creativity, customer satisfaction, and
              sustainable solutions that inspire every space.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
