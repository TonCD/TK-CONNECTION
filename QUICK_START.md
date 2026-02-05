# 🚀 Quick Start Guide - TK Connection

> Hướng dẫn setup và bắt đầu development

## ✅ Đã Hoàn Thành

- [x] ✅ Phân tích requirements (TK.md)
- [x] ✅ Quyết định tech stack: **Next.js + Tailwind**
- [x] ✅ Tạo README.md (project overview)
- [x] ✅ Tạo PROCESS.md (roadmap chi tiết)
- [x] ✅ Tạo .gitignore
- [x] ✅ Git init + initial commit

## 🎯 Kết Luận Tech Stack

### ✅ DÙNG NEXT.JS (Không phải React + Vite)

**Lý do chính:**
1. **SEO quan trọng cho B2B** → Next.js SSG/SSR
2. **Content-heavy website** → Next.js optimize tự động
3. **API Routes** tích hợp → Không cần backend riêng
4. **Vercel deployment** → Perfect match

### ✅ KHÔNG CẦN Backend/Database (Phase 1)

**Lý do:**
- ✅ Content tĩnh: Hardcode hoặc JSON files
- ✅ Form contact: Next.js API routes + Resend email
- ✅ KOL/KOC data: Static JSON (300-500 records OK)
- ✅ Case studies: Static data
- ✅ Career listings: Static data

**Phase 2 (Nếu cần sau):**
- Headless CMS (Sanity/Contentful) cho client tự edit
- Database nếu cần KOL search phức tạp

### ⚪ Analytics: Thêm sau launch

- Vercel Analytics (free)
- Google Analytics 4
- → Setup 5 phút sau khi launch

---

## 🛠️ Bước Tiếp Theo

### 1. Initialize Next.js (Ngay bây giờ)

```bash
# Create Next.js app with TypeScript + Tailwind
npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*"

# Or với pnpm (nhanh hơn)
pnpm create next-app . --typescript --tailwind --app --src-dir --import-alias "@/*"
```

**Options chọn:**
- ✅ TypeScript: Yes
- ✅ ESLint: Yes
- ✅ Tailwind CSS: Yes
- ✅ `src/` directory: Yes
- ✅ App Router: Yes
- ✅ Import alias: Yes (@/*)
- ❌ Turbopack: No (chưa stable)

### 2. Install Core Dependencies

```bash
npm install framer-motion react-hook-form resend react-device-frameset react-countup
# or
pnpm add framer-motion react-hook-form resend react-device-frameset react-countup

# Dev dependencies
npm install -D @types/node @tailwindcss/typography
```

### 3. Project Structure Setup

```bash
# Create folder structure
mkdir -p src/app/about
mkdir -p src/app/services
mkdir -p src/app/case-studies
mkdir -p src/app/kol-koc
mkdir -p src/app/cooperation
mkdir -p src/app/careers
mkdir -p src/app/contact
mkdir -p src/app/api/contact
mkdir -p src/components/layout
mkdir -p src/components/ui
mkdir -p src/components/sections
mkdir -p src/lib
mkdir -p public/images
mkdir -p public/videos
mkdir -p public/logos
mkdir -p data
```

### 4. Configure Tailwind (Design System)

Update `tailwind.config.ts`:
```typescript
export default {
  theme: {
    extend: {
      colors: {
        'tk-cyan': '#54bbff',
        'tk-dark': '#0a0a0a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'slide': 'slide 20s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
    },
  },
}
```

### 5. Start Development

```bash
npm run dev
# or
pnpm dev

# Open http://localhost:3000
```

---

## 📦 Package Dependencies

### Production
```json
{
  "next": "^14.0.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "framer-motion": "^11.0.0",
  "react-hook-form": "^7.49.0",
  "resend": "^3.0.0",
  "react-device-frameset": "^1.3.0",
  "react-countup": "^6.5.0",
  "@react-email/components": "^0.0.14"
}
```

### Development
```json
{
  "typescript": "^5.3.0",
  "@types/react": "^18.2.0",
  "@types/node": "^20.10.0",
  "tailwindcss": "^3.4.0",
  "autoprefixer": "^10.4.16",
  "postcss": "^8.4.32",
  "eslint": "^8.56.0",
  "eslint-config-next": "^14.0.0"
}
```

---

## 📁 Folder Structure Preview

```
tk-connection/
├── .git/                    ✅ Git initialized
├── .gitignore              ✅ Created
├── README.md               ✅ Created
├── PROCESS.md              ✅ Created
├── QUICK_START.md          ✅ Created (this file)
├── TK.md                   ✅ Requirements
├── Logo_TK.png             ✅ Logo asset
│
├── src/                    ⏳ Next (after npx create-next-app)
│   ├── app/
│   │   ├── page.tsx       # Homepage
│   │   ├── layout.tsx     # Root layout
│   │   ├── about/
│   │   ├── services/
│   │   ├── case-studies/
│   │   ├── kol-koc/
│   │   ├── cooperation/
│   │   ├── careers/
│   │   ├── contact/
│   │   └── api/
│   │       └── contact/
│   ├── components/
│   │   ├── layout/        # Header, Footer, Nav
│   │   ├── ui/            # Buttons, Cards, Forms
│   │   └── sections/      # Hero, Stats, LogoSlider
│   └── lib/
│       ├── email.ts
│       └── utils.ts
├── public/
│   ├── images/
│   ├── videos/
│   └── logos/
├── data/
│   ├── case-studies.json
│   ├── kol-koc.json
│   └── jobs.json
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

---

## 🎯 Timeline Reminder

| Week | Focus | Deliverable |
|------|-------|-------------|
| **1** | ✅ Setup + Design System | Project structure, UI components |
| **2** | Homepage + About | 2 pages complete |
| **3** | Services + Case Studies | 2 pages complete |
| **4** | KOL/KOC + Cooperation | 2 pages complete |
| **5** | Careers + Contact + Forms | 2 pages + email working |
| **6** | Animations + Optimization | Polish, SEO, performance |
| **7** | Testing + Launch | Deploy to Vercel |

---

## 💡 Development Tips

### 1. Start Simple, Iterate
- ✅ Build pages with static content first
- ✅ Add animations later
- ✅ Mobile responsive from start

### 2. SEO-First Approach
- ✅ Semantic HTML tags
- ✅ Alt text on every image
- ✅ Meta tags on every page
- ✅ Fast loading (< 1s)

### 3. Component Reusability
- ✅ Build UI library first
- ✅ Reuse Button, Card, Section components
- ✅ Consistent spacing/typography

### 4. Commit Often
```bash
git add .
git commit -m "feat: Add homepage hero section"
git commit -m "fix: Mobile responsive navbar"
git commit -m "style: Update brand colors"
```

---

## 🔗 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Resend Email Docs](https://resend.com/docs)
- [Vercel Deployment](https://vercel.com/docs)

---

## ❓ FAQs

**Q: Tại sao không dùng Vite + React?**  
A: Next.js có SSR/SSG tốt hơn cho SEO, và API routes tích hợp sẵn.

**Q: Có cần Vite không?**  
A: Không. Next.js đã có build tool tối ưu rồi.

**Q: Có cần setup backend riêng?**  
A: Không. Next.js API routes + Resend email là đủ.

**Q: Analytics setup khi nào?**  
A: Sau khi launch. Vercel Analytics add trong 2 phút.

**Q: Database cần thiết không?**  
A: Phase 1 không. Tất cả content dùng static files/JSON.

**Q: Bao giờ cần CMS?**  
A: Phase 2, nếu client muốn tự edit content (không phải dev).

---

**Sẵn sàng bắt đầu? → Run: `npx create-next-app@latest .`** 🚀

---

**Last Updated**: February 5, 2026  
**Status**: Ready for Next.js initialization ✅
