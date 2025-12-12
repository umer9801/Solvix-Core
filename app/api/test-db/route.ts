import { NextResponse } from "next/server"
import dbConnect from "@/lib/dbConnect"
import Contact from "@/lib/models/Contact"

export async function GET() {
  try {
    console.log('[Test DB] Testing database connection...')
    
    // Connect to MongoDB
    await dbConnect()
    console.log('[Test DB] ✅ MongoDB connected successfully')

    // Count total contacts
    const totalContacts = await Contact.countDocuments()
    console.log(`[Test DB] Total contacts in database: ${totalContacts}`)

    // Get recent contacts (last 5)
    const recentContacts = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('name email service status createdAt')
      .lean()

    console.log('[Test DB] Recent contacts:', recentContacts)

    return NextResponse.json({
      success: true,
      message: 'Database connection successful',
      stats: {
        totalContacts,
        recentContacts: recentContacts.map(contact => ({
          id: contact._id,
          name: contact.name,
          email: contact.email,
          service: contact.service,
          status: contact.status,
          createdAt: contact.createdAt
        }))
      }
    })

  } catch (error) {
    console.error('[Test DB] Error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

export async function POST() {
  try {
    console.log('[Test DB] Creating test contact...')
    
    // Connect to MongoDB
    await dbConnect()

    // Create test contact
    const testContact = new Contact({
      name: 'Test User',
      email: 'test@example.com',
      company: 'Test Company',
      service: 'ai-ml',
      budget: '$1000-$5000',
      preferred: 'email',
      message: 'This is a test contact submission to verify database functionality.',
      status: 'new'
    })

    const savedContact = await testContact.save()
    console.log(`[Test DB] ✅ Test contact created with ID: ${savedContact._id}`)

    return NextResponse.json({
      success: true,
      message: 'Test contact created successfully',
      contact: {
        id: savedContact._id,
        name: savedContact.name,
        email: savedContact.email,
        createdAt: savedContact.createdAt
      }
    })

  } catch (error) {
    console.error('[Test DB] Error creating test contact:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}