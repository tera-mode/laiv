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
              <div className="text-center mb-8">
                <p className="text-gray-600 mb-2"><strong>制定日：2025年9月27日</strong></p>
                <p className="text-gray-600"><strong>最終更新日：2025年9月27日</strong></p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">第1条（適用範囲）</h2>
                <p className="text-gray-700 mb-4">
                  本利用規約（以下「本規約」といいます）は、合同会社LAIV（以下「当社」といいます）が提供する以下のサービス（以下総称して「本サービス」といいます）の利用に関して適用されます：
                </p>
                <ol className="list-decimal ml-6 text-gray-700 space-y-2 mb-4">
                  <li><strong>「AIくらべ」</strong>：複数のAIサービスを簡単に比較・検討できるプラットフォームサービス</li>
                  <li><strong>「Weekend President」</strong>：サラリーマンの週末起業をAIがサポートするサービス</li>
                  <li><strong>その他当社が提供するAI関連サービス</strong></li>
                </ol>
                <p className="text-gray-700">
                  本規約は、本サービスを利用するすべてのユーザー（以下「利用者」といいます）に適用されます。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">第2条（定義）</h2>
                <p className="text-gray-700 mb-4">
                  本規約において使用する用語の定義は以下のとおりです：
                </p>
                <ol className="list-decimal ml-6 text-gray-700 space-y-2">
                  <li><strong>「利用者」</strong>: 本サービスを利用する個人または法人</li>
                  <li><strong>「ユーザーコンテンツ」</strong>: 利用者が本サービスに投稿・アップロード・入力したすべての情報・データ</li>
                  <li><strong>「生成コンテンツ」</strong>: 本サービスのAI機能により生成されたテキスト・画像・動画等</li>
                  <li><strong>「情報コンテンツ」</strong>: 本サービスで提供される比較情報・分析結果・推奨情報等</li>
                  <li><strong>「知的財産権」</strong>: 著作権、特許権、実用新案権、商標権、意匠権その他の知的財産権</li>
                  <li><strong>「個人情報」</strong>: 個人情報保護法に定める個人情報</li>
                  <li><strong>「プロンプト」</strong>: AI機能に対する指示・入力内容</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">第3条（利用登録・アカウント管理）</h2>

                <h3 className="text-xl font-semibold text-black mb-3">第1項（利用登録）</h3>
                <p className="text-gray-700 mb-4">
                  本サービスの利用にあたり、当社が指定する方法により利用登録を行うものとします。利用登録は以下の条件を満たす場合に完了します：
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>当社所定の情報を正確に入力すること</li>
                  <li>本規約および関連ポリシーに同意すること</li>
                  <li>当社が登録を承認すること</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">第2項（利用者の義務）</h3>
                <p className="text-gray-700 mb-4">利用者は以下の義務を負います：</p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>登録情報を正確かつ最新に保つこと</li>
                  <li>アカウント情報を適切に管理し、第三者に使用させないこと</li>
                  <li>アカウントの不正使用を発見した場合は直ちに当社に報告すること</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">第3項（利用資格）</h3>
                <p className="text-gray-700 mb-4">以下のいずれかに該当する場合、本サービスを利用できません：</p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>13歳未満の方（親権者の同意がある場合を除く）</li>
                  <li>過去に本規約違反により利用停止処分を受けた方</li>
                  <li>反社会的勢力またはそれに関係する方</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">第4条（サービスの提供・変更・停止）</h2>

                <h3 className="text-xl font-semibold text-black mb-3">第1項（サービス提供）</h3>
                <p className="text-gray-700 mb-4">
                  当社は、利用者に対して本サービスを提供します。ただし、サービス内容・機能・料金体系等は予告なく変更または追加される場合があります。
                </p>

                <h3 className="text-xl font-semibold text-black mb-3">第2項（サービスの一時停止・中断）</h3>
                <p className="text-gray-700 mb-4">
                  当社は、以下の場合にサービスの全部または一部を一時停止・中断することがあります：
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>システムメンテナンス・更新のため</li>
                  <li>急激なアクセス集中により正常な運営が困難な場合</li>
                  <li>自然災害・停電・通信障害等の不可抗力</li>
                  <li>その他運営上または技術上必要と判断した場合</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">第3項（サービス内容の変更・終了）</h3>
                <p className="text-gray-700">
                  当社は、事業方針の変更その他の理由により、30日前の事前通知をもってサービス内容を変更し、または本サービスを終了することができます。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">第5条（AI機能・生成コンテンツの取り扱い）</h2>

                <h3 className="text-xl font-semibold text-black mb-3">第1項（AI機能の利用）</h3>
                <p className="text-gray-700 mb-4">
                  本サービスでは、第三者が開発したAIモデル・技術を含む各種AI機能を提供します。AI機能の精度・結果について、当社は保証いたしません。
                </p>

                <h3 className="text-xl font-semibold text-black mb-3">第2項（プロンプト入力時の注意事項）</h3>
                <p className="text-gray-700 mb-4">
                  利用者は、AI機能利用時に以下を遵守するものとします：
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li><strong>個人情報の入力禁止</strong>：自己または第三者の氏名・住所・電話番号・メールアドレス等の入力禁止</li>
                  <li><strong>機密情報の入力禁止</strong>：企業秘密・営業秘密・未公開情報等の入力禁止</li>
                  <li><strong>違法・有害情報の入力禁止</strong>：法令に違反する内容・第三者の権利を侵害する内容の入力禁止</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">第3項（情報コンテンツの取り扱い）</h3>
                <p className="text-gray-700 mb-4">
                  利用者は、本サービスが提供する情報コンテンツについて以下を理解するものとします：
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>提供される情報は参考情報であり、最終的な判断・選択・契約は利用者の責任で行うこと</li>
                  <li>比較対象または推奨される外部サービス・手法等の最新情報は、各提供者の公式情報で確認すること</li>
                  <li>一般的な情報提供であり、個別具体的な専門的助言ではないこと</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">第4項（生成コンテンツの権利・責任）</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li><strong>権利帰属</strong>：AI機能により生成されたコンテンツの著作権その他の権利は利用者に帰属します</li>
                  <li><strong>利用者責任</strong>：生成コンテンツの利用は利用者の責任で行うものとし、第三者との紛争について当社は責任を負いません</li>
                  <li><strong>同一性の非保証</strong>：同一または類似の入力により、他の利用者が同一または類似のコンテンツを生成する可能性があります</li>
                  <li><strong>事前確認義務</strong>：商用利用前に著作権・肖像権・商標権等の権利侵害がないか確認すること</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">第5項（情報の正確性・最新性）</h3>
                <p className="text-gray-700 mb-4">
                  本サービスで提供される情報コンテンツの正確性・最新性・完全性について当社は保証せず、利用者は外部サービス提供者の公式情報を確認し、必要に応じて専門家への相談を行う責任を負います。
                </p>

                <h3 className="text-xl font-semibold text-black mb-3">第6項（AI学習データの取り扱い）</h3>
                <p className="text-gray-700">
                  当社は、外部AIサービスのAPI経由でサービスを提供しており、これらのサービスでは一般的に利用者データが学習に使用されません。詳細は当社プライバシーポリシーをご確認ください。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">第6条（禁止事項）</h2>
                <p className="text-gray-700 mb-4">
                  利用者は、本サービスの利用にあたり以下の行為を行ってはなりません：
                </p>

                <h3 className="text-xl font-semibold text-black mb-3">第1項（法令・権利侵害関連）</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>法令・条例・規則に違反する行為</li>
                  <li>第三者の知的財産権・肖像権・プライバシー・名誉・信用を侵害する行為</li>
                  <li>第三者を誹謗中傷し、または名誉を毀損する行為</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">第2項（システム・セキュリティ関連）</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>本サービスのサーバー・ネットワークに過度な負荷をかける行為</li>
                  <li>不正アクセス・ハッキング・クラッキング行為</li>
                  <li>ウイルス・マルウェア等の有害なプログラムの送信・配布</li>
                  <li>リバースエンジニアリング・解析・複製行為</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">第3項（情報・コンテンツ関連）</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>虚偽・誤解を招く情報の発信</li>
                  <li>当社が提供する情報コンテンツの無断転載・再配布</li>
                  <li>専門的助言（法律・税務・会計等）を装った情報提供</li>
                  <li>他の利用者の利用を妨害する行為</li>
                  <li>本サービスと競合するサービスの開発・提供への利用</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">第4項（AI機能悪用関連）</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>生成AIを用いたディープフェイク・なりすまし等の悪意ある利用</li>
                  <li>大量の自動生成による本サービスの濫用</li>
                  <li>生成コンテンツを用いた詐欺・犯罪行為</li>
                  <li>通常の利用範囲を著しく超える過度なAI機能の利用</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">第5項（その他）</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>反社会的勢力への利益供与</li>
                  <li>公序良俗に反する行為</li>
                  <li>その他当社が不適切と判断する行為</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">第7条（利用制限・停止）</h2>

                <h3 className="text-xl font-semibold text-black mb-3">第1項（利用制限）</h3>
                <p className="text-gray-700 mb-4">
                  当社は、利用者が以下のいずれかに該当する場合、事前通知なくその利用者による本サービスの利用を制限し、または停止することができます：
                </p>

                <h4 className="text-lg font-semibold text-black mb-2">1. 即時制限事由</h4>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>本規約に違反した場合</li>
                  <li>登録情報に虚偽があることが判明した場合</li>
                  <li>料金支払いを30日以上滞納した場合</li>
                  <li>反社会的勢力であると判明した場合</li>
                  <li>その他当社が本サービスの利用を適当でないと判断した場合</li>
                </ul>

                <h4 className="text-lg font-semibold text-black mb-2">2. 段階的制限措置</h4>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>警告・注意喚起</li>
                  <li>一部機能の利用制限</li>
                  <li>一定期間の利用停止</li>
                  <li>無期限の利用停止・退会処理</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">第2項（制限時の措置）</h3>
                <p className="text-gray-700">
                  利用制限・停止により利用者に生じた損害について、当社は責任を負いません。また、制限期間中の料金返還は行いません。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">第8条（知的財産権）</h2>

                <h3 className="text-xl font-semibold text-black mb-3">第1項（当社の知的財産権）</h3>
                <p className="text-gray-700 mb-4">
                  本サービスに関する知的財産権（商標・ロゴ・デザイン・システム・プログラム・ドキュメント等）は、当社または正当な権利者に帰属します。
                </p>

                <h3 className="text-xl font-semibold text-black mb-3">第2項（利用者の知的財産権）</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li><strong>ユーザーコンテンツ</strong>：利用者が作成・投稿したコンテンツの権利は利用者に帰属します</li>
                  <li><strong>生成コンテンツ</strong>：AI機能により生成されたコンテンツの権利は利用者に帰属します</li>
                  <li><strong>利用許諾</strong>：利用者は、当社に対し本サービス提供に必要な範囲で、ユーザーコンテンツを使用する非独占的ライセンスを許諾します</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">第3項（第三者の知的財産権）</h3>
                <p className="text-gray-700">
                  利用者は、第三者の知的財産権を侵害しないよう注意し、侵害が発生した場合は自己の責任で解決するものとします。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">第9条（個人情報・プライバシー）</h2>
                <p className="text-gray-700">
                  個人情報の取り扱いについては、当社プライバシーポリシー（<a href="/privacy" className="text-blue-600 hover:underline">https://www.laiv.jp/privacy</a>）に定めるところによります。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">第10条（料金・支払い）</h2>

                <h3 className="text-xl font-semibold text-black mb-3">第1項（料金）</h3>
                <p className="text-gray-700 mb-4">
                  本サービスの料金は、当社ウェブサイトに掲載する料金表に定めるとおりです。料金は事前通知により変更される場合があります。
                </p>

                <h3 className="text-xl font-semibold text-black mb-3">第2項（支払い）</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>料金の支払いは、当社指定の方法により行うものとします</li>
                  <li>支払期日を過ぎても支払いがない場合、遅延損害金（年14.6%）が発生します</li>
                  <li>一度支払われた料金は、当社の責めに帰すべき事由がある場合を除き返金いたしません</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">第3項（無料サービス）</h3>
                <p className="text-gray-700">
                  無料で提供されるサービスについて、当社は品質・継続性を保証せず、予告なく内容変更・提供停止することがあります。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">第11条（免責・責任制限）</h2>

                <h3 className="text-xl font-semibold text-black mb-3">第1項（免責事項）</h3>
                <p className="text-gray-700 mb-4">当社は、以下について一切責任を負いません：</p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>天災・停電・通信障害等の不可抗力による損害</li>
                  <li>利用者の機器・ソフトウェア・通信環境に起因する損害</li>
                  <li>第三者のサービス・システム障害による損害</li>
                  <li>利用者間または利用者と第三者間のトラブル</li>
                  <li>AI機能により生成されたコンテンツの内容・精度・適法性</li>
                  <li>提供される情報コンテンツの正確性・最新性・完全性・適用可能性</li>
                  <li>比較対象または推奨される外部サービス・手法等の品質・結果</li>
                  <li>利用者の意思決定・事業運営・契約締結等の結果</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">第2項（責任制限）</h3>
                <p className="text-gray-700 mb-4">
                  当社の債務不履行または不法行為により利用者に損害が生じた場合、当社の賠償責任は以下のとおり制限されます：
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li><strong>損害賠償の上限額</strong>：利用者が過去12ヶ月間に支払った料金総額</li>
                  <li><strong>間接損害の免責</strong>：逸失利益・機会損失・データ損失等の間接損害は賠償対象外</li>
                  <li><strong>故意・重過失の除外</strong>：当社の故意または重過失による場合はこの限りではありません</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">第3項（利用者責任）</h3>
                <p className="text-gray-700 mb-4">
                  利用者は、本サービスの利用により第三者に損害を与えた場合、自己の責任で解決し、当社に損害を与えた場合は賠償するものとします。
                </p>

                <h3 className="text-xl font-semibold text-black mb-3">第4項（APIコスト等の請求）</h3>
                <p className="text-gray-700">
                  利用者が本サービスを不適切に利用した結果、当社が第三者（AI事業者等）から過大な費用請求を受けた場合、当社は当該費用相当額を利用者に請求することができます。この場合の請求額については、前項の責任制限は適用されません。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">第12条（契約期間・解約）</h2>

                <h3 className="text-xl font-semibold text-black mb-3">第1項（契約期間）</h3>
                <p className="text-gray-700 mb-4">
                  本契約は、利用登録完了時に成立し、以下のいずれかの事由が生じるまで継続します：
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>利用者による解約</li>
                  <li>当社による解約・利用停止</li>
                  <li>本サービスの終了</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">第2項（利用者による解約）</h3>
                <p className="text-gray-700 mb-4">
                  利用者は、当社所定の方法により、いつでも本契約を解約できます。解約に伴う料金返還は行いません。
                </p>

                <h3 className="text-xl font-semibold text-black mb-3">第3項（当社による解約）</h3>
                <p className="text-gray-700 mb-4">当社は、以下の場合に本契約を解約できます：</p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>利用者が本規約に重大な違反をした場合</li>
                  <li>料金滞納が60日以上継続した場合</li>
                  <li>利用者が反社会的勢力に該当することが判明した場合</li>
                  <li>その他契約を継続することが困難と認められる場合</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">第13条（秘密保持）</h2>

                <h3 className="text-xl font-semibold text-black mb-3">第1項（秘密情報の定義）</h3>
                <p className="text-gray-700 mb-4">
                  本サービス利用により知り得た当社の技術情報・営業情報その他の非公開情報を秘密情報とします。
                </p>

                <h3 className="text-xl font-semibold text-black mb-3">第2項（秘密保持義務）</h3>
                <p className="text-gray-700 mb-4">
                  利用者は、秘密情報を第三者に開示・漏洩してはならず、本サービス利用目的以外に使用してはなりません。
                </p>

                <h3 className="text-xl font-semibold text-black mb-3">第3項（存続期間）</h3>
                <p className="text-gray-700">
                  本条の義務は、本契約終了後も5年間存続します。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">第14条（サービス提供地域・輸出管理）</h2>

                <h3 className="text-xl font-semibold text-black mb-3">第1項（提供地域）</h3>
                <p className="text-gray-700 mb-4">
                  本サービスは、原則として日本国内向けに提供されます。海外からの利用については、各国の法令を遵守する責任は利用者が負います。
                </p>

                <h3 className="text-xl font-semibold text-black mb-3">第2項（輸出管理）</h3>
                <p className="text-gray-700">
                  利用者は、本サービスの利用にあたり、日本国および関係諸国の輸出管理法令を遵守するものとします。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">第15条（分離可能性・存続条項）</h2>

                <h3 className="text-xl font-semibold text-black mb-3">第1項（分離可能性）</h3>
                <p className="text-gray-700 mb-4">
                  本規約の一部が無効または執行不能と判断された場合でも、他の条項の有効性には影響しません。
                </p>

                <h3 className="text-xl font-semibold text-black mb-3">第2項（存続条項）</h3>
                <p className="text-gray-700 mb-4">以下の条項は、本契約終了後も有効に存続します：</p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>知的財産権に関する条項</li>
                  <li>秘密保持に関する条項</li>
                  <li>損害賠償・責任制限に関する条項</li>
                  <li>紛争解決に関する条項</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">第16条（規約の変更）</h2>

                <h3 className="text-xl font-semibold text-black mb-3">第1項（変更手続き）</h3>
                <p className="text-gray-700 mb-4">当社は、以下の場合に本規約を変更することができます：</p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>利用者の一般の利益に適合する場合</li>
                  <li>契約の目的に反せず、変更の必要性・内容の相当性がある場合</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">第2項（変更の通知・効力発生）</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li><strong>重要な変更</strong>：30日前までに当社ウェブサイトまたはメールで通知</li>
                  <li><strong>軽微な変更</strong>：当社ウェブサイトでの掲載により通知</li>
                  <li><strong>効力発生</strong>：通知に定めた日時から効力発生</li>
                  <li><strong>継続利用</strong>：変更後の利用は新規約への同意とみなします</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">第17条（紛争解決）</h2>

                <h3 className="text-xl font-semibold text-black mb-3">第1項（協議）</h3>
                <p className="text-gray-700 mb-4">
                  本サービスに関する紛争が生じた場合、当事者は誠実に協議による解決を図るものとします。
                </p>

                <h3 className="text-xl font-semibold text-black mb-3">第2項（準拠法・管轄）</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li><strong>準拠法</strong>：本規約は日本法に準拠します</li>
                  <li><strong>管轄裁判所</strong>：本規約に関する紛争については、東京地方裁判所を第一審の専属管轄裁判所とします</li>
                  <li><strong>消費者契約</strong>：利用者が消費者の場合、消費者契約法の定めにより消費者の住所地の裁判所も管轄権を有します</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">第3項（仲裁）</h3>
                <p className="text-gray-700">
                  当事者の合意により、一般社団法人日本商事仲裁協会の商事仲裁規則に基づく仲裁により紛争を解決することができます。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">第18条（言語・通知）</h2>

                <h3 className="text-xl font-semibold text-black mb-3">第1項（言語）</h3>
                <p className="text-gray-700 mb-4">
                  本規約は日本語を正文とします。他の言語に翻訳された場合、日本語版が優先されます。
                </p>

                <h3 className="text-xl font-semibold text-black mb-3">第2項（通知方法）</h3>
                <p className="text-gray-700 mb-4">当社から利用者への通知は、以下の方法により行います：</p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>登録メールアドレスへの送信</li>
                  <li>本サービス内での表示</li>
                  <li>当社ウェブサイトでの掲載</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">第3項（連絡先変更）</h3>
                <p className="text-gray-700">
                  利用者は、登録情報に変更があった場合、速やかに当社に通知するものとします。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">第19条（その他）</h2>

                <h3 className="text-xl font-semibold text-black mb-3">第1項（完全合意）</h3>
                <p className="text-gray-700 mb-4">
                  本規約は、本サービスに関する当社と利用者間の完全な合意を構成し、従前の合意に優先します。
                </p>

                <h3 className="text-xl font-semibold text-black mb-3">第2項（権利放棄）</h3>
                <p className="text-gray-700 mb-4">
                  当社が本規約に基づく権利を行使しない場合でも、権利を放棄したものとはみなされません。
                </p>

                <h3 className="text-xl font-semibold text-black mb-3">第3項（譲渡禁止）</h3>
                <p className="text-gray-700 mb-4">
                  利用者は、当社の事前の書面による承諾なく、本契約上の地位・権利義務を第三者に譲渡できません。
                </p>

                <h3 className="text-xl font-semibold text-black mb-3">第4項（事業譲渡）</h3>
                <p className="text-gray-700">
                  当社は、事業譲渡・会社分割・合併等により、本契約上の地位・権利義務を第三者に譲渡することができます。
                </p>
              </section>

              <div className="border-t border-gray-200 pt-8 mt-12">
                <h3 className="text-xl font-semibold text-black mb-4">制定・改訂履歴</h3>
                <p className="text-gray-600 mb-4">2025年9月27日: 制定</p>

                <h3 className="text-xl font-semibold text-black mb-4">お問い合わせ先</h3>
                <p className="text-gray-700 mb-4">
                  合同会社LAIV<br />
                  お問い合わせフォーム: <a href="/contact" className="text-blue-600 hover:underline">https://www.laiv.jp/contact</a>
                </p>

                <h3 className="text-xl font-semibold text-black mb-4">附則</h3>
                <p className="text-gray-600">
                  本規約は、2025年9月27日から施行します。
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