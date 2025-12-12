# Yahoo Email Setup - Step by Step

## Current Configuration
- Email: `solvixcore@yahoo.com`
- Password: `lyujscdjgumgaite` (App Password)

## Issue Diagnosis

The current Yahoo email setup is failing. Here are the steps to fix it:

### Step 1: Verify Yahoo Account Settings

1. **Login to Yahoo Mail**: https://mail.yahoo.com
2. **Go to Account Security**: https://login.yahoo.com/account/security
3. **Check if 2-Step Verification is enabled**

### Step 2: Generate New App Password

1. **Go to App Passwords**: https://login.yahoo.com/account/security/app-passwords
2. **Click "Generate app password"**
3. **Select "Other app"**
4. **Enter name**: "Solvix Core Website"
5. **Copy the 16-character password** (format: abcd efgh ijkl mnop)

### Step 3: Update Environment Variables

Replace the current password in `.env.local`:

```bash
EMAIL_USER=solvixcore@yahoo.com
EMAIL_PASSWORD=your-new-16-char-password
ADMIN_EMAIL=solvixcore@yahoo.com
```

### Step 4: Common Issues & Solutions

**Issue 1: "Authentication failed"**
- Solution: Generate new app password
- Make sure 2-Step Verification is enabled

**Issue 2: "App password option not available"**
- Solution: Enable 2-Step Verification first
- Wait 24 hours after enabling 2FA

**Issue 3: "Connection timeout"**
- Solution: Check firewall/antivirus settings
- Try different SMTP settings

### Step 5: Alternative SMTP Settings

If the current settings don't work, try these:

```javascript
// Option 1: Standard Yahoo SMTP
host: 'smtp.mail.yahoo.com'
port: 587
secure: false
tls: { ciphers: 'SSLv3' }

// Option 2: Alternative Yahoo SMTP
host: 'smtp.mail.yahoo.com'
port: 465
secure: true

// Option 3: Legacy Yahoo SMTP
host: 'plus.smtp.mail.yahoo.com'
port: 587
secure: false
```

### Step 6: Test Steps

1. **Generate new app password**
2. **Update .env.local**
3. **Restart development server**
4. **Test with**: `http://localhost:3000/api/test-email`

### Step 7: Verification Checklist

- [ ] Yahoo account has 2-Step Verification enabled
- [ ] App password is newly generated (16 characters)
- [ ] .env.local has correct EMAIL_PASSWORD
- [ ] Development server restarted
- [ ] No firewall blocking SMTP

## Quick Fix Commands

```bash
# 1. Stop development server
# 2. Update .env.local with new app password
# 3. Restart server
npm run dev

# 4. Test email
curl http://localhost:3000/api/test-email
```

## Expected Result

When working correctly, you should see:
- ✅ Email configuration valid
- ✅ SMTP connection successful  
- ✅ Test emails sent to both admin and customer
- 📧 Emails received in Yahoo inbox

## If Still Not Working

Try these alternatives:
1. **Use Gmail instead** (often more reliable)
2. **Use Resend API** (professional email service)
3. **Use EmailJS** (client-side email service)

The current app password `lyujscdjgumgaite` might be expired or invalid. Generate a fresh one following the steps above.