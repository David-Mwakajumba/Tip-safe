import React from 'react';
import { motion } from 'framer-motion';
import { FeatureCard } from './FeatureCard';
import { staggerChildren } from './animations';

const features = [
  {
    title: 'Fair Distribution',
    description: 'Automatically calculate and distribute tips among waiters, kitchen staff, and bar staff.',
    icon: '📊'
  },
  {
    title: 'Real-time Tracking',
    description: 'Monitor tips and earnings in real-time during each shift.',
    icon: '⚡'
  },
  {
    title: 'Customizable Shares',
    description: 'Adjust tip distribution percentages for different staff roles.',
    icon: '⚖️'
  },
  {
    title: 'Shift Management',
    description: 'Track staff working hours and manage shift assignments easily.',
    icon: '📅'
  }
];

export function Features() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2 
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Why Choose TipSafe?
      </motion.h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {features.map(feature => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </motion.div>
    </div>
  );
}