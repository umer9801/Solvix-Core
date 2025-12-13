// Test the contact API with a real email address
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

async function testRealContact() {
  try {
    console.log('🧪 Testing Contact API with real email...')
    
    const testData = {
      name: 'Solvix Test User',
      email: 'c4rigniter@gmail.com', // Using real email for testing
      company: 'Solvix Core',
      service: 'customized-websites',
      budget: '$5,000 - $10,000',
      preferred: 'email',
      message: 'This is a test message to verify the complete system functionality including database storage and email notifications.',
      country: 'canada'
    }
    
    console.log('📤 Sending test contact form submission...')
    console.log('Data:', JSON.stringify(testData, null, 2))
    
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testData)
    })
    
    console.log('📡 Response status:', response.status)
    
    const result = await response.json()
    console.log('📋 Response data:', JSON.stringify(result, null, 2))
    
    if (response.ok) {
      console.log('✅ Contact form submission successful!')
      console.log('📧 Check solvixcore@yahoo.com for admin notification')
      console.log('📧 Check c4rigniter@gmail.com for customer confirmation')
      console.log('🗄️ Contact saved to MongoDB with ID:', result.id)
    } else {
      console.log('❌ Contact form submission failed!')
      console.log('Error:', result.error)
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  }
}

// Run the test
testRealContact()