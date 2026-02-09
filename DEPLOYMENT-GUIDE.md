# 🚀 Hostinger Deployment Guide - Heal & Grow

## Quick Start (5 Minutes)

### What You Need
- ✅ Hostinger account with active hosting
- ✅ Your domain name
- ✅ Files from `startup2-1.0.0` folder

---

## Step-by-Step Deployment

### 1️⃣ Access Hostinger File Manager

1. Log in to [Hostinger](https://www.hostinger.com)
2. Go to **Hosting** → Select your hosting plan
3. Click **File Manager** button
4. Navigate to `public_html` folder

### 2️⃣ Clean Up public_html (If Needed)

If `public_html` has default files:
1. Select all files (except `.htaccess` if present)
2. Click **Delete**
3. Confirm deletion

### 3️⃣ Upload Your Website

**Option A: Using File Manager (Recommended)**
1. Click **Upload Files** button
2. Select ALL files from `startup2-1.0.0` folder:
   - index.html
   - new-landing.html
   - All other .html files
   - css/ folder
   - js/ folder
   - img/ folder
   - audio/ folder
   - video/ folder
   - lib/ folder
3. Wait for upload to complete (may take 5-10 minutes for large files)

**Option B: Using FTP (Alternative)**
1. Get FTP credentials from Hostinger dashboard
2. Use FileZilla or any FTP client
3. Upload all contents from `startup2-1.0.0` to `public_html`

### 4️⃣ Verify File Structure

Your `public_html` should look like this:
```
public_html/
├── index.html              ✅
├── new-landing.html        ✅
├── contact.html            ✅
├── quote.html              ✅
├── css/                    ✅
│   ├── bootstrap.min.css
│   └── style.css
├── js/                     ✅
│   └── main.js
├── img/                    ✅
│   └── [all images]
├── audio/                  ✅
│   └── [audio files]
├── video/                  ✅
│   └── [video files]
└── lib/                    ✅
    └── [libraries]
```

### 5️⃣ Test Your Website

1. **Main Website**: Visit `https://yourdomain.com`
   - Should show the main homepage
   - Test navigation menu
   - Check all links work

2. **Ad Landing Page**: Visit `https://yourdomain.com/new-landing.html`
   - Should show the modern landing page
   - Test WhatsApp button

3. **Contact Form**: Go to Contact page
   - Fill out the form
   - Click "Send Message via WhatsApp"
   - Should open WhatsApp with pre-filled message

4. **Hiring Form**: Click "Join Our Team"
   - Fill out the form
   - Submit
   - Should open WhatsApp with application details

---

## 🔧 Common Issues & Solutions

### Issue 1: "404 Not Found" Error
**Solution**: Make sure files are in `public_html`, not in a subfolder

### Issue 2: Images Not Loading
**Solution**: 
- Check that `img/` folder uploaded correctly
- Verify file names match (case-sensitive)
- Check file permissions (should be 644)

### Issue 3: Audio/Video Not Playing
**Solution**:
- Ensure `audio/` and `video/` folders uploaded
- Check file formats are supported (.mp3, .mp4, .ogg)
- Verify file sizes aren't too large

### Issue 4: CSS Not Applied
**Solution**:
- Verify `css/` folder uploaded
- Clear browser cache (Ctrl+F5)
- Check `css/style.css` file exists

---

## 📱 Setting Up Custom Domain

If using a custom domain:

1. Go to Hostinger dashboard
2. Click **Domains**
3. Add your domain
4. Update nameservers (if domain bought elsewhere)
5. Wait 24-48 hours for DNS propagation

---

## 🔒 SSL Certificate (HTTPS)

Hostinger provides free SSL:

1. Go to **SSL** section in Hostinger
2. Click **Install SSL**
3. Select your domain
4. Wait 10-15 minutes for activation
5. Your site will be accessible via `https://`

---

## 📊 Performance Optimization

### Enable Caching
1. Create/edit `.htaccess` in `public_html`
2. Add caching rules (see below)

### Compress Images
- Use tools like TinyPNG before uploading
- Reduces load time significantly

### Enable Gzip Compression
- Automatically enabled by Hostinger
- Reduces file transfer sizes

---

## 🎯 Post-Deployment Checklist

- [ ] Main website loads correctly
- [ ] All navigation links work
- [ ] Images display properly
- [ ] Audio testimonials play
- [ ] Video content plays
- [ ] Contact form redirects to WhatsApp
- [ ] Hiring form redirects to WhatsApp
- [ ] Mobile responsive design works
- [ ] SSL certificate active (HTTPS)
- [ ] Custom domain configured (if applicable)

---

## 📞 Need Help?

**Hostinger Support**:
- Live Chat: Available 24/7
- Email: support@hostinger.com
- Knowledge Base: https://support.hostinger.com

**Website Issues**:
- Email: healandgrowcommunity@gmail.com
- WhatsApp: +91 62382 58336

---

## 🎉 You're Done!

Your website is now live! Share your URL:
- Main Site: `https://yourdomain.com`
- Ad Landing: `https://yourdomain.com/new-landing.html`

**Pro Tip**: Bookmark your Hostinger File Manager for easy updates!
