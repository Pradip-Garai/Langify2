import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
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

  // Team member card component with photo support
  const TeamCard = ({ member, index }) => (
    <motion.div
      className="relative overflow-hidden bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-transparent transition-all duration-500 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -10 }}
    >
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full mb-6 overflow-hidden border-2 border-purple-500/30 shadow-lg">
          {member.image ? (
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              <i className="fas fa-user text-5xl text-purple-400" />
            </div>
          )}
        </div>
        <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          {member.name}
        </h3>
        <p className="text-lg font-semibold text-purple-400 mb-4">{member.role}</p>
        <p className="text-gray-300">{member.description}</p>
      </div>
      <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-transparent transition-all duration-500" />
    </motion.div>
  );

  // Value card component
  const ValueCard = ({ icon, title, description, color }) => (
    <motion.div
      className="relative overflow-hidden bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-transparent transition-all duration-500 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -10 }}
    >
      <div className="relative z-10 text-center">
        <div className={`text-5xl mb-6 ${color}`}>
          <i className={`fas ${icon}`} />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
      <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-transparent transition-all duration-500" />
    </motion.div>
  );

  // Team data with image paths
  const teamMembers = [
    {
      name: 'Pradip Garai',
      role: 'MERN STACK Developer',
      image: '/team-mate/pradip3.jpg',
      description: 'Bachelor in Computer Science, passionate about AI and web development'
    },
    {
      name: 'Abhirup Bag',
      role: 'Machine Learning Engineer',
      image: '/team-mate/michael-chen.jpg',
      description: 'Expert in deep learning and neural network architectures'
    },
    {
      name: 'Rangan Das',
      role: 'Sign Language Specialist',
      image: '/team/emily-rodriguez.jpg',
      description: 'Certified ASL interpreter and accessibility advocate'
    },
    {
      name: 'Pallabi Mondal',
      role: 'Full Stack Developer',
      image: '/team/david-kim.jpg',
      description: 'Specializes in real-time web applications and UI/UX'
    }
  ];

  const values = [
    {
      icon: 'fa-heart',
      title: 'Accessibility',
      description: 'Making technology accessible to everyone, regardless of abilities',
      color: 'text-red-400'
    },
    {
      icon: 'fa-lightbulb',
      title: 'Innovation',
      description: 'Pushing boundaries of AI to solve real-world problems',
      color: 'text-yellow-400'
    },
    {
      icon: 'fa-users',
      title: 'Community',
      description: 'Building bridges between communities for inclusive communication',
      color: 'text-blue-400'
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
                About
              </span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Langify</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 text-center max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We are a passionate team of technologists, researchers, and accessibility advocates 
              dedicated to breaking down communication barriers through innovative AI solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 px-5 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div 
              className="relative overflow-hidden bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-transparent transition-all duration-500"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Our Mission
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                To create a world where communication barriers no longer exist. We believe that 
                everyone deserves equal access to communication, regardless of their hearing ability 
                or sign language proficiency.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Through cutting-edge AI technology and computer vision, we're making real-time 
                sign language translation accessible to everyone, everywhere.
              </p>
            </motion.div>
            
            <motion.div 
              className="relative overflow-hidden bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-transparent transition-all duration-500"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Our Vision
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                A future where sign language is universally understood and accessible, where 
                technology serves as a bridge connecting communities and fostering inclusive 
                communication.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                We envision a world where our AI-powered solutions empower millions of people 
                to communicate freely and confidently in any setting.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 px-5 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Our Core
            </span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Values</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueCard 
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                color={value.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 px-5 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Meet Our
            </span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Team</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-5 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-12 text-center border border-white/10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Our Global
              </span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Impact</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold text-green-400 mb-2">10K+</div>
                <div className="text-lg text-gray-300">Active Users</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold text-blue-400 mb-2">1M+</div>
                <div className="text-lg text-gray-300">Translations</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-lg text-gray-300">Countries</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold text-yellow-400 mb-2">95%</div>
                <div className="text-lg text-gray-300">Satisfaction</div>
              </motion.div>
            </div>
          </motion.div>
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
              Want to Join
            </span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Our Mission?</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get in touch with our team to learn more about our technology and how you can contribute.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/contact">
              <motion.button 
                className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 text-2xl font-bold rounded-full cursor-pointer transition-all duration-300 hover:scale-105 group"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Contact Us</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;