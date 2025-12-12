import { NextResponse } from "next/server"

export async function POST() {
  try {
    console.log('[Test Contact] Simulating contact form submission...')
    
    // Test contact data
    const testContactData = {
      name: 'Test Customer',
      email: 'customer@example.com',
      company: 'Test Company Ltd',
      service: 'ai-ml',
      budget: '$2000-$4000',
      preferred: 'email',
      message: 'This is a test contact form submission to verify the entire flow is working properly.'
    }

    console.log('[Test Contact] Submitting test data:', testContactData)

    // Submit to contact API
    const response = await fetch(`${process.env.VERCEL_URL || 'http://localhost:3000'}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testContactData)
    })

    const result = await response.json()
    
    console.log('[Test Contact] Contact API response:', result)

    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: 'Test contact submission successful',
        contactResult: result
      })
    } else {
      return NextResponse.json({
        success: false,
        error: 'Contact submission failed',
        details: result
      }, { status: 500 })
    }

  } catch (error) {
    console.error('[Test Contact] Error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}