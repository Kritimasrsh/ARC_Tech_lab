import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  // We define the link object to distinguish between internal pages and section scrolls
  const links = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/#services' },
    { name: 'WORK', path: '/#work' },
    { name: 'GALLERY', path: '/#gallery' },
    { name: 'CONTACT', path: '/#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-white shadow-sm">
      
      {/* Logo and brand name */}
      <div className="flex items-center gap-3">
        <img 
          src="/arc.jpg" 
          alt="ARC Logo" 
          className="h-28 w-28 object-contain rounded-full" 
        />
        <span className="text-xl font-bold italic text-black"></span>
      </div>

      {/* Nav bar */}
      <div className="flex items-center">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className="px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 text-black hover:text-[#0E9A5E]"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Login and sign up buttons */}
      <div className="flex items-center gap-3">
        <button className="text-sm font-bold text-black hover:text-[#0E9A5E] transition-colors">
          Login
        </button>
        <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#0E9A5E] transition-all">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;