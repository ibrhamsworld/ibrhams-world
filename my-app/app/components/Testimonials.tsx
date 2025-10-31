"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "Ibrhams World transformed our entire house! The attention to detail and professional finish exceeded our expectations. Highly recommended!",
    rating: 5,
    project: "Complete Home Painting"
  },
  {
    name: "Mike Rodriguez",
    role: "Business Owner",
    content: "Their team painted our office space with minimal disruption. The quality is outstanding and the team was professional throughout.",
    rating: 5,
    project: "Office Renovation"
  },
  {
    name: "Emily Chen",
    role: "Interior Designer",
    content: "I've worked with many painting companies, but Ibrhams World stands out. Their custom color matching is exceptional.",
    rating: 5,
    project: "Custom Color Project"
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="w-8 h-8 text-blue-600 opacity-20 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {testimonial.role}
                </div>
                <div className="text-xs text-blue-600 dark:text-blue-400">
                  {testimonial.project}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}