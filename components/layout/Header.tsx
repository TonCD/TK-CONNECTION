export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-bold text-xl text-dark">TK Connection</div>
        <div className="hidden md:flex gap-8 text-sm">
          <a href="/" className="hover:text-primary transition">Trang chủ</a>
          <a href="/about" className="hover:text-primary transition">Về chúng tôi</a>
          <a href="/services" className="hover:text-primary transition">Dịch vụ</a>
          <a href="/case-studies" className="hover:text-primary transition">Case Studies</a>
          <a href="/kol-koc" className="hover:text-primary transition">KOL/KOC</a>
          <a href="/cooperation" className="hover:text-primary transition">Hợp tác</a>
          <a href="/careers" className="hover:text-primary transition">Tuyển dụng</a>
          <a href="/contact" className="hover:text-primary transition bg-primary text-white px-4 py-2 rounded-lg">
            Liên hệ
          </a>
        </div>
      </nav>
    </header>
  )
}
