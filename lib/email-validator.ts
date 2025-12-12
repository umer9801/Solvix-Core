import nodemailer from 'nodemailer'

export async function validateEmailConfig() {
  try {
    console.log('[Email Validator] Testing email configuration...')
    
    // Check environment variables
    const emailUser = process.env.EMAIL_USER
    const emailPassword = process.env.EMAIL_PASSWORD
    
    if (!emailUser || !emailPassword) {
      return {
        success: false,
        error: 'Email credentials not found in environment variables',
        details: {
          EMAIL_USER: !!emailUser,
          EMAIL_PASSWORD: !!emailPassword
        }
      }
    }

    console.log(`[Email Validator] Email user: ${emailUser}`)
    console.log(`[Email Validator] Password length: ${emailPassword.length} characters`)
    
    // Determine email service
    const emailService = emailUser.includes('yahoo') ? 'yahoo' : 'gmail'
    console.log(`[Email Validator] Detected service: ${emailService}`)
    
    // Create transporter with proper Yahoo configuration
    let transporter
    
    if (emailService === 'yahoo') {
      transporter = nodemailer.createTransport({
        host: 'smtp.mail.yahoo.com',
        port: 587,
        secure: false,
        auth: {
          user: emailUser,
          pass: emailPassword,
        },
        tls: {
          ciphers: 'SSLv3'
        }
      })
    } else {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: emailUser,
          pass: emailPassword,
        },
      })
    }

    // Verify connection
    console.log('[Email Validator] Testing SMTP connection...')
    await transporter.verify()
    
    console.log('[Email Validator] ✅ SMTP connection successful')
    
    return {
      success: true,
      message: 'Email configuration is valid',
      details: {
        service: emailService,
        user: emailUser,
        passwordLength: emailPassword.length
      }
    }

  } catch (error) {
    console.error('[Email Validator] ❌ Email validation failed:', error)
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      details: {
        service: process.env.EMAIL_USER?.includes('yahoo') ? 'yahoo' : 'gmail',
        user: process.env.EMAIL_USER,
        passwordLength: process.env.EMAIL_PASSWORD?.length || 0
      }
    }
  }
}