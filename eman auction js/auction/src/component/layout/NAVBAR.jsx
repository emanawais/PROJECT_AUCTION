import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { FaGavel, FaSearch, FaBell, FaHeart, FaBars, FaTimes } from 'react-icons/fa';

function NAVBAR() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  // Close mobile menu when screen size increases
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
        setSearchOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
      setMobileMenuOpen(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and mobile menu button */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700 mr-2 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <FaGavel className="text-amber-600 text-2xl" />
              <span className="text-xl font-bold text-gray-800">BidMaster</span>
            </Link>
          </div>

          {/* Desktop Navigation - Only show when logged in */}
          {currentUser && (
            <div className="hidden md:flex space-x-8 ml-10">
              <Link to="/live-auctions" className="text-gray-700 hover:text-amber-600 px-3 py-2 font-medium">Live Auctions</Link>
              <Link to="/categories" className="text-gray-700 hover:text-amber-600 px-3 py-2 font-medium">Categories</Link>
              <Link to="/how-it-works" className="text-gray-700 hover:text-amber-600 px-3 py-2 font-medium">How It Works</Link>
              <Link to="/sell-with-us" className="text-gray-700 hover:text-amber-600 px-3 py-2 font-medium">Sell With Us</Link>
            </div>
          )}

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Search button (mobile) */}
            {currentUser && (
              <button 
                className="md:hidden text-gray-600 hover:text-amber-600"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <FaSearch className="h-5 w-5" />
              </button>
            )}

            {/* Search bar (desktop) */}
            {currentUser && (
              <div className="hidden md:block relative">
                <input 
                  type="text" 
                  placeholder="Search auctions..." 
                  className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500" 
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
            )}

            {/* Auth and user profile */}
            <div className="flex items-center space-x-3">
              {currentUser ? (
                <>
                  <button className="p-2 text-gray-600 hover:text-amber-600 relative">
                    <FaBell className="text-xl" />
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
                  </button>
                  <button className="p-2 text-gray-600 hover:text-amber-600">
                    <FaHeart className="text-xl" />
                  </button>
                  <div className="hidden md:block">
                    <Link to="/dashboard" className="flex items-center space-x-2 border border-gray-200 rounded-full px-3 py-1 hover:bg-gray-50">
                      <img 
                        src={currentUser.photoURL || "https://randomuser.me/api/portraits/men/32.jpg"} 
                        alt="User" 
                        className="w-8 h-8 rounded-full" 
                      />
                      <span className="text-sm font-medium">My Account</span>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="hidden md:block text-sm font-medium text-gray-700 hover:text-amber-600 px-3 py-1"
                  >
                    Login
                  </Link>
                  <Link 
                    to="/signup" 
                    className="hidden md:block bg-amber-600 hover:bg-amber-700 text-white px-4 py-1.5 rounded-md text-sm font-medium"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile search bar (appears when search button clicked) */}
        {currentUser && searchOpen && (
          <div className="md:hidden pb-3 px-2">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search auctions..." 
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500" 
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-gray-50 transition-all duration-300 ease-in-out`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {currentUser ? (
            <>
              <Link 
                to="/live-auctions" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-100"
              >
                Live Auctions
              </Link>
              <Link 
                to="/categories" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-100"
              >
                Categories
              </Link>
              <Link 
                to="/how-it-works" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-100"
              >
                How It Works
              </Link>
              <Link 
                to="/sell-with-us" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-100"
              >
                Sell With Us
              </Link>
              <Link 
                to="/dashboard" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-100"
              >
                My Account
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link 
                to="/login" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-100"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-amber-600 hover:bg-amber-700"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NAVBAR;