import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut', delay: index * 0.1 },
  }),
  expanded: { scale: 1.02, transition: { duration: 0.3 } },
};

const FAQ = () => {
  const [selectedFAQ, setSelectedFAQ] = useState(null);

  const faqData = [
    {
      question: 'What sizes do you carry?',
      answer:
        'We specialize in tall men’s clothing, offering sizes from Medium Tall to 3XL Tall. Inseam lengths range from 34" to 40", and our shirts are crafted for men 6’2" and taller, with extended torso and sleeve lengths for a perfect fit.',
    },
    {
      question: 'When will my order ship?',
      answer:
        'Orders placed before 2 PM EST Monday-Friday ship the same day. Weekend orders ship the next business day. Standard shipping takes 3-5 business days, and express shipping delivers in 1-2 business days, with tracking provided via email.',
    },
    {
      question: 'Do you ship internationally?',
      answer:
        'Yes, we ship to over 50 countries. International delivery takes 7-14 business days, depending on location. Customs fees may apply, and we provide full tracking for all orders.',
    },
    {
      question: 'How do I choose the right size?',
      answer:
        'Our detailed size guide, available on product pages, includes measurements for chest, waist, inseam, and height. For personalized assistance, email your measurements to help@heightham.com, and we’ll recommend the best fit.',
    },
    {
      question: 'What is your return policy?',
      answer:
        'We offer free returns and exchanges within 30 days for unworn, unwashed items with tags. US customers receive prepaid return labels; international customers cover return shipping. Visit our Returns page for details.',
    },
    {
      question: 'How long do refunds take?',
      answer:
        'Refunds are processed within 3-5 business days after we receive your return. Funds appear in your original payment method within 5-10 business days, depending on your bank, with email confirmation.',
    },
    {
      question: 'What makes Heightham unique?',
      answer:
        'Heightham is designed by tall men for tall men, with precise proportions for longer torsos, sleeves, and inseams. Our mission is to provide stylish, high-quality clothing that fits tall frames perfectly.',
    },
    {
      question: 'Do you offer alterations?',
      answer:
        'Our clothing is designed to fit tall men off the rack, but we partner with tailors specializing in tall menswear. Contact help@heightham.com for recommendations in your area.',
    },
    {
      question: 'Is there a tall men’s style guide?',
      answer:
        'Yes, our blog features a comprehensive style guide with tips on dressing for tall body types, proportions, and styling our pieces. Sign up for our newsletter for exclusive fashion advice.',
    },
    {
      question: 'Where can I find your Privacy Policy?',
      answer:
        'We prioritize your privacy, collecting only necessary data to enhance your shopping experience. We never sell your information. View our full Privacy Policy at the bottom of our website.',
    },
    {
      question: 'What are your Terms of Use?',
      answer:
        'Using our website means agreeing to our Terms of Use, including policies on returns, shipping, and website usage. Review the full Terms of Use at the bottom of our website for details.',
    },
  ];

  const toggleFAQ = (index) => {
    setSelectedFAQ(selectedFAQ === index ? null : index);
  };

  return (
    <div className="bg-white text-black py-16 px-4 md:px-8 font-['Inter'] font-light min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="text-4xl font-thin tracking-wider">Heightham FAQs</h1>
          <p className="mt-4 text-sm text-gray-600">
            Explore answers to common questions about shopping with Heightham. Need more help? Contact our team anytime.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              animate={selectedFAQ === index ? 'expanded' : 'visible'}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-gray-50 rounded-lg shadow-sm p-6 cursor-pointer hover:shadow-md transition-shadow duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium text-gray-800 tracking-wide uppercase mb-4">
                {faq.question}
              </h3>
              {selectedFAQ === index && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-sm text-gray-700"
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          className="mt-12 p-6 bg-gray-50 rounded-lg text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-lg font-medium mb-4">Still Need Assistance?</h2>
          <p className="text-sm text-gray-700 mb-4">
            Our team is ready to help with any questions. Reach out via email, live chat, or phone for personalized support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="mailto:help@heightham.com"
              className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors duration-300"
            >
              Email Us
            </a>
            <a
              href="tel:1-800-434-4426"
              className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors duration-300"
            >
              Call Us
            </a>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          className="mt-8 text-xs text-gray-600 text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          © 2025 Heightham. All rights reserved.
        </motion.p>
      </div>
    </div>
  );
};

export default FAQ;