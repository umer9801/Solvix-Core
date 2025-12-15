import { NextRequest, NextResponse } from 'next/server'
import { MongoClient, ObjectId } from 'mongodb'
import { cookies } from 'next/headers'

const uri = process.env.MONGODB_URI
const client = new MongoClient(uri!)

async function checkAuth() {
  const cookieStore = await cookies()
  const sessionToken = cookieStore.get("admin_session")?.value
  return !!sessionToken
}

export async function GET(request: NextRequest) {
  try {
    if (!await checkAuth()) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status') || 'all'

    await client.connect()
    const db = client.db('solvixcore')
    const collection = db.collection('blog-submissions')

    let filter = {}
    if (status !== 'all') {
      filter = { status }
    }

    const submissions = await collection
      .find(filter)
      .sort({ submittedAt: -1 })
      .toArray()

    return NextResponse.json({
      success: true,
      submissions: submissions.map(submission => ({
        ...submission,
        _id: submission._id.toString()
      }))
    })

  } catch (error) {
    console.error('Error fetching blog submissions:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog submissions' },
      { status: 500 }
    )
  } finally {
    await client.close()
  }
}

export async function PATCH(request: NextRequest) {
  try {
    if (!await checkAuth()) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { submissionId, action, adminNotes } = body

    if (!submissionId || !action) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    await client.connect()
    const db = client.db('solvixcore')
    const collection = db.collection('blog-submissions')

    const updateData: any = {
      status: action,
      reviewedAt: new Date(),
      reviewedBy: 'admin',
      adminNotes: adminNotes || null
    }

    if (action === 'approved') {
      updateData.approvedAt = new Date()
    }

    const result = await collection.updateOne(
      { _id: new ObjectId(submissionId) },
      { $set: updateData }
    )

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: 'Blog submission not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: `Blog submission ${action} successfully`
    })

  } catch (error) {
    console.error('Error updating blog submission:', error)
    return NextResponse.json(
      { error: 'Failed to update blog submission' },
      { status: 500 }
    )
  } finally {
    await client.close()
  }
}

export async function DELETE(request: NextRequest) {
  try {
    if (!await checkAuth()) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { submissionId } = body

    if (!submissionId) {
      return NextResponse.json(
        { error: 'Missing submissionId' },
        { status: 400 }
      )
    }

    await client.connect()
    const db = client.db('solvixcore')
    const collection = db.collection('blog-submissions')

    const result = await collection.deleteOne({ _id: new ObjectId(submissionId) })

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: 'Blog submission not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Blog submission deleted successfully'
    })

  } catch (error) {
    console.error('Error deleting blog submission:', error)
    return NextResponse.json(
      { error: 'Failed to delete blog submission' },
      { status: 500 }
    )
  } finally {
    await client.close()
  }
}