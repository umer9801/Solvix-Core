import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import dbConnect from "@/lib/dbConnect"
import Contact from "@/lib/models/Contact"
import { sendSimpleEmail } from "@/lib/simple-email"

// Check admin authentication
async function checkAuth() {
  const cookieStore = await cookies()
  const hasAuth = cookieStore.get("admin_auth")?.value === "1"
  return hasAuth
}

export async function GET() {
  try {
    console.log('[System Test] Starting comprehensive system test...')
    
    // Check authentication
    const isAuthenticated = await checkAuth()
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const results = {
      database: { status: 'unknown', details: '' },
      contacts: { status: 'unknown', count: 0, sample: null as any },
      email: { status: 'unknown', details: '' },
      environment: {
        EMAIL_USER: !!process.env.EMAIL_USER,
        EMAIL_PASSWORD: !!process.env.EMAIL_PASSWORD,
        ADMIN_EMAIL: !!process.env.ADMIN_EMAIL,
        MONGODB_URI: !!process.env.MONGODB_URI
      }
    }

    // Test 1: Database Connection
    try {
      await dbConnect()
      results.database.status = 'connected'
      results.database.details = 'MongoDB connection successful'
      console.log('[System Test] ✅ Database connected')
    } catch (error) {
      results.database.status = 'failed'
      results.database.details = error instanceof Error ? error.message : 'Unknown error'
      console.log('[System Test] ❌ Database failed:', error)
    }

    // Test 2: Contact Collection
    try {
      const contactCount = await Contact.countDocuments({})
      const sampleContact = await Contact.findOne({}).sort({ createdAt: -1 }).lean()
      
      results.contacts.status = 'success'
      results.contacts.count = contactCount
      results.contacts.sample = sampleContact ? {
        id: sampleContact._id?.toString(),
        name: sampleContact.name,
        email: sampleContact.email,
        createdAt: sampleContact.createdAt
      } : null
      
      console.log(`[System Test] ✅ Found ${contactCount} contacts`)
    } catch (error) {
      results.contacts.status = 'failed'
      console.log('[System Test] ❌ Contact query failed:', error)
    }

    // Test 3: Email System
    try {
      const testEmailData = {
        name: 'System Test',
        email: 'test@example.com',
        message: 'This is a system test email',
        preferred: 'email' as const
      }
      
      // Don't actually send, just test the configuration
      if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
        results.email.status = 'configured'
        results.email.details = `Email configured for ${process.env.EMAIL_USER}`
      } else {
        results.email.status = 'not_configured'
        results.email.details = 'Email credentials missing'
      }
      
      console.log('[System Test] ✅ Email system checked')
    } catch (error) {
      results.email.status = 'failed'
      results.email.details = error instanceof Error ? error.message : 'Unknown error'
      console.log('[System Test] ❌ Email test failed:', error)
    }

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      results
    })

  } catch (error) {
    console.error("[System Test] Error:", error)
    return NextResponse.json(
      { error: "System test failed", details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

export async function POST() {
  try {
    console.log('[System Test] Creating test contact...')
    
    // Check authentication
    const isAuthenticated = await checkAuth()
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    await dbConnect()

    // Create a test contact
    const testContact = new Contact({
      name: 'System Test Contact',
      email: `test-${Date.now()}@example.com`,
      message: 'This is a test contact created by the system test',
      preferred: 'email',
      service: 'customized-websites',
      status: 'new'
    })

    const savedContact = await testContact.save()
    console.log('[System Test] ✅ Test contact created:', savedContact._id)

    // Try to send test email
    let emailResult = null
    try {
      emailResult = await sendSimpleEmail({
        name: testContact.name,
        email: testContact.email,
        message: testContact.message,
        preferred: 'email'
      })
    } catch (emailError) {
      console.log('[System Test] Email test failed:', emailError)
    }

    return NextResponse.json({
      success: true,
      testContact: {
        id: savedContact._id,
        name: savedContact.name,
        email: savedContact.email,
        createdAt: savedContact.createdAt
      },
      emailTest: emailResult
    })

  } catch (error) {
    console.error("[System Test] Error:", error)
    return NextResponse.json(
      { error: "Failed to create test contact", details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}