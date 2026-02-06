# Assets Guide

## Images Needed

### Phone Mockup Frame
- **Path**: `/public/images/phone-frame.png`
- **Recommended**: Use iPhone 14 Pro mockup
- **Size**: ~800x1146px
- **Format**: PNG with transparency
- **Alternative**: Current SVG fallback creates simple phone frame

### Brand Logos
Place brand logos in `/public/logos/`:
- `one-leaf.png`
- `kans.png`
- `funny-elves.png`
- `haidilao.png`
- `nanfu.png`
- `botare.png`
- `mooekiss.png`
- `tulandut.png`

**Specs**:
- Format: PNG/SVG
- Background: Transparent
- Max size: 200x100px
- Optimized for web

## Videos

### Hero Video
- **Path**: `/public/videos/hero-video.mp4`
- **Format**: MP4 (H.264 codec)
- **Max size**: 5MB
- **Duration**: 5-15 seconds
- **Aspect ratio**: 9:16 (vertical/portrait)
- **Resolution**: 720x1280 or 1080x1920
- **Loop**: Video will loop automatically
- **Muted**: Video starts muted (autoplay requirement)

### Video Thumbnail
- **Path**: `/public/videos/thumbnail.jpg`
- **Format**: JPG
- **Size**: Same as video aspect ratio
- **Use**: Shown before video loads

## How to Add Assets

1. **Download/Create your assets**
2. **Optimize images**:
   - Use tools like TinyPNG, ImageOptim
   - Convert to WebP when possible
3. **Place in correct folders**
4. **Update filenames** in components if needed
5. **Test** on localhost

## Fallback Behavior

If assets are missing:
- **Phone frame**: CSS-based border fallback
- **Brand logos**: Text name displayed
- **Video**: Black background shown

## Next.js Image Optimization

Consider using Next.js `<Image>` component for:
- Automatic optimization
- Lazy loading
- Responsive sizes
- WebP conversion

Example:
```tsx
import Image from 'next/image'

<Image
  src="/logos/brand.png"
  alt="Brand name"
  width={200}
  height={100}
/>
```
