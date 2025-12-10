import { NextResponse } from "next/server"
import dbConnect from "@/lib/dbConnect"
import Contact from "@/lib/models/Contact"

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const status = searchParams.get('status')
    
    await dbConnect()

    // Build query
    const query: any = {}
    if (status && ['new', 'contacted', 'closed'].includes(status)) {
      query.status = status
    }

    // Get total count
    const total = await Contact.countDocuments(query)

    // Get contacts with pagination
    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip((page - 1) * limit)
      .lean()

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