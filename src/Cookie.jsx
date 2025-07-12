import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Cookie = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Cookie name for storage
  const COOKIE_CONSENT_KEY = 'heightham_cookie_consent';

  // Check if user has already given consent
  useEffect(() => {
    const hasConsent = getCookie(COOKIE_CONSENT_KEY);
    
    if (!hasConsent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setIsVisible(true), 1500);
    }
  }, []);

  // Cookie utility functions
  const setCookie = (name, value, days = 365) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict`;
  };

  const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  // Handle accept cookies
  const handleAcceptCookies = () => {
    setCookie(COOKIE_CONSENT_KEY, 'accepted', 365);
    setIsVisible(false);
  };

  // Animation variants
  const bannerVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.6
      }
    },
    exit: { 
      opacity: 0, 
      y: 50,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 left-6 right-6 z-50 pointer-events-none"
          variants={bannerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="max-w-md mx-auto pointer-events-auto">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/50 p-6">
              <div className="text-center">
                <p className="text-gray-600 text-sm font-light leading-relaxed mb-4">
                  We use cookies to enhance your browsing experience
                </p>
                
                <motion.button
                  onClick={handleAcceptCookies}
                  className="w-full bg-gradient-to-r from-gray-800 to-gray-600 text-white py-3 px-6 rounded-xl font-extralight text-sm tracking-[0.5px] transition-all duration-300 hover:from-gray-700 hover:to-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500/20 focus:ring-offset-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ACCEPT COOKIES
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cookie;