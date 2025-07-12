import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Contact information
  const contactInfo = [
    { label: 'Email', value: 'heightham@ast.com', href: 'mailto:rohitsuthar410@gmail.com' },
    { label: 'Phone', value: '+91 7737438464', href: 'tel:7737438464' },
    { label: 'Address', value: 'Udaipur, Rajasthan, India', href: '#' },
  ];

  const handleSubmit = (e) => {
    setFormSubmitted(true);
    // Reset form or handle submission logic here
    setTimeout(() => setFormSubmitted(false), 3000); // Reset after 3 seconds for demo
  };

  return (
    <div className="bg-white text-black py-20 px-4 md:px-8 font-thin min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl lg:text-4xl tracking-[0.3em] text-gray-900 mb-8 font-thin">
            Contact Us
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto font-thin leading-relaxed">
            Connect with our team for personalized assistance or inquiries.
          </p>
          <div className="w-20 h-px bg-gray-300 mx-auto mt-8"></div>
        </div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Contact Form */}
          <div className="space-y-8">
            {!formSubmitted ? (
              <div className="space-y-10">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full py-6 text-2xl md:text-3xl font-thin bg-transparent border-b border-gray-300 focus:outline-none focus:border-amber-600 transition-all duration-300 placeholder-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full py-6 text-2xl md:text-3xl font-thin bg-transparent border-b border-gray-300 focus:outline-none focus:border-amber-600 transition-all duration-300 placeholder-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full py-6 text-2xl md:text-3xl font-thin bg-transparent border-b border-gray-300 focus:outline-none focus:border-amber-600 transition-all duration-300 placeholder-gray-400"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    className="w-full py-6 text-2xl md:text-3xl font-thin bg-transparent border-b border-gray-300 focus:outline-none focus:border-amber-600 transition-all duration-300 placeholder-gray-400 resize-none h-40"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center gap-4 bg-white text-black py-4 px-8 border border-gray-300 rounded-full hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all duration-300 text-xl font-thin tracking-wide hover:scale-105 active:scale-95 transform"
                >
                  Submit
                  <ArrowRight className="h-6 w-6" />
                </button>
              </div>
            ) : (
              <div className="text-center text-3xl md:text-4xl text-gray-600 font-thin py-16">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
          </div>

          {/* Contact Info and Social Links */}
          <div className="space-y-12 lg:pl-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-3xl md:text-4xl font-thin mb-8 text-gray-900">Get in Touch</h3>
              <ul className="space-y-6 text-xl md:text-2xl font-thin">
                {contactInfo.map((item, index) => (
                  <li key={item.label} className="group">
                    <span className="text-gray-500 tracking-wide">{item.label}: </span>
                    <a
                      href={item.href}
                      className="hover:text-amber-600 hover:underline transition-colors duration-300 tracking-wide"
                    >
                      {item.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Info Section */}
            <div className="pt-8 border-t border-gray-200">
              <h4 className="text-2xl md:text-3xl font-thin mb-6 text-gray-900">Office Hours</h4>
              <div className="space-y-3 text-xl md:text-2xl font-thin text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;