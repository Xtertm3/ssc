# 📷 Image Assets Guide

This document explains where to place all your images for the Sri Shakambari Chits website.

## 📁 Folder Structure

Create these folders in the `/public` directory:

```
public/
├── hero/           # Hero slider images (3 images)
├── gallery/        # Photo gallery images (8 images)
└── team/           # Team member photos (4 images)
```

## 🎯 Image Requirements

### 1. Hero Slider Images (Home Section)
**Location**: `/public/hero/`

**Files needed**:
- `slide-1.jpg` - Professional financial image
- `slide-2.jpg` - Creative business image
- `slide-3.jpg` - Investment/growth themed image

**Specifications**:
- Size: 1920 x 1080 pixels (16:9 aspect ratio)
- Format: JPG or PNG
- Quality: High quality, professional photos
- Theme: Finance, investment, business growth, success

**To implement**:
Update [Home.jsx](src/components/Home.jsx) line 12-28, replace the `imagePlaceholder` with actual `<img>` tags:
```jsx
<img src="/hero/slide-1.jpg" alt="Hero Slide 1" />
```

---

### 2. Photo Gallery Images (Photo Gallery Section)
**Location**: `/public/gallery/`

**Files needed**:
- `gallery-1.jpg` - Office exterior
- `gallery-2.jpg` - Office interior
- `gallery-3.jpg` - Team meeting/event
- `gallery-4.jpg` - Customer interaction
- `gallery-5.jpg` - Awards/Certificates
- `gallery-6.jpg` - Company event
- `gallery-7.jpg` - Team celebration
- `gallery-8.jpg` - Professional moment

**Specifications**:
- Size: 1200 x 800 pixels (3:2 aspect ratio)
- Format: JPG or PNG
- Quality: High quality
- Theme: Office, team, events, achievements

**To implement**:
Update [PhotoGallery.jsx](src/components/PhotoGallery.jsx) lines 19-23:
```jsx
<img 
  src={`/gallery/gallery-${img.id}.jpg`} 
  alt={`Gallery ${img.id}`}
  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
/>
```

---

### 3. Team Member Photos (Our Team Section)
**Location**: `/public/team/`

**Files needed**:
- `v-munnanju.jpg` - V Munnanju (Managing Director)
- `d-ramaiah.jpg` - D. Ramaiah (Director)
- `m-jairaj.jpg` - M Jairaj (Director)
- `r-srinivas.jpg` - R Srinivas (Director)

**Specifications**:
- Size: 600 x 600 pixels (1:1 square aspect ratio)
- Format: JPG or PNG
- Quality: High quality professional headshots
- Background: Clean, professional background (white/gray preferred)
- Style: Business formal attire

**To implement**:
Update [OurTeam.jsx](src/components/OurTeam.jsx) lines 63-68:
```jsx
<img 
  src={`/team/${member.imagePlaceholder.toLowerCase().replace(/_/g, '-').replace('-image', '')}.jpg`}
  alt={member.name}
  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
/>
```

---

## 🎨 Image Optimization Tips

1. **Compress images** before uploading to reduce file size:
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target: < 500KB per image

2. **Use consistent style**:
   - Same color temperature across all images
   - Professional and business-appropriate
   - Avoid overly casual or low-quality photos

3. **Consider WebP format**:
   - Better compression than JPG
   - Supported by all modern browsers
   - Can reduce file size by 25-35%

---

## 🔄 Quick Implementation Steps

1. **Create folders**:
   ```bash
   mkdir public/hero public/gallery public/team
   ```

2. **Add your images** to respective folders

3. **Update component files** with actual image paths (see code examples above)

4. **Test locally**:
   ```bash
   npm run dev
   ```

5. **Verify all images load** without errors

---

## ⚠️ Current Placeholder Status

Currently, all image locations show colorful placeholders with labels. Once you add real images and update the component code, these placeholders will be replaced with your actual photos.

### What you'll see now:
- **Hero Section**: Gradient placeholders with "SLIDE_*_IMAGE" text
- **Gallery**: Orange/gold gradient squares with "GALLERY_IMAGE_*" labels
- **Team**: Member photo placeholders with "NAME_IMAGE" labels

### After adding images:
- Beautiful hero slider with your professional photos
- Attractive gallery grid with office/event photos
- Professional team section with member headshots

---

## 📞 Need Help?

If you need assistance with:
- Image selection
- Image editing/cropping
- Technical implementation
- Code updates

Feel free to ask!

---

**Remember**: High-quality images make a huge difference in website appearance. Take time to choose professional, well-lit, and relevant photos for the best results! 📸✨
