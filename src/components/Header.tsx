'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import Image from 'next/image';
import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`bg-white/90 backdrop-blur-md border-b border-gray-100 z-50 mx-auto w-full rounded-none shadow-sm ${className}`}>
      <Container className="!px-6">
        <nav className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">
              {siteDetails.siteName}
            </span>
          </Link>

          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? (
                <HiOutlineXMark className="text-gray-700 w-6 h-6" />
              ) : (
                <HiBars3 className="text-gray-700 w-6 h-6" />
              )}
            </button>
          </div>

          <ul className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link 
                  href={item.url} 
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-base"
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#cta"
                className="medical-button-primary text-sm"
              >
                Join Pilot Program
              </Link>
            </li>
          </ul>
        </nav>

        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4">
            {menuItems.map((item) => (
              <Link 
                key={item.text} 
                href={item.url} 
                className="block text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.text}
              </Link>
            ))}
            <Link
              href="#cta"
              className="block text-center medical-button-primary w-full text-sm"
              onClick={() => setIsOpen(false)}
            >
              Join Pilot Program
            </Link>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;