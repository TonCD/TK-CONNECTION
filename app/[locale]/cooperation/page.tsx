import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';
import CooperationContent from '@/components/sections/cooperation/Content';

export default function CooperationPage() {
  return (
    <>
      <Header />
      <LanguageSwitcher />
      <main>
        <CooperationContent />
      </main>
      <Footer />
    </>
  );
}
