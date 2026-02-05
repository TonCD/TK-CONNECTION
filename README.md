# TK Connection - Official Website

> Đơn vị vận hành tích hợp toàn chuỗi thương mại điện tử tại Việt Nam  
> Đối tác dịch vụ được TikTok Shop chứng nhận chính thức (TAP/TSP)

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Resend
- **Language**: TypeScript
- **Deployment**: Vercel
- **Package Manager**: npm/pnpm

## 📦 Project Structure

```
tk-connection/
├── app/                      # Next.js App Router
│   ├── (home)/              # Homepage
│   ├── about/               # Về chúng tôi
│   ├── services/            # Dịch vụ cốt lõi
│   ├── case-studies/        # Case thành công
│   ├── kol-koc/             # Tài nguyên KOL/KOC
│   ├── cooperation/         # Phương thức hợp tác
│   ├── careers/             # Tuyển dụng
│   ├── contact/             # Liên hệ
│   └── api/                 # API routes
│       └── contact/         # Form submission endpoint
├── components/              # Reusable components
│   ├── layout/             # Header, Footer, Navigation
│   ├── ui/                 # Buttons, Cards, Forms
│   └── sections/           # Hero, Stats, LogoSlider...
├── lib/                    # Utilities
│   ├── email.ts           # Email templates
│   └── utils.ts           # Helper functions
├── public/                 # Static assets
│   ├── images/
│   ├── videos/
│   └── logos/
├── data/                   # Static data
│   ├── case-studies.json  # Case studies data
│   ├── kol-koc.json       # KOL/KOC database
│   └── jobs.json          # Career listings
└── styles/                # Global styles
    └── globals.css
```

## 🎯 Key Features

### Phase 1: Core Website (Tuần 1-4)
- [x] Project setup & structure
- [ ] Homepage với hero section + phone mockup
- [ ] About page với company timeline
- [ ] Services page với dịch vụ grid
- [ ] Case studies showcase
- [ ] KOL/KOC resources table
- [ ] Careers page
- [ ] Contact page với form

### Phase 2: Interactive Features (Tuần 5-6)
- [ ] Contact form với auto-reply email
- [ ] KOL/KOC search & filter
- [ ] Smooth animations (Framer Motion)
- [ ] Logo slider
- [ ] Stats counter animations

### Phase 3: Optimization & Launch (Tuần 7)
- [ ] SEO optimization (meta tags, sitemap)
- [ ] Performance tuning (images, bundle size)
- [ ] Mobile responsive perfection
- [ ] Analytics setup (Vercel Analytics)
- [ ] Deploy to Vercel

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

**Last Updated**: February 5, 2026  
**Version**: 1.0.0-alpha  
**Status**: 🚧 In Development
