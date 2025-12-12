// Discord Webhook - Instant notifications in Discord!
export async function sendDiscordNotification(contactData: {
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
    const { name, email, company, service, budget, preferred, whatsapp, message } = contactData

    const discordWebhook = process.env.DISCORD_WEBHOOK_URL
    if (!discordWebhook) {
      console.log('Discord webhook not configured')
      return { success: false, error: 'Discord webhook not configured' }
    }

    const embed = {
      title: "🔔 New Contact Form Submission",
      color: 0x2563eb, // Blue color
      fields: [
        { name: "👤 Name", value: name, inline: true },
        { name: "📧 Email", value: email, inline: true },
        { name: "🏢 Company", value: company || "Not specified", inline: true },
        { name: "🛠️ Service", value: service || "General Inquiry", inline: true },
        { name: "💰 Budget", value: budget || "Not specified", inline: true },
        { name: "📞 Preferred Contact", value: preferred, inline: true },
        { name: "📱 WhatsApp", value: whatsapp || "Not provided", inline: true },
        { name: "💬 Message", value: message.length > 1000 ? message.substring(0, 1000) + "..." : message, inline: false }
      ],
      footer: {
        text: "Solvix Core Contact Form",
        icon_url: "https://solvixcore.com/favicon.ico"
      },
      timestamp: new Date().toISOString()
    }

    const response = await fetch(discordWebhook, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: "Solvix Core Bot",
        avatar_url: "https://solvixcore.com/favicon.ico",
        embeds: [embed]
      })
    })

    if (response.ok) {
      console.log('✅ Discord notification sent successfully')
      return { success: true }
    } else {
      throw new Error(`Discord webhook failed: ${response.status}`)
    }

  } catch (error) {
    console.error('❌ Discord notification failed:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// Slack Webhook Alternative
export async function sendSlackNotification(contactData: {
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
    const { name, email, company, service, budget, preferred, whatsapp, message } = contactData

    const slackWebhook = process.env.SLACK_WEBHOOK_URL
    if (!slackWebhook) {
      console.log('Slack webhook not configured')
      return { success: false, error: 'Slack webhook not configured' }
    }

    const slackMessage = {
      text: "🔔 New Contact Form Submission",
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "🔔 New Contact Inquiry - Solvix Core"
          }
        },
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: `*Name:* ${name}` },
            { type: "mrkdwn", text: `*Email:* ${email}` },
            { type: "mrkdwn", text: `*Company:* ${company || 'Not specified'}` },
            { type: "mrkdwn", text: `*Service:* ${service || 'General Inquiry'}` },
            { type: "mrkdwn", text: `*Budget:* ${budget || 'Not specified'}` },
            { type: "mrkdwn", text: `*Preferred Contact:* ${preferred}` }
          ]
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Message:*\n${message}`
          }
        },
        {
          type: "actions",
          elements: [
            {
              type: "button",
              text: { type: "plain_text", text: "Reply via Email" },
              url: `mailto:${email}`
            },
            ...(whatsapp ? [{
              type: "button",
              text: { type: "plain_text", text: "WhatsApp Chat" },
              url: `https://wa.me/${whatsapp}`
            }] : [])
          ]
        }
      ]
    }

    const response = await fetch(slackWebhook, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(slackMessage)
    })

    if (response.ok) {
      console.log('✅ Slack notification sent successfully')
      return { success: true }
    } else {
      throw new Error(`Slack webhook failed: ${response.status}`)
    }

  } catch (error) {
    console.error('❌ Slack notification failed:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}