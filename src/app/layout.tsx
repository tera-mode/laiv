import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '合同会社LAIV - AIを活用したウェブサービス開発',
  description: 'AIを活用し自分の人生を生きる。合同会社LAIVは最先端のAI技術を使ったウェブサービスの開発・運営を行っています。',
  keywords: ['AI', 'ウェブサービス', '開発', 'LAIV', '人工知能', 'スタートアップ'],
  authors: [{ name: '合同会社LAIV' }],
  creator: '合同会社LAIV',
  publisher: '合同会社LAIV',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: '合同会社LAIV - AIを活用したウェブサービス開発',
    description: 'AIを活用し自分の人生を生きる。合同会社LAIVは最先端のAI技術を使ったウェブサービスの開発・運営を行っています。',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: '合同会社LAIV - AIを活用したウェブサービス開発',
    description: 'AIを活用し自分の人生を生きる。合同会社LAIVは最先端のAI技術を使ったウェブサービスの開発・運営を行っています。',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '', // Google Search Consoleの認証コードを設定
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}