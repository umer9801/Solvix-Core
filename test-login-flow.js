const testLoginFlow = async () => {
  console.log('🔐 Testing Complete Login Flow...\n')

  try {
    // Step 1: Test login API
    console.log('Step 1: Testing login API...')
    const loginResponse = await fetch('http://localhost:3000/api/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'admin',
        password: 'newpassword123'
      })
    })

    console.log('Login response status:', loginResponse.status)
    console.log('Login response headers:', Object.fromEntries(loginResponse.headers.entries()))

    if (loginResponse.ok) {
      const loginData = await loginResponse.json()
      console.log('✅ Login API successful!')
      console.log('Login data:', loginData)
      
      // Extract cookie
      const setCookieHeader = loginResponse.headers.get('set-cookie')
      if (setCookieHeader) {
        console.log('✅ Cookie set:', setCookieHeader)
        
        // Step 2: Test admin page access with cookie
        console.log('\nStep 2: Testing admin page access...')
        const adminResponse = await fetch('http://localhost:3000/admin', {
          headers: {
            'Cookie': setCookieHeader
          }
        })
        
        console.log('Admin page response status:', adminResponse.status)
        
        if (adminResponse.ok) {
          console.log('✅ Admin page accessible!')
          
          // Step 3: Test admin API access
          console.log('\nStep 3: Testing admin API access...')
          const contactsResponse = await fetch('http://localhost:3000/api/admin/contacts', {
            headers: {
              'Cookie': setCookieHeader
            }
          })
          
          console.log('Contacts API response status:', contactsResponse.status)
          
          if (contactsResponse.ok) {
            const contactsData = await contactsResponse.json()
            console.log('✅ Admin API accessible!')
            console.log('Contacts found:', contactsData.contacts?.length || 0)
          } else {
            console.log('❌ Admin API not accessible')
          }
        } else {
          console.log('❌ Admin page not accessible')
          console.log('Response headers:', Object.fromEntries(adminResponse.headers.entries()))
        }
      } else {
        console.log('❌ No cookie set in login response')
      }
    } else {
      console.log('❌ Login API failed')
      const errorData = await loginResponse.json().catch(() => ({}))
      console.log('Error data:', errorData)
    }
  } catch (error) {
    console.log('❌ Test failed:', error.message)
  }

  console.log('\n📋 Summary:')
  console.log('- Login URL: http://localhost:3000/admin/login')
  console.log('- Admin URL: http://localhost:3000/admin')
  console.log('- Credentials: admin / newpassword123')
  console.log('- Check browser console for detailed logs')
}

// Run the test
testLoginFlow()