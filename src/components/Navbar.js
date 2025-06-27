import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn") === "true";
    setIsLoggedIn(loggedIn);
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = () => {
    localStorage.setItem("loggedIn", "false");
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md shadow-md h-20">
      <div className="max-w-7xl mx-auto h-full px-4 flex justify-between items-center">

        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Langify Logo" className="w-10 h-10 rounded-full border border-purple-500/30" />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            LANGIFY
          </span>
        </div>

        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="md:hidden text-white text-2xl z-50">
          <i className="fa-solid fa-bars" />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-4 text-sm sm:text-base">
          {[
            { to: '/', label: 'Home', icon: 'fa-house' },
            { to: '/live-translator', label: 'Live Translator', icon: 'fa-language', highlight: true },
            { to: '/features', label: 'Features', icon: 'fa-star' },
            { to: '/how-it-works', label: 'How It Works', icon: 'fa-gears' },
            { to: '/about', label: 'About Us', icon: 'fa-user' },
            { to: '/contact', label: 'Contact', icon: 'fa-envelope' },
          ].map(({ to, label, icon, highlight }) => (
            <li key={to}>
              <Link
                to={to}
                className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                  highlight
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <i className={`fa-solid ${icon}`} />
                {label}
              </Link>
            </li>
          ))}

          {!isLoggedIn ? (
            <li>
              <Link
                to="/login"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow hover:scale-105 transition-transform"
              >
                <i className="fa-solid fa-right-to-bracket" />
                Login
              </Link>
            </li>
          ) : (
            <li className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow">
                <i className="fa-solid fa-user" />
              </button>
              <ul className="absolute hidden group-hover:block bg-black text-white w-44 shadow-lg rounded-lg overflow-hidden top-full right-0 z-40">
                <li>
                  <Link to="/dashboard" className="block px-4 py-3 hover:bg-white/10">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button onClick={logout} className="block w-full text-left px-4 py-3 hover:bg-white/10">
                    Logout
                  </button>
                </li>
              </ul>
            </li>
          )}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden fixed top-20 left-0 w-full bg-black text-white flex flex-col gap-4 px-6 py-6 z-40 shadow-lg rounded-b-xl text-base">
          {[
            { to: '/', label: 'Home', icon: 'fa-house' },
            { to: '/live-translator', label: 'Live Translator', icon: 'fa-language', highlight: true },
            { to: '/features', label: 'Features', icon: 'fa-star' },
            { to: '/how-it-works', label: 'How It Works', icon: 'fa-gears' },
            { to: '/about', label: 'About Us', icon: 'fa-user' },
            { to: '/contact', label: 'Contact', icon: 'fa-envelope' },
          ].map(({ to, label, icon, highlight }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={toggleMenu}
                className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                  highlight
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <i className={`fa-solid ${icon}`} />
                {label}
              </Link>
            </li>
          ))}

          {!isLoggedIn ? (
            <li>
              <Link
                to="/login"
                onClick={toggleMenu}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow"
              >
                <i className="fa-solid fa-right-to-bracket" />
                Login
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link
                  to="/dashboard"
                  onClick={toggleMenu}
                  className="block px-4 py-2 hover:bg-white/10 rounded"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    logout();
                    toggleMenu();
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-white/10 rounded"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
