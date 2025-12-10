import { NextResponse } from "next/server"
import dbConnect from "@/lib/dbConnect"
import Contact from "@/lib/models/Contact"

export async function POST(req: Request) {
  try {
    // Parse request body
    const data = await req.json().catch(() => ({}))
    
    // Validate required fields
    const { name, email, message, preferred } = data
    
    if (!name || !email || !message || !preferred) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, message, and preferred contact method" },
        { status: 400 }
      )
    }

    // Validate WhatsApp number if preferred method is whatsapp
    if (preferred === 'whatsapp' && !data.whatsapp) {
      return NextResponse.json(
        { error: "WhatsApp number is required when WhatsApp is the preferred contact method" },
        { status: 400 }
      )
    }

    // Connect to MongoDB
    await dbConnect()

    // Create new contact submission
    const contact = new Contact({
      name: data.name?.trim(),
      email: data.email?.trim().toLowerCase(),
      company: data.company?.trim() || undefined,
      service: data.service || undefined,
      budget: data.budget || undefined,
      preferred: data.preferred,
      whatsapp: data.whatsapp?.trim() || undefined,
      message: data.message?.trim(),
      status: 'new'
    })

    // Save to database
    const savedContact = await contact.save()

    console.log(`[Contact] New submission saved: ${savedContact._id}`)

    return NextResponse.json({ 
      ok: true, 
      message: "Contact submission saved successfully",
      id: savedContact._id 
    })

  } catch (error: any) {
    console.error("[Contact API] Error:", error)

    // Handle validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map((err: any) => err.message)
      return NextResponse.json(
        { error: "Validation failed", details: validationErrors },
        { status: 400 }
      )
    }

    // Handle duplicate email (if you add unique constraint later)
    if (error.code === 11000) {
      return NextResponse.json(
        { error: "A submission with this email already exists" },
        { status: 409 }
      )
    }

    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    )
  }
}
