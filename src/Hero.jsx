import React from 'react';
import { motion } from 'framer-motion';

const slides = [
  { id: 1, image: '/images/elevated.png', headline: 'Elevated Style', subtext: 'For those who rise above.' },
  { id: 2, image: '/images/tailored copy.jpg', headline: 'Tailored Proportions', subtext: 'Length and fit in perfect balance.' },
  { id: 3, image: '/images/architectural.jpg', headline: 'Architected Elegance', subtext: 'Structured silhouettes. Sculpted fits.' },
  { id: 4, image: '/images/luxury.webp', headline: 'Luxury in Detail', subtext: 'Craftsmanship with height in mind.' },
  { id: 5, image: '/images/refined.avif', headline: 'Refined Layering', subtext: 'Textures tailored for tall frames.' },
  { id: 6, image: '/images/urban.webp', headline: 'Urban Ascend', subtext: 'Elevated essentials for daily wear.' },
];

const Hero = () => {
  // Animation variants for slides
  const slideVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: index * 0.1 },
    }),
  };

  // Animation variants for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: index * 0.2 + 0.3 },
    }),
  };

  return (
    <div className="w-full pt-2 bg-white">
      <div
        className="flex overflow-x-auto px-4 gap-4 h-[90vh] scroll-smooth snap-x snap-mandatory md:gap-6 md:px-6"
        style={{
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE and Edge
        }}
      >
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className="relative flex-shrink-0 h-full w-[85vw] snap-start md:w-[calc(100vw/3.3)]"
            variants={slideVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of slide is in view
            whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: 'easeOut' } }}
          >
            <img
              src={slide.image}
              alt={slide.headline}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 text-white md:p-6">
              <motion.h2
                className="text-2xl font-light tracking-wide mb-2 leading-snug md:text-4xl"
                style={{ fontFamily: `'Playfair Display', serif` }}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
              >
                {slide.headline}
              </motion.h2>
              <motion.p
                className="text-xs mb-3 opacity-90 md:text-sm"
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
              >
                {slide.subtext}
              </motion.p>
              <motion.a
                href="#"
                className="text-xs underline underline-offset-4 hover:text-amber-300 transition duration-200 md:text-sm"
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
                whileHover={{ x: 5, transition: { duration: 0.3 } }}
              >
                Shop Now
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Hide scrollbar for Webkit browsers */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 768px) {
          .snap-start {
            scroll-snap-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;