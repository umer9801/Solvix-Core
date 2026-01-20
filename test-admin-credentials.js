const testAdminCredentials = async () => {
  console.log('🔐 Testing Admin Credentials...\n')

  // Test different credential combinations
  const credentialTests = [
    { username: 'admin', password: 'newpassword123', description: 'Current credentials' },
    { username: 'admin', password: 'admin123', description: 'Old credentials' },
  ]

  for (const creds of credentialTests) {
    console.log(`Testing ${creds.description}: ${creds.username} / ${creds.password}`)
    
    try {
      const response = await fetch('http://localhost:3000/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: creds.username,
          password: creds.password
        })
      })

      console.log(`Response status: ${response.status}`)
      
      if (response.ok) {
        const data = await response.json()
        console.log('✅ SUCCESS! These credentials work!')
        console.log('Response:', data)
        
        // Check cookie
        const cookie = response.headers.get('set-cookie')
        if (cookie) {
          console.log('✅ Cookie set successfully')
        }
        break
      } else {
        const errorData = await response.json().catch(() => ({}))
        console.log('❌ Failed:', errorData.message || 'Unknown error')
      }
    } catch (error) {
      console.log('❌ Network error:', error.message)
    }
    console.log('---')
  }

  // Check environment variables
  console.log('\n📋 Environment Check:')
  console.log('Make sure these environment variables are set:')
  console.log('ADMIN_USER=admin')
  console.log('ADMIN_PASSWORD=newpassword123')
  console.log('JWT_SECRET=solvix-core-jwt-secret-key-2024')
  
  console.log('\n🌐 URLs to try:')
  console.log('Local: http://localhost:3000/admin/login')
  console.log('Production: https://www.solvixcore.com/admin/login')
  
  console.log('\n🔍 Troubleshooting steps:')
  console.log('1. Clear browser cache and cookies')
  console.log('2. Try incognito/private browsing mode')
  console.log('3. Check browser console for errors (F12)')
  console.log('4. Make sure development server is running (npm run dev)')
  console.log('5. Verify environment variables in .env.local')
}

// Run the test
testAdminCredentials()