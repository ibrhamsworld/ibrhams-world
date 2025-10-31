"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "15551234567"; // Replace with your number
    const message = "Hello! I'm interested in your painting and decorating services. Can you provide more information?";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 text-white rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
        <span className="text-xs font-bold">!</span>
      </div>
    </motion.button>
  );
}