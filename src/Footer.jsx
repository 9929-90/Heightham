import React from 'react';
import { motion } from 'framer-motion';

// Animation variants for sections and links
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', delay: index * 0.1 },
  }),
};

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: index * 0.05 },
  }),
};

const Footer = () => {
  const columns = [
    {
      title: 'ABOUT',
      links: [
        { href: '/about', label: 'About Us' },
        { href: '/careers', label: 'Careers' },
        { href: '/privacy', label: 'Privacy' },
        { href: '/terms-of-use', label: 'Terms of Use' },
  
      ],
    },
    {
      title: 'ACCOUNT',
      links: [
        { href: '/account', label: 'My Account' },
        { href: '/analytics', label: 'Analytics' },
      ],
    },
    {
      title: 'CUSTOMER SERVICE',
      links: [
        { href: '/help', label: 'Help' },
        { href: '/sitemap', label: 'Sitemap' },
      ],
    },
    {
      title: 'NEWSLETTER SIGN-UP',
      links: [],
      content: (
        <div>
          <p className="mb-2">
            SIGN UP TO RECEIVE THE LATEST NEWS, SPECIAL OFFERS AND EXCLUSIVE EVENTS RELATING TO RALPH LAUREN PRODUCTS AND SERVICES, BY E-MAIL OR TARGETED SOCIAL MEDIA ADS. BY SIGNING UP, YOU CONSENT TO THE USE OF TRACKING TECHNOLOGIES FOR PERSONALISATION AND ANALYTICS.
          </p>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="ENTER EMAIL ADDRESS"
              className="p-2 border rounded w-full"
            />
            <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">
              SUBMIT
            </button>
          </div>
          <p className="mt-2 text-xs">
            You may unsubscribe at any time by clicking on the unsubscribe link in each e-mail. For more information, please read Ralph Lauren Europe Sàrl’s Privacy Policy.
          </p>
        </div>
      ),
    },
  ];

  return (
    <footer className="bg-white text-black py-12 px-4 md:px-8 font-['Inter'] font-light">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          className="mb-8 text-3xl font-thin tracking-wider"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.a
            href="/"
            className="hover:text-amber-600 transition-colors duration-300"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            Heightham
          </motion.a>
        </motion.div>

        {/* Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {columns.map((column, colIndex) => (
            <motion.div
              key={column.title}
              variants={columnVariants}
              initial="hidden"
              whileInView="visible"
              custom={colIndex}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h3 className="text-lg font-medium mb-4">{column.title}</h3>
              {column.links.length > 0 ? (
                <ul className="space-y-2 text-sm">
                  {column.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.href}
                      variants={linkVariants}
                      initial="hidden"
                      whileInView="visible"
                      custom={linkIndex}
                      viewport={{ once: true }}
                    >
                      <a
                        href={link.href}
                        className="hover:text-amber-600 hover:underline transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <div className="text-sm">{column.content}</div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://www.instagram.com" aria-label="Instagram">
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.322 3.608 1.297.975.975 1.235 2.242 1.297 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.322 2.633-1.297 3.608-.975.975-2.242 1.235-3.608 1.297-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.322-3.608-1.297-.975-.975-1.235-2.242-1.297-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.322-2.633 1.297-3.608.975-.975 2.242-1.235 3.608-1.297 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.67.014-4.953.072-1.315.064-2.553.34-3.498.925-1.122.705-2.058 1.641-2.763 2.763-.585.945-.861 2.183-.925 3.498-.058 1.283-.072 1.694-.072 4.953s.014 3.67.072 4.953c.064 1.315.34 2.553.925 3.498.705 1.122 1.641 2.058 2.763 2.763.945.585 2.183.861 3.498.925 1.283.058 1.694.072 4.953.072s3.67-.014 4.953-.072c1.315-.064 2.553-.34 3.498-.925 1.122-.705 2.058-1.641 2.763-2.763.585-.945.861-2.183.925-3.498.058-1.283.072-1.694.072-4.953s-.014-3.67-.072-4.953c-.064-1.315-.34-2.553-.925-3.498-.705-1.122-1.641-2.058-2.763-2.763-.945-.585-2.183-.861-3.498-.925-1.283-.058-1.694-.072-4.953-.072z" />
                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162m0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="https://www.facebook.com" aria-label="Facebook">
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="https://www.youtube.com" aria-label="YouTube">
              <span className="sr-only">YouTube</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a href="https://www.twitter.com" aria-label="Twitter">
              <span className="sr-only">Twitter</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.030-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.397 0-.79-.023-1.176-.068 2.187 1.405 4.787 2.224 7.561 2.224 9.054 0 14.01-7.496 14.01-13.986 0-.21-.005-.42-.014-.63.962-.695 1.8-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="https://www.pinterest.com" aria-label="Pinterest">
              <span className="sr-only">Pinterest</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359.678-.359 1.682c0 1.593.925 2.835 2.025 2.835 1.05 0 1.718-1.009 1.718-2.2 0-1.064-.774-1.879-2.011-1.879-1.359 0-2.433.995-2.433 2.267 0 1.094.665 1.944 1.644 1.944 1.954 0 3.458-2.221 3.458-5.431 0-2.058-1.111-3.977-3.272-3.977-.99 0-1.792.581-1.792 1.234 0 .737.465 1.427.965 1.427.485 0 .768-.517.768-1.244 0-1.062-.721-1.94-1.997-1.94-1.514 0-2.702 1.435-2.702 3.042 0 1.167.465 2.169.958 2.169.533 0 1.184-.704 1.184-1.63 0-1.303-.858-2.538-1.539-2.538-.33 0-.671.352-.671 1.073 0 .735.486 1.336.486 1.336s-1.553 6.482-1.827 7.661c-.282 1.227-.552 2.625-1.828 3.544 1.525 1.148 3.064 1.732 4.642 1.732 5.694 0 9.971-4.597 9.971-10.205 0-5.62-4.587-10.205-10.206-10.205z" />
              </svg>
            </a>
          </div>
          <p className="text-xs mt-4 md:mt-0">© COPYRIGHT 2025 RALPH LAUREN MEDIA LLC</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;