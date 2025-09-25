'use client';

import Link from 'next/link';
import SectionContainer from './common/SectionContainer';
import SectionTitle from './common/SectionTitle';

export default function Contact() {
  return (
    <SectionContainer background="gray" id="contact">
      <SectionTitle>
        Contact
      </SectionTitle>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-black mb-3">お問い合わせ</h3>
              </div>
              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors duration-200 font-medium"
                >
                  お問い合わせフォーム
                </Link>
              </div>
            </div>
          </div>
      </div>
    </SectionContainer>
  );
}