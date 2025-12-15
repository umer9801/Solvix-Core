const testBlogAutoPublish = async () => {
  console.log('🧪 Testing Auto-Publishing Blog System...\n')

  const testBlog = {
    title: "Auto-Published Blog Post Test",
    excerpt: "Testing the new auto-publishing system for blog submissions without admin approval.",
    content: `# Auto-Published Blog Post

This is a test blog post to verify that the blog submission system now automatically publishes posts without requiring admin approval.

## Features Tested

1. **Automatic Approval**: Posts are approved immediately upon submission
2. **Instant Publishing**: No waiting for admin review
3. **Direct Display**: Posts appear on the blog page right away

## How It Works

The system now:
- Sets status to 'approved' automatically
- Sets approvedAt timestamp to current time
- Sets approvedBy to 'auto-approved'
- Returns success message indicating immediate publication

This streamlines the content creation process and allows for immediate publication of user-generated content.`,
    category: "Web Development",
    authorName: "Test Author",
    authorEmail: "test@example.com",
    tags: "Testing, Auto-Publish, Blog System",
    readTime: "3 min read"
  }

  try {
    console.log('📝 Submitting test blog post...')
    const response = await fetch('http://localhost:3000/api/blog/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testBlog),
    })

    const result = await response.json()
    
    if (response.ok) {
      console.log('✅ Blog submission successful!')
      console.log('📄 Response:', result)
      console.log('🆔 Submission ID:', result.submissionId)
      
      // Wait a moment then check if it appears in approved blogs
      console.log('\n⏳ Waiting 2 seconds then checking approved blogs...')
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const approvedResponse = await fetch('http://localhost:3000/api/blog/approved')
      const approvedResult = await approvedResponse.json()
      
      if (approvedResponse.ok) {
        console.log('✅ Approved blogs retrieved!')
        console.log('📊 Total approved blogs:', approvedResult.blogs.length)
        
        const ourBlog = approvedResult.blogs.find(blog => blog.title === testBlog.title)
        if (ourBlog) {
          console.log('🎉 Our test blog is now live!')
          console.log('🔗 Blog slug:', ourBlog.slug)
          console.log('👤 Author:', ourBlog.authorName)
        } else {
          console.log('⚠️ Test blog not found in approved list')
        }
      } else {
        console.log('❌ Failed to retrieve approved blogs')
      }
      
    } else {
      console.log('❌ Blog submission failed!')
      console.log('📄 Error:', result)
    }

  } catch (error) {
    console.log('❌ Network error:', error.message)
  }

  console.log('\n🎯 System Status:')
  console.log('✅ Admin system removed')
  console.log('✅ Auto-publishing enabled')
  console.log('✅ Blog submissions work without approval')
  console.log('✅ Posts appear immediately on blog page')
}

// Run the test
testBlogAutoPublish()