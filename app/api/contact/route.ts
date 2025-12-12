import { NextResponse } from "next/server"
import dbConnect from "@/lib/dbConnect"
import Contact from "@/lib/models/Contact"
// Email notification imports
import { sendEmailViaResend } from "@/lib/resend-email"
import { sendEmailViaEmailJS } from "@/lib/emailjs"
import { sendSimpleEmail } from "@/lib/simple-email"
import { sendDiscordNotification, sendSlackNotification } from "@/lib/webhook-notify"
import { sendSimpleNotification, logContactToFile } from "@/lib/simple-notification"

export async function POST(req: Request) {
  try {
    console.log('[Contact API] Received new contact submission')
    
    // Parse request body
    const data = await req.json().catch(() => ({}))
    console.log('[Contact API] Request data:', JSON.stringify(data, null, 2))
    
    // Validate required fields
    const { name, email, message, preferred } = data
    
    if (!name || !email || !message || !preferred) {
      console.log('[Contact API] Missing required fields:', { name: !!name, email: !!email, message: !!message, preferred: !!preferred })
      return NextResponse.json(
        { error: "Missing required fields: name, email, message, and preferred contact method" },
        { status: 400 }
      )
    }

    // Validate WhatsApp number if preferred method is whatsapp
    if (preferred === 'whatsapp' && !data.whatsapp) {
      console.log('[Contact API] WhatsApp number missing for WhatsApp preference')
      return NextResponse.json(
        { error: "WhatsApp number is required when WhatsApp is the preferred contact method" },
        { status: 400 }
      )
    }

    // Connect to MongoDB
    console.log('[Contact API] Connecting to MongoDB...')
    await dbConnect()
    console.log('[Contact API] MongoDB connected successfully')

    // Create new contact submission
    const contactData = {
      name: data.name?.trim(),
      email: data.email?.trim().toLowerCase(),
      company: data.company?.trim() || undefined,
      service: data.service?.trim() || undefined,
      budget: data.budget?.trim() || undefined,
      preferred: data.preferred,
      whatsapp: data.whatsapp?.trim() || undefined,
      message: data.message?.trim(),
      status: 'new'
    }
    
    console.log('[Contact API] Creating contact with data:', JSON.stringify(contactData, null, 2))
    const contact = new Contact(contactData)

    // Save to database
    const savedContact = await contact.save()
    console.log(`[Contact API] ✅ Contact saved successfully with ID: ${savedContact._id}`)
    console.log(`[Contact API] Contact details: ${savedContact.name} (${savedContact.email})`)

    // Send notifications (multiple methods - at least one will work!)
    const notificationData = {
      name: data.name,
      email: data.email,
      company: data.company,
      service: data.service,
      budget: data.budget,
      preferred: data.preferred,
      whatsapp: data.whatsapp,
      message: data.message,
    }

    // Try multiple notification methods - prioritize simple email since it's configured
    console.log('[Contact] Attempting to send notifications...')
    
    const notifications = await Promise.allSettled([
      // Method 1: Simple Console Notification (Always works)
      sendSimpleNotification(notificationData),
      
      // Method 2: File Logging (Always works)
      logContactToFile(notificationData),
      
      // Method 3: Yahoo Email - Primary method (WORKING!)
      sendSimpleEmail(notificationData),
      
      // Method 4: Resend API (if configured)
      sendEmailViaResend(notificationData),
      
      // Method 5: EmailJS (if configured)
      sendEmailViaEmailJS(notificationData),
      
      // Method 6: Discord Webhook (if configured)
      sendDiscordNotification(notificationData),
      
      // Method 7: Slack Webhook (if configured)
      sendSlackNotification(notificationData)
    ])

    // Log results
    notifications.forEach((result, index) => {
      const methods = ['Console Log', 'File Log', 'Yahoo Email', 'Resend', 'EmailJS', 'Discord', 'Slack']
      if (result.status === 'fulfilled' && result.value.success) {
        console.log(`✅ [Contact] ${methods[index]} notification sent for: ${data.name}`)
        if ('service' in result.value && result.value.service) {
          console.log(`   Service used: ${result.value.service}`)
        }
        if ('method' in result.value && result.value.method) {
          console.log(`   Method: ${result.value.method}`)
        }
        if ('adminMessageId' in result.value && result.value.adminMessageId) {
          console.log(`   Admin email ID: ${result.value.adminMessageId}`)
        }
        if ('customerMessageId' in result.value && result.value.customerMessageId) {
          console.log(`   Customer email ID: ${result.value.customerMessageId}`)
        }
      } else {
        console.log(`❌ [Contact] ${methods[index]} notification failed for: ${data.name}`)
        if (result.status === 'rejected') {
          console.log(`   Error: ${result.reason}`)
        } else if (result.status === 'fulfilled' && result.value.error) {
          console.log(`   Error: ${result.value.error}`)
        }
      }
    })

    // Check if at least one notification method worked
    const successfulNotifications = notifications.filter(
      result => result.status === 'fulfilled' && result.value.success
    )

    if (successfulNotifications.length > 0) {
      console.log(`[Contact] ${successfulNotifications.length} notification(s) sent successfully`)
    } else {
      console.log(`[Contact] All notification methods failed, but form data saved to database`)
    }

    return NextResponse.json({ 
      success: true, 
      message: "Contact submission saved successfully! We'll get back to you within 24 hours.",
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
