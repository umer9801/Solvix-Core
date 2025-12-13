// Test MongoDB connection
const mongoose = require('mongoose')
require('dotenv').config({ path: '.env.local' })

async function testMongoDB() {
  try {
    console.log('🔗 Testing MongoDB connection...')
    
    if (!process.env.MONGODB_URI) {
      console.log('❌ MONGODB_URI not found in .env.local')
      return
    }
    
    console.log('📡 Connecting to:', process.env.MONGODB_URI.replace(/\/\/.*@/, '//***:***@'))
    
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('✅ MongoDB connected successfully!')
    
    // Test creating a collection
    const testSchema = new mongoose.Schema({ name: String, createdAt: Date })
    const TestModel = mongoose.model('Test', testSchema)
    
    const testDoc = new TestModel({ 
      name: 'Connection Test', 
      createdAt: new Date() 
    })
    
    await testDoc.save()
    console.log('✅ Test document created successfully!')
    
    // Clean up test document
    await TestModel.deleteOne({ _id: testDoc._id })
    console.log('✅ Test document cleaned up!')
    
    console.log('🎉 MongoDB is ready for your application!')
    
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message)
    
    if (error.message.includes('authentication failed')) {
      console.log('💡 Check your username and password in the connection string')
    } else if (error.message.includes('ENOTFOUND')) {
      console.log('💡 Check your cluster URL in the connection string')
    } else if (error.message.includes('IP')) {
      console.log('💡 Add your IP address to Atlas IP Access List')
    }
  } finally {
    await mongoose.disconnect()
    console.log('🔌 Disconnected from MongoDB')
    process.exit(0)
  }
}

testMongoDB()