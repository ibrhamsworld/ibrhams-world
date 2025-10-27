"use client";

import { Brush, Palette, PaintBucket, Settings } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Brush,
    title: "Professional Painting",
    desc: "Experience premium painting services for residential, commercial, and industrial spaces — done with precision and style.",
  },
  {
    icon: Palette,
    title: "Creative Decoration",
    desc: "Transform your environment with modern decorative designs that reflect beauty, class, and creativity.",
  },
  {
    icon: PaintBucket,
    title: "Paint Production",
    desc: "We produce durable, eco-friendly, and vibrant paints crafted to bring long-lasting color to every surface.",
  },
  {
    icon: Settings,
    title: "Custom Finishing",
    desc: "From smooth textures to glossy finishes, we tailor every detail to match your unique vision.",
  },
];

export default function Features() {
  return (
    <section
      id="services"
      className="relative py-24 px-6 bg-gradient-to-b from-white to-blue-50 dark:from-black dark:to-gray-900"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-14 text-gray-900 dark:text-white"
        >
          Our Core Services
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="p-8 bg-white/80 dark:bg-gray-900/60 rounded-3xl shadow-lg backdrop-blur-md border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
            >
              <div className="flex justify-center mb-6">
                <feature.icon className="w-12 h-12 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Blur Circles */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
