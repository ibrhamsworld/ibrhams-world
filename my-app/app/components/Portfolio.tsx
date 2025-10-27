"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    img: "/paint1.jpg",
    title: "Luxury Interior Painting",
    desc: "Premium indoor painting with a smooth, signature finish.",
  },
  {
    img: "/paint2.jpg",
    title: "Exterior Wall Repainting",
    desc: "Durable weatherproof coating for timeless outdoor beauty.",
  },
  {
    img: "/paint3.jpg",
    title: "Office Space Decoration",
    desc: "Modern, elegant designs that enhance workplace aesthetics.",
  },
  {
    img: "/paint4.jpg",
    title: "Custom Paint Production",
    desc: "Precision color mixing and eco-friendly paint manufacturing.",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-24 px-6 bg-gradient-to-b from-blue-50 via-white to-blue-50 dark:from-black dark:via-gray-900 dark:to-black"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-gray-900 dark:text-white"
        >
          Our <span className="text-blue-600">Portfolio</span>
        </motion.h3>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl bg-white/80 dark:bg-gray-900/70 border border-gray-100 dark:border-gray-800 backdrop-blur-md"
            >
              {/* Image */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
              </div>

              {/* Text Content */}
              <div className="absolute bottom-0 w-full text-left p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h4 className="text-lg font-semibold text-white mb-1">
                  {project.title}
                </h4>
                <p className="text-gray-200 text-sm">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Blur Lights */}
      <div className="absolute top-10 left-20 w-32 h-32 bg-blue-400/20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-10 right-20 w-40 h-40 bg-blue-300/10 blur-3xl rounded-full -z-10"></div>
    </section>
  );
}
