# Yahoo Email Setup Guide - Roman Urdu

## 📧 Yahoo Email Configuration for Solvix Core

### Step 1: Yahoo Account Settings
1. **Yahoo Mail mein login karein:** https://mail.yahoo.com
2. **Account Info page par jao:** https://login.yahoo.com/account/personalinfo
3. **Account Security** click karein

### Step 2: 2-Step Verification Enable Karein
1. **Account Security page mein:**
   - "Two-step verification" dhundein
   - "Turn on" click karein
   - Phone number add karein
   - Verification complete karein

### Step 3: App Password Generate Karein (Multiple Ways)

**Method 1: Direct Link**
1. **Is link par jao:** https://login.yahoo.com/account/security/app-passwords
2. **"Generate app password" click karein**
3. **"Other app" select karein**
4. **Name enter karein:** "Solvix Core Website"
5. **16-character password copy karein**

**Method 2: Account Security se**
1. **Account Security page par scroll down karein**
2. **"App passwords" section dhundein**
3. **"Generate and manage app passwords" click karein**
4. **"Generate new password" click karein**
5. **App name enter karein:** "Solvix Core"

**Method 3: Agar option nahi mil raha**
1. **Yahoo Help Center jao:** https://help.yahoo.com/kb/SLN15241.html
2. **"Generate app password" search karein**
3. **Step-by-step guide follow karein**

### Step 4: Agar App Password Option Nahi Mil Raha

**Possible Issues:**
1. **2-Step Verification enable nahi hai** - Pehle enable karein
2. **Account new hai** - 24-48 hours wait karein
3. **Region restriction** - VPN try karein (US location)

**Alternative Method:**
1. **Yahoo Mail app download karein** mobile mein
2. **Settings → Account Security → App Passwords**
3. **Desktop se zyada options mobile mein milte hain**

### Step 3: Environment Variables Update Karein
```bash
EMAIL_USER=solvixcore@yahoo.com
EMAIL_PASSWORD=your-16-char-yahoo-app-password
ADMIN_EMAIL=solvixcore@yahoo.com
```

### Step 4: Production Deployment
**Vercel Dashboard mein ye environment variables add karein:**

| Key | Value |
|-----|-------|
| `EMAIL_USER` | `solvixcore@yahoo.com` |
| `EMAIL_PASSWORD` | `your-16-char-app-password` |
| `ADMIN_EMAIL` | `solvixcore@yahoo.com` |
| `MONGODB_URI` | `mongodb+srv://solvixcore:nokia9801@cluster0.v8ysvbf.mongodb.net/solvixcore?retryWrites=true&w=majority&appName=Cluster0` |
| `ADMIN_USER` | `admin` |
| `ADMIN_PASSWORD` | `admin123` |
| `NODE_ENV` | `production` |

### Step 5: Test Karein
1. **Contact form submit karein** website par
2. **Check karein:**
   - Admin email: `solvixcore@yahoo.com` mein notification aayegi
   - Customer email: User ko confirmation email jayegi
   - Admin dashboard: `/admin/contacts` mein data save hoga

## 🔧 Yahoo SMTP Settings (Already Configured)
```javascript
Host: smtp.mail.yahoo.com
Port: 587
Security: STARTTLS
Authentication: Yes
```

## ⚠️ Important Notes:
- **2-Step Verification zaroori hai** Yahoo mein
- **App Password use karein**, regular password nahi
- **Spaces ignore karein** app password mein
- **Case sensitive hai** app password

## 🧪 Troubleshooting:
1. **Email nahi aa rahi?**
   - App password check karein
   - 2FA enabled hai ya nahi
   - Environment variables spelling check karein

2. **"Authentication failed" error?**
   - New app password generate karein
   - Yahoo account mein "Less secure apps" setting check karein

3. **Still not working?**
   - Yahoo account temporarily locked ho sakta hai
   - 24 hours wait karein ya Yahoo support contact karein

## 📱 Alternative: Quick Discord Setup (2 minutes)
Agar Yahoo setup mein issue hai:
```bash
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/your_webhook_url
```

## ✅ What Will Happen:
1. **User submits form** → Data saves to MongoDB
2. **Admin gets email** → `solvixcore@yahoo.com` par notification
3. **Customer gets email** → User ko confirmation from `solvixcore@yahoo.com`
4. **Admin dashboard** → `/admin/contacts` mein manage kar sakte hain

**Email format:** Professional HTML templates with all customer details, direct reply buttons, and WhatsApp links.

## 🔧 Yahoo Account Troubleshooting

### Agar "Generate App Password" Option Nahi Mil Raha:

**Step A: Check Account Type**
1. **Yahoo Mail Basic** - App passwords available
2. **Yahoo Mail Plus** - App passwords available  
3. **Business account** - Admin permission chahiye

**Step B: Browser Issues**
1. **Different browser try karein** (Chrome, Firefox, Edge)
2. **Incognito/Private mode** use karein
3. **Cache clear karein**

**Step C: Mobile App Method**
1. **Yahoo Mail app download karein**
2. **Account settings mein jao**
3. **Security settings check karein**
4. **App passwords option mobile mein zyada milta hai**

**Step D: Yahoo Support Contact**
1. **Yahoo Help:** https://help.yahoo.com
2. **Live Chat:** Available 24/7
3. **Phone Support:** Country specific numbers

### Alternative Yahoo Setup (Without App Password)

**Method 1: Less Secure Apps (Not Recommended)**
1. **Account Security → Less secure app access**
2. **Turn on** (temporary)
3. **Use regular password instead of app password**
4. **Turn off after testing**

**Method 2: OAuth Setup (Advanced)**
```javascript
// Use OAuth instead of password
auth: {
  type: 'OAuth2',
  user: 'solvixcore@yahoo.com',
  clientId: 'your_client_id',
  clientSecret: 'your_client_secret',
  refreshToken: 'your_refresh_token'
}
```

## 📱 Step-by-Step Screenshots Guide

### Visual Steps:
1. **Login to Yahoo:** mail.yahoo.com
2. **Click profile icon** (top right)
3. **Account Info** click karein
4. **Account Security** tab
5. **Scroll down** to "App passwords"
6. **Generate app password** click
7. **Select "Other app"**
8. **Enter name:** "Solvix Core"
9. **Copy 16-character password**

### Common Locations for App Password:
- Account Security → App passwords
- Privacy → App passwords  
- Security → Generate app password
- Account Info → Security → App passwords

## ⚠️ Important Notes:

1. **2-Step Verification zaroori hai** - Without this, app password option nahi milega
2. **Account age matter karta hai** - New accounts mein 24-48 hours wait
3. **Region restrictions** - Some countries mein limited access
4. **Mobile app preferred** - Desktop se zyada options mobile mein

## 🧪 Testing Steps:

1. **App password generate karne ke baad:**
   ```bash
   EMAIL_USER=solvixcore@yahoo.com
   EMAIL_PASSWORD=abcd efgh ijkl mnop  # 16-character app password
   ```

2. **Vercel mein environment variables add karein**
3. **Redeploy karein**
4. **Contact form test karein**

**Agar phir bhi issue hai, to Discord webhook use kar sakte hain as backup!**