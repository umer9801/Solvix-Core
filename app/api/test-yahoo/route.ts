import { NextResponse } from "next/server"
import nodemailer from 'nodemailer'

export async function GET() {
  try {
    console.log('[Yahoo Test] Starting Yahoo email test...')
    
    // Check environment variables
    const emailUser = process.env.EMAIL_USER
    const emailPassword = process.env.EMAIL_PASSWORD
    
    console.log(`[Yahoo Test] Email User: ${emailUser}`)
    console.log(`[Yahoo Test] Password Length: ${emailPassword?.length} characters`)
    console.log(`[Yahoo Test] Password Format: ${emailPassword?.substring(0, 4)}****`)
    
    if (!emailUser || !emailPassword) {
      return NextResponse.json({
        success: false,
        error: 'Email credentials missing',
        details: {
          EMAIL_USER: !!emailUser,
          EMAIL_PASSWORD: !!emailPassword
        }
      }, { status: 400 })
    }

    // Test different Yahoo SMTP configurations
    const configs = [
      {
        name: 'Yahoo Standard',
        config: {
          host: 'smtp.mail.yahoo.com',
          port: 587,
          secure: false,
          auth: { user: emailUser, pass: emailPassword },
          tls: { ciphers: 'SSLv3' }
        }
      },
      {
        name: 'Yahoo Secure',
        config: {
          host: 'smtp.mail.yahoo.com',
          port: 465,
          secure: true,
          auth: { user: emailUser, pass: emailPassword }
        }
      },
      {
        name: 'Yahoo Plus',
        config: {
          host: 'plus.smtp.mail.yahoo.com',
          port: 587,
          secure: false,
          auth: { user: emailUser, pass: emailPassword }
        }
      }
    ]

    const results = []

    for (const { name, config } of configs) {
      try {
        console.log(`[Yahoo Test] Testing ${name} configuration...`)
        
        const transporter = nodemailer.createTransport(config)
        
        // Test connection
        await transporter.verify()
        
        console.log(`[Yahoo Test] ✅ ${name} connection successful`)
        
        // Try sending a test email
        const info = await transporter.sendMail({
          from: emailUser,
          to: emailUser, // Send to self for testing
          subject: `Test Email - ${name} Configuration`,
          html: `
            <h2>Yahoo Email Test Successful!</h2>
            <p><strong>Configuration:</strong> ${name}</p>
            <p><strong>Host:</strong> ${config.host}</p>
            <p><strong>Port:</strong> ${config.port}</p>
            <p><strong>Secure:</strong> ${config.secure}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
            <p>This email confirms that Yahoo SMTP is working correctly.</p>
          `
        })

        console.log(`[Yahoo Test] ✅ ${name} email sent: ${info.messageId}`)
        
        results.push({
          config: name,
          success: true,
          messageId: info.messageId,
          host: config.host,
          port: config.port
        })
        
        // If first config works, use it
        break
        
      } catch (error) {
        console.log(`[Yahoo Test] ❌ ${name} failed:`, error instanceof Error ? error.message : error)
        results.push({
          config: name,
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error',
          host: config.host,
          port: config.port
        })
      }
    }

    const successfulConfig = results.find(r => r.success)
    
    if (successfulConfig) {
      return NextResponse.json({
        success: true,
        message: 'Yahoo email test successful!',
        workingConfig: successfulConfig,
        allResults: results
      })
    } else {
      return NextResponse.json({
        success: false,
        error: 'All Yahoo SMTP configurations failed',
        results,
        troubleshooting: {
          steps: [
            '1. Check if 2-Step Verification is enabled in Yahoo',
            '2. Generate new App Password at: https://login.yahoo.com/account/security/app-passwords',
            '3. Update EMAIL_PASSWORD in .env.local',
            '4. Restart development server',
            '5. Try again'
          ],
          currentPassword: `${emailPassword?.substring(0, 4)}****`,
          passwordLength: emailPassword?.length
        }
      }, { status: 500 })
    }

  } catch (error) {
    console.error('[Yahoo Test] Error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}