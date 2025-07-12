import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRightIcon, GiftIcon, TruckIcon, StarIcon } from '@heroicons/react/24/outline';

const Envelope = () => {
  const mainSale = {
    id: 1,
    title: 'Heightham Exclusive Winter Sale',
    offer: 'Up to 40% Off on Couture & Accessories',
    details: 'Discover our latest collection with complimentary gift packaging and personalized styling services.',
    endDate: '2025-12-01T23:59:59',
  };

  const additionalOffers = [
    {
      id: 2,
      title: 'New Collection Launch',
      subtitle: 'Spring/Summer 2025',
      description: 'Be the first to experience our newest designs crafted for the modern gentleman.',
      image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=600&h=400&fit=crop',
      cta: 'Explore Collection',
      link: '/new-arrivals'
    },
    {
      id: 3,
      title: 'Bespoke Tailoring',
      subtitle: 'Made to Measure',
      description: 'Experience the ultimate in personalized luxury with our master tailors.',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=400&fit=crop',
      cta: 'Book Consultation',
      link: '/bespoke'
    },
    {
      id: 4,
      title: 'Premium Accessories',
      subtitle: 'Leather & Silk Collection',
      description: 'Complete your wardrobe with our handcrafted accessories made from the finest materials.',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop',
      cta: 'Shop Accessories',
      link: '/accessories'
    }
  ];

  const features = [
    {
      icon: <GiftIcon className="w-8 h-8" />,
      title: 'Complimentary Gift Wrapping',
      description: 'Luxury packaging for every purchase'
    },
    {
      icon: <TruckIcon className="w-8 h-8" />,
      title: 'Express Shipping',
      description: 'Free delivery on orders over $200'
    },
    {
      icon: <StarIcon className="w-8 h-8" />,
      title: 'Personal Styling',
      description: 'One-on-one consultation with our experts'
    }
  ];

  const testimonials = [
    {
      name: 'Alexander M.',
      role: 'CEO, Fortune 500',
      comment: 'The quality and attention to detail is unmatched. Every piece fits perfectly.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face'
    },
    {
      name: 'James R.',
      role: 'Investment Banker',
      comment: 'Finally found a brand that understands tall men. The service is exceptional.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face'
    },
    {
      name: 'Michael D.',
      role: 'Tech Executive',
      comment: 'Heightham has completely transformed my wardrobe. Highly recommended.',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=80&h=80&fit=crop&crop=face'
    }
  ];

  const calculateTimeLeft = (endDate) => {
    const difference = new Date(endDate) - new Date();
    if (difference <= 0) return null;
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(mainSale.endDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(mainSale.endDate));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  return (
    <div className="bg-black text-white min-h-screen font-['Inter'] relative overflow-hidden">
      {/* Background Video */}
      <div className="fixed inset-0 w-full h-full z-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover opacity-20"
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
      </div>

      <div className="relative z-10">
      <div className="relative min-h-screen flex items-center justify-center px-4 md:px-8 mt-28">
  <div className="max-w-7xl mx-auto text-center">
   
    {/* Hero Content */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      className="mb-10"
    >
      <h1 className="text-2xl md:text-4xl font-thin tracking-wide mb-3 leading-snug">
        Elevate Your
        <span className="text-white/80">Presence</span>
      </h1>
      <p className="text-base md:text-lg font-extralight opacity-80 max-w-xl mx-auto">
        Where luxury meets precision. Discover clothing crafted for the discerning gentleman.
      </p>
    </motion.div>

            {/* Main Sale Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl border border-white/20 max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-extralight tracking-wide mb-4">{mainSale.title}</h2>
              <p className="text-2xl md:text-3xl mb-6 text-amber-300">{mainSale.offer}</p>
              <p className="text-lg mb-8 opacity-80">{mainSale.details}</p>
              
              {/* Countdown Timer */}
              <div className="flex justify-center gap-8 text-base mb-8">
                <div className="text-center">
                  <span className="block text-4xl md:text-5xl font-light text-amber-300">{timeLeft.days}</span>
                  <span className="text-sm uppercase tracking-widest">Days</span>
                </div>
                <div className="text-center">
                  <span className="block text-4xl md:text-5xl font-light text-amber-300">{timeLeft.hours}</span>
                  <span className="text-sm uppercase tracking-widest">Hours</span>
                </div>
                <div className="text-center">
                  <span className="block text-4xl md:text-5xl font-light text-amber-300">{timeLeft.minutes}</span>
                  <span className="text-sm uppercase tracking-widest">Minutes</span>
                </div>
                <div className="text-center">
                  <span className="block text-4xl md:text-5xl font-light text-amber-300">{timeLeft.seconds}</span>
                  <span className="text-sm uppercase tracking-widest">Seconds</span>
                </div>
              </div>
              
              <motion.a
                href="/shop"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="inline-flex items-center gap-3 bg-white text-black py-4 px-8 rounded-full hover:bg-gray-100 text-lg font-medium transition-all duration-300 shadow-lg"
              >
                Shop the Sale
                <ChevronRightIcon className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Additional Offers Section */}
        <div className="bg-white text-black py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-extralight tracking-wide mb-6">
                Exclusive Collections
              </h2>
              <p className="text-xl opacity-80 max-w-2xl mx-auto">
                Discover our curated selection of premium offerings designed for the modern gentleman.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalOffers.map((offer, index) => (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/90 text-black px-3 py-1 rounded-full text-sm font-medium">
                        {offer.subtitle}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-light mb-3 group-hover:text-gray-600 transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {offer.description}
                  </p>
                  <a
                    href={offer.link}
                    className="inline-flex items-center gap-2 text-black font-medium hover:gap-4 transition-all duration-300"
                  >
                    {offer.cta}
                    <ChevronRightIcon className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 text-black py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-extralight tracking-wide mb-6">
                The Heightham Experience
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-light mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-black text-white py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-extralight tracking-wide mb-6">
                What Our Clients Say
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-white/70">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/90 italic leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="bg-white from-amber-600 to-amber-500 text-black py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h2 className="text-4xl md:text-5xl font-extralight tracking-wide mb-6">
                Join the Elite
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Become part of our exclusive community and receive early access to collections,
                private sales, and personalized styling services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/email"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="bg-white text-black py-4 px-8 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg"
                >
                  Sign Up for Exclusive Access
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="border-2 border-black text-black py-4 px-8 rounded-full font-medium hover:bg-white hover:text-amber-600 transition-all duration-300"
                >
                  Schedule Consultation
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Envelope;