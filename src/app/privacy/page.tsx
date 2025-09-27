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
              <div className="text-center mb-8">
                <p className="text-gray-600 mb-2"><strong>制定日：2025年9月27日</strong></p>
                <p className="text-gray-600"><strong>最終更新日：2025年9月27日</strong></p>
              </div>

              <p className="text-gray-700 mb-8">
                合同会社LAIV（以下「当社」といいます）は、AI技術を活用したサービスを提供する企業として、お客様の個人情報の保護を最重要課題と認識し、以下のとおりプライバシーポリシーを定めます。
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">1. 個人情報の定義</h2>
                <p className="text-gray-700 mb-4">
                  本ポリシーにおける「個人情報」とは、個人情報保護法に定める個人情報をいい、以下を含みます：
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>氏名、住所、電話番号、メールアドレス等により特定の個人を識別できる情報</li>
                  <li>アカウント情報と紐付いたサービス利用履歴・コンテンツ生成履歴</li>
                  <li>AIサービス利用時の入力データ（プロンプト、アップロードファイル等）で個人を識別できるもの</li>
                  <li>学習・進捗データで個人を識別できるもの</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  また、「個人関連情報」（個人情報以外の個人に関する情報）として以下を取り扱います：
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>Cookie・端末識別子等のデバイス情報</li>
                  <li>IPアドレス・アクセスログ（単体では個人を特定できないもの）</li>
                  <li>匿名化されたサービス利用統計データ</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">2. 個人情報の取得方法</h2>
                <p className="text-gray-700 mb-4">
                  当社は、以下の方法により個人情報を取得いたします：
                </p>

                <h3 className="text-xl font-semibold text-black mb-3">2.1 直接取得</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>サービス登録時の入力情報</li>
                  <li>お問い合わせフォームからの送信情報</li>
                  <li>セミナー・イベント参加時の登録情報</li>
                  <li>人材紹介サービス利用時の履歴書・職務経歴書</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">2.2 自動取得</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>Webサイト閲覧時のCookie・トラッキング技術による情報</li>
                  <li>AIサービス利用時のログデータ</li>
                  <li>アクセス解析による利用状況データ</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">2.3 第三者からの取得</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>関連会社・提携先からの情報提供</li>
                  <li>公開情報の収集・分析</li>
                  <li>AI学習用データセットからの情報（法的根拠に基づく場合）</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">3. 個人情報の利用目的</h2>
                <p className="text-gray-700 mb-4">
                  当社は、取得した個人情報を以下の目的で利用いたします：
                </p>

                <h3 className="text-xl font-semibold text-black mb-3">3.1 基本的サービス提供</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>各種サービスの提供・運営・管理</li>
                  <li>お客様からのお問い合わせへの対応</li>
                  <li>料金決済・請求書発行</li>
                  <li>重要なお知らせ・連絡事項の通知</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">3.2 AI関連サービス</h3>
                <p className="text-gray-700 mb-2">
                  当社は<strong>生成AIサービスをAPI経由でのみ提供</strong>しており、以下の方針で運営いたします：
                </p>

                <h4 className="text-lg font-semibold text-black mb-2">企業向けAPI利用</h4>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>企業向けAI APIサービス（Microsoft Azure OpenAI、Anthropic Claude API、Google Vertex AI等）では、一般的に顧客データがモデルの学習に使用されません</li>
                  <li>API利用規約により、プロンプトとコンプリーションの学習目的での使用が制限されています</li>
                  <li>運用監視目的での短期間（通常30日以内）の一時保存のみ実施される場合があります</li>
                </ul>

                <h4 className="text-lg font-semibold text-black mb-2">学習データ保護の技術的措置</h4>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>エンタープライズグレードのAPI利用による保護</li>
                  <li>各AI事業者の標準的なゼロデータ保持ポリシーに依拠</li>
                  <li>学習非使用を明記するAI事業者のサービスを選択</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">4. 当社における学習データ利用</h2>
                <p className="text-gray-700 mb-4">
                  当社は以下の方針で運営いたします：
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li><strong>基本方針</strong>: ユーザーデータを当社独自のAI学習には原則使用いたしません</li>
                  <li><strong>外部API利用</strong>: 企業向けAPIサービスの学習非使用ポリシーに依拠</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">5. 個人情報の第三者提供</h2>
                <p className="text-gray-700 mb-4">
                  当社は、以下の場合を除き、ご本人の同意なく個人情報を提供することがあります：
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>法令に基づく場合</li>
                  <li>生命・身体・財産の保護のため緊急に必要な場合</li>
                  <li>公衆衛生・児童の健全育成のため特に必要な場合</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">5.3 外部AIサービス連携</h3>
                <p className="text-gray-700 mb-4">
                  当社は、以下の方針でAPI経由でのAIサービス連携を行います：
                </p>

                <h4 className="text-lg font-semibold text-black mb-2">企業向けAI APIサービス</h4>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>企業向け利用における顧客データの学習非使用ポリシーを採用するサービスを選定</li>
                  <li>エンタープライズグレードのセキュリティ・プライバシー保護を提供するサービスを利用</li>
                </ul>

                <h4 className="text-lg font-semibold text-black mb-2">主要な連携先AI事業者</h4>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>Microsoft（Azure OpenAI Service）</li>
                  <li>Anthropic（Claude API）</li>
                  <li>Google（Vertex AI）</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">6. Cookie・トラッキング技術</h2>

                <h3 className="text-xl font-semibold text-black mb-3">6.1 使用技術</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>Cookie（第1パーティ・第3パーティ）</li>
                  <li>ウェブビーコン・ピクセルタグ</li>
                  <li>ローカルストレージ・セッションストレージ</li>
                  <li>Google Analytics、Google Ads等の解析ツール</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">6.2 利用目的</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>サイト利用状況の分析・改善</li>
                  <li>適切な広告配信・コンテンツ表示</li>
                  <li>セキュリティ確保・不正アクセス防止</li>
                  <li>サービスのパーソナライゼーション</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">6.3 管理方法</h3>
                <p className="text-gray-700">
                  ブラウザ設定により無効化可能ですが、サービス機能の一部が制限される場合があります。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">7. 個人情報の保管・セキュリティ</h2>

                <h3 className="text-xl font-semibold text-black mb-3">7.1 安全管理措置</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>暗号化技術による保護</li>
                  <li>アクセス制御・認証システム</li>
                  <li>定期的なセキュリティ監査・脆弱性対策</li>
                  <li>従業員への教育・研修</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">7.2 保管期間</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li><strong>アカウントデータ</strong>: 退会から1年間</li>
                  <li><strong>AI学習データ</strong>: 利用停止から6ヶ月間（技術的制約により延長の場合あり）</li>
                  <li><strong>アクセスログ</strong>: 取得から3年間</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">8. 個人情報の開示・訂正・削除等</h2>

                <h3 className="text-xl font-semibold text-black mb-3">8.1 対象となる権利</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>個人情報の開示請求</li>
                  <li>訂正・追加・削除請求</li>
                  <li>利用停止・消去請求</li>
                  <li>第三者提供の停止請求</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">8.2 制限事項</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li><strong>技術的必要性</strong>: サービス提供に不可欠なデータの場合</li>
                  <li><strong>法的保管義務</strong>: 法令により保管が義務付けられている場合</li>
                  <li><strong>第三者の権利</strong>: 他のお客様の権利や利益を害するおそれがある場合</li>
                  <li><strong>過度な負担</strong>: 対応に著しく多大な費用・時間を要する場合</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">8.3 対応手続き</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>お問い合わせフォームにて受付</li>
                  <li>本人確認のための書類提出が必要</li>
                  <li>手数料：開示請求1件につき1,000円（税込）</li>
                  <li>回答期限：受付から原則2ヶ月以内（複雑な場合は延長の場合あり）</li>
                  <li>対応できない場合は理由を明記して回答いたします</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">9. 未成年者の保護</h2>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>16歳未満の方のサービス利用は保護者同意が必要</li>
                  <li>教育サービス利用時は特別な配慮を実施</li>
                  <li>子どもに不適切なコンテンツの生成防止措置</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">10. 個人情報の開示・訂正・削除等（続き）</h2>
                <p className="text-gray-700 mb-4">
                  前セクションに続き、以下の手続きを設けております：
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>迅速な対応を心がけ、可能な限り早期解決を図ります</li>
                  <li>対応状況の進捗報告を適宜実施いたします</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">11. AIサービス利用時の注意事項</h2>

                <h3 className="text-xl font-semibold text-black mb-3">11.1 プロンプト入力時の注意</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li><strong>個人情報の入力は避けてください</strong>（氏名、住所、電話番号等）</li>
                  <li>他人の個人情報・機密情報の入力は禁止</li>
                  <li><strong>API経由での利用</strong>: 企業向けAI事業者の学習非使用ポリシーに基づき運営</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">11.2 生成コンテンツのリスク</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>AI生成コンテンツに他者の個人情報が含まれる場合があります</li>
                  <li>商用利用前の事前確認を推奨</li>
                  <li>著作権・肖像権への配慮が必要</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">11.3 データ処理の透明性</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li><strong>学習データ利用</strong>: 企業向けAPI設定により原則非対象</li>
                  <li><strong>一時保存</strong>: 運用監視目的での短期間保存（通常30日以内）</li>
                  <li><strong>セキュリティ対策</strong>: 継続的改善とリスク軽減措置</li>
                  <li><strong>新規AIサービス</strong>: 導入時も同等の保護水準を適用</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">12. 苦情・相談窓口</h2>
                <p className="text-gray-700 mb-4">
                  個人情報の取扱いに関するお問い合わせは以下までご連絡ください：
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-gray-700">
                    <strong>合同会社LAIV 個人情報保護担当</strong><br />
                    お問い合わせフォーム: <a href="/contact" className="text-blue-600 hover:underline">https://www.laiv.jp/contact</a>
                  </p>
                </div>

                <h4 className="text-lg font-semibold text-black mb-2">重要なお知らせ</h4>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>複雑な案件については外部専門家と連携して対応いたします</li>
                  <li>回答に時間を要する場合がございますので、あらかじめご了承ください</li>
                  <li>緊急を要する案件は、お問い合わせフォームにて「緊急」と明記してご連絡ください</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">外部苦情処理機関</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>個人情報保護委員会（<a href="https://www.ppc.go.jp/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.ppc.go.jp/</a>）</li>
                  <li>各都道府県の消費生活センター</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">13. プライバシーポリシーの変更</h2>

                <h3 className="text-xl font-semibold text-black mb-3">13.1 変更手続き</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>法令変更・事業変更に応じて改訂</li>
                  <li>重要な変更は事前通知（30日前）</li>
                  <li>軽微な変更は当サイトでの公表のみ</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">13.2 変更履歴</h3>
                <p className="text-gray-700">
                  変更履歴は当サイトで確認できます。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">14. 適用法令・管轄</h2>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>本ポリシーは日本法に準拠</li>
                  <li>個人情報に関する紛争は東京地方裁判所を第一審の専属管轄とします</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">15. AI基本法・関連ガイドライン遵守</h2>
                <p className="text-gray-700">
                  当社は、AI基本法及び関連するガイドライン（AI事業者ガイドライン等）を遵守し、AIの適正利用と個人情報保護の両立に努めます。
                </p>
              </section>

              <div className="border-t border-gray-200 pt-8 mt-12">
                <h3 className="text-xl font-semibold text-black mb-4">制定・改訂履歴</h3>
                <p className="text-gray-600">
                  2025年9月27日: AI関連条項を追加した全面改訂版制定
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}