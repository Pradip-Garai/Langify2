import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HowItWorks = () => {
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

  // Step card component
  const StepCard = ({ step, title, description, icon, delay }) => (
    <motion.div
      className="relative overflow-hidden bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-transparent transition-all duration-500 group h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -10 }}
    >
      <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-transparent transition-all duration-500" />
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center mb-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-12 h-12 flex items-center justify-center mr-4">
            <span className="text-white font-bold text-xl">{step}</span>
          </div>
          <div className={`text-3xl bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text`}>
            <i className={icon}></i>
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-gray-300 flex-grow">{description}</p>
        <div className="mt-6 pt-6 border-t border-gray-800 group-hover:border-transparent transition-all duration-300">
          <div className="w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </motion.div>
  );

  // Technology card component
  const TechCard = ({ icon, title, description, color }) => (
    <motion.div
      className="relative overflow-hidden bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-transparent transition-all duration-500 group"
      whileHover={{ y: -5 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${color}`} />
      <div className="relative z-10">
        <div className={`text-4xl mb-4 bg-gradient-to-r ${color} text-transparent bg-clip-text`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
      <div className="absolute inset-0 rounded-xl border border-white/5 group-hover:border-transparent transition-all duration-500" />
    </motion.div>
  );

  const steps = [
    {
      step: 1,
      title: 'Camera Activation',
      description: 'Enable your camera to start capturing sign language gestures in real-time with our privacy-focused interface.',
      icon: 'fa-solid fa-camera'
    },
    {
      step: 2,
      title: 'Gesture Detection',
      description: 'Advanced computer vision algorithms track hand movements and finger positions with pixel-perfect precision.',
      icon: 'fa-solid fa-hand'
    },
    {
      step: 3,
      title: 'AI Processing',
      description: 'Deep neural networks analyze and interpret gestures using models trained on millions of sign language samples.',
      icon: 'fa-solid fa-brain'
    },
    {
      step: 4,
      title: 'Translation Output',
      description: 'Convert recognized signs into natural language text and speech output in your preferred language instantly.',
      icon: 'fa-solid fa-language'
    }
  ];

  const technologies = [
    {
      icon: <i className="fa-solid fa-eye"></i>,
      title: 'Computer Vision',
      description: 'Real-time hand tracking and gesture recognition using OpenCV and MediaPipe',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <i className="fa-solid fa-robot"></i>,
      title: 'Machine Learning',
      description: 'Custom TensorFlow models trained on extensive sign language datasets',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <i className="fa-solid fa-cloud"></i>,
      title: 'Cloud Processing',
      description: 'Scalable cloud infrastructure for handling complex AI computations',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const stats = [
    {
      value: '95%',
      label: 'Accuracy Rate',
      color: 'text-green-400'
    },
    {
      value: '<1s',
      label: 'Response Time',
      color: 'text-blue-400'
    },
    {
      value: '3+',
      label: 'Sign Languages',
      color: 'text-purple-400'
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
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                How It Works
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Understanding the technology behind our AI-powered sign language translator
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="relative py-20 px-5 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            {steps.map((step, index) => (
              <StepCard
                key={index}
                step={step.step}
                title={step.title}
                description={step.description}
                icon={step.icon}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative py-20 px-5 sm:px-12 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Our Technology Stack
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              The powerful technologies that make our translator work seamlessly
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            {technologies.map((tech, index) => (
              <TechCard
                key={index}
                icon={tech.icon}
                title={tech.title}
                description={tech.description}
                color={tech.color}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Accuracy Stats */}
      <section className="relative py-20 px-5 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-3xl p-12 text-center border border-blue-500/30 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
            <div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none" />
            
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold mb-12 text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Performance Metrics
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ staggerChildren: 0.1 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-transparent transition-all duration-500 group"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-5xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className={stat.color}>{stat.value}</span>
                  </div>
                  <div className="text-xl text-gray-300">{stat.label}</div>
                  <div className="absolute inset-0 rounded-xl border border-white/5 group-hover:border-transparent transition-all duration-500" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-5 sm:px-12 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">experience</span> the future of communication?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Start translating sign language in real-time with our intuitive platform.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/live-translator">
              <motion.button 
                className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 text-xl font-bold rounded-full cursor-pointer transition-all duration-300 hover:scale-105 group"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Start Live Translation</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </Link>
            
            <Link to="/learn">
              <motion.button 
                className="relative overflow-hidden bg-transparent text-white border-2 border-gray-700 px-8 py-4 text-xl font-bold rounded-full cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-gray-800/30 hover:border-blue-500/50 group"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Learn More</span>
                <span className="absolute inset-0 bg-gradient-to-r from-gray-800/30 to-gray-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;