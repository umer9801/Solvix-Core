import { NextResponse } from "next/server"
import { sendSimpleEmail } from "@/lib/simple-email"
import fs from 'fs'
import path from 'path'

export async function POST(req: Request) {
  try {
    console.log('[Contact No-DB API] Received new contact submission')
    
    // Parse request body
    const data = await req.json().catch(() => ({}))
    console.log('[Contact No-DB API] Request data:', JSON.stringify(data, null, 2))
    
    // Validate required fields
    const { name, email, message, preferred } = data
    
    if (!name || !email || !message || !preferred) {
      console.log('[Contact No-DB API] Missing required fields:', { name: !!name, email: !!email, message: !!message, preferred: !!preferred })
      return NextResponse.json(
        { error: "Missing required fields: name, email, message, and preferred contact method" },
        { status: 400 }
      )
    }

    // Validate WhatsApp number if preferred method is whatsapp
    if (preferred === 'whatsapp' && !data.whatsapp) {
      console.log('[Contact No-DB API] WhatsApp number missing for WhatsApp preference')
      return NextResponse.json(
        { error: "WhatsApp number is required when WhatsApp is the preferred contact method" },
        { status: 400 }
      )
    }

    // Create contact data
    const contactData = {
      id: Date.now().toString(),
      name: data.name?.trim(),
      email: data.email?.trim().toLowerCase(),
      company: data.company?.trim() || undefined,
      service: data.service?.trim() || undefined,
      budget: data.budget?.trim() || undefined,
      preferred: data.preferred,
      whatsapp: data.whatsapp?.trim() || undefined,
      message: data.message?.trim(),
      status: 'new',
      createdAt: new Date().toISOString()
    }
    
    console.log('[Contact No-DB API] Creating contact with data:', JSON.stringify(contactData, null, 2))

    // Save to local file (temporary solution)
    try {
      const contactsFile = path.join(process.cwd(), 'contacts.json')
      let contacts = []
      
      // Read existing contacts
      if (fs.existsSync(contactsFile)) {
        const fileContent = fs.readFileSync(contactsFile, 'utf8')
        contacts = JSON.parse(fileContent)
      }
      
      // Add new contact
      contacts.push(contactData)
      
      // Save back to file
      fs.writeFileSync(contactsFile, JSON.stringify(contacts, null, 2))
      console.log(`[Contact No-DB API] ✅ Contact saved to file with ID: ${contactData.id}`)
    } catch (fileError) {
      console.error('[Contact No-DB API] File save error:', fileError)
      // Continue anyway - email is more important than file storage
    }

    // Send email notifications
    console.log('[Contact No-DB API] Attempting to send email notifications...')
    
    try {
      const emailResult = await sendSimpleEmail({
        name: data.name,
        email: data.email,
        company: data.company,
        service: data.service,
        budget: data.budget,
        preferred: data.preferred,
        whatsapp: data.whatsapp,
        message: data.message,
      })

      if (emailResult.success) {
        console.log('✅ [Contact No-DB API] Email notifications sent successfully')
        console.log(`   Admin email ID: ${emailResult.adminMessageId}`)
        console.log(`   Customer email ID: ${emailResult.customerMessageId}`)
        console.log(`   Service used: ${emailResult.service}`)
      } else {
        console.log('❌ [Contact No-DB API] Email notifications failed:', emailResult.error)
      }
    } catch (emailError) {
      console.error('[Contact No-DB API] Email error:', emailError)
    }

    return NextResponse.json({ 
      success: true, 
      message: "Contact submission received successfully! We'll get back to you within 24 hours.",
      id: contactData.id,
      note: "Using temporary file storage - please configure MongoDB for production use"
    })

  } catch (error: any) {
    console.error("[Contact No-DB API] Error:", error)
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    )
  }
}