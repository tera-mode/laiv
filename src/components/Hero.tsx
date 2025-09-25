'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden bg-white pt-16 lg:pt-20">
      <div className="container mx-auto px-6 lg:px-8 text-center max-w-7xl relative z-20 flex flex-col justify-center min-h-full">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black" style={{ color: '#000000' }}>
            Live your Life with AI
          </h1>
          <div className="flex justify-center">
            <Image
              src="/LAIV_logo.png"
              alt="LAIV"
              width={450}
              height={150}
              className="h-[92px] md:h-30 lg:h-36 w-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/20 via-gray-50/10 to-gray-100/20 pointer-events-none z-10"></div>
    </section>
  );
}