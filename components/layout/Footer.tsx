export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">TK Connection</h3>
            <p className="text-gray-400 text-sm">
              Hỗ trợ thương hiệu tăng trưởng & chuyển đổi doanh thu tại thị trường quốc tế
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Liên hệ</h4>
            <div className="text-sm text-gray-400 space-y-2">
              <p>Email: hello@tkconnection.vn</p>
              <p>Điện thoại: +84...</p>
              <p>Địa chỉ: TP. Hồ Chí Minh</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Dịch vụ</h4>
            <div className="text-sm text-gray-400 space-y-2">
              <p>TikTok Shop TAP/TSP</p>
              <p>Vận hành E-commerce</p>
              <p>KOL/KOC Marketing</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          © 2025 TK Connection. Bảo lưu mọi quyền.
        </div>
      </div>
    </footer>
  )
}
