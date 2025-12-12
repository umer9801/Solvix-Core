// Test Yahoo email configuration
const nodemailer = require('nodemailer');

async function testYahooEmail() {
  console.log('🧪 Testing Yahoo Email Configuration...');
  
  const transporter = nodemailer.createTransporter({
    host: 'smtp.mail.yahoo.com',
    port: 587,
    secure: false,
    auth: {
      user: 'solvixcore@yahoo.com',
      pass: 'nfocsohvppkhlltx'
    },
    tls: {
      ciphers: 'SSLv3'
    }
  });

  try {
    // Test connection
    console.log('📡 Testing SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection successful!');

    // Send test email
    console.log('📧 Sending test email...');
    const info = await transporter.sendMail({
      from: 'solvixcore@yahoo.com',
      to: 'solvixcore@yahoo.com',
      subject: '🧪 Yahoo Email Test - Solvix Core',
      html: `
        <h2>Yahoo Email Test Successful! ✅</h2>
        <p><strong>Configuration:</strong> Yahoo SMTP</p>
        <p><strong>Host:</strong> smtp.mail.yahoo.com</p>
        <p><strong>Port:</strong> 587</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        <p>This email confirms that Yahoo SMTP is working correctly for Solvix Core contact form.</p>
        <hr>
        <p><em>Both admin and customer emails will now work properly!</em></p>
      `
    });

    console.log('✅ Test email sent successfully!');
    console.log('📧 Message ID:', info.messageId);
    console.log('🎉 Yahoo email configuration is working perfectly!');
    
  } catch (error) {
    console.error('❌ Yahoo email test failed:', error.message);
    console.log('🔧 Troubleshooting steps:');
    console.log('1. Check if 2-Step Verification is enabled');
    console.log('2. Verify app password: nfocsohvppkhlltx');
    console.log('3. Check network connection');
  }
}

// Run test if this file is executed directly
if (require.main === module) {
  testYahooEmail();
}

module.exports = { testYahooEmail };