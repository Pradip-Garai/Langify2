import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LiveTranslator = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [translatedText, setTranslatedText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('ASL');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

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

  const startCamera = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { width: 1280, height: 720 },
      audio: false
    });

    if (videoRef.current) {
      videoRef.current.srcObject = stream;
      streamRef.current = stream;

      videoRef.current.onloadedmetadata = async () => {
        try {
          await videoRef.current.play();
          console.log("Camera stream playing.");
        } catch (playErr) {
          console.error("Video play failed:", playErr);
        }
      };
    }

    setIsRecording(true);
  } catch (error) {
    console.error('Error accessing camera:', error);
    alert('Unable to access camera. Please check permissions and webcam.');
  }
};

  
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setIsRecording(false);
  };

  const simulateTranslation = () => {
    const sampleTranslations = {
      ASL: [
        "Hello, how are you?",
        "Thank you very much",
        "Nice to meet you",
        "Have a great day",
        "I understand",
        "Please help me",
        "Good morning",
        "See you later"
      ],
      ISL: [
        "नमस्ते, आप कैसे हैं?",
        "बहुत बहुत धन्यवाद",
        "आपसे मिलकर अच्छा लगा",
        "आपका दिन शुभ हो",
        "मैं समझ गया",
        "कृपया मेरी मदद करें",
        "सुप्रभात",
        "बाद में मिलते हैं"
      ],
      BSL: [
        "Hello, how are you?",
        "Thank you very much",
        "Nice to meet you",
        "Have a great day",
        "I understand",
        "Please help me",
        "Good morning",
        "See you later"
      ]
    };
    
    const randomTranslation = sampleTranslations[selectedLanguage][
      Math.floor(Math.random() * sampleTranslations[selectedLanguage].length)
    ];
    
    setTranslatedText(randomTranslation);
    
    // Animation effect for translation
    const translationElement = document.getElementById('translation-text');
    if (translationElement) {
      translationElement.style.opacity = 0;
      setTimeout(() => {
        translationElement.style.opacity = 1;
      }, 300);
    }
  };

  const speakText = () => {
    if (translatedText && 'speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(translatedText);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      
      utterance.onend = () => setIsSpeaking(false);
      
      speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      speechSynthesis.cancel();
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden relative mt-10">
      {/* Background elements */}
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

      <div className="relative z-10 py-16 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Live Sign Language Translator
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Real-time translation powered by AI vision technology
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Camera Section */}
          <motion.div 
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              Camera Feed
            </h2>
            
            <div className="relative bg-black rounded-xl overflow-hidden mb-6 aspect-video">
              {isRecording ? (
                <motion.video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              ) : (
                <motion.div 
                  className="w-full h-full flex items-center justify-center text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center">
                    <i className="fa-solid fa-camera text-6xl mb-4"></i>
                    <p className="text-xl">Camera inactive</p>
                  </div>
                </motion.div>
              )}
              
              {/* Camera overlay */}
              <div className="absolute inset-0 border-4 border-dashed border-blue-400/30 pointer-events-none rounded-xl" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <motion.button
                onClick={isRecording ? stopCamera : startCamera}
                className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 relative overflow-hidden ${
                  isRecording 
                    ? 'bg-red-600 hover:bg-red-700' 
                    : 'bg-green-600 hover:bg-green-700'
                }`}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <i className={`fa-solid ${isRecording ? 'fa-stop' : 'fa-video'} mr-3`}></i>
                  {isRecording ? 'Stop Camera' : 'Start Camera'}
                </span>
                <span className={`absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 ${
                  isRecording ? 'bg-red-700' : 'bg-green-700'
                }`} />
              </motion.button>
              
              <motion.button
                onClick={simulateTranslation}
                disabled={!isRecording}
                className="flex-1 py-4 px-6 rounded-xl font-bold text-lg bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-700 disabled:cursor-not-allowed relative overflow-hidden"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <i className="fa-solid fa-language mr-3"></i>
                  Translate
                </span>
                <span className="absolute inset-0 bg-blue-700 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 font-bold mb-3">Sign Language:</label>
              <motion.div 
                className="relative"
                whileHover={{ y: -2 }}
              >
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none appearance-none"
                >
                  <option value="ASL">American Sign Language (ASL)</option>
                  <option value="ISL">Indian Sign Language (ISL)</option>
                  <option value="BSL">British Sign Language (BSL)</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-400">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Translation Output Section */}
          <motion.div 
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-blue-600 text-transparent bg-clip-text">
              Translation Output
            </h2>
            
            <div className="bg-gray-800/50 rounded-xl p-6 mb-6 min-h-48 border border-gray-700">
              <h3 className="text-lg font-bold text-gray-300 mb-4">Translated Text:</h3>
              <motion.div 
                id="translation-text"
                className="text-white text-xl leading-relaxed transition-opacity duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {translatedText || (
                  <div className="text-gray-500 italic">
                    Translation will appear here...
                  </div>
                )}
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                onClick={speakText}
                disabled={!translatedText || isSpeaking}
                className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg ${
                  isSpeaking ? 'bg-purple-800' : 'bg-purple-600 hover:bg-purple-700'
                } text-white disabled:bg-gray-700 disabled:cursor-not-allowed relative overflow-hidden`}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <i className={`fa-solid ${isSpeaking ? 'fa-volume-high animate-pulse' : 'fa-volume-high'} mr-3`}></i>
                  {isSpeaking ? 'Speaking...' : 'Speak Text'}
                </span>
                <span className="absolute inset-0 bg-purple-700 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              
              <motion.button
                onClick={() => setTranslatedText('')}
                disabled={!translatedText}
                className="flex-1 py-4 px-6 rounded-xl font-bold text-lg bg-gray-700 hover:bg-gray-600 text-white disabled:bg-gray-800 disabled:cursor-not-allowed relative overflow-hidden"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <i className="fa-solid fa-trash mr-3"></i>
                  Clear
                </span>
                <span className="absolute inset-0 bg-gray-600 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </div>

            <div className="bg-blue-900/20 rounded-xl p-5 border border-blue-500/30">
              <h4 className="text-blue-400 font-bold mb-3 flex items-center">
                <i className="fa-solid fa-lightbulb mr-2"></i>
                Tips for Better Recognition:
              </h4>
              <ul className="text-gray-300 space-y-2">
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <span className="text-blue-400 mr-2">•</span> Ensure good lighting conditions
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-blue-400 mr-2">•</span> Keep hands fully visible in frame
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-blue-400 mr-2">•</span> Use clear, deliberate gestures
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="text-blue-400 mr-2">•</span> Maintain steady hand position
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Help Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
            <h3 className="text-2xl font-bold text-white mb-4">Need Help?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Learn how to get the most accurate translations with our comprehensive guide.
            </p>
            <motion.button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 text-lg font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 relative overflow-hidden"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">View Tutorial</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LiveTranslator;