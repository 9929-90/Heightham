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

const Terms = () => {
  const [activeSection, setActiveSection] = useState(null);

  const termsSections = [
    {
      title: 'Acceptance of Terms',
      content:
        'By accessing or using the Heightham website, you agree to be bound by these Terms of Use, our Privacy Policy, and all applicable laws. If you do not agree, please refrain from using our website or services. These terms apply to all users, including visitors, registered users, and customers.',
    },
    {
      title: 'Use of the Website',
      content:
        'You may use the Heightham website for lawful purposes only. You agree not to engage in activities that may harm, disrupt, or overload our systems, including unauthorized access, data scraping, or distributing malicious software. We reserve the right to terminate access for any user violating these terms.',
    },
    {
      title: 'Purchases and Payments',
      content:
        'All purchases made through Heightham are subject to product availability and acceptance of your order. Prices are listed in USD (or your local currency where applicable) and exclude taxes and shipping unless stated. We accept major credit cards and other payment methods as indicated at checkout. You agree to provide accurate payment and billing information.',
    },
    {
      title: 'Returns and Refunds',
      content:
        'Heightham offers free online returns within 30 days of purchase, provided items are unused, in original condition, and include all tags. Refunds will be issued to the original payment method. Please review our Returns Policy for detailed instructions and exceptions, such as final sale items.',
    },
    {
      title: 'Intellectual Property',
      content:
        'All content on the Heightham website, including text, images, logos, and designs, is owned by or licensed to Heightham and protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or modify any content without prior written consent.',
    },
    {
      title: 'Limitation of Liability',
      content:
        'Heightham is not liable for any direct, indirect, incidental, or consequential damages arising from your use of the website or services, including but not limited to errors in content, website downtime, or product defects. Our liability is limited to the amount paid for the product or service in question.',
    },
    {
      title: 'Third-Party Links',
      content:
        'Our website may contain links to third-party websites or services not operated by Heightham. We are not responsible for the content, privacy policies, or practices of these third parties. Accessing these links is at your own risk.',
    },
    {
      title: 'Changes to Terms',
      content:
        'We may update these Terms of Use at any time to reflect changes in our practices or legal requirements. The updated terms will be posted on this page with a revised "Last Updated" date. Continued use of the website constitutes acceptance of the revised terms.',
    },
    {
      title: 'Contact Us',
      content:
        'For questions about these Terms of Use, please contact us at terms@heightham.com or through our customer service portal.',
    },
  ];

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className="bg-white mt-10 text-black py-16 px-4 md:px-8 font-['Inter'] font-light min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="text-4xl font-thin tracking-wider">Heightham Terms of Use</h1>
          <p className="mt-4 text-sm text-gray-600">
            Last Updated: July 12, 2025
          </p>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-4">
          {termsSections.map((section, index) => (
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
                onClick={() => toggleSection(index)}
              >
                {section.title}
                {activeSection === index ? (
                  <ChevronUpIcon className="w-6 h-6" />
                ) : (
                  <ChevronDownIcon className="w-6 h-6" />
                )}
              </button>
              <motion.div
                variants={accordionVariants}
                initial="hidden"
                animate={activeSection === index ? 'visible' : 'hidden'}
                className="text-sm text-gray-700 overflow-hidden"
              >
                <p className="pb-4">{section.content}</p>
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
          <h2 className="text-lg font-medium mb-4">Questions About Our Terms?</h2>
          <p className="text-sm text-gray-700 mb-4">
            Reach out to our team for clarification or additional information about these Terms of Use.
          </p>
          <a
            href="mailto:terms@heightham.com"
            className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors duration-300"
          >
            Contact Us
          </a>
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

export default Terms;