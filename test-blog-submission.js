const testBlogSubmission = async () => {
  console.log('🧪 Testing Blog Submission System...\n')

  const testBlog = {
    title: "Getting Started with Next.js 14: A Complete Guide",
    excerpt: "Learn how to build modern web applications with Next.js 14, including server components, app router, and performance optimization techniques.",
    content: `# Getting Started with Next.js 14

Next.js 14 introduces several exciting features that make building React applications even more powerful and efficient. In this comprehensive guide, we'll explore the key features and how to get started.

## What's New in Next.js 14

### 1. Turbopack (Beta)
Next.js 14 includes Turbopack in beta, which provides:
- 53% faster local server startup
- 94% faster code updates with Fast Refresh

### 2. Server Actions (Stable)
Server Actions are now stable and provide a seamless way to handle form submissions and server-side logic:

\`\`\`javascript
async function createPost(formData) {
  'use server'
  
  const title = formData.get('title')
  const content = formData.get('content')
  
  // Save to database
  await db.posts.create({ title, content })
}
\`\`\`

### 3. Partial Prerendering (Preview)
This experimental feature combines the benefits of static and dynamic rendering.

## Getting Started

### Installation
\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

### Project Structure
- \`app/\` - App Router directory
- \`components/\` - Reusable components
- \`lib/\` - Utility functions
- \`public/\` - Static assets

## Best Practices

1. **Use Server Components by Default**
   - Better performance
   - Reduced bundle size
   - SEO benefits

2. **Implement Proper Error Handling**
   - Use error.tsx files
   - Implement fallback UI
   - Log errors appropriately

3. **Optimize Images**
   - Use next/image component
   - Implement proper alt text
   - Consider lazy loading

## Performance Tips

- Use dynamic imports for code splitting
- Implement proper caching strategies
- Optimize your database queries
- Use streaming for better UX

## Conclusion

Next.js 14 provides powerful tools for building modern web applications. By following these best practices and leveraging the new features, you can create fast, scalable, and maintainable applications.

Happy coding! 🚀`,
    category: "Web Development",
    authorName: "John Developer",
    authorEmail: "john@example.com",
    tags: "Next.js, React, Web Development, JavaScript, Performance",
    readTime: "8 min read"
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
    } else {
      console.log('❌ Blog submission failed!')
      console.log('📄 Error:', result)
    }

  } catch (error) {
    console.log('❌ Network error:', error.message)
  }

  console.log('\n🔍 Testing blog retrieval...')
  
  try {
    const response = await fetch('http://localhost:3000/api/blog/approved')
    const result = await response.json()
    
    if (response.ok) {
      console.log('✅ Blog retrieval successful!')
      console.log('📊 Total approved blogs:', result.blogs.length)
      result.blogs.forEach((blog, index) => {
        console.log(`${index + 1}. ${blog.title} by ${blog.authorName}`)
      })
    } else {
      console.log('❌ Blog retrieval failed!')
      console.log('📄 Error:', result)
    }
  } catch (error) {
    console.log('❌ Network error:', error.message)
  }
}

// Run the test
testBlogSubmission()