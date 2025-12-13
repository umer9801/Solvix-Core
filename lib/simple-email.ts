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

    // Professional Admin Email Content - Matching Website Design
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Inquiry - Solvix Core</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: linear-gradient(135deg, #f8faff 0%, #e0f2fe 25%, #f3e8ff 50%, #fef7cd 75%, #ffffff 100%); min-height: 100vh;">
        <div style="max-width: 600px; margin: 0 auto; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border-radius: 16px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899); padding: 32px 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
              Solvix Core
            </h1>
            <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px; font-weight: 500;">
              AI-Powered Digital Solutions
            </p>
          </div>

          <!-- Content -->
          <div style="padding: 32px 24px;">
            <div style="background: linear-gradient(135deg, #dbeafe, #e0e7ff); border-left: 4px solid #3b82f6; padding: 20px; border-radius: 12px; margin-bottom: 24px;">
              <h2 style="color: #1e40af; margin: 0 0 16px 0; font-size: 20px; font-weight: 600;">
                New Contact Inquiry Received
              </h2>
              <p style="color: #1e40af; margin: 0; font-size: 14px; opacity: 0.8;">
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

            <!-- Customer Information -->
            <div style="background: rgba(248, 250, 252, 0.8); border: 1px solid rgba(226, 232, 240, 0.8); border-radius: 12px; padding: 24px; margin-bottom: 24px;">
              <h3 style="color: #334155; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">
                Customer Information
              </h3>
              
              <div style="display: grid; gap: 12px;">
                <div style="display: flex; align-items: center; padding: 8px 0;">
                  <span style="color: #64748b; font-weight: 500; min-width: 140px; font-size: 14px;">Full Name:</span>
                  <span style="color: #1e293b; font-weight: 600; font-size: 16px;">${name}</span>
                </div>
                
                <div style="display: flex; align-items: center; padding: 8px 0;">
                  <span style="color: #64748b; font-weight: 500; min-width: 140px; font-size: 14px;">Email Address:</span>
                  <span style="color: #3b82f6; font-weight: 600; font-size: 16px;">${email}</span>
                </div>
                
                ${company ? `
                <div style="display: flex; align-items: center; padding: 8px 0;">
                  <span style="color: #64748b; font-weight: 500; min-width: 140px; font-size: 14px;">Company:</span>
                  <span style="color: #1e293b; font-weight: 600; font-size: 16px;">${company}</span>
                </div>
                ` : ''}
                
                <div style="display: flex; align-items: center; padding: 8px 0;">
                  <span style="color: #64748b; font-weight: 500; min-width: 140px; font-size: 14px;">Service Interest:</span>
                  <span style="color: #8b5cf6; font-weight: 600; font-size: 16px;">${service || 'General Inquiry'}</span>
                </div>
                
                ${budget ? `
                <div style="display: flex; align-items: center; padding: 8px 0;">
                  <span style="color: #64748b; font-weight: 500; min-width: 140px; font-size: 14px;">Budget Range:</span>
                  <span style="color: #10b981; font-weight: 600; font-size: 16px;">${budget}</span>
                </div>
                ` : ''}
                
                <div style="display: flex; align-items: center; padding: 8px 0;">
                  <span style="color: #64748b; font-weight: 500; min-width: 140px; font-size: 14px;">Preferred Contact:</span>
                  <span style="color: #1e293b; font-weight: 600; font-size: 16px;">${preferred}</span>
                </div>
                
                ${whatsapp ? `
                <div style="display: flex; align-items: center; padding: 8px 0;">
                  <span style="color: #64748b; font-weight: 500; min-width: 140px; font-size: 14px;">WhatsApp:</span>
                  <span style="color: #10b981; font-weight: 600; font-size: 16px;">${whatsapp}</span>
                </div>
                ` : ''}
              </div>
            </div>

            <!-- Message -->
            <div style="background: linear-gradient(135deg, #fef3c7, #fde68a); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 12px; padding: 24px; margin-bottom: 32px;">
              <h3 style="color: #92400e; margin: 0 0 16px 0; font-size: 18px; font-weight: 600;">
                Customer Message
              </h3>
              <div style="background: rgba(255, 255, 255, 0.7); border-radius: 8px; padding: 16px; border-left: 4px solid #f59e0b;">
                <p style="color: #78350f; margin: 0; line-height: 1.6; font-size: 15px; white-space: pre-wrap;">${message}</p>
              </div>
            </div>

            <!-- Action Buttons -->
            <div style="text-align: center; margin-bottom: 24px;">
              <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 600; font-size: 16px; margin: 0 8px 8px 0; box-shadow: 0 4px 14px rgba(59, 130, 246, 0.3);">
                Reply via Email
              </a>
              ${whatsapp ? `
              <a href="https://wa.me/${whatsapp.replace(/[^\d]/g, '')}" style="display: inline-block; background: linear-gradient(135deg, #10b981, #059669); color: white; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 600; font-size: 16px; margin: 0 8px 8px 0; box-shadow: 0 4px 14px rgba(16, 185, 129, 0.3);">
                Contact via WhatsApp
              </a>
              ` : ''}
            </div>
          </div>

          <!-- Footer -->
          <div style="background: linear-gradient(135deg, #f1f5f9, #e2e8f0); padding: 24px; text-align: center; border-top: 1px solid rgba(226, 232, 240, 0.8);">
            <p style="color: #64748b; margin: 0 0 8px 0; font-size: 14px; font-weight: 500;">
              Solvix Core - AI-Powered Digital Solutions
            </p>
            <p style="color: #94a3b8; margin: 0; font-size: 12px;">
              Email: solvixcore@yahoo.com | WhatsApp: +1(431)533-5035
            </p>
            <p style="color: #cbd5e1; margin: 8px 0 0 0; font-size: 11px;">
              This email was automatically generated from your website contact form.
            </p>
          </div>
        </div>
      </body>
      </html>
    `

    // Send email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || 'solvixcore@yahoo.com',
      subject: `New Contact Inquiry: ${name} - ${service || 'General Inquiry'}`,
      html: htmlContent,
      // Note: replyTo removed due to Yahoo SMTP restrictions with cross-domain addresses
    }

    const adminResult = await transporter.sendMail(adminMailOptions)
    console.log(`✅ Admin email sent via ${emailService}:`, adminResult.messageId)

    // Professional Customer Confirmation Email - Matching Website Design
    const customerHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You - Solvix Core</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: linear-gradient(135deg, #f8faff 0%, #e0f2fe 25%, #f3e8ff 50%, #fef7cd 75%, #ffffff 100%); min-height: 100vh;">
        <div style="max-width: 600px; margin: 0 auto; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border-radius: 16px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899); padding: 32px 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
              Solvix Core
            </h1>
            <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px; font-weight: 500;">
              AI-Powered Digital Solutions
            </p>
          </div>

          <!-- Content -->
          <div style="padding: 32px 24px;">
            <!-- Thank You Message -->
            <div style="text-align: center; margin-bottom: 32px;">
              <div style="background: linear-gradient(135deg, #dbeafe, #e0e7ff); border-radius: 50%; width: 80px; height: 80px; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);">
                <div style="color: #3b82f6; font-size: 36px; font-weight: bold;">✓</div>
              </div>
              <h2 style="color: #1e293b; margin: 0 0 12px 0; font-size: 28px; font-weight: 700;">
                Thank You, ${name}!
              </h2>
              <p style="color: #64748b; margin: 0; font-size: 18px; font-weight: 500;">
                Your inquiry has been received successfully
              </p>
            </div>

            <!-- Response Time -->
            <div style="background: linear-gradient(135deg, #ecfdf5, #d1fae5); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; text-align: center;">
              <h3 style="color: #166534; margin: 0 0 8px 0; font-size: 18px; font-weight: 600;">
                We'll Be In Touch Soon
              </h3>
              <p style="color: #15803d; margin: 0; font-size: 15px; font-weight: 500;">
                Our team will respond to your inquiry within 24 hours
              </p>
            </div>

            <!-- Submission Summary -->
            <div style="background: rgba(248, 250, 252, 0.8); border: 1px solid rgba(226, 232, 240, 0.8); border-radius: 12px; padding: 24px; margin-bottom: 24px;">
              <h3 style="color: #334155; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">
                Your Submission Summary
              </h3>
              
              <div style="display: grid; gap: 12px;">
                <div style="display: flex; align-items: center; padding: 8px 0;">
                  <span style="color: #64748b; font-weight: 500; min-width: 140px; font-size: 14px;">Service Interest:</span>
                  <span style="color: #8b5cf6; font-weight: 600; font-size: 16px;">${service || 'General Inquiry'}</span>
                </div>
                
                <div style="display: flex; align-items: center; padding: 8px 0;">
                  <span style="color: #64748b; font-weight: 500; min-width: 140px; font-size: 14px;">Preferred Contact:</span>
                  <span style="color: #1e293b; font-weight: 600; font-size: 16px;">${preferred}</span>
                </div>
                
                ${budget ? `
                <div style="display: flex; align-items: center; padding: 8px 0;">
                  <span style="color: #64748b; font-weight: 500; min-width: 140px; font-size: 14px;">Budget Range:</span>
                  <span style="color: #10b981; font-weight: 600; font-size: 16px;">${budget}</span>
                </div>
                ` : ''}
                
                <div style="display: flex; align-items: center; padding: 8px 0;">
                  <span style="color: #64748b; font-weight: 500; min-width: 140px; font-size: 14px;">Submission Date:</span>
                  <span style="color: #1e293b; font-weight: 600; font-size: 16px;">${new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric'
                  })}</span>
                </div>
              </div>
            </div>

            <!-- What Happens Next -->
            <div style="background: linear-gradient(135deg, #fef3c7, #fde68a); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 12px; padding: 24px; margin-bottom: 32px;">
              <h3 style="color: #92400e; margin: 0 0 16px 0; font-size: 18px; font-weight: 600;">
                What Happens Next?
              </h3>
              <div style="color: #78350f; font-size: 15px; line-height: 1.6;">
                <div style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                  <span style="color: #f59e0b; font-weight: bold; margin-right: 8px; font-size: 18px;">1.</span>
                  <span>Our team will review your inquiry and requirements</span>
                </div>
                <div style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                  <span style="color: #f59e0b; font-weight: bold; margin-right: 8px; font-size: 18px;">2.</span>
                  <span>We'll prepare a customized solution proposal for your needs</span>
                </div>
                <div style="display: flex; align-items: flex-start;">
                  <span style="color: #f59e0b; font-weight: bold; margin-right: 8px; font-size: 18px;">3.</span>
                  <span>You'll receive a detailed response within 24 hours</span>
                </div>
              </div>
            </div>

            <!-- Call to Action -->
            <div style="text-align: center; margin-bottom: 24px;">
              <a href="https://solvixcore.com" style="display: inline-block; background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-weight: 600; font-size: 16px; margin: 0 8px 8px 0; box-shadow: 0 4px 14px rgba(59, 130, 246, 0.3);">
                Explore Our Services
              </a>
            </div>

            <!-- Contact Information -->
            <div style="background: rgba(241, 245, 249, 0.8); border-radius: 12px; padding: 20px; text-align: center;">
              <h4 style="color: #334155; margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">
                Need Immediate Assistance?
              </h4>
              <p style="color: #64748b; margin: 0 0 12px 0; font-size: 14px;">
                Feel free to reach out to us directly:
              </p>
              <div style="color: #3b82f6; font-size: 14px; font-weight: 500;">
                <div style="margin-bottom: 4px;">Email: solvixcore@yahoo.com</div>
                <div>WhatsApp: +1(431)533-5035</div>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div style="background: linear-gradient(135deg, #f1f5f9, #e2e8f0); padding: 24px; text-align: center; border-top: 1px solid rgba(226, 232, 240, 0.8);">
            <p style="color: #64748b; margin: 0 0 8px 0; font-size: 14px; font-weight: 500;">
              Solvix Core - AI-Powered Digital Solutions
            </p>
            <p style="color: #94a3b8; margin: 0 0 8px 0; font-size: 12px;">
              Transforming businesses with cutting-edge AI automation and digital innovation
            </p>
            <p style="color: #cbd5e1; margin: 0; font-size: 11px;">
              This is an automated confirmation email. Please do not reply to this message.
            </p>
          </div>
        </div>
      </body>
      </html>
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
    const service = process.env.EMAIL_USER?.includes('yahoo') ? 'yahoo' : 'gmail'
    console.error(`❌ ${service} email failed:`, error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}