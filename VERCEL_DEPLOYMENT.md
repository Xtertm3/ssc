# 🚀 Vercel Deployment Guide

Step-by-step guide to deploy your Sri Shakambari Chits website on Vercel.

## Prerequisites

- GitHub account
- Vercel account (free tier is sufficient)
- Your project with all images added

---

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push to GitHub

1. Initialize Git repository (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Sri Shakambari Chits website"
   ```

2. Create a new repository on GitHub:
   - Go to [github.com](https://github.com)
   - Click "New Repository"
   - Name it: `sri-shakambari-chits-website`
   - Don't initialize with README (you already have one)
   - Click "Create repository"

3. Push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/sri-shakambari-chits-website.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)

2. Sign up/Login (use GitHub for easy integration)

3. Click "Add New Project"

4. Import your GitHub repository:
   - Click "Import Git Repository"
   - Select `sri-shakambari-chits-website`
   - Click "Import"

5. Configure project:
   - **Project Name**: `sri-shakambari-chits` (or your preferred name)
   - **Framework Preset**: Vite (should be auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `dist` (auto-filled)

6. Click "Deploy"

7. Wait 1-2 minutes for deployment to complete

8. Your site will be live at: `https://sri-shakambari-chits.vercel.app`

---

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login

```bash
vercel login
```

### Step 3: Deploy

```bash
# Navigate to your project directory
cd "C:\Users\ANKIT TIWARI\Desktop\ssc"

# Deploy
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? **Select your account**
- Link to existing project? **N**
- Project name? **sri-shakambari-chits**
- In which directory is your code located? **./`**

### Step 4: Deploy to Production

```bash
vercel --prod
```

---

## 🌐 Custom Domain (Optional)

### To add your own domain (e.g., srishakambarichits.com):

1. In Vercel Dashboard:
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your domain name
   - Follow DNS configuration instructions

2. Update your domain's DNS records:
   - Add an A record pointing to Vercel's IP
   - Or add a CNAME record
   - (Exact steps provided by Vercel)

3. SSL certificate is automatically generated (1-2 hours)

---

## 📧 Environment Variables (For Email Integration)

When you add email functionality:

1. In Vercel Dashboard:
   - Go to "Settings" → "Environment Variables"
   - Add your email service credentials:
     - `EMAIL_SERVICE_API_KEY`
     - `EMAIL_TO_ADDRESS` = `info@mrjchits.co.in`

2. Redeploy for changes to take effect

---

## 🔄 Automatic Deployments

Every time you push to your GitHub repository:
- Vercel automatically detects changes
- Builds and deploys your site
- Takes 1-2 minutes
- No manual intervention needed!

To push updates:
```bash
git add .
git commit -m "Updated content/images"
git push
```

---

## 📊 Performance Optimization

Vercel automatically provides:
- ✅ CDN (Content Delivery Network)
- ✅ Automatic HTTPS/SSL
- ✅ Image optimization
- ✅ Gzip compression
- ✅ Edge caching
- ✅ 99.99% uptime

---

## 🐛 Troubleshooting

### Build Failed?

Check Vercel build logs:
1. Go to your project dashboard
2. Click on the failed deployment
3. View "Build Logs"
4. Fix the error shown
5. Push changes to GitHub

### Images not showing?

Make sure:
- Images are in `/public` folder
- Image paths don't have spaces or special characters
- Images are properly referenced in component code

### Routing issues?

Vite automatically handles routing. If you face issues:
1. Ensure `vercel.json` has proper rewrites (usually not needed for Vite)
2. Check console for errors

---

## 📱 Preview Deployments

Vercel creates preview deployments for:
- Every pull request
- Every branch push

Great for testing before going live!

---

## 💡 Pro Tips

1. **Use Vercel Analytics**:
   - Free analytics dashboard
   - Enable in project settings
   - Track visitors, performance

2. **Speed Insights**:
   - Monitor Core Web Vitals
   - Get performance scores
   - Free feature

3. **Preview Mode**:
   - Test changes before pushing to production
   - Use branch deployments

4. **Rollback**:
   - If something breaks, instant rollback
   - Go to "Deployments"
   - Click "...more" on previous deployment
   - Click "Promote to Production"

---

## 🎉 You're Live!

Once deployed, share your website:
- ✅ `https://sri-shakambari-chits.vercel.app`
- ✅ Custom domain (if configured)
- ✅ Lightning-fast global CDN
- ✅ Automatic HTTPS
- ✅ Free hosting!

---

## 📞 Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Vercel Discord**: [vercel.com/discord](https://vercel.com/discord)
- **GitHub Issues**: Create issues in your repo

---

**Deployment Time**: ~2 minutes ⚡
**Cost**: FREE ✨
**Maintenance**: Automatic 🚀
