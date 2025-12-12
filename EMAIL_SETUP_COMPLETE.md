# Complete Email Setup Guide for Solvix Core

## 🚨 Current Issue
The contact form is not sending emails because no email service is configured. Here are 3 easy solutions:

## ✅ Solution 1: Resend API (Recommended - Easiest)

### Step 1: Sign up for Resend
1. Go to [resend.com](https://resend.com)
2. Sign up for free account
3. Verify your email

### Step 2: Get API Key
1. Go to API Keys section
2. Create new API key
3. Copy the key (starts with `re_`)

### Step 3: Add to Environment
Add to your `.env.local` file:
```bash
RESEND_API_KEY=re_your_actual_api_key_here
ADMIN_EMAIL=info@solvixcore.com
```

### Step 4: Verify Domain (Optional but recommended)
1. In Resend dashboard, go to Domains
2. Add your domain (solvixcore.com)
3. Add the DNS records they provide
4. Once verified, emails will come from your domain

---

## ✅ Solution 2: Gmail SMTP (Traditional)

### Step 1: Enable 2-Factor Authentication
1. Go to your Gmail account settings
2. Enable 2-Factor Authentication

### Step 2: Generate App Password
1. Go to Google Account settings
2. Security → 2-Step Verification → App passwords
3. Generate password for "Mail"
4. Copy the 16-character password

### Step 3: Add to Environment
Add to your `.env.local` file:
```bash
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
ADMIN_EMAIL=info@solvixcore.com
```

---

## ✅ Solution 3: EmailJS (Client-side)

### Step 1: Sign up for EmailJS
1. Go to [emailjs.com](https://www.emailjs.com)
2. Sign up for free account

### Step 2: Create Email Service
1. Add Gmail service in EmailJS dashboard
2. Connect your Gmail account
3. Note the Service ID

### Step 3: Create Email Template
1. Create new template
2. Use these template variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
   - `{{service}}`
   - `{{company}}`
   - `{{budget}}`
   - `{{whatsapp}}`

### Step 4: Add to Environment
Add to your `.env.local` file:
```bash
EMAILJS_SERVICE_ID=service_your_id
EMAILJS_TEMPLATE_ID=template_your_id
EMAILJS_PUBLIC_KEY=your_public_key
ADMIN_EMAIL=info@solvixcore.com
```

---

## 🔧 Quick Test

After setting up any method above:

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Test the contact form on your website

3. Check the console logs for success/failure messages

4. Check your email inbox for notifications

---

## 📧 Multiple Methods (Recommended)

You can set up multiple methods for redundancy. The system will try all configured methods and use whichever works.

Example `.env.local` with multiple methods:
```bash
# Primary: Resend API
RESEND_API_KEY=re_your_api_key

# Backup: Gmail SMTP
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-app-password

# Backup: EmailJS
EMAILJS_SERVICE_ID=service_your_id
EMAILJS_TEMPLATE_ID=template_your_id
EMAILJS_PUBLIC_KEY=your_public_key

# Admin email
ADMIN_EMAIL=info@solvixcore.com

# Optional: Webhook notifications
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/your_url
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/your_url
```

---

## 🚀 Production Deployment

### For Vercel:
1. Go to your Vercel project dashboard
2. Settings → Environment Variables
3. Add the same variables from your `.env.local`
4. Redeploy your project

### For Other Platforms:
Add the environment variables in your hosting platform's dashboard.

---

## 🔍 Troubleshooting

### Check Logs
The contact form logs detailed information. Check your console for:
- `✅ [Contact] Method notification sent`
- `❌ [Contact] Method notification failed`

### Common Issues:
1. **Gmail "Less secure apps"** - Use App Password instead
2. **Resend domain not verified** - Emails might go to spam
3. **EmailJS CORS errors** - Check your domain is whitelisted

### Test Email Delivery:
1. Check spam folder
2. Try different email addresses
3. Check email service logs/dashboard

---

## 📞 Need Help?

If you're still having issues:
1. Check the browser console for error messages
2. Check your email service dashboard for delivery logs
3. Verify all environment variables are set correctly
4. Restart your development server after adding env vars

The contact form will save submissions to the database even if email fails, so no inquiries are lost!