'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
                プライバシーポリシー
              </h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">1. 個人情報の取得について</h2>
                <p className="text-gray-700 mb-4">
                  当社は、適法かつ公正な手段によって個人情報を取得いたします。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">2. 個人情報の利用目的</h2>
                <p className="text-gray-700 mb-4">
                  当社は、取得した個人情報を以下の目的で利用いたします：
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>サービスの提供・運営</li>
                  <li>お客様からのお問い合わせに対する回答</li>
                  <li>サービスに関する重要なお知らせ</li>
                  <li>サービスの改善・品質向上</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">3. 個人情報の第三者提供</h2>
                <p className="text-gray-700 mb-4">
                  当社は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">4. 個人情報の管理</h2>
                <p className="text-gray-700 mb-4">
                  当社は、個人情報の漏洩、滅失、毀損等を防止するため、適切な安全管理措置を講じます。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">5. 個人情報の開示・訂正等</h2>
                <p className="text-gray-700 mb-4">
                  ご本人から個人情報の開示、訂正、削除等の求めがあった場合、当社規定の手続きに従い対応いたします。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">6. Cookieの使用について</h2>
                <p className="text-gray-700 mb-4">
                  当サイトでは、サービス向上のためCookieを使用する場合があります。Cookieの使用を希望しない場合は、ブラウザの設定で無効にすることができます。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">7. プライバシーポリシーの変更</h2>
                <p className="text-gray-700 mb-4">
                  本プライバシーポリシーは、法令の変更等により改訂することがあります。変更した場合は、当サイトに掲載いたします。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">8. お問い合わせ</h2>
                <p className="text-gray-700 mb-4">
                  個人情報の取扱いに関するお問い合わせは、以下の窓口までご連絡ください。
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>株式会社LAIV</strong><br />
                    個人情報保護担当者<br />
                    お問い合わせフォーム: <a href="/contact" className="text-blue-600 hover:underline">/contact</a>
                  </p>
                </div>
              </section>

              <div className="text-right text-gray-600 text-sm mt-12">
                制定日：2024年12月1日
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}