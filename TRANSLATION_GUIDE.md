# 🌐 Translation Guide - Hướng dẫn Đa ngôn ngữ

## 📋 Tổng quan

Website TK Connection hỗ trợ 3 ngôn ngữ:
- 🇻🇳 **Tiếng Việt (vi)** - Mặc định
- 🇬🇧 **English (en)**
- 🇨🇳 **中文 (zh)**

Hệ thống sử dụng **next-intl** library để quản lý translations.

---

## 📁 Cấu trúc Files

```
project/
├── messages/
│   ├── vi.json      # Tiếng Việt
│   ├── en.json      # English  
│   └── zh.json      # 中文
├── i18n/
│   └── request.ts   # Config i18n
├── middleware.ts    # Auto routing
└── app/
    └── [locale]/    # Dynamic locale routing
        ├── page.tsx
        ├── about/
        └── ...
```

---

## 🔧 Khi tạo Page/Component mới

### **Bước 1: Thêm translations vào 3 files JSON**

Mở 3 files: `messages/vi.json`, `messages/en.json`, `messages/zh.json`

**Ví dụ - Tạo trang Services:**

**`messages/vi.json`:**
```json
{
  "services": {
    "title": "Dịch vụ của chúng tôi",
    "subtitle": "Giải pháp toàn diện cho thương hiệu",
    "tiktokShop": {
      "title": "TikTok Shop",
      "description": "Vận hành gian hàng chuyên nghiệp"
    }
  }
}
```

**`messages/en.json`:**
```json
{
  "services": {
    "title": "Our Services",
    "subtitle": "Comprehensive solutions for brands",
    "tiktokShop": {
      "title": "TikTok Shop",
      "description": "Professional store operations"
    }
  }
}
```

**`messages/zh.json`:**
```json
{
  "services": {
    "title": "我们的服务",
    "subtitle": "为品牌提供全面解决方案",
    "tiktokShop": {
      "title": "TikTok Shop",
      "description": "专业店铺运营"
    }
  }
}
```

---

### **Bước 2: Sử dụng translations trong Component**

#### **Client Component** (có 'use client'):

```tsx
'use client'

import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function ServicesPage() {
  const t = useTranslations('services')
  const params = useParams()
  const locale = params.locale as string

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>
      <Link href={`/${locale}/contact`}>Contact</Link>
    </div>
  )
}
```

#### **Server Component** (không có 'use client'):

```tsx
import { useTranslations } from 'next-intl'

export default function ServicesPage() {
  const t = useTranslations('services')

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>
    </div>
  )
}
```

---

### **Bước 3: Link với locale**

**❌ SAI:**
```tsx
<Link href="/about">About</Link>
```

**✅ ĐÚNG (Client Component):**
```tsx
const params = useParams()
const locale = params.locale as string

<Link href={`/${locale}/about`}>About</Link>
```

**✅ ĐÚNG (Server Component):**
```tsx
import { Link } from '@/navigation' // Nếu có setup navigation wrapper

<Link href="/about">About</Link>  // Auto thêm locale
```

---

## 🎨 Cấu trúc Translation Keys

**Nguyên tắc đặt tên:**
- Lowercase
- Dấu chấm (.) để phân cấp
- CamelCase cho field names

**Ví dụ tốt:**
```json
{
  "pageName": {
    "sectionName": {
      "fieldName": "Value",
      "item1": {
        "title": "Title",
        "description": "Description"
      }
    }
  }
}
```

**Ví dụ xấu:**
```json
{
  "Page_Name_Section": "Value",  // ❌ Underscore, no structure
  "random_text": "Value"          // ❌ Không có ngữ cảnh
}
```

---

## 📝 Quy trình Tạo Trang Mới

### **1. Tạo file page trong `app/[locale]/`**
```bash
app/[locale]/new-page/page.tsx
```

### **2. Thêm keys vào 3 files messages**

**Vi:**
```json
{
  "newPage": {
    "title": "Tiêu đề tiếng Việt",
    "description": "Mô tả tiếng Việt"
  }
}
```

**En:**
```json
{
  "newPage": {
    "title": "English Title",
    "description": "English Description"
  }
}
```

**Zh:**
```json
{
  "newPage": {
    "title": "中文标题",
    "description": "中文描述"
  }
}
```

### **3. Implement component với useTranslations**

```tsx
'use client'

import { useTranslations } from 'next-intl'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LanguageSwitcher from '@/components/layout/LanguageSwitcher'

export default function NewPage() {
  const t = useTranslations('newPage')

  return (
    <>
      <Header />
      <LanguageSwitcher />
      <main>
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
      </main>
      <Footer />
    </>
  )
}
```

---

## 🔄 Translation với Dynamic Data

**Với parameters:**
```json
{
  "greeting": "Xin chào {name}!"
}
```

```tsx
t('greeting', { name: 'John' })  // "Xin chào John!"
```

**Với pluralization:**
```json
{
  "items": {
    "zero": "Không có sản phẩm",
    "one": "{count} sản phẩm",
    "other": "{count} sản phẩm"
  }
}
```

```tsx
t('items', { count: 5 })  // "5 sản phẩm"
```

---

## 🧪 Testing Translations

### **Test locally:**
```bash
# Tiếng Việt (default)
http://localhost:3000/vi

# English
http://localhost:3000/en

# 中文
http://localhost:3000/zh
```

### **Test all pages:**
```bash
http://localhost:3000/vi/about
http://localhost:3000/en/about
http://localhost:3000/zh/about
```

---

## ✅ Checklist khi Tạo Trang Mới

- [ ] Tạo file `app/[locale]/page-name/page.tsx`
- [ ] Thêm translation keys vào `messages/vi.json`
- [ ] Thêm translation keys vào `messages/en.json`
- [ ] Thêm translation keys vào `messages/zh.json`
- [ ] Import `useTranslations` (client) hoặc `getTranslations` (server)
- [ ] Sử dụng `t('key')` thay vì hardcode text
- [ ] Thêm `LanguageSwitcher` vào page
- [ ] Test cả 3 ngôn ngữ: /vi, /en, /zh
- [ ] Check tất cả links có locale prefix
- [ ] Run `npm run build` để verify

---

## 🐛 Common Issues & Solutions

### **Issue 1: "Cannot find module './undefined.json'"**
**Cause:** Component đang ở route không có locale
**Fix:** Đảm bảo tất cả pages nằm trong `app/[locale]/`

### **Issue 2: Links không chuyển ngôn ngữ**
**Cause:** Hardcode href without locale
**Fix:** 
```tsx
// ❌ Wrong
<Link href="/about">About</Link>

// ✅ Correct
const { locale } = useParams()
<Link href={`/${locale}/about`}>About</Link>
```

### **Issue 3: Translation key not found**
**Cause:** Key không tồn tại trong file JSON
**Fix:** Check spelling và đảm bảo key có trong cả 3 files (vi/en/zh)

---

## 📚 Resources

- **next-intl Docs:** https://next-intl-docs.vercel.app/
- **Translation Keys Convention:** Xem `messages/vi.json` để tham khảo
- **Example Pages:** 
  - Homepage: `app/[locale]/page.tsx`
  - About: `app/[locale]/about/page.tsx`

---

## 💡 Best Practices

1. **Luôn dịch đồng bộ 3 ngôn ngữ** - Đừng để thiếu key ở bất kỳ file nào
2. **Đặt tên key rõ ràng** - `about.hero.title` thay vì `title1`
3. **Group by section** - Dùng nested objects cho sections lớn
4. **Reuse common keys** - Tạo section "common" cho text dùng nhiều lần
5. **Test ngay sau khi thêm** - Không chờ đến cuối mới test
6. **Keep translations short** - Tối ưu cho mobile screens
7. **Use parameters** - Cho dynamic content: `{name}`, `{count}`

---

## 🎯 Quick Reference

**Import:**
```tsx
import { useTranslations } from 'next-intl'  // Client
import { getTranslations } from 'next-intl'  // Server
```

**Usage:**
```tsx
const t = useTranslations('namespace')
t('key')                    // Simple
t('key', { name: 'John' })  // With params
t.rich('key', {             // With React components
  strong: (chunks) => <strong>{chunks}</strong>
})
```

**Locale:**
```tsx
import { useParams } from 'next/navigation'
const { locale } = useParams()  // 'vi' | 'en' | 'zh'
```

---

**Made with ❤️ by TK Connection Team**
