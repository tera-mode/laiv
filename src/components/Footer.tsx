'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20 max-w-7xl">
        <div className="text-center">
          <p className="text-base text-gray-500">
            © {currentYear} LAIV LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}