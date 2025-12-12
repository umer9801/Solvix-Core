import { Resend } from 'resend'

// Resend configuration - Much easier than Gmail!
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function sendEmailViaResend(contactData: {
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
    // Check if Resend is configured
    if (!resend || !process.env.RESEND_API_KEY) {
      return { success: false, error: 'Resend API key not configured' }
    }
    const { name, email, company, service, budget, preferred, whatsapp, message } = contactData

    // Send email to admin
    const adminEmail = await resend.emails.send({
      from: 'Solvix Core <noreply@solvixcore.com>',
      to: ['info@solvixcore.com'],
      subject: `🔔 New Contact: ${name} - ${service || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            🔔 New Contact Inquiry - Solvix Core
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Customer Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            <p><strong>Service:</strong> ${service || 'General Inquiry'}</p>
            ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
            <p><strong>Preferred Contact:</strong> ${preferred}</p>
            ${whatsapp ? `<p><strong>WhatsApp:</strong> <a href="https://wa.me/${whatsapp}">${whatsapp}</a></p>` : ''}
          </div>

          <div style="background: #fffbeb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #92400e; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <a href="mailto:${email}" style="background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 0 10px;">
              Reply via Email
            </a>
            ${whatsapp ? `
            <a href="https://wa.me/${whatsapp}" style="background: #22c55e; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 0 10px;">
              WhatsApp Chat
            </a>
            ` : ''}
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
      `,
    })

    // Send confirmation to customer
    const customerEmail = await resend.emails.send({
      from: 'Solvix Core <noreply@solvixcore.com>',
      to: [email],
      subject: 'Thank you for contacting Solvix Core!',
      html: `
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
          Email: info@solvixcore.com<br>
          WhatsApp: +1(431)5335035</p>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
            <p>This is an automated confirmation email. Please do not reply to this email.</p>
          </div>
        </div>
      `,
    })

    console.log('✅ Emails sent via Resend:', { adminEmail: adminEmail.data?.id, customerEmail: customerEmail.data?.id })
    return { success: true, adminEmail, customerEmail }

  } catch (error) {
    console.error('❌ Resend email failed:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}