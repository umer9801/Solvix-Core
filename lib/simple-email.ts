// Simple email fallback using nodemailer with Gmail
import nodemailer from 'nodemailer'

export async function sendSimpleEmail(contactData: {
  name: string
  email: string
  company?: string
  service?: string
  budget?: string
  preferred: string
  whatsapp?: string
  message: string
}) {
  try {
    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      return { success: false, error: 'Email credentials not configured' }
    }

    // Create transporter - Support both Gmail and Yahoo
    const emailService = process.env.EMAIL_USER?.includes('yahoo') ? 'yahoo' : 'gmail'
    
    let transporter
    
    if (emailService === 'yahoo') {
      // Yahoo specific configuration with proper SMTP settings
      transporter = nodemailer.createTransport({
        host: 'smtp.mail.yahoo.com',
        port: 587,
        secure: false, // false for 587, true for 465
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD, // Yahoo App Password
        },
        tls: {
          ciphers: 'SSLv3'
        }
      })
    } else {
      // Gmail configuration
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD, // Gmail App Password
        },
      })
    }

    const { name, email, company, service, budget, preferred, whatsapp, message } = contactData

    // Email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          🔔 New Contact Inquiry - Solvix Core
        </h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Customer Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          <p><strong>Service:</strong> ${service || 'General Inquiry'}</p>
          ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
          <p><strong>Preferred Contact:</strong> ${preferred}</p>
          ${whatsapp ? `<p><strong>WhatsApp:</strong> ${whatsapp}</p>` : ''}
        </div>

        <div style="background: #fffbeb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #92400e; margin-top: 0;">Message</h3>
          <p style="line-height: 1.6;">${message}</p>
        </div>

        <p style="color: #6b7280; font-size: 14px; text-align: center;">
          📧 Sent from Solvix Core Contact Form<br>
          ${new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>
      </div>
    `

    // Send email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || 'solvixcore@yahoo.com',
      subject: `🔔 New Contact: ${name} - ${service || 'General Inquiry'}`,
      html: htmlContent,
      replyTo: email,
    }

    const adminResult = await transporter.sendMail(adminMailOptions)
    console.log(`✅ Admin email sent via ${emailService}:`, adminResult.messageId)

    // Send confirmation email to customer
    const customerHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2563eb; text-align: center;">Thank You for Contacting Solvix Core!</h2>
        
        <p>Dear ${name},</p>
        
        <p>Thank you for reaching out to us! We have received your inquiry and our team will get back to you within 24 hours.</p>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Your Submission Details:</h3>
          <p><strong>Service:</strong> ${service || 'General Inquiry'}</p>
          <p><strong>Preferred Contact:</strong> ${preferred}</p>
          ${budget ? `<p><strong>Budget Range:</strong> ${budget}</p>` : ''}
        </div>

        <div style="text-align: center; margin: 30px 0;">
          <a href="https://solvixcore.com" style="background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px;">
            Visit Our Website
          </a>
        </div>

        <p>Best regards,<br>
        <strong>Solvix Core Team</strong><br>
        Email: solvixcore@yahoo.com<br>
        WhatsApp: +1(431)5335035</p>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
          <p>This is an automated confirmation email. Please do not reply to this email.</p>
        </div>
      </div>
    `

    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Solvix Core!',
      html: customerHtml,
    }

    const customerResult = await transporter.sendMail(customerMailOptions)
    console.log(`✅ Customer confirmation email sent via ${emailService}:`, customerResult.messageId)
    
    return { 
      success: true, 
      adminMessageId: adminResult.messageId,
      customerMessageId: customerResult.messageId,
      service: emailService
    }

  } catch (error) {
    console.error(`❌ ${emailService} email failed:`, error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}