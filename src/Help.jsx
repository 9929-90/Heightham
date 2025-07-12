import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const accordionVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto', transition: { duration: 0.6, ease: 'easeOut' } },
};

const Help = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqs = [
    {
      question: 'How do I place an order on Heightham?',
      answer:
        'To place an order, browse our collections, select your desired items, and add them to your cart. Proceed to checkout, where you’ll enter your shipping and payment information. Review your order and submit it. You’ll receive an order confirmation email with details.',
    },
    {
      question: 'What are your shipping options and costs?',
      answer:
        'Heightham offers standard and express shipping options. Standard shipping (5-7 business days) is free on orders over $100; otherwise, it’s $8. Express shipping (2-3 business days) costs $15. International shipping rates vary by destination. Check our Shipping page for details.',
    },
    {
      question: 'How do I return or exchange an item?',
      answer:
        'We offer free returns within 30 days of purchase for items in original condition with tags attached. Log into your account, visit the Returns section, and follow the instructions to generate a return label. Exchanges are subject to availability. See our Returns Policy for more details.',
    },
    {
      question: 'How do I find the right size for tall men’s clothing?',
      answer:
        'Our sizing guide, available on each product page, provides detailed measurements for tall men’s clothing. We recommend measuring your chest, waist, and inseam and comparing them to our size charts. If you need assistance, contact our support team at help@heightham.com.',
    },
    {
      question: 'How can I manage my account or reset my password?',
      answer:
        'Log into your account via the “My Account” page to update your personal details, view order history, or manage preferences. To reset your password, click “Forgot Password” at login and follow the emailed instructions. Contact us if you encounter issues.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept major credit cards (Visa, Mastercard, Amex), PayPal, and Apple Pay. All transactions are secured with industry-standard encryption. Contact us if you experience payment issues.',
    },
    {
      question: 'How do I contact customer support?',
      answer:
        'Reach out to our team at help@heightham.com or through our live chat feature, available Monday–Friday, 9 AM–5 PM EST. You can also call our toll-free number at 1-800-HEIGHAM (1-800-434-4426) during business hours.',
    },
  ];

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="bg-white text-black mt-10 py-16 px-4 md:px-8 font-['Inter'] font-light min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="text-4xl font-thin tracking-wider">Heightham Help Center</h1>
          <p className="mt-4 text-sm text-gray-600">
            Find answers to common questions or contact us for personalized assistance.
          </p>
        </motion.div>

        {/* FAQ Sections */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="border-b border-gray-200"
            >
              <button
                className="w-full flex justify-between items-center py-4 text-lg font-medium text-left hover:text-amber-600 transition-colors duration-300"
                onClick={() => toggleQuestion(index)}
              >
                {faq.question}
                {activeQuestion === index ? (
                  <ChevronUpIcon className="w-6 h-6" />
                ) : (
                  <ChevronDownIcon className="w-6 h-6" />
                )}
              </button>
              <motion.div
                variants={accordionVariants}
                initial="hidden"
                animate={activeQuestion === index ? 'visible' : 'hidden'}
                className="text-sm text-gray-700 overflow-hidden"
              >
                <p className="pb-4">{faq.answer}</p>
              </motion.div>
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
          <h2 className="text-lg font-medium mb-4">Still Need Help?</h2>
          <p className="text-sm text-gray-700 mb-4">
            Our team is here to assist with any questions or concerns. Reach out via email, live chat, or phone.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="mailto:help@heightham.com"
              className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors duration-300"
            >
              Email Us
            </a>
            <a
              href="#live-chat"
              className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors duration-300"
            >
              Live Chat
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

export default Help;