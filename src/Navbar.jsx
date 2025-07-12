import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ShoppingCartIcon,
  UserIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  // Navigation links with expanded categories and brands
  const navLinks = [
    { name: 'Home', href: '/', dropdown: null },
    {
      name: 'Tall Men',
      href: '#',
      dropdown: {
        categories: [
          { title: 'Shirts', href: '#' },
          { title: 'Pants', href: '#' },
          { title: 'Jackets', href: '#' },
          { title: 'Accessories', href: '#' },
          { title: 'Big & Tall', href: '#' },
          { title: 'Outerwear', href: '#' },
        ],
        brands: [
          { name: 'Tall Classic', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=400&fit=crop', label: 'TALL CLASSIC' },
          { name: 'Tall Fit', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&h=400&fit=crop', label: 'TALL FIT' },
          { name: 'Tall Elite', image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=300&h=400&fit=crop', label: 'TALL ELITE' },
          { name: 'Tall Lux', image: 'https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?w=300&h=400&fit=crop', label: 'TALL LUX' },
          { name: 'Tall Pro', image: 'https://images.unsplash.com/photo-1564859228273-274232fdb516?w=300&h=400&fit=crop', label: 'TALL PRO' },
          { name: 'Tall Prime', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&h=400&fit=crop', label: 'TALL PRIME' },
          { name: 'Tall Vogue', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=400&fit=crop', label: 'TALL VOGUE' },
          { name: 'Tall Style', image: 'https://images.unsplash.com/photo-1506629905607-bb5bd1c8c2e7?w=300&h=400&fit=crop', label: 'TALL STYLE' },
        ],
      },
    },
    {
      name: 'Luxury',
      href: '#',
      dropdown: {
        categories: [
          { title: 'Premium', href: '#' },
          { title: 'Exclusive', href: '#' },
          { title: 'Accessories', href: '#' },
          { title: 'Footwear', href: '#' },
          { title: 'Bespoke', href: '#' },
          { title: 'Jewelry', href: '#' },
        ],
        brands: [
          { name: 'Ralph Lauren Purple Label', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=400&fit=crop', label: 'RALPH LAUREN / PURPLE LABEL' },
          { name: 'Double RL', image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=300&h=400&fit=crop', label: 'DOUBLE RL' },
          { name: 'RLX', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=400&fit=crop', label: 'RLX / RALPH LAUREN' },
          { name: 'Luxury Couture', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=400&fit=crop', label: 'LUXURY COUTURE' },
          { name: 'High Society', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=400&fit=crop', label: 'HIGH SOCIETY' },
          { name: 'Elite Craft', image: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=300&h=400&fit=crop', label: 'ELITE CRAFT' },
          { name: 'Royal Thread', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=400&fit=crop', label: 'ROYAL THREAD' },
          { name: 'Opulent Wear', image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=300&h=400&fit=crop', label: 'OPULENT WEAR' },
        ],
      },
    },
    {
      name: 'Outfits',
      href: '#',
      dropdown: {
        categories: [
          { title: 'Occasions', href: '#' },
          { title: 'Seasonal', href: '#' },
          { title: 'Casual', href: '#' },
          { title: 'Formal', href: '#' },
          { title: 'Festive', href: '#' },
          { title: 'Business', href: '#' },
        ],
        brands: [
          { name: 'Office Pro', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&h=400&fit=crop', label: 'OFFICE PRO' },
          { name: 'Weekend Style', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=400&fit=crop', label: 'WEEKEND STYLE' },
          { name: 'Date Night', image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=300&h=400&fit=crop', label: 'DATE NIGHT' },
          { name: 'Formal Wear', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=400&fit=crop', label: 'FORMAL WEAR' },
          { name: 'Seasonal Chic', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop', label: 'SEASONAL CHIC' },
          { name: 'Festive Glow', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=300&h=400&fit=crop', label: 'FESTIVE GLOW' },
          { name: 'Casual Ease', image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=300&h=400&fit=crop', label: 'CASUAL EASE' },
          { name: 'Business Edge', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&h=400&fit=crop', label: 'BUSINESS EDGE' },
        ],
      },
    },
    { name: 'About', href: '/about', dropdown: null },
  ];

  const iconStyles =
    'h-5 w-5 text-gray-700 hover:text-gray-900 transition-colors duration-200';

  const searchVariants = {
    hidden: { opacity: 0, y: -20, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: 'auto',
      transition: { duration: 0.3, ease: 'easeOut', stiffness: 100, damping: 15 },
    },
    exit: {
      opacity: 0,
      y: -20,
      height: 0,
      transition: { duration: 0.2, ease: 'easeIn', stiffness: 100, damping: 15 },
    },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: 'auto',
      transition: { duration: 0.3, ease: 'easeOut', stiffness: 100, damping: 15 },
    },
    exit: {
      opacity: 0,
      y: -10,
      height: 0,
      transition: { duration: 0.2, ease: 'easeIn', stiffness: 100, damping: 15 },
    },
  };

  const handleDropdownToggle = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400&display=swap');
        .premium-font {
          font-family: 'Cinzel', serif;
          font-weight: 400;
          letter-spacing: 1px;
        }
      `}</style>

      {/* Navbar */}
      <motion.nav 
        className={`bg-white shadow-sm fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
        }`}
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? 'h-14' : 'h-16'
          }`}>
            <motion.div 
              className="flex-shrink-0 text-3xl font-extralight text-gray-900 tracking-widest premium-font"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              HEIGHTHAM
            </motion.div>

            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group"
                >
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      if (link.dropdown) {
                        e.preventDefault();
                        handleDropdownToggle(link.name);
                      }
                    }}
                    className="relative text-gray-700 hover:text-gray-900 text-sm font-light uppercase tracking-widest transition-all duration-300 py-2 px-2 block cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {link.name}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-800 to-gray-600 origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent opacity-0 rounded-md"
                      whileHover={{ opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transform -skew-x-12 translate-x-[-100%]"
                      whileHover={{ 
                        opacity: [0, 0.4, 0],
                        translateX: ['-100%', '200%']
                      }}
                      transition={{ 
                        duration: 0.6,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.a>
                </div>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-6">
              <motion.button 
                onClick={() => navigate('/cart')}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ShoppingCartIcon className={iconStyles} />
              </motion.button>
              <motion.button 
                onClick={() => navigate('/account')}
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <UserIcon className={iconStyles} />
              </motion.button>
              <motion.button 
                onClick={() => navigate('/envelope')}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <EnvelopeIcon className={iconStyles} />
              </motion.button>
              <motion.button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <MagnifyingGlassIcon className={iconStyles} />
              </motion.button>
            </div>
            </div>
        </div>
      </motion.nav>

      {/* Enhanced Dropdown */}
      <AnimatePresence>
        {openDropdown && (
          <motion.div
            ref={dropdownRef}
            className={`fixed left-0 right-0 z-40 bg-gray-100 border-b border-gray-200 shadow-md ${
              isScrolled ? 'top-14' : 'top-16'
            }`}
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="max-w-7xl mx-auto px-6 py-6">
              {navLinks.find(link => link.name === openDropdown)?.dropdown && (
                <motion.div 
                  className="flex"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1, type: "spring", stiffness: 100, damping: 15 }}
                >
                  {/* Left Navigation Menu */}
                  <div className="w-1/4 pr-8">
                    <h3 className="text-xl font-light text-gray-900 mb-6 uppercase tracking-wider premium-font">{openDropdown}</h3>
                    <ul className="space-y-4">
                      {navLinks.find(link => link.name === openDropdown).dropdown.categories.map((category) => (
                        <li key={category.title}>
                          <motion.a
                            href={category.href}
                            className="text-gray-700 hover:text-gray-900 text-base font-light transition-colors duration-200 block premium-font"
                            whileHover={{ x: 6 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          >
                            {category.title}
                          </motion.a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Brand Slider */}
                  <div className="w-3/4">
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-light text-gray-900 uppercase tracking-wider premium-font">Featured Brands</h3>
                        <div className="flex space-x-2">
                          <motion.button
                            onClick={scrollLeft}
                            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-all duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
                          </motion.button>
                          <motion.button
                            onClick={scrollRight}
                            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-all duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <ChevronRightIcon className="h-6 w-6 text-gray-700" />
                          </motion.button>
                        </div>
                      </div>
                      <div
                        ref={sliderRef}
                        className="flex space-x-6 overflow-x-auto scrollbar-hide"
                        style={{ scrollBehavior: 'smooth' }}
                      >
                        {navLinks.find(link => link.name === openDropdown).dropdown.brands.map((brand) => (
                          <motion.div
                            key={brand.name}
                            className="relative flex-shrink-0 w-72 overflow-hidden rounded-lg shadow-md bg-white"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          >
                            <img
                              src={brand.image}
                              alt={brand.name}
                              className="w-full h-80 object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                              <span className="text-white text-xl font-light uppercase tracking-widest premium-font">
                                {brand.label}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Input */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className={`fixed left-0 right-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur-md ${
              isScrolled ? 'top-14' : 'top-16'
            }`}
            variants={searchVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="max-w-6xl mx-auto px-4 py-3">
              <div className="flex items-center justify-center">
                <motion.div 
                  className="relative w-full max-w-xl"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1, type: "spring", stiffness: 100, damping: 15 }}
                >
                  <input
                    type="text"
                    placeholder="Search for products, brands, or categories..."
                    className="w-full py-2 text-base font-light text-gray-900 bg-transparent border-b border-gray-300 focus:outline-none focus:border-gray-500 transition-all duration-200 placeholder-gray-500"
                  />
                  <motion.button 
                    className="absolute right-0 top-1/2 transform -translate-y-1/2"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ArrowRightIcon className="h-5 w-5 text-gray-500 hover:text-gray-700 transition-colors duration-200" />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;