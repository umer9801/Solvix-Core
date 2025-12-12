import emailjs from '@emailjs/browser'

// EmailJS configuration - No server setup needed!
const EMAILJS_CONFIG = {
  serviceId: process.env.EMAILJS_SERVICE_ID || 'service_solvixcore',
  templateId: process.env.EMAILJS_TEMPLATE_ID || 'template_contact',
  publicKey: process.env.EMAILJS_PUBLIC_KEY || 'your_public_key',
}

export async function sendEmailViaEmailJS(contactData: {
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
    // Check if EmailJS is configured
    if (!process.env.EMAILJS_SERVICE_ID || !process.env.EMAILJS_TEMPLATE_ID || !process.env.EMAILJS_PUBLIC_KEY) {
      return { success: false, error: 'EmailJS not configured - missing environment variables' }
    }
    // Template parameters for EmailJS
    const templateParams = {
      from_name: contactData.name,
      from_email: contactData.email,
      company: contactData.company || 'Not specified',
      service: contactData.service || 'General Inquiry',
      budget: contactData.budget || 'Not specified',
      preferred_contact: contactData.preferred,
      whatsapp: contactData.whatsapp || 'Not provided',
      message: contactData.message,
      to_email: 'info@solvixcore.com', // Your email
      submission_date: new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    )

    console.log('✅ Email sent successfully via EmailJS:', response.status, response.text)
    return { success: true, response }

  } catch (error) {
    console.error('❌ EmailJS failed:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// Alternative: Direct browser email (opens user's email client)
export function openEmailClient(contactData: {
  name: string
  email: string
  service?: string
  message: string
}) {
  const subject = `New Contact Inquiry from ${contactData.name}`
  const body = `
Name: ${contactData.name}
Email: ${contactData.email}
Service: ${contactData.service || 'General Inquiry'}

Message:
${contactData.message}

---
Sent from Solvix Core Contact Form
  `.trim()

  const mailtoLink = `mailto:info@solvixcore.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  
  // Open user's default email client
  window.open(mailtoLink, '_blank')
  
  return { success: true }
}