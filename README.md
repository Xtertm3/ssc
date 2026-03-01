# Sri Shakambari Chits Pvt Ltd Website

A modern, professional single-page website for Sri Shakambari Chits Pvt Ltd built with Vite and React.

## 🎨 Color Scheme

- **Primary Orange**: #ff8c42
- **Primary Gold**: #d4af37
- **Accent Red**: #c1272d
- **White**: #ffffff
- **Dark Gray**: #333333

## 🚀 Features

- Modern, responsive design
- Smooth scrolling navigation
- Hero slider with auto-rotation
- Interactive components
- Contact form with email integration
- Google Maps integration
- Policy modals (Privacy, Refund, Terms)
- Professional financial theme

## 📁 Project Structure

```
ssc/
├── public/
│   ├── gallery/          # Place gallery images here (8 images)
│   └── team/             # Place team member photos here (4 images)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   │   ├── AboutUs.jsx
│   │   ├── PhotoGallery.jsx
│   │   ├── Payments.jsx
│   │   ├── ChitSchemes.jsx
│   │   ├── OurTeam.jsx
│   │   ├── Testimonials.jsx
│   │   ├── RecentPosts.jsx
│   │   ├── ContactUs.jsx
│   │   ├── Footer.jsx
│   │   ├── PolicyModal.jsx
│   │   └── policyData.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🖼️ Adding Images

### Hero Slider Images (3 images)
Place your hero slider images and update the `Home.jsx` component:
- Recommended size: 1920x1080px
- Professional financial/creative images
- Location: `/public/hero/`

### Gallery Images (8 images)
Place gallery images in `/public/gallery/`:
- Recommended size: 1200x800px
- Name them: `gallery-1.jpg` to `gallery-8.jpg`
- Update `PhotoGallery.jsx` to use these images

### Team Member Photos (4 images)
Place team photos in `/public/team/`:
- Recommended size: 600x600px
- Name them: `v-munnanju.jpg`, `d-ramaiah.jpg`, `m-jairaj.jpg`, `r-srinivas.jpg`
- Update `OurTeam.jsx` to use these images

## 📧 Email Configuration

The contact form is currently set to send emails to: **info@mrjchits.co.in**

To enable actual email sending, you'll need to:
1. Set up a backend service (Node.js/Express with Nodemailer)
2. Or use a service like EmailJS, FormSpree, or SendGrid
3. Update the `handleSubmit` function in `ContactUs.jsx`

## 🗺️ Google Maps

The map in ContactUs section uses an embedded Google Maps iframe. The address is:
**Sri Shakambari Chits Private Ltd, 75, Banashankari Market, Jumma Masjid Road, Avenue Road Cross, Ganigarpet, Nagarathpete, Bengaluru, Karnataka 560002**

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Vite configuration
5. Click "Deploy"

Or use Vercel CLI:
```bash
npm install -g vercel
vercel
```

## 📱 Sections

1. **Home** - Hero slider with call-to-action
2. **About Us** - Company history and policy buttons
3. **Photo Gallery** - 4x2 grid of images
4. **Payments** - NEFT/RTGS and Cheque payment details
5. **Chit Schemes** - 8 different investment schemes
6. **Our Team** - 4 team members with photos
7. **Testimonials** - 3 customer reviews
8. **Recent Posts** - 4 blog post previews
9. **Contact Us** - Contact form, details, and map

## 🎯 Navigation

Smooth scrolling single-page navigation with active state highlighting. Mobile-responsive hamburger menu.

## 🔧 Customization

### To Update Content
Most content is hardcoded in the respective component files. Edit the component JSX to update text, links, or structure.

### To Change Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
  --primary-orange: #ff8c42;
  --primary-gold: #d4af37;
  --accent-red: #c1272d;
}
```

### To Add New Sections
1. Create new component in `src/components/`
2. Import and add to `App.jsx`
3. Add navigation link in `Navbar.jsx`

## 🎨 Design Features

- Gradient backgrounds
- Smooth transitions and hover effects
- Professional typography (Poppins & Playfair Display)
- Box shadows and depth
- Responsive grid layouts
- Interactive cards
- Modern UI elements

## 📄 License

© 2026 Sri Shakambari Chits Pvt Ltd. All rights reserved.

## 📞 Support

For any questions or assistance, contact:
- Email: info@mrjchits.co.in
- Phone: +91 9986277180

---

**Built with ❤️ using Vite + React**
