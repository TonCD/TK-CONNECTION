import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';
import KOLKOCContent from '@/components/sections/kol-koc/Content';

export default function KolKocPage() {
  return (
    <>
      <Header />
      <LanguageSwitcher />
      <main>
        <KOLKOCContent />
      </main>
      <Footer />
    </>
  );
}
