import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin",
      color: "hover:text-[#0A66C2]",
      href: "#"
    },
    {
      name: "GitHub",
      icon: "fab fa-github",
      color: "hover:text-[#6e5494]",
      href: "#"
    },
    {
      name: "Twitter",
      icon: "fab fa-twitter",
      color: "hover:text-[#1DA1F2]",
      href: "#"
    },
    {
      name: "Instagram",
      icon: "fab fa-instagram",
      color: "hover:text-[#E1306C]",
      href: "#"
    }
  ];

  return (
    <footer className="relative bg-black text-white py-12 overflow-hidden border-t border-gray-800">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple-900/10 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />
      </div>

      <motion.div 
        className="container mx-auto px-6 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <motion.div 
            className="mb-6 md:mb-0"
            variants={itemVariants}
          >
            <div className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
              SIGNTRANSLATE
            </div>
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            variants={itemVariants}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-300 ${link.color} transition-colors duration-300 flex items-center group`}
                variants={itemVariants}
                whileHover={{ y: -3 }}
              >
                <i className={`${link.icon} text-2xl mr-2 group-hover:scale-110 transition-transform duration-300`} />
                <span className="text-sm font-medium">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Footer Links */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-gray-800/50"
          variants={itemVariants}
        >
          <motion.a 
            href="#" 
            className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            whileHover={{ y: -2 }}
          >
            Privacy Policy
          </motion.a>
          <motion.a 
            href="#" 
            className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            whileHover={{ y: -2 }}
          >
            Terms of Service
          </motion.a>
          <motion.a 
            href="#" 
            className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            whileHover={{ y: -2 }}
          >
            Contact Us
          </motion.a>
          <motion.a 
            href="#" 
            className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            whileHover={{ y: -2 }}
          >
            Documentation
          </motion.a>
        </motion.div>

        {/* Made with love */}
        <motion.div 
          className="text-center mt-8 pt-6 border-t border-gray-800/30 text-gray-500 text-xs"
          variants={itemVariants}
        >
          Made with <span className="text-red-500">❤️</span> for the deaf community
        </motion.div>
      </motion.div>

      {/* Floating elements */}
      <motion.div 
        className="absolute bottom-10 left-10 w-4 h-4 bg-blue-400 rounded-full filter blur-sm"
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-10 right-10 w-6 h-6 bg-purple-400 rounded-full filter blur-sm"
        animate={{
          y: [0, 15, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </footer>
  );
};

export default Footer;