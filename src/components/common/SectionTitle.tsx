'use client';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <div className={`text-center mb-16 lg:mb-20 ${className}`}>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-8">
        {children}
      </h2>
    </div>
  );
}