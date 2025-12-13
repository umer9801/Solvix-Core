// Debug the contact form email issue
const nodemailer = require('nodemailer');

async function debugContactEmail() {
  console.log('🔍 Debugging Contact Form Email Issue...');
  
  // Use the exact same configuration as the contact form
  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.yahoo.com',
    port: 587,
    secure: false,
    auth: {
      user: 'solvixcore@yahoo.com',
      pass: 'nfocsohvppkhlltx',
    },
    tls: {
      ciphers: 'SSLv3'
    }
  });

  try {
    console.log('📡 Testing SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection successful!');

    // Test admin email (same as contact form sends)
    console.log('📧 Testing admin notification email...');
    
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          🔔 New Contact Inquiry - Solvix Core
        </h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Customer Information</h3>
          <p><strong>Name:</strong> Debug Test User</p>
          <p><strong>Email:</strong> c4rigniter@gmail.com</p>
          <p><strong>Company:</strong> Test Company</p>
          <p><strong>Service:</strong> customized-websites</p>
          <p><strong>Budget:</strong> $5,000 - $10,000</p>
          <p><strong>Preferred Contact:</strong> email</p>
        </div>

        <div style="background: #fffbeb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #92400e; margin-top: 0;">Message</h3>
          <p style="line-height: 1.6;">This is a debug test message to identify email issues.</p>
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
    `;

    const adminMailOptions = {
      from: 'solvixcore@yahoo.com',
      to: 'solvixcore@yahoo.com', // Admin email
      subject: '🔔 New Contact: Debug Test User - customized-websites',
      html: adminHtml,
      replyTo: 'c4rigniter@gmail.com',
    };

    const adminResult = await transporter.sendMail(adminMailOptions);
    console.log('✅ Admin email sent successfully:', adminResult.messageId);

    // Test customer confirmation email
    console.log('📧 Testing customer confirmation email...');
    
    const customerHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2563eb; text-align: center;">Thank You for Contacting Solvix Core!</h2>
        
        <p>Dear Debug Test User,</p>
        
        <p>Thank you for reaching out to us! We have received your inquiry and our team will get back to you within 24 hours.</p>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Your Submission Details:</h3>
          <p><strong>Service:</strong> customized-websites</p>
          <p><strong>Preferred Contact:</strong> email</p>
          <p><strong>Budget Range:</strong> $5,000 - $10,000</p>
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
    `;

    const customerMailOptions = {
      from: 'solvixcore@yahoo.com',
      to: 'c4rigniter@gmail.com',
      subject: 'Thank you for contacting Solvix Core!',
      html: customerHtml,
    };

    const customerResult = await transporter.sendMail(customerMailOptions);
    console.log('✅ Customer email sent successfully:', customerResult.messageId);
    
    console.log('🎉 Both emails sent successfully!');
    console.log('📬 Check solvixcore@yahoo.com for admin notification');
    console.log('📬 Check c4rigniter@gmail.com for customer confirmation');
    
  } catch (error) {
    console.error('❌ Debug test failed:', error);
    console.log('🔍 Error details:');
    console.log('   Code:', error.code);
    console.log('   Response:', error.response);
    console.log('   Command:', error.command);
  }
}

// Run debug test
debugContactEmail();