import React, { useEffect, useState } from 'react';
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

const Privacy = () => {
  const [policyData, setPolicyData] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [error, setError] = useState(null);

  // Mock API call to /privacy endpoint
  useEffect(() => {
    const fetchPrivacyPolicy = async () => {
      try {
        // Replace with actual API call to your /privacy endpoint
        const response = await fetch('/api/privacy');
        if (!response.ok) {
          throw new Error('Failed to fetch privacy policy');
        }
        const data = await response.json();
        setPolicyData(data);
      } catch (err) {
        setError('Unable to load privacy policy. Please try again later.');
        // Fallback static data
        setPolicyData({
          lastUpdated: 'July 12, 2025',
          sections: [
            {
              title: 'Information We Collect',
              content:
                'At Heightham, we collect personal information such as your name, email address, shipping address, and payment details when you create an account, place an order, or subscribe to our newsletter. We also collect usage data, including browsing behavior and preferences, to enhance your shopping experience. Cookies and similar technologies are used to track interactions for analytics and personalized recommendations.',
            },
            {
              title: 'How We Use Your Information',
              content:
                'Your data is used to process orders, provide customer support, and deliver tailored marketing content. We may use your information to improve our website, analyze trends, and comply with legal obligations. We do not sell your personal data to third parties.',
            },
            {
              title: 'Data Sharing and Third Parties',
              content:
                'We share your data with trusted third-party service providers (e.g., payment processors, shipping companies) to fulfill orders and improve services. These partners are bound by strict confidentiality agreements. We may also share anonymized data for analytics purposes.',
            },
            {
              title: 'Your Privacy Rights',
              content:
                'You have the right to access, correct, or delete your personal data. You can opt out of marketing communications at any time via the unsubscribe link in emails or by contacting us. For EU users, we comply with GDPR, ensuring rights to data portability and erasure.',
            },
            {
              title: 'Data Security',
              content:
                'We use industry-standard encryption and security measures to protect your data. However, no online platform is 100% secure, and we encourage you to safeguard your account credentials.',
            },
            {
              title: 'Cookies and Tracking',
              content:
                'Our website uses cookies to enhance user experience and track site performance. You can manage cookie preferences through your browser settings or our cookie consent popup, which appears upon your first visit.',
            },
            {
              title: 'Contact Us',
              content:
                'For questions about this policy or to exercise your privacy rights, contact us at privacy@heightham.com or through our customer service portal.',
            },
          ],
        });
      }
    };
    fetchPrivacyPolicy();
  }, []);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
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
          <h1 className="text-4xl font-thin tracking-wider">Heightham Privacy Policy</h1>
          <p className="mt-4 text-sm text-gray-600">
            Last Updated: {policyData?.lastUpdated || 'July 12, 2025'}
          </p>
        </motion.div>

        {/* Error Message */}
        {error && (
          <motion.div
            className="mb-8 p-4 bg-red-100 text-red-700 rounded"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {error}
          </motion.div>
        )}

        {/* Accordion Sections */}
        <div className="space-y-4">
          {policyData?.sections?.map((section, index) => (
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

        {/* Consent Management */}
        <motion.div
          className="mt-12 p-6 bg-gray-50 rounded-lg"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-lg font-medium mb-4">Manage Your Privacy Settings</h2>
          <p className="text-sm text-gray-700 mb-4">
            You can customize your data preferences, including opting out of cookies or marketing communications.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors duration-300">
              Cookie Preferences
            </button>
            <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors duration-300">
              Opt-Out of Marketing
            </button>
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

export default Privacy;