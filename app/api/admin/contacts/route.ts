import { NextResponse } from "next/server"
import dbConnect from "@/lib/dbConnect"
import Contact from "@/lib/models/Contact"

// Check if user is authenticated
function checkAuth(request: Request) {
  const cookies = request.headers.get('cookie')
  return cookies?.includes('admin_session=')
}

export async function GET(request: Request) {
  try {
    if (!checkAuth(request)) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    await dbConnect()
    
    const contacts = await Contact.find({})
      .sort({ createdAt: -1 })
      .lean()

    return NextResponse.json({ 
      success: true, 
      contacts: contacts.map(contact => ({
        ...contact,
        _id: contact._id.toString()
      }))
    })

  } catch (error) {
    console.error("Error fetching contacts:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

export async function PATCH(request: Request) {
  try {
    if (!checkAuth(request)) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { contactId, status } = await request.json()

    if (!contactId || !status) {
      return NextResponse.json({ message: "Missing contactId or status" }, { status: 400 })
    }

    await dbConnect()
    
    const contact = await Contact.findByIdAndUpdate(
      contactId,
      { status },
      { new: true }
    )

    if (!contact) {
      return NextResponse.json({ message: "Contact not found" }, { status: 404 })
    }

    return NextResponse.json({ 
      success: true, 
      contact: {
        ...contact.toObject(),
        _id: contact._id.toString()
      }
    })

  } catch (error) {
    console.error("Error updating contact:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    if (!checkAuth(request)) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const contactId = searchParams.get('id')

    if (!contactId) {
      return NextResponse.json({ message: "Missing contact ID" }, { status: 400 })
    }

    await dbConnect()
    
    const contact = await Contact.findByIdAndDelete(contactId)

    if (!contact) {
      return NextResponse.json({ message: "Contact not found" }, { status: 404 })
    }

    return NextResponse.json({ 
      success: true, 
      message: "Contact deleted successfully"
    })

  } catch (error) {
    console.error("Error deleting contact:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}