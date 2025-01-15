"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [theme, setTheme] = useState('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black';
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`shadow-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto flex items-center justify-between py-6 px-6">
        <Link href="#about" className="text-xl font-semibold tracking-wide hover:text-gray-600 transition-colors">
          BRENOLUIZDEV
        </Link>
        <nav className="hidden md:flex space-x-10 text-xl font-semibold tracking-wide">
          <Link href="#projects" className="hover:text-gray-600 transition-colors">
            PROJETOS
          </Link>
          <Link href="#skills" className="hover:text-gray-600 transition-colors">
            SKILLS
          </Link>
          <Link href="#contact" className="hover:text-gray-600 transition-colors">
            CONTATO
          </Link>
        </nav>
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-white shadow-md`}>
          <Link href="#projects" className="block px-4 py-2 hover:bg-gray-200 transition-colors">
            PROJETOS
          </Link>
          <Link href="#skills" className="block px-4 py-2 hover:bg-gray-200 transition-colors">
            SKILLS
          </Link>
          <Link href="#contact" className="block px-4 py-2 hover:bg-gray-200 transition-colors">
            CONTATO
          </Link>
        </div>
        {/* <button
          onClick={toggleTheme}
          className="ml-4 px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button> */}
      </div>
    </header>
  );
};

export default Header;
