// Test admin contacts API
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

async function testAdminContacts() {
  try {
    console.log('🔐 Testing Admin Contacts API...')
    
    // First login to get authentication
    console.log('📤 Logging in as admin...')
    const loginResponse = await fetch('http://localhost:3000/api/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'admin',
        password: 'solvix core'
      })
    })
    
    if (!loginResponse.ok) {
      throw new Error('Login failed')
    }
    
    // Get cookies from login response
    const cookies = loginResponse.headers.get('set-cookie')
    console.log('✅ Login successful, cookies:', cookies)
    
    // Now test contacts API
    console.log('📤 Fetching contacts...')
    const contactsResponse = await fetch('http://localhost:3000/api/admin/contacts?limit=100', {
      method: 'GET',
      headers: {
        'Cookie': cookies || ''
      }
    })
    
    console.log('📡 Contacts API status:', contactsResponse.status)
    
    const contactsData = await contactsResponse.json()
    console.log('📋 Contacts data:', JSON.stringify(contactsData, null, 2))
    
    if (contactsResponse.ok) {
      console.log('✅ Admin contacts API working!')
      console.log(`📊 Found ${contactsData.contacts?.length || 0} contacts`)
      if (contactsData.contacts && contactsData.contacts.length > 0) {
        console.log('📝 Latest contact:', {
          name: contactsData.contacts[0].name,
          email: contactsData.contacts[0].email,
          createdAt: contactsData.contacts[0].createdAt
        })
      }
    } else {
      console.log('❌ Admin contacts API failed!')
      console.log('Error:', contactsData.error)
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  }
}

// Run the test
testAdminContacts()