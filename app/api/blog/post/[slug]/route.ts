import { NextRequest, NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const client = new MongoClient(uri!)

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await client.connect()
    const db = client.db('solvix-core')
    const collection = db.collection('blog-submissions')

    // Find the blog post by slug and ensure it's approved
    const blogPost = await collection.findOne({
      slug: params.slug,
      status: 'approved'
    })

    if (!blogPost) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      )
    }

    // Increment view count
    await collection.updateOne(
      { _id: blogPost._id },
      { $inc: { views: 1 } }
    )

    // Format the response
    const formattedPost = {
      title: blogPost.title,
      excerpt: blogPost.excerpt,
      content: blogPost.content,
      category: blogPost.category,
      authorName: blogPost.authorName,
      authorEmail: blogPost.authorEmail,
      tags: blogPost.tags || [],
      readTime: blogPost.readTime || '5 min read',
      submittedAt: blogPost.submittedAt,
      approvedAt: blogPost.approvedAt,
      views: (blogPost.views || 0) + 1,
      likes: blogPost.likes || 0
    }

    return NextResponse.json({
      success: true,
      post: formattedPost
    })

  } catch (error) {
    console.error('Error fetching blog post:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blog post' },
      { status: 500 }
    )
  } finally {
    await client.close()
  }
}