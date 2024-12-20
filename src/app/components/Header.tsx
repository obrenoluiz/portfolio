import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white text-black shadow-md">
      <div className="container mx-auto flex items-center justify-between py-6 px-6">
        <Link href="#about" className="text-xl font-semibold tracking-wide hover:text-gray-600 transition-colors">
          BRENOLUIZDEV
        </Link>
        <nav className="flex space-x-10 text-xl font-semibold tracking-wide">
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
      </div>
    </header>
  );
};

export default Header;