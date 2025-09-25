'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20 max-w-7xl">
        <div className="text-center space-y-4">
          <div className="flex justify-center space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              利用規約
            </Link>
          </div>
          <p className="text-base text-gray-500">
            © {currentYear} LAIV LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}