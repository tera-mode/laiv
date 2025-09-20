'use client';

export default function Contact() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Contact
          </h2>
        </div>

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
      </div>
    </section>
  );
}