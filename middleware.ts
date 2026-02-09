import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  // Danh sách các locale được hỗ trợ
  locales: ['vi', 'en', 'zh'],
  
  // Locale mặc định
  defaultLocale: 'vi'
})

export const config = {
  // Áp dụng middleware cho tất cả các route trừ api, _next, static assets
  matcher: ['/', '/(vi|en|zh)/:path*', '/((?!api|_next|images|logos|videos|favicon.ico|.*\\.).*)']
}
