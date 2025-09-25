'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
                利用規約
              </h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">第1条（適用範囲）</h2>
                <p className="text-gray-700 mb-4">
                  本利用規約（以下「本規約」）は、株式会社LAIV（以下「当社」）が提供するサービス（以下「本サービス」）の利用条件を定めるものです。利用者は本規約に同意の上、本サービスをご利用ください。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">第2条（利用登録）</h2>
                <p className="text-gray-700 mb-4">
                  本サービスの利用を希望する者は、当社の定める手続きにより利用登録を行うものとします。当社は、登録希望者が以下に該当する場合、登録を承認しないことがあります：
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>本規約に違反するおそれがあると認められる場合</li>
                  <li>登録事項に虚偽の記載がある場合</li>
                  <li>その他、当社が不適切と判断した場合</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">第3条（禁止事項）</h2>
                <p className="text-gray-700 mb-4">
                  利用者は、本サービスの利用にあたり、以下の行為を行ってはなりません：
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>法令または公序良俗に違反する行為</li>
                  <li>犯罪行為に関連する行為</li>
                  <li>当社のサーバーまたはネットワークの機能を破壊する行為</li>
                  <li>本サービスの運営を妨害する行為</li>
                  <li>他の利用者に関する個人情報等を収集する行為</li>
                  <li>その他、当社が不適切と判断する行為</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">第4条（本サービスの提供の停止等）</h2>
                <p className="text-gray-700 mb-4">
                  当社は、以下の場合には、利用者に事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします：
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                  <li>地震、落雷、火災等の天災により、本サービスの提供が困難となった場合</li>
                  <li>その他、当社が本サービスの提供が困難と判断した場合</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">第5条（利用制限および登録抹消）</h2>
                <p className="text-gray-700 mb-4">
                  当社は、利用者が以下に該当する場合には、事前の通知なく、利用者に対して本サービスの全部もしくは一部の利用を制限し、または利用者としての登録を抹消することができるものとします：
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>本規約のいずれかの条項に違反した場合</li>
                  <li>登録事項に虚偽の事実があることが判明した場合</li>
                  <li>その他、当社が本サービスの利用を適当でないと判断した場合</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">第6条（免責事項）</h2>
                <p className="text-gray-700 mb-4">
                  当社は、本サービスに起因して利用者に生じた損害について、一切の責任を負いません。ただし、当社の故意または重大な過失による場合はこの限りではありません。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">第7条（サービス内容の変更等）</h2>
                <p className="text-gray-700 mb-4">
                  当社は、利用者に通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによって利用者に生じた損害について一切の責任を負いません。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">第8条（利用規約の変更）</h2>
                <p className="text-gray-700 mb-4">
                  当社は必要と判断した場合には、利用者に通知することなくいつでも本規約を変更することができるものとします。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">第9条（準拠法・裁判管轄）</h2>
                <p className="text-gray-700 mb-4">
                  本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、東京地方裁判所を専属的合意管轄とします。
                </p>
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