# Video Positioning Guide

## Current Settings (Hero.tsx)

Video được đặt bên trong phone mockup với các giá trị:

```tsx
<div className="absolute top-[5%] left-[8%] w-[66%] h-[85%]">
```

### Giải thích:
- **top: 5%** - Khoảng cách từ đỉnh phone frame
- **left: 8%** - Khoảng cách từ cạnh trái phone frame  
- **width: 66%** - Chiều rộng video (66% của phone frame)
- **height: 85%** - Chiều cao video (85% của phone frame)

## Cách điều chỉnh nếu video không fit

### Nếu video bị lệch trên/dưới:
Điều chỉnh `top`:
- Lệch xuống → tăng giá trị: `top-[6%]` hoặc `top-[7%]`
- Lệch lên → giảm giá trị: `top-[4%]` hoặc `top-[3%]`

### Nếu video bị lệch trái/phải:
Điều chỉnh `left`:
- Lệch phải → tăng giá trị: `left-[9%]` hoặc `left-[10%]`
- Lệch trái → giảm giá trị: `left-[7%]` hoặc `left-[6%]`

### Nếu video quá rộng/hẹp:
Điều chỉnh `w-[66%]`:
- Quá rộng → giảm: `w-[64%]` hoặc `w-[62%]`
- Quá hẹp → tăng: `w-[68%]` hoặc `w-[70%]`

### Nếu video quá cao/thấp:
Điều chỉnh `h-[85%]`:
- Quá cao → giảm: `h-[83%]` hoặc `h-[80%]`
- Quá thấp → tăng: `h-[87%]` hoặc `h-[90%]`

## Rounded corners

Border radius hiện tại: `rounded-[5%]`

Nếu muốn góc bo tròn hơn/vuông hơn:
- Tròn hơn: `rounded-[8%]` hoặc `rounded-[10%]`
- Vuông hơn: `rounded-[3%]` hoặc `rounded-[2%]`

## File cần chỉnh sửa

`components/sections/Hero.tsx` - dòng ~50-60

```tsx
{/* Video Container - positioned inside phone screen */}
<div className="absolute top-0 left-0 w-full h-full z-0">
  <div className="absolute top-[5%] left-[8%] w-[66%] h-[85%]">
    <div className="relative w-full h-full rounded-[5%] overflow-hidden bg-black">
      <video ...>
    </div>
  </div>
</div>
```

## Testing

1. Thay đổi giá trị
2. Save file
3. Xem kết quả tại http://localhost:3000
4. Fine-tune cho đến khi perfect
5. Commit changes

## Tips

- Thay đổi từng giá trị một để dễ track
- Sử dụng DevTools để inspect positioning
- Test trên nhiều kích thước màn hình
- Video `object-cover` sẽ fill toàn bộ container
