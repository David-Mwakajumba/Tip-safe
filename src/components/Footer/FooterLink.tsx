import React from 'react';
import { motion } from 'framer-motion';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <motion.a
      href={href}
      className="block text-gray-300 hover:text-white transition-colors"
      whileHover={{ x: 5 }}
    >
      {children}
    </motion.a>
  );
}