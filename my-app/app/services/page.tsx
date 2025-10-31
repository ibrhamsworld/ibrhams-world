"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Paintbrush, 
  Palette, 
  PaintBucket, 
  Settings, 
  Ruler, 
  Shield, 
  Clock, 
  Award,
  CheckCircle,
  Star,
  Users,
  Home,
  Building,
  Factory,
  ArrowRight,
  Phone,
  MessageCircle
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Paintbrush,
    title: "Professional Painting",
    description: "Expert interior and exterior painting services with premium materials and meticulous attention to detail.",
    features: [
      "Interior & Exterior Painting",
      "Surface Preparation & Repair",
      "Color Consultation",
      "Premium Quality Paints",
      "Clean & Protected Workspaces"
    ],
    projects: ["Homes", "Apartments", "Offices", "Commercial Spaces"],
    duration: "1-4 weeks",
    warranty: "5-year guarantee",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Palette,
    title: "Creative Decoration",
    description: "Transform your space with innovative decorative solutions and modern finishing techniques.",
    features: [
      "Wall Texturing & Effects",
      "Custom Murals & Artwork",
      "Modern Wallpaper Installation",
      "Faux Finishes",
      "Accent Walls & Features"
    ],
    projects: ["Feature Walls", "Commercial Spaces", "Restaurants", "Retail Stores"],
    duration: "2-6 weeks",
    warranty: "3-year guarantee",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: PaintBucket,
    title: "Paint Production",
    description: "Manufacture high-quality, eco-friendly paints in custom colors with exceptional durability.",
    features: [
      "Custom Color Matching",
      "Eco-Friendly Formulations",
      "Premium Quality Materials",
      "Durable Finishes",
      "Vibrant Color Options"
    ],
    projects: ["Custom Colors", "Brand Colors", "Special Finishes", "Bulk Orders"],
    duration: "1-2 weeks production",
    warranty: "Quality certified",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Settings,
    title: "Custom Finishing",
    description: "Specialized finishing services for unique surfaces and special requirements.",
    features: [
      "Metallic & Pearl Effects",
      "Protective Coatings",
      "Specialty Finishes",
      "Weatherproofing",
      "Custom Texture Creation"
    ],
    projects: ["Luxury Homes", "Hotels", "Restaurants", "Historical Buildings"],
    duration: "3-8 weeks",
    warranty: "4-year guarantee",
    gradient: "from-orange-500 to-red-500"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Consultation & Planning",
    description: "We discuss your vision, assess the space, and create a detailed project plan.",
    icon: Users
  },
  {
    step: "02",
    title: "Color Selection",
    description: "Choose from our extensive color palette or get custom color matching.",
    icon: Palette
  },
  {
    step: "03",
    title: "Surface Preparation",
    description: "Thorough cleaning, repairing, and priming of all surfaces for perfect results.",
    icon: Ruler
  },
  {
    step: "04",
    title: "Execution & Finishing",
    description: "Professional application with attention to detail and quality control.",
    icon: Paintbrush
  },
  {
    step: "05",
    title: "Final Inspection",
    description: "Comprehensive quality check and client walkthrough for satisfaction.",
    icon: Shield
  }
];

const faqs = [
  {
    question: "How long does a typical painting project take?",
    answer: "Most residential projects take 1-3 weeks, while commercial projects can take 2-6 weeks depending on size and complexity."
  },
  {
    question: "Do you provide color consultation services?",
    answer: "Yes! We offer professional color consultation to help you choose the perfect colors for your space."
  },
  {
    question: "What type of paint do you use?",
    answer: "We use premium quality, eco-friendly paints from leading brands, and also offer our own custom-produced paints."
  },
  {
    question: "Do you handle surface preparation?",
    answer: "Absolutely! Proper surface preparation is key to long-lasting results. We handle cleaning, repairing, and priming."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, we are fully licensed, bonded, and insured for your protection and peace of mind."
  }
];

const projectTypes = [
  {
    icon: Home,
    type: "Residential",
    description: "Homes, apartments, and living spaces",
    count: "300+ Projects"
  },
  {
    icon: Building,
    type: "Commercial",
    description: "Offices, retail spaces, and businesses",
    count: "150+ Projects"
  },
  {
    icon: Factory,
    type: "Industrial",
    description: "Factories, warehouses, and large facilities",
    count: "50+ Projects"
  }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-blue-900/10 dark:to-gray-900">
      {/* Header Spacer */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/50 to-transparent dark:from-blue-900/20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Paintbrush className="w-4 h-4" />
              Our Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Premium <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Painting Services</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transform your space with our comprehensive painting, decorating, and paint production services. 
              Quality craftsmanship meets innovative design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-2xl font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: "500+", label: "Projects Completed" },
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
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive painting and decorating solutions tailored to your unique needs and vision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Features</h4>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div>
                        <h5 className="text-sm font-medium text-gray-500 dark:text-gray-400">Duration</h5>
                        <p className="text-gray-900 dark:text-white font-semibold">{service.duration}</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-gray-500 dark:text-gray-400">Warranty</h5>
                        <p className="text-gray-900 dark:text-white font-semibold">{service.warranty}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <h5 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Project Types</h5>
                      <div className="flex flex-wrap gap-2">
                        {service.projects.map((project, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Get Quote for {service.title}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Project <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Types</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We serve a wide range of clients across different sectors with our expert painting services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectTypes.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.type}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.type}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="text-blue-600 dark:text-blue-400 font-semibold">
                    {project.count}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A systematic approach to ensure quality, efficiency, and your complete satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Get answers to common questions about our painting services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get started with a free consultation and quote. Let's bring your vision to life with our expert painting services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Get Free Quote
              </Link>
              <Link
                href="tel:+1234567890"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </Link>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-current" />
                <span>5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>5+ Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}