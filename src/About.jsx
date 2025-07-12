import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-4 mt-12 md:px-8 font-['Inter'] font-extralight text-black">
      <div className="max-w-7xl mx-auto">

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Circular Image */}
         <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  className="w-65 h-65 rounded-full overflow-hidden shadow-lg"
>
  <img
    src="/images/profile.png"
    alt="Rohit Suthar"
    className="w-full h-full object-cover"
  />
</motion.div>

          {/* About Text */}
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="text-4xl font-extralight tracking-wide mb-6"
            >
              About <span className="font-medium text-gray-800">Rohit Suthar</span> & Heightham
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              className="text-lg leading-relaxed mb-4"
            >
              Founded by <span className="font-medium text-gray-800">Rohit Suthar</span>, Heightham is more than an e-commerce platform—it's a vision of <span className="font-medium text-gray-800">timeless elegance</span> and unparalleled quality. With a passion for curating exquisite couture, accessories, and personalized experiences, Rohit set out to redefine luxury shopping for the modern era.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
              className="text-lg leading-relaxed mb-4"
            >
              At Heightham, we believe in <span className="font-medium text-gray-800">crafting moments</span> as much as we do products. Our collections are designed to inspire, offering exclusive pieces that blend <span className="font-medium text-gray-800">sophistication</span> with innovation. From complimentary gift packaging to tailored styling consultations, every detail is curated to elevate your shopping experience.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
              className="text-lg leading-relaxed mb-6"
            >
              Rohit’s vision extends beyond commerce to <span className="font-medium text-gray-800">community and creativity</span>. Heightham is a platform where artisans, designers, and customers come together to celebrate style and craftsmanship. Join us to explore exclusive sales, early access to new collections, and a commitment to <span className="font-medium text-gray-800">sustainable luxury</span>.
            </motion.p>

            <motion.a
              href="/shop"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="inline-block bg-black text-white py-3 px-6 rounded hover:bg-gray-800 text-lg"
            >
              Discover Our Collections
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;