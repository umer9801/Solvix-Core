# Email Notification Setup Guide

## 📧 Yahoo Mail Setup (Current Configuration)

### Step 1: Enable 2-Factor Authentication
1. Go to [Yahoo Account Security](https://login.yahoo.com/account/security)
2. Enable 2-Step Verification

### Step 2: Generate App Password
1. In Account Security → Generate app password
2. Select "Other app" → Enter "Solvix Core"
3. Copy the 16-character password

### Step 3: Update Environment Variables
```bash
EMAIL_USER=solvixcore@yahoo.com
EMAIL_PASSWORD=your-16-char-yahoo-app-password
ADMIN_EMAIL=solvixcore@yahoo.com
```

## 📧 Gmail Setup (Alternative)

### Step 1: Enable 2-Factor Authentication
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Security → 2-Step Verification → Turn On

### Step 2: Generate App Password
1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Select app: "Mail"
3. Select device: "Other (custom name)" → Enter "Solvix Core"
4. Copy the 16-character password

### Step 3: Update Environment Variables
```bash
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
ADMIN_EMAIL=info@solvixcore.com
```

**Important Notes:**
- Use your actual Gmail address for EMAIL_USER
- Customer emails will show as "Solvix Core - No Reply" (no-reply setup)
- Admin notifications will show as "Solvix Core" 
- Customers cannot reply to the confirmation email (no-reply feature)
- All replies will be directed to your ADMIN_EMAIL

## 🔧 Other Email Services

### Outlook/Hotmail
```bash
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
```

### Yahoo Mail
```bash
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
EMAIL_USER=your-email@yahoo.com
EMAIL_PASSWORD=your-app-password
```

### Custom SMTP
```bash
EMAIL_HOST=your-smtp-server.com
EMAIL_PORT=587
EMAIL_USER=your-email@domain.com
EMAIL_PASSWORD=your-password
```

## 📋 Environment Variables for Production

Add these to your hosting platform:

```bash
# MongoDB
MONGODB_URI=mongodb+srv://solvixcore:nokia9801@cluster0.v8ysvbf.mongodb.net/solvixcore?retryWrites=true&w=majority&appName=Cluster0

# Admin
ADMIN_USER=admin
ADMIN_PASSWORD=admin123

# Email
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
ADMIN_EMAIL=info@solvixcore.com

# Environment
NODE_ENV=production
```

## ✅ What Happens When User Submits Contact Form

1. **Form Data Saved** → MongoDB database
2. **Admin Email Sent** → You get notification with all details
3. **Customer Email Sent** → Customer gets confirmation
4. **Admin Dashboard** → You can manage from `/admin/contacts`

## 📧 Email Features

### Admin Notification Email:
- 🔔 Instant notification when form submitted
- 📋 All customer details (name, email, company, service, budget)
- 📱 Direct WhatsApp and email links
- 🎨 Professional HTML formatting

### Customer Confirmation Email:
- ✅ Thank you message
- 📄 Submission details summary
- 🌐 Link back to website
- 📞 Your contact information

## 🧪 Testing Email Setup

1. **Submit test form** on your website
2. **Check admin email** for notification
3. **Check customer email** for confirmation
4. **Verify in admin dashboard** at `/admin/contacts`

## 🔒 Security Notes

- ✅ Use App Passwords (not regular passwords)
- ✅ Environment variables are secure
- ✅ Emails sent asynchronously (won't slow down form)
- ✅ Error handling (form works even if email fails)

## 📞 Support

If email setup doesn't work:
1. Check Gmail App Password is correct
2. Verify 2FA is enabled
3. Check environment variables spelling
4. Test with different email service