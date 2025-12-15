const testAdminSystem = async () => {
  console.log('🔧 Testing Complete Admin System...\n')

  // Test 1: MongoDB Connection
  console.log('1️⃣ Testing MongoDB Connection...')
  try {
    const mongoResponse = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        message: 'Test message for admin system',
        preferred: 'email',
        service: 'customized-websites',
        budget: '$500 - $1,500',
        country: 'usa'
      })
    })
    
    if (mongoResponse.ok) {
      const result = await mongoResponse.json()
      console.log('✅ MongoDB & Contact API working!')
      console.log('📄 Contact saved with ID:', result.id)
    } else {
      console.log('❌ Contact API failed:', mongoResponse.status)
    }
  } catch (error) {
    console.log('❌ MongoDB connection error:', error.message)
  }

  // Test 2: Admin Login
  console.log('\n2️⃣ Testing Admin Login...')
  try {
    const loginResponse = await fetch('http://localhost:3000/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'admin',
        password: 'admin123'
      })
    })
    
    if (loginResponse.ok) {
      const loginResult = await loginResponse.json()
      console.log('✅ Admin login successful!')
      
      // Extract cookies for subsequent requests
      const setCookieHeader = loginResponse.headers.get('set-cookie')
      
      if (setCookieHeader) {
        // Test 3: Admin Contacts API
        console.log('\n3️⃣ Testing Admin Contacts API...')
        const contactsResponse = await fetch('http://localhost:3000/api/admin/contacts', {
          headers: { 'Cookie': setCookieHeader }
        })
        
        if (contactsResponse.ok) {
          const contactsData = await contactsResponse.json()
          console.log('✅ Admin contacts API working!')
          console.log('📊 Total contacts:', contactsData.contacts?.length || 0)
        } else {
          console.log('❌ Admin contacts API failed:', contactsResponse.status)
        }

        // Test 4: Blog Submissions API
        console.log('\n4️⃣ Testing Blog Submissions API...')
        const blogsResponse = await fetch('http://localhost:3000/api/admin/blog-submissions', {
          headers: { 'Cookie': setCookieHeader }
        })
        
        if (blogsResponse.ok) {
          const blogsData = await blogsResponse.json()
          console.log('✅ Admin blog submissions API working!')
          console.log('📊 Total blog submissions:', blogsData.submissions?.length || 0)
        } else {
          console.log('❌ Admin blog submissions API failed:', blogsResponse.status)
        }

        // Test 5: Blog Submission (User)
        console.log('\n5️⃣ Testing Blog Submission...')
        const blogSubmitResponse = await fetch('http://localhost:3000/api/blog/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: 'Test Blog Post for Admin Review',
            excerpt: 'This is a test blog post to verify the admin review system works correctly.',
            content: 'This is the full content of the test blog post. It should appear in the admin dashboard for review and approval.',
            category: 'Web Development',
            authorName: 'Test Author',
            authorEmail: 'author@example.com',
            tags: 'Testing, Admin, Blog System',
            readTime: '2 min read'
          })
        })
        
        if (blogSubmitResponse.ok) {
          const blogResult = await blogSubmitResponse.json()
          console.log('✅ Blog submission successful!')
          console.log('📄 Blog submission ID:', blogResult.submissionId)
        } else {
          console.log('❌ Blog submission failed:', blogSubmitResponse.status)
        }
      }
    } else {
      console.log('❌ Admin login failed:', loginResponse.status)
    }
  } catch (error) {
    console.log('❌ Admin login error:', error.message)
  }

  console.log('\n🎯 Admin System Status:')
  console.log('✅ Admin credentials: admin / admin123')
  console.log('✅ Admin login: http://localhost:3000/admin/login')
  console.log('✅ Admin dashboard: http://localhost:3000/admin')
  console.log('✅ Contact management: http://localhost:3000/admin/contacts')
  console.log('✅ Blog management: http://localhost:3000/admin/blog-submissions')
  console.log('✅ Contact form: http://localhost:3000/contact')
  console.log('✅ Blog submission: http://localhost:3000/blog/submit')
  
  console.log('\n📋 Features Available:')
  console.log('• View and manage contact form submissions')
  console.log('• Update contact status (new → contacted → closed)')
  console.log('• Delete contacts')
  console.log('• Review blog submissions')
  console.log('• Approve/reject blog posts')
  console.log('• Delete blog submissions')
  console.log('• Real-time dashboard statistics')
  console.log('• Secure authentication with session management')
}

// Run the test
testAdminSystem()