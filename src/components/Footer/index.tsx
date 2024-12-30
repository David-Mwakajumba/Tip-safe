import React from 'react';
import { motion } from 'framer-motion';
import { FooterSection } from './FooterSection';
import { FooterLink } from './FooterLink';
import { SocialLinks } from './SocialLinks';
import { fadeInUp, staggerChildren } from '../LandingPage/animations';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <motion.div 
        className="container mx-auto px-4"
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div variants={fadeInUp} className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">TipSafe</h2>
            <p className="text-gray-300 mb-4">
              Making tip management fair, transparent, and effortless for restaurants worldwide.
            </p>
            <SocialLinks />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <FooterSection title="Product">
              <FooterLink href="#">Features</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">Testimonials</FooterLink>
              <FooterLink href="#">FAQ</FooterLink>
            </FooterSection>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <FooterSection title="Company">
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </FooterSection>
          </motion.div>
        </div>

        <motion.div 
          variants={fadeInUp}
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
        >
          <p>© {new Date().getFullYear()} TipSafe. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}