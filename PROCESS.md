# TK Connection - Development Process

> Checklist và roadmap chi tiết cho dự án website

**Sprint Duration**: 6-7 tuần  
**Target Launch**: Tháng 3/2026  
**Current Phase**: ✅ All Pages Complete → Ready for Deployment

---

## 📅 Timeline Overview

| Phase | Duration | Status |
|-------|----------|--------|
| Setup & Planning | Tuần 1 | ✅ Complete |
| Core Pages | Tuần 2-3 | ✅ Complete |
| Interactive Features | Tuần 4-5 | ✅ Complete |
| Optimization | Tuần 6 | ✅ Complete |
| Launch | Tuần 7 | 🚀 Ready for Deployment |

**Current Session (Feb 10, 2026)**: All pages completed with multi-language support. 44 pages built successfully. Ready for Vercel deployment.

---

## ✅ PHASE 1: Setup & Planning (COMPLETED)

### Day 1: Project Initialization ✅
- [x] Phân tích requirements từ TK.md
- [x] Quyết định tech stack (Next.js + Tailwind + next-intl)
- [x] Tạo README.md
- [x] Tạo PROCESS.md
- [x] Init Git repository
- [x] Create `.gitignore`
- [x] Initialize Next.js project
- [x] Setup Tailwind CSS
- [x] Setup TypeScript
- [x] Install core dependencies

### Day 2: Project Structure ✅
- [x] Setup folder structure (app/[locale]/, components/, messages/)
- [x] Configure Tailwind với design system
- [x] Setup multi-language (next-intl)
- [x] Create layout components (Header, Footer, LanguageSwitcher)
- [x] Setup custom animations (FadeInView)
- [x] Configure ESLint

### Day 3-4: Design System
- [ ] Define color palette
- [ ] Create typography scale
- [ ] Build UI components library:
  - [ ] Button variants
  - [ ] Card components
  - [ ] Input/Form controls
  - [ ] Icons system
- [ ] Setup responsive breakpoints
- [ ] Create reusable animations

### Day 5: Static Data Preparation
- [ ] Create `data/case-studies.json`
- [ ] Create `data/kol-koc.json`
- [ ] Create `data/jobs.json`
- [ ] Prepare brand logos
- [ ] Optimize images (convert to WebP)
- [ ] Prepare video assets

---

## ⚪ PHASE 2: Core Pages (Tuần 2-3)

### Week 2: Homepage & About

#### Homepage (/)
- [ ] Hero section layout
  - [ ] Headline + subheadline
  - [ ] Phone mockup frame
  - [ ] Video integration (autoplay, loop)
  - [ ] CTA buttons
- [ ] Stats counter section
  - [ ] CountUp animation
  - [ ] 40+ brands, 50M+ growth, 8.4M revenue
- [ ] Core advantages grid (4 cards)
  - [ ] Icon + title + description
  - [ ] Hover effects
- [ ] Brand logos slider
  - [ ] Infinite scroll animation
  - [ ] 10+ brand logos
- [ ] Featured case studies (3 cards)
  - [ ] Image + metrics overlay
  - [ ] Hover effects
- [ ] CTA section
  - [ ] "Tư vấn ngay" form popup

#### About Page (/about)
- [ ] Company introduction section
- [ ] Founders background (ByteDance, Alibaba)
- [ ] Timeline component (2022-2025)
  - [ ] Vertical timeline design
  - [ ] Animated on scroll
- [ ] Core philosophy cards
- [ ] Certifications showcase
  - [ ] TAP/TSP badges
  - [ ] Vietnam business license

### Week 3: Services & Case Studies

#### Services Page (/services)
- [ ] Hero section
- [ ] E-commerce services section
  - [ ] Go-global consulting
  - [ ] Company registration
  - [ ] Shop operation
  - [ ] Video content
  - [ ] Livestream operation
- [ ] Marketing services section
  - [ ] KOL/KOC collaboration
  - [ ] Campaign planning
  - [ ] Brand ambassador
  - [ ] Multi-channel media
- [ ] Offline services section
  - [ ] Store setup
  - [ ] Pop-up store
  - [ ] Point-of-sale marketing
- [ ] Service comparison table (optional)

#### Case Studies Page (/case-studies)
- [ ] Filter/tabs by industry
  - [ ] Cosmetics (70%)
  - [ ] Personal care (20%)
  - [ ] Others (10%)
- [ ] Case study grid
- [ ] Individual case study cards:
  - [ ] TULANDUT
  - [ ] botare
  - [ ] Mooekiss
- [ ] Special projects section
  - [ ] Independent websites
  - [ ] Livestream outsourcing
- [ ] Metrics visualization
- [ ] "View All" pagination

---

## ⚪ PHASE 3: Interactive Features (Tuần 4-5)

### Week 4: KOL/KOC & Cooperation

#### KOL/KOC Resources (/kol-koc)
- [ ] Hero section với advantages
- [ ] KOL/KOC table
  - [ ] 5 sample profiles
  - [ ] Columns: Name, Followers, Revenue, Categories
- [ ] Search functionality (client-side)
- [ ] Filter by:
  - [ ] Follower count range
  - [ ] Industry
- [ ] Sort by followers/revenue
- [ ] Responsive table (mobile cards)

#### Cooperation Page (/cooperation)
- [ ] Service matrix table
  - [ ] 9 service types
  - [ ] Pricing models
  - [ ] Collaboration formats
- [ ] Collaboration process (6 steps)
  - [ ] Step-by-step visual
  - [ ] Timeline/flowchart
- [ ] CTA: "Start Collaboration"

### Week 5: Careers & Contact

#### Careers Page (/careers)
- [ ] Hero: Company culture
- [ ] "Why join us" section
  - [ ] ByteDance/Alibaba background
  - [ ] GMV achievements
  - [ ] Location: TP.HCM
- [ ] Open positions (5 roles):
  - [ ] TikTok E-commerce Operator
  - [ ] Short Video Operator
  - [ ] Livestream Operator
  - [ ] KOL/KOC Manager
  - [ ] Legal/Compliance Specialist
- [ ] Job card component
  - [ ] Expandable details
  - [ ] Apply button
- [ ] Benefits showcase
- [ ] Application process

#### Contact Page (/contact)
- [ ] Contact form
  - [ ] Fields: Name, Email, Phone, Service, Budget, Message
  - [ ] Validation (React Hook Form)
  - [ ] Submit handler
- [ ] Office location
  - [ ] Address: TP.HCM
  - [ ] Google Maps embed (optional)
- [ ] Contact info
  - [ ] Phone numbers (VN/CN)
  - [ ] Email
  - [ ] WeChat QR code
- [ ] Social media links
  - [ ] TikTok, Facebook, Instagram

---

## ⚪ PHASE 4: Backend Integration (Tuần 5)

### Email Service Setup
- [ ] Create Resend account
- [ ] Get API key
- [ ] Setup environment variables
- [ ] Create API route: `/api/contact`
- [ ] Email templates:
  - [ ] Admin notification email
  - [ ] Customer auto-reply email (Vietnamese)
- [ ] Test email sending
- [ ] Error handling
- [ ] Rate limiting (optional)

### Form Integration
- [ ] Connect contact form to API
- [ ] Success/error states
- [ ] Loading spinner
- [ ] Toast notifications
- [ ] Form reset after submit
- [ ] Analytics tracking (optional)

---

## ⚪ PHASE 5: Polish & Animations (Tuần 6)

### Animations
- [ ] Page transitions (Framer Motion)
- [ ] Scroll animations:
  - [ ] Fade in on scroll
  - [ ] Slide in from sides
  - [ ] Scale up cards
- [ ] Hero section animations:
  - [ ] Text reveal
  - [ ] Phone mockup entrance
  - [ ] Video fade in
- [ ] Stats counter animation
- [ ] Logo slider (infinite loop)
- [ ] Hover effects:
  - [ ] Buttons
  - [ ] Cards
  - [ ] Images
- [ ] Mobile menu animation
- [ ] Smooth scrolling

### Responsive Design
- [ ] Mobile (320px - 640px)
  - [ ] Test all pages
  - [ ] Mobile menu
  - [ ] Touch-friendly buttons
  - [ ] Optimized images
- [ ] Tablet (641px - 1024px)
  - [ ] Test all pages
  - [ ] Adjust grid layouts
- [ ] Desktop (1025px+)
  - [ ] Test all pages
  - [ ] Max-width containers
- [ ] Large screens (1920px+)
  - [ ] Test all pages
  - [ ] Prevent over-stretching

---

## ⚪ PHASE 6: SEO & Optimization (Tuần 6)

### SEO Setup
- [ ] Meta tags cho tất cả pages:
  - [ ] Title
  - [ ] Description
  - [ ] Keywords
  - [ ] OG image
  - [ ] Twitter card
- [ ] Create `sitemap.xml`
- [ ] Create `robots.txt`
- [ ] Structured data (JSON-LD):
  - [ ] Organization
  - [ ] Case studies (Article schema)
  - [ ] Careers (JobPosting schema)
- [ ] Alt text cho tất cả images
- [ ] Semantic HTML audit
- [ ] Internal linking strategy

### Performance Optimization
- [ ] Image optimization:
  - [ ] Convert to WebP/AVIF
  - [ ] Responsive images (srcset)
  - [ ] Lazy loading
  - [ ] Next.js Image component
- [ ] Code splitting audit
- [ ] Bundle size analysis
- [ ] Remove unused dependencies
- [ ] Minify CSS/JS
- [ ] Setup compression (Vercel tự động)
- [ ] Lighthouse audit:
  - [ ] Performance: 95+
  - [ ] Accessibility: 95+
  - [ ] Best Practices: 95+
  - [ ] SEO: 100

### Testing
- [ ] Browser testing:
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge
- [ ] Device testing:
  - [ ] iPhone
  - [ ] Android
  - [ ] iPad
  - [ ] Desktop
- [ ] Functionality testing:
  - [ ] All links work
  - [ ] Forms submit correctly
  - [ ] Animations smooth
  - [ ] No console errors
- [ ] Accessibility testing:
  - [ ] Keyboard navigation
  - [ ] Screen reader friendly
  - [ ] Color contrast
  - [ ] Focus indicators

---

## ⚪ PHASE 7: Deployment & Launch (Tuần 7)

### Pre-Launch Checklist
- [ ] Final content review
- [ ] Spell check (Vietnamese + English)
- [ ] Legal review (privacy policy, terms)
- [ ] Client approval
- [ ] Backup codebase

### Vercel Setup
- [ ] Create Vercel account
- [ ] Connect GitHub repository
- [ ] Configure project settings
- [ ] Add environment variables
- [ ] Setup custom domain (tkconnection.vn)
- [ ] Configure DNS
- [ ] SSL certificate (auto)

### Launch
- [ ] Deploy to production
- [ ] Smoke test all pages
- [ ] Test contact form in production
- [ ] Monitor errors (Vercel dashboard)
- [ ] Setup analytics (Vercel Analytics)
- [ ] Google Search Console setup
- [ ] Submit sitemap to Google

### Post-Launch
- [ ] Monitor performance
- [ ] Fix any issues
- [ ] Collect feedback
- [ ] A/B test improvements (optional)
- [ ] Plan Phase 2 features

---

## 🎯 Success Criteria

- [x] ✅ Project initialized
- [ ] ✅ All 8 pages completed
- [ ] ✅ Contact form working
- [ ] ✅ Mobile responsive
- [ ] ✅ Lighthouse score 95+
- [ ] ✅ Client approval
- [ ] ✅ Successfully deployed
- [ ] ✅ Zero critical bugs

---

## 📝 Notes & Decisions

### Design Decisions
- **Phone mockup**: Sử dụng react-device-frameset (iPhone 14 Pro)
- **Video format**: MP4, H.264, < 5MB
- **Color scheme**: Cyan (#54bbff) như thesocialshepherd
- **Typography**: Inter (primary), fallback: system fonts

### Technical Decisions
- **No backend needed**: Static data + API routes
- **No CMS needed**: Phase 1 hardcode content
- **Email service**: Resend (3000 emails/month free)
- **Hosting**: Vercel (free tier đủ dùng)
- **Analytics**: Vercel Analytics (add sau launch)

### Future Enhancements (Phase 2+)
- [ ] Admin panel cho content management
- [ ] Headless CMS integration (Sanity/Contentful)
- [ ] Advanced KOL search (Elasticsearch)
- [ ] Blog section
- [ ] Multi-language support (EN/CN)
- [ ] Case study detail pages
- [ ] Client portal

---

**Last Updated**: February 5, 2026  
**Current Sprint**: Week 1 - Setup & Planning  
**Next Milestone**: Homepage completion (Week 2)
