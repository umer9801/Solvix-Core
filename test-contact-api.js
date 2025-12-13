// Test the contact API to see if emails are being sent
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

async function testContactAPI() {
  try {
    console.log('🧪 Testing Contact API...')
    
    const testData = {
      name: 'Test User',
      email: 'c4rigniter@gmail.com',
      company: 'Test Company',
      service: 'customized-websites',
      budget: '$5,000 - $10,000',
      preferred: 'email',
      message: 'This is a test message to verify email functionality.',
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
      console.log('📧 Check your email (solvixcore@yahoo.com) for notifications')
      console.log('📧 Check c4rigniter@gmail.com for confirmation email')
    } else {
      console.log('❌ Contact form submission failed!')
      console.log('Error:', result.error)
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  }
}

// Run the test
testContactAPI()