# TK Connection - Official Website

> Đơn vị vận hành tích hợp toàn chuỗi thương mại điện tử tại Việt Nam  
> Đối tác dịch vụ được TikTok Shop chứng nhận chính thức (TAP/TSP)

## 🚀 Tech Stack

- **Framework**: Next.js 14.2.35 (App Router)
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl (vi/en/zh)
- **Animations**: Custom FadeInView animations
- **Forms**: React Hook Form
- **Language**: TypeScript
- **Deployment**: Vercel (Ready)
- **Package Manager**: npm

## 📦 Project Structure

```
tk-connection/
├── app/
│   └── [locale]/              # Multi-language routes (vi/en/zh)
│       ├── page.tsx           # Homepage
│       ├── about/             # Về chúng tôi
│       ├── services/          # Dịch vụ cốt lõi
│       ├── case-studies/      # Case thành công
│       │   └── [slug]/        # Dynamic case detail pages
│       ├── kol-koc/           # Tài nguyên KOL/KOC
│       ├── cooperation/       # Phương thức hợp tác
│       ├── careers/           # Tuyển dụng
│       └── contact/           # Liên hệ
├── components/
│   ├── layout/               # Header, Footer, LanguageSwitcher
│   ├── animation/            # FadeInView
│   └── sections/             # Page-specific sections
│       ├── home/             # Hero, Stats, BrandSlider, FeaturedCases
│       ├── about/            # AboutIntro, Timeline, Values, Certifications
│       ├── services/         # Hero, ServicesGrid, Process, CTA
│       ├── case-studies/     # CaseList, CaseDetail, SpecialProjects
│       ├── kol-koc/          # Hero, Advantages, Grid, Modal
│       ├── cooperation/      # Hero, ServicesMatrix, Process, CTA
│       ├── careers/          # Hero, Jobs (with modal), Process
│       └── contact/          # Hero (form), ContactInfo (map)
├── messages/                 # i18n translations
│   ├── vi.json              # Vietnamese
│   ├── en.json              # English
│   └── zh.json              # Chinese
├── public/                   # Static assets (placeholder images/videos)
├── middleware.ts             # i18n routing
└── i18n.ts                  # i18n configuration
```

## 🎯 Key Features

### ✅ Phase 1: Core Website (COMPLETED)
- [x] Project setup & structure
- [x] Homepage với hero section, stats counter, brand slider, featured cases
- [x] About page với company intro, timeline, values, certifications
- [x] Services page với 2-column hero, services grid, process, CTA
- [x] Case studies: Overview + 3 detailed case pages (TULANDUT, botare, Mooekiss)
- [x] KOL/KOC page với grid, modal popup, advantages
- [x] Cooperation page với services matrix, 6-step process
- [x] Careers page với job listings (filter + modal), 4-step application process
- [x] Contact page với form, office info, Google Maps

### ✅ Phase 2: Interactive Features (COMPLETED)
- [x] Multi-language support (Vietnamese/English/Chinese)
- [x] KOL/KOC modal popups
- [x] Job listings with category filter + detail modals
- [x] Smooth animations with FadeInView
- [x] Logo slider (planned)
- [x] Stats counter animations (planned)
- [x] Contact form with validation

### 🚀 Phase 3: Ready for Launch
- [x] All pages built and tested
- [x] 44 static pages generated (8 pages × 3 languages + case studies)
- [x] Mobile responsive design
- [x] Build successful with zero errors
- [ ] Deploy to Vercel (Next step)
- [ ] Custom domain setup
- [ ] Analytics setup

## 🎨 Design System

### Colors
```javascript
{
  primary: '#54bbff',      // TK Cyan (highlight color)
  dark: '#0a0a0a',         // Dark text
  gray: '#6b7280',         // Secondary text
  light: '#f9fafb',        // Background
  white: '#ffffff'
}
```

### Typography
- **Font**: Inter (primary), alternative: Poppins
- **Headings**: Bold, tight leading
- **Body**: Regular, comfortable line-height

### Spacing
- Consistent 8px grid system
- Generous white space (như thesocialshepherd.com)

## 📱 Pages Overview

### 1. Homepage (/)
- Hero section với phone mockup + video
- Stats counter (40+ brands, 50M+ growth, 8.4M revenue)
- Core advantages grid (4 cards)
- Brand logos slider
- Featured case studies (3 cards)
- CTA section

### 2. About (/about)
- Company introduction
- Founder background (ByteDance, Alibaba)
- Development timeline (2022-2025)
- Core philosophy
- Official certifications (TAP/TSP badges)

### 3. Services (/services)
- E-commerce services
- Marketing integration
- Offline deployment
- Service pricing matrix (optional)

### 4. Case Studies (/case-studies)
- Filterable grid (by industry)
- 3 main cases: TULANDUT, botare, Mooekiss
- Special projects: Independent websites, Livestream
- Metrics showcase

### 5. KOL/KOC Resources (/kol-koc)
- Searchable table
- Filter by followers/industry
- 300-500 monthly resources highlight
- Sample KOL profiles

### 6. Cooperation (/cooperation)
- Service cooperation matrix
- Collaboration process (6 steps)
- Pricing models

### 7. Careers (/careers)
- Company culture
- Open positions (5 roles)
- Benefits showcase
- Application process

### 8. Contact (/contact)
- Contact form (với auto-reply)
- Office location (TP.HCM)
- Social media links
- WeChat QR code

## 🔧 Development Setup

```bash
# Clone repository
git clone [repo-url]

# Install dependencies
npm install
# or
pnpm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Environment Variables

```env
# Email Service (Resend)
RESEND_API_KEY=your_resend_api_key

# Site Info
NEXT_PUBLIC_SITE_URL=https://tkconnection.vn
NEXT_PUBLIC_CONTACT_EMAIL=hello@tkconnection.vn
NEXT_PUBLIC_CONTACT_PHONE=+84...
```

## 📈 SEO Strategy

- ✅ Static Site Generation (SSG) cho tất cả pages
- ✅ Dynamic meta tags cho từng page
- ✅ Sitemap.xml tự động
- ✅ robots.txt
- ✅ Open Graph images
- ✅ Structured data (JSON-LD) cho case studies
- ✅ Alt text cho tất cả images
- ✅ Semantic HTML

## 🚀 Deployment

**Platform**: Vercel (Recommended)

**Why Vercel?**
- Zero-config deployment cho Next.js
- Automatic HTTPS
- Global CDN
- Image optimization
- Analytics built-in
- FREE cho personal/commercial projects

**Cost**: ~$0-20/month (Free tier đủ dùng)

## 📊 Performance Targets

- Lighthouse Score: 95+ (all metrics)
- First Contentful Paint: < 1.0s
- Time to Interactive: < 2.0s
- Total Bundle Size: < 300KB
- Mobile Score: 90+

## 🔐 Backend/Database?

**Phase 1**: KHÔNG CẦN
- Tất cả content: static files/JSON
- Form submissions: API routes + Email service
- KOL data: JSON file

**Phase 2+** (Optional):
- Headless CMS (Sanity/Contentful) nếu client cần tự edit
- PostgreSQL nếu cần dynamic KOL search phức tạp

## 📞 Support

- **Developer**: [Your Name]
- **Email**: [Your Email]
- **Timeline**: 6-7 tuần
- **Budget**: Theo thỏa thuận

---

## 🎉 Current Status

- ✅ **All 8 pages completed** with full functionality
- ✅ **Multi-language support** (Vietnamese, English, Chinese)
- ✅ **44 static pages generated** successfully
- ✅ **Build successful** with zero errors
- 🚀 **Ready for deployment** to Vercel
- 📝 **Awaiting**: Final images, videos, logo, and content review

---

**Last Updated**: February 10, 2026  
**Version**: 1.0.0  
**Status**: ✅ Ready for Deployment
