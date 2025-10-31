"use client";

import { Brush, Palette, PaintBucket, Settings, Sparkles, Shield, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: Brush,
    title: "Professional Painting",
    desc: "Expert interior and exterior painting services with premium materials and meticulous attention to detail for flawless results.",
    highlights: ["Interior/Exterior", "Color Consultation", "Surface Prep"],
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    delay: 0.1
  },
  {
    icon: Palette,
    title: "Creative Decoration",
    desc: "Transform spaces with innovative decorative solutions including wall textures, murals, and modern finishing techniques.",
    highlights: ["Wall Textures", "Custom Murals", "Modern Finishes"],
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    delay: 0.2
  },
  {
    icon: PaintBucket,
    title: "Paint Production",
    desc: "Manufacture high-quality, eco-friendly paints in custom colors with exceptional durability and vibrant finishes.",
    highlights: ["Eco-Friendly", "Custom Colors", "Premium Quality"],
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
    delay: 0.3
  },
  {
    icon: Settings,
    title: "Custom Finishing",
    desc: "Specialized finishing services including metallic effects, faux finishes, and protective coatings for unique surfaces.",
    highlights: ["Metallic Effects", "Faux Finishes", "Protective Coats"],
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
    delay: 0.4
  },
];

const stats = [
  { icon: Award, value: "500+", label: "Projects Completed" },
  { icon: Shield, value: "100%", label: "Satisfaction Guarantee" },
  { icon: Clock, value: "24/7", label: "Customer Support" },
  { icon: Sparkles, value: "5+", label: "Years Experience" },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Premium Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expert Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Delivering exceptional painting, decorating, and paint production services with 
            unmatched quality and attention to detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: feature.delay }}
              className="group relative"
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} dark:opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${feature.gradient} shadow-lg`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {feature.desc}
                  </p>

                  <div className="space-y-2">
                    {feature.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient}`} />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${feature.gradient} group-hover:w-full transition-all duration-500`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 p-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            Ready to transform your space?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Get Free Consultation
            </button>
            <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-2xl font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}