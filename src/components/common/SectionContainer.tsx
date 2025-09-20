'use client';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray';
}

export default function SectionContainer({
  children,
  className = '',
  background = 'white'
}: SectionContainerProps) {
  const bgClass = background === 'gray' ? 'bg-gray-50' : 'bg-white';

  return (
    <section className={`py-24 lg:py-40 ${bgClass} ${className}`}>
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
}