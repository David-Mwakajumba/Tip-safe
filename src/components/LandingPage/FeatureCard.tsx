import React from 'react';
import { motion } from 'framer-motion';
import { scaleIn } from './animations';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <motion.div 
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
      variants={scaleIn}
      whileHover={{ y: -5 }}
    >
      <motion.div 
        className="text-5xl mb-6 bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center text-blue-600"
        whileHover={{ rotate: 5 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}