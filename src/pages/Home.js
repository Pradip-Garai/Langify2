import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
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
  const FeatureCard = ({ icon, title, description, delay, gradient }) => (
    <motion.div
      className="relative overflow-hidden bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-transparent transition-all duration-500 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -10 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${gradient}`} />
      <div className="relative z-10">
        <div className={`text-5xl mb-6 bg-gradient-to-r ${gradient} text-transparent bg-clip-text`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
      <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-transparent transition-all duration-500" />
    </motion.div>
  );

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
      <section className="relative min-h-screen flex flex-col justify-center px-5 sm:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div 
            className="flex flex-col lg:flex-row items-center gap-16"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div 
              className="flex-1"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.8, ease: "easeOut" }
                }
              }}
            >
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  Break
                </span> communication barriers with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"><br></br>AI vision</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 mb-10 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Our revolutionary sign language translator bridges the gap between deaf and hearing communities through cutting-edge computer vision.
              </motion.p>
              
              <motion.div
                className="flex flex-wrap gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link to="/live-translator">
                  <motion.button 
                    className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 text-xl font-bold rounded-full cursor-pointer transition-all duration-300 hover:scale-105 group"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Start Translating
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </Link>
                
                <Link to="/learn">
                  <motion.button 
                    className="relative overflow-hidden bg-transparent text-white border-2 border-gray-700 px-8 py-4 text-xl font-bold rounded-full cursor-pointer transition-all duration-300 hover:scale-105 group"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">Learn More</span>
                    <span className="absolute inset-0 bg-gray-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex-1 flex justify-center"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.8, ease: "easeOut" }
                }
              }}
            >
              <div className="relative">
                <motion.img 
                  src="/herosection.png" 
                  alt="Sign Language Translator" 
                  className="rounded-2xl max-w-full h-auto border-4 border-purple-500/20 shadow-2xl shadow-purple-500/20"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute inset-0 rounded-2xl border-4 border-transparent"
                  animate={{
                    opacity: [0.7, 1, 0.7],
                    scale: [0.95, 1.05, 0.95]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    background: "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0) 70%)"
                  }}
                />
                
                {/* Floating hand signs */}
                <motion.div 
                  className="absolute -top-16 -left-16 text-6xl"
                  animate={floatingAnimation}
                >
                  👋
                </motion.div>
                <motion.div 
                  className="absolute -bottom-16 -right-16 text-6xl"
                  animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
                >
                  🤟
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scrolling indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <span className="mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Video Demo Section */}
      <section className="relative py-32 px-5 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-col lg:flex-row items-center gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div 
              className="flex-1"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="relative">
                <motion.video 
                  controls 
                  loop 
                  autoPlay 
                  muted 
                  className="w-full rounded-3xl shadow-2xl shadow-blue-500/20 border border-blue-500/20 transform perspective-1000 rotate-x-5"
                  whileHover={{ scale: 1.02, rotateX: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <source src="/video-sample.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </motion.video>
                <div className="absolute -inset-4 rounded-3xl border border-blue-500/30 pointer-events-none animate-pulse" />
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500/10 rounded-full backdrop-blur-sm border border-blue-500/20"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                <motion.div 
                  className="absolute -bottom-10 -right-10 w-24 h-24 bg-purple-500/10 rounded-full backdrop-blur-sm border border-purple-500/20"
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -10, 0]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="flex-1"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold mb-10 leading-tight"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  Real-time
                </span> AI sign language translation
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 mb-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                Our advanced computer vision system interprets sign language gestures and converts them instantly into spoken words and text.
              </motion.p>
              
              <motion.div
                className="flex flex-wrap gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                <Link to="/live-translator">
                  <motion.button 
                    className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 text-xl font-bold rounded-full cursor-pointer transition-all duration-300 hover:scale-105 group"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">Try Demo</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-5 sm:px-12 bg-gradient-to-b from-black to-gray-900/50 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Powerful Features
              </span> for seamless communication
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Our translator combines cutting-edge AI with intuitive design to create the most advanced sign language solution available.
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon="🤖"
              title="AI-Powered Recognition"
              description="Advanced neural networks accurately interpret complex gestures in real-time."
              delay={0.1}
              gradient="from-purple-500 to-pink-500"
            />
            
            <FeatureCard 
              icon="🌍"
              title="Multi-Language Support"
              description="Supports ASL, BSL, ISL and more with regional variations."
              delay={0.2}
              gradient="from-blue-500 to-cyan-500"
            />
            
            <FeatureCard 
              icon="💬"
              title="Text & Speech Output"
              description="Generates natural sounding speech and clear text translations."
              delay={0.3}
              gradient="from-emerald-500 to-teal-500"
            />
            
            <FeatureCard 
              icon="⚡"
              title="Lightning Fast"
              description="Near-instant translation with under 100ms latency."
              delay={0.4}
              gradient="from-amber-500 to-red-500"
            />
            
            <FeatureCard 
              icon="📱"
              title="Cross-Platform"
              description="Works on mobile, desktop, and embedded systems."
              delay={0.5}
              gradient="from-violet-500 to-fuchsia-500"
            />
            
            <FeatureCard 
              icon="🔒"
              title="Privacy Focused"
              description="All processing happens locally - no data leaves your device."
              delay={0.6}
              gradient="from-green-500 to-lime-500"
            />
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="relative py-32 px-5 sm:px-12 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Built with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Cutting-Edge</span> Technology
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              We leverage the latest advancements in AI and computer vision to deliver unparalleled performance.
            </motion.p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: "TensorFlow", icon: "🤖", color: "from-orange-500 to-amber-500" },
              { name: "React", icon: "⚛️", color: "from-blue-500 to-cyan-500" },
              { name: "OpenCV", icon: "👁️", color: "from-emerald-500 to-teal-500" },
              { name: "WebRTC", icon: "📹", color: "from-purple-500 to-pink-500" },
              { name: "Node.js", icon: "🟢", color: "from-green-500 to-lime-500" }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-transparent transition-all duration-500 group w-40 h-40 flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${tech.color}`} />
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                <div className="absolute inset-0 rounded-xl border border-white/5 group-hover:border-transparent transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 px-5 sm:px-12 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">revolutionize</span> communication?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join our mission to make the world more accessible for everyone.
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
                className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 text-2xl font-bold rounded-full cursor-pointer transition-all duration-300 hover:scale-105 group"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Start Translating Now</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </Link>
            
            <Link to="/contact">
              <motion.button 
                className="relative overflow-hidden bg-transparent text-white border-2 border-gray-700 px-10 py-5 text-2xl font-bold rounded-full cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-gray-800/30 hover:border-blue-500/50 group"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Contact Us</span>
                <span className="absolute inset-0 bg-gradient-to-r from-gray-800/30 to-gray-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;