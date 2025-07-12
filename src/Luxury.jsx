import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const LuxurySection = () => {
  const [expandedRows, setExpandedRows] = useState(0);

  const productData = [
    // First row (always visible)
    [
      {
        id: 1,
        image: "/images/zippedshirt.webp",
        title: "HEIGHTHAM AND LEWIS HAMILTON Zipped Shirt",
        price: "₹240,000.00",
        isNew: true,
      },
      {
        id: 2,
        image: "/images/trackpant.jpeg",
        title: "HEIGHTHAM AND LEWIS HAMILTON Track Pants",
        price: "₹240,000.00",
        isNew: true,
      },
      {
        id: 3,
        image: "/images/mule.jpg",
        title: "HEIGHTHAM AND LEWIS HAMILTON Aqua Mule",
        price: "₹120,000.00",
        isNew: true,
      },
      {
        id: 4,
        image: "/images/bucket hat.webp",
        title: "HEIGHTHAM AND LEWIS HAMILTON Crochet Bucket Hat",
        price: "₹85,000.00",
        isNew: true,
      },
    ],
    // Second row (expandable)
    [
      {
        id: 5,
        image: "/images/jacket.jpg",
        title: "HEIGHTHAM AND LEWIS HAMILTON Leather Jacket",
        price: "₹450,000.00",
        isNew: true,
      },
      {
        id: 6,
        image: "/images/Sneaker.png",
        title: "HEIGHTHAM AND LEWIS HAMILTON Designer Sneakers",
        price: "₹180,000.00",
        isNew: true,
      },
      {
        id: 7,
        image: "/images/scarf.webp",
        title: "HEIGHTHAM AND LEWIS HAMILTON Silk Scarf",
        price: "₹95,000.00",
        isNew: true,
      },
      {
        id: 8,
        image: "/images/bag.jpg",
        title: "HEIGHTHAM AND LEWIS HAMILTON Crossbody Bag",
        price: "₹320,000.00",
        isNew: true,
      },
    ],
    // Third row (expandable)
    [
      {
        id: 9,
        image: "/images/tailored suit.avif",
        title: "HEIGHTHAM AND LEWIS HAMILTON Tailored Suit",
        price: "₹680,000.00",
        isNew: true,
      },
      {
        id: 10,
        image: "/images/watch.webp",
        title: "HEIGHTHAM AND LEWIS HAMILTON Luxury Watch",
        price: "₹890,000.00",
        isNew: true,
      },
      {
        id: 11,
        image: "/images/sunglasses.webp",
        title: "HEIGHTHAM AND LEWIS HAMILTON Sunglasses",
        price: "₹65,000.00",
        isNew: true,
      },
      {
        id: 12,
        image: "/images/perfume.jpg",
        title: "HEIGHTHAM AND LEWIS HAMILTON Perfume Set",
        price: "₹140,000.00",
        isNew: true,
      },
    ],
  ];

  const handleExpand = () => {
    if (expandedRows < 2) {
      setExpandedRows(expandedRows + 1);
    }
  };

  // Animation variants for cards and rows
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: index * 0.1 },
    }),
  };

  // Animation variants for header and button
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Animation variants for expandable rows
  const rowVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 },
    },
    exit: { opacity: 0, y: 50, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const ProductCard = ({ product, index }) => (
    <motion.div
      className="group cursor-pointer"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
    >
      <div className="relative mb-4 overflow-hidden bg-gray-50 rounded-lg">
        <motion.img
          src={product.image}
          alt={product.title}
          className="w-full h-[400px] object-cover"
          whileHover={{ scale: 1.05, transition: { duration: 0.7 } }}
        />
        {product.isNew && (
          <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-light tracking-wider text-gray-600">
            New
          </div>
        )}
      </div>
      <div className="space-y-2">
        <h3
          className="text-sm font-light tracking-wide text-gray-900 group-hover:text-amber-600 transition-colors duration-300"
          style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
        >
          {product.title}
        </h3>
        <p
          className="text-sm font-light text-gray-700"
          style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
        >
          {product.price}
        </p>
      </div>
    </motion.div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-white">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2
          className="text-4xl font-extralight tracking-[0.2em] text-gray-900 mb-4"
          style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
        >
          LUXURY
        </h2>
        <div className="w-12 h-px bg-gray-300 mx-auto"></div>
      </motion.div>

      {/* Products Grid */}
      <div className="space-y-8">
        {/* First Row - Always Visible */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productData[0].map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Second Row - Expandable */}
        <AnimatePresence>
          {expandedRows >= 1 && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={rowVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {productData[1].map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Third Row - Expandable */}
        <AnimatePresence>
          {expandedRows >= 2 && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={rowVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {productData[2].map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand Button */}
        {expandedRows < 2 && (
          <motion.div
            className="flex justify-center pt-12"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <button
              onClick={handleExpand}
              className="group flex flex-col items-center gap-2"
            >
              <motion.div
                className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center group-hover:border-amber-600 group-hover:bg-amber-600 transition-all duration-300"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <ChevronDown className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
              </motion.div>
              <span
                className="text-xs font-light tracking-wider text-gray-600 group-hover:text-amber-600 transition-colors duration-300"
                style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
              >
                VIEW MORE
              </span>
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LuxurySection;