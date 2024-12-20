import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold">
            MyLogo
          </Link>
        </div>
        <nav className="flex space-x-4">
          <Link href="/" className="text-sm hover:text-gray-400 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm hover:text-gray-400 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm hover:text-gray-400 transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;