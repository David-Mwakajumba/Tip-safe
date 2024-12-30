import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from './animations';

const testimonials = [
  {
    quote: "TipSafe has revolutionized how we manage tips. Our staff loves the transparency and fairness it brings.",
    author: "Sarah Johnson",
    role: "Restaurant Manager",
    company: "The Blue Door Bistro"
  },
  {
    quote: "The real-time tracking and automatic calculations save us hours every week. It's a game-changer.",
    author: "Michael Chen",
    role: "Owner",
    company: "Chen's Kitchen"
  },
  {
    quote: "Finally, a solution that makes tip distribution simple and fair. Our staff morale has never been better.",
    author: "Lisa Rodriguez",
    role: "Operations Director",
    company: "Sunset Grill"
  }
];

export function Testimonials() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Trusted by Leading Restaurants
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="text-blue-600 text-4xl mb-4">"</div>
              <p className="text-gray-700 mb-6 italic">
                {testimonial.quote}
              </p>
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonial.author}
                </div>
                <div className="text-gray-600 text-sm">
                  {testimonial.role}
                </div>
                <div className="text-blue-600 text-sm">
                  {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}