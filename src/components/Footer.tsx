"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Vileyy",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/doanhieu21/",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:doanquochieu2104@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-6"
        >
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span className="sr-only">{link.name}</span>
                <link.icon size={24} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 dark:text-gray-400"
          >
            <p className="flex items-center justify-center space-x-1">
              <span>© 2024 Doãn Quốc Hiếu.</span>
              {/* <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="text-red-500"
              >
                <Heart size={16} fill="currentColor" />
              </motion.span>
              <span>using Next.js & Framer Motion</span> */}
            </p>
          </motion.div>

          {/* Back to top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            Back to top ↑
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
