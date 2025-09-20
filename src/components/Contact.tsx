'use client';

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
                <p className="text-gray-700 mb-4">
                  AIを活用したウェブサービスの開発・運営についてのご相談やお問い合わせは、お気軽にご連絡ください。
                </p>
              </div>

            </div>
          </div>
      </div>
    </SectionContainer>
  );
}