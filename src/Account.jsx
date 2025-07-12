import React, { useState } from "react";
import { ArrowLeft, Eye, EyeOff, User, Mail, Lock, Phone } from "lucide-react";

const Account = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    console.log('Form submitted:', formData);
  };

  const handleBackClick = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen mt-14 bg-white flex">
      {/* Left Panel - Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          

          {/* Header */}
          <div className="text-center mb-8">
            <h2 
              className="text-2xl font-light text-gray-900 mb-2"
              style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
            >
              Create Your Account
            </h2>
            <p 
              className="text-sm font-light text-gray-600"
              style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
            >
              Join our exclusive community of style connoisseurs
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <label 
                  htmlFor="firstName" 
                  className="block text-xs font-light text-gray-700 mb-2 tracking-wide"
                  style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
                >
                  FIRST NAME
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-none text-sm font-light focus:outline-none focus:border-gray-400 transition-colors duration-200"
                    style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
                    placeholder="Enter your first name"
                  />
                </div>
              </div>

              <div className="relative">
                <label 
                  htmlFor="lastName" 
                  className="block text-xs font-light text-gray-700 mb-2 tracking-wide"
                  style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
                >
                  LAST NAME
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-none text-sm font-light focus:outline-none focus:border-gray-400 transition-colors duration-200"
                    style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <label 
                htmlFor="email" 
                className="block text-xs font-light text-gray-700 mb-2 tracking-wide"
                style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
              >
                EMAIL ADDRESS
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-none text-sm font-light focus:outline-none focus:border-gray-400 transition-colors duration-200"
                  style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="relative">
              <label 
                htmlFor="phone" 
                className="block text-xs font-light text-gray-700 mb-2 tracking-wide"
                style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
              >
                PHONE NUMBER
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-none text-sm font-light focus:outline-none focus:border-gray-400 transition-colors duration-200"
                  style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
                  placeholder="+91 12345 67890"
                />
              </div>
            </div>

            {/* Password */}
            <div className="relative">
              <label 
                htmlFor="password" 
                className="block text-xs font-light text-gray-700 mb-2 tracking-wide"
                style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
              >
                PASSWORD
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-none text-sm font-light focus:outline-none focus:border-gray-400 transition-colors duration-200"
                  style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
                  placeholder="Create a secure password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label 
                htmlFor="confirmPassword" 
                className="block text-xs font-light text-gray-700 mb-2 tracking-wide"
                style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
              >
                CONFIRM PASSWORD
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-none text-sm font-light focus:outline-none focus:border-gray-400 transition-colors duration-200"
                  style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start gap-3">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 text-gray-900 border-gray-300 rounded-none focus:ring-0 focus:ring-offset-0"
              />
              <label 
                htmlFor="terms" 
                className="text-xs font-light text-gray-600 leading-relaxed"
                style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
              >
                I agree to the{' '}
                <a href="#" className="text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors duration-200">
                  Terms of Service
                </a>
                {' '}and{' '}
                <a href="#" className="text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors duration-200">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-black text-white py-3 px-6 text-sm font-light tracking-wide hover:bg-gray-900 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Creating Account...
                </div>
              ) : (
                'Create Account'
              )}
            </button>

            {/* Sign In Link */}
            <div className="text-center pt-6">
              <p 
                className="text-sm font-light text-gray-600"
                style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
              >
                Already have an account?{' '}
                <a 
                  href="#" 
                  className="text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors duration-200"
                >
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Image */}
      <div className="hidden lg:block mt-10 lg:w-1/2 relative">
        <img
          src="/images/contact.jpg"
          alt="Heightham Fashion"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        
        {/* Quote Overlay */}
        <div className="absolute bottom-12 left-12 right-12 text-white">
          <blockquote 
            className="text-xl font-light leading-relaxed mb-4"
            style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
          >
            "Fashion is not just about clothing, it's about creating an identity that speaks to who you are."
          </blockquote>
          <cite 
            className="text-sm font-light opacity-80 tracking-wide"
            style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
          >
            HEIGHTHAM DESIGN PHILOSOPHY
          </cite>
        </div>
      </div>
    </div>
  );
};

export default Account;