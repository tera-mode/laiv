import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Vision from '@/components/Vision';
import Services from '@/components/Services';
import Company from '@/components/Company';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Vision />
      <Services />
      <Company />
      <Contact />
      <Footer />
    </main>
  );
}