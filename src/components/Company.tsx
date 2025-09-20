'use client';

import SectionContainer from './common/SectionContainer';
import SectionTitle from './common/SectionTitle';

export default function Company() {
  return (
    <SectionContainer>
      <SectionTitle>
        Company
      </SectionTitle>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-black mb-3">会社名</h3>
              <p className="text-gray-700">合同会社LAIV</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black mb-3">事業内容</h3>
              <p className="text-gray-700">AIを活用したウェブサービスの開発・運営</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black mb-3">住所</h3>
              <p className="text-gray-700">
                〒104-0061<br />
                東京都中央区銀座1-12-4 N&E BLD.7階
              </p>
            </div>
          </div>
      </div>
    </SectionContainer>
  );
}