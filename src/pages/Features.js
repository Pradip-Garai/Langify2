import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Features = () => {
  // Floating animation for background elements
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Glowing orb component
  const GlowingOrb = ({ color, size, position }) => (
    <motion.div
      className={`absolute rounded-full filter blur-xl opacity-20 ${color}`}
      style={{
        width: size,
        height: size,
        ...position
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.3, 0.2]
      }}
      transition={{
        duration: 6 + Math.random() * 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );

  // Feature card component
  const FeatureCard = ({ feature, index }) => (
    <motion.div
      className="relative overflow-hidden bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-transparent transition-all duration-500 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -10 }}
    >
      <div className="relative z-10 text-center">
        <div className="text-5xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          <i className={feature.icon} />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
        <p className="text-gray-300">{feature.description}</p>
      </div>
      <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-transparent transition-all duration-500" />
    </motion.div>
  );

  const features = [
    {
      icon: 'fas fa-eye',
      title: 'Real-time Gesture Recognition',
      description: 'Advanced AI algorithms track and interpret hand movements with high precision and speed.'
    },
    {
      icon: 'fas fa-volume-high',
      title: 'Text & Speech Output',
      description: 'Converts sign language gestures into both readable text and audible speech output.'
    },
    {
      icon: 'fas fa-globe',
      title: 'Multi-Language Support',
      description: 'Supports American Sign Language (ASL), Indian Sign Language (ISL), and British Sign Language (BSL).'
    },
    {
      icon: 'fas fa-brain',
      title: 'AI-Powered Learning',
      description: 'Machine learning models continuously improve accuracy through user interactions.'
    },
    {
      icon: 'fas fa-mobile-screen',
      title: 'Cross-Platform Compatibility',
      description: 'Works seamlessly across desktop, tablet, and mobile devices.'
    },
    {
      icon: 'fas fa-shield-halved',
      title: 'Privacy & Security',
      description: 'Your data is processed securely with end-to-end encryption and privacy protection.'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <GlowingOrb color="bg-purple-900" size="30vw" position={{ top: '10%', left: '10%' }} />
        <GlowingOrb color="bg-blue-900" size="40vw" position={{ bottom: '10%', right: '10%' }} />
        <GlowingOrb color="bg-emerald-900" size="20vw" position={{ top: '30%', right: '30%' }} />
        
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-5 sm:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-center mb-8 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Powerful
              </span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Features</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 text-center max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover the cutting-edge capabilities that make Langify the most advanced AI sign language translator available today.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="relative py-20 px-5 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-5 sm:px-12 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Ready to Experience
            </span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">the Future?</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of users who are already breaking communication barriers with our AI-powered sign language translator.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/live-translator">
              <motion.button 
                className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 text-2xl font-bold rounded-full cursor-pointer transition-all duration-300 hover:scale-105 group"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Try Live Translator Now</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;