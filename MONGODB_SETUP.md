# MongoDB Integration Setup

This guide will help you set up MongoDB for the contact form in your Solvix Core website.

## 🚀 Quick Setup

### 1. MongoDB Atlas (Recommended)

1. **Create a MongoDB Atlas Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Sign up for a free account

2. **Create a Cluster**
   - Click "Build a Database"
   - Choose "Shared" (free tier)
   - Select your preferred cloud provider and region
   - Click "Create Cluster"

3. **Create Database User**
   - Go to "Database Access" in the left sidebar
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Create a username and strong password
   - Set user privileges to "Read and write to any database"

4. **Configure Network Access**
   - Go to "Network Access" in the left sidebar
   - Click "Add IP Address"
   - Choose "Allow Access from Anywhere" (0.0.0.0/0) for development
   - For production, add your server's specific IP

5. **Get Connection String**
   - Go to "Database" in the left sidebar
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string

### 2. Environment Variables

1. **Create `.env.local` file** in your project root:
```bash
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/solvixcore?retryWrites=true&w=majority
```

2. **Replace placeholders**:
   - `username`: Your database username
   - `password`: Your database password
   - `cluster`: Your cluster name
   - `solvixcore`: Your database name (can be any name)

### 3. Test the Integration

1. **Start your development server**:
```bash
npm run dev
```

2. **Test the contact form**:
   - Go to `/contact`
   - Fill out and submit the form
   - Check your MongoDB Atlas dashboard for the new document

3. **View submissions** (Admin):
   - Go to `/admin/contacts`
   - View all contact submissions
   - Update status of submissions

## 📊 Database Schema

The contact form creates documents with this structure:

```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required, validated),
  company: String (optional),
  service: String (enum),
  budget: String,
  preferred: String (email/whatsapp),
  whatsapp: String (conditional),
  message: String (required),
  status: String (new/contacted/closed),
  createdAt: Date,
  updatedAt: Date
}
```

## 🔧 API Endpoints

### Contact Submission
- **POST** `/api/contact`
- Saves contact form submissions to MongoDB
- Validates required fields
- Returns success/error responses

### Admin Dashboard
- **GET** `/api/admin/contacts`
- Retrieves contact submissions with pagination
- Supports filtering by status
- **PATCH** `/api/admin/contacts`
- Updates contact status

## 🛡️ Security Features

- **Input validation** using Mongoose schemas
- **Email format validation**
- **Field length limits**
- **Conditional validation** (WhatsApp when preferred)
- **Error handling** for database operations
- **Connection pooling** for performance

## 🚀 Production Deployment

### Vercel Deployment

1. **Add environment variable**:
   - Go to your Vercel dashboard
   - Select your project
   - Go to Settings → Environment Variables
   - Add `MONGODB_URI` with your connection string

2. **Deploy**:
```bash
npm run build
vercel --prod
```

### Other Platforms

Make sure to add the `MONGODB_URI` environment variable to your hosting platform's environment configuration.

## 📈 Monitoring

- **MongoDB Atlas Dashboard**: Monitor database usage, performance
- **Application Logs**: Check console for contact submission logs
- **Admin Panel**: `/admin/contacts` for managing submissions

## 🔍 Troubleshooting

### Common Issues

1. **Connection Error**
   - Check your connection string format
   - Verify username/password
   - Ensure network access is configured

2. **Validation Errors**
   - Check required fields are provided
   - Verify email format
   - Ensure WhatsApp number when required

3. **Environment Variables**
   - Restart development server after adding `.env.local`
   - Check variable name spelling: `MONGODB_URI`

### Debug Mode

Add this to your `.env.local` for detailed MongoDB logs:
```bash
DEBUG=mongoose:*
```

## 📞 Support

If you need help with the MongoDB setup:
1. Check the MongoDB Atlas documentation
2. Review the error logs in your console
3. Test the connection using MongoDB Compass
4. Verify your environment variables are loaded correctly

---

Your contact form is now powered by MongoDB! 🎉