// Simple script to clear all contacts from the database
const mongoose = require('mongoose')
require('dotenv').config({ path: '.env.local' })

// Contact Schema (simplified)
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  company: String,
  service: String,
  budget: String,
  preferred: String,
  whatsapp: String,
  message: String,
  status: { type: String, default: 'new' },
  createdAt: { type: Date, default: Date.now }
})

const Contact = mongoose.model('Contact', contactSchema)

async function clearDatabase() {
  try {
    console.log('🔗 Connecting to MongoDB...')
    
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI not found in environment variables')
    }
    
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('✅ Connected to MongoDB')
    
    // Count existing contacts
    const count = await Contact.countDocuments({})
    console.log(`📊 Found ${count} contacts in database`)
    
    if (count === 0) {
      console.log('✅ Database is already empty')
      return
    }
    
    // Delete all contacts
    console.log('🗑️ Deleting all contacts...')
    const result = await Contact.deleteMany({})
    console.log(`✅ Successfully deleted ${result.deletedCount} contacts`)
    
    // Verify deletion
    const remainingCount = await Contact.countDocuments({})
    console.log(`📊 Remaining contacts: ${remainingCount}`)
    
    if (remainingCount === 0) {
      console.log('🎉 Database cleared successfully!')
    } else {
      console.log('⚠️ Some contacts may still remain')
    }
    
  } catch (error) {
    console.error('❌ Error clearing database:', error.message)
  } finally {
    await mongoose.disconnect()
    console.log('🔌 Disconnected from MongoDB')
    process.exit(0)
  }
}

// Run the script
clearDatabase()