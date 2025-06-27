import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, githubProvider } from "../firebase";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      setIsLoading(false);
      return;
    }

    try {
      const endpoint = isLogin
        ? 'http://localhost:8000/auth/login'
        : 'http://localhost:8000/auth/signup';

      const payload = isLogin
        ? { email: formData.email, password: formData.password }
        : {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.msg || (isLogin ? 'Login successful!' : 'Signup successful!'));

        if (result.token) {
          localStorage.setItem('token', result.token);
        }

        if (isLogin) {
          navigate('/');
          window.location.reload();
        } else {
          setIsLogin(true);
          setFormData({
            email: '',
            password: '',
            confirmPassword: '',
            name: ''
          });
        }
      } else {
        if (response.status === 409) {
          alert('This email is already registered. Please use a different email or log in.');
        } else if (response.status === 400) {
          alert(result.msg || 'Invalid input. Please check your data.');
        } else {
          alert(result.msg || 'An error occurred. Please try again.');
        }
      }

    } catch (error) {
      console.error('Error:', error);
      alert('A network error occurred. Please check your connection.');
    }

    setIsLoading(false);
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      localStorage.setItem('token', user.accessToken);
      alert('Google login successful!');
      navigate('/');
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert('Google login failed.');
    }
  };

  const handleGithubLogin = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      const user = result.user;
      localStorage.setItem('token', user.accessToken);
      alert('GitHub login successful!');
      navigate('/');
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert('GitHub login failed.');
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      name: ''
    });
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-900/20 rounded-full filter blur-3xl"
          animate={floatingAnimation}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-900/20 rounded-full filter blur-3xl"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
        />
      </div>

      <div className="max-w-md w-full relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center bg-gradient-to-r from-gray-900 to-blue-800 px-6 py-3 rounded-full w-fit mx-auto mb-6">
            <img src="/logo.png" alt="Langify Logo" className="w-10 h-10 rounded-full mr-3" />
            <span className="text-white text-2xl font-bold">LANGIFY</span>
          </div>
          <motion.h1 
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"
            key={isLogin ? 'login' : 'signup'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </motion.h1>
          <p className="text-gray-400">
            {isLogin ? 'Sign in to access your account' : 'Join us to start translating sign language'}
          </p>
        </motion.div>

        <div className="flex items-center justify-center mb-8">
          <div className="relative bg-gray-900 rounded-full p-1">
            <motion.div 
              className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 ${isLogin ? 'left-1' : 'right-1'}`}
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
            <button onClick={() => setIsLogin(true)} className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium ${isLogin ? 'text-white' : 'text-gray-400'}`}>
              Login
            </button>
            <button onClick={() => setIsLogin(false)} className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium ${!isLogin ? 'text-white' : 'text-gray-400'}`}>
              Sign Up
            </button>
          </div>
        </div>

        <motion.div 
          className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.form
              key={isLogin ? 'login' : 'signup'}
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
              transition={{ duration: 0.3 }}
            >
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                    placeholder="Enter your full name"
                  />
                </motion.div>
              )}

              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-gray-300 font-medium mb-2">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                  placeholder="Enter your password"
                />
              </div>

              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <label htmlFor="confirmPassword" className="block text-gray-300 font-medium mb-2">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                    placeholder="Confirm your password"
                  />
                </motion.div>
              )}

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 text-lg font-bold rounded-lg hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-blue-500/30 relative overflow-hidden"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
              >
                {isLoading ? 'Processing...' : isLogin ? 'Sign In' : 'Create Account'}
              </motion.button>
            </motion.form>
          </AnimatePresence>

          {isLogin && (
            <div className="text-center mt-6">
              <Link to="/forgot-password" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm">
                Forgot your password?
              </Link>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-center text-gray-400 mb-4">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </p>
            <button
              type="button"
              onClick={toggleMode}
              className="w-full text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
            >
              {isLogin ? 'Create Account' : 'Sign In'}
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-center text-gray-400 text-sm mb-4">Or continue with</p>
            <div className="flex space-x-4">
              <motion.button 
                onClick={handleGoogleLogin}
                className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fab fa-google mr-2"></i>
                Google
              </motion.button>
              <motion.button 
                onClick={handleGithubLogin}
                className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fab fa-github mr-2"></i>
                GitHub
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            By signing up, you agree to our{' '}
            <Link to="/terms" className="text-blue-400 hover:text-blue-300">Terms of Service</Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-blue-400 hover:text-blue-300">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
