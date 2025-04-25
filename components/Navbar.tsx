'use client'
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-3">
          <div className="h-16 w-16 bg-green-600 rounded-md flex items-center justify-center">
           <img src="/logo.jpeg" alt="" />
          </div>
          <h1 className="md:text-xl md:flex hidden text-sm font-bold text-green-600">TRANSPORTER <span className="text-black">BIKERS</span> <span className="text-gray-600">CLUB</span></h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900 transition duration-300">Home</Link>
          <Link href="/events" className="text-gray-600 hover:text-gray-900 transition duration-300 ">Events</Link>
          <Link href="/partners" className="text-gray-600 hover:text-gray-900 transition duration-300">Partners</Link>
          <Link href="/registration" className="text-gray-600 hover:text-gray-900 transition duration-300">Registration</Link>
        </div>

        {/* Contact Button */}
        <div className="hidden md:flex items-center">
          <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-300 shadow-sm">
            Contact Us
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-4 absolute left-4 right-4">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition duration-300 px-3 py-2 rounded-md hover:bg-gray-100">Home</Link>
            <Link href="/events" className="text-green-600 font-medium border-l-4 border-green-600 bg-green-50 px-3 py-2 rounded-md">Events</Link>
            <Link href="/partners" className="text-gray-600 hover:text-gray-900 transition duration-300 px-3 py-2 rounded-md hover:bg-gray-100">Partners</Link>
            <Link href="/registration" className="text-gray-600 hover:text-gray-900 transition duration-300 px-3 py-2 rounded-md hover:bg-gray-100">Registration</Link>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300 shadow-sm flex items-center justify-center">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;