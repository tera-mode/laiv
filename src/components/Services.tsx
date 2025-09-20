'use client';

import { ExternalLink } from 'lucide-react';

export default function Services() {
  const services = [
    {
      name: 'AIくらべ',
      description: '複数のAIサービスを簡単に比較・検討',
      url: 'https://ai-kurabe.vercel.app/',
      details: ''
    },
    {
      name: 'Weekend President',
      description: 'サラリーマンの週末起業をAIがサポート',
      url: 'https://www.weekend-president.com/',
      details: ''
    }
  ];

  return (
    <section className="py-24 lg:py-40 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 lg:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-8">
              SERVICES
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
              AIを活用したウェブサービスの開発・運営を行っています
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-3xl p-10 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 mt-1" />
                </div>

                <div>
                  <p className="text-lg font-medium text-gray-700">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                    サイトを見る →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}