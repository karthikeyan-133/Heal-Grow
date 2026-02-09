# Heal & Grow - Vercel Deployment Guide

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard
1. Go to [Vercel](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository: `karthikeyan-133/Heal-Grow`
4. Vercel will auto-detect the configuration from `vercel.json`
5. Click "Deploy"

### Option 2: Deploy via Vercel CLI
```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Project Structure
- Main website files are in `startup2-1.0.0/` directory
- `vercel.json` configures routing to serve files from this directory
- Entry points:
  - `/` → `startup2-1.0.0/index.html`
  - `/new-landing.html` → `startup2-1.0.0/new-landing.html`

## Configuration
The `vercel.json` file handles:
- Static file serving from `startup2-1.0.0/`
- Clean URLs (no .html extension needed)
- Proper routing for all assets (CSS, JS, images)

## After Deployment
Your site will be live at: `https://your-project-name.vercel.app`

You can also add a custom domain in Vercel settings.
