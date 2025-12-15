import { NextRequest, NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const client = new MongoClient(uri!)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      title, 
      excerpt, 
      content, 
      category, 
      authorName, 
      authorEmail, 
      tags,
      readTime 
    } = body

    // Validate required fields
    if (!title || !excerpt || !content || !category || !authorName || !authorEmail) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(authorEmail)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    await client.connect()
    const db = client.db('solvix-core')
    const collection = db.collection('blog-submissions')

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()

    const blogSubmission = {
      title: title.trim(),
      excerpt: excerpt.trim(),
      content: content.trim(),
      category: category.trim(),
      authorName: authorName.trim(),
      authorEmail: authorEmail.toLowerCase().trim(),
      tags: tags ? tags.split(',').map((tag: string) => tag.trim()) : [],
      readTime: readTime || '5 min read',
      slug,
      status: 'pending', // Requires admin approval
      submittedAt: new Date(),
      approvedAt: null,
      approvedBy: null,
      views: 0,
      likes: 0,
      featured: false
    }

    const result = await collection.insertOne(blogSubmission)

    return NextResponse.json({
      success: true,
      message: 'Blog post submitted successfully! It will be reviewed and published soon.',
      submissionId: result.insertedId
    })

  } catch (error) {
    console.error('Blog submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit blog post' },
      { status: 500 }
    )
  } finally {
    await client.close()
  }
}