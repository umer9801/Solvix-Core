import { NextResponse } from "next/server"
import { sendSimpleEmail } from "@/lib/simple-email"
import { validateEmailConfig } from "@/lib/email-validator"

export async function GET() {
  try {
    console.log('[Test Email] Starting email configuration test...')
    
    // First validate email configuration
    const configValidation = await validateEmailConfig()
    
    if (!configValidation.success) {
      console.log('❌ [Test Email] Email configuration invalid:', configValidation.error)
      return NextResponse.json({
        success: false,
        error: 'Email configuration invalid',
        details: configValidation
      }, { status: 500 })
    }
    
    console.log('✅ [Test Email] Email configuration valid, proceeding with test email...')
    
    // Test email data
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      company: 'Test Company',
      service: 'ai-ml',
      budget: '$1000-$5000',
      preferred: 'email' as const,
      whatsapp: '+1234567890',
      message: 'This is a test email to verify the email configuration is working properly.'
    }

    // Try sending test email
    const result = await sendSimpleEmail(testData)
    
    if (result.success) {
      console.log('✅ [Test Email] Email test successful')
      return NextResponse.json({
        success: true,
        message: 'Email test successful',
        configValidation,
        emailResult: {
          service: result.service,
          adminMessageId: result.adminMessageId,
          customerMessageId: result.customerMessageId
        }
      })
    } else {
      console.log('❌ [Test Email] Email test failed:', result.error)
      return NextResponse.json({
        success: false,
        error: result.error,
        configValidation
      }, { status: 500 })
    }

  } catch (error) {
    console.error('[Test Email] Error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}