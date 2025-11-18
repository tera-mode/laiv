'use client';

import { useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { validateMessageContent, isSpamName, isSpamCompany } from '../../../utils/spamValidation';

export default function ServiceContactPage() {
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const services = [
    { value: 'furusona', label: 'ふるそな' },
    { value: 'weekend-president', label: 'Weekend President' },
    { value: 'ai-kurabe', label: 'AIくらべ' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    // フロントエンドでスパムバリデーション
    const messageError = validateMessageContent(formData.message);
    if (messageError) {
      setSubmitStatus({
        type: 'error',
        message: messageError,
      });
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (isSpamName(formData.name)) {
      setSubmitStatus({
        type: 'error',
        message: '入力内容をご確認ください',
      });
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (formData.company && isSpamCompany(formData.company)) {
      setSubmitStatus({
        type: 'error',
        message: '入力内容をご確認ください',
      });
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    try {
      const response = await fetch('/api/contact/service', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: result.message,
        });
        // フォームをリセット
        setFormData({
          service: '',
          name: '',
          email: '',
          company: '',
          message: ''
        });
        // 画面上部にスクロール
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'エラーが発生しました',
        });
        // エラー時も上部にスクロール
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'ネットワークエラーが発生しました',
      });
      // ネットワークエラー時も上部にスクロール
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-4 uppercase">
                Service Contact
              </h1>
              <p className="text-gray-600 mb-4">
                運営サービスに関するお問い合わせはこちらから。
              </p>
              <p className="text-gray-600">
                その他のお問い合わせは
                <a href="/contact" className="text-blue-600 hover:text-blue-700 underline ml-1">
                  こちら
                </a>
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
              {submitStatus.type && (
                <div className={`mb-6 p-4 rounded-lg border-2 ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 border-green-300 text-green-800 shadow-md'
                    : 'bg-red-50 border-red-300 text-red-800 shadow-md'
                } animate-pulse`}>
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded-full mr-3 ${
                      submitStatus.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                    }`}></div>
                    <span className="font-medium">{submitStatus.message}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    お問い合わせサービス <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  >
                    <option value="">選択してください</option>
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    会社名・組織名
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? '送信中...' : '送信'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
