import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from './animations';

interface HeroProps {
  onGetStarted: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-20">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.h1 
            className="text-5xl font-bold mb-6 leading-tight"
            variants={fadeInUp}
          >
            Smart Tip Management for Modern Restaurants
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 text-blue-100"
            variants={fadeInUp}
          >
            TipSafe helps restaurants distribute tips fairly, track earnings in real-time, 
            and maintain complete transparency for your entire staff.
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-4"
            variants={fadeInUp}
          >
            <motion.button 
              onClick={onGetStarted}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Trial
            </motion.button>
            <motion.button 
              onClick={onGetStarted}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
          <motion.div 
            className="mt-12 text-blue-100 text-sm"
            variants={fadeInUp}
          >
            No credit card required • Free 14-day trial • Cancel anytime
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}