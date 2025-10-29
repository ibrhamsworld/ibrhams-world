"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Eye, ExternalLink, ChevronLeft, ChevronRight, Paintbrush, Building, Home, Factory } from "lucide-react";

const projects = [
  {
    img: "/paint1.jpg",
    title: "Luxury Interior Painting",
    desc: "Premium indoor painting with a smooth, signature finish.",
    category: "residential",
    duration: "2 weeks",
    client: "Private Residence",
    year: "2024",
    features: ["Color Consultation", "Surface Preparation", "Premium Finishes"]
  },
  {
    img: "/paint2.jpg",
    title: "Exterior Wall Repainting",
    desc: "Durable weatherproof coating for timeless outdoor beauty.",
    category: "commercial",
    duration: "3 weeks",
    client: "Office Complex",
    year: "2024",
    features: ["Weatherproof Coating", "Surface Repair", "Long-lasting Finish"]
  },
  {
    img: "/paint3.jpg",
    title: "Office Space Decoration",
    desc: "Modern, elegant designs that enhance workplace aesthetics.",
    category: "commercial",
    duration: "4 weeks",
    client: "Tech Startup",
    year: "2023",
    features: ["Modern Design", "Brand Alignment", "Functional Aesthetics"]
  },
  {
    img: "/paint4.jpg",
    title: "Custom Paint Production",
    desc: "Precision color mixing and eco-friendly paint manufacturing.",
    category: "industrial",
    duration: "Ongoing",
    client: "Multiple Clients",
    year: "2024",
    features: ["Eco-friendly", "Custom Colors", "Quality Assurance"]
  },
  {
    img: "/paint5.jpg",
    title: "Modern Apartment Complex",
    desc: "Complete painting and decoration for luxury apartments.",
    category: "residential",
    duration: "6 weeks",
    client: "Real Estate Developer",
    year: "2023",
    features: ["Multi-unit Project", "Modern Finishes", "Timely Delivery"]
  },
  {
    img: "/paint6.jpg",
    title: "Retail Store Design",
    desc: "Brand-aligned color schemes for retail environments.",
    category: "commercial",
    duration: "2 weeks",
    client: "Fashion Retailer",
    year: "2024",
    features: ["Brand Colors", "Customer Experience", "Visual Merchandising"]
  },
  {
    img: "/paint7.jpg",
    title: "Industrial Facility Coating",
    desc: "Protective coatings for industrial environments.",
    category: "industrial",
    duration: "5 weeks",
    client: "Manufacturing Plant",
    year: "2023",
    features: ["Protective Coating", "Durability", "Safety Compliance"]
  },
  {
    img: "/paint8.jpg",
    title: "Heritage Building Restoration",
    desc: "Preservation painting for historical architecture.",
    category: "commercial",
    duration: "8 weeks",
    client: "Historical Society",
    year: "2023",
    features: ["Historical Accuracy", "Preservation", "Traditional Techniques"]
  }
];

const categories = [
  { id: "all", label: "All Projects", icon: Paintbrush },
  { id: "residential", label: "Residential", icon: Home },
  { id: "commercial", label: "Commercial", icon: Building },
  { id: "industrial", label: "Industrial", icon: Factory }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const nextProject = () => {
    if (selectedProject === null) return;
    setSelectedProject((selectedProject + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    if (selectedProject === null) return;
    setSelectedProject((selectedProject - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Paintbrush className="w-4 h-4" />
            Our Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of successful painting, decorating, and paint production projects 
            that showcase our commitment to quality and excellence.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600"
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(index)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-white bg-blue-600 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                      <span className="text-xs text-white/80">{project.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-white/80 text-sm line-clamp-2">{project.desc}</p>
                  </div>
                </div>

                {/* View Button */}
                <div className="absolute top-4 right-4">
                  <button className="bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-1">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-3">
                  {project.desc}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>{project.duration}</span>
                  <span>{project.client}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can transform your space with our professional painting and decorating services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors">
                Get Free Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all">
                View All Projects
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative bg-white dark:bg-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedProject !== null && (
              <div className="p-6">
                <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={filteredProjects[selectedProject].img}
                    alt={filteredProjects[selectedProject].title}
                    fill
                    className="object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full transition-colors"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {filteredProjects[selectedProject].title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {filteredProjects[selectedProject].desc}
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                        <span className="font-medium text-gray-600 dark:text-gray-400">Client</span>
                        <span className="text-gray-900 dark:text-white">{filteredProjects[selectedProject].client}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                        <span className="font-medium text-gray-600 dark:text-gray-400">Duration</span>
                        <span className="text-gray-900 dark:text-white">{filteredProjects[selectedProject].duration}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                        <span className="font-medium text-gray-600 dark:text-gray-400">Year</span>
                        <span className="text-gray-900 dark:text-white">{filteredProjects[selectedProject].year}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Project Features
                    </h4>
                    <div className="space-y-3">
                      {filteredProjects[selectedProject].features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}