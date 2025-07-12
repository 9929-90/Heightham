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

const Careers = () => {
  const [activeJob, setActiveJob] = useState(null);

  const jobs = [
    {
      title: 'E-Commerce Marketing Manager',
      location: 'Remote (US/EU)',
      type: 'Full-Time',
      description:
        'Lead Heightham’s digital marketing strategy, focusing on brand awareness and customer acquisition for our tall men’s fashion line. Develop and execute campaigns across social media, email, and paid ads. Analyze performance metrics to optimize ROI. Requires 5+ years of experience in e-commerce marketing and a passion for fashion.',
      requirements: [
        'Bachelor’s degree in Marketing, Business, or related field',
        'Proven success in digital marketing campaigns',
        'Strong analytical skills and familiarity with tools like Google Analytics',
        'Excellent communication and leadership skills',
      ],
    },
    {
      title: 'Fashion Designer - Tall Menswear',
      location: 'New York, NY',
      type: 'Full-Time',
      description:
        'Design innovative, stylish clothing tailored for tall men, aligning with Heightham’s luxury aesthetic. Collaborate with product teams to create seasonal collections that balance functionality and fashion. Stay ahead of trends in menswear and ensure designs meet quality standards. Requires 3+ years of experience in fashion design.',
      requirements: [
        'Degree in Fashion Design or equivalent experience',
        'Proficiency in design software (e.g., Adobe Illustrator, Clo3D)',
        'Strong portfolio showcasing menswear designs',
        'Ability to work in a fast-paced, collaborative environment',
      ],
    },
    {
      title: 'Customer Experience Specialist',
      location: 'Remote (Global)',
      type: 'Part-Time',
      description:
        'Provide exceptional support to Heightham customers, assisting with sizing inquiries, order tracking, and returns. Ensure a seamless shopping experience through prompt, professional communication. Gather feedback to improve services. Requires 1+ year of customer service experience and a customer-first mindset.',
      requirements: [
        'High school diploma or equivalent',
        'Experience with CRM tools (e.g., Zendesk, Salesforce)',
        'Strong written and verbal communication skills',
        'Ability to handle multiple inquiries efficiently',
      ],
    },
    {
      title: 'Supply Chain Coordinator',
      location: 'Los Angeles, CA',
      type: 'Full-Time',
      description:
        'Manage logistics and inventory for Heightham’s tall men’s clothing line. Coordinate with suppliers, warehouses, and shipping partners to ensure timely delivery. Optimize supply chain processes to reduce costs and improve efficiency. Requires 3+ years of experience in supply chain or logistics.',
      requirements: [
        'Bachelor’s degree in Supply Chain Management, Logistics, or related field',
        'Experience with inventory management systems',
        'Strong organizational and problem-solving skills',
        'Knowledge of international shipping regulations',
      ],
    },
  ];

  const toggleJob = (index) => {
    setActiveJob(activeJob === index ? null : index);
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
          <h1 className="text-4xl font-thin tracking-wider">Careers at Heightham</h1>
          <p className="mt-4 text-sm text-gray-600">
            Join our mission to redefine fashion for tall men with style and confidence.
          </p>
        </motion.div>

        {/* Job Listings */}
        <div className="space-y-4">
          {jobs.map((job, index) => (
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
                onClick={() => toggleJob(index)}
              >
                <div>
                  <span>{job.title}</span>
                  <p className="text-sm text-gray-600">
                    {job.location} • {job.type}
                  </p>
                </div>
                {activeJob === index ? (
                  <ChevronUpIcon className="w-6 h-6" />
                ) : (
                  <ChevronDownIcon className="w-6 h-6" />
                )}
              </button>
              <motion.div
                variants={accordionVariants}
                initial="hidden"
                animate={activeJob === index ? 'visible' : 'hidden'}
                className="text-sm text-gray-700 overflow-hidden"
              >
                <div className="pb-4">
                  <p className="mb-4">{job.description}</p>
                  <h3 className="font-medium mb-2">Requirements</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:careers@heightham.com?subject=Application for ${job.title}`}
                    className="mt-4 inline-block bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors duration-300"
                  >
                    Apply Now
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 p-6 bg-gray-50 rounded-lg text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-lg font-medium mb-4">Don’t See Your Role?</h2>
          <p className="text-sm text-gray-700 mb-4">
            We’re always looking for talented individuals to join our team. Send us your resume and let us know how you can contribute to Heightham’s vision.
          </p>
          <a
            href="mailto:careers@heightham.com?subject=General Application"
            className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors duration-300"
          >
            Submit Your Resume
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

export default Careers;