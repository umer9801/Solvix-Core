const testAdminLogin = async () => {
  console.log('🔐 Testing Admin Login System...\n')

  // Test with current credentials
  console.log('Testing with credentials: admin / newpassword123')
  
  try {
    const response = await fetch('http://localhost:3000/api/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'admin',
        password: 'newpassword123'
      })
    })

    console.log('Response status:', response.status)
    console.log('Response headers:', Object.fromEntries(response.headers.entries()))

    if (response.ok) {
      const data = await response.json()
      console.log('✅ Login successful!')
      console.log('Response data:', data)
      
      // Check if cookie was set
      const setCookieHeader = response.headers.get('set-cookie')
      if (setCookieHeader) {
        console.log('✅ Cookie set:', setCookieHeader)
        
        // Test accessing admin dashboard with cookie
        console.log('\n🔍 Testing admin dashboard access...')
        const dashboardResponse = await fetch('http://localhost:3000/admin', {
          headers: {
            'Cookie': setCookieHeader
          }
        })
        
        console.log('Dashboard response status:', dashboardResponse.status)
        if (dashboardResponse.ok) {
          console.log('✅ Admin dashboard accessible with cookie')
        } else {
          console.log('❌ Admin dashboard not accessible')
        }
      } else {
        console.log('❌ No cookie set in response')
      }
    } else {
      const data = await response.json().catch(() => ({}))
      console.log('❌ Login failed!')
      console.log('Error data:', data)
    }
  } catch (error) {
    console.log('❌ Login test error:', error.message)
  }

  // Test with wrong credentials
  console.log('\n🔍 Testing with wrong credentials...')
  try {
    const response = await fetch('http://localhost:3000/api/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'admin',
        password: 'wrongpassword'
      })
    })

    if (response.status === 401) {
      console.log('✅ Wrong credentials properly rejected')
    } else {
      console.log('❌ Wrong credentials not properly handled')
    }
  } catch (error) {
    console.log('❌ Wrong credentials test error:', error.message)
  }

  console.log('\n📋 Current Admin Credentials:')
  console.log('Username: admin')
  console.log('Password: newpassword123')
  console.log('Login URL: http://localhost:3000/admin/login')
  console.log('Dashboard URL: http://localhost:3000/admin')
}

// Run the test
testAdminLogin()