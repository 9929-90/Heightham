import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Sitemap = () => {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="font-sans min-h-screen bg-gray-50 overflow-hidden">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400&display=swap');
        .premium-font {
          font-family: 'Cinzel', serif;
          font-weight: 400;
          letter-spacing: 1px;
        }
      `}</style>

      {/* Header */}
      <motion.header
        className="bg-whiteshadow mt-10 md py-8 sticky top-0 z-10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', type: "spring", stiffness: 80, damping: 12 }}
      >
        <div className="max-w-7xl mt-10 mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl font-light text-gray-900 uppercase tracking-wider premium-font"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', type: "spring", stiffness: 80, damping: 12 }}
            whileHover={{ scale: 1.02, color: '#4B5563' }}
          >
            HeightHam Sitemap
          </motion.h1>
          <motion.p
            className="mt-3 text-gray-600 text-lg premium-font"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut', type: "spring", stiffness: 80, damping: 12 }}
            whileHover={{ opacity: 0.8 }}
          >
            Explore our premium fashion universe
          </motion.p>
        </div>
      </motion.header>

      {/* Main Content - Full Screen */}
      <motion.main
        className="max-w-7xl mx-auto px-6 py-16 flex flex-col h-[calc(100vh-12rem)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut', type: "spring", stiffness: 80, damping: 12 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 flex-grow">
          {/* Shop Section */}
          <motion.div
            className="space-y-6"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut', type: "spring", stiffness: 80, damping: 12 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setActiveSection('shop')}
          >
            <h2 className="text-2xl font-light text-gray-900 uppercase tracking-wider premium-font">Shop</h2>
            <ul className="space-y-4">
              <motion.li
                whileHover={{ x: 6, color: '#1F2937' }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <a href="/tall-men" className="text-gray-700 text-lg premium-font">Tall Men</a>
              </motion.li>
              <motion.li
                whileHover={{ x: 6, color: '#1F2937' }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <a href="/luxury" className="text-gray-700 text-lg premium-font">Luxury</a>
              </motion.li>
              <motion.li
                whileHover={{ x: 6, color: '#1F2937' }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <a href="/outfits" className="text-gray-700 text-lg premium-font">Outfits</a>
              </motion.li>
              <motion.li
                whileHover={{ x: 6, color: '#1F2937' }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <a href="/new-arrivals" className="text-gray-700 text-lg premium-font">New Arrivals</a>
              </motion.li>
              <motion.li
                whileHover={{ x: 6, color: '#1F2937' }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <a href="/sale" className="text-gray-700 text-lg premium-font">Sale</a>
              </motion.li>
            </ul>
          </motion.div>

          {/* About Us Section */}
          <motion.div
            className="space-y-6"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut', type: "spring", stiffness: 80, damping: 12 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setActiveSection('about')}
          >
            <h2 className="text-2xl font-light text-gray-900 uppercase tracking-wider premium-font">About Us</h2>
            <ul className="space-y-4">
              <motion.li
                whileHover={{ x: 6, color: '#1F2937' }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <a href="/our-story" className="text-gray-700 text-lg premium-font">Our Story</a>
              </motion.li>
              <motion.li
                whileHover={{ x: 6, color: '#1F2937' }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <a href="/designers" className="text-gray-700 text-lg premium-font">Meet Our Designers</a>
              </motion.li>
              <motion.li
                whileHover={{ x: 6, color: '#1F2937' }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <a href="/sustainability" className="text-gray-700 text-lg premium-font">Sustainability</a>
              </motion.li>
              <motion.li
                whileHover={{ x: 6, color: '#1F2937' }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <a href="/careers" className="text-gray-700 text-lg premium-font">Careers</a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Customer Service Section */}
          <motion.div
            className="space-y-6"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut', type: "spring", stiffness: 80, damping: 12 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setActiveSection('service')}
          >
            <h2 className="text-2xl font-light text-gray-900 uppercase tracking-wider premium-font">Customer Service</h2>
            <ul className="space-y-4">
              <motion.li
                whileHover={{ x: 6, color: '#1F2937' }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <a href="/contact" className="text-gray-700 text-lg premium-font">Contact Us</a>
              </motion.li>
              <motion.li
                whileHover={{ x: 6, color: '#1F2937' }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <a href="/shipping" className="text-gray-700 text-lg premium-font">Shipping Info</a>
              </motion.li>
              <motion.li
                whileHover={{ x: 6, color: '#1F2937' }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <a href="/returns" className="text-gray-700 text-lg premium-font">Returns & Exchanges</a>
              </motion.li>
              <motion.li
                whileHover={{ x: 6, color: '#1F2937' }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <a href="/faq" className="text-gray-700 text-lg premium-font">FAQ</a>
              </motion.li>
              <motion.li
                whileHover={{ x: 6, color: '#1F2937' }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <a href="/size-guide" className="text-gray-700 text-lg premium-font">Size Guide</a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Account & Policies Section */}
          <motion.div
            className="space-y-6"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut', type: "spring", stiffness: 80, damping: 12 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setActiveSection('account')}
          >
            <h2 className="text-2xl font-light text-gray-900 uppercase tracking-wider premium-font">Account & Policies</h2>
            <ul className="space-y-4">
              <motion.li
                whileHover={{ x: 6, color: '#1F2937' }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <a href="/my-account" className="text-gray-700 text-lg premium-font">My Account</a>
              </motion.li>
              <motion.li
                whileHover={{ x: 6, color: '#1F2937' }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <a href="/order-tracking" className="text-gray-700 text-lg premium-font">Order Tracking</a>
              </motion.li>
              <motion.li
                whileHover={{ x: 6, color: '#1F2937' }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <a href="/privacy-policy" className="text-gray-700 text-lg premium-font">Privacy Policy</a>
              </motion.li>
              <motion.li
                whileHover={{ x: 6, color: '#1F2937' }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <a href="/terms" className="text-gray-700 text-lg premium-font">Terms of Service</a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Interactive Highlight */}
        {activeSection && (
          <motion.div
            className="absolute inset-0 bg-gray-900 bg-opacity-10 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', type: "spring", stiffness: 80, damping: 12 }}
            onClick={() => setActiveSection(null)}
          >
            <motion.p
              className="text-white text-2xl premium-font uppercase tracking-wider"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', type: "spring", stiffness: 80, damping: 12 }}
            >
              Click to close {activeSection} view
            </motion.p>
          </motion.div>
        )}
      </motion.main>
    </div>
  );
};

export default Sitemap;