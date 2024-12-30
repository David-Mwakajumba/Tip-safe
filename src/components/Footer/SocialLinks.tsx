import React from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: '𝕏', href: '#', label: 'Twitter' },
  { icon: '📘', href: '#', label: 'Facebook' },
  { icon: '📷', href: '#', label: 'Instagram' },
  { icon: '💼', href: '#', label: 'LinkedIn' }
];

export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ icon, href, label }) => (
        <motion.a
          key={label}
          href={href}
          aria-label={label}
          className="text-gray-300 hover:text-white transition-colors"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {icon}
        </motion.a>
      ))}
    </div>
  );
}