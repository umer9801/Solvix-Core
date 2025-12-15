import { NextRequest, NextResponse } from 'next/server'
import { MongoClient, ObjectId } from 'mongodb'
import { cookies } from 'next/headers'

const uri = process.env.MONGODB_URI
const client = new MongoClient(uri!)

async function checkAuth() {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get("admin_session")?.value
  return !!sessionToken
}

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    if (!await checkAuth()) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const limit = parseInt(searchParams.get('limit') || '100')

    await client.connect()
    const db = client.db('solvixcore')
    const collection = db.collection('contacts')

    let filter = {}
    if (status && status !== 'all') {
      filter = { status }
    }

    const contacts = await collection
      .find(filter)
      .sort({ createdAt: -1 })
      .limit(limit)
      .toArray()

    return NextResponse.json({
      success: true,
      contacts: contacts.map(contact => ({
        ...contact,
        _id: contact._id.toString()
      }))
    })

  } catch (error) {
    console.error('Error fetching contacts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
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
    const { contactId, status } = body

    if (!contactId || !status) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    await client.connect()
    const db = client.db('solvixcore')
    const collection = db.collection('contacts')

    const result = await collection.updateOne(
      { _id: new ObjectId(contactId) },
      { 
        $set: { 
          status,
          updatedAt: new Date()
        }
      }
    )

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: 'Contact not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Contact status updated successfully'
    })

  } catch (error) {
    console.error('Error updating contact:', error)
    return NextResponse.json(
      { error: 'Failed to update contact' },
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
    const { contactId, contactIds } = body

    await client.connect()
    const db = client.db('solvixcore')
    const collection = db.collection('contacts')

    let result
    if (contactIds && Array.isArray(contactIds)) {
      // Bulk delete
      const objectIds = contactIds.map(id => new ObjectId(id))
      result = await collection.deleteMany({ _id: { $in: objectIds } })
    } else if (contactId) {
      // Single delete
      result = await collection.deleteOne({ _id: new ObjectId(contactId) })
    } else {
      return NextResponse.json(
        { error: 'Missing contactId or contactIds' },
        { status: 400 }
      )
    }

    return NextResponse.json({
      success: true,
      message: `${result.deletedCount} contact(s) deleted successfully`,
      deletedCount: result.deletedCount
    })

  } catch (error) {
    console.error('Error deleting contact(s):', error)
    return NextResponse.json(
      { error: 'Failed to delete contact(s)' },
      { status: 500 }
    )
  } finally {
    await client.close()
  }
}