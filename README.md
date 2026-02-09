# Heal & Grow Community Website

A comprehensive mental wellness platform offering therapy, counseling, life coaching, and wellness programs.

## 📁 Project Structure

```
heal-and-grow/
├── startup2-1.0.0/          # Main website (upload this to Hostinger)
│   ├── index.html           # Main homepage
│   ├── new-landing.html     # Alternative landing page for ads
│   ├── contact.html         # Contact page
│   ├── quote.html           # Quote request page
│   ├── css/                 # Stylesheets
│   ├── js/                  # JavaScript files
│   ├── img/                 # Images
│   ├── audio/               # Audio testimonials
│   ├── video/               # Video content
│   ├── lib/                 # Third-party libraries
│   ├── service-*.html       # Service pages
│   └── problem-*.html       # Problem-specific pages
├── index.html               # Root redirect (optional)
└── README.md                # This file
```

## 🚀 Deployment to Hostinger

### Step 1: Prepare Files
1. Navigate to the `startup2-1.0.0` folder
2. This folder contains your complete website

### Step 2: Upload to Hostinger
1. Log in to your Hostinger control panel
2. Go to **File Manager**
3. Navigate to `public_html` directory
4. Upload ALL contents from `startup2-1.0.0` folder to `public_html`
   - **Important**: Upload the CONTENTS, not the folder itself
   - Your `public_html` should have: index.html, css/, js/, img/, etc.

### Step 3: File Structure on Hostinger
```
public_html/
├── index.html              # Main entry point
├── new-landing.html        # Accessible at: yourdomain.com/new-landing.html
├── contact.html
├── css/
├── js/
├── img/
├── audio/
├── video/
└── [all other files]
```

### Step 4: Verify Deployment
1. Visit your domain: `https://yourdomain.com`
2. Test the ad landing page: `https://yourdomain.com/new-landing.html`
3. Test all navigation links
4. Test contact form (should redirect to WhatsApp)
5. Test hiring form (should redirect to WhatsApp)

## 🔧 Features

### ✅ Working Features (No Backend Required)
- **Contact Form** → Redirects to WhatsApp
- **Hiring Form** → Redirects to WhatsApp
- **Audio Testimonials** → Static audio files
- **Video Content** → Static video files
- **All Navigation** → Pure HTML links
- **Responsive Design** → Works on all devices

### 📱 WhatsApp Integration
All forms redirect to WhatsApp number: **+91 6238258336**

To change the WhatsApp number, search for `+916238258336` in:
- `index.html` (line ~1621)
- `contact.html` (line ~365)

## 🌐 Important URLs

- **Main Website**: `https://yourdomain.com`
- **Ad Landing Page**: `https://yourdomain.com/new-landing.html`
- **Contact Page**: `https://yourdomain.com/contact.html`
- **Services**: `https://yourdomain.com/service-therapy.html` (etc.)

## 📝 Notes

### Server.js (Not Needed for Production)
- `server.js` is ONLY for local testing
- **Do NOT upload** `server.js` to Hostinger
- Hostinger serves static files automatically

### Local Testing (Optional)
If you want to test locally before uploading:

1. Install Node.js
2. Navigate to `startup2-1.0.0` folder
3. Run: `node server.js`
4. Open: `http://localhost:8080`

## 🎨 Customization

### Change Contact Information
Edit these files:
- `index.html` - Main contact info
- `contact.html` - Contact page details
- All `service-*.html` and `problem-*.html` files

### Change Colors/Styling
Edit: `css/style.css`

### Change Images
Replace files in: `img/` folder

## 📞 Support

For questions or issues:
- Email: healandgrowcommunity@gmail.com
- Phone: +91 62382 58336
- Location: Kozhinjampara, Palakkad

## 📄 License

© 2025 Heal & Grow Community. All rights reserved.
