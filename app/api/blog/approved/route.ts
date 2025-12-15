import { NextRequest, NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const client = new MongoClient(uri!)

export async function GET(request: NextRequest) {
  try {
    await client.connect()
    const db = client.db('solvix-core')
    const collection = db.collection('blog-submissions')

    const approvedBlogs = await collection
      .find({ status: 'approved' })
      .sort({ approvedAt: -1 })
      .toArray()

    // Transform the data to match the blog post format
    const formattedBlogs = approvedBlogs.map((blog, index) => ({
      id: `user-${blog._id}`,
      title: blog.title,
      excerpt: blog.excerpt,
      category: blog.category,
      icon: getIconForCategory(blog.category),
      color: getColorForCategory(blog.category),
      readTime: blog.readTime || '5 min read',
      date: new Date(blog.approvedAt || blog.submittedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
      slug: blog.slug,
      featured: false, // User submissions are not featured by default
      views: blog.views || Math.floor(Math.random() * 1000) + 100, // Random views for display
      likes: blog.likes || Math.floor(Math.random() * 50) + 5,
      authorName: blog.authorName,
      authorEmail: blog.authorEmail,
      tags: blog.tags || [],
      isUserSubmission: true
    }))

    return NextResponse.json({
      success: true,
      blogs: formattedBlogs
    })

  } catch (error) {
    console.error('Error fetching approved blogs:', error)
    return NextResponse.json(
      { error: 'Failed to fetch approved blogs' },
      { status: 500 }
    )
  } finally {
    await client.close()
  }
}

function getIconForCategory(category: string) {
  const iconMap: { [key: string]: string } = {
    'AI Automation': 'Brain',
    'Digital Transformation': 'Zap',
    'Fintech': 'TrendingUp',
    'Cybersecurity': 'Shield',
    'Web Development': 'Code',
    'EdTech': 'BookOpen',
    'Startup Guide': 'Rocket',
    'Mobile Apps': 'Smartphone',
    'Database': 'Database',
    'DevOps': 'Settings',
    'Marketing': 'Target',
    'Business Strategy': 'Briefcase'
  }
  return iconMap[category] || 'FileText'
}

function getColorForCategory(category: string) {
  const colorMap: { [key: string]: string } = {
    'AI Automation': 'blue',
    'Digital Transformation': 'purple',
    'Fintech': 'green',
    'Cybersecurity': 'red',
    'Web Development': 'indigo',
    'EdTech': 'orange',
    'Startup Guide': 'pink',
    'Mobile Apps': 'teal',
    'Database': 'gray',
    'DevOps': 'slate',
    'Marketing': 'yellow',
    'Business Strategy': 'emerald'
  }
  return colorMap[category] || 'gray'
}