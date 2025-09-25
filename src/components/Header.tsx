'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/LAIV_logo.png"
                alt="LAIV"
                width={120}
                height={40}
                className="h-8 lg:h-10 w-auto"
                priority
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('vision')}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              VISION
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              SERVICES
            </button>
            <button
              onClick={() => scrollToSection('company')}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              COMPANY
            </button>
            <Link
              href="/contact"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              CONTACT
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}