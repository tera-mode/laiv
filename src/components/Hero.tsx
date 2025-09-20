'use client';

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden bg-white pt-16 lg:pt-20">
      <div className="container mx-auto px-6 lg:px-8 text-center max-w-7xl relative z-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-black" style={{ color: '#000000' }}>
            Live your Life with AI
          </h1>
        </div>
      </div>

      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/20 via-gray-50/10 to-gray-100/20 pointer-events-none z-10"></div>
    </section>
  );
}