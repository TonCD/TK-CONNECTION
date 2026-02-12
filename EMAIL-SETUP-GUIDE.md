# Email Service Setup Guide - Resend

## Tại sao chọn Resend?

✅ **Dễ sử dụng nhất** cho Next.js
✅ **Free tier hào phóng**: 3,000 emails/tháng + 100 emails/ngày
✅ **Email templates đẹp** với React components
✅ **Không cần credit card** để đăng ký
✅ **Tốc độ gửi nhanh** (< 1 giây)

---

## Bước 1: Tạo tài khoản Resend

1. Truy cập: https://resend.com/signup
2. Đăng ký bằng GitHub hoặc email
3. Xác nhận email

## Bước 2: Lấy API Key

1. Sau khi đăng nhập, vào **API Keys**
2. Click **Create API Key**
3. Đặt tên: "TK Connection Production"
4. Chọn permission: **"Sending access"**
5. Click **Add**
6. **Copy API key** ngay (chỉ hiển thị 1 lần!)

Format key: `re_xxxxxxxxxxxxxxxxxxxxxxxxxx`

## Bước 3: Verify Domain (TÙY CHỌN - nhưng khuyến nghị)

### Nếu có domain (VD: tkconnection.vn):

1. Vào **Domains** → **Add Domain**
2. Nhập domain: `tkconnection.vn`
3. Resend cung cấp DNS records cần thêm:
   - **TXT record** (verification)
   - **MX record** (nếu muốn nhận email)
   - **DKIM records** (bảo mật)
4. Thêm records vào DNS provider (nơi mua domain)
5. Đợi 5-30 phút để verify

**Lợi ích khi verify domain:**
- Email từ `noreply@tkconnection.vn` thay vì `onboarding@resend.dev`
- Tăng deliverability rate (không vào spam)
- Chuyên nghiệp hơn

### Nếu chưa có domain:
- Vẫn dùng được với email mặc định: `onboarding@resend.dev`
- Khách hàng vẫn nhận được email, nhưng from address không đẹp

## Bước 4: Cài đặt package

```bash
npm install resend
```

## Bước 5: Thêm env variables

Tạo file `.env.local` (hoặc thêm vào file `.env` nếu có):

```env
# Resend API Key
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx

# Email addresses
RESEND_FROM_EMAIL=noreply@tkconnection.vn
# Hoặc nếu chưa verify domain:
# RESEND_FROM_EMAIL=onboarding@resend.dev

# Admin notification emails (cách nhau bằng dấu phẩy)
ADMIN_EMAILS=vietnam@tkconnection.vn,your-email@gmail.com

# Reply-to email
REPLY_TO_EMAIL=vietnam@tkconnection.vn
```

**⚠️ LƯU Ý**: File `.env.local` đã được gitignore tự động, không push lên GitHub!

## Bước 6: Cấu hình trên Vercel

Sau khi có API key:

1. Vào Vercel Dashboard → Project **TK-CONNECTION**
2. Settings → **Environment Variables**
3. Thêm từng biến:
   - **Name**: `RESEND_API_KEY`
   - **Value**: `re_xxxxxxxxx` (API key vừa copy)
   - **Environment**: Chọn **Production**, **Preview**, **Development**
4. Click **Save**
5. Lặp lại với các biến khác: `RESEND_FROM_EMAIL`, `ADMIN_EMAILS`, `REPLY_TO_EMAIL`
6. Click **Redeploy** để áp dụng

## Bước 7: Test email

Sau khi deploy:

1. Vào website của bạn
2. Điền form contact
3. Gửi
4. Kiểm tra:
   - Email admin (vietnam@tkconnection.vn)
   - Email customer (địa chỉ bạn điền trong form)
   - Email của bạn (nếu thêm vào ADMIN_EMAILS)

## Free Tier Limits

| Metric | Free Tier | Pro ($20/month) |
|--------|-----------|-----------------|
| Emails/tháng | 3,000 | 50,000 |
| Emails/ngày | 100 | 1,666 |
| Sending rate | 10 emails/giây | 50 emails/giây |
| Team members | 1 | Unlimited |

**→ Free tier đủ cho website này** (trung bình < 100 contacts/tháng)

## Troubleshooting

### Email không gửi được:
1. Check API key đúng chưa
2. Check env variables trên Vercel
3. Check console logs trong function

### Email vào spam:
1. Verify domain (bước 3)
2. Thêm DKIM records
3. Khuyên khách check **Spam folder**

### Rate limit exceeded:
- Free tier: 100 emails/ngày
- Giải pháp: Upgrade Pro plan hoặc đợi 24h

---

**Đã setup xong! Code API route và templates sẽ được tạo ở bước tiếp theo.**
