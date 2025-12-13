// Test Yahoo email sending to Gmail address
const nodemailer = require('nodemailer');

async function testYahooToGmail() {
  console.log('🧪 Testing Yahoo Email to Gmail...');
  
  const transporter = nodemailer.createTransport({
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

    // Send test email to Gmail
    console.log('📧 Sending test email to Gmail address...');
    const info = await transporter.sendMail({
      from: 'solvixcore@yahoo.com',
      to: 'c4rigniter@gmail.com',
      subject: '🧪 Yahoo to Gmail Test - Solvix Core',
      html: `
        <h2>Yahoo to Gmail Email Test! ✅</h2>
        <p><strong>From:</strong> solvixcore@yahoo.com (Yahoo)</p>
        <p><strong>To:</strong> c4rigniter@gmail.com (Gmail)</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        <p>This email tests if Yahoo SMTP can send emails to Gmail addresses.</p>
        <hr>
        <p><em>If you receive this, cross-domain email delivery is working!</em></p>
      `
    });

    console.log('✅ Test email sent successfully to Gmail!');
    console.log('📧 Message ID:', info.messageId);
    console.log('🎉 Yahoo to Gmail email delivery is working!');
    console.log('📬 Check c4rigniter@gmail.com for the test email');
    
  } catch (error) {
    console.error('❌ Yahoo to Gmail email test failed:', error.message);
    console.log('🔧 This might be why contact form emails are failing');
    
    if (error.message.includes('550')) {
      console.log('💡 Yahoo might be blocking emails to external domains');
      console.log('💡 Try using a different SMTP service or check Yahoo settings');
    }
  }
}

// Run test
testYahooToGmail();