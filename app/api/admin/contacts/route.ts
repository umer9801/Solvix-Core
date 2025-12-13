import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import dbConnect from "@/lib/dbConnect"
import Contact from "@/lib/models/Contact"

// Check admin authentication
async function checkAuth() {
  const cookieStore = await cookies()
  const sessionToken = cookieStore.get("admin_session")?.value
  return !!sessionToken // Return true if session token exists
}

export async function GET(req: Request) {
  try {
    console.log('[Admin Contacts API] Fetching contacts...')
    
    // Check authentication
    const isAuthenticated = await checkAuth()
    if (!isAuthenticated) {
      console.log('[Admin Contacts API] ❌ Unauthorized access attempt')
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }
    
    const { searchParams } = new URL(req.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '50') // Increased limit to show more contacts
    const status = searchParams.get('status')
    
    console.log('[Admin Contacts API] Query params:', { page, limit, status })
    
    await dbConnect()
    console.log('[Admin Contacts API] ✅ Database connected')

    // Build query
    const query: any = {}
    if (status && ['new', 'contacted', 'closed'].includes(status)) {
      query.status = status
    }

    console.log('[Admin Contacts API] Query filter:', query)

    // Get total count
    const total = await Contact.countDocuments(query)
    console.log(`[Admin Contacts API] Total contacts matching query: ${total}`)

    // Get contacts with pagination
    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip((page - 1) * limit)
      .lean()

    console.log(`[Admin Contacts API] ✅ Retrieved ${contacts.length} contacts`)
    console.log('[Admin Contacts API] Sample contact:', contacts[0] ? {
      id: contacts[0]._id,
      name: contacts[0].name,
      email: contacts[0].email,
      createdAt: contacts[0].createdAt
    } : 'No contacts found')

    return NextResponse.json({
      contacts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })

  } catch (error) {
    console.error("[Admin Contacts API] Error:", error)
    return NextResponse.json(
      { error: "Failed to fetch contacts" },
      { status: 500 }
    )
  }
}

// Update contact status
export async function PATCH(req: Request) {
  try {
    // Check authentication
    const isAuthenticated = await checkAuth()
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }
    const { id, status } = await req.json()

    if (!id || !status || !['new', 'contacted', 'closed'].includes(status)) {
      return NextResponse.json(
        { error: "Invalid id or status" },
        { status: 400 }
      )
    }

    await dbConnect()

    const contact = await Contact.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    )

    if (!contact) {
      return NextResponse.json(
        { error: "Contact not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({ 
      ok: true, 
      contact 
    })

  } catch (error) {
    console.error("[Admin Contacts API] Update Error:", error)
    return NextResponse.json(
      { error: "Failed to update contact" },
      { status: 500 }
    )
  }
}

// Delete contact(s)
export async function DELETE(req: Request) {
  try {
    // Check authentication
    const isAuthenticated = await checkAuth()
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }
    const { id, ids } = await req.json()

    if (!id && (!ids || !Array.isArray(ids))) {
      return NextResponse.json(
        { error: "Contact ID or IDs array is required" },
        { status: 400 }
      )
    }

    await dbConnect()

    // Single contact deletion
    if (id) {
      console.log(`[Admin] Attempting to delete contact with ID: ${id}`)
      
      const contact = await Contact.findByIdAndDelete(id)

      if (!contact) {
        console.log(`[Admin] Contact not found with ID: ${id}`)
        return NextResponse.json(
          { error: "Contact not found" },
          { status: 404 }
        )
      }

      console.log(`[Admin] Contact deleted successfully: ${contact.name} (${contact.email})`)

      return NextResponse.json({ 
        ok: true, 
        message: "Contact deleted successfully",
        deletedContact: {
          id: contact._id,
          name: contact.name,
          email: contact.email
        }
      })
    }

    // Bulk deletion
    if (ids && ids.length > 0) {
      const result = await Contact.deleteMany({ _id: { $in: ids } })

      console.log(`[Admin] Bulk deleted ${result.deletedCount} contacts`)

      return NextResponse.json({ 
        ok: true, 
        message: `${result.deletedCount} contacts deleted successfully`,
        deletedCount: result.deletedCount
      })
    }

    return NextResponse.json(
      { error: "No valid deletion criteria provided" },
      { status: 400 }
    )

  } catch (error) {
    console.error("[Admin Contacts API] Delete Error:", error)
    return NextResponse.json(
      { error: "Failed to delete contact(s)" },
      { status: 500 }
    )
  }
}