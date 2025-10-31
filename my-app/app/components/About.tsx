"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Target, Heart } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We never compromise on quality, using only premium materials and techniques."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your satisfaction is our priority. We listen and deliver beyond expectations."
    },
    {
      icon: Target,
      title: "Precision Work",
      description: "Attention to detail in every stroke, ensuring flawless finishes every time."
    },
    {
      icon: Heart,
      title: "Passion Driven",
      description: "We love what we do, and it shows in the beautiful spaces we create."
    }
  ];

  return (
    <section id="about" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Crafting Beautiful Spaces Since <span className="text-blue-600">2019</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                With over 5 years of expertise, Ibrhams World has been transforming spaces 
                across the region with exceptional painting, decorating, and custom paint 
                production services.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Our journey began with a simple mission: to bring color, life, and personality 
                to every space we touch. Today, we're proud to have served 500+ happy clients 
                and completed numerous projects that speak to our commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "500+", label: "Happy Clients" },
                { number: "5+", label: "Years Experience" },
                { number: "100%", label: "Satisfaction Rate" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}