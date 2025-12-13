// Test admin login with new password
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

async function testAdminLogin() {
  try {
    console.log('🔐 Testing Admin Login...')
    
    const loginData = {
      username: 'admin',
      password: 'solvix core'
    }
    
    console.log('📤 Attempting login with new credentials...')
    console.log('Username:', loginData.username)
    console.log('Password:', loginData.password)
    
    const response = await fetch('http://localhost:3000/api/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
    
    console.log('📡 Response status:', response.status)
    
    const result = await response.json()
    console.log('📋 Response data:', JSON.stringify(result, null, 2))
    
    if (response.ok && result.success) {
      console.log('✅ Admin login successful!')
      console.log('🎯 New admin credentials are working correctly')
      console.log('🔗 Access admin dashboard at: http://localhost:3000/admin/login')
    } else {
      console.log('❌ Admin login failed!')
      console.log('Error:', result.error)
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  }
}

// Run the test
testAdminLogin()