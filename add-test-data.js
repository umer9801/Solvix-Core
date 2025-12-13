// Script to add fresh test data to the database
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

const testContacts = [
  {
    name: 'John Smith',
    email: 'john.smith@example.com',
    company: 'Tech Solutions Inc',
    service: 'customized-websites',
    budget: '$5,000 - $10,000',
    preferred: 'email',
    message: 'I need a modern website for my business. Looking for something professional and responsive.',
    status: 'new',
    createdAt: new Date()
  },
  {
    name: 'Sarah Johnson',
    email: 'sarah.j@startup.com',
    company: 'StartupCo',
    service: 'ai-ml',
    budget: '$10,000 - $25,000',
    preferred: 'whatsapp',
    whatsapp: '+1234567890',
    message: 'We need an AI chatbot for customer support. Can you help us build one?',
    status: 'contacted',
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000) // 1 day ago
  },
  {
    name: 'Mike Wilson',
    email: 'mike@ecommerce.com',
    company: 'E-Commerce Plus',
    service: 'shopify-store-designing',
    budget: '$2,000 - $5,000',
    preferred: 'email',
    message: 'Looking to redesign our Shopify store. Need better conversion rates.',
    status: 'closed',
    createdAt: new Date(Date.now() - 48 * 60 * 60 * 1000) // 2 days ago
  },
  {
    name: 'Lisa Chen',
    email: 'lisa.chen@marketing.com',
    service: 'content-creation',
    budget: '$1,000 - $3,000',
    preferred: 'email',
    message: 'Need help with content creation for our social media campaigns.',
    status: 'new',
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
  },
  {
    name: 'David Brown',
    email: 'david@videoagency.com',
    company: 'Video Agency Pro',
    service: 'video-editing',
    budget: '$3,000 - $7,000',
    preferred: 'whatsapp',
    whatsapp: '+1987654321',
    message: 'We have a lot of raw footage that needs professional editing. Can you handle bulk projects?',
    status: 'new',
    createdAt: new Date(Date.now() - 30 * 60 * 1000) // 30 minutes ago
  }
]

async function addTestData() {
  try {
    console.log('🔗 Connecting to MongoDB...')
    
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI not found in environment variables')
    }
    
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('✅ Connected to MongoDB')
    
    // Clear existing data first
    const existingCount = await Contact.countDocuments({})
    if (existingCount > 0) {
      console.log(`🗑️ Clearing ${existingCount} existing contacts...`)
      await Contact.deleteMany({})
    }
    
    // Add test contacts
    console.log('📝 Adding test contacts...')
    const result = await Contact.insertMany(testContacts)
    console.log(`✅ Successfully added ${result.length} test contacts`)
    
    // Show summary
    const stats = {
      total: await Contact.countDocuments({}),
      new: await Contact.countDocuments({ status: 'new' }),
      contacted: await Contact.countDocuments({ status: 'contacted' }),
      closed: await Contact.countDocuments({ status: 'closed' })
    }
    
    console.log('📊 Database Summary:')
    console.log(`   Total: ${stats.total}`)
    console.log(`   New: ${stats.new}`)
    console.log(`   Contacted: ${stats.contacted}`)
    console.log(`   Closed: ${stats.closed}`)
    
    console.log('🎉 Test data added successfully!')
    
  } catch (error) {
    console.error('❌ Error adding test data:', error.message)
  } finally {
    await mongoose.disconnect()
    console.log('🔌 Disconnected from MongoDB')
    process.exit(0)
  }
}

// Run the script
addTestData()