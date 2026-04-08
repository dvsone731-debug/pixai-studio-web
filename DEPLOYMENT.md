# PixAI Studio Web - Deployment Guide

**Email:** dvsone731@gmail.com  
**Status:** Ready for Deployment  
**Date:** April 7, 2026

---

## 🚀 Quick Start Deployment

### Option 1: Deploy to Vercel (Recommended - 5 minutes)

1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "New Project"
4. Select your pixai-web repository
5. Click "Deploy"
6. Get your live URL in 2-3 minutes!

### Option 2: Deploy to Netlify

1. Go to https://netlify.com
2. Click "New site from Git"
3. Connect GitHub repository
4. Deploy automatically

### Option 3: Deploy to AWS Amplify

1. Go to https://aws.amazon.com/amplify
2. Connect GitHub repository
3. Configure and deploy

---

## 🌐 Custom Domain Setup

1. Purchase domain from GoDaddy, Namecheap, or Google Domains
2. In your hosting platform (Vercel/Netlify), add custom domain
3. Update DNS records to point to your host
4. SSL certificate is automatic

---

## 📋 Pre-Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Dependencies installed
- [ ] Build successful
- [ ] Environment variables configured
- [ ] All pages load correctly

---

## 🔧 Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://api.pixaistudio.com
NEXT_PUBLIC_STRIPE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
```

---

## 💰 Cost Estimation

- Vercel: Free-$20/month
- Domain: $10-15/year
- SSL: Free (automatic)
- Total: $10-35/month

---

## 🎯 Next Steps

1. Deploy to Vercel (5 minutes)
2. Set up custom domain (optional)
3. Configure environment variables
4. Integrate backend API
5. Launch!

---

**Your web app is ready to deploy!** 🚀
