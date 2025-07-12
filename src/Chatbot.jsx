import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, X, User, Bot, Minimize2 } from 'lucide-react';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const messageVariants = {
  hidden: { opacity: 0, x: (sender) => (sender === 'user' ? 20 : -20) },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const HeighthamChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your Heightham assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses = [
    "Thanks for reaching out! I'd be happy to help with your shopping needs.",
    "Great question! Let me share some details about Heightham’s tall men’s clothing.",
    "I understand your concern. Our team specializes in fashion for tall men.",
    "Absolutely! Would you like assistance with sizing, styles, or something else?",
    "I can help with that. Let me provide details on our products or services.",
    "Heightham is all about quality and fit for tall men. What are you looking for?",
    "I appreciate your interest! Let me explain how Heightham can elevate your wardrobe.",
    "Perfect timing! We have curated collections for tall men. Want to explore?",
  ];

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const minimizeChat = () => {
    setIsMinimized(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-['Inter'] font-light">
      {/* Chat Button */}
      {!isOpen && (
        <motion.button
          onClick={toggleChat}
          className="bg-blue-900 hover:bg-blue-800 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 border border-blue-700"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <MessageCircle size={24} />
        </motion.button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          className={`bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 ${
            isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
          }`}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <div className="bg-blue-900 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-medium text-lg tracking-wider">Heightham</h3>
                <p className="text-xs text-gray-300 font-light">AI Assistant</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={minimizeChat}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <Minimize2 size={16} />
              </button>
              <button
                onClick={toggleChat}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          {!isMinimized && (
            <>
              <div className="h-[460px] overflow-y-auto p-4 space-y-4 bg-gray-50/50">
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                    custom={message.sender}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`flex items-start space-x-2 max-w-[80%] ${
                        message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.sender === 'user'
                            ? 'bg-blue-900 text-white'
                            : 'bg-white border border-gray-200 text-gray-700'
                        }`}
                      >
                        {message.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                      </div>
                      <div
                        className={`rounded-2xl px-4 py-3 ${
                          message.sender === 'user'
                            ? 'bg-blue-900 text-white rounded-br-md'
                            : 'bg-white border border-gray-200 text-gray-700 rounded-bl-md'
                        }`}
                      >
                        <p className="text-sm font-light leading-relaxed">{message.text}</p>
                        <p
                          className={`text-xs mt-1 ${
                            message.sender === 'user' ? 'text-gray-300' : 'text-gray-400'
                          }`}
                        >
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                    custom="bot"
                    className="flex justify-start"
                  >
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-700">
                        <Bot size={16} />
                      </div>
                      <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: '0.1s' }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: '0.2s' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent text-sm font-light bg-gray-50/50 placeholder-gray-400"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={inputMessage.trim() === ''}
                    className="bg-blue-900 hover:bg-blue-800 disabled:bg-blue-400 text-white p-3 rounded-xl transition-colors disabled:cursor-not-allowed"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default HeighthamChatbot;