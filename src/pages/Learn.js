import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';

const Learn = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const tutorials = [
    {
      title: 'Getting Started with Langify',
      duration: '5 min',
      description: 'Learn the basics of using our AI sign language translator',
      icon: '👨‍💻',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Camera Setup & Positioning',
      duration: '3 min',
      description: 'Optimize your camera setup for best translation results',
      icon: '📷',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Understanding Sign Languages',
      duration: '8 min',
      description: 'Learn about ASL, ISL, and BSL supported by our platform',
      icon: '👐',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Troubleshooting Common Issues',
      duration: '6 min',
      description: 'Solutions to common problems and how to improve accuracy',
      icon: '🔧',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  const features = [
    {
      title: 'Real-time Translation',
      description: 'Experience instant sign language to text/speech conversion',
      icon: '⚡',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Multi-language Support',
      description: 'Support for American, Indian, and British Sign Languages',
      icon: '🌐',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'High Accuracy',
      description: '95% accuracy rate with continuous learning improvements',
      icon: '🎯',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Privacy First',
      description: 'Your data is processed securely with privacy protection',
      icon: '🛡️',
      gradient: 'from-yellow-500 to-amber-500'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Enable Camera',
      description: 'Allow camera access to start capturing gestures',
      icon: '📱'
    },
    {
      number: '2',
      title: 'Make Gestures',
      description: 'Perform sign language gestures in front of camera',
      icon: '👋'
    },
    {
      number: '3',
      title: 'AI Processing',
      description: 'Our AI analyzes and interprets your gestures',
      icon: '🧠'
    },
    {
      number: '4',
      title: 'Get Translation',
      description: 'Receive text and speech output instantly',
      icon: '💬'
    }
  ];

  const faqs = [
    {
      question: 'What sign languages are supported?',
      answer: 'Currently, we support American Sign Language (ASL), Indian Sign Language (ISL), and British Sign Language (BSL). We\'re continuously working to add more languages.'
    },
    {
      question: 'How accurate is the translation?',
      answer: 'Our AI model achieves 95% accuracy rate and continues to improve through machine learning. Accuracy may vary based on lighting conditions and gesture clarity.'
    },
    {
      question: 'Do I need special equipment?',
      answer: 'No special equipment is needed. Any device with a camera (computer, tablet, or smartphone) and internet connection can use Langify.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we prioritize your privacy. All video processing is done securely, and we don\'t store your camera feed or personal data without your explicit consent.'
    }
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      {/* CSS Grid Background - Replaced SVG with CSS */}
      <div className="fixed inset-0 -z-50 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(128, 128, 128, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(128, 128, 128, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>
      
      {/* Floating Particles */}
      <div className="fixed inset-0 -z-40 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: 0.3,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              transition: {
                duration: Math.random() * 20 + 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }
            }}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'bg-cyan-500' : 
              i % 2 === 0 ? 'bg-purple-500' : 'bg-pink-500'
            }`}
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32 relative">
        {/* Hero Section */}
        <section className="text-center mb-32 relative">
          <div className="absolute -top-32 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-3xl -z-10"></div>
          <div className="absolute -bottom-32 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl -z-10"></div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-8"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Master Langify
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-neutral-300 max-w-4xl mx-auto leading-relaxed"
          >
            Unlock the full potential of our AI-powered sign language translator with comprehensive guides and tutorials.
          </motion.p>
        </section>

        {/* Video Demo Section */}
        {/* Video Demo Section */}
<section className="mb-32 relative">
  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-transparent -z-10 rounded-3xl"></div>
  
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="bg-black/50 border-2 border-white/10 rounded-3xl p-10 shadow-2xl shadow-cyan-500/20 backdrop-blur-sm"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
        See Langify in Action
      </span>
    </h2>
    
    <div className="max-w-4x1 mx-auto ml-14 pl-5">
      <div className="bg-black/70 rounded-xl  shadow-lg mb-8 relative" style={{ aspectRatio: '16/9' }}>
        {/* Video Player with your specific file */}
        <video 
          controls 
          autoPlay 
          muted 
          loop
          className="w-full h-full object-cover"
          poster="/video-poster.jpg" // Optional: Add a poster image
        >
          <source src="/tk 2025-06-26 11-52-44 (2).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="inline-block"
          >
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-full shadow-lg cursor-pointer">
              <span className="text-4xl">▶</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-xl text-neutral-300 text-center"
      >
        Experience the revolutionary technology that's breaking down communication barriers with cutting-edge AI.
      </motion.p>
    </div>
  </motion.div>
</section>
{/* Add this section after the Video Demo Section and before the Tutorials Section */}

{/* Sign Language User Manual Section with PDF Download */}
<section className="mb-32 relative">
  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 -z-10 rounded-3xl"></div>
  
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="bg-black/50 border-2 border-white/10 rounded-3xl p-10 shadow-2xl shadow-purple-500/20 backdrop-blur-sm"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
        Sign Language User Manual
      </span>
    </h2>
    
    <div className="flex flex-col lg:flex-row items-center gap-12">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="lg:w-1/2"
      >
        <img 
          src="/sign.jpg" 
          alt="Sign Language User Manual" 
          className="rounded-2xl border-2 border-white/20 shadow-lg w-full max-w-xl mx-auto"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="lg:w-1/2 space-y-6"
      >
        <h3 className="text-2xl font-bold text-white">Comprehensive Guide to Sign Language</h3>
        <p className="text-neutral-300">
          Our detailed manual covers everything from basic signs to advanced communication techniques. 
          Perfect for both beginners and experienced users looking to improve their skills.
        </p>
        <ul className="space-y-3 text-neutral-300">
          <li className="flex items-start">
            <span className="text-cyan-400 mr-2">✓</span>
            Step-by-step instructions for common signs
          </li>
          <li className="flex items-start">
            <span className="text-cyan-400 mr-2">✓</span>
            Visual diagrams for proper hand positioning
          </li>
          <li className="flex items-start">
            <span className="text-cyan-400 mr-2">✓</span>
            Tips for improving communication fluency
          </li>
          <li className="flex items-start">
            <span className="text-cyan-400 mr-2">✓</span>
            Cultural context and best practices
          </li>
        </ul>
        
        {/* PDF Download Button with Functionality */}
        <button 
          onClick={() => {
            // Create a temporary anchor element
            const link = document.createElement('a');
            link.href = '/sign-language-manual.pdf'; // Path to your PDF in public folder
            link.download = 'Langify-Sign-Language-Manual.pdf'; // Suggested filename
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Optional: Track download event
            console.log('Manual downloaded');
            // You can add analytics here like:
            // trackDownloadEvent('manual-download');
          }}
          className="mt-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-500 hover:to-blue-500 transition-all duration-300 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Download Full Manual (PDF)
        </button>
      </motion.div>
    </div>
  </motion.div>
</section>

        {/* Tutorials Section */}
        <section className="mb-32" ref={ref}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Video Tutorials
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tutorials.map((tutorial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10 }}
              >
                <div className={`h-full bg-gradient-to-br from-black/70 to-gray-900/50 border-2 border-white/10 hover:border-${tutorial.gradient.split(' ')[1]}/30 rounded-2xl p-8 transition-all hover:shadow-lg hover:shadow-${tutorial.gradient.split(' ')[1]}/10 backdrop-blur-sm`}>
                  <div className="flex items-start space-x-6">
                    <div className={`bg-gradient-to-r ${tutorial.gradient} rounded-xl p-4 flex-shrink-0 text-3xl`}>
                      {tutorial.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">{tutorial.title}</h3>
                      <p className="text-neutral-300 mb-4">{tutorial.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-neutral-400">
                          ⏱️ {tutorial.duration}
                        </span>
                        <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-500 hover:to-cyan-500 transition-all duration-300">
                          Watch Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Key Features
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10 }}
              >
                <div className={`h-full bg-gradient-to-br from-black/70 to-${feature.gradient.split(' ')[1].split('-')[0]}-900/30 border-2 border-white/10 hover:border-${feature.gradient.split(' ')[1]}/30 rounded-2xl p-8 text-center transition-all hover:shadow-lg hover:shadow-${feature.gradient.split(' ')[1]}/10 backdrop-blur-sm`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${feature.gradient} text-white text-3xl`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-neutral-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-purple-900/10 to-transparent -z-10 rounded-3xl"></div>
          <div className="absolute -top-20 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full filter blur-3xl -z-20"></div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-black/70 to-blue-900/30 rounded-2xl p-12 border-2 border-white/10 backdrop-blur-sm"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-16"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                How It Works
              </span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-cyan-500/20 rounded-full filter blur-xl -z-10"></div>
                    <div className="bg-gradient-to-br from-black/80 to-gray-900/50 border-2 border-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto text-2xl font-bold text-cyan-400">
                      {step.number}
                    </div>
                  </div>
                  <div className="text-3xl mb-4">{step.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-neutral-300 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Frequently Asked Questions
            </span>
          </motion.h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-black/70 to-gray-900/50 border-2 border-white/10 rounded-xl p-6 shadow-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-3">{faq.question}</h3>
                <p className="text-neutral-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center relative">
          <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-full max-w-2xl h-64 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full filter blur-3xl -z-10"></div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-8"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Ready to Get Started?
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto"
            >
              Try our live translator now and experience the future of sign language communication.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link to="/live-translator">
                <button className="relative h-16 px-10 text-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-full shadow-lg transition-all duration-300 hover:shadow-cyan-500/40 group overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Try Live Translator
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              </Link>
              <Link to="/contact">
                <button className="h-16 px-10 text-lg border-2 border-white/20 hover:border-cyan-400/50 text-white hover:text-cyan-200 rounded-full transition-all duration-300 hover:bg-white/5 backdrop-blur-sm flex items-center justify-center gap-2">
                  <span>Contact Support</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Learn;